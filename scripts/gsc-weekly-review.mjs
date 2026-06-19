import { readFile } from "node:fs/promises";
import crypto from "node:crypto";

const credentialPath =
  process.env.GSC_SERVICE_ACCOUNT_PATH ??
  "/Users/jazfox/.config/risingblox/gsc-service-account.json";
const siteUrl = process.env.GSC_SITE_URL ?? "sc-domain:risingblox.com";

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function daysAgo(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - days);
  return date;
}

function base64url(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

async function getAccessToken() {
  const key = JSON.parse(await readFile(credentialPath, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  };
  const unsigned = `${base64url(header)}.${base64url(payload)}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsigned)
    .sign(key.private_key, "base64url");
  const assertion = `${unsigned}.${signature}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`OAuth failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function querySearchAnalytics(accessToken, body) {
  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      siteUrl
    )}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Search Analytics failed: ${JSON.stringify(data)}`);
  }
  return data.rows ?? [];
}

function summarizeRows(rows, keys) {
  return rows.slice(0, 15).map((row) => {
    const labels = Object.fromEntries(keys.map((key, index) => [key, row.keys?.[index] ?? ""]));
    return {
      ...labels,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: `${(row.ctr * 100).toFixed(1)}%`,
      position: row.position.toFixed(1)
    };
  });
}

function makeRecommendations(queryRows, pageRows) {
  const recommendations = [];
  const lowCtr = pageRows.filter((row) => row.impressions >= 10 && row.ctr < 0.02);
  const expansionQueries = queryRows.filter(
    (row) =>
      row.impressions >= 5 &&
      /(tier|unit|wiki|update|codes?|guide|discord|best|how to)/i.test(row.keys?.[0] ?? "")
  );

  if (lowCtr.length) {
    recommendations.push(
      "Refresh titles/meta for pages with impressions but CTR below 2%."
    );
  }
  if (expansionQueries.length) {
    recommendations.push(
      "Review query intents for possible new sections or pages: tier list, wiki, update, codes, or beginner guide."
    );
  }
  if (!queryRows.length && !pageRows.length) {
    recommendations.push(
      "No Search Console rows returned yet. Keep sitemap submitted and wait for impressions before expanding thin pages."
    );
  }
  if (!recommendations.length) {
    recommendations.push(
      "Keep monitoring. No urgent SEO action triggered by current thresholds."
    );
  }
  return recommendations;
}

const accessToken = await getAccessToken();
const startDate = process.env.GSC_START_DATE ?? formatDate(daysAgo(28));
const endDate = process.env.GSC_END_DATE ?? formatDate(daysAgo(2));

const baseBody = {
  startDate,
  endDate,
  searchType: "web",
  rowLimit: 100
};

const [queryRows, pageRows, queryPageRows] = await Promise.all([
  querySearchAnalytics(accessToken, {
    ...baseBody,
    dimensions: ["query"],
    orderBy: [{ field: "impressions", descending: true }]
  }),
  querySearchAnalytics(accessToken, {
    ...baseBody,
    dimensions: ["page"],
    orderBy: [{ field: "impressions", descending: true }]
  }),
  querySearchAnalytics(accessToken, {
    ...baseBody,
    dimensions: ["query", "page"],
    orderBy: [{ field: "impressions", descending: true }]
  })
]);

const report = {
  siteUrl,
  dateRange: { startDate, endDate },
  topQueries: summarizeRows(queryRows, ["query"]),
  topPages: summarizeRows(pageRows, ["page"]),
  topQueryPages: summarizeRows(queryPageRows, ["query", "page"]),
  recommendations: makeRecommendations(queryRows, pageRows)
};

console.log(JSON.stringify(report, null, 2));
