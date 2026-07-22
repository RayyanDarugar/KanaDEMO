# Retail & E-Commerce — Copy Accuracy Audit

Checked ~27 capability-bearing claims across hero, pain points, solution rows, stats, FAQ, personas, showcase, and stack-showcase sections. 18 flagged (17 OVERCLAIM, 1 with a secondary UNVERIFIABLE note folded in); the remainder (Omni-Channel Media Planner's solution row and persona, both Audience Builder "brief-to-segment speed" claims, most stats, two of three FAQ answers, and the Marketing Intelligence stack-showcase column) are accurate or vague-but-fine and were left untouched.

Two systemic issues account for most of the flags:
1. **Personalization is repeatedly described as "real-time" / "continuous."** The PRD's own backlog entry states churn/anomaly detection is "batch-only today" and lists always-on/event-triggered monitoring as an out-of-scope backlog item.
2. **Marketing Intelligence is repeatedly credited with closing the online-to-offline attribution gap** ("connects spend to the campaign/register that drove it"). The PRD lists downstream/multi-touch attribution as a White Space Backlog item (routing "TBD"), explicitly out of MVP scope.

A third, more severe issue is isolated to Category Intelligence: the config describes it as an internal POS/inventory analytics tool, but the PRD defines Category Intelligence v1 as a public-source, external-market-watch tool that explicitly excludes internal company data ("Internal company data ingestion — the 'data plane' layer stays out of v1").

---

## hero.subheadline
**Current copy:** "Kana gives retail teams early churn signals, trade-meeting answers in seconds, and a straight line from digital spend to register revenue — so the team is always acting on a customer earlier than the report can name one."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — White Space Backlog #3: "Downstream impact / multi-touch attribution ... pluggable attribution engine EXISTS in Kana-CDP ... adapt, don't build" (Impact: High, Effort: L, Routing: TBD) — listed as backlog, not MVP.
**Suggested fix:** "Kana gives retail teams early churn signals, trade-meeting answers in seconds, and one grounded number for what digital spend is actually doing — so the team is always acting on a customer earlier than the report can name one."
**Why:** "Straight line from digital spend to register revenue" asserts a finished attribution capability the PRD scopes as backlog, not shipped.

## solutions[0] — Personalization
**Current copy:** "Personalization connects to the CRM, loyalty, and marketing automation systems you already run and scores every customer's churn risk in real time, reading declining purchase frequency, shrinking baskets, and fading engagement. It explains why each cohort is at risk and recommends the intervention worth making: message, channel, timing, and offer. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — White Space Backlog #2: "Always-on anomaly detection + event triggers | Page #3; batch-only today."
**Suggested fix:** "Personalization connects to the CRM, loyalty, and marketing automation systems you already run and scores every customer's churn risk well ahead of the retention report, reading declining purchase frequency, shrinking baskets, and fading engagement. It explains why each cohort is at risk and recommends the intervention worth making: message, channel, timing, and offer. Retention spend stops subsidizing customers who were coming back anyway and starts saving the ones who weren't."
**Why:** "In real time" overstates a capability the PRD says is batch-only today; the truthful, still-strong claim is early lead time, not live scoring.

## solutions[1] — Marketing Intelligence
**Current copy:** "Marketing Intelligence unifies your ad platforms, e-commerce analytics, POS, and loyalty data into one live view (no warehouse migration, no analyst queue) and closes the offline attribution gap. Instead of reconciling numbers from a dozen tools for hours every week, you ask in plain language and walk into the board meeting with the spend-to-revenue line the CFO has been demanding."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3 (downstream impact / multi-touch attribution, routing TBD); also Non-Goals: "Not a BI or dashboard-builder product... a custom report/dashboard authoring surface is out."
**Suggested fix:** "Marketing Intelligence unifies your ad platforms, e-commerce analytics, POS, and loyalty data so you can ask in plain language instead of reconciling numbers from a dozen tools for hours every week. You walk into the board meeting with the answer already grounded in your own data, not a dashboard full of platform-reported guesses."
**Why:** "Closes the offline attribution gap" and "spend-to-revenue line" claim a shipped attribution capability the PRD lists as backlog; "one live view" also leans on dashboard framing the PRD's non-goals explicitly reject.

## solutions[2] — Category Intelligence
**Current copy:** "Category Intelligence sits on your POS feeds, sales data, and external category signals, and answers merchant questions in seconds: what's selling through, where stock is at risk, which promo actually lifted margin. The weekly trade pack stops being an hours-long spreadsheet marathon, and markdown and allocation decisions stop waiting for the numbers to be assembled."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals: "Internal company data ingestion — the 'data plane' layer stays out of v1 (see Backlog #6)"; Out of Scope 6.2: "Internal company data / 'data plane' — public sources only in v1"; Executive Summary: research runs "against ~177 curated public data sources."
**Suggested fix:** "Category Intelligence watches the external category signals that shape the Monday trade meeting — competitor moves, category trends, promo benchmarks — and answers merchant questions in seconds with a cited, dated record. The weekly trade pack stops being an hours-long spreadsheet marathon, and markdown and allocation decisions stop waiting for the numbers to be assembled."
**Why:** The PRD defines Category Intelligence v1 as a public-source market-watch tool and explicitly excludes internal data (POS, sales) from v1 — the config describes the opposite product.

## solutions[3] — Audience Builder
**Current copy:** "Audience Builder lets campaign teams build, validate, and activate segments in plain language, no SQL, no data engineering queue, with one canonical audience definition enforced across Meta, Google, email, and your loyalty platform. Built-in synthetic audiences let you target new store regions and new categories before first-party data exists, and every segment traces back to the brief it came from."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Live activation APIs — shared-core item (see White Space Backlog)"; MVP Scope: "Activation by reference to ≥1 marketer platform registry entry (Iterable/Braze/MessageGears-class)"; reach estimation (not activation) is what spans "Meta/Google/TikTok" (§7.3).
**Suggested fix:** "Audience Builder lets campaign teams build, validate, and activate segments in plain language, no SQL, no data engineering queue, with one canonical audience definition and reach estimated across Meta, Google, and TikTok before a dollar goes out the door. Synthetic audiences help you target new store regions and categories ahead of first-party data, and every segment traces back to the brief it came from."
**Why:** Live activation "enforced across Meta, Google" overstates the product — activation is by-reference to marketer platforms (loyalty/messaging), while Meta/Google/TikTok are where reach is estimated, not where segments are pushed live; live activation APIs are an explicit backlog item. (Secondary, softer flag: the specific mechanism for targeting "new store regions... before first-party data exists" isn't addressed by the PRD beyond a backlog note that today's lookalike/synthetic modeling is "synthetic only" pending validation on real data — kept but softened rather than stated as a settled capability.)

## painPoints[0]
**Current copy:** "70–77% of first-time e-commerce customers never come back, and churn typically only surfaces as a lagging line in the monthly cohort report. Personalization reads declining frequency, shrinking baskets, and fading engagement in real time, so retention teams can act weeks before it would show up as a churn statistic."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "70–77% of first-time e-commerce customers never come back, and churn typically only surfaces as a lagging line in the monthly cohort report. Personalization reads declining frequency, shrinking baskets, and fading engagement well before the report catches up, so retention teams can act weeks before it would show up as a churn statistic."
**Why:** Same real-time overclaim as solutions[0] — the PRD's current-state note says risk scoring runs in batch, not in real time.

## stats[0]
**Current copy:** "84% — of retail revenue closes in-store — Kana connects it back to the campaign that drove it (US Census Bureau)"
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "84% — of retail revenue closes in-store — Kana gives you one grounded view of what happened before and after (US Census Bureau)"
**Why:** "Connects it back to the campaign that drove it" is a direct attribution claim the PRD scopes as not-yet-built.

## stats[3]
**Current copy:** "52% — more scrutiny on marketing ROI — teams with a live spend-to-register view walk in with the answer already there (The CMO Survey)"
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "52% — more scrutiny on marketing ROI — teams with grounded answers already in hand walk into the room ahead of the ones still reconciling exports (The CMO Survey)"
**Why:** "Live spend-to-register view" restates the same unshipped attribution capability as stats[0] and solutions[1].

## faq[1]
**Current copy:** "It works from the systems you already run: CRM, loyalty, and marketing automation. Kana continuously reads lifecycle patterns like activation, purchase frequency, and spend to score churn risk in real time, surfacing at-risk cohorts weeks before they lapse. Every recommended intervention goes through your team's review and approval."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "It works from the systems you already run: CRM, loyalty, and marketing automation. Kana reads lifecycle patterns like activation, purchase frequency, and spend to score churn risk, surfacing at-risk cohorts weeks before they lapse. Every recommended intervention goes through your team's review and approval."
**Why:** "Continuously... in real time" is the same overclaim flagged in solutions[0], painPoints[0], and the showcase/stack-showcase Personalization copy.

## personas[1] (Category Manager / Merchant) — solution
**Current copy:** "Answers category questions in seconds from your POS, sales, and external signals: sell-through, stock risk, promo lift by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals / Out of Scope: internal company data ("the data plane") stays out of v1; public sources only.
**Suggested fix:** "Answers category questions in seconds from a cited, monitored view of the external market: category trends, competitor moves, promo benchmarks by event. The weekly trade pack assembles itself, and the meeting gets its time back for actual trading decisions."
**Why:** Same issue as solutions[2] — POS and internal sales data are explicitly out of scope for Category Intelligence v1.

## personas[2] (Head of Marketing Ops) — solution
**Current copy:** "Plain-language segment building with brief-to-activation traceability and one canonical audience definition enforced across every channel. No SQL, no engineering queue, segments ship inside the promo window, not after it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Live activation APIs — shared-core item (see White Space Backlog)"; MVP activation is "by reference" to a marketer platform registry entry.
**Suggested fix:** "Plain-language segment building with brief-to-activation traceability and one canonical audience definition, activated by reference across your loyalty and messaging platforms. No SQL, no engineering queue, segments ship inside the promo window, not after it."
**Why:** "Enforced across every channel" implies live push activation everywhere, which the PRD scopes as backlog; by-reference activation is the current MVP mechanism.

## personas[4] (CMO / VP Analytics) — solution
**Current copy:** "One live view across ad platforms, e-commerce analytics, POS, and loyalty, queryable in plain language, with digital spend tied to in-store revenue. The CFO conversation moves from defending impressions to showing the register."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "A queryable view across ad platforms, e-commerce analytics, POS, and loyalty, answerable in plain language. The CFO conversation moves from defending impressions to a grounded number everyone in the room trusts."
**Why:** "Digital spend tied to in-store revenue" and "showing the register" both restate the unshipped attribution claim.

## showcase.columns[0] — Personalization
**Current copy:** "Real-time churn risk scores from the loyalty and CRM data you already own. See which cohorts are slipping, why, and which intervention is worth the margin, weeks before the retention report says it's too late."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "Churn risk scores from the loyalty and CRM data you already own. See which cohorts are slipping, why, and which intervention is worth the margin, weeks before the retention report says it's too late."
**Why:** Same real-time overclaim as the other Personalization instances.

## showcase.columns[1] — Category Intelligence
**Current copy:** "Sell-through, stock risk, and promo lift on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals / Out of Scope: internal company data stays out of v1; public sources only.
**Suggested fix:** "Category trends, competitor moves, and promo benchmarks on demand instead of a Monday-morning spreadsheet marathon. Merchants make markdown and allocation calls while they still matter."
**Why:** Sell-through and stock risk are internal-inventory metrics that require POS/sales data, which is explicitly out of scope for Category Intelligence v1.

## showcase.columns[2] — Marketing Intelligence
**Current copy:** "Prove which dollar moved which register" / "Tie campaign spend to in-store revenue, basket size, and customer LTV, not platform-reported conversions. Give the CFO the number that survives an audit."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Marketing_Intelligence_v2.md — Backlog #3, downstream impact/multi-touch attribution, routing TBD.
**Suggested fix:** "Get one number the room can trust" / "See campaign spend, basket size, and customer LTV together, grounded in your own connected data instead of platform-reported conversions. Give the CFO a number that survives scrutiny."
**Why:** "Prove which dollar moved which register" is the clearest version of the attribution overclaim running through the Marketing Intelligence copy.

## stackShowcase.columns[0] — Personalization
**Current copy:** "Personalization: plugs into the CRM, loyalty, and automation systems you already run, scores churn risk continuously, and routes every recommended intervention through your team's approval. Retention becomes a compounding learning loop, not a monthly report."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "Personalization: plugs into the CRM, loyalty, and automation systems you already run, scores churn risk well before it shows up in the monthly report, and routes every recommended intervention through your team's approval. Retention becomes a compounding learning loop, not a monthly report."
**Why:** "Continuously" is the same overclaim as the other Personalization instances.

## stackShowcase.columns[2] — Audience Builder
**Current copy:** "Audience Builder: when a new region or category means no local first-party seed data, built-in synthetic audiences deliver statistically valid targeting from day one. 80%+ overlap with Acxiom and Experian quality, at a fraction of the cost."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Backlog #1: "Propensity / lookalike models on real data | Synthetic only today ... is a working seed" (i.e., synthetic modeling is a stand-in pending validation on real data; no benchmark quality figure appears anywhere in the PRD).
**Suggested fix:** "Audience Builder: when a new region or category means no local first-party seed data, synthetic audiences give you a statistically sound starting point on day one, refined as real signal comes in."
**Why:** The specific "80%+ overlap with Acxiom and Experian quality" figure appears nowhere in the PRD, and the PRD frames today's synthetic-audience modeling as an unvalidated stand-in for a still-backlogged real-data version — not a benchmarked quality claim.

## personas[0] (Director of Lifecycle & Retention) — solution
**Current copy:** "Reads behavioral signals (declining purchase frequency, shrinking baskets, fading engagement) and surfaces at-risk cohorts weeks before they lapse, with root cause and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Backlog #1: "Root-cause churn diagnosis (friction correlation) | ... heuristic reasons only today"; MVP goal is a plain-language "reason," not root-cause diagnosis.
**Suggested fix:** "Reads behavioral signals (declining purchase frequency, shrinking baskets, fading engagement) and surfaces at-risk cohorts weeks before they lapse, with a clear reason and a recommended next best action. Retention stops being reactive repair and becomes proactive prevention."
**Why:** True root-cause (friction-correlation) diagnosis is an explicit backlog item; the shipped capability is a plain-language reason per decision, not causal diagnosis.
