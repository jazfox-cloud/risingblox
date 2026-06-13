# RisingBlox SEO MVP Plan

## Positioning

RisingBlox is an independent English-language site for Roblox players and creators who want to spot rising games early, learn the basics quickly, and find working codes.

## MVP Objective

Publish a small static site that can be indexed quickly and measured through SEO signals before adding a database, crawler, accounts, comments, or monetization complexity.

## Initial Routes

- `/`
- `/trending`
- `/games/grow-a-garden-2`
- `/games/mini-war`
- `/games/noob-incremental`
- `/codes/grow-a-garden-2`
- `/codes/mini-war`
- `/codes/noob-incremental`
- `/guides/grow-a-garden-2`
- `/guides/mini-war`
- `/guides/noob-incremental`
- `/about`
- `/privacy`
- `/sitemap.xml`
- `/robots.txt`

## Measurement

Primary validation target:

- Search impressions and clicks for long-tail Roblox game terms.

Secondary targets:

- Code page repeat visits.
- Trending page engagement.
- Guide page dwell time.

## Constraints

- No login.
- No payment.
- No comments.
- No complex admin panel.
- No automated scraping in the first version.
- Static export first; avoid server-only Next.js features until there is a clear reason.

## Deployment Plan

Use GitHub plus Cloudflare Pages for the first release.

Cloudflare Pages configuration:

- Build command: `npm run build`
- Output directory: `out`
- Node.js version: 20 or later
- Production branch: `main`
- Custom domain: `risingblox.com`

Why this path:

- Simple static hosting is enough for the MVP.
- Cloudflare is fast globally and pairs naturally with the domain/DNS layer.
- The project can later move to dynamic Cloudflare Workers, Pages Functions, or another host if scraping, database writes, or server-rendered features become necessary.

## Next Decisions

- Finalize real game data sources and update cadence.
- Replace placeholder code data with verified codes.
- Add verified screenshots and richer page copy after the first build passes.
