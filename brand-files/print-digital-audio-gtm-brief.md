# Print / Digital / Audio Publishers — Industry GTM Brief

**Date:** 2026-07-17 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** One of three publisher sub-vertical landing pages (Media Networks | Print/Digital/Audio | Streaming & Video), replacing the single Publishers page. Config-driven template per `industries/cpg/config.js` + `src/app.js`. Page copy written AFTER this brief, only from brief-traced claims.
**Lineage:** Supersedes and extends `publishers-gtm-brief.md` (2026-07-08). That brief's cited research on print/digital/news remains valid and is carried forward here with its sources; this brief re-scopes to the new site ground truth (adds AUDIO, adds subscriber retention/Personalization, new Sales Intelligence roster).

---

## Stage 0 — Ground truth

### Confirmed Kana for Publishers roster (source: Rayyan's 2026-07-17 screenshots of kana.ai/kana-for-publishers — screenshots supersede all xlsx/PDF rosters)

Five Applications, One Agentic Intelligence Layer: **Sales Intelligence** (media sales intelligence: audience insights, competitive context, automated proposal creation; includes the **Media Proposal Generator agent**), **Campaign Orchestrator**, **Media Proposal Generator**, **Audience Builder**, **LLM Command Center** — plus **Personalization** (GA/live, per Rayyan 2026-07-15), which appears as a named solution on this tab. ⚠️ Known site copy mismatch: the Five Applications card titled "Media Proposal Generator" carries Personalization's churn/LTV description.

### This page's ground truth: Print / Digital / Audio Publishers tab

Hero: **"Publishers Are Navigating a Structural Revenue Shift."** Subhead: cookie deprecation, declining display CPMs, AI-powered content discovery eroding search traffic, and subscription headwinds — simultaneous pressure on advertising and subscription revenue, with legacy infrastructure that wasn't built for what comes next.

| # | Challenge (verbatim from site) | Solution | Solution description (from site) |
|---|---|---|---|
| 1 | First-party data strategy has no clear path to activation | **Audience Builder** | Build, enrich, and activate first-party audience data as a premium, monetizable asset; precise audience packaging for direct-sold campaigns without a data engineering overhaul |
| 2 | AI answer engines are intercepting content traffic | **LLM Command Center** | Monitors how publisher content appears in AI-generated responses across major LLMs, identifies coverage and accuracy gaps, surfaces opportunities to optimize content for AI-era discovery and attribution |
| 3 | Direct sales teams can't scale proposal creation to match demand | **Sales Intelligence** (incl. Media Proposal Generator agent) | Enables sellers to produce data-backed, tailored proposals in minutes, increasing deal volume without adding headcount |
| 4 | Subscriber retention requires personalization infrastructure most publishers don't have | **Personalization** | Monitors subscriber engagement signals in real time, identifies churn risk indicators early, triggers tailored retention offers and content experiences before cancellation intent solidifies |
| 5 | Campaign operations across formats are still largely manual | **Campaign Orchestrator** | Automates campaign monitoring, pacing alerts, and cross-format performance reporting; challenge names display, native, newsletter, audio, and podcast inventory simultaneously |

**Note vs. the 2026-07-08 Publishers page:** LLM Command Center's positioning has shifted from crawl-control/licensing enforcement (CDN-layer blocking, pay-per-crawl) toward **AI-visibility optimization** (how content APPEARS in AI answers, coverage/accuracy gaps, AI-era discovery). Both live in the product per earlier docs; the page copy should lead with the new visibility framing. Campaign Orchestrator's framing is now cross-format (display, native, newsletter, audio, podcast) rather than GAM-only. Personalization/subscriber retention is entirely new to this vertical.

**Kana angle (Stage 0):** This tab is the closest heir of the old Publishers page — ad ops, RFP velocity, and AI-traffic anxiety carry over with their proven research — but the page now runs on a dual-revenue skeleton (advertising AND subscriptions), with Personalization owning the reader-revenue side and "audio" pulling podcast/newsletter formats into the ops story.

---

## Stage 1 — Industry economics

