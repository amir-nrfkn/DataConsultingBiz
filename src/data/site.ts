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

  /**
   * Booking CTA target.
   * Replace with the real scheduler URL before launch. For now it falls back
   * to the on-page inquiry section so review builds keep a working path.
   */
  bookingUrl: '#contact',

  /** Label used anywhere the primary booking CTA appears. */
  bookingLabel: 'Book a Discovery Call',

  /** LinkedIn company page (placeholder — update before launch). */
  linkedin: 'https://linkedin.com/company/veylor-advisory',

  /** Default page title used when no page-specific title is provided. */
  defaultTitle:
    'Veylor Advisory | AI Data Foundation for Manufacturing & Commerce',

  /** Default meta description for pages that don't set their own. */
  defaultDescription:
    'Veylor Advisory helps growing companies unify messy operational data into one trusted foundation for reliable reporting and practical internal AI.',

  /** One-sentence offer used in the footer and structured data. */
  tagline:
    'We build trusted data foundations so reporting gets faster, numbers get cleaner, and internal AI can work on the truth.',
} as const;
