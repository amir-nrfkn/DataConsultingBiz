/**
 * offer.ts — Core offer content for Veylor Advisory.
 *
 * Contains the headline, subheadline, CTA labels, deliverables,
 * out-of-scope list, fit criteria, pricing, and problem statements.
 * All homepage sections that reference the offer pull from here.
 */

/* ─── Hero copy ─── */

export const hero = {
  eyebrow: 'For CEOs and operators who need one version of the truth',
  headline:
    'Build the data foundation your reporting and AI can finally rely on.',
  subheadline:
    'Veylor Advisory connects, cleans, and validates the systems already running your business so leadership gets trusted numbers without spreadsheet reconciliation.',
  ctaPrimary: 'Book a Discovery Call',
  ctaSecondary: 'Send Your Details',
  highlights: [
    '3–5 core systems unified',
    '6–10 week engagement',
    'AI analyst in your team’s existing channel',
  ],
  visualTitle: 'Trusted operating layer',
  visualSources: ['ERP', 'CRM', 'Finance', 'Spreadsheets'],
  visualPrompt: 'Why did margin slip last week?',
  visualResponse:
    'Gross margin fell 2.4 points because expedited freight and scrap increased on the Line B order mix.',
  visualStats: [
    { label: 'Reporting prep', value: 'Hours to minutes' },
    { label: 'Leadership view', value: 'One trusted number set' },
    { label: 'AI answers', value: 'Grounded in validated data' },
  ],
} as const;

export const proofIntro = {
  eyebrow: 'Why this changes the business',
  title: 'A clean data foundation fixes more than reporting.',
  description:
    'When ERP, CRM, finance, operations, and spreadsheet logic finally line up, leadership can move faster and internal AI becomes usable instead of risky.',
  outcomes: [
    {
      title: 'Faster reporting',
      description:
        'Teams stop rebuilding the weekly narrative by hand and start reviewing decisions sooner.',
    },
    {
      title: 'One trusted number set',
      description:
        'Finance, operations, and leadership work from the same definitions instead of reconciling conflicting exports.',
    },
    {
      title: 'Cleaner internal AI',
      description:
        'Questions in Slack, Teams, or WhatsApp resolve against validated data instead of fragmented source systems.',
    },
    {
      title: 'Less spreadsheet firefighting',
      description:
        'Critical business logic moves out of brittle analyst workbooks and into repeatable pipelines with checks.',
    },
  ],
  comparison: {
    beforeTitle: 'Before',
    beforeItems: [
      'Reporting depends on manual exports and spreadsheet stitching',
      'Leadership sees different numbers from different teams',
      'AI experiments stall because the source data is unreliable',
    ],
    afterTitle: 'After',
    afterItems: [
      'Core systems feed one validated operating layer',
      'Metrics mean the same thing across finance, ops, and commercial teams',
      'Teams can ask practical business questions against trusted data',
    ],
  },
} as const;

/* ─── Core offer name ─── */

export const offerName = 'AI Data Foundation Sprint' as const;

/* ─── What the sprint delivers ─── */

export const deliverables = [
  'Connect up to 3–5 core systems across finance, operations, commercial, and spreadsheet workflows',
  'Clean and standardize the data so the same metric means the same thing everywhere',
  'Add validation and quality checks that catch missing fields, duplicates, and bad links automatically',
  'Centralize the cleaned output in one trusted data layer',
  'Deploy an AI analyst in one internal messaging channel',
  'Add one simple internal form or structured input workflow if needed',
  'Provide technical handoff documentation for ongoing ownership',
] as const;

/* ─── What is out of scope ─── */

export const outOfScope = [
  'Dashboard redesigns and broad BI rebuilds',
  'Full internal app or platform development',
  'Major ERP or CRM reconfiguration projects',
  'Large-scale historical cleanup or reconstruction',
  'Enterprise change management or training programs',
  '24/7 support or enterprise SLA support',
] as const;

/* ─── Pricing ─── */

export const pricing = {
  setup: 'Starting at $20,000',
  ongoing: '$5,000/month',
  ongoingNote: 'ongoing monitoring & maintenance as needed',
  setupLabel: 'Sprint engagement',
  supportLabel: 'Ongoing support',
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
    step: '01',
    title: 'Connect core systems',
    description:
      'We map the systems actually driving reporting today and connect the highest-leverage data sources first.',
    detail:
      'ERP, CRM, finance tools, operational logs, and key spreadsheet workflows are pulled into one delivery path instead of living in separate exports.',
  },
  {
    step: '02',
    title: 'Clean and standardize',
    description:
      'Raw data is cleaned, deduplicated, and normalized so shared metrics have one definition across the business.',
    detail:
      'Names, IDs, timestamps, and business rules are brought into alignment so finance, commercial, and operations teams stop working from competing interpretations.',
  },
  {
    step: '03',
    title: 'Add checks and validation',
    description:
      'Automated checks catch the failures that normally surface only after a leadership meeting starts.',
    detail:
      'Missing fields, duplicate records, broken joins, stale updates, and mismatched references are flagged before they flow into reporting or AI answers.',
  },
  {
    step: '04',
    title: 'Centralize trusted data',
    description:
      'Validated outputs land in one trusted operating layer your team can rely on.',
    detail:
      'This becomes the stable foundation under reporting, analysis, and future automation work instead of another fragile transformation chain.',
  },
  {
    step: '05',
    title: 'Deploy AI-powered analyst',
    description:
      'An AI analyst is deployed into your messaging channel so your team can ask business questions in plain language.',
    detail:
      'Teams get fast answers inside Slack, Teams, or WhatsApp, grounded in the validated data layer rather than ad hoc spreadsheets.',
  },
] as const;

/* ─── Ideal client fit criteria ─── */

export const fitCriteria = [
  '$1M+ ARR with growing operational complexity',
  '50–200 employees across finance, operations, and commercial teams',
  'Manufacturing, distribution, or modern commerce workflows',
  'Multiple disconnected tools across ERP, CRM, finance, and spreadsheets',
  'No dedicated internal data architecture function',
  'Manual, slow, or inconsistent reporting for leadership',
  'A real interest in practical internal AI, not experimentation theater',
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

export const closeCta = {
  eyebrow: 'Two ways to start',
  title: 'Book a call if you want to talk scope. Send details if you want us to review the situation first.',
  description:
    'The booking path is the fastest route. The inquiry form is there if you prefer to share context before scheduling.',
} as const;
