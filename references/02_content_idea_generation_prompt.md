# Step 2: Content Idea Generation Prompt

Turn the Step 1 research document into a scored, gated slate of pages worth
building this cycle. This is the decision step. Its job is to kill weak ideas
before anyone spends writing time on them.

Read `context.md` and `research.md` from the current run before starting. If
no context file exists, run unscoped: no business, audience, market, or
first-party data is assumed or invented.

Bulk default: return 10 to 20 candidates. Fewer is correct when the idea gates kill
the rest. Padding the slate to hit a number is a failure of this step.

---

## Harvest candidates from defined sources only

Free-form brainstorming is not allowed. Every candidate must trace to one of
these sources, and must name the source that produced it:

- **Reader question backlog.** Support requests, refund reasons, questions staff
  answer repeatedly, and questions the site leaves unanswered.
- **First-party data seams.** Anything in the context file's data assets with a
  number, a pattern, a season, or a failure mode that competitors cannot see.
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

Bulk publishing compounds when pages reinforce each other. For each candidate:

- **Cluster.** Name the cluster from the research taxonomy it belongs to, and
  whether it is the cluster's hub or a spoke. A strong candidate in a new
  cluster is allowed; name the new cluster and its future hub.
- **Intent.** Classify the reader's intent: informational (learn or decide),
  transactional (do or buy), or navigational (reach a specific place). Intent
  drives page shape in the writing step, and a slate that is all one intent
  deserves a stated reason.
- **Timing.** If the research recorded a seasonal window or deadline cycle for
  the topic, set the publish-by date that lets the page be live before the
  window opens. A page that lands after its season is a wasted slot in this
  cycle's capacity.

---

## Idea gates

Fail any gate and the idea dies here. State which gate killed it. Do not soften
a fail into a maybe.

1. **Named reader job.** One reader, one situation, one decision the page
   changes. "General awareness" is not a reader job.
2. **Differentiation asset.** At least one of: a first-party datum, named
   operational experience, a primary-source synthesis, or a genuinely new
   comparison. "Better written" fails.
3. **Evidence availability.** The claims the page needs exist in first-party
   records or are researchable to the Step 1 standard. If the core claim depends
   on a number nobody has published, kill or re-scope now.
4. **Capacity reality.** A named author, and a named reviewer where the page
   touches legality, money, safety, or health, can complete it inside this cycle,
   including the audit pass.
5. **No-template test.** The page is not an existing page with a noun swapped.
   If one outline would serve several candidates, only the strongest survives.
6. **Purpose test.** The page would still be worth publishing if search engines
   ignored it, because the reader needs it. If not, it is a ranking play.
7. **Trust feasibility.** The business can put a real author, and a reviewer
   where the page touches legality, money, safety, or health, behind every claim,
   and can stand behind the page publicly.

---

## Score the survivors

Score 1 to 5 per criterion, apply the weight, and show the arithmetic.

| Criterion | Weight | What a 5 looks like |
| --- | --- | --- |
| Differentiation | 25% | The datum or experience exists nowhere else |
| Reader value | 20% | It removes a real cost: money, delay, rejection, risk |
| Evidence strength | 15% | Primary sources and first-party numbers already in hand |
| Business fit | 15% | The reader this page serves is the reader the business sells to |
| Trust fit | 10% | The business is a credible, nameable source for this |
| Timing | 5% | Publishing now meets a seasonal or deadline window head-on |
| Build cost | 10% | Fits capacity without displacing better pages |

Rules:

- Any candidate scoring below 3 on Differentiation is dropped regardless of its
  total.
- Any candidate scoring below 3 on Business fit must justify its slot in one
  sentence (a trust or audience-building play), or it is dropped.
- Ties break on reader value, never on keyword volume.
- A slate that is all one page type, one intent, or one cluster is a warning.
  Say so.
- Show the per-criterion scores and the weighted arithmetic for every
  survivor; no bare round numbers.

---

## Deduplicate against the corpus and against each other

The corpus is the `content_inventory` list in `context.md`, plus the run's own
candidates. For each survivor, name the closest existing page and the
relationship:

- **Verbatim or near-verbatim:** update or merge, do not publish.
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
ID | Working title | Reader job | Intent | Cluster (hub/spoke) | Differentiation asset | Score | Publish-by | Closest existing page | Relationship | Decision (build/update/merge/kill) | Reason if killed
```

**B. Research brief for every idea marked build:**

```
### [Working title]
- Reader and situation:
- Decision the page changes:
- Intent: informational | transactional | navigational
- Cluster and role: [cluster name, hub or spoke]
- Publish-by: [date, if a seasonal or deadline window applies]
- Primary query and 3 to 5 real phrasings:
- First-party evidence to publish: asset, figures, date range, privacy limits
- Primary sources to obtain: named authority, statute, issuer, document
- Named entities required: correct official names
- Answer shapes required: definitions, comparisons, procedures, numbers
- Internal links to place: hub page and sibling pages from the same cluster
- Author and reviewer where required:
- What this page must not become: the template trap for this topic
- Kill criterion: the finding that would kill or rewrite this page
```

The brief is the input to the writing step. No idea enters writing without one.

---

## Anti-patterns

- Listicles of destinations, countries, or documents that differ by a noun.
- Volume quotas or publishing targets decoupled from capacity.
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
2. Every survivor passed all seven gates; every kill names its gate.
3. Every score shows its arithmetic; no sub-3 differentiation survived, and any
   sub-3 business fit carries its one-sentence justification.
4. Every build idea has a brief, a named author, a reviewer where required, a
   cluster and role, an intent class, and a publish-by date where timing matters.
5. The slate is not several copies of one page, and not all one page type, one
   intent, or one cluster.
6. No idea rests on detector evasion, keyword volume alone, or word count.
7. Gaps are listed as gaps, not dressed up as findings.

---

## Checkpoint 1

This is the first of the run's two checkpoints. The operator reads the slate and
chooses one of three paths: keep it and draft the selected ideas, send it back
for more research against the same ledger or a fresh Step 1, or select a
different set of ideas. Nothing enters the writing step until this choice is
made.
