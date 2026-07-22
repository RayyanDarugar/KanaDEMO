# QSR Copy Audit — Findings

**Summary:** Checked 20 product-capability claims across the hero, solution rows, personas, FAQ, interactive showcase, and stack-showcase sections. 3 were clean (Personalization solution row, Personalization persona, Personalization FAQ answer). 17 were flagged as OVERCLAIM. Nearly all of them trace back to three root issues, repeated across the page:

1. **Campaign Orchestrator's location/store-level spend optimization is explicitly PRD whitespace, not MVP.** The CO PRD lists "Location-level spend optimization — QSR/Retail whitespace" under Out of Scope and as White Space Backlog item #2. The page's entire CO narrative (location-aware plans per trade area) describes a capability the PRD says doesn't exist yet.
2. **"Automatically" contradicts the human-approval model.** Both the Agentic Data Platform's action loop and Campaign Orchestrator's execution model require human approval before anything moves ("never ungated execution"; "propose→approve→act→audit"). Copy describing offers pausing or spend shifting "automatically" overstates this.
3. **Audience Builder's PRD explicitly excludes day-part/send-timing decisions and external demand-signal ingestion.** AB's Non-Goals assign timing/journey/send decisions to Personalization and Campaign Orchestrator, and its data sources are CRM/loyalty/POS via the warehouse — not weather, traffic, or competitive-promotion feeds.

Also flagged: the FAQ's named POS/loyalty/ordering connectors (Toast, Brink, Oracle Simphony, Punchh, Paytronix, Olo) and its "2–4 weeks" setup timeline aren't supported by the Agentic Data Platform PRD, whose MVP connector scope is narrow (warehouse + 2 live sources) and whose time-to-value target is explicitly TBD.

---

## hero.subheadline
**Current copy:** "Kana gives you spend that follows market signal, offers wired to real kitchen conditions, and day-parts that flex with demand."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md — "Location-level spend optimization — QSR/Retail whitespace (see White Space Backlog)" (§6.2); Kana_PRD_Platform_Agentic_Data_Platform.md — "Not an end-user marketing app... Campaigns, audiences-as-product, and decisions live in the suite apps that consume it" (§4.2); Kana_PRD_Marketers_Audience_Builder_v2.md — "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator" (§4.2)
**Suggested fix:** "Kana gives you budget that keeps pace with what's converting, offers that respect real kitchen conditions, and targeting that adjusts as demand shifts."
**Why:** This line compresses the three overclaims below (location-level spend, automatic offer gating, day-part signal ingestion) into the hero; softening it here removes the overclaim from the page's highest-visibility line.

## solutionRows[0] — Campaign Orchestrator
**Current copy:** "Campaign Orchestrator enables location-aware audience and budget optimization — adjusting spend automatically by market performance signal. Instead of one national plan applied to thousands of different trade areas, each market's traffic patterns, competitive set, and menu preferences shape where the next dollar goes."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace (see White Space Backlog)"; §4.2 — "Never ungated execution. Even when automated spend changes ship from the backlog, they stay approval-gated; unattended budget movement is a permanent trust boundary, not a maturity milestone."
**Suggested fix:** "Campaign Orchestrator continuously compares how every channel is performing and recommends where the next dollar should go — with your team approving every move before spend shifts. Instead of a plan set once and left to run, budget keeps pace with what's actually converting. The weekly comp readout stops being a record of decisions made three weeks too late."
**Why:** Per-trade-area/location-level budget optimization is listed as PRD whitespace, and "automatically" contradicts CO's stated approval-gated execution model.

