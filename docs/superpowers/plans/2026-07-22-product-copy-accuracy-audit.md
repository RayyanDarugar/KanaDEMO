# Product Copy Accuracy Audit — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. This plan replaces "write a test" with "produce a findings entry" and "run tests" with "verify against the cited PRD line" — there is no automated test suite for marketing copy.

**Goal:** Cross-reference every product-capability claim on Kana's 10 live industry pages against the technical PRDs, and correct any claim that overstates what the product actually does — without losing marketability.

**Architecture:** Two-phase, page-parallel subagent fan-out. Phase 1 (audit) dispatches one subagent per page to read that page's `config.js` plus only the PRDs for products actually mentioned on it, and write a findings report — no file edits yet. Rayyan reviews and approves/rejects/amends findings in one consolidated pass. Phase 2 (apply) dispatches one subagent per page-with-approved-changes to make exactly those edits to `config.js`. Splitting audit from apply means the expensive, judgment-heavy reading happens once, edits are mechanical and reviewable before they land, and no subagent both decides *and* commits a tradeoff unsupervised.

**Tech Stack:** Plain JS config objects (`industries/<slug>/config.js`), markdown PRDs (`brand-files/kana-product-prds/`), no build step (static site).

## Global Constraints

- PRDs in `brand-files/kana-product-prds/` are the sole source of truth for capability claims. Product *naming*/positioning is already settled per the `kana-product-roster-and-industry-page-workflow` memory — this audit is about accuracy of claims, not renaming products.
- Audience Builder and Campaign Orchestrator each have two PRDs (Marketers v2, Publishers v1). Marketers-suite pages (cpg, retail-ecommerce, financial-services, healthcare, qsr, travel-hospitality, media-advertisers) check against the **Marketers** PRD. Publishers/KFP-suite pages (media-networks, print-digital-audio, streaming-video) check against the **Publishers** PRD. Confirmed by Rayyan 2026-07-22.
- Never surface internal technical implementation detail (data pipelines, model architecture, integration mechanics) in customer-facing copy — translate to the outcome/capability, not the "how."
- Preserve each page's existing marketing voice, tone, and structure. This is an accuracy correction pass, not a rewrite — change only what's inaccurate, keep everything else as-is.
- `industries/manufacturing/` and `industries/pharma/` are scaffold pages (`[PLACEHOLDER]` copy throughout, unbuilt) — **out of scope**, do not audit.
- No `config.js` file is edited until Rayyan has approved the specific finding that justifies the edit.
- **Added 2026-07-22, post-Phase-1-review:** genuine PRD Backlog/White-Space-Backlog items (capability not yet built, no PRD language ruling it out permanently) may still be marketed confidently — Rayyan's call: "they're backlog because they haven't had want expressed for them yet." **Never use "Coming Soon" or other hedging/availability language** for these — market them the same as shipped capabilities. This does NOT apply to: (1) PRD Non-Goals / Out-of-Scope / explicit "permanent" language (e.g. Personalization's and Campaign Orchestrator's human-approval gates are permanent at any maturity level, not a roadmap gap) — these must stay accurate since they will never become true; (2) wrong-product misattributions (a capability described under the wrong product's name, e.g. LLM Command Center described as AEO2's job) — these need correct attribution regardless of timeline, not a timing fix; (3) the financial-services Marketing Intelligence compliance-screening claims specifically, treated as an exception given regulatory stakes even though technically Backlog. Where a single claim bundles a genuine-backlog element (e.g. "real-time") with a permanent-violation element (e.g. "automatically" implying no human approval), fix only the permanent-violation part and leave the backlog element as-is.

---

## Phase 1: Audit (10 parallel subagent tasks — no file edits)

**Files:**
- Read: `industries/<slug>/config.js` (one per task, see table below)
- Read: `brand-files/kana-product-prds/<prd-file>.md` (subset per task, see table below)
- Create: `scratch/copy-audit/<slug>-findings.md` (one per task)

**Interfaces:**
- Produces: a findings markdown file per page, each entry containing `{location in config.js (key path or nearby text snippet), current claim (verbatim), PRD citation (file + quoted line/section), verdict (accurate / overclaim / unverifiable-but-plausible / needs-rewrite), suggested corrected copy (verbatim replacement text, marketing-voice, no placeholders)}`. Phase 2 consumes this file's "suggested corrected copy" verbatim once approved.

### Page → PRD parameter table

