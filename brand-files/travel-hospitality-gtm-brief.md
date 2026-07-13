# Travel & Hospitality — Industry GTM Brief

**Date:** 2026-07-13 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** Rebuild of the placeholder page at `industries/travel-hospitality/`, on the CPG/Retail/Publishers/QSR/FS config-driven template (`src/app.js`). Existing slug `travel-hospitality`, label "Travel & Hospitality", accent `#d4af37` (gold) retained.

---

## Stage 0 — Ground truth

### Featured products & positioning (from Rayyan's screenshots, 2026-07-13 — authoritative roster for this page)

**Hero framing (screenshot 1):**
> "Travel Brands Are Losing Revenue to Reactive Marketing" — Yield management systems optimize price in real time, but marketing systems still run on batch workflows. The result: pricing moves faster than offers, and loyalty members receive generic messages that ignore their real-time intent signals.

**Challenge → solution pairs (screenshot 2, verbatim ground truth):**

| # | Challenge | Solution product | Positioning |
|---|---|---|---|
| 1 | Revenue management and marketing speak different languages — yield and pricing signals never reach the marketing layer in time to adjust offers, suppress discounts on high-demand routes, or personalize urgency messaging | **Agentic Data Platform** | "Connects pricing and availability signals to the campaign layer — enabling offers that dynamically reflect real-time revenue strategy." |
| 2 | Loyalty personalization is limited to batch email segments — high-value loyalty members receive the same promotional email as new subscribers, because the personalization layer has no access to real-time behavioral intent | **Personalization** (⚠️ "Coming soon") | "Monitors loyalty member activity signals and triggers contextually relevant offers across email, app, and web in real time." |
| 3 | Competitive rate changes require manual monitoring and response — when a competitor drops rates on a key route or destination, the marketing team finds out from sales, hours or days too late to respond effectively | **Category Intelligence** | "Monitors competitive pricing signals continuously and surfaces alerts with recommended messaging and audience responses." |
| 4 | Post-stay re-engagement is untimed and generic — win-back and anniversary campaigns go out on fixed schedules regardless of a guest's next booking window, travel intent signals, or membership tier dynamics | **Audience Builder** + **Campaign Orchestrator** (paired) | AB: "Works together with the Campaign Orchestrator to identify re-engagement windows based on behavioral signals and support personalized outreach." CO: "Works together with the Audience Builder to use behavioral insights and trigger personalized outreach at the optimal moment." |

