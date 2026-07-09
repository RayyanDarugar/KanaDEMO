# Kana Marketing Intelligence App — Product Requirements Document

**Owner:** Rayyan Darugar **Status:** Draft v1 **Last updated:** June 16, 2026

---

## 1\. Overview

The Marketing Intelligence app gives Kana a natural-language-queryable view into how outbound campaigns perform across user segments, sequences, and message variants. It replaces today's manual process of reading individual email responses one by one with an LLM-driven analysis layer that pools all outbound data and surfaces patterns at scale.

The Marketing Intelligence solution on Kana's website is, in practice, the existing **Brand Intelligence** app. This project clones and adapts Brand Intelligence rather than building from scratch.

---

## 2\. Problem

Campaign analysis is currently manual and does not scale. To understand performance today, a person has to:

- Open each response in the messaging tool  
- Read it and judge whether it is a positive or negative signal  
- Manually identify the responder's title and company type (e.g., "VP of Strategy and Business Development at a cybersecurity company")  
- Repeat across hundreds or thousands of emails

This makes it impossible to see patterns across segments, sequences, and variants. There is no way to answer questions like "which industries resonate most with sequence 1?" without doing the work by hand.

---

## 3\. Goals

- Pool all outbound campaign data into a single queryable source.  
- Let a user analyze performance by industry, persona/title, sequence, and variant.  
- Answer the core question: **what market segment \+ what variant \= what response?**  
- Provide both dashboard statistics and a natural-language chatbot over the same data.  
- Run sentiment analysis on email responses at scale instead of by hand.

### Non-goals (for v1)

- Generating a single prescriptive recommendation per prospect. (The recommendation/agent layer is a later phase.)  
- Market-data integration via the Category Intelligence Hub. (Later phase.)

---

## 4\. Users

Primary user is the GTM/outbound operator (Rayyan) who runs and analyzes campaigns and needs to know what is working where without manual review.

---

## 5\. Core use cases and queries

The app must be able to answer questions like:

- Which industries resonate most with sequence 1?  
- Which sequences resonate most with a given industry?  
- Do marketing managers at retail companies resonate with the messaging copy in sequence 1?  
- What's performing best, and where?  
- Point the app at a large volume of emails (e.g., a thousand) and surface response patterns automatically.

The unifying analytical frame is the relationship between **market segment**, **message variant**, and **response**.

---

## 6\. Functional requirements

### 6.1 Two interfaces (both required)

1. **Dashboard statistics** — segment and sequence performance shown as metrics. The Brand Intelligence base already surfaces email-marketing metrics such as open rate and CTR.  
2. **Natural-language chatbot** — an agent that queries across the full pooled dataset so the user can ask questions in plain language and get answers back.

### 6.2 Data analysis

- **Sentiment analysis on email responses specifically**, performed by an LLM.  
- All outbound data pooled into a **single source** so one agent can query across everything.  
- Performance segmentable by **industry, persona/title, sequence, and variant**.  
- Each response enriched with the responder's **role/title and company type** — automating the manual enrichment done today.

### 6.3 Data model concepts (from Instantly campaign structure)

- **Campaign** \= a market segment being targeted (multiple campaigns run in parallel against different segments).  
- **Sequence** \= the automated multi-step message flow fed to a set of leads within a campaign.  
- **Variant** \= a variation of an email within a sequence.  
- **Response** \= the reply from a prospect, the unit that gets sentiment-analyzed and tied back to segment \+ variant.  
- **Responder** \= the actual person who was messaged and responded: broken down by roles, company industries, sizes, etc.

---

## 7\. Integrations

### Phase 1 (now)

- **Instantly** — outbound email send platform. Source of campaigns, sequences, variants, and responses. Has API access available. **Blocker:** workspace ownership unresolved (see Section 10).  
- **Valley** — confirmed API access available.

### Later phases

- **Hawser**  
- **Category Intelligence Hub** — so outbound data sits alongside market data (sales & distribution, shopper panel, brand health, etc.) as an added "outbound panel" on top of the existing data catalog. This realizes the longer-term vision of one combined studio covering both outbound analysis and market-segment/category analysis.

### Integration note

It would be valuable to let users add their own integrations rather than requiring every new source to be added in code, since tooling changes quickly. For enterprise clients this is typically handled in the build-with setup, but a self-serve path (custom secrets \+ named API keys usable in code) is worth considering.

---

## 8\. Build approach

- **Base app:** clone **Brand Intelligence**. Access is confirmed. It already contains the email-marketing analytics structure (open rate, CTR, etc.) that closely matches the need.  
- **Trim:** remove extra or confusing elements from the cloned app that aren't needed for this use case   
- **Expand later:** the base is email-only, so additional channels — **paid ads and LinkedIn** — get added in later phases.

The build is expected to be primarily an **integration job**, not a from-scratch product build, since the analysis system already largely exists.

---

## 9\. Phasing

| Phase | Scope |
| :---- | :---- |
| 1 | Clone Brand Intelligence, integrate Instantly \+ Valley, pool outbound data, sentiment analysis on responses, dashboard \+ chatbot over email outbound |
| 2 | Add channels (paid ads, LinkedIn); integrate Hawser; integrate Category Intelligence Hub for combined outbound \+ market view |
| 3 | Agent/recommendation layer: given a new prospect in a known segment, recommend the variant/sequence most likely to work |

---

## 10\. Open blockers and dependencies

- **Instantly workspace ownership** — the workspace is run by a contractor; it's unclear whether Kana legally owns it. Credentials and API key access need to be resolved with him before Instantly data can be ingested.

---

## 11\. Success criteria

- A user can ask, in natural language, which segment/variant/sequence combinations are performing best and get an accurate answer drawn from real outbound data.  
- Response sentiment is classified automatically across the full email volume, with no manual reading required.  
- Dashboard and chatbot draw from the same pooled dataset and stay consistent.

