# Copy Audit — Consolidated Review

Merged from 10 per-page audit passes. Each finding below is preserved verbatim from its source file — this document reorganizes and indexes; it does not re-audit or reword.

## Summary

**Total findings: 164** (162 OVERCLAIM, 2 UNVERIFIABLE-FLAGGED)

Per-page breakdown:

| Page | Findings | IDs |
|---|---|---|
| cpg | 17 | F1–F17 |
| retail-ecommerce | 18 | F18–F35 |
| financial-services | 17 | F36–F52 |
| healthcare | 9 (8 OVERCLAIM, 1 UNVERIFIABLE-FLAGGED) | F53–F61 |
| qsr | 17 | F62–F78 |
| travel-hospitality | 21 (20 OVERCLAIM, 1 UNVERIFIABLE-FLAGGED) | F79–F99 |
| media-advertisers | 15 | F100–F114 |
| media-networks | 13 | F115–F127 |
| print-digital-audio | 20 | F128–F147 |
| streaming-video | 17 | F148–F164 |

---

## Cross-page patterns

Grouped by product, not by page. The point of this section: where the same product is described inconsistently, or the same wrong capability is claimed, across multiple pages — a signal of a shared/copy-pasted line or a systemic product-positioning error rather than independent one-off mistakes.

### Audience Builder — appears on all 10 pages, the most inconsistently described product in the audit

- **Pattern A — credited with timing/send-decision capability that belongs to Personalization/Campaign Orchestrator.** AB is repeatedly described as identifying "optimal win-back windows," triggering re-engagement at "the highest-conversion timeframe," or driving day-part/offer-timing decisions. Recurs on **travel-hospitality** (solutionRows[2], personas[2], showcase.columns[2], stackShowcase.columns[2] — F82, F90, F95, F99), **media-advertisers** (solutions[1], painPoints[1], personas[1], showcase.columns[1], stackShowcase.columns[1] — F100–F104), and **qsr** (solutionRows[2], personas[2], showcase.columns[2], stackShowcase.columns[2] — F65, F70, F74, F78). 13 findings across 3 pages, all citing the same AB Non-Goals line ("not a campaign or messaging tool... send decisions belong to Personalization and Campaign Orchestrator") and the same White Space Backlog item (propensity/timing modeling, "synthetic only today").
- **Pattern B — credited with identity resolution/unification it explicitly doesn't do.** AB is described as deduplicating/resolving identity across systems (cpg stackShowcase.columns[0] — F16), unifying signals "across all retail touchpoints" (media-networks solutions[2]/personas[3]/showcase.columns[2] — F120–F122), and resolving identity "across device environments" (streaming-video solutions[3]/personas[3]/stackShowcase.columns[2] — F160–F162). 7 findings across 3 pages, all against the same PRD line: "Cross-property identity resolution — no real IR anywhere today."
- **Pattern C — credited with live activation "enforced" across ad platforms.** cpg solutions[3] (F4 is actually OCMP — see note below; AB instance is stackShowcase.columns[0]/F16 for identity, separate from activation), retail-ecommerce solutions[3]/personas[2] (F22, F28), and print-digital-audio solutions[0]/personas[0]/showcase.columns[0] (F128–F130) all describe AB as activating/enforcing segments live into Meta/Google/etc. Live activation APIs are backlog or simulated per every AB PRD variant (marketer and publisher).
- **Pattern D — the same fabricated benchmark stat, reused verbatim across two pages.** "80%+ overlap with Acxiom and Experian quality" appears in both **cpg** stackShowcase.columns[1] (F17) and **retail-ecommerce** stackShowcase.columns[2] (F34) — identical invented number, no PRD support in either case. This is the clearest sign of a literal copy-paste of an unsupported stat between two pages.
- Vertical-specific one-offs: healthcare credits AB with clinical/care-gap segmentation 4x within its own page (F53, F55, F57, F59); qsr separately credits AB with ingesting external demand signals (weather/traffic/competitive promos) 4x within its own page (F65, F70, F74, F78 — overlaps with Pattern A on the same findings).

### Personalization — appears on 6 pages (retail-ecommerce, financial-services, travel-hospitality, media-advertisers, print-digital-audio, streaming-video)

- **Pattern — "real-time" / "continuous" / "automatically triggers" contradicts the PRD's batch-only decisioning and permanent human-approval gate.** This is the single most repeated pattern in the entire audit. It appears in **retail-ecommerce** (F19, F23, F26, F30, F33), **financial-services** (F40, F42), **travel-hospitality** (F79, F80, F84, F91, F92, F93, F97), **print-digital-audio** (F138, F139, F140, F141, F142), and **streaming-video** (F148, F149, F150, F151, F164) — roughly 25 findings across 5 pages, every one citing some version of the PRD's "Never contacts a customer without human approval. The approve-and-activate gate is permanent" and "Always-on anomaly detection + event triggers... batch-only today."
- **Vertical-specific mismatch:** media-advertisers uniquely miscasts Personalization as modifying the platform's own content-recommendation engine ("what to watch next," "recommendation logic," "session depth") rather than a marketing next-best-action decisioning tool — 6 findings within that one page (F105, F106, F107, F108, F109, F110, F111).

### Marketing Intelligence — appears on cpg, retail-ecommerce, financial-services

- **Pattern — credited with closing the online-to-offline / in-store attribution gap.** Appears on **cpg** (F1, F5, F6, F11, F14) and **retail-ecommerce** (F18, F20, F24, F25, F29, F32) — 11 findings across 2 pages, all against the same PRD backlog item ("Downstream multi-touch attribution — define data contract only... adapt, don't build").
- **Vertical-specific mismatch, highest real-world risk in the audit:** financial-services uniquely recasts MI as a compliance/content-approval product — "maintains pre-approved content libraries," "flags compliance risks before creative goes to review," automatic reviewer/timestamp/version audit trails. 6 findings within one page (F37, F41, F43, F46, F47, F50), all against a PRD line that lists "Compliance & Certifications" as flatly Backlog, with no content-library or pre-review risk-flagging feature anywhere in MI's functional requirements. This is not a fast-vs-slow overclaim — it tells a regulated bank that Kana screens creative for compliance risk before human review, when that capability does not exist yet.

### Campaign Orchestrator — appears on healthcare, qsr, travel-hospitality, media-advertisers, media-networks, print-digital-audio, streaming-video (7 pages)

- **Pattern A — GAM-only/display-only MVP overstated as cross-format / onsite-offsite coverage.** Recurs across the three publisher-vertical pages that share this product: **media-networks** (F123, F124, F125, F126), **print-digital-audio** (F143, F144, F145, F146, F147), and **streaming-video** (F152, F153, F154, F155, F156, F157, F158, F159) — 13 findings, nearly all citing the identical PRD lines ("Non-GAM connectors and non-display formats" out of scope; specific Backlog items for streaming ad-load/content-ROI and newsletter/audio/podcast formats). The repetition and identical citations across three sibling KFP-vertical pages strongly suggest shared/copy-pasted boilerplate rather than three independent drafting mistakes. The print-digital-audio PRD's own risk register even names this exact gap: "Website promises auto-adjustment + real-time that MVP doesn't deliver → sales/expectation mismatch."
- **Pattern B — "never ungated execution" overridden by "automatically"/"real-time" language.** qsr (F63, F68, F72, F76), media-networks (F123, F125), streaming-video (F152, F153, F157, F159), travel-hospitality (F83, F88) all describe CO adjusting spend or delivery "automatically" or "in real time," contradicting the PRD's permanent approval-gated execution model.
- **Vertical-specific mismatch:** healthcare uniquely credits CO with audience segmentation and per-cohort message personalization — capabilities the CO PRD's own Non-Goals assign to other products ("Not the planning tool," no messaging-content role at all). 4 findings within one page (F54, F56, F58, F60). This is the cleanest example in the whole audit of a claim naming the wrong product for a capability that belongs to a sibling product (AB/Personalization own segmentation and messaging, not CO).

### Category Intelligence — appears on cpg, retail-ecommerce, travel-hospitality

- **Pattern — credited with ingesting internal company data (POS, scan data, Nielsen/Circana, sales data) against a PRD that scopes CI as public-source-only in v1.** Appears on **cpg** (F1, F2, F3, F8, F9, F10, F12, F15 — 8 findings) and **retail-ecommerce** (F21, F27, F31 — 3 findings), 11 findings total across 2 pages, all citing the identical PRD Non-Goal: "Internal company data ingestion — the 'data plane' layer stays out of v1."
- **Vertical-specific mismatch:** travel-hospitality separately overstates CI's cadence as "continuous"/"real-time" against an actual daily-cadence PRD, and additionally credits CI with generating "recommended messaging and audience responses" that its functional requirements don't produce (CI's real output is a cited finding + alert, not a marketing recommendation) — 5 findings within one page (F79, F81, F89, F94, F98).

### LLM Command Center — appears on media-networks, print-digital-audio, streaming-video (all 3 pages that feature it)

**Every single instance of this product's copy, on all 3 pages, describes the wrong product.** The copy consistently frames LLM Command Center as brand-side AEO monitoring — "how your content appears in AI answers," "coverage and accuracy gaps," "be the answer when viewers ask an AI what to watch" — which the LLM Command Center PRD explicitly assigns to a *different, sibling product*: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." LLM CC's actual job (bot-traffic monitoring, tiered content-access policy, licensing-evidence reporting) does not appear anywhere in the current copy on any of the 3 pages. 7 findings: media-networks (F127), print-digital-audio (F131, F132, F133, F134, F135), streaming-video (F163). This is a 100% error rate for this product wherever it appears — not a matter of degree (real-time vs. batch) but of describing an entirely different product's function.

### Agentic Data Platform — appears on financial-services and qsr

Both pages describe ADP as itself pushing/writing data live into an end-user-facing system — branch CRM in financial-services, campaign/offer logic in qsr — and as something end users interact with directly (a banker "opens a record," an offer "pauses or pivots automatically"). The ADP PRD is explicit that it is "not an end-user marketing app... admin/steward surfaces only," and that live write-back/activation connectors are Backlog, not MVP. ~10 findings across the 2 pages (financial-services: F39, F45, F49, F52; qsr: F64, F67, F69, F73, F77), consistently citing the identical PRD Non-Goal and Backlog line.

### Sales Intelligence — appears on media-networks and print-digital-audio

- media-networks: "closed-loop attribution" claim repeated **5 times on a single page** (F115, F116, F117, F118, F119) — the PRD calls Sales Intelligence "the least-built app in the suite," with closed-loop ROI attribution explicitly out of scope ("define data contract only in MVP... no pipeline").
- print-digital-audio: "competitive tracker/competitive context" claim, 2 findings (F136, F137) — competitive tracking is explicit unbuilt whitespace per the same PRD.

---

## Full findings list

### F1 — cpg — hero.subheadline
**Current copy:** "Kana gives CPG teams real-time category intelligence, a clear line from ad spend to shelf lift, and audiences that trace straight back to the brief — turning this week's shelf data into next week's advantage."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — "Each monitored signal is a standing research query re-run on a schedule (working cadence: daily)" (§7.3), and Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)."
**Suggested fix:** "Kana gives CPG teams daily category intelligence, a clear line from ad spend to campaign performance leadership can trust, and audiences that trace straight back to the brief — turning this week's market signals into next week's advantage."
**Why:** CI refreshes on a daily cadence (not real-time), and MI does not yet attribute spend to in-store/shelf lift — that's an unbuilt backlog item.
**Status:** PENDING REVIEW

### F2 — cpg — painPoints[0].description
**Current copy:** "Category Intelligence reads scan data, POS feeds, and category signals as they land, so category managers walk into buyer meetings with this week's numbers instead of last week's export, and spend the saved hours on the calls that actually move share."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; §6.1 confirms MVP scope is the "177-connector curated catalog" of public sources.
**Suggested fix:** "Category Intelligence watches category signals across hundreds of public sources as they move, so category managers walk into buyer meetings with this week's numbers instead of last week's export, and spend the saved hours on the calls that actually move share."
**Why:** POS and scan-data ingestion is explicitly out of v1; CI's actual input is the public source catalog.
**Status:** PENDING REVIEW

### F3 — cpg — solutions[0] (Category Intelligence)
**Current copy:** "Category Intelligence ingests scan data, POS feeds, and category data sources like Nielsen and Circana, and answers category questions in seconds."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §1 — "research an external-market question against ~177 curated public data sources"; §4.2 Non-Goals — "Internal company data ingestion... stays out of v1."
**Suggested fix:** "Category Intelligence researches category questions across hundreds of curated public sources and answers in seconds, citations included. Category managers stop spending time compiling data and start spending it on the strategic decisions that actually move share."
**Why:** Nielsen/Circana and internal POS/scan data are not part of CI's v1 data footprint per the PRD.
**Status:** PENDING REVIEW

### F4 — cpg — solutions[1] (Omni-Channel Media Planner)
**Current copy:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into the right targeting setup on Meta, YouTube, The Trade Desk, and DV360."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** Kana_PRD_Marketers_OmniChannel_Media_Planner_v2.md §4.2 Non-Goals — "Not an execution or buying platform. OCMP produces plans and recommendations; nothing is pushed into Meta/DV360/TTD — trafficking stays with the customer or agency."
**Suggested fix:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into platform-ready targeting for Meta, YouTube, The Trade Desk, and DV360. Budget allocation stops being driven by habit and starts being driven by modeled ROAS."
**Why:** "the right targeting setup on [platform]" reads as if Kana configures the live campaign; the PRD is explicit that OCMP never pushes to the platform.
**Status:** PENDING REVIEW

### F5 — cpg — solutions[3] (Marketing Intelligence — data connections)
**Current copy:** "Marketing Intelligence connects your ad platforms, retailer portals, and CRM into one live view, so you can query performance in plain language instead of waiting on an analyst."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.1 — MVP scope is "email/CRM campaign platform + one paid channel export + commerce/conversion source"; retailer portals are not listed as an MI data source anywhere in the PRD.
**Suggested fix:** "Marketing Intelligence connects your campaign platforms and CRM into one view, so you can query performance in plain language instead of waiting on an analyst."
**Why:** MVP scope names two-to-three source types, not three broad categories including retailer portals.
**Status:** PENDING REVIEW

### F6 — cpg — solutions[3] (Marketing Intelligence — in-store lift)
**Current copy:** "Marketing spends less time defending impressions and more time showing commercial leadership how digital activity tracks with in-store lift."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)"; Backlog #3 confirms the attribution engine is "adapt, don't build," not shipped.
**Suggested fix:** "Marketing spends less time defending impressions and more time giving commercial leadership a performance story backed by evidence, not a proxy metric."
**Why:** Tying digital spend to in-store lift is a named backlog item, not an MVP capability.
**Status:** PENDING REVIEW

### F7 — cpg — FAQ[0] ("How does Kana connect to our retail media platforms?")
**Current copy:** "Via API. Kana connects to Walmart Connect, Amazon DSP, Kroger Precision Marketing, and other retail media platforms, pulling performance data into one unified view instead of a dozen separate dashboards."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.1 — MVP data connections start with "one paid channel export," not simultaneous connections across multiple named retail media networks.
**Suggested fix:** "Via API. Kana connects to your retail media and ad platforms, pulling performance data into one unified view instead of a dozen separate dashboards. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many platforms you're connecting."
**Why:** Naming several specific retail media networks as already-connectable overstates the MVP's one-channel-first scope.
**Status:** PENDING REVIEW

### F8 — cpg — FAQ[1] ("Does Category Intelligence replace our Nielsen or Circana subscription?")
**Current copy:** "No, it sits on top of them. Category Intelligence ingests your existing Nielsen, Circana, and other syndicated data feeds alongside your own POS and scan data, so you keep your current data subscriptions and get a faster, unified way to query across all of them."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 / §6.2 — "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; no syndicated-panel connector appears anywhere in the PRD's data requirements or 177-source catalog.
**Suggested fix:** "No. Category Intelligence researches the external market — analyst reports, trend data, and public category signals — so it complements your Nielsen or Circana subscription rather than replacing it. Most teams keep their syndicated data provider and use Kana to catch the signals worth watching between syndicated drops, without waiting on the next scheduled export."
**Why:** The current PRD does not support ingesting Nielsen, Circana, or the brand's own POS/scan feeds at all — that's explicitly future backlog work.
**Status:** PENDING REVIEW

### F9 — cpg — FAQ[2] ("How fast can a CPG team get live on Kana?")
**Current copy:** "Onboarding starts by connecting your top 3–5 data sources and configuring Category Intelligence and Marketing Intelligence to your retailer mix."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — internal/retailer data ingestion is out of v1; CI has no "retailer mix" configuration surface in the PRD.
**Suggested fix:** "Onboarding starts by connecting your top 3–5 data sources and configuring Marketing Intelligence to your retailer mix, while Category Intelligence is set up around the categories and markets you want to watch."
**Why:** "Configuring Category Intelligence to your retailer mix" implies retailer-specific internal data wiring CI doesn't do.
**Status:** PENDING REVIEW

