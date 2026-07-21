# Four HIPAA Myths Keeping Your Marketing Generic

*A guide for health plan, hospital system, and wellness brand marketers*

**By Jessica Vose, Head of GTM at Kana AI · \[DATE\] · 6 min read**

Ask a healthcare marketing team why their wellness campaign goes to every member on the roster instead of the ones with an actual open care gap, and you'll usually get the same answer: HIPAA won't let us get more specific.

Most of the time, that's not true. It's a caution reflex built up over years of ambiguous guidance, a few high-profile enforcement actions, and nobody wanting to be the person who approved the campaign that triggered an investigation. The reflex is understandable. It's also expensive: Medicare Advantage quality bonus payments reached at least $12.7 billion in 2025, and HEDIS measures (the ones outreach can actually move) now make up 26% of a plan's Star Rating, the highest-weighted category there is. Every generic campaign sent instead of a targeted one is bonus revenue and closed care gaps left on the table.

So before your next planning meeting defaults to "let's just keep it general to stay safe," here are four beliefs about HIPAA worth checking against what the rule actually requires.
---

## **Myth: Personalizing outreach means giving marketing broader access to member data**

This is the belief that does the most damage, because it frames personalization and privacy as a trade-off, and most teams choose privacy every time.

The actual requirement is narrower than that. A compliant setup doesn't hand raw clinical records to a campaign tool. It puts a governed layer in between: a platform covered by a Business Associate Agreement (BAA) that ingests the clinical data (care-gap lists, risk scores, appointment history) and exposes only what marketing needs to act, something like "this member has an open screening gap," not the underlying chart. Marketing personalizes against the signal. The record itself never leaves the governed environment. Personalization and data minimization aren't opposites; they're two requirements the same architecture can satisfy at once.

## **Myth: Staying generic keeps you out of legal trouble**

Genericness feels safe, but it isn't actually where the enforcement risk lives. The Office for Civil Rights collected $9.9 million in settlements in 2024 alone, and total HIPAA fines tied to tracking technology topped $100 million between 2023 and 2025. Almost none of that came from a well-targeted email campaign. It came from tracking pixels and analytics scripts quietly sending visitor data to ad platforms from scheduling pages, patient portals, and symptom checkers, often without anyone on the marketing team realizing the tag was even active.

In other words, the actual violations are showing up in the martech plumbing, not in the message. A team can run the most generic campaign calendar in the industry and still have a Meta pixel firing on an appointment-confirmation page, and no amount of caution about how targeted the messaging is will catch that. Auditing the tracking stack will.

## **Myth: A cookie consent banner covers you**

This one persists because it's true almost everywhere else on the internet. Under general privacy law, a consent banner can be enough. Under HIPAA, it isn't. A banner asking a visitor to accept cookies is not a Business Associate Agreement, and it doesn't create the legal authorization needed to use protected health information for marketing.

The uncomfortable part is that a lot of healthcare marketing stacks are running exactly this setup: a consent management platform bolted onto tools that were never evaluated for a BAA, treated as covered because a banner appears on page load. If your compliance answer to "how are we authorized to use this data" is "we have a cookie banner," that's not a yes, and it's worth finding out now rather than after an OCR inquiry does.

## **Myth: Once something is HIPAA-compliant, the constraint is solved**

Compliance isn't a one-time gate a project passes through. It's an ongoing property of how data moves, who touches it, and what gets logged along the way. This is exactly why healthcare CMOs report both budget pressure and staff reductions while being asked to personalize more: the actual work isn't approving one campaign, it's building infrastructure (audit logs, defined data flows, a BAA'd activation layer) that stays compliant as campaigns, tools, and staff change.

Treated this way, HIPAA stops being a wall a project has to get past and becomes an architecture a program runs inside of, continuously, not a checkbox from a launch review six months ago.

## **The pattern underneath all four**

Every myth above points at the same mistake: treating a data-governance problem as a marketing-restriction problem. HIPAA governs how protected health information moves and who's accountable for it. It says very little about whether a member with an open care gap can receive a more relevant message than a member without one. The generic-by-default posture has less to do with the regulation itself than with the absence of infrastructure that could satisfy it with confidence, and caution filled that gap instead.

That's the gap Kana's Agentic Data Platform is built to close. It's architected for HIPAA-compliant data activation, connecting to your existing systems through the governed layer described above, so personalization happens within defined regulatory guardrails, not despite them. The care-gap segments, the risk-based outreach, the compliant activation your team assumed meant months of legal review: it's infrastructure, not a workaround.

## **HIPAA Architecture Challenge**

Still skeptical? We're challenging healthcare marketing and compliance teams at a variety of organizations to do the following:

1. **Trace your last "we can't personalize that" decision.** Find the actual policy or regulation cited. If the honest answer is "nobody wanted to be the one who asked legal," that's caution, not compliance.
2. **Audit your tracking stack, not your campaign calendar.** Pull every pixel and analytics tag running on a scheduling page, portal, or symptom checker, and check each one against a signed BAA. That's where the real fines have been coming from.
3. **Ask your privacy officer to name your BAA'd activation layer.** If the honest answer is "our consent banner," you've found the actual gap, and it isn't the one your team has been avoiding.

The health plans and systems that win the next enrollment season won't be the ones playing it safest with generic mail. They'll be the ones who built the architecture to stop needing to.

*Written by Jessica Vose, Head of GTM at Kana.*