| slug | config.js | PRDs to load |
|---|---|---|
| cpg | `industries/cpg/config.js` | Audience_Builder_v2(Marketers), Category_Intelligence, Marketing_Intelligence_v2, OmniChannel_Media_Planner_v2 |
| retail-ecommerce | `industries/retail-ecommerce/config.js` | Audience_Builder_v2(Marketers), Category_Intelligence, Marketing_Intelligence_v2, OmniChannel_Media_Planner_v2, Personalization_at_Scale_v2 |
| financial-services | `industries/financial-services/config.js` | Agentic_Data_Platform, Audience_Builder_v2(Marketers), Marketing_Intelligence_v2, Personalization_at_Scale_v2 |
| healthcare | `industries/healthcare/config.js` | Agentic_Data_Platform, Audience_Builder_v2(Marketers), Campaign_Orchestrator_v2(Marketers), Personalization_at_Scale_v2 |
| qsr | `industries/qsr/config.js` | Agentic_Data_Platform, Audience_Builder_v2(Marketers), Campaign_Orchestrator_v2(Marketers), Personalization_at_Scale_v2 |
| travel-hospitality | `industries/travel-hospitality/config.js` | Audience_Builder_v2(Marketers), Campaign_Orchestrator_v2(Marketers), Category_Intelligence, Personalization_at_Scale_v2 |
| media-advertisers | `industries/media-advertisers/config.js` | Audience_Builder_v2(Marketers), Campaign_Orchestrator_v2(Marketers), Personalization_at_Scale_v2 |
| media-networks | `industries/media-networks/config.js` | Audience_Builder_v1(Publishers), Campaign_Orchestrator_v1(Publishers), LLM_Command_Center_v3.1, Media_Proposal_Generator_v3, Sales_Intelligence_v3 |
| print-digital-audio | `industries/print-digital-audio/config.js` | Audience_Builder_v1(Publishers), Campaign_Orchestrator_v1(Publishers), LLM_Command_Center_v3.1, Personalization_at_Scale_v2, Sales_Intelligence_v3 |
| streaming-video | `industries/streaming-video/config.js` | Audience_Builder_v1(Publishers), Campaign_Orchestrator_v1(Publishers), LLM_Command_Center_v3.1, Personalization_at_Scale_v2 |

Exact PRD filenames (in `brand-files/kana-product-prds/`):
`Category_Intelligence_PRD.docx.md`, `Kana_PRD_Marketers_Audience_Builder_v2.md`, `Kana_PRD_Marketers_Campaign_Orchestrator_v2.md`, `Kana_PRD_Marketers_Marketing_Intelligence_v2.md`, `Kana_PRD_Marketers_OmniChannel_Media_Planner_v2.md`, `Kana_PRD_Marketers_Personalization_at_Scale_v2.md`, `Kana_PRD_Platform_Agentic_Data_Platform.md`, `Kana_PRD_Publishers_Audience_Builder_v1.md`, `Kana_PRD_Publishers_Campaign_Orchestrator_v1.md`, `Kana_PRD_Publishers_LLM_Command_Center_v3.1.md`, `Kana_PRD_Publishers_Media_Proposal_Generator_v3.md`, `Kana_PRD_Publishers_Sales_Intelligence_v3.md`.

### Subagent prompt template (fill `{slug}`, `{config_path}`, `{prd_list}` from the table above)

