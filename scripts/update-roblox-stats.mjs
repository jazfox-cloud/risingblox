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
const universeIds = entries.map(([, entry]) => entry.robloxUniverseId).join(",");
const gameUrl = `https://games.roblox.com/v1/games?universeIds=${universeIds}`;
const voteUrl = `https://games.roblox.com/v1/games/votes?universeIds=${universeIds}`;

let gameResponse;
let voteResponse;

try {
  [gameResponse, voteResponse] = await Promise.all([
    fetch(gameUrl),
    fetch(voteUrl)
  ]);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  if (message.includes("getaddrinfo ENOTFOUND") || message.includes("fetch failed")) {
    console.error("Roblox API is unreachable right now. Check network access to games.roblox.com and rerun the refresh.");
    process.exit(1);
  }
  throw error;
}

if (!gameResponse.ok) {
  throw new Error(`Roblox game API failed: ${gameResponse.status} ${gameResponse.statusText}`);
}

if (!voteResponse.ok) {
  throw new Error(`Roblox vote API failed: ${voteResponse.status} ${voteResponse.statusText}`);
}

const gameData = await gameResponse.json();
const voteData = await voteResponse.json();
const gamesByUniverseId = new Map(
  (gameData.data ?? []).map((item) => [item.id, item])
);
const votesByUniverseId = new Map(
  (voteData.data ?? []).map((item) => [item.id, item])
);

for (const [slug, entry] of entries) {
  const game = gamesByUniverseId.get(entry.robloxUniverseId);
  const votes = votesByUniverseId.get(entry.robloxUniverseId);

  if (!game) {
    stats[slug] = {
      ...entry,
      lastChecked: today,
      status: "error",
      error: "Universe ID was not returned by Roblox games API."
    };
    continue;
  }

  stats[slug] = {
    ...entry,
    sourceLabel: "Roblox public game data",
    sourceUrl: entry.robloxPlaceId
      ? `https://www.roblox.com/games/${entry.robloxPlaceId}`
      : entry.sourceUrl,
    lastChecked: today,
    status: "verified",
    onlinePlayers: game.playing,
    visits: game.visits,
    upVotes: votes?.upVotes ?? null,
    downVotes: votes?.downVotes ?? null,
    updatedAt: game.updated,
    fetchedAt: new Date().toISOString(),
    error: null
  };
}

await writeFile(statsPath, `${JSON.stringify(stats, null, 2)}\n`);
console.log(`Updated Roblox stats for ${entries.length} game(s).`);
