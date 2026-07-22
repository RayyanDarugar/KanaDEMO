**Media Proposal Generator (Inbound)**  
*Product Requirements Document · Kana for Publishers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Publishers → Media Proposal Generator (Inbound) |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Publisher Persona Brief: [PM\_Education\_ Briefs\_Publisher\_Persona](https://docs.google.com/document/d/1D_NFjsrnetxFvE-7uaRnDDazWn1B3_Ykq9zT2aJuJII/edit?usp=sharing) Sales Intelligence PRD: [Kana\_PRD\_Publishers\_Sales\_Intelligence\_v3](https://docs.google.com/document/d/1T3mwlzTEAyf5j1hd6JPJ0KHD3DdetQe6FdZndBWaoRo/edit?usp=sharing) |

# 

# **1\. Executive Summary & Objective**

Turn inbound RFPs and briefs into grounded, client-ready media proposals in minutes: intake → advertiser research → deterministic inventory/pricing engine → versioned proposal with line items and receipts → branded deliverables → human approval → OMS push. Two working prototypes exist (Sirius XM 'Media Sales Studio' — the deeper engine — and Time's Media Campaign Studio); this PRD productizes one engine from them. The brief calls this the single highest-impact demo moment for the publisher buyer. Folds into Sales Intelligence at roadmap level.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Proposal turnaround is the publisher revenue workflow's top pain; both source builds are Prototypes per tracker; website page already sells the capability |
| **Target customer segment** | Publisher/media-network ad sales & sales ops responding to advertiser/agency RFPs; user \= seller \+ sales ops, buyer \= CRO/Head of Sales |
| **Originating context** | Generalized from Sirius XM Media Sales Studio (Jun–Jul 2026\) and Time Media Campaign Studio; both customer-specific prototypes |
| **Strategic pillar / OKR** | Publisher-suite GTM consolidation (2-suite taxonomy decision, Jul 2026): productize repeated custom builds into suite applications so presales rarely needs Montreal Engineering |
| **Competitive context** | Manual decks \+ spreadsheets (4–6 days per proposal per solution page); OMS-native proposal tools lack AI grounding. Kana wins on speed \+ deterministic grounding (numbers never from an LLM) \+ finished deliverables |
| **Publisher Revenue / Retention Impact** | Directional: proposal win-rate lift via first-to-respond; seller capacity scales without headcount |

# 

# **3\. Problem Statement & Discovery Findings**

**Theme: Proposal turnaround kills win rate**

> * Proposals take 4–6 days manually, missing the 24-hour agency response window (kana.ai solution page)  
> * RFP → proposal assembly requires pulling audience data, benchmarks, inventory, pricing across systems (Publisher Brief 2/4)

**Theme: Knowledge locked in senior sellers**

> * Best pricing/packaging strategies live in heads; juniors produce generic decks (solution page)

**Theme: Cross-portfolio credibility**

> * Proposals must span properties/formats with real availability grounding — ungrounded numbers destroy trust (Publisher Brief 4; Sirius receipts pattern)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * RFP → approved, client-ready proposal in under a day (vs 4–6 days)  
> * Every number deterministic and receipt-backed (inventory, pricing, availability) — zero LLM-invented figures  
> * Finished deliverables in the publisher's own formats (sheet, PDF, branded deck, cover email)

## **4.2 Non-Goals**

> * Not an OMS or booking system. Orders are booked, managed, and billed in the customer's OMS; MPG pushes approved payloads and never owns the order record or the financials.  
> * Not a pricing authority. Pricing comes from governed rate cards owned by sales ops; the engine applies them — it never invents prices or overrides floors.  
> * No client-facing sends without human approval. Auto-sending proposals to advertisers is permanently out of scope, regardless of how automated the assembly becomes.  
> * Not the campaign execution layer. Once a proposal is accepted and booked, delivery monitoring and optimization belong to Campaign Orchestrator.

## **4.3 Success Metrics**

| Publisher's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| RFP → sendable proposal time | \< 1 business day | Engine \+ approval timestamps |
| % proposal numbers with receipts | 100% | Engine audit (avail\_receipt\_json) |
| Proposal win rate on assisted deals | TBD baseline | CRM outcome tracking |
| Proposals per seller per week | TBD | App analytics |

# 

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Seller / Sales Planner | Sales Ops / Head of Sales (buyer) |
| Responsibility | Responds to RFPs, assembles proposals, negotiates | Owns proposal quality, pricing discipline, OMS hygiene |
| Current pain | Days of manual assembly; formatting over selling; generic decks | Inconsistent pricing vs rate cards; rework from availability mismatches |
| Goal / definition of success | First-to-respond with a differentiated, grounded proposal | Standardized best-practice proposals; clean OMS handoff |
| Technical sophistication | Low | Medium |

## 

## **Primary Use Case Narrative**

An RFP arrives (PDF/PPT/email text), or a seller starts from a prospecting idea or meeting notes. Intake extracts requirements conversationally; the seller confirms (approval gate 1). The research agent produces a source-tagged advertiser brief. The engine runs its steps live — requirements, historical analysis, inventory check, product selection, next-best alternatives when marquee inventory is sold out, targeting, measurement-vendor matching, rate-card pricing, assembly \+ win-rate scoring — every number deterministic SQL with an availability receipt. The seller reviews the versioned proposal, requests NL revisions (new version, never a patch), and approves (gate 2). Deliverables generated: line-item sheet, narrative PDF, deck on the publisher's own PPTX template, cover email. 

**6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Three-scenario intake: RFP upload (PDF/PPT/email text), post-meeting notes, prospecting idea (Sirius pattern)  
> * Advertiser research brief: source-tagged, AI-judged, cached (shared with Sales Intelligence)  
> * Deterministic proposal engine with live step trail: inventory check, product selection, alternatives, measurement matching, rate-card pricing, assembly (generalize Sirius 9-step; fold in Time rate-card patterns)  
> * Versioned proposals with line-level availability receipts and win-rate score with visible breakdown  
> * Deliverables generator: line-item spreadsheet, narrative PDF, branded deck (custom PPTX template), cover email  
> * Configurable approval gates (requirements review, draft approval) \+ AI-judge verification on assembled text

## **6.2 Out of Scope**

> * Email/Slack automatic intake — website promises it; nothing in code (see White Space Backlog)  
> * Live-by-default inventory (avails synthetic by default today; GAM live sync exists) — design-partner wiring decides (see White Space Backlog)  
> * Audio-specific similarity engine as-is (podcast\_similarity) — generalize to a product-alternatives interface; audio stays a vertical pack  
> * The proposal pushed into OMS to hand it off to Campaign Orchestrator

> 

## **6.3 MVP Definition of Done**

> * One design partner produces a real client-facing proposal end-to-end (real rate cards \+ inventory) with all approval gates on  
> * Zero LLM-originated numbers verified by engine audit

> 

# **7\. Functional Requirements**

## **7.1 Intake & Requirements**

> * **\[MVP\]** Parse RFP documents (PDF/PPT/pasted email) into structured requirements (budget, flight, objectives, KPIs, measurement, special reqs)  
> * **\[MVP\]** Conversational clarification \+ human confirmation gate before engine runs

## **7.2 Grounding & Engine**

> * **\[MVP\]** Inventory/availability check against avails with per-line receipts  
> * **\[MVP\]** Product selection \+ utilization optimization; next-best alternatives with rationale when requested inventory is unavailable  
> * **\[MVP\]** Rate-card pricing (list/agency/advertiser scopes, floors); measurement-vendor matching  
> * **\[MVP\]** Win-rate scoring against historical proposals with visible breakdown

## **7.3 Proposal Object & Revisions**

> * **\[MVP\]** Full versioning (every revision \= new version), NL revision requests re-run the engine  
> * **\[MVP\]** AI-judge consistency verdict on narrative vs numbers before send

## **7.4 Deliverables & Handoff**

> * **\[MVP\]** Generate sheet/PDF/deck/email honoring customer branding (uploaded PPTX theme)

> 

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area. Default at this company stage is Backlog; what's not allowed is skipping the decision.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP | Rate cards \+ advertiser data sensitivity review |
| Compliance & Certifications | MVP | N/A |
| Identity, Access & Permissions | MVP (basic) | Seller vs sales-ops vs admin; gates are per-role (Sirius pattern) |
| Scalability & Performance | Backlog | Engine run time targets TBD |
| Reliability & Support | Backlog | Re-attachable long-running jobs pattern exists (app\_jobs) |
| Integrations & Interoperability | MVP (scaffold) | Salesforce \+ GAM connectors with simulated/live modes exist (Sirius); AdBook pattern (Time) |
| Observability & Admin Tooling | MVP (partial) | Engine step trail \+ judge verdicts are built-in observability |
| Data Governance & Retention | Backlog | Research cache \+ proposal version retention TBD |

# 

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Inventory avails (capacity/booked/available) | Ad server (GAM) or OMS | Synthetic by default today; live sync exists (Sirius live mode) | MVP |
| Rate cards (list/agency/advertiser \+ floors) | Customer sales ops | Table pattern exists in both prototypes | MVP |
| Product catalog \+ alternatives graph | Customer \+ Kana | Generalize podcast\_similarity to product similarity | MVP |
| Historical proposals & outcomes | Customer CRM/OMS import | Trains win-rate \+ mix suggestions | MVP |
| Measurement vendors \+ eligibility | Customer sales ops | Sirius table pattern | MVP |
| Inbound RFP email/Slack streams | Customer systems | For auto-intake | Backlog |

# 

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Email/Slack automatic RFP intake | Website 'How It Works' step 1; absent in code | High | M | TBD |
| 2 | Live OMS integrations per vendor (Operative/AdBook-class) | AdBook sync patterns | High | L | TBD |
| 3 | Live inventory by default (GAM avails wiring) | Sirius live mode exists, off by default | High | M | TBD |
| 4 | Cross-property portfolio packaging (multi-property proposals) | Prototypes are single-publisher scoped | High | L | TBD |
| 5 | Proposal analytics (win/loss patterns, pricing optimization) | Sirius historical data exists | Med | M | TBD |
| 6 | Audio vertical pack (podcast similarity as add-on) | Sirius-specific engine step | Med | S | TBD |

# 

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD generalized from two account-scoped prototypes: Sirius XM (demo built, awaiting reschedule per pipeline tracker) and Time (Media Campaign Studio, in production use). Keep both as validation partners; strip account specifics from requirements.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * Sirius engine architecture (deterministic steps \+ receipts \+ versions) is the base; Time patterns fold in (if wrong: merge cost rises)  
> * One OMS integration per design partner is acceptable for MVP (no universal OMS layer)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Audio-specific logic leaks into the generic product | M | M | Vertical-pack boundary (see White Space Backlog) |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Which OMS does the first design partner run? | Sam/Nick | Before build complete |
| Fold-in mechanics with Sales Intelligence (shared accounts/research objects) — when? | Tanmay \+ Eng | Roadmap review |

# 

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Sirius XM (demo built), TIME(Media Campaign Studio) already uses the app and is a client   |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from current-state analysis, pain-point docs, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Publisher Persona Brief only; publisher-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD. v3: reformatted to Kana PRD Template styles (Calibri, navy Heading 1/2, template table styling) | Tanmay |

