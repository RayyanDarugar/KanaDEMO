// ============================================================
// INDUSTRY CONFIG — Financial Services (Banks / Insurers / Wealth)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/financial-services-gtm-brief.md (all
// claims traced; roster/positioning from Rayyan's screenshot 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "financial-services",
  label: "Financial Services",
  accent: "#1762d3", // royal blue. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire institution",
  logoStripTitle: "Integrates with the platforms you already run",

  // ── GLOBAL ASSETS ──────────────────────────────────────────
  assets: {
    logo: "../../brand-assets/SVG/logo__img.svg",
    heroBg: "../../brand-assets/WEBP/69fb45f0d8e74cb7084b30ee_red_section_1440.webp",
    ctaBg: "../../brand-assets/WEBP/69fb468eade8f66cd27cd0bb_cta_1440.webp",
    footer: {
      desktop: "../../brand-assets/WEBP/69fc4d1e202d2c8cc1ce4ddb_footer_1440.webp",
      tablet: "../../brand-assets/WEBP/69fc4d1f48da64e0765bf9c9_footer_768.webp",
      mobile: "../../brand-assets/WEBP/69fc4d1f9ec4a370e9cb5310_footer_375.webp",
    },
    soc2Badge: "../../brand-assets/SVG/6a0d92b8252835ff12a85bb2_Vanta_Compliance_SOC2 2.svg",
    partnerLogos: [
      "../../brand-assets/SVG/69b97816348ad5bc6570826d_logo__partner--01.svg",
      "../../brand-assets/SVG/69b978162d56501c2d723beb_logo__partner--02.svg",
      "../../brand-assets/SVG/69b97816bb693354c46bcfcb_logo__partner--03.svg",
      "../../brand-assets/SVG/69b97816e64bdf68ba5fec38_logo__partner--04.svg",
      "../../brand-assets/SVG/69b97816b4dbdbf258121188_logo__partner--06.svg",
      "../../brand-assets/SVG/69b97816ec64cd9a7bf9d349_logo__partner--07.svg",
      "../../brand-assets/SVG/69b97816262b30d077fba720_logo__partner--08.svg",
      "../../brand-assets/SVG/69b9781623e9b90fb5f2a8d2_logo__partner--09.svg",
      "../../brand-assets/SVG/69b978161f64f294213b1a64_logo__partner--10.svg",
    ],
  },

  // ── NAV ────────────────────────────────────────────────────
  nav: {
    industries: [
      "Financial Services",
      "CPG",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Manufacturing",
      "Pharma",
      "Travel & Hospitality",
      "Media Networks",
      "Print / Digital / Audio",
      "Streaming & Video",
      "QSR",
      "Healthcare",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "Financial Services Marketers Can't Act on <em>the Signals They Already Have</em>",
    subheadline: "Banks, insurers, and wealth managers are sitting on extraordinarily rich customer data — but compliance constraints, legacy systems, and siloed channels prevent that data from ever powering real-time, relevant marketing. Kana gives you compliance-ready content velocity, propensity-driven cross-sell, and one governed customer view connecting digital intent to the branch.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Product offers aren't timed to life events or behavioral signals",
      description: "A customer who just got married, changed employers, or made a large transfer should trigger a tailored offer within hours — not appear on a quarterly campaign list. Trigger-based programs return 5x+ what batch calendars do, but the calendar survives because nothing faster clears review.",
    },
    {
      title: "Compliance review slows campaign velocity to a crawl",
      description: "Every campaign variant, audience segment, and triggered message requires compliance sign-off — creating multi-week bottlenecks that kill the timeliness personalization requires. The average review cycle runs 5–15 business days per asset.",
    },
    {
      title: "Branch and digital channels operate independently",
      description: "A customer's digital browsing behavior — researching a mortgage, exploring investment products — never reaches the branch associate before the next appointment. The banker works from a static CRM record while the customer wonders why the app knew and the branch didn't.",
    },
  ],

  // ── SOLUTIONS — 4 FS-native Kana products ──────────────────
  solutions: [
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for Marketing Ops & Compliance Teams",
      title: "Turn campaign performance into answers your team can act on",
      description: "Marketing Intelligence lets marketing ops ask plain-language questions about campaign performance and get grounded answers in seconds, plus weekly narratives your team reviews and approves before they go out. Every suggested action comes with the evidence behind it, and nothing ships without a human sign-off — insight-to-action drops from weeks to hours.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: "../../brand-assets/MP4/Marketing Intelligence_x1.5.mp4",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Analytics & Cross-Sell Teams",
      title: "Cross-sell on propensity, not on rules",
      description: "Audience Builder applies AI-driven propensity models to identify the right customer, product, channel, and moment for every cross-sell opportunity — replacing the simple behavioral rules most programs still fire on. A customer's third product keeps them nearly seven years instead of eighteen months, and the model that finds that customer no longer waits on a data-science backlog.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for Retail Network & Branch Experience Teams",
      title: "The mortgage they researched Tuesday reaches the banker by Wednesday",
      description: "The Agentic Data Platform connects your digital channels and CRM into one governed customer view, so the apps your teams already use can surface what a customer has been exploring — instead of relationship bankers working from a lead list that's already out of date.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Personalization",
      roleLabel: "Coming Soon — Built for Lifecycle & CRM Teams",
      title: "Offers built around the customer, not the calendar",
      description: "Personalization scores every customer's next-best offer — channel, content, timing, frequency — from their real behavior and account activity, with a plain-language reason behind each one, for your team to review and send. The customer who just changed employers or made a large transfer gets matched to a tailored offer within hours of approval — instead of surfacing on the next quarterly campaign list after the moment has passed.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "5–15 days", label: "average compliance review cycle for financial marketing content (Wolf Financial)" },
    { number: "5x+", label: "higher return from trigger-based marketing vs. calendar batch campaigns (Vericast via The Financial Brand)" },
    { number: "6.8 yrs", label: "average tenure of a three-product customer — vs. 18 months with one product (ABA Banking Journal)" },
    { number: "3%", label: "of customers use the personalization tools banks offer, while 72% say personalization decides where they bank (MX)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading financial institution on compressing compliance review cycles]",
    name: "[Name]",
    title: "[Title], [Financial Institution]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana fit into our compliance review process?",
      a: "Marketing Intelligence doesn't sit inside your compliance workflow today — it sits upstream, giving marketing ops plain-language answers on campaign performance and narratives that go through your team's review and approval before anyone sees them."
    },
    {
      q: "How does Kana handle model risk and AI governance?",
      a: "Kana ships with centralized data governance and AI policy management — every model and agent runs with human oversight, documented logic, and audit-ready controls. That maps to how supervisory guidance treats AI marketing tools under model-risk frameworks like SR 11-7: inventory, validation, and ongoing monitoring, not black boxes."
    },
    {
      q: "When will Personalization be available?",
      a: "Personalization is coming soon. It builds on the same foundation as Audience Builder and the Agentic Data Platform, so institutions deploying those today are positioned to activate life-event offer triggers the moment it ships. Book a demo to see the roadmap and get early access."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director of Lifecycle & CRM Marketing",
      painPoints: [
        {
          text: "Offers ship on the quarterly campaign calendar while the life events that should trigger them — marriage, job change, large transfer — pass unanswered.",
        },
        {
          text: "Trigger-based programs return 5x+ what batch campaigns do, but every triggered variant needs its own compliance sign-off, so the calendar survives.",
        },
        {
          text: "Journeys run on time-of-quarter logic in a legacy automation platform, not on the behavioral and transactional signals the institution already holds.",
        }
      ],
      solution: {
        name: "Personalization (Coming Soon)",
        description: "Scores every customer's next-best offer — content, timing, channel — from behavioral and transactional signals, with a reason behind every decision, for your team to approve and send. Life-event-driven offers reach the customer within hours of approval, not months later on the next quarterly list. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "Marketing Operations Manager",
      painPoints: [
        {
          text: "Every campaign variant and audience segment enters a 5–15 business day compliance review cycle before it can ship.",
        },
        {
          text: "Revision tracking across marketing, compliance, and legal is the documented bottleneck — and the audit trail is assembled by hand.",
        },
        {
          text: "Regulators ask for review turnaround, rework rates, and time-to-archive — metrics the current email-thread workflow can't produce.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "Plain-language answers on campaign performance and narratives that go through your team's review before distribution — no export-and-reconcile cycle. Marketing Ops gets decision-grade reporting in seconds instead of days.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Director of Marketing Analytics",
      painPoints: [
        {
          text: "Cross-sell programs fire on simple behavioral rules instead of models that predict propensity, timing, and channel preference simultaneously.",
        },
        {
          text: "Propensity models still run on demographics and campaign response; the transaction-level models that actually predict need data-science capacity the team doesn't have.",
        },
        {
          text: "The products-per-customer report is the profit metric that matters — a three-product customer stays 6.8 years — and the current triggers barely move it.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "AI-driven propensity models identify the right customer, product, channel, and moment for every cross-sell opportunity — operationalized without a modeling backlog, and traceable from model to campaign to origination.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Head of Retail Network",
      painPoints: [
        {
          text: "Relationship bankers prepare for appointments from static CRM lead lists that lack depth and context.",
        },
        {
          text: "A customer's digital browsing — mortgage research, investment product pages — never reaches the branch before the conversation happens.",
        },
        {
          text: "Customers experience the institution as two businesses: an app that knows them and a branch that doesn't.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "Connects digital channels and CRM into one governed customer view, so the apps your relationship bankers already use can surface what a customer has been exploring — not a static lead list from last week's export.",
        linkLabel: "See Agentic Data Platform",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "CMO / Head of Retail Marketing",
      painPoints: [
        {
          text: "72% of customers say personalization influences where they bank; only 3% use the personalization tools the institution offers.",
        },
        {
          text: "Fintechs lead incumbents 47% to 30% in advanced AI adoption — shipping in hours what takes the institution three weeks.",
        },
        {
          text: "The board expects an AI answer that survives model-risk review, while 78% of banks remain stuck in tactical genAI pilots.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "The platform anchor: compliance-ready velocity, governed AI with human oversight, and marketing performance connected to origination — the story that closes the gap between the data the institution holds and the experiences it ships.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "The signals are already in your systems.<br>Kana lets you act on them.",
    columns: [
      {
        title: "Get answers in seconds, not days",
        description: "Plain-language questions over your campaign data get grounded answers in seconds, with narratives your team reviews and approves before anyone else sees them.",
        linkLabel: "Learn more about Marketing Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Find the third product before the rules do",
        description: "Propensity models score every customer for the right product, channel, and moment — replacing rule-based triggers with predictions that compound tenure and deposits.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Give the branch what the app already knows",
        description: "Digital and CRM data connect into one governed customer view, so the tools your branch teams use can start the conversation where the customer's research left off.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for financial services teams",
    type: "White Paper",
    title: "Acting on the signals you already have",
    description: "Banks hold the richest first-party data in any industry and ship the slowest campaigns. How leading institutions are compressing compliance cycles and turning life events into offers — without loosening a single control.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // FS-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Adobe", className: "color-adobe" },
      { text: "Braze", className: "color-braze" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "BigQuery", className: "color-bigquery" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to Salesforce, Adobe, Braze, your core banking data, and your compliance archive — no rip-and-replace, no migration, no new governance gaps.",
    columns: [
      {
        title: "Get decision-grade answers without waiting on a data team",
        description: "Marketing Intelligence — plain-language questions over your campaign data, answered in seconds, with narratives and suggested actions that go through your team's review before they ship.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Run propensity models without a modeling backlog",
        description: "Audience Builder — AI-driven propensity scoring on the customer data you already hold, governed with human oversight and documented logic that stands up to model-risk review.",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Give every banker the context the app already has",
        description: "Agentic Data Platform — digital and CRM data connect into one governed customer view your relationship bankers' tools can draw on. One customer, one story, on both sides of the counter.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Act on the signals you already have.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
