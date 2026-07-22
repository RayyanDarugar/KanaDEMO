**Audience Builder (Marketers)**  
*Product Requirements Document · Kana for Marketers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Marketers → Audience Builder (Marketers) |
| **PRD Owner (PM)** | Fisher |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Marketer Persona Brief: [PM\_Education\_Briefs\_Marketer\_Persona](https://docs.google.com/document/d/1xTgIGYVN_m0_-0PDNxsOCLtp8c2e1w8tQ6EzjOZJl3w/edit?usp=sharing), AB (Publisher): [Kana\_PRD\_Publishers\_Audience\_Builder\_v1](https://docs.google.com/document/d/1ja3YpkfikPlz2b3bDlBQDPyxzZsSGSeNkmXf3QXYZAY/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

The core engine (brief → audience → NL interrogation → profiling → activation) is specified in the Publishers Audience Builder PRD and is built once. This document covers only marketer-specific scope: both source apps are already marketer-facing, so the marketer configuration is the shorter path — the work is activation depth (audiences bought against, not sold), marketer data sources (CRM/loyalty/POS), and reach/propensity features.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Fragmented first-party data and audience-creation lead time are the marketer suite's top pains; shared-app economics (build once, configure per suite) |
| **Target customer segment** | Enterprise brand marketers (Retail/CPG/QSR/Travel/FinServ/Healthcare);  user \= audience/lifecycle marketer & media planner,  buyer \= VP Marketing/CRM |
| **Originating context** | Shared core from Bright Harvest Audience Manager \+ Audience IQ (both marketer-facing already);  |
| **Strategic pillar / OKR** | Marketer-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | CDP segment builders (Segment/Amperity-class — data-team-heavy), platform-native audience tools (walled gardens). Kana wins on brief-to-segment speed \+ NL interrogation over the customer's own warehouse |
| **Marketer Revenue / Retention Impact** | Directional: activation depth drives platform stickiness; foundation for Personalization and OCMP |

# **3\. Problem Statement & Discovery Findings**

**Theme: Fragmented first-party data**

> * CRM, loyalty, POS, app systems never built to talk (Marketer Brief 2); loyalty data days behind activation (kana.ai Retail)

**Theme: Two-week audience lead time**

> * Ticket → SQL → a week+ — the moment has passed (kana.ai Retail challenge \#4)

**Theme: Rule-based cross-sell**

> * Propensity/timing/channel prediction absent; simple behavioral rules only (kana.ai FinServ)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Marketer self-serve: brief → sized audience in minutes against CRM/loyalty/POS data  
> * Activation to marketing platforms (by-reference in MVP) with suppression/recency logic  
> * Reach estimation across paid platforms before spend commits (AIQ pattern exists)

## **4.2 Non-Goals**

> * Not a re-spec of the shared core. The engine is defined once in the shared-core PRD; this document governs marketer configuration only, and conflicts resolve in the core PRD.  
> * Not a CDP or customer-data system of record. AB consumes unified data; unification, identity resolution, and consent capture live in the data layer, not here.  
> * Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator.  
> * No probabilistic count inflation. Segment counts are deterministic, warehouse-derived numbers; modeled reach is always labeled as an estimate and never blended into audience counts.

## **4.3 Success Metrics**

| Marketer's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Brief → sized audience | \< 15 minutes | Pipeline timestamps |
| Data-team tickets for segments | 0 for standard segments | Partner workflow audit |
| Segments activated / week | TBD | Activation registry |

# 

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Lifecycle / Audience Marketer | VP Marketing / CRM (buyer) |
| Responsibility | Segments for campaigns, suppression, loyalty targeting | Owns 1P data monetization and martech stack |
| Current pain | Two-week data-team queue; loyalty data stale at send time | 1P asset fragmented; audience tooling requires engineers |
| Goal / definition of success | Self-serve precise segments, activation without exports | Team-wide self-serve; measurable precision gains |
| Technical sophistication | Medium | Low |

## 

## **Primary Use Case Narrative**

Identical core loop to the shared PRD, with marketer wiring: the lifecycle marketer describes the target ('lapsed loyalty members, high AOV, no purchase in 60 days, exclude recent service tickets'), watches the live count as predicates compile against warehouse-unified CRM/loyalty/POS data, interrogates the segment, checks estimated paid-platform reach, and activates by reference to the campaign platform — with recent purchasers suppressed automatically.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Everything in the shared-core MVP (Publishers AB PRD 6.1) — built once  
> * Marketer source wiring: CRM \+ loyalty tables via the warehouse connection  
> * Suppression semantics (recent purchasers, opt-outs) as first-class predicates  
> * Reach estimation across Meta/Google/TikTok (port AIQ feature)  
> * Activation by reference to ≥1 marketer platform registry entry (Iterable/Braze/MessageGears-class)

## **6.2 Out of Scope**

> * Live activation APIs — shared-core item (see White Space Backlog)  
> * Real-time loyalty sync (see White Space Backlog)  
> * Propensity/lookalike models on real data (see White Space Backlog)

## **6.3 MVP Definition of Done**

> * Marketer design partner builds \+ activates (by reference) a suppressed, sized segment on real CRM/loyalty data without a data team

# **7\. Functional Requirements**

## **7.1 Marketer Data Wiring**

> * **\[MVP\]** Map CRM \+ loyalty entities into the audience data model (consent-aware fields included)

## **7.2 Suppression & Compliance Predicates**

> * **\[MVP\]** Recent-purchaser, opt-out, and frequency suppressions as reusable predicates

## **7.3 Reach & Activation**

> * **\[MVP\]** Paid-platform reach estimates (low/expected/high) per segment; by-reference activation with status tracking

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area; default at this stage is Backlog — skipping the decision is not allowed.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP (partial) | Consent fields surfaced; PII stays in warehouse (shared-core model) |
| Compliance & Certifications | Backlog | HIPAA/FinServ segment guardrails later (policy-layer per Architecture doc) |
| Identity, Access & Permissions | MVP (basic) | Shared-core roles |
| Scalability & Performance | Backlog | Shared-core item |
| Reliability & Support | Backlog | — |
| Integrations & Interoperability | MVP | Warehouse \+ one activation registry |
| Observability & Admin Tooling | MVP (partial) | Shared-core build trail |
| Data Governance & Retention | Backlog | — |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| CRM \+ loyalty \+ POS (warehouse-resident) | Customer warehouse | Via shared-core connection | MVP |
| Consent/preference fields | Customer systems | Surfaced on segments | MVP |
| Paid-platform reach benchmarks | Platform APIs / models | AIQ pattern (synthetic today) | MVP (estimate) |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Propensity / lookalike models on real data | Synthetic only today. CDP's audience\_discover\_similar (lookalike via ACCOUNT\_FEATURES \+ LLM clustering) is a working seed | High | M | TBD |
| 2 | Real-time loyalty data sync | kana.ai Retail | High | L | TBD |
| 3 | Live activation APIs | Shared-core backlog; CDP has real S3-partner push \+ consent-gated member export lineage to adopt | High | L | TBD |
| 4 | Adopt CDP identity/consent substrate (PERSON\_IDENTIFIERS graph, Fellegi–Sunter resolver, CRM\_CONTACT\_CONSENT gating) | Kana-CDP review Jul 16 — working, real | High | M | TBD |
| 5 | Vertical guardrail packs (HIPAA, ECOA) | kana.ai FinServ/Healthcare | Med | M | TBD |

# **11\. Stakeholders, RACI & Account Context**

Design context: Penguin USA and Disney demos both include Audience Manager/Builder per the pipeline tracker.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
|  |  |  |  |
|  |  |  |  |

## 

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Which activation platform does the first marketer partner need? | Sam | Before build complete |
| Which Identity Graph provider do we need ? | Khan/Jed | Backlog |
| How many DB connectors do we need? | Khan/Jed | Backlog |

# 

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Penguin USA, Disney (AB \+ Personalization demo asks per tracker) |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from marketer current-state analysis, pain-point doc, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Marketer Persona Brief only; marketer-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD; reformatted to Kana PRD Template styles | Tanmay |

