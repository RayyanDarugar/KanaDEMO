# Retail & E-Commerce — Industry GTM Brief

**Date:** 2026-07-09 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** Rebuilt Retail & E-Commerce industry page at `industries/retail-ecommerce/`, mirroring the CPG/Publishers config-driven template (`industries/cpg/config.js` + `src/app.js` layout engine). The existing retail config is a prior-generation page (stale product names, placeholder FAQ/testimonial, missing showcase/featuredContent/stackShowcase sections) and gets fully replaced.

---

## Stage 0 — Ground truth

### Confirmed Kana product roster (current names)

Source of truth: memory file (post-July-2026 renames), `industries/cpg/config.js`, `industries/publishers/config.js`, solution overview PDFs (Feb 2026), Industry GTM Assets xlsx.

| Current name | Former / alt names in docs | Notes |
|---|---|---|
| **Customer Engagement** | — | In xlsx retail row |
| **Category Intelligence** | "Category Intelligence Hub" | In xlsx retail row |
| **Audience Builder** | "Audience Manager" (xlsx) | Synthetic Data folded in; in xlsx retail row |
| **Omni-Channel Media Planner** | "OmniChannel Media Planner?" (xlsx — note the question mark) | In xlsx retail row, tentatively |
| **Marketing Intelligence** | — | NOT literally in xlsx retail row; see Brand Intelligence note |
| Campaign Orchestrator, Media Proposal Generator, LLM Command Center | "Campaign Management", "Media Proposal Generation", — | Not featured on this page (sell-side / publisher products; "Retail Media Network" is a separate KFP row in the xlsx) |

**Brand Intelligence note:** the xlsx retail row lists "Brand Intelligence", which has no counterpart in the confirmed current roster. Precedent: the CPG xlsx row also listed Brand Intelligence, and the shipped CPG page featured Marketing Intelligence in that slot (spend→sales attribution story). Same mapping applied here; flag to Rayyan for confirmation.

### Featured products & grounded capabilities (from Kana docs only)

**Customer Engagement** (Solution Overview PDF, Feb 2026):
- AI-powered loyalty strategist; connects to CRM, loyalty, and marketing automation systems.
- Predictive behavioral scoring: real-time risk scores from lifecycle patterns (activation, frequency, spend); surfaces at-risk cohorts weeks before they churn.
- Root cause diagnosis (price sensitivity, support issues, feature adoption); always-on journey anomaly detection.
- Uplift & impact modeling: forecasts revenue impact of saving cohorts; tracks actual retention lift.
- Next-best-action recommendations by risk level and value (message, channel, timing, offer); human review/approval.
- Claims: acquiring costs ~5–25x retention; replaces blanket win-backs/discounts that burn margin on customers who'd return anyway.

**Category Intelligence** (CPG config): ingests scan data, POS feeds, syndicated sources (Nielsen, Circana); answers category questions in seconds; cross-references external signals (analyst reports, trade press, search trends) to surface leading indicators 6–10 weeks early. Retail-side reframe (vs. CPG-side) must be grounded in Stage 3: retail merchants/category managers own assortment, pricing, vendor line reviews.

**Audience Builder** (CPG/Publishers configs): plain-language segment building — no SQL, no data engineering queue; brief-to-activation traceability; canonical definitions across channels; built-in synthetic audiences where seed data is thin (80%+ overlap with Acxiom/Experian quality claimed).

**Marketing Intelligence** (CPG config, MI blog/PRD): connects ad platforms, portals, CRM, e-commerce analytics into one live view; plain-language questions, no analyst queue; ties digital spend to in-store sales lift / SKU velocity; zero-copy architecture, no warehouse migration.

**Omni-Channel Media Planner** (CPG config, OCMP PDF): saturation curves modeled on own campaign data; brief → targeting setup on Meta, YouTube, The Trade Desk, DV360; scenario planning at -20%/baseline/+20% budget; allocation by modeled marginal ROAS.

### Target market (from xlsx)

