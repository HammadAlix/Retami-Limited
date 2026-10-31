# Retami Limited

Next.js website for Retami Limited.

Retami Limited is primarily an AI agency with software and AI engineering
capabilities. The current navbar and landing hero follow the owner's supplied
design reference, with three rotating backgrounds and vanilla CSS.

## Official documentation

Before continuing work in a new chat or account, read:

1. [track.md](track.md) — project context, user decisions, step-by-step progress,
   current implementation, and handoff notes.
2. [pr.md](pr.md) — official website requirements, with confirmed scope separated
   from proposals awaiting discussion.

Keep both documents updated after meaningful work and requirement changes.

## Development

Use Node.js 20.9 or newer (Node.js 24 LTS recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000. The backend health endpoint is available at
http://localhost:3000/api/health.

## Project structure

```text
src/
  assets/              User-provided images for static imports
  app/                 Pages, layouts, and global styles
    api/health/        Initial backend route
  components/
    Navbar/            Navbar.tsx and navbar.css
    Landing/           Landing.tsx and landing.css (hero, slideshow, dialogs)
  lib/                 Shared utilities and future server integrations
public/                Static assets
```

Frontend and backend share one Next.js App Router application. TypeScript strict
mode and vanilla CSS are configured, with `@/*` imports pointing to `src/*`.
Use vanilla CSS only. Tailwind dependencies and configuration have been removed.

## Checks and production

```sh
npm run typecheck
npm run build
npm start
```

The original design was rejected and replaced using the owner's screenshot.
The hero cycles through ribbon, landscape, and tree backgrounds with pause/manual
controls and reduced-motion support. Navigation opens supporting content dialogs.
Contact prepares an email draft and provides WhatsApp; it does not send automatically.
Admin authentication, database, email, and inquiry forms remain proposed future work.

The homepage also includes an interactive services section, implemented in
`src/components/Services/` with colocated TSX and vanilla CSS. The hero remains
viewport-sized while the page scrolls to the services content below.

## Deployment on Vercel

Import `HammadAlix/Retami-Limited` into Vercel. The Next.js application is at the
repository root: use the default root directory and Next.js framework preset.
Build command: `npm run build`. Keep the default output directory. No environment
variables are currently required. The lockfile records the tested dependencies.

The MVP includes Home, About and Contact pages. Contact prepares an email draft
and offers WhatsApp; it does not send enquiries automatically. Testimonials are
labelled samples pending approved feedback. Our Work opens an illustrative preview.
See [MVP_REVIEW.md](MVP_REVIEW.md) for checks and remaining launch items.

