/**
 * faq.ts — Frequently asked questions for Veylor Advisory.
 *
 * Used by FAQSection.astro for the accordion UI and by schema.ts
 * to generate FAQPage JSON-LD structured data.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How long does the sprint take?',
    answer:
      'Most engagements take 6–10 weeks from kickoff to a working AI analyst. The exact timeline depends on the number of source systems.',
  },
  {
    question: 'Do we need a data warehouse already?',
    answer:
      'No. We set up the data infrastructure as part of the sprint. You don\'t need any existing warehouse or tooling.',
  },
  {
    question: 'Can this work with our ERP and CRM?',
    answer:
      'Yes. If your system has an API or data export, we can connect it (NetSuite, Salesforce, HubSpot, Shopify, QuickBooks, etc.).',
  },
  {
    question: 'Do we need to replace our current reports?',
    answer:
      'No. We build a trusted data layer underneath your existing tools so your current reports get fed cleaner data.',
  },
  {
    question: 'Which messaging tools can the AI analyst use?',
    answer:
      'We deploy the AI analyst into whichever tool your team already uses: Microsoft Teams, Slack, WhatsApp, or Telegram.',
  },
  {
    question: 'What does the monthly retainer include?',
    answer:
      'Monitoring data pipelines, maintaining quality checks, and adapting to source-system changes. It does not include major new features.',
  },
  {
    question: 'What is not included?',
    answer:
      'Dashboards, full app development, major ERP reconfiguration, historical cleanup, or enterprise change management.',
  },
  {
    question: 'How much support is needed from our internal team?',
    answer:
      'Just one point of contact to coordinate access and answer domain questions. No dedicated engineers required from your side.',
  },
];
