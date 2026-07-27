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
    subheadline: "Kana is the agentic layer that turns your first-party data — the asset walled gardens can't replicate — into the scale to compete with Amazon and Walmart.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Your advertisers don't trust your numbers",
      description: "94% of advertisers don't fully trust retailer-reported metrics, so every hand-built wrap report meets a client analytics team ready to tear it apart.",
    },
    {
      title: "Your ops don't scale past ten campaigns.",
      description: "Media planning, co-op budgets, and program performance still live in Excel, cut off from your campaign systems. Manual handoffs across sales and ops set your revenue ceiling.",
    },
    {
      title: "Two networks are taking 89% of the growth",
      description: "Amazon and Walmart capture 89% of incremental retail-media spend, so every other network has to out-tool them with a fraction of the headcount.",
    },
  ],

  // ── SOLUTIONS — 5 challenge-mapped Kana applications ───────
  solutions: [
    {
      feature: "Sales Intelligence",
      roleLabel: "Built for Heads of Retail Media & Account Teams",
      title: "Account intelligence your advertisers' analytics teams can't out-argue",
      description: "Sales Intelligence gives account teams a source-verified brief and win-likelihood score for every advertiser, grounded in your network's own history. Your team walks into the QBR with intelligence that defends the budget.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Media Proposal Generator",
      roleLabel: "Built for Retail Media Sales Teams",
      title: "RFP responses in minutes, not days",
      description: "Assembling a media package — audience data, benchmarks, formatting — takes sellers days and caps deal volume. The Media Proposal Generator reads the brief and delivers a data-backed proposal inside the response window, so JBP season stops being a throughput problem.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Audience & Data Teams",
      title: "One audience layer across every retail touchpoint",
      description: "E-commerce, in-store, app, and loyalty signals sit apart, making premium audience packages hard to build. Audience Builder turns a plain-language brief into a precise, activatable segment in minutes — no data engineering project required.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Ops & Campaign Managers",
      title: "Every campaign in flight, visible without the manual effort",
      description: "Campaign Orchestrator flags pacing risk before it becomes a miss — one daily view of exceptions instead of dashboards to check by hand.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Content Ops & Revenue Leads",
      title: "AI crawlers are already reading your content. Decide what they get.",
      description: "47+ AI bots crawl your properties around the clock, and robots.txt only lets you allow everything or block it. The LLM Command Center gives plain-English, per-section policies and the reporting you need to bring a licensing conversation to the table.",
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
      a: "No. Kana is the intelligence layer across the stack you've already built — your retail media platform, CRM, clean room, and DSP keep doing their job, each configured to your existing data. No rip-and-replace, no migration project."
    },
    {
      q: "How does Sales Intelligence help my team defend budgets at the QBR?",
      a: "It builds a source-verified, scored brief on every advertiser from your own win/loss record. Account managers walk into the QBR with the same numbers sellers use in renewals."
    },
    {
      q: "Our retail media team is five people. Is this built for us?",
      a: "That's who it's built for — lean teams outside the top two, carrying walled-garden expectations. Kana's agents absorb the work that caps campaign volume, so headcount stops limiting revenue."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Head of Retail Media",
      painPoints: [
        {
          text: "94% of advertisers say they don't fully trust the metrics behind your JBP renewals.",
        },
        {
          text: "19% of brands now call retail media networks 'a money grab' — more than double a year earlier. Proof is what's being bought now.",
        },
        {
          text: "Co-op budget tracking lives in Excel, disconnected from the systems that deliver campaigns.",
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
          text: "Building a media package — audience data, benchmarks, formatting — takes days per RFP.",
        },
        {
          text: "It caps deal volume and hands competitors the budget.",
        },
        {
          text: "JBP season squeezes a year of proposals into one quarter, same team.",
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
          text: "Onsite and offsite pacing is checked by hand — no shared dashboard.",
        },
        {
          text: "The manual CRM-to-ad-server handoff means more campaigns, more chances something slips.",
        },
        {
          text: "Account manager reporting is rebuilt from platform exports every flight.",
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
          text: "E-commerce, in-store, app, and loyalty data sit apart, so every audience package is bespoke.",
        },
        {
          text: "Only 48% of US retail media networks offer clean-room capabilities, and 39% of clean-room users struggle to activate them.",
        },
        {
          text: "Methodology debates over incrementality burn the week — the same data can swing 6×.",
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
        description: "Win-likelihood scoring from your own history — numbers that hold up in the QBR, and renewals that grow.",
        linkLabel: "Learn more about Sales Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Run a hundred campaigns with the team you have",
        description: "Pacing risk flagged daily — your team reviews exceptions instead of rebuilding a spreadsheet every morning.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Package audiences advertisers can't get anywhere else",
        description: "Purchase-linked, loyalty-verified segments built from first-party data in minutes — audience quality that justifies premium CPMs, without the data engineering queue.",
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
    subtitle: "Connects to your retail media platform, CRM, clean room, transaction systems, and DSP — no rip-and-replace.",
    columns: [
      {
        title: "Turn account intelligence into a renewal weapon",
        description: "Sales Intelligence — a verified brief and win-likelihood score for every advertiser, built from your history, turning renewal season into a strength.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Get campaign ops out of Excel",
        description: "Campaign Orchestrator connects pacing and reporting to your systems — the portfolio check finally leaves the spreadsheet.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Make the whole network self-serve ready",
        description: "Audience Builder gives every seller, planner, and self-serve advertiser the same verified, activatable segments.",
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
