// ============================================================
// INDUSTRY CONFIG — QSR (Quick Service Restaurants)
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
      "Manufacturing",
      "Financial Services",
      "Pharma",
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
    subheadline: "With thousands of locations, micro-level demand variation, and app-driven loyalty as the primary growth lever, QSR marketers face a scale problem generic campaign tools weren't built to solve. Kana gives you spend that follows market signal, offers wired to real kitchen conditions, and day-parts that flex with demand.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Location-level performance variance isn't informing media spend",
      description: "National campaigns get applied uniformly even when individual markets have radically different traffic patterns, competitive sets, and menu preferences. Your franchisees fund the ad dollars — and they can see which stores the national calendar left behind.",
    },
    {
      title: "App engagement triggers are disconnected from operations",
      description: "Push notifications go out based on time-of-day rules, not real signals — causing offers to drop when an item is 86'd or kitchen capacity is overwhelmed. The guest finds out at the counter, and the store wears the miss.",
    },
    {
      title: "Day-part targeting doesn't adjust dynamically",
      description: "Breakfast, lunch, and dinner campaigns run on calendar schedules — unresponsive to weather, events, traffic, or competitive promotions that shift customer demand in real time. Most QSR purchases resolve in under 30 minutes; media locked 30 days ago can't be present in that moment.",
    },
  ],

  // ── SOLUTIONS — 4 QSR-native Kana products ─────────────────
  solutions: [
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Field & Franchise Marketing Teams",
      title: "Spend that follows the market, not the national average",
      description: "Campaign Orchestrator enables location-aware audience and budget optimization — surfacing where spend should shift by market performance signal, with your team approving every move before it ships. Instead of one national plan applied to thousands of different trade areas, each market's traffic patterns, competitive set, and menu preferences shape where the next dollar goes. The weekly comp readout stops being a record of stores the calendar left behind.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for CRM & Lifecycle Teams",
      title: "Offers that check the kitchen before they send",
      description: "The Agentic Data Platform keeps your campaign tools working from the same operational picture as your stores — so when an item gets 86'd or the line is at capacity, your team can catch and adjust the offer that would have promoted it before it goes out, instead of finding out from a guest complaint. Marketing stops promising what operations can't serve.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Media & Campaign Teams",
      title: "Audiences that are ready the moment demand shifts",
      description: "Audience Builder builds precise, sized segments straight from your CRM and loyalty data — with suppression logic built in, so recent purchasers and opt-outs are automatically excluded. Instead of a two-week ticket to the data team, breakfast, lunch, and dinner segments are ready in minutes, so the offer goes out while the moment is still there.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Personalization",
      roleLabel: "Coming Soon — Built for Loyalty Teams",
      title: "Offer logic built per member, not per program",
      description: "Personalization builds individualized offer logic per loyalty member — maximizing incremental visits without cannibalizing full-price purchase behavior. Instead of every member getting the same buy-10-get-1 regardless of visit frequency, order history, channel preference, or price sensitivity, each offer is calibrated to add a visit that wasn't already coming. Coming soon to the Kana platform.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "30%", label: "of 2025 restaurant visits were deal-driven — the highest rate in 50 years — yet traffic still declined (Facteus)" },
    { number: "83%", label: "of major QSR brands have lower customer retention than before the value wars began (Facteus)" },
    { number: "+76%", label: "visit lift when a guest joins a QSR loyalty program — 5.8 to 10.2 visits per year (Restaurant Dive)" },
    { number: "17%", label: "traffic lift from weather-triggered local campaigns across 1,700 locations (CleverTap)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading QSR brand on localizing campaigns by market signal]",
    name: "[Name]",
    title: "[Title], [QSR Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our restaurant stack?",
      a: "Via API. Kana sits on top of your POS (Toast, Brink, Oracle Simphony), loyalty platform (Punchh, Paytronix), ordering system (Olo), and ad platforms — no rip-and-replace, no warehouse migration. Kana's solutions team handles setup, with timelines depending on how many systems you're connecting."
    },
    {
      q: "How does the Agentic Data Platform know what's happening in the kitchen?",
      a: "It's built to work from the same operational signals your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity — so offer decisions can reflect current conditions instead of a calendar set weeks ago. Every rule runs with your team's review before an offer goes out."
    },
    {
      q: "When will Personalization be available?",
      a: "Personalization is coming soon. It builds on the same foundation as Audience Builder and the Agentic Data Platform, so teams deploying those today are set up to activate per-member offer logic the moment it ships. Book a demo to see the roadmap and get early access."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Field / Franchise Marketing Manager",
      painPoints: [
        {
          text: "The weekly comp-sales readout shows store-level variance the national calendar ignores — and the operators funding the ad fund can see it too.",
        },
        {
          text: "Co-op and DMA budget allocations are set quarterly in spreadsheets, with no mechanism to shift spend when one market's traffic diverges.",
        },
        {
          text: "Franchisees contribute 2–7% of gross sales to pooled marketing funds and demand proof it moves their stores — not the system average.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Location-aware audience and budget optimization that surfaces where spend should shift by market performance signal, with your team approving every move before it ships. Every store's trade area gets a plan shaped by its own traffic patterns and competitive set — and the franchisee conversation starts from their numbers.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Director of CRM & Lifecycle",
      painPoints: [
        {
          text: "Push notifications fire on time-of-day rules — the offer goes out whether or not the kitchen can absorb it.",
        },
        {
          text: "Offers drop for items that got 86'd an hour ago, and the guest finds out at the counter.",
        },
        {
          text: "Setting up one offer campaign means configuring two disconnected systems — the loyalty platform and the messaging platform — neither of which reads store operations.",
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
          text: "Day-part campaigns run on calendar schedules locked 30+ days out, while weather, events, and competitor promotions shift demand daily.",
        },
        {
          text: "DMA-level plans are deployed once and optimized weekly at best — but most QSR purchase decisions resolve in under 30 minutes.",
        },
        {
          text: "Weather-triggered local campaigns show double-digit traffic lifts, but the current stack has no way to run them at hundreds of locations.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Builds sized, suppressed audiences straight from your CRM and loyalty data in minutes instead of weeks — so day-part campaigns launch from a current segment instead of a stale export, market by market.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Director of Loyalty",
      painPoints: [
        {
          text: "Every loyalty member gets the same buy-10-get-1 offer, regardless of visit frequency, order history, channel preference, or price sensitivity.",
        },
        {
          text: "Blanket offers subsidize visits that were already coming — discount spend cannibalizes full-price behavior instead of adding traffic.",
        },
        {
          text: "Loyalty members visit 76% more often than non-members, but the program treats its heaviest and lightest users identically.",
        }
      ],
      solution: {
        name: "Personalization (Coming Soon)",
        description: "Individualized offer logic per member — calibrated to maximize incremental visits without cannibalizing full-price purchase behavior. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP Restaurant Marketing / CMO",
      painPoints: [
        {
          text: "The industry is discounting harder than any time in 50 years — 30% of visits are deal-driven — and traffic is still declining.",
        },
        {
          text: "83% of major QSR brands have worse retention than when the value wars started; discounts bought visits, not loyalty.",
        },
        {
          text: "The quarterly ad-fund ROI review with the franchisee council runs on manually stitched POS lift and media reports.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "The location-aware spending engine behind the whole story: budget follows market performance signal, every market's results trace to the decisions that drove them, and the franchisee council sees their stores in the plan — not just the system average.",
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
        description: "Location-aware budget optimization surfaces where spend should shift by market performance signal, with every reallocation reviewed and approved by your team — so high-variance markets get plans built for their trade area, not the national mean.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Offers that check the 86 board first",
        description: "Kana keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it goes out — before the guest finds out at the counter.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Segments that are ready before the moment passes",
        description: "Audiences build straight from your CRM and loyalty data in minutes, not weeks — with suppression built in — so day-part campaigns launch from a current segment while the demand is still there.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for QSR teams",
    type: "White Paper",
    title: "Localizing at the speed of real life: the QSR playbook",
    description: "The industry is discounting harder than any time in 50 years and retention is still falling. How leading QSR brands are replacing national averages with market-level signal — and winning back traffic without buying it.",
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
    subtitle: "Connects to your POS, loyalty platform, ordering system, and ad platforms — Toast, Punchh, Paytronix, Olo, Braze, and more — no rip-and-replace, no new governance gaps.",
    columns: [
      {
        title: "Give every location its own plan without hiring a planner per market",
        description: "Campaign Orchestrator — market performance signals drive location-aware budget optimization across thousands of trade areas. The stores the pooled fund used to leave behind get plans shaped by their own demand.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Keep campaigns honest about what the kitchen can deliver",
        description: "Agentic Data Platform — keeps your campaign tools working from the same operational picture as your stores, so offers can be caught and adjusted before they go out. Marketing and operations stop finding out about each other from guest complaints.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Build the segment, not just the demographic",
        description: "Audience Builder — sized, suppressed segments build straight from your CRM and loyalty data in minutes. Proximity, trade area, and visit timing live in your data; your campaigns finally act on it fast enough to matter.",
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
