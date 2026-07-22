**OmniChannel Media Planner**  
*Product Requirements Document · Kana for Marketers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Marketers → OmniChannel Media Planner |
| **PRD Owner (PM)** | Fisher |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Marketer Persona Brief: [PM\_Education\_Briefs\_Marketer\_Persona](https://docs.google.com/document/d/1xTgIGYVN_m0_-0PDNxsOCLtp8c2e1w8tQ6EzjOZJl3w/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

Close the gap between media strategy and execution: ingest a brief, map it to a canonical audience standard, translate to each platform's native targeting, score live configurations for drift (0–100 integrity), and allocate budget from the brand's own historical marginal returns. The Bright Harvest source app already implements the website page remarkably closely (Analyze Brief covers the brief-to-plan flow end-to-end); productization \= multi-vertical taxonomy, customer data wiring, approval gates \+ export, and the tracker's two additions: a chat surface for cost/what-if questions and — as whitespace — franchise/co-op budget structures.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Brief-to-plan turnaround is the marketer planning wedge; the closest code-to-page match in either suite — fastest credible productization |
| **Target customer segment** | Brand media planners & marketing ops running 5+ platforms; user \= media planner/strategist, buyer \= VP Media/Marketing |
| **Originating context** | Generalized from Bright Harvest Demo → Omni-Channel Media Planner (CPG-scoped demo, Snowflake-grounded) |
| **Strategic pillar / OKR** | Marketer-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | Agency planning decks \+ spreadsheets; platform planners (single-channel); MMM consultancies (slow, unconnected to execution). Kana wins on brief→execution traceability \+ own-data MMM |
| **Marketer Revenue / Retention Impact** | Directional: the plan is the input every other marketer app acts on — OCMP lands the suite |

# **3\. Problem Statement & Discovery Findings**

**Theme: Strategy lost in translation**

> * Brief written in human terms; every platform speaks its own taxonomy; manual translation is inconsistent (solution page)

**Theme: Intuition-based budgets**

> * Allocation relies on last year's splits, not marginal return; 'what would it cost to do X' takes days (Marketer Brief 2\)

**Theme: Mid-flight drift**

> * A $2M campaign reaches wrong segments for weeks before ROAS drop is noticed (solution page)

**Theme: Structural gap: multi-entity budgets**

> * Franchise/co-op two-tier budgets unsupported by any tool (Marketer Brief 4 QSR; whiteboard: build from scratch)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Brief → canonical targets → per-platform translations → budget allocation in one traceable flow (exists — productize)  
> * Integrity/drift scoring on live configurations with rationales (exists — migrate)  
> * Chat surface answering cost/what-if questions against the plan and history (add)

## **4.2 Non-Goals**

> * Not an execution or buying platform. OCMP produces plans and recommendations; nothing is pushed into Meta/DV360/TTD — trafficking stays with the customer or agency.  
> * Not the in-flight optimizer. Mid-flight monitoring surfaces drift and scenarios; continuous spend optimization is Campaign Orchestrator's surface (same MMM engine, two products).  
> * Not an audience data product. Canonical segments are a planning taxonomy, not addressable audiences; building and activating real audiences is Audience Builder's job.  
> * Not a substitute for audited measurement. The MMM grounds allocation decisions; formal attribution/measurement studies for finance-grade reporting remain with the customer's measurement partners.

## **4.3 Success Metrics**

| Marketer's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Brief → allocated plan time | \< 30 minutes | Pipeline timestamps |
| Integrity score coverage on live campaigns | 100% of synced campaigns | Score computation audit |
| What-if questions answered in chat | TBD adoption | Chat instrumentation |
| Allocation vs last-year-split delta | Directional efficiency gain | MMM reporting |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Media Planner / Strategist | VP Media / Marketing (buyer) |
| Responsibility | Channel plans, budget splits, agency coordination | Media budget efficiency and stakeholder trust |
| Current pain | Manual per-platform translation; intuition budgets; drift found in post-mortems | Post-campaign reporting reveals audience mismatch; eroded confidence |
| Goal / definition of success | Traceable brief→execution alignment; defensible allocations | Every channel provably aligned to brief; marginal-return budgeting |
| Technical sophistication | Medium | Low |

## 

## **Primary Use Case Narrative**

The planner uploads the brief and selects platforms. The agent extracts intent, maps it to canonical segments, and produces per-platform native targeting with rationale. She enters budget and flight dates; the allocator returns a per-platform split with marginal ROAS and saturation from the brand's own history, plus a narrative. She asks the chat 'what would $500k more in CTV buy us?' and gets a grounded scenario. She approves the plan (new gate) and exports it as a client/stakeholder-ready document (new). Mid-flight, integrity scores flag DV360 drifting from the brief — she rebalances via scenario compare before waste compounds.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Analyze Brief flow: text/PDF → extracted fields → canonical mapping → per-platform translations (exists — port)  
> * Multi-vertical canonical taxonomy: extend beyond CPG's 148 segments toward the 200+ page claim (productize)  
> * Activate/allocation: budget \+ dates → per-platform split with marginal ROAS/saturation \+ narrative; hard-rule enforcement (exists — port)  
> * MMM engine on customer's own history (daily fit) — shared engine with marketer CO (exists — port; see boundary note)  
> * Integrity/drift scoring with rationales on synced campaigns (exists — port)  
> * NEW: plan approval gate \+ human review before export/share (adopt Sirius/AIQ gate patterns)  
> * NEW: plan export (sheet \+ deck/PDF) via chassis compose pipeline  
> * NEW: chat surface for cost/what-if/plan questions grounded on taxonomy, history, and MMM curves

## **6.2 Out of Scope**

> * Franchise/co-op two-tier budgets — build from scratch per tracker (see White Space Backlog)  
> * Interactive continuous what-if sliders — chat scenarios first; UI later (see White Space Backlog)  
> * Creative production cost folded into plan economics — data exists, siloed (see White Space Backlog)  
> * Real-time mid-flight sync — daily remains (see White Space Backlog)

## **6.3 MVP Definition of Done**

> * One design partner takes a real brief → approved, exported plan grounded on their own history  
> * Chat answers a cost/what-if question with grounded numbers in front of the partner  
> * Integrity scoring live on their synced campaigns

# **7\. Functional Requirements**

## **7.1 Brief Analysis & Canonical Mapping**

> * **\[MVP\]** Ingest brief (text/PDF); extract structured fields; map to canonical segments with editable review  
> * **\[MVP\]** Vertical-aware taxonomy packs (CPG shipped; \+1 vertical for design partner)

## **7.2 Platform Translation**

> * **\[MVP\]** Generate native targeting per platform (Meta, DV360, TTD, YouTube, Pinterest) with rationale; side-by-side view vs canonical intent

## **7.3 Budget Allocation & MMM**

> * **\[MVP\]** Per-platform allocation with marginal ROAS, saturation, and narrative; programmatic hard rules (min splits, normalization)  
> * **\[MVP\]** Daily MMM fit on connected history; abstain below minimum-data thresholds with visible r²

## **7.4 Integrity & Mid-Flight**

> * **\[MVP\]** 0–100 integrity scores across weighted dimensions with drift flags \+ rationales; scenario-based rebalancing compare

*Lightbulb moment: drift flagged with the exact dimension and rationale before the post-mortem.*

## **7.5 Approval, Export & Chat**

> * **\[MVP\]** Plan approval gate; export to spreadsheet \+ deck/PDF honoring brand template  
> * **\[MVP\]** Grounded chat over plans, costs, history, and what-if scenarios (refusal on missing grain)

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area; default at this stage is Backlog — skipping the decision is not allowed.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | Backlog | — |
| Compliance & Certifications | Backlog | — |
| Identity, Access & Permissions | MVP (basic) | Planner vs admin; approval gate roles (new) |
| Scalability & Performance | Backlog | MMM fit cost; taxonomy growth |
| Reliability & Support | Backlog | Daily-fit health visibility |
| Integrations & Interoperability | MVP (warehouse) | Snowflake wiring exists; platform APIs Backlog |
| Observability & Admin Tooling | MVP (partial) | Sync \+ fit run visibility |
| Data Governance & Retention | Backlog | — |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Historical campaign performance (daily grain) | Customer warehouse (Snowflake pattern exists) | Feeds MMM; demo data today | MVP |
| Canonical taxonomy (multi-vertical) | Kana-maintained | 148 CPG segments today; extend | MVP |
| Campaign briefs \+ platform configs | Customer/platforms | For integrity scoring | MVP |
| Creative production costs | Customer | Siloed today; fold into economics later | Backlog |
| Franchise/co-op budget structures | Customer finance | For the White Space Backlog | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Franchise / co-op two-tier budget structures | Whiteboard 'build from scratch'; QSR vertical | High | XL | TBD |
| 2 | Interactive what-if UI (sliders, live re-cost) | Fixed −20/0/+20% scenarios today | Med | M | TBD |
| 3 | Creative cost integration into plan economics | Data exists, siloed (CAMPAIGN\_CREATIVE\_COST) | Med | S | TBD |
| 4 | Real-time mid-flight sync \+ alerts | Page 'real time'; daily/manual today | Med | M | TBD |
| 5 | Proposal evaluation mode (score incoming publisher/agency proposals vs plan) | Marketer Brief 4 | High | M | TBD |
| 6 | Platform API connections (read configs directly) | Manual/warehouse sync today | High | L | TBD |

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD generalized from the Bright Harvest demo build. agent\_desc is empty in the source app — write the agent positioning as part of productization.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * Canonical-taxonomy approach extends cleanly to non-CPG verticals (structure suggests yes; content is the work)  
> * MMM engine is shared with marketer CO (single implementation)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Page overreach: '200+ segments' and 'real-time' vs 148/CPG and daily sync | H | M | Extend taxonomy \+ reconcile copy with Jessica |
| No approval gates in source app — shipping without them breaks 'AI proposes, human decides' | H | M | Gates are MVP requirements (7.5) |
| MMM engine duplication with CO | M | H | Single engine service decision (shared open question) |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| MMM engine ownership (shared service vs per-app)? | Fisher \+ Eng | PRD sign-off |
| Which second vertical taxonomy pack for the first partner? | Sam | Before build |
| Does 'proposal evaluation' belong to OCMP v1.1 or MI? | Fisher | Roadmap review |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Bright Harvest (demo base), The Weather Company (deep-dive scheduled), CPG ICP accounts |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from marketer current-state analysis, pain-point doc, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Marketer Persona Brief only; marketer-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD; reformatted to Kana PRD Template styles | Tanmay |

