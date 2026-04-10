/**
 * examples.ts — Illustrative engagement examples for Veylor Advisory.
 *
 * These are NOT real client case studies — they are realistic examples
 * that show what a typical engagement looks like. The site labels them
 * as "illustrative engagement examples."
 */

export interface EngagementExample {
  /** Card title — describes the transformation. */
  title: string;
  /** Brief company profile for context (size, revenue, industry, tools). */
  profile: string;
  /** The data/reporting problem the company faced. */
  problem: string;
  /** What we implemented to solve it. */
  implementation: string;
  /** The business outcome after deployment. */
  outcome: string;
  /** Meta badges shown on the card (industry, size, etc.). */
  badges: string[];
  /** Short proof line shown prominently in the redesign. */
  highlight: string;
}

export const examples: EngagementExample[] = [
  {
    title: 'From weekly spreadsheet chaos to one trusted operations view',
    profile:
      'A 120-employee manufacturer with over $8M ARR pulling numbers from ERP, production spreadsheets, purchasing exports, and manually updated QA logs.',
    problem:
      'Operations, finance, and leadership all had different numbers. The weekly production report took nearly a full day to prepare, and no one trusted scrap, output, or late-order figures without manual checking.',
    implementation:
      'Connected ERP, production spreadsheets, QA logs, and purchasing data into one operating layer. Standardized order, production, and product records. Added quality checks for missing fields, duplicates, and mismatched order IDs. Deployed an AI analyst in Microsoft Teams and added a structured downtime capture form for supervisors.',
    outcome:
      'Reporting moved from manual spreadsheet assembly to a mostly automated workflow. Leadership got one trusted set of numbers, and managers could ask operational questions directly in Teams.',
    badges: ['Manufacturing', '120 employees', '$8M+ ARR'],
    highlight: 'Weekly reporting shifted from a full-day exercise to a trusted operating rhythm.',
  },
  {
    title: 'Unified revenue visibility across sales, marketing, and finance',
    profile:
      'A 75-employee commerce company doing roughly $5M ARR using Shopify, HubSpot, ad platform exports, QuickBooks, and spreadsheets.',
    problem:
      'Leadership could not get clean answers to questions like CAC by channel, profitability by product, why finance and marketing reports did not match, and what changed week over week.',
    implementation:
      'Connected Shopify, HubSpot, ad data, and finance data into one central repository. Standardized customer, order, campaign, and revenue data. Added validation for duplicate customers, refunds, attribution gaps, and missing campaign tags. Deployed an AI analyst into Slack and added a lightweight form for campaign notes and promotions.',
    outcome:
      'The company moved from fragmented channel reporting to one trusted commercial dataset. Leadership got faster answers on revenue, marketing efficiency, and product performance, and commercial teams could query the AI analyst inside Slack.',
    badges: ['Commerce', '75 employees', '$5M ARR'],
    highlight: 'Commercial decisions shifted from stitched exports to one consistent revenue story.',
  },
  {
    title: 'One operational data layer for service, sales, and fulfillment',
    profile:
      'A 160-employee distributor and service business with $12M+ ARR using a CRM, ERP, service logs, and spreadsheet-based field updates.',
    problem:
      'Sales, operations, and service teams each had partial visibility. Managers struggled to answer questions about overdue jobs, customers with both open service issues and unpaid invoices, fulfillment bottlenecks, and underperforming regions.',
    implementation:
      'Connected CRM, ERP, service logs, and spreadsheet field updates into one trusted data layer. Standardized customer IDs, service references, invoice statuses, and territory mappings. Added checks for broken cross-system links, stale job records, and missing updates. Deployed an AI analyst into WhatsApp and built a mobile-friendly form for field staff to submit structured service updates.',
    outcome:
      'The business gained a shared operational view across service, sales, and fulfillment. Managers stopped chasing updates across tools, and the company created a practical foundation for more reliable reporting and future automation.',
    badges: ['Distribution & Services', '160 employees', '$12M+ ARR'],
    highlight: 'Operational blind spots across teams gave way to one shared view of execution.',
  },
];
