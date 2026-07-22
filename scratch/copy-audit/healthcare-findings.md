# Healthcare config.js — Capability Claims Audit

Checked ~19 distinct capability claims across solutionRows, personas, showcase, stackShowcase, and FAQ. 10 were clean (ACCURATE or VAGUE-BUT-FINE, no action needed). 9 are flagged below: 8 OVERCLAIM, 1 UNVERIFIABLE-FLAGGED.

Two recurring problems account for all 8 overclaims:
1. **Audience Builder is credited with clinical/care-gap segmentation** (overdue screenings, elevated risk profiles, HEDIS-measure-level targeting, "refreshed continuously"). The Audience Builder PRD's MVP data sources are CRM + loyalty + POS only; vertical HIPAA guardrail packs are explicitly Backlog (#5), Compliance & Certifications is listed as "Backlog," and real-time sync is explicitly out of scope (Backlog #2). Nothing in the PRD supports clinical care-gap data or continuous refresh as a shipped capability.
2. **Campaign Orchestrator is credited with audience segmentation and per-cohort message personalization for enrollment.** The CO (Marketers) PRD is unambiguous that CO does in-flight cross-channel spend optimization (MMM/marginal-ROAS reallocation, drift/integrity alerts, treated-vs-control testing) — not audience segmentation or messaging personalization, which are explicitly Audience Builder's and Personalization's jobs (CO Non-Goals: "Not the planning tool," recommend/monitor only, no messaging content role at all).

---

## solutions[0] — Audience Builder
**Current copy:** "Audience Builder enables care-gap–aware segmentation, allowing marketers to precisely target the right members for the right intervention at the right time. The annual wellness campaign stops going to everyone equally and starts reaching the members with overdue screenings and elevated risk profiles — where a completed visit closes 5.5x more gaps and moves the Stars measures your bonus revenue rides on."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — MVP data sources are "CRM + loyalty + POS (warehouse-resident)" (§9); Enterprise Readiness lists "Compliance & Certifications | Backlog | HIPAA/FinServ segment guardrails later (policy-layer per Architecture doc)" (§8); White Space Backlog #5 "Vertical guardrail packs (HIPAA, ECOA)... TBD."
**Suggested fix:** "Audience Builder enables precise, quality-priority segmentation, allowing marketers to target the right members for the right intervention at the right time. The annual wellness campaign stops going to everyone equally and starts reaching the members who matter most to your Stars measures — where a completed visit closes 5.5x more gaps and moves the bonus revenue that rides on them."
**Why:** The PRD's marketer data wiring is CRM/loyalty/POS, and HIPAA-scoped clinical segmentation (care gaps, risk profiles) is explicit Backlog, not a shipped capability.

## solutions[1] — Campaign Orchestrator
**Current copy:** "The Campaign Orchestrator orchestrates enrollment season campaigns at scale — dynamically segmenting audiences by plan eligibility and personalizing messaging for each cohort. The 54-day sprint across millions of members and dozens of plan options stops depending on manual content and audience management, in a market where 13 million members switched plans last cycle."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Non-Goals: "Not the planning tool... CO operates strictly in-flight" and "Not a DSP or buying platform. CO recommends and monitors." MVP scope (§6.1) is limited to "Adopt OmniMP MMM engine... Integrity/drift scoring... Reallocation recommendation cards... Test loop... Conversational explanations over campaign/spend data" — no audience segmentation or message-personalization function anywhere in the document.
**Suggested fix:** "The Campaign Orchestrator keeps enrollment season spend on track at scale — catching performance drift mid-flight and reallocating budget before it's wasted. The 54-day sprint across millions of members and dozens of plan options stops running on gut-feel and weekly reports, in a market where 13 million members switched plans last cycle."
**Why:** CO's actual job per the PRD is in-flight spend reallocation and drift detection, not audience segmentation or messaging personalization — those belong to Audience Builder and Personalization.

## personas[0].solution — Audience Builder (Medicare Stars / Quality Director)
**Current copy:** "Care-gap–aware segmentation targets the right members for the right intervention at the right time — overdue screenings, elevated risk profiles, and adherence gaps each get their own precisely aimed outreach instead of a share of the annual blast."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same citation as solutions[0]: MVP data sources are CRM/loyalty/POS; HIPAA vertical guardrails are Backlog #5, not MVP.
**Suggested fix:** "Precise, quality-priority segmentation targets the right members for the right intervention at the right time — the members who matter most to each Stars measure get their own aimed outreach instead of a share of the annual blast."
**Why:** Same clinical-data/compliance-readiness gap as solutions[0] — this is the same claim repeated in the persona table.

