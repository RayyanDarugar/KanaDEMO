// ============================================================
// INDUSTRY CONFIG — CPG
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// To add a vertical: copy this file, rename, swap values, set accent.
// Layout reads ONLY from this object. Zero layout edits per vertical.
// Pain points + stats: real research (KAN-24, May 2026).
// Hero/solution/FAQ copy: scaffolding — will be finalized before launch.
// ============================================================

export const industryConfig = {
  slug:   "cpg",
  label:  "CPG",
  accent: "#ff7a59", // --color-coral-2. Change this one value to re-skin any vertical.

  // ── GLOBAL ASSETS ──────────────────────────────────────────
  assets: {
    logo:   "../../brand-assets/SVG/logo__img.svg",
    heroBg: "../../brand-assets/WEBP/69fb45f0d8e74cb7084b30ee_red_section_1440.webp",
    ctaBg:  "../../brand-assets/WEBP/69fb468eade8f66cd27cd0bb_cta_1440.webp",
    footer: {
      desktop: "../../brand-assets/WEBP/69fc4d1e202d2c8cc1ce4ddb_footer_1440.webp",
      tablet:  "../../brand-assets/WEBP/69fc4d1f48da64e0765bf9c9_footer_768.webp",
      mobile:  "../../brand-assets/WEBP/69fc4d1f9ec4a370e9cb5310_footer_375.webp",
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
      "CPG",
      "Retail & E-Commerce",
      "Media & Advertisers",
      "Manufacturing",
      "Financial Services",
      "Pharma",
      "Travel & Hospitality",
    ],
    cta: { text: "Book a Demo", href: "/demo" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    headline:     "The AI Marketing Platform <em>Built for CPG Brands</em>",
    subheadline:  "Your budget is fragmented across 200+ retailer platforms, your shelf data is trapped, and AI search is rewriting discovery. Kana unifies all three.",
    primaryCta:   { text: "Book a Demo",      href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image:        "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS — real KAN-24 research ─────────────────────
  painPoints: [
    {
      title:       "Fragmented Across 200+ Platforms",
      description: "CPG brands now spend 39% of ad budgets on retail media, but manage it across 8+ disconnected platforms — and by the time underdelivery shows in a post-campaign report, the budget is gone.",
      stat:        "CPG brands allocate 39% of ad budgets to retail media yet operate across 8+ platforms that each report success differently (Skai; Adtelligent, 2026)",
    },
    {
      title:       "Your Data Doesn't Reach the Decision",
      description: "POS data lives in retailer portals, shipment data in your ERP, consumer data in your CRM. Category managers walk into buyer meetings with data that's days old.",
      stat:        "CPG companies waste 20+ hours weekly stitching data into Excel; only 23% of retailers share data in real time (SR Analytics; Skai, 2026)",
    },
    {
      title:       "Your Brand Isn't the Answer Anymore",
      description: "Shoppers are moving discovery from Google to ChatGPT, Perplexity, and Gemini. Legacy CPG brands that win on shelf are losing the AI citation race.",
      stat:        "Only 35% of global CPG launches in early 2024 were genuinely new — a 30-year low — while AI Overviews suppress organic CTR by up to 61% (NetSuite; McKinsey, 2026)",
    },
  ],

  // ── SOLUTIONS — 4 CPG-native Kana products ─────────────────
  // video: non-null path = render as autoplay muted loop <video>. Null = use image.
  solutions: [
    {
      feature:     "Campaign Management",
      title:       "Catch waste while campaigns run",
      description: "Campaign Management catches underdelivery and waste across every retail media platform in-flight — not in the post-mortem.",
      icon:        "../../brand-assets/SVG/69901757ec677b2ce290fcb4_Smarter Campaign Management.svg",
      image:       "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video:       null,
    },
    {
      feature:     "Marketing Intelligence",
      title:       "Chat with all your data",
      description: "Marketing Intelligence unifies fragmented regional and retailer data into one live view, so cross-region learning actually happens.",
      icon:        "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image:       "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video:       "../../brand-assets/MP4/Marketing Intelligence_x1.5.mp4",
    },
    {
      feature:     "Category Intelligence Hub",
      title:       "Shelf signals in seconds",
      description: "The Category Intelligence Hub ingests scan/POS and external category signals and answers in seconds, not days — built for VP Category roles at CPG companies.",
      icon:        "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image:       "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video:       null,
    },
    {
      feature:     "AEO (Answer Engine Optimization)",
      title:       "Win the AI citation race",
      description: "AEO controls how your brand appears in ChatGPT, Perplexity, and Gemini — the discovery layer that's replacing traditional search.",
      icon:        "../../brand-assets/SVG/69901758dc3503adabece211_Answer Engine Optimization.svg",
      image:       "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video:       null,
    },
  ],

  // ── STATS BAR — real KAN-24 figures ────────────────────────
  stats: [
    { number: "39%",     label: "of CPG ad budgets now go to retail media" },
    { number: "20+ hrs", label: "wasted weekly stitching data into Excel" },
    { number: "26%",     label: "of marketing budgets wasted in 2026" },
    { number: "61%",     label: "organic CTR suppression from AI Overviews" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "We're getting <strong>statistically robust campaign answers</strong> in minutes instead of weeks — and catching the <strong>tagging anomalies</strong> that were quietly skewing our performance data without anyone knowing.",
    name:  "Jasper van den Berg",
    title: "Head of Marketing Intelligence, Heineken",
    logo:  "../../brand-assets/SVG/heineken_logo.png",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    { q: "How does Kana connect to our retail media platforms?",            a: "[PLACEHOLDER]" },
    { q: "How does Kana unify data across retailers, ERP, and CRM?",        a: "[PLACEHOLDER]" },
    { q: "How fast can a CPG team get live on Kana?",                       a: "[PLACEHOLDER]" },
    { q: "How does AEO get our brand cited in AI search?",                  a: "[PLACEHOLDER]" },
    { q: "Can it work across multiple brands and regions?",                 a: "[PLACEHOLDER]" },
    { q: "How does Kana handle our existing martech and agency workflows?",  a: "[PLACEHOLDER]" },
  ],

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "See what Kana can do for your CPG brand",
    cta:      { text: "Book a Demo", href: "/demo" },
  },
};
