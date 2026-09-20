---
name: travel-content-pipeline
description: Use when a travel or travel-documentation site needs to produce content in bulk, when building a repeatable research-to-content operation, when planning an editorial batch across any part of the travel topic universe, or when drafting, auditing, and localizing multiple travel pages per cycle. Also use when content quality, scaling, or localization discipline is the problem rather than a single page.
license: MIT
compatibility: Any agent that reads SKILL.md. The verification script requires Node 18 or newer; the prompts and context file have no runtime dependencies.
metadata:
  version: "2.3.0"
  author: travel-content-pipeline contributors
---

# Travel Content Pipeline

## Invocation

Invoking this skill is the start command, not a conversation opener. On
invocation, begin Step 1 immediately: create the run directory, write the
research plan into it, and start the sweep. An invocation that contains
nothing beyond this skill's name is still a full run command: start Step 1
now. A bare invocation starts a new run; re-enter an existing one only when
the operator's message explicitly asks for it (a named run, more articles
from it, or a resume), per Resuming a run below.

`context.md` is optional at every step. Look for it silently (the skill
directory, the working directory, then the run directory). If it exists,
apply it. If it does not, the run is open-ended by default: the whole travel
universe, an open freshness window, and the defaults in the next section,
recorded in the run log. Never treat the absence of `context.md` as a blocker
and never ask the operator for one.

The run stops for the operator exactly twice: Checkpoint 1 (after Step 2, the
idea slate) and Checkpoint 2 (after Step 4, the audit, fix, and verify). There
is no checkpoint at invocation and no third stop anywhere. Failure escalations
inside a step (a missing ledger row, a template collision) are recorded in the
run notes; they stop that page, not the run.

Do not stop for any of these before Checkpoint 1:

- asking which scope, market, or freshness window to use (the defaults apply)
- asking where to put the run (the run directory default applies)
- asking who the author or reviewer is (`PENDING` applies, resolved at
  Checkpoint 2)
- asking for `context.md` (it is optional; its absence is a supported mode)
- presenting the plan and waiting for approval (the plan is written to the
  run as a record while the sweep starts)
- summarizing the skill back instead of running it

If you notice yourself forming a question for the operator before Checkpoint
1, the answer is in this file: proceed with the defaults.

## Setup resolved silently at the start

Resolve these from `context.md` when one exists, fill the rest with the
defaults below, record them in the run log, and start. None of them is a
question for the operator before Checkpoint 1.

1. **Context.** `context.md` when present is read by every step. Absent, the
   run is open-ended across the whole travel universe. The skill never
   fabricates a context, a business, an audience, or first-party data to fill
   the gap.
2. **Run directory.** `runs/<YYYY-MM-DD>/` in the working directory, unless
   `context.md` sets `content_root` or the operator names one. All artifacts
   land there: `research.md`, `idea-slate.md`, `drafts/`, `audit/`,
   `translations/`, `ALL_ARTICLES.html`, and the run log.
3. **Freshness window.** From `context.md` when present. With none, the window
   is open (any time) and each item's vintage is marked instead.
4. **Author and reviewer.** From `context.md` when present. With none, front
   matter records the author and any required reviewer as `PENDING`; the audit
   flags each as an open finding, and the page stays unpublishable until the
   operator supplies the names at Checkpoint 2. A missing name blocks
   publication, never the run, and never becomes a mid-run question.
5. **Capacity.** From `capacity_per_cycle` when present. With none, slate 10
   to 20 scored candidates and draft everything kept at Checkpoint 1; the
   operator can cut that number at Checkpoint 1.

## Overview

A five-step pipeline that turns research across the travel topic universe into
audited, fixed, verified, optionally localized pages ready to publish. The
freshness window is an operator setting, from any time to the last few days.
Built for bulk: one run produces a travel research map, a scored slate of
candidate pages, drafts for the kept ones, an audit-fix-verify pass, and
localized versions on request.

Core principle: publish only what a reader cannot get anywhere else and a search
engine cannot mass-produce. The idea gates and the operator checkpoints kill work
that would fail that test.

## When to Use

Use this skill when:

- A travel, tourism, or travel-documentation business needs new pages on a
  recurring cycle, not one page.
- There is no repeatable path from research to draft to audit to translation.
- Pages risk looking templated, interchangeable, or mass-produced.
- Content exists but nobody can say which claims are sourced and which are not.
- The business wants to catch what changed in travel this cycle rather than
  rehash evergreen topics.

