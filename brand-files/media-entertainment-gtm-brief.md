# Media & Entertainment (Streaming / Digital Publications / Subscription Commerce) — Industry GTM Brief

**Date:** 2026-07-13 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** Rebuild of the scaffold at `industries/media-advertisers/` as the **Media & Entertainment** page (slug `media-advertisers` kept for URL stability; label changes to "Media & Entertainment"). Template: shared config-driven layout. Accent `#7f63c5` (medium purple) retained.
**Nav changes bundled with this build:** "Media & Entertainment" grouped under **Kana for Marketers**; suite "Kana for Advertisers" renamed **"Kana for Agencies"**.

---

## Stage 0 — Ground truth

### Featured products & positioning (from Rayyan's screenshot, 2026-07-13 — authoritative roster for this page)

**Hero framing (screenshot):**
> "Subscription Brands Are Losing Members They Could Have Kept" — Streaming services, digital publications, and subscription commerce businesses share a common enemy: churn. The data to predict it exists — the problem is connecting it to real-time marketing action.

**Challenge → solution pairs (verbatim ground truth):**

| # | Challenge | Solution product | Positioning |
|---|---|---|---|
| 1 | Churn prediction models aren't connected to real-time intervention — data science teams build churn models that score members monthly; by the time the scores reach a campaign, the at-risk subscriber has already cancelled | **Agentic Data Platform** | "Connects churn model outputs to the Kana Campaign Orchestrator application, which triggers personalized retention offers the moment a risk score crosses threshold." |
| 2 | Content recommendations aren't personalized to recent engagement patterns — recommendation engines operate on historical preferences, missing recency signals that most strongly predict what a subscriber wants to watch or read next | **Personalization** (⚠️ "Coming soon") | "Incorporates recency-weighted behavioral signals into content recommendation logic — increasing session depth and reducing subscriber dormancy." |
| 3 | Win-back campaigns reach churned subscribers too late — re-engagement sequences typically launch 30–60 days post-churn, after subscriber intent to return has collapsed; the best win-back window is often within the first 7 days | **Audience Builder** | "Identifies the optimal win-back window by subscriber cohort and triggers personalized re-engagement offers within the highest-conversion timeframe." |
| 4 | Bundle and pricing test cycles are slow and manual — testing new bundle configurations, promotional pricing, or plan upgrade offers requires significant cross-functional effort, creating months-long feedback loops | **Campaign Orchestrator** | "Enables rapid, automated offer testing across subscriber cohorts, with the Kana Marketing Intelligence application surfacing test results in real time." |

**Roster notes:**
- The screenshot's own copy cross-references products by full name ("the Kana Campaign Orchestrator application", "the Kana Marketing Intelligence application") — keep that composability framing.
- The screenshot itself contains grounded claims usable in copy: churn models score monthly; win-back launches 30–60 days post-churn while the best window is within the first 7 days.
- Agentic Data Platform / Personalization: screenshot positioning only (no PDFs), as with QSR/FS/T&H. Personalization carries "Coming soon".
- This vertical is DISTINCT from Publishers (sell-side ad ops). M&E here = subscription/consumer side: streaming, digital publications (reader revenue side), subscription commerce. Don't reuse the publishers brief's ad-ops substance.

### Target market (xlsx)
- The old xlsx "Media/Publisher" row was KFP; this page replaces the "Media & Advertisers" scaffold. Suite assignment per Rayyan (2026-07-13): **Kana for Marketers**. Named M&E-adjacent accounts from xlsx: NBCU, Fox, SiriusXM, Disney, NESN (also on KFP row — dual-sided companies).

### Template contract & nav changes
- Full replacement of `industries/media-advertisers/config.js` (scaffold with placeholders/old products). Label: "Media & Entertainment"; slug stays `media-advertisers`; accent `#7f63c5` kept.
- `src/app.js`: slugMap gains `"Media & Entertainment": "media-advertisers"`; industrySuiteMap: `"Media & Entertainment": "Kana for Marketers"` (old "Media & Advertisers" entry removed); suites array renames "Kana for Advertisers" → "Kana for Agencies" (products unchanged: Omni-Channel Media Planner, Campaign Orchestrator, Audience Builder, Marketing Intelligence — per xlsx Agencies row).
- All vertical configs' nav.industries: "Media & Advertisers" → "Media & Entertainment".

