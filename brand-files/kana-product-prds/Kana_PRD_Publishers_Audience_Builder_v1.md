**Audience Builder (Publishers)**

Product Requirements Document · Kana for Publishers suite · Draft v0.1 · July 2026 · Template v1.1 (MVP → White Space Backlog)

# **0\. Document Control**

| Suite / Product / Feature Name | Kana for Publishers → Audience Builder (Publishers) |
| :---- | :---- |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 15, 2026 |
| **Related Docs** | Publisher Persona Brief:[PM\_Education\_ Briefs\_Publisher\_Persona](https://docs.google.com/document/d/1D_NFjsrnetxFvE-7uaRnDDazWn1B3_Ykq9zT2aJuJII/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

**What it is**: A self-serve application that lets a publisher's revenue and audience teams turn a brief or plain-language request into a precise, sized, explorable audience segment against their first-party data in minutes — with no data-team dependency — and package those segments for direct-sold sales and proposals. It generalizes two working builds (Bright Harvest Audience Manager, wired to a real warehouse; Audience IQ's builder/briefs tabs from the PRH UK demo) into the shared suite application. 

**Why now?**: first-party audience data is the publisher's most durable post-cookie asset, and the suite decision (Jul 2026\) makes Audience Builder a shared foundation both suites (KFP and KFM) depend on.

# **2\. Strategic Context & Business Case**

| Business driver | Suite consolidation \+ post-cookie first-party data monetization; shared app across both suites (build once, configure per suite) |
| :---- | :---- |
| **Target customer segment** | Digital publishers, streaming platforms, retail/commerce media networks\* (Fortune-1000-scale portfolios); user \= audience/ad-ops analyst, buyer \= Head of Revenue/Data |
| **Originating context** | Generalized from Bright Harvest Demo → Audience Manager and Kana Main → Audience IQ (PRH UK demo, Jun–Jul 2026); Replica Studio augmentation under evaluation |
| **Strategic pillar / OKR** | Publisher-suite GTM consolidation (2-suite taxonomy decision, Jul 2026): productize repeated custom builds into suite applications so presales rarely needs Montreal Engineering |
| **Competitive context** | DMPs/CDPs (legacy Krux-class), warehouse-native segmentation requiring SQL/data teams, walled-garden audience tools. Kana wins on brief-to-segment speed, NL interrogation, and traceability; loses today on live activation integrations |
| **Publisher Revenue / retention impact** | Directional: enables premium audience packaging on direct-sold deals (higher CPMs); foundation for MPG proposals citing real segments  |

# 

# **3\. Problem Statement & Discovery Findings**

**Theme: First-party data fragmentation** 

* Audience data (logged-in readers, app users, streaming subscribers) sits fragmented across properties that don't share data — the most durable post-cookie asset is underutilized (Publisher Brief 1/4; kana.ai publisher page)

* Data-integration & security feasibility across dozens of properties is the influencer persona's gating concern in every deal (Publisher Brief 2\)

**Theme: Audience creation bottleneck** 

* Segmenting/packaging/activating audiences for direct-sold sales requires SQL, schema familiarity, and a data-engineering queue (kana.ai solution page: days of back-and-forth, diluted intent)

* When campaigns underperform, nobody can trace the audience back to the decisions that shaped it (solution page: traceability gap)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

* Brief → sized, explorable audience in minutes (target under 15 min end-to-end) with zero data-team involvement

* Every audience is permanently traceable to the conversation/brief, and build steps that created it

* Segments consumable by the publisher revenue workflow (citable in MPG proposals) — the publisher-specific payoff

## **4.2 Non-Goals**

* **Not a CDP/DMP or system of record.** Audience Builder reads the publisher's warehouse and stores only definitions and derived segments — we are not replacing their data infrastructure or becoming the golden copy.

* **Not a SQL/BI workbench for data teams.** The user is the revenue/audience analyst working in natural language; we expose generated SQL as read-only for audit, but authoring queries by hand is explicitly unsupported — that's the bottleneck we're removing, not a power mode to maintain.

* **Not the transaction layer.** AB produces packaged, citable segments; turning them into proposals is MPG's job and delivering against them is Campaign Orchestrator's. No pricing, no proposal generation, no delivery management here.

