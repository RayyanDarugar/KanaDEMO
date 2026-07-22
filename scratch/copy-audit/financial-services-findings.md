# Financial Services Config — Copy Accuracy Audit

**Summary:** 28 distinct capability claims checked against the four PRDs. 11 clean (ACCURATE / VAGUE-BUT-FINE — stats citing external research, pain-point problem statements, the AI-governance FAQ, and the Personalization roadmap FAQ). 17 flagged as OVERCLAIM. All 17 trace back to three root mismatches, each repeated across multiple sections of the page:

1. **Marketing Intelligence** is described throughout as a compliance/content-approval product (pre-approved content libraries, pre-review risk flagging, reviewer/timestamp/version audit trails). The MI PRD describes a conversational analytics/narrative/insight product (NL Q&A on campaign performance, QBR-grade narratives, suggested actions) and explicitly lists "Compliance & Certifications" as **Backlog**, with "compliance-aware content flags" named as a future item, not MVP.
2. **Audience Builder** is described as running "AI-driven propensity models" for cross-sell. The AB PRD's own White Space Backlog lists propensity/lookalike models as **"Synthetic only today"** and Out of Scope for MVP; the PRD's actual MVP is self-serve deterministic segment building against CRM/loyalty/POS data.
3. **Agentic Data Platform** is described as pushing digital intent signals live into the branch CRM, and as itself being what the banker "opens." The ADP PRD explicitly states ADP is **"Not an end-user marketing app... admin/steward surfaces only"** — suite apps consume it, not branch staff directly — and lists MAP/CRM write-back activation connectors as **Backlog #2**, not MVP.

Given how pervasive these three patterns are, this may be worth a product-mapping conversation with Rayyan rather than just a copy fix — the page may have been drafted against a different (possibly aspirational or differently-scoped) version of these three products. The suggested fixes below are the most faithful copy-level patch given the current PRDs.

---

## hero.subheadline
**Current copy:** "Kana gives you compliance-ready content velocity, propensity-driven cross-sell, and a bridge from digital intent to the branch."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §8 — "Compliance & Certifications | Backlog"; AB PRD §10 Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today"; ADP PRD §4.2 — "Not an end-user marketing app. ADP has admin/steward surfaces only."
**Suggested fix:** "Kana gives you faster answers on campaign performance, self-serve cross-sell audiences, and one connected view of the customer across digital and branch."
**Why:** Compresses the three product-specific overclaims below into one line; the replacement states only MVP-supported outcomes.

## solutionRows[0] — Marketing Intelligence
**Current copy:** Title: "Cut the compliance cycle without cutting the compliance" / Description: "Marketing Intelligence manages pre-approved content libraries and flags compliance risks before creative goes to review — cutting cycle times dramatically. Submissions arrive cleaner, revision loops shrink, and every approval carries its audit trail: reviewer, timestamp, version. Principal sign-off stays exactly where regulators require it; the three-week queue in front of it doesn't."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §4.2 Non-Goals — "Not a BI or dashboard-builder product... Not the execution layer... Not a data platform"; §8 — "Compliance & Certifications | Backlog | FinServ/Healthcare verticals need compliance-aware content flags later (MP-06)". Nothing in Goals/Functional Requirements mentions content libraries, pre-review risk flagging, or reviewer/timestamp/version audit trails — MI's actual scope is NL Q&A, narratives, and suggestion queues (§4.1, §7).
**Suggested fix:** Title: "Turn campaign performance into answers your team can act on" / Description: "Marketing Intelligence lets marketing ops ask plain-language questions about campaign performance and get grounded answers in seconds, plus weekly narratives your team reviews and approves before they go out. Every suggested action comes with the evidence behind it, and nothing ships without a human sign-off — insight-to-action drops from weeks to hours."
**Why:** Replaces the unsupported compliance-content-library premise with MI's actual capabilities (NL Q&A, human-reviewed narratives, evidence-linked suggestions, weeks-to-hours cycle) per PRD §1 and §4.1.

