# travel-content-skill

A six-step content skill for travel and travel-documentation businesses. It
turns open-ended research across the travel topic universe into differentiated
pages that have been editor-passed, audited, fixed, and verified, and optionally
into localized versions. The freshness window is yours to set, from any time to
the last few days.

Built for bulk: one cycle produces a travel research map, a scored slate of
candidate pages, drafts for the kept ones, an editor pass and an
audit-fix-verify pass on every draft, and translations when asked.

## Why it exists

Most travel content problems are the same problem: pages that a competitor could
produce by swapping a noun, claims nobody can source, and volume that outruns
editorial capacity. This skill makes each of those a checkpoint or a gate
rather than a hope.
It is written so that any travel business can adopt it by answering three intake
questions, without changing the prompts.

## Who it is for

- Travel, tourism, and travel-documentation sites, whether serving readers in
  one language or many.
- Editorial leads who need a repeatable research-to-audited-content cycle.
- Teams that want one source of truth for what changed in travel this
  cycle, instead of rehashing evergreen topics.

## Install

The skill is a directory containing `SKILL.md`, `references/`, `scripts/`, this
README, and a `LICENSE`. Install by copying the directory
into the skills location your agent reads:

| Agent | Location |
| --- | --- |
| Claude Code | `~/.claude/skills/travel-content-skill/` |
| Codex | `~/.codex/skills/travel-content-skill/` |
| Gemini CLI | `~/.gemini/skills/travel-content-skill/` |
| opencode | `~/.config/opencode/skills/travel-content-skill/` |
| Kimi Code and agents following the agentskills convention | `~/.agents/skills/travel-content-skill/` |

Project-scoped install also works for agents that read repository skills:
copy the directory into `.agents/skills/` or `.claude/skills/` inside the
project.

Example on macOS or Linux:

```bash
git clone <this-repo> /tmp/travel-content-skill
cp -R /tmp/travel-content-skill ~/.claude/skills/
```

If the skill lives inside a larger repository, copy its subdirectory (for
example `skills/travel-content-skill/`) into the skills location, keeping the
directory name `travel-content-skill` so agents discover it.

