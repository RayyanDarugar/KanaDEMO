# Publishers (Print / Digital / News) — Industry GTM Brief

**Date:** 2026-07-08 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** Publishers industry page at `industries/publishers/`, mirroring the CPG config-driven template (`industries/cpg/config.js` + `src/app.js` layout engine).

---

## Stage 0 — Ground truth

### Confirmed Kana product roster (current names)

Source of truth: CPG page update spec (2026-07-08), `industries/cpg/config.js`, solution overview PDFs (Feb 2026), Industry GTM Assets spreadsheet, PLG_Campaign Optimizer 2026 campaign brief.

| Current name | Former / alt names seen in docs | Notes |
|---|---|---|
| **Campaign Orchestrator** | "Campaign Management" (PDF, xlsx), "Campaign Optimizer" (PLG brief, blog) | HIGHEST PRIORITY for this page per Rayyan |
| **Media Proposal Generator** | "Media Proposal Generation" (+ Sales Intelligence Hub in xlsx) | |
| **LLM Command Center** | "LLM Content Manager" | |
| **Audience Builder** | "Audience Manager" | Includes synthetic audiences (Synthetic Data folded in per CPG spec) |
| Category Intelligence, Omni-Channel Media Planner, Marketing Intelligence, Customer Engagement | — | NOT featured on this page |

### Featured products & grounded capabilities (from Kana docs only)

**Campaign Orchestrator** (Solution Overview: Campaign Management, Feb 2026; PLG brief; GAM blog):
- Ingests real-time delivery, inventory, and order data across ad systems; connects directly to GAM via API, no rip-and-replace.
- Detects pacing/under-delivery risk with live delivery + inventory sensors; forecasts goal misses before they happen.
- Automatically adjusts delivery to keep campaigns on track (human oversight; can take action in GAM).
- Conversational interface explains what's happening and why (root cause + recommended action, not dashboards).
- Benefits: fewer makegoods, reduced revenue leakage, fewer manual checks, delivery confidence on guaranteed campaigns.
- PLG brief claims: teams spend 4–6 hrs/week on manual GAM checks; direct-sold under-delivery drains $2K–$5K+/mo per issue caught late; 79% of publisher ad ops teams still rely on manual processes; 10–25% of yield can drain from GAM misconfigurations; 55% cite disconnected systems as barrier to scaling.
- Blog claims: GAM roadblock/priority misconfig cannibalizes 15–25% of premium inventory (ProOps analysis); ANA pegs programmatic supply-chain waste at $26.8B/yr.

**Media Proposal Generator** (Solution Overview, Feb 2026):
- Manual proposals take 4–6 days, missing the 24-hour agency response window; pricing/packaging knowledge locked in senior sellers' heads.
- Two-stage deployment: Media/Analytics Knowledge Graph (integrates Google Analytics, GAM, Salesforce, Adbook, LiveIntent) + Agentic Proposal Engine.
- Brief Analyzer parses any brief format → Inventory Service Agent (avails, rate cards, impressions), Strategy Engine Agent (Conservative/Balanced/Aggressive strategies), Content Targeting Agent.
- Proposal Builder assembles; human review; Proposal Activator creates orders + line items directly in the OMS.
- Chat Insights Agent: conversational queries on inventory, delivery, past proposal performance.
- Benefits: proposal cycle days → minutes; RFP win rate; scale sales output without headcount.

**LLM Command Center** (Solution Overview, Feb 2026):
- 47+ distinct LLM bots (OpenAI, Anthropic, Google, Perplexity, Meta) crawl publisher content around the clock.
- Default postures both lose: blanket blocking forfeits licensing revenue; blanket access gives content away.
- Sits in the CDN layer (Cloudflare-powered), classifies traffic, enforces access policies at sub-50ms.
- Natural-language policy creation ("Allow OpenAI full access to news, but only summaries for finance content"); provider-specific access levels (full-text / summary / highlights / deny); scoped to site, section, category; deploys in minutes without engineering.
- Unified dashboard: 47+ bot types, allow/deny rates, high-value content identification, anomaly alerts.
- Positions publishers to run programmatic, data-driven content licensing with leverage in AI-provider negotiations.

