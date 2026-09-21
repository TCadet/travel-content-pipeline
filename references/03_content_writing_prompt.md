# Step 3: Content Writing Prompt

Write one draft per kept idea. Inputs for each draft:

- `context.md` (optional) for audience, markets, locales, voice, and identity. If
  no context file exists, write for a general travel reader and invent nothing
  about the business.
- The voice file, found by the search order in SKILL.md: the path in
  `context.md`'s `voice_file` when set, otherwise `voice.md` in the skill
  directory, the working directory, or the run directory; otherwise the skill's
  default voice card at `references/voice-default.md`. Read the samples before
  you read the brief. Samples beat adjectives.
- `research.md` and its claim ledger for the facts.
- The idea brief from the kept slate for the reader job and the shape.

Bulk rules: same standard for every page, one file per page, and no page leaves
this step as final. Everything here goes to the editor pass (Step 4), then the
audit, fix, and verify (Step 5).

---

## The article file

The file contains exactly three things:

1. The title, as a level-one heading.
2. The article.
3. A Sources heading (`## Sources`) with the source links, one per line.

No front matter, no metadata, no claim ids, no citation markers, no footnotes,
and no notes about the process. The links in the Sources section are the
article's citations, and they are the only citation structure in the file. The
claim ledger stays in `research.md`; it never enters the article file.

---

## What a draft must be

A draft is the page a reader needs, written to the standard the audit will hold
it to.

Order of work:

1. **Answer first.** Open with the thing the reader came for: the requirement,
   the decision, the cost, the deadline, the step. Do not warm up.
2. **Then earn it.** Supply the mechanism, the exception, and the consequence
   that make the answer trustworthy.
3. **Then let them act.** Give the sequence, the document names, the exact
   figures, the failure point at each step, and what to do when it goes wrong.

Drafting method: write three candidate openings before you commit to one, and
when a paragraph stalls, write three versions and keep the least obvious. This
counters the pull toward the first, most predictable sentence (Verbalized
Sampling: sample the tails, not the mode). Keep one version whole; borrow at
most one phrase from another. Do not average the versions into mush.

Every factual statement must trace to a claim ledger row from the current run.
If a needed fact has no row, stop that page and record in the run log that it
needs research; do not write around the gap.

---

## Hard floors

Two requirements are hard for every article this pipeline produces. A draft that
misses either one does not leave this step, and the final check below and the
audit both enforce them.

- **Density floor.** A draft carries at least 1,200 words of article body,
  counted with the Sources section excluded. The word count is the floor, not
  the standard: density is. The page must answer the
  reader's decision at practitioner depth: the mechanism, the exceptions, the
  failure point at each step, the exact figures with their dates and sources,
  the follow-up questions a practitioner would ask next, and a comparison the
  reader can act on. Include a worked example only when the decision needs a
  calculation the reader cannot do in one step from the page's own numbers;
  two-row arithmetic is not a worked example. A draft that hits 1,200 words
  with filler is worse than a short one: the editor pass and the audit kill
  padding. A draft under the floor is not a page yet; send it back to the
  ledger and the brief, not to padding. Aim for headroom above the floor: the
  editor pass cuts prose and never pads, so a draft that only just clears
  1,200 words will fall back below it.
- **Citation floor.** The Sources section carries at least two distinct,
  openable sources the reader can visit. A page whose claims rest on one
  document stops here until a second source exists, either by researching one
  more ledger row or by splitting the page. A draft with fewer than two
  citations does not leave this step.

---

## Substance requirements per draft

- Every section contains at least one specific fact, number, named entity, or
  cited claim. No section survives on explanation alone. A number earns its
  place only when it constrains a choice, a cost, or a risk. Never state
  arithmetic the reader can do from numbers already on the page: a difference,
  a sum, a per-person split, or a percentage of the same figures. State each
  fact once, in its strongest place.
- Use the shapes readers act on: definitions with exact wording, comparisons
  with the deciding difference, procedures with the failure point, and numbers
  with their date and source.
- Name official documents, authorities, and portals exactly. Do not paraphrase
  a legal name into a casual one.
- Where a rule differs by market or locale, state each variant rather than
  generalizing.
