# RisingBlox Data Sources

RisingBlox should show exact numeric game stats only when they come from a saved source snapshot.

## Roblox Game Stats

Stats are stored in `content/roblox-stats.json`.

The update script is:

```bash
npm run update:stats
```

It uses Roblox public game data endpoints by `universeId`:

- game metadata and online players
- vote counts used to calculate like rate

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
