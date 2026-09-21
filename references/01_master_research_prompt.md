# Step 1: Master Research Prompt, Travel Industry Sweep

Invoked, this step starts at once. Do not ask the operator anything before or
during the sweep: `context.md` is optional, and with none this is an
open-ended run across the whole travel universe. The plan is written into the
run as a record and research starts immediately; the run's first stop is
Checkpoint 1, after Step 2.

This file is the research prompt. It is not a template for generating one.
Run it as written, against the operator's `context.md` if one exists. The context
file is optional; with none, the sweep runs unscoped.

Check silently for `context.md` (skill directory, working directory, run
directory) before anything else. If it exists, read it first: the
business, sub-niche, markets, locales, audience, keywords, first-party data,
research scope, and freshness window in that file scope how the sweep below is
applied. Every part is considered; if `research_scope` narrows the sweep, the
plan says what drops and why, topics in `out_of_scope` are excluded, and topics
in `in_scope` are prioritized. Depth follows the operator's markets and reader
decisions. If no context file exists, the sweep runs unscoped: the whole
travel universe, an open freshness window unless the operator sets one, and no
business, audience, market, keywords, or first-party data invented to fill the
gap. The audience anchor still holds in this mode: research collects
industry-intelligence material for context, but every page topic carries an
Audience label, and industry-intelligence topics are page-ineligible. The
freshness window decides what counts as new for this batch.

---

## Research objective

Map the current state of the travel industry well enough that a senior
practitioner learns something, then reduce that map to a dated taxonomy of
page topics the business can cover this cycle. The output is not a
beginner's overview of travel. It is practitioner-grade: specific changes,
named authorities, exact fees, real dates, and the operational knowledge that
guides omit. Every paragraph must carry at least one specific fact, number,
named entity, or cited claim. No sentence that could appear unchanged in a
report about a different industry.

---

## Search method

- Build seed queries from `context.md` first (when one exists): one per combination of the
  business's sub-niche, each market served, and each reader decision, plus
  the keywords list, before any creative phrasing. Then each theme gets its
  trend-surface queries before anything else: rising queries, autocomplete,
  People Also Ask, and year-paired phrasings for the freshness window
  ("travel to X 2027"), one per market served. Rising phrasings found this
  way enter the theme's seed list ahead of the keyword-list seeds. Then run
  the sweep parts below.
- Search in the language of the source, not only in English. Entry rules for
  a market are documented by that market's authority, in that market's
  language. Record the language of every source.
- Use alternative phrasings before concluding anything is absent: the
  official term, the colloquial term, the traveller's phrasing, and the
  regulator's phrasing for the same thing.
- Use time-bounded phrasings when the freshness window is tight: pairing the
  topic with the year, the month, or words like "new", "updated", or
  "suspended" surfaces change coverage that a bare topic query misses.
- Follow citations. A trade article that paraphrases a regulation is a
  pointer to the regulation, not a source for it. Open the thing it points
  to.
- Capture comparative material where it exists: fee schedules, rate tables,
  per-market and per-carrier variants, escalation calendars. Tables with named
  sources beat prose summaries for the density the later steps build pages
  from, and they expose the exact rows competitors usually miss.
- Collect the exceptions, the failure points, and the edge cases alongside
  the rule: what gets refused, what gets fined, which step stalls a booking,
  what the ranking pages get wrong. A page that states the rule in one line
  is not a page; the friction is what makes it dense and differentiated.

## Source quality architecture

Categories are not sources. Every claim traces to a named source, ranked:

- **Tier 1, primary.** Statutes, regulations, official gazettes, issuing
  authorities, border agencies, transport operators' official conditions,
  government travel advisories, court and tribunal records, official fee
  schedules, peer-reviewed research, official government or organization data,
  and primary research.
- **Tier 2, corroborating.** Named trade outlets (Skift, Travel Weekly,
  PhocusWire, Simple Flying, anna.aero, TTG), major outlets, established
  industry sources, named experts with verifiable credentials, official
  industry bodies (UN Tourism, WTTC, IATA, ACI, STR), audited statistics.
