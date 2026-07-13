// ============================================================
// INDUSTRY CONFIG — Travel & Hospitality
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/travel-hospitality-gtm-brief.md (all
// claims traced; roster/positioning from Rayyan's screenshots 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "travel-hospitality",
  label: "Travel & Hospitality",
  accent: "#d4af37", // gold. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire commercial team",
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
      "Travel & Hospitality",
      "CPG",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Manufacturing",
      "Financial Services",
      "Pharma",
      "Publishers",
      "QSR",
      "Healthcare",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "Travel Brands Are Losing Revenue <em>to Reactive Marketing</em>",
    subheadline: "Yield management systems optimize price in real time, but marketing systems still run on batch workflows. The result: pricing moves faster than offers, and loyalty members receive generic messages that ignore their real-time intent signals. Kana connects your revenue strategy to your campaign layer — so marketing moves at the speed of your pricing.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Revenue management and marketing speak different languages",
      description: "Yield and pricing signals never reach the marketing layer in time to adjust offers, suppress discounts on high-demand routes, or personalize urgency messaging. The two functions share a weekly meeting — not a data layer — and fewer than 1 in 4 hotels have their core systems integrated enough to support a unified guest profile.",
    },
    {
      title: "Loyalty personalization is limited to batch email segments",
      description: "High-value loyalty members receive the same promotional email as new subscribers — because the personalization layer has no access to real-time behavioral intent. Loyalty program costs are outrunning room revenue, and batch segments can't prove the incremental revenue CFOs are asking for.",
    },
    {
      title: "Competitive rate changes require manual monitoring and response",
      description: "When a competitor drops rates on a key route or destination, the marketing team finds out from sales — hours or days too late to respond effectively. The rate shopper alerted the revenue team at 6am; marketing heard about it Thursday.",
    },
  ],

  // ── SOLUTIONS — 5 T&H-native Kana products ─────────────────
  solutions: [
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for Revenue Management & Marketing Teams",
      title: "Your revenue strategy, finally in your campaigns",
      description: "The Agentic Data Platform connects pricing and availability signals to the campaign layer — enabling offers that dynamically reflect real-time revenue strategy. Discounts suppress themselves on high-demand dates, urgency messaging follows actual availability, and the weekly revenue meeting stops being the only place pricing and marketing sync.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Category Intelligence",
      roleLabel: "Built for E-Commerce & Digital Strategy Teams",
      title: "Know the competitor's rate move before sales does",
      description: "Category Intelligence monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses. When a competitor drops rates on a key route or destination, marketing gets the alert with a suggested play — not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Loyalty & CRM Teams",
      title: "Re-engage on the guest's booking window, not the calendar",
      description: "Audience Builder works together with the Campaign Orchestrator to identify re-engagement windows based on behavioral signals and support personalized outreach. Win-back and anniversary campaigns stop firing on fixed schedules and start landing when a guest's next booking window is actually opening — informed by travel intent signals and membership tier dynamics.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Lifecycle & Campaign Teams",
      title: "Outreach triggered at the optimal moment",
      description: "The Campaign Orchestrator works together with the Audience Builder to use behavioral insights and trigger personalized outreach at the optimal moment — across email, app, and paid channels. The post-stay sequence stops running on checkout-plus-seven timers and starts responding to what each guest actually signals.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Personalization",
      roleLabel: "Coming Soon — Built for Loyalty Teams",
      title: "Real-time offers for members who earned better than batch",
      description: "Personalization monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time. Your highest-value members stop receiving the same promotional email as new subscribers — and loyalty spend starts producing the incremental revenue the program was built for. Coming soon to the Kana platform.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc06860bd14e53863fb_solution-bg__7.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "1 in 4", label: "hotels (fewer than) have PMS, RMS, loyalty, and CRM integrated enough for a unified guest profile (Apptad)" },
    { number: "15–25%", label: "OTA commission paid on every booking your direct channel doesn't win (StayInsiders)" },
    { number: "33%", label: "rebooking rate for CRM-acquired guests — versus 6% for OTA-acquired guests (StayInsiders)" },
    { number: "58%", label: "of active US travelers now use AI tools in their travel planning (Arival)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading travel brand on connecting revenue strategy to marketing]",
    name: "[Name]",
    title: "[Title], [Travel & Hospitality Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our hospitality stack?",
      a: "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine — Opera, Duetto, IDeaS, Salesforce, and more — with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
    },
    {
      q: "How does the Agentic Data Platform use our revenue management signals?",
      a: "It connects pricing and availability signals to your campaign logic. Offers adjust to reflect real-time revenue strategy — suppressing discounts on high-demand dates, matching urgency messaging to actual availability, and keeping promotions aligned with the rate posture your revenue team is holding. Every rule runs with your team's oversight."
    },
    {
      q: "When will Personalization be available?",
      a: "Personalization is coming soon. It builds on the same foundation as Audience Builder and the Agentic Data Platform, so teams deploying those today are positioned to activate real-time loyalty offers the moment it ships. Book a demo to see the roadmap and get early access."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director of Revenue Management",
      painPoints: [
        {
          text: "Pricing and availability move by the hour, but the only bridge to marketing is the weekly revenue meeting pack.",
        },
        {
          text: "Marketing runs deep-discount promotions on dates the revenue strategy is trying to hold rate on.",
        },
        {
          text: "Pickup and forecast insights inform campaign timing in theory — in practice they arrive as slides, not signals.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "Connects pricing and availability signals directly to the campaign layer, so offers dynamically reflect real-time revenue strategy. The discount that would have undercut your rate posture never ships.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "E-Commerce / Digital Strategy Manager",
      painPoints: [
        {
          text: "Competitor rate drops on key routes and destinations reach marketing through sales — hours or days too late to respond.",
        },
        {
          text: "The rate shopper alerts the revenue team, but there's no equivalent that tells marketing what to say and to whom.",
        },
        {
          text: "Every point of direct-booking share is worth 15–25% in avoided OTA commission, and the response toolkit is a quarterly campaign calendar.",
        }
      ],
      solution: {
        name: "Category Intelligence",
        description: "Monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses — so marketing reacts in the same news cycle as the rate change, not the one after.",
        linkLabel: "See Category Intelligence",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "CRM & Lifecycle Marketing Manager",
      painPoints: [
        {
          text: "Post-stay and win-back sequences run on fixed timers — checkout-plus-seven, anniversary-minus-thirty — regardless of when the guest actually books next.",
        },
        {
          text: "Travel intent signals and membership tier dynamics never reach the campaign logic that's supposed to act on them.",
        },
        {
          text: "CRM-acquired guests rebook at 33% versus 6% for OTA-acquired — the list is gold and the timing wastes it.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Works with the Campaign Orchestrator to identify each guest's real re-engagement window from behavioral signals, and trigger personalized outreach at the optimal moment — not the scheduled one.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Loyalty",
      painPoints: [
        {
          text: "High-value loyalty members receive the same promotional email as brand-new subscribers.",
        },
        {
          text: "Program costs have grown 53.6% since 2022 while room revenue grew 44.1% — and batch segments can't prove incrementality.",
        },
        {
          text: "AI-personalization adopters report 23% more loyalty-attributed revenue; the current stack has no path to join them.",
        }
      ],
      solution: {
        name: "Personalization (Coming Soon)",
        description: "Monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time — offers calibrated to the member, the moment, and the tier. Built on the Audience Builder and Agentic Data Platform foundation.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-4"
      }
    },
    {
      role: "VP Commercial / Director of Marketing",
      painPoints: [
        {
          text: "Fewer than 1 in 4 hotels have core systems integrated enough for a unified guest profile — and yours isn't one of them.",
        },
        {
          text: "58% of travelers now plan with AI tools, and the board wants an AI answer while campaigns still ship in batches.",
        },
        {
          text: "The marketing performance readout is presented alongside revenue management every month — assembled by hand from systems that don't share data.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "The platform anchor: one governed data layer connecting PMS, RMS, loyalty, and campaign systems — so 'commercial alignment' becomes an architecture, not a meeting. Marketing finally moves at the speed of pricing.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your pricing moves by the hour.<br>Kana makes your marketing keep up.",
    columns: [
      {
        title: "Offers that respect the rate strategy",
        description: "Pricing and availability signals flow into campaign logic — discounts suppress on high-demand dates, urgency messaging follows real inventory, and promotions stop undercutting the revenue plan.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Answer the rate drop the same day",
        description: "Continuous competitive-rate monitoring with recommended messaging and audience responses — marketing hears it from the signal, not from sales.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Catch the booking window while it's open",
        description: "Behavioral signals reveal when each guest's next trip is forming — so win-back and anniversary outreach lands in the booking window, not on the calendar date.",
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
    heading: "Read our latest content for travel & hospitality teams",
    type: "White Paper",
    title: "Marketing at the speed of your pricing",
    description: "Hotels run the most sophisticated real-time pricing in any industry — and market it with batch emails. How leading travel brands are connecting revenue strategy to the campaign layer and winning back direct share.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // T&H-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Opera PMS", className: "color-opera" },
      { text: "Duetto", className: "color-duetto" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "Braze", className: "color-braze" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to your PMS, RMS, CRS, loyalty platform, and booking engine — Opera, Duetto, IDeaS, Salesforce, and more — no rip-and-replace, no migration, no new governance gaps.",
    columns: [
      {
        title: "Bridge revenue management and marketing without replacing either",
        description: "Agentic Data Platform — pricing and availability signals flow from the systems your revenue team already runs into the campaign tools your marketers already use. The weekly meeting becomes a data feed.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Give marketing its own rate shopper",
        description: "Category Intelligence — continuous competitive-rate monitoring that answers with marketing moves: the alert, the recommended message, and the audience to send it to, in one motion.",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Time every journey to the guest, not the template",
        description: "Audience Builder — behavioral re-engagement windows replace fixed post-stay timers, so the guests who rebook at 33% through your CRM hear from you when their next trip is forming.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Market at the speed of your pricing.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