* **No probabilistic audience inflation.** v1 segment counts are deterministic, warehouse-derived numbers that an advertiser can audit. We don't blend modeled/extended reach into sellable counts — if augmentation ever ships (Replica Studio), it's labeled as modeled, never merged silently.

* **Not a clean room.** Publisher-advertiser data matching/overlap analysis is a different product with different legal machinery; AB packages the publisher's own first-party segments only.

## **4.3 Success Metrics**

| Publisher’s Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Time from brief to sized audience | \< 15 minutes | Build pipeline timestamps (build\_events) |
| Data-team tickets for audience creation | 0 for standard segments | Design partner workflow audit |
| Weekly active audience planner/analyst users | TBD | App analytics |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| TitleName / Role | Audience / Ad-Ops Analyst (publisher revenue data team) | Head of Revenue / Head of Data (buyer) |
| Responsibility | Builds and packages segments for direct-sold deals and campaign targeting across properties | Owns audience monetization strategy and tooling budget |
| Current pain | SQL \+ schema dependency; days of back-and-forth per brief; no traceability | 1P asset underutilized; data-eng bottleneck caps premium packaging; integration risk across properties |
| Goal / success | Self-serve, fast, sized, explainable segments | More premium audience-backed deals; defensible governance |
| Technical sophistication | Medium | Low–Medium |

## **Primary Use Case Narrative**

The analyst uploads or pastes a campaign brief (or types a request in plain language). The agent extracts intent — objective, markets, KPIs, behavioral cues — showing per-field confidence and verbatim provenance for review. On confirmation, the build pipeline translates intent into a queryable segment against the connected warehouse, streaming each step (data search, feature selection, SQL compile, sizing, tuning) as an auditable trail. The analyst interrogates the audience in natural language (size, consent rates, behavioral makeup, channel affinity), generates a profiling report, and saves the segment. The segment is then packaged — exported or referenced into a proposal — with the human approving before anything is client-facing. Sessions persist; six months later, anyone can see exactly why the audience was built the way it was.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

* Brief ingestion (PDF/paste/NL) with LLM extraction, per-field confidence \+ provenance, editable review (source: Audience IQ Briefs)

* NL audience compiler with live matched counts and predicate-level editing (source: Audience IQ Builder)

* Guided multi-step build pipeline with per-step traceability \+ SQL viewer (source: Bright Harvest 7-step pipeline)

* Warehouse connectivity: at least one of Snowflake / BigQuery / Databricks with connection setup UX (source: Bright Harvest)

* NL interrogation \+ AI profiling reports (insight tiers) on any saved segment

* Persistent planning sessions (saved conversations linked to audiences)

* Segment packaging/export consumable by MPG proposals (by-reference activation registry acceptable)

## **6.2 Out of Scope**

* Live ad-platform activation APIs (Meta/TikTok/etc.) — simulated today in both sources

* Cross-property identity resolution — no real IR anywhere today

* Consent-management surface (view/enforce channel-purpose consent) 

## **6.3 MVP Definition of Done**

* The publisher runs brief → segment → profile → package end-to-end on their real warehouse data without engineering hand-holding

* Build trail \+ provenance reviewable for every segment created

* A segment created in Audience Builder is successfully cited in an MPG proposal

# **7\. Functional Requirements**

## **7.1 Brief Intake & Intent Extraction**

* **\[MVP\]** Accept PDF upload, pasted text, or free-form NL description of a campaign/audience need

* **\[MVP\]** Extract structured intent (objective, audience descriptors, markets, KPIs, flighting) with per-field confidence score and verbatim source snippet

* **\[MVP\]** Human review/edit step before build — nothing builds from unconfirmed extraction

## **7.2 Audience Build Engine**

* **\[MVP\]** Compile confirmed intent into warehouse queries with live matched-count feedback

* **\[MVP\]** Stream build steps (data search → feature selection → SQL compile → size → tune → describe) as persisted, replayable events

* **\[MVP\]** Expose generated SQL read-only for audit

## **7.3 Exploration & Profiling**

* **\[MVP\]** NL Q\&A over any segment (size, composition, consent rate, behavioral signals, channel affinity)

