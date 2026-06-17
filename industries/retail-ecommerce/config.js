// ============================================================
// INDUSTRY CONFIG — Retail & E-Commerce
// All asset paths are relative to the project root.
// Layout reads ONLY from this object. Zero layout edits per vertical.
// ============================================================

export const industryConfig = {
  slug:   "retail-ecommerce",
  label:  "Retail & E-Commerce",
  accent: "#0f666b", // Vertical-specific accent color

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
    headline:     "The AI Marketing Platform <em>Built for Retail & E-Commerce</em>",
    subheadline:  "Close the gap between digital campaigns and in-store conversions. Build and activate warehouse-scale audiences across all channels simultaneously, detect churn signals weeks before customers slip, and prove the direct revenue impact of marketing.",
    primaryCta:   { text: "Book a Demo",      href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image:        "../../brand-assets/AVIF/6a073850eee60cd0e1af591d_Solutions.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title:       "The offline attribution gap hides your true ROAS",
      description: "Over 80% of retail transactions still take place offline in brick-and-mortar stores. Because digital clicks are disconnected from store registers, campaigns appear to underperform, prompting teams to cut budgets on ads that are actively driving store traffic.",
      blog: {
        text: "How to close the brick-and-mortar attribution loop",
        href: "/blog/retail-offline-attribution"
      }
    },
    {
      title:       "Churn is detected after the customer has already left",
      description: "Retail has a 22-24% average churn rate. Since acquiring a new customer costs 6x more than keeping a loyal one, waiting for churn to show in monthly reports leaves loyalty teams fighting expensive, late-stage discount campaigns that burn margin.",
      blog: {
        text: "Detecting customer churn before they switch brands",
        href: "/blog/predicting-customer-churn"
      }
    },
    {
      title:       "Audience building is bottlenecked in engineering queues",
      description: "Campaign teams wait an average of 5+ days for data engineering to write SQL queries, validate shopper data, and sync active segments. In fast-moving retail promotional windows, this delays campaigns or forces reliance on stale lists.",
      blog: {
        text: "How Composable CDPs bypass data engineering queues",
        href: "/blog/composable-cdp-sql-queues"
      }
    },
  ],

  // ── SOLUTIONS — 5 Retail-native Kana products ─────────────────
  solutions: [
    {
      feature:     "Marketing Intelligence",
      roleLabel:   "Built for VP Digital Marketing & CMOs",
      title:       "Connect digital spend to in-store revenue",
      description: "Marketing Intelligence unifies ad platform data, e-commerce analytics, email metrics, and loyalty platform reports into one live view — and closes the offline attribution gap. Marketing stops reporting impressions to a CFO who wants revenue, and starts showing the direct line from campaign spend to SKU velocity.",
      icon:        "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image:       "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video:       "../../brand-assets/MP4/Marketing Intelligence_x1.5.mp4",
      blog: {
        text: "Proving offline conversions for retail media",
        href: "/blog/proving-offline-conversions"
      }
    },
    {
      feature:     "Customer Engagement",
      roleLabel:   "Built for CRM & Lifecycle Marketing",
      title:       "Catch churn signals 4–8 weeks before they show in reports",
      description: "Customer Engagement reads behavioral signals — declining purchase frequency, smaller basket sizes, app disengagement — and surfaces at-risk customers before they lapse. Retention campaigns stop burning margin on customers who were coming back anyway and start reaching the ones who actually need intervention.",
      icon:        "../../brand-assets/SVG/699017586c99f26d8f0a4085_Customer Engagement.svg",
      image:       "../../brand-assets/WEBP/69fb34a3244de10cf3d7a9a5_5b797b2c34c52d464bce0b2b1d520ea3_solutions_04_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video:       "../../brand-assets/MP4/Customer Engagement_x1.5.mp4",
      blog: {
        text: "Predictive behavioral modeling for retail retention",
        href: "/blog/predictive-behavioral-modeling"
      }
    },
    {
      feature:     "Audience Manager",
      roleLabel:   "Built for Campaign & Marketing Ops",
      title:       "Brief to live segment in hours, not weeks",
      description: "Audience Manager lets retail campaign teams build, validate, and activate segments in plain language across Meta, Google, email, CRM, and loyalty platforms simultaneously — with a shared canonical audience definition enforced across channels. Every segment is traceable back to the original brief.",
      icon:        "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image:       "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc06860bd14e53863fb_solution-bg__7.jpg",
      video:       "../../brand-assets/MP4/Audience Manager_tiny.mp4",
      blog: {
        text: "Building omnichannel sync models",
        href: "/blog/omnichannel-sync-models"
      }
    },
    {
      feature:     "Synthetic Data Generation",
      roleLabel:   "Built for Retail Media & Data Strategy",
      title:       "Launch into new markets before the data exists",
      description: "When a retail brand opens stores in new regions or expands e-commerce, it enters those markets with no local first-party data. Synthetic Data Generation creates statistically valid audience models for new markets and fills the identity resolution gaps that reduce match rates on paid media activations.",
      icon:        "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image:       "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
      video:       "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
      blog: {
        text: "Expanding retail media without cookies",
        href: "/blog/expand-retail-media-without-cookies"
      }
    },
    {
      feature:     "Omni-Channel Media Planner",
      roleLabel:   "Built for VP Omnichannel & Performance",
      title:       "73% of shoppers are omnichannel. Your plan needs to be too.",
      description: "The Omni-Channel Media Planner models channel saturation against your own campaign data and enforces a consistent audience definition across every touchpoint. Retail brands stop building plans based on last year's channel mix and start optimizing against the actual multi-touch journey their customers take.",
      icon:        "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image:       "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg:          "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video:       null,
      blog: {
        text: "Why Omnichannel shoppers have 30% higher LTV",
        href: "/blog/omnichannel-shopper-ltv"
      }
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "22–24%",   label: "industry retail churn rate — with retention costs 6x less than acquisition (Open Loyalty)" },
    { number: "80%",      label: "of transactions happen in-store, unattributed to digital ad spend (Cometly)" },
    { number: "40%",      label: "revenue uplift for brands executing omnichannel personalization (Contentful)" },
    { number: "$26.8B",   label: "in media value lost annually to programmatic ad inefficiencies (ANA Benchmark)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "[PLACEHOLDER — Testimonial from a leading global enterprise in Retail & E-Commerce]",
    name:  "[Name]",
    title: "[Title], [Retail & E-Commerce Company]",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    { q: "How does Kana integrate with legacy Retail & E-Commerce systems?",       a: "[PLACEHOLDER]" },
    { q: "What data formats are supported by Category Intelligence?",    a: "[PLACEHOLDER]" },
    { q: "Is customer data isolation guaranteed?",                       a: "[PLACEHOLDER]" },
    { q: "How does AEO work for specific product lines?",                a: "[PLACEHOLDER]" },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "VP Digital Marketing / CMO",
      painPoints: [
        {
          text: "Over 80% of retail conversions occur in physical stores, leaving digital campaign ROI completely invisible to traditional analytics.",
          blog: {
            text: "Read: Proving offline conversion value",
            href: "/blog/retail-offline-conversion-attribution"
          }
        },
        {
          text: "Assembling cross-channel performance reports manually takes days, preventing in-flight campaign optimization.",
        },
        {
          text: "Proving marketing contribution to commercial leadership is difficult due to a lack of direct correlation between ad spend and store receipts.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "Unifies disconnected analytics sources and closes the offline attribution gap. Gives CMOs the direct path from campaign spend to SKU velocity, basket size, and customer LTV that commercial leadership actually needs to see.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "Director of CRM & Loyalty",
      painPoints: [
        {
          text: "Industry-wide retail churn sits at 22-24%, but CRM teams lack the early warning tools to act before spend shifts to competitors.",
          blog: {
            text: "Read: Predicting retail customer churn",
            href: "/blog/retail-predicting-customer-churn"
          }
        },
        {
          text: "Blanket discount campaigns burn margins on active shoppers who would have purchased at full price anyway.",
        },
        {
          text: "Loyalty program dashboards show lapse rates after the fact, making retention campaigns purely reactive.",
        }
      ],
      solution: {
        name: "Customer Engagement",
        description: "Reads behavioral signals — declining purchase frequency, app disengagement, category shifts — and surfaces at-risk customers 4–8 weeks before they lapse. Retention programs stop being indiscriminate and start being surgical.",
        linkLabel: "See Customer Engagement",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Head of Digital Activation",
      painPoints: [
        {
          text: "Marketers wait an average of 5 days for data teams to build and sync segments, missing critical real-time activation windows.",
          blog: {
            text: "Read: Bypassing engineering backlogs",
            href: "/blog/bypass-engineering-backlogs"
          }
        },
        {
          text: "Lack of cross-channel alignment means different segments run on Meta, Google, and email for the same campaign brief.",
        },
        {
          text: "Shopper audience data cannot be tracked back to the brief, preventing campaign performance audits.",
        }
      ],
      solution: {
        name: "Audience Manager",
        description: "Plain-language audience building with brief-to-activation traceability across all channels simultaneously. Canonical audience definitions enforced across Meta, Google, email, CRM, and loyalty platforms — no more brief-to-brief guesswork.",
        linkLabel: "See Audience Manager",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "Head of Retail Media",
      painPoints: [
        {
          text: "Expanding into new regions without historic local purchase data increases customer acquisition costs by up to 50%.",
          blog: {
            text: "Read: Retail media launch strategies",
            href: "/blog/retail-media-launch-strategies"
          }
        },
        {
          text: "Segment sync matches are low because customer identity records are fragmented across POS, CRM, and e-commerce.",
        },
        {
          text: "Cookie deprecation is reducing the scale and accuracy of traditional third-party audience data providers.",
        }
      ],
      solution: {
        name: "Synthetic Data Generation",
        description: "Creates statistically valid audience models for new markets and fills identity resolution gaps that reduce match rates on paid media. Retail brands and Retail Media Networks stop depending on expensive, unreliable third-party data to respond to advertiser briefs.",
        linkLabel: "See Synthetic Data Generation",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP Omnichannel Strategy",
      painPoints: [
        {
          text: "Omnichannel shoppers have a 30% higher lifetime value, yet only 35% of retail brands achieve personalization across touchpoints.",
          blog: {
            text: "Read: Achieving true omnichannel personalization",
            href: "/blog/omnichannel-retail-personalization"
          }
        },
        {
          text: "Lack of channel saturation modeling leads to massive programmatic waste across over-allocated networks.",
        },
        {
          text: "Fragmented metrics prevent unified customer journeys, creating friction between online and offline store operations.",
        }
      ],
      solution: {
        name: "Omni-Channel Media Planner",
        description: "Models channel saturation curves against your own campaign data and enforces a consistent audience definition across every touchpoint. Retail brands stop building plans based on last year's channel mix and start optimizing against the actual multi-touch journey.",
        linkLabel: "See Omni-Channel Media Planner",
        linkHref: "#solution-row-4"
      }
    }
  ],

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "See what Kana can do for your Retail & E-Commerce brand",
    cta:      { text: "Book a Demo", href: "/demo" },
  },
};