# Streaming & Video (OTT / AVOD / SVOD / CTV) — Industry GTM Brief

**Date:** 2026-07-17 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** One of three publisher sub-vertical landing pages (Media Networks | Print/Digital/Audio | Streaming & Video), replacing the single Publishers page. Config-driven template per `industries/cpg/config.js` + `src/app.js`. Page copy written AFTER this brief, only from brief-traced claims.

---

## Stage 0 — Ground truth

### Confirmed Kana for Publishers roster (source: Rayyan's 2026-07-17 screenshots of kana.ai/kana-for-publishers — screenshots supersede all xlsx/PDF rosters)

Five Applications, One Agentic Intelligence Layer: **Sales Intelligence** (incl. Media Proposal Generator agent), **Campaign Orchestrator**, **Media Proposal Generator**, **Audience Builder**, **LLM Command Center** — plus **Personalization** (GA/live per Rayyan 2026-07-15), a named solution on this tab.

### This page's ground truth: Streaming & Video tab (OTT / AVOD / SVOD / CTV)

Hero: **"Streaming Platforms Are Caught Between Revenue and Experience."** Subhead: competing pressures — maximizing ad revenue and subscriber LTV while protecting the viewer experience that keeps subscribers engaged; neither achievable on batch workflows and manual ops models.

| # | Challenge (verbatim from site) | Solution | Solution description (from site) |
|---|---|---|---|
| 1 | Subscriber churn signals aren't connected to real-time retention action | **Personalization** | Triggers tailored retention offers and content recommendations the moment behavioral churn signals cross a risk threshold, automating the intervention that prevents cancellations. Challenge: churn models exist, but by the time risk scores reach the marketing layer, at-risk subscribers have often already cancelled — intervention must happen at the behavioral signal, not days later via batch campaign |
| 2 | Ad load and pod structure are optimized by fixed rules, not viewer signals | **Campaign Orchestrator** | Surfaces ad load intelligence in real time; ops and ad product teams optimize delivery rules on engagement signals and yield outcomes, without manual override cycles. Challenge: ad break frequency, pod length, interruption timing set as static rules, not adjusted for viewer engagement, content type, session depth, real-time yield |
| 3 | Content investment ROI is opaque until long after a title releases | **Campaign Orchestrator** | Synthesizes viewership, subscriber impact, and engagement data into content ROI intelligence informing in-flight optimization and future investment decisions. Challenge: greenlight/renewal decisions rely on incomplete visibility into how titles drive acquisition, retention uplift, long-term engagement — instinct over real-time evidence |
| 4 | Identity fragmentation across devices degrades targeting and personalization | **Audience Builder** | Resolves identity signals across device environments; unified viewer profile improving content personalization accuracy and the quality of audience segments available to advertisers. Challenge: a single viewer appears as four different users across mobile, smart TV, laptop, tablet |
| 5 | AI discovery is eroding organic content reach | **LLM Command Center** | Monitors and optimizes how streaming content appears across AI discovery environments; passive distribution risk → active, manageable competitive advantage. Challenge: consumers increasingly use AI assistants to find shows and content |

**Note:** Campaign Orchestrator carries TWO challenges here (ad load/pod intelligence + content ROI intelligence) — the most expansive positioning of that product on any Kana page. This tab is dual-sided like Print/Digital (ad revenue + subscriber revenue), but the buyer set skews platform-scale: ad product/yield teams, subscriber growth/lifecycle teams, and content strategy — distinct from the M&E page (KFM buy-side subscription marketing), which this page must not duplicate: M&E covers the marketer buying media to win back subscribers; this page covers the platform's own revenue, ops, and experience infrastructure.

**Kana angle (Stage 0):** The hero tension (revenue vs. experience) is the organizing frame: Personalization protects LTV, Campaign Orchestrator arbitrates the ad-load/experience tradeoff and content ROI, Audience Builder fixes the identity substrate both depend on, LLM Command Center defends discovery. Sales Intelligence is notably ABSENT from this tab — do not force it into the page.