```
You are auditing marketing copy for accuracy against technical product specs. This is a
copy-editing task, not a coding task — you will not edit any files, only report findings.

Read {config_path} in full. It's a JS config object driving one industry landing page for
Kana, an AI marketing orchestration platform. It contains a hero, pain points, alternating
"solution rows" (each tied to a named product), stats, testimonials, and FAQs.

Read these PRDs, which are the technical ground truth for what each product actually does:
{prd_list}
(full paths under brand-files/kana-product-prds/)

For every claim in the config that describes what a named product does — primarily the
solutionRows entries, but also any FAQ answer, stat, or pain-point resolution that implies a
specific capability — check it against the matching PRD:

1. Does the PRD support this claim? Quote the specific PRD line/section that confirms or
   contradicts it.
2. Classify: ACCURATE / OVERCLAIM (states a capability the PRD doesn't support or explicitly
   scopes out) / UNVERIFIABLE (plausible extrapolation, PRD doesn't address it either way —
   use judgment, don't flag every unstated nuance) / VAGUE-BUT-FINE (marketing abstraction
   that doesn't make a specific enough claim to be false).
3. For OVERCLAIM and any UNVERIFIABLE you'd flag as risky, write a suggested replacement:
   verbatim copy that keeps the same marketing voice, length, and tone as the original line,
   states only what the PRD actually supports, and does NOT expose internal technical
   implementation (data pipelines, model/integration mechanics) — describe the outcome, not
   the "how." A reader should never need to know Kana's internal technical approach.

Do not flag or change product names, page structure, unrelated pain-point copy, or anything
not tied to a specific capability claim. This is an accuracy pass, not a rewrite — untouched
copy should stay untouched.

Write your findings to scratch/copy-audit/{slug}-findings.md using this format per claim you
flag (skip ACCURATE and VAGUE-BUT-FINE claims that need no action — just note in a one-line
summary at the top how many claims you checked and how many were clean):

## [config.js key path or nearby heading, e.g. "solutionRows[2] — Audience Builder"]
**Current copy:** "<verbatim current text>"
**Verdict:** OVERCLAIM | UNVERIFIABLE-FLAGGED
**PRD citation:** <PRD filename> — "<quoted line/section>"
**Suggested fix:** "<verbatim replacement copy>"
**Why:** <one sentence>

Report back a one-paragraph summary (not the full findings) when done.
```

- [ ] **Step 1: Dispatch all 10 audit subagents in parallel**

Send a single message with 10 `Agent` tool calls (subagent_type: general-purpose, model: sonnet, run_in_background: true), one per row in the table above, each with the filled-in prompt template.

- [ ] **Step 2: Wait for all 10 to complete, then verify each findings file exists**

```bash
ls scratch/copy-audit/*-findings.md | wc -l
```
Expected: `10`

- [ ] **Step 3: Consolidate into one review document**

Read all 10 findings files and merge into `scratch/copy-audit/00-consolidated-review.md`, grouped **by product** (not by page) so Rayyan can see every claim made about e.g. "Personalization" across all pages in one place — this surfaces cross-page inconsistencies (same product, contradictory claims) that page-by-page review would miss. Within each product group, sub-group by page. Number every entry sequentially (F1, F2, F3...) for easy reference in review.

- [ ] **Step 4: Present the consolidated review to Rayyan for approval**

Summarize the consolidated doc in chat (counts by verdict, any cross-page inconsistencies found, a few representative examples) and ask Rayyan to mark each numbered finding approved / rejected / amended (either inline in chat or by editing the file directly). Do not proceed to Phase 2 until this is done.

---

## Phase 2: Apply approved edits (parallel subagent tasks, one per page with ≥1 approved finding)

**Files:**
- Modify: `industries/<slug>/config.js` (only pages with approved findings)

**Interfaces:**
- Consumes: the approved subset of `scratch/copy-audit/00-consolidated-review.md` entries for this page — each gives the exact current copy (to locate) and exact replacement copy (to insert). No PRD re-reading needed; that judgment call was already made and approved in Phase 1.

### Subagent prompt template

```
Apply these approved copy corrections to {config_path}. For each entry below, find the
current copy (verbatim, may need light whitespace-insensitive matching) and replace it with
the approved fix. Do not change anything else in the file — no reformatting, no touching
unrelated lines.

{approved findings for this page, each as: current copy -> replacement copy}

After editing, run `node -c {config_path}` to confirm the file still parses, and report the
diff.
```

- [ ] **Step 1: Build the per-page approved-edits list from the consolidated review**

Filter `00-consolidated-review.md` to approved/amended entries, group by page.

- [ ] **Step 2: Dispatch one subagent per affected page, in parallel**

Same dispatch pattern as Phase 1 Step 1 — single message, multiple `Agent` calls, `run_in_background: true`.

- [ ] **Step 3: Verify no syntax breakage across all touched files**

```bash
for f in industries/*/config.js; do node -c "$f" || echo "FAILED: $f"; done
```
Expected: no `FAILED` lines.

- [ ] **Step 4: Review the full diff**

```bash
git diff --stat industries/
git diff industries/
```
Walk Rayyan through the diff page by page (or let him read it directly) before anything is committed.

- [ ] **Step 5: Spot-check 2–3 edited pages in the browser**

```bash
npm run dev
```
Open 2–3 of the most heavily-edited pages (e.g. `http://localhost:3000/industries/media-networks/`) and visually confirm the corrected copy renders correctly and reads naturally in context — not just diffed as text.

- [ ] **Step 6: Commit**

Only after Rayyan approves the diff. One commit, all pages together (or split by page if Rayyan prefers granular history — ask).