- **Tier 3, contextual.** Practitioner communities: r/travel, r/solotravel,
  r/awardtravel, r/travelhacks, r/digitalnomad, r/cruise, r/Interrail,
  FlyerTalk, Tripadvisor destination forums. Also blogs, small outlets, and
  company marketing materials. Usable for operational knowledge and phrasing,
  never as the sole support for a factual claim. Treat any single forum claim
  as anecdote: include it only with attribution (who, where, when) and
  corroboration, or framed explicitly as practitioner opinion.
- **Tier 4, social.** Social media posts and anonymous sources. Never a source
  for a factual claim; usable at most as attributed color beside a
  higher-tier source.

Every claim in the ledger carries its tier. A claim resting only on Tier 3 is
labeled as such.

## Blocked sources

Paywalls, bot checks, JavaScript-only portals, and geo-blocked government
sites are normal in travel research.

- Try alternate access before giving up: the authority's own search, an
  archived copy, an official mirror, or the document's reference number
  quoted in a Tier 2 source.
- Record the access method used for every difficult source.
- A source that cannot be opened by any method is not a source. Mark the
  claim `unanswerable` and list it in coverage gaps with what was tried.
- Never cite a source from its snippet, its title, or another page's summary
  of it.

## Absolute dates

"Recent", "currently", and "last year" are forbidden. Every time reference is
an absolute date or a labeled vintage. Anything framed as news, a change, or
a current requirement must sit inside the operator's freshness window and
carry its source date. Standing rules, statutes, conventions, and official
documents may be older, but must be opened live, dated, and labeled as
background rather than news. With an open window, mark each item's vintage so
the planner can judge it.

## Contradictions

Report both positions, both sources, and which one the evidence weights
higher, with the reason. Link the rows through the ledger's `contradicts`
field. Never resolve a contradiction silently.

## Grounding rules

If searches do not return relevant results after trying alternative
phrasings, say so explicitly rather than speculating. Before finalizing,
confirm every citation resolves to a real source you actually opened; delete
any claim you cannot cite. No fabricated numbers, studies, quotations, or
expert consensus. An honest gap is a valid research output.

---

## The sweep

Twelve thematic parts cover the travel industry, and Part 0, the trend
sweep, runs first and shapes the rest. Each part lists what to investigate
with named authorities, companies, and systems. For each part that produces
anything usable, drill down to the specific change or requirement, the
specific market, the specific document, the specific date, and the specific
reader it affects.

Depth per page topic, not just per theme: a page topic that survives the sweep
should carry at least three claim-ledger rows across the rule, fee, date,
procedure, and statistic types, or a row carrying a `contradicts` value, so the
writing step can build a
dense, informative page without re-researching. Where a topic ends the sweep
with fewer, mark it `depth-thin` in the taxonomy with the number of rows it
has; the idea step treats depth-thin topics as merge or kill candidates rather
than standalone pages, because a one-fact page is a fragment.

A thirteenth lane, Part 13, runs alongside the twelve thematic parts. It
sweeps novel, innovative, and offbeat travel subjects, so the sweep does not
lean on government and regulatory documents alone. It keeps the same evidence
standard, the same claim-ledger schema, and the same stop rules as every other
part. Its budget is the lane-level exception stated in Part 13.

### Part 0: Trend sweep (runs first)

Before the twelve thematic parts, sweep what is moving now in the operator's
markets: rising travel queries for the freshness window, destination news
velocity, airline-route and hotel and attraction openings, and event
calendars. The output is a short ranked list of what is moving, written into
the plan. It shapes the budgets that follow: themes the trend sweep hits get
their queries first and their budget doubled; themes it shows nothing about are
researched last, on the standard budget, so their saturation threshold stays
reachable.

### Part 1: Entry rules, visas, and border systems

