# Healthcare (Health Plans / Hospital Systems / Wellness Brands) — Industry GTM Brief

**Date:** 2026-07-13 · **Author:** Claude (industry-gtm-brief pipeline)
**Deliverable:** NEW page at `industries/healthcare/` (no scaffold exists), on the shared config-driven template (`src/app.js`). Label "Healthcare", slug `healthcare` (nav slug fallback handles it), accent TBD (unused color — medical teal-cyan `#0e9aa7` proposed). Nav: add "Healthcare" to all vertical configs' industries lists + industrySuiteMap → "Kana for Marketers".

---

## Stage 0 — Ground truth

### Featured products & positioning (from Rayyan's screenshot, 2026-07-13 — authoritative roster for this page)

**Hero framing (screenshot):**
> "Healthcare Marketers Are Underserving Members at Critical Moments" — Health plans, hospital systems, and wellness brands have some of the most actionable member data available — but HIPAA constraints, fragmented systems, and batch communication workflows prevent them from using it effectively.

**Challenge → solution pairs (verbatim ground truth):**

| # | Challenge | Solution product | Positioning |
|---|---|---|---|
| 1 | Member activation campaigns are generic, not care-gap specific — annual wellness and preventive care campaigns reach all members equally, ignoring which individuals have open care gaps, overdue screenings, or elevated risk profiles | **Audience Builder** | "Enables care-gap–aware segmentation, allowing marketers to precisely target the right members for the right intervention at the right time." |
| 2 | Appointment reminders and no-show reduction aren't dynamically personalized — reminder sequences fire on fixed cadences regardless of a member's past no-show behavior, channel preference, or appointment type | **Personalization** (⚠️ "Coming soon") | "Tailors reminder frequency, channel, and messaging based on individual member behavior patterns — reducing no-shows and improving care adherence." |
| 3 | Open enrollment campaigns require enormous manual effort to personalize — AEP and OEP seasons demand rapid, personalized communications to millions of members across dozens of plan options, but content and audience management are still largely manual | **Campaign Orchestrator** | "Orchestrates enrollment season campaigns at scale — dynamically segmenting audiences by plan eligibility and personalizing messaging for each cohort." |
| 4 | HIPAA constraints are perceived as barriers to personalization — marketing teams often default to generic communications out of HIPAA caution, rather than building a compliant personalization infrastructure that balances privacy with relevance | **Agentic Data Platform** | "Is architected for HIPAA-compliant data activation — enabling personalization within defined regulatory guardrails, not despite them." |

**Roster notes:**
- Audience Builder gets healthcare-specific positioning (care-gap segmentation); Campaign Orchestrator gets enrollment-season positioning. Per-vertical positioning rule: claims from this screenshot only.
- Agentic Data Platform gets its 5th vertical positioning (HIPAA-compliant activation) — the "within guardrails, not despite them" line is the page's signature phrase.
- Personalization carries "Coming soon" (5th vertical).

### Target market (xlsx)
- "Healthcare Insurance/Providers" row: suite KFM, priority P1, company with opps: **Cambia**. xlsx apps listed: Audience Manager (complete), Synthetic Data Generation; note: "HIPAA compliance?" — the screenshot answers that open question with ADP's positioning.

### Template contract
New `industries/healthcare/config.js` + `index.html` (copy the standard pattern). Add "Healthcare" to nav.industries in all 9 existing vertical configs + this one; add `"Healthcare": "Kana for Marketers"` to industrySuiteMap (slug fallback auto-resolves `healthcare`). Accent: `#0e9aa7` (unused).

**Kana angle (Stage 0):** Healthcare is the FS pattern (rich data, regulatory constraint) with a member-outcomes twist: the constraint (HIPAA) is being used as an excuse for generic marketing, and the page's thesis is that compliant personalization infrastructure dissolves the excuse. Audience Builder owns care-gap targeting (quality/HEDIS economics); Personalization owns reminder/no-show logic; Campaign Orchestrator owns AEP/OEP scale; ADP owns the HIPAA-compliant activation layer. Research must ground: care-gap/quality-bonus economics, no-show costs, AEP/OEP campaign mechanics, HIPAA marketing rules (incl. OCR tracking-tech enforcement), and payer/provider marketing org roles.

---

