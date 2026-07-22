# Travel & Hospitality — Copy Accuracy Audit

Checked ~26 capability-bearing claims across the hero, all 4 solution rows, 3 showcase columns, the stack-showcase subtitle + 3 columns, all 5 persona solution blocks, and all 4 FAQ answers. 21 flagged (19 OVERCLAIM, 2 UNVERIFIABLE-FLAGGED). Clean/left-untouched: the FAQ's core "via API, no rip-and-replace" integration claim, the pain points (per instructions, not capability claims), and the stats bar (third-party benchmarks, not Kana capability claims).

Three systemic issues account for nearly all of the flags:

1. **Personalization is repeatedly described as "real-time."** The PRD's own use-case narrative says the engine "precomputes six decisions per known customer" (a batch/scheduled model), and the White Space Backlog lists "Always-on anomaly detection + event triggers ... batch-only today" as a not-yet-built item. The config uses "real time" or "in the moment" for Personalization in 6 separate locations.

2. **Audience Builder and Campaign Orchestrator are repeatedly credited with deciding *when* to reach a guest** ("identify re-engagement windows," "trigger outreach at the optimal moment"). Per the Personalization PRD, timing is explicitly one of Personalization's six decisions — "channel..., content, offer..., time, day, frequency" (§7.1) — and per the Audience Builder PRD, propensity/timing modeling on real customer data is a White Space Backlog item ("Propensity / lookalike models on real data ... Synthetic only today"). Campaign Orchestrator's actual PRD scope is cross-channel ad-spend reallocation, drift detection, and a testing loop (MMM/marginal-ROAS engine) — not guest-level lifecycle-message timing. This is the most consequential finding in the audit: the page's central "booking window" narrative is built on a product-responsibility model the PRDs don't support.

3. **Category Intelligence is repeatedly described as "continuous" and credited with generating "recommended messaging and audience responses."** The PRD's Dashboard stage runs on a "working cadence: daily" schedule, not continuously, and nothing in the functional requirements produces marketing message or audience recommendations — CI's outputs are cited findings, severity/direction grading, and alerts.

---

## hero.subheadline
**Current copy:** "Yield management systems optimize price by the hour, and travel marketing can finally keep pace. Kana gives your team real-time competitive rate alerts, loyalty offers tuned to each member in the moment, and guest outreach timed to when someone's actually ready to book again."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "Each monitored signal is a standing research query re-run on a schedule (working cadence: daily; plus manual refresh...)"; Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "Always-on anomaly detection + event triggers | Page #3; batch-only today."
**Suggested fix:** "Yield management systems optimize price by the hour, and travel marketing can finally keep pace. Kana gives your team daily competitive rate alerts, loyalty offers calibrated to each member's tier, and guest outreach timed to when they're actually ready to book again."
**Why:** "Real-time" rate alerts overstate CI's daily monitoring cadence, and "in the moment" overstates Personalization's precomputed/batch decisioning; the "timed to when someone's ready to book" claim itself is fine since it doesn't name a product and timing is a real Personalization capability.

## solutionRows[0] — Personalization
**Current copy:** title: "Real-time offers for members who earned better than batch" / description: "Personalization monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative: "The engine precomputes six decisions per known customer"; Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent"; White Space Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** title: "Offers calibrated to members who earned better than batch" / description: "Personalization reads loyalty member activity signals and recommends the next offer for each member — channel, content, and timing — for your team to review and send across email, app, and web. Your highest-value members stop receiving the same promotional email as new subscribers, and loyalty spend starts producing the incremental revenue the program was built for."
**Why:** "Triggers... in real time" implies live, autonomous, event-driven sends; the PRD describes a precomputed/batch decision engine with a mandatory human approval gate before anything reaches a customer.