### F10 — cpg — personas[0] (Category Manager, solution.description)
**Current copy:** "Ingests scan data, POS feeds, and category data sources like Nielsen and Circana. Answers category questions in seconds, not days."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — "Internal company data ingestion... stays out of v1."
**Suggested fix:** "Researches category questions across hundreds of curated public sources with citations. Answers in seconds, not days. Built specifically for VP Category and Senior Category Manager roles at CPG companies."
**Why:** Same root issue as solutions[0] — restated for this persona card.
**Status:** PENDING REVIEW

### F11 — cpg — personas[3] (VP Analytics/CMO, solution.description)
**Current copy:** "Unifies fragmented regional and retailer data into one live view, queryable in plain language. Shows how digital campaign performance tracks with in-store sales lift, giving marketing a defensible answer for commercial leadership instead of a proxy metric."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — downstream attribution to in-store lift is Out of Scope; §6.1 data sources don't include "retailer data" as such.
**Suggested fix:** "Unifies fragmented campaign and CRM data into one view, queryable in plain language. Gives marketing a grounded, cited answer for commercial leadership instead of a proxy metric."
**Why:** Same in-store-lift and data-scope overclaim as solutions[3], restated for this persona card.
**Status:** PENDING REVIEW

### F12 — cpg — showcase.columns[0] ("Catch the trend before it hits POS")
**Current copy:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) against your own scan data automatically. Surface leading indicators 6–10 weeks before movement shows in your numbers."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 (no internal scan-data ingestion in v1); no lead-time figure ("6–10 weeks") appears anywhere in the PRD's success metrics or functional requirements.
**Suggested fix:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) automatically, so you catch leading indicators before they show up in next month's numbers."
**Why:** "Against your own scan data" repeats the internal-ingestion overclaim, and the specific "6–10 weeks" figure has no PRD support — it reads as a fabricated benchmark.
**Status:** PENDING REVIEW

### F13 — cpg — showcase.columns[1] ("Run the brief you actually wrote")
**Current copy:** "Monitor every live campaign against the original brief across Meta, YouTube, and The Trade Desk, in real time."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_OmniChannel_Media_Planner_v2.md Backlog #4 — "Real-time mid-flight sync + alerts... daily/manual today"; Kana_PRD_Marketers_Audience_Builder_v2.md §6.2 — "Live activation APIs — shared-core item (see White Space Backlog)."
**Suggested fix:** "Build precise audience segments from plain-language briefs, no SQL, no tickets. Keep every live segment traceable to the original brief, so targeting never drifts from what you asked for."
**Why:** Real-time, cross-ad-platform drift monitoring against a brief is OCMP's integrity-scoring feature (daily sync today, real-time is backlog), not something Audience Builder does — this column mislabels it and overstates the cadence.
**Status:** PENDING REVIEW

### F14 — cpg — showcase.columns[2] ("Prove what moved the category")
**Current copy:** "Connect every campaign dollar to POS velocity, volume lift, and share movement, not just digital proxies. Give commercial leadership the attribution proof they've been asking for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md §6.2 — "Downstream multi-touch attribution — define data contract only (see White Space Backlog)."
**Suggested fix:** "Connect every campaign dollar to a grounded, cited performance answer, not just digital proxies. Give commercial leadership a story backed by evidence, not a guess."
**Why:** Same in-store/POS attribution overclaim as solutions[3] — the "attribution proof" is explicitly future backlog work, not shipped.
**Status:** PENDING REVIEW

### F15 — cpg — stackShowcase.subtitle
**Current copy:** "Kana connects to your POS data, retailer portals, CRM, media platforms, and category data sources like Nielsen and Circana, without migration, rip-and-replace, or new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §4.2 — internal/syndicated data ingestion out of v1.
**Suggested fix:** "Kana connects to your CRM, media platforms, and data warehouse, without migration, rip-and-replace, or new governance gaps."
**Why:** Same root issue — POS data, retailer portals, and Nielsen/Circana are not current Kana connections per the PRD.
**Status:** PENDING REVIEW

### F16 — cpg — stackShowcase.columns[0] ("Unify your customer data without moving a single record")
**Current copy:** "Zero-copy architecture sits on top of Salesforce, Marketo, your data warehouse, and your retailer portals. Kana resolves identities and deduplicates contacts across every system you already use, without migration, duplication, or new governance overhead."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 Non-Goals — "Not a CDP or customer-data system of record. AB consumes unified data; unification, identity resolution, and consent capture live in the data layer, not here."
**Suggested fix:** "Kana sits on top of Salesforce, Marketo, and your data warehouse, working with the customer data you already have without migration, duplication, or new governance overhead."
**Why:** Identity resolution and deduplication are explicitly placed outside any of the four products' scope in the PRDs — that's someone else's layer, not a claim Kana's products can make. The original phrasing also exposes internal architecture terminology ("zero-copy") rather than describing the outcome.
**Status:** PENDING REVIEW

### F17 — cpg — stackShowcase.columns[1] ("Launch new markets on data your competitors have never seen before")
**Current copy:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — no benchmark against Acxiom, Experian, or an "80%+ overlap" figure appears anywhere in the PRD (success metrics in §4.3 are onboarding-speed and ticket-count based, not accuracy benchmarks).
**Suggested fix:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals, so you can target on day one instead of waiting for first-party data to accumulate."
**Why:** The specific competitive-quality benchmark isn't supported anywhere in the PRD and reads as a fabricated stat.
**Status:** PENDING REVIEW

### F18 — retail-ecommerce — hero.subheadline
**Current copy:** "Kana gives retail teams early churn signals, trade-meeting answers in seconds, and a straight line from digital spend to register revenue — so the team is always acting on a customer earlier than the report can name one."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — White Space Backlog #3: "Downstream impact / multi-touch attribution ... pluggable attribution engine EXISTS in Kana-CDP ... adapt, don't build" (Impact: High, Effort: L, Routing: TBD) — listed as backlog, not MVP.
**Suggested fix:** "Kana gives retail teams early churn signals, trade-meeting answers in seconds, and one grounded number for what digital spend is actually doing — so the team is always acting on a customer earlier than the report can name one."
**Why:** "Straight line from digital spend to register revenue" asserts a finished attribution capability the PRD scopes as backlog, not shipped.
**Status:** PENDING REVIEW

### F19 — retail-ecommerce — solutions[0] (Personalization)
**Current copy:** "Personalization connects to the CRM, loyalty, and marketing automation systems you already run and scores every customer's churn risk in real time, reading declining purchase frequency, shrinking baskets, and fading engagement. It explains why each cohort is at risk and recommends the intervention worth making: message, channel, timing, and offer. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — White Space Backlog #2: "Always-on anomaly detection + event triggers | Page #3; batch-only today."
**Suggested fix:** "Personalization connects to the CRM, loyalty, and marketing automation systems you already run and scores every customer's churn risk well ahead of the retention report, reading declining purchase frequency, shrinking baskets, and fading engagement. It explains why each cohort is at risk and recommends the intervention worth making: message, channel, timing, and offer. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't."
**Why:** "In real time" overstates a capability the PRD says is batch-only today; the truthful, still-strong claim is early lead time, not live scoring.
**Status:** PENDING REVIEW

### F20 — retail-ecommerce — solutions[1] (Marketing Intelligence)
**Current copy:** "Marketing Intelligence unifies your ad platforms, e-commerce analytics, POS, and loyalty data into one live view (no warehouse migration, no analyst queue) and closes the offline attribution gap. Instead of reconciling numbers from a dozen tools for hours every week, you ask in plain language and walk into the board meeting with the spend-to-revenue line the CFO has been demanding."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3 (downstream impact / multi-touch attribution, routing TBD); also Non-Goals: "Not a BI or dashboard-builder product... a custom report/dashboard authoring surface is out."
**Suggested fix:** "Marketing Intelligence unifies your ad platforms, e-commerce analytics, POS, and loyalty data so you can ask in plain language instead of reconciling numbers from a dozen tools for hours every week. You walk into the board meeting with the answer already grounded in your own data, not a dashboard full of platform-reported guesses."
**Why:** "Closes the offline attribution gap" and "spend-to-revenue line" claim a shipped attribution capability the PRD lists as backlog; "one live view" also leans on dashboard framing the PRD's non-goals explicitly reject.
**Status:** PENDING REVIEW

### F21 — retail-ecommerce — solutions[2] (Category Intelligence)
**Current copy:** "Category Intelligence sits on your POS feeds, sales data, and external category signals, and answers merchant questions in seconds: what's selling through, where stock is at risk, which promo actually lifted margin. The weekly trade pack stops being an hours-long spreadsheet marathon, and markdown and allocation decisions stop waiting for the numbers to be assembled."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals: "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; Out of Scope 6.2: "Internal company data / 'data plane' — public sources only in v1"; Executive Summary: research runs "against ~177 curated public data sources."
**Suggested fix:** "Category Intelligence watches the external category signals that shape the Monday trade meeting — competitor moves, category trends, promo benchmarks — and answers merchant questions in seconds with a cited, dated record. The weekly trade pack stops being an hours-long spreadsheet marathon, and markdown and allocation decisions stop waiting for the numbers to be assembled."
**Why:** The PRD defines Category Intelligence v1 as a public-source market-watch tool and explicitly excludes internal data (POS, sales) from v1 — the config describes the opposite product.
**Status:** PENDING REVIEW

### F22 — retail-ecommerce — solutions[3] (Audience Builder)
**Current copy:** "Audience Builder lets campaign teams build, validate, and activate segments in plain language, no SQL, no data engineering queue, with one canonical audience definition enforced across Meta, Google, email, and your loyalty platform. Built-in synthetic audiences let you target new store regions and new categories before first-party data exists, and every segment traces back to the brief it came from."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Live activation APIs — shared-core item (see White Space Backlog)"; MVP Scope: "Activation by reference to ≥1 marketer platform registry entry (Iterable/Braze/MessageGears-class)"; reach estimation (not activation) is what spans "Meta/Google/TikTok" (§7.3).
**Suggested fix:** "Audience Builder lets campaign teams build, validate, and activate segments in plain language, no SQL, no data engineering queue, with one canonical audience definition and reach estimated across Meta, Google, and TikTok before a dollar goes out the door. Synthetic audiences help you target new store regions and categories ahead of first-party data, and every segment traces back to the brief it came from."
**Why:** Live activation "enforced across Meta, Google" overstates the product — activation is by-reference to marketer platforms (loyalty/messaging), while Meta/Google/TikTok are where reach is estimated, not where segments are pushed live; live activation APIs are an explicit backlog item. (Secondary, softer flag: the specific mechanism for targeting "new store regions... before first-party data exists" isn't addressed by the PRD beyond a backlog note that today's lookalike/synthetic modeling is "synthetic only" pending validation on real data — kept but softened rather than stated as a settled capability.)
**Status:** PENDING REVIEW

### F23 — retail-ecommerce — painPoints[0]
**Current copy:** "70–77% of first-time e-commerce customers never come back, and churn typically only surfaces as a lagging line in the monthly cohort report. Personalization reads declining frequency, shrinking baskets, and fading engagement in real time, so retention teams can act weeks before it would show up as a churn statistic."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "70–77% of first-time e-commerce customers never come back, and churn typically only surfaces as a lagging line in the monthly cohort report. Personalization reads declining frequency, shrinking baskets, and fading engagement well before the report catches up, so retention teams can act weeks before it would show up as a churn statistic."
**Why:** Same real-time overclaim as solutions[0] — the PRD's current-state note says risk scoring runs in batch, not in real time.
**Status:** PENDING REVIEW

### F24 — retail-ecommerce — stats[0]
**Current copy:** "84% — of retail revenue closes in-store — Kana connects it back to the campaign that drove it (US Census Bureau)"
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "84% — of retail revenue closes in-store — Kana gives you one grounded view of what happened before and after (US Census Bureau)"
**Why:** "Connects it back to the campaign that drove it" is a direct attribution claim the PRD scopes as not-yet-built.
**Status:** PENDING REVIEW

### F25 — retail-ecommerce — stats[3]
**Current copy:** "52% — more scrutiny on marketing ROI — teams with a live spend-to-register view walk in with the answer already there (The CMO Survey)"
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "52% — more scrutiny on marketing ROI — teams with grounded answers already in hand walk into the room ahead of the ones still reconciling exports (The CMO Survey)"
**Why:** "Live spend-to-register view" restates the same unshipped attribution capability as stats[0] and solutions[1].
**Status:** PENDING REVIEW

### F26 — retail-ecommerce — faq[1]
**Current copy:** "It works from the systems you already run: CRM, loyalty, and marketing automation. Kana continuously reads lifecycle patterns like activation, purchase frequency, and spend to score churn risk in real time, surfacing at-risk cohorts weeks before they lapse. Every recommended intervention goes through your team's review and approval."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "It works from the systems you already run: CRM, loyalty, and marketing automation. Kana reads lifecycle patterns like activation, purchase frequency, and spend to score churn risk, surfacing at-risk cohorts weeks before they lapse. Every recommended intervention goes through your team's review and approval."
**Why:** "Continuously... in real time" is the same overclaim flagged in solutions[0], painPoints[0], and the showcase/stack-showcase Personalization copy.
**Status:** PENDING REVIEW

### F27 — retail-ecommerce — personas[1] (Category Manager / Merchant) — solution
**Current copy:** "Answers category questions in seconds from your POS, sales, and external signals: sell-through, stock risk, promo lift by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals / Out of Scope: internal company data ("the data plane") stays out of v1; public sources only.
**Suggested fix:** "Answers category questions in seconds from a cited, monitored view of the external market: category trends, competitor moves, promo benchmarks by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions."
**Why:** Same issue as solutions[2] — POS and internal sales data are explicitly out of scope for Category Intelligence v1.
**Status:** PENDING REVIEW

### F28 — retail-ecommerce — personas[2] (Head of Marketing Ops) — solution
**Current copy:** "Plain-language segment building with brief-to-activation traceability and one canonical audience definition enforced across every channel. No SQL, no engineering queue, segments ship inside the promo window, not after it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Live activation APIs — shared-core item (see White Space Backlog)"; MVP activation is "by reference" to a marketer platform registry entry.
**Suggested fix:** "Plain-language segment building with brief-to-activation traceability and one canonical audience definition, activated by reference across your loyalty and messaging platforms. No SQL, no engineering queue, segments ship inside the promo window, not after it."
**Why:** "Enforced across every channel" implies live push activation everywhere, which the PRD scopes as backlog; by-reference activation is the current MVP mechanism.
**Status:** PENDING REVIEW

### F29 — retail-ecommerce — personas[4] (CMO / VP Analytics) — solution
**Current copy:** "One live view across ad platforms, e-commerce analytics, POS, and loyalty, queryable in plain language, with digital spend tied to in-store revenue. The CFO conversation moves from defending impressions to showing the register."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "A queryable view across ad platforms, e-commerce analytics, POS, and loyalty, answerable in plain language. The CFO conversation moves from defending impressions to a grounded number everyone in the room trusts."
**Why:** "Digital spend tied to in-store revenue" and "showing the register" both restate the unshipped attribution claim.
**Status:** PENDING REVIEW

### F30 — retail-ecommerce — showcase.columns[0] (Personalization)
**Current copy:** "Real-time churn risk scores from the loyalty and CRM data you already own. See which cohorts are slipping, why, and which intervention is worth the margin, weeks before the retention report says it's too late."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "Churn risk scores from the loyalty and CRM data you already own. See which cohorts are slipping, why, and which intervention is worth the margin, weeks before the retention report says it's too late."
**Why:** Same real-time overclaim as the other Personalization instances.
**Status:** PENDING REVIEW

### F31 — retail-ecommerce — showcase.columns[1] (Category Intelligence)
**Current copy:** "Sell-through, stock risk, and promo lift on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals / Out of Scope: internal company data stays out of v1; public sources only.
**Suggested fix:** "Category trends, competitor moves, and promo benchmarks on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter."
**Why:** Sell-through and stock risk are internal-inventory metrics that require POS/sales data, which is explicitly out of scope for Category Intelligence v1.
**Status:** PENDING REVIEW

### F32 — retail-ecommerce — showcase.columns[2] (Marketing Intelligence)
**Current copy:** "Prove which dollar moved which register" / "Tie campaign spend to in-store revenue, basket size, and customer LTV, not platform-reported conversions. Give the CFO the number that survives an audit."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "Get one number the room can trust" / "See campaign spend, basket size, and customer LTV together, grounded in your own connected data instead of platform-reported conversions. Give the CFO a number that survives scrutiny."
**Why:** "Prove which dollar moved which register" is the clearest version of the attribution overclaim running through the Marketing Intelligence copy.
**Status:** PENDING REVIEW

### F33 — retail-ecommerce — stackShowcase.columns[0] (Personalization)
**Current copy:** "Personalization: plugs into the CRM, loyalty, and automation systems you already run, scores churn risk continuously, and routes every recommended intervention through your team's approval. Retention becomes a compounding learning loop, not a monthly report."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "Personalization: plugs into the CRM, loyalty, and automation systems you already run, scores churn risk well before it shows up in the monthly report, and routes every recommended intervention through your team's approval. Retention becomes a compounding learning loop, not a monthly report."
**Why:** "Continuously" is the same overclaim as the other Personalization instances.
**Status:** PENDING REVIEW

