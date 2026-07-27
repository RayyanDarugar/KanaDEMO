// ============================================================
// INDUSTRY CONFIG — Retail & E-Commerce
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/retail-ecommerce-gtm-brief.md (all claims traced).
// ============================================================

export const industryConfig = {
  slug: "retail-ecommerce",
  label: "Retail & E-Commerce",
  accent: "#0f666b", // deep teal. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire retail team",
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
      "Retail & E-Commerce",
      "CPG",
      "Media & Entertainment",
      "Financial Services",
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
    headline: "The AI Marketing Platform <em>Built for Retail & E-Commerce</em>",
    subheadline: "Kana gives retail teams early churn signals, trade answers in seconds, and one honest number for digital spend — so you act before the report can name the customer.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Catch the customer while they're still yours to keep",
      description: "Most first-time e-commerce customers never return, and churn usually only surfaces in next month's report. Personalization flags at-risk customers weeks earlier, while retention teams can still act.",
    },
    {
      title: "One number the whole room agrees on",
      description: "Roughly 84% of US retail sales close in-store, yet every ad platform counts conversions its own way. Marketing Intelligence gives the CFO one number to trust.",
    },
    {
      title: "Launch inside the promo window, every time",
      description: "Audience Builder turns a brief into a live segment in minutes, no SQL, no batch delay. Campaigns launch on time.",
    },
  ],

  // ── SOLUTIONS — 5 retail-native Kana products ──────────────
  solutions: [
    {
      feature: "Personalization",
      roleLabel: "Built for Lifecycle & Retention Teams",
      title: "Catch churn weeks before it reaches the retention report",
      description: "Personalization scores every customer's churn risk weeks ahead of the retention report and recommends the intervention worth making. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Customer Engagement_x1.5.mp4",
    },
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for CMOs & VP Analytics",
      title: "Connect digital spend to register revenue",
      description: "Marketing Intelligence unifies your ad, e-commerce, POS, and loyalty data, so plain-language questions replace hours of reconciling numbers. You walk into the meeting with an answer grounded in your own data.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/xAFUogMcED0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Category Intelligence",
      roleLabel: "Built for Category Managers & Merchants",
      title: "Walk into the Monday trade meeting with answers, not exports",
      description: "Category Intelligence tracks competitor moves, category trends, and promo benchmarks, and answers merchant questions in seconds with a cited, dated record. The weekly trade pack builds itself.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Marketing Ops & Campaign Teams",
      title: "Brief to live segment inside the promo window",
      description: "Audience Builder lets campaign teams build and activate segments in plain language, no SQL, no engineering queue, with reach estimated across Meta, Google, and TikTok before a dollar goes out.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc06860bd14e53863fb_solution-bg__7.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Omni-Channel Media Planner",
      roleLabel: "Built for VP E-Commerce & Growth",
      title: "Reallocate on modeled ROAS, not platform self-grades",
      description: "The Omni-Channel Media Planner models saturation curves against your own campaign history across Meta, YouTube, The Trade Desk, and DV360. With CAC up 60% in five years, budget follows modeled marginal return, not last year's channel mix.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/Thpl9EgupdA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "84%", label: "of retail revenue closes in-store — Kana gives you one grounded view of what happened before and after (US Census Bureau)" },
    { number: "+60%", label: "rise in average e-commerce customer acquisition cost over five years (LoyaltyLion)" },
    { number: "39%", label: "of consumers say they've become more loyal to brands this year (NIQ)" },
    { number: "52%", label: "more scrutiny on marketing ROI — teams with grounded answers already in hand walk into the room ahead of the ones still reconciling exports (The CMO Survey)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER: Testimonial from a leading retailer on catching at-risk customers before they lapsed]",
    name: "[Name]",
    title: "[Title], [Retail & E-Commerce Company]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our commerce stack?",
      a: "Via API. Kana sits on top of Shopify, Salesforce, Klaviyo, your POS, and your loyalty platform, zero-copy, no migration. Setup typically takes 2–4 weeks, handled by Kana's solutions team."
    },
    {
      q: "What data does Personalization need to predict churn?",
      a: "It reads the CRM, loyalty, and marketing automation data you already have, tracking purchase frequency and spend to flag at-risk cohorts weeks before they lapse. Every recommendation goes through your team's approval."
    },
    {
      q: "How fast can a retail team get live on Kana?",
      a: "Most retail teams see value within 30 days: onboarding connects your top 3–5 data sources, configures Personalization and Marketing Intelligence, then layers in Audience Builder once those connections are stable. Kana's solutions team works with you throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director of Lifecycle & Retention",
      painPoints: [
        {
          text: "Churn shows up as a lagging line in the monthly retention report, and by publication, the at-risk customers have already lapsed.",
        },
        {
          text: "Win-back defaults to blanket discounts that burn margin on shoppers who would have returned at full price anyway.",
        },
        {
          text: "Executives are convinced loyalty is climbing; consumers and the cohort data say otherwise (NIQ).",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Reads behavioral signals (declining purchase frequency, shrinking baskets, fading engagement) and surfaces at-risk cohorts weeks before they lapse, with a clear reason and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Category Manager / Merchant",
      painPoints: [
        {
          text: "The Monday trade meeting runs on a hand-built Excel WSSI, hours of data pulls and version conflicts before a single markdown decision gets made.",
        },
        {
          text: "Promo post-mortems land weeks after the event, too late to change the next slot on the promotional calendar.",
        },
        {
          text: "Enterprise planning suites are six-figure IT projects, so assortment and allocation analysis stays trapped in spreadsheets.",
        }
      ],
      solution: {
        name: "Category Intelligence",
        description: "Answers category questions in seconds from a cited, monitored view of the external market: category trends, competitor moves, promo benchmarks by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions.",
        linkLabel: "See Category Intelligence",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Marketing Ops",
      painPoints: [
        {
          text: "Audience requests queue behind data-team SQL while promo windows measured in hours come and go.",
        },
        {
          text: "Different segment definitions run on Meta, Google, and email for the same campaign brief, and nobody can prove which one was right.",
        },
        {
          text: "Batch pipelines refresh segments in days, which is inadequate for BFCM, back-to-school, and clearance cycles.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Plain-language segment building with brief-to-activation traceability and one canonical audience definition, activated by reference across your loyalty and messaging platforms. No SQL, no engineering queue, segments ship inside the promo window, not after it.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP E-Commerce / Growth",
      painPoints: [
        {
          text: "CAC is up 60% in five years, and every reallocation decision runs on platforms that grade their own homework.",
        },
        {
          text: "Blended ROAS hides a 2x gap between channel medians, so budget follows habit instead of marginal return.",
        },
        {
          text: "The weekly CAC:LTV report is reconciled by hand from a dozen disconnected tools before it reaches anyone who can act on it.",
        }
      ],
      solution: {
        name: "Omni-Channel Media Planner",
        description: "Models channel saturation against your own campaign history and scenario-plans budget at -20%, baseline, and +20%. Allocation decisions stop being driven by last year's mix and start being driven by modeled marginal ROAS.",
        linkLabel: "See Omni-Channel Media Planner",
        linkHref: "#solution-row-4"
      }
    },
    {
      role: "CMO / VP Analytics",
      painPoints: [
        {
          text: "Roughly 84% of retail sales close in-store, leaving the biggest share of marketing-driven revenue invisible to digital attribution.",
        },
        {
          text: "Senior marketers lose hours every week pulling and reconciling numbers from disconnected platforms before any analysis starts.",
        },
        {
          text: "The board expects an AI story, and most CMOs know their team's AI ambitions are ahead of what the current stack can actually deliver.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "A queryable view across ad platforms, e-commerce analytics, POS, and loyalty, answerable in plain language. The CFO conversation moves from defending impressions to a grounded number everyone in the room trusts.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-1"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your reports tell you what already happened.<br>Kana tells you while you can still act.",
    columns: [
      {
        title: "Save the customer before the lapse",
        description: "See which cohorts are slipping, and which intervention is worth the margin, weeks before the retention report catches on.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Answer the trade meeting in seconds",
        description: "Category trends, competitor moves, and promo benchmarks on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Get one number the room can trust",
        description: "See campaign spend, basket size, and customer LTV together, grounded in your own connected data instead of platform-reported conversions. Give the CFO a number that survives scrutiny.",
        linkLabel: "Learn more about Marketing Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for retail teams",
    type: "Blog",
    title: "5 Churn Signals Your Retention Report Won't Show You",
    description: "By the time the cohort report flags a lapsed customer, the window to save them already closed. How leading retailers are catching the signal weeks earlier.",
    cta: { text: "Read now", href: "/blog" },
    image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // Retail-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Shopify", className: "color-shopify" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Klaviyo", className: "color-klaviyo" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "BigQuery", className: "color-bigquery" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Kana connects to Shopify, Salesforce, Klaviyo, your POS, and your loyalty platform — no migration, no rip-and-replace.",
    columns: [
      {
        title: "Turn your loyalty data into an early-warning system",
        description: "Personalization scores churn risk weeks ahead of the monthly report, and every recommendation goes through your team's approval. Retention becomes a compounding advantage.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Unify every channel without moving a single record",
        description: "Marketing Intelligence sits on top of your ad, e-commerce, POS, and loyalty data, zero-copy, no migration — one live view, answered in plain language.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Launch new stores and markets before the data exists",
        description: "Audience Builder: synthetic audiences give new regions and categories a sound starting point on day one, refined as real signal comes in.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "The fastest-growing retailers already know which customer to save and which dollar to spend next.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