**Audience Builder** (CPG config, CPG spec):
- Plain-language segment building — no SQL, no data engineering queue; brief-to-activation traceability.
- Built-in synthetic audiences: statistically valid models where no first-party seed exists (80%+ overlap with Acxiom/Experian quality claimed in CPG stackShowcase).
- For publishers: applies to first-party audience products sold to advertisers (needs Stage 3 grounding).

### Target market (from xlsx + PLG brief)

- Suite label: **KFP — Kana for Publishers**. Priority P1. Companies with opps: Hearst, Time (customer), NBCU, NESN, Apple (Apple News), Fox, SiriusXM, The Weather Company, Disney.
- PLG brief targets mid-size publishers (50–500 employees, $10M–$200M revenue): Time, Forbes, Condé Nast mid-tier, Hearst Digital, Dotdash Meredith, Penske, Arena Group, Recurrent, BDG, Future plc, Vox mid-tier, Bauer, regional media groups.

### Template contract (CPG config keys to replicate)

`slug, label, accent, solutionsTitle, logoStripTitle, assets, nav, hero, painPoints[3], solutions[4] (feature/roleLabel/title/description/icon/image/bg/video), stats[4], testimonial, faq[3], personas[4–5] (role/painPoints[3]/solution), showcase (headline + 3 columns), featuredContent, stackShowcase (subtitle + 3 columns), finalCta`.

**Kana angle (Stage 0):** The publishers page is the first sell-side vertical — unlike CPG (buy-side), the buyer here monetizes audience and content rather than buying media. Campaign Orchestrator anchors the page on the ad ops "silent tax" narrative already proven in the PLG brief and GAM blog; Media Proposal Generator owns the sales-desk speed story; LLM Command Center owns the AI-scraping/licensing anxiety; Audience Builder repositions from campaign activation (CPG) to first-party audience monetization (publisher). Featured content card should hold the real GAM blog ("5 Campaign Delivery Issues GAM Won't Alert You To").

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Dominant business models (Print/Digital/News publishers):**
1. **Advertising** — direct-sold (guaranteed IOs, sponsorships, high-CPM premium) + programmatic (open auction, PMP/PG). PMP spend grew ~13% in 2025 as publishers and buyers shift away from open auction toward controlled environments (Madison Logic / industry coverage, 2025). Publishers like LADbible now take 54% of revenue via direct sales while open-web programmatic declines double digits (INMA, 2025) — direct-sold is where the margin is, which is why under-delivery and makegoods on guaranteed campaigns hurt disproportionately.
2. **Reader revenue** — subscriptions/paid content: 76% of commercial publishers say paid content is their primary focus for the year ahead (Reuters Institute/press coverage via Twipe, 2026).
3. **"Other" revenue** — events, e-commerce, B2B services, and **content licensing** now 25.4% of publisher revenue, nearly double the 13.2% share of 2021 (INMA, 2025). 60%+ of publishers expect at least some revenue from AI/news content licensing deals in 2026 (Reuters Institute predictions, 2026). News Corp/OpenAI benchmark: 5-year, $250M+ (Digiday timeline, 2025). OpenAI pays flat-rate fees; Perplexity offers a double-digit revenue share (Digiday scorecard, 2025).
4. **Print** — declining but still 43.6% of revenue for legacy news publishers vs. 56.4% digital+diversified (INMA, 2025).

**Value chain:** Advertisers/agencies (upstream demand) → publisher sales desk (RFP → proposal → IO) → ad ops (trafficking in GAM/OMS) → yield/programmatic team (SSPs, header bidding) → audience/data team (first-party segments) → editorial (the content engine) → platforms (Google, social, AI chatbots) controlling distribution downstream. SPO is compressing intermediary hops; the ad-tech chain still eats a large share (ANA pegs programmatic supply-chain waste at $26.8B/yr, 2025 — already cited in Kana blog).

