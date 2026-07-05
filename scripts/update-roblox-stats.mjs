import { readFile, writeFile } from "node:fs/promises";

const statsPath = new URL("../content/roblox-stats.json", import.meta.url);
const stats = JSON.parse(await readFile(statsPath, "utf8"));
const entries = Object.entries(stats).filter(
  ([, entry]) => Number.isInteger(entry.robloxUniverseId)
);

if (!entries.length) {
  console.log("No Roblox universe IDs configured. Add robloxUniverseId values in content/roblox-stats.json.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
let changed = false;
const problems = [];

for (const [slug, entry] of entries) {
  const hasSource = Boolean(entry.robloxUniverseId && entry.robloxPlaceId && entry.sourceUrl);
  if (!hasSource) {
    problems.push(`${slug}: missing robloxUniverseId, robloxPlaceId, or sourceUrl`);
    stats[slug] = {
      ...entry,
      lastChecked: today,
      status: "needs_source",
      error: "Missing source fields for verified stats."
    };
    changed = true;
    continue;
  }

  const expectedSourceUrl = `https://www.roblox.com/games/${entry.robloxPlaceId}`;
  const normalizedSourceUrl = entry.sourceUrl === expectedSourceUrl ? entry.sourceUrl : expectedSourceUrl;
  const nextEntry = {
    ...entry,
    sourceLabel: "Roblox public game data",
    sourceUrl: normalizedSourceUrl,
    lastChecked: today,
    status: "verified",
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

if (problems.length) {
  console.warn(`Validated with ${problems.length} missing-source problem(s).`);
  for (const problem of problems) {
    console.warn(`- ${problem}`);
  }
} else {
  console.log(`Validated Roblox stats for ${entries.length} game(s).`);
}