## solutionRows[1] — Category Intelligence
**Current copy:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses. When a competitor drops rates on a key route or destination, marketing gets the alert with a suggested play, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "scheduled re-research (working cadence: daily)"; §7.3 alerts spec — alerts fire on "severity jump," "direction flip," or "confidence collapse" and link to "the finding and its citations" — no functional requirement produces messaging or audience recommendations; Non-Goals — "Generative media briefs — unsteerable fresh research... is off-model for a user-driven product."
**Suggested fix:** title: "Know the competitor's rate move before sales does" / description: "Category Intelligence runs a daily watch on competitive pricing signals and alerts you the moment something worth acting on shifts, with the cited evidence behind it. When a competitor drops rates on a key route or destination, marketing gets the alert and the sourced findings, not a secondhand report days later. Your rate shopper watches prices for the revenue team; this watches them for marketers."
**Why:** "Continuously" overstates the daily refresh cadence, and CI doesn't generate "recommended messaging" or "audience responses" — its output is a grounded, cited finding and an alert, not a marketing recommendation.

## solutionRows[2] — Audience Builder
**Current copy:** title: "Re-engage on the guest's booking window, not the calendar" / description: "Audience Builder works together with the Campaign Orchestrator to identify re-engagement windows based on behavioral signals and support personalized outreach. Win-back and anniversary campaigns stop firing on fixed schedules and start landing when a guest's next booking window is actually opening, informed by travel intent signals and membership tier dynamics."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Out of Scope: "Propensity/lookalike models on real data (see White Space Backlog)"; White Space Backlog #1: "Propensity / lookalike models on real data | Synthetic only today"; Non-Goals: "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator." Timing decisions belong to Personalization per Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1: "Precompute per-customer decisions (channel..., content, offer..., time, day, frequency)."
**Suggested fix:** title: "Build the guest list that's actually worth re-engaging" / description: "Audience Builder builds precise, suppressed guest segments — lapsed loyalty members, recent cancellations, high-value repeat bookers — straight from your CRM, loyalty, and booking data, then hands them to Personalization and Campaign Orchestrator to act on. Win-back and anniversary lists stop being static exports and start reflecting exactly who's eligible to hear from you today."
**Why:** Identifying a guest's timing/re-engagement window is a Personalization capability per the PRDs; on real customer data, AB's propensity/timing modeling is an explicit, not-yet-built backlog item. AB's actual job is audience definition and suppression, not timing.

## solutionRows[3] — Campaign Orchestrator
**Current copy:** title: "Outreach triggered at the optimal moment" / description: "The Campaign Orchestrator works together with the Audience Builder to use behavioral insights and trigger personalized outreach at the optimal moment, across email, app, and paid channels. The post-stay sequence stops running on checkout-plus-seven timers and starts responding to what each guest actually signals."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Executive Summary: "the marketer side needs buy-side jobs: in-flight spend optimization across channels, drift detection, and a testing loop"; Non-Goals: "Not the planning tool... CO operates strictly in-flight"; White Space Backlog #4: "Real-time operational triggers (inventory/kitchen signals) ... TBD" (not yet built).
**Suggested fix:** title: "Catch budget drift before it costs you the flight" / description: "Campaign Orchestrator watches your live campaign spend across channels, flags when a channel drifts from the brief or stops earning its keep, and proposes a reallocation for your approval. No more finding out at the monthly readout that a channel drained budget for two weeks straight."
**Why:** The PRD scopes Campaign Orchestrator as a cross-channel ad-spend optimization and drift-detection tool (MMM/marginal-ROAS engine), not a guest-level lifecycle-messaging trigger system; per-guest send timing (e.g., a post-stay sequence) is a Personalization decision, and real-time operational triggers are explicitly backlog.

## faq[1] — "How does Personalization decide which offer to send a loyalty member?"
**Current copy:** "It reads real-time activity signals (browsing, app opens, recent stays, tier status) and matches them against contextually relevant offers, so a top-tier member and a first-time subscriber never get the same email. Every offer runs within your loyalty program's existing rules and approval workflow."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative: "The engine precomputes six decisions per known customer"; White Space Backlog #2: "Always-on anomaly detection + event triggers ... batch-only today."
**Suggested fix:** "It reads recent activity signals (browsing, app opens, recent stays, tier status) and matches them against the offer most likely to earn a response, so a top-tier member and a first-time subscriber never get the same email. Every offer runs within your loyalty program's existing rules and approval workflow."
**Why:** "Real-time" repeats the same batch-vs-live mismatch flagged in solutionRows[0]; the approval-workflow sentence is accurate and untouched.

