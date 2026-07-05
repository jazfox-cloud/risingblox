import { readFile, writeFile } from "node:fs/promises";

const statsPath = new URL("../content/roblox-stats.json", import.meta.url);
const stats = JSON.parse(await readFile(statsPath, "utf8"));
const entries = Object.entries(stats).filter(
  ([, entry]) => Number.isInteger(entry.robloxUniverseId) && Number.isInteger(entry.robloxPlaceId)
);

if (!entries.length) {
  console.log("No Roblox universe IDs configured. Add robloxUniverseId and robloxPlaceId values in content/roblox-stats.json.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const now = new Date().toISOString();

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function toNumberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function findFirstValue(node, keys) {
  const targetKeys = new Set(keys);
  const stack = [node];
  const seen = new Set();

  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== "object" || seen.has(current)) continue;
    seen.add(current);

    if (Array.isArray(current)) {
      for (const item of current) stack.push(item);
      continue;
    }

    for (const [key, value] of Object.entries(current)) {
      if (targetKeys.has(key) && value != null) return value;
      if (value && typeof value === "object") stack.push(value);
    }
  }

  return null;
}

function findAllObjects(node) {
  const stack = [node];
  const seen = new Set();
  const objects = [];

  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== "object" || seen.has(current)) continue;
    seen.add(current);
    objects.push(current);

    if (Array.isArray(current)) {
      for (const item of current) stack.push(item);
      continue;
    }

    for (const value of Object.values(current)) {
      if (value && typeof value === "object") stack.push(value);
    }
  }

  return objects;
}

function extractEmbeddedJson(html) {
  const patterns = [
    /<script[^>]+id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i,
    /<script[^>]+type="application\/json"[^>]*>([\s\S]*?)<\/script>/i
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      const parsed = safeJsonParse(match[1]);
      if (parsed) return parsed;
    }
  }

  return null;
}

function extractStatsFromHtml(html, entry) {
  const embedded = extractEmbeddedJson(html);
  const candidates = embedded ? [embedded, ...findAllObjects(embedded)] : [];
  const blob = normalizeWhitespace(html);

  const universeId = String(entry.robloxUniverseId);
  const placeId = String(entry.robloxPlaceId);

  const directCandidate =
    candidates.find((candidate) => String(findFirstValue(candidate, ["universeId", "universeID", "id"])) === universeId) ??
    candidates.find((candidate) => String(findFirstValue(candidate, ["placeId", "placeID", "id"])) === placeId) ??
    embedded;

  const onlinePlayers = toNumberOrNull(
    findFirstValue(directCandidate ?? {}, ["playing", "activePlayers", "onlinePlayers", "currentPlayers"])
  );
  const visits = toNumberOrNull(
    findFirstValue(directCandidate ?? {}, ["visits", "placeVisits", "visitCount", "visitTotal"])
  );
  const upVotes = toNumberOrNull(
    findFirstValue(directCandidate ?? {}, ["upVotes", "upvotes", "likes", "likeCount"])
  );
  const downVotes = toNumberOrNull(
    findFirstValue(directCandidate ?? {}, ["downVotes", "downvotes", "dislikes", "dislikeCount"])
  );
  const updatedAt =
    findFirstValue(directCandidate ?? {}, ["updated", "updatedAt", "lastUpdated", "lastUpdate"]) ??
    null;

  const titleMatch = blob.match(/"[Tt]itle":"([^"]+)"/);
  const placeSlugMatch = blob.match(/\/games\/\d+\/([^"?#]+)/);

  return {
    sourceUrl: `https://www.roblox.com/games/${entry.robloxPlaceId}${placeSlugMatch?.[1] ? `/${placeSlugMatch[1]}` : ""}`,
    onlinePlayers,
    visits,
    upVotes,
    downVotes,
    updatedAt: typeof updatedAt === "string" ? updatedAt : null
  };
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
    }
  });

  if (!response.ok) {
    throw new Error(`Roblox page request failed: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

let changed = false;
const errors = [];

for (const [slug, entry] of entries) {
  const url = `https://www.roblox.com/games/${entry.robloxPlaceId}`;

  let html;
  try {
    html = await fetchHtml(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    errors.push(`${slug}: ${message}`);
    stats[slug] = {
      ...entry,
      lastChecked: today,
      status: "error",
      error: message
    };
    changed = true;
    continue;
  }

  const scraped = extractStatsFromHtml(html, entry);
  const nextEntry = {
    ...entry,
    sourceLabel: "Roblox game page HTML",
    sourceUrl: scraped.sourceUrl,
    lastChecked: today,
    status: "verified",
    onlinePlayers: scraped.onlinePlayers,
    visits: scraped.visits,
    upVotes: scraped.upVotes,
    downVotes: scraped.downVotes,
    updatedAt: scraped.updatedAt,
    fetchedAt: now,
    error: null
  };

  if (JSON.stringify(nextEntry) !== JSON.stringify(entry)) {
    stats[slug] = nextEntry;
    changed = true;
  }
}

if (!changed) {
  console.log(`Validated Roblox stats for ${entries.length} game(s).`);
  process.exit(0);
}

await writeFile(statsPath, `${JSON.stringify(stats, null, 2)}\n`);

if (errors.length) {
  console.warn(`Updated Roblox stats with ${errors.length} error(s).`);
  for (const error of errors) {
    console.warn(`- ${error}`);
  }
} else {
  console.log(`Updated Roblox stats for ${entries.length} game(s).`);
}
