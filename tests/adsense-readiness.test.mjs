import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

test("Grow a Garden 2 has a source-backed guide instead of the MVP fallback", () => {
  const games = read("content/games.ts");
  assert.match(games, /guideTitle: "Grow a Garden 2 Beginner Guide/);
  assert.match(games, /guideLastVerified: "2026-07-19"/);
  assert.match(games, /97598239454123\/Grow-a-Garden-2/);
  assert.doesNotMatch(games, /Grow a Garden 2[\s\S]{0,500}MVP guide/);
});

test("empty code pages are noindex and absent from the sitemap", () => {
  const codesPage = read("app/codes/[slug]/page.tsx");
  const animalCodes = read("app/codes/animal-hospital-anomaly/page.tsx");
  const sitemap = read("app/sitemap.ts");
  assert.match(codesPage, /robots: hasIndexableCodes\(game\)/);
  assert.match(codesPage, /index: false, follow: true/);
  assert.match(animalCodes, /robots: \{ index: false, follow: true \}/);
  assert.match(sitemap, /hasIndexableCodes\(game\)/);
  assert.doesNotMatch(sitemap, /codes\/animal-hospital-anomaly/);
});

test("privacy and trust surfaces match the staged integration state", () => {
  const layout = read("app/layout.tsx");
  for (const href of [
    "/about/",
    "/contact/",
    "/privacy/",
    "/privacy/#privacy-choices",
    "/terms/",
    "/disclaimer/",
    "/sources/"
  ]) {
    assert.ok(layout.includes(`href="${href}"`), `missing footer link ${href}`);
  }

  const privacy = read("app/privacy/page.tsx");
  assert.match(privacy, /Google Analytics 4/);
  assert.match(privacy, /analytics consent is granted/);
  assert.match(privacy, /has integrated Google AdSense/);
  assert.match(privacy, /Google-certified CMP/);
  assert.match(privacy, /certified advertising CMP is not yet active/);
  assert.match(privacy, /not a certified advertising CMP/);
  assert.match(read("components/PrivacyChoicesLink.tsx"), /showRevocationMessage/);
});

test("GA4 analytics uses consent mode and the approved production stream", () => {
  const layout = read("app/layout.tsx");
  const provider = read("components/AnalyticsProvider.tsx");
  const trackedLink = read("components/TrackedContentLink.tsx");
  const allSource = `${layout}\n${provider}\n${trackedLink}`;
  const measurementIds = allSource.match(/G-[A-Z0-9]+/g) ?? [];

  assert.deepEqual([...new Set(measurementIds)], ["G-BTYFTBCGLV"]);
  assert.match(layout, /gtag\('consent', 'default'/);
  for (const key of [
    "analytics_storage",
    "ad_storage",
    "ad_user_data",
    "ad_personalization"
  ]) {
    assert.match(layout, new RegExp(`${key}: 'denied'`));
    assert.match(provider, new RegExp(`${key}:`));
  }
  assert.match(provider, /canonicalHost = "risingblox\.com"/);
  assert.match(provider, /window\.location\.hostname === canonicalHost/);
  assert.match(provider, /dataLayer\.push\(arguments\)/);
  assert.doesNotMatch(provider, /dataLayer\.push\(args\)/);
  assert.match(provider, /allow_google_signals: false/);
  assert.match(provider, /allow_ad_personalization_signals: false/);
  assert.match(trackedLink, /select_content/);
  assert.match(trackedLink, /outbound_click/);
  assert.match(trackedLink, /content_slug/);
});

test("error and interactive areas are marked as future ad-exclusion zones", () => {
  for (const file of [
    "app/layout.tsx",
    "app/not-found.tsx",
    "app/codes/[slug]/page.tsx",
    "app/codes/animal-hospital-anomaly/page.tsx"
  ]) {
    assert.match(read(file), /data-ad-exclusion-zone=/, `${file} lacks exclusion marker`);
  }
});

test("AdSense account verification is configured site-wide", () => {
  const layout = read("app/layout.tsx");
  const adsTxt = read("public/ads.txt").trim();
  assert.match(layout, /google-adsense-account/);
  assert.match(layout, /ca-pub-2134598094429002/);
  assert.match(layout, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-2134598094429002/);
  assert.match(layout, /crossOrigin="anonymous"/);
  assert.equal(adsTxt, "google.com, pub-2134598094429002, DIRECT, f08c47fec0942fa0");
});
