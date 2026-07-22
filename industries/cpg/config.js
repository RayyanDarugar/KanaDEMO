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
    headline: "The AI Marketing Platform <em>Built for CPG Brands</em>",
    subheadline: "Kana gives CPG teams real-time category intelligence, a clear line from ad spend to shelf lift, and audiences that trace straight back to the brief — turning this week's shelf data into next week's advantage.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Catch the category shift while you can still act on it",
      description: "Category Intelligence reads scan data, POS feeds, and category signals as they land, so category managers walk into buyer meetings with this week's numbers instead of last week's export, and spend the saved hours on the calls that actually move share.",
    },
    {
      title: "Put more of every media dollar in front of a shopper",
      description: "Saturation modeling built into planning shows exactly where spend still has room to work and where it's plateaued, so CPG media teams can shift budget toward the channels compounding return before the quarter closes.",
    },
    {
      title: "Every segment runs exactly what the brief asked for",
      description: "Audience Builder turns plain-language intent directly into the live segment, and keeps a visible line back to the original brief, so campaign teams can verify targeting matches intent before the campaign launches.",
    },
  ],

  // ── SOLUTIONS — 5 CPG-native Kana products ─────────────────
  solutions: [
    {
      feature: "Category Intelligence",
      roleLabel: "Built for Category Managers",
      title: "Retailer signals in seconds",
      description: "Category Intelligence ingests scan data, POS feeds, and category data sources like Nielsen and Circana, and answers category questions in seconds. Category managers stop spending time compiling data and start spending it on the strategic decisions that actually move share.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Omni-Channel Media Planner",
      roleLabel: "Built for VP Media & Performance Teams",
      title: "Stop optimizing with last year's channel mix",
      description: "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into the right targeting setup on Meta, YouTube, The Trade Desk, and DV360. Budget allocation stops being driven by habit and starts being driven by modeled ROAS.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/Thpl9EgupdA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Campaign Ops & Marketing Ops",
      title: "Brief to live segment without an engineering ticket",
      description: "Audience Builder lets campaign teams build, validate, and activate audience segments in plain language, no SQL, no data engineering queue. Every segment traces back to the original brief, and built-in synthetic audiences let you launch into new SKUs and new markets before first-party data exists.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/LCmMvjBP8zU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for VP Analytics & CMOs",
      title: "See what your ad spend actually sold in stores",
      description: "Marketing Intelligence connects your ad platforms, retailer portals, and CRM into one live view, so you can query performance in plain language instead of waiting on an analyst. Marketing spends less time defending impressions and more time showing commercial leadership how digital activity tracks with in-store lift.",
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
      a: "Via API. Kana connects to Walmart Connect, Amazon DSP, Kroger Precision Marketing, and other retail media platforms, pulling performance data into one unified view instead of a dozen separate dashboards. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many platforms you're connecting."
    },
    {
      q: "Does Category Intelligence replace our Nielsen or Circana subscription?",
      a: "No, it sits on top of them. Category Intelligence ingests your existing Nielsen, Circana, and other syndicated data feeds alongside your own POS and scan data, so you keep your current data subscriptions and get a faster, unified way to query across all of them. Most teams don't drop a syndicated data provider when they add Kana, they just stop waiting on the weekly export to ask a question."
    },
    {
      q: "How fast can a CPG team get live on Kana?",
      a: "Most CPG teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources and configuring Category Intelligence and Marketing Intelligence to your retailer mix. Audience Builder layers in once those core connections are stable. Kana's solutions team works with you throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Category Manager",
      painPoints: [
        {
          text: "Syndicated category drops arrive weeks late, forcing category managers to prepare client reports manually with outdated information.",
        },
        {
          text: "POS feeds are not cross-referenced against external category signals, leaving stock anomalies undetected until key buyer meetings.",
        },
        {
          text: "Compiling spreadsheet reports consumes 20+ hours weekly, leaving category teams with no time for strategic shelf planning.",
        }
      ],
      solution: {
        name: "Category Intelligence",
        description: "Ingests scan data, POS feeds, and category data sources like Nielsen and Circana. Answers category questions in seconds, not days. Built specifically for VP Category and Senior Category Manager roles at CPG companies.",
        linkLabel: "See Category Intelligence",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "VP Media & Performance",
      painPoints: [
        {
          text: "Only $439 of every $1,000 spent programmatically reaches consumers due to intermediate fees, bid shading, and lack of saturation scoring.",
        },
        {
          text: "Audience definitions drift between strategic briefs and active platform campaigns, altering targeting parameters.",
        },
        {
          text: "Ad spends are allocated on static historical budgets, ignoring dynamic channel saturation thresholds and modeled marginal ROAS.",
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
          text: "Manual analytics assemblies take days or weeks, forcing teams to optimize campaigns after they have already ended.",
        },
        {
          text: "Marketing is treated as a cost center by commercial leadership due to a lack of direct correlation between spend and SKU velocity.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "Unifies fragmented regional and retailer data into one live view, queryable in plain language. Shows how digital campaign performance tracks with in-store sales lift, giving marketing a defensible answer for commercial leadership instead of a proxy metric.",
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
        description: "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) against your own scan data automatically. Surface leading indicators 6–10 weeks before movement shows in your numbers.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Run the brief you actually wrote",
        description: "Build precise audience segments from plain-language briefs, no SQL, no tickets. Monitor every live campaign against the original brief across Meta, YouTube, and The Trade Desk, in real time.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Prove what moved the category",
        description: "Connect every campaign dollar to POS velocity, volume lift, and share movement, not just digital proxies. Give commercial leadership the attribution proof they've been asking for.",
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
    description: "Every category manager knows the Monday morning ritual: pull POS data, see what already happened. How leading CPG teams are getting a preview of the road ahead instead.",
    cta: { text: "Read now", href: "/blog" },
    image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    subtitle: "By acting as the marketing operating layer, Kana connects to your POS data, retailer portals, CRM, media platforms, and category data sources like Nielsen and Circana, without migration, rip-and-replace, or new governance gaps.",
    columns: [
      {
        title: "Unify your customer data without moving a single record",
        description: "Zero-copy architecture sits on top of Salesforce, Marketo, your data warehouse, and your retailer portals. Kana resolves identities and deduplicates contacts across every system you already use, without migration, duplication, or new governance overhead.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Launch new markets on data your competitors have never seen before",
        description: "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      },
      {
        title: "Know which channels have hit diminishing returns before you set your next budget",
        description: "Omni-Channel Media Planner: saturation curves built from your own historical campaign data, not industry benchmarks. Scenario plan at -20%, baseline, and +20% budget so you walk into the planning cycle with a model, not an opinion.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Give Your Category Team the Predictive Edge, Not Just the Report.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};

