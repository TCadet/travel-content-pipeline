# travel-content-pipeline

A five-step content pipeline for travel and travel-documentation businesses. It
turns open-ended research across the travel topic universe into differentiated,
audited pages, and optionally into localized versions. The freshness window is
yours to set, from any time to the last few days.

Built for bulk: one cycle produces a travel research map, a scored slate of
candidate pages, drafts for the kept ones, an audit on every draft, and
translations when asked.

## Why it exists

Most travel content problems are the same problem: pages that a competitor could
produce by swapping a noun, claims nobody can source, and volume that outruns
editorial capacity. This pipeline makes each of those a checkpoint or a gate
rather than a hope.
It is written so that any travel business can adopt it by filling in one context
file, without changing the prompts.

## Who it is for

- Travel, tourism, and travel-documentation sites, whether publishing in one
  language or many.
- Editorial leads who need a repeatable research-to-reviewed-content cycle.
- Teams that want one source of truth for what changed in travel this
  cycle, instead of rehashing evergreen topics.

## Install

The skill is a directory containing `SKILL.md`, `references/`, `scripts/`, an
example context, this README, and a `LICENSE`. Install by copying the directory
into the skills location your agent reads:

| Agent | Location |
| --- | --- |
| Claude Code | `~/.claude/skills/travel-content-pipeline/` |
| Codex | `~/.codex/skills/travel-content-pipeline/` |
| Gemini CLI | `~/.gemini/skills/travel-content-pipeline/` |
| opencode | `~/.config/opencode/skills/travel-content-pipeline/` |
| Kimi Code and agents following the agentskills convention | `~/.agents/skills/travel-content-pipeline/` |

Project-scoped install also works for agents that read repository skills:
copy the directory into `.agents/skills/` or `.claude/skills/` inside the
project.

Example on macOS or Linux:

```bash
git clone <this-repo> /tmp/travel-content-pipeline
cp -R /tmp/travel-content-pipeline ~/.claude/skills/
```

If the skill lives inside a larger repository, copy its subdirectory (for
example `skills/travel-content-pipeline/`) into the skills location, keeping the
directory name `travel-content-pipeline` so agents discover it.

On Windows, copy the folder to `%USERPROFILE%\.claude\skills\`,
`%USERPROFILE%\.config\opencode\skills\`, or `%USERPROFILE%\.agents\skills\`.

The prompts and context file have no runtime dependencies. The checker
scripts need Node 18 or newer.

## Quickstart

1. Copy the skill into your agent's skills directory.
2. Optional. Copy `context.example.md` to `context.md` inside the skill
   directory and fill it in. It is not required: with no context file the run
   proceeds open-ended, across the whole travel universe, with an open freshness
   window and no first-party data.
3. Create a dated run directory, for example `runs/YYYY-MM-DD/`.
4. Run the steps in order:

```
Step 1  references/01_master_research_prompt.md         launches immediately
Step 2  references/02_content_idea_generation_prompt.md CHECKPOINT 1: keep, redo research, or reselect
Step 3  references/03_content_writing_prompt.md
Step 4  references/04_content_audit_prompt.md           CHECKPOINT 2: review content, choose translation
Step 5  references/05_translation_prompt.md             optional, only if chosen at Checkpoint 2
```

5. Nothing reaches Checkpoint 2 unaudited. The audit is the last quality check
   for the English version, and translation runs only for the pages and locales
   chosen at Checkpoint 2.

## How it works

| Step | What it produces | Why it exists |
| --- | --- | --- |
| 1 Research | Travel map, topic taxonomy, dated topic list, claim ledger | Find every topic that matters across the travel universe, filtered by the freshness window you set |
| 2 Ideas | Scored slate of 10 to 20 candidates, most killed by idea gates | Decide what deserves writing time |
| 3 Writing | One draft per kept idea, plus `ALL_ARTICLES.html` combining every draft in the run | Produce pages a named human will stand behind |
| 4 Audit | Per-page findings with severity and recommended fixes | Catch unsupported, misleading, templated, or policy-risky content |
| 5 Translation | Localized pages with a native review | Reach every locale the business serves, without machine-translated publishing |

Two checkpoints keep bulk work honest: Checkpoint 1 on the idea slate and
Checkpoint 2 on the audited content. Both are operator decisions, not model
decisions. Step 1 needs no checkpoint: it writes its plan into the run and starts
research at once.

## Design rules

- Research scope is the whole travel topic universe, unless `research_scope`
  in `context.md` narrows it. The freshness window is an operator setting,
  and it decides only what counts as new for the batch.
  Standing rules may be older but must be re-checked live.
- One reader job per page. A page that is another page with a noun swapped is a
  template and is killed.
- Real specificity only. Names, numbers, dates, and procedures must constrain
  the claim or help the reader act.
- No claim without a source the reader can open.
- No content optimized against AI-detector scores. Detector output is not a
  quality signal and not a ranking signal.
- Capacity governs volume.
- No em dash characters in any copy.
- Named author on every page, and a named reviewer on every page that touches
  legality, money, safety, or health. The reviewer field is always present;
  where no reviewer is required it reads `none`.

## Configuration

Everything business-specific lives in `context.md`. The prompts are written
against those fields, so a tour operator, a visa service, a travel-insurance
broker, or a destination guide can run the same five steps.

`context.md` is your copy of `context.example.md`, filled in. It is the only
file that changes from one business to another, and it is yours: the package
checker excludes it from its integrity hash, so your business details never
affect verification and never ship with the skill.

The skill checks for `context.md` and uses it if present, but the default is
to run without one. An absent context file means an unscoped run: the whole
travel universe, an open freshness window, and no first-party data anchoring
or inventory deduplication, since none exists. The skill never invents a
business, an audience, keywords, or data to compensate; anything a missing
context would have supplied is simply absent, and pages are built from
primary sources alone.

The template lists every field the prompts read, including the freshness
window, the business and lane, audience, keywords, first-party data assets,
editorial operation (including a seasonality calendar), scope, voice, technical
context, and the content inventory.

## Verification

From the skill directory:

```bash
node scripts/verify-pipeline.mjs              # package integrity
node scripts/verify-run.mjs runs/YYYY-MM-DD   # one cycle's artifacts
```

The package checker verifies the file set, the audit prompt's framework and
extension sections, the absence of em dashes, the translation preconditions, the
context template fields, and that every reference file named by `SKILL.md`
or this README exists. The run checker verifies a cycle's output: complete
draft front matter, ledger rows that resolve, an audit with a verdict per draft,
translations that never outrun a passing English audit, and an
`ALL_ARTICLES.html` reading copy that covers every draft. Exit 0 plus the
"verification passed" line means the checked thing is intact.

## Contributing

Issues and pull requests are welcome. Keep the prompts travel-centered and
business-agnostic: a change that only helps one company belongs in that
company's `context.md`, not in the prompts. Run the checker before opening a
pull request, and describe the failure the change prevents.

## License

MIT. See `LICENSE`.
