# Codex + ChatGPT Session Guide

This project is a dating-profile microsite built with Astro 5, TypeScript, and Tailwind. These notes exist so both humans and AI copilots understand what matters before a coding session starts.

## Quick facts

- **Runtime**: Node 22 preferred (Vercel serverless target). The repo currently installs with Node 20+, but Vercel deploys on 22.
- **Framework**: Astro + Tailwind (via `@tailwindcss/vite`). No client-side framework by default; components stay mostly server-rendered with sprinkles.
- **Key files**:
  - `src/config/profile.ts` – all copy, action links, gallery assets, social-proof quotes, and ticker defaults.
  - `src/components/*` – hero, ticker, social wall, gallery, Spotify embed.
  - `src/lib/status.ts` + `src/pages/api/statuses.json.ts` – dynamic status ticker logic + API endpoint.
  - `src/layouts/PageLayout.astro` + `src/styles/global.css` – global styling surface.
  - `.env` – overrides (status + Spotify). `.env.example` documents required keys.

## Local development checklist

1. Install deps: `npm install`
2. Start dev server: `npm run dev` (serves on `http://localhost:4321`)
3. Optional Docker flow:
   - `npm run docker:up` (or `docker compose up --build`)
   - `npm run docker:down` when finished
4. Build verification: `npm run build`

## Environment variables

| Variable | Purpose | Notes |
| --- | --- | --- |
| `STATUS_OVERRIDE` | Server-side ticker override | Not exposed unless `PUBLIC_*` is set |
| `PUBLIC_STATUS_OVERRIDE` | Client-visible override | Handy for temporary messaging |
| `PUBLIC_SPOTIFY_EMBED_URL` | Custom Spotify iframe URL | Provide full embed link |

Copy `.env.example` → `.env` before editing.

## Collaboration expectations

- **Stay config-driven**: whenever possible, expose new copy or references through `src/config/profile.ts` so content edits stay code-free.
- **Respect Tailwind**: use utility classes sparingly but consistently; add rare custom CSS in `global.css` if utilities fall short.
- **Ticker logic**: prefer updating `statusTickerConfig` or the API endpoint rather than hardcoding text in components. Manual overrides should continue to work.
- **Accessibility**: provide `alt` text for gallery images; keep color contrast high.
- **Testing**: run `npm run build` after significant changes. For JS affecting the front-end (e.g., ticker JS), double-check in dev server to confirm no runtime errors.

## Extending the project

- Add new sections/components under `src/components/` and wire them into `src/pages/index.astro`.
- For future data sources (Notion/Sheets), replace the logic inside `src/lib/status.ts` or the API route with a fetch call; ensure serverless timeouts are respected.
- To add analytics or other embeds, leverage Astro integrations; keep the footprint lightweight.

Keep this document updated when conventions change so future Codex sessions have accurate context.
