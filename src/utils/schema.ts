/**
 * schema.ts — JSON-LD structured data generators for Veylor Advisory.
 *
 * Generates Organization, Service, and FAQPage schema objects that are
 * injected into the <head> by SeoHead.astro. These help Google and AI
 * search systems understand the site's content.
 */

import { site } from '../data/site';
import { faqItems } from '../data/faq';

/**
 * Generates the Organization JSON-LD schema.
 *
 * @returns A schema.org Organization object as a plain JS object.
 */
export function getOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.defaultDescription,
    sameAs: [site.linkedin],
  };
}

/**
 * Generates the Service JSON-LD schema.
 *
 * @returns A schema.org Service object describing the AI Data Foundation Sprint.
 */
export function getServiceSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Data Foundation Sprint',
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    description:
      'Connect, clean, and validate business data from multiple systems into a trusted data layer, then deploy an AI-powered analyst in your team\'s messaging channel.',
    areaServed: 'Worldwide',
    serviceType: 'Data Consulting',
  };
}

/**
 * Generates the FAQPage JSON-LD schema from the faq.ts data file.
 *
 * @returns A schema.org FAQPage object with all visible FAQ items.
 */
export function getFaqSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