## faq[2] — "How is Personalization different from Audience Builder and Campaign Orchestrator?"
**Current copy:** "Audience Builder and Campaign Orchestrator decide who to reach and when a guest's re-engagement window is actually open. Personalization decides what to offer them once they're there, calibrated to the member, the moment, and the tier. Most teams run all three together."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1: "Precompute per-customer decisions (channel incl. no-contact, content, offer via net-revenue model, time, day, frequency)" — timing ("time, day") is a Personalization decision, not an AB/CO one. Kana_PRD_Marketers_Campaign_Orchestrator_v2.md Executive Summary confirms CO's job is in-flight spend optimization, not guest-level timing.
**Suggested fix:** "Audience Builder decides who to reach — precise, suppressed guest segments built from your CRM, loyalty, and booking data. Personalization decides what to offer and when, calibrated to the member, the moment, and the tier. Campaign Orchestrator keeps the ad spend behind those campaigns on track. Most teams run all three together."
**Why:** This FAQ states the product division of labor directly, and it's backwards on timing: the PRDs put "when" inside Personalization's six-decision engine, not Audience Builder or Campaign Orchestrator.

## faq[3] — "How fast can a travel or hospitality team get live on Kana?"
**Current copy:** "Most travel and hospitality teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources and configuring Personalization and Category Intelligence to your loyalty and rate data. Audience Builder and Campaign Orchestrator layer in once those core connections are stable. Kana's solutions team works with you throughout."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md — Non-Goals: "Internal company data ingestion — the 'data plane' layer stays out of v1"; §8.1: "PII/PHI handling: minimal by design — no internal company data... Public sources only via the curated catalog."
**Suggested fix:** "Most travel and hospitality teams see value within the first 30 days. Onboarding starts by connecting your top 3–5 data sources, configuring Personalization on your loyalty data and Category Intelligence on the competitive rate topics you want watched. Audience Builder and Campaign Orchestrator layer in once those core connections are stable. Kana's solutions team works with you throughout."
**Why:** "Configuring Category Intelligence to your... rate data" reads as CI ingesting the hotel's own internal rate data, which the PRD explicitly rules out for v1 (public sources only); CI should be described as watching external/competitive rate topics, not internal data.

## faq[0] — "How does Kana connect to our hospitality stack?"
**Current copy:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Verdict:** UNVERIFIABLE-FLAGGED
**PRD citation:** None of the four PRDs give an implementation timeline; they describe warehouse/connector-registry integration patterns generically (e.g., Kana_PRD_Marketers_Audience_Builder_v2.md §9: "CRM + loyalty + POS (warehouse-resident) | Customer warehouse | Via shared-core connection") without a named vendor list or a setup-duration figure.
**Suggested fix:** "Via API. Kana sits on top of your PMS, RMS, CRS, loyalty platform, and booking engine (Opera, Duetto, IDeaS, Salesforce, and more) with no rip-and-replace and no migration. Kana's solutions team handles setup, with timelines depending on how many systems you're connecting."
**Why:** The "no rip-and-replace, no migration" architecture claim is consistent with the PRDs' by-reference/warehouse-consumption pattern and is left untouched; the specific "2–4 weeks" figure isn't sourced in any PRD and risks being a hard commitment nobody can back up.

## personas[0] (Marketing Automation Manager) — solution
**Current copy:** "Works together with Audience Builder to trigger personalized outreach at the optimal moment, across email, app, and paid channels, instead of a fixed post-stay timer. One system replaces the manual handoff between channels for a single guest journey."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md Executive Summary and §7.1–7.4 (spend ingestion, MMM optimization engine, drift/alerts, testing loop) — no functional requirement covers per-guest post-stay message timing.
**Suggested fix:** "Watches your live campaign spend across channels and flags when a channel drifts from the brief or stops earning its keep, proposing a reallocation for your approval instead of waiting for the weekly report. One system replaces the manual channel-by-channel spend review."
**Why:** Same mismatch as solutionRows[3] — this restates Campaign Orchestrator as a guest-messaging trigger system rather than a spend-optimization and drift-detection tool.

