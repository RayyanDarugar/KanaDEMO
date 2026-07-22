# Media Networks (KFP) — Copy Accuracy Audit

**Summary:** 18 distinct capability-claim locations checked across solutionRows, personas, showcase, stackShowcase, and FAQ. 5 were clean (Media Proposal Generator's solutionRow, persona, and both FAQ entries not tied to Sales Intelligence's closed-loop claim; Audience Builder's stackShowcase column). 13 were flagged as OVERCLAIM. The single biggest issue is systemic: **Sales Intelligence's "closed-loop attribution" claim repeats across 5 separate locations** (solutionRow, FAQ, persona, showcase, stackShowcase) and contradicts the Sales Intelligence PRD, which explicitly scopes closed-loop ROI attribution OUT of MVP (data contract only, "no pipeline"). A second systemic issue: **Audience Builder's "unifies signals across touchpoints" claim** (3 locations) contradicts AB's explicit non-goal that cross-property identity resolution is not built. A third, previously-unflagged **product/PRD mismatch**: the **LLM Command Center** card describes brand-side AEO monitoring (how brands appear in AI answers) — which the LLM Command Center PRD explicitly assigns to a *different* product ("Not the brand-side AEO product... that's AEO2's domain") — rather than LLM CC's actual job of AI-crawler bot governance and content-licensing intelligence.

Good news: the two previously-flagged Media Proposal Generator mismatches (churn/LTV copy, share-of-voice/sentiment copy) are **not present** in the current config — the MPG solutionRow, persona, and title all correctly describe proposal generation and check out clean against the MPG PRD.

---

## solutions[0] — Sales Intelligence (title + description)
**Current copy:** "Closed-loop proof your advertisers' analytics teams can't pick apart" / "Sales Intelligence integrates campaign delivery data with your transaction signals continuously, generating closed-loop attribution reporting your sales and account teams can use to defend and grow brand budgets in real time. Instead of a bespoke SQL join per wrap report, the impression-to-purchase connection is always on — so the ROAS number you present at the QBR is the one that survives the client's methodology questions and grows the JBP instead of shrinking it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — "This is the least-built app in the suite... the largest components are whitespace." §4.2 Non-Goals is silent on closed-loop (it's not even a non-goal, it's just absent from scope); §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP (see White Space Backlog)." §10 Backlog #2: "Closed-loop advertiser ROI attribution (exposure ↔ outcome) | kana.ai Web page; nothing in code | High | XL | TBD." §4.1 Goals: "Agree the delivery-data handoff spec with Campaign Orchestrator... so the future advertiser-ROI reporting can be built without re-plumbing — spec only in MVP, no pipeline."
**Suggested fix:** "Account intelligence your advertisers' analytics teams can't out-argue" / "Sales Intelligence arms your account teams with a source-verified brief on every advertiser — spend signals, category context, and prior campaign history — plus a win-likelihood score grounded in your network's own proposal outcomes. Instead of walking into the QBR with a hand-built deck, your team walks in with the account intelligence that defends the budget and sets up the next ask."
**Why:** The PRD is explicit that closed-loop delivery-to-transaction attribution is not built and is data-contract-only in MVP; the actual MVP capabilities are advertiser research briefs and win-likelihood scoring, which the fix uses instead.

## faq[1] — "How does Sales Intelligence produce closed-loop reporting?"
**Current copy:** Q: "How does Sales Intelligence produce closed-loop reporting?" A: "It integrates campaign delivery data with your transaction signals continuously, rather than joining them per campaign in a clean room or SQL project. That means attribution reporting is available in real time across every campaign — the same numbers for your account managers' QBR decks, your sellers' renewal conversations, and your advertisers' analytics teams."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP." §12.3 Open Question: "What exactly does the suite page's 'closed-loop attribution' commit us to for v1?" (i.e., still unresolved at PRD sign-off).
**Suggested fix:** Q: "How does Sales Intelligence help my team defend budgets at the QBR?" A: "It builds a source-verified brief on every advertiser — spend signals, category context, and history with your network — and scores each opportunity against your own win/loss record. Your account managers walk into the QBR with the same grounded numbers your sellers use in renewal conversations, instead of a deck assembled by hand the night before."
**Why:** The FAQ's premise (closed-loop delivery-to-transaction reporting exists today) is the same unsupported claim as the solutionRow; the fix answers the underlying seller need (defensible QBR numbers) using capabilities the PRD actually confirms.

## personas[0] — Head of Retail Media / solution.description
**Current copy:** "Continuous closed-loop attribution that connects delivery to transactions in real time — defensible numbers for every renewal, QBR, and JBP negotiation, without a measurement project per advertiser."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "A source-verified advertiser brief and win-likelihood score for every account — defensible intelligence for every renewal, QBR, and JBP negotiation, without a research project per advertiser."
**Why:** Same closed-loop overclaim; replacement swaps in the research-brief and win-likelihood scoring capabilities the PRD confirms as MVP scope.

## showcase.columns[0] — "Prove it while they're still deciding"
**Current copy:** "Closed-loop attribution that runs continuously across every campaign — so account teams walk into QBRs with numbers that hold up, and renewals grow instead of shrink."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "Account intelligence and win-likelihood scoring built from your own proposal history — so account teams walk into QBRs with numbers that hold up, and renewals grow instead of shrink."
**Why:** Same closed-loop overclaim as the other four instances of this claim on the page.

## stackShowcase.columns[0] — "Turn transaction data into a renewal weapon"
**Current copy:** "Sales Intelligence — delivery data joined to purchase signals continuously, not per campaign. Closed-loop reporting becomes something your network is known for, not something your analysts survive."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Sales_Intelligence_v3.md — §6.2 Out of Scope: "Closed-loop ROI attribution — define data contract only in MVP."
**Suggested fix:** "Turn account intelligence into a renewal weapon" / "Sales Intelligence — a verified brief and win-likelihood score on every advertiser, built from your own history. Renewal season becomes something your network is known for, not something your analysts survive."
**Why:** Fifth and last instance of the closed-loop overclaim; title changed too since "transaction data...joined" restates the same unsupported mechanism.

---

## solutions[2] — Audience Builder (description, second sentence)
**Current copy:** "Audience Builder unifies first-party signals across all of your retail touchpoints into a coherent, activatable audience layer — premium packaging and precision targeting without a data engineering project per deal."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today." §10 Backlog #3 confirms real cross-device/cross-property identity resolution doesn't exist yet in AB (an adjacent product's resolver is cited as a future adoption candidate). §4.2 Non-Goals: "Not a CDP/DMP or system of record... we are not replacing their data infrastructure."
**Suggested fix:** "Audience Builder turns a plain-language brief into a precise, sized, activatable segment in minutes — premium packaging and precision targeting without a data engineering project per deal."
**Why:** AB queries whatever first-party data a publisher has already connected; it does not itself perform the cross-property stitching that "unifies... across all touchpoints" implies, which the PRD lists as explicitly out of scope.

## personas[3] — Audience & Measurement Lead / solution.description
**Current copy:** "Unifies first-party signals across all retail touchpoints into one activatable audience layer, so premium audience packages are assembled from a coherent foundation instead of stitched per deal."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Turns a plain-language brief into a precise, sized, activatable segment against your first-party data in minutes, so premium audience packages are assembled without a data-engineering queue instead of stitched per deal."
**Why:** Same cross-touchpoint unification overclaim; replacement keeps the "no data-engineering queue" benefit the PRD does support.

## showcase.columns[2] — "Package audiences advertisers can't get anywhere else"
**Current copy:** "Purchase-linked, loyalty-verified segments unified across e-commerce, in-store, and app — the audience quality that justifies premium CPMs, without the data engineering queue."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Audience_Builder_v1.md — §6.2 Out of Scope: "Cross-property identity resolution — no real IR anywhere today."
**Suggested fix:** "Purchase-linked, loyalty-verified segments built from your first-party data in minutes, fully traceable back to the brief that shaped them — the audience quality that justifies premium CPMs, without the data engineering queue."
**Why:** Same overclaim; replacement substitutes the PRD-confirmed traceability/speed benefits (brief → sized, explorable segment in under 15 minutes, permanently traceable) for the unsupported cross-touchpoint unification claim.

---

## solutions[3] — Campaign Orchestrator (description)
**Current copy:** "Campaign Orchestrator automates campaign pacing, delivery monitoring, and performance reporting across your onsite and offsite campaigns, giving your ops team real-time visibility into every campaign in flight without the manual overhead."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — three separate contradictions: (1) autonomy — §4.2 Non-Goals: "Never fully autonomous... Unattended write-back to a customer's ad server is a permanent trust boundary"; §6.2 Out of Scope: "Auto delivery adjustment / GAM write-back — recommend-only in MVP (reason: safety + trust; no write scaffolding exists)." (2) real-time — §6.2 Out of Scope: "Streaming/real-time ingestion — daily batch sufficient to prove value"; success metric is "≤24h," not real-time. (3) onsite/offsite — §8 Integrations: "MVP (GAM only)"; §6.2 Out of Scope: "Non-GAM connectors and non-display formats." The PRD's own Risk register (§12.2) flags this exact gap: "Website promises auto-adjustment + real-time that MVP doesn't deliver → sales/expectation mismatch."
**Suggested fix:** "Campaign Orchestrator monitors delivery pacing across your campaigns and flags what's at risk before it becomes a miss, giving your ops team a daily view of exceptions instead of a portfolio of dashboards to check by hand."
**Why:** "Automates pacing," "real-time," and "onsite and offsite" each claim a capability the PRD explicitly excludes (autonomous write-back, real-time ingestion, and non-GAM/offsite coverage); the PRD itself flags this as the page's biggest expectation-mismatch risk.

## personas[2] — Ad Operations / Campaign Manager / solution.description
**Current copy:** "Automated pacing, delivery monitoring, and reporting across every campaign in flight. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §4.2 Non-Goals: "Never fully autonomous"; §6.1 MVP Scope confirms pacing is computed and flagged, not adjusted ("Recommended actions with the human executing in GAM").
**Suggested fix:** "Pacing risk flagged and explained across every campaign in flight, with reporting handled for you. The team manages exceptions instead of checking everything by hand — the difference between ten campaigns and a hundred."
**Why:** "Automated pacing" reads as Kana adjusting delivery itself; the PRD's guardrail is recommend-only, human-executed.

## showcase.columns[1] — "Run a hundred campaigns with the team you have"
**Current copy:** "Pacing, delivery, and reporting handled by agents across onsite and offsite — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §4.2 Non-Goals: "Never fully autonomous"; §8: "Integrations & Interoperability | MVP (GAM only)."
**Suggested fix:** "Pacing risk flagged and explained daily, with reporting handled for you — your ops team reviews exceptions instead of rebuilding the same spreadsheet every morning."
**Why:** "Handled by agents" implies autonomous execution (recommend-only per PRD), and "onsite and offsite" implies coverage beyond the GAM-only MVP.

## stackShowcase.columns[1] — "Get campaign ops out of Excel"
**Current copy:** "Campaign Orchestrator — media planning, pacing, and performance reporting connected to the systems that deliver the campaigns, so co-op budgets and shopper programs stop living in disconnected spreadsheets."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Publishers_Campaign_Orchestrator_v1.md — §9 Data Requirements lists only GAM delivery/orders/line-items/forecasts and pacing thresholds; there is no co-op budget, shopper-program, or media-planning data asset anywhere in the PRD's scope, data requirements, or functional requirements.
**Suggested fix:** "Campaign Orchestrator — pacing risk, delivery monitoring, and performance reporting connected to the systems that deliver your campaigns, so the daily portfolio check stops living in disconnected spreadsheets."
**Why:** "Media planning," "co-op budgets," and "shopper programs" are retail-media-specific concepts absent from CO's GAM-scoped data requirements and functional scope; the fix keeps the "out of spreadsheets" benefit without naming unsupported capabilities.

---

## solutions[4] — LLM Command Center (roleLabel + title + description) — PRODUCT/PRD MISMATCH
**Current copy:** roleLabel: "Built for Revenue & Brand-Safety Leads" / title: "Brand safety and AI discovery, managed instead of hoped for" / description: "Brand advertisers increasingly scrutinize contextual adjacency and how their brands appear in AI answer environments — and AI platforms are on track for $20.9 billion in retail spending in 2026. The LLM Command Center monitors brand-safe inventory signals and tracks how advertiser and publisher brands appear across AI-generated content environments, turning a governance risk into a competitive differentiator you can put in front of buyers."
**Verdict:** OVERCLAIM (product/PRD mismatch)
**PRD citation:** Kana_PRD_Publishers_LLM_Command_Center_v3.1.md — §4.2 Non-Goals, first bullet: "Not the brand-side AEO product. Measuring how brands appear inside AI answers is AEO2's domain; this product governs how AI systems access the publisher's content." LLM Command Center's actual scope (§1, §6.1): a bot-intelligence dashboard on real crawler traffic, plain-English tiered content-access policies (Full/Summary/Highlights/Deny) authored conversationally, edge enforcement of those policies, and consumption reporting used as licensing-negotiation evidence. Persona is "Content Ops / Data Governance Lead" / "Chief Digital Officer / Head of Content Strategy" (§5), not a brand-safety role.
**Suggested fix:** roleLabel: "Built for Content Ops & Revenue Leads" / title: "AI crawlers are already reading your content. Decide what they get." / description: "47+ AI bots crawl your properties around the clock, and today the choice is all-or-nothing — robots.txt either hands them everything or blocks them outright. The LLM Command Center gives you plain-English, per-section policies — full access, summary, highlights, or deny, by bot and by property — plus the consumption reporting you need to bring a licensing conversation to the table instead of giving your content away for free."
**Why:** The current copy describes AEO2 (the brand-side product that tracks how brands appear inside AI answers), which the LLM Command Center PRD explicitly disclaims as a different product's job — this is exactly the named-product/wrong-capability mismatch pattern flagged for review, just on a different card than the two previously caught.