* **\[MVP\]** One-click AI profiling report (demographics, loyalty indicators, top categories, recommended channels)

## **7.4 Packaging & Handoff (A2A)**

* **\[MVP\]** Save/version segments with a permanent link to the originating conversation

* **\[MVP\]** Package a segment for sales use: export \+ by-reference registration consumable by MPG proposal lines

## **7.5 Data Connectivity**

* **\[MVP\]** Connection setup for one warehouse (Snowflake first), with schema discovery

* **\[MVP\]** Demo/synthetic dataset mode kept strictly separate from live connections

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area. Default at this company stage is Backlog; what's not allowed is skipping the decision.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP (partial) | Read-only warehouse access model (per Architecture doc); PII stays in customer warehouse; derived segments in Kana DB. Formal data-classification doc: Backlog |
| Compliance & Certifications | MVP | SOC 2 Type II badge already displayed on kana.ai; per-app audit TBD |
| Identity, Access & Permissions | MVP (basic) | Chassis user\_roles exist in source apps (admin vs analyst); SSO/SCIM: Backlog |
| Scalability & Performance | Backlog | Sizing queries on large warehouses need p95 targets; unknown today |
| Reliability & Support | Backlog | Best-effort; no SLA |
| Integrations & Interoperability | MVP (one warehouse) | Snowflake first (Bright Harvest wiring exists); BigQuery/Databricks fast-follow; activation APIs Backlog |
| Observability & Admin Tooling | MVP (partial) | build\_events trail exists; admin connection management exists in Bright Harvest |
| Data Governance & Retention | Backlog | Recipe \+ refreshed-result model per Architecture doc; retention policy TBD |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Customer 1P audience data | Customer warehouse (Snowflake/BQ/Databricks) | Read-only; schema discovery; freshness per binding | MVP |
| Synthetic demo dataset | Kana datagen | Exists in Audience IQ (synthetic population \+ identity\_map) | MVP (demo mode) |
| Activation connector registry | Kana | 6 connectors by reference in Audience IQ (registry only) | MVP (by-reference) |
| Consent data (channel/purpose) | Customer systems | Canonical Consent object per Architecture doc — not yet wired | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Live ad-platform activation APIs (Meta/TikTok/YouTube/Iterable/Braze...) | Simulated in both source apps; website promises in-tool activation. CDP app adds real S3-partner push \+ per-member ACTIVATION\_EXPORT\_MEMBERS lineage | High | L | TBD |
| 2 | Sell-side packaging & consent surface (publisher-specific) | UPDATED (CDP review): consent-gated activation is BUILT in Kana-CDP (CRM\_CONTACT\_CONSENT checked per member, real not simulated) — adopt that pattern | High | M | TBD |
| 3 | Real cross-device/cross-property identity resolution | UPDATED (CDP review): a real Fellegi–Sunter resolver exists in Kana-CDP (PERSON\_IDENTIFIERS graph, blocking, scored links, versioned history, pending-review queue) — effort drops from build-new to adapt | High | L | TBD |
| 4 | Replica Studio audience augmentation (TTVAE expansion, classifiers) | Working app exists \-Replica Studio | Med | M | TBD |
| 5 | Multi-warehouse simultaneous connections | Bright Harvest supports one connection at a time | Med | M | Backlog — Near-Term |

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD — no single-account driver. Originating accounts for context: Bright Harvest (demo), Penguin Random House UK (Audience IQ demo). Section intentionally minimal per template guidance.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

* The Architecture doc's canonical-object \+ recipe model is the target data layer; Audience Builder consumes it rather than building its own mapping (if wrong: scope grows by a data-platform integration project)

* One warehouse connector (Snowflake) is sufficient for first design partner (if wrong: connector work moves into MVP)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Warehouse query performance on real portfolio-scale data unknown | M | M | Early load test at design partner; sizing budget in Sec. 8.4 |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Do we simulate the audience building on 1 data table and use synthetic data for it? | Tanmay / Khan/ Jed | PRD sign-off |
| Should we fold Audience Builder in MPG or keep it separate? | Tanmay/Khan/jed | PRD sign-off |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Bright Harvest, PRH (pending access), pipeline publisher accounts |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from current-state analysis, pain-point docs, and kana.ai solution pages | Tanmay |

