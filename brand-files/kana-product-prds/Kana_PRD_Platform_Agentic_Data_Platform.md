**Agentic Data Platform**

Product Requirements Document · Platform layer serving both suites · Draft v0.1 · July 2026 · Template v1.1 (MVP → White Space Backlog)

# **0\. Document Control**

| Suite / Product / Feature Name | Kana Platform → Agentic Data Platform (ADP) — consumed by both Publishers and Marketers suites; not itself a suite application per the Jul 2026 whiteboard |
| :---- | :---- |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD (platform/data engineering) |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 16, 2026 |
| **Related Docs** | Kana Agentic Marketing Architecture (41-pg spec — Parts 1–5 are this product's design baseline); Kana-CDP → CDP code review (Jul 16); kana.ai/solutions/agentic-data-platform; both suites' current-state docs; all 11 app PRDs (this PRD owns their shared data-layer dependencies) |

# **1\. Executive Summary & Objective**

The data layer every suite application stands on: connect a customer's existing warehouse and marketing tools without moving data, map them to canonical marketing objects, resolve identities, enforce consent, and expose trusted, queryable data plus an auditable action path — so each of the 11 suite apps consumes one platform instead of rebuilding connectors, identity, and governance per app. The Architecture document is this product's full spec; the D\&B CDP build implements a meaningful fraction of it (real Fellegi–Sunter identity resolution, consent-gated activation, canonical golden-record views, human-approval action loop) — and its review also exposed the vision's most important missing piece: the compiler/policy chokepoint that keeps agents from writing raw SQL. That safety layer, plus the schema discovery/mapping agent, is the heart of this PRD.

# **2\. Strategic Context & Business Case**

| Business driver | Platform investment: 11 app PRDs each list data-layer dependencies (connectors, identity, consent, attribution) that must be built once, not 11 times; solution page is live; D\&B partnership sells ADP directly (white-label CDP) |
| :---- | :---- |
| **Target customer segment** | Every suite customer (publisher \+ marketer); direct buyers for standalone ADP: enterprise data/martech leaders (the D\&B-partnership motion). Page skews B2B/ABM (Salesforce/Marketo/Eloqua, firmographic/intent, 50M accounts/100M contacts) — reflecting its CDP origin |
| **Originating context** | Architecture spec (canonical objects, recipes, compiler — internal, Jul 2026\) \+ Kana-CDP D\&B build (reviewed Jul 16\) \+ patterns proven across customer apps (Bright Harvest warehouse wiring, CO GAM cache, AEO2 BigQuery) |
| **Strategic pillar / OKR** | Suite consolidation: shared chassis economics depend on a shared data layer; 'JIT integration, value from day one not day ninety' is the company's stated wedge vs 6–12-month CDP implementations |
| **Competitive context** | Traditional CDPs (Segment/Amperity/Treasure-class: copy-heavy, slow implementations), warehouse-native tools (Hightouch/Census-class: activation without intelligence), legacy DMP heritage (Krux). Kana wins on zero-copy \+ agents \+ finished work; loses today on connector breadth |
| **Revenue / retention impact** | Directional: unlocks every suite deal's data phase; standalone revenue via D\&B white-label; churn defense (the platform IS the switching cost) |

# **3\. Problem Statement & Discovery Findings**

**Theme: Fragmentation is the \#1 pain on both sides (MP-11 / PP-12)**

* Customer data scattered across CRM, MAP, warehouses, activation platforms; audience data fragmented across properties (both pain-point docs, rank \#1 and \#4 respectively; every kana.ai vertical page)

* Analysts manually stitch a complete picture before anyone can act (solution page)

**Theme: Trust — identity and governance**

* Duplicate contacts, unmatched accounts, inconsistent identifiers → segmentation built on an untrusted foundation; wasted spend on misidentified audiences (solution page; CDP build exists precisely because D\&B needs this fixed)

* Consent must have a live, trustworthy answer per channel/purpose (Architecture doc — Consent is first-class and authoritative; influencer persona's gating concern in every deal, both briefs)

**Theme: Time-to-value**

* Enterprise data-platform implementations run 6–12 months before usable output (solution page); Kana's counter-claim is JIT integration — day one, not day ninety

**Theme (from code review): the safety gap**

* The CDP's conversational builders let the LLM emit raw executable SQL governed only by prompt discipline — the Architecture doc's central control ('agents never write raw SQL; a single compiler enforces policy') is not implemented anywhere. Every app that copies the pattern inherits the gap. (CDP review; Architecture Part 1 & p.41 recommendation: forbid raw SQL in v1, extend the IR when you hit expressiveness walls)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

* One connection \+ mapping effort per customer, consumed by every suite app (zero-copy: data stays in the customer's systems; Kana stores recipes and derived results)

* Trusted identity: resolved accounts/contacts with scored, versioned, human-reviewable links (CDP resolver as the base)

* Governed action path: every agent query and activation flows through a policy-enforcing compilation layer with a complete audit trail — closing the raw-SQL gap

* Consent answered live, most-restrictive-wins, enforced at every activation (CDP pattern, generalized)

## **4.2 Non-Goals**

* Not a warehouse or ETL platform. We never become the system of record or copy the customer's data estate — zero-copy is the architecture's founding principle, not an optimization. Bulk data migration projects are declined, not deferred.

* Not a BI / analytics product. ADP exposes trusted data to the suite apps; dashboards, insights, and narratives are their job (MI, CO). No end-user reporting surface here.

* Not a general-purpose iPaaS. Connectors exist to feed the canonical model and activate segments — arbitrary system-to-system syncs or workflow automation between third-party tools are out.

* Not an end-user marketing app. ADP has admin/steward surfaces only (connections, mappings, identity review, policies). Campaigns, audiences-as-product, and decisions live in the suite apps that consume it.

## **4.3 Success Metrics**

| Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Time from connection to first usable canonical objects | Days, not months (JIT claim — set exact target with first partner) | Onboarding instrumentation |
| Identity match/dedup quality | Baseline vs customer's known truth set (CDP validation-label pattern) | Resolver metrics \+ review queue |
| % agent data access through governed layer (vs raw SQL) | 100% for suite apps on ADP v1 | Query-path audit |
| Suite apps consuming ADP (vs private wiring) | ≥2 apps at first design partner | Integration audit |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Data Steward / Martech-IT Lead (the 'influencer' persona from both briefs) | CDO / VP Data / VP Martech |
| Responsibility | Approves integrations, mappings, identity decisions; owns governance | Owns data strategy, vendor consolidation, compliance posture |
| Current pain | Every new tool is a new integration \+ governance review; identity cleanup is endless | 6–12-month implementations; platforms that centralize 'in name only' |
| Goal / success | One reviewed mapping, reused everywhere; auditable agent behavior | Fast time-to-value without losing control of the data estate |
| Technical sophistication | High | Medium |

## **Primary Use Case Narrative**

The steward connects the warehouse (read-only) and marketing tools. Agents profile the schemas and propose mappings to canonical objects — Party, Identity, Consent, Event, Order, Campaign, Segment (and the Ad/Publisher family for publisher customers); the steward approves the high-stakes ones. Identity resolution runs, producing scored links with a pending-review queue for uncertain matches. From that moment, every suite app speaks canonical: Audience Builder sizes segments, Personalization reads consent live before any contact, MPG grounds proposals, MI reads campaigns and conversions. When an agent needs data or wants to act, it emits a structured definition; the compiler turns it into the right SQL or API call, enforces policy (never target on inferred protected attributes; consent checked live), and logs it. Derived data — scores, memberships, attributes — refreshes on its recipe schedule. Nothing is hand-updated; nothing is unaudited.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

* Warehouse connectivity, zero-copy: read-only external schema \+ derived-data writeback (WORKING in CDP on Snowflake; BigQuery/Databricks fast-follow per Bright Harvest wiring)

* Canonical object registry v1: generalize the CDP's D\&B-shaped golden views to the Architecture doc's core set (Identity, Behavioral, Commerce, Marketing-Ops layers; Ad/Publisher family for publisher accounts) with the Part 4 schema-registry encoding

* Identity resolution service: port the CDP Fellegi–Sunter engine (blocking, scored links, versioned history, pending-review queue, validation labels) as a platform service

* Consent service: canonical consent object \+ live check API, most-restrictive-wins, enforced in every activation path (CDP pattern, generalized)

* Connector registry \+ health: data\_connector/sync\_run registry, health/quality probes with cached instant-load status (CDP pattern); LIVE connectors for the first design partner's top 2 sources (net-new — CDP's are config-only)

* Compiler/IR v1 (net-new — the core build): structured definition → warehouse SQL for segment/count/read paths used by suite apps; raw agent SQL forbidden on governed paths (per Architecture p.41); policy rules \+ full audit log

* Human-approval action loop as a platform primitive: agent rules → pending actions → approval inbox → execute \+ audit (WORKING in CDP; expose to all apps)

## **6.2 Out of Scope**

* Schema discovery/mapping agent — mappings are expert-authored in MVP (CDP's are pre-baked views); the agentic discovery of Architecture Part 5 is Backlog \#1

* Full activation connector breadth (LinkedIn/TTD/Meta/DSPs live) — by-reference \+ S3 push (working) in MVP; Backlog \#2

* Recipe/refresh-policy abstraction — fixed scheduled processes in MVP (CDP pattern); generalized per-recipe policies Backlog \#3

* Knowledge-graph / whitespace-analysis features from the solution page — Backlog \#4

* Multi-tenant white-label packaging (D\&B motion) — single-tenant deployments in MVP; Backlog \#5

## **6.3 MVP Definition of Done**

* One design partner: warehouse connected, mappings approved, identity resolved with review queue in use, ≥2 suite apps consuming canonical objects through the governed layer

* Zero raw agent SQL on governed paths, verified by audit; one policy rule demonstrably enforced at compilation

* Consent check demonstrably blocking a non-consented activation

# **7\. Functional Requirements**

## **7.1 Connections & Zero-Copy Access**

* **\[MVP\]** Read-only warehouse connection (Snowflake first) with schema exposure, credential management, health probes; derived-data writeback to a Kana-controlled schema

* **\[MVP\]** Two live source connectors for the design partner (e.g., Salesforce \+ MAP) with scheduled sync, freshness metadata, and sync-run history

## **7.2 Canonical Model & Registry**

* **\[MVP\]** Machine-readable object registry (Architecture Part 4: versioned JSON-schema with synonyms, provenance, x-versioning) generating typed access for apps; expert-authored mapping definitions with grain/joins/transforms recorded

## **7.3 Identity Resolution Service**

* **\[MVP\]** Fellegi–Sunter scoring with blocking, account-then-contact passes, versioned winning links, pending-review queue with LLM-assisted recommendations, validation labels; exposed as a service any app queries

## **7.4 Consent Service**

* **\[MVP\]** Canonical consent records (channel/purpose/jurisdiction/timestamp/source); live check API; most-restrictive-wins conflict resolution; mandatory in activation paths

## **7.5 Compiler / Governed Access (net-new core)**

* **\[MVP\]** Structured definition (IR) for segment/count/read operations; compilation to warehouse SQL; policy enforcement at compile time (e.g., protected-attribute targeting bans); complete compile/execute audit log; explicit refusal \+ escalation when the IR can't express a request

*Lightbulb moment: the audit view showing an agent's request, the policy check, and the exact SQL that ran — governance as a demo feature, aimed straight at the influencer persona.*

## **7.6 Action Loop & Activation**

* **\[MVP\]** Platform-level propose→approve→act→audit primitive (agent rules, pending actions, approval inbox); consent-gated, identity-grounded member export with per-member lineage; S3/file push live, platform pushes by reference

# **8\. Enterprise Readiness Considerations**

*This section is weightier here than in any app PRD — ADP is where enterprise trust is won or lost.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP | Zero-copy \+ read-only is the product's security story; PII stays in customer systems; derived-data classification doc required before first partner |
| Compliance & Certifications | MVP (partial) | SOC 2 company-level; HIPAA badge on site — ADP is where those claims become architecture; data-residency answer needed for EU prospects |
| Identity, Access & Permissions | MVP (basic) | Steward vs admin vs app-service roles; approval permissions on mappings/actions |
| Scalability & Performance | Backlog (targets) | Page claims 50M accounts / 100M contacts — resolver proven only at demo scale; load test before quoting numbers |
| Reliability & Support | Backlog | Sync/resolver failure alerting; platform SLO definition |
| Integrations & Interoperability | MVP (narrow) | Snowflake \+ 2 live sources; breadth is Backlog \#2 |
| Observability & Admin Tooling | MVP | Compile/execute audit, sync-run history, resolver run log, health caches — largely existing patterns |
| Data Governance & Retention | MVP (policy doc) | Recipe-based refresh; derived-data retention and offboarding purge defined before first partner |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Customer warehouse (read-only) | Snowflake (first), BigQuery/Databricks next | Zero-copy; external schema; CDP wiring exists | MVP |
| CRM/MAP source data | Salesforce \+ partner's MAP | Live connectors net-new (CDP's are config-only) | MVP |
| Canonical object registry | Kana (Architecture Part 4\) | Versioned JSON-schema; codegen for apps | MVP |
| Identity truth sets / validation labels | Customer-provided | For resolver calibration (CDP pattern) | MVP |
| Consent records | Customer CRM/CMP | Mapped to canonical consent | MVP |
| Policy rule set | Kana \+ customer legal | Compile-time enforcement; start with protected-attribute \+ consent rules | MVP |
| 3rd-party identity spines (D\&B firmographic/intent) | D\&B partnership | For B2B deployments; already modeled in CDP | Backlog (B2B tier) |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Schema discovery & mapping agent with human approval of high-stakes mappings | Architecture Parts 1/5; absent in CDP (pre-baked views) | High | XL | Backlog — Near-Term (the 'day one' JIT claim ultimately depends on it) |
| 2 | Live activation connectors (LinkedIn, TTD, Meta, DSPs, MAP write-back) | Page promise; simulated in CDP; every app's activation backlog rolls up here | High | XL | Backlog — Near-Term (per-connector, partner-driven) |
| 3 | Generalized recipe \+ refresh-policy abstraction (per-binding freshness) | Architecture Part 1; fixed crons today | Med | L | Backlog — Later |
| 4 | Knowledge graph, funnel-stage modeling, whitespace analysis | Solution page; partial in CDP (ACCOUNT\_FEATURES, funnel config) | Med | L | Backlog — Later |
| 5 | Multi-tenant white-label packaging (D\&B motion) | Page: 'multi-tenant, white-labeled deployments' | High | XL | Needs More Discovery (commercial dependency: D\&B) |
| 6 | Compiler IR expansion: write/action compilation, API-action compilation | Architecture p.41 open item (activation-only vs query-time gating) | High | L | Backlog — Near-Term (after read-path v1) |
| 7 | Resolver model training loop (labeled retraining) | CDP fit\_resolver\_model is a stub; hand-tuned priors today | Med | M | Backlog — Later |
| 8 | Retrofit governed access into CDP \+ suite apps using raw-SQL or private wiring | CDP review safety finding | High | M | Pull Into Next MVP (starts with CDP itself) |

# **11\. Stakeholders, RACI & Account Context**

Platform PRD with one account-shaped dependency: the D\&B partnership sells ADP as a white-label CDP (the CDP build is that engagement's demo). Keep D\&B-specific commitments (Acquisition module, entitlements, Direct Match) in the CDP app, not in the platform core; this PRD describes the generalizable platform per template guidance.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

* The Architecture doc is accepted as the design baseline by Eng leadership (if wrong: this PRD needs re-grounding before build)

* CDP components (resolver, consent, action loop) are extractable as services without rewrite (if wrong: MVP effort grows materially)

* Suite apps will adopt ADP interfaces rather than keeping private wiring (requires a migration mandate, not just availability)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Compiler/IR underestimated — it's the hardest artifact in the Architecture doc and nothing exists | H | H | Scope v1 to read/segment paths only (p.41 guidance); design doc gates the build; borrow from semantic-layer prior art (dbt/Cube/LookML per Architecture Part 4\) |
| Raw-SQL pattern proliferates into more apps before governed access ships | H | M | Backlog \#8 pulled forward; interim rule: new conversational builders must use datafunc layer |
| Page's B2B/ABM skew (D\&B origin) gets read as the platform's scope, alienating publisher/consumer-marketer deals | M | M | Position page copy vs Architecture breadth with Jessica; publisher Ad/Publisher object family in registry v1 |
| Platform team becomes bottleneck for 11 app roadmaps | M | H | Thin-waist interfaces (registry, IR, services) \+ apps keep shipping on current wiring until migration windows |
| Scale claims (50M/100M) unproven | M | M | Load test resolver before sales quotes numbers |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Does the compiler gate fire at activation only or also at query time? (Architecture p.41 open item) | Tanmay \+ Eng \+ Vivek | Compiler design doc |
| Which shared services does ADP own vs apps: identity, consent, MMM engine, attribution engine? | Tanmay \+ Eng (raised in 4 app PRDs) | PRD sign-off |
| What has the D\&B partnership contractually committed re white-label timelines? | Khan / leadership | Before Backlog \#5 routing |
| First design partner for platform MVP — an existing suite customer (TIME? Bright Harvest?) or the D\&B motion? | Khan/Sales | PRD sign-off |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| Compiler/IR v1 design doc (gating) | TBD |
| Platform services extracted from CDP (identity, consent, action loop) | TBD |
| MVP live: ≥2 suite apps consuming ADP at a design partner | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-16 | v0.1 | Initial draft from Architecture spec (design baseline), Kana-CDP code review (current state), and agentic-data-platform solution page (public promise) | Tanmay |

