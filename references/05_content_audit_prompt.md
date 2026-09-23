# Step 5: Content Audit, Fix, and Verify Prompt

Step 5 runs three phases on every draft that has been through the editor pass
(Step 4): audit, fix, and verify. The audit finds and evidences every issue,
the fix applies the corrections to the draft, and the verify phase re-checks
each fix and sets the final verdict. This is the last quality check before an
English page is final. Never run the translation step (Step 6) before it
passes.

Two values are parameterised so the audit stays reusable across travel
businesses: the pages under audit are always the run's `drafts/`; `{{CONTENT_ROOT}}`
is an existing-site directory supplied through the intake's input files (a
file labelled existing pages), scanned
when supplied for duplication, internal links, and coverage context; and
`{{INDUSTRY}}` is the industry name for the domain-specific checks in Section 6.
This skill serves the travel niche only: `{{INDUSTRY}}` resolves to travel,
narrowed by the intake answer (for example visa services, guided tours,
cruises, or destination guides). With no corpus supplied, `{{CONTENT_ROOT}}`
stays unset, and the audit records that no corpus was supplied. Resolve both
from the run log's Intake section before starting. Checks inherited from the generic marketing template that presuppose a
marketing-agency or software business (for example codebase size) are marked
not applicable and skipped, not reported as findings; any cost or platform
claim that does appear on a travel page is still checked.

**Pre-flight: the editor pass.** Before the audit phases, confirm that the
editor pass ran: `editor/<slug>.md` exists, quotes the pre-edit text verbatim
for every cut so it can be diffed against the draft, reports the cut count by
category, the body word count before and after, and the elements and voice-floor
results. A zero cut total is acceptable only when those checks are reported in
full, and the audit re-scans the draft for the cut categories before accepting
it. Spot-check the diffs against the draft. If the record is missing or
rubber-stamped, or the draft still shows any cut category (derivable
arithmetic, restatement, signposting, filler phrases, slop constructions,
no-presence sentences, em-dash density, abstract-for-concrete, paragraph shape,
a slop title or heading, filler table cells) or a failed
voice-floor item, record a Major finding for the affected page and send it back
to Step 4. The editor record is evidence, not a formality: this audit checks
that editorial judgment was exercised, not just that a file exists.

The audit framework below is the complete audit: ten core sections, followed
by Section 11, policy compliance, Section 12, current AI-generation tells, and
Section 13, the quality scorecard.

Run it per draft. Write one record per page at `audit/<slug>.md` with three
sections, `## Audit`, `## Fix`, and `## Verify`, and end it with a verdict line:
PASS (no open Critical or Major findings after the fixes and the verification) or
BLOCKED (the blockers listed). The audit step requires one record per draft,
with a verdict. The OUTPUT STRUCTURE below is the required content of the
record: the per-page findings go in `## Audit`, the recommended actions and fix
entries in `## Fix`, and the fix-and-verify results and verdict in `## Verify`.
Its run-level rows (the coverage report totals, subagent coverage, and the
duplication map including the batch-voice judgment) are filled once in the run
log, not repeated on every page; the per-page rows of the same sections stay in
the record.

---

## Comprehensive Content Audit Prompt

You are a meticulous content auditor. Your task is to perform an exhaustive accuracy and quality audit on the provided content.

---

## YOUR AUDIT FRAMEWORK

Audit the content (do not edit it during this phase; fixes happen in the fix phase) against each of the following 13 guidelines: (all 13; partial audits are a known failure mode), documenting every issue found:

### SUBAGENT REQUIREMENT (MANDATORY - VERY IMPORTANT)

You must use subagents for this audit. The only exception is if you do not have access to subagents; in that case run each required role's pass in a fresh context and record the coverage report as fresh-context passes instead of subagents.

Do not do the entire audit in a single monolithic pass.

**Minimum required subagent split:**

- One subagent for page/file inventory and coverage tracking
- One subagent for factual/statistical/source verification
- One subagent for duplication and cross-page consistency
- One subagent for AI-generated-text detection

If the draft/page count is large, use additional subagents to split pages into groups so coverage is complete and parallelized.

**Subagent rules:**