- Where the business has first-party data, include it with its date range and
  collection method, anonymized as the context file requires, when one exists.
  Only data the business has actually supplied counts. If an asset is empty,
  illustrative, missing, or withheld, the page makes no reference to it or to
  its absence.

---

## What the page must prove

Search quality guidance (the Search Quality Rater Guidelines and the helpful
content guidance) reduces to six questions. Every draft must be able to
answer yes to all six:

- **Purpose.** Does the page exist to help the reader do something, and would
  it still be worth making if search engines ignored it? A page that
  exists to rank is search-first and fails here.
- **Experience.** Does the page show first-hand knowledge: real procedures,
  real failure points, real figures from the business's own records?
  Experience claims must be real; invented experience is fabrication and
  kills the page.
- **Expertise.** Does it use the correct official terms, name the actual
  authorities and documents, and answer the follow-up questions a
  practitioner would ask?
- **Citation quality.** Is every factual claim substantiated by a source the
  reader can open, with primary sources preferred over summaries?
- **Effort and originality.** Could a competitor produce this page in an
  hour? If yes, it fails. The page must contain something hard to replicate:
  first-party data, a primary-source synthesis, or a genuinely new angle.
- **Accountability.** Can a reader see where the facts come from? The Sources
  section is the record.

Pages that touch legality, money, safety, or health are held to the strictest
reading of all six: unverified claims are cut rather than labeled.

---

## On-page elements

Substance wins or loses the page, but these elements decide whether the
substance gets found and trusted. Every draft includes them.

- **Title.** One per page, front-loaded with the reader's actual question or
  the thing they need, under roughly 60 characters so it survives display
  truncation. No clickbait, no keyword stacking, no brand name unless the
  brand is why the reader clicks.
- **Internal links.** Every draft links to its cluster's hub and to the
  sibling pages named in its brief, with descriptive anchor text that varies
  between pages. Link only to pages that exist or are drafted in the same batch.
  Link-back planning (which existing pages should point to the new one) goes
  in your run log, never in the draft.
- **Accessibility.** Heading levels descend without skips, tables have header
  rows, link text makes sense out of context, and nothing essential is
  conveyed by color or layout alone.

---

## Language: two registers

Use the right register for each part of the page.

**Procedures, steps, safety, and money mechanics: ASD-STE100 Simplified
Technical English.** These rules are strict where a reader follows them
literally.

1. Maximum 20 words in an instruction and 25 words in a description.
2. One idea or one instruction in each sentence.
3. Use active voice. Name the person or organization that does the action.
4. Use simple tenses: present, past, and future.
5. Do not use contractions inside a procedure.
6. Do not use idioms or slang inside a procedure.
7. One word has one meaning. Use the same word for the same thing every time.
8. Write in this order: subject, verb, object.
9. Start an instruction with the verb.
10. Use "a", "an", and "the" correctly.
11. Do not put more than three nouns together in a row.
12. Maximum six sentences in a paragraph.
13. Do not use an -ing word as the main verb of a sentence.
14. Keep the text complete. Never remove a fact to make a sentence shorter.

**Editorial prose: plain human English.** Everything that is not a procedure is
written the way a good newspaper writer writes.

- Contractions are required, not banned. Their absence is the machine tell.
- Address the reader as "you" where the sentence allows.
- Plain words over formal ones. Concrete nouns over abstract ones.
- Vary sentence length on purpose: after a long sentence, drop a short one.
- Do not write like a regulation.
- Bad: "Visitors who are citizens or residents of the European Economic Area
  pay 22.00 euros."
- Good: "You pay 22 euros if you live in the EEA or hold an EEA passport."

The register changes the style, not the substance. Keep every fact, number,
date, and name.

---

## Structure

- No fixed scaffold. Sections follow the reader's decision, not a house
  template.
- No shared scaffold across the batch. Two drafts that share an outline, an
  opening shape, or a closing shape are a template collision: stop those
  drafts, vary the shapes, and record the collision in the run log. The
  audit checks this across the whole batch.
- Tables for comparisons, numbered steps for procedures, and plain prose for
  judgement calls.
