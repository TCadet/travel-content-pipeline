# Step 5: Translation and Localization Prompt

Optional. This step runs only for the pages and locales the operator chose at
Checkpoint 2, and only after the English page has passed the audit, fix, and
verify. It never
runs on the model's own initiative.

**Precondition:** the English audit, fix, and verify for the page shows no open Critical or Major
findings. If any remain, stop and say which, and do not translate.

The pages and locales come from Checkpoint 2. If the operator chose none, stop.
For pages that affect legality, money, safety, or health in a locale, a local
market check is mandatory, not optional: someone who knows the local rules
confirms the page is correct for that market, not just correctly translated.
That check is part of the translation, not a new operator stop.

---

## Confirm the target locales

Check the live site for the languages it actually offers (a locale switcher,
language links, or page-level language annotations). Reconcile what you find
with `context.md` when one exists and with the locales chosen at Checkpoint 2,
and record any difference in the run notes. Translate only the locales chosen at
Checkpoint 2.

---

## What localization must preserve

- **Meaning, not wording.** Translate the reader's answer, not the English
  sentence structure.
- **Official names.** Keep document titles, authority names, statutes, and
  portal names in their official form for that locale, and where the official
  form is in another language, give it once with a localized gloss in
  parentheses. Never invent a translated name for a legal document.
- **Legal text.** Quoted law, forms, and official instructions stay verbatim in
  the original language, marked as quoted, with a translation clearly separated
  from the quote.
- **Numbers, dates, currency, and units.** Reformat to the locale's convention,
  and convert units where the locale expects them. Never change a value.
- **Structured data and metadata.** Title, description, slug convention,
  canonical annotations, language annotations, and schema fields localized
  consistently, with the source page identified.
- **Trust layer.** The source article's sources and dates carry over to the
  locale, not dropped.

## What localization must not do

- Add claims, examples, statistics, or advice that the English page does not
  contain.
- Drop caveats, exceptions, or market-specific conditions because they read
  awkwardly in the target language.
- Machine-translate and release without a language check. A human who reads
  the language must check the page first.
- Reuse one locale's phrasing in another.

---

## Terms and consistency

Build a short termbase for the batch before translating:

```
English term | locale | approved localized term | if kept in source language, why | source
```

Use it consistently across every page in the batch. Where a locale has more than
one accepted term, pick one, record the choice, and use it everywhere. Keep the
termbase between cycles. Keep it at `termbase.md` beside the run directories:
it is a growing asset, and each batch starts from the previous batch's
termbase rather than rebuilding it.

---

## Technical validation before handoff

For every localized page, before it leaves this step:

- **Language annotations.** The page's language annotation matches its locale,
  and the language annotations across all versions of the page are reciprocal:
  each version points to every other version and to itself.
- **Canonical.** The canonical annotation points to the page's own locale
  version, not to the English original.
- **URL convention.** The slug and locale path match the pattern in
  `context.md` when one exists; otherwise match the pattern the live site
  already uses and record it in the run notes.
- **Direction and rendering.** Right-to-left locales render with correct
  direction, punctuation, and numeral conventions. Mixed-direction strings
  (an English document name inside Arabic prose) are wrapped so they do not
  scramble.
- **Structured data.** Localized schema fields match the localized body.

---

## Output format

One file per page per locale, named `translations/<slug>.<locale>.md`:

```
---
source_page: <slug>
title:
meta_title:
meta_description:
slug:
locale:
translated: <date>
status: draft | final
terms_used: <termbase reference>
---

[localized body]
```

Localization notes (terms kept in the source language, conversions, intentional omissions, and the checklist result) go in your run notes or handoff message, never in the page file.

---

## Quality checklist

Confirm, in the target language:

- [ ] The page answers the same reader job as the English source.
- [ ] Official names and legal text are correct for this locale.
- [ ] Terminology matches the batch termbase.
- [ ] Numbers, dates, currency, and units are correct and natural.
- [ ] Nothing was added that the English page does not say.
- [ ] The page reads as written by a person from this locale, not translated.
- [ ] The source article's sources and dates are carried over and accurate.
- [ ] Language annotations are reciprocal and the canonical points to this
  locale's version.
- [ ] For pages affecting legality, money, safety, or health in this locale, the
  the local market check is done.

Status stays `draft` until every checklist item is complete.