**The structural shock:** Google search traffic to publishers fell ~33% globally in the year to Nov 2025 (US: −38%) (Press Gazette, 2026). AI Overviews correlate with a 58% CTR reduction for top-ranking pages; zero-click searches rose from 56% to 69% May 2024→May 2025 (Digiday/ALM antitrust filing data, 2025). Publishers expect a further ~43% search-traffic decline over the next 3 years (Press Gazette survey, 2026). Meanwhile chatbot referrals are still <1% of page views (9to5google, 2026) — AI consumes the content without returning the audience.

**What's structurally different from CPG/Retail/M&E-advertiser verticals:** the publisher is the SELL side. Revenue = inventory monetized, not media bought. "Campaign" means a client's insertion order the publisher must deliver, not the publisher's own marketing. The buyer cares about yield, delivery, makegoods, RFP win rate, and licensing leverage — not ROAS.

**Kana angle (Stage 1):** Every pillar of the publisher P&L maps to a featured product: direct-sold ad revenue is defended by Campaign Orchestrator (delivery risk → makegoods → advertiser churn); sales-desk throughput is expanded by Media Proposal Generator (the 24-hr agency window vs. 4–6 day proposal cycle); the traffic collapse + licensing wave is exactly LLM Command Center's wedge (60%+ expect licensing revenue; no tooling to run it programmatically); first-party audience products that replace lost third-party reach are built in Audience Builder. The hero narrative: your two biggest lines — ad delivery and content — are both leaking value you can't see.

## Stage 2 — Org map

| Title | Tribe | Exists in Print/Digital/News? | Notes / false friends |
|---|---|---|---|
| Ad Operations Manager / Sr. Ad Ops Manager | ops | ✅ core | Accountable for delivery of direct-sold campaigns; oversees traffickers + vendors (Publift/Playwire guides, 2025) |
| Ad Trafficker / Ad Ops Specialist | ops | ✅ core | Entry-level; sets up line items, creative tags, resolves tag issues |
| Campaign Manager | ops | ✅ | SELL-SIDE meaning: manages delivery of an advertiser's IO on publisher inventory — NOT the buy-side "campaign manager" who buys media. Direct false friend with CPG usage |
| Yield Manager / Yield Optimization Specialist | ops/analytics | ✅ core digital | Monitors CPMs, fill, floor prices, demand-source mix (headerbidding.co, 2025) |
| Programmatic Analyst / Programmatic Director | ops/analytics | ✅ growing | Digiday (2025) flags "programmatic analyst" as a crucial new publisher role |
| Sales Planner / Media Planner (sell-side) | sales | ✅ core | Builds proposals/avails decks in response to RFPs (Fox Television Stations postings, May 2025). False friend: buy-side "media planner" plans spend; sell-side plans inventory packaging |
| Account Executive / Sales Director | sales | ✅ core | Carries quota; multi-channel sponsorship + advertising solutions (Indeed/Glassdoor postings, 2025) |
| Head of Digital Revenue / VP Ad Operations / Revenue Operations Director | exec | ✅ | Economic buyer per PLG brief; cares about makegood rates, margin, advertiser retention |
| Director of Audience Development | content/insights | ✅ | Owns traffic, newsletters, SEO — the people living the Google-traffic collapse |
| VP Data / Director of Data & Audience Strategy | analytics | ✅ | Owns first-party data products; 71% of publishers call first-party data a key source of positive ad results, 85% expect its monetization role to grow in 2026 (Omeda, 2025) |
| AI Partnerships / Platform Partnerships lead ("the AI negotiator") | exec/bizdev | ✅ NEW | Digiday (2025): "Publishers' new power player: the AI negotiator" — NYT, Gannett, WaPo, BBC all created AI/platform partnership exec roles |
| Category Manager | — | ❌ | CPG-only false friend; does not exist here |
| Brand Manager / Shopper Marketing | — | ❌ | Buy-side CPG tribes; absent |
| Editor-in-Chief / newsroom | content | ✅ | Not a Kana buyer, but content licensing decisions touch editorial politics |

