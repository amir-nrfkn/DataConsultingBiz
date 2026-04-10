/**
 * seo.ts — TypeScript types for SEO props passed to SeoHead.astro.
 *
 * Every page passes an SeoProps object to the layout/head component
 * so that title, description, canonical, and OG tags are always explicit.
 */

export interface SeoProps {
  /** Page title — appears in <title> and og:title. */
  title: string;

  /** Meta description — appears in <meta name="description"> and og:description. */
  description: string;

  /**
   * Canonical URL path (e.g. "/" or "/privacy").
   * The full URL is constructed by prepending site.url.
   */
  canonicalPath: string;

  /** Optional: set to true to add <meta name="robots" content="noindex">. */
  noIndex?: boolean;

  /** Optional: OG image path relative to the site root. */
  ogImage?: string;
}
