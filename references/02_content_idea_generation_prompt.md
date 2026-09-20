# Step 2: Content Idea Generation Prompt

Turn the Step 1 research document into a scored, gated slate of pages worth
building this cycle. This is the decision step. Its job is to kill weak ideas
before anyone spends writing time on them.

Read `research.md` from the current run before starting, and `context.md` if one
exists. The context file is optional. If no context file exists, run unscoped: no
business, audience, market, or first-party data is assumed or invented. The
audience default still applies: with no context file the reader is the
traveller, and industry-intelligence topics are not page candidates. Never
ask for `context.md`; its absence is a supported, open-ended mode.

Bulk default: return 10 to 20 candidates. Fewer is correct when the idea gates kill
the rest. Padding the slate to hit a number is a failure of this step.

---

## Harvest candidates from defined sources only

Free-form brainstorming is not allowed. Every candidate must trace to one of
these sources, and must name the source that produced it:

- **Reader question backlog.** Support requests, refund reasons, questions staff
  answer repeatedly, and questions the site leaves unanswered.
- **First-party data seams.** Anything in the context file's data assets (when
  one exists) with a number, a pattern, a season, or a failure mode that
  competitors cannot see.
  If the assets are illustrative, empty, or withheld, this source produces
  nothing; never harvest from data the business has not actually supplied.
- **Regulatory and issuer movement.** Changes to statutes, conventions, entry
  rules, document requirements, fees, or processing times, from the topics in
  scope.
- **Unmet search demand.** Phrasings the site does not satisfy today, including
  the language real travellers use.
- **Answer-surface gaps.** Queries where the sources that answer engines cite
  are weak, stale, or silent on the reader's actual decision. Where a statistic
  about visibility or volume is used, record its denominator, because these
  numbers are not comparable across studies.
- **Existing-page conflicts.** Pages that disagree with each other or that a
  reader cannot use without a second source. These are update or merge
  candidates, not new pages.

For every candidate, write one sentence on why a competitor could not produce
the same page.

---

## Assign every candidate to a cluster and an intent

Bulk output compounds when pages reinforce each other. For each candidate:

- **Cluster.** Name the cluster from the research taxonomy it belongs to, and
  whether it is the cluster's hub or a spoke. A strong candidate in a new
  cluster is allowed; name the new cluster and its future hub.
- **Intent.** Classify the reader's intent: informational (learn or decide),
  transactional (do or buy), or navigational (reach a specific place). Intent
  drives page shape in the writing step, and a slate that is all one intent
  deserves a stated reason.
- **Demand signal.** From Step 1's record: the momentum direction, the
  seasonal or event window, and the exact rising phrasings the research
  found. Every candidate carries this field; where the research found no
  signal, record that. A candidate with no demand signal and no first-party
  datum is not scored as a standalone; it merges into its cluster's hub.
- **Timing.** If the research recorded a seasonal window or deadline cycle for
  the topic, set the live-by date that lets the page go live before the
  window opens. A page that lands after its season is a wasted slot in this
  cycle's capacity.

---

## Idea gates

Fail any gate and the idea dies here. State which gate killed it. Do not soften
a fail into a maybe.

1. **Named travel reader job.** One travel participant (traveller or
   travel-participant), one situation, one decision the page changes. An
   industry-intelligence reader (a marketer, operator, host, analyst, or
   investor) fails this gate: a context file narrows the niche and market,
   never the audience. "General awareness" is not a reader job.
2. **Differentiation asset.** At least one of: a first-party datum, named
   operational experience, a primary-source synthesis, or a genuinely new
   comparison. "Better written" fails.
3. **Evidence availability.** The claims the page needs exist in first-party
   records or are researchable to the Step 1 standard. If the core claim depends
   on a number nobody else has reported, kill or re-scope now.
4. **Capacity reality.** The page can be completed, audited, fixed, and
   verified inside this cycle.
5. **No-template test.** The page is not an existing page with a noun swapped.
   If one outline would serve several candidates, only the strongest survives.
6. **Purpose test.** The page would still be worth making if search engines
   ignored it, because the reader needs it. If not, it is a ranking play.
7. **Trust feasibility.** The business can stand behind every claim on the
   page publicly, and every claim traces to a source a reader can open.
8. **Density and interest bar.** The topic has the substance to sustain the
   writing step's density floor: at least three supportable claim rows across
   rule, fee, date, procedure, statistic, and contradiction types; dated
   trend rows (statistic or anecdote rows carrying dated demand evidence)
   count toward this floor, and one dated trend row may substitute for one
   rule row. The topic also needs something a traveller would call interesting:
   tension between sources, money at stake, a dated change, a
   counterintuitive fact, or a correction of what currently ranks. A topic
   with one supportable fact is killed here or merged into its cluster's
   hub, because a one-fact page is a fragment, not an article. The ledger
   marks topics as depth-thin when Step 1 left them with fewer rows; a
   depth-thin topic does not survive this gate as a standalone page.

---

## Score the survivors

Score 1 to 5 per criterion, apply the weight, and show the arithmetic.

