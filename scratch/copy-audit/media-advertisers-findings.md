# Copy Audit — industries/media-advertisers/config.js

**Summary:** 20 product-capability claims checked against the 3 marketer PRDs (Audience Builder, Campaign Orchestrator, Personalization). 5 clean (ACCURATE, no action). 15 flagged below.

Two systemic issues account for most of the flags:
1. **Personalization is written throughout as if it modifies the platform's own content-recommendation engine** ("what to watch next," "recommendation logic," "session depth"). Per its PRD, Personalization is a next-best-action *marketing decisioning* engine (channel/content/offer/time/day/frequency for retention outreach) — it is explicitly **not** an audience or content-recommendation tool, and its content decision is which marketing message to send, not which show/article to surface. It's also explicitly **batch-only today** (always-on/event-triggered personalization is White Space Backlog), contradicting "keeps learning with every session."
2. **Audience Builder is written throughout as if it models optimal win-back timing and triggers the re-engagement send.** Per its PRD, AB's non-goals state it is "not a campaign or messaging tool" — audience *building and activation* is its job; timing/content/send decisions belong to Personalization or Campaign Orchestrator. Propensity/timing prediction is explicitly listed as backlog, "synthetic only today."

---

## solutions[1] — Audience Builder (main solution row)
**Current copy:** "Audience Builder identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe. Sequences stop launching 30–60 days after the cancel, when intent to return has collapsed, and start reaching each cohort in the days when a comeback is actually likely."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Non-Goals: "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator." Also Theme "Rule-based cross-sell": "Propensity/timing/channel prediction absent"; White Space Backlog #1: "Propensity / lookalike models on real data... Synthetic only today."
**Suggested fix:** "Audience Builder builds and activates the lapsed-subscriber segment in minutes, not the usual 30–60-day lag, with recent purchasers and opt-outs suppressed automatically. Cohorts stop waiting on a data-team ticket and start reaching the door while intent to come back is still there."
**Why:** AB doesn't model an "optimal window" or trigger the offer send — that's flagged as backlog/synthetic-only and explicitly out of scope per AB's non-goals.

## painPoints[1] — win-back resolution (Audience Builder)
**Current copy:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder times the outreach to launch inside that window instead of the typical 30–60 days post-churn."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — same Non-Goals citation as above; timing/send decisions are out of AB's scope.
**Suggested fix:** "The best win-back window is often within the first 7 days, and a quarter of cancelled subscribers resubscribe within six months anyway, if someone asks in time. Audience Builder builds and activates that segment in minutes instead of the typical 30–60-day lag, so the ask can go out while the window's still open."
**Why:** Same as above — AB doesn't "time the outreach"; it builds/activates the audience quickly, which is the PRD-supported claim.

## personas[1] — Growth Marketing Manager (Win-Back) solution
**Current copy:** "Identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe, often the first seven days, not the second month."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md — Non-Goals, "not a campaign or messaging tool"; White Space Backlog #1 (propensity/timing "synthetic only today").
**Suggested fix:** "Builds and activates the lapsed-subscriber segment by cohort in minutes, with recent purchasers and opt-outs suppressed automatically, so outreach can go out in the first seven days instead of the second month."
**Why:** Same timing/trigger overclaim as solutions[1].

## showcase.columns[1] — Audience Builder
**Current copy:** "Optimal win-back windows identified per cohort, with personalized re-engagement offers triggered inside the highest-conversion timeframe, days after the cancel, not months."
**Verdict:** OVERCLAIM
**PRD citation:** Same as above.
**Suggested fix:** "Lapsed-subscriber segments built and activated per cohort in minutes, suppression logic built in, so outreach can launch days after the cancel, not months."
**Why:** Same timing/trigger overclaim.