**Kana angle (Stage 0):** The M&E thesis is prediction-to-action latency: churn models, recommendation engines, and pricing analytics all EXIST — but their outputs land in monthly scores, historical preferences, and months-long test loops. Agentic Data Platform closes the churn-score-to-intervention gap (feeding Campaign Orchestrator); Audience Builder owns the 7-day win-back window; Campaign Orchestrator owns rapid offer/pricing testing (surfaced by Marketing Intelligence); Personalization (coming soon) owns recency-weighted recommendations. Research must ground: churn/retention economics, win-back timing evidence, retention org roles, subscription tool stacks, and streaming-wars pressure.

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Business models:**
1. **Streaming (SVOD/hybrid)** — subscription fees + fast-growing ad tiers: $177B global streaming revenue in 2025 ($157B subscriptions, $20B ad tiers); ad tiers = 28% of subscription revenues, +460% since 2020; 31% of new subscribers choose ad-supported plans (StreamingMedia/eMarketer/SQ Magazine, 2025–26).
2. **Digital publications** — reader revenue/subscriptions (same churn mechanics).
3. **Subscription commerce** — recurring boxes/memberships; win-back economics are the shared spine.
4. **The industry has pivoted from acquisition to retention/monetization:** "growth is no longer measured purely by subscriber count" — the Q1'26 posture across major players is advertising expansion, pricing recalibration, bundling, spending discipline (Yahoo Finance market report, 2026).

