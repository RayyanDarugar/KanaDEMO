// ============================================================
// INDUSTRY CONFIG — Healthcare (Health Plans / Systems / Wellness)
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/healthcare-gtm-brief.md (all claims
// traced; roster/positioning from Rayyan's screenshot 2026-07-13).
// ============================================================

export const industryConfig = {
  slug: "healthcare",
  label: "Healthcare",
  accent: "#0e9aa7", // medical teal-cyan. Change this one value to re-skin any vertical.

  // Shared section headings (layout falls back to sensible defaults if omitted)
  solutionsTitle: "Build agentic applications that support your entire member engagement team",
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
      "Healthcare",
      "CPG",
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Manufacturing",
      "Financial Services",
      "Pharma",
      "Travel & Hospitality",
      "Publishers",
      "QSR",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline: "Healthcare Marketers Are Underserving <em>Members at Critical Moments</em>",
    subheadline: "Health plans, hospital systems, and wellness brands have some of the most actionable member data available — but HIPAA constraints, fragmented systems, and batch communication workflows prevent them from using it effectively. Kana makes personalization work within the regulatory guardrails, not despite them.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Member activation campaigns are generic, not care-gap specific",
      description: "Annual wellness and preventive care campaigns reach all members equally — ignoring which individuals have open care gaps, overdue screenings, or elevated risk profiles. With HEDIS now the heaviest-weighted Stars category, that's quality bonus revenue mailed to the wrong inboxes.",
    },
    {
      title: "Appointment reminders and no-show reduction aren't dynamically personalized",
      description: "Reminder sequences fire on fixed cadences regardless of a member's past no-show behavior, channel preference, or appointment type. No-shows cost the US system roughly $150B a year — and four in ten medical groups saw rates rise despite automated reminders.",
    },
    {
      title: "HIPAA constraints are perceived as barriers to personalization",
      description: "Marketing teams often default to generic communications out of HIPAA caution, rather than building a compliant personalization infrastructure that balances privacy with relevance. After $100M+ in tracking-pixel fines, the caution is understandable — and the generic marketing it produces isn't inevitable.",
    },
  ],

  // ── SOLUTIONS — 4 healthcare-native Kana products ──────────
  solutions: [
    {
      feature: "Audience Builder",
      roleLabel: "Built for Quality & Member Marketing Teams",
      title: "Target the open care gap, not the whole roster",
      description: "Audience Builder enables care-gap–aware segmentation, allowing marketers to precisely target the right members for the right intervention at the right time. The annual wellness campaign stops going to everyone equally and starts reaching the members with overdue screenings and elevated risk profiles — where a completed visit closes 5.5x more gaps and moves the Stars measures your bonus revenue rides on.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Enrollment Marketing Teams",
      title: "Run AEP at machine scale, not overtime scale",
      description: "The Campaign Orchestrator orchestrates enrollment season campaigns at scale — dynamically segmenting audiences by plan eligibility and personalizing messaging for each cohort. The 54-day sprint across millions of members and dozens of plan options stops depending on manual content and audience management, in a market where 13 million members switched plans last cycle.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Agentic Data Platform",
      roleLabel: "Built for Marketing Ops & Privacy Teams",
      title: "Personalization within the guardrails, not despite them",
      description: "The Agentic Data Platform is architected for HIPAA-compliant data activation — enabling personalization within defined regulatory guardrails, not despite them. Governed data access, auditable activation, and policy enforcement are built into the architecture, so the personalization project survives the privacy review instead of dying in it.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
    },
    {
      feature: "Personalization",
      roleLabel: "Coming Soon — Built for Patient Access & Engagement Teams",
      title: "Reminders tuned to the member, not the template",
      description: "Personalization tailors reminder frequency, channel, and messaging based on individual member behavior patterns — reducing no-shows and improving care adherence. The member who no-shows afternoon appointments but answers texts gets a different sequence than the one who confirms every email. Coming soon to the Kana platform.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "$12.7B", label: "in Medicare Advantage quality bonus payments in 2025 — quadrupled since 2015 (KFF)" },
    { number: "5.5x", label: "more care gaps closed by members who complete an Annual Wellness Visit (Icario)" },
    { number: "$150B", label: "annual cost of patient no-shows to the US healthcare system (Curogram)" },
    { number: "13M", label: "Medicare members switched plans last AEP — double the prior year (SeniorLiving.org)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading health plan on care-gap-aware member engagement]",
    name: "[Name]",
    title: "[Title], [Health Plan / Health System]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana handle HIPAA and PHI?",
      a: "The Agentic Data Platform is architected for HIPAA-compliant data activation: governed data access, centralized AI policy management, audit-ready logs, and human oversight on every automated action. Personalization operates within defined regulatory guardrails — the architecture is built to pass your privacy review, not route around it."
    },
    {
      q: "How does Kana connect to our healthcare stack?",
      a: "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, typically going live in 2–4 weeks."
    },
    {
      q: "When will Personalization be available?",
      a: "Personalization is coming soon. It builds on the same foundation as Audience Builder and the Agentic Data Platform, so organizations deploying those today are positioned to activate behavior-based reminder and adherence logic the moment it ships. Book a demo to see the roadmap and get early access."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Medicare Stars / Quality Director",
      painPoints: [
        {
          text: "Gap-closure campaigns reach all members equally while HEDIS becomes the heaviest-weighted Stars category — 26% of the rating.",
        },
        {
          text: "A half-star drop is real money: one plan lost $12M in revenue moving from 4 to 3.5 stars.",
        },
        {
          text: "Care-gap lists arrive as extracts on claims lag, and outreach waves are hand-built per measure.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "Care-gap–aware segmentation targets the right members for the right intervention at the right time — overdue screenings, elevated risk profiles, and adherence gaps each get their own precisely aimed outreach instead of a share of the annual blast.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Enrollment Marketing Director",
      painPoints: [
        {
          text: "AEP and OEP demand rapid, personalized communications to millions of members across dozens of plan options — with content and audience management still largely manual.",
        },
        {
          text: "13 million members switched plans last cycle, double the prior year, and two-thirds of enrollees say they're open to switching next time.",
        },
        {
          text: "Carriers made dramatic plan changes for 2026 — terminated plans, new premiums, cut benefits — making every ANOC touchpoint higher-stakes.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Orchestrates enrollment season at scale: audiences dynamically segmented by plan eligibility, messaging personalized per cohort, and the 54-day sprint run on automation instead of overtime.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Marketing Operations Manager",
      painPoints: [
        {
          text: "Every personalization project dies in the PHI review — after $100M+ in industry tracking-pixel fines, the default answer is no.",
        },
        {
          text: "Consent banners don't satisfy HIPAA; every tool touching member data needs a BAA and audit logs, and most of the martech stack can't produce them.",
        },
        {
          text: "The team ships generic communications out of caution while leadership asks why member experience lags retail and banking.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "Architected for HIPAA-compliant data activation: governed access, policy enforcement, and auditable activation built in. Privacy review becomes a checklist the architecture already answers — and personalization ships.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Patient Access / Engagement Lead",
      painPoints: [
        {
          text: "Reminder sequences fire on fixed cadences regardless of a member's past no-show behavior, channel preference, or appointment type.",
        },
        {
          text: "Automated reminders cut no-shows 30–60% — and then plateau: four in ten medical groups have seen rates rise anyway.",
        },
        {
          text: "Every empty slot costs roughly $200, and the monthly no-show report only explains it after the revenue is gone.",
        }
      ],
      solution: {
        name: "Personalization (Coming Soon)",
        description: "Tailors reminder frequency, channel, and messaging to individual member behavior patterns — reducing no-shows and improving care adherence beyond what fixed-cadence sequences can reach.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "CMO / VP Marketing",
      painPoints: [
        {
          text: "68% of healthcare CMOs face budget cuts and 52% face staff reductions — while members expect the personalization they get from retail and banking.",
        },
        {
          text: "Member engagement is the #1 payer AI use case, but executive AI confidence runs 10x ahead of operational and regulatory teams' — adoption is ahead of trust.",
        },
        {
          text: "The board wants an AI story that survives both the privacy office and the front page.",
        }
      ],
      solution: {
        name: "Agentic Data Platform",
        description: "The platform anchor: personalization within defined regulatory guardrails, with the governance and human oversight that closes the trust gap. The AI story that compliance co-signs.",
        linkLabel: "See the Agentic Data Platform",
        linkHref: "#solution-row-2"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "The member data already exists.<br>Kana activates it — compliantly.",
    columns: [
      {
        title: "Close the gap, not just the campaign",
        description: "Care-gap–aware segments aim every intervention at the members who need it — overdue screenings, elevated risk, adherence lapses — and the Stars measures move with them.",
        linkLabel: "Learn more about Audience Builder",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Make enrollment season a system, not a scramble",
        description: "Audiences segmented dynamically by plan eligibility, messaging personalized per cohort, and millions of member touchpoints orchestrated through the AEP window.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Pass the privacy review, then personalize",
        description: "HIPAA-compliant data activation with governed access, policy enforcement, and audit-ready logs — the infrastructure that turns regulatory caution into a design constraint instead of a dead end.",
        linkLabel: "Learn more about the Agentic Data Platform",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      }
    ]
  },

  // ── FEATURED CONTENT ───────────────────────────────────────
  // Narrow, contrasting band. Holds one piece — blog, white paper,
  // webcast, or case study. Omit this key to hide the section.
  featuredContent: {
    heading: "Read our latest content for healthcare teams",
    type: "White Paper",
    title: "Personalization within the guardrails",
    description: "Healthcare holds the most actionable member data in any industry and ships the most generic marketing. How leading plans and systems are building HIPAA-compliant activation — and closing care gaps, no-shows, and enrollment losses with it.",
    cta: { text: "Read now", href: "/content" },
    image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    // Healthcare-specific "works on top of ___" rotation (overrides the shared default)
    rotations: [
      { text: "Health Cloud", className: "color-salesforce" },
      { text: "Epic", className: "color-epic" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "Braze", className: "color-braze" },
      { text: "Adobe", className: "color-adobe" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to Salesforce Health Cloud, your engagement platforms, and your data infrastructure — with governance, audit logs, and human oversight built in — no rip-and-replace, no new compliance gaps.",
    columns: [
      {
        title: "Turn the care-gap list into a targeting engine",
        description: "Audience Builder — the extracts your quality team already produces become precise, care-gap–aware segments, refreshed continuously instead of hand-built per measure.",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Scale AEP without scaling the war room",
        description: "Campaign Orchestrator — plan-eligibility segmentation and per-cohort messaging run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Build the compliant activation layer once",
        description: "Agentic Data Platform — HIPAA-compliant data activation with defined guardrails, so every future campaign inherits the governance instead of re-litigating it.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Serve every member at the moment it matters.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