| Criterion | Weight | What a 5 looks like |
| --- | --- | --- |
| Differentiation | 25% | The datum or experience exists nowhere else |
| Reader value | 20% | It removes a real cost: money, delay, rejection, risk |
| Evidence strength | 15% | Primary sources and first-party numbers already in hand |
| Business fit (context runs) / Traveller relevance (context-less runs) | 10% | With a context file: the reader this page serves is the reader the business sells to. Without one: 5 = directly changes a trip decision; 3 = travel-adjacent; 1 = industry-only. The context-less scale has no neutral value. |
| Trust fit | 10% | The business is a credible, nameable source for this |
| Timing | 15% | A dated rising or peaking demand wave with a live-by date inside it; a stable-demand topic scores at most 3 |
| Build cost | 5% | Fits capacity without displacing better pages |

Rules:

- Any candidate scoring below 3 on Differentiation is dropped regardless of its
  total.
- Any candidate scoring below 3 on Business fit (or below 3 on Traveller
  relevance in a context-less run) is dropped. In a context-less run no
  justification path exists for an industry-only reader.
- Interest and density potential are judged inside Reader value and
  Differentiation, not as a separate score: the denser, more decision-loaded
  candidate scores higher, and a thin topic that slipped past the gates is
  killed rather than scored generously.
- Ties break on reader value, never on keyword volume.
- A Reader value score above 3 must be supported by currency evidence: a
  dated trend row from Step 1 showing the reader is incurring this cost now.
- A slate that is all one page type, one intent, or one cluster is a warning.
  Say so.
- In a context-less run, administration topics (visas, entry documents, fees,
  taxes, compensation) may fill at most half the slate; the rest must be
  trip-experience or trip-decision pages (where to go, when to go, what a visit
  involves, how to book, pay, or prepare).
- Show the per-criterion scores and the weighted arithmetic for every
  survivor; no bare round numbers.

---

## Deduplicate against the corpus and against each other

The corpus is the `content_inventory` list in `context.md` when one exists, plus
the run's own candidates. For each survivor, name the closest existing page and the
relationship:

- **Verbatim or near-verbatim:** update or merge, do not create a new page.
- **Conceptual:** same reader job already served. Merge into the existing page
  (decision: merge).
- **Partial overlap:** name the overlapping section and what the new page adds
  that the existing page cannot carry.
- **Cannibalization:** two pages targeting the same primary query. Assign one
  owner, drop the other.

Then compare survivors to each other and keep the stronger of any pair that
share an outline.

---

## Output contract

Write both parts to `idea-slate.md` in the run directory.

**A. Ranked slate**, one row per candidate:

```
ID | Working title | Reader job | Intent | Cluster (hub/spoke) | Differentiation asset | Demand signal | Score | Live-by | Closest existing page | Relationship | Decision (build/update/merge/kill) | Reason if killed
```

**B. Research brief for every idea marked build:**

```
### [Working title]
- Reader and situation:
- Decision the page changes:
- Intent: informational | transactional | navigational
- Cluster and role: [cluster name, hub or spoke]
- Live-by: [date, if a seasonal or deadline window applies]
- Demand signal: momentum, window, exact rising phrasings
- Primary query and 3 to 5 real phrasings:
- First-party evidence to include: asset, figures, date range, privacy limits
- Primary sources to obtain: named authority, statute, issuer, document
- Named entities required: correct official names
- Answer shapes required: definitions, comparisons, procedures, numbers
- Density plan: the sections this page will carry and the specific facts,
  figures, tables, worked examples, or failure points that fill each one, to
  meet the writing step's density floor
- Internal links to place: hub page and sibling pages from the same cluster
- What this page must not become: the template trap for this topic
- Kill criterion: the finding that would kill or rewrite this page
```

The brief is the input to the writing step. No idea enters writing without one.

---

## Anti-patterns

- Listicles of destinations, countries, or documents that differ by a noun.
- Volume quotas or output targets decoupled from capacity.
- Ideas justified by beating AI detectors or outsmarting an algorithm.
- Word-count targets as a quality proxy.
- Topics with no first-party or primary evidence, however popular the query.
- Competitor pages rewritten with synonyms.
- Comparison pages against competitors not named in `competitors`.
- Invented facts, studies, experts, or consensus.
- Numbers without a source, a date, and a denominator where the number is a
  share.
- A long slate padded from a short honest one.

---

## Honesty rules

- Every figure in a brief comes from a named source or first-party records, with
  its date. Otherwise mark it `TO SOURCE`.
- If the data needed to judge an idea does not exist, mark the idea blocked and
  name what is missing. Do not estimate around the gap.
- If the honest output is two ideas, deliver two and say why the rest failed.

---

## Final check

1. Every candidate traces to a harvest source.
2. Every survivor passed all eight gates; every kill names its gate.
3. Every score shows its arithmetic; no sub-3 differentiation survived, and no
   sub-3 traveller relevance survived in a context-less run (there is no
   justification path for an industry-only reader).
4. Every build idea has a brief, a demand signal, a cluster and role, an
   intent class, and a live-by date where timing matters.
5. The slate is not several copies of one page, and not all one page type, one
   intent, or one cluster.
6. No idea rests on detector evasion, keyword volume alone, or word count.
7. Gaps are listed as gaps, not dressed up as findings.

---

## Checkpoint 1

This is the first of the run's two checkpoints, and the run's first stop of any
kind. The operator reads the slate and chooses one of three paths: keep it and
draft the selected ideas, send it back for more research against the same
ledger or a fresh Step 1, or select a different set of ideas. Nothing enters
the writing step until this choice is made. Do not pause for anything else
before this point.
