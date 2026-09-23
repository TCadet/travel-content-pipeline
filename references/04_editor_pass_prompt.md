# Step 4: Editor Pass Prompt

Runs after the writing step and before the audit. One pass per draft, sentence
by sentence. The question for every sentence: would a human editor keep it?

This step changes prose only. It does not fact-check (the audit does), does not
add claims, and does not change the reader job or the page's structure. It
edits sentences, headings, table cells, list items, and anchor text.

Inputs: the draft, its brief, the run's claim ledger (`research.md`) for the
facts the draft relies on, and the voice: a voice or writing samples supplied
at the intake, otherwise the default at `references/voice-default.md`. Keep
the brief and the ledger out of the draft file.

---

## Register

- **Procedures, numbered steps, safety, and money mechanics:** keep the
  ASD-STE100 limits (20 words in an instruction, 25 in a description, active
  voice, no contractions inside the procedure).
- **Everything else (editorial prose):** plain human English. Contractions are
  required, not banned. Address the reader as "you" where the sentence allows.
  Plain words over formal ones. Concrete nouns over abstract ones. Vary
  sentence length on purpose: after a long sentence, drop a short one. Do not
  write like a regulation.

## Voice

Read the voice before you edit. The page must sound like the same person
as its siblings in the batch. Voice stability is the trait readers notice: a
page whose rhythm changes with its topic reads machine-made. Use the voice,
and vary which traits lead from page to page without changing the
publication behind them.

## The cut list

Apply every item to the editorial prose. Record each cut in the editor record.
Procedures get the register check and the fact-preservation rule only: do not
cut a step, a warning, or the sentence that introduces them.

1. **Derivable arithmetic.** Cut numbers the reader can compute from numbers
   already on the page: a difference, a sum, a per-person split, a percentage
   of the same figures. Counter-example: "The gap is 10.00 euros for one
   adult." Keep a computed figure only when the computed number is itself the
   decision, such as a total the reader must budget or a threshold that changes
   an action.
2. **Restatement.** Cut any sentence that repeats a fact already stated. The
   opening answers the reader; it does not preview the page. The prose does not
   restate the table.
3. **Signposting.** Cut "The first X is...", "The second...", "Here is what...",
   "It is worth noting", "Let's look at", "When it comes to". Test: cover the
   first sentence of a paragraph. If the rest still works, the opener was
   scaffolding.
4. **No-presence sentences.** Test: move the sentence into a different article
   on a different topic. If it fits there unchanged, it carries no presence.
   Cut it, or make it specific with a fact already on the page; this step adds
   no facts, so if the sentence needs one the page lacks, record the gap for the
   audit. If a cut would leave its section with no specific fact, keep the
   sentence and record the gap for the audit.
5. **Slop constructions.** Cut or rewrite: "not just X but Y", "not only...
   but also", rule-of-three lists used for rhythm rather than because three
   things exist, "serves as" or "features" where "is" works, hedging ("it could
   be argued", "tends to", "in many cases", "some might say"), false balance
   (an unsourced counterpoint attached to every claim), and summary conclusions
   that only restate.
6. **Filler phrases.** Delete: "it is worth noting", "plays a crucial role",
   "in an era of", "has become increasingly important", "at the end of the
   day", "the landscape of", "it is important to remember".
7. **Em-dash density.** Replace every em dash (U+2014) with a comma, a colon,
   a period, or parentheses.
8. **Abstract for concrete.** Replace a general noun plus a buzzword adjective
   with the specific behavior, number, or name: "effective communication
   strategies" becomes the actual step.
9. **Paragraph shape.** Break uniform paragraphs. Some paragraphs are one
   sentence. Let some end mid-thought with a caveat, a question, or a next
   step instead of resolving everything.

## Elements, not just sentences

The pass covers the whole page.

- **Title.** Front-loaded with the reader's question, under about 60
  characters, no clickbait, no keyword stacking.
- **Headings.** No rhetorical scaffolding, no query strings, no signposting. A
  heading names what the section delivers.
- **Tables.** Every cell carries a specific: a number, a name, a date, a
  status. No "Great value", no "Many options". Header rows stay.
- **List items.** Each item survives the swap test on its own.
- **Anchor text.** Descriptive, varied between pages, meaningful out of
  context.

## The voice floor

Every page must pass all of these after the pass. The audit checks them.

- Contractions are present in the editorial prose.
- The reader is addressed as "you" where the sentence allows.
- Sentence openers are varied. (Repeated openers are a human trait; do not
  scrub them into uniformity.)
- Paragraph lengths are uneven.
- The page shares no outline, opening shape, or closing shape with any sibling
  draft in the batch. This item is judged in Step 5's duplication/consistency
  pass, which sees every draft.

The audit treats a failed item among the four local items above as a score
below 6 on the voice criterion (13.8). Contraction stuffing with cold prose is still a finding: the floor asks
for a voice, not a quota.

## The floor check

After the cuts, recount the article body with the Sources section excluded. If
the count falls below 1,200 words, send the page back to the writing step with
the editor record attached. Do not pad it back.

## Do not

- Add facts, dates, sources, or claims. If a sentence needs evidence the page
  lacks, cut the sentence and record the gap; the audit decides what happens
  next.
- Soften or strengthen sourcing language. "Reported" stays "reported".
- Rewrite the page into a new template while removing the old one.
- Chop every sentence short. Rhythm means variation, not fragmentation.
- Do not touch the Sources section except to confirm it still matches the
  claims that remain in the page.

## Record

Write `editor/<slug>.md` with:

- the cut categories applied and the count for each; a zero total is allowed
  only with the elements and voice-floor checks reported in full, and it needs
  the audit's re-scan of the draft before it is accepted;
- the before and after text for every sentence removed or rewritten, with the
  pre-edit text quoted verbatim so the audit can diff the record against the
  draft;
- the body word count before and after the pass;
- the voice-floor check, item by item;
- any gap you cut a sentence for, or kept a sentence for.

This record is what the audit checks, and it is the evidence that an editorial
pass happened rather than a machine re-read. Keep it out of the draft file.

## Handoff

The edited draft goes to the audit with the reader job, the sourcing language,
and every fact value unchanged. If the pass leaves a page below the 1,200-word
floor, or removes a section's last specific fact against the cut-list rule,
record the gap and send the page back to Step 3 with the editor record attached. Step 3's revision rule (see
the writing prompt) governs: revise once and return to Step 4; a second failure
goes in the run log, and the page is marked BLOCKED for Checkpoint 2. Do not
pad the page back with filler.
