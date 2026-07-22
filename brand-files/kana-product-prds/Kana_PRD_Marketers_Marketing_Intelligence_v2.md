**Marketing Intelligence**  
*Product Requirements Document · Kana for Marketers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Marketers → Marketing Intelligence |
| **PRD Owner (PM)** | Fisher |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Marketer Persona Brief: [PM\_Education\_Briefs\_Marketer\_Persona](https://docs.google.com/document/d/1xTgIGYVN_m0_-0PDNxsOCLtp8c2e1w8tQ6EzjOZJl3w/edit?usp=sharing) |

# **1\. Executive Summary & Objective**

An AI-powered analyst for marketing teams: ask performance questions in plain language, get decision-grade answers, insight narratives, and human-approved next actions — collapsing the insight-to-action cycle from weeks to hours. The whiteboard verdict stands: the analytics/narrative/HITL machinery exists across three apps (Kana Internal MI, Audience IQ Campaigns/Performance, Outloud QBR), but the marketing-performance data domain is majorly build-from-scratch. Category Intelligence folds into this app per the suite decision (separate PRD covers CI until fold-in).

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Cross-channel reporting pain and slow leadership answers sit at the center of the marketer suite's intelligence loop; positions marketing as revenue engine not cost center (page) |
| **Target customer segment** | Enterprise marketing teams across CPG/Retail/QSR/Travel/FinServ/Healthcare; user \= growth/marketing analyst & marketing manager, buyer \= VP Marketing/CMO |
| **Originating context** | Patterns from Kana Internal MI (live Instantly+Valley outbound analytics), Audience IQ Campaigns/Performance (PRH demo), Outloud IMI QBR generation; net-new domain wiring |
| **Strategic pillar / OKR** | Marketer-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | BI dashboards (Looker/Tableau — retroactive, analyst-dependent), GA4 \+ channel-native reporting (siloed). Kana wins on NL access \+ narratives \+ HITL actions; must not become another dashboard |
| **Marketer Revenue / Retention Impact** | Directional: expansion anchor for the marketer suite; renewal defense via provable campaign ROI |

# **3\. Problem Statement & Discovery Findings**

**Theme: Reporting stitched manually, answers take days**

> * Performance stitched across RMN dashboards, DSPs, channel platforms — no unified view (Marketer Brief 2 User; kana.ai CPG/Retail)  
> * Leadership questions take days via a data team; by the time analysts reconcile exports the campaign window has passed (solution page)

**Theme: Insight doesn't compound**

> * Experiments happen in pockets; learnings don't become a repeatable system (solution page)  
> * Attribution to downstream outcomes is missing — opens/clicks visible, conversions elsewhere invisible

**Theme: Brand/competitive blind spots**

> * Brand equity/SOV monitoring is quarterly while sentiment shifts weekly (kana.ai marketers page — CPG)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * NL questions over connected campaign data answered in seconds with grounded numbers and drill-downs  
> * Insight narratives (QBR-grade) generated with human review before distribution  
> * Suggested next actions with accept/dismiss — every suggestion traceable to evidence

## **4.2 Non-Goals**

> * Not a BI or dashboard-builder product. The product is answers, narratives, and approved actions; a custom report/dashboard authoring surface is out — arbitrary slicing is the conversational layer's job.  
> * Not the execution layer. MI explains and recommends; campaign and spend changes execute in Campaign Orchestrator or the channel tools — MI never modifies campaigns itself.  
> * Not a data platform. Data unification, identity, and consent belong to the Agentic Data Platform; MI consumes connected data and never becomes the customer's system of record.  
> * Not a web-analytics replacement. GA4-class instrumentation remains the customer's; MI interprets what instrumentation captures rather than collecting its own telemetry.

## **4.3 Success Metrics**

| Marketer's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Time-to-answer for performance questions | \< 60 seconds | Chat instrumentation |
| Insight-to-action cycle | Weeks → hours (design-partner baseline) | Workflow audit |
| Narratives generated & approved / month | TBD | App analytics |
| Weekly active analysts/managers | TBD | App analytics |

# 

# 

# 

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Growth / Marketing Analyst | VP Marketing / CMO (buyer) |
| Responsibility | Reporting, campaign analysis, leadership questions | Budget defense, growth targets, vendor consolidation |
| Current pain | Manual export reconciliation across platforms; report-building consumes the week | Can't prove which campaigns drove revenue; marketing seen as cost center |
| Goal / definition of success | Self-serve decision-grade answers; automated narratives | Defensible ROI story; faster optimization loops |
| Technical sophistication | Medium | Low |

## 

## **Primary Use Case Narrative**

The analyst connects campaign data sources. In chat, she asks 'which email campaigns drove the highest clickout-to-purchase rate last quarter?' and gets a grounded answer with the underlying rows one click away. Monday morning, the app has drafted the weekly performance narrative — what moved, why, and three suggested actions, each with evidence. She edits one sentence, approves, and shares. A suggested experiment (pause underperforming variant, shift budget) sits in the queue; she accepts it, and the action routes to the executing system with her approval logged. Every accepted/dismissed suggestion feeds the learning loop.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Data connections for an initial marketing-domain set (start: email/CRM campaign platform \+ one paid channel export \+ commerce/conversion source) — the net-new build  
> * NL querying (grounded chat) over connected data with drill-down and refusal on missing grain (chassis pattern, proven)  
> * Cross-channel rollups: campaign/segment/variant performance with source-tagged schema (port Kana Internal MI schema pattern)  
> * Insight narratives with human review/approve before share (port Outloud QBR \+ AIQ Performance patterns)  
> * Suggestion queue with accept/dismiss and evidence links (port AIQ plays pattern)

## **6.2 Out of Scope**

> * Brand equity / SOV / competitive monitoring — no source asset (see White Space Backlog)  
> * Module-level page engagement — no source asset (see White Space Backlog)  
> * Downstream multi-touch attribution — define data contract only (see White Space Backlog)  
> * Proactive anomaly detection — needs monitoring infra (see White Space Backlog)

## **6.3 MVP Definition of Done**

> * One design partner answers real leadership questions in-app on live data (no data team involved)  
> * One narrative approved and actually shared with partner leadership  
> * CI fold-in interface documented (shared chat \+ evidence model)

# **7\. Functional Requirements**

## **7.1 Data Connections & Model**

> * **\[MVP\]** Connect ≥2 real marketing data sources with scheduled sync \+ source-tagged unified schema  
> * **\[MVP\]** Freshness indicators per source; sync health visible to admins (adopt CDP's data\_connector registry \+ data\_sources\_health probe/cache pattern — instant-load sources page)

## **7.2 Conversational Analytics**

> * **\[MVP\]** NL Q\&A grounded on precomputed rollups; every number traceable; explicit refusal when data can't answer

## **7.3 Narratives & Reporting**

> * **\[MVP\]** Scheduled \+ on-demand insight narratives (what moved, why, actions) with edit \+ approve flow before distribution

## **7.4 Suggestions & Learning Loop**

> * **\[MVP\]** Evidence-linked suggestion cards (accept/dismiss); outcomes tracked; feedback feeds future suggestions

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area; default at this stage is Backlog — skipping the decision is not allowed.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | Backlog | Campaign data classification review |
| Compliance & Certifications | Backlog | FinServ/Healthcare verticals need compliance-aware content flags later (MP-06) |
| Identity, Access & Permissions | MVP (basic) | Analyst vs admin roles (chassis) |
| Scalability & Performance | Backlog | — |
| Reliability & Support | Backlog | — |
| Integrations & Interoperability | MVP (2 sources) | customer-facing sources are net-new |
| Observability & Admin Tooling | MVP (partial) | Sync-run visibility pattern exists |
| Data Governance & Retention | Backlog | — |

# 

# 

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Campaign platform data (email/CRM) | Customer MAP/CEP | First connector — vendor TBD by design partner | MVP |
| Paid channel performance | Platform exports/APIs | One channel first | MVP |
| Conversion/commerce outcomes | Customer warehouse | For downstream linkage | MVP |
| SOV/social/brand signals | Vendor/API TBD | For the White Space Backlog | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Brand equity / SOV / competitive monitoring with alerts | kana.ai marketers page | High | L | TBD |
| 2 | Module-level page engagement intelligence | MI page 'How It Works' ; no source | Med | L | TBD |
| 3 | Downstream impact / multi-touch attribution | MI page \#4. UPDATED (CDP review): pluggable attribution engine EXISTS in Kana-CDP (first/last/linear/u-shaped/time-decay models \+ CONVERSION\_EVENTS \+ attribution\_runs) — adapt, don't build | High | L | TBD |
| 4 | Proactive anomaly detection (continuous monitors) | MI page \#2 | High | M | TBD |
| 5 | Category Intelligence fold-in execution | Suite decision | High | M | TBD |
| 6 | Compliance-aware content library (FinServ) | Vertical challenge (kana.ai FinServ) | Med | M | TBD |

# 

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD. Note: the tracker records that the website demo video sells Brand Intelligence (Kana Main app, not cloned) as Marketing Intelligence — reconcile that app's contents against this PRD before build.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * Chassis grounded-chat \+ narrative machinery ports cleanly to new domains (evidence: three apps)  
> * Design partner will nominate the first two data sources (if wrong: connector scoping stalls MVP)

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Domain build-from-scratch underestimated (connectors \+ semantics) | H | H | Scope MVP to 2 sources; JIT-integration pitch matches Architecture doc approach |
| Becomes 'another dashboard' instead of analyst-replacement | M | M | Narrative \+ suggestion loop is the core UX, not charts |
| Brand Intelligence app overlap/duplication | M | M | Clone & review before build (open question) |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| First design partner \+ their two data sources? | Khan/Sales — Penguin USA & Disney demos include MI | PRD sign-off |
| CI fold-in: shared chat surface from day one? | Fisher \+ Eng | PRD sign-off |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Penguin USA (MI in demo scope), Disney (Intelligence demo requested per pipeline tracker), Gibson |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# 

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from marketer current-state analysis, pain-point doc, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Marketer Persona Brief only; marketer-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD; reformatted to Kana PRD Template styles | Tanmay |