**Churn reality (the common enemy, quantified):**
- Premium SVOD weighted-avg monthly churn stabilized at ~4.6% in 2025 (Antenna Q1'26); broader streaming average ~6.3% monthly ≈ 54% annualized (RetentionCheck, 2026); specialty SVOD 6.6%, sports 5.1%.
- 23% of the US streaming audience are "serial churners" (cancel 3+ services in 2 years), timing subscriptions around releases (Antenna, 2025–26).
- ~24% of consumers cancel and resubscribe to the same service within six months — ~40% for Gen Z (Antenna/Señal, 2025–26) — churn is often a pause, if you catch it.
- Top churn drivers: content library exhaustion (34% of cancellations), price sensitivity/competition (28%) (RetentionCheck, 2026).

**Win-back timing evidence (challenge #3's grounding):**
- The most effective first win-back touch goes out within 24 hours of cancellation, "while the user is still in the mental frame of the product" (Hightouch, 2025–26); the first 30 days are the "golden window" (digitalapplied 2026 playbook).
- Yet standard practice launches sequences 30–60 days post-cancellation (Recurly/finsi guidance) — matching the screenshot's claim that sequences typically launch 30–60 days out while the best window is often within 7 days.
- Well-run win-back recovers 8–15% of cancelled subscribers within 12 months at a fraction of CAC; non-discounted resubscribers stay 2.6x longer than discount-acquired ones (digitalapplied/ProsperStack, 2026).

**Retention levers:** bundling reduces churn 34%; family plans increase retention 52% (Marketing LTB subscription stats, 2026). Pricing/packaging experimentation is a named strategic lever (pricing recalibration, hybrid tiers) — the capability Campaign Orchestrator's offer-testing targets.

**Value chain:** Content/licensing → platform product (apps, recommendation engine) → growth/retention marketing (lifecycle, CRM) → billing/subscription infrastructure → data science (churn/propensity models) → the subscriber. Marketing sits between the models that predict behavior and the billing events that record it.

**Structurally different from other Kana verticals:** the prediction layer already exists in-house (churn models, recommendation engines, price analytics) — closest to FS ("can't act on signals you have") but here the latency is organizational-technical (monthly scoring batches, months-long test loops), not a compliance control. The marketing unit is the SUBSCRIBER × RISK SCORE × MOMENT.

**Kana angle (Stage 1):** Every stat lands on a screenshot story: ~4.6–6.3% monthly churn and 23% serial churners make retention the P&L battleground; the 24-hour/7-day/30-day win-back evidence vs. 30–60-day practice is Audience Builder's entire pitch; the 24% resubscribe-within-6-months stat proves recoverable intent that timing wastes; the industry's pivot to pricing recalibration and bundling gives Campaign Orchestrator's rapid offer-testing its strategic frame; content-exhaustion as the #1 churn driver makes Personalization's session-depth/dormancy framing a churn story, not just an engagement story.

## Stage 2 — Org map

| Title | Tribe | Exists in M&E? | Notes / false friends |
|---|---|---|---|
| Director, Lifecycle Marketing — Retention | lifecycle | ✅ core | Real postings: Fox One "Director, Lifecycle Marketing - Retention" (owns end-to-end retention vision, in-life engagement, habit formation, LTV; retention experimentation roadmap; segmentation by behavior, viewership, tenure, content affinity); Crunchyroll "Lifecycle Growth Marketing Sr. Manager, Retention" (cancel-save experiences, behavioral nudges, engagement recovery, payment recovery; active + passive churn) (Glassdoor/LA Tech Jobs, 2025) |
| Growth Marketing (acquisition + win-back) | performance | ✅ | Owns paid + reactivation funnels |
| Data Science / Churn Modeling team | analytics | ✅ core | Builds churn/propensity models; the score-to-action handoff is the documented failure point |
| Marketing Ops / MarTech | ops | ✅ | Owns Braze-class messaging, CDP, warehouse reverse-ETL |
| Pricing / Packaging (product + finance) | product | ✅ | Owns tiers, bundles, promo pricing; changes need cross-functional councils (Stripe/Recurly guidance) |
| Content/Editorial + Recommendation product | content | ✅ | Owns the rec engine — a PRODUCT system marketing can't touch |
| Subscriber Insights / Research | insights | ✅ | Antenna-style benchmarks, cohort analyses |
| Ad Ops / Yield (publisher sense) | — | ⚠️ | Exists on ad-tier teams but that's the Publishers vertical's story — keep OFF this page |
| Category Manager / Field Marketing | — | ❌ | CPG/QSR false friends |

**Kana angle (Stage 2):** Personas write themselves from the postings: Retention/Lifecycle Director (ADP + AB — their job description IS challenges #1 and #3), Data Science lead (ADP — their monthly scores die in the warehouse), Growth/Win-back owner (AB), Pricing/Packaging owner (CO — months-long test loops), Head of Subscriber Growth/CMO (narrative). Vocabulary: churn (active/passive), save rate, win-back, dormancy, session depth, cohort, tenure, content affinity, ARPU, LTV, cancel-save, payment recovery, serial churners. NEVER: makegoods, day-parts, SKUs, compset.

## Stage 3 — Role profiles

### Director, Lifecycle Marketing — Retention (primary buyer)
- **Owns (from Fox/Crunchyroll postings, 2025):** churn reduction, save rates, LTV; retention experimentation roadmap; CRM channels (email, push, in-app, on-platform); programs for active churn (cancel intent) AND passive churn (declining engagement, payment risk, inactivity).
- **Workflow:** segment definition (behavior, tenure, affinity) → campaign build in messaging platform → trigger configuration → readout. The at-risk segment refreshes when the churn model runs — typically a scheduled batch.
- **Structural pain (challenge #1 + #3):** scores arrive monthly; cancel-save must fire in the moment; win-back sequences launch 30–60 days post-churn when the best window is within 7 days.

### Data Science / Churn Model Lead
- **Reality (Prometheus/CDP.com/digitalapplied, 2026):** standard architecture = warehouse (BigQuery/Snowflake) + scheduled prediction pipeline + scores written back to CRM. "Churn prediction fails most often as a marketing operations problem — a model that produces probabilities nobody acts on"; getting predictions out of the warehouse is "the step most data science teams under-resource."
- **Kana relevance:** ADP's exact positioning — connect model outputs to campaign triggering the moment a score crosses threshold.

### Pricing / Packaging Owner
- **Reality:** pricing touches sales, support, finance, product; without coordination systems can't handle new structures — hence "cross-functional pricing councils" (Stripe, 2026). Bundle economics justify the effort (Disney/Hulu/Max bundle: 80% three-month retention, 59% less likely to churn in 12 months; Applause, 2025–26) but test cycles run months (screenshot challenge #4).
- **Kana relevance:** CO's rapid automated offer testing across cohorts + MI surfacing results in real time.

### Growth / Win-back Marketing Manager
- **Workflow:** lapsed-subscriber list pulls → discount-led sequences on fixed schedules → quarterly reporting. Evidence-based timing (first touch within 24 hrs; golden window ≤30 days; segment by cancellation reason) is documented best practice the batch stack can't execute (Hightouch/digitalapplied, 2025–26).

**Kana angle (Stage 3):** The Fox and Crunchyroll postings are third-party proof that "retention experimentation roadmap" and "cancel-save" are budgeted mandates — the page's personas should mirror their language. The data science quote ("probabilities nobody acts on") is the ADP pitch in the industry's own words.

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Retention/Lifecycle Director | Braze-class messaging (email/push/in-app), campaign dashboards | Segments refresh on the model's batch schedule; cancel-save logic hand-configured per campaign |
| Data Science | Warehouse (Snowflake/BigQuery/Databricks), notebooks, SageMaker-class pipelines | Scores written back to CRM on a schedule; "the step most teams under-resource" is activation (Prometheus/CDP.com, 2026) |
| Marketing Ops | Reverse ETL (Hightouch/Census), CDP (Amplitude/Segment/mParticle), Braze CDI | Warehouse-to-tool syncs are batch jobs; the 2026 trend (Databricks CustomerLake "Agentic CDP") shows the market naming this exact activation-layer gap |
| Pricing/Packaging | Billing platform (Recurly/Zuora), finance models, experiment docs | Cross-functional pricing councils; months-long test loops (Stripe guidance; screenshot challenge #4) |
| Growth/Win-back | Ad platforms, ESP, lapsed-list pulls | Fixed-schedule sequences; discount-heavy defaults that recruit shorter-tenure subscribers (2.6x stat) |

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Monthly churn model scoring run | Data Science | Monthly (the screenshot's named villain) | ✅ warehouse pipeline → CRM write-back |
| Retention/save-rate readout (churn, saves, LTV) | Retention Director | Monthly/quarterly | ✅ messaging platform + billing + warehouse reconciled |
| Win-back sequence + lapsed-list pull | Growth | Launches 30–60 days post-churn | ✅ fixed timers, one-size discounts |
| Retention experimentation roadmap | Retention Director | Quarterly (a literal job-posting artifact — Fox One, 2025) | ✅ backlog groomed by hand |
| Pricing/bundle test plan + results readout | Pricing council | Per test; months-long loops | ✅ cross-functional docs; results reconciled after the fact |
| Cohort retention curves / dormancy report | Insights | Monthly | ✅ warehouse SQL + BI |
| Cancel-save flow performance | Retention | Weekly | ✅ in-app + billing events stitched |

## Stage 6 — Pressures & politics

- **The streaming wars are over; the efficiency era is here:** subscriber growth cooled across major platforms; global OTT growth slowing to ~5% in 2026, under 2% by 2030; "profitability — not subscriber growth — is the headline metric" under shareholder pressure (InternetRetailing/AlixPartners/dialectica, 2026). Retention and tier diversification are the named priorities.
- **Content spend discipline:** content budgets returning to growth but at low single digits vs. former double digits (businesstats/ad-hoc-news, 2026) — you can no longer outspend churn with content; you have to out-operate it. Content exhaustion is already the #1 cancellation driver (34%).
- **Subscription fatigue + frenemy bundles:** consumer fatigue accelerates annual plans, bundles, ad tiers; ESPN+Fox 2026 joint bundle exemplifies "frenemy" collaborations (AlixPartners/Parrot, 2026). Bundling reduces churn 34% — pricing/packaging agility is now a competitive weapon.
- **Emotional layer:** the Retention Director owns a "retention experimentation roadmap" their batch stack can't run; Data Science watches monthly scores expire un-actioned ("probabilities nobody acts on"); Pricing waits months for test reads while competitors ship frenemy bundles; the CMO reports churn to a board that reads "profitability is the headline metric."
- **Throughline:** the industry spent a decade building prediction (churn models, rec engines, cohort analytics) and the marketing layer still runs on batch — "the data to predict it exists; the problem is connecting it to real-time action" (the hero, validated by the activation-gap literature).

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Director, Lifecycle/Retention Marketing | Monthly churn scores reach campaigns after the cancel; cancel-save and passive-churn programs run on stale segments (Fox/Crunchyroll posting language) | **Agentic Data Platform** (+ CO trigger) | Problem-aware (their job postings describe it) | Direct |
| Data Science / Churn Model Lead | Scores written back to CRM on schedule; activation is the under-resourced step; "probabilities nobody acts on" | **Agentic Data Platform** | Problem-aware | Direct |
| Growth / Win-back Manager | Sequences launch 30–60 days post-churn; best window ≤7 days; 24% resubscribe within 6 months anyway — timing wastes recoverable intent | **Audience Builder** | Problem-aware | Direct |
| Pricing / Packaging Owner | Bundle/pricing tests take months of cross-functional effort while frenemy bundles ship around them | **Campaign Orchestrator** (+ MI real-time results) | Solution-aware (experimentation tools exist; cohort-level automated offer testing doesn't) | Direct |
| Head of Content/Product (rec engine) | Recs run on historical preferences; content exhaustion drives 34% of cancellations | **Personalization** (coming soon) | Problem-aware | General |
| CMO / Head of Subscriber Growth | Board reads "profitability is the headline metric"; churn is the P&L lever | Full platform narrative | Problem-aware | General/narrative |

### Copy ingredients bank

**Cited stats:** Premium SVOD monthly churn ~4.6% (Antenna, 2025); streaming avg 6.3%/mo ≈ 54%/yr (RetentionCheck, 2026); 23% serial churners (Antenna); 24% cancel-and-resubscribe within 6 months, 40% Gen Z; content exhaustion = 34% of cancellations; best first win-back touch ≤24 hrs, golden window ≤30 days vs. 30–60-day practice; win-back recovers 8–15% of cancelled subs; non-discounted resubscribers stay 2.6x longer; bundling cuts churn 34%, family plans +52% retention; Disney/Hulu/Max bundle: 80% 3-month retention, 59% lower 12-month churn (Applause); ad tiers 28% of streaming sub revenue, +460% since 2020; OTT growth ~5% in 2026 → <2% by 2030; "profitability, not subscriber growth, is the headline metric" (2026).

**Named deliverables:** the monthly churn scoring run, the retention experimentation roadmap, the cancel-save flow, the lapsed-list pull, the win-back sequence, the pricing test readout, the cohort retention curve.

**Jargon glossary:** churn (active/passive), save rate, cancel-save, win-back window, dormancy, session depth, cohort, tenure, content affinity/exhaustion, ARPU, LTV, serial churner, ad tier, bundle, plan migration/upgrade path, payment recovery/involuntary churn, reactivation. NEVER: makegood, day-part, SKU, compset, principal review.

**Pressure hooks:**
1. "Your churn model knew in March. Your campaign found out in April."
2. "A quarter of cancelled subscribers come back within six months — your win-back email waits 60 days to ask."
3. "The streaming wars ended. The retention war didn't."

### Worked example openers

**Direct (Retention Director / ADP):** "Your data science team scores churn risk monthly. Your subscribers cancel daily. Kana's Agentic Data Platform connects the model's output to the Campaign Orchestrator, so the moment a risk score crosses threshold, the retention offer fires — not at the next batch run, after the cancel button's been clicked."

**General/narrative (CMO / platform):** "The streaming wars ended with a new headline metric: profitability. And the cheapest revenue in subscription media is the member you don't lose — churn models, rec engines, and cohort analytics already know who's leaving. The brands that win the efficiency era are the ones connecting that prediction to action while the subscriber is still deciding."

### Sources
Kana internal: Rayyan's M&E challenge/solution screenshot (2026-07-13, authoritative roster).
External: Antenna (Q1'26 State of Subscriptions; serial churners; resubscribe rates); RetentionCheck (churn benchmarks, 2026); SQ Magazine (streaming stats 2026); Deadline/NewscastStudio (churn stabilization); Hightouch (win-back timing); digitalapplied (2026 win-back playbook; churn model frameworks); Recurly/finsi/ProsperStack/RevenueCat (win-back practice); StreamingMedia/eMarketer (ad tiers, 2026); Yahoo Finance (US streaming market report, 2026); Marketing LTB (bundling/family-plan stats, 2026); Applause (Disney/Hulu/Max bundle retention); Fox One + Crunchyroll job postings (2025); Prometheus/CDP.com/Amplitude/Medium/AWS (churn model production patterns); improvado/Braze/Amplitude/Skyvia (martech/reverse-ETL stack, 2025–26); Stripe/Recurly/UniBee/Kameleoon (pricing experimentation); AlixPartners (streaming wars 2026 "frenemy"); InternetRetailing (streaming growth reset); businesstats (content spend); Parrot Analytics (2026 subscriber expectations); dialectica (profitability pivot).
