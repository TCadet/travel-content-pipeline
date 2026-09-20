# Pipeline Context

Optional. Copy this file to `context.md` and fill it in. With it, every step of
the pipeline reads it: it is the place the pipeline learns who the business is,
who it serves, and what it can prove. Without it, the run proceeds open-ended
across the whole travel universe and invents nothing. Nothing here is required
for a run; the pipeline never waits for this file and never asks for it.

This is the only file that changes from one company to another. The prompts are
written against these fields, so any travel business can run the same pipeline
by filling this in.

---

## Business

```
business_name:
niche:                 # fixed: travel. This pipeline serves the travel niche only
sub_niche:             # the travel lane this business owns (visa services, guided tours, cruises, destination guides, insurance)
freshness_window:      # how new an item must be for this batch: any_time, a rolling window such as 7d or 30d, or YYYY-MM-DD..YYYY-MM-DD
research_scope:        # optional narrowing; leave empty to research the whole travel topic universe
```

The freshness window is the only batch-recency control in the pipeline. `any_time`
researches the whole travel topic universe with no date filter, and the run
marks each item's vintage instead. A rolling window (any number of days, for
example `30d`) or an explicit date range restricts what counts as new for the
batch. Research scope stays open unless `research_scope` narrows it.

## Audience

```
primary_reader:        # the person doing the task
markets_served:        # countries and regions
locales_served:        # languages and regional variants
reader_decisions:      # the decisions these readers come to the site to make
```

## Keywords

```
keywords:              # the phrasings travellers actually use, per market where relevant
```

Seed queries the business cares about. Step 1 builds its search plan from
these plus the niche, market, and reader-decision combinations, and Step 2
checks candidates against them when judging demand. List real phrasings, not
keyword-tool jargon: "do I need a visa for X", not "visa X informational".

## Evidence the business uniquely holds

List every first-party asset the pipeline may use, with its date range and any
privacy or anonymization constraint. This is what makes pages impossible for
competitors to copy.

```
data_asset:            # one block per asset; repeat this block for each
  name:                # for example seasonality of demand
  date_range:
  constraint:
```

## Editorial operation

```
capacity_per_cycle:    # pages that can clear both checkpoints this cycle
seasonality_calendar:  # demand peaks and deadline cycles per market, with dates
```

## Scope

```
in_scope:              # topics and page types this business covers
out_of_scope:          # topics, claims, or markets excluded, with the reason
regulated_claims:      # claims that need legal or compliance review
competitors:           # named, if comparison pages are allowed
```

## Voice and identity

```
voice:                 # how the business speaks to readers
point_of_view:         # first person plural, second person, or both
brand_rules:           # words and claims the brand uses or avoids
```

## Technical context

```
content_root:          # directory holding pages, used by the audit
url_pattern:           # how slugs and locales are addressed
schema_available:      # Article and other structured data types the site supports
```

## Content inventory

```
content_inventory:     # path to the live page inventory, or paste the list inline
```

Every URL with its page type, primary query, and last substantive update. The
idea step deduplicates against this list, so an incomplete inventory produces
duplicate pages.
