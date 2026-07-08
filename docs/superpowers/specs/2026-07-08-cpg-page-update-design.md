# CPG Industry Page Update — Design Spec

**Date:** 2026-07-08
**Scope:** The config-driven CPG industry page. This page is the template for the
other vertical pages (Retail, Travel & Hospitality, QSR, Media & Entertainment,
Financial Services, Healthcare). Manufacturing and Pharma are shelved. Publishers
gets a separate page structure (out of scope here).

## Architecture context

The CPG page is rendered by a shared layout engine from a per-vertical config:

- `industries/cpg/config.js` — all CPG content (the data object).
- `src/app.js` — shared layout engine; renders every section from the config.
  Also contains the hardcoded nav megamenu.
- `src/style.css` — shared styles.

The layout reads only from the config object, so most changes here are content
edits in `config.js`. A small number touch `src/app.js` (shared nav rename, two
new render blocks, two section titles made config-driven) and `src/style.css`
(styling for the new featured-content block).

**Decisions locked with the user:**
- Rename scope for this pass = **CPG config + shared nav only**. Other vertical
  configs, the `cpgHT` clone, and `scratch/generate_verticals.js` are NOT touched.
- Media Proposal Generator stays in the nav untouched (its move to a publishers
  "Sales Intelligence" product is deferred until that page exists).
- Section order is unchanged (personas/team-roles still render before solutions);
  "keep as-is" was confirmed.

## Changes

### 1. Product renames

Visible copy only — asset file paths/filenames are left unchanged.

`industries/cpg/config.js`:
- "Category Intelligence Hub" → "Category Intelligence" (solution feature label,
  persona solution name, showcase link labels, FAQ text).
- "Audience Manager" → "Audience Builder" (solution feature label, persona
  solution name + link label, showcase link labels, FAQ text).

`src/app.js` nav megamenu:
- "Campaign Management" → "Campaign Orchestrator".
- "Category Intelligence Hub" → "Category Intelligence".
- "Audience Manager" → "Audience Builder".
- Remove the "Synthetic Data Generation" link (Agent Services column).
- Media Proposal Generator link left as-is.

**Synthetic Data folded into Audience Builder:**
- Delete the standalone "Synthetic Data Generation" solution row (`solutions[4]`).
- Add a synthetic-audiences sentence to the Audience Builder solution description
  (statistically valid audiences for new SKUs / new markets with no first-party seed).
- Repoint the "VP Data & Audience Strategy" persona's solution card from
  "Synthetic Data Generation" to "Audience Builder" (its pains — new-market launch,
  cookie deprecation — are exactly the synthetic-audience feature). Keep the role.
- stackShowcase "Launch new markets" column: relabel description prefix from
  "Synthetic Data Generation —" to "Audience Builder —".

### 2. Header copy

Tighten `hero.subheadline` to a tight 3-line hook:

> Your syndicated data is already a week old and programmatic spend leaks at every
> step. Kana gives CPG teams real-time category intelligence, media modeled on your
> own performance, and audiences that trace straight back to the brief.

### 3. Remove placeholder blog links

Strip every `blog:` object whose `href` points at a nonexistent `/blog/...` URL —
from `painPoints`, `solutions`, and `personas`. These are placeholders with no real
content behind them.

### 4. New "latest content for CPGs" block

- New config key `featuredContent` in `config.js`:
  `{ heading, type, title, description, cta: { text, href }, image? }`.
  For this pass the card holds a generic placeholder piece (type label such as
  "White Paper" / "Case study").
- New render block in `src/app.js`, inserted immediately after the showcase
  ("category data") section — the dark→white break — and before the stackShowcase.
- Layout: full-width contrasting band; inner content ~half width; heading
  "Read our latest content for CPGs" + one featured card (type label, title,
  one-line blurb, CTA link, optional thumbnail).
- New CSS in `src/style.css` for the band + card. Config-driven so every vertical
  supplies its own; block is skipped if `config.featuredContent` is absent.

### 5. CTA cleanup

Category Intelligence solution:
- `title`: "Shelf signals in seconds, not days" → "Retailer signals in seconds".
- Description opener updated to "Category Intelligence ingests …".

### 6. Section title (config-driven)

Solutions section title "Purpose-Built Agentic Solutions" → "Build agentic
applications that support your entire team". Implemented as
`config.solutionsTitle || "Build agentic applications that support your entire team"`
in `src/app.js`; the new string is the fallback so it becomes the template default.

### 7. Copy fixes

stackShowcase columns:
- "Launch in new markets before you have the data to support it" →
  "Launch new markets on data your competitors have never seen before."
- "Omni-Channel Media Planner MMM —" → "Omni-Channel Media Planner —" (drop "MMM").

### 8. Data / integration callouts

- Logo-strip heading "Trusted by Leading Global Enterprises" → "Integrates with
  the platforms you already run". Made config-driven
  (`config.logoStripTitle || "Integrates with the platforms you already run"`) in
  `src/app.js`; new string is the fallback.
- Reference category data sources: add "category data sources like Nielsen and
  Circana" into the stackShowcase subtitle and the Category Intelligence description.
- Heineken testimonial left in place as-is (pending their approval).

### 9. Product videos → YouTube embeds

Replace product media with privacy-mode YouTube embeds
(`https://www.youtube.com/embed/<id>?rel=0`) using a responsive iframe wrapper that
matches the existing loom embed pattern. `resolveAsset` already renders a raw
`<iframe>` string when the `video` field starts with `<`.

| Solution | Video id |
|----------|----------|
| Category Intelligence | `0yox_hVwBgc` |
| Omni-Channel Media Planner | `Thpl9EgupdA` (was no video) |
| Audience Builder | `LCmMvjBP8zU` (was mp4) |
| Marketing Intelligence | `xAFUogMcED0` (was mp4) |

### 10. FAQs → exactly 3

Trim from 6 to 3 (existing questions, naming updated):
1. "How does Kana connect to our retail media platforms?" (Walmart Connect, Amazon
   DSP, Kroger Precision Marketing…)
2. "How does Kana unify data across retailers, ERP, and CRM?"
3. "How fast can a CPG team get live on Kana?" — updated to reference Category
   Intelligence + Audience Builder; Synthetic Data reference dropped.

Dropped: the AEO-in-AI-search, multi-brand/regions, and martech/agency questions.

## Out of scope

- Other vertical configs, the `cpgHT` clone, `scratch/generate_verticals.js`.
- Publishers page / "Sales Intelligence" product / Media Proposal Generator move.
- Section reordering.
- Recording new demos (embed existing videos only).

## Verification

- Serve the page locally (`server.js`) and load `industries/cpg/index.html`.
- Confirm: renamed products throughout; no standalone Synthetic Data row/nav link;
  4 product videos embed and play; new featured-content band renders after the
  category-data showcase; exactly 3 FAQs; updated section title and logo-strip
  heading; no dead `/blog/...` links remain; hero copy tightened.
