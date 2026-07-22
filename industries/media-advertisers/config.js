// ============================================================
// INDUSTRY CONFIG — Media & Entertainment
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
      "Manufacturing",
      "Financial Services",
      "Pharma",
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
    subheadline: "The best signal for what a subscriber wants next is what they did last night. Kana turns that into sharper recommendations, faster offer tests, and better-timed win-back campaigns.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Recommendations run on last quarter's preferences, not last night's session",
      description: "Recommendation engines retrain on a cycle measured in weeks, while what a subscriber watched or read last night is the strongest signal for what keeps them coming back. By the time the model catches up, the moment to show them something worth staying for has already passed.",
    },
    {
      title: "Reach a subscriber in the window they're most likely to come back",
      description: "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder builds and activates that segment in minutes instead of the typical 30–60-day lag, so the ask can go out while the window's still open.",
    },
    {
      title: "Bundle and pricing test cycles are slow and manual",
      description: "Testing new bundle configurations, promotional pricing, or plan upgrade offers requires significant cross-functional effort, creating months-long feedback loops while competitors ship bundles that cut churn by a third.",
    },
  ],

  // ── SOLUTIONS — 3 M&E-native Kana products ─────────────────
  solutions: [
    {
      feature: "Personalization",
      roleLabel: "Built for Growth & Product Teams",
      title: "Retention offers that know what they watched last night",
      description: "Personalization scores every subscriber's churn risk from recency-weighted behavioral signals and decides the next offer, channel, and moment to reach them, not a static profile from months ago. Every decision comes with a plain-language reason, and nothing goes out without your team's approval.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Growth & Win-Back Teams",
      title: "Win them back inside the window that converts",
      description: "Audience Builder builds and activates the lapsed-subscriber segment in minutes, not the usual 30–60-day lag, with recent purchasers and opt-outs suppressed automatically. Cohorts stop waiting on a data-team ticket and start reaching the door while intent to come back is still there.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Pricing & Packaging Teams",
      title: "Test the bundle this month, not this roadmap cycle",
      description: "The Campaign Orchestrator enables rapid, automated offer testing across subscriber cohorts, with the Kana Marketing Intelligence application surfacing test results in real time. New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to weeks.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "4.6%", label: "average monthly churn for premium streaming services (Antenna)" },
    { number: "77%", label: "of streaming subscribers aren't serial churners — the other 23% are exactly who a sharper win-back and retention motion is built to reach (Antenna)" },
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
      a: "Via API. Kana sits on top of your data warehouse, billing platform, and messaging stack (Snowflake, Databricks, Braze, Recurly, Zuora, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
    },
    {
      q: "Does Personalization replace our lifecycle or retention marketing tools?",
      a: "No, it strengthens them. Personalization scores churn risk and decides the next offer, channel, and send time from recency-weighted behavioral signals, then hands off to whatever marketing platform you already send from. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
    },
    {
      q: "How is Personalization different from Audience Builder?",
      a: "Audience Builder builds and activates the audience: who's lapsed, who's suppressed, who's ready for outreach. Personalization decides what happens next for each of them — the offer, channel, and moment most likely to bring them back — weighted to what they've done most recently. Most teams run both together: Audience Builder gets the list built and activated fast, Personalization decides what each person on it sees."
    },
    {
      q: "How fast can a subscription team get live on Kana?",
      a: "Most subscription teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources and configuring Personalization and Audience Builder to your subscriber engagement data. Campaign Orchestrator layers in once those core connections are stable. Kana's solutions team works with you throughout."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Director, Lifecycle Marketing (Retention)",
      painPoints: [
        {
          text: "Testing a new save offer, pause option, or win-back incentive means waiting on a cross-functional test calendar, not the retention team's own timeline.",
        },
        {
          text: "By the time a retention experiment reads out, the cohort that inspired it has already cycled through several billing periods.",
        },
        {
          text: "Save rates and LTV improvements are the job description, and the team can design offers faster than the org can currently test them.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Rapid, automated offer testing across subscriber cohorts, with Marketing Intelligence surfacing results in real time. Save offers, pause options, and win-back incentives move from a quarterly test calendar to a standing experiment the retention team runs itself.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Growth Marketing Manager (Win-Back)",
      painPoints: [
        {
          text: "Re-engagement sequences launch 30–60 days post-churn, after subscriber intent to return has collapsed.",
        },
        {
          text: "24% of cancelled subscribers resubscribe within six months, but the lapsed-list pull and fixed-schedule sequence miss the window where they decide (Antenna).",
        },
        {
          text: "Win-back defaults to discounts, and discount-acquired resubscribers stay a fraction as long as those recovered on timing and relevance.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Builds and activates the lapsed-subscriber segment by cohort in minutes, with recent purchasers and opt-outs suppressed automatically, so outreach can go out in the first seven days instead of the second month.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Pricing & Packaging Lead",
      painPoints: [
        {
          text: "Testing a new bundle, promotional price, or upgrade path takes a cross-functional council and months of coordination.",
        },
        {
          text: "Bundling cuts churn by roughly a third, but the feedback loop on each configuration is too slow to compound the advantage.",
        },
        {
          text: "Competitors ship joint bundles and hybrid tiers while this quarter's test is still in the planning doc.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Rapid, automated offer testing across subscriber cohorts, with Marketing Intelligence surfacing results in real time. Pricing and packaging become a weekly experiment cadence instead of a quarterly project.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Product, Recommendations",
      painPoints: [
        {
          text: "Recommendation engines operate on historical preferences, missing the recency signals that most strongly predict what a subscriber wants next.",
        },
        {
          text: "Content library exhaustion drives 34% of cancellations, and dormant subscribers rarely announce themselves before they lapse.",
        },
        {
          text: "Session depth is the leading indicator of retention the current rec logic can't move.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Scores churn risk and decides the next offer, channel, and moment from recency-weighted behavioral signals instead of a stale profile, with a reason behind every decision. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "CMO / Head of Subscriber Growth",
      painPoints: [
        {
          text: "The streaming wars ended with a new headline metric: profitability. Engagement is the lever the marketing org actually owns.",
        },
        {
          text: "23% of the audience are serial churners timing subscriptions around releases; content spend alone can't hold them (Antenna).",
        },
        {
          text: "Content spend keeps growing, but the personalization layer meant to make each dollar go further still runs on historical preferences instead of what subscribers are doing right now.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "The platform anchor: recency-weighted retention decisions that stay current with what each subscriber is actually doing, not a profile that's months stale. Retention and growth both run through the same signal.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your subscribers are telling you what keeps them.<br>Kana makes sure every campaign hears it.",
    columns: [
      {
        title: "Every recommendation reflects this week, not last quarter",
        description: "Recency-weighted signals feed straight into every retention decision, so the offer and channel match what a subscriber engaged with recently, not a profile trained months ago.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Catch the comeback while it's possible",
        description: "Lapsed-subscriber segments built and activated per cohort in minutes, suppression logic built in, so outreach can launch days after the cancel, not months.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Run the pricing test in weeks, not quarters",
        description: "Automated offer testing across subscriber cohorts with results surfacing in real time, bundles, promos, and upgrade paths iterate at experiment speed.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for media & entertainment teams",
    type: "Blog",
    title: "The Score-to-Action Audit: Is Your Churn Model Actually Stopping Cancellations?",
    description: "Somewhere in your data warehouse right now is a subscriber your model correctly flagged as high-risk. How leading subscription teams are closing the gap between what the model knows and what the campaign does.",
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
    subtitle: "By acting as the marketing operating layer, Kana connects to your data warehouse, billing platform, and messaging stack: Snowflake, Databricks, Braze, Recurly, Zuora, and more, no rip-and-replace, no migration, no new governance gaps.",
    columns: [
      {
        title: "Make every recommendation current, not just personalized",
        description: "Personalization: recency-weighted signals feed straight into every retention decision, so the offer a subscriber gets reflects what they did this week, not a profile trained months ago.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Time every cohort's win-back to its own window",
        description: "Audience Builder: build and activate the lapsed-subscriber segment by cohort in minutes, suppression built in, so re-engagement can launch days after the cancel instead of on the 60-day timer.",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Make pricing a cadence, not a council",
        description: "Campaign Orchestrator: automated offer tests across cohorts with Marketing Intelligence reading results in real time. The bundle experiment that took a quarter of cross-functional effort ships in a sprint.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Turn every signal your team already has into growth.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
