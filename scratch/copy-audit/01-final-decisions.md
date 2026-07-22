# Copy Audit — Final Decisions (Post-Policy)

Applies Rayyan's backlog-marketing policy to all 164 findings in `00-consolidated-review.md`. Default: if a finding's PRD citation is genuinely a Backlog/White Space Backlog/roadmap item (capability not yet built, no permanent exclusion), REJECT — current copy stays unchanged, market it confidently anyway. Three named exceptions still get FIXED: (A) permanent Non-Goals/"never" language, (B) wrong-product misattribution, (C) financial-services Marketing Intelligence compliance-screening claims. A fourth, unnamed category surfaced during review and is called out explicitly below (see "Added category D").

## Summary

- **Total findings: 164**
- **APPROVED (fix applied): 89**
  - ORIGINAL-SUGGESTED-FIX (audit's fix used as-is): 61
  - NEW-SURGICAL-FIX (minimal rewrite, preserves backlog language, removes only the disqualifying element): 28
- **REJECTED (current copy stays unchanged): 75**

Per-page split (APPROVED / REJECTED):

| Page | Approved | Rejected | Total |
|---|---|---|---|
| cpg | 5 | 12 | 17 |
| retail-ecommerce | 1 | 17 | 18 |
| financial-services | 12 | 5 | 17 |
| healthcare | 5 | 4 | 9 |
| qsr | 14 | 3 | 17 |
| travel-hospitality | 17 | 4 | 21 |
| media-advertisers | 15 | 0 | 15 |
| media-networks | 5 | 8 | 13 |
| print-digital-audio | 10 | 10 | 20 |
| streaming-video | 5 | 12 | 17 |
| **Total** | **89** | **75** | **164** |

**Added category "D" (flagged for your review):** A handful of findings aren't about capability timing at all — they're specific fabricated or unvalidated numbers (a benchmark stat, a lead-time figure, an implementation-week estimate) with zero PRD support at any point, present or future. Marketing a not-yet-built *capability* confidently is what your policy calls for; asserting a *specific invented number* as fact isn't the same thing — there's no future date at which "80%+ overlap with Acxiom and Experian" or "6–10 weeks lead time" becomes true, because nothing in any PRD ever measured it. I treated these as still needing a fix, labeled reason "D," and kept them out of the backlog-reject bucket. Findings: F12, F17, F34, F61, F66, F87, F91 (partial), F96, F112, F113, F114, F126. Flagging this whole category as a judgment call in case you'd rather fold it into "reject" instead.

---

## REJECTED — one-line reasons

### cpg
- F1 — REJECTED — hero compresses CI daily-cadence and MI attribution, both genuine backlog, no autonomy claim.
- F2 — REJECTED — CI internal POS/scan-data ingestion is Backlog #6, not built.
- F3 — REJECTED — same CI internal-data-ingestion backlog (Nielsen/Circana/POS).
- F5 — REJECTED — MI retailer-portal connections are outside stated MVP scope, genuine backlog.
- F6 — REJECTED — MI in-store-lift attribution is Backlog #3 (data-contract-only).
- F7 — REJECTED — MI multi-retailer-platform connections are backlog (MVP is one paid channel).
- F8 — REJECTED — CI Nielsen/Circana/POS ingestion is Backlog #6.
- F9 — REJECTED — CI "retailer mix" configuration implies internal data, Backlog #6.
- F10 — REJECTED — same CI internal-data-ingestion backlog, persona card.
- F11 — REJECTED — MI in-store-lift attribution, Backlog #3.
- F14 — REJECTED — MI POS/attribution claim, Backlog #3.
- F15 — REJECTED — CI/MI internal data sources (POS, retailer portals, Nielsen/Circana), Backlog #6.

### retail-ecommerce
- F18 — REJECTED — MI attribution (spend-to-register) is Backlog #3, no autonomy claim.
- F19 — REJECTED — pure cadence claim ("scores churn risk in real time"), no autonomy implication; PRD's own explicit example of a full-reject case.
- F20 — REJECTED — MI offline-attribution gap is Backlog #3, genuine capability not yet built.
- F21 — REJECTED — CI internal POS/sales ingestion, backlog (public-sources-only v1).
- F22 — REJECTED — AB live activation "enforced across Meta, Google" is backlog (MVP is activation by reference).
- F23 — REJECTED — pure cadence claim, same as F19.
- F24 — REJECTED — MI attribution stat, Backlog #3.
- F25 — REJECTED — MI "live spend-to-register view" stat, Backlog #3.
- F26 — REJECTED — pure cadence claim; current copy already states "every recommended intervention goes through your team's review and approval," so no autonomy issue exists to fix.
- F27 — REJECTED — CI internal POS/sales data, backlog.
- F28 — REJECTED — AB live activation "enforced across every channel," backlog.
- F29 — REJECTED — MI attribution (digital spend to in-store revenue), Backlog #3.
- F30 — REJECTED — pure cadence claim ("real-time churn risk scores"), no autonomy language.
- F31 — REJECTED — CI internal POS/sales data (sell-through, stock risk), backlog.
- F32 — REJECTED — MI attribution ("prove which dollar moved which register"), Backlog #3.
- F33 — REJECTED — pure cadence claim; approval already stated in current copy ("routes every recommended intervention through your team's approval").
- F35 — REJECTED — root-cause churn diagnosis vs. heuristic reason is Backlog #1, genuine capability depth not yet built.

### financial-services
- F38 — REJECTED — AB propensity/lookalike models on real data are Backlog #1 ("synthetic only today"), no autonomy or wrong-product issue.
- F44 — REJECTED — same AB propensity-model backlog, persona card.
- F46 — REJECTED — vague compressed persona line (compliance velocity + attribution-to-origination); neither clause makes the specific compliance-screening claim that triggers exception C, both are genuine backlog (MI Compliance & Certs backlog; MI attribution Backlog #3).
- F48 — REJECTED — same AB propensity-model backlog, showcase column.
- F51 — REJECTED — same AB propensity-model backlog, stack-showcase column.

### healthcare
- F53 — REJECTED — AB clinical/care-gap segmentation requires HIPAA guardrail packs, Backlog #5, genuine capability not yet built.
- F55 — REJECTED — same AB care-gap/HIPAA-guardrail backlog, persona card.
- F57 — REJECTED — same AB care-gap/HIPAA-guardrail backlog, showcase.
- F59 — REJECTED — AB care-gap segmentation (Backlog #5) plus "continuous refresh" (Backlog: real-time loyalty sync TBD) — both genuine backlog, no autonomy claim.

### qsr
- F62 — REJECTED — hero compresses CO location-level spend (whitespace), ADP/AB day-part signals — no explicit autonomy verb in the actual sentence ("wired to," not "automatically"), so treated as backlog.
- F71 — REJECTED — CO "location-aware spending engine... budget follows market performance signal" has no explicit autonomy verb; pure backlog (location-level optimization is QSR/Retail whitespace).
- F75 — REJECTED — stack-showcase connector list (Toast, Punchh, Paytronix, Olo, Braze) names vendors outside current MVP connector scope (warehouse + 2 sources); genuine backlog, market the connector breadth confidently.

### travel-hospitality
- F79 — REJECTED — hero compresses CI cadence and Personalization cadence, no explicit autonomy verb; pure backlog.
- F84 — REJECTED — pure cadence claim; current copy already states "every offer runs within your loyalty program's existing rules and approval workflow," so no autonomy violation to fix.
- F86 — REJECTED — CI internal rate-data ingestion, same public-sources-only backlog as the cpg/retail-ecommerce CI pattern.
- F92 — REJECTED — pure cadence claim ("real-time, tier-aware offers"), no autonomy verb; the audit's own note confirms this is cadence-only.

### media-networks
- F115 — REJECTED — Sales Intelligence closed-loop attribution is Backlog #2 (data-contract-only, "least-built app in the suite"); it's reporting/analytics, not a customer-facing send, so no autonomy issue applies.
- F116 — REJECTED — same closed-loop-attribution backlog, FAQ.
- F117 — REJECTED — same closed-loop-attribution backlog, persona.
- F118 — REJECTED — same closed-loop-attribution backlog, showcase.
- F119 — REJECTED — same closed-loop-attribution backlog, stack-showcase.
- F120 — REJECTED — AB cross-property identity resolution is White Space Backlog #3 ("TBD, adapt" from a sibling product's resolver) — treated as genuine backlog, not permanent exclusion. *(Flagged as uncertain — see note below; the PRD's Non-Goals language ("Not a CDP/DMP or system of record") reads close to the Exception-A pattern, but the Backlog #3 entry explicitly plans this as a future capability.)*
- F121 — REJECTED — same AB identity-resolution backlog, persona. *(Same uncertainty flag as F120.)*
- F122 — REJECTED — same AB identity-resolution backlog, showcase. *(Same uncertainty flag as F120.)*

### print-digital-audio
- F128 — REJECTED — AB live ad-platform activation is backlog ("simulated today"), genuine capability not yet built.
- F129 — REJECTED — same AB live-activation backlog, persona.
- F130 — REJECTED — same AB live-activation backlog, showcase.
- F136 — REJECTED — Sales Intelligence competitive tracker is Backlog #1 ("whitespace, needs discovery, no source app"), genuine backlog.
- F137 — REJECTED — same competitive-tracker backlog, stack-showcase.
- F143 — REJECTED — CO cross-format (5 formats) coverage is Backlog #6; the sentence itself automates monitoring/alerts/reporting only (no delivery-adjustment autonomy claim), so this is pure backlog.
- F144 — REJECTED — same cross-format backlog; keep the confident "Yes — that's the point" FAQ answer as-is. Note: the audit's own suggested fix reframed this with "on our roadmap" language, which is exactly the hedging your policy rejects — do not use that fix.
- F145 — REJECTED — same cross-format backlog, persona.
- F146 — REJECTED — same cross-format backlog, stack-showcase. Note: the audit's suggested fix also used "on the roadmap" phrasing — do not use it; keep current copy.
- F147 — REJECTED — podcast-platform connector is Backlog #6, genuine backlog.

### streaming-video
- F152 — REJECTED — CO streaming ad-load intelligence is White Space Backlog #7 (XL effort, TBD); sentence explicitly attributes the optimizing action to "ops and ad product teams," no autonomy claim.
- F153 — REJECTED — same ad-load backlog; "lets your ops and ad product teams optimize" is explicit human agency, no autonomy claim.
- F154 — REJECTED — content-ROI synthesis is the same Backlog #7 item, no autonomy claim (informational/reporting).
- F155 — REJECTED — same ad-load backlog, persona.
- F156 — REJECTED — same content-ROI backlog, persona.
- F157 — REJECTED — same ad-load backlog. *(Flagged as uncertain — the cross-page pattern note in the source audit groups this with the CO autonomy-violation pattern, but the sentence itself ("engagement signals... steering break frequency") never names an automated actor or an approval bypass; treated as backlog-only on a close read.)*
- F158 — REJECTED — same content-ROI backlog, showcase.
- F159 — REJECTED — same ad-load backlog, stack-showcase. *(Same uncertainty flag as F157 — grouped with the autonomy pattern in the source audit, but no explicit autonomy verb in the actual sentence.)*
- F160 — REJECTED — AB cross-device identity resolution, same Backlog #3 "TBD, adapt" reasoning as F120–122. *(Same uncertainty flag as F120.)*
- F161 — REJECTED — same identity-resolution backlog, persona. *(Same uncertainty flag as F120.)*
- F162 — REJECTED — same identity-resolution backlog, stack-showcase. *(Same uncertainty flag as F120.)*
- F164 — REJECTED — hero "closes the gap... in real time" compresses CO/Personalization cadence backlog, no explicit autonomy verb.

---

## APPROVED — full detail

### cpg

#### F4 — cpg — solutions[1] (Omni-Channel Media Planner)
**Current copy:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into the right targeting setup on Meta, YouTube, The Trade Desk, and DV360."
**Reason for exception:** A (permanent non-goal) — OCMP PRD Non-Goals: "Not an execution or buying platform. OCMP produces plans and recommendations; nothing is pushed into Meta/DV360/TTD — trafficking stays with the customer or agency." This is a permanent architectural boundary, not a backlog item.
**Final fix:** "The Omni-Channel Media Planner models saturation curves against your own campaign data and turns a brief straight into platform-ready targeting for Meta, YouTube, The Trade Desk, and DV360. Budget allocation stops being driven by habit and starts being driven by modeled ROAS."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F12 — cpg — showcase.columns[0] ("Catch the trend before it hits POS")
**Current copy:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) against your own scan data automatically. Surface leading indicators 6–10 weeks before movement shows in your numbers."
**Reason for exception:** D (fabricated stat bundled with a genuine-backlog element) — internal scan-data ingestion is Backlog #6 and should stay marketed confidently per policy; the "6–10 weeks" figure has zero support anywhere in the PRD, present or future, so it isn't rescued by the backlog carve-out.
**Final fix:** "Cross-reference external signals (analyst reports, Grocery Dive, and Google Trends) against your own scan data automatically. Surface leading indicators well before movement shows in your numbers."
**Fix type:** NEW-SURGICAL-FIX (keeps "against your own scan data automatically" verbatim per backlog policy; removes only the unsupported "6–10 weeks" figure)

#### F13 — cpg — showcase.columns[1] ("Run the brief you actually wrote")
**Current copy:** "Monitor every live campaign against the original brief across Meta, YouTube, and The Trade Desk, in real time."
**Reason for exception:** B (wrong-product) — this is OCMP's integrity/drift-scoring feature (itself backlog for real-time — daily/manual today), mislabeled under Audience Builder. The wrong-product name on the claim triggers exception B regardless of the underlying cadence status.
**Final fix:** "Build precise audience segments from plain-language briefs, no SQL, no tickets. Keep every live segment traceable to the original brief, so targeting never drifts from what you asked for."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F16 — cpg — stackShowcase.columns[0] ("Unify your customer data without moving a single record")
**Current copy:** "Zero-copy architecture sits on top of Salesforce, Marketo, your data warehouse, and your retailer portals. Kana resolves identities and deduplicates contacts across every system you already use, without migration, duplication, or new governance overhead."
**Reason for exception:** A (permanent non-goal) — AB PRD Non-Goals: "Not a CDP or customer-data system of record. AB consumes unified data; unification, identity resolution, and consent capture live in the data layer, not here." This is the exact permanent-exclusion language named in the policy.
**Final fix:** "Kana sits on top of Salesforce, Marketo, and your data warehouse, working with the customer data you already have without migration, duplication, or new governance overhead."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F17 — cpg — stackShowcase.columns[1] ("Launch new markets on data your competitors have never seen before")
**Current copy:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Reason for exception:** D (fabricated stat) — no benchmark against Acxiom, Experian, or any "80%+ overlap" figure appears anywhere in the PRD; this isn't a backlog item, it's an invented number.
**Final fix:** "Audience Builder: when a new SKU or new geography means you have no first-party seed data, Kana builds high-fidelity synthetic audiences from public signals, so you can target on day one instead of waiting for first-party data to accumulate."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### retail-ecommerce

#### F34 — retail-ecommerce — stackShowcase.columns[2] (Audience Builder)
**Current copy:** "Audience Builder: when a new region or category means no local first-party seed data, built-in synthetic audiences deliver statistically valid targeting from day one. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Reason for exception:** D (fabricated stat bundled with a genuine-backlog element) — the "80%+ overlap" figure has no PRD support anywhere; the synthetic-audience-from-day-one capability itself is fine to market confidently (it's shipped/backlog-supported), so it stays untouched.
**Final fix:** "Audience Builder: when a new region or category means no local first-party seed data, built-in synthetic audiences deliver statistically valid targeting from day one, at a fraction of the cost of traditional data providers."
**Fix type:** NEW-SURGICAL-FIX (keeps "statistically valid targeting from day one" and "at a fraction of the cost" verbatim; removes only the fabricated benchmark)

---

### financial-services

#### F36 — financial-services — hero.subheadline
**Current copy:** "Kana gives you compliance-ready content velocity, propensity-driven cross-sell, and a bridge from digital intent to the branch."
**Reason for exception:** B+bundled (wrong-product, bundled with backlog elements that stay untouched) — "a bridge from digital intent to the branch" attributes end-user-facing bridging directly to ADP, when ADP's PRD Non-Goals assign that outcome to "the suite apps that consume it," not ADP itself. "Compliance-ready content velocity" and "propensity-driven cross-sell" are vague enough that they don't make the specific claims that would need fixing (compliance-screening specifics live in F37/F41/F43/F47/F50; propensity-model specifics are genuine AB backlog per F38/F44/F48/F51) and stay untouched.
**Final fix:** "Kana gives you compliance-ready content velocity, propensity-driven cross-sell, and one governed customer view connecting digital intent to the branch."
**Fix type:** NEW-SURGICAL-FIX

#### F37 — financial-services — solutionRows[0] (Marketing Intelligence)
**Current copy:** Title: "Cut the compliance cycle without cutting the compliance" / Description: "Marketing Intelligence manages pre-approved content libraries and flags compliance risks before creative goes to review — cutting cycle times dramatically. Submissions arrive cleaner, revision loops shrink, and every approval carries its audit trail: reviewer, timestamp, version. Principal sign-off stays exactly where regulators require it; the three-week queue in front of it doesn't."
**Reason for exception:** C (FS-compliance exception) — pre-approved content libraries, pre-review risk flagging, and automatic audit trails are not in MI's functional requirements at all (Compliance & Certifications is flatly Backlog); on a regulated-bank audience this is a regulatory-risk exception per Rayyan, fixed regardless of backlog status.
**Final fix:** Title: "Turn campaign performance into answers your team can act on" / Description: "Marketing Intelligence lets marketing ops ask plain-language questions about campaign performance and get grounded answers in seconds, plus weekly narratives your team reviews and approves before they go out. Every suggested action comes with the evidence behind it, and nothing ships without a human sign-off — insight-to-action drops from weeks to hours."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F39 — financial-services — solutionRows[2] (Agentic Data Platform)
**Current copy:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. When a customer researches mortgages in the app and books a branch appointment, the relationship banker opens a record that knows it — not a static lead list from last week's export."
**Reason for exception:** B (wrong-product) — ADP PRD Non-Goals: "Not an end-user marketing app. ADP has admin/steward surfaces only... Campaigns, audiences-as-product, and decisions live in the suite apps that consume it." The banker-facing experience belongs to the consuming suite apps, not ADP itself — a permanent architectural boundary, not a timing issue.
**Final fix:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform connects your digital channels and CRM into one governed customer view, so the apps your teams already use can surface what a customer has been exploring — instead of relationship bankers working from a lead list that's already out of date."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F40 — financial-services — solutionRows[3] (Personalization)
**Current copy:** Title: "Offers triggered by the moment, not the quarter" / Description: "Personalization monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent. The customer who just changed employers or made a large transfer gets a tailored offer within hours — instead of surfacing on the next quarterly campaign list after the moment has passed. Coming soon to the Kana platform."
**Reason for exception:** A+bundled (permanent violation bundled with backlog element) — "gets a tailored offer within hours" with no approval step mentioned implies an autonomous customer-facing send, violating Personalization's permanent human-approval gate ("Never contacts a customer without human approval... out of scope at any maturity level"). "Within hours" and "precise moment of highest intent" are genuine cadence/backlog claims (batch-only today) that stay. Also removed "Coming soon to the Kana platform" — Rayyan's policy explicitly rejects "coming soon"/hedging framing for backlog capabilities.
**Final fix:** Title: "Offers built around the customer, not the calendar" / Description: "Personalization scores every customer's next-best offer — channel, content, timing, frequency — from their real behavior and account activity, with a plain-language reason behind each one, for your team to review and send. The customer who just changed employers or made a large transfer gets matched to a tailored offer within hours of approval — instead of surfacing on the next quarterly campaign list after the moment has passed."
**Fix type:** NEW-SURGICAL-FIX

#### F41 — financial-services — faq[0] ("How does Kana fit into our compliance review process?")
**Current copy:** "It works ahead of it, not around it. Marketing Intelligence maintains pre-approved content libraries and flags compliance risks before creative reaches your reviewers, so submissions arrive cleaner and revision cycles shrink. Principal sign-off and your existing approval authority stay exactly as they are — with a complete audit trail (reviewer, timestamp, version) on every asset."
**Reason for exception:** C (FS-compliance exception)
**Final fix:** "Marketing Intelligence doesn't sit inside your compliance workflow today — it sits upstream, giving marketing ops plain-language answers on campaign performance and narratives that go through your team's review and approval before anyone sees them."
**Fix type:** NEW-SURGICAL-FIX (same as original suggested fix minus the closing "Compliance-aware content flagging... is on our roadmap — book a demo" sentence, which is exactly the roadmap/hedging framing Rayyan rejected)

#### F42 — financial-services — personas[0] (Director of Lifecycle & CRM Marketing) — solution.description
**Current copy:** "Monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent — hours after the life event, not months. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Reason for exception:** A+bundled — same permanent-approval-gate violation as F40 ("trigger... offers" with no approval mention); "hours after the life event" is genuine cadence/backlog language that stays.
**Final fix:** "Scores every customer's next-best offer — content, timing, channel — from behavioral and transactional signals, with a reason behind every decision, for your team to approve and send. Life-event-driven offers reach the customer within hours of approval, not months later on the next quarterly list. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Fix type:** NEW-SURGICAL-FIX

#### F43 — financial-services — personas[1] (Marketing Operations Manager) — solution.description
**Current copy:** "Pre-approved content libraries and pre-review risk flagging cut cycle times dramatically, while every approval carries its audit trail automatically — reviewer, timestamp, version. The compliance desk gets cleaner submissions; marketing gets its calendar back."
**Reason for exception:** C (FS-compliance exception)
**Final fix:** "Plain-language answers on campaign performance and narratives that go through your team's review before distribution — no export-and-reconcile cycle. Marketing Ops gets decision-grade reporting in seconds instead of days."
**Fix type:** NEW-SURGICAL-FIX (same as original suggested fix minus the trailing "compliance-aware content flagging is on our roadmap" clause, per the no-roadmap-framing policy)

#### F45 — financial-services — personas[3] (Head of Retail Network) — solution.description
**Current copy:** "Bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. The banker opens the appointment already knowing what the customer has been exploring."
**Reason for exception:** B (wrong-product) — same ADP admin-surfaces-only Non-Goal as F39.
**Final fix:** "Connects digital channels and CRM into one governed customer view, so the apps your relationship bankers already use can surface what a customer has been exploring — not a static lead list from last week's export."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F47 — financial-services — showcase.columns[0] ("Ship in days what used to take weeks")
**Current copy:** "Pre-approved content libraries and pre-review risk flagging compress the compliance cycle — with the audit trail regulators expect built into every approval."
**Reason for exception:** C (FS-compliance exception)
**Final fix:** Title: "Get answers in seconds, not days" / Description: "Plain-language questions over your campaign data get grounded answers in seconds, with narratives your team reviews and approves before anyone else sees them."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F49 — financial-services — showcase.columns[2] ("Walk the digital signal into the branch")
**Current copy:** "Digital intent flows into the banker's CRM before the appointment, so the branch conversation starts where the customer's research left off."
**Reason for exception:** B (wrong-product) — same ADP admin-surfaces-only Non-Goal as F39/F45.
**Final fix:** Title: "Give the branch what the app already knows" / Description: "Digital and CRM data connect into one governed customer view, so the tools your branch teams use can start the conversation where the customer's research left off."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F50 — financial-services — stackShowcase.columns[0] ("Compress the review cycle without touching the controls")
**Current copy:** "Marketing Intelligence — pre-approved libraries and risk pre-flagging sit in front of your existing approval workflow. Principals keep sign-off; audit trails write themselves; the 5–15 day queue shrinks to the review that actually matters."
**Reason for exception:** C (FS-compliance exception)
**Final fix:** Title: "Get decision-grade answers without waiting on a data team" / Description: "Marketing Intelligence — plain-language questions over your campaign data, answered in seconds, with narratives and suggested actions that go through your team's review before they ship."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F52 — financial-services — stackShowcase.columns[2] ("Give every banker the context the app already has")
**Current copy:** "Agentic Data Platform — digital intent signals flow into the branch CRM your relationship bankers already use. One customer, one story, on both sides of the counter."
**Reason for exception:** B (wrong-product) — same ADP admin-surfaces-only Non-Goal as F39/F45/F49.
**Final fix:** "Agentic Data Platform — digital and CRM data connect into one governed customer view your relationship bankers' tools can draw on. One customer, one story, on both sides of the counter."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### healthcare

#### F54 — healthcare — solutions[1] (Campaign Orchestrator)
**Current copy:** "The Campaign Orchestrator orchestrates enrollment season campaigns at scale — dynamically segmenting audiences by plan eligibility and personalizing messaging for each cohort. The 54-day sprint across millions of members and dozens of plan options stops depending on manual content and audience management, in a market where 13 million members switched plans last cycle."
**Reason for exception:** B (wrong-product) — CO's PRD Non-Goals: "Not the planning tool... CO operates strictly in-flight," with no audience-segmentation or messaging-personalization function anywhere in its MVP scope. Those capabilities belong to Audience Builder and Personalization. The clearest wrong-product example in the audit.
**Final fix:** "The Campaign Orchestrator keeps enrollment season spend on track at scale — catching performance drift mid-flight and reallocating budget before it's wasted. The 54-day sprint across millions of members and dozens of plan options stops running on gut-feel and weekly reports, in a market where 13 million members switched plans last cycle."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F56 — healthcare — personas[1].solution (Enrollment Marketing Director)
**Current copy:** "Orchestrates enrollment season at scale: audiences dynamically segmented by plan eligibility, messaging personalized per cohort, and the 54-day sprint run on automation instead of overtime."
**Reason for exception:** B (wrong-product) — same as F54.
**Final fix:** "Orchestrates enrollment season at scale: performance tracked across channels, drift caught before it wastes budget, and the 54-day sprint run on continuous optimization instead of overtime."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F58 — healthcare — showcase.columns[1] (Campaign Orchestrator)
**Current copy:** "Audiences segmented dynamically by plan eligibility, messaging personalized per cohort, and millions of member touchpoints orchestrated through the AEP window."
**Reason for exception:** B (wrong-product) — same as F54.
**Final fix:** "Spend tracked and reallocated dynamically across channels, drift flagged before it wastes budget, and millions of member touchpoints kept on course through the AEP window."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F60 — healthcare — stackShowcase.columns[1] (Campaign Orchestrator)
**Current copy:** "Campaign Orchestrator — plan-eligibility segmentation and per-cohort messaging run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Reason for exception:** B (wrong-product) — same as F54.
**Final fix:** "Campaign Orchestrator — spend reallocation and drift detection run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F61 — healthcare — faq[1] ("How does Kana connect to our healthcare stack?")
**Current copy:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, typically going live in 2–4 weeks."
**Reason for exception:** D (fabricated/unvalidated claim) — the PRD's own success metric for this figure is explicitly unset ("JIT claim — set exact target with first partner"); "2–4 weeks" isn't a backlog capability, it's a specific number nobody has validated yet.
**Final fix:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, with most teams live in weeks, not months."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### qsr

#### F63 — qsr — solutionRows[0] (Campaign Orchestrator)
**Current copy:** "Campaign Orchestrator enables location-aware audience and budget optimization — adjusting spend automatically by market performance signal. Instead of one national plan applied to thousands of different trade areas, each market's traffic patterns, competitive set, and menu preferences shape where the next dollar goes."
**Reason for exception:** A+bundled — "adjusting spend automatically" violates CO's permanent trust boundary ("Never ungated execution... unattended budget movement is a permanent trust boundary, not a maturity milestone"). Location-level optimization itself is genuine backlog (QSR/Retail whitespace) and stays marketed confidently, including "thousands of different trade areas."
**Final fix:** "Campaign Orchestrator enables location-aware audience and budget optimization — surfacing where spend should shift by market performance signal, with your team approving every move before it ships. Instead of one national plan applied to thousands of different trade areas, each market's traffic patterns, competitive set, and menu preferences shape where the next dollar goes."
**Fix type:** NEW-SURGICAL-FIX

#### F64 — qsr — solutionRows[1] (Agentic Data Platform)
**Current copy:** "The Agentic Data Platform connects your operational data feeds to campaign logic — suppressing or adjusting offers based on real-time kitchen and inventory conditions. When an item gets 86'd or the line is at capacity, the push that would have promoted it pauses or pivots automatically. Marketing stops promising what operations can't serve."
**Reason for exception:** A+B — "pauses or pivots automatically" is an explicit permanent-boundary violation (ADP runs on a propose→approve→act→audit primitive, not autonomous execution), and "connects... to campaign logic" wrongly attributes campaign-decision ownership to ADP itself, when the PRD assigns that to "the suite apps that consume it."
**Final fix:** "The Agentic Data Platform keeps your campaign tools working from the same operational picture as your stores — so when an item gets 86'd or the line is at capacity, your team can catch and adjust the offer that would have promoted it before it goes out, instead of finding out from a guest complaint. Marketing stops promising what operations can't serve."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F65 — qsr — solutionRows[2] (Audience Builder)
**Current copy:** Title: "Day-parts that flex with demand, not the calendar." Description: "Audience Builder works together with the Campaign Orchestrator to ingest external demand signals — weather, events, traffic, competitive promotions — and support optimized day-part targeting and offer timing across digital and local channels. Breakfast, lunch, and dinner campaigns respond to what's shifting demand this morning instead of running the schedule set last month."
**Reason for exception:** B (wrong-product) — AB's own Non-Goals: "Not a campaign or messaging tool... content, journeys, and send decisions belong to Personalization and Campaign Orchestrator." This is the policy's named textbook example.
**Final fix:** Title: "Audiences that are ready the moment demand shifts." Description: "Audience Builder builds precise, sized segments straight from your CRM and loyalty data — with suppression logic built in, so recent purchasers and opt-outs are automatically excluded. Instead of a two-week ticket to the data team, breakfast, lunch, and dinner segments are ready in minutes, so the offer goes out while the moment is still there."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F66 — qsr — faq[0] ("How does Kana connect to our restaurant stack?")
**Current copy:** "Via API. Kana sits on top of your POS (Toast, Brink, Oracle Simphony), loyalty platform (Punchh, Paytronix), ordering system (Olo), and ad platforms — no rip-and-replace, no warehouse migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Reason for exception:** D (fabricated/unvalidated claim, bundled with backlog element) — "2–4 weeks" isn't PRD-validated (the PRD's own onboarding-speed metric is TBD, set per first partner); the named POS/loyalty/ordering connectors are broader than the current MVP (warehouse + 2 live sources) but ARE listed as near-term backlog, so keep marketing them confidently.
**Final fix:** "Via API. Kana sits on top of your POS (Toast, Brink, Oracle Simphony), loyalty platform (Punchh, Paytronix), ordering system (Olo), and ad platforms — no rip-and-replace, no warehouse migration. Kana's solutions team handles setup, with timelines depending on how many systems you're connecting."
**Fix type:** NEW-SURGICAL-FIX (keeps every named connector verbatim; removes only the unvalidated "2–4 weeks" figure)

#### F67 — qsr — faq[1] ("How does the Agentic Data Platform know what's happening in the kitchen?")
**Current copy:** "It reads the operational feeds your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity signals from your POS and ordering systems — and wires them into campaign logic. Offers pause or adjust automatically when conditions change, and every rule runs with your team's oversight."
**Reason for exception:** A+B — "pause or adjust automatically" violates the permanent approval-gated action loop; "wires them into campaign logic" wrongly attributes campaign-decision ownership to ADP.
**Final fix:** "It's built to work from the same operational signals your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity — so offer decisions can reflect current conditions instead of a calendar set weeks ago. Every rule runs with your team's review before an offer goes out."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F68 — qsr — personas[0].solution (Field/Franchise Marketing Manager)
**Current copy:** "Location-aware audience and budget optimization that adjusts spend automatically by market performance signal. Every store's trade area gets a plan shaped by its own traffic patterns and competitive set — and the franchisee conversation starts from their numbers."
**Reason for exception:** A+bundled — same autonomy violation as F63; location-level optimization (trade-area-level plans) is genuine backlog and stays.
**Final fix:** "Location-aware audience and budget optimization that surfaces where spend should shift by market performance signal, with your team approving every move before it ships. Every store's trade area gets a plan shaped by its own traffic patterns and competitive set — and the franchisee conversation starts from their numbers."
**Fix type:** NEW-SURGICAL-FIX

#### F69 — qsr — personas[1].solution (Director of CRM & Lifecycle)
**Current copy:** "Connects operational data feeds to campaign logic, suppressing or adjusting offers on real-time kitchen and inventory conditions. The push calendar stops promising what the store can't serve."
**Reason for exception:** A+B — "suppressing or adjusting offers" is system action stated with no approval step (autonomy violation); "campaign logic" ownership is wrongly attributed to ADP.
**Final fix:** "Keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it sends. The push calendar stops promising what the store can't serve."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F70 — qsr — personas[2].solution (Director of Media)
**Current copy:** "Ingests external demand signals — weather, events, traffic, competitive promotions — and works with the Campaign Orchestrator to optimize day-part targeting and offer timing across digital and local channels, market by market."
**Reason for exception:** B (wrong-product) — same as F65.
**Final fix:** "Builds sized, suppressed audiences straight from your CRM and loyalty data in minutes instead of weeks — so day-part campaigns launch from a current segment instead of a stale export, market by market."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F72 — qsr — showcase.columns[0] (Campaign Orchestrator)
**Current copy:** "Location-aware budget optimization adjusts spend automatically by market performance signal — so high-variance markets get plans built for their trade area, not the national mean."
**Reason for exception:** A+bundled — same as F63/F68.
**Final fix:** "Location-aware budget optimization surfaces where spend should shift by market performance signal, with every reallocation reviewed and approved by your team — so high-variance markets get plans built for their trade area, not the national mean."
**Fix type:** NEW-SURGICAL-FIX

#### F73 — qsr — showcase.columns[1] (Agentic Data Platform)
**Current copy:** "Operational feeds gate campaign logic in real time. When the kitchen is slammed or an item is out, the offer pauses or pivots — before the guest finds out at the counter."
**Reason for exception:** A+B — "gate campaign logic" and "the offer pauses or pivots" (unilateral system action, no approval mentioned) both violate the permanent boundary and misattribute campaign-decision ownership.
**Final fix:** "Kana keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it goes out — before the guest finds out at the counter."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F74 — qsr — showcase.columns[2] (Audience Builder)
**Current copy:** Title: "Day-parts that flex with the weather." Description: "External demand signals — weather, events, traffic, competitor promos — reshape day-part targeting and offer timing across digital and local channels while the demand is still there."
**Reason for exception:** B (wrong-product) — same as F65.
**Final fix:** Title: "Segments that are ready before the moment passes." Description: "Audiences build straight from your CRM and loyalty data in minutes, not weeks — with suppression built in — so day-part campaigns launch from a current segment while the demand is still there."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F76 — qsr — stackShowcase.columns[0] (Campaign Orchestrator)
**Current copy:** Title: "Give every location its own plan without hiring a planner per market." Description: "Campaign Orchestrator — market performance signals drive location-aware budget and audience optimization across thousands of trade areas. The stores the pooled fund used to leave behind get plans shaped by their own demand."
**Reason for exception:** B (wrong-product, bundled with backlog element) — "audience... optimization" is Audience Builder's job per its own PRD, not Campaign Orchestrator's; location-level budget optimization itself is genuine backlog and stays, including "thousands of trade areas."
**Final fix:** Title: "Give every location its own plan without hiring a planner per market." Description: "Campaign Orchestrator — market performance signals drive location-aware budget optimization across thousands of trade areas. The stores the pooled fund used to leave behind get plans shaped by their own demand."
**Fix type:** NEW-SURGICAL-FIX (removes only "and audience" from "budget and audience optimization")

#### F77 — qsr — stackShowcase.columns[1] (Agentic Data Platform)
**Current copy:** Title: "Wire the kitchen into campaign logic." Description: "Agentic Data Platform — operational feeds from your POS and ordering systems gate every offer on real-time inventory and kitchen conditions. Marketing and operations stop finding out about each other from guest complaints."
**Reason for exception:** A+B — "gate every offer" is unilateral system action with no approval step; campaign-logic ownership is wrongly attributed to ADP.
**Final fix:** Title: "Keep campaigns honest about what the kitchen can deliver." Description: "Agentic Data Platform — keeps your campaign tools working from the same operational picture as your stores, so offers can be caught and adjusted before they go out. Marketing and operations stop finding out about each other from guest complaints."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F78 — qsr — stackShowcase.columns[2] (Audience Builder)
**Current copy:** Title: "Target the day-part, not just the demographic." Description: "Audience Builder — external demand signals reshape targeting and offer timing by day-part and market. Proximity, trade area, and time-of-day drive QSR visits; your campaigns finally act like it."
**Reason for exception:** B (wrong-product) — same as F65.
**Final fix:** Title: "Build the segment, not just the demographic." Description: "Audience Builder — sized, suppressed segments build straight from your CRM and loyalty data in minutes. Proximity, trade area, and visit timing live in your data; your campaigns finally act on it fast enough to matter."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### travel-hospitality

#### F80 — travel-hospitality — solutionRows[0] (Personalization)
**Current copy:** title: "Real-time offers for members who earned better than batch" / description: "Personalization monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Reason for exception:** A+bundled — "triggers... offers... in real time" implies an autonomous send (the policy names "triggers the send" as one of the disqualifying words); "in real time" itself is a genuine cadence/backlog claim and stays.
**Final fix:** title: "Real-time offers for members who earned better than batch" / description: "Personalization reads loyalty member activity signals and recommends contextually relevant offers in real time across email, app, and web, for your team to review and send. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Fix type:** NEW-SURGICAL-FIX

#### F81 — travel-hospitality — solutionRows[1] (Category Intelligence)
**Current copy:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses. When a competitor drops rates on a key route or destination, marketing gets the alert with a suggested play, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Reason for exception:** A+bundled — "recommended messaging and audience responses" is a capability the CI PRD calls "off-model" for a citation/research product ("Generative media briefs... unsteerable fresh research... off-model"), a permanent product-design boundary, not backlog. "Continuously" is a genuine cadence claim (actual cadence is daily) and stays verbatim per policy.
**Final fix:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence monitors competitive pricing signals continuously and surfaces alerts with the cited evidence behind them. When a competitor drops rates on a key route or destination, marketing gets the alert and the sourced findings, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Fix type:** NEW-SURGICAL-FIX

#### F82 — travel-hospitality — solutionRows[2] (Audience Builder)
**Current copy:** title: "Re-engage on the guest's booking window, not the calendar" / description: "Audience Builder works together with the Campaign Orchestrator to identify re-engagement windows based on behavioral signals and support personalized outreach. Win-back and anniversary campaigns stop firing on fixed schedules and start landing when a guest's next booking window is actually opening, informed by travel intent signals and membership tier dynamics."
**Reason for exception:** B (wrong-product) — AB Non-Goals: "Not a campaign or messaging tool... send decisions belong to Personalization and Campaign Orchestrator."
**Final fix:** title: "Build the guest list that's actually worth re-engaging" / description: "Audience Builder builds precise, suppressed guest segments — lapsed loyalty members, recent cancellations, high-value repeat bookers — straight from your CRM, loyalty, and booking data, then hands them to Personalization and Campaign Orchestrator to act on. Win-back and anniversary lists stop being static exports and start reflecting exactly who's eligible to hear from you today."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F83 — travel-hospitality — solutionRows[3] (Campaign Orchestrator)
**Current copy:** title: "Outreach triggered at the optimal moment" / description: "The Campaign Orchestrator works together with the Audience Builder to use behavioral insights and trigger personalized outreach at the optimal moment, across email, app, and paid channels. The post-stay sequence stops running on checkout-plus-seven timers and starts responding to what each guest actually signals."
**Reason for exception:** B (wrong-product) — per-guest messaging timing is Personalization's job, not CO's; CO's own Non-Goals ("Not the planning tool... operates strictly in-flight") never assign it any guest-messaging role at all.
**Final fix:** title: "Catch budget drift before it costs you the flight" / description: "Campaign Orchestrator watches your live campaign spend across channels, flags when a channel drifts from the brief or stops earning its keep, and proposes a reallocation for your approval. No more finding out at the monthly readout that a channel drained budget for two weeks straight."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F85 — travel-hospitality — faq[2] ("How is Personalization different from Audience Builder and Campaign Orchestrator?")
**Current copy:** "Audience Builder and Campaign Orchestrator decide who to reach and when a guest's re-engagement window is actually open. Personalization decides what to offer them once they're there, calibrated to the member, the moment, and the tier. Most teams run all three together."
**Reason for exception:** B (wrong-product) — the PRD puts "when" inside Personalization's six-decision engine, not AB or CO.
**Final fix:** "Audience Builder decides who to reach — precise, suppressed guest segments built from your CRM, loyalty, and booking data. Personalization decides what to offer and when, calibrated to the member, the moment, and the tier. Campaign Orchestrator keeps the ad spend behind those campaigns on track. Most teams run all three together."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F87 — travel-hospitality — faq[0] ("How does Kana connect to our hospitality stack?")
**Current copy:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Reason for exception:** D (fabricated/unvalidated claim) — no PRD gives an implementation timeline; "2–4 weeks" isn't sourced anywhere. The connector list and "no rip-and-replace" architecture claim are accurate and untouched.
**Final fix:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, with timelines depending on how many systems you're connecting."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F88 — travel-hospitality — personas[0] (Marketing Automation Manager) — solution
**Current copy:** "Works together with Audience Builder to trigger personalized outreach at the optimal moment, across email, app, and paid channels, instead of a fixed post-stay timer. One system replaces the manual handoff between channels for a single guest journey."
**Reason for exception:** B (wrong-product) — same as F83.
**Final fix:** "Watches your live campaign spend across channels and flags when a channel drifts from the brief or stops earning its keep, proposing a reallocation for your approval instead of waiting for the weekly report. One system replaces the manual channel-by-channel spend review."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F89 — travel-hospitality — personas[1] (E-Commerce / Digital Strategy Manager) — solution
**Current copy:** "Monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses, so marketing reacts in the same news cycle as the rate change, not the one after."
**Reason for exception:** A+bundled — same as F81 (messaging/audience-recommendation is off-model; "continuously" is cadence backlog and stays).
**Final fix:** "Monitors competitive pricing signals continuously and surfaces alerts with the cited evidence behind them, so marketing reacts in the same news cycle as the rate change, not the one after."
**Fix type:** NEW-SURGICAL-FIX

#### F90 — travel-hospitality — personas[2] (Lifecycle Marketing Manager) — solution
**Current copy:** "Works with the Campaign Orchestrator to identify each guest's real re-engagement window from behavioral signals, and trigger personalized outreach at the optimal moment, not the scheduled one."
**Reason for exception:** B (wrong-product) — same as F82.
**Final fix:** "Builds precise, suppressed guest segments from behavioral and loyalty signals, then hands them to Personalization and Campaign Orchestrator to act on — so outreach targets who's actually eligible today, not a static scheduled list."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F91 — travel-hospitality — personas[3] (Head of Loyalty) — solution
**Current copy:** "Monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time, calibrated to the member, the moment, and the tier. Built on the Audience Builder foundation, so it activates on data teams already have flowing."
**Reason for exception:** A+bundled, plus D — "triggers... in real time" is the same autonomy violation as F80 ("in real time" itself stays, genuine cadence backlog); separately, "Built on the Audience Builder foundation" is a fabricated architecture claim with no PRD support at all (the only cross-product reuse named anywhere is a shared identity-graph substrate, not an AB dependency) — removed under category D, not rescued by backlog policy since there's no such planned dependency on any roadmap either.
**Final fix:** "Monitors loyalty member activity signals and recommends contextually relevant offers in real time across email, app, and web, for your team to review and send — calibrated to the member, the moment, and the tier. It runs on the CRM and loyalty data you already have connected."
**Fix type:** NEW-SURGICAL-FIX

#### F93 — travel-hospitality — showcase.columns[0] (Personalization)
**Current copy:** title: "Offers tuned to the guest, not the segment" / description: "Real-time loyalty signals feed straight into the offer a guest sees, so your highest-tier member and a first-time subscriber never get the same email."
**Reason for exception:** A+bundled — "the offer a guest sees" implies automatic serving with no approval step; "Real-time" is genuine cadence backlog and stays.
**Final fix:** title: "Offers tuned to the guest, not the segment" / description: "Real-time loyalty signals feed straight into the next offer we recommend for a guest, for your team to review and send, so your highest-tier member and a first-time subscriber never get the same email."
**Fix type:** NEW-SURGICAL-FIX

#### F94 — travel-hospitality — showcase.columns[1] (Category Intelligence)
**Current copy:** title: "Answer the rate drop the same day" / description: "Continuous competitive-rate monitoring with recommended messaging and audience responses, so marketing hears it from the signal, not from sales."
**Reason for exception:** A+bundled — same as F81/F89.
**Final fix:** title: "Answer the rate drop the same day" / description: "Continuous competitive-rate monitoring with cited alerts on exactly what moved, so marketing hears it from the signal, not from sales."
**Fix type:** NEW-SURGICAL-FIX

#### F95 — travel-hospitality — showcase.columns[2] (Audience Builder)
**Current copy:** title: "Catch the booking window while it's open" / description: "Behavioral signals reveal when each guest's next trip is forming, so win-back and anniversary outreach lands in the booking window, not on the calendar date."
**Reason for exception:** B (wrong-product) — same as F82/F90.
**Final fix:** title: "Build the list, not just the calendar" / description: "Guest segments build directly from your CRM and loyalty data — lapsed members, recent cancellations, high-value repeat bookers — so win-back and anniversary outreach reflects who's actually eligible, not a static calendar export."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F96 — travel-hospitality — stackShowcase.subtitle
**Current copy:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration, no new governance gaps."
**Reason for exception:** D (unsupported present-tense guarantee) — "no new governance gaps" is a flat, present-tense claim contradicted by all three marketer PRDs, which list Data Governance & Retention as Backlog (unresolved), not a solved problem today. This isn't a future capability being marketed early — it's an absolute claim about the current state that's actively false.
**Final fix:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F97 — travel-hospitality — stackShowcase.columns[0] (Personalization)
**Current copy:** title: "Turn the loyalty database into a live channel" / description: "Personalization: monitors member activity signals and triggers contextually relevant offers across email, app, and web in real time, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Reason for exception:** A+bundled — same as F80/F93.
**Final fix:** title: "Turn the loyalty database into a live channel" / description: "Personalization: monitors member activity signals and recommends contextually relevant offers in real time across email, app, and web, for your team to review and send, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Fix type:** NEW-SURGICAL-FIX

#### F98 — travel-hospitality — stackShowcase.columns[1] (Category Intelligence)
**Current copy:** title: "Give marketing its own rate shopper" / description: "Category Intelligence: continuous competitive-rate monitoring that answers with marketing moves: the alert, the recommended message, and the audience to send it to, in one motion."
**Reason for exception:** A+bundled — same as F81/F89/F94.
**Final fix:** title: "Give marketing its own rate shopper" / description: "Category Intelligence: continuous competitive-rate monitoring that surfaces the alert and the cited evidence behind it, so marketing acts on the signal instead of waiting for the secondhand version."
**Fix type:** NEW-SURGICAL-FIX

#### F99 — travel-hospitality — stackShowcase.columns[2] (Audience Builder)
**Current copy:** title: "Time every journey to the guest, not the template" / description: "Audience Builder: behavioral re-engagement windows replace fixed post-stay timers, so the guests who rebook at 33% through your CRM hear from you when their next trip is forming."
**Reason for exception:** B (wrong-product) — same as F82/F90/F95.
**Final fix:** title: "Build the segment the guest actually belongs in" / description: "Audience Builder: precise, suppressed guest segments replace static post-stay lists, so the guests who rebook at 33% through your CRM are the ones your campaigns are actually built around."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### media-advertisers

#### F100 — media-advertisers — solutions[1] (Audience Builder, main solution row)
**Current copy:** "Audience Builder identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe. Sequences stop launching 30–60 days after the cancel, when intent to return has collapsed, and start reaching each cohort in the days when a comeback is actually likely."
**Reason for exception:** B (wrong-product) — AB's own Non-Goals: "Not a campaign or messaging tool... send decisions belong to Personalization and Campaign Orchestrator" — the policy's textbook example.
**Final fix:** "Audience Builder builds and activates the lapsed-subscriber segment in minutes, not the usual 30–60-day lag, with recent purchasers and opt-outs suppressed automatically. Cohorts stop waiting on a data-team ticket and start reaching the door while intent to come back is still there."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F101 — media-advertisers — painPoints[1] (win-back resolution, Audience Builder)
**Current copy:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder times the outreach to launch inside that window instead of the typical 30–60 days post-churn."
**Reason for exception:** B (wrong-product) — same as F100.
**Final fix:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder builds and activates that segment in minutes instead of the typical 30–60-day lag, so the ask can go out while the window's still open."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F102 — media-advertisers — personas[1] (Growth Marketing Manager, Win-Back) — solution
**Current copy:** "Identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe, often the first seven days, not the second month."
**Reason for exception:** B (wrong-product) — same as F100.
**Final fix:** "Builds and activates the lapsed-subscriber segment by cohort in minutes, with recent purchasers and opt-outs suppressed automatically, so outreach can go out in the first seven days instead of the second month."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F103 — media-advertisers — showcase.columns[1] (Audience Builder)
**Current copy:** "Optimal win-back windows identified per cohort, with personalized re-engagement offers triggered inside the highest-conversion timeframe, days after the cancel, not months."
**Reason for exception:** B (wrong-product) — same as F100.
**Final fix:** "Lapsed-subscriber segments built and activated per cohort in minutes, suppression logic built in, so outreach can launch days after the cancel, not months."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F104 — media-advertisers — stackShowcase.columns[1] (Audience Builder)
**Current copy:** "Audience Builder: behavioral signals identify when each subscriber cohort is most likely to return, and re-engagement offers fire inside that window instead of on the 60-day timer."
**Reason for exception:** B (wrong-product) — same as F100.
**Final fix:** "Audience Builder: build and activate the lapsed-subscriber segment by cohort in minutes, suppression built in, so re-engagement can launch days after the cancel instead of on the 60-day timer."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F105 — media-advertisers — solutions[0] (Personalization, main solution row)
**Current copy:** Title: "Recommendations that know what they watched last night" / Description: "Personalization incorporates recency-weighted behavioral signals directly into your recommendation logic, so every subscriber sees content matched to what they engaged with most recently, not a static profile from months ago. Session depth goes up, dormancy goes down, and the engine keeps learning with every session instead of waiting for the next model refresh."
**Reason for exception:** A (permanent non-goal) — Personalization's Non-Goals: "Not a marketing automation platform... Personalization decides and hands off." It's a retention-decisioning engine, not an integration into the platform's own content-recommendation logic — a permanent product-category boundary, not a timing gap.
**Final fix:** Title: "Retention offers that know what they watched last night" / Description: "Personalization scores every subscriber's churn risk from recency-weighted behavioral signals and decides the next offer, channel, and moment to reach them, not a static profile from months ago. Every decision comes with a plain-language reason, and nothing goes out without your team's approval."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F106 — media-advertisers — faq ("Does Personalization replace our existing recommendation engine?")
**Current copy:** Q: "Does Personalization replace our existing recommendation engine?" / A: "No, it strengthens it. Personalization layers recency-weighted behavioral signals on top of whatever recommendation logic you already run, so the existing engine gets sharper instead of replaced. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Reason for exception:** A (permanent non-goal) — same as F105.
**Final fix:** Q: "Does Personalization replace our lifecycle or retention marketing tools?" / A: "No, it strengthens them. Personalization scores churn risk and decides the next offer, channel, and send time from recency-weighted behavioral signals, then hands off to whatever marketing platform you already send from. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F107 — media-advertisers — faq ("How is Personalization different from Audience Builder?")
**Current copy:** "Audience Builder decides who to reach and when their re-engagement window is actually open. Personalization decides what to show them once they're back, recommendations weighted to what they've watched or read most recently. Most teams run both together: Audience Builder times the outreach, Personalization makes the content in it worth returning for."
**Reason for exception:** B (wrong-product) — AB doesn't decide the re-engagement window; timing is out of scope per AB's Non-Goals.
**Final fix:** "Audience Builder builds and activates the audience: who's lapsed, who's suppressed, who's ready for outreach. Personalization decides what happens next for each of them — the offer, channel, and moment most likely to bring them back — weighted to what they've done most recently. Most teams run both together: Audience Builder gets the list built and activated fast, Personalization decides what each person on it sees."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F108 — media-advertisers — personas[3] (Head of Product, Recommendations) — solution
**Current copy:** "Incorporates recency-weighted behavioral signals into content recommendation logic, increasing session depth and reducing subscriber dormancy. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Reason for exception:** A (permanent non-goal) — same as F105; "session depth" also isn't a PRD-supported metric for this product.
**Final fix:** "Scores churn risk and decides the next offer, channel, and moment from recency-weighted behavioral signals instead of a stale profile, with a reason behind every decision. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F109 — media-advertisers — personas[4] (CMO / Head of Subscriber Growth) — solution
**Current copy:** "The platform anchor: recency-weighted recommendations that keep every subscriber's experience current with what they're actually watching or reading, not a profile that's months stale. Retention and growth both run through the same signal."
**Reason for exception:** A (permanent non-goal) — same as F105.
**Final fix:** "The platform anchor: recency-weighted retention decisions that stay current with what each subscriber is actually doing, not a profile that's months stale. Retention and growth both run through the same signal."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F110 — media-advertisers — showcase.columns[0] (Personalization)
**Current copy:** "Recency-weighted signals feed straight into your recommendation logic, so what a subscriber sees matches what they engaged with recently, not a profile trained months ago."
**Reason for exception:** A (permanent non-goal) — same as F105.
**Final fix:** "Recency-weighted signals feed straight into every retention decision, so the offer and channel match what a subscriber engaged with recently, not a profile trained months ago."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F111 — media-advertisers — stackShowcase.columns[0] (Personalization)
**Current copy:** "Personalization: recency-weighted signals feed straight into your existing recommendation engine, so what a subscriber sees reflects what they did this week, not a profile trained months ago."
**Reason for exception:** A (permanent non-goal) — same as F105.
**Final fix:** "Personalization: recency-weighted signals feed straight into every retention decision, so the offer a subscriber gets reflects what they did this week, not a profile trained months ago."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F112 — media-advertisers — stats[1] (77% churn stat)
**Current copy:** { number: "77%", label: "of streaming subscribers aren't serial churners — personalization decides who avoids joining the other 23% (Antenna)" }
**Reason for exception:** D (unsupported causal claim) — retention lift is an explicitly unmeasured (TBD) metric in the PRD; "personalization decides who avoids" churn overstates proven efficacy that hasn't been validated at all yet, not a capability-timing issue.
**Final fix:** { number: "77%", label: "of streaming subscribers aren't serial churners — the other 23% are exactly who a sharper win-back and retention motion is built to reach (Antenna)" }
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F113 — media-advertisers — solutions[2] (Campaign Orchestrator, main solution row)
**Current copy:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to days."
**Reason for exception:** D (numeric overclaim vs. a defined PRD target) — the PRD's own MVP success metric explicitly states "Months → weeks," not days; this contradicts a specific stated target, it isn't a matter of an unbuilt capability.
**Final fix:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to weeks."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F114 — media-advertisers — showcase.columns[2] (Campaign Orchestrator)
**Current copy:** Title: "Run the pricing test in days, not quarters"
**Reason for exception:** D — same as F113.
**Final fix:** "Run the pricing test in weeks, not quarters"
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### media-networks

#### F123 — media-networks — solutions[3] (Campaign Orchestrator — description)
**Current copy:** "Campaign Orchestrator automates campaign pacing, delivery monitoring, and performance reporting across your onsite and offsite campaigns, giving your ops team real-time visibility into every campaign in flight without the manual overhead."
**Reason for exception:** A+bundled — "automates campaign pacing" violates the publisher CO's permanent trust boundary ("Never fully autonomous... unattended write-back to a customer's ad server is a permanent trust boundary"). "Real-time" and "onsite and offsite" are both genuine backlog (daily batch today; non-GAM/offsite formats are named Backlog items elsewhere in this same PRD) and stay verbatim.
**Final fix:** "Campaign Orchestrator monitors campaign pacing, delivery, and performance across your onsite and offsite campaigns in real time, giving your ops team the recommendations and visibility to act fast, without the manual overhead of building it by hand."
**Fix type:** NEW-SURGICAL-FIX

#### F124 — media-networks — personas[2] (Ad Operations / Campaign Manager) — solution.description
**Current copy:** "Automated pacing, delivery monitoring, and reporting across every campaign in flight. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Reason for exception:** A (permanent non-goal) — "Automated pacing" implies Kana adjusts delivery itself; the PRD's guardrail is recommend-only, human-executed. No onsite/offsite or real-time claim in this instance to preserve.
**Final fix:** "Pacing risk flagged and explained across every campaign in flight, with reporting handled for you. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F125 — media-networks — showcase.columns[1] ("Run a hundred campaigns with the team you have")
**Current copy:** "Pacing, delivery, and reporting handled by agents across onsite and offsite — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Reason for exception:** A+bundled — "handled by agents" implies autonomous execution; "onsite and offsite" is genuine backlog and stays.
**Final fix:** "Pacing risk flagged and explained daily across onsite and offsite campaigns, with reporting handled for you — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Fix type:** NEW-SURGICAL-FIX

#### F126 — media-networks — stackShowcase.columns[1] ("Get campaign ops out of Excel")
**Current copy:** "Campaign Orchestrator — media planning, pacing, and performance reporting connected to the systems that deliver the campaigns, so co-op budgets and shopper programs stop living in disconnected spreadsheets."
**Reason for exception:** D (capability absent from all PRD scope, not listed as backlog anywhere) — "media planning," "co-op budgets," and "shopper programs" don't appear in CO's data requirements or functional requirements at all, backlogged or otherwise; there's no indication these are even planned, so the "market the eventual capability confidently" policy doesn't have anything to attach to.
**Final fix:** "Campaign Orchestrator — pacing risk, delivery monitoring, and performance reporting connected to the systems that deliver your campaigns, so the daily portfolio check stops living in disconnected spreadsheets."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F127 — media-networks — solutions[4] (LLM Command Center — roleLabel + title + description)
**Current copy:** roleLabel: "Built for Revenue & Brand-Safety Leads" / title: "Brand safety and AI discovery, managed instead of hoped for" / description: "Brand advertisers increasingly scrutinize contextual adjacency and how their brands appear in AI answer environments — and AI platforms are on track for $20.9 billion in retail spending in 2026. The LLM Command Center monitors brand-safe inventory signals and tracks how advertiser and publisher brands appear across AI-generated content environments, turning a governance risk into a competitive differentiator you can put in front of buyers."
**Reason for exception:** B (wrong-product) — LLM CC's own Non-Goals: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." Every clause in the current copy describes AEO2, a different, specifically named Kana product.
**Final fix:** roleLabel: "Built for Content Ops & Revenue Leads" / title: "AI crawlers are already reading your content. Decide what they get." / description: "47+ AI bots crawl your properties around the clock, and today the choice is all-or-nothing — robots.txt either hands them everything or blocks them outright. The LLM Command Center gives you plain-English, per-section policies — full access, summary, highlights, or deny, by bot and by property — plus the consumption reporting you need to bring a licensing conversation to the table instead of giving your content away for free."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

### print-digital-audio

#### F131 — print-digital-audio — solutions[1].title (LLM Command Center)
**Current copy:** "See — and shape — how your content appears in AI answers"
**Reason for exception:** B (wrong-product) — same LLM CC / AEO2 boundary as F127.
**Final fix:** "See — and control — who's crawling your content, and on what terms"
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F132 — print-digital-audio — solutions[1].description (LLM Command Center)
**Current copy:** "The LLM Command Center monitors how your content appears in AI-generated responses across major LLMs, identifies coverage and accuracy gaps, and surfaces the opportunities to optimize for AI-era discovery and attribution. The traffic your search team spent two decades winning is being re-decided inside AI answers; this is the instrument panel for winning it there too."
**Reason for exception:** B (wrong-product) — same as F131.
**Final fix:** "The LLM Command Center shows you which AI crawlers are pulling your content, lets you set plain-English access policies by content tier, and turns that activity into evidence for licensing conversations. The traffic your search team spent two decades winning is now being harvested by bots instead of read by people; this is the instrument panel for setting the terms of that trade."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F133 — print-digital-audio — faq[1] ("What does the LLM Command Center actually monitor?")
**Current copy:** "How your content appears in AI-generated responses across major LLMs — where you're cited, where you're absent, and where the answer misrepresents your reporting. It identifies coverage and accuracy gaps and surfaces concrete opportunities to optimize content for AI-era discovery and attribution, so your response to the search-traffic shift is a managed program instead of a guess."
**Reason for exception:** B (wrong-product) — same as F131.
**Final fix:** "Which AI bots are crawling your content, how often, and what they're taking — training, RAG, search, or research. You set plain-English access policies by content tier and provider, and every crawl becomes evidence you can bring to a licensing conversation, so your response to AI crawlers is a managed program instead of a guess."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F134 — print-digital-audio — personas[1].solution.description (LLM Command Center)
**Current copy:** "Monitors your presence across AI-generated responses, flags coverage and accuracy gaps, and turns AI-era discovery into a discipline your team runs — the way it once ran SEO."
**Reason for exception:** B (wrong-product) — same as F131.
**Final fix:** "Monitors AI crawler activity across your properties, lets you set access policy by content tier, and turns AI consumption into a discipline your team runs — and a licensing case you can make."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F135 — print-digital-audio — showcase.columns[2] (LLM Command Center)
**Current copy:** Title: "Win the answer, not just the ranking" / Description: "Coverage and accuracy across AI-generated responses, monitored and optimized — so the discovery shift becomes a program you manage instead of a chart you dread."
**Reason for exception:** B (wrong-product) — same as F131.
**Final fix:** Title: "Control the crawl, not just the ranking" / Description: "AI crawler activity monitored and governed by content tier — so the discovery shift becomes a program you manage instead of a chart you dread."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F138 — print-digital-audio — solutions[3].description (Personalization)
**Current copy:** "Personalization monitors subscriber engagement signals in real time, identifies churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Reason for exception:** A+bundled — "triggers tailored retention offers" violates the permanent human-approval gate ("Never contacts a customer without human approval... out of scope at any maturity level"); "in real time" is genuine cadence backlog and stays.
**Final fix:** "Personalization monitors subscriber engagement signals in real time, identifies churn-risk indicators early, and prepares tailored retention offers and content experiences for your team to approve before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Fix type:** NEW-SURGICAL-FIX

#### F139 — print-digital-audio — faq[0].a ("How is Personalization different from our paywall and subscription tools?")
**Current copy:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals in real time, flags churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Reason for exception:** A+bundled — same as F138.
**Final fix:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals in real time, flags churn-risk indicators early, and prepares tailored retention offers and content experiences for your team to approve before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Fix type:** NEW-SURGICAL-FIX

#### F140 — print-digital-audio — personas[3].solution.description (Personalization)
**Current copy:** "Real-time engagement monitoring that catches churn-risk indicators early and triggers tailored offers and content experiences before cancellation intent solidifies."
**Reason for exception:** A+bundled — same as F138.
**Final fix:** "Real-time engagement monitoring that catches churn-risk indicators early and prepares tailored offers and content experiences for your team to approve before cancellation intent solidifies."
**Fix type:** NEW-SURGICAL-FIX

#### F141 — print-digital-audio — showcase.columns[1].description (Personalization)
**Current copy:** "Engagement signals monitored in real time, churn risk caught early, and tailored retention offers triggered before cancellation intent solidifies — not after the cohort report."
**Reason for exception:** A+bundled — same as F138.
**Final fix:** "Engagement signals monitored in real time, churn risk caught early, and tailored retention offers prepared for approval before cancellation intent solidifies — not after the cohort report."
**Fix type:** NEW-SURGICAL-FIX

#### F142 — print-digital-audio — stackShowcase.columns[1].description (Personalization)
**Current copy:** "Personalization — real-time engagement signals connected to offer triggers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Reason for exception:** A+bundled — same as F138.
**Final fix:** "Personalization — real-time engagement signals connected to approved retention offers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Fix type:** NEW-SURGICAL-FIX

---

### streaming-video

#### F148 — streaming-video — solutions[0] (Personalization)
**Current copy:** "Personalization triggers tailored retention offers and content recommendations the moment behavioral churn signals cross a risk threshold — automating the intervention that prevents cancellations before they happen. The gap between your data science team's churn model and your engagement platform's campaign send collapses to zero: signal in, tailored action out, same session."
**Reason for exception:** A+bundled — "automating the intervention" and "triggers... offers" directly violate the permanent human-approval gate (this exact PRD line is the policy's named example: "fully autonomous customer-facing sends are out of scope at any maturity level"). "The moment... crosses a risk threshold" and "same session" describe genuine backlog immediacy (always-on event triggers) and stay.
**Final fix:** "Personalization flags tailored retention offers and content recommendations the moment behavioral churn signals cross a risk threshold — for your team to approve before the intervention goes out. The gap between your data science team's churn model and your engagement platform's campaign send collapses to a single review-and-approve step: signal in, tailored action ready, same session."
**Fix type:** NEW-SURGICAL-FIX

#### F149 — streaming-video — faq[0] ("We already have churn models. What does Personalization add?")
**Current copy:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to the intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation fires, automatically."
**Reason for exception:** A+bundled — "fires, automatically" is the clearest version of the permanent-gate violation on this page; "the moment a risk threshold is crossed" is genuine backlog immediacy and stays.
**Final fix:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to a ready-to-send intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation is drafted and waiting for your team to approve and launch."
**Fix type:** NEW-SURGICAL-FIX

#### F150 — streaming-video — personas[0].solution (Lifecycle / Retention Marketing Lead)
**Current copy:** "Real-time behavioral monitoring with automated, tailored interventions — retention offers and content recommendations that fire the moment risk crosses threshold, not after the batch job."
**Reason for exception:** A+bundled — "automated... interventions" and "fire" violate the permanent approval gate; "Real-time behavioral monitoring" and "the moment risk crosses threshold" are genuine backlog immediacy and stay.
**Final fix:** "Real-time behavioral monitoring with tailored interventions ready to approve — retention offers and content recommendations prepared the moment risk crosses threshold, so your team can launch same-day instead of after the batch job."
**Fix type:** NEW-SURGICAL-FIX

#### F151 — streaming-video — showcase.columns[0] ("Intervene before the cancellation, not after")
**Current copy:** "Behavioral churn signals trigger tailored offers and recommendations automatically — the retention infrastructure your churn model has been waiting for."
**Reason for exception:** A (permanent non-goal) — "trigger... automatically" is a direct violation; no separate cadence figure in this instance needs preserving.
**Final fix:** "Behavioral churn signals surface tailored offers and recommendations ready to approve — the retention infrastructure your churn model has been waiting for."
**Fix type:** ORIGINAL-SUGGESTED-FIX

#### F163 — streaming-video — solutions[4] (LLM Command Center)
**Current copy:** Title: "When viewers ask an AI what to watch, be the answer." Description: "Consumers increasingly ask AI assistants to find shows and content — and platforms that don't actively manage their presence in AI-generated recommendations risk losing organic discovery to competitors who do. The LLM Command Center monitors and optimizes how your streaming content appears across AI discovery environments, turning a passive distribution risk into an active, manageable competitive advantage."
**Reason for exception:** B (wrong-product) — same LLM CC / AEO2 boundary as F127/F131–135.
**Final fix:** Title: "When AI crawlers take your content for free, get paid or get out of the way." Description: "The LLM Command Center gives you visibility into every AI bot crawling your streaming library and lets you set the terms — what's fully accessible, what's summary-only, what's off-limits — turning an invisible traffic drain into a licensing conversation you control."
**Fix type:** ORIGINAL-SUGGESTED-FIX

---

## Notes on uncertain calls (flagged per your request)

1. **Cross-property/cross-device identity resolution (F16 vs. F120–122, F160–162).** The marketer-AB PRD's Non-Goal ("Not a CDP... lives in the data layer, not here") is unambiguous permanent language, so F16 is a clean APPROVE-A. The publisher-AB PRD citation for F120–122 and F160–162 is murkier: its Non-Goals use similar "Not a CDP/DMP" phrasing, but the same PRD also carries a White Space Backlog #3 entry that explicitly plans cross-device/cross-property identity resolution as a future "adapt, don't build" item. I read the Backlog #3 entry as controlling (genuine backlog → REJECT), but a reasonable person could read the Non-Goals language as the permanent-boundary framing the policy calls out — this is a real toss-up.
2. **Streaming-video Campaign Orchestrator ad-load findings (F152, F153, F157, F159).** The source audit's cross-page pattern section groups these with the "automatically"/"real-time" autonomy-violation pattern seen elsewhere for CO. On a close read of the actual sentences, though, each one explicitly names a human actor doing the optimizing ("so ops and ad product teams can optimize," "lets your... teams optimize") or uses ambiguous non-autonomy language ("steering"). I called these pure backlog (REJECT) based on the literal text, but flag that the audit's own pattern-matching disagrees.
3. **The "D" category itself (12 findings: F12, F17, F34, F61, F66, F87, F91, F96, F112, F113, F114, F126).** Your policy doesn't explicitly address fabricated statistics, unvalidated timelines, or present-tense guarantees that contradict the PRD — it's framed entirely around capability timing. I extended the spirit of the policy (backlog capabilities get marketed confidently; invented numbers/facts don't get a pass just because they're adjacent to a backlog item) rather than lumping these into either strict REJECT or strict A/B/C. Worth a gut-check on whether that's the read you want, especially for F91 and F126 where the "no basis anywhere" claim (an invented product dependency, invented feature scope) is less clean-cut than a simple fabricated percentage.
4. **F36 and F76 (bundled wrong-product findings inside otherwise-fine backlog sentences).** I split these sentence-by-sentence rather than accepting or rejecting the whole finding, since only one clause in each actually violates a permanent boundary. Flagging in case you'd rather reject these wholesale (simpler) or accept the full original suggested fix (more thorough) instead of my clause-level surgery.
5. **F144 and F146 (print-digital-audio Campaign Orchestrator cross-format).** These are the one case where I overrode the audit's own suggested fix outright, because that fix used "on our roadmap" / "coming soon" framing — exactly what your policy said not to do. I rejected both findings and kept current copy instead. Worth double-checking this is what you want versus, say, a NEW-SURGICAL-FIX that states cross-format coverage as a present-tense capability instead of either the hedged roadmap language or the literal current copy.
