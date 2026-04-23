# Veylor Advisory — Marketing Site

Landing page website for **Veylor Advisory**, a data consulting business that helps growing companies unify their business data and deploy a Bruin-powered AI analyst on top of a trusted data foundation.

The site's primary conversion goal is to capture inbound leads via a Netlify-hosted inquiry form and book discovery calls.

## Tech stack

- **[Astro](https://astro.build)** — static site generation, zero client-side framework
- **TypeScript** — typed configuration and utilities
- **Custom CSS** — no Tailwind or component library; styles live alongside components
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — auto-generated `sitemap-index.xml`
- **Netlify** — hosting and native form handling (see `netlify.toml`)

Node `>=22.12.0` is required (see `package.json`).

## Project structure

```text
/
├── public/                 Static assets served as-is (favicons, robots.txt, etc.)
├── src/
│   ├── components/         Section components (Hero, Problem, Process, FAQ, ContactForm, …)
│   ├── data/               Structured content consumed by components
│   ├── images/             Imported images processed by Astro
│   ├── layouts/            BaseLayout.astro — shared shell, head, header, footer
│   ├── pages/              Routes: index, privacy, thank-you, 404
│   ├── styles/             Global styles and shared CSS
│   └── utils/              Helpers
├── astro.config.mjs        Site URL, static output, sitemap integration
├── netlify.toml            Build settings and form handling
├── PRD.md                  Product requirements (positioning, copy, scope)
└── package.json
```

Astro maps any `.astro` or `.md` file in `src/pages/` to a route based on its filename.

## Commands

All commands are run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the production build locally             |
| `npm run astro ...`       | Run Astro CLI commands (`astro add`, `astro check`, …) |
| `npm run astro -- --help` | Show Astro CLI help                              |

## Deployment

The site deploys to Netlify as a static build. Configuration lives in `netlify.toml`. The contact form uses Netlify's native form handling and submissions redirect to `/thank-you`.

Before promoting to production, update the `site` field in `astro.config.mjs` to the live domain so canonical URLs and the generated sitemap point to the correct origin.

## Content and positioning

Copy, offer details, pricing, target client profile, and scope are documented in [`PRD.md`](./PRD.md). Update the PRD alongside any meaningful changes to on-page messaging.
