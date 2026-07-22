**Product Requirements Document**

**Category Intelligence**

*A User-Driven Market-Watch Pipeline  ·  Kana PRD Framework v1.1 (MVP → White Space Backlog)*

# **0\. Document Control**

| Field | Detail |
| :---- | :---- |
| Suite / Product / Feature Name | Category Intelligence — user-driven external-market-watch pipeline (Ask → Probe → Confirm → Monitor → Export) |
| PRD Owner (PM) | Fisher Fraley |
| Eng / Design Partners | Jed (product direction), Kaan (product), Vivek, Jessica, Tanmay |
| Status | Draft — for team review |
| Scope | MVP (all non-MVP items routed to Section 10, White Space Backlog) |
| Last Updated | July 16, 2026 |
| Related Docs | [Data-flow diagram](https://drive.google.com/file/d/18i3x8cVBmEOl1bpuaMRxR-rfdJX6N1W_/view?usp=drive_link) (question → answer); Category Intelligence Dry Run notes (2026-07-16); pricing tiers document (Silver / Gold / Enterprise); source validation framework (four-tier) |

# **1\. Executive Summary & Objective**

Category Intelligence lets a marketing or category analyst research an external-market question against \~177 curated public data sources, confirm the signals worth watching, monitor how those signals move over time, and export a cited, dated record to share. Every surface in the app is a stage in one pipeline — Ask → Probe → Confirm → Monitor → Alert → Export — built entirely on top of the existing research pipeline (router → per-source plan/fetch/synthesize/judge → grounding gate) without modifying it. The MVP is deliberately user-driven end to end: nothing is monitored until a human confirms it, and nothing surfaces without grounded evidence. It ships with automated profile onboarding, a dedicated billing tab, in-plan usage limits with an in-app upgrade path, and three feedback pathways — the launch-ready commercial wrapper agreed in the July 16 dry run.

# **2\. Strategic Context & Business Case**

| Field | Detail |
| :---- | :---- |
| Business driver | Enterprise marketing and sales analysts lack a systematic, cited view of external market trends. Competitors offer either curated intel (CB Insights, AlphaSense, Contify, Crayon, Klue) or generic AI answers (Perplexity Enterprise, Glean); none combine user-curated monitoring with hard citation/refusal gates. Transparent confidence scoring and grounding gates are the wedge. |
| Target customer segment | Mid-market to enterprise brand marketers — CPG, Retail, QSR, Travel & Hospitality — buying persona: analytics/insights leadership; day-to-day user: marketing/category analyst. Maps to Kana's Category Intelligence capability. |
| Originating context | Generalized from the Ocean Spray Category Intelligence \+ Research Hub app in the DSL workspace. NVCG (fictional CPG conglomerate) validation persona; refined through the pipeline-spine PRD (v4) and the Category Intelligence Dry Run, July 16 2026\. |
| Strategic pillar / OKR | Kana capability suite — Category Intelligence Hub; "measurable outcomes over tools" positioning. Supports the productization path from demo PRDs to a sellable, self-serve capability. |
| Competitive context | Alternatives today: manual searches across scattered public sources (no citations, late detection); enterprise intel platforms (expensive, analyst-mediated, not user-curated); AI answer engines (no grounding guarantees, no monitoring). Kana wins on grounded citations, user-earned monitoring, and honest evidence-strength scoring. |
| Revenue / retention impact | Directional: PLG motion with Silver / Gold / Enterprise tiers priced on pipeline choke points; in-app upgrade button at plan limits and an enterprise upsell pathway (dry-run decisions, 7/16) create the expansion path. The confirmed monitored set is the user's accumulated judgment — a compounding, hard-to-churn asset. |

# **3\. Problem Statement & Discovery Findings**

**Theme: No systematic external-market view**

* Analysts have no systematic view of external market trends; assembling a picture means manual searches across scattered public sources with no citations (NVCG persona discovery, pipeline PRD).

* When something shifts, the analyst finds out late and reconstructs the story by hand — there is no watch mechanism and no history (persona pain, pipeline PRD).

* Leadership asks "why did the metric move?" and analysts cannot produce a cited, dated record on demand (persona goal statement, pipeline PRD).

**Theme: Trust & grounding pain**

* Generic AI answers are unusable in front of leadership without citations and an explicit refusal path when evidence is thin (competitive context; grounding-gate design driver).

* A single confidence number conflates "is this worth watching?" with "how strong is today's evidence?" — timelines become dishonest when evidence thins but the plotted point looks identical (two-score design driver, pipeline PRD).

* Algorithmic discovery feeds are distrusted: unwanted topics, noise, and uncontrolled research spray. Users want to bring the questions themselves (user-driven design stance, pipeline PRD).

**Theme: Onboarding & workflow friction**

* The previous interview-style onboarding took \~20 minutes; the automated research-driven onboarding (name \+ website → drafted profile) replaced it.

* Category-specific input boxes added friction and hurt performance; generic, utility-focused layouts were agreed instead.

**Theme: Commercial transparency**

* Users can see plan limits or billing cycle clearly; with Stripe data not yet integrated, metrics default to "unlimited" (Dry Run notes, 7/16, 00:03:04).

* Billing and plan information must be a dedicated, first-class tab with a clear cancellation path (Dry Run decision, 7/16, 00:03:58).

# **4\. Goals, Non-Goals & Success Metrics**

## **4.1 Goals**

* Ship the full pipeline as one coherent journey — Ask → Probe → Confirm → Monitor → Alert → Export — where every app surface is a stage (Metric: end-to-end completion in NVCG validation).

* Guarantee grounded answers: every response carries evidence\_grounded; insufficient evidence yields an explicit refusal/"checked, nothing new" state, never fabricated copy (Metric: grounded-answer integrity).

* Make monitoring earned and honest: two confidence scores with separate jobs (gate confidence at probe, finding confidence per refresh) so timelines distinguish "the signal changed" from "the evidence got thinner" (Metric: monitored signals per active user).

* Launch commercially ready: automated onboarding, billing tab, plan-limit visibility, in-app upgrade button, and three feedback pathways (Metric: time-to-first-value; upgrade-path conversion).

## **4.2 Non-Goals**

* Push-discovery — the app never surfaces net-new topics the user didn't engage with (deliberate design stance; see Backlog \#1).

* Generative media briefs — unsteerable fresh research across news sources is off-model for a user-driven product (see Backlog \#2).

* Internal company data ingestion — the "data plane" layer stays out of v1 (see Backlog \#6).

* Any change to the core research pipeline — router, per-source plan/fetch/synthesize/judge, and grounding gate are consumed as-is.

## **4.3 Success Metrics**

| Metric | MVP Target | Measurement Method |
| :---- | :---- | :---- |
| Grounded-answer integrity | 0 findings surfaced without evidence\_grounded \= 1; 100% of failed refreshes render "checked, nothing new" | Pipeline logs \+ route-audit inspection in Setup |
| Monitored signals per active user | 3–6 confirmed signals within week 1 of onboarding | Monitored-signal store counts per profile |
| Alert usefulness | ≥ 80% of fired alerts acknowledged; zero alerts on ungrounded findings | impact\_alerts table (acknowledged flag) |
| Upgrade-path activation | Upgrade button renders correctly at 100% of plan-limit hits once Stripe data is live | Stripe integration events \+ in-app telemetry |

# **5\. Personas & Primary Use Cases**

| Field | Persona 1 |
| :---- | :---- |
| Name / Role | Alex — Senior Marketing Analyst, Central Analytics Team (validated via NVCG, a fictional CPG conglomerate; generalizes to any mid-market/enterprise brand-marketer analyst) |
| Responsibility | Explains movements in brand and category metrics to segment leadership; monitors external market conditions across the company's categories |
| Current pain | No systematic view of external trends; manual searches across scattered public sources with no citations; late detection of shifts, followed by hand-reconstruction of the story |
| Goal / definition of success | Research the questions she cares about, keep watch on the ones that matter, get warned when they move, and walk into any meeting with a cited, dated, exportable record |
| Technical sophistication | Medium — fluent in analytics tooling and category terminology; not a developer. UX must stay in plain language with a generic, utility-focused layout |

## **Primary Use Case Narrative**

**Ask \+ Probe.** Alex onboards her company (name \+ website → auto-researched profile draft → review and save; a three-step setup guide via the Open Discover / Suggest Topics interface). In Topics she sees \~6 AI-suggested questions and adds two of her own. She probes a packaging-cost topic; it returns strong grounded evidence and a high gate confidence. Another suggestion probes thin — one vague source, low gate confidence — and she skips it. The gate did its job: she is not about to monitor an empty topic.

**Confirm.** Alex confirms four topics worth watching — the explicit human control point. They are promoted to the monitored tier; the day's unconfirmed probe results evaporate. Her Dashboard now shows four signals, each with its first finding.

**Monitor.** Each morning the four signals re-research automatically (system-controlled). The packaging-cost signal holds steady at medium/neutral, but its finding confidence dips midweek — corroborating sources thinned from four to one. The timeline shows it honestly: the signal didn't change, the evidence for it did.

**Alert on movement.** A refresh crosses a threshold — high severity, direction flipped to risk. The system writes an alert; Alex reviews it (human control point), clicks through to the finding and its citations, and acknowledges it.

**Export.** Leadership asks for the picture. Alex scrubs the timeline to show when the risk turned, then exports her monitored set — PDF for the deck, HTML for the team, Markdown for the wiki. Point-in-time, cited, done.

# **6\. Scope & MVP Boundary**

## **6.1 MVP Scope — \[in\]**

* Stage 0 — Chat: full-endpoint playground chat; research-driven onboarding (company\_identify → async profile draft → review/edit/save); chat history as the resume surface.

* Stage 1 — Topics (the gate): AI-suggested (impact\_topics\_generate, \~6 per profile) and user-input candidates; exploratory probe returning a gate-confidence score; explicit user confirmation promoting candidates to the monitored tier.

* Stage 2 — Dashboard: monitored signals only; scheduled re-research (working cadence: daily) with per-refresh finding confidence, severity, and direction; append-only history with timeline scrubbing; anomaly alerts (severity jump, direction flip, confidence collapse) with acknowledge flow.

* Stage 3 — Reports: point-in-time snapshot export of the monitored set to HTML, PDF (timestamped), and Markdown — no new research.

* Commercial wrapper: generic utility-focused input layouts; three-step setup guide; dedicated Billing & Plan tab with clear cancellation path; plan-limit visibility backed by Stripe; in-app Upgrade button at plan limits; three feedback pathways (report an issue, general feedback, enterprise upsell link).

* Platform substrate: 177-connector curated catalog with per-source toggles, connectivity tests, run history, fleet health, and route-audit inspection in Setup; caching, dedupe, and per-source rate limiting; server-side-enforced admin vs. read-only app-user roles.

## **6.2 Out of Scope**

* Push-discovery — user-driven by design; the app never surfaces net-new topics (deliberate stance, see Backlog \#1).

* Generative media briefs — returns data the user can't specify and didn't ask to watch (see Backlog \#2).

* Scheduled Daily Report (in-app \+ email) — open design decision with Jed; the underlying data ships in the Dashboard and on-demand Reports either way. Deliberately flagged, not silently cut (see Backlog \#3 and Open Question Q2).

* Relevance feedback loop — planned, not descoped; not reached yet (see Backlog \#4).

* API-key governance (dedicated email per key, ToS-compliance ownership, audit trails) — planned, not descoped (see Backlog \#5).

* Internal company data / "data plane" — public sources only in v1 (see Backlog \#6).

* Topics UI revamp showing multiple research questions per category — shelved in the 7/16 dry run to protect launch (see Backlog \#7).

* Core-pipeline modification — router, plan/fetch/synthesize/judge loop, and grounding gate are consumed as-is; this PRD adds surfaces only.

## **6.3 MVP Definition of Done**

* The full pipeline runs end to end on the NVCG mock company — onboard → probe → confirm → monitor → alert → export — without engineering hand-holding.

* Grounding behavior verified: ungrounded responses emit the verbatim grounding-warning block with per-source failure breakdown and retry path; failed refreshes advance only last\_refreshed\_at.

* Both confidence scores render and behave distinctly: gate confidence once at probe; finding confidence on every refresh, visible in timeline playback.

# **7\. Functional Requirements**

## **7.1 Stage 0 — Chat, Onboarding & Resume**

**\[MVP\]** Chat has access to all app endpoints and functions (research runs, source queries, profile operations). Before market/factual research the agent reads the active profile, if any, and tailors query, source selection, and framing.

**\[MVP\]** Onboarding is research-driven: company name \+ website → company\_identify confirmation (web-search backed) → non-blocking background job (company\_profile\_research\_async) drafts the full structured profile → user reviews, edits, saves. Chat gap-fill covers undetermined fields.

**\[MVP\]** A profile is optional; without one, downstream surfaces degrade gracefully and AI topic suggestion is unavailable.

**\[MVP\]** Chat history is the resume surface — no separate resume zone is built.

**\[MVP\]** Initial input boxes use a generic, utility-focused layout (not category-specific), per the 7/16 dry-run decision; the Open Discover / Suggest Topics interface serves as the approved three-step setup guide.

## **7.2 Stage 1 — Topics: the Gate (Ask → Probe → Confirm)**

**\[MVP\]** Topics enter two ways — AI-suggested from the active profile (impact\_topics\_generate, \~6 decision-relevant researchable questions) and user-input. Both are ephemeral candidates; neither is monitored yet.

**\[MVP\]** The user can run exploratory research (probe) on any candidate through the existing pipeline. The probe returns a gate-confidence score answering one question: does real, grounded evidence exist on this topic — is it worth watching? Gate confidence is computed once and never re-litigated after confirmation.

**\[MVP\]** Probe results are ephemeral and disposable; if a topic is not confirmed, nothing is retained as monitored state.

**\[MVP\]** Explicit user confirmation promotes a candidate from the ephemeral tier to the monitored tier. Confirmation is required for every topic regardless of origin — AI-suggested topics do not bypass the gate.

## **7.3 Stage 2 — Dashboard: Monitored Signals (Monitor \+ Alert)**

**\[MVP\]** The Dashboard displays the confirmed/monitored set only — no ephemeral probe results, no discovery, no resume feed.

**\[MVP\]** Each monitored signal is a standing research query re-run on a schedule (working cadence: daily; plus manual refresh with progress polling via the shared impact\_core loop). Every refresh appends a finding to an append-only history.

**\[MVP\]** Every finding carries a finding-confidence score (source agreement, richness, recency) alongside judge grades of severity (high/medium/low) and direction (risk/opportunity/neutral). Finding confidence recurs on every refresh — distinct from the one-time gate confidence — so the timeline can distinguish a changed signal from thinned evidence.

**\[MVP\]** A refresh with insufficient grounded evidence produces an explicit "checked, nothing new" state: no finding row, never a stale or fabricated one; only last\_refreshed\_at advances.

**\[MVP\]** Timeline / historical playback: a scrubber spans each signal's history; setting an as-of date re-renders the signal's state (including finding confidence) under a "Viewing as of {date}" banner with reset-to-live. Client-side over the standard findings load; server-side date filter is the growth path (Backlog \#8).

**\[MVP\]** Anomaly alerts: on every refresh, the new finding is compared to the prior one; an alert is written on severity jump (low/medium → high), direction flip (non-risk → risk, or risk → opportunity), or confidence collapse. Detection runs only on grounded findings; alerts never introduce new topics.

**\[MVP\]** An open-alerts tile (warn tone when \> 0\) and an alerts card surface alerts on the Dashboard; alerts are acknowledgeable. 

## **7.4 Stage 3 — Reports: Export**

**\[MVP\]** Reports export the current monitored set as a point-in-time snapshot — a render of dashboard state with no new research run.

**\[MVP\]** Three output formats: HTML, PDF, and Markdown. PDF is a frozen snapshot stamped with a generated-at timestamp.

**\[MVP\]** Output is shareable — deck, teammate, wiki.

## **7.5 Billing, Plan Limits & Feedback (dry-run additions, 7/16)**

**\[MVP\]** Billing cycle and plan information live in a dedicated, first-class Billing & Plan tab, including a clear cancellation process.

**\[MVP\]** Plan limits (company profiles and other tracked metrics) display real values from Stripe once integrated; the "unlimited" placeholder is removed before launch.

**\[MVP\]** An Upgrade button appears automatically when a user reaches plan limits, detects the current plan, and routes to the upgrade path (Stripe pricing table).

**\[MVP\]** User behavior and feature-usage tracking is configured across the platform (Fisher \+ Jed) to power the success metrics in §4.3.

# **8\. Enterprise Readiness Considerations**

## **8.1 Security & Data Privacy**

**MVP or Backlog:** MVP (baseline) / Backlog (hardening) — server-side role enforcement and public-data-only scope ship in MVP; formal tenant-isolation documentation and data-subject-rights tooling go to Backlog \#9.

* Data classification: public-source research data (public); company profiles and monitored sets (customer-confidential).

* Encryption: platform-standard at rest and TLS in transit; no feature-specific deviation.

* Tenant isolation: multi-tenant with logical isolation via per-profile scoping; formal model documentation deferred (Backlog \#9).

* PII/PHI handling: minimal by design — no internal company data, no PHI; user account data only. Public sources only via the curated catalog.

* Data subject rights: export ships in MVP via Reports; deletion/right-to-be-forgotten workflow deferred (Backlog \#9).

## **8.2 Compliance & Certifications**

**MVP or Backlog:** Backlog — no design partner currently requires a certification to sign; source-license compliance is the one compliance bar enforced in MVP.

* Required certifications: SOC 2 Type II targeted post-launch (Backlog \#10); GDPR/CCPA posture inherited from platform account handling.

* Source licensing: four-tier source validation framework (Authoritative / Reputable / Usable-unverified / Exclude) applied across the catalog; core sources (FRED, OpenAlex, World Bank, US Census, US Treasury, Wikipedia, OpenStreetMap) cleared for commercial use; ICD-11 excluded (CC BY-ND adaptation restriction).

* Data residency: none required by current segment; revisit with first enterprise deal.

* Audit logging: run history and route-audit inspection ship in MVP (operator-facing); compliance-grade retention policy deferred (Backlog \#10).

## **8.3 Identity, Access & Permissions (RBAC / IAM)**

**MVP or Backlog:** MVP (two-role model) / Backlog (SSO/SCIM) — server-side-enforced roles are required for the admin/user split to be real; enterprise identity federation waits for enterprise-tier demand.

* Supported auth methods: standard platform auth in MVP; SSO/SAML, SCIM, MFA policies → Backlog \#11.

* Role model: admin (manages sources, Setup surface) and app user (read-only research: Chat, Topics, Dashboard, Reports, profiles, API Map). Enforced server-side.

* Permission granularity: org-level roles in MVP; workspace/object-level → Backlog \#11.

* Approval workflows: the confirmation gate is the product's human-in-the-loop control; no maker-checker workflow needed in MVP.

## **8.4 Scalability & Performance**

**MVP or Backlog:** MVP (cost containment) / Backlog (compute scaling) — caching and rate limiting must ship with the standing-query model or costs compound; parallel-compute capacity is a known, hardware-bound risk.

* Expected MVP scale: design-partner-scale usage; monitored sets of roughly 3–10 signals per profile; 177 connectors (\~115 keyless, 25 key-optional, 37 key-required). 

* Performance posture: sha256-keyed response and catalog caches plus a dedupe cache; formal p50/p95 latency targets not yet set (define during validation).

* Known scaling risks: research-run latency traces to hardware limits and the need for parallel compute, not application code (dry run, 7/16) — capacity plan → Backlog \#12. Per-signal re-research cost has no hard cap yet; confirmation friction is the interim limiter (Open Question Q7).

## **8.5 Reliability & Support Expectations**

**MVP or Backlog:** MVP (operational hygiene) / Backlog (formal SLAs) — scheduled maintenance jobs ship now; contractual uptime/support tiers wait for paying enterprise customers.

* Uptime expectation: best-effort at launch; no contractual SLA.

* Support response: in-app "report an issue" pathway routes to the team; informal handling at MVP; SLA tiers → Backlog \#13.

* Disaster recovery: no formal RTO/RPO yet → Backlog \#13; append-only findings history reduces corruption blast radius.

* Monitoring & alerting: scheduled hourly cache prune, daily registry resync, daily fleet smoke sweep, scheduled monitored-set refresh; fleet health surfaced in Setup.

## **8.6 Integrations & Interoperability**

**MVP or Backlog:** MVP (Stripe \+ source catalog) / Backlog (public API, email) — Stripe is launch-blocking for plan limits and upgrades; outbound email delivery is deferred pending the Daily Report decision.

* Required integrations: Stripe pricing table (setup owner to be settled between Fisher and Jessica — Open Question Q9); the 177-connector public-data catalog.

* API/webhook requirements: no public API in MVP → Backlog \#14.

* Data import/export formats: export to HTML, PDF, Markdown ships in MVP; no import beyond profile onboarding.

## **8.7 Observability, Admin Tooling & Support**

**MVP or Backlog:** MVP — the Setup surface already carries the operator toolkit and is required to run the fleet.

* Admin controls: per-source enable toggles, connectivity tests, run history, fleet health, and route-audit inspection all available with auth token from dev.

* Internal observability: run history plus route-audit inspection for debugging routing decisions; usage/behavior tracking to be configured with Jed (dry-run next step).

* Support runbook: not yet written → Backlog \#13.

## **8.8 Data Governance, Retention & Disaster Recovery**

**MVP or Backlog:** MVP (append-only history) / Backlog (retention policy & tested backups) — the append-only findings model is core product behavior; formal retention/backup policy is not launch-blocking for design-partner use.

* Retention policy: monitored-signal findings retained indefinitely in MVP (append-only, nullable confidence for legacy rows, invalid normalized to low); configurable retention → Backlog \#15.

* Backup cadence and testing: platform-default backups; no restore test on record → Backlog \#15.

* Data deletion on churn: process undefined → Backlog \#15 (pairs with 8.1 data-subject rights).

# **9\. Data Requirements**

| Data Asset | Source | Spec / Notes | Needed For |
| :---- | :---- | :---- | :---- |
| Structured company profile | company\_identify \+ company\_profile\_research\_async (web-search backed) | Multi-profile company\_profile table: name, website, industry, summary, structured profile\_json, status, is\_active; profile optional; chat gap-fill for undetermined fields | MVP |
| Topic candidates | impact\_topics\_generate (\~6 per profile) \+ user input | Held in the ephemeral tier; disposable unless confirmed | MVP |
| Probe results \+ gate confidence | Existing research pipeline (router → plan/fetch/synthesize/judge → grounding gate) | One exploratory run per candidate; gate-confidence score (worth-watching signal); not retained unless confirmed | MVP |
| Monitored signal store | User confirmation (promotion) | Confirmed signals as standing research queries; append-only findings history per signal | MVP |
| Finding grading | Per-refresh judge output | Severity \+ direction \+ finding confidence (source agreement, richness, recency); confidence column nullable for legacy rows, invalid normalized to low | MVP |
| Refresh job | Shared impact\_core loop | Scheduled re-research of the monitored set (working cadence daily) \+ manual refresh with progress polling | MVP |
| Anomaly alerts | impact\_alerts table | profile, signal, finding, alert\_type, message, acknowledged, created\_at; invoked on every refresh after a finding is written; rules: severity\_jump, direction\_flip, confidence\_collapse | MVP |
| Timeline playback | Append-only findings history | As-of scrubbing client-side over the standard findings load; server-side date filter is the growth path | MVP (filter: Backlog) |
| Snapshot exports | Dashboard state render | HTML, PDF (generated-at timestamp), Markdown; no new research | MVP |
| Curated source catalog | 177 connectors (\~96 keyless, 35 key-required, 4 paid) | Per-source toggles, connectivity tests, run history, fleet health, route-audit in Setup; four-tier license validation applied (ICD-11 excluded, ND clause) | MVP |
| NVCG mock company | Fictional fixture (Northfield & Vance Consumer Group, CPG) | End-to-end validation persona; fixtures should exercise edge cases (router boundaries, gate behavior, no-connectable-source), not just happy paths | MVP (test) |

# **10\. White Space Backlog**

| \# | Backlog Item | Source / Evidence | Why It Matters | Impact | Effort | Routing Decision | Owner | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Push-discovery ("tell me something I didn't know to ask") | Cut from v1 in pipeline PRD — deliberate user-driven stance | Net-new topic surfacing could expand engagement once trust in the user-driven core is proven | Med | L | Backlog — Later | Fisher / Jed | Triaged |
| 2 | Generative media briefs | Cut from v1 in pipeline PRD | Fresh cross-news research is off-model for user-driven v1; may fit a future analyst tier | Low | L | Declined | Fisher | Declined |
| 3 | Scheduled Daily Report (in-app \+ email) | Raised by Jed; flagged open in pipeline PRD §4.3 | Cuts manual morning work; pushes only confirmed-signal movement, consistent with alerts — not push-discovery | High | M | Needs More Discovery | Fisher / Jed | New |
| 4 | Relevance feedback loop (per-company trend-relevance flags tuning analysis) | Pipeline PRD — planned, not descoped | Compounds personalization of the monitored set | High | M | Backlog — Near-Term | Fisher | Triaged |
| 5 | API-key governance (dedicated email per key, ToS ownership, audit trails) | Pipeline PRD — planned, not descoped | Required to scale the key-required connector set responsibly | Med | M | Backlog — Near-Term | Fisher / Eng | Triaged |
| 6 | Internal data integration ("data plane") | Pipeline PRD — deferred roadmap phase | Blends internal metrics with external signals; major enterprise value | High | XL | Backlog — Later | Fisher / Jed | Triaged |
| 7 | Topics UI revamp — multiple research questions per category | Dry Run 7/16 — proposed by Fisher, shelved to protect launch | Richer topic exploration per category | Med | M | Backlog — Later | Fisher | Triaged |
| 8 | Server-side timeline date filter | Pipeline PRD — named growth path | Keeps playback fast as findings history grows | Med | S | Backlog — Later | Eng | New |
| 9 | Security hardening: tenant-isolation documentation, data-deletion / right-to-be-forgotten tooling | Section 8.1 deferral | Enterprise-sales prerequisite | Med | M | Backlog — Near-Term | Eng | New |
| 10 | SOC 2 Type II \+ compliance-grade audit-log retention | Section 8.2 deferral | Unblocks enterprise-tier deals | High | L | Backlog — Later | Eng / Legal | New |
| 11 | SSO/SAML, SCIM, MFA; finer-grained permissions | Section 8.3 deferral | Enterprise identity requirement | Med | L | Backlog — Later | Eng | New |
| 12 | Support runbook, SLA tiers, DR (RTO/RPO) targets | Sections 8.5/8.7 deferrals | Required before contractual commitments | Med | M | Backlog — Later | Eng | New |
| 13 | Retention policy, tested backups, churn data-deletion process | Section 8.8 deferral | Governance hygiene for customer data | Med | M | Backlog — Later | Eng | New |

# **11\. Stakeholders, RACI & Account Context (optional)**

*N/A — platform-wide PRD with no single-account driver. The NVCG persona in §5 is a fictional validation fixture, not a customer account. Header retained per template rule so reviewers know this was considered, not missed.*

# **12\. Risks, Assumptions & Open Questions**

## **12.1 Assumptions**

* Confirmation friction self-limits the monitored set to a sustainable size. If wrong, standing re-research costs compound — a per-signal cost ceiling becomes urgent (Q7).

* Daily refresh cadence is fresh enough for the target analyst. If wrong, per-plan/per-signal cadence configuration moves up the roadmap (Q5).

## **12.2 Risks**

| Risk | Likelihood | Impact | Mitigation | Owner |
| :---- | :---- | :---- | :---- | :---- |
| Standing re-research costs grow unbounded with monitored-set size | M | M | Confirmation friction \+ caching/rate limits now; decide cost ceiling (Q7) | Fisher / Eng |

## 

## **12.3 Open Questions**

| Question | Owner / Note | Needed By |
| :---- | :---- | :---- |
| Q1 — Scheduled Daily Report: add a compiled daily export (in-app \+ optional email) on top of on-demand Reports? | Fisher / Jed — flagged, not silently cut; Backlog \#3 | Before build of any report scheduler |
| Q2 — Gate-confidence definition: is "grounded evidence exists, worth watching" the right read for the probe stage? | Fisher / Jed — computed once at the gate | Design sign-off |
| Q3 — Finding-confidence definition: is "source agreement \+ richness \+ recency, per refresh" right? | Fisher / Jed — the honest-timeline guarantee; must recur | Design sign-off |
| Q4 — Refresh cadence: daily, or \~4h (global or per-plan/per-signal configurable)? | Fisher / Eng — working design: daily \+ manual refresh | Build start |
| Q5 — Anomaly thresholds: are severity jump, direction flip, confidence collapse the right starting rules? | Fisher / Jed — working set; easy to extend once validated | Validation window |
| Q6 — Per-signal cost ceiling: cap the monitored set, or let confirmation friction self-limit? | Fisher / Eng — each signal is a standing re-research cost | Before GA pricing lock |
| Q7 — Confirmation gesture: exact interaction and how effortful? Light enough to validate, heavy enough not to over-validate | Fisher / Design | Design sign-off |
| Q8 — Category definition: is "industry, LLM-inferred from profile, user-correctable" acceptable? | Fisher / Jed — working answer | Validation window |
| Q10 — Push-discovery: permanently out, or a fast-follow once the user-driven core proves out? | Fisher / Jed — cut on purpose; Backlog \#1 | Next planning cycle |

# **13\. Timeline & Milestones**

| Milestone | Target Date |
| :---- | :---- |
| Mock-company validation (NVCG): onboard → probe → confirm → monitor → alert → export | Started Monday 2026-07-06 (in progress) |
| Design review session | Completed Wednesday 2026-07-08 |
| Category Intelligence dry run — launch decisions (UI, billing, upgrade, feedback) | Completed Thursday 2026-07-16 |
| Billing & Plan tab relocated to dedicated tab | Week of 2026-07-16 (immediate) |
| PRD review & sign-off (Jed gut-check on Q1–Q4, then circulate to Kaan, Vivek, Jessica) | Before wide circulation |
| MVP live with first real user(s) | Post pricing meeting \+ Stripe integration |
| White Space Backlog review — recurring | Each planning cycle |

# **14\. Appendix & Change Log**

**Supporting documents:** pipeline-spine PRD (v4 source draft); Research Hub data-flow diagram (question → answer: React frontend → backend endpoint → router → per-source plan/fetch/synthesize/judge → merge \+ grounding gate → grounded answer \+ citations); pricing tiers document (Silver / Gold / Enterprise, priced on pipeline choke points); source validation framework (four-tier); Category Intelligence Dry Run meeting notes, 2026-07-16.

| Date | Version | Change | Author |
| :---- | :---- | :---- | :---- |
| 2026-07-16 | v0.1 | Initial draft — pipeline PRD content restructured into Kana PRD Framework v1.1; dry-run decisions (generic UI layout, three-step setup guide, billing tab, upgrade button, feedback pathways) folded into MVP scope; Backlog and Open Questions consolidated | Fisher Fraley |