**Roster notes:**
- **Category Intelligence gets a NEW T&H positioning**: competitive rate/pricing monitoring with recommended responses — NOT the CPG/Retail syndicated-data positioning. Per-vertical positioning rule applies (see FS brief): claims come from this screenshot only.
- Agentic Data Platform (3rd vertical: QSR, FS, now T&H) and Personalization ("Coming soon", 3rd vertical) still have no PDFs; screenshot positioning only.
- Campaign Orchestrator appears only in the paired role (challenge #4) — it gets a solution row but its copy stays within the pairing claim + established generic capabilities.
- Nav chips in the screenshot (CPG, Retail, T&H, QSR, M&E, FS, Healthcare) are from the design mock, not our site nav — ignore.

### Target market (xlsx)
- Travel/Hospitality row: suite KFM, priority P1, no named accounts.

### Template contract
Same config keys as prior verticals; current `industries/travel-hospitality/config.js` is the auto-generated scaffold (placeholder copy, old product names, no personas/showcase/featuredContent/stackShowcase) — full replacement. Accent #d4af37 kept; slug/label unchanged; nav lists already standardized.

**Kana angle (Stage 0):** The T&H thesis is speed asymmetry INSIDE the company: revenue management reprices in real time while marketing ships on batch schedules — so the two systems that both own revenue never talk. Agentic Data Platform is the bridge (pricing/availability → campaign layer); Category Intelligence watches competitors' rates the way revenue managers do, but answers with marketing moves; Audience Builder + Campaign Orchestrator time re-engagement to booking windows instead of calendars; Personalization (coming soon) closes the loyalty batch-email gap. Research must ground: revenue management/RMS practice, loyalty economics, rate-shopping workflows, post-stay lifecycle cadence, and the org split between revenue management and marketing.

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Business models:**
1. **Hotels/resorts** — room revenue (ADR × occupancy = RevPAR) managed by revenue management systems repricing continuously; ancillary (F&B, spa, upgrades). Global hospitality revenue management/pricing analytics market: $4.1B (2024) → projected $13.1B by 2034, 12.6% CAGR (Global Market Insights, Aug 2025). AI dynamic pricing lifts ADR 10–15%; AI forecasting ~20% more accurate than legacy RMS (hoteltechnologynews, 2025).
2. **Airlines** — yield-managed seat inventory (the original revenue management discipline); routes and fare classes repriced in real time.
3. **OTA-vs-direct channel economics:** OTA commissions run 15–25% per booking, exceeding 25–30% with promotional placement (stayinsiders, 2025–26). Guests acquired via the hotel's own CRM rebook at ~33% vs ~6% for OTA-acquired guests — direct/loyalty acquisition is the margin game.
4. **Loyalty** — tourism loyalty programs market: $28.6B (2026) → $64.2B by 2035 (MarkWide, 2026). BUT program costs grew 53.6% since 2022 while room revenue grew only 44.1% — "unsustainable economics" (BookingWhizz/industry, 2026). Hotels adopting 2+ modern loyalty trends (instant recognition, AI personalization, experiential, paid tiers) report +23% loyalty-attributed revenue YoY (2026). Accor launched paid ALL Accor+ subscriptions Oct 2025.

**The structural disconnect (the hero thesis, independently documented):** revenue managers reprice in real time; marketing runs batch campaigns. Documented failure modes: sales promising discounts revenue management won't approve; marketing running deep-discount campaigns misaligned with pricing strategy (Cloudbeds 2026 revenue-marketing guide; Journal of Revenue and Pricing Management via Cloudbeds). The industry's own term for the fix is "commercial convergence" — the prediction that hotels won't have separate sales/marketing/revenue departments (Hospitality Net, 2025–26). Integrated PMS+RMS+CRM with AI lets hotels "launch campaigns in minutes instead of weeks" (Cloudbeds, 2026).

**Value chain:** Brand/corporate → revenue management (RMS) + distribution (CRS/channel manager) → marketing (brand + lifecycle/CRM + paid media) → channels: direct web/app, OTAs (Booking/Expedia), GDS, metasearch → property operations (PMS, front desk) → guest. Loyalty program sits across brand and property.

**Structurally different from other Kana verticals:** the company already HAS a real-time optimization function — revenue management — and marketing is the slow half. The unit of marketing is the GUEST × BOOKING WINDOW × RATE ENVIRONMENT. Demand is perishable like QSR (an unsold room-night is gone) but the price moves continuously, so marketing that ignores the current rate posture actively destroys margin (discounting high-demand dates).

**Kana angle (Stage 1):** The economics validate all four screenshot stories: Agentic Data Platform bridges the two revenue-owning systems (documented misalignment: marketing discounting against pricing strategy); Personalization attacks the batch-email gap in a loyalty sector whose costs are outrunning its revenue (53.6% vs 44.1%) and where AI-personalization adopters see +23% attributed revenue; Audience Builder/Campaign Orchestrator monetize the ~33% CRM rebook rate by timing re-engagement to booking windows; direct-vs-OTA economics (15–30% commissions) make every improvement in owned-channel marketing worth real margin.

## Stage 2 — Org map

| Title | Tribe | Exists in T&H? | Notes / false friends |
|---|---|---|---|
| Director of Revenue Management | revenue/ops | ✅ core, UNIQUE | Owns pricing, forecasting, inventory, channel mix, rate parity; produces daily/weekly/monthly forecasts (HSMAI job description; Indeed postings, 2025). Not a marketer — but owns the signals marketing needs |
| Director of Marketing (property or brand) | brand | ✅ core | Owns positioning, budgets, social, web, collateral; presents marketing performance WITH revenue management (hotel marketing director postings, 2025) — the partnership is formalized but data isn't |
| E-Commerce / Digital Strategy Manager | performance | ✅ | Owns Brand.com, direct booking funnel, metasearch, paid digital; often titled "Director of Revenue Management AND E-Commerce Strategy" at boutiques (Daxton Hotel posting, 2025) — proof the two functions are converging |
| Loyalty / CRM / Lifecycle Marketing Manager | lifecycle | ✅ core | Owns email/SMS/app journeys: acquisition, onboarding, engagement, progression, reactivation, retention; post-stay communications and win-back (Marriott/IHG-class postings, 2025) |
| Revenue Analyst / Market Intelligence | analytics | ✅ | Runs the rate shopper, compset reviews, pickup reports |
| Brand Marketing (chain level) | brand | ✅ | National campaigns, partnerships, media |
| Category Manager | — | ❌ | CPG false friend; "category" here isn't a role |
| Field/Franchise Marketing | — | ⚠️ | Exists at franchised flags (owner relations) but property GM + regional marketing is the pattern; not this page's target |
| Ad Ops / Yield Manager (publisher sense) | — | ❌ | "Yield" in T&H = revenue management, a completely different job — false friend with Publishers vertical |

**Kana angle (Stage 2):** Personas: Director of Revenue Management (Agentic Data Platform — their signals finally reach marketing), Loyalty/CRM Manager (Personalization coming soon + AB/CO re-engagement timing), E-Commerce/Digital Manager (Category Intelligence — competitive rate alerts with marketing responses), Director of Marketing (narrative/platform). "Yield" language must be used the T&H way (revenue management), and the marketing-revenue partnership framing ("presents WITH revenue management") is the wedge: they share a meeting, not a data layer.

## Stage 3 — Role profiles

### Director of Revenue Management
- **Owns:** pricing, forecasting, inventory/channel mix, rate parity; daily pickup monitoring, weekly/monthly forecasts; RevPAR/GOP targets (HSMAI job description; postings 2025).
- **Mon/Wed/Fri:** Monday — weekly revenue meeting: pickup report (rooms/ADR/RevPAR progression vs. booking pace), STR report (compset RevPAR index), forecast review with sales/marketing (HGE templates; foursides, 2025). Wednesday — compset rate review via rate shopper; 30–60 day rate adjustments. Friday — weekend demand posture, restrictions, channel checks.
- **Marketing handoff today:** "aligns" with marketing in the weekly meeting — revenue projections inform when campaigns launch (ramsi forecasting guide, 2025) — but the connection is a meeting cadence, not a data feed. Ground-truth challenge #1: their signals never reach the campaign layer in time.

### Loyalty / CRM / Lifecycle Marketing Manager
- **Owns:** guest journeys across email/SMS/app: acquisition → onboarding → engagement → progression → reactivation → retention; post-stay communications and win-back campaigns (Marriott/IHG-class postings, 2025).
- **Workflow:** segment pull from CRM → batch email calendar → post-stay sequence on fixed timers (checkout + N days) → anniversary/win-back on fixed schedules. Ground-truth challenges #2 and #4: high-value members get the same email as new subscribers; win-back ignores booking windows and travel intent.

### E-Commerce / Digital Strategy Manager
- **Owns:** Brand.com funnel, metasearch, paid digital, direct booking share vs. OTAs.
- **Structural pain:** when a competitor drops rates on a key destination, the rate shopper alerts the REVENUE team; marketing finds out from sales hours or days later (ground-truth challenge #3). Rate-shopper guidance says context matters before responding (different room type? promotion? weak demand?) (propeter/Mews, 2025–26) — exactly the "recommended messaging and audience responses" gap Category Intelligence fills.

### Director of Marketing (property/brand)
- **Owns:** positioning, budgets, web/social/collateral; presents marketing performance alongside revenue management (postings, 2025). Their monthly story depends on data assembled from systems that don't share a guest profile.

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Revenue Manager | RMS (IDeaS, Duetto), PMS (Opera-class), rate shopper (Lighthouse-class), Excel pickup/forecast templates | Weekly exception cuts still manual; rate-shop insights relayed to marketing by email/meeting |
| Loyalty/CRM Manager | Hotel CRM (Revinate/SendSquared-class or Salesforce), ESP, loyalty platform | Batch segments; post-stay timers; no real-time behavioral intent feed |
| E-Commerce Manager | Booking engine admin, metasearch/paid dashboards, GA | Rate-competitiveness context lives in the revenue team's tools |
| Director of Marketing | BI dashboards, decks | The monthly commercial story is stitched by hand |

**The integration reality (the ADP stat):** fewer than 1 in 4 hotels report PMS, CRS, RMS, loyalty, and CRM fully integrated to support a unified guest profile; ~half are partially integrated (scheduled batch exchange between 2–3 systems); ~3 in 10 largely siloed with manual or no reconciliation (Apptad, 2025–26). RMS–CRM connections are called out as critical for value-based pricing and loyalty-aware offers; without RMS–booking-engine links, the right rates never reach the guest at booking time (Duetto/RMS Cloud guides, 2026). 6–16% of guest profiles are duplicates (Apptad, 2025–26).

**Kana angle (Stages 3–4):** The weekly revenue meeting is the industry's own admission that revenue and marketing only sync at human cadence — Agentic Data Platform turns the meeting into a data feed (pricing/availability → campaign layer). The <1-in-4 full-integration stat and the batch-exchange norm are the quantified backdrop for the whole page. Category Intelligence productizes what the rate shopper does for revenue managers, but for marketers — alert + recommended message + audience. The post-stay fixed-timer workflow is the named deliverable Audience Builder/Campaign Orchestrator replace with booking-window timing.

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Weekly revenue meeting pack (pickup, forecast, STR/RevPAR index) | Revenue Manager | Weekly | ✅ RMS + PMS + rate shopper + Excel templates (HGE/foursides) — marketing consumes it as slides, not signals |
| Compset rate review | Revenue Analyst | Daily/weekly | ✅ rate shopper alerts relayed by email; marketing response ad hoc (challenge #3) |
| Post-stay email sequence + win-back/anniversary calendar | Loyalty/CRM Manager | Fixed timers (checkout + N days; annual) | ✅ ESP timers ignore booking windows and intent (challenge #4) |
| Loyalty promo calendar (batch segments) | Loyalty/CRM Manager | Monthly | ✅ same email to high-value members and new subscribers (challenge #2) |
| Marketing performance readout (with revenue mgmt) | Director of Marketing | Monthly | ✅ stitched across GA, ESP, PMS, paid platforms |
| Direct-booking share / channel mix report | E-Commerce Manager | Monthly | ✅ booking engine + OTA extranets + GA |
| Campaign promo briefs (flash sales, seasonal) | Marketing | Per campaign | ✅ built without live rate/availability posture — the misaligned-discount failure mode (Cloudbeds) |

## Stage 6 — Pressures & politics

- **AI trip planning is a new distribution shock:** 58% of active US travelers use AI in travel planning; +64% YoY growth in genAI travel tool use; AI assistants are "a new discovery and booking layer" (hospitality.today/Arival/digitalapplied, 2026). Marketing leaders must answer "what's our AI strategy" while their own stack still batches.
- **Direct-booking economics are the budget defense:** every direct booking saves 15–25% in OTA channel cost; a 14-point direct-share lift on a $20M-room-revenue property ≈ $400–700K annualized savings (hospitality.today, 2026). Personalization is the documented lever: predictive journey mapping + AI personalization report 25–30% booking-conversion lifts (evokad/deltahq, 2026).
- **Integration shame:** fewer than 1 in 4 hotels have fully integrated core systems; the industry openly discusses "commercial convergence" as the future while running on batch exchanges today (Apptad/Hospitality Net, 2025–26).
- **Loyalty cost squeeze:** program costs +53.6% since 2022 vs. +44.1% room revenue — CFOs are asking loyalty to prove incremental revenue, and AI-personalization adopters showing +23% attributed revenue set the benchmark (2026).
- **Emotional layer:** Revenue Manager watches marketing discount dates they're trying to hold rate on; CRM Manager knows the win-back email lands months from the guest's real booking window; E-Commerce Manager hears about competitor rate drops from sales; Director of Marketing presents "alignment" slides while the systems stay siloed.

**Kana angle (Stages 5–6):** The pressure story writes the hero: the industry's fastest-moving system (pricing) and its slowest (batch marketing) share a P&L. Named deliverables for copy: the weekly revenue meeting pack, the pickup report, the compset rate review, the post-stay sequence timers, the win-back calendar. Direct-booking economics (15–25% OTA savings; 25–30% conversion lift from personalization) give the CFO-proof framing for the whole platform.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Director of Revenue Management (+ marketing counterpart) | Weekly revenue meeting is the only sync between pricing and campaigns; marketing discounts against rate strategy (Cloudbeds failure mode) | **Agentic Data Platform** | Problem-aware ("commercial convergence" discourse) | Direct |
| Loyalty / CRM / Lifecycle Manager | Batch loyalty promos treat top-tier members like new subscribers; post-stay/win-back on fixed timers vs. booking windows | **Personalization** (coming soon) + **Audience Builder/Campaign Orchestrator** | Problem-aware | Direct |
| E-Commerce / Digital Strategy Manager | Competitor rate drops reach marketing via sales, hours-to-days late; response lacks recommended messaging/audience | **Category Intelligence** | Solution-aware (rate shoppers exist for revenue teams; marketing-side response tooling doesn't) | Direct |
| Director of Marketing / VP Commercial | Defends budget on direct-booking share; <1-in-4 integrated stacks; AI trip-planning shock | Full platform narrative | Problem-aware | General/narrative |

### Copy ingredients bank

**Cited stats:** <1 in 4 hotels fully integrated core systems (Apptad, 2025–26); OTA commissions 15–25% (to 30% w/ placement); CRM-acquired guests rebook ~33% vs ~6% OTA-acquired (stayinsiders, 2025–26); 14-pt direct-share lift ≈ $400–700K on $20M revenue (hospitality.today, 2026); personalization → 25–30% booking-conversion lift (2026); loyalty costs +53.6% vs revenue +44.1% since 2022; +23% loyalty-attributed revenue for AI-personalization adopters (2026); 58% of US travelers use AI in planning, +64% YoY (2026); AI dynamic pricing lifts ADR 10–15% (2025); revenue-marketing "launch campaigns in minutes instead of weeks" with integrated data (Cloudbeds, 2026).

**Named deliverables:** the weekly revenue meeting pack, the pickup report, the STR/RevPAR index, the compset rate review, the post-stay sequence, the win-back/anniversary calendar, the channel-mix report.

**Jargon glossary:** ADR, RevPAR, occupancy, pickup, booking pace, booking window, compset, rate parity, rate shopper, yield/revenue management, direct vs. OTA, Brand.com, channel mix, guest profile, post-stay, win-back, loyalty tier, flash sale, urgency messaging. NEVER: SKU, day-part (QSR), makegood, line item, principal review.

**Pressure hooks:**
1. "Your pricing changes by the hour. Your marketing changes by the quarter."
2. "The rate shopper told your revenue team at 6am. Marketing found out from sales on Thursday."
3. "The win-back email is scheduled for the guest's anniversary. Their next trip books in March."

### Worked example openers

**Direct (CRM Manager / AB+CO):** "Your post-stay sequence fires at checkout-plus-seven because that's what the timer says — not because that guest books their next trip in March. Kana's Audience Builder and Campaign Orchestrator read behavioral signals to find each guest's real re-engagement window, and trigger the outreach when the booking intent is actually forming."

**General/narrative (VP Commercial / platform):** "Hotels run the most sophisticated real-time pricing in any industry — and market it with batch emails. Fewer than one in four have their core systems integrated enough to share a guest profile, so the revenue strategy changes by the hour while the offer in the inbox is three weeks old. The brands winning direct share in 2026 are the ones whose marketing moves at the speed of their pricing."

### Sources
Kana internal: Rayyan's T&H screenshots (2026-07-13, authoritative roster); xlsx (T&H: KFM, P1).
External: Cloudbeds (revenue marketing guide, RM guide, 2026); Hospitality Net (commercial convergence, 2025–26); Global Market Insights via bizionix (RMS market, 2025); hoteltechnologynews (AI RMS, 2025); stayinsiders (loyalty economics, OTA commissions, rebook rates, 2025–26); BookingWhizz (loyalty trends 2026); MarkWide (loyalty market, 2026); Skift Research (hotel loyalty); hoteltechreport / hotelsmarters / propeter / Mews / PriceLabs / RoomRaccoon (rate shopping & compset, 2025–26); HSMAI (Director of RM job description); Indeed/Glassdoor/JobTarget postings (Director of RM & E-Commerce, hotel marketing director, loyalty/CRM lifecycle roles, 2025); HGE International / foursidesconsulting / roommaster / SiteMinder / Mews (pickup & STR reports); ramsi (forecasting & marketing alignment, 2025); Apptad (integration & profile-duplicate stats, 2025–26); Duetto / RMS Cloud / Stayntouch (integration guides, 2026); SendSquared (hotel CRM, 2026); hospitality.today (direct booking 2026); Arival / digitalapplied / evokad / deltahq / mindfulecotourism (AI travel planning, personalization lifts, 2026).
