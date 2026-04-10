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
      'Most engagements take 6–10 weeks from kickoff to a working AI analyst. The exact timeline depends on the number of source systems and the complexity of your data.',
  },
  {
    question: 'Do we need a data warehouse already?',
    answer:
      'No. We set up the data infrastructure as part of the sprint. You don\'t need any existing warehouse, data lake, or pipeline tooling in place before we start.',
  },
  {
    question: 'Can this work with our ERP and CRM?',
    answer:
      'Yes. We regularly work with systems like SAP, NetSuite, Microsoft Dynamics, Salesforce, HubSpot, Shopify, QuickBooks, and many others. If your system has an API or data export, we can connect it.',
  },
  {
    question: 'Do we need to replace our current reports?',
    answer:
      'No. The sprint creates a trusted data layer underneath your existing tools. Your current reports can stay in place — they just get fed better, cleaner data.',
  },
  {
    question: 'Which messaging tools can the AI analyst use?',
    answer:
      'We can deploy the AI analyst into Microsoft Teams, Slack, WhatsApp, or Telegram — whichever your team already uses day to day.',
  },
  {
    question: 'What does the monthly retainer include?',
    answer:
      'The ongoing retainer covers monitoring data pipelines for failures, maintaining data quality checks, adapting to source-system changes, and minor adjustments to the AI analyst. It does not include new feature development or major scope expansion.',
  },
  {
    question: 'What is not included?',
    answer:
      'The sprint does not include dashboards, custom reporting, full internal app development, major ERP/CRM reconfiguration, company-wide data cleanup programs, enterprise change management, or 24/7 support.',
  },
  {
    question: 'How much support is needed from our internal team?',
    answer:
      'We typically need one internal point of contact who can coordinate access to your systems and answer domain-specific questions. We don\'t require dedicated engineering resources on your side.',
  },
];