**Kana angle (Stage 2):** The page's personas should be: Ad Ops Manager (Campaign Orchestrator — primary, hands-on operator per PLG brief), Sales Planner/AE or VP Sales (Media Proposal Generator), Head of Digital Revenue / AI-partnerships lead (LLM Command Center — a brand-new power role with budget and board attention), and VP Data/Audience (Audience Builder). Copy must use sell-side vocabulary: line items, IOs, makegoods, avails, RFPs, yield, eCPM — and never buy-side terms like ROAS.

## Stage 3 — Role profiles

### Ad Operations Manager (mid-size digital publisher)
- **Owns:** delivery of every direct-sold/guaranteed campaign; trafficking quality; discrepancy reconciliation; makegood prevention.
- **Mon/Wed/Fri:** Every morning starts by logging into GAM, pulling delivery reports, scanning pacing across active line items, and eyeballing inventory health — a thorough manual check across delivery, revenue, and inventory takes **60–90 minutes per person, every morning** (ProOps daily checklist, 2026). Monday adds weekend catch-up (issues that brewed for 48 hrs unwatched); Wednesday is mid-flight optimization + new IO trafficking; Friday is delivery reporting to sales and screenshotting pacing for account leads.
- **Workflow:** IO lands from sales → line items + creative tags set up in GAM → QA → launch → daily pacing checks → mid-flight fixes (priority conflicts, frequency caps, creative swaps) → end-of-flight reconciliation vs. third-party numbers → makegood negotiation if under-delivered.
- **Priority order per ProOps (2026):** (1) direct-sold pacing, (2) revenue health (day-over-day eCPM/fill drops), (3) inventory health (units that stopped serving). "A pacing shortfall caught early is correctable; caught after the flight ends, it becomes a makegood or a credit."

### Sales Planner / Account Executive (sell side)
- **Owns:** RFP responses, proposal decks, avails, pricing/packaging; AE carries the quota, planner builds the plan.
- **Mon/Wed/Fri:** Monday triage of new RFPs against the response deadline; Wednesday pulling avails from the inventory/OMS system (avails expire — typically re-run after 48 hrs; IAB workflow guidance), building the deck, chasing rate-card exceptions from senior sellers; Friday submitting proposals and following up on pending ones.
- **Pain ground truth:** agencies spend **38 hours and $3,018 per campaign on RFPs** (Bionic study); Kana's own doc: manual proposals take 4–6 days against a 24-hour agency response window, and being second-to-respond drastically cuts win rate.

### Head of Digital Revenue / VP Ad Ops (economic buyer)
- **Owns:** ad revenue line, makegood rate, margin, advertiser retention; reports monthly revenue vs. forecast to the exec team.
- **Cares about (PLG brief):** something they can show ROI on fast; board-level ammunition on revenue leakage. Emerging second mandate: the AI value exchange — publishers now staff dedicated AI/platform partnership executives (NYT, Gannett, WaPo, BBC per Digiday "the AI negotiator," 2025), and AI licensing started producing "meaningful"/"notable" revenue in Q1 2026 earnings (Digiday, 2026).

### VP Data / Director of Audience & Data Strategy
- **Owns:** first-party data strategy, audience segments the sales team packages into deals, privacy compliance, CDP/DMP stack.
- **Workflow:** collect (registration, newsletters, paywall, surveys) → unify in CDP → build segments → package into PMP/curation deals or direct-sold targeting → prove performance to advertisers. 71% of publishers call first-party data a key source of positive ad results; 85% expect its monetization role to increase in 2026 (Omeda, 2025). Precedent for synthetic audiences: News UK turns The Times' first-party data into synthetic audiences for advertisers (Digiday, 2025).
- **Sell-side AND buy-side note:** this industry is dominantly sell-side; publisher marketing (subscriptions) exists but is not this page's target.

