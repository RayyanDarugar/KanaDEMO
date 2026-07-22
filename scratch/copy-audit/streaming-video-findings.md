# Copy Audit — Streaming & Video (KFP) config.js vs. Product PRDs

**Summary:** 19 distinct capability claims checked across solutionRows, FAQ, personas, showcase, and stackShowcase. 18 flagged (17 OVERCLAIM, 1 hero framing also OVERCLAIM); 1 clean (stackShowcase.columns[0], Personalization — vague enough to stay as-is). Three systemic issues drive nearly all flags: (1) Personalization is described as firing offers automatically/in real time with no human involved, which the Marketers Personalization PRD explicitly forbids; (2) both Campaign Orchestrator rows on this page (ad-load intelligence, content ROI intelligence) describe capabilities the Publishers Campaign Orchestrator PRD lists as unbuilt, XL-effort backlog items scoped specifically against this page's own claims; (3) Audience Builder's "resolves identity across devices" claim and LLM Command Center's "be the answer when viewers ask an AI what to watch" claim each describe functionality the respective PRDs explicitly place out of scope or assign to a different product.

---

## solutions[0] — Personalization
**Current copy:** "Personalization triggers tailored retention offers and content recommendations the moment behavioral churn signals cross a risk threshold — automating the intervention that prevents cancellations before they happen. The gap between your data science team's churn model and your engagement platform's campaign send collapses to zero: signal in, tailored action out, same session."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals: "Never contacts a customer without human approval. The approve-and-activate gate is permanent; fully autonomous customer-facing sends are out of scope at any maturity level." Also §6.2 Out of Scope: "Always-on journey anomaly detection / event triggers — see White Space Backlog."
**Suggested fix:** "Personalization flags churn risk while there's still time to act and prepares the tailored retention offer or content recommendation for your team to approve — turning a warehouse risk score into a launch-ready intervention before the cancellation happens. The gap between your data science team's churn model and your engagement platform's campaign send closes to a single review-and-approve step, not a batch-export queue."
**Why:** The PRD makes human approval a permanent, non-negotiable gate and lists event-triggered/real-time firing as an unbuilt backlog item, so "automating," "fires... automatically," and "same session" all overstate the product.

## faq[0] — "We already have churn models. What does Personalization add?"
**Current copy:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to the intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation fires, automatically."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — same as above: permanent human-approval gate; event-triggers out of scope for MVP.
**Suggested fix:** "The action layer. Most platforms' churn scores land in a warehouse table and wait for a batch export before marketing can respond — and by then, at-risk subscribers have often already cancelled. Personalization connects the behavioral signal directly to a ready-to-send intervention: the moment a risk threshold is crossed, the tailored offer or content recommendation is drafted and waiting for your team to approve and launch."
**Why:** Same automatic/no-approval claim as the solution row, restated in FAQ form.

## personas[0].solution — Lifecycle / Retention Marketing Lead
**Current copy:** "Real-time behavioral monitoring with automated, tailored interventions — retention offers and content recommendations that fire the moment risk crosses threshold, not after the batch job."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals (human approval permanent); §6.2 Out of Scope (event triggers backlog).
**Suggested fix:** "Weeks-ahead churn-risk scoring with tailored interventions ready to approve — retention offers and content recommendations prepared the moment risk crosses threshold, so your team launches same-day instead of after the batch job."
**Why:** "Automated" interventions that "fire" contradicts the mandatory approval gate; "real-time... monitoring" overstates a scoring engine described elsewhere in the PRD as surfacing risk "weeks ahead," not on live event triggers.

## showcase.columns[0] — "Intervene before the cancellation, not after"
**Current copy:** "Behavioral churn signals trigger tailored offers and recommendations automatically — the retention infrastructure your churn model has been waiting for."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §4.2 Non-Goals: "Never contacts a customer without human approval... at any maturity level."
**Suggested fix:** "Behavioral churn signals surface tailored offers and recommendations ready to approve — the retention infrastructure your churn model has been waiting for."
**Why:** "Trigger... automatically" restates the same unsupported automatic-send claim.

## solutions[1] — Campaign Orchestrator (ad load)
**Current copy:** Title: "Ad load intelligence instead of fixed rules." Description: "Campaign Orchestrator surfaces ad load intelligence in real time, so ops and ad product teams can optimize delivery rules based on engagement signals and yield outcomes — without waiting on manual override cycles through a product backlog. Break frequency, pod structure, and interruption timing become decisions informed by the viewer in front of you, not policies set a quarter ago."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — White Space Backlog #7: "Content ROI & ad-load optimization (streaming) | ... kana.ai Streaming segment | Med | XL | TBD" (i.e., this exact page's claim is logged as unbuilt future work). Also §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value" and "Non-GAM connectors and non-display formats."
**Suggested fix:** "Campaign Orchestrator surfaces delivery risk and revenue-at-risk across your ad operations, so ops and ad product teams catch under-delivery and yield problems before they cost a makegood — without waiting on a stitched spreadsheet or a support ticket. Pacing decisions get made on evidence pulled straight from your ad server, not a quarterly review cycle."
**Why:** Ad-load/pod/break-frequency optimization for streaming is an explicit, unbuilt backlog item (XL effort), and the PRD scopes out both real-time ingestion and non-display ad formats — so this entire capability doesn't exist yet for this vertical.

