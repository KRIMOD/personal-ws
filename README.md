# Mamar Temam's Website

A personal website and MDX blog built with Next.js, React, TypeScript, and Tailwind CSS. It includes a small browser-based palette card generator at `/mounir`.

## Requirements

- Node.js 24
- npm 11

The supported versions are declared in `.nvmrc` and `package.json`.

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap entries, and social metadata. Set it to the final production origin without a trailing path.

## Content

Blog articles live in `src/content/*.mdx`. Their typed metadata and component imports are registered in `src/content/posts.ts`.

When adding an article:

1. Create the MDX file in `src/content`.
2. Import it and add its metadata to `src/content/posts.ts`.
3. Add any local images under `public/static/images`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Playwright tests run against the production server and require its Chromium browser:

```bash
npx playwright install chromium
```

## Deployment

The site is configured for Vercel or any platform capable of running `next build` and `next start`. Use Node.js 24 and install from `package-lock.json` with `npm ci`.

## Attribution And License

The original visual starting point was Lee Robinson's public Next.js blog template and has since been adapted. This repository does not currently declare a software license; choose one only after confirming the reuse terms that applied to the original version.