- Keep the main answer reachable without scrolling past preamble.

---

## Prohibited

- Invented facts, quotations, studies, statistics, or expert consensus.
- Arithmetic the reader can do from numbers already on the page, unless the
  computed figure is the decision itself.
- Restating a fact in a second place, including an opening that previews the
  whole page.
- Slop constructions: "not just X but Y", "not only... but also", rule-of-three
  stacking, signposting ("the first thing is..."), summary conclusions that add
  nothing, "serves as" for "is".
- Filler phrases: "it is worth noting", "plays a crucial role", "in an era of",
  "has become increasingly important", "when it comes to".
- Claims presented as fact when the ledger row says reported, self-reported,
  or unanswerable. Match the wording to the label.
- Decorating a weak point with detail that does not constrain it.
- Keyword stuffing, hidden text, or query variants stacked for crawlers.
- Rewriting against an AI-detector score in a loop.
- Producing at volume with thinner pages than the last batch.
- Checklists, auditor notes, revision logs, or any pipeline commentary inside
  the draft file. The file is the page.
- Byline blocks, about-this-page sections, corrections footers, or automation
  disclosures in the body.
- Claim ids, ledger row lists, bracketed citation markers such as [C-1-001],
  footnote apparatus, or any other pipeline reference anywhere in the file.
- References to first-party data the business has not actually supplied, and
  notes about data that is missing, illustrative, or withheld. Absent data
  means silence, not a disclaimer.
- Any statement the business cannot defend to the authority, issuer, or reader
  it concerns.

---

## Output format

One file per page. The file name is the slug: `drafts/<slug>.md`:

```
# Title

The article.

## Sources

- [Source title](https://authority.test/document)
```

The article ends at its Sources section. Nothing follows it.

No process material in the draft file: no checklists, no notes to the auditor,
no revision logs, no commentary about the pipeline. The draft is the page a
reader would see. Answer the checks below in your run log or handoff
message, never inside the file:

- Claims without a ledger row: none, or list them.
- Official names verified against a primary source: yes, or list exceptions.
- Sections with no specific detail: none, or list them.
- Shared outline with another draft in this batch: no, or name which.
- Cluster links placed and headings within their rules: confirm each.
- Open questions for the auditor: list them for the audit step to adjudicate.

---

## Reading copy

After the batch's drafts are written, after the editor pass, and again whenever
the draft set changes, rebuild `ALL_ARTICLES.html` at the run root from every
file in `drafts/`. One HTML file, one section per article: the title from the H1
line, then the article body rendered from markdown, ending at its sources
section. Each section carries an id equal to the draft's slug. Everything
after the sources section is dropped. No navigation, no status
labels, no pipeline commentary: the file contains the articles and their
citations, nothing else. New drafts from later passes are added by rebuilding
the file, so it always covers the whole run.
`scripts/build-all-articles.mjs <run-directory>` does the rebuild; use it
instead of hand-rolling a renderer per run.

---

## Revision after the editor pass

When Step 4 returns a page (below the word floor, or a section stripped of its
last fact), revise only the flagged sections, keep the rest of the page as it
stands, and add no padding. The editor record travels with the draft. Revise
once and hand the page back to Step 4; a second return is recorded in the run
log and the page waits for the operator.

---

## Final check before handing to the editor pass (Step 4), then the audit, fix, and verify step (Step 5)

1. Every factual statement maps to a ledger row.
2. Every official name is exact and sourced.
3. The reader's decision is answered in the first screenful.
4. No section is filler, and no paragraph could appear in a different
   business's page unchanged.
5. The file contains exactly the title, the article, and the Sources section.
6. The register split holds: procedures inside the STE limits; editorial prose
   in plain English, with contractions, "you", and varied sentence lengths.
7. No em dashes, no filler openers, no restatement conclusions, no derivable
   arithmetic.
8. The draft does not look like its siblings: no shared outline, opening shape,
   or closing shape in the batch.
9. The file contains no claim ids, citation markers, or process material.
10. The density floor holds: at least 1,200 words of article body, with the
    substance to justify every one of them.
11. The citation floor holds: at least two distinct openable sources in the
    Sources section.
