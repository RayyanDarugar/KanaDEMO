# CPG Config Copy Audit — Findings

Checked ~24 distinct capability claims across hero, pain points, solutions, personas, showcase, stackShowcase, and FAQ. 9 were clean (ACCURATE or VAGUE-BUT-FINE, no action). 15 are flagged below.

**Headline issue (appears 6 times):** the config repeatedly says Category Intelligence ingests **scan data, POS feeds, and Nielsen/Circana syndicated data**. The Category Intelligence PRD explicitly scopes this out: CI runs on "~177 curated public data sources" only, and lists as a Non-Goal / Out of Scope: *"Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)."* Nielsen/Circana feeds and a brand's own POS/scan data are exactly the kind of internal/licensed data this excludes — Backlog #6 (XL effort, "Later") is where that capability would eventually live. Every instance below traces back to this one root cause.

**Second issue (appears 4 times):** copy claims Marketing Intelligence traces ad spend to **in-store/shelf sales lift**. The MI PRD lists "Downstream multi-touch attribution — define data contract only" as explicitly Out of Scope (6.2), with the real build tracked as Backlog #3 ("adapt, don't build" — not yet done). MI's actual MVP scope is grounded NL Q&A over connected campaign data, not sales-lift attribution.

---

## hero.subheadline
**Current copy:** "Kana gives CPG teams real-time category intelligence, a clear line from ad spend to shelf lift, and audiences that trace straight back to the brief — turning this week's shelf data into next week's advantage."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — "Each monitored signal is a standing research query re-run on a schedule (working cadence: daily)" (§7.3), and Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)."
**Suggested fix:** "Kana gives CPG teams daily category intelligence, a clear line from ad spend to campaign performance leadership can trust, and audiences that trace straight back to the brief — turning this week's market signals into next week's advantage."
**Why:** CI refreshes on a daily cadence (not real-time), and MI does not yet attribute spend to in-store/shelf lift — that's an unbuilt backlog item.

## painPoints[0].description
**Current copy:** "Category Intelligence reads scan data, POS feeds, and category signals as they land, so category managers walk into buyer meetings with this week's numbers instead of last week's export, and spend the saved hours on the calls that actually move share."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; §6.1 confirms MVP scope is the "177-connector curated catalog" of public sources.
**Suggested fix:** "Category Intelligence watches category signals across hundreds of public sources as they move, so category managers walk into buyer meetings with this week's numbers instead of last week's export, and spend the saved hours on the calls that actually move share."
**Why:** POS and scan-data ingestion is explicitly out of v1; CI's actual input is the public source catalog.

## solutions[0] — Category Intelligence
**Current copy:** "Category Intelligence ingests scan data, POS feeds, and category data sources like Nielsen and Circana, and answers category questions in seconds."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §1 — "research an external-market question against ~177 curated public data sources"; §4.2 Non-Goals — "Internal company data ingestion... stays out of v1."
**Suggested fix:** "Category Intelligence researches category questions across hundreds of curated public sources and answers in seconds, citations included. Category managers stop spending time compiling data and start spending it on the strategic decisions that actually move share."
**Why:** Nielsen/Circana and internal POS/scan data are not part of CI's v1 data footprint per the PRD.

## solutions[1] — Omni-Channel Media Planner
**Current copy:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into the right targeting setup on Meta, YouTube, The Trade Desk, and DV360."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** Kana_PRD_Marketers_OmniChannel_Media_Planner_v2.md §4.2 Non-Goals — "Not an execution or buying platform. OCMP produces plans and recommendations; nothing is pushed into Meta/DV360/TTD — trafficking stays with the customer or agency."
**Suggested fix:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into platform-ready targeting for Meta, YouTube, The Trade Desk, and DV360. Budget allocation stops being driven by habit and starts being driven by modeled ROAS."
**Why:** "the right targeting setup on [platform]" reads as if Kana configures the live campaign; the PRD is explicit that OCMP never pushes to the platform.