## faq[1] — "Does Campaign Orchestrator replace our ad server?"
**Current copy:** "No — it's the intelligence layer on top of it. Your ad server keeps serving; Campaign Orchestrator surfaces real-time ad load intelligence and lets your ops and ad product teams optimize delivery rules on engagement signals and yield outcomes, instead of changing static configs through manual override cycles."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — same Backlog #7 + §6.2 Out of Scope citations above.
**Suggested fix:** "No — it's the intelligence layer on top of it. Your ad server keeps serving; Campaign Orchestrator watches delivery and yield against it, flags what's at risk with the revenue impact quantified, and lets your ops and ad product teams act on evidence instead of a stitched spreadsheet."
**Why:** Same ad-load/real-time claim as the solution row; the "no ad server replacement" framing is accurate and untouched, but the specific mechanism claimed after it isn't.

## faq[2] — "How does the content ROI intelligence actually work?"
**Current copy:** "Campaign Orchestrator synthesizes viewership, subscriber impact, and engagement data into title-level ROI intelligence as it accrues — informing in-flight optimization (what to promote, where) and future investment decisions (what to greenlight or renew). It's the difference between defending a renewal with last quarter's stitched dashboards and deciding with current evidence."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7 (same item covers "Content ROI... (streaming)"); §9 Data Requirements lists only GAM delivery/orders/line items/forecasts as CO's data — no viewership or subscriber-impact data source appears anywhere in the PRD.
**Suggested fix:** "Campaign Orchestrator answers content-adjacent delivery and yield questions your team used to wait a quarter for — ask which titles' campaigns are pacing and monetizing well right now, and get a grounded answer with drill-downs instead of a stitched dashboard."
**Why:** Title-level viewership/subscriber-impact ROI synthesis isn't in the PRD's data sources or MVP scope; it's the same unbuilt backlog item as the ad-load claim.

## personas[1].solution — Ad Product / Yield Manager
**Current copy:** "Real-time ad load intelligence that lets the team optimize delivery rules on engagement signals and yield outcomes — maximizing revenue without spending the viewer experience to get it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §6.2 Out of Scope (real-time ingestion, non-display formats).
**Suggested fix:** "Delivery-risk and revenue-at-risk intelligence that lets the team fix pacing and yield problems before they cost a makegood — protecting the viewer experience while they do it."
**Why:** Same ad-load/real-time mismatch as solutions[1].

## personas[2].solution — Director, Content Strategy & Insights
**Current copy:** "Viewership, subscriber impact, and engagement synthesized into content ROI intelligence — current evidence for in-flight optimization and the next greenlight decision."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §9 Data Requirements (GAM-only data sources).
**Suggested fix:** "Delivery and yield evidence pulled straight from your ad server, current as it accrues — a faster answer than a stitched dashboard when the greenlight conversation comes up."
**Why:** Same content-ROI mismatch as solutions[2] — CO has no viewership/subscriber-impact data pipeline per the PRD.

## showcase.columns[1] — "Price every ad break against the viewer in front of you"
**Current copy:** "Ad load intelligence in real time — engagement signals and yield outcomes steering break frequency and pod structure, instead of static rules and quarterly overrides."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §6.2 Out of Scope (real-time ingestion, non-display formats).
**Suggested fix:** "Delivery and yield intelligence, current as of this morning's sync — revenue-at-risk ranked worst-first, instead of static rules and quarterly overrides."
**Why:** Same ad-load/pod/real-time mismatch.

## showcase.columns[2] — "Know what a title is doing for the business — now"
**Current copy:** "Viewership, subscriber impact, and engagement synthesized continuously, so content investment decisions run on evidence instead of quarters-old retrospectives."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — Backlog #7; §9 Data Requirements (GAM-only).
**Suggested fix:** "Delivery and yield performance synthesized as it accrues, so ad operations decisions run on evidence instead of quarters-old retrospectives."
**Why:** "Continuously" restates the real-time claim; "viewership, subscriber impact" restates the unbuilt content-ROI data claim.

