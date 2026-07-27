// ============================================================
// INDUSTRY CONFIG: Travel & Hospitality
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
      "Financial Services",
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
    headline: "Travel Marketing Can Finally <em>Move as Fast as Your Pricing</em>",
    subheadline: "Kana gives travel teams rate alerts, loyalty offers matched to each member's tier, and outreach timed to when guests are ready to book, finally keeping pace with pricing.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Outreach runs on a calendar, not the guest's window.",
      description: "Post-stay and win-back messages fire on fixed timers, not when a guest is ready to book again. CRM-acquired guests already rebook far more often than OTA-acquired ones.",
    },
    {
      title: "Personalization stuck in batch segments",
      description: "High-value members get the same email as brand-new subscribers. Loyalty costs are outrunning room revenue, and batch segments can't prove the incremental revenue CFOs want.",
    },
    {
      title: "Rate changes require manual monitoring",
      description: "A competitor drops rates and marketing hears about it from sales, days late. The rate shopper alerted revenue at 6am; marketing heard about it Thursday.",
    },
  ],

  // ── SOLUTIONS: 4 T&H-native Kana products ─────────────────
  solutions: [
    {
      feature: "Personalization",
      roleLabel: "Built for Loyalty Teams",
      title: "Offers your top members earned",
      description: "Personalization reads member activity and recommends each guest's next offer for your team to approve. Your highest-value members stop getting the same email as new subscribers, and loyalty spend starts producing real revenue.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc06860bd14e53863fb_solution-bg__7.jpg",
    },
    {
      feature: "Category Intelligence",
      roleLabel: "Built for E-Commerce & Digital Strategy Teams",
      title: "Know the rate move first",
      description: "Category Intelligence watches competitive pricing daily and alerts you the moment something shifts, evidence included, rather than a secondhand report from sales days later. Your rate shopper watches prices for revenue; this watches them for marketing.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.youtube.com/embed/0yox_hVwBgc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Loyalty & CRM Teams",
      title: "Build the list worth re-engaging",
      description: "Audience Builder builds precise guest segments (lapsed members, recent cancellations, high-value repeat bookers) from your CRM and loyalty data. Win-back and anniversary lists reflect who's eligible today, not a static export.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Lifecycle & Campaign Teams",
      title: "Catch drift before it costs the flight",
      description: "Campaign Orchestrator watches live spend, flags channels that drift from the brief, and proposes a reallocation for approval, before the monthly readout catches it two weeks too late.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "1 in 4", label: "hotels (fewer than) have PMS, RMS, loyalty, and CRM integrated enough for a unified guest profile (Apptad)" },
    { number: "15–25%", label: "OTA commission paid on every booking your direct channel doesn't win (StayInsiders)" },
    { number: "33%", label: "rebooking rate for CRM-acquired guests, versus 6% for OTA-acquired guests (StayInsiders)" },
    { number: "58%", label: "of active US travelers now use AI tools in their travel planning (Arival)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER: Testimonial from a leading travel brand on Personalization increasing loyalty-attributed revenue]",
    name: "[Name]",
    title: "[Title], [Travel & Hospitality Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our hospitality stack?",
      a: "Via API. Kana sits on your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) without a rip-and-replace or a migration. Kana's team handles setup; timelines depend on how many systems you connect."
    },
    {
      q: "How does Personalization decide which offer to send a loyalty member?",
      a: "It reads recent activity (browsing, app opens, stays, tier status) and matches it to the best offer, so a top-tier member and a first-timer never get the same email. Every offer still follows your program's approval rules."
    },
    {
      q: "How is Personalization different from Audience Builder and Campaign Orchestrator?",
      a: "Audience Builder decides who to reach, from your CRM, loyalty, and booking data. Personalization decides what to offer and when. Campaign Orchestrator keeps the ad spend on track. Most teams run all three together."
    },
    {
      q: "How fast can a travel or hospitality team get live on Kana?",
      a: "Most teams see value within 30 days. Onboarding starts with your top 3–5 data sources: Personalization on loyalty data, Category Intelligence on the rate topics you want watched. Audience Builder and Campaign Orchestrator layer in once those stabilize, with Kana's team involved throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Marketing Automation Manager",
      painPoints: [
        {
          text: "Post-stay sequences fire on a fixed timer, regardless of what the guest does next.",
        },
        {
          text: "Coordinating outreach across email, app, and paid means stitching three tools together by hand.",
        },
        {
          text: "The team knows which moments convert best, but can't trigger outreach at that moment instead of the scheduled one.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Watches your live campaign spend across channels and flags when a channel drifts from the brief or stops earning its keep. It proposes a reallocation for your approval instead of waiting for the weekly report. One system replaces the manual channel-by-channel spend review.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "E-Commerce / Digital Strategy Manager",
      painPoints: [
        {
          text: "Competitor rate drops reach marketing through sales, days too late to respond.",
        },
        {
          text: "The rate shopper alerts revenue, but marketing has no equivalent.",
        },
        {
          text: "Every point of direct-booking share is worth 15–25% in avoided OTA commission, and the response toolkit is still a quarterly calendar.",
        }
      ],
      solution: {
        name: "Category Intelligence",
        description: "Runs a daily watch on competitive pricing signals and surfaces alerts with the cited evidence behind them, so marketing reacts in the same news cycle as the rate change instead of the next one.",
        linkLabel: "See Category Intelligence",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Lifecycle Marketing Manager",
      painPoints: [
        {
          text: "Post-stay and win-back sequences run on fixed timers, regardless of when the guest books next.",
        },
        {
          text: "Travel intent and tier signals never reach the campaign logic supposed to act on them.",
        },
        {
          text: "CRM-acquired guests rebook at several times the rate of OTA-acquired ones, but batch timing wastes that advantage.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Builds precise, suppressed guest segments from behavioral and loyalty signals, then hands them to Personalization and Campaign Orchestrator to act on. Outreach targets who's actually eligible today, instead of a static scheduled list.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Loyalty",
      painPoints: [
        {
          text: "High-value members get the same email as new subscribers.",
        },
        {
          text: "Loyalty-program costs are outgrowing room revenue, and batch segments can't prove incrementality.",
        },
        {
          text: "AI-personalization adopters report 23% more loyalty-attributed revenue; the current stack has no path there.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Turns loyalty member activity into a next-best offer for each member: channel, content, and timing calibrated to who they are and where they are in the relationship. Each offer routes through your team's approval before it reaches anyone. It runs on the CRM and loyalty data you already have connected.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "VP Commercial / Director of Marketing",
      painPoints: [
        {
          text: "58% of travelers now plan with AI tools, and the board wants an AI-personalization story, but loyalty campaigns still run one-size-fits-all (Arival).",
        },
        {
          text: "Guests who redeem a personalized offer are worth more over time, but the stack can only prove it after the campaign.",
        },
        {
          text: "The commercial team wants growth from guests already in the loyalty program, not new acquisition, but the tooling isn't there.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "This is the platform anchor: tier-aware offer recommendations that turn the loyalty program's existing guest data into an active growth channel instead of a once-a-quarter batch send. 'AI-personalized' becomes something the guest actually experiences, not just a board slide.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your pricing moves by the hour. Kana keeps up.",
    columns: [
      {
        title: "Offers tuned to each guest",
        description: "Loyalty signals shape each guest's offer, so top-tier members stop getting first-timer emails.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Answer rate drops same-day",
        description: "Daily rate monitoring flags what moved, so marketing hears it before sales does.",
        linkLabel: "Learn more about Category Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Build the list that matters",
        description: "Guest segments build directly from your CRM and loyalty data (lapsed members, cancellations, high-value repeat bookers), so outreach reflects who's actually eligible today.",
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
    heading: "Read our latest content for travel & hospitality teams",
    type: "Blog",
    title: "The Booking Window Playbook",
    description: "Every hotel stack runs on the same fixed timers. See how leading brands do it differently.",
    cta: { text: "Read now", href: "/blog" },
    image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
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
    subtitle: "Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) without a rip-and-replace or a migration.",
    columns: [
      {
        title: "Turn loyalty data into a channel",
        description: "Personalization: reads member activity and recommends each guest's next offer, so top-tier members stop getting the same email as first-timers.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Give marketing its own rate shopper",
        description: "Category Intelligence: daily rate monitoring that hands marketing the alert and evidence directly, skipping the secondhand version.",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Build the segment guests belong in",
        description: "Audience Builder: precise, suppressed segments replace static lists, built around guests who rebook at 33%.",
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
