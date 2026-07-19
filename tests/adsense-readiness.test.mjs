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
  assert.match(privacy, /does not currently load Google Analytics, Google AdSense/);
  assert.match(privacy, /Google-certified CMP/);
  assert.match(privacy, /It is not active now/);
  assert.match(read("components/PrivacyChoicesLink.tsx"), /showRevocationMessage/);
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

test("the repository contains no AdSense integration placeholders", () => {
  const source = [
    read("app/layout.tsx"),
    read("app/privacy/page.tsx"),
    read("components/PrivacyChoicesLink.tsx")
  ].join("\n");
  assert.doesNotMatch(source, /ca-pub-\d+/i);
  assert.doesNotMatch(source, /pagead2\.googlesyndication\.com/i);
  assert.doesNotMatch(source, /adsbygoogle/i);
});
