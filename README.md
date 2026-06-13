# RisingBlox

RisingBlox is an SEO MVP for tracking rising Roblox games, fresh code pages, and beginner guides.

## Goal

Validate whether a focused site about emerging Roblox games can attract search traffic through:

- rising game profile pages
- code pages with repeat-visit intent
- beginner guides for early player questions
- a manually maintained trending page

## First Content Batch

- Grow a Garden 2
- Mini War
- Noob Incremental

Each game has:

- one game profile
- one codes page
- one beginner guide

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- local static content in `content/games.ts`

## Local Development

Install dependencies, then run:

```bash
npm run dev
```

## Deployment

Recommended MVP deployment:

- GitHub repository for source control
- Cloudflare Pages for static hosting
- Custom domain: `risingblox.com`

Cloudflare Pages settings:

- Framework preset: Next.js or None
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: 20 or later

The project uses static export through `next.config.mjs`, so the first version does not need a server runtime.

## Review Loop

Use a weekly review while validating the MVP:

1. Check indexed pages and search queries.
2. Review which code pages get repeat visits.
3. Update active and expired codes.
4. Add only one to three new games when existing pages show impressions.
5. Record changes in `docs/review-log.md`.