Do not use this skill for:

- A single one-off page with no sourcing requirements.
- Pure technical SEO fixes, link building, or paid campaigns.
- Generating content the business cannot stand behind with a named author and,
  where the page requires one, a named reviewer.

## The Pipeline

```
Step 1  Research      travel industry sweep    launches at once
Step 2  Ideas         scored candidate slate   CHECKPOINT 1: keep, redo research, or reselect
Step 3  Writing       drafts for kept ideas
Step 4  Audit+fix+verify  English quality pass   CHECKPOINT 2: review content, choose translation
Step 5  Translation   optional, only when chosen at Checkpoint 2
```

Each step is a prompt in `references/`. A fresh run works them in order, and
Step 1 starts researching at once, writing its plan into the run instead of
waiting for approval. The run stops for the operator exactly twice: Checkpoint 1
after the idea slate, and Checkpoint 2 after the audit, fix, and verify. Do not start a later
step while a checkpoint is open. For follow-on article requests on an existing
run, see Resuming a run below.

| Step | File | Output |
| --- | --- | --- |
| 1 | `references/01_master_research_prompt.md` | `research.md` with a dated topic list and a claim ledger |
| 2 | `references/02_content_idea_generation_prompt.md` | `idea-slate.md` with scored candidates |
| 3 | `references/03_content_writing_prompt.md` | `drafts/<slug>.md`, one file per kept idea |
| 4 | `references/04_content_audit_prompt.md` | `audit/<slug>.md` per draft: audit, fixes, and verification, ending in a verdict |
| 5 | `references/05_translation_prompt.md` | `translations/<slug>.<locale>.md`, only for what Checkpoint 2 chose |

## Run Shape

Bulk is the default:

- Step 1 researches the whole travel topic universe, unless `research_scope` in
  `context.md` (when one exists) narrows it, and returns every distinct topic that fits the
  operator's freshness window, organized as themes, clusters, and page topics.
  The sweep opens with a trend sweep that runs first: rising travel queries,
  destination news velocity, route and hotel openings, and the event calendar,
  ranked into a "what's moving" list that shapes the theme budgets.
- Step 2 returns a scored slate of 10 to 20 candidates, each carrying its
  demand signal: momentum, window, and the rising phrasings the research found.
  Fewer is acceptable when the idea gates kill the rest. Padding the slate is
  not. Checkpoint 1 follows: the
  operator keeps the slate, sends it back for more research, or reselects the
  ideas to draft.
- Step 3 drafts only the ideas kept at Checkpoint 1, and rebuilds
  `ALL_ARTICLES.html`, one readable file with every article in the run and
  its citations.
- Step 4 audits, fixes, and verifies every draft. Nothing reaches Checkpoint 2
  unaudited or unfixed. Checkpoint 2 follows: the operator reads the audited,
  fixed, and verified content and chooses which pages, if any, to translate.
- Step 5 runs only for the pages and locales chosen at Checkpoint 2.

Keep one dated run directory per cycle. Every artifact carries its date, its
sources, and the claim ledger rows behind its factual statements.

## Resuming a run

The full five-step run happens once per research cycle. The common case after
that is smaller: the operator asks for more articles from the same run.

- If the request maps to ideas already on the kept slate, re-enter at
  Step 3 and draft them.
- If the request needs new ideas, re-enter at Step 2 against the existing
  `research.md` and claim ledger, score the new candidates, and take them
  through Checkpoint 1 as usual.
- Never re-run Step 1 to satisfy an article request. Fresh research is a new
  run. The one exception: when the freshness window has moved past a ledger
  row the new drafts will cite, re-verify that row live before drafting.
- Step 4 still applies to every new draft: nothing reaches Checkpoint 2
  unaudited or unfixed, and the operator still chooses translation at Checkpoint 2.
- Rebuild `ALL_ARTICLES.html` whenever the draft set changes, so the file
  always covers every article in the run.

## Checkpoints

The run stops for the operator exactly twice. Failure escalations inside a step
(a missing ledger row, a template collision) stop that page and go in the run
notes; they are not operator checkpoints.

Between them the run never waits. Step 1 launches without approval, Steps 2
through 4 run on their own, and no question halts the run before Checkpoint 1
or between the checkpoints.

