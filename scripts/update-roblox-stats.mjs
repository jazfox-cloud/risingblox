import { readFile, rename, unlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const defaultStatsPath = new URL("../content/roblox-stats.json", import.meta.url);
const retryableCodes = new Set([
  "DNS_ERROR",
  "NETWORK_ERROR",
  "TIMEOUT",
  "RATE_LIMITED",
  "ROBLOX_SERVER_ERROR"
]);

export class StatsRefreshError extends Error {
  constructor(code, message, options = {}) {
    super(message, { cause: options.cause });
    this.name = "StatsRefreshError";
    this.code = code;
    this.status = options.status ?? null;
    this.url = options.url ?? null;
  }
}

function sleep(milliseconds) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, milliseconds));
}

function classifyNetworkError(error, url, timedOut) {
  if (timedOut || error?.name === "AbortError") {
    return new StatsRefreshError("TIMEOUT", "request timed out", { cause: error, url });
  }

  const causeCode = error?.cause?.code ?? error?.code;
  if (["ENOTFOUND", "EAI_AGAIN"].includes(causeCode)) {
    return new StatsRefreshError("DNS_ERROR", `DNS lookup failed (${causeCode})`, {
      cause: error,
      url
    });
  }

  return new StatsRefreshError("NETWORK_ERROR", error?.message ?? "network request failed", {
    cause: error,
    url
  });
}

function classifyHttpError(status, url, body) {
  const suffix = body ? `: ${body.replace(/\s+/g, " ").slice(0, 160)}` : "";
  if (status === 429) {
    return new StatsRefreshError("RATE_LIMITED", `HTTP ${status}${suffix}`, { status, url });
  }
  if ([500, 502, 503, 504].includes(status)) {
    return new StatsRefreshError("ROBLOX_SERVER_ERROR", `HTTP ${status}${suffix}`, {
      status,
      url
    });
  }
  return new StatsRefreshError("ROBLOX_CLIENT_ERROR", `HTTP ${status}${suffix}`, {
    status,
    url
  });
}

export async function fetchJson(
  url,
  {
    fetchImpl = fetch,
    timeoutMs = 15_000,
    maxAttempts = 3,
    sleepImpl = sleep,
    random = Math.random,
    logger = console
  } = {}
) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const controller = new AbortController();
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);

    try {
      const response = await fetchImpl(url, {
        headers: {
          accept: "application/json",
          "user-agent": "RisingBlox stats refresh (+https://risingblox.com)"
        },
        signal: controller.signal
      });
      const body = await response.text();
      if (!response.ok) {
        throw classifyHttpError(response.status, url, body);
      }

      try {
        return JSON.parse(body);
      } catch (error) {
        throw new StatsRefreshError("INVALID_RESPONSE", "response was not valid JSON", {
          cause: error,
          status: response.status,
          url
        });
      }
    } catch (error) {
      const classified =
        error instanceof StatsRefreshError
          ? error
          : classifyNetworkError(error, url, timedOut);
      logger.error(
        `[${classified.code}] target=${url} attempt=${attempt}/${maxAttempts}` +
          ` status=${classified.status ?? "n/a"} message=${classified.message}`
      );

      if (!retryableCodes.has(classified.code) || attempt === maxAttempts) {
        throw classified;
      }

      const baseDelay = attempt === 1 ? 2_000 : 5_000;
      await sleepImpl(baseDelay + Math.floor(random() * 500));
    } finally {
      clearTimeout(timer);
    }
  }

  throw new StatsRefreshError("NETWORK_ERROR", "request attempts exhausted", { url });
}

function requireNonNegativeInteger(value, field, slug) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new StatsRefreshError(
      "VALIDATION_ERROR",
      `${slug}.${field} must be a finite non-negative integer`
    );
  }
}

function rowsByUniverseId(payload, label, requestedIds) {
  if (!payload || !Array.isArray(payload.data)) {
    throw new StatsRefreshError("INVALID_RESPONSE", `${label}.data must be an array`);
  }
  if (payload.data.length !== requestedIds.length) {
    throw new StatsRefreshError(
      "VALIDATION_ERROR",
      `${label} returned ${payload.data.length} record(s); expected ${requestedIds.length}`
    );
  }

  const rows = new Map();
  for (const row of payload.data) {
    if (!row || !Number.isSafeInteger(row.id) || !requestedIds.includes(row.id)) {
      throw new StatsRefreshError(
        "VALIDATION_ERROR",
        `${label} returned an unexpected universe ID`
      );
    }
    if (rows.has(row.id)) {
      throw new StatsRefreshError(
        "VALIDATION_ERROR",
        `${label} returned duplicate universe ID ${row.id}`
      );
    }
    rows.set(row.id, row);
  }
  return rows;
}