## solutionRows[1] — Agentic Data Platform
**Current copy:** "The Agentic Data Platform connects your operational data feeds to campaign logic — suppressing or adjusting offers based on real-time kitchen and inventory conditions. When an item gets 86'd or the line is at capacity, the push that would have promoted it pauses or pivots automatically. Marketing stops promising what operations can't serve."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — "Not an end-user marketing app. ADP has admin/steward surfaces only... Campaigns, audiences-as-product, and decisions live in the suite apps that consume it"; §7.6 — "Platform-level propose→approve→act→audit primitive (agent rules, pending actions, approval inbox)"
**Suggested fix:** "The Agentic Data Platform keeps your campaign tools working from the same operational picture as your stores — so when an item gets 86'd or the line is at capacity, your team can catch and adjust the offer that would have promoted it before it goes out, instead of finding out from a guest complaint. Marketing stops promising what operations can't serve."
**Why:** The PRD scopes ADP as a data and governance layer, not a holder of campaign logic, and every action on the platform runs through an approval inbox — "pauses or pivots automatically" overstates both the ownership and the automation.

## solutionRows[2] — Audience Builder
**Current copy:** Title: "Day-parts that flex with demand, not the calendar." Description: "Audience Builder works together with the Campaign Orchestrator to ingest external demand signals — weather, events, traffic, competitive promotions — and support optimized day-part targeting and offer timing across digital and local channels. Breakfast, lunch, and dinner campaigns respond to what's shifting demand this morning instead of running the schedule set last month."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 — "Not a campaign or messaging tool. AB builds and activates audiences; content, journeys, and send decisions belong to Personalization and Campaign Orchestrator"; §9 Data Requirements lists only CRM/loyalty/POS (warehouse-resident), consent fields, and paid-platform reach benchmarks — no weather/event/traffic/competitive-promotion signals anywhere in the PRD
**Suggested fix:** Title: "Audiences that are ready the moment demand shifts." Description: "Audience Builder builds precise, sized segments straight from your CRM and loyalty data — with suppression logic built in, so recent purchasers and opt-outs are automatically excluded. Instead of a two-week ticket to the data team, breakfast, lunch, and dinner segments are ready in minutes, so the offer goes out while the moment is still there."
**Why:** Day-part/offer-timing decisions are explicitly assigned to Personalization and Campaign Orchestrator in AB's Non-Goals, and AB's PRD data sources don't include weather, events, traffic, or competitive promotions.

## faq[0] — "How does Kana connect to our restaurant stack?"
**Current copy:** "Via API. Kana sits on top of your POS (Toast, Brink, Oracle Simphony), loyalty platform (Punchh, Paytronix), ordering system (Olo), and ad platforms — no rip-and-replace, no warehouse migration. Kana's solutions team handles setup, typically in 2–4 weeks depending on how many systems you're connecting."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1 — "Two live source connectors for the design partner (e.g., Salesforce + MAP)... LIVE connectors for the first design partner's top 2 sources (net-new — CDP's are config-only)"; §6.2 — "Full activation connector breadth (LinkedIn/TTD/Meta/DSPs live)... Backlog #2"; §4.3 — "Time from connection to first usable canonical objects | Days, not months (JIT claim — set exact target with first partner)"
**Suggested fix:** "Via API. Kana connects to your warehouse and the marketing, loyalty, and ordering systems you run today — no rip-and-replace, no data migration. Kana's solutions team scopes the connection list with you and gets you to first usable data fast, with exact timing set per engagement."
**Why:** The named POS/loyalty/ordering vendors aren't in the PRD's connector scope (MVP is warehouse + 2 live sources; broader connector breadth is backlog), and "2–4 weeks" isn't a PRD-backed figure — the PRD's own metric target is still TBD, set per first partner.

