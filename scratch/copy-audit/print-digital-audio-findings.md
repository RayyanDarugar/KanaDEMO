# Copy Audit — Print/Digital/Audio Publishers (KFP) config.js

**Summary:** ~34 distinct product-capability claims checked across solutionRows, FAQ, personas, showcase, and stackShowcase. 20 flagged as OVERCLAIM (one of them — LLM Command Center — is a full product/description mismatch that repeats across 4 touchpoints). The rest were ACCURATE or VAGUE-BUT-FINE and are not listed below.

---

## solutions[0].description — Audience Builder
**Current copy:** "Audience Builder helps your team build, enrich, and activate first-party audience data as a product — precise audience packaging for direct-sold campaigns without a data engineering overhaul. Segments are built in plain language and trace from brief to activation, so the deals your data was supposed to close stop waiting in an engineering queue."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — Non-Goals: "Not a CDP/DMP or system of record. Audience Builder reads the publisher's warehouse and stores only definitions and derived segments." Out of Scope: "Live ad-platform activation APIs (Meta/TikTok/etc.) — simulated today in both sources." White Space Backlog #1 lists live activation as unbuilt.
**Suggested fix:** "Audience Builder helps your team build, enrich, and package first-party audience data as a product — precise audience packaging for direct-sold campaigns without a data engineering overhaul. Segments are built in plain language and trace from brief to proposal, so the deals your data was supposed to close stop waiting in an engineering queue."
**Why:** "Activate" implies live push into ad platforms, which the PRD explicitly scopes as simulated/backlog, not an MVP capability.

