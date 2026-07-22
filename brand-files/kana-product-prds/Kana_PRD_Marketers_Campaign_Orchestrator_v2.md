**Campaign Orchestrator (Marketers)**  
*Product Requirements Document · Kana for Marketers suite · July 2026* 

**0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Marketers → Campaign Orchestrator (Marketers) |
| **PRD Owner (PM)** | Fisher |
| **Eng / Design Partners** | Jed/Fisher/Khan |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 20, 2026 |
| **Related Docs** | Marketer Persona Brief: [PM\_Education\_Briefs\_Marketer\_Persona](https://docs.google.com/document/d/1xTgIGYVN_m0_-0PDNxsOCLtp8c2e1w8tQ6EzjOZJl3w/edit?usp=sharing), [Kana\_PRD\_Publishers\_Campaign\_Orchestrator](https://docs.google.com/document/d/1-l-VFGNfrJTU-cCS4K1U9nbO08Nw5mnIIcYuDWMwwIQ/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

PRD for the marketer configuration of the shared Campaign Orchestrator. The migrate-ready asset (GAM delivery ops) is sell-side; the marketer side needs buy-side jobs: in-flight spend optimization across channels, drift detection, and a testing loop. The strongest existing buy-side machinery lives in OmniMP (MMM/marginal-ROAS engine, integrity/drift scoring) and Audience IQ (treated-vs-control testing) — this PRD adopts those as the marketer CO surface and marks vertical jobs (trade promo, location-level, real-time triggers) as whitespace.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Manual in-flight optimization is a top marketer pain; marketers-page promises (trade promo, location-aware, offer testing); shared-app economics |
| **Target customer segment** | Brand marketers running multi-channel campaigns; user \= campaign manager/media analyst, buyer \= VP Marketing/Media |
| **Originating context** | Shared chassis with publisher CO; buy-side machinery from Bright Harvest OmniMP \+ Audience IQ campaign simulation |
| **Strategic pillar / OKR** | Marketer-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | Channel-native optimization (per-platform silos), agency trading desks. Kana wins on cross-channel marginal-return view \+ explanations |
| **Marketer Revenue / Retention Impact** | Directional: spend-efficiency story (ROAS lift) anchors marketer-suite renewals |

# **3\. Problem Statement & Discovery Findings**

**Theme: Manual in-flight optimization**

> * Insight arrives on weekly reporting cycles; reallocation is intuition-based (kana.ai; Marketer Brief 4\)

**Theme: Drift and disconnects**

> * Audience drift undetected mid-flight; promo calendars disconnected from inventory reality (OmniMP page; kana.ai Retail)

**Theme: Slow testing loops**

> * Offer/bundle tests take months of cross-functional effort (kana.ai M\&E)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Cross-channel spend view with marginal-ROAS-based reallocation recommendations (human-approved)  
> * Mid-flight drift alerts before budget waste (integrity scoring exists)  
> * Structured test loop: propose → approve → run → measure lift with CIs

## **4.2 Non-Goals**

> * Never ungated execution. Even when automated spend changes ship from the backlog, they stay approval-gated; unattended budget movement is a permanent trust boundary, not a maturity milestone.  
> * Not a DSP or buying platform. CO recommends and monitors; buying and trafficking happen in the customer's platforms.  
> * Not the planning tool. Pre-flight plan creation and budget setting belong to OmniChannel Media Planner — CO operates strictly in-flight (same MMM engine, two surfaces).  
> * Not sell-side. Publisher delivery operations enter through the publisher configuration of this shared app, never through this document.

## **4.3 Success Metrics**

| Marketer's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Reallocation recommendations acted on | TBD | Accept-rate instrumentation |
| Drift incidents caught mid-flight | TBD baseline | Integrity score alerts |
| Test cycle time | Months → weeks | Partner workflow audit |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Campaign Manager / Media Analyst | VP Marketing / Media (buyer) |
| Responsibility | In-flight performance across channels | Budget efficiency across the mix |
| Current pain | Weekly cycles; per-platform silos; gut-feel reallocation | Invisible waste in diminishing channels |
| Goal / definition of success | Continuous, explained, approvable optimization | Marginal-return-based allocation; defensible efficiency |
| Technical sophistication | Medium | Low |

## **Primary Use Case Narrative**

Campaigns sync from connected channels. The MMM engine (fit nightly on the brand's own history) shows each channel's saturation and marginal ROAS. When Meta saturates mid-flight, a reallocation card appears — evidence, expected lift, scenario compare — and the manager approves; execution happens in the channel tools (recommend-only v1). Integrity scoring flags a platform whose live targeting drifted from the brief. The manager spins up a test from the suggestion queue; treated-vs-control results land with confidence intervals and a gap explanation.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Adopt OmniMP MMM engine (Hill curves, marginal ROAS, scenarios) as the marketer CO optimization core — on customer spend history  
> * Integrity/drift scoring \+ alerts (port from OmniMP)  
> * Reallocation recommendation cards with human approval (recommend-only)  
> * Test loop: proposal → approval → run → treated-vs-control lift with CIs (port AIQ pattern; real-send wiring per partner platform)  
> * Conversational explanations over campaign/spend data (chassis)

## **6.2 Out of Scope**

> * Trade-promo in-window monitoring — CPG whitespace (see White Space Backlog)  
> * Location-level spend optimization — QSR/Retail whitespace (see White Space Backlog)  
> * RMN/DSP live spend connectors — per-connector (see White Space Backlog)  
> * Real-time operational triggers (see White Space Backlog)

## **6.3 MVP Definition of Done**

> * One marketer partner receives \+ approves a reallocation recommendation grounded on their own spend history  
> * One drift alert verified against a real campaign

# **7\. Functional Requirements**

## **7.1 Spend & Performance Ingestion**

> * **\[MVP\]** Ingest cross-channel spend/performance history (warehouse or platform exports) with per-channel normalization

## **7.2 Optimization Engine**

> * **\[MVP\]** Nightly MMM fit per channel; marginal ROAS \+ saturation surfaced with r² confidence; scenario compare (conserve/maintain/accelerate)

*Boundary with OmniMP: same engine, two surfaces — OmniMP plans (pre-flight), CO optimizes (in-flight). Engine is built once; see Open Questions.*

## **7.3 Drift & Alerts**

> * **\[MVP\]** Integrity scoring vs brief with drift flags and rationales; alert on threshold breach

## **7.4 Testing Loop**

> * **\[MVP\]** Test proposals with predicted lift; approval gate; measured lift with bootstrap CIs and prediction-gap explanation

## **7.5 Trigger Rules & Approval Inbox**

> * **\[MVP\]** Adopt Kana-CDP's agent-rules skeleton: user-defined trigger rules → scheduled evaluator writes PENDING proposed actions (never auto-executes) → approval inbox (approve/reject) → execution \+ audit log (AGENT\_ACTIONS pattern)

*CDP review Jul 16: this propose→approve→act→audit loop is built and is the cleanest approval skeleton on the chassis — reuse it for recommendation execution.*

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area; default at this stage is Backlog — skipping the decision is not allowed.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP | — |
| Compliance & Certifications | MVP | — |
| Identity, Access & Permissions | MVP (basic) | Shared chassis roles \+ approval gates |
| Scalability & Performance | Backlog | MMM fit cost at many campaigns TBD |
| Reliability & Support | Backlog | — |
| Integrations & Interoperability | MVP (warehouse) | Platform spend connectors Backlog |
| Observability & Admin Tooling | MVP (partial) | Fit-run health visibility |
| Data Governance & Retention | Backlog | — |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Cross-channel spend/performance history | Customer warehouse (OmniMP pattern) | Daily grain; per-channel | MVP |
| Campaign briefs \+ platform targeting configs | Customer/platforms | For integrity scoring | MVP |
| Live platform spend APIs (RMN/DSP) | Per vendor | For the White Space Backlog | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Trade-promo in-window monitoring (CPG) | kana.ai CPG | High | XL | TBD |
| 2 | Location-level optimization (QSR/Retail) | kana.ai QSR | High | XL | TBD |
| 3 | RMN/DSP spend connectors | Cross-channel fragmentation pain | High | M | TBD |
| 4 | Real-time operational triggers (inventory/kitchen signals) | kana.ai QSR/Retail challenges | Med | XL | TBD |
| 5 | Auto-execution with guardrails | Mirror of publisher CO backlog | High | XL | TBD |

# **11\. Stakeholders, RACI & Account Context**

The marketer surface reuses OmniMP's engine — boundary decision recorded in Open Questions.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * OmniMP MMM engine generalizes beyond CPG demo data  
> * Recommend-only acceptable for v1 partners

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Engine ownership ambiguity (OmniMP vs CO) creates duplicate implementations | M | H | Declare single MMM engine service consumed by both apps |
| MMM credibility on sparse customer history | M | M | Minimum-data thresholds; show r² and abstain below |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| MMM engine: owned by OmniMP, CO, or platform service? | Fisher \+ Eng | PRD sign-off |
| First marketer CO partner and their channel mix? | Sam/Khan/Jed | Before build |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Bright Harvest-class CPG accounts; |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from marketer current-state analysis, pain-point doc, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Marketer Persona Brief only; marketer-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD; reformatted to Kana PRD Template styles | Tanmay |