## faq[1] — "How does the Agentic Data Platform know what's happening in the kitchen?"
**Current copy:** "It reads the operational feeds your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity signals from your POS and ordering systems — and wires them into campaign logic. Offers pause or adjust automatically when conditions change, and every rule runs with your team's oversight."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1/§7.1 — MVP connectivity is warehouse (Snowflake) + two live sources such as Salesforce + MAP; §6.2 — "Not a general-purpose iPaaS. Connectors exist to feed the canonical model and activate segments — arbitrary system-to-system syncs... are out"; §7.6 — human-approval action loop, not automatic execution
**Suggested fix:** "It's built to work from the same operational signals your stores already produce — inventory and 86'd-item status, order volume, kitchen capacity — so offer decisions can reflect current conditions instead of a calendar set weeks ago. Every rule runs with your team's review before an offer goes out."
**Why:** POS/kitchen operational feeds aren't in ADP's documented connector scope, and "automatically" undersells the PRD's mandatory pre-execution approval step — "with your team's oversight" isn't strong enough to fix that on its own.

## personas[0].solution — Field/Franchise Marketing Manager (Campaign Orchestrator)
**Current copy:** "Location-aware audience and budget optimization that adjusts spend automatically by market performance signal. Every store's trade area gets a plan shaped by its own traffic patterns and competitive set — and the franchisee conversation starts from their numbers."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace"; §4.2 — approval-gated execution is permanent, not a maturity milestone
**Suggested fix:** "Cross-channel budget optimization that reallocates spend to whatever's converting, with every recommendation reviewed by your team before it ships. Every channel gets a plan shaped by its own performance — and the franchisee conversation starts from real numbers, not the system average."
**Why:** Same location-level and automatic-execution overclaims as solutionRows[0].

## personas[1].solution — Director of CRM & Lifecycle (Agentic Data Platform)
**Current copy:** "Connects operational data feeds to campaign logic, suppressing or adjusting offers on real-time kitchen and inventory conditions. The push calendar stops promising what the store can't serve."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — "Campaigns, audiences-as-product, and decisions live in the suite apps that consume it"; §7.6 — approval-inbox action loop
**Suggested fix:** "Keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it sends. The push calendar stops promising what the store can't serve."
**Why:** Same campaign-logic-ownership and automation overclaims as solutionRows[1].

## personas[2].solution — Director of Media (Audience Builder)
**Current copy:** "Ingests external demand signals — weather, events, traffic, competitive promotions — and works with the Campaign Orchestrator to optimize day-part targeting and offer timing across digital and local channels, market by market."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 — send/timing decisions belong to Personalization and Campaign Orchestrator; §9 — no weather/event/traffic data sources listed
**Suggested fix:** "Builds sized, suppressed audiences straight from your CRM and loyalty data in minutes instead of weeks — so day-part campaigns launch from a current segment instead of a stale export, market by market."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].

## personas[4].solution — VP Restaurant Marketing / CMO (Campaign Orchestrator)
**Current copy:** "The location-aware spending engine behind the whole story: budget follows market performance signal, every market's results trace to the decisions that drove them, and the franchisee council sees their stores in the plan — not just the system average."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — "Location-level spend optimization — QSR/Retail whitespace"
**Suggested fix:** "The channel-optimization engine behind the whole story: budget follows performance signal, every reallocation traces to the decision that drove it, and the franchisee council sees the reasoning behind the plan — not just the system average."
**Why:** "Location-aware spending engine" restates the location-level capability the PRD scopes as whitespace.

## showcase.columns[0] — Campaign Orchestrator
**Current copy:** "Location-aware budget optimization adjusts spend automatically by market performance signal — so high-variance markets get plans built for their trade area, not the national mean."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — location-level optimization is whitespace; §4.2 — approval-gated execution is permanent
**Suggested fix:** "Budget optimization surfaces where the next dollar performs best across your channel mix — with every reallocation reviewed by your team before spend moves — so high-variance markets stop running on the national mean."
**Why:** Same location-level and automatic-execution overclaims as solutionRows[0].

## showcase.columns[1] — Agentic Data Platform
**Current copy:** "Operational feeds gate campaign logic in real time. When the kitchen is slammed or an item is out, the offer pauses or pivots — before the guest finds out at the counter."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — campaign decisions live in suite apps, not ADP; §7.6 — approval-inbox action loop, not autonomous pausing
**Suggested fix:** "Kana keeps your campaign tools working from the same operational picture as your stores, so your team can catch and adjust an offer before it goes out — before the guest finds out at the counter."
**Why:** "Gate campaign logic" and an offer that "pauses or pivots" on its own both overstate ADP's role and its automation level.