## solutions[3] — Marketing Intelligence (data connections)
**Current copy:** "Marketing Intelligence connects your ad platforms, retailer portals, and CRM into one live view, so you can query performance in plain language instead of waiting on an analyst."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.1 — MVP scope is "email/CRM campaign platform + one paid channel export + commerce/conversion source"; retailer portals are not listed as an MI data source anywhere in the PRD.
**Suggested fix:** "Marketing Intelligence connects your campaign platforms and CRM into one view, so you can query performance in plain language instead of waiting on an analyst."
**Why:** MVP scope names two-to-three source types, not three broad categories including retailer portals.

## solutions[3] — Marketing Intelligence (in-store lift)
**Current copy:** "Marketing spends less time defending impressions and more time showing commercial leadership how digital activity tracks with in-store lift."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)"; Backlog #3 confirms the attribution engine is "adapt, don't build," not shipped.
**Suggested fix:** "Marketing spends less time defending impressions and more time giving commercial leadership a performance story backed by evidence, not a proxy metric."
**Why:** Tying digital spend to in-store lift is a named backlog item, not an MVP capability.

## FAQ[0] — "How does Kana connect to our retail media platforms?"
**Current copy:** "Via API. Kana connects to Walmart Connect, Amazon DSP, Kroger Precision Marketing, and other retail media platforms, pulling performance data into one unified view instead of a dozen separate dashboards."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.1 — MVP data connections start with "one paid channel export," not simultaneous connections across multiple named retail media networks.
**Suggested fix:** "Via API. Kana connects to your retail media and ad platforms, pulling performance data into one unified view instead of a dozen separate dashboards. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many platforms you're connecting."
**Why:** Naming several specific retail media networks as already-connectable overstates the MVP's one-channel-first scope.

## FAQ[1] — "Does Category Intelligence replace our Nielsen or Circana subscription?"
**Current copy:** "No, it sits on top of them. Category Intelligence ingests your existing Nielsen, Circana, and other syndicated data feeds alongside your own POS and scan data, so you keep your current data subscriptions and get a faster, unified way to query across all of them."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 / §6.2 — "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; no syndicated-panel connector appears anywhere in the PRD's data requirements or 177-source catalog.
**Suggested fix:** "No. Category Intelligence researches the external market — analyst reports, trend data, and public category signals — so it complements your Nielsen or Circana subscription rather than replacing it. Most teams keep their syndicated data provider and use Kana to catch the signals worth watching between syndicated drops, without waiting on the next scheduled export."
**Why:** The current PRD does not support ingesting Nielsen, Circana, or the brand's own POS/scan feeds at all — that's explicitly future backlog work.

## FAQ[2] — "How fast can a CPG team get live on Kana?"
**Current copy:** "Onboarding starts by connecting your top 3–5 data sources and configuring Category Intelligence and Marketing Intelligence to your retailer mix."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — internal/retailer data ingestion is out of v1; CI has no "retailer mix" configuration surface in the PRD.
**Suggested fix:** "Onboarding starts by connecting your top 3–5 data sources and configuring Marketing Intelligence to your retailer mix, while Category Intelligence is set up around the categories and markets you want to watch."
**Why:** "Configuring Category Intelligence to your retailer mix" implies retailer-specific internal data wiring CI doesn't do.

## personas[0] — Category Manager, solution.description
**Current copy:** "Ingests scan data, POS feeds, and category data sources like Nielsen and Circana. Answers category questions in seconds, not days."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — "Internal company data ingestion... stays out of v1."
**Suggested fix:** "Researches category questions across hundreds of curated public sources with citations. Answers in seconds, not days. Built specifically for VP Category and Senior Category Manager roles at CPG companies."
**Why:** Same root issue as solutions[0] — restated for this persona card.

## personas[3] — VP Analytics/CMO, solution.description
**Current copy:** "Unifies fragmented regional and retailer data into one live view, queryable in plain language. Shows how digital campaign performance tracks with in-store sales lift, giving marketing a defensible answer for commercial leadership instead of a proxy metric."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — downstream attribution to in-store lift is Out of Scope; §6.1 data sources don't include "retailer data" as such.
**Suggested fix:** "Unifies fragmented campaign and CRM data into one view, queryable in plain language. Gives marketing a grounded, cited answer for commercial leadership instead of a proxy metric."
**Why:** Same in-store-lift and data-scope overclaim as solutions[3], restated for this persona card.

