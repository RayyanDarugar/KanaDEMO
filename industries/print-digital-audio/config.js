// ============================================================
// INDUSTRY CONFIG: Print / Digital / Audio Publishers (KFP)
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
    headline: "Turn the Revenue Shift <em>Into Your Advantage</em>",
    subheadline: "Kana gives publisher teams the activation, retention, and ops layer their revenue lines are missing, built for cookie loss, softening CPMs, and AI answer engines at once.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Your first-party data is your most durable asset (and your least activated)",
      description: "Publishers have no efficient way to activate first-party data. 44% plan to lean on it heavily next year, yet most requests still queue behind data engineering.",
    },
    {
      title: "Your churn report tells you who cancelled: a list of people you can no longer save",
      description: "At roughly 4% monthly churn, a news publisher replaces nearly half its subscriber base every year. Most lack the infrastructure to catch at-risk subscribers before they cancel.",
    },
    {
      title: "AI answer engines are intercepting the traffic your audience was built on",
      description: "Organic traffic to news publishers fell from 2.3 billion monthly visits to under 1.7 billion in a year, as zero-click search keeps rising. Your audience is quietly disappearing.",
    },
  ],

  // ── SOLUTIONS: 5 challenge-mapped Kana applications ───────
  solutions: [
    {
      feature: "Audience Builder",
      roleLabel: "Built for Data & Audience Teams",
      title: "Turn first-party data into a premium, monetizable asset",
      description: "Audience Builder packages first-party data into premium, direct-sold audience products without a data engineering overhaul. Segments are built in plain language, so deals stop waiting in an engineering queue.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Audience Development & Revenue Leads",
      title: "See who's crawling your content, and control on what terms",
      description: "LLM Command Center shows which AI crawlers are pulling your content, turning that activity into evidence for licensing conversations. That's leverage for the traffic that bots are now harvesting instead of your readers.",
      icon: "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Sales Intelligence",
      roleLabel: "Built for Ad Sales & Sales Planners",
      title: "Data-backed proposals in minutes, inside the agency's window",
      description: "Pulling data from multiple systems bottlenecks sellers and caps deal volume. Sales Intelligence, including the Media Proposal Generator agent, produces tailored, data-backed proposals in minutes, so sellers close more deals without adding headcount.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Personalization",
      roleLabel: "Built for Retention & Subscriptions Teams",
      title: "Catch the churn signal before it becomes a cancellation",
      description: "Personalization catches churn-risk signals early and recommends retention offers your team approves before cancellation intent solidifies. Your paywall optimizes the conversion moment. This is the layer for everything that comes after.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Ops Across Every Format",
      title: "One ops layer across display, native, newsletter, audio, and podcast",
      description: "Manual delivery tracking creates ops overhead and hurts advertiser relationships. Campaign Orchestrator automates monitoring and reporting on your Google Ad Manager inventory, so your team manages exceptions, not dashboards.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "−33%", label: "decline in Google search traffic to publishers in a single year (Press Gazette)" },
    { number: "4%", label: "monthly churn for online news subscriptions, nearly half the base per year (industry benchmark)" },
    { number: "$2.9B", label: "US podcast ad revenue in 2025, up 17.6%; audio is the growth format (IAB)" },
    { number: "24 hrs", label: "the agency response window your 4–6 day manual proposal process is missing (Kana research)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER: Testimonial from a publisher on intercepting churn before cancellation / winning AI-era discovery]",
    name: "[Name]",
    title: "[Title], [Publisher]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How is Personalization different from our paywall and subscription tools?",
      a: "Paywall platforms optimize the conversion moment. Personalization handles everything after: watching engagement signals, flagging churn risk early, and recommending retention offers your team approves before cancellation. It complements your subscription stack, not replaces it."
    },
    {
      q: "What does the LLM Command Center actually monitor?",
      a: "Which AI bots are crawling your content, how often, and what they're taking: training, RAG, search, or research. You set access policies by tier, and every crawl becomes evidence for licensing conversations."
    },
    {
      q: "Does Campaign Orchestrator only work with Google Ad Manager?",
      a: "Yes. It's built and proven on GAM, automating monitoring, pacing, and reporting so your team manages exceptions, not dashboards."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "VP Data & Audience Strategy",
      painPoints: [
        {
          text: "First-party data strategy has no clear path to activation. The most durable post-cookie asset sits underutilized.",
        },
        {
          text: "Segment requests from sales queue behind data engineering, delaying the deals those segments were meant to close.",
        },
        {
          text: "71% of publishers call first-party data a key source of positive ad results, but packaging it is still manual work.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Build, enrich, and package first-party audiences in plain language. It's premium packaging for direct-sold campaigns without a data engineering overhaul.",
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
          text: "Zero-click searches rose from 56% to 69% in a year, and publisher organic traffic fell with them.",
        },
        {
          text: "There's no visibility into how, where, or how accurately content appears inside AI answers.",
        }
      ],
      solution: {
        name: "LLM Command Center",
        description: "Monitors AI crawler activity across your properties, lets you set access policy by content tier, and builds the evidence for licensing conversations.",
        linkLabel: "See LLM Command Center",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Sales Planner / Account Executive",
      painPoints: [
        {
          text: "Proposal creation can't scale to match demand. Assembly takes days against a 24-hour agency window.",
        },
        {
          text: "An audience-backed package means pulling from multiple systems and crafting category context per pitch.",
        },
        {
          text: "The bottleneck limits how many opportunities the team can pursue. Quota doesn't shrink to match.",
        }
      ],
      solution: {
        name: "Sales Intelligence",
        description: "Audience insights, category context, and the Media Proposal Generator agent in one workspace, generating data-backed, tailored proposals in minutes and more deals pursued with the same desk.",
        linkLabel: "See Sales Intelligence",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Retention / Subscriptions",
      painPoints: [
        {
          text: "Churn spikes at renewal windows, content gaps, and competitor launches, long before it shows up in a report.",
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
          text: "Campaign operations across display, native, newsletter, audio, and podcast are still largely manual. Five channels, five dashboards.",
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
        description: "Automated monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory. Delivery accuracy up, manual burden down, recap decks that build themselves.",
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
        description: "First-party segments, packaged and proposal-ready for direct-sold campaigns, built without an engineering project.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Save subscribers while they're still subscribers",
        description: "Churn risk is caught early, and retention offers go out before cancellation intent solidifies.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Control the crawl, not just the ranking",
        description: "AI crawler activity is monitored and governed by content tier: a program you manage, not dread.",
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
    description: "Under-pacing that looks healthy, broken creatives that pass every check, eCPM drops hidden in the averages. This is where publisher revenue leaks, and how to catch it early.",
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
    subtitle: "Connects to Google Ad Manager, Salesforce, your email platforms, and your subscription stack without requiring a rip-and-replace.",
    columns: [
      {
        title: "Monitor five formats without five dashboards",
        description: "Campaign Orchestrator monitors pacing and performance across your Google Ad Manager inventory and connected display and native platforms.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Put churn interception on top of your subscription stack",
        description: "Personalization turns engagement signals into retention offers that work alongside your paywall and billing stack, not replace it.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Give every seller the senior seller's toolkit",
        description: "Sales Intelligence grounds automated proposal creation in your real inventory and analytics, standardized across the desk.",
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