### F34 — retail-ecommerce — stackShowcase.columns[2] (Audience Builder)
**Current copy:** "Audience Builder: when a new region or category means no local first-party seed data, built-in synthetic audiences deliver statistically valid targeting from day one. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Backlog #1: "Propensity / lookalike models on real data | Synthetic only today ... is a working seed" (i.e., synthetic modeling is a stand-in pending validation on real data; no benchmark quality figure appears anywhere in the PRD).
**Suggested fix:** "Audience Builder: when a new region or category means no local first-party seed data, synthetic audiences give you a statistically sound starting point on day one, refined as real signal comes in."
**Why:** The specific "80%+ overlap with Acxiom and Experian quality" figure appears nowhere in the PRD, and the PRD frames today's synthetic-audience modeling as an unvalidated stand-in for a still-backlogged real-data version — not a benchmarked quality claim.
**Status:** PENDING REVIEW

### F35 — retail-ecommerce — personas[0] (Director of Lifecycle & Retention) — solution
**Current copy:** "Reads behavioral signals (declining purchase frequency, shrinking baskets, fading engagement) and surfaces at-risk cohorts weeks before they lapse, with root cause and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #1: "Root-cause churn diagnosis (friction correlation) | ... heuristic reasons only today"; MVP goal is a plain-language "reason," not root-cause diagnosis.
**Suggested fix:** "Reads behavioral signals (declining purchase frequency, shrinking baskets, fading engagement) and surfaces at-risk cohorts weeks before they lapse, with a clear reason and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention."
**Why:** True root-cause (friction-correlation) diagnosis is an explicit backlog item; the shipped capability is a plain-language reason per decision, not causal diagnosis.
**Status:** PENDING REVIEW

### F36 — financial-services — hero.subheadline
**Current copy:** "Kana gives you compliance-ready content velocity, propensity-driven cross-sell, and a bridge from digital intent to the branch."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §8 — "Compliance & Certifications | Backlog"; AB PRD §10 Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today"; ADP PRD §4.2 — "Not an end-user marketing app. ADP has admin/steward surfaces only."
**Suggested fix:** "Kana gives you faster answers on campaign performance, self-serve cross-sell audiences, and one connected view of the customer across digital and branch."
**Why:** Compresses the three product-specific overclaims below into one line; the replacement states only MVP-supported outcomes.
**Status:** PENDING REVIEW

### F37 — financial-services — solutionRows[0] (Marketing Intelligence)
**Current copy:** Title: "Cut the compliance cycle without cutting the compliance" / Description: "Marketing Intelligence manages pre-approved content libraries and flags compliance risks before creative goes to review — cutting cycle times dramatically. Submissions arrive cleaner, revision loops shrink, and every approval carries its audit trail: reviewer, timestamp, version. Principal sign-off stays exactly where regulators require it; the three-week queue in front of it doesn't."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §4.2 Non-Goals — "Not a BI or dashboard-builder product... Not the execution layer... Not a data platform"; §8 — "Compliance & Certifications | Backlog | FinServ/Healthcare verticals need compliance-aware content flags later (MP-06)". Nothing in Goals/Functional Requirements mentions content libraries, pre-review risk flagging, or reviewer/timestamp/version audit trails — MI's actual scope is NL Q&A, narratives, and suggestion queues (§4.1, §7).
**Suggested fix:** Title: "Turn campaign performance into answers your team can act on" / Description: "Marketing Intelligence lets marketing ops ask plain-language questions about campaign performance and get grounded answers in seconds, plus weekly narratives your team reviews and approves before they go out. Every suggested action comes with the evidence behind it, and nothing ships without a human sign-off — insight-to-action drops from weeks to hours."
**Why:** Replaces the unsupported compliance-content-library premise with MI's actual capabilities (NL Q&A, human-reviewed narratives, evidence-linked suggestions, weeks-to-hours cycle) per PRD §1 and §4.1.
**Status:** PENDING REVIEW

### F38 — financial-services — solutionRows[1] (Audience Builder)
**Current copy:** Title: "Cross-sell on propensity, not on rules" / Description: "Audience Builder applies AI-driven propensity models to identify the right customer, product, channel, and moment for every cross-sell opportunity — replacing the simple behavioral rules most programs still fire on. A customer's third product keeps them nearly seven years instead of eighteen months, and the model that finds that customer no longer waits on a data-science backlog."
**Verdict:** OVERCLAIM
**PRD citation:** AB PRD §6.2 Out of Scope — "Propensity/lookalike models on real data (see White Space Backlog)"; §10 Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today." Actual MVP goal (§4.1): "Marketer self-serve: brief → sized audience in minutes against CRM/loyalty/POS data."
**Suggested fix:** Title: "Cross-sell audiences in minutes, not sprints" / Description: "Audience Builder lets your team build precise cross-sell segments — the right customers, filtered by product ownership, behavior, and recency — directly against your CRM, loyalty, and transaction data, with no data-science queue in between. A customer's third product keeps them nearly seven years instead of eighteen months; Audience Builder gets you to that segment the same day you think of it."
**Why:** Keeps the "no data-science backlog" claim, which the PRD does support (§4.3 — "Data-team tickets for segments: 0"), while dropping the propensity-model claim the PRD marks synthetic-only/backlog.
**Status:** PENDING REVIEW

### F39 — financial-services — solutionRows[2] (Agentic Data Platform)
**Current copy:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. When a customer researches mortgages in the app and books a branch appointment, the relationship banker opens a record that knows it — not a static lead list from last week's export."
**Verdict:** OVERCLAIM
**PRD citation:** ADP PRD §4.2 Non-Goals — "Not an end-user marketing app. ADP has admin/steward surfaces only (connections, mappings, identity review, policies). Campaigns, audiences-as-product, and decisions live in the suite apps that consume it." §10 Backlog #2 — "Live activation connectors (LinkedIn, TTD, Meta, DSPs, MAP write-back) ... Backlog — Near-Term."
**Suggested fix:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform connects your digital channels and CRM into one governed customer view, so the apps your teams already use can surface what a customer has been exploring — instead of relationship bankers working from a lead list that's already out of date."
**Why:** Attributes the banker-facing experience to the suite apps ADP feeds, not to ADP itself, and drops the live CRM write-back claim that the PRD lists as Backlog.
**Status:** PENDING REVIEW

### F40 — financial-services — solutionRows[3] (Personalization)
**Current copy:** Title: "Offers triggered by the moment, not the quarter" / Description: "Personalization monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent. The customer who just changed employers or made a large transfer gets a tailored offer within hours — instead of surfacing on the next quarterly campaign list after the moment has passed. Coming soon to the Kana platform."
**Verdict:** OVERCLAIM
**PRD citation:** Personalization PRD §6.2 Out of Scope — "Always-on journey anomaly detection / event triggers — see White Space Backlog"; §10 Backlog #2 — "Always-on anomaly detection + event triggers | Page #3; batch-only today." The actual engine (§5 Primary Use Case) "precomputes six decisions per known customer" — a batch process, not a real-time trigger.
**Suggested fix:** Title: "Offers built around the customer, not the calendar" / Description: "Personalization scores every customer's next-best offer — channel, content, timing, frequency — from their real behavior and account activity, with a plain-language reason behind each one. The customer who just changed employers or made a large transfer gets matched to a relevant offer on the next cycle, not the next quarterly campaign list. Coming soon to the Kana platform."
**Why:** Preserves the "faster than quarterly" contrast the PRD does support while dropping the "precise moment... within hours" real-time-trigger claim the PRD marks batch-only/backlog.
**Status:** PENDING REVIEW

### F41 — financial-services — faq[0] ("How does Kana fit into our compliance review process?")
**Current copy:** "It works ahead of it, not around it. Marketing Intelligence maintains pre-approved content libraries and flags compliance risks before creative reaches your reviewers, so submissions arrive cleaner and revision cycles shrink. Principal sign-off and your existing approval authority stay exactly as they are — with a complete audit trail (reviewer, timestamp, version) on every asset."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §8 — "Compliance & Certifications | Backlog | FinServ/Healthcare verticals need compliance-aware content flags later (MP-06)." No content-library or pre-review risk-flagging feature appears anywhere in MI's Functional Requirements (§7).
**Suggested fix:** "Marketing Intelligence doesn't sit inside your compliance workflow today — it sits upstream, giving marketing ops plain-language answers on campaign performance and narratives that go through your team's review and approval before anyone sees them. Compliance-aware content flagging for regulated content is on our roadmap — book a demo to see it."
**Why:** Answers the question honestly given MI's Backlog status on compliance-aware content, instead of implying a shipped compliance-review feature.
**Status:** PENDING REVIEW

### F42 — financial-services — personas[0] (Director of Lifecycle & CRM Marketing) — solution.description
**Current copy:** "Monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent — hours after the life event, not months. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[3] — Personalization PRD §10 Backlog #2, "batch-only today."
**Suggested fix:** "Scores every customer's next-best offer — content, timing, channel — from behavioral and transactional signals, with a reason behind every decision. Life-event-driven offers reach the customer on the next cycle, not months later on the next quarterly list. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Why:** Same fix pattern as solutionRows[3]: drop the real-time "hours" trigger claim, keep the accurate faster-than-quarterly framing.
**Status:** PENDING REVIEW

### F43 — financial-services — personas[1] (Marketing Operations Manager) — solution.description
**Current copy:** "Pre-approved content libraries and pre-review risk flagging cut cycle times dramatically, while every approval carries its audit trail automatically — reviewer, timestamp, version. The compliance desk gets cleaner submissions; marketing gets its calendar back."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0]/faq[0] — MI PRD §8, Compliance & Certifications is Backlog; no content-library feature in §7.
**Suggested fix:** "Plain-language answers on campaign performance and narratives that go through your team's review before distribution — no export-and-reconcile cycle. Marketing Ops gets decision-grade reporting in seconds instead of days; compliance-aware content flagging is on our roadmap."
**Why:** Same root issue as solutionRows[0]; fix substitutes MI's real analytics/narrative capabilities for the unsupported compliance-content claim.
**Status:** PENDING REVIEW

### F44 — financial-services — personas[2] (Director of Marketing Analytics) — solution.description
**Current copy:** "AI-driven propensity models identify the right customer, product, channel, and moment for every cross-sell opportunity — operationalized without a modeling backlog, and traceable from model to campaign to origination."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1, propensity/lookalike models "Synthetic only today."
**Suggested fix:** "Precise, self-serve cross-sell segments — built directly against CRM, loyalty, and transaction data in minutes, with no data-science queue in between, and traceable from segment to activated campaign."
**Why:** Same fix pattern as solutionRows[1]: drop the propensity-model claim, keep the (PRD-supported) no-backlog and traceability framing.
**Status:** PENDING REVIEW

### F45 — financial-services — personas[3] (Head of Retail Network) — solution.description
**Current copy:** "Bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. The banker opens the appointment already knowing what the customer has been exploring."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §4.2 ("admin/steward surfaces only") and §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** "Connects digital channels and CRM into one governed customer view, so the apps your relationship bankers already use can surface what a customer has been exploring — not a static lead list from last week's export."
**Why:** Attributes the banker-facing outcome to the consuming apps rather than to ADP directly, consistent with the PRD's admin-only scope for ADP itself.
**Status:** PENDING REVIEW

### F46 — financial-services — personas[4] (CMO / Head of Retail Marketing) — solution.description
**Current copy:** "The platform anchor: compliance-ready velocity, governed AI with human oversight, and marketing performance connected to origination — the story that closes the gap between the data the institution holds and the experiences it ships."
**Verdict:** OVERCLAIM
**PRD citation:** "Compliance-ready velocity" — same MI Backlog citation as above. "Marketing performance connected to origination" — MI PRD §10 Backlog #3: "Downstream impact / multi-touch attribution... pluggable attribution engine EXISTS in Kana-CDP — adapt, don't build" (i.e., not yet in MI itself; "origination" as a linked outcome isn't named in any Data Requirements table).
**Suggested fix:** "The platform anchor: faster answers on campaign performance, governed AI with human oversight on every decision, and a growing view of marketing's contribution to the business — the story that closes the gap between the data the institution holds and the experiences it ships."
**Why:** Keeps the governed-AI claim (well-supported across ADP/MI/Personalization human-approval loops) while softening the two unsupported specifics.
**Status:** PENDING REVIEW

### F47 — financial-services — showcase.columns[0] ("Ship in days what used to take weeks")
**Current copy:** "Pre-approved content libraries and pre-review risk flagging compress the compliance cycle — with the audit trail regulators expect built into every approval."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0] — MI PRD §8, Compliance & Certifications is Backlog.
**Suggested fix:** Title: "Get answers in seconds, not days" / Description: "Plain-language questions over your campaign data get grounded answers in seconds, with narratives your team reviews and approves before anyone else sees them."
**Why:** Same fix pattern as solutionRows[0].
**Status:** PENDING REVIEW

### F48 — financial-services — showcase.columns[1] ("Find the third product before the rules do")
**Current copy:** "Propensity models score every customer for the right product, channel, and moment — replacing rule-based triggers with predictions that compound tenure and deposits."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1.
**Suggested fix:** Title: "Find the third-product customer in minutes, not sprints" / Description: "Build precise cross-sell segments directly against CRM, loyalty, and transaction data — no data-science queue — for the audiences that compound tenure and deposits."
**Why:** Same fix pattern as solutionRows[1].
**Status:** PENDING REVIEW

### F49 — financial-services — showcase.columns[2] ("Walk the digital signal into the branch")
**Current copy:** "Digital intent flows into the banker's CRM before the appointment, so the branch conversation starts where the customer's research left off."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** Title: "Give the branch what the app already knows" / Description: "Digital and CRM data connect into one governed customer view, so the tools your branch teams use can start the conversation where the customer's research left off."
**Why:** Same fix pattern as solutionRows[2] — outcome delivered via consuming apps/tools, not a live CRM write-back from ADP.
**Status:** PENDING REVIEW

### F50 — financial-services — stackShowcase.columns[0] ("Compress the review cycle without touching the controls")
**Current copy:** "Marketing Intelligence — pre-approved libraries and risk pre-flagging sit in front of your existing approval workflow. Principals keep sign-off; audit trails write themselves; the 5–15 day queue shrinks to the review that actually matters."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0] — MI PRD §8, Compliance & Certifications is Backlog.
**Suggested fix:** Title: "Get decision-grade answers without waiting on a data team" / Description: "Marketing Intelligence — plain-language questions over your campaign data, answered in seconds, with narratives and suggested actions that go through your team's review before they ship."
**Why:** Same fix pattern as solutionRows[0].
**Status:** PENDING REVIEW

### F51 — financial-services — stackShowcase.columns[1] ("Run propensity models without a modeling backlog")
**Current copy:** "Audience Builder — AI-driven propensity scoring on the customer data you already hold, governed with human oversight and documented logic that stands up to model-risk review."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1.
**Suggested fix:** Title: "Build cross-sell segments without a modeling backlog" / Description: "Audience Builder — self-serve segmentation on the CRM, loyalty, and transaction data you already hold, with governance and documentation that stand up to model-risk review."
**Why:** Same fix pattern as solutionRows[1]; keeps the model-risk-review governance claim, which is broadly supported by ADP's policy/audit layer that AB sits on.
**Status:** PENDING REVIEW

### F52 — financial-services — stackShowcase.columns[2] ("Give every banker the context the app already has")
**Current copy:** "Agentic Data Platform — digital intent signals flow into the branch CRM your relationship bankers already use. One customer, one story, on both sides of the counter."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** Description: "Agentic Data Platform — digital and CRM data connect into one governed customer view your relationship bankers' tools can draw on. One customer, one story, on both sides of the counter."
**Why:** Drops the live CRM write-back claim while keeping the title and the "one customer, one story" framing intact.
**Status:** PENDING REVIEW

### F53 — healthcare — solutions[0] (Audience Builder)
**Current copy:** "Audience Builder enables care-gap–aware segmentation, allowing marketers to precisely target the right members for the right intervention at the right time. The annual wellness campaign stops going to everyone equally and starts reaching the members with overdue screenings and elevated risk profiles — where a completed visit closes 5.5x more gaps and moves the Stars measures your bonus revenue rides on."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — MVP data sources are "CRM + loyalty + POS (warehouse-resident)" (§9); Enterprise Readiness lists "Compliance & Certifications | Backlog | HIPAA/FinServ segment guardrails later (policy-layer per Architecture doc)" (§8); White Space Backlog #5 "Vertical guardrail packs (HIPAA, ECOA)... TBD."
**Suggested fix:** "Audience Builder enables precise, quality-priority segmentation, allowing marketers to target the right members for the right intervention at the right time. The annual wellness campaign stops going to everyone equally and starts reaching the members who matter most to your Stars measures — where a completed visit closes 5.5x more gaps and moves the bonus revenue that rides on them."
**Why:** The PRD's marketer data wiring is CRM/loyalty/POS, and HIPAA-scoped clinical segmentation (care gaps, risk profiles) is explicit Backlog, not a shipped capability.
**Status:** PENDING REVIEW

