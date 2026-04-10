/**
 * Astro configuration for Veylor Advisory.
 *
 * - Static output (SSG) for maximum performance and Netlify compatibility.
 * - Sitemap integration auto-generates sitemap-index.xml at build time.
 * - Site URL is set here for canonical URLs and sitemap generation.
 *   Update this when switching from the temporary domain to production.
 */
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  /* The live site URL — used for canonical links, OG tags, and sitemap. */
  site: 'https://exhibitionsgate.com',

  /* Static site generation — zero server runtime needed. */
  output: 'static',

  integrations: [
    /* Auto-generates sitemap-index.xml with all public pages. */
    sitemap(),
  ],

  /* Opt out of anonymous telemetry. */
  telemetry: false,
});
