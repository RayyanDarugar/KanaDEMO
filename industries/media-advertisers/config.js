// ============================================================
// INDUSTRY CONFIG — Media & Entertainment
// (slug kept as media-advertisers for URL stability)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/media-entertainment-gtm-brief.md (all
// claims traced; roster/positioning from Rayyan's screenshot 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "media-advertisers",
  label: "Media & Entertainment",
  accent: "#7f63c5", // medium purple. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire growth team",
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
      "Media & Entertainment",
      "CPG",
      "Retail & E-Commerce",
      "Manufacturing",
      "Financial Services",
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
    headline: "Subscription Brands Are Losing <em>Members They Could Have Kept</em>",
    subheadline: "Streaming services, digital publications, and subscription commerce businesses share a common enemy: churn. The data to predict it exists — the problem is connecting it to real-time marketing action. Kana wires your churn models, win-back windows, and offer tests directly into the campaigns that act on them.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Churn prediction models aren't connected to real-time intervention",
      description: "Data science teams build churn models that score members monthly. By the time the scores reach a campaign, the at-risk subscriber has already cancelled — probabilities nobody acted on, in an industry averaging 4.6% monthly churn.",
    },
    {
      title: "Win-back campaigns reach churned subscribers too late",
      description: "Re-engagement sequences typically launch 30–60 days post-churn, after subscriber intent to return has collapsed. The best win-back window is often within the first 7 days — and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time.",
    },
    {
      title: "Bundle and pricing test cycles are slow and manual",
      description: "Testing new bundle configurations, promotional pricing, or plan upgrade offers requires significant cross-functional effort — creating months-long feedback loops while competitors ship bundles that cut churn by a third.",
    },
  ],

  // ── SOLUTIONS — 4 M&E-native Kana products ─────────────────
  solutions: [
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for Retention & Data Science Teams",
      title: "The risk score fires the offer, not a monthly report",
      description: "The Agentic Data Platform connects your churn model outputs to the Kana Campaign Orchestrator application, which triggers personalized retention offers the moment a risk score crosses threshold. Your data science team's models stop producing probabilities nobody acts on — and the intervention reaches the subscriber while they're still deciding.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Growth & Win-Back Teams",
      title: "Win them back inside the window that converts",
      description: "Audience Builder identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe. Sequences stop launching 30–60 days after the cancel — when intent to return has collapsed — and start reaching each cohort in the days when a comeback is actually likely.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Pricing & Packaging Teams",
      title: "Test the bundle this month, not this roadmap cycle",
      description: "The Campaign Orchestrator enables rapid, automated offer testing across subscriber cohorts, with the Kana Marketing Intelligence application surfacing test results in real time. New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort — the feedback loop shrinks from quarters to days.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Personalization",
      roleLabel: "Coming Soon — Built for Content & Product Teams",
      title: "Recommendations that know what they watched last night",
      description: "Personalization incorporates recency-weighted behavioral signals into content recommendation logic — increasing session depth and reducing subscriber dormancy. Engines stop operating on historical preferences alone and start catching the recency signals that most strongly predict what a subscriber wants to watch or read next. Coming soon to the Kana platform.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "4.6%", label: "average monthly churn for premium streaming services — over half the base annualized (Antenna)" },
    { number: "23%", label: "of the US streaming audience are serial churners, cancelling 3+ services within two years (Antenna)" },
    { number: "24%", label: "of consumers cancel and resubscribe to the same service within six months — 40% for Gen Z (Antenna)" },
    { number: "7 days", label: "the win-back window that converts — while typical sequences launch 30–60 days post-churn (industry research)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading subscription brand on connecting churn prediction to real-time intervention]",
    name: "[Name]",
    title: "[Title], [Media & Entertainment Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our subscription stack?",
      a: "Via API. Kana sits on top of your data warehouse, billing platform, and messaging stack — Snowflake, Databricks, Braze, Recurly, Zuora, and more — with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
    },
    {
      q: "Does Kana replace our churn models?",
      a: "No — it activates them. Your data science team's models keep scoring exactly as they do today; the Agentic Data Platform connects those outputs to the Campaign Orchestrator, which triggers the retention offer the moment a risk score crosses threshold. Every intervention runs with your team's oversight and rules."
    },
    {
      q: "When will Personalization be available?",
      a: "Personalization is coming soon. It builds on the same foundation as Audience Builder and the Agentic Data Platform, so teams deploying those today are positioned to activate recency-weighted recommendations the moment it ships. Book a demo to see the roadmap and get early access."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director, Lifecycle Marketing — Retention",
      painPoints: [
        {
          text: "The churn model scores members monthly — cancel-save and passive-churn programs run on segments that were stale before the campaign shipped.",
        },
        {
          text: "The retention experimentation roadmap is a budgeted mandate, but every experiment waits on batch scoring and hand-built segments.",
        },
        {
          text: "Save rates and LTV improvements are the job description, and the tooling measures them after the fact instead of moving them in the moment.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "Connects churn model outputs to the Campaign Orchestrator, triggering personalized retention offers the moment a risk score crosses threshold. Active churn, passive churn, and payment risk get interventions timed to the signal — not to the next scoring run.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Growth Marketing Manager (Win-Back)",
      painPoints: [
        {
          text: "Re-engagement sequences launch 30–60 days post-churn — after subscriber intent to return has collapsed.",
        },
        {
          text: "24% of cancelled subscribers resubscribe within six months, but the lapsed-list pull and fixed-schedule sequence miss the window where they decide.",
        },
        {
          text: "Win-back defaults to discounts — and discount-acquired resubscribers stay a fraction as long as those recovered on timing and relevance.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe — often the first seven days, not the second month.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Pricing & Packaging Lead",
      painPoints: [
        {
          text: "Testing a new bundle, promotional price, or upgrade path takes a cross-functional council and months of coordination.",
        },
        {
          text: "Bundling cuts churn by roughly a third, but the feedback loop on each configuration is too slow to compound the advantage.",
        },
        {
          text: "Competitors ship joint bundles and hybrid tiers while this quarter's test is still in the planning doc.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Rapid, automated offer testing across subscriber cohorts, with Marketing Intelligence surfacing results in real time. Pricing and packaging become a weekly experiment cadence instead of a quarterly project.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Product, Recommendations",
      painPoints: [
        {
          text: "Recommendation engines operate on historical preferences — missing the recency signals that most strongly predict what a subscriber wants next.",
        },
        {
          text: "Content library exhaustion drives 34% of cancellations, and dormant subscribers rarely announce themselves before they lapse.",
        },
        {
          text: "Session depth is the leading indicator of retention the current rec logic can't move.",
        }
      ],
      solution: {
        name: "Personalization (Coming Soon)",
        description: "Incorporates recency-weighted behavioral signals into content recommendation logic — increasing session depth and reducing subscriber dormancy. Built on the Audience Builder and Agentic Data Platform foundation.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "CMO / Head of Subscriber Growth",
      painPoints: [
        {
          text: "The streaming wars ended with a new headline metric — profitability — and churn is the biggest lever the marketing org owns.",
        },
        {
          text: "23% of the audience are serial churners timing subscriptions around releases; content spend alone can't hold them.",
        },
        {
          text: "The prediction layer the company spent years building still reaches subscribers through monthly batches and fixed-schedule sequences.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "The platform anchor: churn models, win-back windows, and offer tests wired directly into campaign execution. The retention war is won by whoever connects prediction to action first.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your models already know who's leaving.<br>Kana acts before they do.",
    columns: [
      {
        title: "Score crosses threshold, offer goes out",
        description: "Churn model outputs flow straight into campaign triggers — the retention offer reaches the at-risk subscriber while they're still deciding, not after the next monthly scoring run.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Catch the comeback while it's possible",
        description: "Optimal win-back windows identified per cohort, with personalized re-engagement offers triggered inside the highest-conversion timeframe — days after the cancel, not months.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Run the pricing test in days, not quarters",
        description: "Automated offer testing across subscriber cohorts with results surfacing in real time — bundles, promos, and upgrade paths iterate at experiment speed.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for media & entertainment teams",
    type: "White Paper",
    title: "The retention war: connecting prediction to action",
    description: "Subscription brands spent a decade building churn models, rec engines, and cohort analytics — and still lose members the data saw coming. How the efficiency era's winners are closing the gap between the score and the save.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // M&E-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Snowflake", className: "color-snowflake" },
      { text: "Databricks", className: "color-databricks" },
      { text: "Braze", className: "color-braze" },
      { text: "Amplitude", className: "color-amplitude" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to your data warehouse, billing platform, and messaging stack — Snowflake, Databricks, Braze, Recurly, Zuora, and more — no rip-and-replace, no migration, no new governance gaps.",
    columns: [
      {
        title: "Activate the models your team already built",
        description: "Agentic Data Platform — your churn and propensity models keep running where they run today; their outputs connect to campaign triggers the moment a score crosses threshold. The under-resourced last mile of every data science program, handled.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Time every cohort's win-back to its own window",
        description: "Audience Builder — behavioral signals identify when each subscriber cohort is most likely to return, and re-engagement offers fire inside that window instead of on the 60-day timer.",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Make pricing a cadence, not a council",
        description: "Campaign Orchestrator — automated offer tests across cohorts with Marketing Intelligence reading results in real time. The bundle experiment that took a quarter of cross-functional effort ships in a sprint.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Stop losing members you could have kept.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
