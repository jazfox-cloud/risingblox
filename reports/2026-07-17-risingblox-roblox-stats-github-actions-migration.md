# RisingBlox Roblox Stats GitHub Actions Migration

Date: 2026-07-17

## Root Cause

The former Codex Automation repeatedly failed before making an HTTP request because
its execution environment could not resolve `games.roblox.com` (`ENOTFOUND`). Longer
HTTP timeouts or ordinary retries cannot reliably correct an environment-level DNS
restriction. GitHub Actions is now the network execution environment for the daily
refresh, while Cloudflare keeps its existing Git-push deployment role.

## Repository Audit

- Default branch: `main` (`origin/HEAD -> origin/main`).
- Runtime: Node.js 20 from `.node-version`.
- Package manager: npm.
- Stats command: `npm run update:stats`.
- Stats file: `content/roblox-stats.json`.
- Roblox endpoints: `/v1/games` and `/v1/games/votes` on `games.roblox.com`.
- Available validation commands: `npm run lint`, `npm test`, and `npm run build`.
- Existing deployment documentation identifies GitHub plus Cloudflare Pages and static
  output in `out`; no repository-side `wrangler deploy` command is used.
- No pre-existing GitHub Actions workflows were present.

## Implementation

- Added `.github/workflows/update-roblox-stats.yml` with a timezone-aware daily
  schedule, manual dispatch, least-privilege write permission, and non-cancelling
  concurrency control.
- Hardened `scripts/update-roblox-stats.mjs` with request timeouts, selective retries,
  structured error categories, full-response validation, cumulative metric protection,
  all-or-nothing processing, atomic file replacement, and deterministic no-change
  behavior.
- Added Node test coverage for DNS failure, timeout, HTTP 429, HTTP 500, empty and
  non-JSON responses, missing fields, cumulative decreases, partial request failure,
  write failure, and no-change behavior.
- Limited automated commits to `content/roblox-stats.json` and added a remote-head race
  check before pushing without force.
- Updated `README.md` and `docs/data-sources.md`.

## Schedule and Deployment

GitHub's current official Actions documentation supports an IANA `timezone` field on
scheduled workflows. The workflow therefore uses `cron: "0 8 * * *"` with
`timezone: "Europe/London"`, which follows GMT/BST transitions without duplicate UTC
cron runs. Manual dispatch bypasses scheduling naturally.

The workflow only pushes a verified data change to the default branch. That push is
the handoff to the existing Cloudflare Pages Git integration; no Cloudflare token or
duplicate deployment command was added.

## Operational Notes

The GitHub Actions run log and job summary record trigger type, London time, Node
version, DNS and endpoint results, configured game count, changed files, validation,
commit SHA, and deployment handoff. A no-change refresh is a successful run with no
commit or deployment.

The Codex Automation must remain disabled after migration so the two schedulers cannot
race. Its history file is local Codex state and is not part of this repository.
