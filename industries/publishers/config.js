// ============================================================
// INDUSTRY CONFIG — Publishers (Print / Digital / News)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/publishers-gtm-brief.md (all claims traced).
// ============================================================

export const industryConfig = {
  slug: "publishers",
  label: "Publishers",
  accent: "#2d6cdf", // ink blue. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire revenue team",
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
      "Publishers",
      "CPG",
      "Retail & E-Commerce",
      "Media & Advertisers",
      "Financial Services",
      "Travel & Hospitality",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "The AI Revenue Platform <em>Built for Publishers</em>",
    subheadline: "Under-delivery becomes a makegood before anyone notices, and AI crawlers read everything without sending readers back. Kana gives publisher teams agentic campaign delivery, proposals in minutes instead of days, and control over every bot that touches your content.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "GAM reports what happened — it won't warn you what's about to go wrong",
      description: "Ad ops teams spend 60–90 minutes every morning manually scanning line items, and still miss the pacing shortfalls, broken creatives, and per-source eCPM collapses hiding under healthy blended averages. Research shows 10–25% of yield can drain from GAM misconfigurations without a trace.",
    },
    {
      title: "The agency gave you 24 hours. Your proposal takes four days.",
      description: "Building an RFP response means pulling avails that expire in 48 hours, chasing rate-card exceptions locked in senior sellers' heads, and assembling decks by hand. Being second-to-respond drastically cuts your chance of winning the deal.",
    },
    {
      title: "AI is consuming your content without returning your audience",
      description: "For every visitor OpenAI refers back, it sends roughly 1,500 bots to crawl your pages. Blanket blocking forfeits licensing revenue; blanket access gives your journalism away. Most publishers have no tooling between those two extremes.",
    },
  ],

  // ── SOLUTIONS — 4 publisher-native Kana products ───────────
  solutions: [
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Ops & Campaign Managers",
      title: "Catch the under-delivery before it becomes a makegood",
      description: "Campaign Orchestrator connects directly to Google Ad Manager via API and watches every line item continuously — pacing, delivery, inventory, creative health. It forecasts which campaigns will miss goals while there's still runway to fix them, explains the root cause in plain language, and can take corrective action in GAM with your approval. Your morning spreadsheet check becomes a list of issues already caught.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Media Proposal Generator",
      roleLabel: "Built for Ad Sales & Sales Planners",
      title: "From RFP to ready-to-activate proposal in minutes",
      description: "The Media Proposal Generator reads a brief in any format and builds three proposal strategies — conservative, balanced, aggressive — grounded in your real inventory, rate cards, and past campaign performance across Google Analytics, GAM, Salesforce, and your order management system. After your review, it creates the orders and line items directly in the OMS. Your sellers answer inside the agency's response window instead of four days after it closes.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Revenue & AI Partnership Leads",
      title: "Set the terms for every AI bot that reads your content",
      description: "The LLM Command Center sits in your CDN layer and identifies 47+ distinct LLM crawlers from OpenAI, Anthropic, Google, Perplexity, and Meta. Write policies in plain English — full text for licensed partners, summaries for others, deny for the rest — scoped by site, section, or content category, enforced in under 50 milliseconds. Walk into licensing negotiations knowing exactly what each provider takes and what it's worth.",
      icon: "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Data & Audience Teams",
      title: "Turn first-party data into audiences your sales team can sell",
      description: "Audience Builder lets your team build, validate, and package first-party audience segments in plain language — no SQL, no data engineering queue between a sales request and a live deal. Built-in synthetic audiences extend reach where your seed data is thin, so you can package segments advertisers can't buy anywhere else and prove the targeting behind every direct-sold campaign.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "10–25%", label: "of publisher yield drains from GAM misconfigurations without a trace (industry research)" },
    { number: "38 hrs", label: "spent per campaign on RFP responses by media teams (Bionic Study)" },
    { number: "1,500", label: "bots OpenAI sends publishers for every visitor it refers back (Cloudflare)" },
    { number: "$26.8B", label: "lost annually to programmatic supply-chain waste (ANA Report)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading publisher on catching delivery issues before they became makegoods]",
    name: "[Name]",
    title: "[Title], [Publisher]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to Google Ad Manager?",
      a: "Via direct API — no rip-and-replace, no custom build. Campaign Orchestrator ingests real-time delivery, inventory, and order data from your existing GAM setup and starts monitoring every line item from day one. Kana's solutions team handles setup, and any corrective action in GAM goes through your approval first."
    },
    {
      q: "Which systems does the Media Proposal Generator draw from?",
      a: "It builds a knowledge graph across your core publisher platforms — Google Analytics, Google Ad Manager, Salesforce, and order management systems like Adbook — plus your rate cards and past proposal performance. Every recommendation is grounded in your real inventory and pricing, and orders are only pushed to the OMS after human review."
    },
    {
      q: "How does the LLM Command Center actually control AI crawlers?",
      a: "It operates in the CDN layer, classifying every incoming request as human, generic bot, or LLM crawler, and enforcing your access policies in under 50 milliseconds. Policies are written in plain English and scoped to providers, sites, sections, or content categories — deployed in minutes, with no engineering involvement."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Ad Operations Manager",
      painPoints: [
        {
          text: "A thorough manual check across delivery, revenue, and inventory takes 60–90 minutes per person every morning — and still misses issues that don't look wrong.",
        },
        {
          text: "Under-delivery gets detected after the flight is unrecoverable, turning fixable pacing gaps into makegoods and credits.",
        },
        {
          text: "Broken creatives pass GAM's technical checks and run for days — the impression counts, the click never comes, and the advertiser's analytics find it first.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Monitors every line item continuously with delivery and inventory sensors, forecasts under-delivery risk before campaigns miss goals, and explains root cause conversationally. Fixes issues in GAM with human approval — early warning instead of morning firefighting.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Yield / Programmatic Manager",
      painPoints: [
        {
          text: "Per-source eCPM collapses hide inside blended dashboard averages — a demand source can halve in value while the headline number barely moves.",
        },
        {
          text: "Targeting conflicts and priority misconfigurations silently suppress premium delivery; industry analysis finds 15–25% of premium inventory cannibalized by cheaper fills.",
        },
        {
          text: "Weekly and monthly reporting cycles catch demand-source volatility too late to recover the lost yield.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Watches yield at the per-source level, not the blended average. Surfaces eCPM anomalies, targeting conflicts, and misconfigurations as tickets with recommended actions — while the revenue is still recoverable.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Sales Planner / Account Executive",
      painPoints: [
        {
          text: "Manual proposals take 4–6 days against a 24-hour agency response window — and being second-to-respond drastically cuts win rate.",
        },
        {
          text: "Avails expire in about 48 hours, so plans built by hand are often stale before the deck is finished.",
        },
        {
          text: "The best pricing and packaging strategies live in senior sellers' heads, leaving the rest of the desk to guess.",
        }
      ],
      solution: {
        name: "Media Proposal Generator",
        description: "Parses the brief, checks live avails and rate cards, and generates three reviewed proposal strategies in minutes. Standardizes senior-seller pricing logic across the whole desk and activates approved orders directly in the OMS.",
        linkLabel: "See Media Proposal Generator",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Head of Digital Revenue",
      painPoints: [
        {
          text: "Search referrals to publishers fell by a third in a year, and licensing negotiations with AI providers run on guesswork instead of traffic data.",
        },
        {
          text: "47+ LLM crawlers are reading the content portfolio around the clock, with robots.txt as the only lever between blanket blocking and giving it away.",
        },
        {
          text: "Makegood rates and delivery misses erode the advertiser trust that direct-sold budgets depend on.",
        }
      ],
      solution: {
        name: "LLM Command Center",
        description: "One dashboard for all LLM traffic: which providers take what, from which sections, and where the revenue opportunities are. Plain-English policies enforced at the CDN layer turn ad-hoc licensing conversations into a programmatic, data-backed operation.",
        linkLabel: "See LLM Command Center",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "VP Data & Audience Strategy",
      painPoints: [
        {
          text: "Audience segment requests from sales queue behind data engineering, delaying the deals those segments were meant to close.",
        },
        {
          text: "First-party data is the ad product's differentiation — 71% of publishers call it a key source of positive advertising results — but packaging it per-advertiser is bespoke manual work.",
        },
        {
          text: "Where seed data is thin, there's no way to offer advertisers the reach they're asking for without falling back on third-party data.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Plain-language segment building with brief-to-activation traceability — no SQL, no engineering queue. Synthetic audiences extend first-party segments into statistically valid reach, so the sales desk can package audiences advertisers can't get anywhere else.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-3"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "GAM tells you what already happened.<br>Kana tells you what's about to go wrong.",
    columns: [
      {
        title: "Catch the miss while you can still fix it",
        description: "Continuous sensors across delivery, inventory, and orders forecast under-delivery risk before the flight is unrecoverable — and explain the root cause, not just the symptom.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Answer the RFP the same day it lands",
        description: "Brief in, three strategies out — grounded in live avails, your rate cards, and what actually delivered on past campaigns. Human review, then straight to orders in the OMS.",
        linkLabel: "Learn more about Media Proposal Generator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Charge for the content AI already reads",
        description: "See every LLM crawler on your properties, decide what each provider gets — full text, summaries, or nothing — and take real traffic data into every licensing negotiation.",
        linkLabel: "Learn more about LLM Command Center",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for publishers",
    type: "Blog",
    title: "5 Campaign Delivery Issues GAM Won't Alert You To (Until It's Too Late)",
    description: "Under-pacing that looks healthy, broken creatives that pass every check, eCPM drops hidden in the averages — where publisher revenue leaks, and how to catch it early.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // Publisher-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Google Ad Manager", className: "color-gam" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Google Analytics", className: "color-ganalytics" },
      { text: "Cloudflare", className: "color-cloudflare" },
      { text: "BigQuery", className: "color-bigquery" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to Google Ad Manager, Salesforce, your order management system, Google Analytics, and your CDN — no rip-and-replace, no engineering queue, no new governance gaps.",
    columns: [
      {
        title: "Monitor every line item without a spreadsheet",
        description: "Campaign Orchestrator — real-time sensors across delivery, inventory, and orders replace the 60–90 minute morning GAM check. Issues surface as explained tickets with recommended actions, not numbers waiting to be interpreted.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Scale the sales desk without scaling headcount",
        description: "Media Proposal Generator — a knowledge graph over your GAM, Salesforce, and analytics data turns every brief into grounded, ready-to-activate proposals. Senior-seller pricing logic becomes the desk's default, not tribal knowledge.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Sell audiences advertisers can't get anywhere else",
        description: "Audience Builder — first-party segments packaged in plain language, extended with synthetic audiences where seed data is thin. Every segment traces back to the deal it was built for.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Stop paying the silent tax on your ad revenue.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
