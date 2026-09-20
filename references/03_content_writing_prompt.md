# Step 3: Content Writing Prompt

Write one draft per kept idea. Inputs for each draft:

- `context.md` (optional) for audience, markets, locales, voice, and identity. If
  no context file exists, write for a general travel reader and invent nothing
  about the business.
- `research.md` and its claim ledger for the facts.
- The idea brief from the kept slate for the reader job and the shape.

Bulk rules: same standard for every page, one file per page, and no page leaves
this step as final. Everything here goes to the audit, fix, and verify step next.

---

## What a draft must be

A draft is the page a reader needs, written so that a named human is proud to
put their name on it.

Order of work:

1. **Answer first.** Open with the thing the reader came for: the requirement,
   the decision, the cost, the deadline, the step. Do not warm up.
2. **Then earn it.** Supply the mechanism, the exception, and the consequence
   that make the answer trustworthy.
3. **Then let them act.** Give the sequence, the document names, the exact
   figures, the failure point at each step, and what to do when it goes wrong.

Every factual statement must trace to a claim ledger row from the current run.
If a needed fact has no row, stop that page and record in the run notes that it
needs research; do not write around the gap.

---

## Hard floors

Two requirements are hard for every article this pipeline produces. A draft that
misses either one does not leave this step, and the run checker enforces both on
every draft at verify time.

- **Density floor.** A draft carries at least 1,200 words of article body,
  counted with the front matter and the Sources section excluded. The word
  count is the floor, not the standard: density is. The page must answer the
  reader's decision at practitioner depth: the mechanism, the exceptions, the
  failure point at each step, the exact figures with their dates and sources,
  the follow-up questions a practitioner would ask next, and the worked example
  or comparison the reader can act on. A draft that hits 1,200 words with
  filler is worse than a short one: it will be killed at the audit for
  padding. A draft under the floor is not a page yet; send it back to the
  ledger and the brief, not to padding.
- **Citation floor.** The Sources section carries at least two distinct,
  openable sources the reader can visit. A page whose claims rest on one
  document stops here until a second source exists, either by researching one
  more ledger row or by splitting the page. The run checker fails a draft with
  fewer than two citations in its Sources section.

---

## Substance requirements per draft

- Every section contains at least one specific fact, number, named entity, or
  cited claim. No section survives on explanation alone.
- Use the shapes readers act on: definitions with exact wording, comparisons
  with the deciding difference, procedures with the failure point, and numbers
  with their date and source.
- Name official documents, authorities, and portals exactly. Do not paraphrase
  a legal name into a casual one.
- Where a rule differs by market or locale, state each variant rather than
  generalizing.
- Where the business has first-party data, publish it with its date range and
  collection method, anonymized as the context file requires, when one exists.
  Only data the
  business has actually supplied counts. If an asset is empty, illustrative,
  missing, or withheld, the page makes no reference to it or to its absence.

---

## What the page must prove

Search quality guidance (the Search Quality Rater Guidelines and the helpful
content guidance) reduces to six questions. Every draft must be able to
answer yes to all six:

- **Purpose.** Does the page exist to help the reader do something, and would
  it still be worth publishing if search engines ignored it? A page that
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
- **Accountability.** Can a reader tell who wrote and who checked this page
  from its metadata, and does the business stand behind it publicly?

Pages that touch legality, money, safety, or health are held to the strictest
reading of all six: a named reviewer is mandatory, and unverified claims are
cut rather than labeled.

---

## On-page elements

Substance wins or loses the page, but these elements decide whether the
substance gets found and trusted. Every draft includes them.

- **Title.** One per page, front-loaded with the reader's actual question or
  the thing they need, under roughly 60 characters so it survives display
  truncation. No clickbait, no keyword stacking, no brand name unless the
  brand is why the reader clicks.
- **Meta description.** One or two sentences that promise the specific answer
  the page delivers, under roughly 160 characters. It is ad copy for the
  answer, not a summary of the page.
- **Slug.** Short, lowercase, hyphenated, matching the primary query's core
  words. No dates in slugs for evergreen pages.
- **Internal links.** Every draft links to its cluster's hub and to the
  sibling pages named in its brief, with descriptive anchor text that varies
  between pages. Link only to pages that exist or are drafted in the same batch.
  Link-back planning (which existing pages should point to the new one) goes
  in your run notes, never in the draft.
- **Media.** Every page carries at least one planned media asset where the
  reader's task benefits: a map, a photo of the actual document or place, a
  diagram of the procedure. Each asset gets descriptive alt text that says
  what the image shows, not the keyword it should rank for. No stock imagery
  that could illustrate any site.
- **Structured data.** Emit the types the context file (when one exists) lists
  under `schema_available`: Article with author, and reviewedBy only where the front
  matter names a reviewer, FAQPage only for questions visible on the page, HowTo
  only for genuine step-by-step procedures. Never mark up content the reader
  cannot see.
- **Accessibility.** Heading levels descend without skips, tables have header
  rows, link text makes sense out of context, and nothing essential is
  conveyed by color or layout alone.

---

## Trust layer

Attribution is metadata, not body copy. The front matter carries the named
author with the basis of their expertise, the `review_required` flag, and, where
that flag is true, the named reviewer with theirs; where no reviewer is required
the reviewer field reads `none`. With no `context.md`, the fields read
`author: PENDING` and `reviewer: PENDING` where review is required; the audit
flags them and the operator supplies the names at Checkpoint 2. Never stop the
run to ask for a name. The front matter carries `publishable: false` until
then; it flips to `true` at Checkpoint 2 only when the names are in place, and
the run checker fails a draft marked publishable whose author or required
reviewer still reads `PENDING`. The body carries exactly one trust element: the
sources section, linking the primary sources the reader can open, not summaries
of them. No byline block, no about-this-page section, no corrections footer, no
automation disclosure in the body.

