# QSR (Quick Serve Restaurants) — Industry GTM Brief

**Date:** 2026-07-13 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** QSR industry page at `industries/qsr/`, mirroring the CPG/Retail/Publishers config-driven template (`src/app.js` layout engine).

---

## Stage 0 — Ground truth

### Featured products & positioning (from Rayyan's screenshots, 2026-07-13 — OVERRIDES the xlsx list)

Rayyan uploaded two screenshots of a designed QSR challenge/solution narrative. These are the authoritative roster and positioning for this page. The earlier xlsx list (Brand Intelligence, Category Intelligence, OmniChannel Media Planner, Audience Builder, Customer Engagement) is superseded.

**Hero framing (screenshot 1):**
> "QSR Brands Can't Localize at the Speed of Real Life" — With thousands of locations, micro-level demand variation, and app-driven loyalty as the primary growth lever, QSR marketers face a scale problem that generic campaign tools weren't built to solve.

**Challenge → solution pairs (screenshot 2):**

| # | Challenge | Solution product | Positioning (verbatim ground truth) |
|---|---|---|---|
| 1 | Location-level performance variance isn't informing media spend — national campaigns applied uniformly even when individual markets have radically different traffic patterns, competitive sets, and menu preferences | **Campaign Orchestrator** | "Enables location-aware audience and budget optimization — adjusting spend automatically by market performance signal." |
| 2 | App engagement triggers are disconnected from operations — push notifications go out on time-of-day rules, not real signals; offers drop when an item is out of stock or kitchen capacity is overwhelmed | **Agentic Data Platform** | "Connects operational data feeds to campaign logic, suppressing or adjusting offers based on real-time kitchen and inventory conditions." |
| 3 | Loyalty program offers are one-size-fits-all — every member gets the same buy-10-get-1 offer regardless of visit frequency, order history, channel preference, or price sensitivity | **Personalization** (⚠️ "Coming soon") | "Builds individualized offer logic per member — maximizing incremental visits without cannibalizing full-price purchase behavior." |
| 4 | Day-part targeting doesn't adjust dynamically — breakfast/lunch/dinner campaigns run on calendar schedules, unresponsive to weather, events, traffic, or competitive promotions that shift demand in real time | **Audience Builder** + **Campaign Orchestrator** (paired) | AB: "Works together with the Campaign Orchestrator to ingest external demand signals and support optimized day-part targeting and offer timing across digital and local channels." CO: "Works together with the Audience Builder to ingest external demand signals and auto-adjust offer timing and campaign execution across digital and local channels." |

**Roster notes:**
- Campaign Orchestrator and Audience Builder are established roster names (see publishers/CPG briefs).
- **Agentic Data Platform** and **Personalization** are NEW product names with no solution-overview PDFs; the screenshots' positioning copy is their only grounding — do not invent capabilities beyond it (plus generic Kana platform claims: no rip-and-replace, plain-language, human oversight).
- Personalization must carry a "Coming soon" treatment on the page.

### Target market (xlsx)
- QSR row: suite KFM, priority P1, company with opps: **Checkers**.

### Template contract
Same config keys as CPG/Retail/Publishers: `slug, label, accent, solutionsTitle, logoStripTitle, assets, nav, hero, painPoints[3], solutions[4–5], stats[4], testimonial, faq[3], personas[4–5], showcase (headline + 3 cols), featuredContent, stackShowcase (subtitle + 3 cols + rotations), finalCta`. Nav: grouped suites megamenu (QSR → Kana for Marketers group; add "QSR" to industrySuiteMap in `src/app.js` and to nav.industries lists).

