# PitchOps Public Website

This repository contains the public PitchOps website and documentation. It is a static
Astro site for the public domain and does not contain application code, authentication,
API calls, secrets or admin logic.

PitchOps is presented as a practical platform for football pitch operations,
maintenance history, usage tracking, readiness monitoring and multi-venue tournament
coordination.

The site is multilingual from the start, with controlled translation strings in
`src/i18n/ui.ts`. English is the default language at `/`; Polish, German, Spanish,
French and Portuguese use prefixed routes.

## Local Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Deployment

The site is deployed with Cloudflare Pages.

Cloudflare Pages should be configured to build this repository from the production
branch using:

```txt
npm run build
```

The static output directory is:

```txt
dist
```

## Domains

The public website is served from:

```txt
https://www.pitchops.app
```

The PitchOps application is separate and is linked from Login / Open PitchOps buttons:

```txt
https://pitchops.app
```

The custom domain is managed in Cloudflare Pages.

## Language Routes

English routes are unprefixed:

```txt
/
/docs/
/docs/getting-started/
```

Localized routes use language prefixes:

```txt
/pl/
/de/
/es/
/fr/
/pt/
```

Documentation follows the same pattern, for example `/pl/docs/`,
`/de/docs/`, `/es/docs/`, `/fr/docs/` and `/pt/docs/`.