### F54 — healthcare — solutions[1] (Campaign Orchestrator)
**Current copy:** "The Campaign Orchestrator orchestrates enrollment season campaigns at scale — dynamically segmenting audiences by plan eligibility and personalizing messaging for each cohort. The 54-day sprint across millions of members and dozens of plan options stops depending on manual content and audience management, in a market where 13 million members switched plans last cycle."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Non-Goals: "Not the planning tool... CO operates strictly in-flight" and "Not a DSP or buying platform. CO recommends and monitors." MVP scope (§6.1) is limited to "Adopt OmniMP MMM engine... Integrity/drift scoring... Reallocation recommendation cards... Test loop... Conversational explanations over campaign/spend data" — no audience segmentation or message-personalization function anywhere in the document.
**Suggested fix:** "The Campaign Orchestrator keeps enrollment season spend on track at scale — catching performance drift mid-flight and reallocating budget before it's wasted. The 54-day sprint across millions of members and dozens of plan options stops running on gut-feel and weekly reports, in a market where 13 million members switched plans last cycle."
**Why:** CO's actual job per the PRD is in-flight spend reallocation and drift detection, not audience segmentation or messaging personalization — those belong to Audience Builder and Personalization.
**Status:** PENDING REVIEW

### F55 — healthcare — personas[0].solution (Medicare Stars / Quality Director)
**Current copy:** "Care-gap–aware segmentation targets the right members for the right intervention at the right time — overdue screenings, elevated risk profiles, and adherence gaps each get their own precisely aimed outreach instead of a share of the annual blast."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same citation as solutions[0]: MVP data sources are CRM/loyalty/POS; HIPAA vertical guardrails are Backlog #5, not MVP.
**Suggested fix:** "Precise, quality-priority segmentation targets the right members for the right intervention at the right time — the members who matter most to each Stars measure get their own aimed outreach instead of a share of the annual blast."
**Why:** Same clinical-data/compliance-readiness gap as solutions[0] — this is the same claim repeated in the persona table.
**Status:** PENDING REVIEW

### F56 — healthcare — personas[1].solution (Enrollment Marketing Director)
**Current copy:** "Orchestrates enrollment season at scale: audiences dynamically segmented by plan eligibility, messaging personalized per cohort, and the 54-day sprint run on automation instead of overtime."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1]: CO's MVP scope is spend reallocation, drift alerts, and testing; it does not segment audiences or personalize messaging.
**Suggested fix:** "Orchestrates enrollment season at scale: performance tracked across channels, drift caught before it wastes budget, and the 54-day sprint run on continuous optimization instead of overtime."
**Why:** Same product-capability mismatch as solutions[1] — this is the same claim repeated in the persona table.
**Status:** PENDING REVIEW

### F57 — healthcare — showcase.columns[0] (Audience Builder)
**Current copy:** "Care-gap–aware segments aim every intervention at the members who need it — overdue screenings, elevated risk, adherence lapses — and the Stars measures move with them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same citation as solutions[0].
**Suggested fix:** "Quality-priority segments aim every intervention at the members who need it most, and the Stars measures move with them."
**Why:** Same clinical-data/compliance-readiness gap as solutions[0], repeated in the interactive showcase.
**Status:** PENDING REVIEW

### F58 — healthcare — showcase.columns[1] (Campaign Orchestrator)
**Current copy:** "Audiences segmented dynamically by plan eligibility, messaging personalized per cohort, and millions of member touchpoints orchestrated through the AEP window."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1].
**Suggested fix:** "Spend tracked and reallocated dynamically across channels, drift flagged before it wastes budget, and millions of member touchpoints kept on course through the AEP window."
**Why:** Same product-capability mismatch as solutions[1], repeated in the interactive showcase.
**Status:** PENDING REVIEW

### F59 — healthcare — stackShowcase.columns[0] (Audience Builder)
**Current copy:** "Audience Builder — the extracts your quality team already produces become precise, care-gap–aware segments, refreshed continuously instead of hand-built per measure."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — clinical/care-gap segmentation issue as above, plus White Space Backlog #2 "Real-time loyalty data sync... TBD" — continuous refresh is explicitly not built; MVP is "Everything in the shared-core MVP," which has no live/streaming refresh path.
**Suggested fix:** "Audience Builder — the extracts your quality team already produces become precise, quality-priority segments, built once and reused instead of hand-built per measure."
**Why:** Compounds two unsupported claims: clinical care-gap targeting and continuous (real-time) refresh, the latter explicitly Backlog per the PRD.
**Status:** PENDING REVIEW

### F60 — healthcare — stackShowcase.columns[1] (Campaign Orchestrator)
**Current copy:** "Campaign Orchestrator — plan-eligibility segmentation and per-cohort messaging run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1].
**Suggested fix:** "Campaign Orchestrator — spend reallocation and drift detection run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Why:** Same product-capability mismatch as solutions[1], repeated in the stack showcase.
**Status:** PENDING REVIEW

### F61 — healthcare — faq[1] ("How does Kana connect to our healthcare stack?")
**Current copy:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, typically going live in 2–4 weeks."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md — Success Metrics (§4.3): "Time from connection to first usable canonical objects | Days, not months (JIT claim — set exact target with first partner) | Onboarding instrumentation." No partner-validated number exists yet; the PRD explicitly flags the exact target as unset.
**Suggested fix:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, with most teams live in weeks, not months."
**Why:** "2–4 weeks" is a specific, checkable commitment the PRD hasn't validated with a partner yet; "weeks, not months" keeps the same reassurance without a number the team can't yet stand behind.
**Status:** PENDING REVIEW

### F62 — qsr — hero.subheadline
**Current copy:** "Kana gives you spend that follows market signal, offers wired to real kitchen conditions, and day-parts that flex with demand."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — "Location-level spend optimization — QSR/Retail whitespace (see White Space Backlog)" (§6.2); Kana_PRD_Platform_Agentic_Data_Platform.md — "Not an end-user marketing app... Campaigns, audiences-as-product, and decisions live in the suite apps that consume it" (§4.2); Kana_PRD_Marketers_Audience_Builder_v2.md — "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator" (§4.2)
**Suggested fix:** "Kana gives you budget that keeps pace with what's converting, offers that respect real kitchen conditions, and targeting that adjusts as demand shifts."
**Why:** This line compresses the three overclaims below (location-level spend, automatic offer gating, day-part signal ingestion) into the hero; softening it here removes the overclaim from the page's highest-visibility line.
**Status:** PENDING REVIEW

### F63 — qsr — solutionRows[0] (Campaign Orchestrator)
**Current copy:** "Campaign Orchestrator enables location-aware audience and budget optimization — adjusting spend automatically by market performance signal. Instead of one national plan applied to thousands of different trade areas, each market's traffic patterns, competitive set, and menu preferences shape where the next dollar goes."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace (see White Space Backlog)"; §4.2 — "Never ungated execution. Even when automated spend changes ship from the backlog, they stay approval-gated; unattended budget movement is a permanent trust boundary, not a maturity milestone."
**Suggested fix:** "Campaign Orchestrator continuously compares how every channel is performing and recommends where the next dollar should go — with your team approving every move before spend shifts. Instead of a plan set once and left to run, budget keeps pace with what's actually converting. The weekly comp readout stops being a record of decisions made three weeks too late."
**Why:** Per-trade-area/location-level budget optimization is listed as PRD whitespace, and "automatically" contradicts CO's stated approval-gated execution model.
**Status:** PENDING REVIEW

### F64 — qsr — solutionRows[1] (Agentic Data Platform)
**Current copy:** "The Agentic Data Platform connects your operational data feeds to campaign logic — suppressing or adjusting offers based on real-time kitchen and inventory conditions. When an item gets 86'd or the line is at capacity, the push that would have promoted it pauses or pivots automatically. Marketing stops promising what operations can't serve."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — "Not an end-user marketing app. ADP has admin/steward surfaces only... Campaigns, audiences-as-product, and decisions live in the suite apps that consume it"; §7.6 — "Platform-level propose→approve→act→audit primitive (agent rules, pending actions, approval inbox)"
**Suggested fix:** "The Agentic Data Platform keeps your campaign tools working from the same operational picture as your stores — so when an item gets 86'd or the line is at capacity, your team can catch and adjust the offer that would have promoted it before it goes out, instead of finding out from a guest complaint. Marketing stops promising what operations can't serve."
**Why:** The PRD scopes ADP as a data and governance layer, not a holder of campaign logic, and every action on the platform runs through an approval inbox — "pauses or pivots automatically" overstates both the ownership and the automation.
**Status:** PENDING REVIEW

### F65 — qsr — solutionRows[2] (Audience Builder)
**Current copy:** Title: "Day-parts that flex with demand, not the calendar." Description: "Audience Builder works together with the Campaign Orchestrator to ingest external demand signals — weather, events, traffic, competitive promotions — and support optimized day-part targeting and offer timing across digital and local channels. Breakfast, lunch, and dinner campaigns respond to what's shifting demand this morning instead of running the schedule set last month."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 — "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator"; §9 Data Requirements lists only CRM/loyalty/POS (warehouse-resident), consent fields, and paid-platform reach benchmarks — no weather/event/traffic/competitive-promotion signals anywhere in the PRD
**Suggested fix:** Title: "Audiences that are ready the moment demand shifts." Description: "Audience Builder builds precise, sized segments straight from your CRM and loyalty data — with suppression logic built in, so recent purchasers and opt-outs are automatically excluded. Instead of a two-week ticket to the data team, breakfast, lunch, and dinner segments are ready in minutes, so the offer goes out while the moment is still there."
**Why:** Day-part/offer-timing decisions are explicitly assigned to Personalization and Campaign Orchestrator in AB's Non-Goals, and AB's PRD data sources don't include weather, events, traffic, or competitive promotions.
**Status:** PENDING REVIEW

### F66 — qsr — faq[0] ("How does Kana connect to our restaurant stack?")
**Current copy:** "Via API. Kana sits on top of your POS (Toast, Brink, Oracle Simphony), loyalty platform (Punchh, Paytronix), ordering system (Olo), and ad platforms — no rip-and-replace, no warehouse migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1 — "Two live source connectors for the design partner (e.g., Salesforce + MAP)... LIVE connectors for the first design partner's top 2 sources (net-new — CDP's are config-only)"; §6.2 — "Full activation connector breadth (LinkedIn/TTD/Meta/DSPs live)... Backlog #2"; §4.3 — "Time from connection to first usable canonical objects | Days, not months (JIT claim — set exact target with first partner)"
**Suggested fix:** "Via API. Kana connects to your warehouse and the marketing, loyalty, and ordering systems you run today — no rip-and-replace, no data migration. Kana's solutions team scopes the connection list with you and gets you to first usable data fast, with exact timing set per engagement."
**Why:** The named POS/loyalty/ordering vendors aren't in the PRD's connector scope (MVP is warehouse + 2 live sources; broader connector breadth is backlog), and "2–4 weeks" isn't a PRD-backed figure — the PRD's own metric target is still TBD, set per first partner.
**Status:** PENDING REVIEW

### F67 — qsr — faq[1] ("How does the Agentic Data Platform know what's happening in the kitchen?")
**Current copy:** "It reads the operational feeds your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity signals from your POS and ordering systems — and wires them into campaign logic. Offers pause or adjust automatically when conditions change, and every rule runs with your team's oversight."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1/§7.1 — MVP connectivity is warehouse (Snowflake) + two live sources such as Salesforce + MAP; §6.2 — "Not a general-purpose iPaaS. Connectors exist to feed the canonical model and activate segments — arbitrary system-to-system syncs... are out"; §7.6 — human-approval action loop, not automatic execution
**Suggested fix:** "It's built to work from the same operational signals your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity — so offer decisions can reflect current conditions instead of a calendar set weeks ago. Every rule runs with your team's review before an offer goes out."
**Why:** POS/kitchen operational feeds aren't in ADP's documented connector scope, and "automatically" undersells the PRD's mandatory pre-execution approval step — "with your team's oversight" isn't strong enough to fix that on its own.
**Status:** PENDING REVIEW

### F68 — qsr — personas[0].solution (Field/Franchise Marketing Manager)
**Current copy:** "Location-aware audience and budget optimization that adjusts spend automatically by market performance signal. Every store's trade area gets a plan shaped by its own traffic patterns and competitive set — and the franchisee conversation starts from their numbers."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace"; §4.2 — approval-gated execution is permanent, not a maturity milestone
**Suggested fix:** "Cross-channel budget optimization that reallocates spend to whatever's converting, with every recommendation reviewed by your team before it ships. Every channel gets a plan shaped by its own performance — and the franchisee conversation starts from real numbers, not the system average."
**Why:** Same location-level and automatic-execution overclaims as solutionRows[0].
**Status:** PENDING REVIEW

### F69 — qsr — personas[1].solution (Director of CRM & Lifecycle)
**Current copy:** "Connects operational data feeds to campaign logic, suppressing or adjusting offers on real-time kitchen and inventory conditions. The push calendar stops promising what the store can't serve."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — "Campaigns, audiences-as-product, and decisions live in the suite apps that consume it"; §7.6 — approval-inbox action loop
**Suggested fix:** "Keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it sends. The push calendar stops promising what the store can't serve."
**Why:** Same campaign-logic-ownership and automation overclaims as solutionRows[1].
**Status:** PENDING REVIEW

### F70 — qsr — personas[2].solution (Director of Media)
**Current copy:** "Ingests external demand signals — weather, events, traffic, competitive promotions — and works with the Campaign Orchestrator to optimize day-part targeting and offer timing across digital and local channels, market by market."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 — send/timing decisions belong to Personalization and Campaign Orchestrator; §9 — no weather/event/traffic data sources listed
**Suggested fix:** "Builds sized, suppressed audiences straight from your CRM and loyalty data in minutes instead of weeks — so day-part campaigns launch from a current segment instead of a stale export, market by market."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].
**Status:** PENDING REVIEW

### F71 — qsr — personas[4].solution (VP Restaurant Marketing / CMO)
**Current copy:** "The location-aware spending engine behind the whole story: budget follows market performance signal, every market's results trace to the decisions that drove them, and the franchisee council sees their stores in the plan — not just the system average."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace"
**Suggested fix:** "The channel-optimization engine behind the whole story: budget follows performance signal, every reallocation traces to the decision that drove it, and the franchisee council sees the reasoning behind the plan — not just the system average."
**Why:** "Location-aware spending engine" restates the location-level capability the PRD scopes as whitespace.
**Status:** PENDING REVIEW

### F72 — qsr — showcase.columns[0] (Campaign Orchestrator)
**Current copy:** "Location-aware budget optimization adjusts spend automatically by market performance signal — so high-variance markets get plans built for their trade area, not the national mean."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — location-level optimization is whitespace; §4.2 — approval-gated execution is permanent
**Suggested fix:** "Budget optimization surfaces where the next dollar performs best across your channel mix — with every reallocation reviewed by your team before spend moves — so high-variance markets stop running on the national mean."
**Why:** Same location-level and automatic-execution overclaims as solutionRows[0].
**Status:** PENDING REVIEW

### F73 — qsr — showcase.columns[1] (Agentic Data Platform)
**Current copy:** "Operational feeds gate campaign logic in real time. When the kitchen is slammed or an item is out, the offer pauses or pivots — before the guest finds out at the counter."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — campaign decisions live in suite apps, not ADP; §7.6 — approval-inbox action loop, not autonomous pausing
**Suggested fix:** "Kana keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it goes out — before the guest finds out at the counter."
**Why:** "Gate campaign logic" and an offer that "pauses or pivots" on its own both overstate ADP's role and its automation level.
**Status:** PENDING REVIEW

### F74 — qsr — showcase.columns[2] (Audience Builder)
**Current copy:** Title: "Day-parts that flex with the weather." Description: "External demand signals — weather, events, traffic, competitor promos — reshape day-part targeting and offer timing across digital and local channels while the demand is still there."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 and §9 (as above)
**Suggested fix:** Title: "Segments that are ready before the moment passes." Description: "Audiences build straight from your CRM and loyalty data in minutes, not weeks — with suppression built in — so day-part campaigns launch from a current segment while the demand is still there."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].
**Status:** PENDING REVIEW

### F75 — qsr — stackShowcase.subtitle
**Current copy:** "Connects to your POS, loyalty platform, ordering system, and ad platforms — Toast, Punchh, Paytronix, Olo, Braze, and more — no rip-and-replace, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1/§7.1 — MVP connectivity is warehouse + 2 live sources (e.g., Salesforce + MAP); §6.2 — broader connector breadth is Backlog #2
**Suggested fix:** "Connects to your warehouse, loyalty platform, ordering system, and ad platforms — no rip-and-replace, no new governance gaps."
**Why:** Naming specific POS/loyalty/ordering vendors as connected states a connector breadth the PRD doesn't yet support.
**Status:** PENDING REVIEW

