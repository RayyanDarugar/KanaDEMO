**Campaign Orchestrator (Publishers)**

Product Requirements Document · Kana for Publishers suite · Draft v0.1 · July 2026 · Template v1.1 (MVP → White Space Backlog)

# **0\. Document Control**

| Suite / Product / Feature Name | Kana for Publishers → Campaign Orchestrator (Publishers) |
| :---- | :---- |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 15, 2026 |
| **Related Docs** | Publisher Persona Brief:[PM\_Education\_ Briefs\_Publisher\_Persona](https://docs.google.com/document/d/1D_NFjsrnetxFvE-7uaRnDDazWn1B3_Ykq9zT2aJuJII/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

Generalize the working, GAM-wired Campaign Orchestrator (Media Campaign Studio) into the suite application for publisher ad-ops: continuous delivery/pacing monitoring, under-delivery risk detection with revenue-at-risk, forward forecasting, and conversational explanations — replacing spreadsheet fire-fighting. The app is the most mature asset in the suite (tracker: DONE), so this PRD is primarily a productization boundary: what ships as MVP versus what the website promises but code doesn't do yet (auto-adjustment, real-time, multi-ad-system).

# **2\. Strategic Context & Business Case**

| Business driver | Suite consolidation; most mature existing asset; already sold with public quickstart pricing tiers (Silver/Gold/Platinum/Enterprise) |
| :---- | :---- |
| **Target customer segment** | Publisher ad-ops/yield teams on GAM (v1); user \= Ad Ops Manager/Yield Analyst, buyer \= VP Ad Operations/Head of Programmatic |
| **Originating context** | Direct migration of Kana Main → Campaign Orchestrator (internally 'Media Campaign Studio'), production-wired to GAM;  |
| **Strategic pillar / OKR** | Publisher-suite GTM consolidation (2-suite taxonomy decision, Jul 2026): productize repeated custom builds into suite applications so presales rarely needs Montreal Engineering |
| **Competitive context** | GAM's own alerts, Burt/STAQ-class reporting aggregators, in-house spreadsheets. Kana wins on risk detection \+ explanations; gap vs. website promise on auto-adjustment |
| **Publisher Revenue / retention impact** | Directional: reduced makegoods/underdelivery leakage; retention driver for ad-ops-led accounts; quickstart pricing \= PLG-ish motion already live |

# **3\. Problem Statement & Discovery Findings**

**Theme: Reactive fire-fighting** 

* Teams manually monitor thousands of line items in spreadsheets, missing critical errors (kana.ai solution page)

* Under-delivery and broken creatives detected only after budget is wasted → makegoods, margin erosion, advertiser churn (solution page \+ Publisher Brief 2 User)

* Yield/reporting stitched manually across properties and demand sources 

**Theme: No forward visibility** 

* Pacing risk discovered too late to fix; no forecast of misses before they happen

* Ops is the bottleneck when sales asks about inventory availability 

**Theme: Data-team dependency for answers** 

* Cross-portfolio questions take days via a data team; reporting focuses on vanity metrics not business goals

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

* At-risk campaigns surfaced with revenue-at-risk quantified, worst-first, before delivery goals are missed

* Plain-language explanations of what's wrong and why — 'explanations, not dashboards'

* Cross-campaign questions answered conversationally in seconds (121 datafuncs exist)

## **4.2 Non-Goals**

* **Not an ad server or system of record.** CO reads GAM and explains it; trafficking, serving, orders, and billing stay in GAM/OMS as the authoritative systems. We compute over their data, we never become the copy customers reconcile against.

* **Never fully autonomous.** Even when delivery adjustment ships from the backlog, it will be approval-gated. Unattended write-back to a customer's ad server is a permanent trust boundary, not a maturity milestone.

* **Not a buy-side tool.** Advertiser spend optimization, channel mix, and ROAS belong to the marketer configuration of this shared app — sell-side delivery ops only enters through this PRD.

* **Not a programmatic yield engine.** Floor pricing, header-bidding config, and demand-source arbitration are a different product 

## **4.3 Success Metrics**

| Publisher’s Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Time-to-detect at-risk line item | Same day as sync (≤24h) | Sync \+ risk-flag timestamps |
| Revenue-at-risk caught before miss | TBD baseline at design partner | Delivery Risk screen instrumentation |
| Makegood value reduction | Directional decrease | Customer-reported, quarterly |
| Manual monitoring hours saved / analyst / week | TBD | Design partner workflow audit |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Ad Ops Manager / Yield Analyst | VP Ad Operations / Head of Programmatic (buyer) |
| Responsibility | Keeps guaranteed \+ programmatic delivery on track across the portfolio | Owns delivery SLAs, yield, ops headcount |
| Current pain | Spreadsheet monitoring, alert fatigue, problems found after revenue lost | Makegoods eat margin; advertisers churn on delivery misses; no portfolio view |
| Goal / success | Early, prioritized, explained warnings; fewer manual checks | Delivery confidence, quantified risk, defensible ops ROI |
| Technical sophistication | Medium | Low–Medium |

## **Primary Use Case Narrative**

Every morning the system syncs GAM (orders, line items, delivery, forecasts). Pacing status and at-risk flags are precomputed against hierarchical thresholds (with per-advertiser overrides). The analyst opens the Delivery Risk screen: campaigns ranked worst-first with revenue-at-risk. Clicking a line shows the plain-language explanation (pacing gap, forecast shortfall, creative issue) and a recommended action — the human decides and acts in GAM. For anything else, the analyst asks the chat ('which sponsorship lines will underdeliver this month and what's the revenue impact?') and gets grounded numbers with drill-downs. The buyer sees portfolio rollups. The 'Research with Kana' panel gives sellers/ops advertiser intelligence on demand.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

* GAM integration: OAuth \+ report/forecast/order/line-item/inventory/company services, daily scheduled sync \+ manual backfill (exists, production-wired)

* Pacing computation \+ at-risk flags with hierarchical thresholds and overrides (exists)

* Delivery Risk screen: worst-first ranking with revenue-at-risk (exists)

* Forward forecasting via GAM ForecastService; inventory availability answers (exists)

* Conversational analytics over the full dataset with plain-language risk explanations (exists)

* Programmatic leaderboards, ad-speed, pricing-rule and creative metrics (exists)

* Advertiser research panel ('Research with Kana') (exists)

* Demo-data mode strictly separated from live mode (exists)

## **6.2 Out of Scope**

* Auto delivery adjustment / GAM write-back — recommend-only in MVP (reason: safety \+ trust; no write scaffolding exists)

* Push alerting (email/Slack/webhook) — in-app only today

* Streaming/real-time ingestion — daily batch sufficient to prove value

* Non-GAM connectors and non-display formats 

## **6.3 MVP Definition of Done**

* One publisher design partner runs daily on live GAM data with risk screen adopted into their morning workflow

* Zero incidents of demo data leaking into live mode

* Buyer-level portfolio rollup reviewed in a real weekly ops meeting

# **7\. Functional Requirements**

## **7.1 Ingestion & Sync**

* **\[MVP\]** Daily scheduled GAM syncs (reports, orders, line items, forecasts) \+ on-demand backfill with job status

* **\[MVP\]** Multi-tenant credential management for GAM networks

## **7.2 Risk Detection & Forecasting**

* **\[MVP\]** Precompute pacing status and at-risk flags per line item using configurable hierarchical thresholds

* **\[MVP\]** Quantify revenue-at-risk and rank worst-first

* **\[MVP\]** Forecast delivery misses using GAM ForecastService \+ deliveryIndicator before end-of-flight

## **7.3 Explanation & Conversation**

* **\[MVP\]** Plain-language explanation for every risk flag (cause, evidence, suggested action)

* **\[MVP\]** Chat over campaigns/delivery/yield/inventory with grounded, drill-down-able answers

## **7.4 Recommendations & Human Action**

* **\[MVP\]** Recommended actions with the human executing in GAM (recommend-only guardrail explicit in UX)

* **\[MVP\]** Threshold/override administration by customer admin

## **7.5 Advertiser Intelligence**

* **\[MVP\]** 'Research with Kana' advertiser brief generation (web research → structured brief) attached to accounts

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area. Default at this company stage is Backlog; what's not allowed is skipping the decision.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP (partial) | GAM OAuth creds handling exists; formal review needed for multi-tenant productization |
| Compliance & Certifications | MVP | SOC 2 stated at company level |
| Identity, Access & Permissions | MVP (basic) | Role model exists (chassis); approval workflows N/A (recommend-only) |
| Scalability & Performance | Backlog | Single-network scale proven; multi-network/portfolio conglomerate scale untested |
| Reliability & Support | Backlog | Daily-batch tolerance is forgiving; sync-failure alerting needed |
| Integrations & Interoperability | MVP (GAM only) | GAM SOAP services wired; everything else Backlog |
| Observability & Admin Tooling | MVP (partial) | Sync job visibility exists; support runbook TBD |
| Data Governance & Retention | Backlog | Delivery facts cached locally (per Architecture doc GAM-cache pattern); retention TBD |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| GAM delivery/orders/line items/forecasts | Google Ad Manager (SOAP APIs) | Daily sync \+ backfill; cache-in-DB pattern per Architecture doc | MVP |
| Pacing thresholds & overrides | Kana (customer-configured) | Hierarchical defaults \+ per-advertiser overrides | MVP |
| Advertiser research sources | Web (search \+ fetch) | Structured briefs, source-tagged | MVP |
| Non-GAM delivery sources (SSP, newsletter, audio, podcast) | Various | Per-connector scoping needed | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Automated delivery adjustment (GAM write-back) with approval gates | Website promise; zero write-back in code | High | XL | TBD |
| 2 | Real-time / intra-day ingestion | Website 'real-time'; daily batch today | Med | L | TBD |
| 3 | Non-GAM ad-system connectors (SSPs, FreeWheel-class, OMS) | PP-06 multi-demand-source stitching | High | XL | TBD |
| 4 | Push alerting engine (email/Slack/webhook, dedupe/priority) | PP-07 alert fatigue; in-app only today | High | M | TBD |
| 5 | Buyer-level executive rollup reports (scheduled) | PP-11 | Med | S | TBD |
| 6 | Audio/newsletter/podcast delivery formats | kana.ai Publishers page cross-format claim | Med | L | TBD |
| 7 | Content ROI & ad-load optimization (streaming) | PP-21/PP-22, kana.ai Streaming segment | Med | XL | TBD |

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD. Origin app built in Kana Main workspace; live usage evidence at TIME (\#ext-time). Quickstart pricing page implies self-serve motion — validate tiers against MVP boundary.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

* GAM remains the dominant ad server across target publisher accounts (if wrong: connector backlog accelerates into MVP)

* Recommend-only is acceptable to design partners for v1 

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Website promises auto-adjustment \+ real-time that MVP doesn't deliver → sales/expectation mismatch | H | M | Reconcile page copy or; align with Jessica (marketing) |
| Multi-tenant scale-out of a single-network app | M | M | Load/scale test during productization |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Auto-adjustment: hard requirement for any near-term deal? | Sam’s input needed | PRD sign-off |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: TIME (active usage), NESN (AdOps engaged per pipeline tracker) |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from current-state analysis, pain-point docs, and kana.ai solution pages | Tanmay |