**Kana angle (Stage 0):** The QSR page is a buy-side vertical like CPG/Retail but the unit of marketing is the LOCATION and the DAY-PART, not the SKU or the segment. All four featured products hang off one thesis: national calendars and time-of-day rules can't react to store-level reality (kitchen capacity, stockouts, weather, local competition). Campaign Orchestrator owns location-aware spend; Agentic Data Platform owns the ops-to-marketing data bridge; Audience Builder owns demand-signal day-parting; Personalization (coming soon) owns loyalty offer logic. Research must ground: franchise ad-fund economics, loyalty/app stats, day-part jargon, and the roles who own local media, CRM, and the promo calendar.

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Business model & value chain:**
1. **Franchise-dominated system:** franchisor collects a 4–6% royalty on gross sales + 2–4% national marketing fund contribution; combined 8–11% load is common (CT Acquisitions / eatbreadless royalty guides, 2026). Franchisors run 30–50% operating margins (asset-light royalty stream); franchisees net 5–10% at the unit level after royalties and overhead (Umbrex / Investing.com, 2025–26). Marketing decisions are therefore two-tier: corporate sets the national calendar; franchisees fund and scrutinize it.
2. **Ad-fund structure:** mandatory national ad fund (typically 1–2% per the 2025 Annual Franchise Marketing Leadership Report; up to 2–4% in many QSR systems) + regional/DMA co-ops (1–3%) + required local store marketing. Digital (paid search, social) is the largest ad-fund allocation regardless of sector (Franchising.com, 2025). Structural tension: pooled funds "benefit the many" while some restaurants get left behind (QSR Magazine) — exactly the location-variance problem in the hero.
3. **Digital/app/loyalty is the growth engine:** Taco Bell approaching 50% US digital mix with 30% YoY loyalty-sales growth; loyalty members go from 5.8 to 10.2 visits/year (+76%) (Restaurant Dive, 2026). Chipotle digital = 36.7% of F&B revenue in 2025 (10-K, FY2025). McDonald's: ~$40B systemwide loyalty sales across 70 markets; 60M+ active US members visiting 2–3x more often (Yahoo Finance/QSR Pro, 2026). Drive-thru still 72% of QSR sales (2025, up from 66% in 2019).
4. **Traffic/margin squeeze:** ~30% of all 2025 restaurant visits were deal-driven — the highest rate in 50 years — yet total industry traffic declined (Facteus/Restaurant Dive, 2025–26). 42% of operators weren't profitable in 2025; Moody's negative outlook on the industry (QSR Magazine/qsrresearchhub, 2026). 2026 sales growth (~$1.55T projected) is price-driven, not traffic-driven (QSR Magazine, 2026).

**Value chain:** Corporate brand/calendar team → agency (national media) → regional co-ops/DMA boards → franchisees (local store marketing) → stores (ops: kitchen capacity, stockouts, staffing) → channels: drive-thru, app/loyalty, kiosks, delivery aggregators (DoorDash/UberEats, who tax margin and own the customer data).

**Structurally different from CPG/Retail/Publishers:** the marketing unit is the LOCATION × DAY-PART, not the SKU (CPG) or the segment (Retail) or the line item (Publishers). Demand is hyper-perishable (a lunch hour lost is gone), supply is capacity-constrained (kitchen throughput), and the "P&L owner" (franchisee) is not the campaign owner (corporate) — creating built-in ROI scrutiny of every marketing dollar.

**Kana angle (Stage 1):** The ad-fund governance tension (franchisees funding national campaigns that ignore their market) is the economic engine behind Challenge #1 — Campaign Orchestrator's location-aware spend is the answer to "some restaurants get left behind." The loyalty stats (76% visit lift; ~50% digital mix) justify why one-size-fits-all offers (Challenge #3) are an expensive miss — Personalization's incrementality framing maps to deal-fatigue economics (30% deal-driven visits buying traffic, not loyalty). Perishable day-part demand + capacity constraints ground Agentic Data Platform and Audience Builder.

## Stage 2 — Org map