- Suite: **KFM** (Kana for Marketers/Brands). Priority P1. Companies with opps: **Penguin Random House UK, King Ranch**. No "(C)" customer marked → testimonial stays placeholder-scaffolded.
- Scope guard: "Retail Media Network" is a separate P1 KFP row (Campaign Management, Media Proposal Generation, Audience Manager). This page is the **brand/merchant buy-side**: retailers and e-commerce brands marketing to consumers — not RMN ad-sales monetization. The old retail page's "Head of Retail Media" persona leaned RMN sell-side; do not carry it forward as-is.

### Template contract (CPG/Publishers config keys to replicate)

`slug, label, accent, solutionsTitle, logoStripTitle, assets, nav, hero, painPoints[3], solutions[4–5] (feature/roleLabel/title/description/icon/image/bg/video?), stats[4], testimonial, faq[3], personas[4–5] (role/painPoints[3]/solution), showcase (headline + 3 columns), featuredContent, stackShowcase (subtitle + 3 columns [+ optional rotations]), finalCta`. Keep existing accent `#0f666b` unless a better retail accent argues otherwise; keep existing MP4 solution videos where the product carries over.

**Kana angle (Stage 0):** Retail is Kana's demand-side loyalty vertical — unlike CPG (sells through retailers, no direct customer relationship) the retailer owns the transaction, the loyalty program, and the first-party data, which makes Customer Engagement (churn prediction) and Marketing Intelligence (online-spend-to-store-revenue attribution) the natural anchors. Category Intelligence flips from "CPG selling into the buyer's category review" to "the merchant running the category review." Audience Builder keeps its ops-speed story but against retail promo calendars, where a 5-day segment queue can miss the entire promotional window.

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Dominant business models (buy-side scope of this page):**
1. **Omnichannel retailers** (Walmart, Target, grocery, specialty) — stores + digital storefronts; e-commerce is 16.3–16.4% of total US retail sales (US Census Bureau via eMarketer/FRED, Q3 2025), meaning ~84% of transactions still close in-store while marketing spend is increasingly digital. Online grows ~5.3% YoY vs. 3.8% total retail (Census 2025).
2. **Pure-play e-commerce / DTC brands** — highest exposure to paid acquisition economics: average CAC $68–84, up ~60% in five years (LoyaltyLion 2025); Shopify's 2026 Global Commerce Report has blended CAC rising $274→$318 (+16.1%) across 4.8M merchants. Drivers: iOS privacy signal loss, auction inflation (Temu et al.), Google CPCs +12.9% YoY.
3. **Marketplace sellers / hybrid** — Amazon holds ~38% of US e-commerce; brands rent visibility via sponsored placements.
4. **(Adjacent, out of scope)** Retailer-as-media-owner (RMN) — separate xlsx row; noted only because merchants feel its gravity: retailers monetizing first-party data is exactly why owning loyalty/transaction data is now a margin lever.

**Value chain / who's upstream-downstream:** CPG & brand vendors upstream (trade spend, line reviews); the retailer owns the shopper relationship, transaction record, and loyalty program; agencies and martech sit alongside. Private label strengthens the retailer's hand — 38.1% of European food sales are retailer brands (PLMA/Kaizen 2024–26), and half of consumers globally say they buy more private label than ever.

**Margin structure:** thin retail net margins make retention math brutal: acquiring costs 5–7x retention (Invesp), a 5% retention lift raises profit 25–95% (Bain via Yotpo), and 81–82% of retail executives forecast margin expansion in 2026 mainly via price/mix/cost control (Deloitte 2026 Retail Outlook) — i.e., margin must come from squeezing waste, not from growth.

**Structurally different from existing verticals:** unlike CPG (no direct consumer relationship, syndicated data lag) and publishers (sell-side, monetizing audience), the retailer *owns the transaction and the customer identity* — loyalty cards, e-receipts, app telemetry. The pain isn't lack of data; it's that the data sits in POS, e-commerce, CRM, and loyalty silos that don't reconcile, while ~84% of revenue closes offline where digital attribution can't see it.