## personas[1] (E-Commerce / Digital Strategy Manager) — solution
**Current copy:** "Monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses, so marketing reacts in the same news cycle as the rate change, not the one after."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "scheduled re-research (working cadence: daily)"; no functional requirement produces messaging/audience recommendations.
**Suggested fix:** "Runs a daily watch on competitive pricing signals and surfaces alerts with the cited evidence behind them, so marketing reacts in the same news cycle as the rate change, not the one after."
**Why:** Same "continuous" + "recommended messaging and audience responses" overclaim as solutionRows[1].

## personas[2] (Lifecycle Marketing Manager) — solution
**Current copy:** "Works with the Campaign Orchestrator to identify each guest's real re-engagement window from behavioral signals, and trigger personalized outreach at the optimal moment, not the scheduled one."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1: "Propensity / lookalike models on real data | Synthetic only today"; timing belongs to Personalization per Kana_PRD_Marketers_Personalization_at_Scale_v2.md §7.1.
**Suggested fix:** "Builds precise, suppressed guest segments from behavioral and loyalty signals, then hands them to Personalization and Campaign Orchestrator to act on — so outreach targets who's actually eligible today, not a static scheduled list."
**Why:** Same AB/CO timing misattribution as solutionRows[2].

## personas[3] (Head of Loyalty) — solution
**Current copy:** "Monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time, calibrated to the member, the moment, and the tier. Built on the Audience Builder foundation, so it activates on data teams already have flowing."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Use Case Narrative ("precomputes six decisions"); White Space Backlog #2 ("batch-only today"). No PRD states Personalization is "built on the Audience Builder foundation" — the only cross-product reuse named is a shared identity-graph substrate (§9: "Kana-CDP substrate... reuse instead of building"), not an Audience Builder dependency.
**Suggested fix:** "Turns loyalty member activity into a next-best offer for each member — channel, content, and timing calibrated to who they are and where they are in the relationship — routed through your team's approval before it reaches anyone. It runs on the CRM and loyalty data you already have connected."
**Why:** Beyond the repeated real-time overclaim, "Built on the Audience Builder foundation" is an unsupported internal-architecture claim that also violates the outcome-not-mechanism guidance — it describes plumbing, not a result the guest or marketer experiences.

## personas[4] (VP Commercial / Director of Marketing) — solution
**Current copy:** "The platform anchor: real-time, tier-aware offers that turn the loyalty program's existing guest data into an active growth channel, not a once-a-quarter batch send. 'AI-personalized' becomes something the guest actually experiences, not just a board slide."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "batch-only today."
**Suggested fix:** "The platform anchor: tier-aware offer recommendations that turn the loyalty program's existing guest data into an active growth channel, not a once-a-quarter batch send. 'AI-personalized' becomes something the guest actually experiences, not just a board slide."
**Why:** Only "real-time" needs to go; "not a once-a-quarter batch send" is still an accurate contrast since the engine runs far more often than quarterly.

## showcase.columns[0] — Personalization
**Current copy:** title: "Offers tuned to the guest, not the segment" / description: "Real-time loyalty signals feed straight into the offer a guest sees, so your highest-tier member and a first-time subscriber never get the same email."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Never contacts a customer without human approval"; White Space Backlog #2 ("batch-only today").
**Suggested fix:** "Loyalty signals feed straight into the next offer we recommend for a guest, so your highest-tier member and a first-time subscriber never get the same email."
**Why:** "Real-time" repeats the batch/precompute mismatch, and "the offer a guest sees" implies automatic serving without the mandatory approval step the PRD requires.

## showcase.columns[1] — Category Intelligence
**Current copy:** title: "Answer the rate drop the same day" / description: "Continuous competitive-rate monitoring with recommended messaging and audience responses, so marketing hears it from the signal, not from sales."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "working cadence: daily"; no messaging/audience-recommendation functional requirement.
**Suggested fix:** "Daily competitive-rate monitoring with cited alerts on exactly what moved, so marketing hears it from the signal, not from sales."
**Why:** Same "continuous" + "recommended messaging and audience responses" overclaim as solutionRows[1]; note the column's own title ("the same day") is already consistent with a daily cadence — only the description overclaims.