| Title | Tribe | Exists in QSR? | Notes / false friends |
|---|---|---|---|
| Field Marketing Manager (regional) | brand/field | ✅ core | Owns a region; guides franchisees ("Brand Partners") on local marketing, new openings, monthly promos, menu launches; execution-led (Wingstop/McDonald's postings, 2025–26) |
| Franchise Marketing Manager / Consultant | field | ✅ | Corporate-side franchisee support: campaign adoption, budget allocation, driving traffic (ZipRecruiter/Indeed postings, 2025) |
| Director/Sr. Director of Loyalty & CRM (Lifecycle) | lifecycle | ✅ core | Owns loyalty program, CRM/lifecycle channels (email, push, SMS), promotional calendars, sometimes delivery channels (Shake Shack Sr. Director posting, 2025) |
| Director of Media (Planning) | performance | ✅ | Deploys strategy per DMA; partners with restaurant marketing team on market-level plans (QSR marketing director postings, 2025) |
| Brand Marketing Manager / Calendar owner | brand | ✅ | Owns the national promo/LTO calendar, product launches, brand positioning |
| VP Restaurant Marketing / CMO | exec | ✅ | Owns traffic + sales growth; answers to franchisee councils on ad-fund ROI (Raising Cane's VP posting, 2025) |
| Marketing Analytics / Consumer Insights | analytics | ✅ | Market insights to plans; sales performance readouts to ops leadership |
| Category Manager | — | ❌ | CPG false friend (retail buying role); in QSR "category" = menu category owned by culinary/menu strategy, not a marketing buyer |
| Ad Ops / Yield Manager | — | ❌ | Sell-side publisher roles; absent |
| Shopper/Trade Marketing | — | ❌ | CPG-only; the closest analog is local store marketing (LSM) |
| E-commerce Manager | — | ⚠️ | Exists as "Digital Ordering/App Product" owner, not a merchandiser like Retail |

**Kana angle (Stage 2):** Page personas map cleanly: Field/Franchise Marketing (Campaign Orchestrator — location-aware spend answers the franchisee-facing role's core tension), Loyalty/CRM Director (Personalization coming-soon + Agentic Data Platform — they own the push/offer calendar that fires blind today), Media Director (Campaign Orchestrator/Audience Builder — DMA-level plans that don't flex), Brand/Calendar owner or VP Marketing (Audience Builder + Campaign Orchestrator — day-part demand signals). Copy vocabulary: day-part, LTO, DMA, ad fund, franchisee/operator, local store marketing, traffic, mix — never SKU/shelf/line-item language.

## Stage 3 — Role profiles

### Field / Franchise Marketing Manager (regional)
- **Owns:** a region of franchisees; adoption + execution of the national calendar locally; new-opening marketing; co-op guidance.
- **Mon/Wed/Fri:** Monday — pull last week's sales/traffic by store, prep performance readouts for operators and ops leadership (Wingstop/McD postings, 2025–26); Wednesday — DMA co-op planning calls and franchisee consultations (co-ops are legal entities with bylaws and their own budgets; Franchising.com/GrayCat, 2025); Friday — package LTO/monthly-promo execution kits, chase compliance, evaluate local sponsorships.
- **Workflow:** national calendar lands → translate to regional/DMA plans → sell franchisees on participation → execute via co-op media + LSM → weekly performance analysis, budget/targeting/creative adjusted per location (reliantware/topfiremedia, 2026).
- **Structural pain:** national campaigns applied uniformly across radically different markets (ground truth challenge #1), yet this role is personally accountable to the franchisees left behind by pooled-fund averages (LinkedIn/Hyperlocology co-op discussion, 2025).

### Director of Loyalty & CRM (Lifecycle)
- **Owns:** loyalty program growth, CRM/lifecycle channels (email/push/SMS), promotional calendar for offers, sometimes delivery channel marketing (Shake Shack Sr. Director posting, 2025).
- **Mon/Wed/Fri:** Monday — review weekend campaign metrics (open/redemption rates), adjust the week's sends; Wednesday — build segments and configure offer campaigns (Punchh gifting campaign + Braze notification is literally a two-system setup; Braze/Punchh docs, 2026); Friday — QA the weekend push calendar, ship the weekly program.
- **Structural pain:** push/offer triggers run on time-of-day rules disconnected from store operations (ground truth challenge #2), and every member gets the same offer regardless of behavior (challenge #3) — the platforms ship weekly programs, not per-member logic.

### Director of Media (Planning)
- **Owns:** national/local media mix, DMA-level strategy deployment, agency management; partners with restaurant marketing on market plans (QSR marketing director postings, 2025).
- **Workflow:** annual planning by quarter → DMA allocations → flight-level buys → weekly optimization; day-part campaigns (breakfast/lunch/dinner) run on calendar schedules (ground truth challenge #4).
- **Structural pain:** location-level performance variance isn't informing spend; reallocations happen quarterly at best while demand shifts daily with weather, events, and competitor promos.

### VP Restaurant Marketing / CMO (economic buyer)
- **Owns:** traffic and same-store sales growth; the LTO calendar's business results; ad-fund ROI accountability to franchisee councils (Raising Cane's VP posting, 2025).
- **Context:** LTO advertising starts 30+ days before launch and requires marketing/supply-chain/finance alignment (o9 Solutions, 2025–26); successful LTOs lift traffic/revenue up to 25%, and 7 in 10 restaurant-goers tried an LTO in the past month (QSR Pro/GroundTruth, 2025–26). When a national LTO meets local stockouts or capacity limits, the miss lands on this desk.

**Kana angle (Stage 3):** Campaign Orchestrator speaks to the Field Marketing Manager's Monday readout (store-level performance variance) and the Media Director's static DMA allocations — spend that self-adjusts by market signal. Agentic Data Platform speaks to the CRM Director's two-system offer workflow that has no idea what the kitchen is doing. Personalization (coming soon) is the CRM Director's per-member offer logic. Audience Builder + Campaign Orchestrator give the VP/calendar owner day-part campaigns that flex with weather/events instead of the 30-day-locked LTO plan.

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Loyalty/CRM Director | Punchh (PAR) or Paytronix loyalty console, Braze (push/email), app dashboards | Offer + notification = a two-system setup (Punchh gifting campaign + Braze send; Braze/Punchh docs, 2026). Triggers are time-of-day rules; nothing in the stack reads kitchen or inventory state. Segments ship weekly, not per-member |
| Field/Franchise Marketing Manager | Meta/Google Ads local dashboards, co-op budget sheets, store sales reports (POS exports), PowerPoint readouts | Store-level performance lives in weekly Excel exports; co-op allocations argued in meetings from stale decks; national calendar arrives as a PDF kit |
| Media Director / agency | The Trade Desk/Meta/Google, MMM decks, DMA plans in spreadsheets | DMA budget splits set quarterly in planning sheets; no mechanism to shift spend when one market's traffic pattern diverges |
| Digital/App product owner | Olo (ordering), Toast/Brink/Simphony POS admin, delivery aggregator portals (DoorDash/UberEats) | 86'd items (out-of-stock, industry code) sync to ordering menus via POS (Toast docs) — but NOT to marketing: the app can push an offer for an item the kitchen just 86'd. Aggregators keep guest data |
| Analytics / Insights | GA4, POS BI (e.g. Punchh/Paytronix analytics), Excel | Four partial pictures of the same guest: POS orders, loyalty points, delivery history, reservation/WiFi logs — none talking to each other by default (Fishbowl/mydigimenu, 2025–26) |

**Ecosystem facts:** Punchh is trusted by Taco Bell, Pizza Hut, Dairy Queen; Paytronix has 30+ native POS integrations, 450+ total (Paytronix/loop.fans comparisons, 2026). 58% of operators are increasing IT budgets with digital ordering + POS integration as top priorities (2025 Restaurant Technology Study via evokad, 2026). CDPs are the recognized fix for fragmented guest identity (Olo GDP positioning, 2026).

**Kana angle (Stage 4):** The stack story: loyalty platforms (Punchh/Paytronix/Braze), ordering (Olo), POS (Toast/Brink/Simphony), and ad platforms all run disconnected — the Agentic Data Platform is the bridge that lets campaign logic read the 86 board and kitchen capacity. StackShowcase subtitle should name POS, loyalty platform, ordering system, and ad platforms. "86'd" is the industry's own word for the exact failure in ground-truth Challenge #2 — use it in copy. Rotating stack words: candidates = Punchh, Paytronix, Olo, Toast, Braze, "your stack".

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Weekly comp sales / comp traffic readout (by store, vs. LY) | Field Marketing + Analytics | Weekly | ✅ POS exports + Excel; comp sales = same-store vs. prior year, split into traffic × ticket (Black Box Intelligence glossary) |
| National LTO / promo calendar + execution kits | Brand/Calendar team | Quarterly plan, monthly drops; advertising starts 30+ days pre-launch (o9/QSR Automations) | ✅ PDF kits pushed to franchisees |
| DMA co-op plan + budget allocation | Media Director + co-op boards | Quarterly/annual | ✅ spreadsheets argued in co-op meetings (bylaws-governed entities) |
| Push/offer campaign calendar | Loyalty/CRM Director | Weekly | ✅ two-system setup (Punchh offer + Braze send); time-of-day triggers |
| Promotion recap / LTO post-mortem | Analytics + Brand | Per LTO | ✅ POS lift vs. media spend stitched manually |
| Ad-fund ROI report to franchisee council | VP Marketing | Quarterly | ✅ the political document — corporate defending pooled spend to operators (funnel.io/ABM Alliance CMO-pressure coverage, 2026) |
| Hourly traffic / day-part reports | Ops + Analytics | Daily/weekly | ✅ POS BI (hourly traffic is a standard weekly report; roxpos guide) |
| Local store marketing (LSM) plan per new opening | Field Marketing | Per opening | ✅ templates + local knowledge |

## Stage 6 — Pressures & politics

- **Traffic is the existential metric:** ~30% of 2025 visits were deal-driven (highest in 50 years) yet industry traffic still declined; 15 of 18 major QSR brands have lower retention than before the value wars started (83%) — discounts bought traffic, not loyalty (Facteus/Restaurant Dive, 2025–26). 42% of operators weren't profitable in 2025 (QSR Magazine, 2026). Deal fatigue: consumers respond only to promotions that feel "unique and unmissable" (NRN, 2026).
- **Franchisee politics:** ad funds create structural tension — franchisees pay 2–7% of gross sales into pooled funds and demand proof it moves THEIR comp sales; corporate marketing success is "intrinsically linked to franchisee profitability and alignment" (Franchising.com/ABM Alliance, 2025–26). The quarterly ad-fund ROI meeting is where careers are made or lost.
- **Exec AI pressure:** 2026 is being called the year the QSR stack becomes "franchisee-first," with AI expected to adapt to "the unique dynamics of each three-mile trade zone" ingesting POS, weather, local events, traffic signals (HubKonnect CEO, 2026). CMOs are recast as intelligence executives under pressure for immediate, measurable ROI (ABM Alliance, 2026); incrementality testing is replacing platform-reported attribution (sandyriev 2026 playbook).
- **The real-time gap:** most QSR purchases resolve in under 30 minutes — media must be present in the moment (KORTX 2026 playbook). Weather-triggered local campaigns show dramatic lifts (17% site-traffic lift across 1,700 locations on weather triggers; 300% order rise on winter-morning "weather-synced" ads; CleverTap/AI Digital, 2025–26). Proximity, trade area, and day-part matter more than demographics (KORTX, 2026).
- **Emotional layer:** Field Marketing absorbs franchisee anger over left-behind stores; CRM Director fears the screenshot of a push offer for an 86'd item; Media Director defends static DMA splits against operators reading daily traffic; CMO walks into franchisee councils with a deck proving pooled dollars worked.

**Kana angle (Stage 6):** The narrative arc: the industry is discounting harder than any time in 50 years to buy traffic that isn't coming back, while every dollar is scrutinized by the operators who fund it. The four products are the "localize at the speed of real life" answer: spend that follows market signal (Campaign Orchestrator), offers gated by kitchen reality (Agentic Data Platform), day-parts that flex with weather/events (Audience Builder + CO), and member-level offers that add visits instead of subsidizing them (Personalization, coming soon). The three-mile-trade-zone AI framing (HubKonnect) is third-party validation of the exact hero thesis.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Field/Franchise Marketing Manager | Weekly comp-sales readout shows store-level variance the national calendar ignores; co-op budget sheets reallocate quarterly at best; "some restaurants get left behind" (QSR Magazine) | **Campaign Orchestrator** | Problem-aware | Direct |
| Director of Media | DMA plans in spreadsheets, set quarterly; day-part campaigns on calendar schedules while demand shifts with weather/events/competitor promos (KORTX, 2026) | **Campaign Orchestrator** + **Audience Builder** | Problem-aware | Direct |
| Loyalty/CRM Director | Push/offer calendar fires on time-of-day rules; two-system Punchh+Braze setup can't read the 86 board or kitchen capacity; every member gets the same buy-10-get-1 | **Agentic Data Platform** (now) + **Personalization** (coming soon) | Problem-aware (ops disconnect), solution-aware (personalization) | Direct |
| VP Restaurant Marketing / CMO | Quarterly ad-fund ROI defense to franchisee councils amid 30%-deal-driven traffic and 83% of brands losing retention since the value wars | Full platform story (CO anchor) | Problem-aware | General/narrative |

### Copy ingredients bank

**Cited stats:**
- ~30% of 2025 restaurant visits were deal/promotion-driven — highest rate in 50 years — yet total traffic declined (Facteus/Restaurant Dive, 2025–26)
- 15 of 18 major QSR brands (83%) have lower retention than when the value wars began (Facteus, 2026)
- 42% of restaurant operators weren't profitable in 2025 (QSR Magazine/qsrresearchhub, 2026)
- Loyalty members visit +76% more (5.8 → 10.2 visits/yr, Taco Bell; Restaurant Dive 2026); McDonald's ~$40B loyalty systemwide sales, 60M+ US members visiting 2–3x more (2026); Taco Bell ~50% US digital mix
- Drive-thru = 72% of QSR sales (2025)
- Franchisees contribute 2–7% of gross sales to ad funds (Franzy/franchise guides, 2025)
- LTO ads start 30+ days pre-launch (o9); successful LTOs lift traffic/revenue up to 25% (QSR Pro); 7 in 10 restaurant-goers tried an LTO in the past month (GroundTruth)
- Weather-triggered local campaigns: 17% traffic lift across 1,700 locations; 300% winter-morning order lift on weather-synced ads (CleverTap/AI Digital, 2025–26)
- Most QSR purchases resolve in under 30 minutes (KORTX, 2026)
- 58% of operators increasing IT budgets, digital ordering + POS integration top priorities (2025 Restaurant Technology Study)

**Named deliverables:** the weekly comp-sales/comp-traffic readout, the DMA co-op plan, the national LTO calendar + execution kit, the push/offer calendar, the LTO post-mortem, the quarterly ad-fund ROI report to the franchisee council, the hourly/day-part traffic report, the 86 board.

**Jargon glossary:** day-part, LTO (limited-time offer), comp sales / comp traffic (traffic × ticket), DMA, co-op, ad fund, franchisee/operator, local store marketing (LSM), trade area (three-mile), 86'd (out of stock), value menu/value wars, drive-thru mix, digital mix, loyalty member, incremental visit, cannibalization, AUV, same-store sales. NEVER: SKU, shelf, syndicated data, line items, makegoods, ROAS-as-hero-metric.

**Pressure hooks:**
1. "The industry is discounting harder than any time in 50 years — and traffic is still down."
2. "Your franchisees pay 2–7% of gross sales into the ad fund. They can see which stores the national calendar left behind."
3. "The app just pushed a coupon for an item your kitchen 86'd an hour ago."
4. "Lunch demand shifted with the weather this morning. Your day-part campaign was locked 30 days ago."

### Worked example openers

**Direct (Loyalty/CRM Director / Agentic Data Platform):** "Your push calendar fires at 11:30 because it's 11:30 — not because the kitchen can absorb it. When the fryer line is slammed or the LTO item is 86'd, the offer still goes out, and the guest finds out at the counter. Kana's Agentic Data Platform wires your operational feeds into campaign logic, so offers pause or pivot on real kitchen and inventory conditions."

**General/narrative (CMO / platform):** "QSR is discounting harder than any time in 50 years, and 83% of major brands have worse retention than when the value wars started. The winners in 2026 aren't the brands with the deepest discounts — they're the ones whose marketing reads each trade area's reality: which store is up, which kitchen is slammed, which day-part just shifted with the weather. That's what localizing at the speed of real life means."

### Sources
Kana internal: Rayyan's QSR challenge/solution screenshots (2026-07-13, authoritative roster); Industry GTM Assets xlsx (QSR row: KFM, P1, Checkers).
External: Facteus / Restaurant Dive (value wars, retention, 2025–26); QSR Magazine (traffic state 2026, LTO strategy, co-op tension); qsrresearchhub (operator profitability, 2026); NRN (deal fatigue, 2026); Restaurant Dive (Taco Bell loyalty/digital, 2026); Chipotle 10-K FY2025; Yahoo Finance/QSR Pro (McDonald's loyalty, 2026); Franchising.com + 2025 Annual Franchise Marketing Leadership Report (ad funds); Franzy/eatbreadless/CT Acquisitions (royalty/fee structures, 2025–26); Umbrex (QSR industry model); Wingstop/McDonald's/Shake Shack/Raising Cane's job postings (2025–26); Braze/Punchh docs (two-system offer workflow); Paytronix/loop.fans/voucherify (loyalty platform landscape, 2026); Toast/Rezku/7shifts (86'd), Fishbowl/mydigimenu (guest-data silos); Olo GDP; evokad (2025 Restaurant Technology Study); Black Box Intelligence (comp sales/traffic definitions); roxpos (reporting guide); o9 Solutions/QSR Automations (LTO lead times); QSR Pro/GroundTruth (LTO effectiveness); HubKonnect (2026 hyperlocal AI trends); KORTX (2026 QSR playbook); CleverTap/AI Digital (weather-trigger lifts); ABM Alliance/funnel.io (CMO ROI pressure, 2026).