**1.1 Entry authorization systems.** Status, fee, launch date, and rollout
phase for every major system, opened on the authority's own site: the EU
Entry/Exit System and ETIAS (travel-europe.europa.eu), US ESTA
(cbp.gov), UK ETA (gov.uk), Canada eTA, Australia ETA, South Korea K-ETA,
Japan Visit Japan Web, Thailand TDAC, and any comparable system announced
for the operator's markets. For each: who must hold it, what it costs, how
long approval takes, what changes at the border, and what date each fact was
last confirmed by the issuing authority.

**1.2 Visa policy changes.** New visa-free agreements, suspensions, e-visa
launches, and reciprocity shifts affecting the operator's markets. China's
unilateral visa-free expansions, Schengen visa code changes, US Visa Waiver
Program additions and removals, and bilateral agreements. Cite the gazette
or ministry notice, not the news article about it.

**1.3 Passport and document rules.** Validity windows by destination (the
Schengen 10-year issue rule, 3-month and 6-month validity rules), blank-page
requirements, emergency and temporary document acceptance, domestic
identification mandates such as US REAL ID, and international driving
documentation under the 1949 and 1968 conventions. Where two authorities
state the same rule differently, that is a contradiction: log both.

**1.4 Border practice.** Refusal rates, secondary screening patterns, proof
of funds and accommodation checks, biometric enrollment pain points, and
queues caused by new systems. Tier 1 for the rules, Tier 3 for the lived
experience, labeled accordingly.

### Part 2: Aviation

**2.1 Route network.** New, resumed, and axed routes touching the operator's
markets, from airline newsrooms and anna.aero route announcements. Seasonal
versus year-round, frequency, start date, and aircraft where it changes the
reader's decision.

**2.2 Fares and fees.** Fare trend data from Hopper, Skyscanner, IATA, and
national statistics offices; ancillary fee changes (bags, seats, change
fees); fee transparency rules such as the US DOT junk-fee rule, and their
enforcement status.

**2.3 Airline policy.** Loyalty program devaluations and enhancements by
named program, baggage and carry-on policy shifts, basic economy
restrictions, strike mandates and labor disputes with dates.

**2.4 Airports.** Terminal openings, capacity constraints, slot changes,
security and check-in process changes, passenger volume records from ACI and
the airports themselves.

### Part 3: Rail, road, ferry, and ground transport

**3.1 Rail.** New routes and night-train relaunches (ÖBB Nightjet, European
Sleeper, national operators), rail pass changes (Interrail, Eurail, Japan
Rail Pass pricing), reservation rules, and strike calendars where they are
predictable.

**3.2 Driving.** Rental requirements by market, low-emission zones and their
enforcement dates, toll and vignette systems, city entry charges, and winter
equipment mandates with dates.

**3.3 Ferries and cruises.** Schedule and operator changes, emission rules
affecting itineraries (fjord zero-emission requirements, port caps such as
Venice, Barcelona, Amsterdam, Bergen), booking windows, and vehicle rules.

**3.4 Local transit.** City transit pass changes, fare cap systems, airport
link openings and closures affecting the reader's first and last mile.

### Part 4: Destinations, tourism policy, and overtourism

**4.1 Tourist taxes and fees.** Every new or changed levy in scope: city
taxes, day-trip fees (Venice), accommodation taxes, cruise passenger fees,
national park fees for foreigners. Rate, per-what basis, start date, and the
municipal or national notice that sets it.

**4.2 Overtourism measures.** Caps, timed entry, cruise restrictions,
short-term rental bans, marketing withdrawals, and resident protests with
material effects. What changed, where, when, and what a visitor must do
differently.

**4.3 Openings and closures.** Attractions, trails, national parks, and
districts newly opened, closed, or restricted, with dates and the managing
authority.

**4.4 Events and calendar.** Expos, sports events, festivals, and
one-time events that move demand or prices in the operator's markets,
with dates.

### Part 5: Accommodation

**5.1 Short-term rental regulation.** Registration schemes, night caps,
outright bans, and enforcement waves (New York Local Law 18, Barcelona's
2028 license withdrawal, Amsterdam, Paris, Florence), and what platforms
(Airbnb, Booking.com, Vrbo) changed in response.