### F76 — qsr — stackShowcase.columns[0] (Campaign Orchestrator)
**Current copy:** Title: "Give every location its own plan without hiring a planner per market." Description: "Campaign Orchestrator — market performance signals drive location-aware budget and audience optimization across thousands of trade areas. The stores the pooled fund used to leave behind get plans shaped by their own demand."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — location-level optimization is whitespace
**Suggested fix:** Title: "Reallocate budget without hiring a planner per channel." Description: "Campaign Orchestrator — performance signals drive budget reallocation across your channel mix, with every move reviewed by your team before it ships. The channels the pooled fund used to run on autopilot get plans shaped by what's actually converting."
**Why:** Same location-level overclaim as solutionRows[0]; also drops "audience... optimization," which is Audience Builder's job per its own PRD, not Campaign Orchestrator's.
**Status:** PENDING REVIEW

### F77 — qsr — stackShowcase.columns[1] (Agentic Data Platform)
**Current copy:** Title: "Wire the kitchen into campaign logic." Description: "Agentic Data Platform — operational feeds from your POS and ordering systems gate every offer on real-time inventory and kitchen conditions. Marketing and operations stop finding out about each other from guest complaints."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — campaign decisions live in suite apps, not ADP; §6.1 — POS/ordering systems aren't in the documented MVP connector scope
**Suggested fix:** Title: "Keep campaigns honest about what the kitchen can deliver." Description: "Agentic Data Platform — keeps your campaign tools working from the same operational picture as your stores, so offers can be caught and adjusted before they go out. Marketing and operations stop finding out about each other from guest complaints."
**Why:** Same campaign-logic-ownership and unsupported-connector overclaims as solutionRows[1].
**Status:** PENDING REVIEW

### F78 — qsr — stackShowcase.columns[2] (Audience Builder)
**Current copy:** Title: "Target the day-part, not just the demographic." Description: "Audience Builder — external demand signals reshape targeting and offer timing by day-part and market. Proximity, trade area, and time-of-day drive QSR visits; your campaigns finally act like it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 and §9 (as above)
**Suggested fix:** Title: "Build the segment, not just the demographic." Description: "Audience Builder — sized, suppressed segments build straight from your CRM and loyalty data in minutes. Proximity, trade area, and visit timing live in your data; your campaigns finally act on it fast enough to matter."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].
**Status:** PENDING REVIEW

### F79 — travel-hospitality — hero.subheadline
**Current copy:** "Yield management systems optimize price by the hour, and travel marketing can finally keep pace. Kana gives your team real-time competitive rate alerts, loyalty offers tuned to each member in the moment, and guest outreach timed to when someone's actually ready to book again."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "Each monitored signal is a standing research query re-run on a schedule (working cadence: daily; plus manual refresh...)"; Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "Always-on anomaly detection + event triggers | Page #3; batch-only today."
**Suggested fix:** "Yield management systems optimize price by the hour, and travel marketing can finally keep pace. Kana gives your team daily competitive rate alerts, loyalty offers calibrated to each member's tier, and guest outreach timed to when they're actually ready to book again."
**Why:** "Real-time" rate alerts overstate CI's daily monitoring cadence, and "in the moment" overstates Personalization's precomputed/batch decisioning; the "timed to when someone's ready to book" claim itself is fine since it doesn't name a product and timing is a real Personalization capability.
**Status:** PENDING REVIEW

### F80 — travel-hospitality — solutionRows[0] (Personalization)
**Current copy:** title: "Real-time offers for members who earned better than batch" / description: "Personalization monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative: "The engine precomputes six decisions per known customer"; Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent"; White Space Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** title: "Offers calibrated to members who earned better than batch" / description: "Personalization reads loyalty member activity signals and recommends the next offer for each member — channel, content, and timing — for your team to review and send across email, app, and web. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Why:** "Triggers... in real time" implies live, autonomous, event-driven sends; the PRD describes a precomputed/batch decision engine with a mandatory human approval gate before anything reaches a customer.
**Status:** PENDING REVIEW

### F81 — travel-hospitality — solutionRows[1] (Category Intelligence)
**Current copy:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses. When a competitor drops rates on a key route or destination, marketing gets the alert with a suggested play, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "scheduled re-research (working cadence: daily)"; §7.3 alerts spec — alerts fire on "severity jump," "direction flip," or "confidence collapse" and link to "the finding and its citations" — no functional requirement produces messaging or audience recommendations; Non-Goals — "Generative media briefs — unsteerable fresh research... is off-model for a user-driven product."
**Suggested fix:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence runs a daily watch on competitive pricing signals and alerts you the moment something worth acting on shifts, with the cited evidence behind it. When a competitor drops rates on a key route or destination, marketing gets the alert and the sourced findings, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Why:** "Continuously" overstates the daily refresh cadence, and CI doesn't generate "recommended messaging" or "audience responses" — its output is a grounded, cited finding and an alert, not a marketing recommendation.
**Status:** PENDING REVIEW

### F82 — travel-hospitality — solutionRows[2] (Audience Builder)
**Current copy:** title: "Re-engage on the guest's booking window, not the calendar" / description: "Audience Builder works together with the Campaign Orchestrator to identify re-engagement windows based on behavioral signals and support personalized outreach. Win-back and anniversary campaigns stop firing on fixed schedules and start landing when a guest's next booking window is actually opening, informed by travel intent signals and membership tier dynamics."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Propensity/lookalike models on real data (see White Space Backlog)"; White Space Backlog #1: "Propensity / lookalike models on real data | Synthetic only today"; Non-Goals: "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator." Timing decisions belong to Personalization per Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1: "Precompute per-customer decisions (channel..., content, offer..., time, day, frequency)."
**Suggested fix:** title: "Build the guest list that's actually worth re-engaging" / description: "Audience Builder builds precise, suppressed guest segments — lapsed loyalty members, recent cancellations, high-value repeat bookers — straight from your CRM, loyalty, and booking data, then hands them to Personalization and Campaign Orchestrator to act on. Win-back and anniversary lists stop being static exports and start reflecting exactly who's eligible to hear from you today."
**Why:** Identifying a guest's timing/re-engagement window is a Personalization capability per the PRDs; on real customer data, AB's propensity/timing modeling is an explicit, not-yet-built backlog item. AB's actual job is audience definition and suppression, not timing.
**Status:** PENDING REVIEW

### F83 — travel-hospitality — solutionRows[3] (Campaign Orchestrator)
**Current copy:** title: "Outreach triggered at the optimal moment" / description: "The Campaign Orchestrator works together with the Audience Builder to use behavioral insights and trigger personalized outreach at the optimal moment, across email, app, and paid channels. The post-stay sequence stops running on checkout-plus-seven timers and starts responding to what each guest actually signals."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Executive Summary: "the marketer side needs buy-side jobs: in-flight spend optimization across channels, drift detection, and a testing loop"; Non-Goals: "Not the planning tool... CO operates strictly in-flight"; White Space Backlog #4: "Real-time operational triggers (inventory/kitchen signals) ... TBD" (not yet built).
**Suggested fix:** title: "Catch budget drift before it costs you the flight" / description: "Campaign Orchestrator watches your live campaign spend across channels, flags when a channel drifts from the brief or stops earning its keep, and proposes a reallocation for your approval. No more finding out at the monthly readout that a channel drained budget for two weeks straight."
**Why:** The PRD scopes Campaign Orchestrator as a cross-channel ad-spend optimization and drift-detection tool (MMM/marginal-ROAS engine), not a guest-level lifecycle-messaging trigger system; per-guest send timing (e.g., a post-stay sequence) is a Personalization decision, and real-time operational triggers are explicitly backlog.
**Status:** PENDING REVIEW

### F84 — travel-hospitality — faq[1] ("How does Personalization decide which offer to send a loyalty member?")
**Current copy:** "It reads real-time activity signals (browsing, app opens, recent stays, tier status) and matches them against contextually relevant offers, so a top-tier member and a first-time subscriber never get the same email. Every offer runs within your loyalty program's existing rules and approval workflow."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative: "The engine precomputes six decisions per known customer"; White Space Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "It reads recent activity signals (browsing, app opens, recent stays, tier status) and matches them against the offer most likely to earn a response, so a top-tier member and a first-time subscriber never get the same email. Every offer runs within your loyalty program's existing rules and approval workflow."
**Why:** "Real-time" repeats the same batch-vs-live mismatch flagged in solutionRows[0]; the approval-workflow sentence is accurate and untouched.
**Status:** PENDING REVIEW

### F85 — travel-hospitality — faq[2] ("How is Personalization different from Audience Builder and Campaign Orchestrator?")
**Current copy:** "Audience Builder and Campaign Orchestrator decide who to reach and when a guest's re-engagement window is actually open. Personalization decides what to offer them once they're there, calibrated to the member, the moment, and the tier. Most teams run all three together."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1: "Precompute per-customer decisions (channel incl. no-contact, content, offer via net-revenue model, time, day, frequency)" — timing ("time, day") is a Personalization decision, not an AB/CO one. Kana_PRD_Marketers_Campaign_Orchestrator_v2.md Executive Summary confirms CO's job is in-flight spend optimization, not guest-level timing.
**Suggested fix:** "Audience Builder decides who to reach — precise, suppressed guest segments built from your CRM, loyalty, and booking data. Personalization decides what to offer and when, calibrated to the member, the moment, and the tier. Campaign Orchestrator keeps the ad spend behind those campaigns on track. Most teams run all three together."
**Why:** This FAQ states the product division of labor directly, and it's backwards on timing: the PRDs put "when" inside Personalization's six-decision engine, not Audience Builder or Campaign Orchestrator.
**Status:** PENDING REVIEW

### F86 — travel-hospitality — faq[3] ("How fast can a travel or hospitality team get live on Kana?")
**Current copy:** "Most travel and hospitality teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources and configuring Personalization and Category Intelligence to your loyalty and rate data. Audience Builder and Campaign Orchestrator layer in once those core connections are stable. Kana's solutions team works with you throughout."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals: "Internal company data ingestion — the 'data plane' layer stays out of v1"; §8.1: "PII/PHI handling: minimal by design — no internal company data... Public sources only via the curated catalog."
**Suggested fix:** "Most travel and hospitality teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources, configuring Personalization on your loyalty data and Category Intelligence on the competitive rate topics you want watched. Audience Builder and Campaign Orchestrator layer in once those core connections are stable. Kana's solutions team works with you throughout."
**Why:** "Configuring Category Intelligence to your... rate data" reads as CI ingesting the hotel's own internal rate data, which the PRD explicitly rules out for v1 (public sources only); CI should be described as watching external/competitive rate topics, not internal data.
**Status:** PENDING REVIEW

### F87 — travel-hospitality — faq[0] ("How does Kana connect to our hospitality stack?")
**Current copy:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** None of the four PRDs give an implementation timeline; they describe warehouse/connector-registry integration patterns generically (e.g., Kana_PRD_Marketers_Audience_Builder_v2.md §9: "CRM + loyalty + POS (warehouse-resident) | Customer warehouse | Via shared-core connection") without a named vendor list or a setup-duration figure.
**Suggested fix:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, with timelines depending on how many systems you're connecting."
**Why:** The "no rip-and-replace, no migration" architecture claim is consistent with the PRDs' by-reference/warehouse-consumption pattern and is left untouched; the specific "2–4 weeks" figure isn't sourced in any PRD and risks being a hard commitment nobody can back up.
**Status:** PENDING REVIEW

### F88 — travel-hospitality — personas[0] (Marketing Automation Manager) — solution
**Current copy:** "Works together with Audience Builder to trigger personalized outreach at the optimal moment, across email, app, and paid channels, instead of a fixed post-stay timer. One system replaces the manual handoff between channels for a single guest journey."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md Executive Summary and §7.1–7.4 (spend ingestion, MMM optimization engine, drift/alerts, testing loop) — no functional requirement covers per-guest post-stay message timing.
**Suggested fix:** "Watches your live campaign spend across channels and flags when a channel drifts from the brief or stops earning its keep, proposing a reallocation for your approval instead of waiting for the weekly report. One system replaces the manual channel-by-channel spend review."
**Why:** Same mismatch as solutionRows[3] — this restates Campaign Orchestrator as a guest-messaging trigger system rather than a spend-optimization and drift-detection tool.
**Status:** PENDING REVIEW

### F89 — travel-hospitality — personas[1] (E-Commerce / Digital Strategy Manager) — solution
**Current copy:** "Monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses, so marketing reacts in the same news cycle as the rate change, not the one after."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "scheduled re-research (working cadence: daily)"; no functional requirement produces messaging/audience recommendations.
**Suggested fix:** "Runs a daily watch on competitive pricing signals and surfaces alerts with the cited evidence behind them, so marketing reacts in the same news cycle as the rate change, not the one after."
**Why:** Same "continuous" + "recommended messaging and audience responses" overclaim as solutionRows[1].
**Status:** PENDING REVIEW

### F90 — travel-hospitality — personas[2] (Lifecycle Marketing Manager) — solution
**Current copy:** "Works with the Campaign Orchestrator to identify each guest's real re-engagement window from behavioral signals, and trigger personalized outreach at the optimal moment, not the scheduled one."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1: "Propensity / lookalike models on real data | Synthetic only today"; timing belongs to Personalization per Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1.
**Suggested fix:** "Builds precise, suppressed guest segments from behavioral and loyalty signals, then hands them to Personalization and Campaign Orchestrator to act on — so outreach targets who's actually eligible today, not a static scheduled list."
**Why:** Same AB/CO timing misattribution as solutionRows[2].
**Status:** PENDING REVIEW

### F91 — travel-hospitality — personas[3] (Head of Loyalty) — solution
**Current copy:** "Monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time, calibrated to the member, the moment, and the tier. Built on the Audience Builder foundation, so it activates on data teams already have flowing."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative ("precomputes six decisions"); White Space Backlog #2 ("batch-only today"). No PRD states Personalization is "built on the Audience Builder foundation" — the only cross-product reuse named is a shared identity-graph substrate (§9: "Kana-CDP substrate... reuse instead of building"), not an Audience Builder dependency.
**Suggested fix:** "Turns loyalty member activity into a next-best offer for each member — channel, content, and timing calibrated to who they are and where they are in the relationship — routed through your team's approval before it reaches anyone. It runs on the CRM and loyalty data you already have connected."
**Why:** Beyond the repeated real-time overclaim, "Built on the Audience Builder foundation" is an unsupported internal-architecture claim that also violates the outcome-not-mechanism guidance — it describes plumbing, not a result the guest or marketer experiences.
**Status:** PENDING REVIEW

### F92 — travel-hospitality — personas[4] (VP Commercial / Director of Marketing) — solution
**Current copy:** "The platform anchor: real-time, tier-aware offers that turn the loyalty program's existing guest data into an active growth channel, not a once-a-quarter batch send. 'AI-personalized' becomes something the guest actually experiences, not just a board slide."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "batch-only today."
**Suggested fix:** "The platform anchor: tier-aware offer recommendations that turn the loyalty program's existing guest data into an active growth channel, not a once-a-quarter batch send. 'AI-personalized' becomes something the guest actually experiences, not just a board slide."
**Why:** Only "real-time" needs to go; "not a once-a-quarter batch send" is still an accurate contrast since the engine runs far more often than quarterly.
**Status:** PENDING REVIEW

### F93 — travel-hospitality — showcase.columns[0] (Personalization)
**Current copy:** title: "Offers tuned to the guest, not the segment" / description: "Real-time loyalty signals feed straight into the offer a guest sees, so your highest-tier member and a first-time subscriber never get the same email."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Never contacts a customer without human approval"; White Space Backlog #2 ("batch-only today").
**Suggested fix:** "Loyalty signals feed straight into the next offer we recommend for a guest, so your highest-tier member and a first-time subscriber never get the same email."
**Why:** "Real-time" repeats the batch/precompute mismatch, and "the offer a guest sees" implies automatic serving without the mandatory approval step the PRD requires.
**Status:** PENDING REVIEW

### F94 — travel-hospitality — showcase.columns[1] (Category Intelligence)
**Current copy:** title: "Answer the rate drop the same day" / description: "Continuous competitive-rate monitoring with recommended messaging and audience responses, so marketing hears it from the signal, not from sales."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "working cadence: daily"; no messaging/audience-recommendation functional requirement.
**Suggested fix:** "Daily competitive-rate monitoring with cited alerts on exactly what moved, so marketing hears it from the signal, not from sales."
**Why:** Same "continuous" + "recommended messaging and audience responses" overclaim as solutionRows[1]; note the column's own title ("the same day") is already consistent with a daily cadence — only the description overclaims.
**Status:** PENDING REVIEW

### F95 — travel-hospitality — showcase.columns[2] (Audience Builder)
**Current copy:** title: "Catch the booking window while it's open" / description: "Behavioral signals reveal when each guest's next trip is forming, so win-back and anniversary outreach lands in the booking window, not on the calendar date."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today."
**Suggested fix:** title: "Build the list, not just the calendar" / description: "Guest segments build directly from your CRM and loyalty data — lapsed members, recent cancellations, high-value repeat bookers — so win-back and anniversary outreach reflects who's actually eligible, not a static calendar export."
**Why:** Same AB timing misattribution as solutionRows[2]; this column is explicitly linked to Audience Builder ("Learn more about Audience Builder").
**Status:** PENDING REVIEW