*(Stages 1–7 appended below as research completes.)*

## Stage 1 — Industry economics

**Business models:**
1. **Health plans (payers)** — premiums + CMS quality economics: Medicare Advantage quality bonus payments totaled at least **$12.7B in 2025**, quadrupled since 2015 (KFF, 2025). A drop from 4 to 3.5 stars cost one plan **$12M in revenue** (Healthcare Dive, 2025). In Stars Year 2026, **HEDIS becomes the highest-weighted Star category (26%** of the 2027 rating) — care-gap closure is now the single biggest quality lever (Advent Advisory, 2025). Marketing/outreach directly moves these measures: members who complete an Annual Wellness Visit close **5.5x more care gaps** (Icario, 2025); tailored outreach pilots drove +178% primary care visits, +264% cervical cancer screenings, >700% ROI (MedCity, 2025).
2. **Hospital systems (providers)** — fee-for-service + value-based contracts; appointment throughput is revenue. **No-shows cost the US system ~$150B/year**; a single missed appointment averages ~$200; practices lose $20–30K/month (Curogram, 2025). Average no-show rates run 15–30% (specialty 20–25%; mental health up to 30–45%) (DexCare/Curogram, 2025). Systematic reminders cut no-shows 30–60% (23%→8% in six months in one implementation), yet nearly 4 in 10 medical groups saw no-show rates INCREASE despite automated reminders — fixed-cadence blasts have hit their ceiling (Medical Economics/Artera, 2025). That ceiling is exactly challenge #2.
3. **Wellness brands** — consumer subscription/engagement models (adherence economics).

