import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  StatsRefreshError,
  atomicWriteJson,
  fetchJson,
  runStatsRefresh,
  validateResponses
} from "./update-roblox-stats.mjs";

const silentLogger = { error() {}, log() {} };
const baseEntry = {
  robloxUniverseId: 123,
  robloxPlaceId: 456,
  sourceLabel: "Roblox public game data",
  sourceUrl: "https://www.roblox.com/games/456/Test",
  lastChecked: "2026-07-16",
  status: "verified",
  onlinePlayers: 10,
  visits: 100,
  upVotes: 20,
  downVotes: 2,
  updatedAt: "2026-07-16T00:00:00Z",
  fetchedAt: "2026-07-16T00:00:00Z",
  error: null
};
const gameRow = {
  id: 123,
  rootPlaceId: 456,
  playing: 11,
  visits: 101,
  updated: "2026-07-17T00:00:00Z",
  canonicalUrlPath: "/games/456/Test"
};
const voteRow = { id: 123, upVotes: 21, downVotes: 2 };

function response(status, body) {
  return new Response(typeof body === "string" ? body : JSON.stringify(body), { status });
}

function expectCode(code) {
  return (error) => error instanceof StatsRefreshError && error.code === code;
}

test("retries DNS failures three times and classifies them", async () => {
  let attempts = 0;
  await assert.rejects(
    fetchJson("https://games.roblox.com/test", {
      fetchImpl: async () => {
        attempts += 1;
        throw Object.assign(new Error("lookup failed"), { code: "ENOTFOUND" });
      },
      sleepImpl: async () => {},
      random: () => 0,
      logger: silentLogger
    }),
    expectCode("DNS_ERROR")
  );
  assert.equal(attempts, 3);
});

test("classifies request timeout", async () => {
  await assert.rejects(
    fetchJson("https://games.roblox.com/test", {
      fetchImpl: (_url, { signal }) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener("abort", () =>
            reject(Object.assign(new Error("aborted"), { name: "AbortError" }))
          );
        }),
      timeoutMs: 5,
      maxAttempts: 1,
      logger: silentLogger
    }),
    expectCode("TIMEOUT")
  );
});

test("retries HTTP 429 and reports rate limiting", async () => {
  let attempts = 0;
  await assert.rejects(
    fetchJson("https://games.roblox.com/test", {
      fetchImpl: async () => {
        attempts += 1;
        return response(429, { errors: ["slow down"] });
      },
      sleepImpl: async () => {},
      random: () => 0,
      logger: silentLogger
    }),
    expectCode("RATE_LIMITED")
  );
  assert.equal(attempts, 3);
});

test("retries HTTP 500 and can recover", async () => {
  let attempts = 0;
  const result = await fetchJson("https://games.roblox.com/test", {
    fetchImpl: async () => {
      attempts += 1;
      return attempts === 1 ? response(500, "temporary") : response(200, { data: [] });
    },
    sleepImpl: async () => {},
    random: () => 0,
    logger: silentLogger
  });
  assert.deepEqual(result, { data: [] });
  assert.equal(attempts, 2);
});

test("rejects non-JSON success responses", async () => {
  await assert.rejects(
    fetchJson("https://games.roblox.com/test", {
      fetchImpl: async () => response(200, "not json"),
      logger: silentLogger
    }),
    expectCode("INVALID_RESPONSE")
  );
});

test("rejects an empty records array", () => {
  assert.throws(
    () => validateResponses({ data: [] }, { data: [voteRow] }, [["test", baseEntry]]),
    expectCode("VALIDATION_ERROR")
  );
});

test("rejects missing required numeric fields", () => {
  const invalidGame = { ...gameRow };
  delete invalidGame.visits;
  assert.throws(
    () =>
      validateResponses(
        { data: [invalidGame] },
        { data: [voteRow] },
        [["test", baseEntry]]
      ),
    expectCode("VALIDATION_ERROR")
  );
});

test("rejects cumulative metric decreases", () => {
  assert.throws(
    () =>
      validateResponses(
        { data: [{ ...gameRow, visits: 99 }] },
        { data: [voteRow] },
        [["test", baseEntry]]
      ),
    expectCode("VALIDATION_ERROR")
  );
});

test("a partial request failure never calls the writer", async () => {
  const directory = await mkdtemp(join(tmpdir(), "risingblox-stats-"));
  const statsPath = join(directory, "stats.json");
  await writeFile(statsPath, JSON.stringify({ test: baseEntry }));
  let writerCalled = false;

  try {
    await assert.rejects(
      runStatsRefresh({
        statsPath,
        fetchImpl: async (url) => {
          if (url.includes("/votes")) throw new Error("connection failed");
          return response(200, { data: [gameRow] });
        },
        fetchOptions: { maxAttempts: 1 },
        writeStats: async () => {
          writerCalled = true;
        },
        logger: silentLogger
      }),
      expectCode("NETWORK_ERROR")
    );
    assert.equal(writerCalled, false);
    assert.deepEqual(JSON.parse(await readFile(statsPath, "utf8")), { test: baseEntry });
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("an atomic rename failure preserves the existing file", async () => {
  const directory = await mkdtemp(join(tmpdir(), "risingblox-stats-"));
  const statsPath = join(directory, "stats.json");
  await writeFile(statsPath, "original\n");

  try {
    await assert.rejects(
      atomicWriteJson(statsPath, { changed: true }, {
        renameImpl: async () => {
          throw new Error("permission denied");
        },
        tempSuffix: "test"
      }),
      expectCode("WRITE_ERROR")
    );
    assert.equal(await readFile(statsPath, "utf8"), "original\n");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("unchanged data exits successfully without writing", async () => {
  const directory = await mkdtemp(join(tmpdir(), "risingblox-stats-"));
  const statsPath = join(directory, "stats.json");
  await writeFile(statsPath, JSON.stringify({ test: baseEntry }));
  let writerCalled = false;

  try {
    const result = await runStatsRefresh({
      statsPath,
      fetchImpl: async (url) =>
        response(200, {
          data: [url.includes("/votes") ? { ...voteRow, upVotes: 20 } : {
            ...gameRow,
            playing: 10,
            visits: 100,
            updated: baseEntry.updatedAt
          }]
        }),
      writeStats: async () => {
        writerCalled = true;
      },
      logger: silentLogger
    });
    assert.equal(result.changed, false);
    assert.equal(writerCalled, false);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