Step 1 has no checkpoint: it writes its research plan into the run and launches
the sweep immediately. The operator reads the plan and can amend scope, the
freshness window, the per-theme query budget, or the saturation threshold while
the sweep runs.

**Checkpoint 1, after Step 2 (ideas).** The operator sees the scored slate and
chooses one of three paths: keep it and draft the selected ideas, send it back
for more research, or select different ideas. Only the ideas kept here go to
Step 3. Everything else is killed with a named reason.

**Checkpoint 2, after Step 4 (audit, fix, and verify).** The operator reads the
audited, fixed, and verified content and decides whether to translate any of it,
and into which locales. Step 5 runs only for what is chosen here. No translation
starts before this decision.

## Rules That Apply to Every Step

- No claim without a source the reader can open. Unverified statements are
  marked as unverified or cut.
- Fixes never invent a fact, a date, or a source. A finding that needs evidence
  the run does not have stays open.
- The research scope is the whole travel topic universe, or the narrower scope
  `research_scope` sets. The freshness window is whatever the operator sets in
  `context.md` (when one exists), from any time to the last few days, and it applies only to what
  counts as new for this batch. When a window is set, anything framed as news or
  a change must come from inside it and carry its date; standing rules, statutes,
  and official documents may be older, but must be re-checked live and dated.
- Absolute dates, never "recent" or "currently".
- Primary sources outrank summaries. Vendor and self-reported claims are
  labeled as self-reported.
- One reader job per page. A page that is the same page with a noun swapped is
  a template and gets killed.
- Real specificity: names, numbers, dates, and procedures must constrain the
  claim or help the reader act. Decorative specificity is a tell, not a fix.
- Density floor: every article fully answers its reader's decision at
  practitioner depth. The run checker enforces a minimum of 1,200 words of
  article body (front matter and Sources excluded); a thinner draft fails the
  writing step's handoff, and a longer draft full of filler fails the audit.
- Citation floor: every article's Sources section carries at least two
  distinct, openable sources. The run checker fails a draft with fewer; a
  single-source page stops at the writing step until a second source exists.
- No content optimized against AI-detector scores. Detector output is not a
  quality signal and is not a ranking signal.
- No em dash characters in any copy (U+2014).
- Named author on every page, and a named reviewer on every page that touches
  legality, money, safety, or health, recorded in front matter. The reviewer
  field is always present; where no reviewer is required it reads `none`. When
  no names exist yet (no `context.md`), the fields read `PENDING` and the audit
  flags them; the operator supplies the names at Checkpoint 2. A missing name
  blocks publication, never the drafting run.
- Capacity governs volume. Never draft faster than the checkpoints can clear.

## Verification

Two checkers and their helpers live in `scripts/`:

```
node scripts/verify-pipeline.mjs
node scripts/verify-run.mjs <run-directory>
node scripts/test-verify-run.mjs                    # the run checker's self-tests
node scripts/build-all-articles.mjs <run-directory> # rebuild the reading copy
```

The first verifies the package itself: among other checks, the file set, the
audit prompt's framework and extension sections, the absence of em dashes, the
translation preconditions, and that the repository copy and every installed copy
are identical. The second verifies a run's artifacts: among other checks, every
draft has complete front matter, every cited ledger row exists, every draft has
an audit, fix, and verify record with a verdict, no translation outruns a passing
English audit, the density and citation floors hold, and
`ALL_ARTICLES.html` covers every draft. It also enforces the publication
gate: a draft marked `publishable: true` must carry a named author and, where
review is required, a named reviewer. Exit 0 and the "verification passed"
line mean the checked thing is intact. Its own behavior is covered by
`node scripts/test-verify-run.mjs`, which runs the checker against passing and
violating fixture runs.

## Adapting to a Different Travel Business

Change `context.md` only. The prompts are written against the context fields,
not against one company. A tour operator, a visa service, a travel-insurance
broker, or a destination guide can run the same five steps by filling in their
own lane, markets, locales, data assets, and capacity.

## Files

- `context.example.md` the configuration template to copy and fill
- `README.md` install, quickstart, and design rules
- `references/` the five step prompts
- `scripts/verify-pipeline.mjs` the package checker
- `scripts/verify-run.mjs` the run-artifact checker
- `scripts/test-verify-run.mjs` the run checker's self-tests
- `scripts/build-all-articles.mjs` the `ALL_ARTICLES.html` builder
- `LICENSE` MIT