**Kana angle (Stage 1):** Retail's economics put Customer Engagement and Marketing Intelligence at the front of the page: CAC inflation ($68–84 avg, +60%/5yr) makes churn prevention the cheapest revenue in the P&L, and the 16%-online / 84%-in-store split makes closing the offline attribution gap the CFO-facing story. Audience Builder's activation-speed story lands against promo-window timing; Category Intelligence maps to the merchant side (assortment/category reviews) rather than CPG's syndicated-data lag.

## Stage 2 — Org map

| Title | Tribe | Exists in retail? | False-friend notes |
|---|---|---|---|
| CMO / VP Marketing | brand + performance | Yes | 95% of CMO JDs now demand both brand AND performance expertise (Russell Reynolds 2025) — the split-team era is consolidating |
| VP E-Commerce / VP Digital | performance/P&L | Yes — distinct from CMO; owns site + digital P&L ($160–270K NY base, Indeed/ZipRecruiter 2026) | In retail this is a P&L owner, not just a channel marketer — closer to a GM than CPG's "VP Media" |
| Director of Lifecycle Marketing / Retention & CRM | lifecycle | Yes, and growing — 9,000+ US lifecycle openings (LinkedIn 2026); real postings: Helzberg Diamonds "Director of Retention & Lifecycle Marketing" (owns post-acquisition journey, unifies CRM across digital + in-store), Sur La Table "Director, Lifecycle Marketing & CRM" (email, SMS, loyalty, customer intelligence) | Title spans email/SMS/loyalty/customer intelligence — much broader than CPG's "CRM manager." THE churn buyer. |
| Category Manager / Merchant / Buyer | merch/ops | Yes — but it's the OPPOSITE side of the table from CPG's category manager | **Critical false friend:** the retail category manager is a "mini-CEO" of a product segment — owns assortment, pricing, promo plans, vendor negotiations, and *runs* the category line reviews that CPG vendors present into (DotActiv, Yardstick). CPG copy about "prepping for buyer meetings" rings false here; the merchant IS the buyer. |
| Performance / Growth Marketing Manager | performance | Yes (esp. e-comm/DTC) | Owns paid social/search; in DTC often owns full funnel incl. CAC targets |
| Marketing Ops / Campaign Ops | ops/analytics | Yes | Runs segmentation, ESP/CDP, campaign QA — same as CPG |
| VP Analytics / Customer Insights | insights | Yes | Increasingly holds the "unify fragmented platforms" mandate (NIQ CMO Outlook 2026) |
| Head of Retail Media | sell-side | Exists at large retailers but belongs to the RMN row (KFP) | Do NOT target on this buy-side page |
| Trade Marketing Manager | — | Rare on the retailer side | CPG-side title; false friend |

**Kana angle (Stage 2):** Five personas map cleanly: Director of Lifecycle/Retention & CRM → Customer Engagement (Helzberg/Sur La Table postings literally describe its job-to-be-done: unify loyalty + CRM across digital and in-store); Category Manager/Merchant → Category Intelligence (reframed: the merchant runs the line review); VP E-Commerce or Growth → Omni-Channel Media Planner (owns CAC and channel mix); Marketing/Campaign Ops → Audience Builder; CMO/VP Analytics → Marketing Intelligence. The retail category manager false-friend is the single most important copy correction vs. reusing CPG language.

## Stage 3 — Role profiles

### Director of Lifecycle / Retention & CRM (buy-side, THE Customer Engagement buyer)
- **Owns:** post-acquisition journey end-to-end — email, SMS, loyalty program, win-back, cross-sell — unified across digital and in-store (Helzberg, Sur La Table postings 2025–26).
- **Mon/Wed/Fri:** Mon — pull retention/churn/repeat-rate cohorts in Looker/Tableau for the weekly readout; Wed — build & QA triggered flows (abandon, post-purchase, lapse risk) in Braze/Iterable/Klaviyo, A/B test messaging; Fri — report lifecycle KPIs (churn, repeat purchase rate, unsubscribe, LTV) and plan win-back sends for lapsed segments.
- **Workflow:** segment base by lifecycle stage → design intervention (offer, channel, timing) → automate → measure lift. The known failure mode (from Kana CE PDF + Litmus/Hightouch lifecycle guides): churn shows up as a lagging indicator in monthly reports; interventions default to blanket win-back discounts that burn margin.