**Kana angle (Stage 3):** Campaign Orchestrator deletes the 60–90 minute morning GAM check and the makegood scramble (its exact sensors: pacing, delivery, inventory — matching ProOps' priority order 1:1). Media Proposal Generator collapses the planner's avails-pull → deck-build → rate-card-chase loop into brief-in/proposal-out minutes, inside the 24-hr window. Audience Builder gives the VP Data plain-language segment building plus synthetic audiences — with News UK as market proof that publishers sell synthetic audiences. LLM Command Center gives the new AI-negotiator exec the traffic data and enforcement layer their licensing negotiations currently lack.

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Ad Ops Manager / Trafficker | Google Ad Manager (delivery + troubleshoot tabs), third-party verification (DV/IAS), Excel | **The whole monitoring layer is manual.** 79% of ad ops professionals say current tools are inadequate; 87% say automation would make their company more profitable (Digiday survey via Aditude, 2025). Ad ops teams spend 12–18 hrs/week copying platform metrics into spreadsheets (Aditude, 2025). Discrepancy reconciliation = GAM report vs. advertiser's ad server in Excel |
| Yield / Programmatic Analyst | GAM (Ad Exchange/AdSense views), SSP dashboards (Magnite, PubMatic, Index), header-bidding wrapper analytics, Excel | Per-demand-source eCPM trends live one level below the blended dashboard number; weekly/monthly reporting cycles catch collapses too late (Kana GAM blog + ProOps, 2026). Budget pacing still manual for 55% and spreadsheet-based for 42% of teams (Fluency benchmark, 2026) |
| Sales Planner / AE | Salesforce (or Boostr/Operative OMS), GAM avails/forecasting, PowerPoint/Google Slides, rate card in a shared sheet | Avails expire in ~48 hrs; pricing exceptions and packaging strategy are tribal knowledge held by senior sellers (Kana MPG doc + IAB workflow guidance). Proposal assembly = copy-paste between forecast screenshots and slides |
| VP Data / Audience | CDP/DMP (or GA4 + homegrown), clean rooms, consent platform | Segment requests from sales queue behind data engineering; packaging first-party segments into deals is bespoke per-advertiser work (BidsCube/Adtelligent guides, 2025) |
| Head of Digital Revenue / AI negotiator | Looker/Tableau revenue dashboards, robots.txt + Cloudflare bot analytics (if any), lawyers' term sheets | **The AI-traffic layer is brand new**: Cloudflare only introduced Pay Per Crawl in 2025 and will block mixed-use AI crawlers on ad pages by default from Sept 15, 2026 (TechCrunch/Cloudflare, 2026). Most publishers still manage AI access via robots.txt guesses; licensing negotiations run disconnected from real traffic data (Kana LLM CC doc) |

**Kana angle (Stage 4):** The stack story writes itself: GAM + Salesforce/OMS + GA4 are exactly the systems Kana's docs name as integrations (Media/Analytics Knowledge Graph: Google Analytics, GAM, Salesforce, Adbook, LiveIntent; Campaign Orchestrator: direct GAM API; LLM Command Center: CDN layer). The page's stackShowcase subtitle should name GAM, Salesforce, and the OMS explicitly — publishers pattern-match on tool names faster than on abstractions. The gap column (spreadsheet monitoring, tribal rate cards, robots.txt guessing) supplies the painPoints copy.

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Morning GAM delivery/pacing check | Ad Ops Manager / trafficker | Daily (60–90 min/person; 4–6 hrs/wk) | ✅ GAM reports + SSP dashboards + Excel (ProOps 2026; Beeler.Tech interview w/ Chris Quinn, 2026) |
| Weekly delivery report to sales/advertiser | Ad Ops | Weekly | ✅ GAM + third-party ad server numbers reconciled in spreadsheets |
| End-of-campaign wrap report (post-campaign analysis) | Ad Ops + AE | Per flight; industry norm delivered ≤4–6 weeks after flight end (Abintus, 2024–25) | ✅ actual-vs-plan for every KPI in the media plan, assembled from GAM, verification vendors, screenshots |
| Makegood / discrepancy reconciliation memo | Ad Ops + finance | Per incident / monthly billing close | ✅ the deliverable everyone dreads; triggers credits |
| RFP response / proposal deck (with avails) | Sales Planner | Per RFP; avails expire ~48 hrs | ✅ GAM forecast pulls + rate card sheet + slide template (4–6 days per Kana MPG doc) |
| Media kit & rate card | Marketing/sales ops | Quarterly refresh | ✅ static PDF; instantly stale vs. live inventory |
| Monthly yield/revenue report (eCPM, fill, sell-through by source) | Yield Manager | Monthly (weekly optimizers see 12–18% revenue lift vs. monthly — Aditude, 2025) | ✅ per-SSP exports merged in Excel; blended averages hide per-source collapses |
| Revenue forecast to exec/board | Head of Digital Revenue | Monthly/quarterly | ✅ OMS pipeline + GAM delivery + finance actuals |
| Audience segment one-pagers for advertisers | VP Data + sales | Per deal | ✅ bespoke per-advertiser packaging of first-party segments |
| AI licensing negotiation prep (what's being crawled, by whom, worth what) | AI negotiator / Head of Digital Revenue | Per negotiation — NEW deliverable | ✅ today it's robots.txt logs + guesswork; no traffic-grounded valuation (Kana LLM CC doc; Digiday AI negotiator, 2025) |

**Kana angle (Stage 5):** Named deliverables for openers and page copy: the morning pacing check, the wrap report, the makegood memo, the RFP deck, the media kit. Campaign Orchestrator's demo moment is a caught under-delivery — market proof exists (a publisher caught an $8,500 under-delivery on day two of automated monitoring; Beeler.Tech, 2026). Media Proposal Generator kills the 4–6 day RFP deck. LLM Command Center creates a deliverable that today literally doesn't exist: a crawl-traffic-grounded licensing valuation.

## Stage 6 — Pressures & politics

- **Do-more-with-less is not rhetoric here:** 3,434 journalism job cuts tracked in UK/US in 2025 (Press Gazette, 2025); 7,597 media & entertainment jobs cut across 25 companies in 2026 so far, averaging 13.2% of workforce per company (layoffhedge tracker, 2026). GB News is explicitly cutting ~1/3 of staff because it "automated some of its workflows" (Press Gazette, 2026). Ad ops teams are lean and getting leaner while the surface area they monitor grows — the exact framing already in Kana's GAM blog.
- **The traffic collapse is board-level existential:** "extinction-level event" (NPR, 2025); Cloudflare CEO: publishers face an existential threat and for every user OpenAI sends a site, it sends 1,500 bots; Anthropic ~60,000 (Cloudflare via Axios/Quartz, 2025). FT CEO reports a "pretty sudden and sustained" 25–30% search referral decline (2025). This is THE throughline "industry is changing" pressure — every exec has a traffic chart falling off a cliff and a mandate to answer "what's our AI strategy?"
- **Advertiser trust & transparency pressure:** ISBA/PwC found only 51% of advertiser programmatic spend reached publishers, with a 15% "unknown delta" — buyers are pushing direct and demanding delivery transparency (AI Digital, 2025 citing ISBA/PwC). Publishers win direct-sold budgets on trust; every missed goal and makegood erodes exactly that.
- **Emotional layer by persona:** Ad Ops Manager = morning dread + blame absorption (when delivery misses, ops wears it, sales escalates it); Sales lead = quota anxiety against faster competitors and shrinking agency response windows; Head of Digital Revenue = defending the revenue forecast to a board that reads "extinction-level event" headlines; VP Data = pressure to make first-party data a product before the audience (and cookies) disappear.
- **Politics of AI licensing:** editorial resents scraping ("giving away journalism"), bizdev sees a revenue line, legal sees risk — the AI negotiator sits in the middle needing DATA to arbitrate. Tools that turn ideology fights into traffic-and-dollars conversations have an internal champion.

**Kana angle (Stage 6):** The page's narrative arc: revenue is leaking silently at both ends of the business — ad delivery (makegoods, yield misconfigurations) and content (AI crawlers consuming without returning audience) — while teams shrink. Kana is positioned as the layer that watches everything the lean team can't: Campaign Orchestrator watches delivery, LLM Command Center watches crawlers, Media Proposal Generator and Audience Builder turn defense into offense (win more RFPs, sell first-party audiences). Hero copy should carry the "silent leak + lean team" pressure without doom-mongering.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Ad Operations Manager / Campaign Manager (sell-side) | 60–90 min manual GAM morning check (ProOps 2026); under-delivery caught after flight end becomes a makegood; broken creatives pass GAM's checks; per-source eCPM collapses hidden in blended averages (Kana GAM blog) | **Campaign Orchestrator** | Problem-aware (they live it daily; don't know an agentic monitoring layer exists) | Direct — PLG free trial motion already running (PLG_Campaign Optimizer brief) |
| Head of Digital Revenue / VP Ad Ops | Makegood rate + advertiser churn vs. ISBA/PwC-fueled transparency demands; revenue forecast defense with a shrinking team (13.2% avg workforce cuts, 2026) | **Campaign Orchestrator** (economic buyer) | Problem-aware | Direct (ROI-fast framing) |
| Sales Planner / AE / VP Sales | RFP deck takes 4–6 days vs. 24-hr agency window (Kana MPG doc); avails expire in ~48 hrs; pricing locked in senior sellers' heads; 38 hrs/$3,018 per campaign on RFPs (Bionic) | **Media Proposal Generator** | Solution-aware (RFP automation is a known category; agentic end-to-end isn't) | Direct |
| AI Partnerships lead / Head of Digital Revenue | 47+ LLM bots crawling 24/7; OpenAI sends 1,500 bots per referred user (Cloudflare, 2025); licensing negotiations disconnected from real traffic data; robots.txt is the only lever | **LLM Command Center** | Unaware→problem-aware (role is brand new; category doesn't exist yet) | General/narrative ("industry is changing" motion) |
| VP Data / Director of Audience & Data Strategy | Segment requests queue behind data engineering; first-party segments are the ad product's differentiation (71% cite first-party data as key to ad results, Omeda 2025); News UK already sells synthetic audiences (Digiday 2025) | **Audience Builder** | Solution-aware | Direct |

### Copy ingredients bank

**Cited stats (usable on page/outbound):**
- 60–90 min/person daily manual GAM check; 4–6 hrs/week (ProOps, 2026 / Beeler.Tech, 2026)
- 79% of publisher ad ops teams rely on manual processes (PLG brief, 2026); 79% say current tools inadequate, 87% say automation = more profitable (Digiday survey via Aditude, 2025)
- 10–25% of yield drains from GAM misconfigurations (PLG brief); roadblock misconfig cannibalizes 15–25% of premium inventory (ProOps, 2026)
- Direct-sold under-delivery drains $2K–$5K+/mo per issue caught late (PLG brief); publisher caught $8,500 under-delivery on day 2 of automated monitoring (Beeler.Tech, 2026)
- $26.8B/yr programmatic supply-chain waste (ANA, 2025)
- Proposals take 4–6 days vs. 24-hr agency response window (Kana MPG doc); 38 hrs + $3,018 per campaign on RFPs (Bionic study)
- Google search traffic to publishers −33% globally in year to Nov 2025, US −38% (Press Gazette, 2026); AI Overviews → 58% CTR drop on top results (2025); zero-click 56%→69% (2025)
- For every referred user, OpenAI sends 1,500 bots; Anthropic ~60,000 (Cloudflare, 2025)
- 60%+ of publishers expect AI licensing revenue in 2026 (Reuters Institute); "other" revenue now 25.4% of publisher revenue (INMA, 2025); News Corp–OpenAI: $250M+/5yr (2025)
- 71% of publishers: first-party data key to positive ad results; 85% expect its monetization role to grow in 2026 (Omeda, 2025)
- Only 51% of advertiser programmatic spend reaches publishers (ISBA/PwC)
- 3,434 journalism job cuts in 2025 (Press Gazette); staff cuts averaging 13.2% per company in 2026 (layoffhedge)

**Named deliverables for openers:** the morning pacing check, the makegood memo, the end-of-campaign wrap report, the RFP response deck, the avails pull, the quarterly media kit refresh, the per-source eCPM breakdown, the licensing term sheet.

**Jargon glossary (use in copy):** line items, IO (insertion order), makegood, under-delivery, pacing, avails, sell-through, fill rate, eCPM (blended vs. per-source), floor price, PMP/PG deals, header bidding, guaranteed campaigns, direct-sold vs. programmatic, wrap report, rate card, first-party segments, curation, crawlers/bots, zero-click, licensing. NEVER: ROAS, category manager, shelf, syndicated data.

**Pressure hooks (one-liners):**
1. "Your team is 13% smaller than last year, and the surface area you're monitoring doubled."
2. "GAM has the data to prevent every makegood you paid last quarter — it just never told you."
3. "OpenAI sends you 1,500 bots for every reader it sends back. What are you charging them?"
4. "The agency gave you 24 hours. Your proposal takes four days."

### Worked example openers

**Direct (Ad Ops / Campaign Orchestrator):** "By the time your morning pacing check flags a line item at 94%, you can't tell if it's a blip or the makegood you'll be writing off in three weeks. Kana's Campaign Orchestrator watches every line item continuously, forecasts the miss before the flight is unrecoverable, and fixes it in GAM — with your hand on the approval."

**General/narrative (exec / LLM Command Center):** "Publishing's oldest bargain — crawl me, send me readers — is dead: OpenAI sends 1,500 bots for every user it refers. The publishers who come out ahead in 2026 aren't the ones blocking everything or allowing everything; they're the ones who can see exactly what each AI provider takes and set the price for it."

### Sources

- Kana internal: PLG_Campaign Optimizer 2026 brief; GAM blog ("5 Campaign Delivery Issues…"); Solution Overviews (Campaign Management, Media Proposal Generator, LLM Command Center, Feb 2026); Industry GTM Assets xlsx; CPG config/spec.
- Press Gazette (2025, 2026): Google traffic −33%; journalism job cuts. Digiday (2025–26): AI Overviews −25% referrals; AI negotiator; AI licensing deal timeline/scorecard; News UK synthetic audiences; programmatic analyst role. INMA (2025): revenue diversification. Twipe/Reuters Institute (2026): publisher priorities, licensing expectations. ProOps Consulting (2026): daily ad ops checklist; automated reporting. Beeler.Tech (2026): manual reporting interview. Aditude (2025): manual reporting cost, Digiday tool-adequacy survey. Fluency (2026): agency ad ops benchmark. Madison Logic / Clickio (2025): PMP shift. Bionic: RFP hours/cost study. IAB: workflow best practices (avails expiry). Omeda (2025): first-party data stats. BidsCube/Adtelligent (2025): first-party data monetization. Boostr/Operative: OMS landscape. Cloudflare/TechCrunch (2025–26): pay-per-crawl, Sept 15 2026 default block, bot-to-referral ratios. Axios/NPR/Quartz (2025): existential threat framing. AI Digital (2025): ISBA/PwC 51%. layoffhedge (2026): media job cuts.