**Enrollment-season economics (challenge #3's grounding):** AEP runs Oct 15–Dec 7 for ~68M Medicare beneficiaries; 13M switched plans last cycle — more than double the prior year — and two-thirds of enrollees say they're open to switching next AEP (seniorliving.org 2025 AEP report). Carriers made dramatic 2026 portfolio changes (terminated plans, new premiums/deductibles, cut supplemental benefits), making ANOC season high-stakes communication (medicareagentshub/medicareresources, 2025–26). The 2025 posture shifted to "margin over membership" (Amsive, 2026) — retention through relevance, not growth through spend.

**Value chain:** CMS/regulators → payers (plan design, Stars/HEDIS quality teams, enrollment marketing) → providers (patient access, appointment operations, population health) → members/patients. Marketing sits under a compliance/privacy regime (HIPAA) that governs what member data can drive communications.

**Structurally different from other Kana verticals:** marketing outcomes ARE clinical/quality outcomes — a closed care gap is simultaneously a Stars point, a bonus payment, and a screening that catches cancer. The regulatory constraint (HIPAA) parallels FS compliance, but here the documented failure mode is defaulting to generic out of caution (challenge #4). The marketing unit is the MEMBER × CARE GAP × MOMENT.

**Kana angle (Stage 1):** The economics arm every story: care-gap-aware segmentation (Audience Builder) is worth quadrupled quality bonuses and 5.5x gap closure; no-show personalization (Personalization) attacks a $150B problem where fixed-cadence reminders have stalled; AEP orchestration (Campaign Orchestrator) lands in a market where 13M members switched and two-thirds are open to it; and ADP's "within guardrails, not despite them" reframes HIPAA from the excuse for generic marketing into the architecture for personalized marketing.

## Stage 2 — Org map

| Title | Tribe | Exists in Healthcare? | Notes / false friends |
|---|---|---|---|
| Medicare Stars / Quality Program Director-Manager | quality/analytics | ✅ core (payer) | Real postings: Intermountain "Medicare STARS Director", Molina "Program Manager, Medicare Stars & Quality Improvement" — Stars strategy, member-facing communications that are CMS-compliant, communication-effectiveness gaps (2025) |
| Director of Member Engagement / Member Marketing | lifecycle (payer) | ✅ core | Owns outreach/engagement campaigns "supporting growth, engagement, and access to care"; must know CMS Medicare Marketing Guidelines (postings, 2025) |
| Medicare/Enrollment Marketing Campaign Manager | performance (payer) | ✅ | AEP/OEP campaign execution; member materials (ANOC etc.) |
| Hospital/System Marketing Manager | brand (provider) | ✅ | Service-line growth, community outreach, digital; patient engagement programs incl. appointment reminders, AWV campaigns, care-gap closure, post-visit follow-up (JD templates, 2025–26) |
| Patient Access / Patient Engagement leadership | ops (provider) | ✅ | Owns scheduling + reminder operations — the no-show number lands here |
| Population Health / Care Management | clinical-adjacent | ✅ | Owns risk stratification and care-gap lists that marketing consumes |
| Compliance / Privacy Officer | control function | ✅ UNIQUE flavor | HIPAA gatekeeper for marketing data use; post-pixel-enforcement, reviews the martech stack itself |
| Category Manager / Yield / Field Marketing | — | ❌ | Other verticals' false friends |
| "Member" vs "patient" language | — | ⚠️ | Payers say MEMBER; providers say PATIENT — page copy must handle both (screenshot uses "members") |

**Kana angle (Stage 2):** Personas: Stars/Quality Director (Audience Builder — care-gap segmentation is Stars economics), Patient Access/Engagement lead (Personalization coming soon — reminder logic), Enrollment Marketing Director (Campaign Orchestrator — AEP scale), Compliance/Privacy-adjacent marketing ops (ADP — HIPAA-compliant activation), CMO/VP Marketing (narrative). Vocabulary: care gaps, HEDIS, Stars, AEP/OEP, ANOC, AWV, no-show, adherence, risk profile, member/patient, PHI, BAA, CMS Marketing Guidelines.

## Stage 3 — Role profiles (compressed)

### Medicare Stars / Quality Director (payer)
- **Owns:** Star Ratings strategy; member-facing communications tied to quality measures; gap-closure campaigns. HEDIS at 26% weight makes their KPI the plan's revenue lever ($12.7B bonus pool).
- **Workflow:** quality team publishes care-gap lists (overdue screenings, medication adherence) → marketing translates to outreach waves → CMS-compliant materials → readouts against measure movement. Gap lists refresh on claims lag; campaigns blast broadly (challenge #1).

### Patient Access / Engagement Lead (provider)
- **Owns:** scheduling throughput, reminder operations, no-show rate. Reminders fire on fixed cadences from the EHR/engagement platform; 4-in-10 groups saw no-shows RISE despite automation (Medical Economics, 2025) — the personalization ceiling is their lived reality (challenge #2).

### Enrollment Marketing Director (payer)
- **Owns:** AEP/OEP campaign calendar — ANOC mailings by Sept 30, then Oct 15–Dec 7 sprint across millions of members and dozens of plan options; content/audience management largely manual (challenge #3). 13M switchers last cycle raise both the risk and the prize.

### Marketing Ops + Privacy (both segments)
- **Post-pixel-enforcement reality:** OCR collected $9.9M in 2024 settlements; $100M+ in fines 2023–25 tied to tracking-pixel violations; consent banners don't satisfy HIPAA — BAAs or authorizations required (HHS/Feroot/ABA, 2024–25). Teams default to generic, de-identified marketing out of caution — exactly challenge #4's "perceived barrier."

**Kana angle (Stage 3):** Every persona's named artifact maps to a product: the care-gap list (Audience Builder turns it into precise segments), the reminder cadence config (Personalization replaces it with behavior-based logic), the AEP calendar (Campaign Orchestrator runs it dynamically by plan eligibility), and the martech-compliance review (ADP is architected to pass it — BAAs, guardrails, governed activation).

## Stage 4 — Tool stack

| Role | Literally open on their screen | Where the gap is spreadsheets / Slack / tribal knowledge |
|---|---|---|
| Stars/Quality + Member Marketing (payer) | Salesforce Health Cloud (FHIR data models, HIPAA out of box), quality/HEDIS analytics, campaign tools | Care-gap lists arrive as extracts on claims lag; outreach waves built by hand per measure |
| Patient Access (provider) | EHR (Epic/Cerner) scheduling, patient engagement platform (Artera-class), reminder configs | Fixed-cadence reminder rules; no-show history not wired into cadence/channel logic |
| Marketing Ops (both) | HIPAA-compliant CDP (BAA required), consent/authorization records, analytics under privacy review | Post-pixel-enforcement, every tool needs a BAA + audit logs; GA4-style defaults are radioactive (Feroot/Piwik PRO, 2025–26) |
| Enrollment Marketing | Campaign/content tools + member materials workflows (CMS-regulated) | AEP content per plan × cohort assembled manually; ANOC deadlines hard-coded |
| Population Health | Risk stratification, care management platforms | Gap data lives clinical-side; marketing gets CSVs |

**Stack facts:** Healthcare CDPs integrate with Epic/Cerner via HL7 FHIR APIs (demographics, appointments, encounters, care-gap data); the compliant pattern is a BAA'd CDP as the middle layer between collection and activation with audit logs (CDP.com/Wheelhouse, 2025–26). Salesforce Health Cloud is the payer CRM default with a CDP module (Customer 360 Audiences).

## Stage 5 — Deliverables inventory

| Deliverable | Owner | Cadence | Manually assembled? |
|---|---|---|---|
| Care-gap list / gap-closure campaign waves | Quality + Member Marketing | Monthly-ish (claims lag) | ✅ extracts → hand-built outreach waves |
| Stars measure movement readout | Stars Director | Monthly/quarterly | ✅ quality analytics + campaign metrics stitched |
| Reminder cadence configs + no-show report | Patient Access | Weekly ops review | ✅ fixed rules in engagement platform; no-show report after the fact |
| AEP campaign calendar + member materials (ANOC by Sept 30; Oct 15–Dec 7 sprint) | Enrollment Marketing | Annual, brutal | ✅ content per plan option × cohort, largely manual (challenge #3 verbatim) |
| CAHPS/member-experience improvement plan | Member Experience | Annual | ✅ |
| Martech HIPAA/BAA compliance review | Privacy + Marketing Ops | Per tool; post-2023 pixel enforcement, continuous | ✅ the deliverable that kills personalization projects |

## Stage 6 — Pressures & politics

- **Quality economics tighten:** CMS projects declining total quality bonus payments; Star thresholds tightening — "maintaining a 4-Star rating may become the exception" (Cotiviti/Advent, 2025–26). HEDIS at 26% weight makes member outreach effectiveness a CFO topic.
- **Consumerization pressure:** patients expect the personalization they get from retail/banking/hospitality (Definitive HC HMPS26; hhmglobal, 2026). Meanwhile 68% of healthcare CMOs face budget cuts and 52% staff reductions while being asked to drive growth (feeds.houseofsummary/definitivehc, 2026).
- **AI adoption vs. trust gap:** member engagement is tied for the #1 payer AI use case, but 31% of executives claim widespread AI adoption vs. 3% of operational/regulatory leaders — "adoption is ahead of trust" (HealthEdge, 2026). Governance is the credibility currency.
- **Privacy enforcement chill:** $100M+ in pixel-related fines 2023–25; OCR prioritizing tracking-tech investigations; consent banners ≠ BAAs (Feroot/HHS/ABA, 2024–25). Legal chill → generic marketing → challenge #4's "perceived barrier" loop.
- **Emotional layer:** the Stars Director watches a measurable revenue number move on outreach quality; Patient Access owns a $150B industry problem with a reminder tool that plateaued; Enrollment Marketing runs a 54-day annual sprint that decides the year; the CMO must promise personalization AND swear nothing touches PHI improperly.

## Stage 7 — Synthesis

### GTM map

| Role | Pain (traced) | Kana product | Awareness | Motion |
|---|---|---|---|---|
| Medicare Stars / Quality Director | Gap-closure campaigns blast all members equally while HEDIS hits 26% weight; AWV completers close 5.5x more gaps | **Audience Builder** | Problem-aware | Direct |
| Patient Access / Engagement Lead | Fixed-cadence reminders plateaued — 4 in 10 groups saw no-shows rise despite automation; $150B industry cost | **Personalization** (coming soon) | Problem-aware | Direct |
| Enrollment Marketing Director | AEP: millions of members × dozens of plans, ANOC deadlines, manual content/audience ops; 13M switchers last cycle | **Campaign Orchestrator** | Problem-aware | Direct |
| Marketing Ops / Privacy-adjacent | Every personalization project dies in the BAA/PHI review; team defaults to generic out of caution | **Agentic Data Platform** | Solution-aware (HIPAA-compliant CDP is a known category; agentic activation isn't) | Direct |
| CMO / VP Marketing (payer or system) | Budget cuts + consumer-grade expectations + AI trust gap | Full platform narrative | Problem-aware | General/narrative |

### Copy ingredients bank

**Cited stats:** $12.7B MA quality bonuses 2025, 4x since 2015 (KFF); 4→3.5 stars = $12M revenue loss (Healthcare Dive); HEDIS = 26% of Stars weight for 2027 (Advent, 2025); AWV completers close 5.5x more gaps (Icario); tailored outreach: +178% PCP visits, +264% cervical screenings, >700% ROI (MedCity, 2025); no-shows cost ~$150B/yr, ~$200/missed appointment, 15–30% rates (Curogram/DexCare, 2025); reminders cut no-shows 30–60% but 4 in 10 groups still saw increases (Medical Economics, 2025); 13M switched plans last AEP (2x prior year), two-thirds open to switching (seniorliving.org, 2025); $100M+ pixel fines 2023–25, OCR $9.9M in 2024 settlements (Feroot/HIPAA Journal); 68% of healthcare CMOs face budget cuts, 52% staff cuts (2026); payer AI: 31% exec vs 3% operational confidence (HealthEdge, 2026).

**Named deliverables:** the care-gap list, the AWV campaign, the reminder cadence config, the no-show report, the AEP calendar, the ANOC mailing, the Stars measure readout, the BAA/martech compliance review.

**Jargon glossary:** care gap, HEDIS, Star Ratings, quality bonus, AEP/OEP, ANOC, AWV (annual wellness visit), no-show, adherence, risk profile/stratification, member (payer) vs patient (provider), PHI, BAA, CMS Marketing Guidelines, population health, panel. NEVER: SKU, day-part, makegood, compset, ROAS-led framing.

**Pressure hooks:**
1. "Every member gets the same wellness email. Only some of them are overdue for a cancer screening."
2. "Your reminder system fires on schedule. Your no-show rate didn't get the memo."
3. "HIPAA isn't why your marketing is generic. Treating HIPAA as a wall instead of an architecture is."

### Worked example openers

**Direct (Stars Director / Audience Builder):** "Your annual wellness campaign goes to every member on the roster — the ones with open care gaps and the ones who closed them last quarter. With HEDIS now the heaviest-weighted Stars category, that's bonus revenue mailed to the wrong inboxes. Kana's Audience Builder makes segmentation care-gap-aware: the right member, the right intervention, the right time."

**General/narrative (CMO / platform):** "Health plans hold some of the most actionable member data in any industry — and send some of the most generic marketing, because every personalization project dies in the PHI review. The plans winning the next AEP aren't choosing between privacy and relevance. They're building HIPAA-compliant activation — personalization within the guardrails, not despite them."

### Sources
Kana internal: Rayyan's Healthcare challenge/solution screenshot (2026-07-13, authoritative roster); xlsx (Healthcare Insurance/Providers: KFM, P1, Cambia).
External: KFF (quality bonus payments, 2025); Healthcare Dive (care-gap/Stars economics, 2025); Advent Advisory (HEDIS weighting, 2025); Icario (AWV gap closure; 2025 Star Ratings); MedCity (member incentives ROI, 2025); Cotiviti (Stars reset, 2025–26); Curogram/DexCare/Artera/Medical Economics/Clearwave (no-show rates/costs/reminder effectiveness, 2025–26); seniorliving.org 2025 AEP report; Amsive (AEP 2026 trends; healthcare martech compliance); CMS (AEP dates, ANOC); medicareresources/medicareagentshub (2026 plan changes); ZipRecruiter/Glassdoor/JobLeads/Intermountain/Molina postings (Stars/member-engagement roles, 2025); HHS OCR (tracking-tech guidance); ABA/Clark Hill/elevare (AHA lawsuit, pixel law); Feroot/HIPAA Journal (enforcement totals); Piwik PRO (HIPAA analytics); Wheelhouse/CDP.com/Girikon/Capminds/Salesforce (Health Cloud, healthcare CDP, FHIR); Definitive HC HMPS26 (CMO budget/staff cuts); HealthEdge (payer AI readiness gap, 2026); Chief Healthcare Executive/Becker's (2026 AI priorities); hhmglobal (consumerization).