## stackShowcase.columns[1] — Audience Builder
**Current copy:** "Audience Builder: behavioral signals identify when each subscriber cohort is most likely to return, and re-engagement offers fire inside that window instead of on the 60-day timer."
**Verdict:** OVERCLAIM
**PRD citation:** Same as above.
**Suggested fix:** "Audience Builder: build and activate the lapsed-subscriber segment by cohort in minutes, suppression built in, so re-engagement can launch days after the cancel instead of on the 60-day timer."
**Why:** Same timing/trigger overclaim.

---

## solutions[0] — Personalization (main solution row)
**Current copy:** Title: "Recommendations that know what they watched last night" / Description: "Personalization incorporates recency-weighted behavioral signals directly into your recommendation logic, so every subscriber sees content matched to what they engaged with most recently, not a static profile from months ago. Session depth goes up, dormancy goes down, and the engine keeps learning with every session instead of waiting for the next model refresh."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Not a marketing automation platform... Personalization decides and hands off." Exec Summary: "per-customer next-best-action decisions (channel, content, offer, time, day, frequency)" — "content" is the marketing/campaign content decision, not the platform's content-recommendation logic. White Space Backlog #2: "Always-on anomaly detection + event triggers... batch-only today," directly contradicting "learns with every session."
**Suggested fix:** Title: "Retention offers that know what they watched last night" / Description: "Personalization scores every subscriber's churn risk from recency-weighted behavioral signals and decides the next offer, channel, and moment to reach them, not a static profile from months ago. Every decision comes with a plain-language reason, and nothing goes out without your team's approval."
**Why:** Personalization is a retention-decisioning engine, not an integration into the platform's own content-recommendation logic, and it's batch-only today, not continuously learning per session.

## faq — "Does Personalization replace our existing recommendation engine?"
**Current copy:** Q: "Does Personalization replace our existing recommendation engine?" / A: "No, it strengthens it. Personalization layers recency-weighted behavioral signals on top of whatever recommendation logic you already run, so the existing engine gets sharper instead of replaced. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Non-Goals: "Not a marketing automation platform... Personalization decides and hands off"; "Not an audience tool... Personalization decides per-customer actions within those audiences."
**Suggested fix:** Q: "Does Personalization replace our lifecycle or retention marketing tools?" / A: "No, it strengthens them. Personalization scores churn risk and decides the next offer, channel, and send time from recency-weighted behavioral signals, then hands off to whatever marketing platform you already send from. Most teams see the biggest lift in the signal a static model misses: what a subscriber did in the last day or two."
**Why:** The premise (Personalization touches the content-recommendation engine) isn't supported; it hands decisions off to the marketing send platform, not the rec engine.

## faq — "How is Personalization different from Audience Builder?"
**Current copy:** "Audience Builder decides who to reach and when their re-engagement window is actually open. Personalization decides what to show them once they're back, recommendations weighted to what they've watched or read most recently. Most teams run both together: Audience Builder times the outreach, Personalization makes the content in it worth returning for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md Non-Goals ("not a campaign or messaging tool... send decisions belong to Personalization and Campaign Orchestrator"); Kana_PRD_Marketers_Personalization_at_Scale_v2.md Non-Goals ("not an audience tool").
**Suggested fix:** "Audience Builder builds and activates the audience: who's lapsed, who's suppressed, who's ready for outreach. Personalization decides what happens next for each of them — the offer, channel, and moment most likely to bring them back — weighted to what they've done most recently. Most teams run both together: Audience Builder gets the list built and activated fast, Personalization decides what each person on it sees."
**Why:** AB doesn't decide the re-engagement window (timing is out of scope per AB's non-goals); reassigns the timing claim to where the PRDs actually place it.

## personas[3] — Head of Product, Recommendations, solution (Personalization)
**Current copy:** "Incorporates recency-weighted behavioral signals into content recommendation logic, increasing session depth and reducing subscriber dormancy. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same Non-Goals citation as solutions[0]; success metrics are retention lift / margin saved / at-risk lead time, not session depth.
**Suggested fix:** "Scores churn risk and decides the next offer, channel, and moment from recency-weighted behavioral signals instead of a stale profile, with a reason behind every decision. Built on top of the Audience Builder foundation, so it activates on data teams already have flowing."
**Why:** Same recommendation-logic overclaim; "session depth" isn't a PRD-supported metric for this product.

