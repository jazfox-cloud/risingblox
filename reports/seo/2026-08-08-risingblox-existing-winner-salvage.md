# RisingBlox Existing Winner Salvage — Phase 1.6

Date: 2026-08-08
Scope: existing RisingBlox pages only; no new pages, no technical SEO changes, no GSC writes.

## Decision

**STATUS: PASS_WITH_LIMITATION**

One narrow, evidence-backed stale-information fix was made to the Anime Squadron profile/guide. Iron Soul was not rewritten: its historic winner query still has current demand, but the current page already gives a direct, source-bounded answer and the live SERP is now occupied by several focused exact-match sites. Noob Incremental was not modified because its current SERP is also served by dedicated wiki/guide sites and its historical signal is small.

**Best existing recovery opportunity: Anime Squadron — update the stale `UPD 1.75` label to the current official `UPD 2.0` label.** This is an accuracy/freshness repair, not a promise of traffic recovery.

## Evidence used

- Historical GSC snapshot: `reports/seo/2026-08-08-risingblox-traffic-recovery-data.json`, covering Period A and Period B from the prior audit.
- Current Google Suggest checks on 2026-08-08:
  - Iron Soul: `codes`, `discord`, `wiki`, `recipes`, `best weapon`, `tier list`.
  - Anime Squadron: `codes`, `tier list`, `discord`, `wiki`, `gear`.
  - Noob Incremental: `codes`, `discord`, `wiki`, `guide`, `minions`, `soldier noob`, `runes`.