```bash
git add industries/*/config.js
git commit -m "$(cat <<'EOF'
Correct product-capability claims against PRD ground truth across industry pages

Cross-referenced every product claim on live industry pages against technical
PRDs; corrected overclaims while preserving marketing voice.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 3: Tone alignment (parallel subagent tasks, one per page, runs after Phase 2 is committed)

**Context:** In a prior session, `cpg`, `retail-ecommerce`, and `media-advertisers` were reframed from fear/deficit-driven copy to aspirational/capability-driven copy (commit `8c8e2b1`); `travel-hospitality` was already aspirational and left untouched. Boss feedback was that the site read as fear marketing. Rayyan likes the resulting sentiment on those four pages and wants it applied consistently across the rest of the site. This phase runs **after** Phase 2 lands (not interleaved) so tone edits are made against already-accurate copy, and reviewed as its own diff/commit separate from the accuracy fixes.

**Files:**
- Reference (read-only, do not edit): `industries/cpg/config.js`, `industries/retail-ecommerce/config.js`, `industries/travel-hospitality/config.js`, `industries/media-advertisers/config.js`
- Modify: `industries/<slug>/config.js` for the other 6 pages — financial-services, healthcare, qsr, media-networks, print-digital-audio, streaming-video
- Verify only (light pass, edit only if blatantly fear-framed): the 4 reference pages themselves, to confirm Phase 2's accuracy edits didn't reintroduce deficit framing

**The established reframing pattern** (extracted from commit `8c8e2b1` — give this to every subagent verbatim so they don't have to reverse-engineer it from a diff they can't see):

1. **Pain point titles**: rewrite from a problem-statement to an opportunity/capability statement. Not "X is broken/late/lost" but "catch/reach/get X while it still matters." E.g. `"Category intelligence is a week behind the shelf"` → `"Catch the category shift while you can still act on it"`.
2. **Pain point descriptions**: keep the same underlying stat/fact (don't invent new ones), but lead with what the product already does about it, not how bad the problem is. The deficit becomes supporting context for the win, not the headline of the paragraph. E.g. describe the product acting in present tense ("Audience Builder turns plain-language intent directly into the live segment...") rather than narrating the failure mode at length before mentioning the product.
3. **Hero subheadlines**: cut opening clauses that lead with loss/deficit ("already a week old," "leaks at every step," "can't see," "you already lost"). Keep the concrete value prop, and where natural, close with a forward-looking capability line (e.g. "...turning this week's shelf data into next week's advantage").
4. **Stats bar**: reorder so a positive/capability-framed stat leads (not the worst deficit stat first); rewrite labels to add a "so what Kana does about it" clause rather than leaving a bare negative statistic. E.g. `"52% increase in CFO pressure on marketing to prove ROI"` → `"52% more scrutiny on marketing ROI — teams with a live spend-to-register view walk in with the answer already there"`.
5. **Final CTA headline**: shift from a rhetorical deficit/question framing to an affirmative, capability-forward statement. E.g. `"Category Intelligence Should Do More Than Report. It Should Help Predict."` → `"Give Your Category Team the Predictive Edge, Not Just the Report."`.

**Hard constraint — do not touch:** solution row copy, testimonials, FAQs, product names, or any factual capability claim (those were just verified against PRDs in Phase 2 — don't undo that work). If you spot obviously fear-framed language outside hero/painPoints/stats/finalCta, **flag it in your report, don't edit it** — those sections are out of scope for this pass.

### Subagent prompt template (fill `{slug}`, `{config_path}`, `{mode}`)

```
You are aligning the sentiment/tone of one Kana industry landing page with an already-approved
aspirational style used elsewhere on the site. This is a framing pass, not an accuracy pass —
every factual capability claim in this file was just verified against product PRDs, so do not
change what any product is claimed to do, only how the framing reads.

Read {config_path}.

Read these already-reframed reference pages for calibration: industries/cpg/config.js,
industries/retail-ecommerce/config.js, industries/travel-hospitality/config.js,
industries/media-advertisers/config.js — these carry the target sentiment.

Apply this established reframing pattern (from a prior approved edit, commit 8c8e2b1):
1. Pain point titles: problem-statement -> opportunity/capability statement.
2. Pain point descriptions: keep the same stats/facts, but lead with the product's present-tense
   capability, not the failure mode. Don't invent new stats or claims.
3. Hero subheadline: cut loss/deficit-framed opening clauses; keep the concrete value prop; where
   natural, close with a forward-looking capability line.