## solutionRows[1] — Audience Builder
**Current copy:** Title: "Cross-sell on propensity, not on rules" / Description: "Audience Builder applies AI-driven propensity models to identify the right customer, product, channel, and moment for every cross-sell opportunity — replacing the simple behavioral rules most programs still fire on. A customer's third product keeps them nearly seven years instead of eighteen months, and the model that finds that customer no longer waits on a data-science backlog."
**Verdict:** OVERCLAIM
**PRD citation:** AB PRD §6.2 Out of Scope — "Propensity/lookalike models on real data (see White Space Backlog)"; §10 Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today." Actual MVP goal (§4.1): "Marketer self-serve: brief → sized audience in minutes against CRM/loyalty/POS data."
**Suggested fix:** Title: "Cross-sell audiences in minutes, not sprints" / Description: "Audience Builder lets your team build precise cross-sell segments — the right customers, filtered by product ownership, behavior, and recency — directly against your CRM, loyalty, and transaction data, with no data-science queue in between. A customer's third product keeps them nearly seven years instead of eighteen months; Audience Builder gets you to that segment the same day you think of it."
**Why:** Keeps the "no data-science backlog" claim, which the PRD does support (§4.3 — "Data-team tickets for segments: 0"), while dropping the propensity-model claim the PRD marks synthetic-only/backlog.

## solutionRows[2] — Agentic Data Platform
**Current copy:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. When a customer researches mortgages in the app and books a branch appointment, the relationship banker opens a record that knows it — not a static lead list from last week's export."
**Verdict:** OVERCLAIM
**PRD citation:** ADP PRD §4.2 Non-Goals — "Not an end-user marketing app. ADP has admin/steward surfaces only (connections, mappings, identity review, policies). Campaigns, audiences-as-product, and decisions live in the suite apps that consume it." §10 Backlog #2 — "Live activation connectors (LinkedIn, TTD, Meta, DSPs, MAP write-back) ... Backlog — Near-Term."
**Suggested fix:** Title: "The mortgage they researched Tuesday reaches the banker by Wednesday" / Description: "The Agentic Data Platform connects your digital channels and CRM into one governed customer view, so the apps your teams already use can surface what a customer has been exploring — instead of relationship bankers working from a lead list that's already out of date."
**Why:** Attributes the banker-facing experience to the suite apps ADP feeds, not to ADP itself, and drops the live CRM write-back claim that the PRD lists as Backlog.

## solutionRows[3] — Personalization
**Current copy:** Title: "Offers triggered by the moment, not the quarter" / Description: "Personalization monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent. The customer who just changed employers or made a large transfer gets a tailored offer within hours — instead of surfacing on the next quarterly campaign list after the moment has passed. Coming soon to the Kana platform."
**Verdict:** OVERCLAIM
**PRD citation:** Personalization PRD §6.2 Out of Scope — "Always-on journey anomaly detection / event triggers — see White Space Backlog"; §10 Backlog #2 — "Always-on anomaly detection + event triggers | Page #3; batch-only today." The actual engine (§5 Primary Use Case) "precomputes six decisions per known customer" — a batch process, not a real-time trigger.
**Suggested fix:** Title: "Offers built around the customer, not the calendar" / Description: "Personalization scores every customer's next-best offer — channel, content, timing, frequency — from their real behavior and account activity, with a plain-language reason behind each one. The customer who just changed employers or made a large transfer gets matched to a relevant offer on the next cycle, not the next quarterly campaign list. Coming soon to the Kana platform."
**Why:** Preserves the "faster than quarterly" contrast the PRD does support while dropping the "precise moment... within hours" real-time-trigger claim the PRD marks batch-only/backlog.