On Windows, copy the folder to `%USERPROFILE%\.claude\skills\`,
`%USERPROFILE%\.config\opencode\skills\`, or `%USERPROFILE%\.agents\skills\`.

The prompts have no runtime dependencies. The reading-copy
builder needs Node 18 or newer.

## Quickstart

1. Copy the skill into your agent's skills directory.
2. Invoke the skill. It opens with three questions, its defaults shown: the
   content type, any input files, and the voice. Answer them, or reply
   `defaults` to run open-ended.
3. Step 1 starts as soon as the intake is answered: it creates a dated run
   directory (for example `runs/YYYY-MM-DD/`), writes its research plan into
   the run, and begins the sweep. The next stop is Checkpoint 1.
4. The steps in order:

```
Intake  three questions, defaults shown
Step 1  references/01_master_research_prompt.md         launches after the intake reply
Step 2  references/02_content_idea_generation_prompt.md CHECKPOINT 1: keep, re-research the same ledger, or reselect
Step 3  references/03_content_writing_prompt.md
Step 4  references/04_editor_pass_prompt.md             voice, rhythm, and padding cuts
Step 5  references/05_content_audit_prompt.md           CHECKPOINT 2: review content, choose translation
Step 6  references/06_translation_prompt.md             optional, only if chosen at Checkpoint 2
```

5. Nothing reaches Checkpoint 2 unaudited or unfixed. Step 5 audits, fixes, and
   verifies the English version, and translation runs only for the pages and
   locales chosen at Checkpoint 2.

## How it works

| Step | What it produces | Why it exists |
| --- | --- | --- |
| 1 Research | Travel map, topic taxonomy, dated topic list, claim ledger | Find every topic that matters across the travel universe, trend-first, filtered by the freshness window you set |
| 2 Ideas | Scored slate of 10 to 20 candidates, each carrying its demand signal, most killed by idea gates | Decide what deserves writing time |
| 3 Writing | One draft per kept idea, plus `ALL_ARTICLES.html` combining every draft in the run | Produce the pages the business stands behind |
| 4 Editor pass | Per-page cuts: the nine cut categories, from derivable arithmetic to paragraph shape; voice-floor check | Make the prose read like a person wrote it, before anyone audits the facts |
| 5 Audit, fix, verify | Per-page findings, the fixes applied, and the verification of each | Catch and correct unsupported, misleading, templated, or policy-risky content |
| 6 Translation | Localized pages, checked in the target language | Reach every locale the business serves, without machine-translated releases |

Three stops keep bulk work honest: the intake (three questions, defaults
shown), Checkpoint 1 on the idea slate, and Checkpoint 2 on the audited,
fixed, and verified content. All three are operator decisions, not model
decisions, and nothing else pauses the run between them.

## Design rules

- Invocation opens the intake, and the run starts when it is answered. There
  is no question between the intake and Checkpoint 1, and no stop other than
  the three. With no answers, the run is open-ended across the whole travel
  universe.
- Research scope is the whole travel topic universe, unless the intake answer
  narrows it. The freshness window is an operator setting, and it decides only
  what counts as new for the batch. Standing rules may be older but must be
  re-checked live.
- Demand first. Research opens with a trend sweep (rising queries, destination
  news velocity, route and hotel openings, the event calendar), and every idea
  on the slate carries its demand signal: momentum, window, and the rising
  phrasings the research found. A topic with no demand signal has to earn its
  slot another way.
- One reader job per page. A page that is another page with a noun swapped is a
  template and is killed.
- Real specificity only. Names, numbers, dates, and procedures must constrain
  the claim or help the reader act.
- Density floor. Every article answers its reader's decision at practitioner
  depth: at least 1,200 words of body text (the Sources section excluded),
  with the substance to justify every one of them. The writing step enforces
  the count; the editor pass and the audit kill filler.
- Voice and register. Every page is written in the default voice at
  `references/voice-default.md`, unless the intake supplied a voice or writing
  samples, which override it. Procedures keep the ASD-STE100 limits; editorial
  prose stays in plain English with contractions, direct address, and varied
  sentence lengths. Every page passes the editor pass's voice floor before the
  audit, and no two pages in a batch share an outline, an opening shape, or a
  closing shape.
- Citation floor. Every article carries at least two distinct, openable
  sources in its Sources section. The writing step enforces it; the audit
  flags a draft with fewer as a Major finding.
- No claim without a source the reader can open.
- No content optimized against AI-detector scores. Detector output is not a
  quality signal and not a ranking signal.
- Capacity governs volume.
- No em dash characters in any copy.

## Configuration

Everything business-specific is answered at the intake, in the conversation
that starts the run. There is no configuration file to create or maintain, and
the prompts are written against the intake answers, so a tour operator, a visa
service, a travel-insurance broker, or a destination guide can run the same six
steps.

The intake asks three questions with its defaults shown: what type of travel
content to make, whether there are input files, and whether there is a
particular voice or writing sample to use. Answer them, or reply `defaults`.
The answers are recorded in the run's log, so every run stays self-contained.

With no answers, the run is open-ended: the whole travel universe, an open
freshness window, and no first-party data anchoring or inventory
deduplication, since none exists. The skill never invents a business, an
audience, keywords, or data to compensate; pages are built from primary
sources alone, and the default voice at `references/voice-default.md` carries
the prose.

## Verification

The audit step is the quality gate: one record per draft at `audit/<slug>.md`
with the audit, the fixes, and the verification, ending in a PASS or BLOCKED
verdict. Before that, the editor pass leaves one record per draft at
`editor/<slug>.md` with the cuts applied and the voice-floor result. Nothing
reaches Checkpoint 2 unaudited or unfixed, and no translation runs before its English
original passes.

To rebuild the reading copy:

```bash
node "<skill-directory>/scripts/build-all-articles.mjs" runs/YYYY-MM-DD
```

One `ALL_ARTICLES.html` at the run root covers every draft. The builder needs
Node 18 or newer.

## Contributing

Issues and pull requests are welcome. Keep the prompts travel-centered and
business-agnostic: a change that only helps one company belongs in that
company's intake answers, not in the prompts. Re-read the affected prompts and this README before
opening a pull request, and describe the failure the change prevents.

## License

MIT. See `LICENSE`.
