/**
 * offer.ts — Core offer content for Veylor Advisory.
 *
 * Contains the headline, subheadline, CTA labels, deliverables,
 * out-of-scope list, fit criteria, pricing, and problem statements.
 * All homepage sections that reference the offer pull from here.
 */

/* ─── Hero copy ─── */

export const hero = {
  headline:
    'We connect, clean, and validate your business data so reporting becomes reliable and your AI analyst can work on trusted numbers.',
  subheadline:
    'For growing manufacturing and commerce companies with messy data across ERP, CRM, HR, finance, and spreadsheets.',
  ctaPrimary: 'Book a Discovery Call',
  ctaSecondary: 'See How It Works',
} as const;

/* ─── Core offer name ─── */

export const offerName = 'AI Data Foundation Sprint' as const;

/* ─── What the sprint delivers ─── */

export const deliverables = [
  'Connect up to 3–5 core systems (ERP, CRM, HR, finance, spreadsheets)',
  'Clean and standardize your data across sources',
  'Add validation and quality checks to catch issues automatically',
  'Centralize the cleaned data in a single trusted data layer',
  'Deploy an AI-powered analyst in one messaging channel (Teams, Slack, or WhatsApp)',
  'Add one simple internal input workflow or form if needed',
  'Provide basic technical handoff documentation',
] as const;

/* ─── What is out of scope ─── */

export const outOfScope = [
  'Dashboards and custom reporting',
  'Full internal app or platform development',
  'Major ERP or CRM reconfiguration',
  'Company-wide source-system cleanup',
  'Enterprise change management or training',
  '24/7 support or enterprise SLA support',
] as const;

/* ─── Pricing ─── */

export const pricing = {
  setup: 'Starting at $20,000',
  ongoing: '$5,000/month',
  ongoingNote: 'ongoing monitoring & maintenance as needed',
} as const;

/* ─── Problem cards shown in the "Why AI projects fail" section ─── */

export const problems = [
  {
    title: 'Data scattered across systems',
    description:
      'ERP, CRM, HR, finance, and spreadsheets each hold pieces of the picture — none tell the full story.',
    icon: 'scatter',
  },
  {
    title: 'Conflicting numbers',
    description:
      'Sales says one thing, finance says another. Leadership can\'t tell who\'s right.',
    icon: 'conflict',
  },
  {
    title: 'Slow, manual reporting',
    description:
      'Weekly reports take hours to assemble because someone has to pull, cross-check, and reformat every time.',
    icon: 'slow',
  },
  {
    title: 'IT supports tools, not data',
    description:
      'Your IT team keeps systems running but doesn\'t have the bandwidth or expertise to build a data architecture.',
    icon: 'tools',
  },
  {
    title: 'Spreadsheet logic everywhere',
    description:
      'Critical business rules live in spreadsheets that only one or two people understand.',
    icon: 'spreadsheet',
  },
  {
    title: 'AI interest without clean foundations',
    description:
      'You want to use AI internally, but there\'s no unified, validated dataset for it to work from.',
    icon: 'ai',
  },
] as const;

/* ─── Process steps shown in the "How it works" section ─── */

export const processSteps = [
  {
    step: 1,
    title: 'Connect core systems',
    description:
      'We connect your ERP, CRM, HR, finance tools, and key spreadsheets into a single pipeline.',
  },
  {
    step: 2,
    title: 'Clean and standardize',
    description:
      'Raw data is cleaned, deduplicated, and standardized so every metric means the same thing everywhere.',
  },
  {
    step: 3,
    title: 'Add checks and validation',
    description:
      'Automated quality checks catch missing fields, duplicates, and inconsistencies before they reach your reports.',
  },
  {
    step: 4,
    title: 'Centralize trusted data',
    description:
      'All validated data lands in one trusted layer — a single source of truth your team can rely on.',
  },
  {
    step: 5,
    title: 'Deploy AI-powered analyst',
    description:
      'An AI analyst is deployed into your messaging channel so your team can ask business questions in plain language.',
  },
] as const;

/* ─── Ideal client fit criteria ─── */

export const fitCriteria = [
  '$1M+ ARR',
  '50–200 employees',
  'Manufacturing or modern commerce',
  'Multiple disconnected tools (ERP, CRM, HR, finance, spreadsheets)',
  'No internal data architecture capability',
  'Manual or inconsistent reporting',
  'Serious about operational AI',
] as const;

/* ─── Trust strip items ─── */

export const trustItems = [
  { label: 'Built for growing teams with 50–200 employees', icon: 'team' },
  { label: 'AI-powered implementation', icon: 'ai' },
  { label: 'Deploy on AWS, GCP, or Supabase', icon: 'cloud' },
  { label: 'Works with Teams, WhatsApp, Telegram', icon: 'messaging' },
] as const;

/* ─── Technology section — what we use and what clients get ─── */

export const technologyCapabilities = [
  'Ingest data from diverse source systems',
  'Run SQL and Python transformations',
  'Materialize clean tables and views',
  'Apply built-in data quality checks',
  'Validate workflows via dry runs',
  'Orchestrate repeatable data pipelines',
  'Support practical deployment environments',
] as const;

export const technologyOutcomes = [
  {
    title: 'A usable data foundation',
    description: 'Clean, validated, centralized data your entire organization can trust.',
  },
  {
    title: 'Reliable reporting inputs',
    description: 'One set of numbers — no more conflicting spreadsheets or manual reconciliation.',
  },
  {
    title: 'An AI analyst on trusted data',
    description: 'Your team asks questions in plain language and gets answers based on validated numbers.',
  },
] as const;
