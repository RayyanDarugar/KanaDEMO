// ============================================================
// INDUSTRY CONFIG — Retail & Commerce Media Networks (KFP)
// All asset paths are relative to the project root.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/media-networks-gtm-brief.md (all claims traced).
// Ground truth: kana.ai/kana-for-publishers Media Networks tab (2026-07-17).
// ============================================================

export const industryConfig = {
  slug: "media-networks",
  label: "Media Networks",
  accent: "#d3603f", // commerce terracotta. Change this one value to re-skin any vertical.

  solutionsTitle: "One agentic intelligence layer for your entire media network",
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
      "Media Networks",
      "Print / Digital / Audio",
      "Streaming & Video",
      "CPG",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Financial Services",
      "Travel & Hospitality",
      "QSR",
      "Healthcare",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "Media Networks Are Undermonetizing <em>Their First-Party Advantage</em>",
    subheadline: "You sit on rich, purchase-linked first-party data — the one asset walled gardens can't replicate. But fragmented audience infrastructure, slow sales cycles, and manual ops are letting Amazon and Walmart take the growth. Kana is the agentic layer that lets a five-person network compete at their scale.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Your advertisers keep spending, but they don't believe your numbers",
      description: "94% of advertisers say they don't fully trust retailer-reported metrics, and 71% now rank incrementality above ROAS as their top KPI. Every wrap report your team hand-builds from platform exports and transaction joins walks into a QBR where the client's analytics team is waiting to pick it apart.",
    },
    {
      title: "Your operations worked at ten campaigns. They collapse at a hundred.",
      description: "Media planning, co-op budget tracking, and shopper program performance still live in Excel, disconnected from the systems that actually deliver campaigns. The manual handoffs between sales, account management, and ad ops cap how many campaigns your team can run — and the ceiling is your revenue target.",
    },
    {
      title: "Two networks are taking 89% of the growth",
      description: "US retail media reaches $71 billion in 2026, but Amazon and Walmart capture 89% of the incremental spend. Every other network is expected to deliver walled-garden-grade measurement, audiences, and self-serve with a fraction of the headcount — and the tooling gap, not the data gap, is what's deciding the race.",
    },
  ],

  // ── SOLUTIONS — 5 challenge-mapped Kana applications ───────
  solutions: [
    {
      feature: "Sales Intelligence",
      roleLabel: "Built for Heads of Retail Media & Account Teams",
      title: "Account intelligence your advertisers' analytics teams can't out-argue",
      description: "Sales Intelligence arms your account teams with a source-verified brief on every advertiser — spend signals, category context, and prior campaign history — plus a win-likelihood score grounded in your network's own proposal outcomes. Instead of walking into the QBR with a hand-built deck, your team walks in with the account intelligence that defends the budget and sets up the next ask.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Media Proposal Generator",
      roleLabel: "Built for Retail Media Sales Teams",
      title: "RFP responses in minutes, not days",
      description: "Building a compelling media package means pulling audience data, assembling category benchmarks, and formatting a proposal — a process that takes sellers days and caps how many deals your team can pursue at once. The Media Proposal Generator reads the brief, grounds recommendations in your real audiences and inventory, and produces a reviewed, data-backed proposal inside the response window — so JBP season stops being a throughput problem.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Audience & Data Teams",
      title: "One audience layer across every retail touchpoint",
      description: "Customer signals from e-commerce, in-store, app, and loyalty programs sit in separate systems, which makes the verified, high-fidelity audience packages brand advertisers demand nearly impossible to build. Audience Builder turns a plain-language brief into a precise, sized, activatable segment in minutes — premium packaging and precision targeting without a data engineering project per deal.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Ops & Campaign Managers",
      title: "Every campaign in flight, visible without the manual effort",
      description: "Campaign Orchestrator monitors delivery pacing across your campaigns and flags what's at risk before it becomes a miss, giving your ops team a daily view of exceptions instead of a portfolio of dashboards to check by hand.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Content Ops & Revenue Leads",
      title: "AI crawlers are already reading your content. Decide what they get.",
      description: "47+ AI bots crawl your properties around the clock, and today the choice is all-or-nothing — robots.txt either hands them everything or blocks them outright. The LLM Command Center gives you plain-English, per-section policies — full access, summary, highlights, or deny, by bot and by property — plus the consumption reporting you need to bring a licensing conversation to the table instead of giving your content away for free.",
      icon: "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "$71B", label: "US retail media ad spend in 2026, growing ~18% a year (eMarketer)" },
    { number: "89%", label: "of incremental retail media spend captured by just Amazon and Walmart (eMarketer)" },
    { number: "94%", label: "of advertisers say they don't fully trust retailer-reported metrics (industry research)" },
    { number: "6×", label: "swing in measured incrementality depending on methodology alone (Albertsons Media Collective)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a retail media network leader on growing JBP commitments with closed-loop reporting]",
    name: "[Name]",
    title: "[Title], [Media Network]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "We already run a retail media platform. Does Kana replace it?",
      a: "No. Kana is the intelligence layer across the stack you've already built — your retail media platform, CRM, clean room, and DSP keep doing what they do. Each application is configured to your organization's data sources and existing tech stack, so there's no rip-and-replace and no migration project between you and value."
    },
    {
      q: "How does Sales Intelligence help my team defend budgets at the QBR?",
      a: "It builds a source-verified brief on every advertiser — spend signals, category context, and history with your network — and scores each opportunity against your own win/loss record. Your account managers walk into the QBR with the same grounded numbers your sellers use in renewal conversations, instead of a deck assembled by hand the night before."
    },
    {
      q: "Our retail media team is five people. Is this built for us?",
      a: "That's exactly who it's built for. Most networks outside the top two run lean teams carrying walled-garden expectations. Kana's agents absorb the monitoring, reporting, and proposal-assembly work that caps a small team's campaign volume, so headcount stops being the constraint on media revenue."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Head of Retail Media",
      painPoints: [
        {
          text: "The media revenue line the CFO now counts on depends on JBP renewals — and 94% of advertisers say they don't fully trust the metrics behind them.",
        },
        {
          text: "19% of brands now describe retail media networks as 'a money grab,' more than double a year earlier. Proof, not reach, is what's being bought.",
        },
        {
          text: "Co-op and trade budget tracking lives in Excel between the merchant org and the media org, disconnected from the systems delivering the campaigns.",
        }
      ],
      solution: {
        name: "Sales Intelligence",
        description: "A source-verified advertiser brief and win-likelihood score for every account — defensible intelligence for every renewal, QBR, and JBP negotiation, without a research project per advertiser.",
        linkLabel: "See Sales Intelligence",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Retail Media Sales Director",
      painPoints: [
        {
          text: "Building a media package means pulling audience data, assembling category benchmarks, and formatting the proposal — days of work per RFP.",
        },
        {
          text: "That timeline caps deal volume and hands faster-moving competitors the budget.",
        },
        {
          text: "JBP season concentrates a year of proposal work into a quarter, with the same team.",
        }
      ],
      solution: {
        name: "Media Proposal Generator",
        description: "Reads the brief and produces a data-backed, tailored proposal in minutes, grounded in your real audiences and benchmarks — more opportunities pursued without adding headcount.",
        linkLabel: "See Media Proposal Generator",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Ad Operations / Campaign Manager",
      painPoints: [
        {
          text: "Pacing is checked by hand across an onsite platform and an offsite DSP that don't share a dashboard.",
        },
        {
          text: "The CRM-to-ad-server handoff is manual, and every added campaign multiplies the chances something slips.",
        },
        {
          text: "Performance reporting for account managers is assembled from platform exports — again, every flight.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Pacing risk flagged and explained across every campaign in flight, with reporting handled for you. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "Audience & Measurement Lead",
      painPoints: [
        {
          text: "E-commerce, in-store, app, and loyalty signals sit in separate systems, so every audience package is a bespoke build.",
        },
        {
          text: "Only 48% of US retail media networks even offer clean-room capabilities, and 39% of clean-room users struggle to turn them into action.",
        },
        {
          text: "Incrementality methodology debates burn the team's week — the same data can show a 6× swing depending on approach.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Turns a plain-language brief into a precise, sized, activatable segment against your first-party data in minutes, so premium audience packages are assembled without a data-engineering queue instead of stitched per deal.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your data is walled-garden grade.<br>Now your tooling can be too.",
    columns: [
      {
        title: "Prove it while they're still deciding",
        description: "Account intelligence and win-likelihood scoring built from your own proposal history — so account teams walk into QBRs with numbers that hold up, and renewals grow instead of shrink.",
        linkLabel: "Learn more about Sales Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Run a hundred campaigns with the team you have",
        description: "Pacing risk flagged and explained daily, with reporting handled for you — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Package audiences advertisers can't get anywhere else",
        description: "Purchase-linked, loyalty-verified segments built from your first-party data in minutes, fully traceable back to the brief that shaped them — the audience quality that justifies premium CPMs, without the data engineering queue.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      }
    ]
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    rotations: [
      { text: "Criteo", className: "color-criteo" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "The Trade Desk", className: "color-ttd" },
      { text: "BigQuery", className: "color-bigquery" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to your retail media platform, CRM, clean room, transaction systems, and DSP — no rip-and-replace, no engineering queue, no new governance gaps.",
    columns: [
      {
        title: "Turn account intelligence into a renewal weapon",
        description: "Sales Intelligence — a verified brief and win-likelihood score on every advertiser, built from your own history. Renewal season becomes something your network is known for, not something your analysts survive.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Get campaign ops out of Excel",
        description: "Campaign Orchestrator — pacing risk, delivery monitoring, and performance reporting connected to the systems that deliver your campaigns, so the daily portfolio check stops living in disconnected spreadsheets.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Make the whole network self-serve ready",
        description: "Audience Builder — a unified, activatable audience layer means every seller, planner, and self-serve advertiser draws from the same verified segments instead of requesting one-off builds.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Stop losing JBP dollars to numbers your advertisers don't trust.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