### Category Manager / Merchant (retailer side)
- **Owns:** a category P&L as "mini-CEO" — assortment, pricing, promo plan, planogram/space, vendor negotiations (DotActiv, Fieldpie).
- **Mon/Wed/Fri:** Mon — the **Monday trade meeting**: review last week's sales/stock vs. plan on the **WSSI** (Weekly Stock, Sales & Intake); Wed — assortment/planogram work, supplier meetings, promo calendar slotting (which items hit the weekly ad); Fri — prep analyses for upcoming **category reviews/line reviews** (run 1–2x/yr per category; vendors present INTO them).
- **Failure mode:** trade meetings become a "Monday morning report marathon" — hours of manual data pulls and spreadsheet wrangling before any decision gets made (Style Arcade, Commerce Thinking).

### VP E-Commerce / Growth Marketing Lead
- **Owns:** digital P&L, CAC/ROAS targets, channel mix across Meta/Google/TikTok/email.
- **Mon/Wed/Fri:** Mon — blended ROAS/MER snapshot vs. breakeven (1/contribution margin); Wed — reallocate: pause underperformers, scale winners, manage learning-phase overspend on new launches; Fri — promo-calendar planning against compressed windows (BFCM, back-to-school, clearance cycles).
- **Failure mode:** channel-level medians diverge wildly (Meta ~1.93x vs Google ~3.68x median ROAS, Eightx 2026) and reallocations run on last-click platform numbers that can't see in-store conversions.

### Marketing / Campaign Ops Manager
- **Owns:** segmentation infrastructure, ESP/CDP, campaign QA, audience requests.
- **Workflow:** brief lands → audience needs SQL from the data team → queue → build → validate → sync to platforms. Batch pipelines that take days to refresh segments are inadequate for seasonal retail's compressed windows (CDP.com retail guide, 2026); iteration cycles that should be seconds run days.

### VP Analytics / CMO (economic buyer)
- **Owns:** the marketing P&L story to CEO/CFO; the "unify fragmented platforms" mandate (NIQ CMO Outlook 2026).
- **Workflow:** assemble cross-channel performance from ad platforms + e-comm analytics + POS + loyalty; defend spend with ~84% of transactions closing offline, invisible to digital attribution.

**Kana angle (Stage 3):** Customer Engagement's PDF language ("surfaces at-risk cohorts weeks before they churn," "replace blanket win-backs") matches the lifecycle director's failure mode verbatim. Category Intelligence's "answers category questions in seconds" retargets the Monday trade meeting / WSSI marathon — a sharper, retail-native version of CPG's "20 hours compiling." Audience Builder attacks the ops SQL queue against promo-window compression. Marketing Intelligence gives the CMO the offline-attribution bridge; OCMP gives the growth lead saturation-modeled reallocation instead of last-click habit.

## Stage 4 — Tool stack

| Role | What's literally open on their screen | Where the gap is spreadsheets/Slack/tribal knowledge (OPPORTUNITY) |
|---|---|---|
| Lifecycle / CRM / Retention | Klaviyo (Shopify-centric), Braze or Iterable (enterprise), Salesforce Marketing Cloud; loyalty platform (Yotpo, Voyado, custom); Looker/Tableau for cohorts | **Churn detection is a lagging monthly report**, not a live signal; risk scoring lives in an analyst's notebook if it exists at all; 60% of B2C teams juggle 6–15 martech tools (Klaviyo State of B2C 2025) that don't share one customer definition |
| Category Manager / Merchant | Excel WSSI, POS/BI extracts, Blue Yonder / Oracle Retail (enterprise), planogram tools (LEAFIO, Scorpion) | **The WSSI itself runs in Excel** at most mid-size retailers — version conflicts, stale inputs, delayed markdown/allocation decisions (Increff, Retail Dogma); Blue Yonder is a $100K+/yr IT project, not a merchant tool |
| Growth / Performance | Meta Ads Manager, Google Ads, GA4, TikTok Ads, Northbeam/Triple Whale-style attribution | Blended ROAS reconciliation across platforms is a spreadsheet; each platform self-grades on last-click; offline conversions invisible |
| Marketing / Campaign Ops | ESP/CDP, ad platform audience managers, data warehouse (via data team) | **Segment requests queue behind data-team SQL**; batch pipelines refresh in days vs. promo windows in hours (CDP.com retail 2026) |
| VP Analytics / CMO | Tableau/Looker/Power BI, platform dashboards, board deck in PowerPoint | Senior marketers spend 10–15 hrs/wk pulling numbers from disconnected platforms and reconciling mismatched definitions (Improvado 2026); 74% of marketers cite tooling/data fragmentation as top pain (2026 study of 384 marketer conversations) |

