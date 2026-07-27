// ============================================================
// INDUSTRY CONFIG — CPG
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// To add a vertical: copy this file, rename, swap values, set accent.
// Layout reads ONLY from this object. Zero layout edits per vertical.
// Hero/solution/FAQ copy: finalized CPG copy.
// ============================================================

export const industryConfig = {
  slug: "cpg",
  label: "CPG",
  accent: "#ff7a59", // --color-coral-2. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire team",
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
      "CPG",
      "Retail & E-Commerce",
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
    headline: "The AI Marketing Platform <em>Built for CPG Brands</em>",
    subheadline: "Kana turns this week's market signals into next week's advantage for your CPG team.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Catch the category shift while you can still act on it",
      description: "Category Intelligence tracks category signals as they move, so category managers walk into buyer meetings with this week's numbers instead of last week's export.",
    },
    {
      title: "Put more of every media dollar in front of a shopper",
      description: "Saturation modeling shows where spend still works and where it's plateaued, so teams can shift budget toward what's compounding return.",
    },
    {
      title: "Every segment runs exactly what the brief asked for",
      description: "Audience Builder turns a plain-language brief into a live, traceable segment, so targeting never drifts from what was asked.",
    },
  ],

  // ── SOLUTIONS — 5 CPG-native Kana products ─────────────────
  solutions: [
    {
      feature: "Category Intelligence",
      roleLabel: "Built for Category Managers",
      title: "Retailer signals in seconds",
      description: "Category Intelligence answers category questions in seconds, citations included, so managers spend less time compiling data and more time moving share.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Omni-Channel Media Planner",
      roleLabel: "Built for VP Media & Performance Teams",
      title: "Stop optimizing with last year's channel mix",
      description: "The Omni-Channel Media Planner models saturation curves from your data and turns a brief into ready-to-run targeting, driven by modeled ROAS instead of habit.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/Thpl9EgupdA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Campaign Ops & Marketing Ops",
      title: "Brief to live segment without an engineering ticket",
      description: "Audience Builder lets campaign teams build and activate segments in plain language, no SQL, no engineering queue, with every segment traceable back to the original brief.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/LCmMvjBP8zU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for VP Analytics & CMOs",
      title: "See what your ad spend actually sold in stores",
      description: "Marketing Intelligence unifies your campaign and CRM data into one view you can query in plain language, giving leadership a performance story backed by evidence, not a guess.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/xAFUogMcED0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "64%", label: "faster time-to-insight with unified AI-assisted analytics layers (Improvado Trend Report)" },
    { number: "$439", label: "of every $1,000 in programmatic spend actually reaches consumers (ANA Benchmark)" },
    { number: "45%", label: "of marketing data used for decisions is incomplete or outdated (Adverity Survey)" },
    { number: "$12.9M", label: "average annual cost of poor data quality per organization (Gartner Study)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "We're getting <strong>statistically robust campaign answers</strong> in minutes instead of weeks, and catching the <strong>tagging anomalies</strong> that were quietly skewing our performance data without anyone knowing.",
    name: "Jasper van den Berg",
    title: "Head of Marketing Intelligence, Heineken",
    logo: "../../brand-assets/SVG/heineken_logo.png",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our retail media platforms?",
      a: "Via API. Kana connects to your retail media and ad platforms in one unified view — setup typically takes 2–4 weeks."
    },
    {
      q: "Does Category Intelligence replace our Nielsen or Circana subscription?",
      a: "No. Category Intelligence researches the external market, complementing your Nielsen or Circana subscription, not replacing it. Most teams keep their syndicated provider and use Kana to catch signals between drops."
    },
    {
      q: "How fast can a CPG team get live on Kana?",
      a: "Most CPG teams see value within 30 days. Onboarding starts with your top 3–5 data sources and Marketing Intelligence, then layers in Category Intelligence and Audience Builder as connections stabilize. Kana's team guides the rollout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Category Manager",
      painPoints: [
        {
          text: "Syndicated category drops arrive weeks late, forcing client reports built on outdated information.",
        },
        {
          text: "POS feeds miss external category signals, so stock anomalies surface only in buyer meetings.",
        },
        {
          text: "Spreadsheet reporting eats 20+ hours a week, leaving no time for shelf strategy.",
        }
      ],
      solution: {
        name: "Category Intelligence",
        description: "Researches category questions across hundreds of curated public sources with citations. Answers in seconds, not days. Built specifically for VP Category and Senior Category Manager roles at CPG companies.",
        linkLabel: "See Category Intelligence",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "VP Media & Performance",
      painPoints: [
        {
          text: "Only $439 of every $1,000 spent programmatically reaches consumers, the rest lost to fees and bid shading.",
        },
        {
          text: "Audience definitions drift between strategic briefs and active platform campaigns, altering targeting parameters.",
        },
        {
          text: "Ad budgets are set on historical habit, ignoring channel saturation and modeled ROAS.",
        }
      ],
      solution: {
        name: "Omni-Channel Media Planner",
        description: "Models saturation curves against your own campaign data. Maps brief targeting parameters to platform-specific configurations across Meta, YouTube, The Trade Desk, and DV360. Allocation decisions stop being driven by habit and start being driven by modeled ROAS.",
        linkLabel: "See Omni-Channel Media Planner",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Director of Marketing Ops",
      painPoints: [
        {
          text: "Data engineering queues delay audience segment creation by weeks, blocking fast campaign activation windows.",
        },
        {
          text: "Activated segments mismatch campaign briefs, leading to ad-targeting errors and budget underperformance.",
        },
        {
          text: "There is no documented link between creative briefs and active platform segments, making post-campaign optimization impossible.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Plain-language audience building with brief-to-activation traceability. No SQL, no data engineering queue. Every segment is documented back to the original brief, so post-campaign analysis has a paper trail to work from.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "VP Analytics / CMO",
      painPoints: [
        {
          text: "84% of US retail sales still close in-store, leaving digital campaign conversions largely unattributed (US Census Bureau).",
        },
        {
          text: "Manual analytics take days or weeks, so teams optimize campaigns after they've already ended.",
        },
        {
          text: "Commercial leadership treats marketing as a cost center, with no clear link between spend and SKU velocity.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "Unifies fragmented campaign and CRM data into one view, queryable in plain language. Gives marketing a grounded, cited answer for commercial leadership instead of a proxy metric.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP Data & Audience Strategy",
      painPoints: [
        {
          text: "Launching new SKUs without local customer data history sends launch-phase media costs sharply higher, with no benchmark to plan against.",
        },
        {
          text: "Low match rates across retail media networks reduce ad targeting precision, increasing relative CPM costs.",
        },
        {
          text: "Cookie deprecation is rapidly reducing the accuracy of traditional third-party audience data providers.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Built-in synthetic audiences create statistically valid models for new SKU launches, new category entries, and new markets, without waiting for first-party data to accumulate. CPG brands stop running broad, inefficient launch campaigns and start targeting on day one.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your category data tells you what sold.<br>Kana tells you what's coming.",
    columns: [
      {
        title: "Catch the trend before it hits POS",
        description: "Cross-reference analyst reports, Grocery Dive, and Google Trends automatically, catching leading indicators before next month's numbers.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Run the brief you actually wrote",
        description: "Build audience segments from plain-language briefs — no SQL, no tickets — and keep targeting traceable to the brief.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Prove what moved the category",
        description: "Connect every campaign dollar to a cited performance answer commercial leadership can trust.",
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
    heading: "Read our latest content for CPGs",
    type: "Blog",
    title: "POS Data Is a Rearview Mirror. Here's the Windshield.",
    description: "Every category manager knows the ritual: pull POS data, see what already happened. Here's how leading CPG teams get a preview instead.",
    cta: { text: "Read now", href: "/blog" },
    image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    subtitle: "Kana connects to your existing stack — no migration, no rip-and-replace.",
    columns: [
      {
        title: "Unify your customer data without moving a single record",
        description: "Kana sits on top of Salesforce, Marketo, and your data warehouse — using the data you already have, no migration required.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Launch new markets before you have first-party data.",
        description: "Audience Builder creates synthetic audiences from public signals, so new SKUs and markets can target from day one, no first-party data required.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      },
      {
        title: "Know which channels have hit diminishing returns before you budget.",
        description: "Omni-Channel Media Planner: saturation curves from your own data, not benchmarks. Plan at -20%, baseline, and +20% so you walk in with a model, not a guess.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Give Your Category Team the Predictive Edge.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};