---

## Voice and readability

Write the way a knowledgeable operator explains the job to a traveller at the
desk: direct, specific, and unhurried.

- Vary sentence length. Short sentences carry decisions; longer ones carry the
  reasoning behind them. Uniform rhythm reads as machine output and reads worse
  aloud.
- Prefer concrete verbs and named actors. Cut hedging that carries no
  information.
- Use first person plural where the business genuinely speaks, and second person
  for the reader's actions. Real voice markers matter more than polish.
- Keep paragraphs uneven when the material is uneven.
- Use contractions.
- Readability targets: sentences average roughly 15 to 20 words, active voice
  by default, and hedge adverbs (absolutely, clearly, obviously) are cut.
- Vary link text and headings. Headings should answer the reader's question,
  not label a template slot.
- No em dash characters (U+2014). Use commas, colons, parentheses, or a new
  sentence.
- No filler openers or closers. No "in today's world", no "it is important to
  note", no conclusion that restates the page.

---

## Structure

- No fixed scaffold. Sections follow the reader's decision, not a house
  template.
- If two drafts in the same batch share an outline, stop those drafts and record
  the collision in the run notes: one of them is the other with a noun swapped.
- Tables for comparisons, numbered steps for procedures, and plain prose for
  judgement calls.
- Keep the main answer reachable without scrolling past preamble.

---

## Prohibited

- Invented facts, quotations, studies, statistics, or expert consensus.
- Claims presented as fact when the ledger row says reported, self-reported, or
  unverified. Match the wording to the label.
- Decorating a weak point with detail that does not constrain it.
- Keyword stuffing, hidden text, or query variants stacked for crawlers.
- Rewriting against an AI-detector score in a loop.
- Publishing at volume with thinner pages than the last batch.
- Checklists, auditor notes, revision logs, or any pipeline commentary inside
  the draft file. The file is the page.
- Byline blocks, about-this-page sections, corrections footers, or automation
  disclosures in the body. Attribution lives in front matter.
- References to first-party data the business has not actually supplied, and
  notes about data that is missing, illustrative, or withheld. Absent data
  means silence, not a disclaimer.
- Any statement the business cannot defend to the authority, issuer, or reader
  it concerns.

---

## Output format

One file per page. The file name is the slug: `drafts/<slug>.md`. The file
contains exactly two things: front matter the CMS and the pipeline gates
read, and the article. Nothing else goes in the file.

```
---
title:
meta_title:
meta_description:
slug:
primary_query:
secondary_queries: []
intent:                  # informational | transactional | navigational
cluster:                 # cluster name and hub/spoke role
author:
author_credentials:      # the basis of this author's expertise, from author_roles in context.md, when one exists
review_required:         # true when the page touches legality, money, safety, or health, or makes a regulated_claims claim
reviewer:                # named reviewer when review_required is true; otherwise "none"
reviewer_credentials:    # the basis of the reviewer's expertise, from reviewer_roles, when review_required is true
markets: []
locales: []
ledger_rows: []          # claim ids used, in order of appearance
internal_links: []       # hub and sibling slugs this page links to
media: []                # planned assets, each with alt text
schema_types: []         # structured data types emitted
publishable: false       # flips to true at Checkpoint 2, only when the author and any required reviewer are named
---

[article body]
```

The article body ends with its sources section: the primary sources the
reader can open, linked. Nothing after that.

No process material in the draft file: no checklists, no notes to the auditor,
no revision logs, no commentary about the pipeline. The draft is the page a
reader would see. Answer the checks below in your run notes or handoff
message, never inside the file:

- Claims without a ledger row: none, or list them.
- Official names verified against a primary source: yes, or list exceptions.
- Sections with no specific detail: none, or list them.
- Shared outline with another draft in this batch: no, or name which.
- Cluster links placed, media assets planned with alt text, title and meta
  within their rules: confirm each.
- Open questions for the auditor: list them for the audit step to adjudicate.

---

## Reading copy

After the batch's drafts are written, and again whenever the draft set
changes, rebuild `ALL_ARTICLES.html` at the run root from every file in
`drafts/`. One HTML file, one section per article: the title from the front
matter, then the article body rendered from markdown, ending at its sources
section. Each section carries an id equal to the draft's slug. Strip the
front matter and everything after the sources. No navigation, no status
labels, no pipeline commentary: the file contains the articles and their
citations, nothing else. New drafts from later passes are added by rebuilding
the file, so it always covers the whole run.
`scripts/build-all-articles.mjs <run-directory>` does the rebuild; use it
instead of hand-rolling a renderer per run.

---

## Final check before handing to the audit, fix, and verify step

1. Every factual statement maps to a ledger row.
2. Every official name is exact and sourced.
3. The reader's decision is answered in the first screenful.
4. No section is filler, and no paragraph could appear in a different
   business's page unchanged.
5. Front matter attribution complete: author and credentials, the
   review_required flag, and reviewer and credentials where required.
6. On-page elements complete: title, meta description, slug, cluster links,
   media with alt text, structured data, accessible structure.
7. No em dashes, no filler openers, no restatement conclusions.
8. The draft does not look like its siblings.
9. The body contains no trust blocks or process material: it ends at the
   sources section.
10. The density floor holds: at least 1,200 words of body text, with the
    substance to justify every one of them.
11. The citation floor holds: at least two distinct openable sources in the
    Sources section.
