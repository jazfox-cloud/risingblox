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
const now = new Date().toISOString();
const universeIds = entries.map(([, entry]) => entry.robloxUniverseId).join(",");
const gameUrl = `https://games.roblox.com/v1/games?universeIds=${universeIds}`;
const voteUrl = `https://games.roblox.com/v1/games/votes?universeIds=${universeIds}`;

async function fetchJson(url, label) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${label} API failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

let gameData;
let voteData;

try {
  [gameData, voteData] = await Promise.all([
    fetchJson(gameUrl, "Roblox game"),
    fetchJson(voteUrl, "Roblox vote")
  ]);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  throw new Error(`Roblox public stats refresh failed: ${message}`);
}

const gamesByUniverseId = new Map(
  (gameData.data ?? []).map((item) => [item.id, item])
);
const votesByUniverseId = new Map(
  (voteData.data ?? []).map((item) => [item.id, item])
);

let changed = false;

for (const [slug, entry] of entries) {
  const game = gamesByUniverseId.get(entry.robloxUniverseId);
  const votes = votesByUniverseId.get(entry.robloxUniverseId);

  if (!game) {
    const nextEntry = {
      ...entry,
      lastChecked: today,
      status: "error",
      error: "Universe ID was not returned by Roblox games API."
    };

    if (JSON.stringify(nextEntry) !== JSON.stringify(entry)) {
      stats[slug] = nextEntry;
      changed = true;
    }
    continue;
  }

  const nextEntry = {
    ...entry,
    sourceLabel: "Roblox public game data",
    sourceUrl: game.canonicalUrlPath
      ? `https://www.roblox.com${game.canonicalUrlPath}`
      : entry.robloxPlaceId
        ? `https://www.roblox.com/games/${entry.robloxPlaceId}`
        : entry.sourceUrl,
    lastChecked: today,
    status: "verified",
    onlinePlayers: game.playing,
    visits: game.visits,
    upVotes: votes?.upVotes ?? null,
    downVotes: votes?.downVotes ?? null,
    updatedAt: game.updated,
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
console.log(`Updated Roblox stats for ${entries.length} game(s).`);
