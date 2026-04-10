/**
 * site.ts — Global site configuration for Veylor Advisory.
 *
 * Single source of truth for the site name, URL, contact info, and
 * default SEO metadata. Every page/component reads from here so that
 * updating a value (especially the domain) propagates everywhere.
 *
 * When switching from the temporary domain to the production domain,
 * update ONLY the `url` field below.
 */

export const site = {
  /** Brand name displayed in the header, footer, and metadata. */
  name: 'Veylor Advisory',

  /**
   * Production site URL — used for canonical links, OG tags, sitemap.
   * IMPORTANT: Also update `site` in astro.config.mjs when changing this.
   */
  url: 'https://exhibitionsgate.com',

  /** Contact email (placeholder — update before launch). */
  email: 'hello@veyloradvisory.com',

  /** LinkedIn company page (placeholder — update before launch). */
  linkedin: 'https://linkedin.com/company/veylor-advisory',

  /** Default page title used when no page-specific title is provided. */
  defaultTitle:
    'Veylor Advisory | AI Data Foundation for Manufacturing & Commerce',

  /** Default meta description for pages that don't set their own. */
  defaultDescription:
    'Veylor Advisory connects, cleans, and validates business data so reporting becomes reliable and your AI analyst can work on trusted numbers.',

  /** One-sentence offer used in the footer and structured data. */
  tagline:
    'We connect, clean, and validate your business data so reporting becomes reliable and your AI analyst can work on trusted numbers.',
} as const;