**5.2 Hotel industry.** Rate and occupancy trends from STR/CoStar, notable
openings and brand conversions in the operator's markets, and loyalty or
resort-fee policy changes at named chains.

**5.3 Fee transparency.** Resort and destination fees, junk-fee legislation
(US FTC rule, California SB 478), and what the reader actually pays beyond
the headline rate.

### Part 6: Tours, activities, and attractions

**6.1 Ticketing changes.** Timed entry, dynamic pricing, capacity cuts, and
booking-window shifts at major attractions (Louvre, Vatican Museums, US
national park timed-entry pilots, Machu Picchu circuits).

**6.2 Permits and quotas.** Permit lotteries, quota systems, and guide
requirements for trails, peaks, and protected areas in scope, with open
dates and odds where available.

**6.3 The tour industry.** Moves by GetYourGuide, Viator, Klook, and local
operator associations that change what travellers can book or what it costs.

### Part 7: Money, prices, and purchasing power

**7.1 Exchange rates.** Material currency shifts for the operator's origin
markets against destination currencies, over the window and the year.

**7.2 Cost benchmarks.** Post Office Holiday Money Report, Backpacker Index,
and comparable indices; which destinations moved most, and why, with the
methodology noted.

**7.3 Payment practice.** Card acceptance shifts, cash rules and declaration
thresholds, dynamic currency conversion traps, and tipping norm changes
where documented.

### Part 8: Consumer protection and compensation

**8.1 Air compensation regimes.** EU261 and UK261 as they stand and any
revision status (Council and Parliament positions, thresholds, deadlines),
US DOT refund rules, Canada APPR, and the Montreal Convention's scope. Which
flights and which passengers each regime covers, including EEA
applicability questions.

**8.2 Package and booking protections.** The EU Package Travel Directive and
its revision status, UK Package Travel Regulations and ATOL, insolvency
protection, refund deadlines, and complaint handling obligations.

**8.3 Travel insurance.** Coverage changes, exclusions that matter (named
perils, adventure activities, pre-existing conditions), and claim trends
from named insurers' official reports.

### Part 9: Safety, health, and advisories

**9.1 Advisories.** Changes to UK FCDO, US State Department, Australia
Smartraveller, and Canada's travel.gc.ca advisories for in-scope destinations:
what changed, the date, and what the change means operationally.

**9.2 Health requirements.** Vaccination entry requirements, WHO and CDC
travel notices, malaria and dengue range shifts, and medication legality
differences that strand travellers.

**9.3 Natural and operational hazards.** Volcanic, seismic, wildfire, storm,
and flood activity affecting in-scope destinations, from the responsible
meteorological and civil-protection authorities, with current alert levels
and dates.

### Part 10: Demand, seasonality, and industry research

**10.1 Research releases.** The current editions of: UN Tourism World
Tourism Barometer, WTTC economic impact research, IATA passenger statistics,
ACI airport rankings, STR hotel data, ForwardKeys booking intelligence,
Mastercard Travel Industry Trends, Skyscanner Horizons, Expedia Unpack,
Google travel trend reports. What each actually says, when it was issued,
its denominator and methodology, and what it means for the operator's
markets. These numbers are not comparable across studies; record the
denominator and origin of every statistic used.

**10.2 Behavior shifts.** Documented shifts: solo travel, bleisure,
set-jetting, dupe destinations, event-led travel, last-minute booking
compression. Each claim tied to a named study or dataset; unsourced trend
claims do not count.

**10.3 Origin market shifts.** Outbound growth and decline by country,
exchange-rate drivers, and demographic changes that alter who travels where.

### Part 11: Booking surfaces and travel technology

**11.1 Search and answer surfaces.** Changes to Google Flights, Hotels, and
AI Overviews for travel queries; which sources answer engines cite for
travel questions; where they are stale or wrong.

**11.2 OTA and platform moves.** Policy and feature changes at Booking.com,
Expedia, Airbnb, Trip.com, and metasearch that change what travellers see or
pay.

**11.3 Distribution disputes.** Delistings, direct-booking pushes, NDC
adoption, and loyalty-gated pricing that change where the best price sits.

