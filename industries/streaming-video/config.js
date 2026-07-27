// ============================================================
// INDUSTRY CONFIG — Streaming & Video (OTT / AVOD / SVOD / CTV) (KFP)
// All asset paths are relative to the project root.
// Copy of the CPG template structure; layout reads ONLY from
// this object. Zero layout edits per vertical.
// Copy source: brand-files/streaming-video-gtm-brief.md (all claims traced).
// Ground truth: kana.ai/kana-for-publishers Streaming & Video tab (2026-07-17).
// ============================================================

export const industryConfig = {
  slug: "streaming-video",
  label: "Streaming & Video",
  accent: "#10a37f", // signal mint. Change this one value to re-skin any vertical.

  solutionsTitle: "Agentic applications for revenue, retention, and the viewer experience",
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
    headline: "Streaming Platforms Are Caught <em>Between Revenue and Experience</em>",
    subheadline: "Kana closes the gap between the churn signal and the retention action, so growing revenue never costs you the viewer experience — no data-team queue in between.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "The churn model flagged them Tuesday. They cancelled before the campaign shipped Friday.",
      description: "A risk score that takes days to reach a campaign is already too late — the subscriber's usually gone. Act on the signal, not after it.",
    },
    {
      title: "Your ad load policy doubles as a retention policy.",
      description: "Ad breaks still run on static rules — and cancellations citing excessive ads already drive 4% of US paid-streaming churn, a share that's climbing fast.",
    },
    {
      title: "Content ROI stays opaque past the greenlight.",
      description: "Greenlight and renewal calls run on incomplete visibility into what a title drives. Evidence lands quarters after release — after the P&L's biggest line is decided.",
    },
  ],

  // ── SOLUTIONS — 5 challenge-mapped Kana applications ───────
  solutions: [
    {
      feature: "Personalization",
      roleLabel: "Built for Lifecycle & Retention Teams",
      title: "Retention action at the churn signal",
      description: "Personalization flags churn risk while there's still time to act, and prepares a tailored offer or recommendation for your team to approve — turning a risk score into a launch-ready intervention before the subscriber cancels.",
      icon: "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Ad Product & Yield Teams",
      title: "Ad load intelligence over fixed rules",
      description: "Campaign Orchestrator surfaces delivery risk and revenue-at-risk before they cost a makegood. Pacing decisions run on evidence straight from your ad server, not a quarterly review.",
      icon: "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
    },
    {
      feature: "Campaign Orchestrator",
      roleLabel: "Built for Content Strategy & Insights Teams",
      title: "Content ROI, while it's still actionable",
      description: "Campaign Orchestrator turns viewership, subscriber impact, and engagement data into content ROI intelligence — current for in-flight optimization and the next greenlight, not stitched together quarters after release.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
    },
    {
      feature: "Audience Builder",
      roleLabel: "Built for Data & Identity Teams",
      title: "One viewer, one profile — across every screen",
      description: "A single viewer appearing as four different users across mobile, smart TV, laptop, and tablet fragments behavioral signals — making content personalization less relevant and ad targeting less precise and valuable. Audience Builder turns your first-party viewer data into a sized, explorable audience in minutes, so the segments you build and sell to advertisers reflect real engagement instead of a fragmented, half-populated picture.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
    },
    {
      feature: "LLM Command Center",
      roleLabel: "Built for Content Marketing & Distribution Leads",
      title: "When AI crawlers take your content for free, get paid or get out of the way",
      description: "The LLM Command Center gives you visibility into every AI bot crawling your streaming library and lets you set the terms — what's fully accessible, what's summary-only, what's off-limits — turning an invisible traffic drain into a licensing conversation you control.",
      icon: "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "4%", label: "of all US paid streaming churn now cites excessive ads — up 8% in one quarter (Kantar)" },
    { number: "4.6%", label: "monthly churn for premium SVOD; specialty services run 6.6% (Antenna)" },
    { number: "$38B", label: "US CTV ad spend in 2026 — 43% of all TV ad dollars (eMarketer)" },
    { number: "14 min", label: "the average time viewers spend deciding what to watch (Nielsen)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a streaming platform on intercepting churn at the behavioral signal / lifting yield without ad-experience complaints]",
    name: "[Name]",
    title: "[Title], [Streaming Platform]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "We already have churn models. What does Personalization add?",
      a: "The action layer. Most churn scores wait for a batch export before reaching marketing — by then, at-risk subscribers have often cancelled. Personalization connects the signal directly to a ready-to-send intervention, drafted the moment risk crosses threshold and waiting on your approval."
    },
    {
      q: "Does Campaign Orchestrator replace our ad server?",
      a: "No — it's the intelligence layer on top. Campaign Orchestrator watches delivery and yield, flags what's at risk with revenue impact quantified, so your team acts on evidence instead of a stitched spreadsheet."
    },
    {
      q: "How does the content ROI intelligence actually work?",
      a: "Campaign Orchestrator answers delivery and yield questions your team used to wait a quarter for — which titles are pacing and monetizing well right now, with a grounded answer and drill-downs."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Lifecycle / Retention Marketing Lead",
      painPoints: [
        {
          text: "By the time a churn score reaches marketing, the signal is days old.",
        },
        {
          text: "Cancel-save flows are static trees, updated manually after each test.",
        },
        {
          text: "42% of serial churners have cancelled a premium service five or more times in two years — generic offers don't move them.",
        }
      ],
      solution: {
        name: "Personalization",
        description: "Weeks-ahead churn-risk scoring with tailored interventions ready to approve — retention offers and content recommendations prepared the moment risk crosses threshold, so your team launches same-day instead of after the batch job.",
        linkLabel: "See Personalization",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Ad Product / Yield Manager",
      painPoints: [
        {
          text: "Ad breaks run on static rules, blind to engagement and content.",
        },
        {
          text: "Ad-volume complaints are a measurable churn line — 4% of all US paid streaming cancellations, and climbing.",
        },
        {
          text: "Load changes route through a product cycle; yield opportunities expire before the rule ships.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Delivery-risk and revenue-at-risk intelligence that lets the team fix pacing and yield problems before they cost a makegood — protecting the viewer experience while they do it.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Director, Content Strategy & Insights",
      painPoints: [
        {
          text: "Greenlight and renewal decisions rely on incomplete visibility into what a title drives.",
        },
        {
          text: "Title performance stories are stitched from dashboards, quarters after release.",
        },
        {
          text: "The board wants ROI gates on the biggest line on the P&L — instinct fills the gap.",
        }
      ],
      solution: {
        name: "Campaign Orchestrator",
        description: "Delivery and yield evidence pulled straight from your ad server, current as it accrues — a faster answer than a stitched dashboard when the greenlight conversation comes up.",
        linkLabel: "See Campaign Orchestrator",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Data & Identity Lead",
      painPoints: [
        {
          text: "One viewer appears as four users across mobile, smart TV, laptop, and tablet.",
        },
        {
          text: "Every device runs its own identifier scheme; the graphs never reconcile on their own.",
        },
        {
          text: "Fragmented identity degrades recommendation relevance, targeting precision, and the premium sales can command.",
        }
      ],
      solution: {
        name: "Audience Builder",
        description: "First-party audience data turned into sized, explorable, traceable segments in minutes — the foundation that makes advertiser segments premium and defensible.",
        linkLabel: "See Audience Builder",
        linkHref: "#solution-row-3"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Revenue and experience, one real-time optimization.",
    columns: [
      {
        title: "Intervene before the cancellation",
        description: "Churn signals surface a ready-to-approve offer — the retention layer that was missing.",
        linkLabel: "Learn more about Personalization",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Price every ad break to the viewer.",
        description: "Delivery and yield intelligence, current as of this morning — revenue-at-risk ranked worst-first.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Know a title's business impact — now.",
        description: "Delivery and yield, current as it accrues — not a quarters-old retrospective.",
        linkLabel: "Learn more about Campaign Orchestrator",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      }
    ]
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    rotations: [
      { text: "FreeWheel", className: "color-freewheel" },
      { text: "Braze", className: "color-braze" },
      { text: "Snowflake", className: "color-snowflake" },
      { text: "Google Ad Manager", className: "color-gam" },
      { text: "BigQuery", className: "color-bigquery" },
      { text: "your stack", className: "color-kana" },
    ],
    subtitle: "Connects to your ad server, engagement platform, warehouse, and identity stack — no rip-and-replace.",
    columns: [
      {
        title: "Close the signal-to-action gap",
        description: "Personalization — churn-model outputs wired to intervention triggers, on the stack you already run.",
        image: "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp"
      },
      {
        title: "Intelligence layered on your ad server.",
        description: "Campaign Orchestrator — pacing and yield intelligence over your existing ad server, current as of this morning's sync.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      },
      {
        title: "Resolve identity once, benefit everywhere",
        description: "Audience Builder — one first-party foundation powering recommendations, ad targeting, and advertiser segments alike.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "Grow ad revenue and keep the viewer.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};