## faq[0] — "How does Kana fit into our compliance review process?"
**Current copy:** "It works ahead of it, not around it. Marketing Intelligence maintains pre-approved content libraries and flags compliance risks before creative reaches your reviewers, so submissions arrive cleaner and revision cycles shrink. Principal sign-off and your existing approval authority stay exactly as they are — with a complete audit trail (reviewer, timestamp, version) on every asset."
**Verdict:** OVERCLAIM
**PRD citation:** MI PRD §8 — "Compliance & Certifications | Backlog | FinServ/Healthcare verticals need compliance-aware content flags later (MP-06)." No content-library or pre-review risk-flagging feature appears anywhere in MI's Functional Requirements (§7).
**Suggested fix:** "Marketing Intelligence doesn't sit inside your compliance workflow today — it sits upstream, giving marketing ops plain-language answers on campaign performance and narratives that go through your team's review and approval before anyone sees them. Compliance-aware content flagging for regulated content is on our roadmap — book a demo to see it."
**Why:** Answers the question honestly given MI's Backlog status on compliance-aware content, instead of implying a shipped compliance-review feature.

## personas[0] — Director of Lifecycle & CRM Marketing → solution.description
**Current copy:** "Monitors behavioral and transactional signals to trigger contextually relevant product offers at the precise moment of highest intent — hours after the life event, not months. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[3] — Personalization PRD §10 Backlog #2, "batch-only today."
**Suggested fix:** "Scores every customer's next-best offer — content, timing, channel — from behavioral and transactional signals, with a reason behind every decision. Life-event-driven offers reach the customer on the next cycle, not months later on the next quarterly list. Built on the Audience Builder and Agentic Data Platform foundation, so current deployments activate it the moment it ships."
**Why:** Same fix pattern as solutionRows[3]: drop the real-time "hours" trigger claim, keep the accurate faster-than-quarterly framing.

## personas[1] — Marketing Operations Manager → solution.description
**Current copy:** "Pre-approved content libraries and pre-review risk flagging cut cycle times dramatically, while every approval carries its audit trail automatically — reviewer, timestamp, version. The compliance desk gets cleaner submissions; marketing gets its calendar back."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0]/faq[0] — MI PRD §8, Compliance & Certifications is Backlog; no content-library feature in §7.
**Suggested fix:** "Plain-language answers on campaign performance and narratives that go through your team's review before distribution — no export-and-reconcile cycle. Marketing Ops gets decision-grade reporting in seconds instead of days; compliance-aware content flagging is on our roadmap."
**Why:** Same root issue as solutionRows[0]; fix substitutes MI's real analytics/narrative capabilities for the unsupported compliance-content claim.

## personas[2] — Director of Marketing Analytics → solution.description
**Current copy:** "AI-driven propensity models identify the right customer, product, channel, and moment for every cross-sell opportunity — operationalized without a modeling backlog, and traceable from model to campaign to origination."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1, propensity/lookalike models "Synthetic only today."
**Suggested fix:** "Precise, self-serve cross-sell segments — built directly against CRM, loyalty, and transaction data in minutes, with no data-science queue in between, and traceable from segment to activated campaign."
**Why:** Same fix pattern as solutionRows[1]: drop the propensity-model claim, keep the (PRD-supported) no-backlog and traceability framing.

## personas[3] — Head of Retail Network → solution.description
**Current copy:** "Bridges digital intent signals and branch CRM systems, giving customer-facing teams the context to have more relevant conversations. The banker opens the appointment already knowing what the customer has been exploring."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §4.2 ("admin/steward surfaces only") and §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** "Connects digital channels and CRM into one governed customer view, so the apps your relationship bankers already use can surface what a customer has been exploring — not a static lead list from last week's export."
**Why:** Attributes the banker-facing outcome to the consuming apps rather than to ADP directly, consistent with the PRD's admin-only scope for ADP itself.

