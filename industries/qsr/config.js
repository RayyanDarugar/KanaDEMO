// ============================================================
// INDUSTRY CONFIG: QSR (Quick Service Restaurants)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/qsr-gtm-brief.md (all claims traced;
// product roster/positioning from Rayyan's screenshots 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "qsr",
  label: "QSR",
  accent: "#d62828", // ketchup red. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire restaurant team",
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
      "QSR",
      "CPG",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Financial Services",
      "Travel & Hospitality",
      "Media Networks",
      "Print / Digital / Audio",
      "Streaming & Video",
      "Healthcare",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "QSR Brands Can't Localize <em>at the Speed of Real Life</em>",
    subheadline: "Kana gives QSR marketers budget that keeps pace with what's converting, offers that respect real kitchen conditions, and targeting that shifts with demand, at scale, store by store.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Media spend ignores location-level performance",
      description: "Campaigns run uniformly, even as traffic and menu mix vary by market, and franchisees can see which stores got left out.",
    },
    {
      title: "Engagement triggers ignore store operations",
      description: "Offers fire on time-of-day rules, not real signals. They go out for 86'd items, and the guest finds out at the counter.",
    },
    {
      title: "Day-part targeting doesn't adjust dynamically",
      description: "Day-part campaigns run on a fixed calendar, blind to weather, events, and competitor moves. When most QSR purchases resolve in minutes, a plan locked weeks out can't keep pace.",
    },
  ],

  // ── SOLUTIONS: 4 QSR-native Kana products ─────────────────
  solutions: [
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Field & Franchise Marketing Teams",
      title: "Spend that follows the market, not the national average",
      description: "Campaign Orchestrator shifts budget to whatever channel is converting right now, with your team approving every move. The weekly comp readout stops being a record of decisions made three weeks too late.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for CRM & Lifecycle Teams",
      title: "Offers that check the kitchen before they send",
      description: "The Agentic Data Platform keeps campaign tools synced to store operations, so an 86'd item's offer gets caught before it sends, not flagged by a guest complaint. Marketing stops promising what operations can't serve.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Media & Campaign Teams",
      title: "Audiences ready the moment demand shifts",
      description: "Audience Builder builds sized, suppressed segments straight from your CRM and loyalty data in minutes, not the two-week ticket to the data team. The offer goes out while the moment's still there.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Personalization",
      roleLabel: "Built for Loyalty Teams",
      title: "Offer logic built per member, not per program",
      description: "Personalization builds individualized offer logic per member, so each offer adds a visit that wasn't already coming, not the same buy-10-get-1 for everyone regardless of how often they visit.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "30%", label: "of 2025 restaurant visits were deal-driven, the highest rate in 50 years, yet traffic still declined (Facteus)" },
    { number: "83%", label: "of major QSR brands have lower customer retention than before the value wars began (Facteus)" },
    { number: "+76%", label: "visit lift when a guest joins a QSR loyalty program, from 5.8 to 10.2 visits per year (Restaurant Dive)" },
    { number: "17%", label: "traffic lift from weather-triggered local campaigns across 1,700 locations (CleverTap)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER: Testimonial from a leading QSR brand on localizing campaigns by market signal]",
    name: "[Name]",
    title: "[Title], [QSR Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our restaurant stack?",
      a: "Via API. Kana connects to your warehouse, marketing, loyalty, and ordering systems, with no rip-and-replace and no data migration. Kana's team scopes the connection list with you and sets timing per engagement."
    },
    {
      q: "How does the Agentic Data Platform know what's happening in the kitchen?",
      a: "It reads the same operational signals your stores already produce (inventory, 86'd-item status, order volume, kitchen capacity), so offers reflect current conditions, not a stale calendar. Your team still reviews every rule first."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Field / Franchise Marketing Manager",
      painPoints: [
        {
          text: "The weekly comp-sales readout shows variance the national calendar ignores, and franchisees can see it too.",
        },
        {
          text: "Co-op and DMA budgets are locked quarterly, with no way to shift spend when a market's traffic diverges.",
        },
        {
          text: "Franchisees contribute 2–7% of gross sales to pooled marketing funds and demand proof it moves their stores, not the system average.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Cross-channel budget optimization that reallocates spend to whatever's converting, with every recommendation reviewed by your team before it ships. Every channel gets a plan shaped by its own performance, and the franchisee conversation starts from real numbers instead of the system average.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Director of CRM & Lifecycle",
      painPoints: [
        {
          text: "Push notifications fire on time-of-day rules, whether or not the kitchen can absorb the offer.",
        },
        {
          text: "Offers drop for items that were 86'd an hour ago, and the guest finds out at the counter.",
        },
        {
          text: "One offer campaign means configuring two disconnected systems, loyalty and messaging, neither of which reads store operations.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "Keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it sends. The push calendar stops promising what the store can't serve.",
        linkLabel: "See Agentic Data Platform",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Director of Media",
      painPoints: [
        {
          text: "Day-part campaigns run on schedules locked 30+ days out, while weather, events, and competitors shift demand daily.",
        },
        {
          text: "DMA-level plans deploy once and optimize weekly at best, but most QSR purchases resolve in under 30 minutes.",
        },
        {
          text: "Weather-triggered campaigns show double-digit traffic lifts, but the current stack can't run them at hundreds of locations.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Builds sized, suppressed audiences straight from your CRM and loyalty data in minutes instead of weeks, so day-part campaigns launch from a current segment instead of a stale export, market by market.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Director of Loyalty",
      painPoints: [
        {
          text: "Every loyalty member gets the same buy-10-get-1, regardless of how often they visit or what they buy.",
        },
        {
          text: "Blanket offers subsidize visits that were already coming, cannibalizing full-price behavior instead of adding traffic.",
        },
        {
          text: "Loyalty members visit 76% more often than non-members, but the program treats its heaviest and lightest users identically.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Individualized offer logic per member, calibrated to maximize incremental visits without cannibalizing full-price purchase behavior. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP Restaurant Marketing / CMO",
      painPoints: [
        {
          text: "Discounting is at a 50-year high, and traffic keeps declining anyway.",
        },
        {
          text: "83% of major QSR brands have worse retention than when the value wars started; discounts bought visits, not loyalty.",
        },
        {
          text: "The quarterly ad-fund review with the franchisee council runs on manually stitched POS and media reports.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "The channel-optimization engine behind the whole story: budget follows performance signal, every reallocation traces to the decision that drove it, and the franchisee council sees the reasoning behind the plan, not just the system average.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your calendar was locked 30 days ago.<br>Demand shifted this morning.",
    columns: [
      {
        title: "Spend follows the market, not the average",
        description: "Budget shifts to whatever's converting, reviewed by your team first. High-variance markets stop being stuck on the national mean.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Offers that check the 86 board first",
        description: "Kana keeps campaign tools synced to store operations, so your team catches a bad offer before the guest finds out at the counter.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Segments ready before the moment passes",
        description: "Audiences build in minutes, not weeks, with suppression built in, so campaigns launch while the demand is still there.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece: blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for QSR teams",
    type: "White Paper",
    title: "Localizing at the speed of real life: the QSR playbook",
    description: "Discounting is at a 50-year high, yet retention keeps falling. Leading QSR brands are swapping national averages for market signal, winning traffic back without buying it.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // QSR-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Toast", className: "color-toast" },
      { text: "Punchh", className: "color-punchh" },
      { text: "Olo", className: "color-olo" },
      { text: "Braze", className: "color-braze" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to your warehouse, loyalty platform, ordering system, and ad platforms, with no rip-and-replace and no new governance gaps.",
    columns: [
      {
        title: "Reallocate budget without hiring a planner per channel",
        description: "Campaign Orchestrator moves budget to whatever's converting, reviewed by your team first. Channels that used to run on autopilot finally get a real plan.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Keep campaigns honest about the kitchen",
        description: "Agentic Data Platform keeps campaign tools synced to store operations, so offers get caught before they go out, not flagged by a guest complaint.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Build the segment, not just the demographic",
        description: "Audience Builder builds sized, suppressed segments from your CRM and loyalty data in minutes, fast enough for campaigns to finally act on it.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Localize at the speed of real life.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