**Kana angle (Stage 4):** Kana doesn't replace the stack — it sits on top of Shopify/Salesforce/Klaviyo/POS/loyalty exactly as the CPG/publisher pages position ("zero-copy, no migration"). The two sharpest gaps: (1) churn intelligence is nobody's live tool — Customer Engagement plugs into CRM/loyalty/automation systems the team already runs; (2) the merchant's WSSI/Excel trade-meeting stack and the CMO's 10–15 hrs/wk reconciliation are both "answers in seconds" stories for Category Intelligence and Marketing Intelligence. stackShowcase rotations should name Shopify, Salesforce, Klaviyo, your POS, your loyalty platform.

## Stage 5 — Deliverables inventory

| Named deliverable | Owner | Cadence | Assembled manually from disconnected sources? |
|---|---|---|---|
| **Monday trade meeting pack / WSSI** (Weekly Stock, Sales & Intake) | Merchandising / Category Manager | Weekly (Mon a.m.) | YES — hours of data pulls and spreadsheet wrangling; "Monday morning report marathon" (Style Arcade, Commerce Thinking 2025) |
| **Weekly performance/trading report** (net profit, ad spend, new customers, CAC:LTV, top products) | Growth / E-comm lead | Weekly | YES — founders/leads spend 10–15 hrs/wk consolidating 8–12 disconnected tools; "rebuilding recurring report sheets every Monday" (Luca 2026) |
| **Promo post-mortem / promotion effectiveness report** (lift vs. non-promo, cost justification, margin impact) | Category Manager + Marketing | Per event / seasonal | YES — POS, promo calendar, and media data live in different systems (o9, Datawiz) |
| **Monthly retention / cohort report** (churn rate, repeat purchase rate, LTV cohorts) | Lifecycle / CRM Director | Monthly | YES — BI cohort pulls + ESP exports; by publication the at-risk customers already lapsed |
| **Loyalty program quarterly review** (redemption, active-member rate, incremental lift) | Lifecycle / Loyalty | Quarterly | YES (Open Loyalty benchmarks) |
| **Category review / line review prep** (assortment performance, vendor scorecards, planogram proposals) | Category Manager (runs it; vendors present into it) | 1–2x/yr per category | YES — comprehensive analyses prepared ahead; merchants request vendor decks in advance (Heinzeroth, OpenBrand, SPS Commerce) |
| **Board/CFO marketing deck** (LTV:CAC by channel, 12-month LTV curves, spend-to-revenue) | CMO / VP Analytics | Monthly/quarterly | YES — the LTV/CAC ratio in board decks is hand-built from cohort curves |

**Kana angle (Stage 5):** Every deliverable above is an "assembled manually from disconnected sources" flag. The copy should name them: the Monday trade pack (Category Intelligence), the weekly CAC:LTV report and board deck (Marketing Intelligence), the monthly retention report that reports churn after it happened (Customer Engagement), the promo post-mortem that arrives too late to change the next promo (Category Intelligence + Marketing Intelligence). Openers in outbound should reference the named artifact, not the abstract pain.

## Stage 6 — Pressures & politics

