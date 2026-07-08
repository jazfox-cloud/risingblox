import { readFile, writeFile } from "node:fs/promises";

const statsPath = new URL("../content/roblox-stats.json", import.meta.url);
const stats = JSON.parse(await readFile(statsPath, "utf8"));
const entries = Object.entries(stats).filter(([, entry]) =>
  Number.isInteger(entry.robloxUniverseId)
);

if (!entries.length) {
  console.log(
    "No Roblox universe IDs configured. Add robloxUniverseId values in content/roblox-stats.json."
  );
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const now = new Date().toISOString();
const universeIds = entries.map(([, entry]) => entry.robloxUniverseId);

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "user-agent": "RisingBlox stats refresh (+https://risingblox.com)"
    }
  });

  const data = await response.json().catch(() => null);
  if (!response.ok || !data) {
    throw new Error(`${url} failed: ${response.status} ${JSON.stringify(data)}`);
  }
  return data;
}

function byUniverseId(rows) {
  return new Map((rows ?? []).map((row) => [row.id, row]));
}

const gamesUrl = `https://games.roblox.com/v1/games?universeIds=${universeIds.join(",")}`;
const votesUrl = `https://games.roblox.com/v1/games/votes?universeIds=${universeIds.join(",")}`;

const [gameData, voteData] = await Promise.all([fetchJson(gamesUrl), fetchJson(votesUrl)]);
const gamesById = byUniverseId(gameData.data);
const votesById = byUniverseId(voteData.data);

let changed = false;

for (const [slug, entry] of entries) {
  const game = gamesById.get(entry.robloxUniverseId);
  if (!game) {
    throw new Error(`Missing Roblox game data for ${slug} (${entry.robloxUniverseId})`);
  }

  const votes = votesById.get(entry.robloxUniverseId) ?? {};
  const nextEntry = {
    ...entry,
    robloxPlaceId: game.rootPlaceId ?? entry.robloxPlaceId,
    sourceLabel: "Roblox public game data",
    sourceUrl: `https://www.roblox.com${game.canonicalUrlPath ?? `/games/${game.rootPlaceId}`}`,
    lastChecked: today,
    status: "verified",
    onlinePlayers: game.playing ?? null,
    visits: game.visits ?? null,
    upVotes: votes.upVotes ?? null,
    downVotes: votes.downVotes ?? null,
    updatedAt: game.updated ?? null,
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