### Part 12: Hidden tips, tricks, and insider tactics

What desk staff, agents, frequent travellers, and operations people know that
guides omit. Every item labeled: proven, practitioner consensus, or
single-source anecdote. This material comes disproportionately from Tier 3
sources; the label is what makes it usable honestly. If credible
first-hand accounts are thin for a topic, keep the section short and fully
attributed; invented insider tips are worse than a brief section.

**12.1 Border and documentation practice.** What actually gets checked at
specific borders, how officers interpret ambiguous rules, and the documents
experienced travellers carry beyond the legal minimum.

**12.2 Booking structure tactics.** Positioning flights, split tickets,
nested bookings, award availability patterns, and the risks each carries.
Grey-area tactics get a risk assessment, never an unqualified endorsement.

**12.3 Money and fee avoidance.** Legitimate structures that avoid fees
(fare classes, booking channels, card choices) and the common mistakes that
trigger them.

**12.4 On-the-ground practice.** Queue timing, entry-point selection,
shoulder-day travel, and the operational knowledge that separates a smooth
trip from a stranded one, with attribution.

### Part 13: Novel, innovative, and offbeat travel

**This is the most important lane in the sweep.** Budget the lane first,
never cut it when the trend sweep shows nothing, and spend its one theme
budget on the sub-lanes the trend sweep shows movement in.

This lane is additive to the twelve thematic parts above. It exists so the
sweep does not lean on government and regulatory documents alone. It carries
the same rules as every other part: one travel reader per page topic, the same
claim-ledger schema, openable sources, absolute dates, and the same saturation
threshold. The trend sweep feeds it: viral, opening, and record signals from
Part 0 shape which sub-lanes get the budget.

**13.1 Novel stays, venues, and attractions.** World-first and unusual
accommodations and venues: converted lighthouses, prisons, planes, cranes, and
silos; underwater, ice, and treetop hotels; themed brand stays; new museum
concepts; immersive venues such as LED domes and Sphere productions; novelty
parks; and record-holding rides and structures. Open the venue or operator
newsroom for the opening date, the ticket mechanics, the price, and the
booking window; open the attractions trade press for the operating context.
Named sources: Blooloop, Theme Park Insider, Amusement Today, and IAAPA for
the attractions industry; Guinness World Records for a record claim; the venue
or brand newsroom as a self-reported source.

**13.2 Quirky festivals and calendar oddities.** Named festivals with an
unusual hook (single-ingredient food festivals, odd world championships,
one-time anniversaries, folk rites with a fixed date), with dates, locations,
the organizer, and the ticketing or free-entry rule. Open the festival
organizer and the municipal or national tourism page first, then the regional
press for the lived experience. A festival that has already passed is a
vintage item: keep it only with a reason, such as an annual window that
reopens or a next-year date already announced.

**13.3 Novel transport and routes.** Unusual rail, ferry, cable, and road
experiences: historic funiculars and mountain railways, record road and rail
stretches, novelty and micro-cruises, and new long-distance walking and
cycling routes. Open the operator page for the schedule, the booking window,
and the price where published; open the route authority or trail association
for the official status. Named sources: operator press rooms, cruise trade
press, national rail and road authorities, long-distance trail associations.

**13.4 Viral and micro-trends.** Social-first travel phenomena with dated
evidence: lore-tripping, convenience-store food hunts, sleep tourism,
astrowellness, sportcations, dupe destinations, set-jetting, and the like.
Treat a trend claim as a claim: name the study, the platform dataset, or the
dated coverage count, and record the denominator. Platform and booking-data
releases are Tier 2 sources: label them self-reported and record the
denominator. Trade and trend press (Skift, PhocusWire, Globetrender, and their
peers) reports the claim first; open the underlying study or dataset before
the claim enters the ledger. Social posts are Tier 4 color beside a higher
tier, never the support. A trend with no dated evidence is not a topic.