### F96 — travel-hospitality — stackShowcase.subtitle
**Current copy:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** All three marketer PRDs mark governance as unfinished in §8: Kana_PRD_Marketers_Audience_Builder_v2.md — "Data Governance & Retention | Backlog | —"; Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — "Data Governance & Retention | Backlog | —"; Kana_PRD_Marketers_Personalization_at_Scale_v2.md — "Data Governance & Retention | Backlog | Decision/feature retention TBD."
**Suggested fix:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration."
**Why:** "No new governance gaps" is a flat guarantee the PRDs themselves don't back — each one lists data governance and retention as an open backlog item, not a solved one. The rest of the sentence ("no rip-and-replace, no migration") matches the by-reference architecture described throughout the PRDs and is left untouched.
**Status:** PENDING REVIEW

### F97 — travel-hospitality — stackShowcase.columns[0] (Personalization)
**Current copy:** title: "Turn the loyalty database into a live channel" / description: "Personalization: monitors member activity signals and triggers contextually relevant offers across email, app, and web in real time, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "batch-only today"; Non-Goals — mandatory human approval gate.
**Suggested fix:** "Personalization: reads member activity signals and recommends the next offer for each member across email, app, and web, for your team to approve and send, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Why:** Same real-time/approval-gate overclaim as solutionRows[0] and showcase.columns[0].
**Status:** PENDING REVIEW

### F98 — travel-hospitality — stackShowcase.columns[1] (Category Intelligence)
**Current copy:** title: "Give marketing its own rate shopper" / description: "Category Intelligence: continuous competitive-rate monitoring that answers with marketing moves: the alert, the recommended message, and the audience to send it to, in one motion."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "working cadence: daily"; no messaging/audience-recommendation functional requirement.
**Suggested fix:** "Category Intelligence: daily competitive-rate monitoring that surfaces the alert and the cited evidence behind it, so marketing acts on the signal instead of waiting for the secondhand version."
**Why:** Same "continuous" + "recommended message... and the audience to send it to" overclaim as solutionRows[1] — this is the most explicit version of the unsupported messaging/audience-targeting claim on the page.
**Status:** PENDING REVIEW

### F99 — travel-hospitality — stackShowcase.columns[2] (Audience Builder)
**Current copy:** title: "Time every journey to the guest, not the template" / description: "Audience Builder: behavioral re-engagement windows replace fixed post-stay timers, so the guests who rebook at 33% through your CRM hear from you when their next trip is forming."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today."
**Suggested fix:** title: "Build the segment the guest actually belongs in" / description: "Audience Builder: precise, suppressed guest segments replace static post-stay lists, so the guests who rebook at 33% through your CRM are the ones your campaigns are actually built around."
**Why:** Same AB timing misattribution as solutionRows[2] and showcase.columns[2] — "behavioral re-engagement windows" is a timing capability the PRD scopes to Personalization (built), not Audience Builder (backlog on real data).
**Status:** PENDING REVIEW

### F100 — media-advertisers — solutions[1] (Audience Builder, main solution row)
**Current copy:** "Audience Builder identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe. Sequences stop launching 30–60 days after the cancel, when intent to return has collapsed, and start reaching each cohort in the days when a comeback is actually likely."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Non-Goals: "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator." Also Theme "Rule-based cross-sell": "Propensity/timing/channel prediction absent"; White Space Backlog #1: "Propensity / lookalike models on real data... Synthetic only today."
**Suggested fix:** "Audience Builder builds and activates the lapsed-subscriber segment in minutes, not the usual 30–60-day lag, with recent purchasers and opt-outs suppressed automatically. Cohorts stop waiting on a data-team ticket and start reaching the door while intent to come back is still there."
**Why:** AB doesn't model an "optimal window" or trigger the offer send — that's flagged as backlog/synthetic-only and explicitly out of scope per AB's non-goals.
**Status:** PENDING REVIEW

### F101 — media-advertisers — painPoints[1] (win-back resolution, Audience Builder)
**Current copy:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder times the outreach to launch inside that window instead of the typical 30–60 days post-churn."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same Non-Goals citation as above; timing/send decisions are out of AB's scope.
**Suggested fix:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder builds and activates that segment in minutes instead of the typical 30–60-day lag, so the ask can go out while the window's still open."
**Why:** Same as above — AB doesn't "time the outreach"; it builds/activates the audience quickly, which is the PRD-supported claim.
**Status:** PENDING REVIEW

### F102 — media-advertisers — personas[1] (Growth Marketing Manager, Win-Back) — solution
**Current copy:** "Identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe, often the first seven days, not the second month."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Non-Goals, "not a campaign or messaging tool"; White Space Backlog #1 (propensity/timing "synthetic only today").
**Suggested fix:** "Builds and activates the lapsed-subscriber segment by cohort in minutes, with recent purchasers and opt-outs suppressed automatically, so outreach can go out in the first seven days instead of the second month."
**Why:** Same timing/trigger overclaim as solutions[1].
**Status:** PENDING REVIEW

### F103 — media-advertisers — showcase.columns[1] (Audience Builder)
**Current copy:** "Optimal win-back windows identified per cohort, with personalized re-engagement offers triggered inside the highest-conversion timeframe, days after the cancel, not months."
**Verdict:** OVERCLAIM
**PRD citation:** Same as above.
**Suggested fix:** "Lapsed-subscriber segments built and activated per cohort in minutes, suppression logic built in, so outreach can launch days after the cancel, not months."
**Why:** Same timing/trigger overclaim.
**Status:** PENDING REVIEW

### F104 — media-advertisers — stackShowcase.columns[1] (Audience Builder)
**Current copy:** "Audience Builder: behavioral signals identify when each subscriber cohort is most likely to return, and re-engagement offers fire inside that window instead of on the 60-day timer."
**Verdict:** OVERCLAIM
**PRD citation:** Same as above.
**Suggested fix:** "Audience Builder: build and activate the lapsed-subscriber segment by cohort in minutes, suppression built in, so re-engagement can launch days after the cancel instead of on the 60-day timer."
**Why:** Same timing/trigger overclaim.
**Status:** PENDING REVIEW

### F105 — media-advertisers — solutions[0] (Personalization, main solution row)
**Current copy:** Title: "Recommendations that know what they watched last night" / Description: "Personalization incorporates recency-weighted behavioral signals directly into your recommendation logic, so every subscriber sees content matched to what they engaged with most recently, not a static profile from months ago. Session depth goes up, dormancy goes down, and the engine keeps learning with every session instead of waiting for the next model refresh."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Not a marketing automation platform... Personalization decides and hands off." Exec Summary: "per-customer next-best-action decisions (channel, content, offer, time, day, frequency)" — "content" is the marketing/campaign content decision, not the platform's content-recommendation logic. White Space Backlog #2: "Always-on anomaly detection + event triggers... batch-only today," directly contradicting "learns with every session."
**Suggested fix:** Title: "Retention offers that know what they watched last night" / Description: "Personalization scores every subscriber's churn risk from recency-weighted behavioral signals and decides the next offer, channel, and moment to reach them, not a static profile from months ago. Every decision comes with a plain-language reason, and nothing goes out without your team's approval."
**Why:** Personalization is a retention-decisioning engine, not an integration into the platform's own content-recommendation logic, and it's batch-only today, not continuously learning per session.
**Status:** PENDING REVIEW

### F106 — media-advertisers — faq ("Does Personalization replace our existing recommendation engine?")
**Current copy:** Q: "Does Personalization replace our existing recommendation engine?" / A: "No, it strengthens it. Personalization layers recency-weighted behavioral signals on top of whatever recommendation logic you already run, so the existing engine gets sharper instead of replaced. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Not a marketing automation platform... Personalization decides and hands off"; "Not an audience tool... Personalization decides per-customer actions within those audiences."
**Suggested fix:** Q: "Does Personalization replace our lifecycle or retention marketing tools?" / A: "No, it strengthens them. Personalization scores churn risk and decides the next offer, channel, and send time from recency-weighted behavioral signals, then hands off to whatever marketing platform you already send from. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Why:** The premise (Personalization touches the content-recommendation engine) isn't supported; it hands decisions off to the marketing send platform, not the rec engine.
**Status:** PENDING REVIEW

### F107 — media-advertisers — faq ("How is Personalization different from Audience Builder?")
**Current copy:** "Audience Builder decides who to reach and when their re-engagement window is actually open. Personalization decides what to show them once they're back, recommendations weighted to what they've watched or read most recently. Most teams run both together: Audience Builder times the outreach, Personalization makes the content in it worth returning for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md Non-Goals ("not a campaign or messaging tool... send decisions belong to Personalization and Campaign Orchestrator"); Kana_PRD_Marketers_Personalization_at_Scale_v2.md Non-Goals ("not an audience tool").
**Suggested fix:** "Audience Builder builds and activates the audience: who's lapsed, who's suppressed, who's ready for outreach. Personalization decides what happens next for each of them — the offer, channel, and moment most likely to bring them back — weighted to what they've done most recently. Most teams run both together: Audience Builder gets the list built and activated fast, Personalization decides what each person on it sees."
**Why:** AB doesn't decide the re-engagement window (timing is out of scope per AB's non-goals); reassigns the timing claim to where the PRDs actually place it.
**Status:** PENDING REVIEW

### F108 — media-advertisers — personas[3] (Head of Product, Recommendations) — solution
**Current copy:** "Incorporates recency-weighted behavioral signals into content recommendation logic, increasing session depth and reducing subscriber dormancy. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same Non-Goals citation as solutions[0]; success metrics are retention lift / margin saved / at-risk lead time, not session depth.
**Suggested fix:** "Scores churn risk and decides the next offer, channel, and moment from recency-weighted behavioral signals instead of a stale profile, with a reason behind every decision. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Why:** Same recommendation-logic overclaim; "session depth" isn't a PRD-supported metric for this product.
**Status:** PENDING REVIEW

### F109 — media-advertisers — personas[4] (CMO / Head of Subscriber Growth) — solution
**Current copy:** "The platform anchor: recency-weighted recommendations that keep every subscriber's experience current with what they're actually watching or reading, not a profile that's months stale. Retention and growth both run through the same signal."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "The platform anchor: recency-weighted retention decisions that stay current with what each subscriber is actually doing, not a profile that's months stale. Retention and growth both run through the same signal."
**Why:** Same recommendation-logic overclaim.
**Status:** PENDING REVIEW

### F110 — media-advertisers — showcase.columns[0] (Personalization)
**Current copy:** "Recency-weighted signals feed straight into your recommendation logic, so what a subscriber sees matches what they engaged with recently, not a profile trained months ago."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "Recency-weighted signals feed straight into every retention decision, so the offer and channel match what a subscriber engaged with recently, not a profile trained months ago."
**Why:** Same recommendation-logic overclaim.
**Status:** PENDING REVIEW

### F111 — media-advertisers — stackShowcase.columns[0] (Personalization)
**Current copy:** "Personalization: recency-weighted signals feed straight into your existing recommendation engine, so what a subscriber sees reflects what they did this week, not a profile trained months ago."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "Personalization: recency-weighted signals feed straight into every retention decision, so the offer a subscriber gets reflects what they did this week, not a profile trained months ago."
**Why:** Same recommendation-logic overclaim.
**Status:** PENDING REVIEW

### F112 — media-advertisers — stats[1] (77% churn stat)
**Current copy:** { number: "77%", label: "of streaming subscribers aren't serial churners — personalization decides who avoids joining the other 23% (Antenna)" }
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Success Metrics table: "Retention lift on approved interventions | TBD | Treated-vs-control measurement." No proven-outcome claim exists yet to support "personalization decides who avoids" churn.
**Suggested fix:** { number: "77%", label: "of streaming subscribers aren't serial churners — the other 23% are exactly who a sharper win-back and retention motion is built to reach (Antenna)" }
**Why:** Retention lift is an unmeasured (TBD) metric in the PRD; the causal "decides who avoids" framing overstates proven efficacy.
**Status:** PENDING REVIEW

### F113 — media-advertisers — solutions[2] (Campaign Orchestrator, main solution row)
**Current copy:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to days."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Success Metrics: "Test cycle time | Months → weeks | Partner workflow audit."
**Suggested fix:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to weeks."
**Why:** The PRD's own MVP target is months-to-weeks, not months-to-days.
**Status:** PENDING REVIEW

### F114 — media-advertisers — showcase.columns[2] (Campaign Orchestrator)
**Current copy:** Title: "Run the pricing test in days, not quarters"
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[2] — "Test cycle time: Months → weeks."
**Suggested fix:** "Run the pricing test in weeks, not quarters"
**Why:** Same magnitude mismatch — PRD target is weeks, not days.
**Status:** PENDING REVIEW

### F115 — media-networks — solutions[0] (Sales Intelligence — title + description)
**Current copy:** "Closed-loop proof your advertisers' analytics teams can't pick apart" / "Sales Intelligence integrates campaign delivery data with your transaction signals continuously, generating closed-loop attribution reporting your sales and account teams can use to defend and grow brand budgets in real time. Instead of a bespoke SQL join per wrap report, the impression-to-purchase connection is always on — so the ROAS number you present at the QBR is the one that survives the client's methodology questions and grows the JBP instead of shrinking it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — "This is the least-built app in the suite... the largest components are whitespace." §4.2 Non-Goals is silent on closed-loop (it's not even a non-goal, it's just absent from scope); §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP (see White Space Backlog)." §10 Backlog #2: "Closed-loop advertiser ROI attribution (exposure ↔ outcome) | kana.ai Web page; nothing in code | High | XL | TBD." §4.1 Goals: "Agree the delivery-data handoff spec with Campaign Orchestrator... so the future advertiser-ROI reporting can be built without re-plumbing — spec only in MVP, no pipeline."
**Suggested fix:** "Account intelligence your advertisers' analytics teams can't out-argue" / "Sales Intelligence arms your account teams with a source-verified brief on every advertiser — spend signals, category context, and prior campaign history — plus a win-likelihood score grounded in your network's own proposal outcomes. Instead of walking into the QBR with a hand-built deck, your team walks in with the account intelligence that defends the budget and sets up the next ask."
**Why:** The PRD is explicit that closed-loop delivery-to-transaction attribution is not built and is data-contract-only in MVP; the actual MVP capabilities are advertiser research briefs and win-likelihood scoring, which the fix uses instead.
**Status:** PENDING REVIEW

### F116 — media-networks — faq[1] ("How does Sales Intelligence produce closed-loop reporting?")
**Current copy:** Q: "How does Sales Intelligence produce closed-loop reporting?" A: "It integrates campaign delivery data with your transaction signals continuously, rather than joining them per campaign in a clean room or SQL project. That means attribution reporting is available in real time across every campaign — the same numbers for your account managers' QBR decks, your sellers' renewal conversations, and your advertisers' analytics teams."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP." §12.3 Open Question: "What exactly does the suite page's 'closed-loop attribution' commit us to for v1?" (i.e., still unresolved at PRD sign-off).
**Suggested fix:** Q: "How does Sales Intelligence help my team defend budgets at the QBR?" A: "It builds a source-verified brief on every advertiser — spend signals, category context, and history with your network — and scores each opportunity against your own win/loss record. Your account managers walk into the QBR with the same grounded numbers your sellers use in renewal conversations, instead of a deck assembled by hand the night before."
**Why:** The FAQ's premise (closed-loop delivery-to-transaction reporting exists today) is the same unsupported claim as the solutionRow; the fix answers the underlying seller need (defensible QBR numbers) using capabilities the PRD actually confirms.
**Status:** PENDING REVIEW

### F117 — media-networks — personas[0] (Head of Retail Media) — solution.description
**Current copy:** "Continuous closed-loop attribution that connects delivery to transactions in real time — defensible numbers for every renewal, QBR, and JBP negotiation, without a measurement project per advertiser."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "A source-verified advertiser brief and win-likelihood score for every account — defensible intelligence for every renewal, QBR, and JBP negotiation, without a research project per advertiser."
**Why:** Same closed-loop overclaim; replacement swaps in the research-brief and win-likelihood scoring capabilities the PRD confirms as MVP scope.
**Status:** PENDING REVIEW

### F118 — media-networks — showcase.columns[0] ("Prove it while they're still deciding")
**Current copy:** "Closed-loop attribution that runs continuously across every campaign — so account teams walk into QBRs with numbers that hold up, and renewals grow instead of shrink."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "Account intelligence and win-likelihood scoring built from your own proposal history — so account teams walk into QBRs with numbers that hold up, and renewals grow instead of shrink."
**Why:** Same closed-loop overclaim as the other four instances of this claim on the page.
**Status:** PENDING REVIEW

### F119 — media-networks — stackShowcase.columns[0] ("Turn transaction data into a renewal weapon")
**Current copy:** "Sales Intelligence — delivery data joined to purchase signals continuously, not per campaign. Closed-loop reporting becomes something your network is known for, not something your analysts survive."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "Turn account intelligence into a renewal weapon" / "Sales Intelligence — a verified brief and win-likelihood score on every advertiser, built from your own history. Renewal season becomes something your network is known for, not something your analysts survive."
**Why:** Fifth and last instance of the closed-loop overclaim; title changed too since "transaction data...joined" restates the same unsupported mechanism.
**Status:** PENDING REVIEW