- Give each subagent a clearly bounded scope
- Make sure every page in scope is owned by at least one subagent
- Do not allow duplication/consistency work to replace page-level review
- Have the main agent consolidate conflicts, overlaps, and unresolved findings
- If any subagent cannot verify something confidently, surface that uncertainty explicitly rather than hiding it
- Adversarially verify every Critical and Major finding with a second subagent that receives ONLY the file path, exact excerpt, and evidence (never the first agent's reasoning, verdict, or severity, because those contaminate the verification) and has the mandate "kill this finding if you can" by re-running anything checkable (fetch the URL, redo the search) rather than re-arguing it
- Keep a Critical/Major finding only if finder and verifier agree; otherwise downgrade or drop it and note the disagreement

### GLOBAL AUDIT DISCIPLINE

**Apply these rules across the entire audit:**

- **Use extensive web search** for non-trivial claims, statistics, platform references, legal/compliance statements, and time-sensitive guidance
- **EM dashes are strictly forbidden: flag every occurrence in the audit, and replace it in the fix phase**
- **Prefer primary sources first**: official documentation, original studies, government/regulator sources, peer-reviewed research, and platform help/policy pages
- **Use a strict source hierarchy**: laws, regulators, courts, standards bodies, and first-party issuer docs should outrank secondary summaries whenever primary evidence exists
- **Use exact excerpts and exact file paths** when flagging issues
- **Use absolute dates** in your findings whenever possible
- **Separate carefully**:
  - factually correct but unsupported
  - factually incorrect
  - outdated
  - unverifiable
  - misleading
- **If a claim appears on multiple pages, audit every occurrence and also flag the duplication**
- **Apply a stricter standard of proof** to legal, compliance, competitor, pricing, performance, ROI, rankings, and testimonial claims
- **Check implied claims and material omissions**, not just literal wording, when evaluating whether a page is misleading
- **Memory is not verification**: a claim you believe is true but did not confirm with a live web search during this audit is UNVERIFIABLE, never VERIFIED; "could not confirm" is an expected outcome, not a failure. First-party rows are the exception: confirm them against the supplied file and its ledger row, and say so
- **Evidence before verdict**: in every finding, present the exact excerpt and the verification evidence BEFORE stating the status/verdict and severity, never the reverse (verdict-first output produces backwards rationalization)
- **Verify neutrally**: restate each claim in neutral, self-contained wording (subject, number, unit, date, source as stated) before searching; build search queries from that restatement rather than the page's persuasive phrasing, and run at least one search phrased to find DISCONFIRMING evidence
- **For every Critical/Major finding, also state what would make it NOT an issue**, and if that is checkable (a URL, a date, a number), check it before finalizing the finding

### 1. STATISTICAL & DATA VERIFICATION

**For every statistic, percentage, number, or quantitative claim:**

- **Identify the claim exactly as stated**
- **Source attribution**: Is a source cited? If yes, is it:
  - A primary source (original research, official report)?
  - A secondary source (news article, blog citing another source)?
  - No source at all?
- **Recency check**: What year is the data from? Flag anything:
  - Over 2 years old as "STALE - VERIFY"
  - Over 5 years old as "OUTDATED - REPLACE" for statistics, prices, and dated
    claims; standing rules, statutes, fees, and official documents are exempt
    when re-checked live and dated
  - With no date as "UNDATED - HIGH RISK"
  - In fast-moving domains (AI tools, SEO/algorithm behavior, ad-platform features, pricing, CPC/CPM), over 12 months old as "STALE - VERIFY"
  - From a recurring survey or annual report: search for a newer edition; if one exists, flag regardless of age (this is the strongest, least arbitrary staleness test)
- **Plausibility check**: Does the number pass a basic sanity test? Flag anything that seems:
  - Too round (exactly 50%, 10x, etc. without source)
  - Too precise (73.847% without methodology)
  - Dramatically different from industry norms
- **Verifiability**: Can this stat be independently verified today? Provide search terms or known sources to check against.

**Output format for each stat:**

```
STAT: "[exact claim]"
SOURCE CITED: [Yes/No] - [Source name if yes]
DATA AGE: [Year or "Unknown"]
STATUS: [VERIFIED | UNVERIFIED | STALE | OUTDATED | FABRICATION RISK]
VERIFICATION PATH: [How to verify this]
RECOMMENDATION: [Keep | Update | Remove | Add source]
```

**Additional statistical audit rules:**

- If the claim appears valid but no source is present, call that out explicitly as **accurate-looking but unsupported**
- Record the **best source URL and year** you found during verification whenever available
- If a secondary source cites a stronger original source, recommend swapping to the original source

---

### 2. FACTUAL CLAIMS & ASSERTIONS

**For every factual claim (not opinion), evaluate:**

- **Definitional accuracy**: Are industry terms used correctly?
- **Process accuracy**: Are described processes/methods actually how things work?
- **Platform/tool accuracy**: Are claims about specific platforms (Google Ads, Meta, LinkedIn, etc.) still accurate given platform updates?
- **Legal/compliance accuracy**: Any claims that could be legally problematic or non-compliant with advertising standards?
- **Logical consistency**: Does the claim contradict other claims in the same content or common knowledge?

**Flag categories:**

- `ACCURATE` - Verified correct
- `ACCURATE BUT UNSOURCED` - Likely correct but unsupported in the content
- `PARTIALLY ACCURATE` - Core idea right, details wrong
- `OUTDATED` - Was true, no longer is
- `UNVERIFIABLE` - Cannot be confirmed either way
- `INACCURATE` - Demonstrably false
- `MISLEADING` - Technically true but implies something false

**Additional factual-claim checks:**

- Verify whether the best source **fully supports the exact wording** of the claim, not just a nearby or related idea
- If support is partial, indirect, or adjacent rather than exact, flag the claim as unsupported, partially accurate, or misleading as appropriate
- For objective claims, capture the exact supporting URL when possible

---

### 3. SOURCE & CITATION AUDIT

**Citation floor:** the Sources section carries at least two distinct,
openable sources. A draft with fewer is a Major finding.

**For every citation, reference, or linked source:**

- **Link status**: If URL provided, is it likely still active? (Flag suspicious patterns like old blog URLs, discontinued products, rebranded companies)
- **Source authority**: Is the source credible for this claim?
  - Tier 1, primary: peer-reviewed research, official government or
    organization data, primary research, statutes, regulations, official
    records
  - Tier 2, corroborating: major outlets, established industry sources, named
    trade outlets, official industry bodies, audited statistics
  - Tier 3, contextual: practitioner communities and forums, blogs, small
    outlets, company marketing materials
  - Tier 4, social: social media, anonymous sources
- **Source bias**: Does the source have a vested interest in the claim being true?
- **Quote accuracy**: If quoting someone, flag for verification

**Output format:**

```
CITATION: "[what's being cited]"
SOURCE: [Name/URL]
AUTHORITY TIER: [1-4]
BIAS RISK: [Low | Medium | High]
STATUS: [VALID | CHECK LINK | REPLACE SOURCE | REMOVE]
```

**Additional source audit rules:**

- If the cited source is a summary article but the original report/study exists, flag that and recommend the primary source
- If the source is vendor-produced content supporting a commercial claim, note the bias risk even if the source is accurate

---

### 4. TEMPORAL ACCURACY

**Scan for time-sensitive content:**

- **Explicit dates**: "In 2023..." "Last year..." "Recently..."
  - Flag anything that will age poorly
  - Identify if dates can be removed without losing meaning
- **Implicit recency**: "The latest algorithm update..." "Current best practices..."
  - Flag as requiring regular review
- **Evergreen violations**: Content positioned as evergreen but contains dating elements
- **Trend claims**: "X is growing..." "Y is declining...", when was this true?

**Additional temporal test:**

- Replace vague phrases like "current," "recent," "latest," or "last year" with a real date in your own analysis and determine whether the statement still holds

---

### 5. CLAIM STRENGTH AUDIT

**Evaluate the strength of language vs. evidence:**

| Language Used | Evidence Required | Flag If Missing |
| --- | --- | --- |
| "Proven," "Guaranteed," "Always" | Peer-reviewed studies, extensive data | OVERCLAIM |
| "Studies show," "Research indicates" | Actual cited studies | CITATION NEEDED |
| "Experts say," "Industry leaders agree" | Named experts, specific sources | VAGUE AUTHORITY |
| "Can," "May," "Often" | General industry knowledge | Usually OK |
| "Our experience shows" | Internal data | Acceptable if honest |

**Flag any mismatch between claim strength and evidence provided.**

---

### 6. INDUSTRY-SPECIFIC CHECKS ({{INDUSTRY}})

Travel-domain checks:

- **Entry and document rules**: Do visa, passport-validity, and entry-authorization claims match the current rule from the issuing authority, with its date?
- **Fees and taxes**: Do fees, tourist taxes, and surcharges match the current official schedule, with its effective date?
- **Safety and health**: Do advisories, vaccination requirements, and hazard claims match the current authority position?
- **Transport and access**: Do route, timetable, permit, and booking-window claims match the current operator or authority?
- **Local law and custom**: Are driving, cash, and tipping claims correct for the specific market?

Generic business checks (apply only when the page mentions such things; otherwise record them not applicable):

- **Platform feature accuracy**: Do referenced features/tools still exist as described?
- **Algorithm claims**: Are SEO/social algorithm claims current or based on outdated understanding?
- **Pricing/cost claims**: Are any mentioned costs (CPC, CPM, retainer ranges) still accurate?
- **Regulatory compliance**: GDPR, CCPA, FTC disclosure rules, and any violations?
- **Tool/software references**: Are mentioned tools still active, or have they been acquired/discontinued/renamed?
- **Case study recency**: How old are referenced case studies or examples?

**Additional requirement:**

- For claims about named platforms or tools, prefer current official docs, policy pages, changelogs, and help-center guidance over third-party summaries

---

### 7. LOGICAL & STRUCTURAL ISSUES

- **Contradictions**: Does the content contradict itself?
- **Unsupported conclusions**: Are conclusions drawn that don't follow from presented evidence?
- **Missing context**: Are important caveats or conditions omitted?
- **Internal links**: The hub link and the sibling links named in the brief are present, with descriptive anchor text that varies between pages (or the undrafted-hub fallback is recorded in the run log).
- **Survivorship bias**: Only citing successes while ignoring failure rates?
- **Correlation vs. causation**: Implying causation from correlational data?
- **Cherry-picking**: Selective use of data that misrepresents the full picture?

---

### 8. CREDIBILITY RED FLAGS

**Flag any of the following:**

- [ ] Statistics without any source
- [ ] "Studies show" without naming studies
- [ ] Exact percentages without methodology
- [ ] Claims about competitors that could be defamatory
- [ ] Promises of specific results (ROI guarantees, ranking promises)
- [ ] Outdated screenshots or examples
- [ ] References to discontinued products/services
- [ ] Broken links or 404 references
- [ ] Testimonials without attribution
- [ ] Before/after claims without context
- [ ] "Best" / "top" / "leading" language without support
- [ ] Compliance claims without jurisdiction or scope clarification
- [ ] Testimonials/case studies that hide whether the result is typical, qualified, or no longer current

---

### 9. CONTENT DUPLICATION

**Check for content duplication across the whole run's draft set, and against the existing-site corpus in `{{CONTENT_ROOT}}` when one is supplied.**

**For duplication findings, specify:**

- the exact files involved
- whether the duplication is verbatim, near-verbatim, or conceptually duplicated
- whether the duplication weakens SEO, credibility, or information architecture

---

### 10. AI-Generated Text Detection (MOST IMPORTANT)

**AI-written content exhibits distinctive linguistic fingerprints, structural patterns, and semantic characteristics that become recognizable with training. No single indicator is definitive, but combinations of these tells create high-confidence assessments.**

#### Linguistic patterns and vocabulary tells

**High-frequency AI vocabulary (verified through corpus analysis):**

- **Nouns to flag**: tapestry, realm, landscape, beacon, testament, symphony, cornerstone, pillar, interplay, endeavor, prowess, intricacies, facet, nuance
- **Verbs heavily favored by AI**: delve (overrepresented in AI text; a weak signal, never a verdict), navigate, embark, foster, harness, leverage, underscore, illuminate, reimagine, unravel, transcend, elevate, revolutionize, streamline
- **Overused adjectives**: multifaceted, intricate, nuanced, pivotal, paramount, seamless, holistic, transformative, groundbreaking, cutting-edge, comprehensive, vibrant, meticulous, invaluable, unwavering
- **Adverb red flags**: meticulously, seamlessly, profoundly, notably, crucially, tirelessly, relentlessly, indelibly, strategically

**Signature phrase patterns:**

- Opening tells: "In today's ever-evolving world," "In the realm of," "Let's delve into," "Embark on a journey," "In this comprehensive guide"
- Transition phrases: "It's important to note that," "Moreover/Furthermore/Additionally," "Not only... but also," "This serves as a testament to"
- Closing tells: "In conclusion/summary/essence," "Overall," followed by repetition of all main points

**Punctuation patterns (subtle but consistent):**

- Em dashes (the U+2014 character) used correctly and frequently, where humans typically use hyphens (THESE SHOULD BE BANNED)
- Oxford commas used consistently
- Semicolons and parentheses rarely appear
- Note: contractions are NOT an AI tell in this skill. Measured paired-corpus research shows AI rewriting strips contractions (the most one-sided change in the corpus), so in editorial prose their absence is a coldness signal, checked under the voice criterion (13.8). Do not flag their presence.

**Reliability: MEDIUM-HIGH.** Individual words can be found-and-replaced; phrase patterns in combination are harder to eliminate.

**Era caveat (2026):** these vocabulary lists are model-generation-specific and go stale. "Delve" peaked in 2023 to mid-2024 output and largely disappeared from 2025-era models, and human writers increasingly absorb AI-associated vocabulary (word-list matches are a documented source of false positives on human text). Treat lexical matches as weak corroborators of stronger signals, never the basis of a finding on their own.

#### Structural markers

**Paragraph-level tells:**

- Uniform paragraph lengths throughout the document
- Formulaic organization: broad introduction → evenly-spaced body sections → lengthy, repetitive conclusion
- List-heavy formatting appearing mid-essay (uncommon in formal human writing)
- Every paragraph opens with a clear topic sentence

**Sentence construction patterns:**

- Monotonous sentence length clustering around similar word counts
- Heavy use of dependent clauses and compound-complex sentences
- "Perfect" grammar: no fragments, no intentional run-ons, no sentences starting with "And" or "But"
- Three-item lists at sentence ends ("X, Y, and Z" constructions)
- Negative parallelism: "not just X, but Y" and "it's not X, it's Y" constructions
- Sentence-final "-ing" significance clauses ("...highlighting its pivotal role," "...underscoring the importance of...")
- Promotional puffery ("nestled," "vibrant," "rich heritage," "stands as a testament") and vague attribution with no citation ("industry reports," "experts argue")

**Opening/closing asymmetry:**

- Conclusions are disproportionately long (often **20-30%** of total text)
- Conclusions repeat nearly all main points already covered
- Endings feature generic uplifting statements

**Reliability: MEDIUM.** Structural patterns are moderately maskable through post-editing but require significant time to fully revise.

#### Statistical and stylometric analysis

**Perplexity (how predictable the text is):**

- Low perplexity (5-10): Text aligns closely with LLM predictions, a strong AI signal
- Higher perplexity (20-50): Unexpected word choices typical of human writing
- Example: "I ordered a glass of red wine" = low perplexity; "I ordered a glass of red jelly beans" = high perplexity

**Burstiness (variation in sentence complexity):**

- Low burstiness: Uniform sentence structures and lengths (AI signature)
- High burstiness: Natural fluctuation between short, punchy sentences and longer, elaborate ones
- Human text shows "spikes" of complexity; AI text remains uniform

**Vocabulary distribution:**

- AI uses more adjectives, nouns, and adjectival modifiers
- AI uses fewer personal pronouns ("I," "we," "you")
- AI defaults to passive voice more frequently
- AI text skews positive/neutral; human writing shows wider emotional range

**Critical limitation:** Academic and technical writing naturally has lower perplexity and burstiness, causing **12% false positive rates** for non-native English speakers and scientific writing.

**Reliability: MEDIUM.** Useful as one analysis layer but produces significant false positives alone.

**Do not invent scores:** you cannot actually compute perplexity or burstiness, and any numeric value you produce for them is fabricated. Never output numeric perplexity/burstiness values or an "AI percentage." Describe the pattern qualitatively and quote the specific sentences that show it.

#### Tool-specific signatures

**ChatGPT tells:**

- Vocabulary: "delve," "tapestry," "multifaceted," "Certainly!" as acknowledgment
- Heavy use of "it's not X, it's Y" rhetorical construction
- **60-70%** of names in creative content are "Emily" or "Sarah" (documented for GPT-4o/Claude-3.5-era models; applies to narrative/example content only and weakens on newer models)
- Defaults to American English spelling
- Very organized, list-heavy output

**Claude tells:**

- More natural, human-sounding output (harder to detect)
- Better at structured, long-form content
- More measured, professional tone
- Less prone to ChatGPT's specific buzzwords
- More coherent development of ideas

**Gemini tells:**

- Similar patterns to ChatGPT with Google's training data influence
- May reference more recent information

**Reliability: MEDIUM-LOW.** Tool-specific tells vary across model versions and can be masked with simple prompts.

#### Semantic tells (hardest to fake)

**Over-explanation tendencies:**

- Provides comprehensive answers even when brevity would be appropriate
- Excessive context-setting before addressing the actual question
- Explains concepts the reader likely already understands

**Absence of genuine uncertainty:**

- Rarely says "I don't know" without being prompted
- Hedging language feels formulaic rather than genuine
- Confident tone even when information would reasonably be uncertain

**Missing personal experience:**

- No true first-person experiences (because AI has none)
- Generic examples rather than specific, idiosyncratic ones
- Lacks voice cracks, unexpected pauses, half-formed metaphors
- When forced to create details, they feel manufactured

**Excessive balance:**

- Aggregates so many perspectives it often has no clear viewpoint
- Systematic "on the other hand" presentation
- Neutral framing even on topics where stance would be natural

**Reliability: HIGH.** These tells are difficult to mask and require substantial human revision to eliminate.

#### Detection evasion and how to spot masked AI text

**Common masking techniques:**

- Humanizer tools: StealthWriter, BypassGPT, HIX Bypass, Undetectable.ai, QuillBot AI Humanizer
- Manual editing: swapping flagged words, cutting formulaic openings, adding imperfections
- Adding sentence fragments or personal anecdotes (contractions are not a masking signal in this skill; see the note under the punctuation tells)

**Signs of humanizer use:**

- Text feels "off": eloquent vocabulary but soulless content
- Ideas don't flow naturally despite correct grammar
- Abrupt shifts in style/tone where human edits begin
- Paraphrased content still shows underlying AI structural patterns

**Post-processing tells:**

- Inconsistent voice between sections
- Some sections more generic than others
- Document history (Google Docs) shows paste-then-edit patterns

#### Additional scoring discipline

**Do not assign a strong AI-generated-content conclusion from one tell alone.** Use clustered evidence across multiple categories.

**Use this likelihood scale:**

- `LOW AI LIKELIHOOD` - weak or isolated signals only
- `MEDIUM AI LIKELIHOOD` - multiple suspicious signals, but plausible human explanations remain
- `HIGH AI LIKELIHOOD` - strong clustering across several categories with little authentic voice or grounded specificity
- `LIKELY HUMANIZED AI` - content appears machine-generated and then paraphrased or lightly edited to evade detection
- `INCONCLUSIVE` - mixed evidence or insufficient text volume

**Weight the signals like this:**

- **High-value signals**: semantic emptiness, lack of grounded experience, sitewide repetition, humanized-AI artifacts
- **Medium-value signals**: structural uniformity, repeated phrase shapes, suspiciously even rhythm
- **Low-value signals**: one buzzword, one punctuation habit, one polished paragraph, one detector score

**Be especially careful with false positives in:**

- technical writing
- academic writing
- highly edited writing
- non-native-English writing
- legal/compliance copy

If those categories are present, explicitly lower confidence unless multiple strong signals cluster together.

#### Required AI-detection finding format

**For each meaningful AI-detection issue, add:**

```text
AI SIGNAL: "[exact excerpt]"
FILE: [exact file path]
SIGNAL TYPE: [Lexical | Structural | Semantic | Authorship | Cross-page | Humanized]
LIKELIHOOD: [LOW AI LIKELIHOOD | MEDIUM AI LIKELIHOOD | HIGH AI LIKELIHOOD | LIKELY HUMANIZED AI | INCONCLUSIVE]
WHY FLAGGED: [Explain the cluster of signals, not just one word]
FALSE-POSITIVE RISK: [Low | Medium | High]
RECOMMENDATION: [Review manually | Rewrite with stronger voice | Add concrete specifics/examples | Compare against brand voice | Leave as-is]
```

#### What makes text *feel* AI-generated even when no single sentence looks obviously fake

**Look for these higher-value patterns:**

- **Generic specificity:** the writing uses concrete-looking nouns, examples, or named concepts, but they do not meaningfully constrain the claim or reveal real-world experience
- **Adjacent specificity:** details sit near the point being made without actually proving it, sharpening it, or exposing tradeoffs
- **Outline-first prose:** the piece feels generated from a clean internal outline, where each paragraph performs a predictable role and nothing breaks the scaffold
- **Over-smoothed reasoning:** transitions are too frictionless, objections are too neatly absorbed, and the prose avoids the messy jumps or selective emphasis common in strong human writing
- **Synthetic comprehensiveness:** the copy tries to cover every angle, audience, or objection, producing a "complete" answer that feels bloodless
- **Safe conviction:** the piece sounds confident, but the confidence comes from polished phrasing rather than falsifiable specifics, constraints, or clear stakes
- **Detached universality:** claims are written as if they apply everywhere, with weak local context, weak operational detail, and few signs of lived familiarity

Treat these as especially suspicious when several appear together across multiple paragraphs.

#### Stronger semantic checks

**In addition to lexical and structural cues, check for:**

- **Weak causal chains:** the text states that one thing leads to another, but the mechanism is thin, generic, or interchangeable
- **Fake depth:** the writing sounds insightful on first read, but on closer inspection it mostly restates common knowledge in polished language
- **Template thinking:** ideas are packaged in reusable containers such as "X matters because Y and Z," "not only X but also Y," or repeated three-part framing throughout unrelated sections
- **Low decision pressure:** the copy avoids hard tradeoffs, strong exclusions, operational constraints, or specifics that would reveal a real point of view
- **Missing situated examples:** examples are plausible but generic, with little sense of place, sequence, consequence, or business reality
- **Authority without texture:** the text adopts an expert tone without the rough edges of actual expertise such as edge cases, exceptions, failure modes, or domain-specific caveats

#### Cross-page and sitewide AI-pattern checks

**Do not judge section 10 only at the paragraph level.** Compare multiple pages for repeating AI-like packaging.

**Check for:**

- repeated intro shapes across unrelated pages
- repeated section ordering or paragraph choreography
- repeated transition phrases and hedging patterns
- repeated CTA scaffolds and conclusion shapes
- repeated punctuation habits, sentence-length rhythms, or list cadence
- repeated claim-packaging templates where different topics are expressed through the same rhetorical mold
- repeated "balanced explainer" voice even when the page purpose should vary significantly

If these patterns recur sitewide, increase confidence more than you would from one isolated page.

#### Mixed authorship and humanized-AI checks

**Assume some content may be partly AI-generated and then revised by a human.**

**Look for:**

- abrupt jumps between generic and genuinely insightful sections
- strong changes in sentence rhythm, specificity, or confidence from one paragraph to the next
- passages where wording changed but the underlying outline skeleton stayed the same
- synonym-heavy rewriting that preserves the same claim order, transition logic, and evidence cadence
- "humanized" text that removes obvious buzzwords but still feels structurally synthetic

When this happens, prefer a span-level judgment over a binary page-level verdict.

It is acceptable to say that only part of the page appears AI-generated or humanized.

#### Signals that should lower AI-confidence

**Lower confidence when the writing shows:**

- falsifiable specifics that could easily be wrong if fabricated
- real constraints, tradeoffs, or opportunity costs
- authentic unevenness rather than uniform polish
- naturally embedded domain knowledge, edge cases, or exception handling
- details that reflect workflow, sequence, or operational reality rather than generic explanation
- a stable but distinctive voice that feels idiosyncratic rather than averaged
- clear revision/process evidence such as draft history, comments, metadata, or visible iteration

Do not over-flag polished writing just because it is clean, grammatical, or concise.

#### Escalation threshold for strong AI conclusions

**Before assigning `HIGH AI LIKELIHOOD` or `LIKELY HUMANIZED AI`, require a strong cluster such as:**

- multiple semantic signals
- one or more cross-page repetition patterns
- one or more mixed-authorship or post-processing signals
- weak grounded specificity or weak real-world texture
- supporting detector output or process evidence, if available

If you mostly have vocabulary tells, sentence smoothness, or one detector score, do not escalate beyond `MEDIUM AI LIKELIHOOD`.

---

## OUTPUT STRUCTURE

Provide your audit in this format:

### COVERAGE REPORT

Scope: the run's draft set. The existing-site corpus in `{{CONTENT_ROOT}}`, when supplied, is scanned for duplication and internal links; it is not audited page by page.

- Total files discovered: [#]
- Total files audited: [#]
- Total files with no substantive content: [#]
- Confirm every file in scope was audited: [Yes/No]
- Confirm required subagents were used: [Yes/No, or fresh-context passes where no subagents exist]
- List any check or role skipped, and why: [none, or the list]

### SUBAGENT COVERAGE

- Inventory/Coverage subagent: [scope handled]
- Factual/Statistical/Source subagent: [scope handled]
- Duplication/Consistency subagent: [scope handled]
- AI-detection subagent: [scope handled]
- Additional page-group subagents used: [list if any]

Then list every file briefly:

- [file path] - [AUDITED | NO SUBSTANTIVE CONTENT TO AUDIT] - [each guideline 1-13 marked with ✓ or its issue count]

A missing guideline mark means that check was skipped for that file. Do not promise coverage; show it row by row (models reliably agree to full coverage and then skip items; only visible per-item output prevents this).

### AUDIT SUMMARY

- Total issues found: [#]
- Critical issues (must fix): [#]
- Major issues (should fix): [#]
- Minor issues (consider fixing): [#]
- AI-likelihood issues found: [#]
- Scorecard summary: the eight Section 13 criterion scores, each out of 10

### CRITICAL ISSUES

[Issues that damage credibility or could cause legal/compliance problems]

### MAJOR ISSUES

[Outdated stats, unverified claims, broken sources]

### MINOR ISSUES

[Style improvements, slight inaccuracies, aging content]

### DUPLICATION MAP

[Show duplicated content across pages with file pairs/groups and duplication type]

### AI-GENERATION FLAGS

[List all Medium / High / Likely Humanized AI findings using the required AI-detection format]

### COVERAGE GAPS

[List any audit requirement, page, claim, or verification step that could not be completed confidently. Do not silently omit gaps.]

### SOURCE LOG

[For major findings, list the core sources used with title, URL, date, and what claim each source supported]

### VERIFICATION CHECKLIST

[List of specific items that need human verification with sources to check]

### RECOMMENDED ACTIONS

[Findings fixed in this pass, findings deferred and why, and the effort for each deferred item: Quick fix / Moderate / Research required]

### FIX AND VERIFY RESULTS

[Per finding: closed and verified, or still open with the reason. End with the PASS or BLOCKED verdict line.]

## ADDITIONAL CONTEXT (Optional)

In a skill run, any value already in the intake answers wins over a value
repeated here; this block is for standalone use.

- Content created or last updated date: [If known]
- Target audience: [If known]
- Content purpose: [Thought leadership / Lead gen / SEO / etc.]
- Industry vertical: [If specific]

---

## FINAL CHECK (confirm each before submitting)

Sections 11 to 13 appear below; read them before running this check.

1. Every file is listed with all 13 guideline areas marked.
2. Every finding shows the exact excerpt and evidence before its verdict and severity.
3. Nothing believed-from-memory is marked VERIFIED.
4. Every Critical/Major finding survived a verifier that saw only the excerpt and evidence (or a recorded fresh-context check where no subagents exist).
5. No invented perplexity/burstiness numbers or AI-percentage scores; no AI finding rests on a lone vocabulary tell.
6. All coverage gaps are listed, not hidden.
7. The density floor holds: at least 1,200 words of article body, with the
   substance to justify every one of them.
8. The citation floor holds: at least two distinct, openable sources in the
   Sources section.


---

### 11. POLICY COMPLIANCE (quality rater guidelines, helpful content, spam policies)

Audit the page against the search quality and spam frameworks in addition
to the accuracy, sourcing, and detection work above. The priority questions are
whether the page serves a real reader job, and whether the site shows a
scaled-content pattern.

**Voice and scope.** Audit the page as a quality rater would, and audit its
relationship to the rest of the site as a spam-policy auditor would. The rater
question is "would a person find this page genuinely helpful for its stated
purpose". The policy question is "does this page, or the sitewide pattern it
belongs to, match a named spam policy".

#### 11.1 Search Quality Rater Guidelines

- **Page purpose and reader job.** State the purpose in one sentence, the reader
  it serves, and the decision it changes. If that cannot be stated, record it as
  a finding.
- **Main content quality.** Is there substantial original main content that
  answers the query without a second search, or a thin summary of pages that
  already rank?
- **Who, how, and why.** Who made the page, how, and why, stated in the page's own sourcing. For topics that affect money, safety, health, or legality, the page must trace every claim to a source the reader can open. Flag claims whose support cannot be traced.
- **Experience, expertise, authoritativeness, trust.** Identify which of the
  four is load-bearing for this topic and whether the page supplies it.
- **Topic scope fit.** Does the page stay inside a lane this business can
  credibly cover?
- **Quality tier judgment.** Give a rater-style assessment (lowest, low, medium,
  high, highest) justified with the evidence above, not with tone or polish.
- **Sensitivity.** State the harm a reader could suffer from a wrong answer, and
  whether sourcing and review match that harm.
- **Guideline vintage.** State which edition of the guidelines you applied. If
  you cannot open the current edition, say so, use the best available secondary
  coverage, and label it. Do not assert section-level quoting you did not read.

#### 11.2 Helpful content guidance

- **People-first test.** Would the page still be worth making if search
  engines did not exist? If no, record a finding.
- **Search-engine-first signals.** Query variants stacked on one page, sections
  written to match search phrasing rather than to answer a question, and content
  that ends without resolving the reader's decision.
- **Originality of value.** State what the page adds that is not already
  available: a first-party datum, named operational experience, a primary-source
  synthesis, or a new comparison. "More complete" is not a finding of value.
- **Sitewide pattern.** Whether the page's outline, section order, opening
  shape, or closing shape repeats across the site. Repetition across
  unrelated topics is a scaled-content signal even when each page is accurate.

#### 11.3 Spam policies

Test the page and the sitewide pattern against each policy, and record a finding
only where evidence supports it:

- **Scaled content abuse.** Pages produced at scale that add little value,
  whether by automation, humans, or a mix. Look for near-identical pages that
  differ by a swapped noun, location, or outline order. Current search guidance
  draws the line at editorial oversight, not at authorship: the named spam
  pattern is volume published without a human editorial decision per page. The
  editor pass (Step 4) is where that judgment happens in this skill; this
  audit confirms it happened and that the batch does not share one scaffold.
  Sites hit by the 2026 core and spam updates lost traffic on exactly the
  unedited, mass-produced pattern.
- **Site reputation abuse.** Content placed on the site to exploit its
  authority rather than its expertise.
- **Doorway pages.** Pages that funnel readers to a destination without adding
  value of their own.
- **Thin affiliation.** Pages that exist mainly to carry a commercial link.
- **Keyword stuffing and hidden text.** Query variants, hidden text, or text
  that exists only for crawlers.
- **Cloaking and redirect abuse.** Different content served to crawlers than to
  readers, or redirect chains that misrepresent the destination.
- **Freshness claims.** Dates or "last updated" markers that do not reflect
  substantive change.

For every finding, follow the same discipline as the rest of the audit: exact
excerpt, exact file path, evidence before verdict, and a severity. Distinguish a
policy breach from a quality weakness. Do not label weak but legitimate content
as spam.

#### 11.4 Required output for this section

```text
PAGE PURPOSE: [one sentence]
RATER TIER: [lowest | low | medium | high | highest] - [justification]
PEOPLE-FIRST: [pass | fail] - [reason]
WHO/HOW/WHY: [complete | gaps: list]
POLICY FINDINGS: [one row per finding: policy name, exact excerpt, file path, severity, evidence]
SITEWIDE PATTERN: [repeated outline or structure across pages, with file pairs]
UNVERIFIED POLICY ASSERTIONS: [anything not confirmed against a source you opened]
```

#### 11.5 What makes this section different from Sections 1 to 10

- Accuracy is not helpfulness. A factually correct page can still fail the
  purpose and people-first tests, and this section must be willing to say so.
- A page can be individually clean and still be part of a scaled pattern. Always
  check the page against its siblings.
- Rater language and spam language are different tests. Record the quality
  judgment and the policy judgment separately.
- Never present a policy assertion as fact unless you opened the policy text.
  If you only have secondary coverage, say so in `UNVERIFIED POLICY ASSERTIONS`.

#### 11.6 Module checklist

- [ ] Page purpose stated in one sentence, reader job named.
- [ ] Main content assessed for originality against the existing corpus.
- [ ] Who, how, and why documented; claims trace to named sources.
- [ ] Rater-style tier assigned with evidence, not tone.
- [ ] People-first test answered honestly, including a fail where it is a fail.
- [ ] Each named spam policy tested with evidence, or marked not applicable.
- [ ] Sitewide pattern checked against sibling pages.
- [ ] Guideline edition stated; unread policy text labeled unverified.
- [ ] Findings use the evidence-before-verdict format of Sections 1 to 10.


---

### 12. CURRENT AI-GENERATION TELLS (patterns beyond Section 10)

Section 10 covers the classic detection work. Generation has moved on: current
models avoid the old vocabulary tells, and current detectors are no more
reliable than they were. This module adds the patterns that show up in
AI-assisted travel content now. Every one of them is a signal to investigate,
never a standalone verdict: humans write these too, and a finding requires the
same excerpt-plus-evidence discipline as the rest of the audit.

#### 12.1 Phrasing-level tells

Section 10 already covers negative parallelism and three-item lists; the items
below add the current generation's phrasing patterns.

- **Negative parallelism at density.** "It is not just X, it is Y" and "not
  only X but also Y" constructions repeating across sections. One is style;
  five per page is a generation pattern.
- **Rule-of-three stacking.** Triads everywhere: three adjectives, three
  examples, three-part sentences, in page after page. Real operators
  enumerate what exists, not what fits a rhythm.
- **Rhetorical scaffolding.** Headings phrased as questions the page then
  answers, "let's break it down" narration, and "here is the thing" pivots.
- **Fake balance.** "Some travellers say X, others say Y" with neither
  position sourced. Genuine disagreement cites both sides; generated balance
  cites neither.
- **Over-hedged specifics.** Precise on generalities, vague exactly where a
  real operator would be specific: "fees are typically in the range of" where
  a practitioner would name the current figure.

#### 12.2 Structure-level tells

- **Uniform block lengths.** Every section the same length, every paragraph
  the same sentence count, every page in the batch the same outline. Human
  writing is uneven because the material is uneven.
- **Boilerplate advice blocks.** "Pro tips" or "insider secrets" sections
  containing only advice that applies to any destination or document.
- **FAQ padding.** Question blocks built for rich results, answering questions
  no reader asks, restating the page body in question form.
- **Restating conclusions.** A final section that summarizes the page without
  adding a decision, a next step, or a caveat.
- **Engagement-bait closers.** Emoji-led bullets, "ready to start your
  journey" calls to action, and comment-bait questions on a reference page.

#### 12.3 Evidence-level tells

These are the dangerous ones, because they imitate credibility:

- **Invented first-person experience.** "When I renewed mine last spring"
  anecdotes from a generator with no travel history. An experience claim that
  nobody can stand behind is worse than no experience claim.
- **Fabricated experts.** Quoted specialists with generic names, no
  affiliation, and no findable body of work.
- **Plausible statistics.** Round numbers presented with false confidence, or
  false precision ("exactly 37.4 percent") with no source, no date, and no
  denominator.
- **Authority name-dropping.** References to "official guidelines" or
  "government sources" without the named document, the section, or the link.
- **Citation theater.** Links that point to homepages or listicles rather than
  the specific page that supports the claim.

#### 12.4 Freshness and experience theater

- **Date stamps without substance.** "As of [current month]" markers where
  nothing on the page reflects a recent check.
- **Recency mimicry.** Vague gestures at change ("rules have shifted lately")
  with no dated event, included because the topic is time-sensitive.
- **Synthetic specificity.** Detail that looks constraining but verifies
  nothing: invented office names, plausible queue times, precise-sounding
  prices that match no source.

#### 12.5 Verdict discipline for this module

- A tell raises suspicion; evidence convicts. Pair every suspected tell with
  the sourcing test it implies: open the cited source, check the named person
  exists, verify the figure against its claimed origin.
- Never convert a style tell directly into an AI-generation flag. The flag
  requires evidence the claim is unsupported, unverifiable, or fabricated,
  not merely fluently written.
- Score the page, not the paragraph: isolated tells in otherwise
  well-sourced pages are Minor at most. Clusters of evidence-level tells are
  Major. Fabricated experience or expert claims are Critical.
- Record what would settle the question when it cannot be settled from the
  content alone (check the CMS history, request the source, trace who produced the page).

#### 12.6 Module checklist

- [ ] Each suspected tell quoted exactly, with file path and section.
- [ ] Every evidence-level tell tested against its claimed source, not just
      noted.
- [ ] Experience and expert claims checked for a nameable, standable owner.
- [ ] Severity assigned per the scale in 12.5, with justification.
- [ ] Unsettleable questions recorded with what would settle them.
- [ ] No AI-generation verdict rests on style alone.


---

### 13. QUALITY SCORECARD

Score the page 1 to 10 on each criterion, with the reasoning recorded in two
to four sentences before the number. A score below 6 on any criterion produces
a finding at Major severity. For pages that touch legality, money, safety, or
health, a score below 7 on citation quality is a Critical finding.

#### 13.1 Purpose and intent
Helpful-first or search-first. A page created primarily to attract search
traffic fails here regardless of polish. Evidence: the reader job is named
and answered, the title promises what the page delivers, and no section
exists only to catch a query.

#### 13.2 Accountability and sourcing
Is the page accountable for what it states? Check that its claims trace to
sources a reader can open and that the sourcing is stated, not implied. A page
on a legality, money, safety, or health topic whose claims cannot be traced is
a Critical finding.

#### 13.3 Citation quality
Do the specific factual claims carry substantiation, and is it primary
(statutes, authorities, official schedules) or secondhand? Claims resting on
low-quality or absent support get flagged with the claim quoted.

#### 13.4 Effort and replicability
How hard would this page be to replicate? Original data, direct testing,
primary-source synthesis, and transparent method score high. A page a
competitor could produce in an hour scores low and fails the skill's core
principle.

#### 13.5 Originality
Does the page add new information, a unique angle, or a unique synthesis, or
does it rephrase what already ranks? Rephrased content with no addition is a
finding regardless of writing quality.

#### 13.6 Reader value density
Identify the reader's pain point and whether the page resolves it. Flag
sections that could be cut without loss, generic advice that fits any
destination, and padding. Every section must earn its place. Confirm the
density floor: at least 1,200 words of article body, with the substance to
justify every one of them. Below the floor is a Major finding; filler above
it is a finding too. After the editor pass, every section must still carry at
least one specific fact; a section stripped by a cut is a finding against the
editor record.

#### 13.7 Writing quality
Lexical variety; procedures inside the STE sentence limits (maximum 20 words in
an instruction and 25 in a description); editorial prose in plain English per
the register split, with contractions and varied sentence lengths; active
voice; limited hedge adverbs. Note specific passages, not impressions.

#### 13.8 Voice and humanity
Is there a person on the page? Check the editor pass's voice floor: contractions
present, the reader addressed as "you", sentence openers varied where natural
(repeated openers are a human trait, so do not penalize them), and paragraph
lengths uneven. A failed floor item forces this criterion below 6 and is a Major
finding. The batch-voice judgment (the same voice across pages rather than each
page taking its rhythm from its topic) sits with the duplication/consistency
pass, which sees all drafts; a batch that sounds like several writers is a
Major finding there. Contraction stuffing over cold prose is still a finding:
the floor asks for a voice, not a quota.

Report the eight scores with their reasoning in the audit's summary section.

---

## FIX PHASE

Apply corrections to `drafts/<slug>.md` for every Critical and Major finding, and
for Minor findings where the fix is clear and cheap. Record every fix in
`audit/<slug>.md` under `## Fix`, one entry per finding:

- the finding it closes, identified by its exact excerpt,
- the exact before and after text,
- why the change is correct, and the ledger row or source it rests on.

Rules for the fix phase:

- Never invent a fact, a number, a date, or a source to close a finding. If a fix
  needs evidence the run does not have, leave the finding open and record what is
  missing; it stays a blocker.
- Fixes preserve the page's reader job, structure, and voice. A fix corrects the
  claim or the wording; it does not rewrite the page.
- Replace every em dash character and every em dash entity.
- After the fixes, rebuild `ALL_ARTICLES.html` from the fixed drafts.

## VERIFY PHASE

Re-check the fixed draft against every finding, using the same evidence standard
as the audit. Record the result under `## Verify`, one entry per finding: closed,
or still open with the reason. Re-check the density and citation floors after
the fixes: a fix that cuts a claim can drop the word count or remove a source.
Then set the verdict line:

- PASS when no Critical or Major finding remains open after the fixes and the
  verification.
- BLOCKED when any does, listing each blocker.

Mark a finding closed only when the corrected claim now survives the check that
failed it, never because a sentence changed. Adversarially re-verify every
Critical and Major fix with a second subagent that sees only the fixed excerpt and
the evidence, not the fixer's reasoning (fresh context where no subagents exist).

---

## Checkpoint 2

This is the second and last checkpoint of the run. Report any BLOCKED page
first, with its blockers, then the audited, fixed, and verified content, and
stop. Ask the operator for the pages and locales, and for the name of the
person who will check each translation. The operator reads it and decides whether to translate
any of it, and into which locales. Step 6 runs only for the pages and locales
chosen here. Do not start translation on your own initiative.
