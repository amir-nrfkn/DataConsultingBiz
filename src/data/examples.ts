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
      'Operations, finance, and leadership all had conflicting numbers, turning weekly reporting into a full-day manual exercise.',
    implementation:
      'Connected their ERP, spreadsheets, and QA logs into one operating layer with built-in data quality checks.',
    outcome:
      'Leadership gained one trusted set of numbers, and managers now ask operational questions directly in Teams.',
    badges: ['Manufacturing', '120 employees', '$8M+ ARR'],
    highlight: 'Weekly reporting shifted from a full-day exercise to a trusted operating rhythm.',
  },
  {
    title: 'Unified revenue visibility across sales, marketing, and finance',
    profile:
      'A 75-employee commerce company doing roughly $5M ARR using Shopify, HubSpot, ad platform exports, QuickBooks, and spreadsheets.',
    problem:
      'Leadership struggled with mismatched finance and marketing reports, making CAC and profitability hard to track.',
    implementation:
      'Unified Shopify, HubSpot, ad platforms, and finance data into a central, validated revenue dataset.',
    outcome:
      'Commercial decisions now rely on one consistent revenue story, and teams query data directly in Slack.',
    badges: ['Commerce', '75 employees', '$5M ARR'],
    highlight: 'Commercial decisions shifted from stitched exports to one consistent revenue story.',
  },
  {
    title: 'One operational data layer for service, sales, and fulfillment',
    profile:
      'A 160-employee distributor and service business with $12M+ ARR using a CRM, ERP, service logs, and spreadsheet-based field updates.',
    problem:
      'Fragmented visibility across sales, operations, and service left managers chasing updates across different tools.',
    implementation:
      'Connected their CRM, ERP, and field service logs into one shared data layer with standardized metrics.',
    outcome:
      'The business established a shared operational view, allowing teams to rely on one source of truth for updates.',
    badges: ['Distribution & Services', '160 employees', '$12M+ ARR'],
    highlight: 'Operational blind spots across teams gave way to one shared view of execution.',
  },
];