export function validateResponses(gameData, voteData, entries) {
  const requestedIds = entries.map(([, entry]) => entry.robloxUniverseId);
  const gamesById = rowsByUniverseId(gameData, "games response", requestedIds);
  const votesById = rowsByUniverseId(voteData, "votes response", requestedIds);

  for (const [slug, entry] of entries) {
    const game = gamesById.get(entry.robloxUniverseId);
    const votes = votesById.get(entry.robloxUniverseId);
    requireNonNegativeInteger(game.rootPlaceId, "rootPlaceId", slug);
    requireNonNegativeInteger(game.playing, "playing", slug);
    requireNonNegativeInteger(game.visits, "visits", slug);
    requireNonNegativeInteger(votes.upVotes, "upVotes", slug);
    requireNonNegativeInteger(votes.downVotes, "downVotes", slug);
    if (typeof game.updated !== "string" || !game.updated.trim()) {
      throw new StatsRefreshError(
        "VALIDATION_ERROR",
        `${slug}.updated must be a non-empty string`
      );
    }
    if (game.canonicalUrlPath != null && typeof game.canonicalUrlPath !== "string") {
      throw new StatsRefreshError(
        "VALIDATION_ERROR",
        `${slug}.canonicalUrlPath must be a string when present`
      );
    }

    for (const [field, nextValue] of [
      ["visits", game.visits],
      ["upVotes", votes.upVotes],
      ["downVotes", votes.downVotes]
    ]) {
      const previousValue = entry[field];
      if (Number.isSafeInteger(previousValue) && nextValue < previousValue) {
        throw new StatsRefreshError(
          "VALIDATION_ERROR",
          `${slug}.${field} decreased from ${previousValue} to ${nextValue}`
        );
      }
    }
  }

  return { gamesById, votesById };
}

function comparableEntry(entry) {
  const { fetchedAt: _fetchedAt, lastChecked: _lastChecked, ...comparable } = entry;
  return comparable;
}

export function buildNextStats(stats, entries, gamesById, votesById, now = new Date()) {
  const nextStats = { ...stats };
  const checkedAt = now.toISOString();
  const checkedDate = checkedAt.slice(0, 10);
  let changedGames = 0;

  for (const [slug, entry] of entries) {
    const game = gamesById.get(entry.robloxUniverseId);
    const votes = votesById.get(entry.robloxUniverseId);
    const nextEntry = {
      ...entry,
      robloxPlaceId: game.rootPlaceId,
      sourceLabel: "Roblox public game data",
      sourceUrl: `https://www.roblox.com${
        game.canonicalUrlPath ?? `/games/${game.rootPlaceId}`
      }`,
      status: "verified",
      onlinePlayers: game.playing,
      visits: game.visits,
      upVotes: votes.upVotes,
      downVotes: votes.downVotes,
      updatedAt: game.updated,
      error: null
    };

    if (JSON.stringify(comparableEntry(nextEntry)) !== JSON.stringify(comparableEntry(entry))) {
      nextStats[slug] = {
        ...nextEntry,
        lastChecked: checkedDate,
        fetchedAt: checkedAt
      };
      changedGames += 1;
    }
  }

  return { stats: nextStats, changedGames };
}

export async function atomicWriteJson(
  target,
  data,
  {
    writeFileImpl = writeFile,
    renameImpl = rename,
    unlinkImpl = unlink,
    tempSuffix = `${process.pid}-${Date.now()}`
  } = {}
) {
  const targetPath = target instanceof URL ? target : resolve(target);
  const temporaryPath = `${targetPath instanceof URL ? targetPath.pathname : targetPath}.${tempSuffix}.tmp`;

  try {
    await writeFileImpl(temporaryPath, `${JSON.stringify(data, null, 2)}\n`, {
      encoding: "utf8",
      flag: "wx"
    });
    await renameImpl(temporaryPath, targetPath);
  } catch (error) {
    await unlinkImpl(temporaryPath).catch(() => {});
    throw new StatsRefreshError("WRITE_ERROR", `failed to atomically write ${target}`, {
      cause: error
    });
  }
}

export async function runStatsRefresh({
  statsPath = defaultStatsPath,
  fetchImpl = fetch,
  fetchOptions = {},
  now = new Date(),
  writeStats = atomicWriteJson,
  logger = console
} = {}) {
  let stats;
  try {
    stats = JSON.parse(await readFile(statsPath, "utf8"));
  } catch (error) {
    throw new StatsRefreshError("VALIDATION_ERROR", "could not read valid stats JSON", {
      cause: error
    });
  }

  const entries = Object.entries(stats);
  if (!entries.length) {
    throw new StatsRefreshError("VALIDATION_ERROR", "stats file must not be empty");
  }
  for (const [slug, entry] of entries) {
    if (!entry || !Number.isSafeInteger(entry.robloxUniverseId) || entry.robloxUniverseId <= 0) {
      throw new StatsRefreshError(
        "VALIDATION_ERROR",
        `${slug}.robloxUniverseId must be a positive integer`
      );
    }
  }

  const universeIds = entries.map(([, entry]) => entry.robloxUniverseId);
  const query = universeIds.join(",");
  const gamesUrl = `https://games.roblox.com/v1/games?universeIds=${query}`;
  const votesUrl = `https://games.roblox.com/v1/games/votes?universeIds=${query}`;
  const options = { ...fetchOptions, fetchImpl, logger };
  const [gameData, voteData] = await Promise.all([
    fetchJson(gamesUrl, options),
    fetchJson(votesUrl, options)
  ]);
  const { gamesById, votesById } = validateResponses(gameData, voteData, entries);
  const next = buildNextStats(stats, entries, gamesById, votesById, now);

  if (!next.changedGames) {
    logger.log(`No Roblox stats changes detected. Checked ${entries.length} game(s).`);
    return { checkedGames: entries.length, changedGames: 0, changed: false };
  }

  await writeStats(statsPath, next.stats);
  logger.log(
    `Updated Roblox stats for ${next.changedGames} of ${entries.length} checked game(s).`
  );
  return {
    checkedGames: entries.length,
    changedGames: next.changedGames,
    changed: true
  };
}

async function main() {
  try {
    await runStatsRefresh();
  } catch (error) {
    const code = error instanceof StatsRefreshError ? error.code : "UNKNOWN_ERROR";
    console.error(`[${code}] ${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  await main();
}
