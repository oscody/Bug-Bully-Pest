## About this site

Marketing site for **Bug Bully Pest Management** (NYC-area pest control). Highlights residential and commercial services (ants, bedbugs, rodents, termites, wildlife, etc.), free inspection, phone (516-360-4026), and Instagram. Includes a contact form that submits to the backend.

- **Instagram:** [@bug.bullypest](https://www.instagram.com/bug.bullypest)
- **TikTok:** [@bugbullypest2](https://www.tiktok.com/@bugbullypest2)

## Architecture

- **Client:** React 18 SPA with Vite, wouter for routing, TanStack Query, Tailwind + Radix UI. Single entry at `client/index.html`; app shell in `client/src/App.tsx`, pages under `client/src/pages/`.
- **Server:** Express 5 API. Contact form posts to a typed API route; shared route definitions and Zod schemas live in `shared/`. Optional PostgreSQL via Drizzle; contact messages stored when DB is configured.
- **Build:** `npm run build` runs Vite for the client (output to `dist/public`) and esbuild for the server (single bundle `dist/index.cjs`). Dev uses `tsx server/index.ts` with Vite middleware; production serves static client from `dist/public` and the bundled server handles `/api/*` and SPA fallback.

## Build

```bash
npm install
npm run build
npm start
```

- `npm run dev` — development server

## SEO checklist

- [x] **Title tag** — Unique, descriptive `<title>` in `client/index.html` (e.g. “Bug Bully Pest Management | NYC Wildlife & Pest Control”).
- [ ] **Meta description** — Add `<meta name="description" content="...">` (150–160 chars) summarizing services and location for search snippets.
- [ ] **Open Graph / Twitter Card** — Add `og:title`, `og:description`, `og:image`, `og:url` (and optionally `og:type`); add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` for social sharing.
- [ ] **Client-only rendering (SPA)** — Consider SSR or pre-rendering so crawlers see content in initial HTML; current setup is workable but not ideal.
  - **Pre-render:** At build time, use a headless browser (e.g. Puppeteer) or a Vite pre-render plugin to snapshot the rendered page and serve that HTML for `/`; React then hydrates. Keeps current stack; good for a single marketing page.
  - **SSR:** Move to Next.js or Remix so the server renders full HTML per request. Bigger change; better if you add many pages or need dynamic SEO.
- [ ] **robots.txt** — Add `robots.txt` to point crawlers to sitemap and control crawling if needed.
- [ ] **Sitemap** — Add `sitemap.xml` with main URL(s).
- [ ] **Canonical URL** — Add `<link rel="canonical" href="...">` if the site is reachable via multiple URLs.
- [ ] **Structured data** — Add JSON-LD (e.g. LocalBusiness and optionally Service schema) for local/search features.