## personas[0].solution.description — Audience Builder
**Current copy:** "Build, enrich, and activate first-party audiences in plain language — premium packaging for direct-sold campaigns without a data engineering overhaul."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — same as above (Non-Goals + Backlog #1).
**Suggested fix:** "Build, enrich, and package first-party audiences in plain language — premium packaging for direct-sold campaigns without a data engineering overhaul."
**Why:** Same "activate" overclaim as solutions[0].

## showcase.columns[0].description — Audience Builder
**Current copy:** "First-party segments packaged and activated for direct-sold campaigns — the premium, post-cookie ad product advertisers are asking for, built without an engineering project."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — Out of Scope: "Live ad-platform activation APIs... simulated today."
**Suggested fix:** "First-party segments packaged and proposal-ready for direct-sold campaigns — the premium, post-cookie ad product advertisers are asking for, built without an engineering project."
**Why:** Same activation overclaim.

---

## solutions[1].title — LLM Command Center
**Current copy:** "See — and shape — how your content appears in AI answers"
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content. One edge substrate, two products — the boundary holds even where infrastructure is shared."
**Suggested fix:** "See — and control — who's crawling your content, and on what terms"
**Why:** This is literally the capability the PRD assigns to a different product (AEO2); LLM Command Center's job is bot governance, not answer-appearance monitoring.

## solutions[1].description — LLM Command Center
**Current copy:** "The LLM Command Center monitors how your content appears in AI-generated responses across major LLMs, identifies coverage and accuracy gaps, and surfaces the opportunities to optimize for AI-era discovery and attribution. The traffic your search team spent two decades winning is being re-decided inside AI answers; this is the instrument panel for winning it there too."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Executive Summary: "Give publishers monitoring, control, and monetization of AI crawler traffic: a bot-intelligence dashboard, plain-English tiered content-access policies... and consumption intelligence for licensing." Non-Goals (as above) explicitly excludes answer-appearance monitoring from this product's scope.
**Suggested fix:** "The LLM Command Center shows you which AI crawlers are pulling your content, lets you set plain-English access policies by content tier, and turns that activity into evidence for licensing conversations. The traffic your search team spent two decades winning is now being harvested by bots instead of read by people; this is the instrument panel for setting the terms of that trade."
**Why:** Every clause in the current copy (appearance in AI answers, coverage/accuracy gaps, discovery/attribution optimization) describes the sibling AEO2 product, not LLM Command Center's actual bot-governance and licensing-intelligence functions.

## faq[1] — "What does the LLM Command Center actually monitor?"
**Current copy:** "How your content appears in AI-generated responses across major LLMs — where you're cited, where you're absent, and where the answer misrepresents your reporting. It identifies coverage and accuracy gaps and surfaces concrete opportunities to optimize content for AI-era discovery and attribution, so your response to the search-traffic shift is a managed program instead of a guess."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same line as above: appearance-in-AI-answers monitoring is AEO2's domain, not this product's.
**Suggested fix:** "Which AI bots are crawling your content, how often, and what they're taking — training, RAG, search, or research. You set plain-English access policies by content tier and provider, and every crawl becomes evidence you can bring to a licensing conversation, so your response to AI crawlers is a managed program instead of a guess."
**Why:** Same mismatch — this FAQ answer describes AEO2, not the product it's attached to.

## personas[1].solution.description — LLM Command Center
**Current copy:** "Monitors your presence across AI-generated responses, flags coverage and accuracy gaps, and turns AI-era discovery into a discipline your team runs — the way it once ran SEO."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same citation.
**Suggested fix:** "Monitors AI crawler activity across your properties, lets you set access policy by content tier, and turns AI consumption into a discipline your team runs — and a licensing case you can make."
**Why:** Same mismatch, repeated in the persona block.

## showcase.columns[2] — LLM Command Center
**Current copy:** Title: "Win the answer, not just the ranking" / Description: "Coverage and accuracy across AI-generated responses, monitored and optimized — so the discovery shift becomes a program you manage instead of a chart you dread."
**Verdict:** OVERCLAIM (product/description mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — Non-Goals, same citation.
**Suggested fix:** Title: "Control the crawl, not just the ranking" / Description: "AI crawler activity monitored and governed by content tier — so the discovery shift becomes a program you manage instead of a chart you dread."
**Why:** Fourth and final repetition of the same product/description mismatch — this touchpoint also links to "LLM Command Center" but describes AEO2's job.

---

## personas[2].solution.description — Sales Intelligence
**Current copy:** "Audience insights, competitive context, and the Media Proposal Generator agent in one workspace — data-backed, tailored proposals in minutes, more deals pursued with the same desk."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — Out of Scope: "Competitive tracker — whitespace, needs discovery + its own scoping (see White Space Backlog)." Backlog #1: "Competitive tracker (advertiser/competitor spend & creative monitoring) | Whiteboard: 'need to build'; no source app."
**Suggested fix:** "Audience insights, category context, and the Media Proposal Generator agent in one workspace — data-backed, tailored proposals in minutes, more deals pursued with the same desk."
**Why:** Competitive tracking is explicitly unbuilt whitespace, not a current capability; "category context" (from the research brief) is what the PRD actually supports.

## stackShowcase.columns[2].description — Sales Intelligence
**Current copy:** "Sales Intelligence — audience insights, competitive context, and automated proposal creation grounded in your real inventory and analytics, standardized across the desk."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — same Out of Scope / Backlog #1 citation.
**Suggested fix:** "Sales Intelligence — audience insights, category context, and automated proposal creation grounded in your real inventory and analytics, standardized across the desk."
**Why:** Same unbuilt "competitive" capability claim.

---

## solutions[3].description — Personalization
**Current copy:** "Personalization monitors subscriber engagement signals in real time, identifies churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — Out of Scope: "Always-on journey anomaly detection / event triggers"; Backlog #2: "Always-on anomaly detection + event triggers | Page #3; batch-only today." Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent; fully autonomous customer-facing sends are out of scope at any maturity level."
**Suggested fix:** "Personalization monitors subscriber engagement signals, identifies churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. Your paywall stack optimizes the conversion moment; this is the layer for everything after it — the engagement cliffs, renewal windows, and content gaps where subscribers quietly decide to leave."
**Why:** The PRD's own backlog flags "real-time"/always-on as a page claim not yet true ("batch-only today"), and offers are approved by a human, not auto-triggered.

## faq[0].a — "How is Personalization different from our paywall and subscription tools?"
**Current copy:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals in real time, flags churn-risk indicators early, and triggers tailored retention offers and content experiences before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same "batch-only today" (Backlog #2) and permanent human-approval gate (Non-Goals) citations.
**Suggested fix:** "Paywall platforms optimize the conversion moment — who sees which offer on the way in. Personalization works on everything after: it watches post-subscribe engagement signals, flags churn-risk indicators early, and recommends tailored retention offers and content experiences your team approves before cancellation intent solidifies. It complements your existing subscription stack rather than replacing it."
**Why:** Same real-time/autonomous-trigger overclaim, repeated in the FAQ.

## personas[3].solution.description — Personalization
**Current copy:** "Real-time engagement monitoring that catches churn-risk indicators early and triggers tailored offers and content experiences before cancellation intent solidifies."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations as above.
**Suggested fix:** "Engagement monitoring that catches churn-risk indicators early and recommends tailored offers and content experiences your team approves before cancellation intent solidifies."
**Why:** Same overclaim repeated a third time.

## showcase.columns[1].description — Personalization
**Current copy:** "Engagement signals monitored in real time, churn risk caught early, and tailored retention offers triggered before cancellation intent solidifies — not after the cohort report."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations.
**Suggested fix:** "Engagement signals monitored, churn risk caught early, and tailored retention offers recommended and approved before cancellation intent solidifies — not after the cohort report."
**Why:** Same overclaim, fourth occurrence.

## stackShowcase.columns[1].description — Personalization
**Current copy:** "Personalization — real-time engagement signals connected to offer triggers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same citations.
**Suggested fix:** "Personalization — engagement signals turned into approved retention offers, working alongside your paywall, billing, and email platforms instead of replacing them."
**Why:** Same overclaim, fifth and final occurrence; also tightened to describe the outcome rather than the trigger mechanics.

---

## solutions[4].description — Campaign Orchestrator
**Current copy:** "Managing delivery, pacing, and performance reporting across five formats simultaneously creates significant ops overhead — and manual errors damage advertiser relationships and renewal rates. Campaign Orchestrator automates campaign monitoring, pacing alerts, and cross-format performance reporting, so the Friday recap deck assembles itself and your team manages exceptions instead of dashboards."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Out of Scope: "Non-GAM connectors and non-display formats." Backlog #6: "Audio/newsletter/podcast delivery formats | kana.ai Publishers page cross-format claim | Med | L | TBD." Risk log: "Website promises auto-adjustment + real-time that MVP doesn't deliver → sales/expectation mismatch."
**Suggested fix:** "Managing delivery, pacing, and performance reporting across every format creates significant ops overhead — and manual errors damage advertiser relationships and renewal rates. Campaign Orchestrator automates monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory, so the Friday recap deck assembles itself and your team manages exceptions instead of dashboards."
**Why:** The PRD's MVP is GAM/display only; the PM's own risk log names this exact cross-format claim as a page-vs-code gap.

## faq[2] — "Can Campaign Orchestrator really handle audio and newsletter inventory alongside display?"
**Current copy:** "Yes — that's the point. It automates monitoring, pacing alerts, and performance reporting across display, native, newsletter, audio, and podcast inventory simultaneously, so cross-format sponsorships stop requiring a person to reconcile five dashboards into one recap deck."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same Out of Scope + Backlog #6 citation; this is the single largest page-vs-code gap the PRD calls out for this product.
**Suggested fix (reframe as an honest roadmap answer):** Q: "Does Campaign Orchestrator only work with Google Ad Manager?" A: "Today, yes — it's built and proven on GAM, automating monitoring, pacing alerts, and performance reporting across your display and native inventory so you're not reconciling dashboards by hand. Coverage for newsletter, audio, and podcast inventory is on our roadmap as we extend beyond GAM."
**Why:** This is the most direct overclaim on the page — a yes/no FAQ affirmatively promising a capability the PRD explicitly scopes out for MVP.

## personas[4].solution.description — Campaign Orchestrator
**Current copy:** "Automated monitoring, pacing alerts, and cross-format performance reporting — delivery accuracy up, manual burden down, recap decks that build themselves."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same citations.
**Suggested fix:** "Automated monitoring, pacing alerts, and performance reporting on your Google Ad Manager inventory — delivery accuracy up, manual burden down, recap decks that build themselves."
**Why:** Same GAM-only overclaim repeated in the persona block.

## stackShowcase.columns[0].description — Campaign Orchestrator
**Current copy:** "Campaign Orchestrator — monitoring, pacing alerts, and cross-format reporting across display, native, newsletter, audio, and podcast inventory, connected to the platforms that serve them."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same citations.
**Suggested fix:** "Campaign Orchestrator — monitoring, pacing alerts, and performance reporting across your Google Ad Manager inventory, with newsletter, audio, and podcast coverage on the roadmap."
**Why:** Same overclaim, final occurrence.

## stackShowcase.subtitle
**Current copy:** "Connects to Google Ad Manager, Salesforce, your email and podcast platforms, and your subscription stack — no rip-and-replace, no engineering queue, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Out of Scope: "Non-GAM connectors and non-display formats"; Backlog #6 names podcast/newsletter connectivity as unbuilt.
**Suggested fix:** "Connects to Google Ad Manager, Salesforce, your email platforms, and your subscription stack — no rip-and-replace, no engineering queue, no new governance gaps."
**Why:** "Podcast platforms" is not a current connection per the Campaign Orchestrator PRD; dropping it removes the only unsupported item in an otherwise accurate integration list.

---

### Claims checked but NOT flagged (for reference, no action needed)
- Audience Builder: "without a data engineering overhaul," "built in plain language," traceability claims — accurate per PRD §7.1–7.4 and Non-Goals.
- Sales Intelligence: "Media Proposal Generator agent" framing, "proposals in minutes" — MPG has its own PRD not reviewed here, but the SI PRD confirms MPG is same-app-family; treated as reasonable extrapolation, not flagged.
- Personalization: churn-risk detection, subscriber-engagement monitoring (minus "real time"/"triggers") — supported by the shared NBA/churn-scoring engine described in the Personalization PRD.
- All stats-bar figures, pain-point descriptions, and hero/nav copy — either external citations or general problem framing not tied to a specific product capability claim.