---

## Stage 1 — Industry economics

**Dominant business models:**
1. **Ad-supported streaming (AVOD + ad tiers)** — the growth engine: 209.4M US AVOD viewers in 2026; ad-supported plans are 46% of premium SVOD subscriptions; top-five streamers' combined AVOD revenue passed $28B (VAB/eMarketer, 2026). Netflix's ad tier: 70M MAU (2024) → 250M+ monthly ad-tier viewers by its May 2026 Upfront, >half of new sign-ups choosing ads, ~$3B annual ad revenue run rate.
2. **SVOD subscriptions** — the LTV base, now retention-constrained: premium SVOD weighted average churn stabilized ~4.1–4.6%/month in 2025 (a first after years of volatility); specialty SVOD churns at 6.6%/month (Antenna State of Subscriptions, 2025–26; RetentionCheck 2026 pegs streaming average 6.3%).
3. **FAST channels** — 131.4M US FAST users in 2026 (54% of CTV users); Roku Channel ~97.3M, Tubi 92.5M, Pluto 68.6M viewers (eMarketer, 2026). Pure yield businesses: ad load IS the product.
4. **Hybrid/converged monetization** — CTV ad spend $38.0B in 2026 (43% of total TV ad spend, from 23% in 2022; $47.6B/53% projected by 2028) (eMarketer, 2026). YouTube is the largest single CTV ad seller (~$9.2B US net, 2026); Amazon and Disney the only others above 10% share — the same walled-garden concentration dynamic as retail media.

**Value chain:** Content suppliers (studios, originals, sports rights) → content strategy/greenlight (demand analytics, ROI gates) → the platform (product, personalization/recsys, ad product) → ad sales/upfronts + programmatic (FreeWheel/GAM/DSPs) → distribution surfaces (smart TV OEMs, app stores, aggregators — who tax margin and fragment identity) → viewers, who are simultaneously subscribers (lifecycle team) and ad audiences (yield team). The hero's "caught between revenue and experience" is literally the org chart: ad product wants load, lifecycle wants retention, and both share one viewer.

