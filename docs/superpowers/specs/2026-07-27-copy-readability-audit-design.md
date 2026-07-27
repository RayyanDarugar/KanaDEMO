# Copy Readability Audit — Design

**Date:** 2026-07-27
**Trigger:** Design agency flagged that site copy is too long/complicated across pages.
**Goal:** Audit and tighten every customer-facing passage on the 10 live industry pages for readability, length, and aesthetic marketing framing. Isolate the core value of each section and say it aesthetically. No lengthy technical descriptions.

## The lens

The recurring failure mode across all pages: a single 40–50 word sentence states a value, then defends it with a "so that X, instead of Y, before Z" tail. Keep the value, delete the defense. Target ~40–50% word reduction on prose sections ("tighten hard").

## Per-section rubric (isolate the core value)

- **Hero subheadline** → one sentence, the promise. No triple-clause "A, B, and C" capability list.
- **painPoints / solutions / showcase / stackShowcase / featuredContent / finalCta** → lead with the outcome in plain language; cut the mechanism explanation. Product name stays, one benefit stays.
- **personas painPoints** → keep the stat + its source citation verbatim (accuracy-sensitive); cut the mechanism clause around it.
- **FAQ** → keep the factual answer (setup time, "complements not replaces," API); tighten the wrapper.

## Guardrails (baked into every subagent)

1. **Don't undo the accuracy work** shipped in commit `e1e0428`. Tighten phrasing; never widen or re-inflate a capability claim against the PRDs.
2. **Don't reintroduce fear-framing.** The aspirational reframe from commit `8c8e2b1` stays; shorter must not mean deficit-framed again.
3. **No AI staccato.** Per Rayyan's blog-voice rule, shortening must NOT produce "Not X. But Y." choppy reversals or robotic fragment-stacking. Short but human, light on jargon.
4. **Preserve verbatim:** product names, cited stats + their sources, accent colors, all config keys/structure, asset paths, and testimonial quotes (leave quotes untouched).

## Scope

- **In:** 10 live pages — cpg, retail-ecommerce, financial-services, healthcare, qsr, travel-hospitality, media-advertisers, media-networks, print-digital-audio, streaming-video.
- **In (sections):** hero subheadline, painPoints, solutions, showcase, stackShowcase, featuredContent, finalCta, personas painPoints, FAQ.
- **Out:** manufacturing + pharma (still `[PLACEHOLDER]` scaffold); testimonial quotes; asset paths; config structure. Leave the pre-existing pharma whitespace diff untouched.

## Workflow (audit-then-approve, same as the accuracy audit)

- **Phase 1** — 10 parallel Sonnet subagents, one per page. Each reads only its `config.js` and writes `scratch/copy-audit-readability/<slug>.md` with a **before → after + word-count delta** table for every in-scope passage. No edits.
- **Consolidation** — assemble one review doc grouped by section for Rayyan's approve/tweak pass before anything touches a file.
- **Phase 2** — after sign-off, apply-only subagents write approved text into `config.js`. Diff review, then commit.

## Model

Sonnet 5 (session default) for all subagents — the consolidated-review sign-off is the judgment backstop.
