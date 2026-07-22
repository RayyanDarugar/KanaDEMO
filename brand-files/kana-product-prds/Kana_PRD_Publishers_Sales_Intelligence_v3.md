**Sales Intelligence (Outbound)**  
*Product Requirements Document · Kana for Publishers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Publishers → Sales Intelligence (Outbound) |
| **PRD Owner (PM)** | Tanmay |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 20, 2026 |
| **Related Docs** | Publisher Persona Brief: [PM\_Education\_ Briefs\_Publisher\_Persona](https://docs.google.com/document/d/1D_NFjsrnetxFvE-7uaRnDDazWn1B3_Ykq9zT2aJuJII/edit?usp=sharing), Apple Sales Intelligence Hub |

# 

# **1\. Executive Summary & Objective**

Give publisher ad-sales teams outbound revenue intelligence: advertiser/prospect research briefs, pipeline and account views, win-likelihood signals, and (per the suite page) closed-loop attribution that proves advertiser ROI. This is the least-built app in the suite: discovery is incomplete (Apple source customers not yet accessible), there is no solution page, and the largest components are whitespace. This PRD is deliberately thin and marked Draft — it seeds structure now and hardens after source access. Note: Media Proposal Generator folds into this app per the suite decision; MPG has its own PRD and the two merge at roadmap level.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Suite decision names SI the outbound half of the publisher revenue workflow; MPG folds in; closed-loop ROI is the buyer persona's top defensibility pain |
| **Target customer segment** | Publisher/media-network ad sales & sales ops; user \= seller/account exec \+ sales ops, buyer \= CRO/Head of Sales |
| **Originating context** | Seeds from Sirius XM Media Sales Studio (research agent, pipeline/accounts, win-rate scoring) and Campaign Orchestrator's 'Research with Kana'; Apple builds referenced on whiteboard but not yet accessible |
| **Strategic pillar / OKR** | Publisher-suite GTM consolidation (2-suite taxonomy decision, Jul 2026): productize repeated custom builds into suite applications so presales rarely needs Montreal Engineering |
| **Competitive context** | Media-sales intelligence vendors (MediaRadar, Winmo, Vivvix-class) — external spend signals only, same feed every publisher buys. Adjacent: media CRM/OMS (Boostr, Salesforce) — hold deal history, no intelligence layer. ZoomInfo/Gong/Bombora are data sources SI ingests, not competitors. Most common incumbent: manual research \+ tribal knowledge. Kana wins by joining external signals to the publisher's own audience, inventory, delivery, and win/loss history. delivery, and proposal history |
| **Publisher Revenue / Retention Impact** | Directional: more qualified outbound pipeline; renewal defense via closed-loop ROI reporting |

# 

# **3\. Problem Statement & Discovery Findings**

**Theme: Sellers lack context mid-deal**

> * Fast audience insights and competitive/category context unavailable during negotiation (Publisher Brief 2/4)

**Theme: Closed-loop ROI is unprovable**

> * Linking delivery to advertiser outcomes across systems is manual and arrives too late to defend/grow budgets (kana.ai Publishers page, Media Networks challenge \#1)

**Theme: Outbound prospecting is manual**

> * Identifying/qualifying advertiser demand with data-backed outreach is unassisted; best-practice knowledge lives in senior sellers' heads

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Source-tagged, judge-verified advertiser research brief on any account in minutes (pattern exists in Sirius)  
> * Pipeline/account workspace with win-likelihood signals grounded in historical proposals  
> * Agree the delivery-data handoff spec with Campaign Orchestrator (fields, grain, IDs) so the future advertiser-ROI reporting can be built without re-plumbing — spec only in MVP, no pipeline."

## **4.2 Non-Goals**

> * Not a CRM. Salesforce (or the customer's CRM) remains the system of record for accounts, opportunities, and pipeline; SI reads from it and logs milestones back — it never replaces pipeline management.  
> * No autonomous outreach. SI never sends email or messages to advertisers on its own; anything client-facing is drafted-and-human-approved at most. This is a permanent trust boundary, not a maturity milestone.  
> * Not a data reseller. Advertiser research and intelligence serve the publisher's own sales workflow; packaging, licensing, or syndicating that intelligence as a data product is out of scope.  
> * Not buy-side. Prospecting on behalf of advertisers/marketers (finding media to buy) belongs to the Marketers suite; SI is strictly the publisher's sell-side motion.

## 

## 

## **4.3 Success Metrics**

| Publisher's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Time to research brief per account | \< 10 minutes | Research pipeline timestamps |
| Time to close deal | TBD | App analytics |
| Win-rate lift on assisted deals | TBD — needs baseline | CRM comparison |

# 

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Ad Sales Seller / Account Executive | CRO / Head of Ad Sales (buyer) |
| Responsibility | Owns advertiser relationships, outbound pipeline, RFP responses | Owns revenue targets, pipeline quality, sales tooling |
| Current pain | Research is manual; pricing/packaging wisdom locked in senior heads; no ROI story at renewal | Pipeline breadth capped by research/admin hours; churn when ROI can't be proven |
| Goal / definition of success | Walk into every call with grounded account intelligence | More qualified pipeline per seller; defensible advertiser ROI |
| Technical sophistication | Low | Low |

## 

## **Primary Use Case Narrative**

A seller targets an advertiser (or receives an inbound signal). The research agent assembles a source-tagged brief — company context, category dynamics, spend signals, prior history with the publisher (proposals, win/loss, delivery) — verified by an AI judge and cached. The seller reviews the brief, sees win-likelihood context from historical patterns, and moves the account through pipeline stages; milestones log to CRM. When a brief comes in — usually informal direction on budget, audience, and pricing; a formal RFP on larger deals — the workflow hands off to the MPG flow (same app family). Post-campaign, delivery outcomes feed back to the account view — the seed of the closed-loop ROI story

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Advertiser research briefs: curated profiles \+ prior-history \+ web search, source-tagged, AI-judged, cached (port from Sirius)  
> * Account & pipeline workspace with stages and CRM milestone logging (port from Sirius; Salesforce connector exists)  
> * Win-rate signal from historical proposals (port from Sirius scoring)  
> * Conversational assistant over accounts, history, and inventory context

## **6.2 Out of Scope**

> * Competitive tracker — whitespace, needs discovery \+ its own scoping (see White Space Backlog)  
> * Closed-loop ROI attribution — define data contract only in MVP (see White Space Backlog)  
> * Outreach assist — no source, no validated demand (see White Space Backlog)  
> * Apple-specific capabilities — pending workspace access (see White Space Backlog)

## **6.3 MVP Definition of Done**

> * Research brief \+ pipeline flow used by one design-partner sales team on real accounts  
> * MPG fold-in path documented (shared account/proposal objects)

# **7\. Functional Requirements**

## **7.1 Advertiser Research**

> * **\[MVP\]** Generate a research brief per advertiser combining internal history (proposals, delivery, calls) and external sources, with per-claim source tags  
> * **\[MVP\]** AI-judge verification pass and cache with freshness window (Sirius: ≤7 days)

## **7.2 Pipeline & Accounts**

> * **\[MVP\]** Account list with data-quality flags; opportunity pipeline by stage; CRM (Salesforce) milestone logging

## **7.3 Win-Likelihood Signals**

> * **\[MVP\]** Score opportunities against historical winning proposals with visible breakdown (no black box)

## **7.4 Conversational Assistant**

> * **\[MVP\]** Chat over accounts, history, inventory availability (via CO data), and rate context — grounded, refusal on missing grain

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area. Default at this company stage is Backlog; what's not allowed is skipping the decision.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP | CRM data handling review needed |
| Compliance & Certifications | MVP | N/A |
| Identity, Access & Permissions | MVP (basic) | Seller vs sales-ops vs admin roles (Sirius pattern) |
| Scalability & Performance | Backlog | N/A |
| Reliability & Support | Backlog | N/A |
| Integrations & Interoperability | MVP (Salesforce) | Salesforce connector exists in Sirius (simulated \+ live modes) |
| Observability & Admin Tooling | Backlog | N/A |
| Data Governance & Retention | Backlog | Research cache freshness policy exists as pattern |

# 

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Advertiser/agency accounts \+ history | Customer CRM (Salesforce) | Live connector exists (Sirius) | MVP |
| Historical proposals & win/loss | Kana (MPG shared objects) | Trains win-rate signal | MVP |
| External research sources | Web search/fetch | Source-tagged, judged | MVP |
| Delivery outcomes for ROI loop | Campaign Orchestrator | Data contract to define in MVP | Backlog (build) |
| Competitive spend/creative intel | TBD vendor/API | For competitive tracker | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Competitive tracker (advertiser/competitor spend & creative monitoring) | Whiteboard: 'need to build'; no source app | High | L | TBD |
| 2 | Closed-loop advertiser ROI attribution (exposure ↔ outcome) | [kana.ai](http://kana.ai) Web page; nothing in code | High | XL | TBD |
| 3 | Outreach assist (draft emails from research brief, human-approved) | Seller workflow inference | Med | M | TBD |
| 4 | Apple Sales Intelligence Hub as Inspiration. | Whiteboard inspiration rows; access pending | High | S | TBD |
| 5 | Solution page \+ positioning for SI | Tracker: 'No website page for this' | High | S | TBD |
| 6 | Template for media brief as per custom requirement | TBD | Med | L | TBD |
| 7 | CRM Data Integrations | Salesforce already MVP, HubSpot, Microsoft Dynamics 365, Zoho CRM, SAP CRM, and Oracle NetSuite all need integrations. | High | M | TBD |

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD, but discovery is materially incomplete: Apple workspace (whiteboard inspiration source) are inaccessible, and there is no public solution page. Treat all of Section 7 as provisional until source access.

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * Sirius research/pipeline patterns generalize beyond audio (if wrong: more net-new build)  
> * MPG fold-in means shared account/proposal objects, not a UI merge in v1

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| No positioning page → sales sells inconsistent story | M | M | Draft solution page alongside PRD (see White Space Backlog) |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| What exactly does the suite page's 'closed-loop attribution' commit us to for v1? | Tanmay \+ Khan | PRD sign-off |
| MPG fold-in timing: shared objects now, UI merge when? | Tanmay \+ Eng | Roadmap review |

# 

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: PRH (pending), NESN (MPG→CM interest per pipeline tracker) |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# 

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from current-state analysis, pain-point docs, and kana.ai solution pages | Tanmay |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Publisher Persona Brief only; publisher-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD. v3: reformatted to Kana PRD Template styles (Calibri, navy Heading 1/2, template table styling) | Tanmay |

