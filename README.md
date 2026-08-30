# Aaranya — Climate Action Website

Website for **ARANYA** (Action for Resilient Adaptation and Nature-based Energy Alternatives), a Nepal-based non-profit focused on equitable climate solutions, just energy transition, and nature-based community resilience.

## Tech stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui primitives
- **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — about, activities overview, documents |
| `/activities` | Activities hub |
| `/activities/projects` | Projects |
| `/activities/projects/jet-toolkit` | JET toolkit project |
| `/activities/publications` | Publications |
| `/activities/events` | Events |
| `/gallery` | Gallery |
| `/gallery/jet-bojheni` | JET Bojheni gallery |
| `/partners` | Partners |
| `/volunteer` | Volunteer |
| `/our-team` | Our team |

Organization PDFs live in `public/docs/` and are served as static files at `/docs/<filename>.pdf`.

## Getting started

**Prerequisites:** Node.js 18+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Local Next.js development |
| `pnpm build` | Production build for Cloudflare (OpenNext) |
| `pnpm preview` | Build and preview the Worker locally with Wrangler |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |
| `pnpm lint` | Run Next.js lint |

## Deploy to Cloudflare

1. Log in to Cloudflare (once):

   ```bash
   pnpm exec wrangler login
   ```

2. Preview locally (optional):

   ```bash
   pnpm preview
   ```

3. Deploy:

   ```bash
   pnpm deploy
   ```

The Worker name is `aaranya-climate-website` (see `wrangler.jsonc`). No environment secrets are required for the public site.

## Project structure

```
├── app/                 # App Router pages and layouts
├── components/ui/       # Site UI (header, footer, hero, documents, …)
├── lib/                 # Shared utilities
├── public/docs/         # Static PDFs and logo
├── scripts/build.mjs    # OpenNext Cloudflare build wrapper
├── open-next.config.ts
├── wrangler.jsonc
└── next.config.mjs
```

## Contact

- Website: [aranyainitiatives.org](https://aranyainitiatives.org)
- Email: aranyainitiatives@gmail.com
- Address: Suryabinayak-5, Bhaktapur, Nepal
