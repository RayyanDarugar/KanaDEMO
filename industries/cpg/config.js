// ============================================================
// INDUSTRY CONFIG — CPG
// All asset paths are relative to the project root.
// brand-assets/ folder must be at the root of the repo.
// To add a vertical: copy this file, rename, swap values, set accent.
// Layout reads ONLY from this object. Zero layout edits per vertical.
// Hero/solution/FAQ copy: finalized CPG copy.
// ============================================================

export const industryConfig = {
  slug: "cpg",
  label: "CPG",
  accent: "#ff7a59", // --color-coral-2. Change this one value to re-skin any vertical.

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
    headline: "The AI Marketing Platform <em>Built for CPG Brands</em>",
    subheadline: "Your syndicated data is already a week old. Programmatic spend leaks at scale. Audience segments lose the brief in translation. Kana gives CPG teams real-time category intelligence, modeled media allocation, and audiences that trace back to the original brief — all connected to shelf velocity.",
    primaryCta: { text: "Book a Demo", href: "/demo" },
    secondaryCta: { text: "See how it works", href: "#solutions" },
    image: "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif",
  },

  // ── PAIN POINTS ─────────────────────
  painPoints: [
    {
      title: "Category intelligence is a week behind the shelf",
      description: "CPG category teams process syndicated data drops weekly, manually. By the time reports reach the team, the category has already moved — leaving category managers in buyer meetings with a view that's already stale.",
      blog: {
        text: "How to unify retail POS feeds in real time",
        href: "/blog/cpg-real-time-pos-data"
      }
    },
    {
      title: "Programmatic media budgets waste 56% of ad spend",
      description: "Only $439 of every $1,000 in programmatic spend actually reaches consumers. Without saturation modeling built into planning, waste compounds silently — and most CPG media teams have no tooling to catch it in time.",
      blog: {
        text: "A guide to programmatic saturation curves",
        href: "/blog/programmatic-saturation-curves"
      }
    },
    {
      title: "Audience briefs lose fidelity during platform translation",
      description: "When data engineers translate a brief into a segment, persona intent collapses into available filters. The segment may technically run — but there's no clear link between what was briefed and what activated.",
      blog: {
        text: "Audience translation for campaigns",
        href: "/blog/audience-mismatch-briefs"
      }
    },
  ],

  // ── SOLUTIONS — 5 CPG-native Kana products ─────────────────
  solutions: [
    {
      feature: "Category Intelligence Hub",
      roleLabel: "Built for Category Managers",
      title: "Shelf signals in seconds, not days",
      description: "The Category Intelligence Hub ingests scan data, POS feeds, and external category signals and answers category questions in seconds. Category managers stop spending time compiling data and start spending it on the strategic decisions that actually move share.",
      icon: "../../brand-assets/SVG/6a07370a2e3e29f5d03b13d9_Category Intelligence Hub.svg",
      image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc03bbf9cc8a6b457ff_solution-bg__3.jpg",
      video: '<div style="position: relative; width: 100%; height: 100%;"><iframe src="https://www.loom.com/embed/6bf860d97b5e499dada5403f1183ff49?hide_share=true&hideEmbedTopBar=true&hide_speed=true&hide_owner=true&hide_title=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      blog: {
        text: "How Category Intelligence drives SKU velocity",
        href: "/blog/category-intelligence-sku-velocity"
      }
    },
    {
      feature: "Omni-Channel Media Planner",
      roleLabel: "Built for VP Media & Performance Teams",
      title: "Stop optimizing with last year's channel mix",
      description: "The Omni-Channel Media Planner models saturation curves against your own campaign data and maps brief targeting parameters to platform-specific configurations across Meta, YouTube, The Trade Desk, and DV360. Budget allocation stops being driven by habit and starts being driven by modeled ROAS.",
      icon: "../../brand-assets/SVG/69901757be05292281eee76e_Media Proposal Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc04b820e89c641b48b_solution-bg__1.jpg",
      video: null,
      blog: {
        text: "Modeling media mix models for CPG",
        href: "/blog/cpg-mmm-modeling"
      }
    },
    {
      feature: "Audience Manager",
      roleLabel: "Built for Campaign Ops & Marketing Ops",
      title: "Brief to live segment without an engineering ticket",
      description: "Audience Manager lets campaign teams build, validate, and activate audience segments in plain language — no SQL, no data engineering queue. Every segment is traceable back to the original brief, so when a campaign underperforms, you can actually answer why.",
      icon: "../../brand-assets/SVG/6a07370afa74e1a989f5eb11_Audience Manager.svg",
      image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc05e660038226b085c_solution-bg__5.jpg",
      video: "../../brand-assets/MP4/Audience Manager_tiny.mp4",
      blog: {
        text: "How to bypass SQL for audience segment builds",
        href: "/blog/bypass-sql-audiences"
      }
    },
    {
      feature: "Marketing Intelligence",
      roleLabel: "Built for VP Analytics & CMOs",
      title: "Chat with all your data — retailer, ERP, CRM",
      description: "Marketing Intelligence unifies fragmented data sources into one live view and connects digital campaign performance to actual in-store sales lift. Marketing stops defending proxies to commercial leadership and starts showing the direct line from spend to revenue.",
      icon: "../../brand-assets/SVG/699017579f378c81f5094a40_Analytics.svg",
      image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a301e7e98b87934a_solution-bg__4.jpg",
      video: "../../brand-assets/MP4/Marketing Intelligence_x1.5.mp4",
      blog: {
        text: "Closing the offline retail attribution loop",
        href: "/blog/closing-offline-attribution-loop"
      }
    },
    {
      feature: "Synthetic Data Generation",
      roleLabel: "Built for Data & Audience Strategy",
      title: "Launch campaigns before the data exists",
      description: "Synthetic Data Generation creates statistically valid audience models for new SKU launches, new category entries, and new markets — without waiting for first-party data to accumulate. CPG brands stop running broad, inefficient launch campaigns and start targeting on day one.",
      icon: "../../brand-assets/SVG/69901757d8ab518db4cb3c52_Synthetic Data Generation.svg",
      image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp",
      bg: "../../brand-assets/JPG/6a073cc0a1e61a380ab0e29e_solution-bg__2.jpg",
      video: "../../brand-assets/MP4/Synthetic Data Generation_x1.5.mp4",
      blog: {
        text: "Lookalike modeling in a cookieless world",
        href: "/blog/lookalike-modeling-cookieless"
      }
    },
  ],

  // ── STATS BAR ────────────────────────
  stats: [
    { number: "$439", label: "of every $1,000 in programmatic spend actually reaches consumers (ANA Benchmark)" },
    { number: "45%", label: "of marketing data used for decisions is incomplete or outdated (Adverity Survey)" },
    { number: "64%", label: "faster time-to-insight with unified AI-assisted analytics layers (Improvado Trend Report)" },
    { number: "$12.9M", label: "average annual cost of poor data quality per organization (Gartner Study)" },
  ],

  // ── SOCIAL PROOF ───────────────────────────────────────────
  testimonial: {
    quote: "We're getting <strong>statistically robust campaign answers</strong> in minutes instead of weeks — and catching the <strong>tagging anomalies</strong> that were quietly skewing our performance data without anyone knowing.",
    name: "Jasper van den Berg",
    title: "Head of Marketing Intelligence, Heineken",
    logo: "../../brand-assets/SVG/heineken_logo.png",
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: [
    {
      q: "How does Kana connect to our retail media platforms?",
      a: "Kana's Campaign Management and Marketing Intelligence layers integrate with the major retail media platforms — including Walmart Connect, Amazon DSP, Kroger Precision Marketing, and others — via API. Data from each platform flows into a unified view, so your team stops toggling between dashboards and starts seeing cross-platform performance in one place. Setup is handled by Kana's solutions team and typically takes 2–4 weeks depending on the number of platforms."
    },
    {
      q: "How does Kana unify data across retailers, ERP, and CRM?",
      a: "Marketing Intelligence acts as the intelligence layer that sits across your existing data sources — retailer portals, your ERP, your CRM, and your internal BI tools. It does not require a data warehouse migration. Kana connects to your systems, normalizes the data into a shared schema, and surfaces it through a natural language interface. Category managers, analytics teams, and CMOs can query across all sources without writing SQL or waiting for analyst reports."
    },
    {
      q: "How fast can a CPG team get live on Kana?",
      a: "Most CPG teams are seeing value within the first 30 days. The initial onboarding focuses on connecting your top 3–5 data sources and configuring the Category Intelligence Hub and Marketing Intelligence layers to your specific retailer mix and reporting needs. The Audience Manager and Synthetic Data Generation capabilities layer in after core data connections are stable. Kana's forward-deployed solutions team works directly with your team throughout."
    },
    {
      q: "How does AEO get our brand cited in AI search?",
      a: "Kana's AEO Platform audits how your brand currently appears in responses from ChatGPT, Perplexity, Gemini, and other answer engines. It identifies the content and schema gaps that cause AI systems to cite competitors instead of you, and activates structured content updates — including direct CMS writes — to close those gaps. For CPG brands, this is especially critical in categories where AI search is replacing traditional shelf discovery."
    },
    {
      q: "Can it work across multiple brands and regions?",
      a: "Yes. Kana is built for multi-brand, multi-region CPG environments. Each brand can be configured with its own retailer connections, category definitions, and audience segments, while leadership retains a cross-portfolio view. Regional data isolation is configurable for privacy compliance requirements across markets."
    },
    {
      q: "How does Kana handle our existing martech and agency workflows?",
      a: "Kana operates as a layer above your existing martech stack — it does not replace your DSPs, your CRM, or your agency platforms. For CPG brands working with AOR or specialist agencies, Kana provides a shared intelligence layer that both the internal team and agency partners can query. Brief-to-activation traceability in the Audience Manager also creates a documented handoff record between brand and agency, closing one of the most common audit gaps in CPG campaign ops."
    },
  ],

  // ── PERSONAS ───────────────────────────────────────────────
  personas: [
    {
      role: "Category Manager",
      painPoints: [
        {
          text: "Syndicated category drops arrive weeks late, forcing category managers to prepare client reports manually with outdated information.",
          blog: {
            text: "Read: Overcoming CPG Category data lag",
            href: "/blog/cpg-overcoming-category-data-lag"
          }
        },
        {
          text: "POS feeds are not cross-referenced against external category signals, leaving stock anomalies undetected until key buyer meetings.",
        },
        {
          text: "Compiling spreadsheet reports consumes 20+ hours weekly, leaving category teams with no time for strategic shelf planning.",
        }
      ],
      solution: {
        name: "Category Intelligence Hub",
        description: "Ingests scan data, POS feeds, and external category signals. Answers category questions in seconds, not days. Built specifically for VP Category and Senior Category Manager roles at CPG companies.",
        linkLabel: "See Category Intelligence Hub",
        linkHref: "#solution-row-0"
      }
    },
    {
      role: "VP Media & Performance",
      painPoints: [
        {
          text: "Only $439 of every $1,000 spent programmatically reaches consumers due to intermediate fees, bid shading, and lack of saturation scoring.",
          blog: {
            text: "Read: Eliminating programmatic waste in CPG",
            href: "/blog/cpg-eliminating-programmatic-waste"
          }
        },
        {
          text: "Audience definitions drift between strategic briefs and active platform campaigns, altering targeting parameters.",
        },
        {
          text: "Ad spends are allocated on static historical budgets, ignoring dynamic channel saturation thresholds and modeled marginal ROAS.",
        }
      ],
      solution: {
        name: "Omni-Channel Media Planner",
        description: "Models saturation curves against your own campaign data. Maps brief targeting parameters to platform-specific configurations across Meta, YouTube, The Trade Desk, and DV360. Allocation decisions stop being driven by habit and start being driven by modeled ROAS.",
        linkLabel: "See Omni-Channel Media Planner",
        linkHref: "#solution-row-1"
      }
    },
    {
      role: "Director of Marketing Ops",
      painPoints: [
        {
          text: "Data engineering queues delay audience segment creation by weeks, blocking fast campaign activation windows.",
          blog: {
            text: "Read: Streamlining GTM data activation",
            href: "/blog/streamline-gtm-data-activation"
          }
        },
        {
          text: "Activated segments mismatch campaign briefs, leading to ad-targeting errors and budget underperformance.",
        },
        {
          text: "There is no documented link between creative briefs and active platform segments, making post-campaign optimization impossible.",
        }
      ],
      solution: {
        name: "Audience Manager",
        description: "Plain-language audience building with brief-to-activation traceability. No SQL, no data engineering queue. Every segment is documented back to the original brief, so post-campaign analysis can actually answer why.",
        linkLabel: "See Audience Manager",
        linkHref: "#solution-row-2"
      }
    },
    {
      role: "VP Analytics / CMO",
      painPoints: [
        {
          text: "More than 80% of retail transactions take place offline, leaving digital campaign conversions completely unattributed.",
          blog: {
            text: "Read: Closing the offline retail loop",
            href: "/blog/close-offline-retail-loop"
          }
        },
        {
          text: "Manual analytics assemblies take days or weeks, forcing teams to optimize campaigns after they have already ended.",
        },
        {
          text: "Marketing is treated as a cost center by commercial leadership due to a lack of direct correlation between spend and SKU velocity.",
        }
      ],
      solution: {
        name: "Marketing Intelligence",
        description: "Unifies fragmented regional and retailer data into one live view. Connects digital campaign performance to actual in-store sales lift. Gives marketing the direct path from spend to revenue that commercial leadership actually needs to see.",
        linkLabel: "See Marketing Intelligence",
        linkHref: "#solution-row-3"
      }
    },
    {
      role: "VP Data & Audience Strategy",
      painPoints: [
        {
          text: "Launching new SKUs without local customer data history increases launch-phase media acquisition costs by up to 50%.",
          blog: {
            text: "Read: SKU launch strategies without cookies",
            href: "/blog/sku-launch-cookieless-strategies"
          }
        },
        {
          text: "Low match rates across retail media networks reduce ad targeting precision, increasing relative CPM costs.",
        },
        {
          text: "Cookie deprecation is rapidly reducing the accuracy of traditional third-party audience data providers.",
        }
      ],
      solution: {
        name: "Synthetic Data Generation",
        description: "Creates statistically valid audience models for new SKU launches, new category entries, and new markets — without waiting for first-party data to accumulate. CPG brands stop running broad, inefficient launch campaigns and start targeting on day one.",
        linkLabel: "See Synthetic Data Generation",
        linkHref: "#solution-row-4"
      }
    }
  ],

  // ── INTERACTIVE SHOWCASE ──────────────────────────────────
  showcase: {
    headline: "Your category data tells you what sold.<br>Kana tells you what's coming.",
    columns: [
      {
        title: "Catch the trend before it hits POS",
        description: "Cross-reference external signals — analyst reports, trade publications, search trends — against your own scan data automatically. Surface leading indicators 6–10 weeks before movement shows in your numbers.",
        linkLabel: "Learn more about Category Intelligence Hub",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a309b57c2ab7a2437c_f3e2b3b11b80faf9ae6c49a500d8353c_solutions_03_2x.webp"
      },
      {
        title: "Run the brief you actually wrote",
        description: "Build precise audience segments from plain-language briefs — no SQL, no tickets. Monitor every live campaign against the original intent across Meta, YouTube, and TradeDesk with a real-time Audience Integrity Score.",
        linkLabel: "Learn more about Audience Manager",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a3693f25a94988df0e_5897b8bc1884f86278bb63a02dc23207_solutions_05_2x.webp"
      },
      {
        title: "Prove what moved the category",
        description: "Connect every campaign dollar to POS velocity, volume lift, and share movement — not just digital proxies. Give commercial leadership the attribution proof they've been asking for.",
        linkLabel: "Learn more about Marketing Intelligence",
        linkHref: "#solutions",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      }
    ]
  },

  // ── STACK SHOWCASE ─────────────────────────────────────────
  stackShowcase: {
    subtitle: "A symphony of loosely coupled agents that connect your POS data, retailer portals, CRM, and media platforms — without migration, rip-and-replace, or new governance gaps.",
    columns: [
      {
        title: "Unify your customer data without moving a single record",
        description: "Zero-copy architecture sits on top of Salesforce, Marketo, your data warehouse, and your retailer portals. Kana resolves identities and deduplicates contacts across every system you already use — without migration, duplication, or new governance overhead.",
        image: "../../brand-assets/WEBP/69fb34a31a129b5fca1a3a28_5bbb99b43fa1d364ae8f85634209f73a_solutions_02_2x.webp"
      },
      {
        title: "Launch in new markets before you have the data to support it",
        description: "Synthetic Data Generation — when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost.",
        image: "../../brand-assets/WEBP/69fb34a30469825a78728f33_bbf22870ed50f2db542dcc3757717812_solutions_06_2x.webp"
      },
      {
        title: "Know which channels have hit diminishing returns before you set next year's budget",
        description: "Omni-Channel Media Planner MMM — saturation curves built from your own historical campaign data, not industry benchmarks. Scenario plan at -20%, baseline, and +20% budget so you walk into the planning cycle with a model, not an opinion.",
        image: "../../brand-assets/WEBP/69fb34a37abc32670956d9d8_22a3b8e403e4a9722e6b5bc578c29054_solutions_01_2x.webp"
      }
    ]
  },

  // ── FINAL CTA ──────────────────────────────────────────────
  finalCta: {
    headline: "The category doesn't wait. Neither should you.",
    cta: { text: "Book a Demo", href: "/demo" },
  },
};