## showcase.columns[2] — Audience Builder
**Current copy:** Title: "Day-parts that flex with the weather." Description: "External demand signals — weather, events, traffic, competitor promos — reshape day-part targeting and offer timing across digital and local channels while the demand is still there."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 and §9 (as above)
**Suggested fix:** Title: "Segments that are ready before the moment passes." Description: "Audiences build straight from your CRM and loyalty data in minutes, not weeks — with suppression built in — so day-part campaigns launch from a current segment while the demand is still there."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].

## stackShowcase.subtitle
**Current copy:** "Connects to your POS, loyalty platform, ordering system, and ad platforms — Toast, Punchh, Paytronix, Olo, Braze, and more — no rip-and-replace, no new governance gaps."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §6.1/§7.1 — MVP connectivity is warehouse + 2 live sources (e.g., Salesforce + MAP); §6.2 — broader connector breadth is Backlog #2
**Suggested fix:** "Connects to your warehouse, loyalty platform, ordering system, and ad platforms — no rip-and-replace, no new governance gaps."
**Why:** Naming specific POS/loyalty/ordering vendors as connected states a connector breadth the PRD doesn't yet support.

## stackShowcase.columns[0] — Campaign Orchestrator
**Current copy:** Title: "Give every location its own plan without hiring a planner per market." Description: "Campaign Orchestrator — market performance signals drive location-aware budget and audience optimization across thousands of trade areas. The stores the pooled fund used to leave behind get plans shaped by their own demand."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Campaign_Orchestrator_v2.md §6.2 — location-level optimization is whitespace
**Suggested fix:** Title: "Reallocate budget without hiring a planner per channel." Description: "Campaign Orchestrator — performance signals drive budget reallocation across your channel mix, with every move reviewed by your team before it ships. The channels the pooled fund used to run on autopilot get plans shaped by what's actually converting."
**Why:** Same location-level overclaim as solutionRows[0]; also drops "audience... optimization," which is Audience Builder's job per its own PRD, not Campaign Orchestrator's.

## stackShowcase.columns[1] — Agentic Data Platform
**Current copy:** Title: "Wire the kitchen into campaign logic." Description: "Agentic Data Platform — operational feeds from your POS and ordering systems gate every offer on real-time inventory and kitchen conditions. Marketing and operations stop finding out about each other from guest complaints."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Platform_Agentic_Data_Platform.md §4.2 — campaign decisions live in suite apps, not ADP; §6.1 — POS/ordering systems aren't in the documented MVP connector scope
**Suggested fix:** Title: "Keep campaigns honest about what the kitchen can deliver." Description: "Agentic Data Platform — keeps your campaign tools working from the same operational picture as your stores, so offers can be caught and adjusted before they go out. Marketing and operations stop finding out about each other from guest complaints."
**Why:** Same campaign-logic-ownership and unsupported-connector overclaims as solutionRows[1].

## stackShowcase.columns[2] — Audience Builder
**Current copy:** Title: "Target the day-part, not just the demographic." Description: "Audience Builder — external demand signals reshape targeting and offer timing by day-part and market. Proximity, trade area, and time-of-day drive QSR visits; your campaigns finally act like it."
**Verdict:** OVERCLAIM
**PRD citation:** Kana_PRD_Marketers_Audience_Builder_v2.md §4.2 and §9 (as above)
**Suggested fix:** Title: "Build the segment, not just the demographic." Description: "Audience Builder — sized, suppressed segments build straight from your CRM and loyalty data in minutes. Proximity, trade area, and visit timing live in your data; your campaigns finally act on it fast enough to matter."
**Why:** Same day-part/external-signal overclaim as solutionRows[2].