## showcase.columns[2] — Audience Builder
**Current copy:** title: "Catch the booking window while it's open" / description: "Behavioral signals reveal when each guest's next trip is forming, so win-back and anniversary outreach lands in the booking window, not on the calendar date."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today."
**Suggested fix:** title: "Build the list, not just the calendar" / description: "Guest segments build directly from your CRM and loyalty data — lapsed members, recent cancellations, high-value repeat bookers — so win-back and anniversary outreach reflects who's actually eligible, not a static calendar export."
**Why:** Same AB timing misattribution as solutionRows[2]; this column is explicitly linked to Audience Builder ("Learn more about Audience Builder").

## stackShowcase.subtitle
**Current copy:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** All three marketer PRDs mark governance as unfinished in §8: Kana_PRD_Marketers_Audience_Builder_v2.md — "Data Governance & Retention | Backlog | —"; Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — "Data Governance & Retention | Backlog | —"; Kana_PRD_Marketers_Personalization_at_Scale_v2.md — "Data Governance & Retention | Backlog | Decision/feature retention TBD."
**Suggested fix:** "By acting as the marketing operating layer, Kana connects to your PMS, RMS, CRS, loyalty platform, and booking engine: Opera, Duetto, IDeaS, Salesforce, and more, no rip-and-replace, no migration."
**Why:** "No new governance gaps" is a flat guarantee the PRDs themselves don't back — each one lists data governance and retention as an open backlog item, not a solved one. The rest of the sentence ("no rip-and-replace, no migration") matches the by-reference architecture described throughout the PRDs and is left untouched.

## stackShowcase.columns[0] — Personalization
**Current copy:** title: "Turn the loyalty database into a live channel" / description: "Personalization: monitors member activity signals and triggers contextually relevant offers across email, app, and web in real time, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md White Space Backlog #2 — "batch-only today"; Non-Goals — mandatory human approval gate.
**Suggested fix:** "Personalization: reads member activity signals and recommends the next offer for each member across email, app, and web, for your team to approve and send, so your highest-tier members stop receiving the same email as a first-time subscriber."
**Why:** Same real-time/approval-gate overclaim as solutionRows[0] and showcase.columns[0].

## stackShowcase.columns[1] — Category Intelligence
**Current copy:** title: "Give marketing its own rate shopper" / description: "Category Intelligence: continuous competitive-rate monitoring that answers with marketing moves: the alert, the recommended message, and the audience to send it to, in one motion."
**Verdict:** OVERCLAIM
**PRD citation:** Category_Intelligence_PRD.docx.md §7.3 — "working cadence: daily"; no messaging/audience-recommendation functional requirement.
**Suggested fix:** "Category Intelligence: daily competitive-rate monitoring that surfaces the alert and the cited evidence behind it, so marketing acts on the signal instead of waiting for the secondhand version."
**Why:** Same "continuous" + "recommended message... and the audience to send it to" overclaim as solutionRows[1] — this is the most explicit version of the unsupported messaging/audience-targeting claim on the page.

## stackShowcase.columns[2] — Audience Builder
**Current copy:** title: "Time every journey to the guest, not the template" / description: "Audience Builder: behavioral re-engagement windows replace fixed post-stay timers, so the guests who rebook at 33% through your CRM hear from you when their next trip is forming."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md White Space Backlog #1 — "Propensity / lookalike models on real data | Synthetic only today."
**Suggested fix:** title: "Build the segment the guest actually belongs in" / description: "Audience Builder: precise, suppressed guest segments replace static post-stay lists, so the guests who rebook at 33% through your CRM are the ones your campaigns are actually built around."
**Why:** Same AB timing misattribution as solutionRows[2] and showcase.columns[2] — "behavioral re-engagement windows" is a timing capability the PRD scopes to Personalization (built), not Audience Builder (backlog on real data).