**Content economics (challenge #3 grounding):** Wall Street's profitability mandate forces ROI scrutiny on every greenlight; best practice now = demand-analytics gates and title-level ROI (Parrot Analytics, 2025: demand-layered greenlighting cut development costs 50% and raised library value 126% in one case; Netflix weighs completion rates, binge velocity, regional and demographic splits — high binge velocity correlates with lower churn probability). Apple TV+ quantified ~50K subscriber adds from a single title (The Instigators). But most platforms still see title→subscriber impact long after release — exactly the site's "instinct over real-time evidence."

**What's structurally different from Print/Digital and Media Networks:** the product is the content experience itself — ad decisions (load, pod structure, frequency) directly move the churn line, making revenue-vs-experience a single optimization problem no batch workflow can solve. Identity is device-mediated (smart TV, mobile, tablet, laptop; households, profiles, shared logins), so the substrate for both personalization and ad targeting is fragmentation-prone in ways cookie-era web publishing never was. And discovery is shifting to AI assistants recommending *what to watch* — reach erosion, not just traffic erosion.

**Kana angle (Stage 1):** The economics validate giving Campaign Orchestrator two challenges: ad-tier revenue ($28B+ and climbing) is won or lost in ad-load/pod decisions currently set as static rules, and content spend (the biggest cost line) is gated on ROI evidence that arrives too late. Personalization attacks the churn line where premium platforms fight for every 0.1% of a ~4–6%/month problem. Audience Builder's unified viewer profile is the precondition for both. LLM Command Center rides the same discovery shift as publishers, reframed for content reach.

---

## Stage 2 — Org map

| Title | Tribe | Exists at a streamer? | Notes / false friends |
|---|---|---|---|
| VP Ad Product / Sr. PM, Video Ad Tech (CTV) | ad product | ✅ core | Owns ad-load rules, pod logic, ad-server strategy across FreeWheel/GAM; "works with Sales, Yield, and Revenue Operations teams" (FOX Sr. PM Video Ad Tech posting, 2025–26) |
| Yield / Revenue Operations Manager | ops/analytics | ✅ core | Fill, CPM, sell-through across direct + programmatic demand; upfront commitments vs. scatter |
| Ad Operations Manager (streaming) | ops | ✅ core | Trafficking and delivery across FreeWheel/GAM + DSP deals; sell-side campaign management false friend applies |
| Lifecycle Growth Marketing Manager, Retention | lifecycle | ✅ core | Real posting (Crunchyroll, 2026): "translates behavioral signals and churn models into lifecycle programs"; owns cancel-save, win-back, payment recovery |
| Director, Subscriber Growth / Growth Marketing | lifecycle | ✅ | Acquisition + plan-mix (ad tier vs. premium) + retention KPIs |
| Director, Content Strategy & Insights / Content Analytics | insights | ✅ core | Greenlight/renewal analyses; "data-backed ROI business cases… cost-per-engagement, completion rates, new subscriber impact" (Starz/Sony/Paramount/CNN postings, 2025–26) |
| Director, Streaming Insights & Platform Analytics (AVOD/FAST) | analytics | ✅ | Cross-platform viewership measurement (Sony posting) |
| Personalization / Recommendations Product lead | product | ✅ at scale players | Owns the recsys; adjacent buyer for Personalization + Audience Builder (unified profile improves recs accuracy) |
| Data / Identity lead (CDP, householding) | analytics | ✅ | Owns device graph, profiles vs. accounts vs. households |
| Ad Sales / Agency Sales Director | sales | ✅ | Upfronts, sponsorships; NOTE: Sales Intelligence is not on this tab — sales personas are secondary here |
| Editor / Audience Development (SEO) | — | ❌ mostly | No newsroom SEO tribe; discovery = app-store + recsys + social + now AI assistants |
| Category Manager / Merchant | — | ❌ | Retail false friend |
| "Programmer" / Content Scheduler (FAST) | content | ✅ FAST | Linear-style channel programming for FAST lineups |

**Kana angle (Stage 2):** Personas for the page: (1) Lifecycle/Retention lead — Personalization (the Crunchyroll posting is nearly a Kana pitch: they're hired to translate churn models into interventions, and the site challenge says exactly why that fails today); (2) Ad Product/Yield lead — Campaign Orchestrator (ad-load intelligence); (3) Content Strategy/Insights director — Campaign Orchestrator (content ROI); (4) Data/Identity or Analytics lead — Audience Builder; (5) exec (CMO/Head of Streaming) — LLM Command Center narrative. Vocabulary: pods, ad load, fill, completion rate, binge velocity, cancel-save, win-back, plan mix, householding, device graph, upfronts, FAST lineups. NEVER: makegood-centric GAM vocabulary as the lead (FreeWheel-land), page-view/SEO framing, ROAS.

## Stage 3 — Role profiles

### Lifecycle Growth Marketing Manager, Retention (Crunchyroll posting, 2026 — verbatim duties)
- **Owns:** lifecycle programs protecting recurring revenue and LTV; "active churn (cancel intent) and passive churn (declining engagement, payment risk, or inactivity)"; cancel-save experiences, behavioral nudges, engagement-recovery campaigns, payment recovery; win-back, upgrade/plan-mix KPIs.
- **Mon/Wed/Fri:** Monday — churn dashboard + weekend cancel cohort review; Wednesday — build/segment lifecycle campaigns in the ESP/engagement platform, sync with Data Science on churn-model outputs, define "targeting, triggering, and prioritization frameworks"; Friday — experiment readouts (save-rate, win-back conversion), retention reporting.
- **The structural failure (site challenge verbatim):** churn models exist, but risk scores reach the marketing layer via batch export → campaign build → send; "by the time risk scores reach the marketing layer, at-risk subscribers have often already cancelled."

### Ad Product / Yield Manager (FOX/FreeWheel postings, 2025–26)
- **Owns:** ad-load and pod-structure rules, ad-server configuration (FreeWheel, GAM), yield across direct + programmatic, frequency management.
- **Workflow:** rules are set as static policies (breaks/hour, pod length, competitive separation, frequency caps) → campaigns delivered against them → yield reviewed in weekly/monthly cycles → manual override cycles when fill or experience complaints spike. The site challenge names it: fixed rules, "not adjusted dynamically based on viewer engagement, content type, session depth, or real-time yield outcomes."
- **Mon/Wed/Fri:** Monday — weekend delivery/fill review across ad server + SSP dashboards; Wednesday — pod/load rule-change proposals through product/eng cycles; Friday — yield reporting, upfront pacing vs. commitments.

### Director, Content Strategy & Insights (Starz/Sony/Paramount postings)
- **Owns:** greenlight/renewal analyses, slate ROI cases, title performance measurement; "point person for all linear, VOD, and cross-platform viewership performance."
- **Workflow:** title releases → viewership data accumulates across platforms → completion/engagement/acquisition attribution assembled → renewal recommendation made quarters later. Best-in-class inputs: completion rates, binge velocity, new-subscriber impact, cost-per-engagement — but assembly is retrospective; the site challenge: ROI "opaque until long after a title releases."
- **Mon/Wed/Fri:** Monday — weekend premiere dashboards; Wednesday — deep-dive decks for programming execs; Friday — greenlight-committee prep, comps analysis.

### Data / Identity lead
- **Owns:** device graph, profile/account/household resolution, CDP; feeds both the recsys and ad targeting.
- **Pain (site challenge verbatim):** one viewer = four users across mobile, smart TV, laptop, tablet; behavioral signal fragments, degrading personalization relevance and ad-targeting precision — and ad-tier growth makes the ad-side cost of bad identity compound.

**Kana angle (Stage 3):** Personalization's pitch = collapse the churn-model-to-intervention latency to zero: trigger at the behavioral signal (engagement cliff, failed payment, cancel-page visit), not the batch export. Campaign Orchestrator (ad load) = replace the rule-change-through-product-cycles loop with real-time load/pod intelligence the yield team controls. Campaign Orchestrator (content ROI) = give the insights director in-flight title→subscriber-impact evidence instead of quarter-later retrospectives. Audience Builder = the unified viewer profile all three depend on.

---

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Ad Product / Yield / Ad Ops | FreeWheel (Streaming Hub) or GAM, SSP/DSP dashboards, Excel | Ad-load/pod rules are static configs changed through product/engineering cycles; yield reviewed weekly/monthly; "manual override cycles" (site verbatim). FreeWheel itself is only now productizing ML-based supply/pod optimization (FreeWheel PM postings, 2025–26) — the intelligence layer is nascent |
| Lifecycle / Retention | Braze/Iterable (engagement platform), churn-model outputs from Data Science (batch exports/tables), billing system, experiment platform | The model-to-message gap: churn scores land in a warehouse table; campaigns are built and sent in batches — the latency the site challenge names. Cancel-save flows are static decision trees |
| Content Strategy / Insights | Internal viewership dashboards, Parrot Analytics/Nielsen/Luminate externals, Excel/decks | Title→subscriber-impact attribution assembled retrospectively per greenlight/renewal cycle; cross-platform (own app + FAST + licensing) viewership stitched by hand |
| Data / Identity | CDP (mParticle/Segment-class), device graph vendor, clean rooms, ACR data | "A brand running across Hulu, Roku, and YouTube TV is stitching three incompatible identity systems" (Taboola, 2025); every OEM (Roku, Fire TV, Samsung, LG, Android TV) uses different device IDs; multi-viewer households + VPNs degrade probabilistic models |
| Growth / Subscriber marketing | App-store dashboards, attribution (AppsFlyer-class), plan-mix reporting | Plan-mix (ad tier vs. premium) economics live in finance spreadsheets |

**Kana angle (Stage 4):** The stack story: FreeWheel/GAM run delivery, Braze sends messages, the warehouse holds churn scores — and nothing connects signal to action in real time. Kana positions as the agentic layer between them (consistent with "works with what you've already built"): Personalization = the trigger layer on top of existing churn models + Braze; Campaign Orchestrator = the intelligence layer on top of FreeWheel/GAM configs; Audience Builder = the identity resolution the OEM-fragmented device landscape denies everyone.

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled from disconnected sources? |
|---|---|---|---|
| Churn / retention cohort report | Lifecycle + Data Science | Weekly/monthly | ✅ warehouse exports + billing + engagement data; lagging by design |
| Cancel-save & win-back flow builds | Lifecycle | Ongoing | ✅ static decision trees in the engagement platform; refreshed manually after experiment readouts |
| Ad experience / yield report (fill, CPM, load, frequency complaints) | Yield / Ad Product | Weekly/monthly | ✅ ad server + SSP dashboards + support-ticket anecdata |
| Pod/load rule-change proposal | Ad Product | Per product cycle | ✅ deck + experiment results through eng backlog — the "manual override cycle" |
| Title performance readout / premiere dashboard | Content Insights | Per premiere + quarterly | ✅ own-platform data + external demand trackers stitched per title |
| Greenlight / renewal ROI case | Content Insights | Per decision | ✅ "data-backed ROI business cases… completion rates, new subscriber impact" (Starz posting) assembled quarters after release |
| Upfront pacing report (commitments vs. delivery) | Yield / Rev Ops | Weekly in season | ✅ ad server + OMS reconciliation |
| Audience segment quality report (for advertisers) | Data/Identity + ad sales | Per deal/quarterly | ✅ match rates + reach/frequency dedup across incompatible graphs |
| Plan-mix / ARPU report (ad tier vs. premium) | Growth + finance | Monthly | ✅ billing + ad-revenue-per-user joins in spreadsheets |

**Kana angle (Stage 5):** Openers should name: the cancel-save flow, the churn cohort report, the premiere dashboard, the greenlight ROI case, the pod rule-change cycle, the upfront pacing report. Personalization's demo moment: churn signal crosses threshold mid-binge-drop-off → tailored offer fires same session. Campaign Orchestrator's: ad-load intelligence catches an over-frequency/experience problem before it becomes next quarter's churn line.

## Stage 6 — Pressures & politics

- **Ads are now measurably causing churn:** cancellations citing excessive ads rose 8% in Q2 2025 and now account for 4% of all US paid streaming churn; Hulu, Netflix, Paramount+, Pluto and others saw double-digit growth in ad-volume churn complaints (Kantar, 2025). 37% of US consumers have cancelled a subscription specifically because of ads; 46% say ads "significantly disrupt" the experience; most find >5 min/hour unacceptable; 73% of Gen Z find streaming ads irrelevant (eMarketer/CTAM/FOX research, 2025). The revenue-vs-experience tension in the hero is not rhetoric — it's a churn line item with a Kantar number on it.
- **The churn war is fought against serial churners:** 42% of serial churners cancelled a premium SVOD 5+ times in two years; 19% cancelled 7+ times; >1 in 3 cancellers resubscribe within a year (Antenna, 2024–25). Churn stabilized in 2025 (premium ~4.1–4.6%/mo) partly BECAUSE of ad tiers and better retention ops — the teams that industrialized retention won the stability; laggards churn at specialty-tier rates (6.6%).
- **Wall Street's profitability mandate:** post-2022, content spend faces ROI gates; greenlight/renewal decisions get board scrutiny; demand-analytics-driven decisions show 50% dev-cost reductions (Parrot, 2025). The content org's instinct-vs-evidence fight is generational and political — insights teams need in-flight evidence to win it.
- **Identity is the quiet tax on both P&Ls:** fragmented OEM device graphs degrade ad CPMs (undifferentiated audiences), frequency control (repetition complaints → churn), and personalization relevance simultaneously. "CTV promises precision, but identity remains its weakest link" (Everest Group, 2025).
- **AI discovery has crossed from threat to land-grab:** Tubi became the first streamer with a native ChatGPT app (April 2026) — "@Tubi" in any thread returns curated picks with playback links from its 300K-title library; Gemini on Google TV and Roku AI voice search are shipping; it takes viewers an average of 14 minutes to find something to watch (Nielsen via StreamTV Insider). First movers are converting discovery friction into distribution advantage; everyone else's catalog is invisible in the answer.
- **Emotional layer:** Lifecycle lead = owns the churn number but not the trigger infrastructure; Ad Product = blamed for churn when load rises, blamed for revenue when it drops; Content Insights = defending greenlight calls with quarters-old data; Exec = every earnings call asks about churn, ad ARPU, and content efficiency at once.

**Kana angle (Stage 6):** The page's narrative: revenue and experience aren't a tradeoff to balance — they're a single real-time optimization your batch workflows can't perform. Every pressure above is a latency problem (churn scores that arrive late, ad rules that update quarterly, title ROI that lands after renewal, identity stitched after the fact), and "agentic intelligence layer" is the answer to latency. Tubi/ChatGPT gives LLM Command Center a named, current proof that AI discovery is a land-grab, not a hypothetical.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Lifecycle Growth / Retention Marketing lead | Churn scores reach marketing as batch exports; cancel-save flows are static trees; premium churn ~4.1–4.6%/mo, specialty 6.6%; serial churners cancel 5–7+ times (Antenna) | **Personalization** (anchor) | Problem-aware (they own churn models that don't fire actions) | Direct |
| Ad Product / Yield Manager | Ad load & pod rules are static configs changed through product cycles; ad-volume complaints now 4% of all US streaming churn, +8% Q2 2025 (Kantar); >5 min/hr is consumers' tolerance ceiling | **Campaign Orchestrator** (ad-load intelligence) | Problem-aware (FreeWheel's own roadmap validates the gap) | Direct |
| Director, Content Strategy & Insights | Greenlight/renewal ROI cases assembled quarters after release from stitched dashboards; demand-gated decisions show 50% dev-cost cuts (Parrot) but require evidence infrastructure | **Campaign Orchestrator** (content ROI intelligence) | Solution-aware (analytics vendors exist; in-flight agentic synthesis doesn't) | Direct |
| Data / Identity lead + Analytics | One viewer = 4 device identities; OEM graphs incompatible; degrades ad segment quality (advertiser side) AND recs relevance (subscriber side) | **Audience Builder** | Solution-aware (identity vendors abound; unified-profile-to-activation doesn't) | Direct |
| CMO / Head of Streaming (exec) | AI assistants becoming the "what to watch" layer; Tubi's ChatGPT app (Apr 2026) set the precedent; 14-min discovery friction is the wedge; unmanaged = invisible catalog | **LLM Command Center** | Unaware→problem-aware (category forming now) | General/narrative |

### Copy ingredients bank

**Cited stats:**
- CTV ad spend $38.0B in 2026 (43% of TV ad spend, from 23% in 2022; $47.6B/53% by 2028) (eMarketer, 2026)
- 209.4M US AVOD viewers 2026; ad-supported = 46% of premium SVOD subs; top-5 AVOD revenue >$28B (VAB/eMarketer, 2026)
- Netflix ad tier: 250M+ monthly ad-tier viewers by May 2026 Upfront; >half of new sign-ups choose ads; ~$3B annual ad revenue
- FAST: 131.4M US users (54% of CTV users); Roku Channel 97.3M, Tubi 92.5M (eMarketer, 2026)
- Premium SVOD churn ~4.1–4.6%/mo (stabilized 2025); specialty 6.6%; streaming avg 6.3% (Antenna 2025–26; RetentionCheck 2026)
- Serial churners: 42% cancelled premium SVOD 5+ times in 2 yrs, 19% 7+ times; >⅓ of cancellers resubscribe within a year (Antenna)
- Ad-volume cancellations +8% Q2 2025; now 4% of ALL US paid streaming churn (Kantar, 2025)
- 37% of US consumers have cancelled a subscription because of ads; 46% say ads significantly disrupt; >5 min/hr unacceptable to most; 73% of Gen Z find streaming ads irrelevant (2025)
- Demand-analytics-gated greenlights: 50% development-cost reduction, 126% library-value increase in case study (Parrot Analytics, 2025); Apple TV+ ~50K subs from one title
- Identity: every OEM (Roku, Fire TV, Samsung, LG, Android TV) runs a different device ID scheme; "three incompatible identity systems" (Taboola/Everest, 2025)
- Tubi = first streamer with native ChatGPT app, Apr 2026 (300K titles, "@Tubi" prompt); avg 14 minutes to find something to watch (Nielsen via StreamTV Insider)

**Named deliverables for openers:** the cancel-save flow, the churn cohort report, the premiere dashboard, the greenlight ROI case, the pod/load rule-change proposal, the upfront pacing report, the plan-mix report.

**Jargon glossary (use in copy):** ad load, pod (length/structure), mid-roll, frequency capping/competitive separation, fill rate, ad ARPU / plan mix, ad tier, AVOD/SVOD/FAST/CTV/OTT, churn (active vs. passive), cancel-save, win-back, serial churners, cohort, LTV, binge velocity, completion rate, greenlight/renewal, slate, device graph, householding, ACR, upfronts/scatter. NEVER: GAM-morning-check framing (that's the print/digital page), ROAS, page views/SEO.

**Pressure hooks (one-liners):**
1. "Ad complaints are now 4% of all streaming churn — your ad load policy is a retention policy, whether you treat it that way or not."
2. "Your churn model scored them at-risk on Tuesday. The campaign went out Friday. They cancelled Wednesday."
3. "You'll defend the renewal decision next quarter with data from last quarter."
4. "Tubi is already inside ChatGPT. When viewers ask an AI what to watch, is your catalog in the answer?"

### Worked example openers

**Direct (Lifecycle lead / Personalization):** "Your data science team built a churn model that works. Then the score lands in a warehouse table, waits for a batch export, becomes a segment, and reaches the subscriber three days after they cancelled. Kana's Personalization closes that gap to zero — the moment a behavioral signal crosses threshold, the tailored offer fires."

**General/narrative (exec / LLM Command Center):** "Viewers spend 14 minutes deciding what to watch — and increasingly they're not scrolling, they're asking. Tubi just became the first streamer inside ChatGPT, turning discovery friction into distribution. AI assistants are becoming television's new front door, and every platform will either manage how its catalog appears there or disappear from the answer."

### Sources

- Kana ground truth: Rayyan's 2026-07-17 screenshots (Streaming & Video tab, Five Applications, hero).
- eMarketer (2026): CTV spend/converged TV, FAST FAQ, consumer attitudes. VAB via ppc.land (2026): 210M ad-supported viewers, 46% share, $28B. Netflix Upfront coverage (2026): ad-tier MAU/revenue. Antenna State of Subscriptions (2024–26): churn rates, serial churners, resubscription. RetentionCheck (2026): streaming churn benchmark. Kantar (2025): Q2 contraction, ad-volume churn +8%/4%. FOX Advertising / CTAM / HBR (2025–26): ad-load tolerance research. Parrot Analytics (2025): demand-gated greenlighting, streaming economics. SymphonyAI / promptcloud (2025–26): title ROI, Netflix greenlight inputs. Job postings (2025–26): FOX Sr. PM Video Ad Tech; FreeWheel/Comcast PM roles; Crunchyroll Lifecycle Growth Sr. Manager Retention; Starz/Sony/Paramount/CNN content insights directors. Taboola / Everest Group / Perion / Advertising Week (2025): CTV identity fragmentation. TechCrunch / Media Copilot / StreamTV Insider (2026): Tubi ChatGPT app, AI chatbot discovery, 14-min stat.