**Dominant business models (now four, spanning the tab's full scope):**
1. **Advertising (display/native/newsletter)** — direct-sold (guaranteed IOs, sponsorships) + programmatic. Direct-sold is where the margin is: PMP spend grew ~13% in 2025 as buyers left open auction; LADbible takes 54% of revenue via direct sales while open-web programmatic declines double digits (INMA/Madison Logic, 2025 — carried from publishers brief). Display CPM decline is named in the site hero verbatim.
2. **Audio/podcast advertising** — the growth format: US podcast ad revenue hit **$2.9B in 2025, +17.6% YoY**, projected to exceed **$3B in 2026 (+9.6%)** — one of the strongest-growing channels while overall US ad growth slows; digital audio overall reached $8.4B, +10.2% (IAB US Podcast Ad Revenue Study / digital audio report, April 2026). Host-read ads command premium CPMs on trust; measurement matured via IAB Tech Lab Podcast Guidelines 2.2 + pixel attribution (Podscribe, Magellan AI).
3. **Reader revenue (subscriptions)** — now the strategic center: 76% of commercial publishers say paid content is their primary focus (Reuters Institute, 2026); subscription share of publisher revenue climbed steadily 2023→2025 (Digiday, 2025); publishers raised prices ~5% YoY in 2025. But growth is retention-constrained: **monthly churn for online news runs ~4% (news-specific benchmark 5.47%/mo; digital publishing ~3.9%)** (RetentionCheck benchmark 2026; Digital Content Next, 2025); "the days of easy subscriber growth are over" — the post-pandemic playbook shifted to retention, tiering, and bundles (DCN, 2025).
4. **Licensing & "other"** — AI/content licensing now material: "other" revenue is 25.4% of publisher revenue, ~2× 2021; 60%+ of publishers expect AI licensing revenue in 2026; News Corp–OpenAI benchmark $250M+/5yr (INMA/Reuters Institute/Digiday — carried from publishers brief).

**The structural shock (site hero's "structural revenue shift," fully sourced):** Google search traffic to publishers fell ~33% globally in the year to Nov 2025 (US −38%); AI Overviews correlate with 58% CTR reduction on top-ranked results; zero-click searches rose 56%→69% May 2024→May 2025; publishers expect a further ~43% search decline over 3 years; chatbot referrals remain <1% of page views (Press Gazette / Digiday / 9to5google, 2025–26 — carried from publishers brief). Cookie deprecation + declining display CPMs squeeze the ad line at the same time — hence "simultaneous pressure on both advertising and subscription revenue."

**Value chain:** advertisers/agencies → publisher sales desk (RFP → proposal → IO) → ad ops trafficking across **display, native, newsletter, audio, podcast** inventory (GAM + email platform + podcast ad server) → yield/programmatic → audience/data team (first-party segments, registration walls) → editorial/content studio → distribution platforms (Google, social, AI assistants, Apple/Spotify for audio) → consumers, who are simultaneously subscribers (lifecycle/retention team).

**What's structurally different from Media Networks and Streaming:** no transaction loop (proof = engagement/brand outcomes, not SKU sales), content is the product AND the subscription good, and the org runs two P&Ls (ad revenue + reader revenue) on shared infrastructure. Cross-format inventory (a sponsorship spanning display + newsletter + podcast) is normal here and rare elsewhere — which is exactly why ops is manual.

**Kana angle (Stage 1):** The dual-revenue squeeze maps 1:1 to the five challenges: the ad line's answer is first-party audience products (Audience Builder — 44% of publishers plan >40% of 2026 impressions on first-party data) and sales velocity (Sales Intelligence); the reader-revenue line's answer is churn interception (Personalization — a ~4%/month churn base compounds to losing nearly half the base yearly); the traffic shock is LLM Command Center's wedge, now framed as AI-visibility optimization rather than just crawl control; and cross-format campaign sprawl (display+native+newsletter+audio) is Campaign Orchestrator's. The hero's economics are real and current — cite them, don't soften them.

---

## Stage 2 — Org map

Carried forward from publishers brief (2026-07-08, still valid, sources there): Ad Operations Manager / Trafficker, sell-side Campaign Manager (false friend vs. buy-side), Yield Manager, Programmatic Analyst, Sales Planner / AE (sell-side false friend vs. buy-side media planner), Head of Digital Revenue / VP Ad Ops (economic buyer), Director of Audience Development, VP Data / Director of Audience & Data Strategy, AI Partnerships lead ("the AI negotiator" — Digiday 2025). Category Manager / Brand Manager remain ❌ false friends.

**New rows for this tab's scope:**

| Title | Tribe | Exists here? | Notes / false friends |
|---|---|---|---|
| Podcast / Audio Ad Operations Manager | ops | ✅ (audio publishers, podcast networks) | Owns end-to-end trafficking across podcasts + newsletters + YouTube + social; dynamic ad insertion in Megaphone/ART19; builds recaps and "calculates makegoods when campaigns underdeliver" (Mark Manson co. posting via Podnews, 2026) |
| Head of Retention / Subscriber Retention Manager | lifecycle | ✅ (subscription publishers) | Real role at UK/US publishers — e.g., Future plc's head of retention: "retention should be front and centre of any subscription strategy" (InPublishing). Owns churn, save offers, winbacks |
| Growth / Subscriptions Marketing Manager | lifecycle | ✅ | Owns activation→retention→reactivation KPIs and lifecycle campaigns across email/app (job-board composites, 2025–26) |
| Newsletter Editor / CRM-Email Manager | content/lifecycle | ✅ | Newsletters are both a product and ad inventory; sponsorship trafficking often manual (Paved guide, 2025) |
| Head of Audio / Podcast GM | exec/content | ✅ at audio-forward publishers | Owns the show slate and audio P&L |

**Kana angle (Stage 2):** The persona set widens from the old page's four: keep Ad Ops (now cross-format), Sales Planner/AE (Sales Intelligence), Head of Digital Revenue, VP Data/Audience — and ADD the lifecycle tribe (Head of Retention / Subscriptions Growth) as Personalization's buyer. The audio ad ops role is the sharpest proof of the cross-format pain: one person trafficking five channels on disconnected tooling. False-friend discipline holds: no ROAS, no category managers; retention vocabulary is churn/save/winback/engagement, not "CRM performance."

## Stage 3 — Role profiles

Carried forward (publishers brief, sources there): **Ad Operations Manager** (60–90 min morning GAM check — ProOps 2026; IO→trafficking→pacing→reconciliation→makegood workflow), **Sales Planner / AE** (RFP triage; avails expire ~48hrs; 4–6 day proposal cycle vs. 24-hr agency window — Kana MPG doc; 38 hrs/$3,018 per campaign on RFPs — Bionic), **Head of Digital Revenue** (revenue defense; AI-negotiator second mandate), **VP Data / Audience Strategy** (collect→unify→segment→package→prove workflow; 71%/85% Omeda stats; News UK synthetic audiences precedent).

**New profiles for this tab:**

### Podcast / Audio Ad Operations Manager (Podnews posting, 2026)
- **Owns:** trafficking across podcasts, newsletters, YouTube, social; DAI campaign setup in Megaphone/ART19; inventory + scheduling calendars; creative asset intake, talking points, approvals; QA of every campaign; attribution infrastructure (pixels, CAPI, GA4, UTMs).
- **Mon/Wed/Fri:** Monday — pull weekend delivery across hosting platform + email platform + YouTube, reconcile against IO goals; Wednesday — traffic new campaigns, chase host-read talking-point approvals, schedule DAI markers; Friday — "pull campaign delivery and performance data, build recaps, calculate makegoods when campaigns underdeliver" (verbatim job duty).
- **The pain in one line:** five channels, five dashboards, one person, and the recap deck is manual.

### Head of Retention / Subscriptions Growth Manager
- **Owns:** monthly/annual churn rate, save-offer performance, winback campaigns, engagement-based risk scoring (where it exists), pricing/tier migrations.
- **Mon/Wed/Fri:** Monday — churn dashboard review (cancels, payment failures, engagement cliffs); Wednesday — lifecycle campaign builds (onboarding series, pre-renewal touchpoints, save flows); Friday — cohort retention reporting to the exec team.
- **Pain ground truth:** monthly churn ~4–5.5% for news subscriptions (RetentionCheck 2026); growth now comes from retention, tiers, and bundles, not acquisition (DCN, 2025); the site challenge is verbatim: churn "spikes at renewal windows, after content gaps, or when competitive alternatives launch," and most publishers lack infrastructure to catch at-risk subscribers early — intervention today is a generic exit-survey discount, not a behavioral-signal trigger.

**Kana angle (Stage 3):** Personalization's pitch writes itself from the retention profile: the Head of Retention sees churn AFTER the cancel (dashboard is a lagging cohort report); Personalization watches engagement signals in real time and fires tailored offers before cancellation intent solidifies — precisely the infrastructure the site says "most publishers don't have." Campaign Orchestrator's cross-format framing lands on the audio ops profile: pacing alerts and performance reporting across display + newsletter + podcast simultaneously replaces the Friday recap-building ritual. Sales Intelligence inherits the proven RFP-velocity story with the data-backed-proposal upgrade.

---

## Stage 4 — Tool stack

Carried forward (publishers brief, sources there): Ad Ops on GAM + verification + Excel (12–18 hrs/wk copying metrics into spreadsheets — Aditude 2025; 79% say tools inadequate); Sales on Salesforce/Boostr/Operative + GAM avails + slides + tribal rate cards; VP Data on CDP/GA4 + clean rooms with segment requests queued behind data engineering; Head of Digital Revenue on Looker/Tableau + robots.txt/Cloudflare bot analytics.

**New rows for this tab:**

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Podcast/Audio Ad Ops | Megaphone or ART19 (DAI), YouTube Studio, ESP (beehiiv/Sailthru/Iterable), GA4/UTM sheets, Excel | Five channels, five dashboards; "a publisher juggling five sponsors across three newsletters, all tracked in separate spreadsheets, will eventually miss a placement, send the wrong creative, or fail to deliver a performance report on time" (Media Intercept, 2025). Recaps and makegood math are manual |
| Head of Retention / Subs Growth | Piano or Zephr (paywall/subscriber experience), Zuora/billing, Braze/ESP for lifecycle, cohort dashboards | Churn prediction exists only at the paywall layer (propensity models for conversion); post-subscribe engagement-decay signals sit in analytics, unconnected to offer triggers — the site challenge verbatim: personalization infrastructure "most publishers don't have." Cross-tool data inconsistencies: "one tool for email delivery, another for billing, a third for reporting — data inconsistencies pile up" (Media Intercept, 2025) |
| Audience Development / SEO lead | GA4, Search Console, and now GEO tools (Profound, Ahrefs Brand Radar, Semrush AI Toolkit…) | AI-visibility tracking became a software category only in 2025–26 (8+ platforms; 22K searches/mo for "GEO" — LLMrefs/MarketScale, 2026); most publishers still have zero view of how their content appears in AI answers |

**Kana angle (Stage 4):** Name the stack: GAM, Megaphone, the ESP, Piano/Zephr, Salesforce — and Excel as the connective tissue. Campaign Orchestrator's cross-format claim lands precisely on the five-dashboards problem. Personalization's differentiation vs. Piano/Zephr: those optimize the paywall moment (conversion); Personalization watches post-subscribe engagement signals and triggers retention interventions — the layer the incumbent stack doesn't cover. LLM Command Center enters a fresh but now-competitive GEO category: differentiate on being publisher-native (coverage/accuracy gaps + attribution, tied to the same platform that runs ad ops and audience), not another brand-monitoring dashboard.

## Stage 5 — Deliverables inventory

Carried forward (publishers brief, sources there): morning GAM pacing check (60–90 min), weekly delivery report, end-of-campaign wrap report, makegood/discrepancy memo, RFP response deck (4–6 days), media kit/rate card, monthly yield report, revenue forecast, audience segment one-pagers, AI-licensing negotiation prep.

**New rows for this tab:**

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Cross-format sponsorship recap (display + newsletter + podcast + social) | Audio/Ad Ops + AM | Per flight | ✅ verbatim job duty: pull delivery data across platforms, "build recaps, calculate makegoods" (Podnews posting, 2026) |
| Churn / cohort retention report | Head of Retention | Weekly/monthly | ✅ billing exports + engagement analytics joined by hand; lagging by design |
| Save-offer & winback campaign builds | Retention / lifecycle | Ongoing | ✅ segment pulls from billing + ESP; triggers are calendar-based (renewal date), not behavior-based |
| Newsletter sponsorship calendar & placement tracker | Newsletter/CRM manager | Weekly | ✅ spreadsheets per newsletter per sponsor (Media Intercept, 2025) |
| AI-visibility / GEO report (how content surfaces in AI answers) | Audience dev / SEO | NEW — monthly where it exists at all | ✅ manual spot-checks or a point GEO tool, disconnected from revenue systems |

**Kana angle (Stage 5):** Best openers for this page: the cross-format recap deck, the churn cohort report that arrives after the cancels, the newsletter placement tracker, the morning pacing check (carried), the RFP deck (carried). Personalization's demo moment: an engagement cliff detected Tuesday triggers a tailored offer Tuesday — not a report in next month's cohort review.

## Stage 6 — Pressures & politics

Carried forward (publishers brief, sources there): traffic collapse as board-level existential pressure (Google −33%, "extinction-level event," FT −25–30% search referrals); lean-team pressure (3,434 journalism cuts 2025; 13.2% avg workforce cuts 2026); advertiser transparency (ISBA/PwC 51%); AI-licensing politics (editorial vs. bizdev vs. legal).

**New/updated pressures:**
- **The retention treadmill:** "churn and burn" — publishers chasing subscription volume are "paradoxically left vulnerable to revenue shortfalls" (Digiday); with monthly churn ~4–5.5%, a publisher must replace roughly half its base annually just to stay flat. Acquisition-era tooling (paywall propensity) doesn't solve post-subscribe decay; retention leads know their intervention arrives too late (exit-survey discounts).
- **The visibility flip:** the AI-traffic anxiety has professionalized — GEO is now a measurable discipline with a vendor category (8+ platforms, 2026), organic traffic to news publishers fell from 2.3B monthly visits (mid-2024) to under 1.7B (May 2025), and Princeton GEO research shows content with statistics + credible citations gains up to 40% more AI visibility. Execs are moving from "block or license?" to "how do we WIN placement in AI answers?" — the exact reframe in the new LLM Command Center card.
- **Format sprawl vs. headcount:** revenue diversification (podcasts, newsletters, events, licensing — People Inc./Ziff Davis reporting off-platform growth, 2025–26) multiplies the surfaces one lean ops team must traffic, monitor, and report — while advertisers "lose trust in the numbers" when cross-tool reporting disagrees, making renewals harder (Media Intercept, 2025).
- **Emotional layer:** Retention lead = watching a leaky bucket with a monthly report; Audio ops = the five-dashboard Friday recap; Sales = quota against faster competitors; Exec = defending two revenue lines that are both under structural attack.

**Kana angle (Stage 6):** The page narrative: both of your revenue lines — advertising and subscriptions — now depend on infrastructure you don't have: activation for your first-party data, real-time interception for your churn, unified ops for your five formats, and managed presence in AI answers. Kana is that missing layer. The tone should acknowledge the structural shift as fact (the audience already believes it; they live it) and pivot fast to agency: what winners are instrumenting NOW.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| VP Data / Audience Strategy | Rich first-party behavioral data with no efficient segmentation/activation path (site challenge verbatim); segment requests queue behind data engineering; 44% of publishers plan >40% of 2026 impressions on first-party data (Adtelligent, 2025) | **Audience Builder** | Solution-aware | Direct |
| Audience Dev / SEO lead + Head of Digital Revenue | Organic traffic 2.3B→<1.7B monthly visits in a year; zero-click 56%→69%; no view of coverage/accuracy in AI answers; GEO tooling brand-new | **LLM Command Center** | Problem-aware (was unaware in 2025 — the category has since formed) | General/narrative + direct hybrid |
| Sales Planner / AE / VP Sales | 4–6 day proposal cycle vs. 24-hr agency window (Kana MPG doc); avails expire ~48h; pricing tribal; audience-backed packages bottleneck sellers (site challenge verbatim) | **Sales Intelligence** (incl. MPG agent) | Solution-aware | Direct |
| Head of Retention / Subscriptions Growth | ~4–5.5%/mo churn; churn spikes at renewal windows and content gaps (site verbatim); interventions are calendar-based and late; paywall tools only cover the conversion moment | **Personalization** | Problem-aware | Direct |
| Ad Ops (incl. Podcast/Audio Ad Ops) | Trafficking + pacing + recaps across display, native, newsletter, audio, podcast in five disconnected dashboards; manual makegood math (Podnews posting, 2026); 12–18 hrs/wk spreadsheet copying (Aditude, 2025) | **Campaign Orchestrator** | Problem-aware | Direct (PLG motion proven) |

### Copy ingredients bank

**Cited stats (new to this brief; publishers-brief stats also remain usable):**
- US podcast ad revenue $2.9B in 2025 (+17.6%), >$3B projected 2026 (+9.6%); digital audio $8.4B (IAB, April 2026)
- Monthly news-subscription churn ~4% (news-specific 5.47%/mo; digital publishing ~3.9%) (RetentionCheck 2026 / DCN 2025)
- 76% of publishers: paid content is the #1 focus (Reuters Institute, 2026); prices +5% YoY (2025)
- 44% of publishers plan >40% of 2026 impressions on first-party data; 71% call it key to ad results; 85% expect its monetization role to grow (Adtelligent/Omeda, 2025)
- News publisher organic traffic: 2.3B monthly visits (mid-2024) → <1.7B (May 2025); zero-click 56%→69% (2025)
- Content with statistics + credible sources gains up to 40% more AI-answer visibility (Princeton GEO research)
- GEO became a software category: 8+ platforms, ~22K monthly searches (2026)
- Carried: Google traffic −33%; 60–90 min morning GAM check; 4–6 day proposals vs. 24-hr window; 38 hrs/$3,018 per RFP; 12–18 hrs/wk spreadsheet copying; OpenAI 1,500 bots per referred user; $250M News Corp–OpenAI deal

**Named deliverables for openers:** the cross-format recap deck, the churn cohort report, the save-offer flow, the newsletter placement tracker, the morning pacing check, the RFP deck, the media kit, the AI-visibility report.

**Jargon glossary:** carried publisher glossary (IOs, makegoods, pacing, avails, eCPM, PMP, direct-sold, wrap report…) PLUS: DAI (dynamic ad insertion), host-read, mid-roll/pre-roll, ESP, save offer, winback, cohort retention, engagement cliff, paywall propensity, registration wall, GEO / AI visibility, citations/coverage. NEVER: ROAS as the primary frame, category manager, retail vocabulary.

**Pressure hooks (one-liners):**
1. "At 4% monthly churn, you replace half your subscriber base every year just to stand still."
2. "Your churn report tells you who cancelled. It's a list of people you can no longer save."
3. "Five formats, five dashboards, one ops team — and the recap deck is still built by hand on Friday."
4. "Your content is in the AI's answer. Your name isn't. That's the new zero-click."

### Worked example openers

**Direct (Head of Retention / Personalization):** "Your cohort report is accurate, thorough, and three weeks too late — by the time a subscriber shows up in it, they've cancelled. Kana's Personalization watches engagement signals in real time and triggers the tailored save offer while there's still someone to save."

**General/narrative (exec / LLM Command Center):** "Publishers spent two decades learning to win the search results page; the results page is now an AI answer, and news publishers' organic traffic dropped from 2.3 billion visits a month to under 1.7 billion in a single year. The next discipline isn't ranking — it's being cited, accurately, in the answer itself. The publishers who treat AI visibility like they once treated SEO will own the discovery layer everyone else is losing."

### Sources

- Kana ground truth: Rayyan's 2026-07-17 screenshots (Print/Digital/Audio tab, Five Applications, hero); publishers-gtm-brief.md (2026-07-08) and its full source list (Press Gazette, Digiday, INMA, ProOps, Aditude, Beeler.Tech, Omeda, Cloudflare, Bionic, ISBA/PwC, Reuters Institute et al.).
- New: IAB US Podcast Advertising Revenue Study via Radio Ink/Barrett Media (April 2026): $2.9B/+17.6%, $8.4B digital audio, 2026 +9.6%. RetentionCheck (2026): news churn benchmark. Digital Content Next (2025): subscription growth trends. Digiday (2025): subscriptions rising as traffic shrinks; "churn and burn." E&P/INMA/Pugpig (2025–26): retention strategies, Future plc head of retention (InPublishing). Adtelligent/BidsCube/Admiral (2025–26): first-party data activation stats. Podnews job posting (Mark Manson co., 2026): podcast ad ops duties. Media Intercept/Paved (2025): newsletter ops. Zuora/Zephr, Piano, Leaky Paywall, Nieman Lab (2025–26): subscription stack. LLMrefs/MarketScale/Omnibound/SitePoint (2026): GEO category, traffic decline, Princeton research. StackAdapt/Improvado (2026): cross-channel attribution distrust.
