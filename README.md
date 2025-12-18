# dating-profile

A playful, social-proof-first dating profile landing page built with [Astro](https://astro.build/), TypeScript, and Tailwind. It ships with a dynamic status ticker (manual override ready), scheduling CTAs, Spotify embed, and lightweight sections you can customize fast.

## Stack

- Astro 5 + TypeScript
- Tailwind via `@tailwindcss/vite`
- Vercel serverless adapter so API routes work out of the box
- Docker + Compose target for local testing

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4321/ to see the page. The main layout lives in `src/pages/index.astro`; edit the data in `src/config/profile.ts` to update copy, links, and gallery items.

### Environment variables

| Name | Description |
| --- | --- |
| `STATUS_OVERRIDE` | Server-side override for the ticker (not exposed to clients unless you want to). |
| `PUBLIC_STATUS_OVERRIDE` | Same as above but intentionally exposed to the browser. Useful for quick front-end demos. |
| `PUBLIC_SPOTIFY_EMBED_URL` | Replace the default Spotify playlist embed. |
| `RESEND_API_KEY` | Server-side key for emailing adventure pitches via the new form. |

Copy `.env.example` to `.env` and fill in whatever values you want; Astro loads it automatically.

## Docker workflow

```bash
# Build the image & start dev server inside Docker
npm run docker:up # or `docker compose up --build`
```

The provided `docker-compose.yml` mounts your working tree, so local edits hot-reload inside the container. Ports, env vars, and commands can be tweaked in the compose file.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repo.
3. Vercel auto-detects Astro + the adapter and builds with `npm run build`.
4. Set any env vars (Spotify/status overrides) inside the Vercel dashboard.

The `/api/statuses.json` endpoint runs as a serverless function, so you can later swap its implementation to fetch data from Notion, Airtable, etc. without changing the front-end.

## Next steps

- Swap placeholder gallery images with your own assets in `public/`.
- Wire the ticker endpoint to an external JSON source or Notion database.
- Drop real screenshots/testimonials into `socialProofEntries` to raise the receipts bar.

## Docs

See `docs/codex-session.md` for a collaborative guide tailored to both humans and Codex/ChatGPT operators.
