# PRD: Landing Page Website for Veylor Advisory

## Objective

Build a professional, modern, SEO-friendly landing page for **Veylor Advisory**, a data consulting business focused on helping growing companies unify their business data and deploy a Bruin-powered AI analyst.

This website must:

* look credible to B2B buyers
* feel custom and polished, not like a generic AI-generated template
* be easy to read and navigate on desktop and mobile
* be lightweight, fast, and easy to maintain
* be optimized for search engines and easy for AI search systems to parse
* be deployed on Netlify
* include a working Netlify form for inbound lead capture

Primary conversion goal:

* book a discovery call / submit an inquiry form

Secondary goal:

* clearly explain the offer, process, fit, and expected outcomes

---

## Core business positioning

### Brand name

**Veylor Advisory**

### One-sentence offer

We connect, clean, and validate your business data so reporting becomes reliable and your AI analyst can work on trusted numbers.

### Core offer name

Bruin AI Data Foundation Sprint

### Target client profile

The website should speak directly to companies that:

* have $1M+ ARR
* have 50–200 employees
* are in traditional manufacturing or modern commerce
* use multiple systems like ERP, CRM, HR, finance, spreadsheets, forms, and ad hoc tools
* have IT support for websites, backend systems, or vendors, but no real internal data architecture capability
* struggle with slow, manual, inconsistent reporting
* want to use AI internally, but do not have a clean, centralized data foundation

### What the offer includes

* connect up to 3–5 core systems
* clean and standardize the data
* add validation and quality checks
* centralize the cleaned data in a single trusted data layer
* deploy a Bruin-powered AI analyst in one messaging channel
* add one simple internal input workflow/form if needed
* provide basic technical handoff documentation

### What is out of scope

* full custom internal software/platform development beyond one simple form
* dashboard/report building
* broad workflow automation outside agreed scope
* deep ERP/CRM reconfiguration
* large-scale source-system cleanup programs
* ongoing manual data cleanup by our team
* major historical data reconstruction unless explicitly scoped
* enterprise training/change management
* 24/7 support or enterprise SLA support

### Pricing shown on site

* Setup: Starting at $20,000 upfront
* Ongoing monitoring and maintenance: $5,000/month as needed

---

## Technical requirements

## Required stack

Use:

* Astro
* TypeScript
* static site generation
* custom CSS or SCSS modules
* Netlify for hosting
* Netlify native form handling

Do not use:

* React/Vue/Svelte unless absolutely necessary
* a heavy client-side framework
* unnecessary JS libraries
* Tailwind unless there is a very strong reason and the output remains highly polished and maintainable

### Why

This should be a static-first, low-JavaScript site with excellent crawlability, very good performance, and minimal maintenance.

---

## Design direction

The UI must feel:

* professional
* modern
* premium
* restrained
* clean
* readable
* serious enough for B2B buyers

It must not feel:

* generic SaaS template
* dark hacker theme
* crypto startup
* “AI agency” fluff
* overanimated or gimmicky
* obviously machine-generated

### Visual style

Use:

* light background
* strong typography
* large spacing
* subtle shadows
* fine borders
* one primary accent color
* a clear grid
* polished card layouts
* calm visual hierarchy

### Color direction

Use a restrained neutral palette with one accent.

Suggested:

* background: off-white / very light gray
* text: deep charcoal
* muted text: medium gray
* borders: soft gray
* accent: deep blue or blue-green

Do not overuse gradients. Any gradient usage must be subtle and premium.

### Typography

Use a system font stack only for maximum performance, compatibility, and clarity.

Use:

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  Helvetica,
  Arial,
  sans-serif;
