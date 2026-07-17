# RisingBlox Data Sources

RisingBlox should show exact numeric game stats only when they come from a saved source snapshot.

## Roblox Game Stats

Stats are stored in `content/roblox-stats.json`.

The update script is:

```bash
npm run update:stats
```

It refreshes the configured universe IDs from the Roblox public game APIs:

- `https://games.roblox.com/v1/games`
- `https://games.roblox.com/v1/games/votes`

Every request has a 15-second timeout. DNS, network, timeout, rate-limit, and selected
Roblox server failures are retried up to three times. All game and vote responses are
validated before the file is replaced atomically. Missing records, invalid numeric
fields, and decreases in cumulative visits or votes fail the refresh and preserve the
last successful snapshot. Online player counts are real-time and may decrease.

The script only changes the file when source-backed values change. A check that returns
the same values exits successfully with `No Roblox stats changes detected` and does not
update timestamps.

## Automated Refresh

`.github/workflows/update-roblox-stats.yml` runs every day at 08:00 in
`Europe/London`, including daylight-saving changes, and can also be started manually
from **GitHub → Actions → Update Roblox Stats → Run workflow**.

The workflow checks DNS and HTTPS access, installs the locked dependencies, runs the
updater, and permits only `content/roblox-stats.json` to change. If data changed, lint,
tests, and the production build must pass before the workflow commits and pushes to the
default branch. If data did not change, it creates no commit. The existing Cloudflare
Pages Git integration handles deployment after a successful push.

The former Codex Automation no longer performs Roblox API requests because its local
execution environment could not reliably resolve `games.roblox.com`.

For failures, inspect the workflow run log and job summary. The updater classifies
failures as DNS, network, timeout, rate-limit, Roblox server/client, invalid response,
validation, or write errors. GitHub repository settings must allow Actions read/write
workflow permissions for the automatic commit.

## Required Per Game

Before a game can show verified numbers, add:

- `robloxUniverseId`
- `robloxPlaceId`
- `sourceUrl`

If these fields are missing, the site shows:

- Online: `Checking`
- Like Rate: `Checking`
- Launch: `Unverified`
- Opportunity: `Watchlist`

## Opportunity Labels

Opportunity is an editorial label calculated from verified public signals:

- `High interest`: at least 10,000 online players and at least 85% like rate
- `Rising`: at least 2,000 online players and at least 75% like rate
- `Watchlist`: anything still unverified or below those thresholds

These labels are not Roblox official metrics.