## stackShowcase.columns[1] — "Put intelligence on top of the ad server"
**Current copy:** "Campaign Orchestrator — real-time load, pacing, and yield intelligence over the delivery systems you already run, so optimization stops waiting on override cycles."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value."
**Suggested fix:** "Campaign Orchestrator — pacing and yield intelligence over the delivery systems you already run, current as of this morning's sync, so optimization stops waiting on override cycles."
**Why:** "Real-time" and "load" (ad-load) are the only unsupported words here; pacing/yield intelligence over existing delivery systems is accurate and kept.

## solutions[3] — Audience Builder
**Current copy:** Title: "One viewer, one profile — across every screen." Description: "A single viewer appearing as four different users across mobile, smart TV, laptop, and tablet fragments behavioral signals — making content personalization less relevant and ad targeting less precise and valuable. Audience Builder resolves identity signals across device environments into a unified viewer profile, improving both personalization accuracy and the quality of the audience segments you sell to advertisers."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today." White Space Backlog #3: "Real cross-device/cross-property identity resolution | ... effort drops from build-new to adapt | ... TBD" — confirms it's not shipped, only a candidate to adapt from a different product (Kana-CDP).
**Suggested fix:** "A single viewer appearing as four different users across mobile, smart TV, laptop, and tablet fragments behavioral signals — making content personalization less relevant and ad targeting less precise and valuable. Audience Builder turns your first-party viewer data into a sized, explorable audience in minutes, so the segments you build and sell to advertisers reflect real engagement instead of a fragmented, half-populated picture."
**Why:** Cross-device identity resolution is explicitly not built in Audience Builder today; the PRD's actual strength (fast, self-serve, traceable segment building from first-party data) supports a different claim.

## personas[3].solution — Data & Identity Lead
**Current copy:** "Identity signals resolved across device environments into one unified viewer profile — the substrate that makes personalization accurate and advertiser segments premium."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "First-party audience data turned into sized, explorable, traceable segments in minutes — the foundation that makes advertiser segments premium and defensible."
**Why:** Same cross-device identity resolution mismatch as solutions[3].

## stackShowcase.columns[2] — "Resolve identity once, benefit everywhere"
**Current copy:** "Audience Builder — a unified viewer profile that upgrades recommendations, ad targeting, and advertiser-facing segments from the same foundation."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Audience Builder — one first-party audience foundation that powers recommendations, ad targeting, and advertiser-facing segments alike."
**Why:** "Resolve identity once" restates the unbuilt cross-device/cross-property resolution claim; the underlying "one foundation, multiple uses" framing is fine without it.

## solutions[4] — LLM Command Center
**Current copy:** Title: "When viewers ask an AI what to watch, be the answer." Description: "Consumers increasingly ask AI assistants to find shows and content — and platforms that don't actively manage their presence in AI-generated recommendations risk losing organic discovery to competitors who do. The LLM Command Center monitors and optimizes how your streaming content appears across AI discovery environments, turning a passive distribution risk into an active, manageable competitive advantage."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — §4.2 Non-Goals: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." The product's actual scope (§1, §6.1) is bot-traffic monitoring and tiered content-access policy (Full/Summary/Highlights/Deny) for AI crawlers, plus licensing-evidence reporting.
**Suggested fix:** "When AI crawlers take your content for free, get paid or get out of the way. The LLM Command Center gives you visibility into every AI bot crawling your streaming library and lets you set the terms — what's fully accessible, what's summary-only, what's off-limits — turning an invisible traffic drain into a licensing conversation you control."
**Why:** The PRD explicitly assigns "how content appears in AI answers/recommendations" to a different product (AEO2); LLM Command Center's job is bot access governance and licensing evidence, not discovery optimization.

## hero.subheadline
**Current copy:** "Maximizing ad revenue and subscriber LTV while protecting the viewer experience that keeps subscribers engaged — neither goal is achievable on the batch workflows and manual ops models most platforms still run. Kana closes the gap between the signal and the action, in real time."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value." Kana_PRD_Marketers_Personalization_at_Scale_v2.md — §6.2 Out of Scope: "Always-on journey anomaly detection / event triggers."
**Suggested fix:** "Maximizing ad revenue and subscriber LTV while protecting the viewer experience that keeps subscribers engaged — neither goal is achievable on the batch workflows and manual ops models most platforms still run. Kana closes the gap between the signal and the action, without the data-team queue in between."
**Why:** The page's flagship products (Personalization, Campaign Orchestrator) both run on daily-batch/human-approval workflows per their PRDs, not real-time; the hero's "in real time" promise sets an expectation the underlying products explicitly don't meet yet.

---

## Checked and clean (no action)

- **stackShowcase.columns[0]** — "Personalization — churn-model outputs connected directly to intervention triggers, working with your existing engagement platform and warehouse instead of around them." VAGUE-BUT-FINE: doesn't explicitly claim automatic/unapproved firing, reads as compatible with a human-approval step.