```

Typography should be highly readable across Safari, Chrome, and Edge.

### Responsive behavior

The entire site must be fully mobile-friendly and feel intentionally designed on:

* 320px mobile
* tablet
* laptop
* desktop
* large desktop

Do not simply stack everything badly on mobile. Mobile must look considered and polished.

---

## SEO + AI search requirements

The site must be optimized for:

* Google search
* AI overviews / AI summaries
* ChatGPT / AI web search systems
* machine-readable parsing of the content

### Requirements

* all important content must exist as real HTML text, not embedded in images
* use semantic HTML throughout
* one clear H1 on the homepage
* proper H2/H3 hierarchy
* clean title and meta description
* canonical URL support
* Open Graph meta tags
* Twitter card meta tags
* JSON-LD structured data
* internal anchor navigation
* sitemap
* robots.txt

### Structured data to include

* Organization
* Service
* FAQPage only if the FAQ appears visibly on the page

### Content style for crawlability

* short paragraphs
* clear headings
* explicit statements of offer, process, outcomes, fit, and scope
* no vague jargon
* no buried meaning inside decorative UI

---

## Performance requirements

Performance matters. Keep the site light.

### Target

* Lighthouse Performance: 90+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 95+

### Rules

* minimal JS shipped to browser
* optimize all images
* use SVG where possible
* lazy-load below-the-fold media
* preload only truly critical assets
* avoid animation libraries unless necessary
* keep layout stable and avoid CLS
* no bloated dependencies

---

## Accessibility requirements

The site must:

* use semantic landmarks
* have visible focus states
* be keyboard navigable
* have proper contrast
* use labels for all form fields
* support reduced motion
* use alt text for meaningful images
* avoid text baked into images
* keep mobile menu accessible

---

## Netlify requirements

The website will be deployed on Netlify.

### Must include

* working Netlify form
* thank-you page
* honeypot spam protection
* proper form detection
* clean deployment compatibility

### Form behavior

Use a real HTML form with:

* `name="lead-capture"`
* `method="POST"`
* `data-netlify="true"`
* `netlify-honeypot="bot-field"`
* hidden input for `form-name`
* action redirect to `/thank-you`

### Form fields

Include:

* Name
* Work email
* Company name
* Company size
* Industry
* Current systems used
* Biggest reporting/data issue
* Optional phone
* Optional message

---

## Site structure

Build the following pages:

* `/` homepage / landing page
* `/thank-you`
* `/privacy`
* `/404`

Version 1 should focus on a very strong homepage.

---

## Homepage structure

Build the homepage using the following section order.

## 1. Header

Sticky header with:

* logo or clean wordmark placeholder for **Veylor Advisory**
* nav links: Offer, Examples, FAQ, Contact
* CTA button: Book a discovery call

Behavior:

* sticky
* mobile menu via hamburger
* clean transition on scroll

## 2. Hero

This is the most important section.

### Hero content

Headline:
We connect, clean, and validate your business data so reporting becomes reliable and your AI analyst can work on trusted numbers.

Subheadline:
For growing manufacturing and commerce companies with messy data across ERP, CRM, HR, finance, and spreadsheets.

Primary CTA:
Book a discovery call

Secondary CTA:
See how it works

### Hero layout

Desktop:

* left side = text + CTAs
* right side = polished visual composition

### Hero visual

Do not use a generic dashboard mockup.

Instead create a composed visual that includes:

* a simple trusted data layer diagram
* a messaging UI mockup showing the AI analyst answering a business question
* a small data quality check/status card

The hero visual should immediately communicate:

* integration
* data trust
* operational AI

## 3. Trust strip

Below the hero, include a clean trust/context strip.

Possible items:

* Built for growing teams with 50–200 employees
* Bruin-powered implementation
* Deploy on AWS, GCP, or Supabase
* Works with Teams, WhatsApp, Telegram

Do not use fake client logos.

## 4. Problem section

Headline:
Why most internal AI projects fail before they start

Use 4–6 polished problem cards covering:

* data scattered across systems
* conflicting numbers
* slow, manual reporting
* IT supports tools but not data architecture
* spreadsheet logic everywhere
* AI interest without clean foundations

## 5. Solution / process section

Headline:
How the Bruin AI Data Foundation Sprint works

Use a 5-step process:

1. Connect core systems
2. Clean and standardize data
3. Add checks and validation
4. Centralize trusted data
5. Deploy Bruin-powered AI analyst

Each step should have:

* title
* short explanation
* simple icon or visual marker

Desktop can use a horizontal process flow.
Mobile should stack elegantly.

## 6. What’s included section

Headline:
What we deliver

This section should clearly package the offer.

Include:

* connect up to 3–5 core systems
* clean and standardize the data
* add validation and quality checks
* centralize data in one trusted layer
* deploy a Bruin-powered AI analyst in one messaging channel
* add one simple internal input workflow/form if needed
* provide basic technical handoff documentation

Also include a small expandable or accordion area:
What’s not included

List:

* dashboards and custom reporting
* full internal app development
* major ERP/CRM reconfiguration
* company-wide source cleanup
* enterprise change management
* 24/7 support

## 7. Example engagements section

Use the three illustrative examples below.

Important:
Label them as:

* Illustrative engagement examples
  or
* What this looks like in practice

Do not present them as real completed client case studies.

### Example 1

Title:
From weekly spreadsheet chaos to a trusted operations AI analyst

Company profile:
A 120-employee manufacturer with over $8M ARR pulling numbers from ERP, production spreadsheets, purchasing exports, and manually updated QA logs.

Problem:
Operations, finance, and leadership all had different numbers.
The weekly production report took nearly a full day to prepare.
The business wanted visibility into production output, scrap rates, late orders, raw material usage, and customer order status.

Implementation:
Connected ERP, production spreadsheets, QA logs, and purchasing data into one central data layer.
Cleaned and standardized product, order, and production records.
Added data quality checks for missing fields, duplicates, and mismatched order IDs.
Deployed a Bruin-powered AI analyst in Microsoft Teams.
Added a simple form for supervisors to capture downtime reasons in structured format.

Outcome:
Reporting shifted from manual spreadsheet assembly to a mostly automated workflow.
Leadership got one trusted set of numbers.
Managers could ask operational questions directly in Teams.

### Example 2

Title:
Unified revenue visibility across sales, marketing, and finance

Company profile:
A 75-employee commerce company doing roughly $5M ARR using Shopify, HubSpot, ad platform exports, QuickBooks, and spreadsheets.

Problem:
Leadership could not get clean answers to questions like CAC by channel, profitability by product, why finance and marketing reports didn’t match, and what changed week over week.

Implementation:
Connected Shopify, HubSpot, ad data, and finance data into one central repository.
Standardized customer, order, campaign, and revenue data.
Added validation around duplicate customers, refunds, attribution gaps, and missing campaign tags.
Deployed a Bruin-powered AI analyst into Slack.
Added a lightweight internal form for campaign notes and promotions.

Outcome:
The company moved from fragmented channel reporting to one trusted commercial dataset.
Leadership got faster answers on revenue, marketing efficiency, and product performance.
Commercial teams could query the AI analyst inside Slack instead of relying on spreadsheet analysis.

### Example 3

Title:
One operational data layer for service, sales, and fulfillment

Company profile:
A 160-employee distributor and service business with $12M+ ARR using a CRM, ERP, service logs, and spreadsheet-based field updates.

Problem:
Sales, operations, and service teams each had partial visibility.
Managers struggled to answer questions about overdue jobs, customers with both open service issues and unpaid invoices, fulfillment bottlenecks, and underperforming regions.

Implementation:
Connected CRM, ERP, service logs, and spreadsheet field updates into one trusted data layer.
Standardized customer IDs, service references, invoice statuses, and territory mappings.
Added checks for broken cross-system links, stale job records, and missing updates.
Deployed a Bruin-powered AI analyst into WhatsApp.
Built a simple mobile-friendly form for field staff to submit structured service updates.

Outcome:
The business gained a shared operational view across service, sales, and fulfillment.
Managers stopped chasing updates across tools.
The company created a practical data foundation for more reliable reporting and future automation.

### Screenshot placeholders

Each example card/section should visually support future screenshot placement with a polished placeholder area and caption.

## 8. Why Bruin section

Headline:
Bruin-first implementation, outcome-first delivery

This section should explain Bruin clearly without sounding like a reseller page.

Explain that Bruin is used as the implementation engine to:

* ingest data
* run SQL/Python/R transformations
* materialize clean tables/views
* apply built-in data quality checks
* validate workflows via dry runs
* orchestrate repeatable pipelines
* support practical deployment environments

Make clear that the client is buying:

* a usable data foundation
* reliable reporting inputs
* an AI analyst that can work on trusted numbers

Do not make this section sound like tool worship.

## 9. Who it’s for section

Headline:
Best fit for companies that have outgrown spreadsheets but not yet built a real data layer

Use a checklist or comparison block showing fit criteria:

* $1M+ ARR
* 50–200 employees
* manufacturing or modern commerce
* multiple disconnected tools
* no internal data architecture capability
* manual or inconsistent reporting
* serious about operational AI

## 10. FAQ section

Include 6–8 realistic B2B questions:

* How long does the sprint take?
* Do we need a data warehouse already?
* Can this work with our ERP and CRM?
* Do we need to replace our current reports?
* Which messaging tools can the AI analyst use?
* What does the monthly retainer include?
* What is not included?
* How much support is needed from our internal team?

## 11. CTA + Netlify form

Headline:
See whether your systems are ready for a Bruin-powered AI analyst

Add:

* short explanatory copy
* inquiry form
* trust note such as: We’ll review your setup and reply personally.

## 12. Footer

Include:

* **Veylor Advisory** company name / wordmark placeholder
* one-sentence offer
* nav links
* privacy policy
* contact email placeholder
* LinkedIn placeholder
* copyright

---

## Copy and tone requirements

The copy should feel:

* clear
* serious
* concise
* commercially credible
* outcome-focused

Do not use:

* hype
* fluff
* “revolutionize your business”
* generic AI agency language
* fake urgency
* fake social proof

The page should emphasize:

* trusted numbers
* reliable reporting
* clean data foundations
* practical AI enablement
* clear scope

---

## File structure

Use this structure unless there is a better Astro-specific improvement:

```text
/
├── public/
│   ├── favicon/
│   ├── images/
│   ├── robots.txt
│   └── social/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── TrustStrip.astro
│   │   ├── ProblemSection.astro
│   │   ├── ProcessSection.astro
│   │   ├── DeliverablesSection.astro
│   │   ├── ExamplesSection.astro
│   │   ├── BruinSection.astro
│   │   ├── IdealClientSection.astro
│   │   ├── FAQSection.astro
│   │   ├── ContactFormSection.astro
│   │   ├── Footer.astro
│   │   └── SeoHead.astro
│   ├── data/
│   │   ├── site.ts
│   │   ├── offer.ts
│   │   ├── examples.ts
│   │   └── faq.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── thank-you.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── tokens.css
│   │   └── utilities.css
│   └── utils/
│       ├── schema.ts
│       └── seo.ts
├── astro.config.mjs
├── netlify.toml
├── package.json
└── README.md
```

---

## Content/data separation

Store editable site content in simple TS data files so copy changes do not require layout edits.

### `site.ts`

* site name
* URL
* email
* LinkedIn
* title defaults
* description defaults

### `offer.ts`

* headline
* subheadline
* one-sentence offer
* CTA labels
* deliverables
* out-of-scope list
* fit criteria
* pricing

### `examples.ts`

* three illustrative examples
* titles
* profiles
* problem
* implementation
* outcome
* screenshot placeholders

### `faq.ts`

* FAQ items

---

## Metadata requirements

Homepage must include:

* title tag
* meta description
* canonical
* Open Graph tags
* Twitter card tags
* favicon support
* theme-color

Suggested homepage title:
Veylor Advisory | Bruin AI Data Foundation for Manufacturing & Commerce

Suggested homepage description:
Veylor Advisory connects, cleans, and validates business data so reporting becomes reliable and your AI analyst can work on trusted numbers.

---

## Structured data requirements

Add JSON-LD for:

* Organization
* Service
* FAQPage if FAQ appears visibly on page

The structured data must reflect visible content accurately.

---

## Animation and interaction rules

Use restraint.

Allowed:

* subtle hover effects
* slight elevation on cards
* clean accordion motion
* header transition on scroll
* simple reveal-on-scroll only if lightweight and respectful of reduced-motion preferences

Not allowed:

* parallax
* heavy animation libraries
* hero video
* flashy counters
* typing text effects
* glowing blob aesthetics
* excessive gradients

---

## Visual implementation details

### Grid

Use a strong layout grid, likely 12 columns on desktop.

### Spacing

Use generous spacing and strong rhythm. Avoid cramped sections.

### Cards

Cards should feel premium:

* soft shadow
* subtle border
* comfortable padding
* consistent radius
* strong hierarchy

### Section backgrounds

Alternate very subtly using surface/background contrast to create flow.

### CTAs

Buttons should be polished and modern, not default browser-looking.
Primary CTA should stand out without looking loud.

---

## Privacy page

Create a clean basic privacy page suitable for a Netlify lead capture form.
It does not need to be complex, but it must look finished and professional.

Include:

* what information is collected via the form
* how it is used
* contact method for privacy concerns

Use placeholder business/contact info where necessary.

---

## Thank-you page

Create a simple polished thank-you page after form submission.

Content:

* confirmation that the inquiry was received
* note that someone will respond personally
* link back to homepage

---

## 404 page

Create a simple polished 404 page consistent with the site design.

---

## Netlify config requirements

Include Netlify-ready configuration as needed.

Need:

* form handling compatibility
* clean build output
* redirect support if needed
* security headers if practical

---

## Acceptance criteria

Consider the build complete only if all of the following are true:

* fully responsive and polished across mobile, tablet, laptop, and desktop
* fast, static-first, and lightweight
* working Netlify form
* working thank-you page
* semantic HTML throughout
* strong metadata
* structured data included
* sitemap and robots included
* accessible navigation and form behavior
* no fake testimonials or fake logos
* important content visible in text
* page feels custom and premium
* no obvious template or AI-generated visual blandness
* codebase is clean, maintainable, and organized

---

## Final instruction

Build the complete site based on this PRD.

Priorities in order:

1. credibility
2. clarity of offer
3. clean modern design
4. SEO / machine readability
5. performance
6. maintainability

Make smart implementation decisions where needed, but do not drift away from the business positioning or the visual standards above.