### F120 — media-networks — solutions[2] (Audience Builder — description, second sentence)
**Current copy:** "Audience Builder unifies first-party signals across all of your retail touchpoints into a coherent, activatable audience layer — premium packaging and precision targeting without a data engineering project per deal."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today." §10 Backlog #3 confirms real cross-device/cross-property identity resolution doesn't exist yet in AB (an adjacent product's resolver is cited as a future adoption candidate). §4.2 Non-Goals: "Not a CDP/DMP or system of record... we are not replacing their data infrastructure."
**Suggested fix:** "Audience Builder turns a plain-language brief into a precise, sized, activatable segment in minutes — premium packaging and precision targeting without a data engineering project per deal."
**Why:** AB queries whatever first-party data a publisher has already connected; it does not itself perform the cross-property stitching that "unifies... across all touchpoints" implies, which the PRD lists as explicitly out of scope.
**Status:** PENDING REVIEW

### F121 — media-networks — personas[3] (Audience & Measurement Lead) — solution.description
**Current copy:** "Unifies first-party signals across all retail touchpoints into one activatable audience layer, so premium audience packages are assembled from a coherent foundation instead of stitched per deal."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Turns a plain-language brief into a precise, sized, activatable segment against your first-party data in minutes, so premium audience packages are assembled without a data-engineering queue instead of stitched per deal."
**Why:** Same cross-touchpoint unification overclaim; replacement keeps the "no data-engineering queue" benefit the PRD does support.
**Status:** PENDING REVIEW

### F122 — media-networks — showcase.columns[2] ("Package audiences advertisers can't get anywhere else")
**Current copy:** "Purchase-linked, loyalty-verified segments unified across e-commerce, in-store, and app — the audience quality that justifies premium CPMs, without the data engineering queue."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Purchase-linked, loyalty-verified segments built from your first-party data in minutes, fully traceable back to the brief that shaped them — the audience quality that justifies premium CPMs, without the data engineering queue."
**Why:** Same overclaim; replacement substitutes the PRD-confirmed traceability/speed benefits (brief → sized, explorable segment in under 15 minutes, permanently traceable) for the unsupported cross-touchpoint unification claim.
**Status:** PENDING REVIEW

### F123 — media-networks — solutions[3] (Campaign Orchestrator — description)
**Current copy:** "Campaign Orchestrator automates campaign pacing, delivery monitoring, and performance reporting across your onsite and offsite campaigns, giving your ops team real-time visibility into every campaign in flight without the manual overhead."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — three separate contradictions: (1) autonomy — §4.2 Non-Goals: "Never fully autonomous... Unattended write-back to a customer's ad server is a permanent trust boundary"; §6.2 Out of Scope: "Auto delivery adjustment / GAM write-back — recommend-only in MVP (reason: safety + trust; no write scaffolding exists)." (2) real-time — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value"; success metric is "≤24h," not real-time. (3) onsite/offsite — §8 Integrations: "MVP (GAM only)"; §6.2 Out of Scope: "Non-GAM connectors and non-display formats." The PRD's own Risk register (§12.2) flags this exact gap: "Website promises auto-adjustment + real-time that MVP doesn't deliver → sales/expectation mismatch."
**Suggested fix:** "Campaign Orchestrator monitors delivery pacing across your campaigns and flags what's at risk before it becomes a miss, giving your ops team a daily view of exceptions instead of a portfolio of dashboards to check by hand."
**Why:** "Automates pacing," "real-time," and "onsite and offsite" each claim a capability the PRD explicitly excludes (autonomous write-back, real-time ingestion, and non-GAM/offsite coverage); the PRD itself flags this as the page's biggest expectation-mismatch risk.
**Status:** PENDING REVIEW

### F124 — media-networks — personas[2] (Ad Operations / Campaign Manager) — solution.description
**Current copy:** "Automated pacing, delivery monitoring, and reporting across every campaign in flight. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §4.2 Non-Goals: "Never fully autonomous"; §6.1 MVP Scope confirms pacing is computed and flagged, not adjusted ("Recommended actions with the human executing in GAM").
**Suggested fix:** "Pacing risk flagged and explained across every campaign in flight, with reporting handled for you. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Why:** "Automated pacing" reads as Kana adjusting delivery itself; the PRD's guardrail is recommend-only, human-executed.
**Status:** PENDING REVIEW

### F125 — media-networks — showcase.columns[1] ("Run a hundred campaigns with the team you have")
**Current copy:** "Pacing, delivery, and reporting handled by agents across onsite and offsite — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §4.2 Non-Goals: "Never fully autonomous"; §8: "Integrations & Interoperability | MVP (GAM only)."
**Suggested fix:** "Pacing risk flagged and explained daily, with reporting handled for you — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Why:** "Handled by agents" implies autonomous execution (recommend-only per PRD), and "onsite and offsite" implies coverage beyond the GAM-only MVP.
**Status:** PENDING REVIEW

### F126 — media-networks — stackShowcase.columns[1] ("Get campaign ops out of Excel")
**Current copy:** "Campaign Orchestrator — media planning, pacing, and performance reporting connected to the systems that deliver the campaigns, so co-op budgets and shopper programs stop living in disconnected spreadsheets."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §9 Data Requirements lists only GAM delivery/orders/line-items/forecasts and pacing thresholds; there is no co-op budget, shopper-program, or media-planning data asset anywhere in the PRD's scope, data requirements, or functional requirements.
**Suggested fix:** "Campaign Orchestrator — pacing risk, delivery monitoring, and performance reporting connected to the systems that deliver your campaigns, so the daily portfolio check stops living in disconnected spreadsheets."
**Why:** "Media planning," "co-op budgets," and "shopper programs" are retail-media-specific concepts absent from CO's GAM-scoped data requirements and functional scope; the fix keeps the "out of spreadsheets" benefit without naming unsupported capabilities.
**Status:** PENDING REVIEW

