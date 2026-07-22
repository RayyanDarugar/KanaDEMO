**Personalization @ Scale**  
*Product Requirements Document · Kana for Marketers suite · Draft v0.2 · July 2026 · Template v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| **Suite/Product / Feature Name** | Kana for Marketers → Personalization @ Scale |
| **PRD Owner (PM)** | Fisher |
| **Eng / Design Partners** | TBD |
| **Status** | Draft |
| **Scope** | MVP |
| **Last Updated** | July 17, 2026 |
| **Related Docs** | Marketer Persona Brief: [PM\_Education\_Briefs\_Marketer\_Persona](https://docs.google.com/document/d/1xTgIGYVN_m0_-0PDNxsOCLtp8c2e1w8tQ6EzjOZJl3w/edit?usp=sharing), |

# **1\. Executive Summary & Objective**

An AI loyalty strategist that prevents churn and maximizes LTV: per-customer next-best-action decisions with plain-language reasons, churn-risk scoring, guardrails, and human approval before anything reaches a customer. The engine already exists end-to-end in Audience IQ's Personalization tab (six-decision NBA engine with net-revenue offer model, provenance, guardrails, approve-and-activate) plus the Best Path play queue — all on synthetic data. This PRD productizes that engine onto real customer data. Per the tracker decision, 'Best Path' ships as 'Optimization Dashboard'.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| **Business driver** | Churn intervention timing and one-size interventions are core marketer pains; loyalty-driven verticals (QSR/Travel/M\&E) anchor the ICP list; the AIQ engine is the suite's most complete marketer asset |
| **Target customer segment** | Growth/CRM/loyalty teams at subscription, loyalty, and repeat-purchase businesses; user \= lifecycle/retention marketer, buyer \= VP Growth/CRM |
| **Originating context** | Generalized from Audience IQ (PRH UK demo) Personalization \+ Best Path tabs; website page live |
| **Strategic pillar / OKR** | Marketer-suite GTM consolidation (2-suite taxonomy decision, Jul 2026\) |
| **Competitive context** | MAP journey builders (Braze/Iterable canvases — rule-based), churn-model-in-a-warehouse (no action loop). Kana wins on decision-level personalization \+ reasons \+ HITL; page FAQ explicitly stresses human review |
| **Marketer Revenue / Retention Impact** | Directional: retention/LTV economics (page: 25x acquisition cost); expansion via loyalty verticals |

# 

# 

# **3\. Problem Statement & Discovery Findings**

**Theme: Churn detected too late**

> * Reports show fewer renewals after the fact; behavioral early signals unused (solution page)  
> * Scores reach campaigns after the customer cancelled (kana.ai M\&E)

**Theme: One-size interventions**

> * Same buy-10-get-1 for everyone regardless of frequency/price sensitivity (kana.ai QSR)  
> * Win-backs on fixed schedules miss the conversion window (kana.ai M\&E/Travel); offers not timed to life events (FinServ)

**Theme: Blanket spend waste**

> * Discounts subsidize customers who would have stayed; margin leaks (solution page)

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

> * Per-customer NBA (channel, content, offer, time, day, frequency) with a reason on every decision  
> * Churn-risk scoring on real behavioral data with at-risk cohorts surfaced weeks ahead  
> * Nothing customer-facing without guardrails \+ explicit human approval

## **4.2 Non-Goals**

> * Never contacts a customer without human approval. The approve-and-activate gate is permanent; fully autonomous customer-facing sends are out of scope at any maturity level.  
> * Not a marketing automation platform. Sends and journeys execute in the customer's MAP/CEP; Personalization decides and hands off — no email builders, no delivery infrastructure.  
> * Not an audience tool. Cohort and segment construction belongs to Audience Builder; Personalization decides per-customer actions within those audiences.  
> * Not a data-science workbench. Models ship managed, with visible reasons; customers do not train or tune custom models in-product.

## **4.3 Success Metrics**

| Marketer's Current Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Decisions with plain-language reasons | 100% | Engine audit |
| At-risk cohort lead time | Weeks before churn (partner baseline) | Score-vs-outcome tracking |
| Retention lift on approved interventions | TBD | Treated-vs-control measurement |
| Margin saved vs blanket discounting | Directional | Offer-model reporting (net-revenue) |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 (User) | Persona 2 (Buyer) |
| :---- | :---- | :---- |
| Name / Role | Lifecycle / Retention Marketer | VP Growth / CRM (buyer) |
| Responsibility | Retention campaigns, loyalty offers, win-backs | Retention economics, LTV, loyalty P\&L |
| Current pain | Blanket campaigns; no per-customer reasoning; churn visible too late | Discount spend subsidizes the wrong customers; churn hits revenue predictability |
| Goal / definition of success | Precise, explainable, approvable interventions | Provable retention lift with protected margin |
| Technical sophistication | Medium | Low |

## **Primary Use Case Narrative**

The engine precomputes six decisions per known customer — contact or hold, which content, which offer (chosen by expected net revenue, not conversion alone), when, and how often — each with a reason ('high churn risk \+ price-sensitive: calibrated 15% offer beats standard 25% on net revenue'). The marketer reviews the cohort, adjusts guardrails (discount cap, frequency cap, forced channels), and clicks Approve & Activate; held customers are deliberately not contacted. On the Optimization Dashboard, mined opportunities appear as plays — segment, objective, KPI target, pre-simulated plan, confidence — accepted or dismissed with one click. Results flow back as treated-vs-control lift, compounding the learning loop.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

> * Six-decision NBA engine with reasons, confidence, signal provenance (port from AIQ — working)  
> * Churn/unsubscribe risk scoring wired to one real behavioral source (CRM/loyalty events) — the productization core  
> * Guardrails framework \+ campaign-level controls (offer menu, caps, channel/time constraints) with server-side enforcement (port)  
> * Approve & Activate gate with by-reference activation and idempotent re-activation (port)  
> * Optimization Dashboard (renamed Best Path): play queue with accept-to-launch/dismiss (port)  
> * Treated-vs-control lift measurement with Confidence Intervals on activated cohorts (port; wire to real sends where partner platform allows)

## **6.2 Out of Scope**

> * Root-cause diagnosis (friction correlation) — see White Space Backlog  
> * Always-on journey anomaly detection / event triggers — see White Space Backlog  
> * Live MAP/CRM write integrations — see White Space Backlog  
> * Uplift forecasting at cohort-save granularity — partial via simulation; full version in the White Space Backlog

## **6.3 MVP Definition of Done**

> * NBA decisions computed on a design partner's real customer data with guardrails on  
> * Successfully execute one human-approved marketing campaign and measure its impact by comparing the results of customers who received it against those who did not.  
> * All customer contact requires an explicit human approval event

# **7\. Functional Requirements**

## **7.1 Risk & Decision Engine**

> * **\[MVP\]** Ingest behavioral events from one real source; compute engagement \+ churn-risk features  
> * **\[MVP\]** Precompute per-customer decisions (channel incl. no-contact, content, offer via net-revenue model, time, day, frequency) with reason \+ confidence \+ provenance

## **7.2 Guardrails & Controls**

> * **\[MVP\]** Plain-language guardrail toggles enforced server-side with conflict/override visibility  
> * **\[MVP\]** Campaign-level offer menu with discount cap \+ margin override; frequency caps

## **7.3 Approval & Activation**

> * **\[MVP\]** Approve & Activate across channels by reference; held (no-contact) customers excluded and visible

## **7.4 Optimization Dashboard**

> * **\[MVP\]** Mined plays (segment, objective, KPI baseline→target, plan, predicted lift, rationale) with accept-to-launch / dismiss; lineage to created campaigns

## **7.5 Measurement**

> * **\[MVP\]** Treated-vs-control lift with bootstrap Confidence Intervals; prediction-vs-actual gap explanations; outcome feedback loop

# **8\. Enterprise Readiness Considerations**

*Explicit MVP-or-Backlog call per area; default at this stage is Backlog — skipping the decision is not allowed.*

| Area | MVP or Backlog | Notes / current state |
| :---- | :---- | :---- |
| Security & Data Privacy | MVP (partial) | Customer PII handling review; no-contact/consent semantics are first-class already |
| Compliance & Certifications | Backlog | HIPAA (healthcare members) / FinServ offers need policy-layer gates later |
| Identity, Access & Permissions | MVP (basic) | Marketer vs admin; approval events logged |
| Scalability & Performance | Backlog | Precompute cost at millions of customers TBD |
| Reliability & Support | Backlog | — |
| Integrations & Interoperability | MVP (by-reference) | Connector registry exists (MessageGears/Iterable/Braze-class) |
| Observability & Admin Tooling | MVP (partial) | Decision provenance is built-in observability |
| Data Governance & Retention | Backlog | Decision/feature retention TBD |

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Behavioral events (engagement, purchases) | Customer CRM/loyalty/warehouse | One real source for MVP | MVP |
| Offer economics (margin, cost) | Customer finance/commerce | Feeds net-revenue model | MVP |
| Consent / contactability | Customer systems | No-contact enforcement — adopt CDP's CRM\_CONTACT\_CONSENT \+ per-member activation gating (real, built) | MVP |
| Identity graph (known \+ anonymous profiles) | Kana-CDP substrate (PERSON\_IDENTIFIERS \+ V\_CANONICAL\_CONTACT/VISITOR) | Working Fellegi–Sunter resolver; reuse instead of building | MVP (adopt) |
| Support/friction signals | Ticketing/CS systems | For root-cause (White Space Backlog) | Backlog |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Impact | Effort | Routing Decision |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Root-cause churn diagnosis (friction correlation) | Page 'How It Works'; heuristic reasons only today | High | L | TBD |
| 2 | Always-on anomaly detection \+ event triggers | Page \#3; batch-only today | High | L | TBD |
| 3 | Live MAP/CRM write connectors | By-reference only today | High | L | TBD |
| 4 | Full uplift forecasting (revenue impact of saving cohorts) | Page \#4 | Med | M | TBD |
| 5 | Vertical offer packs (QSR loyalty, travel points, FinServ life events) | kana.ai vertical challenges | Med | M | TBD |

# **11\. Stakeholders, RACI & Account Context**

Platform-wide PRD generalized from the PRH UK demo (Audience IQ). Naming decision applied: 'Best Path' ships as 'Optimization Dashboard' (tracker note).

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

> * AIQ engine generalizes beyond book publishing (features are domain-neutral: engagement, recency, offers)  
> * One behavioral source suffices for credible churn scores at MVP

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Synthetic-to-real gap: model quality unknown on real data | M | H | Backtest against partner's historical churn before activation |
| Customer-facing actions carry brand risk | L | H | Guardrails \+ approval gates mandatory; no-contact default for low confidence |

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Rename rollout: 'Optimization Dashboard' everywhere incl. nav ids? | Fisher | Build start |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| PRD review & sign-off | TBD |
| MVP build complete | TBD |
| Design partner / early customer validation | TBD — candidates: Disney (AB \+ Personalization ask), Penguin USA (demo includes personalization), QSR/Travel ICP accounts |
| MVP live with first real user(s) | TBD |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-15 | v0.1 | Initial draft generated from marketer current-state analysis, pain-point doc, and kana.ai solution pages | Fisher |
| 2026-07-17 | v0.2 | Review changes: Related Docs → Marketer Persona Brief only; marketer-labeled Section 2/4.3 fields; pain-point/backlog citations removed (Section 8 untouched); non-goals rewritten as boundary statements; backlog routing set to TBD; reformatted to Kana PRD Template styles | Fisher |

