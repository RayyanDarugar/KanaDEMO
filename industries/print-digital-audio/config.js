// ============================================================
// INDUSTRY CONFIG — Print / Digital / Audio Publishers (KFP)
// All asset paths are relative to the project root.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/print-digital-audio-gtm-brief.md (all claims traced;
// carries forward publishers-gtm-brief.md research).
// Ground truth: kana.ai/kana-for-publishers Print/Digital/Audio tab (2026-07-17).
// ============================================================

export const industryConfig = {
  slug: "print-digital-audio",
  label: "Print / Digital / Audio",
  accent: "#2d6cdf", // ink blue, carried from the original Publishers page.

  solutionsTitle: "Build agentic applications that support both of your revenue lines",
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
    headline: "Publishers Are Navigating a <em>Structural Revenue Shift</em>",
    subheadline: "Cookie deprecation, declining display CPMs, AI answer engines eroding search traffic, and subscription headwinds — pressure on both revenue lines at once, on infrastructure that wasn't built for what comes next. Kana gives publisher teams the activation, retention, and ops layer that infrastructure is missing.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Your first-party data is your most durable asset — and your least activated",
      description: "Publishers sitting on rich first-party behavioral data have no efficient way to segment, package, or activate it for advertisers or their own subscriber marketing. 44% of publishers plan to serve over 40% of next year's impressions on first-party data; most still queue every segment request behind data engineering.",
    },
    {
      title: "Your churn report tells you who cancelled — a list of people you can no longer save",
      description: "At roughly 4% monthly churn, a news publisher replaces nearly half its subscriber base every year just to stay flat. Churn spikes at renewal windows, after content gaps, or when competitive alternatives launch — and most publishers lack the infrastructure to catch at-risk subscribers before the cancellation, not after it.",
    },
    {
      title: "AI answer engines are intercepting the traffic your audience was built on",
      description: "Organic traffic to news publishers fell from 2.3 billion monthly visits to under 1.7 billion in a single year, as zero-click searches climbed from 56% to 69%. Content that built your audience through search discovery is losing reach — without you knowing how, where, or how to respond.",
    },
  ],

  // ── SOLUTIONS — 5 challenge-mapped Kana applications ───────
  solutions: [
    {
      feature: "Audience Builder",
      roleLabel: "Built for Data & Audience Teams",
      title: "Turn first-party data into a premium, monetizable asset",
      description: "Audience Builder helps your team build, enrich, and package first-party audience data as a product — precise audience packaging for direct-sold campaigns without a data engineering overhaul. Segments are built in plain language and trace from brief to proposal, so the deals your data was supposed to close stop waiting in an engineering queue.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Audience Development & Revenue Leads",
      title: "See — and control — who's crawling your content, and on what terms",
      description: "The LLM Command Center shows you which AI crawlers are pulling your content, lets you set plain-English access policies by content tier, and turns that activity into evidence for licensing conversations. The traffic your search team spent two decades winning is now being harvested by bots instead of read by people; this is the instrument panel for setting the terms of that trade.",
      icon: "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Sales Intelligence",
      roleLabel: "Built for Ad Sales & Sales Planners",
      title: "Data-backed proposals in minutes, inside the agency's window",
      description: "Building a differentiated, audience-backed media package means pulling data from multiple systems and crafting category context — a process that bottlenecks sellers and limits how many opportunities the desk can pursue. Sales Intelligence, including the Media Proposal Generator agent, lets sellers produce tailored, data-backed proposals in minutes, increasing deal volume without adding headcount.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Personalization",
      roleLabel: "Built for Retention & Subscriptions Teams",
      title: "Catch the churn signal before it becomes a cancellation",
      description: "Personalization monitors subscriber engagement signals, identifies churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Ops Across Every Format",
      title: "One ops layer across display, native, newsletter, audio, and podcast",
      description: "Managing delivery, pacing, and performance reporting across every format creates significant ops overhead — and manual errors damage advertiser relationships and renewal rates. Campaign Orchestrator automates monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory, so the Friday recap deck assembles itself and your team manages exceptions instead of dashboards.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "−33%", label: "decline in Google search traffic to publishers in a single year (Press Gazette)" },
    { number: "4%", label: "monthly churn for online news subscriptions — nearly half the base per year (industry benchmark)" },
    { number: "$2.9B", label: "US podcast ad revenue in 2025, up 17.6% — audio is the growth format (IAB)" },
    { number: "24 hrs", label: "the agency response window your 4–6 day manual proposal process is missing (Kana research)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a publisher on intercepting churn before cancellation / winning AI-era discovery]",
    name: "[Name]",
    title: "[Title], [Publisher]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How is Personalization different from our paywall and subscription tools?",
      a: "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals, flags churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
    },
    {
      q: "What does the LLM Command Center actually monitor?",
      a: "Which AI bots are crawling your content, how often, and what they're taking — training, RAG, search, or research. You set plain-English access policies by content tier and provider, and every crawl becomes evidence you can bring to a licensing conversation, so your response to AI crawlers is a managed program instead of a guess."
    },
    {
      q: "Does Campaign Orchestrator only work with Google Ad Manager?",
      a: "Yes. It's built and proven on GAM, automating monitoring, pacing alerts, and performance reporting across your display and native inventory — so your team manages exceptions instead of stitching dashboards together by hand."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "VP Data & Audience Strategy",
      painPoints: [
        {
          text: "First-party data strategy has no clear path to activation — the most durable post-cookie asset sits underutilized.",
        },
        {
          text: "Segment requests from sales queue behind data engineering, delaying the deals those segments were meant to close.",
        },
        {
          text: "71% of publishers call first-party data a key source of positive ad results; packaging it per-advertiser is still bespoke manual work.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Build, enrich, and package first-party audiences in plain language — premium packaging for direct-sold campaigns without a data engineering overhaul.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Head of Audience Development",
      painPoints: [
        {
          text: "AI-powered search tools answer user queries directly, without sending the traffic that built the audience.",
        },
        {
          text: "Zero-click searches rose from 56% to 69% in a year; publisher organic traffic dropped by over a quarter.",
        },
        {
          text: "There's no view of how, where, or how accurately the content appears inside AI answers — so there's no way to respond.",
        }
      ],
      solution: {
        name: "LLM Command Center",
        description: "Monitors AI crawler activity across your properties, lets you set access policy by content tier, and turns AI consumption into a discipline your team runs — and a licensing case you can make.",
        linkLabel: "See LLM Command Center",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Sales Planner / Account Executive",
      painPoints: [
        {
          text: "Direct sales teams can't scale proposal creation to match demand — assembly takes days against a 24-hour agency window.",
        },
        {
          text: "An audience-backed package means pulling from multiple systems and crafting category context per pitch.",
        },
        {
          text: "The bottleneck limits how many opportunities the team can pursue at once, and quota doesn't shrink to match.",
        }
      ],
      solution: {
        name: "Sales Intelligence",
        description: "Audience insights, category context, and the Media Proposal Generator agent in one workspace — data-backed, tailored proposals in minutes, more deals pursued with the same desk.",
        linkLabel: "See Sales Intelligence",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Retention / Subscriptions",
      painPoints: [
        {
          text: "Churn spikes at renewal windows, after content gaps, or when competitive alternatives launch — and shows up in a report only after the cancels.",
        },
        {
          text: "Retention interventions are calendar-based and generic; the tailored, timely offer that would have saved the subscriber never fires.",
        },
        {
          text: "Subscriber retention requires personalization infrastructure most publishers don't have.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Engagement monitoring that catches churn-risk indicators early and recommends tailored offers and content experiences your team approves before cancellation intent solidifies.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "Ad Operations Manager",
      painPoints: [
        {
          text: "Campaign operations across display, native, newsletter, audio, and podcast are still largely manual — five channels, five dashboards.",
        },
        {
          text: "Ad ops teams spend 12–18 hours a week copying platform metrics into spreadsheets for reporting.",
        },
        {
          text: "Manual errors across formats damage advertiser relationships and renewal rates.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Automated monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory — delivery accuracy up, manual burden down, recap decks that build themselves.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-4"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Both revenue lines are under pressure.<br>Kana is the infrastructure both were missing.",
    columns: [
      {
        title: "Make your data earn like the asset it is",
        description: "First-party segments packaged and proposal-ready for direct-sold campaigns — the premium, post-cookie ad product advertisers are asking for, built without an engineering project.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Save subscribers while they're still subscribers",
        description: "Engagement signals monitored, churn risk caught early, and tailored retention offers recommended and approved before cancellation intent solidifies — not after the cohort report.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Control the crawl, not just the ranking",
        description: "AI crawler activity monitored and governed by content tier — so the discovery shift becomes a program you manage instead of a chart you dread.",
        linkLabel: "Learn more about LLM Command Center",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
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
    rotations: [
      { text: "Google Ad Manager", className: "color-gam" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Megaphone", className: "color-megaphone" },
      { text: "Piano", className: "color-piano" },
      { text: "Google Analytics", className: "color-ganalytics" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to Google Ad Manager, Salesforce, your email platforms, and your subscription stack — no rip-and-replace, no engineering queue, no new governance gaps.",
    columns: [
      {
        title: "Monitor five formats without five dashboards",
        description: "Campaign Orchestrator — monitoring, pacing alerts, and performance reporting across your Google Ad Manager inventory, connected to the platforms that serve your display and native campaigns.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Put churn interception on top of your subscription stack",
        description: "Personalization — engagement signals turned into approved retention offers, working alongside your paywall, billing, and email platforms instead of replacing them.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Give every seller the senior seller's toolkit",
        description: "Sales Intelligence — audience insights, category context, and automated proposal creation grounded in your real inventory and analytics, standardized across the desk.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Two revenue lines. One intelligence layer. Zero rebuilds.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