- **CFO scrutiny is the sharpest it's been:** board pressure on marketing up 21% (2023→2025) with a **52% increase in pressure from the CFO** specifically; 74% of CMOs say they're under more scrutiny to prove ROI; budgets flat at 7.7% of revenue (The CMO Survey 2026; CMSWire 2026).
- **Brand-building support fading:** CEOs/CFOs backing long-term brand investment dropped 11 points to 69% — short-term performance pressure wins (NIQ CMO Outlook 2026).
- **Exec AI mandate:** CMOs allocate 15.3% of budgets to AI, 70% call AI leadership a critical 2026 goal, but only 30% report mature AI readiness (Gartner CMO Spend Survey 2026) — the "we need an AI story for the board" anxiety is real and current.
- **The loyalty gap:** 89% of executives think customers became MORE loyal; only 39% of consumers agree (PwC via BCG/NIQ 2025-26); true brand loyalty fell to 29% in 2025 (-5 pts YoY) and 60% of consumers switched a loyal brand over cost (2025). Retail churn benchmarks: ~25.4% (CustomerGauge 2025); e-commerce sees 70–77% of first-time buyers never return (CRO Benchmark 2025).
- **Attribution distrust:** platforms self-grade — "Meta reports 4,000 conversions, your analytics records 1,200" (Lyxel&Flamingo 2026); 80%+ of companies say signal loss/privacy legislation directly changed their org structure (Trackier 2026). In-store conversions remain the biggest blind spot with ~84% of retail closing offline.
- **Throughline "industry is changing" pressure for narrative campaigns:** acquisition economics broke (CAC +60% in 5 yrs, auction inflation, signal loss) at the same moment the CFO started auditing every dollar — so the growth math has to flip from buying new customers to keeping and measuring the ones you have. That flip is exactly the data problem retailers haven't solved.