### F127 — media-networks — solutions[4] (LLM Command Center — roleLabel + title + description) — PRODUCT/PRD MISMATCH
**Current copy:** roleLabel: "Built for Revenue & Brand-Safety Leads" / title: "Brand safety and AI discovery, managed instead of hoped for" / description: "Brand advertisers increasingly scrutinize contextual adjacency and how their brands appear in AI answer environments — and AI platforms are on track for $20.9 billion in retail spending in 2026. The LLM Command Center monitors brand-safe inventory signals and tracks how advertiser and publisher brands appear across AI-generated content environments, turning a governance risk into a competitive differentiator you can put in front of buyers."
**Verdict:** OVERCLAIM (product/PRD mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — §4.2 Non-Goals, first bullet: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." LLM Command Center's actual scope (§1, §6.1): a bot-intelligence dashboard on real crawler traffic, plain-English tiered content-access policies (Full/Summary/Highlights/Deny) authored conversationally, edge enforcement of those policies, and consumption reporting used as licensing-negotiation evidence. Persona is "Content Ops / Data Governance Lead" / "Chief Digital Officer / Head of Content Strategy" (§5), not a brand-safety role.
**Suggested fix:** roleLabel: "Built for Content Ops & Revenue Leads" / title: "AI crawlers are already reading your content. Decide what they get." / description: "47+ AI bots crawl your properties around the clock, and today the choice is all-or-nothing — robots.txt either hands them everything or blocks them outright. The LLM Command Center gives you plain-English, per-section policies — full access, summary, highlights, or deny, by bot and by property — plus the consumption reporting you need to bring a licensing conversation to the table instead of giving your content away for free."
**Why:** The current copy describes AEO2 (the brand-side product that tracks how brands appear inside AI answers), which the LLM Command Center PRD explicitly disclaims as a different product's job — this is exactly the named-product/wrong-capability mismatch pattern flagged for review, just on a different card than the two previously caught.
**Status:** PENDING REVIEW

### F128 — print-digital-audio — solutions[0].description (Audience Builder)
**Current copy:** "Audience Builder helps your team build, enrich, and activate first-party audience data as a product — precise audience packaging for direct-sold campaigns without a data engineering overhaul. Segments are built in plain language and trace from brief to activation, so the deals your data was supposed to close stop waiting in an engineering queue."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — Non-Goals: "Not a CDP/DMP or system of record. Audience Builder reads the publisher's warehouse and stores only definitions and derived segments." Out of Scope: "Live ad-platform activation APIs (Meta/TikTok/etc.) — simulated today in both sources." White Space Backlog #1 lists live activation as unbuilt.
**Suggested fix:** "Audience Builder helps your team build, enrich, and package first-party audience data as a product — precise audience packaging for direct-sold campaigns without a data engineering overhaul. Segments are built in plain language and trace from brief to proposal, so the deals your data was supposed to close stop waiting in an engineering queue."
**Why:** "Activate" implies live push into ad platforms, which the PRD explicitly scopes as simulated/backlog, not an MVP capability.
**Status:** PENDING REVIEW

### F129 — print-digital-audio — personas[0].solution.description (Audience Builder)
**Current copy:** "Build, enrich, and activate first-party audiences in plain language — premium packaging for direct-sold campaigns without a data engineering overhaul."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — same as above (Non-Goals + Backlog #1).
**Suggested fix:** "Build, enrich, and package first-party audiences in plain language — premium packaging for direct-sold campaigns without a data engineering overhaul."
**Why:** Same "activate" overclaim as solutions[0].
**Status:** PENDING REVIEW

### F130 — print-digital-audio — showcase.columns[0].description (Audience Builder)
**Current copy:** "First-party segments packaged and activated for direct-sold campaigns — the premium, post-cookie ad product advertisers are asking for, built without an engineering project."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — Out of Scope: "Live ad-platform activation APIs... simulated today."
**Suggested fix:** "First-party segments packaged and proposal-ready for direct-sold campaigns — the premium, post-cookie ad product advertisers are asking for, built without an engineering project."
**Why:** Same activation overclaim.
**Status:** PENDING REVIEW

### F131 — print-digital-audio — solutions[1].title (LLM Command Center)
**Current copy:** "See — and shape — how your content appears in AI answers"
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content. One edge substrate, two products — the boundary holds even where infrastructure is shared."
**Suggested fix:** "See — and control — who's crawling your content, and on what terms"
**Why:** This is literally the capability the PRD assigns to a different product (AEO2); LLM Command Center's job is bot governance, not answer-appearance monitoring.
**Status:** PENDING REVIEW

### F132 — print-digital-audio — solutions[1].description (LLM Command Center)
**Current copy:** "The LLM Command Center monitors how your content appears in AI-generated responses across major LLMs, identifies coverage and accuracy gaps, and surfaces the opportunities to optimize for AI-era discovery and attribution. The traffic your search team spent two decades winning is being re-decided inside AI answers; this is the instrument panel for winning it there too."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Executive Summary: "Give publishers monitoring, control, and monetization of AI crawler traffic: a bot-intelligence dashboard, plain-English tiered content-access policies... and consumption intelligence for licensing." Non-Goals (as above) explicitly excludes answer-appearance monitoring from this product's scope.
**Suggested fix:** "The LLM Command Center shows you which AI crawlers are pulling your content, lets you set plain-English access policies by content tier, and turns that activity into evidence for licensing conversations. The traffic your search team spent two decades winning is now being harvested by bots instead of read by people; this is the instrument panel for setting the terms of that trade."
**Why:** Every clause in the current copy (appearance in AI answers, coverage/accuracy gaps, discovery/attribution optimization) describes the sibling AEO2 product, not LLM Command Center's actual bot-governance and licensing-intelligence functions.
**Status:** PENDING REVIEW

### F133 — print-digital-audio — faq[1] ("What does the LLM Command Center actually monitor?")
**Current copy:** "How your content appears in AI-generated responses across major LLMs — where you're cited, where you're absent, and where the answer misrepresents your reporting. It identifies coverage and accuracy gaps and surfaces concrete opportunities to optimize content for AI-era discovery and attribution, so your response to the search-traffic shift is a managed program instead of a guess."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same line as above: appearance-in-AI-answers monitoring is AEO2's domain, not this product's.
**Suggested fix:** "Which AI bots are crawling your content, how often, and what they're taking — training, RAG, search, or research. You set plain-English access policies by content tier and provider, and every crawl becomes evidence you can bring to a licensing conversation, so your response to AI crawlers is a managed program instead of a guess."
**Why:** Same mismatch — this FAQ answer describes AEO2, not the product it's attached to.
**Status:** PENDING REVIEW

### F134 — print-digital-audio — personas[1].solution.description (LLM Command Center)
**Current copy:** "Monitors your presence across AI-generated responses, flags coverage and accuracy gaps, and turns AI-era discovery into a discipline your team runs — the way it once ran SEO."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same citation.
**Suggested fix:** "Monitors AI crawler activity across your properties, lets you set access policy by content tier, and turns AI consumption into a discipline your team runs — and a licensing case you can make."
**Why:** Same mismatch, repeated in the persona block.
**Status:** PENDING REVIEW

### F135 — print-digital-audio — showcase.columns[2] (LLM Command Center)
**Current copy:** Title: "Win the answer, not just the ranking" / Description: "Coverage and accuracy across AI-generated responses, monitored and optimized — so the discovery shift becomes a program you manage instead of a chart you dread."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same citation.
**Suggested fix:** Title: "Control the crawl, not just the ranking" / Description: "AI crawler activity monitored and governed by content tier — so the discovery shift becomes a program you manage instead of a chart you dread."
**Why:** Fourth and final repetition of the same product/description mismatch — this touchpoint also links to "LLM Command Center" but describes AEO2's job.
**Status:** PENDING REVIEW

### F136 — print-digital-audio — personas[2].solution.description (Sales Intelligence)
**Current copy:** "Audience insights, competitive context, and the Media Proposal Generator agent in one workspace — data-backed, tailored proposals in minutes, more deals pursued with the same desk."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — Out of Scope: "Competitive tracker — whitespace, needs discovery + its own scoping (see White Space Backlog)." Backlog #1: "Competitive tracker (advertiser/competitor spend & creative monitoring) | Whiteboard: 'need to build'; no source app."
**Suggested fix:** "Audience insights, category context, and the Media Proposal Generator agent in one workspace — data-backed, tailored proposals in minutes, more deals pursued with the same desk."
**Why:** Competitive tracking is explicitly unbuilt whitespace, not a current capability; "category context" (from the research brief) is what the PRD actually supports.
**Status:** PENDING REVIEW

### F137 — print-digital-audio — stackShowcase.columns[2].description (Sales Intelligence)
**Current copy:** "Sales Intelligence — audience insights, competitive context, and automated proposal creation grounded in your real inventory and analytics, standardized across the desk."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — same Out of Scope / Backlog #1 citation.
**Suggested fix:** "Sales Intelligence — audience insights, category context, and automated proposal creation grounded in your real inventory and analytics, standardized across the desk."
**Why:** Same unbuilt "competitive" capability claim.
**Status:** PENDING REVIEW

### F138 — print-digital-audio — solutions[3].description (Personalization)
**Current copy:** "Personalization monitors subscriber engagement signals in real time, identifies churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Out of Scope: "Always-on journey anomaly detection / event triggers"; Backlog #2: "Always-on anomaly detection + event triggers | Page #3; batch-only today." Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent; fully autonomous customer-facing sends are out of scope at any maturity level."
**Suggested fix:** "Personalization monitors subscriber engagement signals, identifies churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Why:** The PRD's own backlog flags "real-time"/always-on as a page claim not yet true ("batch-only today"), and offers are approved by a human, not auto-triggered.
**Status:** PENDING REVIEW

### F139 — print-digital-audio — faq[0].a ("How is Personalization different from our paywall and subscription tools?")
**Current copy:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals in real time, flags churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same "batch-only today" (Backlog #2) and permanent human-approval gate (Non-Goals) citations.
**Suggested fix:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals, flags churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Why:** Same real-time/autonomous-trigger overclaim, repeated in the FAQ.
**Status:** PENDING REVIEW

### F140 — print-digital-audio — personas[3].solution.description (Personalization)
**Current copy:** "Real-time engagement monitoring that catches churn-risk indicators early and triggers tailored offers and content experiences before cancellation intent solidifies."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations as above.
**Suggested fix:** "Engagement monitoring that catches churn-risk indicators early and recommends tailored offers and content experiences your team approves before cancellation intent solidifies."
**Why:** Same overclaim repeated a third time.
**Status:** PENDING REVIEW

### F141 — print-digital-audio — showcase.columns[1].description (Personalization)
**Current copy:** "Engagement signals monitored in real time, churn risk caught early, and tailored retention offers triggered before cancellation intent solidifies — not after the cohort report."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations.
**Suggested fix:** "Engagement signals monitored, churn risk caught early, and tailored retention offers recommended and approved before cancellation intent solidifies — not after the cohort report."
**Why:** Same overclaim, fourth occurrence.
**Status:** PENDING REVIEW

### F142 — print-digital-audio — stackShowcase.columns[1].description (Personalization)
**Current copy:** "Personalization — real-time engagement signals connected to offer triggers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations.
**Suggested fix:** "Personalization — engagement signals turned into approved retention offers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Why:** Same overclaim, fifth and final occurrence; also tightened to describe the outcome rather than the trigger mechanics.
**Status:** PENDING REVIEW

### F143 — print-digital-audio — solutions[4].description (Campaign Orchestrator)
**Current copy:** "Managing delivery, pacing, and performance reporting across five formats simultaneously creates significant ops overhead — and manual errors damage advertiser relationships and renewal rates. Campaign Orchestrator automates campaign monitoring, pacing alerts, and cross-format performance reporting, so the Friday recap deck assembles itself and your team manages exceptions instead of dashboards."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Out of Scope: "Non-GAM connectors and non-display formats." Backlog #6: "Audio/newsletter/podcast delivery formats | kana.ai Publishers page cross-format claim | Med | L | TBD." Risk log: "Website promises auto-adjustment + real-time that MVP doesn't deliver → sales/expectation mismatch."
**Suggested fix:** "Managing delivery, pacing, and performance reporting across every format creates significant ops overhead — and manual errors damage advertiser relationships and renewal rates. Campaign Orchestrator automates monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory, so the Friday recap deck assembles itself and your team manages exceptions instead of dashboards."
**Why:** The PRD's MVP is GAM/display only; the PM's own risk log names this exact cross-format claim as a page-vs-code gap.
**Status:** PENDING REVIEW

### F144 — print-digital-audio — faq[2] ("Can Campaign Orchestrator really handle audio and newsletter inventory alongside display?")
**Current copy:** "Yes — that's the point. It automates monitoring, pacing alerts, and performance reporting across display, native, newsletter, audio, and podcast inventory simultaneously, so cross-format sponsorships stop requiring a person to reconcile five dashboards into one recap deck."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same Out of Scope + Backlog #6 citation; this is the single largest page-vs-code gap the PRD calls out for this product.
**Suggested fix (reframe as an honest roadmap answer):** Q: "Does Campaign Orchestrator only work with Google Ad Manager?" A: "Today, yes — it's built and proven on GAM, automating monitoring, pacing alerts, and performance reporting across your display and native inventory so you're not reconciling dashboards by hand. Coverage for newsletter, audio, and podcast inventory is on our roadmap as we extend beyond GAM."
**Why:** This is the most direct overclaim on the page — a yes/no FAQ affirmatively promising a capability the PRD explicitly scopes out for MVP.
**Status:** PENDING REVIEW

### F145 — print-digital-audio — personas[4].solution.description (Campaign Orchestrator)
**Current copy:** "Automated monitoring, pacing alerts, and cross-format performance reporting — delivery accuracy up, manual burden down, recap decks that build themselves."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same citations.
**Suggested fix:** "Automated monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory — delivery accuracy up, manual burden down, recap decks that build themselves."
**Why:** Same GAM-only overclaim repeated in the persona block.
**Status:** PENDING REVIEW

### F146 — print-digital-audio — stackShowcase.columns[0].description (Campaign Orchestrator)
**Current copy:** "Campaign Orchestrator — monitoring, pacing alerts, and cross-format reporting across display, native, newsletter, audio, and podcast inventory, connected to the platforms that serve them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same citations.
**Suggested fix:** "Campaign Orchestrator — monitoring, pacing alerts, and performance reporting across your Google Ad Manager inventory, with newsletter, audio, and podcast coverage on the roadmap."
**Why:** Same overclaim, final occurrence.
**Status:** PENDING REVIEW

### F147 — print-digital-audio — stackShowcase.subtitle
**Current copy:** "Connects to Google Ad Manager, Salesforce, your email and podcast platforms, and your subscription stack — no rip-and-replace, no engineering queue, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Out of Scope: "Non-GAM connectors and non-display formats"; Backlog #6 names podcast/newsletter connectivity as unbuilt.
**Suggested fix:** "Connects to Google Ad Manager, Salesforce, your email platforms, and your subscription stack — no rip-and-replace, no engineering queue, no new governance gaps."
**Why:** "Podcast platforms" is not a current connection per the Campaign Orchestrator PRD; dropping it removes the only unsupported item in an otherwise accurate integration list.
**Status:** PENDING REVIEW

### F148 — streaming-video — solutions[0] (Personalization)
**Current copy:** "Personalization triggers tailored retention offers and content recommendations the moment behavioral churn signals cross a risk threshold — automating the intervention that prevents cancellations before they happen. The gap between your data science team's churn model and your engagement platform's campaign send collapses to zero: signal in, tailored action out, same session."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent; fully autonomous customer-facing sends are out of scope at any maturity level." Also §6.2 Out of Scope: "Always-on journey anomaly detection / event triggers — see White Space Backlog."
**Suggested fix:** "Personalization flags churn risk while there's still time to act and prepares the tailored retention offer or content recommendation for your team to approve — turning a warehouse risk score into a launch-ready intervention before the cancellation happens. The gap between your data science team's churn model and your engagement platform's campaign send closes to a single review-and-approve step, not a batch-export queue."
**Why:** The PRD makes human approval a permanent, non-negotiable gate and lists event-triggered/real-time firing as an unbuilt backlog item, so "automating," "fires... automatically," and "same session" all overstate the product.
**Status:** PENDING REVIEW

### F149 — streaming-video — faq[0] ("We already have churn models. What does Personalization add?")
**Current copy:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to the intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation fires, automatically."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same as above: permanent human-approval gate; event-triggers out of scope for MVP.
**Suggested fix:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to a ready-to-send intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation is drafted and waiting for your team to approve and launch."
**Why:** Same automatic/no-approval claim as the solution row, restated in FAQ form.
**Status:** PENDING REVIEW

### F150 — streaming-video — personas[0].solution (Lifecycle / Retention Marketing Lead)
**Current copy:** "Real-time behavioral monitoring with automated, tailored interventions — retention offers and content recommendations that fire the moment risk crosses threshold, not after the batch job."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals (human approval permanent); §6.2 Out of Scope (event triggers backlog).
**Suggested fix:** "Weeks-ahead churn-risk scoring with tailored interventions ready to approve — retention offers and content recommendations prepared the moment risk crosses threshold, so your team launches same-day instead of after the batch job."
**Why:** "Automated" interventions that "fire" contradicts the mandatory approval gate; "real-time... monitoring" overstates a scoring engine described elsewhere in the PRD as surfacing risk "weeks ahead," not on live event triggers.
**Status:** PENDING REVIEW

### F151 — streaming-video — showcase.columns[0] ("Intervene before the cancellation, not after")
**Current copy:** "Behavioral churn signals trigger tailored offers and recommendations automatically — the retention infrastructure your churn model has been waiting for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals: "Never contacts a customer without human approval... at any maturity level."
**Suggested fix:** "Behavioral churn signals surface tailored offers and recommendations ready to approve — the retention infrastructure your churn model has been waiting for."
**Why:** "Trigger... automatically" restates the same unsupported automatic-send claim.
**Status:** PENDING REVIEW

### F152 — streaming-video — solutions[1] (Campaign Orchestrator — ad load)
**Current copy:** Title: "Ad load intelligence instead of fixed rules." Description: "Campaign Orchestrator surfaces ad load intelligence in real time, so ops and ad product teams can optimize delivery rules based on engagement signals and yield outcomes — without waiting on manual override cycles through a product backlog. Break frequency, pod structure, and interruption timing become decisions informed by the viewer in front of you, not policies set a quarter ago."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — White Space Backlog #7: "Content ROI & ad-load optimization (streaming) | ... kana.ai Streaming segment | Med | XL | TBD" (i.e., this exact page's claim is logged as unbuilt future work). Also §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value" and "Non-GAM connectors and non-display formats."
**Suggested fix:** "Campaign Orchestrator surfaces delivery risk and revenue-at-risk across your ad operations, so ops and ad product teams catch under-delivery and yield problems before they cost a makegood — without waiting on a stitched spreadsheet or a support ticket. Pacing decisions get made on evidence pulled straight from your ad server, not a quarterly review cycle."
**Why:** Ad-load/pod/break-frequency optimization for streaming is an explicit, unbuilt backlog item (XL effort), and the PRD scopes out both real-time ingestion and non-display ad formats — so this entire capability doesn't exist yet for this vertical.
**Status:** PENDING REVIEW

### F153 — streaming-video — faq[1] ("Does Campaign Orchestrator replace our ad server?")
**Current copy:** "No — it's the intelligence layer on top of it. Your ad server keeps serving; Campaign Orchestrator surfaces real-time ad load intelligence and lets your ops and ad product teams optimize delivery rules on engagement signals and yield outcomes, instead of changing static configs through manual override cycles."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same Backlog #7 + §6.2 Out of Scope citations above.
**Suggested fix:** "No — it's the intelligence layer on top of it. Your ad server keeps serving; Campaign Orchestrator watches delivery and yield against it, flags what's at risk with the revenue impact quantified, and lets your ops and ad product teams act on evidence instead of a stitched spreadsheet."
**Why:** Same ad-load/real-time claim as the solution row; the "no ad server replacement" framing is accurate and untouched, but the specific mechanism claimed after it isn't.
**Status:** PENDING REVIEW

### F154 — streaming-video — faq[2] ("How does the content ROI intelligence actually work?")
**Current copy:** "Campaign Orchestrator synthesizes viewership, subscriber impact, and engagement data into title-level ROI intelligence as it accrues — informing in-flight optimization (what to promote, where) and future investment decisions (what to greenlight or renew). It's the difference between defending a renewal with last quarter's stitched dashboards and deciding with current evidence."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7 (same item covers "Content ROI... (streaming)"); §9 Data Requirements lists only GAM delivery/orders/line items/forecasts as CO's data — no viewership or subscriber-impact data source appears anywhere in the PRD.
**Suggested fix:** "Campaign Orchestrator answers content-adjacent delivery and yield questions your team used to wait a quarter for — ask which titles' campaigns are pacing and monetizing well right now, and get a grounded answer with drill-downs instead of a stitched dashboard."
**Why:** Title-level viewership/subscriber-impact ROI synthesis isn't in the PRD's data sources or MVP scope; it's the same unbuilt backlog item as the ad-load claim.
**Status:** PENDING REVIEW

### F155 — streaming-video — personas[1].solution (Ad Product / Yield Manager)
**Current copy:** "Real-time ad load intelligence that lets the team optimize delivery rules on engagement signals and yield outcomes — maximizing revenue without spending the viewer experience to get it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §6.2 Out of Scope (real-time ingestion, non-display formats).
**Suggested fix:** "Delivery-risk and revenue-at-risk intelligence that lets the team fix pacing and yield problems before they cost a makegood — protecting the viewer experience while they do it."
**Why:** Same ad-load/real-time mismatch as solutions[1].
**Status:** PENDING REVIEW

### F156 — streaming-video — personas[2].solution (Director, Content Strategy & Insights)
**Current copy:** "Viewership, subscriber impact, and engagement synthesized into content ROI intelligence — current evidence for in-flight optimization and the next greenlight decision."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §9 Data Requirements (GAM-only data sources).
**Suggested fix:** "Delivery and yield evidence pulled straight from your ad server, current as it accrues — a faster answer than a stitched dashboard when the greenlight conversation comes up."
**Why:** Same content-ROI mismatch as solutions[2] — CO has no viewership/subscriber-impact data pipeline per the PRD.
**Status:** PENDING REVIEW

### F157 — streaming-video — showcase.columns[1] ("Price every ad break against the viewer in front of you")
**Current copy:** "Ad load intelligence in real time — engagement signals and yield outcomes steering break frequency and pod structure, instead of static rules and quarterly overrides."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §6.2 Out of Scope (real-time ingestion, non-display formats).
**Suggested fix:** "Delivery and yield intelligence, current as of this morning's sync — revenue-at-risk ranked worst-first, instead of static rules and quarterly overrides."
**Why:** Same ad-load/pod/real-time mismatch.
**Status:** PENDING REVIEW

### F158 — streaming-video — showcase.columns[2] ("Know what a title is doing for the business — now")
**Current copy:** "Viewership, subscriber impact, and engagement synthesized continuously, so content investment decisions run on evidence instead of quarters-old retrospectives."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §9 Data Requirements (GAM-only).
**Suggested fix:** "Delivery and yield performance synthesized as it accrues, so ad operations decisions run on evidence instead of quarters-old retrospectives."
**Why:** "Continuously" restates the real-time claim; "viewership, subscriber impact" restates the unbuilt content-ROI data claim.
**Status:** PENDING REVIEW

### F159 — streaming-video — stackShowcase.columns[1] ("Put intelligence on top of the ad server")
**Current copy:** "Campaign Orchestrator — real-time load, pacing, and yield intelligence over the delivery systems you already run, so optimization stops waiting on override cycles."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value."
**Suggested fix:** "Campaign Orchestrator — pacing and yield intelligence over the delivery systems you already run, current as of this morning's sync, so optimization stops waiting on override cycles."
**Why:** "Real-time" and "load" (ad-load) are the only unsupported words here; pacing/yield intelligence over existing delivery systems is accurate and kept.
**Status:** PENDING REVIEW

### F160 — streaming-video — solutions[3] (Audience Builder)
**Current copy:** Title: "One viewer, one profile — across every screen." Description: "A single viewer appearing as four different users across mobile, smart TV, laptop, and tablet fragments behavioral signals — making content personalization less relevant and ad targeting less precise and valuable. Audience Builder resolves identity signals across device environments into a unified viewer profile, improving both personalization accuracy and the quality of the audience segments you sell to advertisers."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today." White Space Backlog #3: "Real cross-device/cross-property identity resolution | ... effort drops from build-new to adapt | ... TBD" — confirms it's not shipped, only a candidate to adapt from a different product (Kana-CDP).
**Suggested fix:** "A single viewer appearing as four different users across mobile, smart TV, laptop, and tablet fragments behavioral signals — making content personalization less relevant and ad targeting less precise and valuable. Audience Builder turns your first-party viewer data into a sized, explorable audience in minutes, so the segments you build and sell to advertisers reflect real engagement instead of a fragmented, half-populated picture."
**Why:** Cross-device identity resolution is explicitly not built in Audience Builder today; the PRD's actual strength (fast, self-serve, traceable segment building from first-party data) supports a different claim.
**Status:** PENDING REVIEW

### F161 — streaming-video — personas[3].solution (Data & Identity Lead)
**Current copy:** "Identity signals resolved across device environments into one unified viewer profile — the substrate that makes personalization accurate and advertiser segments premium."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "First-party audience data turned into sized, explorable, traceable segments in minutes — the foundation that makes advertiser segments premium and defensible."
**Why:** Same cross-device identity resolution mismatch as solutions[3].
**Status:** PENDING REVIEW

### F162 — streaming-video — stackShowcase.columns[2] ("Resolve identity once, benefit everywhere")
**Current copy:** "Audience Builder — a unified viewer profile that upgrades recommendations, ad targeting, and advertiser-facing segments from the same foundation."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Audience Builder — one first-party audience foundation that powers recommendations, ad targeting, and advertiser-facing segments alike."
**Why:** "Resolve identity once" restates the unbuilt cross-device/cross-property resolution claim; the underlying "one foundation, multiple uses" framing is fine without it.
**Status:** PENDING REVIEW

### F163 — streaming-video — solutions[4] (LLM Command Center)
**Current copy:** Title: "When viewers ask an AI what to watch, be the answer." Description: "Consumers increasingly ask AI assistants to find shows and content — and platforms that don't actively manage their presence in AI-generated recommendations risk losing organic discovery to competitors who do. The LLM Command Center monitors and optimizes how your streaming content appears across AI discovery environments, turning a passive distribution risk into an active, manageable competitive advantage."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — §4.2 Non-Goals: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." The product's actual scope (§1, §6.1) is bot-traffic monitoring and tiered content-access policy (Full/Summary/Highlights/Deny) for AI crawlers, plus licensing-evidence reporting.
**Suggested fix:** "When AI crawlers take your content for free, get paid or get out of the way. The LLM Command Center gives you visibility into every AI bot crawling your streaming library and lets you set the terms — what's fully accessible, what's summary-only, what's off-limits — turning an invisible traffic drain into a licensing conversation you control."
**Why:** The PRD explicitly assigns "how content appears in AI answers/recommendations" to a different product (AEO2); LLM Command Center's job is bot access governance and licensing evidence, not discovery optimization.
**Status:** PENDING REVIEW

### F164 — streaming-video — hero.subheadline
**Current copy:** "Maximizing ad revenue and subscriber LTV while protecting the viewer experience that keeps subscribers engaged — neither goal is achievable on the batch workflows and manual ops models most platforms still run. Kana closes the gap between the signal and the action, in real time."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value." Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §6.2 Out of Scope: "Always-on journey anomaly detection / event triggers."
**Suggested fix:** "Maximizing ad revenue and subscriber LTV while protecting the viewer experience that keeps subscribers engaged — neither goal is achievable on the batch workflows and manual ops models most platforms still run. Kana closes the gap between the signal and the action, without the data-team queue in between."
**Why:** The page's flagship products (Personalization, Campaign Orchestrator) both run on daily-batch/human-approval workflows per their PRDs, not real-time; the hero's "in real time" promise sets an expectation the underlying products explicitly don't meet yet.
**Status:** PENDING REVIEW