4. Stats bar (config.stats — still edit even though currently unrendered site-wide, per existing
   precedent of keeping it ready for re-enable): lead with a positive/capability stat first where
   the data allows; rewrite labels to add a "so what Kana does about it" clause instead of a bare
   negative number.
5. Final CTA headline: rhetorical deficit/question framing -> affirmative capability statement.

{mode == "full rewrite"}: Rewrite hero.subheadline, all painPoints, stats labels/order, and
finalCta.headline for this page in this style.
{mode == "verify only"}: This page was already reframed. Read it against the pattern above and
confirm it's still consistent (Phase 2's accuracy edits may have reintroduced deficit framing
inadvertently). Only edit if you find a specific line that clearly violates the pattern — report
what you changed and why. If nothing needs changing, report that and make no edits.

Do not touch solutionRows, testimonials, faqs, product names, or any capability claim's substance.
If you see fear-framed language in those sections, report it, don't fix it — out of scope here.

After editing, run `node -c {config_path}` to confirm the file still parses, and report the diff
(or "no changes needed" for verify-only pages).
```

### Page → mode table

| slug | mode |
|---|---|
| financial-services | full rewrite |
| healthcare | full rewrite |
| qsr | full rewrite |
| media-networks | full rewrite |
| print-digital-audio | full rewrite |
| streaming-video | full rewrite |
| cpg | verify only |
| retail-ecommerce | verify only |
| travel-hospitality | verify only |
| media-advertisers | verify only |

- [ ] **Step 1: Confirm Phase 2 is committed before starting** (`git status` clean on `industries/`)

- [ ] **Step 2: Dispatch all 10 subagents in parallel** (6 full-rewrite + 4 verify-only), single message, multiple `Agent` calls, `run_in_background: true`, model sonnet.

- [ ] **Step 3: Verify no syntax breakage**

```bash
for f in industries/*/config.js; do node -c "$f" || echo "FAILED: $f"; done
```
Expected: no `FAILED` lines.

- [ ] **Step 4: Review the full diff and any flagged out-of-scope fear-framing**

```bash
git diff --stat industries/
git diff industries/
```
Surface any subagent's "flagged, didn't edit" notes from its report alongside the diff, so Rayyan can decide separately whether those need a follow-up pass.

- [ ] **Step 5: Spot-check in the browser**

```bash
npm run dev
```
Open a couple of the full-rewrite pages and at least one verify-only page to confirm rendering and that the new tone reads naturally, not just as a text diff.

- [ ] **Step 6: Commit separately from the Phase 2 accuracy commit**

```bash
git add industries/*/config.js
git commit -m "$(cat <<'EOF'
Extend aspirational tone reframe from CPG/Retail/Travel/M&E to remaining industry pages

Applies the established capability-forward framing pattern (hero, pain points,
stats, final CTA) to financial-services, healthcare, qsr, and the three KFP
pages; verifies the four already-reframed pages stayed consistent after the
accuracy pass.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

**Spec coverage:** All 10 non-scaffold pages have a Phase 1 audit task and a conditional Phase 2 apply task. manufacturing/pharma explicitly excluded per global constraints. Segment-based PRD mapping applied per page (Marketers vs Publishers versions of Audience Builder/Campaign Orchestrator). Two-phase review gate matches Rayyan's chosen workflow (audit first, then apply). Model choice (Sonnet 5) matches Rayyan's answer — no model override specified in dispatch steps, so agents inherit the parent session model per default. Phase 3 covers all 10 pages (6 full-rewrite + 4 verify-only), sequenced strictly after Phase 2's commit so tone edits never race accuracy edits on the same lines, with its own diff review and commit separate from Phase 2's.

**Placeholder scan:** No TBD/"handle appropriately" language; subagent prompts are complete and copy-pasteable once the table's `{slug}`/`{config_path}`/`{prd_list}`/`{mode}` are substituted.

**Open risk:** Findings-file format consistency across 10 independently-run subagents — Step 3 of Phase 1 (consolidation) is where format drift would surface; if a subagent's file doesn't follow the template, re-prompt that one subagent rather than hand-fixing its file, so the source of truth stays subagent-authored. For Phase 3, a full-rewrite subagent could plausibly touch a line Phase 2 also modified for accuracy — the diff review in Phase 3 Step 4 is the check that the tone edit didn't silently drift the claim back toward an overclaim; if in doubt, re-verify that specific line against its PRD before committing.
