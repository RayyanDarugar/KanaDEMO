# Retail & Commerce Media Networks — Industry GTM Brief

**Date:** 2026-07-17 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** One of three publisher sub-vertical landing pages (Media Networks | Print/Digital/Audio | Streaming & Video), replacing the single Publishers page. Config-driven template per `industries/cpg/config.js` + `src/app.js`. Page copy to be written AFTER this brief, only from brief-traced claims.

---

## Stage 0 — Ground truth

### Confirmed Kana for Publishers roster (source: Rayyan's 2026-07-17 screenshots of kana.ai/kana-for-publishers — screenshots supersede all xlsx/PDF rosters per established workflow)

Suite framing: **"Kana for Publishers — Five Applications. One Agentic Intelligence Layer."** Hero: "Kana equips media companies, publishers, and ad network operators with agentic AI that accelerates revenue, streamlines operations, and delivers personalization at scale, across every segment of the media landscape."

| Application | Site description (Five Applications section) |
|---|---|
| **Sales Intelligence** | AI-powered intelligence for media sales teams: audience insights, competitive context, automated proposal creation built in. Includes the **Media Proposal Generator agent** (per Print/Digital/Audio tab, Challenge #3). |
| **Campaign Orchestrator** | Streamline campaign operations; real-time visibility for ops teams to optimize every campaign in flight, simultaneously, at scale. |
| **Media Proposal Generator** | ⚠️ Card description on site appears mismatched (carries Personalization's churn/LTV copy). Treat as: agentic proposal creation, listed both standalone and as an agent within Sales Intelligence. |
| **Audience Builder** | Unify first-party audience data across every touchpoint, resolve identity across devices, activate precision segments, premium packaging without data engineering overhead. |
| **LLM Command Center** | Turn AI-driven traffic into a managed strategic asset. Monitor how content and advertisers' brands appear in AI-generated responses; optimize for AI-era discovery. |
| **Personalization** | Not in the Five Applications grid but is a named solution on the Streaming and Print/Digital/Audio tabs. GA/live (confirmed by Rayyan 2026-07-15 — no "Coming Soon" label). |

### This page's ground truth: Media Networks tab (Retail & Commerce Media Networks)

Hero: **"Media Networks Are Undermonetizing Their First-Party Advantage."** Subhead: rich, purchase-linked first-party data, but fragmented audience infrastructure, slow sales cycles, and manual ops prevent competing at the scale of walled gardens.

| # | Challenge (verbatim from site) | Solution | Solution description (from site) |
|---|---|---|---|
| 1 | Closed-loop ROI measurement is too hard to prove at scale | **Sales Intelligence** | Integrates campaign delivery data with transaction signals; closed-loop attribution reporting sales teams use to defend and grow brand budgets in real time |
| 2 | RFP responses and proposal creation can't keep pace with demand | **Media Proposal Generator** | ⚠️ Site description mismatched (describes share-of-voice/sentiment monitoring). Challenge text is authoritative: proposal assembly takes sellers days, limiting deal volume vs. faster competitors |
| 3 | Audience data is fragmented across retail touchpoints | **Audience Builder** | Unifies first-party signals across all retail touchpoints into a coherent, activatable audience layer; premium audience packaging and precision targeting for advertisers |
| 4 | Campaign operations require manual effort to maintain visibility | **Campaign Orchestrator** | Automates campaign pacing, delivery monitoring, performance reporting; real-time visibility across every campaign in flight. Challenge names: retailer media planning, co-op budget tracking, shopper program performance managed in Excel |
| 5 | Brand safety and AI discovery are unmanaged risks | **LLM Command Center** | Monitors brand-safe inventory signals; tracks how advertiser and publisher brands appear across AI-generated content environments; governance risk → competitive differentiator |

### Scope note

This is the SELL side of retail media — the retailer/commerce company operating a media network (offsite/onsite/in-store ads sold to brand advertisers). Distinct from: the Retail & E-Commerce page (retailer as buy-side marketer, KFM suite) and the CPG page (the brands who BUY retail media). Memory already warns: "Retail Media Network is a separate KFP xlsx row — keep RMN sell-side personas OFF the retail page." This brief is that row.

**Kana angle (Stage 0):** The five challenge→solution mappings above are the page skeleton. Sales Intelligence anchors the measurement story (closed-loop attribution is the #1 challenge — new territory vs. the old publishers page where Campaign Orchestrator anchored). Audience Builder owns the fragmented-touchpoint story, Campaign Orchestrator the Excel-ops story, LLM Command Center the brand-safety/AI-discovery story, Media Proposal Generator the RFP-velocity story.

---

## Stage 1 — Industry economics

**Market size & concentration:** US retail media ad spend reaches **$71.09B in 2026, ~18% YoY growth** (eMarketer, Dec 2025 forecast); global market ~$165B in 2026 (vs. ~$140B in 2024). But the market is a barbell: **Amazon and Walmart capture over 89% of incremental retail media spending in 2026** (eMarketer, 2025), and by 2028 Amazon's retail media revenue (>$75B) will exceed the next-largest RMN by more than $65B. Every other network — grocers, specialty retailers, marketplaces, financial/commerce media — is fighting for the remaining ~11% of growth. This is exactly the site hero's "competing at the scale of walled gardens" pressure.

**Margin structure (why the C-suite cares):** Retail media is the highest-margin line in retail: **onsite sponsored products/display run 70–90% margins vs. 3–4% core retail margins**; offsite audience extension runs 20–40% because the network buys third-party inventory (MOART / Mirakl / osmos, 2025–26). Blended programs land ~60–70%. Proof at scale: **Walmart posted $6.4B global ad revenue in 2025 (+46%), with advertising + membership driving roughly one-third of adjusted operating income in a recent quarter**; Kroger's alternative-profit businesses produced $1.5B operating profit in FY2025 with Kroger Precision Marketing profit up 20%+ (earnings coverage, 2025–26). The RMN is no longer a side hustle — it's a structural earnings stream the CFO watches.

**Business models (2–4):**
1. **Onsite media** — sponsored products, display, video on the retailer's site/app. Highest margin, but inventory is finite (bounded by the retailer's own traffic).
2. **Offsite audience extension** — retailer first-party segments activated across programmatic display, social, CTV, email. **Offsite is the growth engine: forecast to grow 42.1% in 2025, ~3× the onsite rate, reaching 18.7% of US retail media spend by 2026** (eMarketer via osmos/Tinuiti); 60% of Walmart self-serve display spend in Q4 2025 went offsite (Tinuiti DABR).
3. **In-store retail media** — digital screens, audio, POS integrations; nascent but strategically loud.
4. **Data & services** — audience/data licensing, clean-room access, measurement services sold to brands.

**Value chain:** Brand advertisers (CPG & endemic brands; increasingly non-endemic) + their agencies (upstream demand) → RMN sales team (JBPs, co-op/trade budgets, RFPs) → RMN ad ops (onsite ad server + offsite DSP execution) → measurement/insights team (closed-loop attribution against transaction data) → the retailer's merchant organization (politically adjacent — trade dollars shifting to media create internal tension) → shoppers. Ad-tech enablers (Criteo, CitrusAd/Epsilon, Koddi, Topsort, Moloco) power many mid-market networks.

**What's structurally different from Kana's other verticals:** vs. Print/Digital publishers, the RMN's differentiator is not content but **purchase-linked first-party data and closed-loop measurement** — the network can, in principle, tie an impression to a SKU-level transaction, which no traditional publisher can. The buyer promise is proof, and the operational reality is that proof is manual. vs. the Retail & E-Commerce page (KFM): same company, opposite desk — this brief is the retailer SELLING media, not buying it.

**Kana angle (Stage 1):** The economics hand Kana its narrative: a 70–90% margin revenue line the CFO now counts on, growing 18% a year, where all the growth is being captured by two walled-garden-scale players who out-tool everyone else. Sales Intelligence attacks the proof gap (closed-loop attribution at scale is the walled gardens' moat), Audience Builder attacks the fragmented-touchpoint data layer that makes offsite extension (the 42%-growth format) possible, and Campaign Orchestrator attacks the manual ops that cap how many campaigns a lean RMN team can run. Position Kana as how the other 200 networks compete with Amazon/Walmart tooling without Amazon/Walmart headcount.

---

## Stage 2 — Org map

| Title | Tribe | Exists at an RMN? | Notes / false friends |
|---|---|---|---|
| VP / Head of Retail Media (sometimes GM, Retail Media; or reports to CMO / Head of E-commerce) | exec | ✅ core | Economic buyer; owns the media revenue target and internal buy-in; the person defending the RMN's P&L contribution to the CFO (Voyado launch guide, 2026) |
| Director, Retail Media Sales / Programmatic Sales Director | sales | ✅ core | Sells to CPG/endemic brands by category (Food & Bev, Beauty, Home…); many hired from agencies/ad sales (People Inc., Epsilon, Staples postings, 2025–26) |
| Retail Media Account Manager | sales/CS | ✅ core | Day-to-day brand contact; "translate performance insights into clear takeaways" in partnership with analytics (Home Depot Orange Apron Media, Kohl's postings, 2026) |
| Campaign Manager (sell-side) | ops | ✅ core | Manages delivery of a brand's campaign on network inventory — same sell-side false-friend as publishers: NOT a buy-side campaign manager |
| Ad Operations Specialist / Director of Ad Operations | ops | ✅ core | Campaign setup, trafficking, pacing, reporting, optimization; early-stage RMNs run this with ONE person, shifting to QA oversight as self-serve scales (Gable/Voyado, 2025–26) |
| Analytics / Insights Manager (Measurement Lead) | analytics | ✅ core | Produces attribution and closed-loop reporting; the team behind every ROAS number sales presents (Gable, 2025) |
| Director, Offsite / Audience Strategy | ops/analytics | ✅ growing | Dedicated offsite roles now appear in postings ("Director of Digital Media, Audience Strategy, and Offsite Retail Media") — offsite is the 42%-growth format |
| Technical Lead / Retail Media Product Manager | ops/tech | ✅ | Owns feeds, data pipelines, platform-vendor (Criteo/CitrusAd/Topsort) integration; often part-time/borrowed from e-comm engineering (Voyado, 2026) |
| Category Manager / Merchant | — (adjacent) | ⚠️ exists but NOT the buyer | The retailer's merchandising org. Politically adjacent: trade dollars shifting into media create merchant-vs-media tension. Never write copy to them on this page |
| Trade / Shopper Marketing Manager (brand side) | — (the customer) | ⚠️ exists but is the CLIENT | The person at the CPG brand who buys from the RMN — already covered on the CPG page. Sell-side copy references them as "your advertisers" |
| Yield Manager / Header-bidding roles | — | ❌ mostly | Traditional publisher yield stack doesn't map; monetization runs through the retail media platform + DSP/SSP partners |
| Editor / Audience Development | — | ❌ | No newsroom; content is product catalog + shopper experience |

**Talent-market ground truth:** Digiday (2025) calls retail media a "three-headed beast — part commerce, part retailer and part media company" driving a talent crunch: hiring managers chase people who understand in-store retail, media planning, audience segmentation, commerce, data, and ad tech simultaneously. Teams are small: launch guides recommend starting with five core roles (exec sponsor, sales, ad ops, analytics, technical lead).

**Kana angle (Stage 2):** Page personas: (1) Head of Retail Media — Sales Intelligence (defend/grow brand budgets with closed-loop proof); (2) Retail Media AE / Account Manager — Media Proposal Generator (RFP velocity) + Sales Intelligence; (3) Ad Ops / Campaign Manager — Campaign Orchestrator (the one-person ops team problem); (4) Analytics/Audience lead — Audience Builder (fragmented touchpoint data). The "five-role team wearing three heads" reality is the copy's emotional spine: these teams carry walled-garden expectations with a startup headcount. Vocabulary: JBPs, co-op/trade budgets, ROAS/iROAS, incrementality, closed-loop, endemic/non-endemic, clean rooms — note ROAS IS correct here (unlike print publishers) because the buyer conversation is performance-denominated.

---

## Stage 3 — Role profiles

### Retail Media Account Manager / Media Account Manager (e.g., 84.51°/Kroger, Home Depot Orange Apron Media postings, 2026)
- **Owns:** portfolio of brand-partner (CPG supplier) relationships; media plans, audience builds, post-campaign reporting and insights; "translate performance insights into clear takeaways and recommendations for partners."
- **Mon/Wed/Fri:** Monday — status calls with brand partners and their agencies, pull weekend campaign performance; Wednesday — build/QA mid-flight optimization recommendations with analytics, chase creative assets and trafficking status; Friday — assemble client-facing reporting decks and wrap-report analyses ("assisting with QA and validation of wrap report analyses" is literally in the 84.51° posting).
- **Workflow:** JBP/annual commitment → campaign brief from brand → media plan + audience selection → handoff to ad ops for trafficking → mid-flight pacing/performance reviews → wrap report → QBR → renewal/upsell.

### Ad Operations Specialist / Campaign Manager (sell-side)
- **Owns:** campaign setup, trafficking, pacing, optimization across onsite ad server + offsite DSP campaigns; often ONE person early on (Voyado, 2026).
- **Workflow ground truth (ProOps RMN operations guide, 2026):** four functions must move as one flow — sales books the deal → account management turns it into a trafficable brief → delivery/ad ops traffics, monitors, optimizes → finance invoices against delivered metrics. "The ones that stall are drowning in manual handoffs between sales, account management, and delivery that worked at ten campaigns and collapse at a hundred." The CRM-to-ad-server handoff is the classic manual break point.
- **Mon/Wed/Fri:** daily pacing checks across onsite sponsored products + display + offsite lines; Wednesday trafficking new campaigns from the AM queue; Friday delivery reporting to AMs/finance reconciliation.

### Measurement / Insights Lead (Analytics Manager)
- **Owns:** attribution methodology, closed-loop reporting, incrementality studies, clean-room collaborations; the ROAS numbers sales presents to brands.
- **Pain ground truth:** 94% of advertisers say they don't fully trust retailer-reported metrics; 71% now rank incrementality as their #1 retail media KPI, ahead of ROAS (industry research via AdExchanger/Marketing Week, 2025–26); incrementality methodology choices can shift results up to 6× across 42 analyzed campaigns (Albertsons Media Collective research). IAB released incremental-measurement guidelines for commerce media Nov 3, 2025 — standardization pressure is now formal.
- **Their week:** running match-rate/overlap analyses in the clean room, defending methodology to brand analytics teams, manually assembling closed-loop reports that join impression logs to transaction data per campaign.

### Head of Retail Media (economic buyer)
- **Owns:** the media revenue target, the JBP season (annual negotiation cycle where retail media has become "one of the most significant line items" — Skai/Criterion Global, 2025), platform vendor selection, and the internal politics of merchant vs. media trade dollars.
- **Cares about:** growing brand budgets year over year (which requires proof), scaling campaign volume without scaling headcount, and not losing deals to Amazon/Walmart-grade capabilities.

**Kana angle (Stage 3):** Sales Intelligence arms the AM + measurement lead for the exact conversation they lose today: defending retailer-reported numbers to a brand that 94%-doesn't-trust them — integrated delivery + transaction attribution in real time instead of a manually joined wrap report. Campaign Orchestrator is the answer to "worked at ten campaigns, collapses at a hundred": it automates the pacing/monitoring/reporting layer so one ad ops person scales. Media Proposal Generator compresses the JBP-season and RFP crunch. Audience Builder gives the analytics team segment-building without the data-engineering queue that clean-room fragmentation creates.

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Ad Ops / Campaign Manager | Retail media platform UI (Criteo, CitrusAd/Epsilon, Koddi, Topsort, Kevel, Moloco), GAM or white-label ad server for display, DSP for offsite (TTD/DV360), Excel | **The CRM-to-ad-server handoff is manual** (ProOps, 2026); pacing monitored by hand across onsite + offsite systems that don't share a dashboard; the site's own challenge copy: "retailer media planning, co-op budget tracking, and shopper program performance are managed in Excel — disconnected from brand and performance marketing systems" |
| Account Manager | Salesforce/CRM, the platform's reporting UI, PowerPoint/Google Slides, Excel | Wrap reports and QBR decks are assembled by hand from platform exports + transaction reports; "presentation-ready reports at scale" is a named unmet need (Burt Intelligence positioning, 2025) |
| Measurement / Insights | Clean room (Snowflake/LiveRamp/retailer-native), SQL, transaction/loyalty databases, Excel | Only 48% of US RMNs even offer clean-room capabilities; of clean-room users, 39% struggle to drive actionability and ~a third cite lack of internal expertise (Skai State of Data Clean Rooms, 2025). Closed-loop joins are bespoke per campaign |
| Head of Retail Media | Revenue dashboards (Looker/Tableau), OMS/CRM pipeline, JBP planning decks | Co-op/trade budget tracking lives in Excel between the merchant org and the media org; forecast = pipeline spreadsheet + platform delivery exports |
| Audience/Data lead | CDP, loyalty program database, e-comm analytics, identity-resolution vendor | Signals from e-commerce, in-store POS, app, and loyalty sit in separate systems (site challenge #3 verbatim); identity resolution across them is what makes "verified, high-fidelity audience packages" possible and is mostly unbuilt at mid-market RMNs |

**Kana angle (Stage 4):** Name the stack in copy: Criteo, the clean room, Salesforce, the DSP, and Excel — because Excel is the real system of record, and that's the wound. Kana's positioning is the intelligence layer ACROSS the platform stack (mirrors "works with what you've already built rather than replacing it" from the Five Applications intro — RMNs are platform-fatigued after Criteo/CitrusAd vendor churn, so no-rip-and-replace matters doubly here). Audience Builder = the identity/unification layer across e-comm, in-store, app, loyalty. Sales Intelligence = the closed-loop join done continuously instead of per-campaign SQL.

---

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Campaign wrap report (delivery + ROAS + basket outcomes) | Account Manager + Analytics | Per flight | ✅ platform exports + transaction joins + slide template; 84.51° posting names "QA and validation of wrap report analyses" as a job duty |
| QBR deck for brand partners | Account Manager | Quarterly | ✅ performance metrics, milestones, next steps assembled by hand per partner |
| JBP proposal / annual commitment plan | Head of Retail Media + Sales | Annual (JBP season) with in-year checkpoints | ✅ retail media is now "one of the most significant line items" in the JBP (Skai, 2025); built from pipeline sheets + rate cards + audience one-pagers |
| RFP response / media proposal | Sales + AM | Per RFP | ✅ site challenge verbatim: "pulling audience data, assembling category benchmarks, and formatting a proposal takes sellers days" |
| Closed-loop attribution report | Measurement lead | Per campaign / monthly | ✅ bespoke clean-room or SQL join of impressions to transactions; the thing 94% of advertisers don't fully trust |
| Incrementality study | Measurement lead | Per major partner / quarterly | ✅ methodology-sensitive (up to 6× swing); now the #1 KPI for 71% of advertisers |
| Daily pacing / delivery check | Ad Ops | Daily | ✅ across onsite platform + offsite DSP dashboards that don't share a view |
| Co-op / trade budget tracker | Head of Retail Media + finance (with merchant org) | Ongoing | ✅ Excel, verbatim from site challenge #4 — disconnected from brand and performance marketing systems |
| Audience segment one-pagers / audience packages | Audience lead + sales | Per deal | ✅ bespoke packaging of loyalty + e-comm + in-store signals that live in separate systems |
| Revenue forecast to CFO/exec | Head of Retail Media | Monthly/quarterly | ✅ CRM pipeline + platform delivery exports + finance actuals |

**Kana angle (Stage 5):** Named deliverables for openers: the wrap report, the QBR deck, JBP season, the incrementality study, the co-op budget tracker in Excel. Sales Intelligence turns the per-campaign closed-loop join into a continuous, defensible reporting layer (the renewal weapon for QBRs and JBPs). Campaign Orchestrator absorbs the daily pacing check and auto-generates the performance reporting AMs currently hand-build. Media Proposal Generator owns RFP-and-JBP-season velocity. Audience Builder produces the audience packages sales sells.

## Stage 6 — Pressures & politics

- **The proof crisis is existential to growth:** brands keep spending but don't believe the numbers — 94% don't fully trust retailer-reported metrics; 19% now call RMNs "a simple money grab for the retailer," more than double the 8% of a year earlier (industry survey via Forbes/AdExchanger, 2025). eMarketer (2025): the "retail media squeeze" — tariffs, budget cuts, and performance pressure mean every dollar must be defended. Networks that can't prove incrementality will lose JBP dollars to the two giants who can.
- **Walled-garden asymmetry:** Amazon + Walmart take 89% of incremental spend (eMarketer, 2025). Mid-market networks are expected to deliver Amazon-grade self-serve, measurement, and audience quality with a five-person team ("three-headed beast" talent crunch, Digiday 2025). This is the throughline "industry is changing" pressure for the narrative motion.
- **Internal politics — merchant vs. media:** retail media dollars are pooled from trade (36%) and shopper marketing (26%) budgets (Forrester, 2025) — money that historically belonged to the merchant/sales relationship. On the brand side, sales teams use retail media spend as shelf-space leverage, which means the RMN's counterparty often has conflicting incentives (Digiday, 2025). The Head of Retail Media lives between the CFO's margin expectations and the merchant org's turf.
- **Transparency & standardization pressure:** 88.3% of agency professionals say digital advertising needs more transparency (Basis 2026 agency report); IAB's commerce media measurement and incrementality guidelines (Nov 2025, V2 Jan 2026) turn ad-hoc methodology debates into formal compliance expectations. Standards exist now — adoption is the differentiator.
- **Agentic commerce is arriving fast:** AI platforms expected to account for $20.9B in retail spending in 2026, nearly 4× 2025 (eMarketer); ChatGPT handles ~50M daily shopping queries; Walmart reports ChatGPT drives ~2× as many NEW customers as traditional search (2026); McKinsey forecasts $900B–$1T US agentic-commerce revenue by 2030. For an RMN this cuts twice: (a) how advertisers' brands surface in AI answers is unmanaged, (b) the retailer's own product discovery is shifting to environments it doesn't control or monetize.
- **Emotional layer by persona:** Head of Retail Media = defending a revenue line the CFO now counts on, against distrustful buyers and giant competitors; AM = walking into QBRs with numbers the client's analytics team will attack; Ad Ops = the one-person team drowning as campaign count scales; Measurement lead = methodology defense fatigue.

**Kana angle (Stage 6):** Narrative arc for the page: you sit on the one asset walled gardens can't replicate — purchase-linked first-party data — but fragmented infrastructure and manual proof are letting the giants take 89% of the growth. Kana is the intelligence layer that makes a five-person network operate like a hundred-person one: continuous closed-loop proof (Sales Intelligence), automated ops (Campaign Orchestrator), unified audiences (Audience Builder), proposal velocity (Media Proposal Generator), and managed AI-era brand presence (LLM Command Center). Avoid doom-mongering the giants; frame as "compete at their scale without their headcount."

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Head of Retail Media / VP Retail Media | JBP dollars at risk: 94% of advertisers distrust retailer-reported metrics, 19% call RMNs a "money grab"; 89% of growth going to Amazon/Walmart; co-op budget tracking in Excel | **Sales Intelligence** (anchor) + Campaign Orchestrator | Problem-aware (lives the distrust in every renewal) | Direct (revenue-defense framing) |
| Retail Media Account Manager | Hand-built wrap reports and QBR decks from platform exports + transaction joins; "QA and validation of wrap report analyses" as a literal job duty (84.51° posting, 2026) | **Sales Intelligence** | Problem-aware | Direct |
| Sales / Programmatic Sales Director | Proposal assembly takes days (site challenge verbatim); JBP season crunch; RFP volume caps deal count | **Media Proposal Generator** | Solution-aware (proposal automation is a known category) | Direct |
| Ad Ops Specialist / Campaign Manager | Manual handoffs that "worked at ten campaigns and collapse at a hundred" (ProOps, 2026); pacing checked by hand across onsite platform + offsite DSP; one-person team | **Campaign Orchestrator** | Problem-aware | Direct |
| Audience / Data lead, Measurement lead | E-comm, in-store, app, loyalty signals in separate systems; only 48% of RMNs have clean rooms and 39% of users can't drive actionability; segment packaging is bespoke per deal | **Audience Builder** | Solution-aware (CDP/clean-room fatigue) | Direct |
| Head of Retail Media (second hat) + brand-safety owner | Advertisers scrutinize contextual adjacency + how brands appear in AI answers; AI platforms → $20.9B retail spending 2026; ChatGPT drives 2× new customers vs. search at Walmart — all unmanaged today | **LLM Command Center** | Unaware→problem-aware (category doesn't exist yet) | General/narrative ("agentic commerce is here" motion) |

### Copy ingredients bank

**Cited stats:**
- US retail media = $71.09B in 2026, ~18% YoY (eMarketer, Dec 2025); global ~$165B (2026)
- Amazon + Walmart capture 89% of incremental retail media spend in 2026 (eMarketer, 2025)
- Onsite margins 70–90% vs. 3–4% core retail; blended 60–70% (MOART/Mirakl/osmos, 2025–26)
- Walmart: $6.4B ad revenue 2025, +46%; ads + membership ≈ ⅓ of adjusted operating income (2026); Kroger alternative profit $1.5B FY2025, KPM profit +20% (2025–26)
- Offsite grew 42.1% in 2025 (~3× onsite), 18.7% of US retail media spend by 2026 (eMarketer/Tinuiti)
- 94% of advertisers don't fully trust retailer-reported metrics; 71% rank incrementality #1 KPI ahead of ROAS (2025–26)
- 19% of brands call RMNs "a simple money grab," up from 8% a year prior (2025)
- Incrementality methodology can shift measured results up to 6× (Albertsons Media Collective, 42-campaign analysis)
- IAB incremental-measurement guidelines for commerce media released Nov 3, 2025
- Trade budgets fund 36% of retail media spend, shopper marketing 26% (Forrester, 2025)
- Only 48% of US RMNs offer clean rooms; 39% of clean-room users struggle to drive actionability (Skai, 2025)
- 88.3% of agency professionals say digital advertising needs more transparency (Basis, 2026)
- AI platforms → $20.9B in retail spending 2026, ~4× 2025 (eMarketer); ChatGPT ~50M daily shopping queries; Walmart: ChatGPT drives ~2× new customers vs. traditional search (2026); McKinsey: $900B–$1T US agentic commerce by 2030
- Digiday (2025): RMN = "three-headed beast — part commerce, part retailer, part media company"; launch guides recommend five core roles

**Named deliverables for openers:** the wrap report, the QBR deck, JBP season, the incrementality study, the closed-loop attribution report, the co-op budget tracker (Excel), the daily pacing check, the audience one-pager.

**Jargon glossary (use in copy):** closed-loop, incrementality / iROAS, ROAS (valid here — performance-denominated buyers), JBP, co-op / trade dollars, shopper marketing, endemic / non-endemic advertisers, onsite / offsite / in-store, sponsored products, audience extension, clean room, match rate, loyalty signals, SKU-level attribution, self-serve, walled gardens, retail media platform (Criteo, Topsort, Koddi). NEVER: makegoods/eCPM-yield vocabulary as primary frame (that's traditional publisher), "category manager" as buyer.

**Pressure hooks (one-liners):**
1. "Amazon and Walmart are taking 89% of retail media's growth. Your data is just as good — your tooling isn't."
2. "94% of your advertisers don't fully trust the numbers you report. That's what's really capping your JBP."
3. "Your ops worked at ten campaigns. At a hundred, Excel is the bottleneck — and the buyer can tell."
4. "ChatGPT already sends Walmart twice as many new customers as search. Whose products is it recommending in your category?"

### Worked example openers

**Direct (Head of Retail Media / Sales Intelligence):** "Every QBR ends the same way: your ROAS slide, their analytics team's methodology questions, and a renewal that shrinks instead of grows. Kana's Sales Intelligence joins your delivery data to transaction signals continuously — so the closed-loop number you present is the one their team can't pick apart."

**General/narrative (agentic commerce / LLM Command Center):** "Retail media was built on owning the shelf — digital and physical. But the next shelf is an AI answer: ChatGPT already fields 50 million shopping queries a day and sends Walmart twice as many new customers as search. The networks that win the next five years will manage how brands appear in AI-generated environments the way they manage sponsored products today."

### Sources

- Kana ground truth: Rayyan's 2026-07-17 screenshots of kana.ai/kana-for-publishers (Media Networks tab, Five Applications, hero).
- eMarketer (2025–26): retail media forecast H1 2026 ($71.09B, 18%); Amazon/Walmart 89% concentration; offsite growth; retail media squeeze; clean-room FAQ; AI platform retail spending $20.9B. Statista (2026): global market size. MOART / Mirakl / osmos (2025–26): margin structure, revenue streams. Earnings coverage (2025–26): Walmart $6.4B/+46%, ⅓ operating income; Kroger $1.5B. Tinuiti DABR (2025): Walmart offsite mix. Digiday (2025): talent crunch "three-headed beast"; budget-control tension; trade/shopper budget sourcing (Forrester 36%/26%). Gable / Voyado / V2SA (2025–26): RMN team structure, five core roles. ProOps Consulting (2026): RMN ops scaling guide ("ten campaigns → hundred"). Job postings (2025–26): 84.51°/Kroger Media Account Manager; Home Depot Orange Apron Media AM; Kohl's; Staples Director Retail Media Platform; People Inc./Epsilon programmatic sales. AdExchanger / Marketing Week / Forbes (2025–26): ROAS distrust (94%, 71%, 19% money-grab), measurement crisis, standardization. Kevel/Albertsons Media Collective: 6× incrementality swing. IAB / IAB Europe (2025–26): commerce media measurement + incrementality guidelines. Skai (2025): State of Data Clean Rooms (48%, 39%); JBP mastery; budget allocation. Basis (2026): 88.3% transparency. eMarketer/McKinsey/Walmart via agentic-commerce coverage (2026): ChatGPT shopping stats. Osmos / Topsort / Kevel / Adweek (2025–26): platform landscape (Criteo, CitrusAd wind-downs, Topsort, Koddi).