## personas[4] — CMO / Head of Retail Marketing → solution.description
**Current copy:** "The platform anchor: compliance-ready velocity, governed AI with human oversight, and marketing performance connected to origination — the story that closes the gap between the data the institution holds and the experiences it ships."
**Verdict:** OVERCLAIM
**PRD citation:** "Compliance-ready velocity" — same MI Backlog citation as above. "Marketing performance connected to origination" — MI PRD §10 Backlog #3: "Downstream impact / multi-touch attribution... pluggable attribution engine EXISTS in Kana-CDP — adapt, don't build" (i.e., not yet in MI itself; "origination" as a linked outcome isn't named in any Data Requirements table).
**Suggested fix:** "The platform anchor: faster answers on campaign performance, governed AI with human oversight on every decision, and a growing view of marketing's contribution to the business — the story that closes the gap between the data the institution holds and the experiences it ships."
**Why:** Keeps the governed-AI claim (well-supported across ADP/MI/Personalization human-approval loops) while softening the two unsupported specifics.

## showcase.columns[0] — "Ship in days what used to take weeks"
**Current copy:** "Pre-approved content libraries and pre-review risk flagging compress the compliance cycle — with the audit trail regulators expect built into every approval."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0] — MI PRD §8, Compliance & Certifications is Backlog.
**Suggested fix:** Title: "Get answers in seconds, not days" / Description: "Plain-language questions over your campaign data get grounded answers in seconds, with narratives your team reviews and approves before anyone else sees them."
**Why:** Same fix pattern as solutionRows[0].

## showcase.columns[1] — "Find the third product before the rules do"
**Current copy:** "Propensity models score every customer for the right product, channel, and moment — replacing rule-based triggers with predictions that compound tenure and deposits."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1.
**Suggested fix:** Title: "Find the third-product customer in minutes, not sprints" / Description: "Build precise cross-sell segments directly against CRM, loyalty, and transaction data — no data-science queue — for the audiences that compound tenure and deposits."
**Why:** Same fix pattern as solutionRows[1].

## showcase.columns[2] — "Walk the digital signal into the branch"
**Current copy:** "Digital intent flows into the banker's CRM before the appointment, so the branch conversation starts where the customer's research left off."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** Title: "Give the branch what the app already knows" / Description: "Digital and CRM data connect into one governed customer view, so the tools your branch teams use can start the conversation where the customer's research left off."
**Why:** Same fix pattern as solutionRows[2] — outcome delivered via consuming apps/tools, not a live CRM write-back from ADP.

## stackShowcase.columns[0] — "Compress the review cycle without touching the controls"
**Current copy:** "Marketing Intelligence — pre-approved libraries and risk pre-flagging sit in front of your existing approval workflow. Principals keep sign-off; audit trails write themselves; the 5–15 day queue shrinks to the review that actually matters."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[0] — MI PRD §8, Compliance & Certifications is Backlog.
**Suggested fix:** Title: "Get decision-grade answers without waiting on a data team" / Description: "Marketing Intelligence — plain-language questions over your campaign data, answered in seconds, with narratives and suggested actions that go through your team's review before they ship."
**Why:** Same fix pattern as solutionRows[0].

## stackShowcase.columns[1] — "Run propensity models without a modeling backlog"
**Current copy:** "Audience Builder — AI-driven propensity scoring on the customer data you already hold, governed with human oversight and documented logic that stands up to model-risk review."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[1] — AB PRD §10 Backlog #1.
**Suggested fix:** Title: "Build cross-sell segments without a modeling backlog" / Description: "Audience Builder — self-serve segmentation on the CRM, loyalty, and transaction data you already hold, with governance and documentation that stand up to model-risk review."
**Why:** Same fix pattern as solutionRows[1]; keeps the model-risk-review governance claim, which is broadly supported by ADP's policy/audit layer that AB sits on.

## stackShowcase.columns[2] — "Give every banker the context the app already has"
**Current copy:** "Agentic Data Platform — digital intent signals flow into the branch CRM your relationship bankers already use. One customer, one story, on both sides of the counter."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutionRows[2] — ADP PRD §10 Backlog #2 (MAP/CRM write-back is Backlog).
**Suggested fix:** Description: "Agentic Data Platform — digital and CRM data connect into one governed customer view your relationship bankers' tools can draw on. One customer, one story, on both sides of the counter."
**Why:** Drops the live CRM write-back claim while keeping the title and the "one customer, one story" framing intact.
