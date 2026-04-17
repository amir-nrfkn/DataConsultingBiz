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
    'We connect, clean, and validate the systems running your business so leadership gets trusted numbers — no spreadsheet reconciliation.',
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
    'When your systems finally line up, leadership moves faster and internal AI becomes usable.',
  outcomes: [
    {
      title: 'Faster reporting',
      description:
        'Automated workflows replace manual spreadsheet assembly.',
    },
    {
      title: 'One trusted number set',
      description:
        'Every team works from the same definitions.',
    },
    {
      title: 'Cleaner internal AI',
      description:
        'AI answers grounded in validated data, not fragmented exports.',
    },
    {
      title: 'Less spreadsheet firefighting',
      description:
        'Business logic moves into repeatable pipelines with checks.',
    },
  ],
  comparison: {
    beforeTitle: 'Before',
    beforeItems: [
      'Manual exports and spreadsheet stitching',
      'Different numbers from different teams',
      'AI stalls on unreliable source data',
    ],
    afterTitle: 'After',
    afterItems: [
      'Core systems feed one validated layer',
      'Metrics mean the same thing everywhere',
      'Teams ask business questions against trusted data',
    ],
  },
} as const;

/* ─── Core offer name ─── */

export const offerName = 'AI Data Foundation Sprint' as const;

/* ─── Services shown in the services grid ─── */

export const services = [
  {
    title: 'Data Pipelines',
    description: 'Connect your existing systems into one reliable, automated data flow.',
    icon: 'pipeline',
  },
  {
    title: 'Automation',
    description: 'Replace manual reporting and spreadsheet tasks with repeatable workflows.',
    icon: 'automation',
  },
  {
    title: 'AI Analytics',
    description: 'Ask business questions in plain language and get answers from validated data.',
    icon: 'ai',
  },
] as const;

/* ─── What the sprint delivers ─── */

export const deliverables = [
  'Connect 3–5 core systems (ERP, CRM, finance, spreadsheets)',
  'Clean and standardize data so metrics mean the same thing everywhere',
  'Automated validation and quality checks',
  'One centralized, trusted data layer',
  'AI analyst deployed in your messaging channel',
  'Technical handoff documentation',
] as const;

/* ─── What is out of scope ─── */

export const outOfScope = [
  'Dashboard redesigns and broad BI rebuilds',
  'Full internal app or platform development',
  'Major ERP or CRM reconfiguration projects',
  'Large-scale historical cleanup or reconstruction',
  'Enterprise change management or training programs',
  '24/7 support or enterprise SLA support'
] as const;

/* ─── Pricing ─── */

export const pricing = {
  setup: 'Starting at $10,000',
  ongoing: 'Available upon request',
  ongoingNote: 'Ongoing monitoring & maintenance as needed',
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
    title: 'Explore current setup',
  },
  {
    step: '02',
    title: 'Determine a solution',
  },
  {
    step: '03',
    title: 'Build and validate',
  },
  {
    step: '04',
    title: 'Hand over and train',
  },
  {
    step: '05',
    title: 'Continued support',
  },
] as const;

/* ─── Ideal client fit criteria ─── */

export const fitCriteria = [
  '$1M+ ARR with growing operational complexity',
  '50–200 employees across multiple teams',
  'Manufacturing, distribution, or commerce',
  'Multiple disconnected tools (ERP, CRM, spreadsheets)',
  'No dedicated data architecture function',
  'Manual or inconsistent reporting',
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
  title: 'Book a call or send your details.',
  description:
    'Book a call to talk scope, or use the form to share context first.',
} as const;