**13.5 Roadside and folk attractions.** Big things, folk art environments, odd
monuments, and long-running local rites that draw visitors. Open the state or
local tourism board, the regional press, and catalog sites such as Roadside
America and Atlas Obscura (Tier 3, with corroboration from the operator or the
managing authority).

**13.6 Campaigns with an unusual hook.** Destination campaigns built on a
novelty, when they change what a traveller can book or see. Tourism board
material is self-reported; label it that way, and prefer the campaign's own
booking or access mechanic over its reach claims.

**13.7 The lane's cross-overs.** Many offbeat subjects belong to another part
as well: a themed hotel is Part 5, a novelty cruise is Part 3, a festival
travel spike is Part 4, a museum or ride is Part 6. File the topic under the
cluster that serves the
reader's decision and cross-reference the other part, so the taxonomy stays
one map rather than two.

**Ledger depth for a novelty topic.** A world-first attraction needs more than
the announcement: the opening date and the operator's own statement (date),
the ticket price and the booking window (fee, procedure), the access or
height rule (rule), and what happens at the end of its season or preview
period (date). If the only row is the announcement, the topic is depth-thin
and merges into its cluster hub.

**Rules for this lane.** Wacky is not a demand signal: every candidate carries
a dated signal (an opening date, a ticket or booking window, a festival date,
a coverage count, or a data release with its denominator). One traveller
decision per topic: go or skip, when to go, how to book, what it costs, what
to expect, what to do when it is sold out or closed. A subject that is merely
strange is not a page. The no-template test applies with full force: ten odd
museums are one topic only when one decision covers all ten; otherwise keep
the strongest. A novelty topic needs a durability label and a live-by date
where a window exists, because this lane decays faster than the others.
Government documents remain valid where they apply (a permit for a folk
festival, a park rule for an odd event), but this lane does not depend on
them.

---

## Perspectives

Cover the traveller, the operator or agent who processes bookings and
documents, the regulator or issuer, and the business itself. Missing
perspectives are a coverage gap and must be reported as one. Perspectives
shape the research; they do not change the page audience. Every page topic
carries an Audience label, and industry-intelligence topics never become pages.

## Demand and result-page signals

For every topic that survives the sweep, record what a planner needs to
judge demand without relying on a single keyword tool:

- Suggested and related query phrasings real travellers use, in each target
  language where feasible.
- The shape of the current result page: who ranks, what format wins (guide,
  checker, official page, forum thread), and what the ranking pages miss.
- Whether answer engines already answer the query directly, and whether the
  cited sources are weak, stale, or silent on the reader's actual decision.
- Seasonality: whether interest in the topic peaks in a known window (a
  season, a holiday period, an application deadline cycle), and when that
  window next opens. Record it even when it is "no seasonal pattern found".
- Momentum: rising, peaking, stable, or declining over the freshness window,
  with the dated evidence behind it (a trend-surface reading, a dated
  news-coverage count, a booking-window shift), or the literal phrase "no
  dated trend evidence found". A topic with no directional evidence is never
  treated as current.
- Who searches and when: the origin market driving the interest, and how far
  ahead of travel the searching happens.
- Rising phrasings recorded verbatim, not paraphrased.

This is discovery evidence for the planner; the ranking decision belongs to
the idea step.

## First-party data anchoring

When a context file exists, it lists the data assets the business uniquely holds. Turn
each asset into research questions:

- What patterns does the asset show (seasonality, failure modes, repeated
  questions, regional differences) that no competitor can see?
- Which of those patterns map to topics the sweep found, and which suggest
  topics the sweep missed entirely?
- What is the smallest usable unit of the asset: a figure, a range, a
  ranked list, a before-and-after?

Record for each asset: the date range it covers, the privacy constraint that
applies, and the topics it touches. Research that ignores first-party data
produces a slate anyone could produce, which fails the pipeline's core
principle before writing starts. If no context file exists, or it lists no real
assets, or marks them as illustrative or withheld, this section produces nothing:
never simulate first-party data, and never let a later step reference data the
business has not supplied.

## Taxonomy, not a list

The output is every distinct, reader-relevant subject the sweep surfaces,
organized in three levels:

- **Theme.** A broad area of the travel universe (for example, entry rules
  for a region, or a transport mode's booking practices).
- **Cluster.** A group of pages that share a reader and a decision family,
  with one page that can serve as the hub the others link to.
- **Page topic.** One reader, one situation, one decision. If two candidate
  topics would produce the same page outline, they are one topic.
- **Audience.** Every page topic carries one label: `traveller` (a person
  travelling or planning a trip), `travel-participant` (a trip-taker in a
  specific role, for example a driver, hiker, or camper), or
  `industry-intelligence` (a supply-side business role, for example a marketer,
  operator, host, analyst, or investor). Industry-intelligence topics are
  research assets; they never become pages.

For each page topic: the reader it serves, its Audience label, its dates, its
sources, and its cluster. The taxonomy is what lets the idea step build internal linking and
spot template risk before writing starts.

## Claim ledger

One row per factual claim, with this schema (the ledger stays in the research document and never appears in an article file):

```
claim_id | topic_id | claim | claim_type | source_url | source_title |
source_date | source_language | tier | exact_excerpt | accessed_date |
confidence | locales_affected | contradicts
```

- `claim_type`: rule, fee, date, statistic, procedure, opinion, or anecdote.
- `tier`: 1, 2, 3, or 4 as defined above.
- `confidence`: verified, reported by the source, self-reported, practitioner
  consensus, single-source, or unanswerable.
- `locales_affected`: the markets and languages the claim holds for, or
  `all`.
- `contradicts`: the id of any ledger row it disagrees with, or empty.

The ledger is the backbone of the pipeline: the writing step is forbidden
from asserting anything that is not a row here. The article file itself
carries no claim ids, no row lists, and no citation markers; it cites only
through the links in its Sources section.

An example row, with a deliberately generic topic, shown field by field:

```
claim_id:          C-0142
topic_id:          entry-rules/example-authorization
claim:             The nominal fee for the example travel authorization is 7 EUR
claim_type:        fee
source_url:        https://authority.example.test/fee-schedule
source_title:      Official fee schedule
source_date:       2026-01-15
source_language:   en
tier:              1
exact_excerpt:     "The application fee is set at EUR 7 per applicant"
accessed_date:     2026-09-19
confidence:        verified
locales_affected:  all
contradicts:
```

(The URL sits on a reserved `.test` domain because this row is a format
example only.)

## Saturation and stop criteria

Open scope does not mean infinite scope.

- A theme is saturated when a fixed number of consecutive new queries (set
  the number in the plan, five is a sane default) surface no new distinct
  page topic, no new Tier 1 source, and no new contradiction.
- Each theme gets a query budget, stated in the plan, so one deep rabbit
  hole cannot consume the whole run. The default scales with scope: 5
  queries per theme when `research_scope` narrows the sweep, 8 per theme
  when the run is unscoped across the whole travel universe, because an
  unscoped sweep at the narrower budget ends every theme budget-exhausted
  before saturation can fire, and shallow rows starve the density the later
  steps require.
- The run stops when every in-scope theme is saturated or exhausted,
  whichever comes first. The report states which themes hit which condition.
- If the freshness window returns little, say so. A short honest topic list
  is the correct output. Never halt the run to ask about widening: note the
  window as amendable by the operator and ship the honest list. Never relabel
  old material as news to fill the list.

---

## Launch: state the plan, then research immediately

Begin by writing the plan into the run as a record, not a checkpoint: which
sweep parts are in play given `context.md` (when one exists), the themes to
sweep, the seed queries per theme, the markets to search and the languages
to search in, the named Tier 1 sources to open first, the per-theme query
budget, the saturation threshold, and the freshness window. Then run the
sweep at once. When Part 0 finishes, write its ranked list of what is moving
and the budget skew it sets into the plan. There is no
approval wait. The operator reads the plan and can amend scope, window, budget,
or saturation while the sweep is under way; record any amendment and its effect
in the run log.

## Execution shape

- Work theme by theme, and finish each theme to the plan's depth before
  moving on. If the runtime supports parallel workers, one worker per theme
  with the same ledger schema is acceptable; merge their outputs into one
  document. When workers run in parallel, the plan assigns each worker a
  disjoint claim-ID range (for example C-1xx, C-2xx, C-3xx) before launch, so
  ledger IDs never collide at merge time; a collision found at merge is a
  plan defect, and the merge step renumbers and records the change in the run
  log.
- Keep a run log: queries tried, sources opened, sources blocked, themes
  saturated. The log is what makes the coverage claims in the report
  checkable.
- Stay inside the per-theme query budget. If a theme keeps producing, that
  is a finding: note it, finish the budget, and flag the theme for a
  dedicated future cycle.

## Output document

Return one research document with these sections:

1. **Travel map.** The themes in play, one paragraph each, with the state of
   play as of the run date.
2. **Taxonomy.** Themes, clusters, and page topics as defined above. Every
   page topic names its cluster and the cluster's hub candidate.
3. **Topics in scope.** Every distinct topic inside the freshness window.
   For each:
   - Working title, the reader it serves, and its Audience label.
   - What changed or what matters, with the date.
   - The source, with URL, issue date, language, and tier.
   - Why it is new relative to what the site already covers.
   - How durable it is: a one-week item, a one-month item, or a permanent
     requirement.
   - Demand and result-page signals: phrasings travellers use, who ranks
     now, what the ranking pages miss, whether answer engines already
     resolve the query, the seasonal window if one exists, and the momentum
     direction with its dated evidence.
   - (Open windows only) The item's vintage and why it is still worth a
     page.
4. **Background reference.** Standing rules, statutes, official documents,
   and fee schedules the in-scope topics depend on, each opened live on the
   run date and labeled as background.
5. **Operational knowledge.** What practitioners know that the guides do
   not, with confidence labels and attribution.
6. **Contradictions.** Open disagreements across sources, both sides cited,
   ledger rows linked.
7. **Coverage gaps.** Every question that could not be answered, with what
   was tried (including which languages and which blocked sources), and
   what would be needed.
8. **Claim ledger.** One row per factual claim, in the schema above.
9. **Source log.** Every source opened, with title, URL, language, tier,
   date, access method, and what it supported.
10. **Verification report.** The output of the self-check below: counts of
    claims verified, claims downgraded, sources blocked, and themes stopped
    by saturation versus exhaustion.

## Self-verification before handoff

Before the document leaves this step, run this check and record the results
in the verification report:

1. Every ledger row has a source URL, an exact excerpt, an access date, a
   tier, and a confidence label.
2. Every source in the source log was actually opened; anything reached
   only through a summary is downgraded or removed.
3. Every claim framed as news or change sits inside the freshness window
   and carries its source date.
4. Every contradiction appears in the contradictions section with both rows
   linked.
5. Every in-scope theme has a stated stop condition: saturated (with the
   query count) or exhausted (with the budget spent).
6. Locale coverage matches the plan: if a market was in scope and no
   non-English searching was done for it, report that gap explicitly; never
   omit it silently.
7. No sentence anywhere in the document could appear unchanged in a report
   about a different industry.
8. The topic list is honest about its length. Padding here poisons the idea
   step.
9. The plan records Part 0's ranked list of what is moving, and the theme
   budgets reflect the skew it set.

## Follow-up areas

Flag topics that earned a dedicated future cycle: themes that stayed
productive at budget exhaustion, contradictions awaiting an authority's next
announcement, and first-party data questions the sweep could not answer from
public sources.

## Failure modes this step exists to prevent

If any of these appear in the output, the run has failed regardless of how
much material it produced:

- A topic list with no sources, or with sources that were never opened.
- English-only research for a business that serves other languages.
- A flat list with no clusters, so every page is planned in isolation.
- A ledger with claims but no excerpts, so the writing step cannot check
  wording against evidence.
- "Everything is covered" with no recorded stop conditions.
- Demand asserted from memory instead of collected from result pages.
- Old material quietly relabeled as new to fill a thin window.
- A report that reads well and supports nothing.
