**LLM Command Center**  
*Product Requirements Document · Kana for Publishers suite · Draft v0.2 (post code review) · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Publishers → LLM Command Center |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD (edge/CDN engineering required — see 7.5) |
| **Status** | Draft — Sections 6–7 hardened after source-code review (v0.2) |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Publisher Persona Brief: [PM\_Education\_ Briefs\_Publisher\_Persona](https://docs.google.com/document/d/1D_NFjsrnetxFvE-7uaRnDDazWn1B3_Ykq9zT2aJuJII/edit?usp=sharing), Brand AEO |

# **1\. Executive Summary & Objective**

Give publishers monitoring, control, and monetization of AI crawler traffic: a bot-intelligence dashboard, plain-English tiered content-access policies (Full / Summary / Highlights / Deny), and consumption intelligence for licensing. Code review (v0.2) resolves the open question from v0.1: the Hearst 'LLM Content Manager' build is a genuinely working POLICY MANAGEMENT PLANE — conversational policy creation, 4-tier fidelity model, multi-property taxonomy, real content-preview generation — but it runs entirely on simulated traffic, and its own spec excludes the runtime enforcement engine ('should NOT be built'). Meanwhile AEO2 runs the real edge substrate in production (Cloudflare Worker \+ BigQuery request logs at Ketch). The product, therefore, is an integration: Hearst's management plane \+ AEO2's edge pipeline \+ a net-new enforcement runtime — which is the single biggest build decision in this PRD.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | AI crawlers intercepting publisher traffic is board-level urgent in 2026; solution page is live with specific claims; Hearst is an engaged design-partner-shaped customer |
| **Target customer segment** | Digital publishers & media conglomerates (multi-property); user \= content ops / data governance lead, buyer \= Chief Digital Officer / Head of Content Strategy |
| **Originating context** | Hearst Media 'LLM Content Manager' (management-plane demo, 12 tables, 58 datafuncs, 6 Hearst properties seeded) \+ AEO2's production Cloudflare Worker → BigQuery traffic pipeline (Ketch) |
| **Strategic pillar / OKR** | Publisher-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | robots.txt (binary, ignorable); Cloudflare AI Audit / TollBit-class (infra-first, weak policy UX). Kana angle: conversational tiered policies \+ licensing intelligence \+ (to build) enforcement in one |
| **Publisher Revenue / Retention Impact** | Directional: net-new licensing-leverage story; defensive retention for content-heavy accounts; Hearst expansion |

# **3\. Problem Statement & Discovery Findings**

**Theme: Unmonitored, unmonetized AI consumption**

> * 47+ LLM bots crawl 24/7 — up to 12% of site traffic — with zero revenue and no centralized tooling (solution page; Hearst seed models exactly 47 bot user-agents across 6 providers \+ 31 unknown crawlers)  
> * No per-property visibility into which bots take what content → no licensing leverage ('negotiating blindness', solution page; Hearst reports directly target this: training exposure, RAG-by-provider, citation opportunity)

**Theme: Binary controls**

> * robots.txt forces allow-all/block-all; no content-level, bot-level, time-window, or fidelity granularity (solution page; Hearst spec §1 — its core framing)

**Theme: Traffic diversion & infra waste**

> * Answer engines divert affiliate/commerce traffic; crawler load degrades performance with zero return (solution page; Publisher Brief 4\)

**Theme (new, from code): The enforcement gap**

> * Nothing in any Kana codebase enforces a policy on a live bot request. Hearst spec §13 explicitly scopes the runtime engine OUT ('only the policy management UI and API'); AEO2's worker intercepts and modifies content but has no policy-tier semantics. The website's central claim (\#4: real-time CDN enforcement \<50ms) is currently sold but unbuilt.

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Every AI crawler across the portfolio visible in one dashboard — on REAL edge logs, not seeded data  
> * Plain-English tiered policies (Full/Summary/Highlights/Deny) authored conversationally, human-approved, fully audited  
> * Enforcement v1: policies actually applied to live bot requests at the edge (fail-open), with measured evaluation latency  
> * Consumption reporting usable as licensing-negotiation evidence

## **4.2 Non-Goals**

> * Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content. One edge substrate, two products — the boundary holds even where infrastructure is shared.  
> * Not a licensing marketplace. We produce the consumption evidence publishers negotiate with; the licensing transactions themselves happen between the publisher and the AI provider, outside this product.  
> * Not a general bot-security or WAF product. No DDoS mitigation, no fraud defense, no anti-scraping beyond identified AI crawlers — security tooling stays with the customer's existing edge/security stack.  
> * Human visitors are never affected. Policies apply exclusively to classified AI bots; degrading, altering, or gating the human visitor experience is permanently out of scope, and enforcement fails open by design.

## **4.3 Success Metrics**

| Publisher's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Bot coverage (distinct AI crawlers identified) | Match registry (47 seeded in Hearst; validate against real logs) | Detection vs llm\_providers registry (regex UA patterns exist) |
| Policy evaluation latency (enforcement v1) | Engineering target TBD — page claims \<50ms; must be measured, not asserted | Edge instrumentation |
| % bot requests covered by an active policy | TBD (Hearst 'Policy Coverage Gaps' report exists) | Coverage report on real logs |
| Licensing conversations supported with consumption data | ≥1 at design partner | Customer-reported |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Content Ops / Data Governance Lead | Chief Digital Officer / Head of Content Strategy |
| Responsibility | Content access policy and bot governance across properties | Content monetization & AI strategy |
| Current pain | robots.txt binary; engineering queue for changes; no visibility | IP consumed free; no licensing leverage; infra cost, zero return |
| Goal / definition of success | Self-serve tiered policies, portfolio-wide, auditable | AI traffic as revenue \+ negotiating position |
| Technical sophistication | Medium | Low |

## **Primary Use Case Narrative**

The governance lead connects portfolio properties (Hearst model: sites → sections → categories → content types). The dashboard shows real crawler activity per property — provider, bot intent (training/RAG/search/research), frequency, trends — from the edge log pipeline. In chat she types: 'Allow OpenAI summaries on news sections, deny full text on Cosmopolitan, block training bots everywhere for 90 days.' The agent drafts the policy as a reviewable card (working today in Hearst); she approves; it deploys to the edge (enforcement v1 — new). The Content Preview screen shows exactly what each tier serves for any URL (working today: real crawl → Markdown → LLM summary/highlights). Anomaly alerts flag a crawl spike from an unidentified bot and pre-draft the policy question. Quarterly, the buyer exports training-exposure and RAG-performance reports as licensing evidence.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Policy management plane (MIGRATE from Hearst — working): sites/sections/categories/types taxonomy CRUD with in-use protection; policy list/detail with flow visualization \+ auto-generated plain-English summary; 4-step creation wizard; provider scoping; Full/Summary/Highlights/Deny tiers; time-windowed policies  
> * Conversational policy creation (MIGRATE — working): intent detection → constrained JSON draft → interactive review card → approve → transactional create  
> * Content fidelity generation (MIGRATE — working): URL → real crawl → Markdown → LLM summary / highlights / AEO-FAQ ('Promote'), cached per URL, side-by-side preview  
> * Bot analytics on REAL data (PRODUCTIZE): rewire Hearst's dashboards/reports (KPIs, provider/type breakdowns, training exposure, RAG performance, coverage gaps, citation opportunity, anomaly alerts, raw action log) from seeded SQLite onto the AEO2 edge-log pipeline (Cloudflare Worker → BigQuery)  
> * Enforcement runtime v1 (BUILD — the net-new core): edge middleware evaluating policies on live bot requests, serving the policy-designated tier (incl. Markdown variants), fail-open, with per-request decision logging feeding the same analytics  
> * Audit trail on real events (policy\_actions\_log schema exists; populate from enforcement \+ management actions)

## **6.2 Out of Scope**

> * Geo/device analytics — absent in Hearst (no geo field anywhere); add with real logs later (see White Space Backlog)  
> * Licensing reporting productization (valuation views, exports) — analytics exist, reporting layer on real data later (see White Space Backlog)  
> * Automated scheduled aggregation — Hearst's daily rollup job is aspirational/manual today (see White Space Backlog)  
> * Bot monetization mechanics (metering, pay-per-crawl) — see White Space Backlog

## **6.3 MVP Definition of Done**

> * Policies authored conversationally and enforced on live traffic for one real publisher portfolio (Hearst candidate), fail-open verified  
> * Dashboard/reports running on real edge logs — zero seeded data in the customer path  
> * Measured policy-evaluation latency published internally; page copy reconciled to measurement

# **7\. Functional Requirements**

## **7.1 Bot Intelligence (real data)**

> * **\[MVP\]** Ingest edge request logs (AEO2 worker pattern) with bot classification: provider, UA-regex registry match, bot intent (training/RAG/search/research/unknown)  
> * **\[MVP\]** Dashboards: KPIs, traffic by provider/type/property/section, trends, AI-share estimates; anomaly spike/drop alerts vs prior-week baseline with pre-drafted chat action

## **7.2 Policy Authoring & Management**

> * **\[MVP\]** Taxonomy CRUD (sites/sections/categories/content types) with live-policy dependency protection  
> * **\[MVP\]** Policy objects: tier (Full/Summary/Highlights/Deny), provider scope, content-rule scope, time window, priority, status lifecycle; wizard \+ conversational paths; plain-English auto-summary \+ flow visualization

*Lightbulb moment (verified working): typing a policy in chat and getting a reviewable card that becomes an active policy on approve.*

## **7.3 Content Fidelity**

> * **\[MVP\]** Per-URL tier rendering: crawl → Markdown → LLM summary/highlights (+ optional AEO-FAQ Promote variant), cached; preview UI showing all tiers side-by-side

## **7.4 Reports & Licensing Intelligence**

> * **\[MVP\]** Date-ranged reports on real data: training exposure by provider/content, RAG performance, policy coverage gaps, high-deny sections, citation opportunity, paginated action log

## **7.5 Enforcement Runtime v1 (net-new)**

> * **\[MVP\]** Edge middleware (Cloudflare first) evaluating request → bot classification → matching policy → serve designated tier or deny; fail-open on any evaluation failure; per-request decision log  
> * **\[MVP\]** Policy propagation to edge within minutes; kill-switch per property; latency instrumentation

*Explicitly reversing the Hearst spec's exclusion (§13) — that spec built the console; the product requires the engine. Engineering design doc is a gating dependency.*

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP (partial) | Edge worker in customer CDN account (proven at Ketch via AEO2); request logs \= potentially sensitive URLs — retention review |
| Compliance & Certifications | Backlog | — |
| Identity, Access & Permissions | MVP (basic) | Chassis roles; policy approve permission distinct from author |
| Scalability & Performance | MVP | Enforcement latency is a product claim — hard engineering budget \+ measurement required |
| Reliability & Support | MVP (design) | Fail-open is non-negotiable (edge failure \= customer site risk); kill-switch; on-call story before first live customer |
| Integrations & Interoperability | MVP (Cloudflare) | Cloudflare Worker proven (AEO2); Akamai/Fastly Backlog \#6 |
| Observability & Admin Tooling | MVP (partial) | Decision logs \+ coverage reports are built-in observability; seed/extend demo mode stays internal-only |
| Data Governance & Retention | Backlog | Edge log retention \+ aggregation policy TBD (Backlog \#3) |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Edge request logs (per-request bot decisions) | Cloudflare Worker → BigQuery | LIVE pattern exists (AEO2/Ketch); extend with policy-decision fields | MVP |
| Bot registry (providers \+ UA regex patterns) | Kana-maintained (Hearst llm\_providers table exists) | 47 seeded; validate/expand against real logs | MVP |
| Content taxonomy per property | Customer CMS/sitemap \+ manual CRUD (Hearst model) | Sites→sections→categories→types; AEO2 nav-extract (Firecrawl) can bootstrap | MVP |
| Policies \+ rules \+ provider scopes | Kana (Hearst schema exists) | Migrate schema as-is | MVP |
| Per-URL tier renderings | Crawl \+ LLM (Hearst content\_previews) | Cached; serve from edge in enforcement v1 | MVP |
| Daily aggregation rollups | Kana (policy\_statistics schema exists) | Automate the job (manual today) | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Geo/device analytics on bot traffic | Page claims geo; absent in Hearst (no geo field); derivable from real edge logs | Med | S | TBD |
| 2 | Licensing reporting layer (valuation, exports, provider scorecards) | Page benefit; Hearst reports are the seed, data becomes real post-MVP | High | M | TBD |
| 3 | Automated daily aggregation \+ scheduled jobs | Hearst spec aspirational; manual extend\_data today | Med | S | TBD |
| 4 | Bot monetization mechanics (metering, pay-per-crawl) | Publisher Brief 5 (excluded whitespace) — log only | High | XL | TBD |
| 5 | AEO2 boundary: shared edge/traffic service, two apps (publisher policy vs brand AEO) | Code review: zero code overlap today; AEO2 has the infra, Hearst has the console | High | S | TBD |
| 6 | Non-Cloudflare CDN support (Akamai, Fastly) | Conglomerate reality | High | L | TBD |
| 7 | AEO 'Promote' productization (FAQ generation to win citations) | Working in Hearst beyond page claims; bridges to AEO2's brand side | Med | S | TBD |

# **11\. Stakeholders, RACI & Account Context**

Origin accounts: Hearst Media (management-plane build; 6 properties seeded: SF Chronicle, SFGate, CT Insider, Cosmopolitan, Esquire, Country Living) — natural enforcement design partner; Ketch (AEO2 live edge deployment). App owner historically Vivek — access granted Jul 2026, code reviewed.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * The Hearst policy schema (policies/rules/provider-scopes/tiers) survives contact with real enforcement semantics (if wrong: schema rework before edge build)  
> * AEO2's worker can be extended to policy evaluation without a rewrite (same Cloudflare runtime)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Website sells enforcement (\<50ms, real-time, zero-touch) that exists NOWHERE in code — the largest page-vs-code gap in either suite | H | H | Enforcement v1 in MVP; interim: reconcile page copy with Jessica; no customer demo implies enforcement until built |
| Edge enforcement failure impacts customer site availability | M | H | Fail-open requirement (7.5); kill-switch; load test before live |
| Two codebases (Hearst console, AEO2 infra) merge into a third fork | M | M | Declare Hearst \= management plane, AEO2 worker \= edge substrate; single integration owner |
| Demo simulated data leaks into customer-facing views | M | M | Seed/extend endpoints gated to internal demo mode only |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Who owns the shared edge/traffic service (LLM CC \+ AEO2)? | Tanmay \+ Vivek \+ Eng | PRD sign-off |
| Does Hearst expect enforcement delivery, and on what timeline? | Khan/Sales | PRD sign-off |
| Latency budget: what number can Eng actually commit to (page says \<50ms)? | Eng design doc | Before build |
| Where does 'Promote'/AEO-FAQ generation live — LLM CC, AEO2, or Marketing Intelligence? | Tanmay (see White Space Backlog) | Roadmap review |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| Enforcement runtime design doc (gating) | TBD |
| MVP build complete | TBD |
| Design partner validation (Hearst candidate) | TBD |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft — LLM CC app inaccessible; provisional against AEO2 evidence | Tanmay |
| 2026-07-16 | v0.2 | Hardened after Hearst code review: management plane verified working (migrate); enforcement runtime confirmed absent and moved into MVP as net-new build; bot analytics reclassified productize (rewire to AEO2 real logs); geo confirmed absent; Highlights tier \+ Promote/AEO-FAQ \+ anomaly alerts added from code findings | Tanmay |
| 2026-07-17 | v0.3 | Review changes: Related Docs → Publisher Persona Brief only; publisher-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD. v3.1: reformatted to match Kana PRD Template styles (Calibri, navy Heading 1/2, template table styling) | Tanmay |

