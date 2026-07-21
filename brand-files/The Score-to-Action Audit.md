# The Score-to-Action Audit: Is Your Churn Model Actually Stopping Cancellations?

*A guide for streaming, digital publication, and subscription commerce marketers*

**By Jessica Vose, Head of GTM at Kana AI · \[DATE\] · 6 min read**

Somewhere in your data warehouse right now is a subscriber your churn model correctly flagged as high-risk. The model did its job. It saw the declining logins, the shrinking watch time, the lapsed payment method, and it scored her as likely to cancel, days or weeks before she actually did.

Nothing reached her. The score sat in a table until the next scheduled run pulled a list, and by then the subscription had already lapsed, a correct prediction with nowhere to go because nobody built a way for it to turn into a message before the moment passed.

That gap between the score and the send is where most retention budget quietly disappears. Here's a five-question audit to find out how wide yours is.
---

The stakes are as high as they get in subscription media. Broader streaming churn now averages around 6.3% a month, close to 54% annualized, and premium services aren't far behind at roughly 4.6%. Nearly a quarter of the US streaming audience are serial churners who cancel three or more services in a two-year span, timing subscriptions around whatever they want to watch next. And here's the part that should sting: about 24% of people who cancel resubscribe to the same service within six months anyway, rising to 40% for Gen Z. A meaningful share of "lost" subscribers never really left. They just weren't caught at the moment they were reachable.

The industry itself has named this failure. As one data-science analysis put it, churn prediction most often fails as a marketing operations problem, a model that produces probabilities nobody acts on. Run this audit against your own stack and see where you land.

## **Question 1: What happens in the hour after a score crosses threshold?**

For most teams, the honest answer is nothing. The model runs on a schedule, monthly or weekly, and its output waits for whoever pulls the next campaign list. If your answer to this question is "it waits for the next campaign cycle," you've found the gap. A risk score with no automatic next step is a research finding, not a retention program.

## **Question 2: Can you name your last correct catch, and what reached her in time?**

Ask your retention team to pull one specific subscriber the model flagged correctly last month, then trace what actually happened to her account between the flag and the cancellation. Most teams can produce the flag. Far fewer can point to a message, an offer, or any intervention that arrived before she left. If the honest answer is "she just showed up on next month's churned-subscriber list," the model and the campaign are two systems that don't talk to each other.

## **Question 3: Does the offer change based on why she's at risk?**

Content exhaustion (running out of things to watch) drives about a third of cancellations; price sensitivity and competition drive most of the rest. Those two subscribers need completely different retention offers. If your at-risk segment gets the same discount regardless of which reason the model attributes to her, you're solving a content problem with a price lever, or a price problem with content you don't have.

## **Question 4: How many hours pass between the flag and the first touch, on average?**

If you don't know this number, that itself is the finding. Win-back research is specific here: the most effective first touch after a cancellation goes out within 24 hours, while the subscriber is still mentally in the product; the real window closes within 30 days. Standard practice launches sequences 30 to 60 days after the cancel, well past the point research says matters. If you can't say how many hours typically pass between your own flag and your own outreach, you likely don't know whether you're inside that window or badly outside it.

## **Question 5: Are your saved subscribers being bought, or kept?**

Pull your last quarter of successful saves and check how many involved a discount. Then check tenure: subscribers won back without a discount stay roughly 2.6 times longer than the ones who needed a price cut. If discounting is your only save lever, you're likely recovering revenue this quarter at the cost of a subscriber who churns again as soon as the discount ends.

## **What the five answers usually add up to**

None of this requires new data. The churn model, the cancellation reasons, the win-back research, the discount history: every input above already exists somewhere in a typical subscription business's stack. The failure isn't the prediction. It's the handoff between the team that builds the model and the team that has to act on it manually, on a schedule the model was never designed to wait for.

This is the gap Kana's Agentic Data Platform is built to close. It connects your churn model's output directly to Kana's Campaign Orchestrator, so a retention offer triggers the moment a risk score crosses threshold, matched to the reason she's at risk, not a generic discount waiting for the next scheduled campaign, so the model's own prediction actually reaches her while she can still be reached.

## **Score-to-Action Challenge**

Still skeptical? We're challenging retention and data science teams at a variety of subscription businesses to do the following:

1. **Time your own gap.** Pick five subscribers the model flagged correctly last quarter. Find the hours between the flag and their cancellation, then the hours between the flag and any retention touch they received. The difference is your score-to-action gap.
2. **Split your saves by reason.** Pull last quarter's successful retention offers and tag each by whether the subscriber was flagged for content exhaustion, price sensitivity, or something else. If every tag got the same offer, that's the mismatch Question 3 is pointing at.
3. **Run the discount math.** Compare average tenure of discounted saves versus non-discounted saves from the last two quarters. If the gap is anywhere close to the 2.6x industry figure, discounting is buying short-term saves at the cost of long-term ones.

The subscription businesses that win the efficiency era won't be the ones with the most sophisticated churn model. They'll be the ones whose model's output actually reaches a subscriber before she clicks cancel.

*Written by Jessica Vose, Head of GTM at Kana.*
