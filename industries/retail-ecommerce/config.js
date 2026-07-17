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
    headline: "The AI Marketing Platform <em>Built for Retail & E-Commerce</em>",
    subheadline: "Your retention report names the customers you already lost, and 84% of your revenue closes in stores your attribution can't see. Kana gives retail teams churn signals weeks before the lapse, trade-meeting answers in seconds, and a straight line from digital spend to register revenue.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "The retention report is a record of customers you already lost",
      description: "70–77% of first-time e-commerce customers never come back, and churn only surfaces as a lagging line in the monthly cohort report. By then the win-back discount is the only lever left — and it burns margin on shoppers who were returning anyway.",
    },
    {
      title: "The register and the ad platform don't speak",
      description: "Roughly 84% of US retail sales still close in-store, invisible to digital attribution — while every ad platform grades its own homework. Meta reports 4,000 conversions, your analytics finds 1,200, and the CFO wants to know which number built the budget.",
    },
    {
      title: "Promo windows are measured in hours. Segment queues are measured in days.",
      description: "Every audience request waits on a data-team SQL queue, and batch pipelines take days to refresh a segment. In compressed retail windows — BFCM, back-to-school, clearance — the campaign either launches on a stale list or misses the window entirely.",
    },
  ],

  // ── SOLUTIONS — 5 retail-native Kana products ──────────────
  solutions: [
    {
      feature: "Customer Engagement",
      roleLabel: "Built for Lifecycle & Retention Teams",
      title: "Catch churn weeks before it reaches the retention report",
      description: "Customer Engagement connects to the CRM, loyalty, and marketing automation systems you already run and scores every customer's churn risk in real time — declining purchase frequency, shrinking baskets, fading engagement. It explains why each cohort is at risk and recommends the intervention worth making: message, channel, timing, and offer. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Customer Engagement_x1.5.mp4",
    },
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for CMOs & VP Analytics",
      title: "Connect digital spend to register revenue",
      description: "Marketing Intelligence unifies your ad platforms, e-commerce analytics, POS, and loyalty data into one live view — no warehouse migration, no analyst queue — and closes the offline attribution gap. Instead of reconciling numbers from a dozen tools for hours every week, you ask in plain language and walk into the board meeting with the spend-to-revenue line the CFO has been demanding.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/xAFUogMcED0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Category Intelligence",
      roleLabel: "Built for Category Managers & Merchants",
      title: "Walk into the Monday trade meeting with answers, not exports",
      description: "Category Intelligence sits on your POS feeds, sales data, and external category signals, and answers merchant questions in seconds — what's selling through, where stock is at risk, which promo actually lifted margin. The weekly trade pack stops being an hours-long spreadsheet marathon, and markdown and allocation decisions stop waiting for the numbers to be assembled.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Marketing Ops & Campaign Teams",
      title: "Brief to live segment inside the promo window",
      description: "Audience Builder lets campaign teams build, validate, and activate segments in plain language — no SQL, no data engineering queue — with one canonical audience definition enforced across Meta, Google, email, and your loyalty platform. Built-in synthetic audiences let you target new store regions and new categories before first-party data exists, and every segment traces back to the brief it came from.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc06860bd14e53863fb_solution-bg__7.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Omni-Channel Media Planner",
      roleLabel: "Built for VP E-Commerce & Growth",
      title: "Reallocate on modeled ROAS, not platform self-grades",
      description: "The Omni-Channel Media Planner models saturation curves against your own campaign history and turns a brief straight into the right targeting setup across Meta, YouTube, The Trade Desk, and DV360. With CAC up 60% in five years, budget stops following last year's channel mix and starts following modeled marginal return — including scenario plans at -20%, baseline, and +20% spend.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/Thpl9EgupdA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "84%", label: "of US retail sales still close in-store, where digital attribution can't see them (US Census Bureau)" },
    { number: "+60%", label: "rise in average e-commerce customer acquisition cost over five years (LoyaltyLion)" },
    { number: "39%", label: "of consumers say they've become more loyal to brands — while 89% of executives assume they have (NIQ)" },
    { number: "52%", label: "increase in CFO pressure on marketing to prove ROI (The CMO Survey)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading retailer on catching at-risk customers before they lapsed]",
    name: "[Name]",
    title: "[Title], [Retail & E-Commerce Company]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our commerce stack?",
      a: "Via API. Kana sits on top of Shopify, Salesforce, Klaviyo, your POS, and your loyalty platform — zero-copy, no warehouse migration, no rip-and-replace. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
    },
    {
      q: "What data does Customer Engagement need to predict churn?",
      a: "It works from the systems you already run — CRM, loyalty, and marketing automation. Kana continuously reads lifecycle patterns like activation, purchase frequency, and spend to score churn risk in real time, surfacing at-risk cohorts weeks before they lapse. Every recommended intervention goes through your team's review and approval."
    },
    {
      q: "How fast can a retail team get live on Kana?",
      a: "Most retail teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources and configuring Customer Engagement and Marketing Intelligence to your channel mix. Audience Builder layers in once those core connections are stable — Kana's solutions team works with you throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director of Lifecycle & Retention",
      painPoints: [
        {
          text: "Churn shows up as a lagging line in the monthly retention report — by publication, the at-risk customers have already lapsed.",
        },
        {
          text: "Win-back defaults to blanket discounts that burn margin on shoppers who would have returned at full price anyway.",
        },
        {
          text: "Executives believe loyalty is up — 89% of them do — while only 39% of consumers agree, and the cohort data sides with the consumers.",
        }
      ],
      solution: {
        name: "Customer Engagement",
        description: "Reads behavioral signals — declining purchase frequency, shrinking baskets, fading engagement — and surfaces at-risk cohorts weeks before they lapse, with root cause and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention.",
        linkLabel: "See Customer Engagement",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Category Manager / Merchant",
      painPoints: [
        {
          text: "The Monday trade meeting runs on a hand-built Excel WSSI — hours of data pulls and version conflicts before a single markdown decision gets made.",
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
        description: "Answers category questions in seconds from your POS, sales, and external signals — sell-through, stock risk, promo lift by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions.",
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
          text: "Different segment definitions run on Meta, Google, and email for the same campaign brief — and nobody can prove which one was right.",
        },
        {
          text: "Batch pipelines refresh segments in days, which is inadequate for BFCM, back-to-school, and clearance cycles.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Plain-language segment building with brief-to-activation traceability and one canonical audience definition enforced across every channel. No SQL, no engineering queue — segments ship inside the promo window, not after it.",
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
          text: "The weekly CAC:LTV report is reconciled by hand from 8–12 disconnected tools before it reaches anyone who can act on it.",
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
          text: "Senior marketers lose 10–15 hours a week pulling and reconciling numbers from disconnected platforms before any analysis starts.",
        },
        {
          text: "The board expects an AI story — 70% of CMOs call AI leadership critical, while only 30% say their team is ready to deliver it.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "One live view across ad platforms, e-commerce analytics, POS, and loyalty — queryable in plain language, with digital spend tied to in-store revenue. The CFO conversation moves from defending impressions to showing the register.",
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
        description: "Real-time churn risk scores from the loyalty and CRM data you already own. See which cohorts are slipping, why, and which intervention is worth the margin — weeks before the retention report says it's too late.",
        linkLabel: "Learn more about Customer Engagement",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Answer the trade meeting in seconds",
        description: "Sell-through, stock risk, and promo lift on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Prove which dollar moved which register",
        description: "Tie campaign spend to in-store revenue, basket size, and customer LTV — not platform-reported conversions. Give the CFO the number that survives an audit.",
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
    type: "White Paper",
    title: "The retention playbook for retail & e-commerce",
    description: "Acquisition costs are up 60% in five years and three-quarters of first-time buyers never return. How leading retailers are flipping the growth math from buying new customers to keeping the ones they already paid for.",
    cta: { text: "Read now", href: "/content" },
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
    subtitle: "Connects to Shopify, Salesforce, Klaviyo, your POS, and your loyalty platform — no migration, no rip-and-replace, no new governance gaps.",
    columns: [
      {
        title: "Turn your loyalty data into an early-warning system",
        description: "Customer Engagement — plugs into the CRM, loyalty, and automation systems you already run, scores churn risk continuously, and routes every recommended intervention through your team's approval. Retention becomes a compounding learning loop, not a monthly report.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Unify every channel without moving a single record",
        description: "Marketing Intelligence — zero-copy architecture sits on top of your ad platforms, e-commerce analytics, POS, and loyalty data. One customer definition, one live view, plain-language questions — no warehouse migration, no analyst queue.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Launch new stores and markets before the data exists",
        description: "Audience Builder — when a new region or category means no local first-party seed data, built-in synthetic audiences deliver statistically valid targeting from day one. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Every month of waiting is another cohort you didn't save.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
