---
name: travel-content-pipeline
description: Use when a travel or travel-documentation site needs to produce content in bulk, when building a repeatable research-to-content operation, when planning an editorial batch across any part of the travel topic universe, or when drafting, auditing, and localizing multiple travel pages per cycle. Also use when content quality, scaling, or localization discipline is the problem rather than a single page.
license: MIT
compatibility: Any agent that reads SKILL.md. The verification script requires Node 18 or newer; the prompts and context file have no runtime dependencies.
metadata:
  version: "2.0.0"
  author: travel-content-pipeline contributors
---

# Travel Content Pipeline

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

## Prerequisites

1. Check for `context.md`. If it exists, every step reads it. If it does
   not, the run proceeds anyway, unscoped: the whole travel universe, an open
   freshness window unless the operator sets one, and no invented business
   details. The skill never fabricates a context, a business, an audience, or
   first-party data to fill the gap.
2. Decide who authors and who reviews. If no reviewer exists for a page that
   affects travel legality, money, safety, or health, the page is not written.
3. Set editorial capacity: how many pages per cycle can clear both checkpoints.

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
- Step 2 returns a scored slate of 10 to 20 candidates. Fewer is acceptable when
  the idea gates kill the rest. Padding the slate is not. Checkpoint 1 follows: the
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
- No content optimized against AI-detector scores. Detector output is not a
  quality signal and is not a ranking signal.
- No em dash characters in any copy (U+2014).
- Named author on every page, and a named reviewer on every page that touches
  legality, money, safety, or health, recorded in front matter. The reviewer
  field is always present; where no reviewer is required it reads `none`.
- Capacity governs volume. Never draft faster than the checkpoints can clear.

## Verification

Two checkers live in `scripts/`:

```
node scripts/verify-pipeline.mjs
node scripts/verify-run.mjs <run-directory>
```

The first verifies the package itself: among other checks, the file set, the
audit prompt's framework and extension sections, the absence of em dashes, the
translation preconditions, and that the repository copy and every installed copy
are identical. The second verifies a run's artifacts: among other checks, every
draft has complete front matter, every cited ledger row exists, every draft has
an audit, fix, and verify record with a verdict, no translation outruns a passing
English audit, and
`ALL_ARTICLES.html` covers every draft. Exit 0 and the "verification passed"
line mean the checked thing is intact.

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
- `LICENSE` MIT