**Kana angle (Stage 6):** The emotional register for this page is *margin defense under CFO scrutiny*, not growth swagger. Customer Engagement speaks to the loyalty-gap embarrassment (execs think loyalty is up; churn data says otherwise) and the discount-margin burn. Marketing Intelligence speaks directly to the 52%-more-CFO-pressure stat — "show the number commercial leadership asks for." The AI-mandate stat gives the whole page its umbrella: Kana is the credible AI story a retail CMO can bring to the board without a data-science hiring plan.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Campaign motion |
|---|---|---|---|---|
| Director of Lifecycle / Retention & CRM | Monthly retention report shows churn AFTER the customer lapsed (Stage 5); interventions default to blanket win-back discounts that burn margin on customers who'd return anyway (Stage 3; CE PDF); 70–77% of first-time e-comm buyers never return | **Customer Engagement** | Problem-aware (lives the lagging-indicator pain; doesn't know predictive scoring is buyable off-the-shelf) | Direct |
| Category Manager / Merchant | Monday trade meeting runs on a hand-built Excel WSSI — hours of pulls before any markdown/allocation decision (Stages 3–5); promo post-mortems land too late to fix the next event | **Category Intelligence** | Problem-aware | Direct |
| Marketing / Campaign Ops | Segment requests queue behind data-team SQL; batch pipelines refresh in days while promo windows (BFCM, clearance) are hours (Stages 3–4) | **Audience Builder** | Solution-aware (knows CDPs exist; skeptical of migration cost) | Direct |
| VP E-Commerce / Growth | Weekly CAC:LTV report reconciled by hand from 8–12 tools; channel reallocation runs on platforms grading their own homework (Meta says 4,000 conversions, analytics says 1,200) | **Omni-Channel Media Planner** (+ Marketing Intelligence) | Problem-aware | Direct |
| CMO / VP Analytics | 52% more CFO pressure; board deck LTV:CAC hand-built; ~84% of transactions close offline, invisible to digital attribution; needs an AI story for the board (70% call it critical, 30% ready) | **Marketing Intelligence** | Problem-aware → unaware (doesn't know closed-loop offline attribution is feasible without warehouse migration) | General/narrative |

### Copy ingredients bank

**Cited stats (all ≤2 yrs):**
- E-commerce = 16.4% of US retail sales; ~84% still closes in-store (US Census Bureau, Q3 2025)
- Average e-comm CAC $68–84, up ~60% in five years (LoyaltyLion 2025); Shopify 2026 Global Commerce Report: CAC $274→$318 (+16.1%) across 4.8M merchants
- Acquisition costs 5–25x retention (Kana CE PDF, Feb 2026); 5% retention lift → 25–95% profit lift (Bain via Yotpo)
- Retail churn ~25.4% (CustomerGauge 2025); 70–77% of first-time e-commerce customers never return (CRO Benchmark 2025)
- 89% of executives think customers got more loyal; 39% of consumers agree (NIQ/PwC 2025–26); true brand loyalty fell to 29%, −5 pts (2025)
- 52% increase in CFO pressure on marketing; 74% of CMOs under more ROI scrutiny; budgets flat at 7.7% of revenue (The CMO Survey 2026)
- CMOs put 15.3% of budget into AI; 70% say AI leadership is critical, only 30% are ready (Gartner CMO Spend Survey 2026)
- Senior marketers spend 10–15 hrs/wk consolidating data from 8–12 disconnected tools (Improvado / Luca 2026)
- Meta median ROAS 1.93x vs Google 3.68x — blended numbers hide it (Eightx 2026)

**Named deliverables for openers:** Monday trade meeting / WSSI pack; weekly trading report; promo post-mortem; monthly retention/cohort report; loyalty program quarterly review; category line review; board LTV:CAC deck.

**Jargon glossary:** WSSI (Weekly Stock, Sales & Intake); trade meeting; line review / category review / PLR; planogram / modular reset; markdown cadence; sell-through; basket size; MER / blended ROAS; breakeven ROAS (1/contribution margin); lapsed vs. at-risk cohorts; win-back; BFCM window; open-to-buy.

**Pressure hooks (one-liners):**
1. "Your execs think customers got more loyal. 89% of them do. Only 39% of customers agree."
2. "The monthly retention report is an obituary — every 'churned' row was savable eight weeks earlier."
3. "CAC is up 60% in five years and the CFO just doubled the scrutiny. The cheapest revenue in your P&L is the customer you already paid to acquire."

### Worked example openers

**Direct (Lifecycle Director, Customer Engagement):** "Your monthly retention report tells you who churned — past tense. By the time a lapsed cohort shows up in the Looker pull, the win-back discount is your only lever, and it burns margin on people who were coming back anyway. Kana Customer Engagement reads purchase-frequency and engagement signals weeks before the lapse and tells you who to save, how, and what it's worth."

**General/narrative (CMO, Marketing Intelligence):** "Retail marketing just got margin-called: budgets are flat at 7.7% of revenue, CFO pressure is up 52%, and 84% of your transactions still close somewhere your attribution can't see. The retailers pulling ahead in 2026 aren't spending more — they're the ones who can finally show which digital dollar moved which register."

### Sources

Deloitte 2026 Retail Industry Outlook; US Census Bureau Quarterly E-Commerce Report (Q3 2025); eMarketer US Ecommerce 2025; LoyaltyLion Average CAC 2025; Shopify Global Commerce Report 2026; Invesp acquisition-vs-retention; Yotpo/Bain retention economics; CustomerGauge churn benchmarks 2025; CRO Benchmark e-comm retention 2025; NIQ CMO Outlook 2026; The CMO Survey 2026 (Duke/Deloitte); Gartner CMO Spend Survey 2026; Russell Reynolds CMO hiring analysis 2025; Improvado marketing reporting 2026; Luca e-comm unit economics 2026; Eightx ROAS benchmarks 2026; Style Arcade "Monday Retail Trade"; Commerce Thinking "The Weekly Trade Meeting"; Retail Dogma / Increff WSSI; DotActiv & Yardstick category manager JDs; Heinzeroth / OpenBrand / SPS Commerce line-review prep; o9 Solutions promo post-mortem; Open Loyalty program metrics; CDP.com retail CDP guide 2026; Lyxel&Flamingo measurement trust 2026; Trackier performance marketing paradox 2026; Helzberg Diamonds & Sur La Table job postings (2025–26); Kana solution overview PDFs (Feb 2026); Industry GTM Assets and Use Cases xlsx.





