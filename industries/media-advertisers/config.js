// ============================================================
// INDUSTRY CONFIG: Media & Entertainment
// (slug kept as media-advertisers for URL stability)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/media-entertainment-gtm-brief.md (all
// claims traced; roster/positioning from Rayyan's screenshot 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "media-advertisers",
  label: "Media & Entertainment",
  accent: "#7f63c5", // medium purple. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire growth team",
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
      "Media & Entertainment",
      "CPG",
      "Retail & E-Commerce",
      "Financial Services",
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
    headline: "Your Signals Already Point to <em>Subscription Growth</em>",
    subheadline: "The best signal for what a subscriber wants next is what they did last night. Kana turns it into sharper recommendations, faster offer tests, and better-timed win-backs.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Recommendations run on last quarter, not last night",
      description: "What a subscriber watched last night is the strongest signal for what keeps them coming back, but recommendation engines catch up weeks too late to use it.",
    },
    {
      title: "Reach subscribers in the window they're most likely to return",
      description: "The best win-back window is short, and Audience Builder builds and activates that segment in minutes, not the usual 30–60-day lag, so the ask goes out while it's still open.",
    },
    {
      title: "Pricing tests take months, not sprints",
      description: "New bundle and pricing tests take months of cross-functional effort, while competitors cutting churn by a third ship in weeks.",
    },
  ],

  // ── SOLUTIONS: 3 M&E-native Kana products ─────────────────
  solutions: [
    {
      feature: "Personalization",
      roleLabel: "Built for Growth & Product Teams",
      title: "Built on what they watched last night",
      description: "Personalization decides the next offer, channel, and moment for each subscriber, with a plain-language reason behind every call and nothing sent without your team's approval.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Growth & Win-Back Teams",
      title: "Reach them before the window closes",
      description: "Audience Builder activates the lapsed-subscriber segment in minutes, not the usual 30–60-day lag, so outreach lands while they still want to come back.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Pricing & Packaging Teams",
      title: "Ship the bundle test this sprint",
      description: "Campaign Orchestrator runs automated offer tests across cohorts, with results in real time. Bundle and pricing tests that took months now ship in weeks.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "4.6%", label: "average monthly churn for premium streaming services (Antenna)" },
    { number: "77%", label: "of streaming subscribers aren't serial churners, and the other 23% are exactly who a sharper win-back and retention motion is built to reach (Antenna)" },
    { number: "24%", label: "of consumers cancel and resubscribe to the same service within six months, 40% for Gen Z (Antenna)" },
    { number: "7 days", label: "the win-back window that converts, while typical sequences launch 30–60 days post-churn (industry research)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER: Testimonial from a leading subscription brand on Personalization increasing session depth]",
    name: "[Name]",
    title: "[Title], [Media & Entertainment Brand]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our subscription stack?",
      a: "Via API. Kana sits on top of your stack (Snowflake, Databricks, Braze, Recurly, Zuora, and more) with no rip-and-replace or migration. Setup takes 2–4 weeks."
    },
    {
      q: "Does Personalization replace our lifecycle or retention marketing tools?",
      a: "No, it strengthens them. Personalization decides the next offer, channel, and send time from a subscriber's most recent behavior, then hands off to your existing platform. It catches what a static model misses."
    },
    {
      q: "How is Personalization different from Audience Builder?",
      a: "Audience Builder builds the audience: who's lapsed, suppressed, or ready for outreach. Personalization decides what each of them sees next: the offer, channel, and moment most likely to bring them back. Most teams run both together."
    },
    {
      q: "How fast can a subscription team get live on Kana?",
      a: "Most teams see value within 30 days. Onboarding connects your top 3–5 data sources and configures Personalization and Audience Builder first; Campaign Orchestrator layers in once those are stable, with support throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director, Lifecycle Marketing (Retention)",
      painPoints: [
        {
          text: "Testing a new save offer means waiting on a cross-functional calendar, not the team's own timeline.",
        },
        {
          text: "By the time results come in, the cohort has already cycled through several billing periods.",
        },
        {
          text: "The job is save rates and LTV, and the team designs offers faster than the org tests them.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Campaign Orchestrator runs automated offer tests across subscriber cohorts with real-time results, turning save offers into a standing experiment the retention team runs itself.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Growth Marketing Manager (Win-Back)",
      painPoints: [
        {
          text: "Re-engagement launches 30–60 days post-churn, well after intent to return fades.",
        },
        {
          text: "24% of cancelled subscribers resubscribe within six months, but most outreach misses the window where they decide (Antenna).",
        },
        {
          text: "Win-back defaults to discounts, but discount-acquired subscribers stay far less long than those recovered on timing.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Audience Builder builds and activates the lapsed-subscriber segment in minutes, suppressing recent purchasers and opt-outs, so outreach launches within seven days, not two months.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Pricing & Packaging Lead",
      painPoints: [
        {
          text: "Testing a new bundle or upgrade path takes a council and months of coordination.",
        },
        {
          text: "Bundling cuts churn by roughly a third, but each configuration's feedback loop is too slow to compound it.",
        },
        {
          text: "Competitors ship joint bundles and hybrid tiers while this quarter's test is still on paper.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Campaign Orchestrator automates offer testing across subscriber cohorts with real-time results, turning pricing and packaging into a weekly cadence instead of a quarterly project.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Product, Recommendations",
      painPoints: [
        {
          text: "Recommendation engines run on historical preferences and miss the signals that predict what a subscriber wants next.",
        },
        {
          text: "Content library exhaustion drives 34% of cancellations; dormant subscribers rarely signal before they lapse.",
        },
        {
          text: "Session depth is the leading retention indicator the current rec logic can't move.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Personalization scores churn risk and picks the next offer, channel, and moment from recency-weighted behavioral signals, with a reason behind every call.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "CMO / Head of Subscriber Growth",
      painPoints: [
        {
          text: "The streaming wars ended with a new metric: profitability. Engagement is the lever marketing owns.",
        },
        {
          text: "23% of the audience are serial churners timing subscriptions around releases; content spend can't hold them (Antenna).",
        },
        {
          text: "Content spend keeps growing, but the personalization layer meant to stretch it still runs on old preferences, not real-time behavior.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Personalization anchors the platform: recency-weighted decisions on live subscriber behavior, not a profile months stale, so retention and growth share the same signal.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your subscribers tell you what keeps them.<br>Kana makes every campaign listen.",
    columns: [
      {
        title: "Every recommendation reflects this week",
        description: "Every offer and channel matches what a subscriber engaged with this week, not months ago.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Catch the comeback in time",
        description: "Lapsed-subscriber segments build and activate in minutes, so outreach launches in days, not months.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Run the pricing test in weeks",
        description: "Automated tests surface results in real time, so bundles and pricing iterate fast.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece: blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for media & entertainment teams",
    type: "Blog",
    title: "The Score-to-Action Audit: Is Your Churn Model Actually Stopping Cancellations?",
    description: "Your model already flagged this subscriber as high-risk. See how leading subscription teams turn that flag into action.",
    cta: { text: "Read now", href: "/blog" },
    image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // M&E-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Snowflake", className: "color-snowflake" },
      { text: "Databricks", className: "color-databricks" },
      { text: "Braze", className: "color-braze" },
      { text: "Amplitude", className: "color-amplitude" },
      { text: "Salesforce", className: "color-salesforce" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Kana connects to your stack (Snowflake, Databricks, Braze, Recurly, Zuora, and more) with no rip-and-replace and no migration.",
    columns: [
      {
        title: "Make every recommendation current",
        description: "Personalization: every retention offer reflects what a subscriber did this week, not a profile trained months ago.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Time every win-back to its own window",
        description: "Audience Builder activates the lapsed-subscriber segment in minutes, so re-engagement launches days after cancellation, not on a 60-day timer.",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Make pricing a cadence, not a council",
        description: "Campaign Orchestrator: automated tests across cohorts, results in real time. What took a quarter now ships in a sprint.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Turn what you already know into growth.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
