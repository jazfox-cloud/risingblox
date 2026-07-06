# RisingBlox Data Sources

RisingBlox should show exact numeric game stats only when they come from a saved source snapshot.

## Roblox Game Stats

Stats are stored in `content/roblox-stats.json`.

The update script is:

```bash
npm run update:stats
```

It refreshes from Roblox game-page HTML:

- fetches `https://www.roblox.com/games/<placeId>` for each tracked game
- extracts embedded JSON or page data from the HTML
- updates the recorded stats in `content/roblox-stats.json`

This script does not use `games.roblox.com`, so the scheduled refresh stays on the HTML path even if the public games API is flaky.

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