## personas[1].solution — Campaign Orchestrator (Enrollment Marketing Director)
**Current copy:** "Orchestrates enrollment season at scale: audiences dynamically segmented by plan eligibility, messaging personalized per cohort, and the 54-day sprint run on automation instead of overtime."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1]: CO's MVP scope is spend reallocation, drift alerts, and testing; it does not segment audiences or personalize messaging.
**Suggested fix:** "Orchestrates enrollment season at scale: performance tracked across channels, drift caught before it wastes budget, and the 54-day sprint run on continuous optimization instead of overtime."
**Why:** Same product-capability mismatch as solutions[1] — this is the same claim repeated in the persona table.

## showcase.columns[0] — Audience Builder
**Current copy:** "Care-gap–aware segments aim every intervention at the members who need it — overdue screenings, elevated risk, adherence lapses — and the Stars measures move with them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same citation as solutions[0].
**Suggested fix:** "Quality-priority segments aim every intervention at the members who need it most, and the Stars measures move with them."
**Why:** Same clinical-data/compliance-readiness gap as solutions[0], repeated in the interactive showcase.

## showcase.columns[1] — Campaign Orchestrator
**Current copy:** "Audiences segmented dynamically by plan eligibility, messaging personalized per cohort, and millions of member touchpoints orchestrated through the AEP window."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1].
**Suggested fix:** "Spend tracked and reallocated dynamically across channels, drift flagged before it wastes budget, and millions of member touchpoints kept on course through the AEP window."
**Why:** Same product-capability mismatch as solutions[1], repeated in the interactive showcase.

## stackShowcase.columns[0] — Audience Builder
**Current copy:** "Audience Builder — the extracts your quality team already produces become precise, care-gap–aware segments, refreshed continuously instead of hand-built per measure."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — clinical/care-gap segmentation issue as above, plus White Space Backlog #2 "Real-time loyalty data sync... TBD" — continuous refresh is explicitly not built; MVP is "Everything in the shared-core MVP," which has no live/streaming refresh path.
**Suggested fix:** "Audience Builder — the extracts your quality team already produces become precise, quality-priority segments, built once and reused instead of hand-built per measure."
**Why:** Compounds two unsupported claims: clinical care-gap targeting and continuous (real-time) refresh, the latter explicitly Backlog per the PRD.

## stackShowcase.columns[1] — Campaign Orchestrator
**Current copy:** "Campaign Orchestrator — plan-eligibility segmentation and per-cohort messaging run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — same citation as solutions[1].
**Suggested fix:** "Campaign Orchestrator — spend reallocation and drift detection run dynamically through enrollment season, so the annual sprint stops consuming the whole marketing org."
**Why:** Same product-capability mismatch as solutions[1], repeated in the stack showcase.

## faq[1] — "How does Kana connect to our healthcare stack?"
**Current copy:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, typically going live in 2–4 weeks."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md — Success Metrics (§4.3): "Time from connection to first usable canonical objects | Days, not months (JIT claim — set exact target with first partner) | Onboarding instrumentation." No partner-validated number exists yet; the PRD explicitly flags the exact target as unset.
**Suggested fix:** "Via API. Kana sits on top of Salesforce Health Cloud, your member engagement platforms, and your existing data infrastructure — no rip-and-replace, no migration. Kana's solutions team handles setup and works with your privacy and compliance teams throughout, with most teams live in weeks, not months."
**Why:** "2–4 weeks" is a specific, checkable commitment the PRD hasn't validated with a partner yet; "weeks, not months" keeps the same reassurance without a number the team can't yet stand behind.

---

## Clean (no action) — for reference
- solutions[2] / persona[2].solution / showcase.columns[2] / stackShowcase.columns[2] — Agentic Data Platform HIPAA/governance claims (governed access, audit trail, policy enforcement, human oversight) are all directly supported by ADP PRD §6.1 MVP scope and §7.5–7.6. "Architected for" is appropriately hedged given Compliance & Certifications is listed as "MVP (partial)."
- solutions[3] / persona[3].solution — Personalization (Coming Soon): reminder frequency/channel/messaging tailoring is a reasonable extrapolation of the NBA engine's channel/time/day/frequency decisioning (Personalization PRD §4.1, §7.1) into a not-yet-shipped healthcare use case; "Coming soon" already manages the expectation.
- persona[4].solution (CMO) — vague/aspirational governance framing, no specific unsupported capability claim.
- faq[0] (HIPAA/PHI) and faq[2] (Personalization availability) — both directly supported by ADP and Personalization PRDs.
- stackShowcase.subtitle — "governance, audit logs, and human oversight built in" matches ADP §6.1/§7.5–7.6; "no rip-and-replace" matches the zero-copy non-goal.