## personas[4] — CMO / Head of Subscriber Growth, solution (Personalization)
**Current copy:** "The platform anchor: recency-weighted recommendations that keep every subscriber's experience current with what they're actually watching or reading, not a profile that's months stale. Retention and growth both run through the same signal."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "The platform anchor: recency-weighted retention decisions that stay current with what each subscriber is actually doing, not a profile that's months stale. Retention and growth both run through the same signal."
**Why:** Same recommendation-logic overclaim.

## showcase.columns[0] — Personalization
**Current copy:** "Recency-weighted signals feed straight into your recommendation logic, so what a subscriber sees matches what they engaged with recently, not a profile trained months ago."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "Recency-weighted signals feed straight into every retention decision, so the offer and channel match what a subscriber engaged with recently, not a profile trained months ago."
**Why:** Same recommendation-logic overclaim.

## stackShowcase.columns[0] — Personalization
**Current copy:** "Personalization: recency-weighted signals feed straight into your existing recommendation engine, so what a subscriber sees reflects what they did this week, not a profile trained months ago."
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[0].
**Suggested fix:** "Personalization: recency-weighted signals feed straight into every retention decision, so the offer a subscriber gets reflects what they did this week, not a profile trained months ago."
**Why:** Same recommendation-logic overclaim.

---

## stats[1] — 77% churn stat
**Current copy:** { number: "77%", label: "of streaming subscribers aren't serial churners — personalization decides who avoids joining the other 23% (Antenna)" }
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Success Metrics table: "Retention lift on approved interventions | TBD | Treated-vs-control measurement." No proven-outcome claim exists yet to support "personalization decides who avoids" churn.
**Suggested fix:** { number: "77%", label: "of streaming subscribers aren't serial churners — the other 23% are exactly who a sharper win-back and retention motion is built to reach (Antenna)" }
**Why:** Retention lift is an unmeasured (TBD) metric in the PRD; the causal "decides who avoids" framing overstates proven efficacy.

---

## solutions[2] — Campaign Orchestrator (main solution row)
**Current copy:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to days."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — Success Metrics: "Test cycle time | Months → weeks | Partner workflow audit."
**Suggested fix:** "...New bundle configurations, promotional pricing, and plan upgrade offers stop requiring months of cross-functional effort, and the feedback loop shrinks from quarters to weeks."
**Why:** The PRD's own MVP target is months-to-weeks, not months-to-days.

## showcase.columns[2] — Campaign Orchestrator
**Current copy:** Title: "Run the pricing test in days, not quarters"
**Verdict:** OVERCLAIM
**PRD citation:** Same as solutions[2] — "Test cycle time: Months → weeks."
**Suggested fix:** "Run the pricing test in weeks, not quarters"
**Why:** Same magnitude mismatch — PRD target is weeks, not days.

---

## Checked, no changes needed (clean)
- **faq[0]** ("How does Kana connect to our subscription stack?") — architecture claims (API-based, sits on top of warehouse/billing/messaging, no rip-and-replace) are consistent with AB's "consumes unified data" framing and warehouse-connection model.
- **faq[3]** ("How fast can a subscription team get live on Kana?") — sequencing (Personalization/Audience Builder first, Campaign Orchestrator layered in after) isn't contradicted by any PRD.
- **personas[0]** (Director, Lifecycle Marketing — Campaign Orchestrator) — "standing experiment the retention team runs itself" is consistent with CO's self-serve test-loop scope.
- **personas[2]** (Pricing & Packaging Lead — Campaign Orchestrator) — "weekly experiment cadence" lines up with the PRD's "Months → weeks" target.
- **stackShowcase.columns[2]** (Campaign Orchestrator) — "ships in a sprint" is consistent with the PRD's weeks-level target.