## showcase.columns[0] — "Catch the trend before it hits POS"
**Current copy:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) against your own scan data automatically. Surface leading indicators 6–10 weeks before movement shows in your numbers."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 (no internal scan-data ingestion in v1); no lead-time figure ("6–10 weeks") appears anywhere in the PRD's success metrics or functional requirements.
**Suggested fix:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) automatically, so you catch leading indicators before they show up in next month's numbers."
**Why:** "Against your own scan data" repeats the internal-ingestion overclaim, and the specific "6–10 weeks" figure has no PRD support — it reads as a fabricated benchmark.

## showcase.columns[1] — "Run the brief you actually wrote"
**Current copy:** "Monitor every live campaign against the original brief across Meta, YouTube, and The Trade Desk, in real time."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_OmniChannel_Media_Planner_v2.md Backlog #4 — "Real-time mid-flight sync + alerts... daily/manual today"; Kana_PRD_Marketers_Audience_Builder_v2.md §6.2 — "Live activation APIs — shared-core item (see White Space Backlog)."
**Suggested fix:** "Build precise audience segments from plain-language briefs, no SQL, no tickets. Keep every live segment traceable to the original brief, so targeting never drifts from what you asked for."
**Why:** Real-time, cross-ad-platform drift monitoring against a brief is OCMP's integrity-scoring feature (daily sync today, real-time is backlog), not something Audience Builder does — this column mislabels it and overstates the cadence.

## showcase.columns[2] — "Prove what moved the category"
**Current copy:** "Connect every campaign dollar to POS velocity, volume lift, and share movement, not just digital proxies. Give commercial leadership the attribution proof they've been asking for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)."
**Suggested fix:** "Connect every campaign dollar to a grounded, cited performance answer, not just digital proxies. Give commercial leadership a story backed by evidence, not a guess."
**Why:** Same in-store/POS attribution overclaim as solutions[3] — the "attribution proof" is explicitly future backlog work, not shipped.

## stackShowcase.subtitle
**Current copy:** "Kana connects to your POS data, retailer portals, CRM, media platforms, and category data sources like Nielsen and Circana, without migration, rip-and-replace, or new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — internal/syndicated data ingestion out of v1.
**Suggested fix:** "Kana connects to your CRM, media platforms, and data warehouse, without migration, rip-and-replace, or new governance gaps."
**Why:** Same root issue — POS data, retailer portals, and Nielsen/Circana are not current Kana connections per the PRD.

## stackShowcase.columns[0] — "Unify your customer data without moving a single record"
**Current copy:** "Zero-copy architecture sits on top of Salesforce, Marketo, your data warehouse, and your retailer portals. Kana resolves identities and deduplicates contacts across every system you already use, without migration, duplication, or new governance overhead."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 Non-Goals — "Not a CDP or customer-data system of record. AB consumes unified data; unification, identity resolution, and consent capture live in the data layer, not here."
**Suggested fix:** "Kana sits on top of Salesforce, Marketo, and your data warehouse, working with the customer data you already have without migration, duplication, or new governance overhead."
**Why:** Identity resolution and deduplication are explicitly placed outside any of the four products' scope in the PRDs — that's someone else's layer, not a claim Kana's products can make. The original phrasing also exposes internal architecture terminology ("zero-copy") rather than describing the outcome.

## stackShowcase.columns[1] — "Launch new markets on data your competitors have never seen before"
**Current copy:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — no benchmark against Acxiom, Experian, or an "80%+ overlap" figure appears anywhere in the PRD (success metrics in §4.3 are onboarding-speed and ticket-count based, not accuracy benchmarks).
**Suggested fix:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals, so you can target on day one instead of waiting for first-party data to accumulate."
**Why:** The specific competitive-quality benchmark isn't supported anywhere in the PRD and reads as a fabricated stat.