- Current public SERP and official pages checked on 2026-08-08:
  - [Iron Soul: Dungeon official Roblox page](https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon)
  - [Anime Squadron official Roblox page](https://www.roblox.com/games/71132543521245/Anime-Squadron)
  - [Noob Incremental official Roblox page](https://www.roblox.com/games/76911729991355/Noob-Incremental)
  - [Iron Soul exact-match wiki](https://ironsouldungeon.wiki/), [Iron Soul exact-match guide/database](https://ironsoulwiki.com/), and [BloxDungeon](https://bloxdungeon.com/)
  - [Anime Squadron exact-match beginner guide](https://www.animesquadron.wiki/guides/beginner-guide)
  - [Noob Incremental exact-match guide/wiki](https://www.noob-incremental.wiki/en/guide/Noob-Incremental-how-to-play), [Noob Incremental wiki](https://noobincrementalwiki.wiki/roblox/noob-incremental-roblox/), and [Noob Incremental exact-match site](https://www.noobincremental.com/)

SERP results were used to classify demand and saturation, not as authority for game facts. Game facts were accepted only from the official Roblox page or existing RisingBlox source notes.

## Iron Soul success pattern and salvage decision

**IRON_SOUL: SERP_DISPLACEMENT**

| Field | Finding |
|---|---|
| Fresh/current demand | Yes, but reduced versus Period A. Suggest still returns codes, wiki, recipes, best weapon and tier-list intent. Period B retained `how to level up fast in iron soul` (1 impression, position 15) and `iron soul dungeon guide` (1 impression, position 23). |
| Historical signal | `/guides/iron-soul-dungeon/` received 695 Period A impressions and 10 Period B impressions. `how to level up fast in iron soul dungeon` received 13 Period A impressions at aggregate average position 8.9; `iron soul best runes` received 4 at position 7.75. |
| Current SERP | No longer thin. Multiple exact-match Iron Soul sites, a focused BloxDungeon site, a general wiki/database, Reddit and guide results now occupy the main query space. |
| Current page answer | The existing page directly answers the historical leveling query with an ordered loop: repeat a reliable monster route, gather ore/materials, make one forge or skill-tree change, then retest. It also explicitly covers runes, starter weapons, forge, blueprints and evidence limits. |
| Clear content gap | Not established. Exact XP, drop rates, rune tables, blueprint tables and universal best builds are not in the official source, so adding them would require guessing or copying competitors. |
| Action | **KEEP**. Do not rewrite or add unsupported details. |

### Iron Soul success pattern

`IRON_SOUL_SUCCESS_PATTERN`

- Fresh game at test time: **Yes**
- Weak SERP at test time: **Yes, historically; not current**
- Long-tail question depth: **High** — leveling, runes, skill tree, forge, relics, starter weapon, blueprint and craft questions were recorded.
- Main query type: **Concrete problem query**, led by `how to level up fast in iron soul dungeon`, not only the broad game name.
- Page answered a concrete problem: **Yes** — the current page has a direct ordered answer and caveats.
- Competition level: **High now** — exact-match and focused sites have entered.
- Google testing pattern: **Google tested a concrete, answer-shaped progression page against long-tail questions; it did not expand into durable sitewide demand.**

This pattern remains the benchmark for future candidates, but Iron Soul itself does not currently pass the modification gate because the missing answers are precisely the facts that cannot be reliably verified from the permitted public source stack.

## Anime Squadron

**ANIME SQUADRON: STALE_INFORMATION**

| Field | Finding |
|---|---|
| Current demand | Yes. Suggest returns codes, tier list, Discord, wiki, Roblox and gear. Period A included `anime squadron` (8 aggregate impressions across host variants) and `anime squadron roblox` (5); Period B retained both a branded query and a Roblox variant. |
| Historical signal | Existing profile page received the listed historical Anime Squadron impressions; the guide/profile pair is an established internal signal. |
| Current page answer | The page already answers the broad beginner loop conservatively: summon, deploy, upgrade, observe lane coverage, prepare for bosses, and avoid unsupported unit rankings. |
| Gap | The profile and guide still described the official title as `UPD 1.75`, while the current official Roblox title is `[🍥UPD 2.0🦊] Anime Squadron`. This is a real freshness mismatch on a page whose primary promise includes current update status. |
| Evidence | [Official Roblox page](https://www.roblox.com/games/71132543521245/Anime-Squadron) showed `UPD 2.0` on the current check. No new unit, cost, or mode facts were inferred. |
| Action | **UPDATE** — minimal version/date synchronization only. |

## Noob Incremental

**NOOB INCREMENTAL: SERP_DISPLACEMENT**

| Field | Finding |
|---|---|
| Current demand | Yes, but low-confidence in scale. Suggest returns codes, Discord, wiki, guide, minions, soldier noob and runes. The official Roblox page remains live and describes the Oof/upgrades/runes/Prestige loop. |
| Historical signal | `/games/noob-incremental/` received 5 impressions for `noob incremental` at position 23.2 plus small long-tail signals including `minion noob incremental` at position 10, `noob incremental prism tree` at 26, and `noob incremental roblox` at 10. No Period B Noob query was present. |
| Current page answer | The profile and guide already cover the verified opening loop and explicitly avoid invented upgrade order, rune odds, costs and Prestige thresholds. |
| Current SERP | Several dedicated wiki/guide domains now cover the same core beginner/progression questions, alongside the official Roblox page. |
| Clear content gap | Not established. The attractive exact answers—best upgrade order, minion values, rune rankings and Prestige thresholds—are not reliably available in the permitted official source. |
| Action | **KEEP** for monitoring; do not update for SEO. |

## Historical query vs current page

| Page | Historical query | Historical position | Current demand | Current page answer | Gap | Classification |
|---|---|---:|---|---|---|---|
| `/guides/iron-soul-dungeon/` | `how to level up fast in iron soul dungeon` | 8.9 | Current shortened variant and guide query still appear; Suggest has multiple mechanic intents | Ordered farm → forge/skill-tree → retest loop; explicit no-XP-table boundary | No verified factual gap; competing sites now occupy the space | SERP_DISPLACEMENT |
| `/guides/iron-soul-dungeon/` | `iron soul best runes` | 7.75 | Suggest/SERP still show rune and best-build intent | Explains how to choose against a visible blocker and refuses unsupported tier claims | Exact rune effects/rankings lack official evidence | SERP_DISPLACEMENT |
| `/games/anime-squadron/` | `anime squadron` | ~27.6 across apex/www rows | Branded, wiki, tier-list, codes and gear suggestions remain | Broad official game identity and current beginner path | Update label was stale (`1.75` vs official `2.0`) | STALE_INFORMATION |
| `/games/anime-squadron/` | `anime squadron roblox` | ~20.2 across apex/www rows | Branded Roblox query remained in Period B | Same as above | Same freshness gap | STALE_INFORMATION |
| `/games/noob-incremental/` | `noob incremental` | 23.2 | Suggest and official page remain, but no Period B GSC query | Verified Oof → upgrades → runes → Prestige loop | Exact progression facts are not verified; dedicated sites cover broad intent | SERP_DISPLACEMENT |
| `/games/noob-incremental/` | `noob incremental prism tree` | 26 | Historical one-impression long tail; no current confirmation | No prism-tree claim, correctly | Demand and evidence are insufficient for a new answer | NO_CLEAR_CAUSE |

## Decision table

| Page | Demand | Historical signal | Gap | Evidence | Action |
|---|---|---|---|---|---|
| `/guides/iron-soul-dungeon/` | Current, but contested | Strongest historical winner: 695 → 10 impressions | No safe factual gap; page already answers the concrete query | Official Roblox page plus current SERP | KEEP |
| `/games/anime-squadron/` and `/guides/anime-squadron/` | Current branded and mechanic demand | Historical impressions and Period B branded queries | Stale official update label | Current official Roblox page | UPDATE |
| `/games/noob-incremental/` and `/guides/noob-incremental/` | Suggest demand, no Period B GSC query | Small historical signal | No verified content gap; mature exact-match coverage | Official Roblox page plus current SERP | KEEP |

## Files modified

- `content/games.ts`
  - Updated only Anime Squadron's official update signal from `UPD 1.75` to `UPD 2.0`.
  - Updated the related verification dates to `2026-08-08`.
  - No new facts about units, costs, rankings, modes or builds were added.

## Validation

- `npm run build`: **PASS**
- `npm run test`: **PASS** — 19/19
- `npm run typecheck`: **PASS**
- `git diff --check`: **PASS**
- `npm run audit:seo`: **RAN, baseline failures remain** — expected 26 sitemap URLs vs 25, existing unexpected `/codes/scale-slimy-fish/` noindex/protection findings, and an existing `/codes/drain-the-lake/` broken internal link. No unrelated SEO repair was made.
- Generated target HTML: **PASS** — title contains `Anime Squadron UPD 2.0 Beginner Guide`, one H1, canonical `https://risingblox.com/guides/anime-squadron/`, no accidental `UPD 1.75`, no `undefined` guide link.

## Deployment and observation

The approved change is limited to one existing Anime Squadron page cluster. After commit/push, the existing GitHub-backed Cloudflare Pages pipeline was used; no separate Wrangler deployment, sitemap/canonical/robots change, or GSC write was made.

Observe for 14 days after the production deployment:

- Anime Squadron profile/guide impressions and query count.
- Whether `anime squadron` and `anime squadron roblox` reappear.
- New update-, beginner- or gear-related long tails.
- Top 50 and Top 20 query counts.
- Secondary: clicks, CTR and average position.

No return to 695 impressions is assumed or promised.

Phase 2 content expansion: **AWAITING USER/PM APPROVAL**.
