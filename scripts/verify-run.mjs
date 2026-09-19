import fs from "node:fs";
import path from "node:path";

const runDir = process.argv[2];
const fails = [];
const notes = [];
const ok = (m) => notes.push(`  ok  ${m}`);
const bad = (g, m) => fails.push(`FAIL  ${g}: ${m}`);

if (!runDir || !fs.existsSync(runDir) || !fs.statSync(runDir).isDirectory()) {
  console.error("usage: node scripts/verify-run.mjs <run-directory>");
  process.exit(2);
}

const read = (p) => fs.readFileSync(p, "utf8");
const AMP = String.fromCharCode(38);
const EM_DASH = new RegExp(`\\u2014|${AMP}mdash;|${AMP}#8212;|${AMP}#x2014;`, "gi");
const listMd = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => path.join(dir, f))
    : [];

function frontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

function fmValue(block, key) {
  const m = block.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
  return m ? m[1].trim() : null;
}

// R1: core artifacts exist when drafting happened.
const draftsDir = path.join(runDir, "drafts");
const drafts = listMd(draftsDir);
if (drafts.length && !fs.existsSync(path.join(runDir, "research.md"))) {
  bad("R1", "drafts exist but research.md is missing");
}
if (drafts.length && !fs.existsSync(path.join(runDir, "idea-slate.md"))) {
  bad("R1", "drafts exist but idea-slate.md is missing");
}
if (!fails.some((f) => f.startsWith("FAIL  R1"))) ok(`R1 core artifacts consistent (${drafts.length} drafts)`);

// R2: every draft has complete front matter, and the reviewer rule holds.
const requiredKeys = ["title", "meta_title", "meta_description", "slug", "primary_query", "author", "author_credentials", "review_required", "reviewer", "cluster", "intent", "ledger_rows"];
const presentKeys = ["secondary_queries", "markets", "locales", "internal_links", "media", "schema_types"];
const draftInfo = new Map();
for (const file of drafts) {
  const slug = path.basename(file, ".md");
  const fm = frontMatter(read(file));
  if (!fm) {
    bad("R2", `${slug}: no front matter block`);
    draftInfo.set(slug, []);
    continue;
  }
  const fmSlug = fmValue(fm, "slug");
  if (fmSlug !== null && fmSlug !== slug) bad("R2", `${slug}: front matter slug "${fmSlug}" does not match filename`);
  for (const key of requiredKeys) {
    const v = fmValue(fm, key);
    if (v === null || v === "" || v === "[]") bad("R2", `${slug}: front matter missing or empty "${key}"`);
  }
  for (const key of presentKeys) {
    if (fmValue(fm, key) === null) bad("R2", `${slug}: front matter missing "${key}"`);
  }
  if ((fmValue(fm, "review_required") || "").toLowerCase() === "true") {
    const rv = fmValue(fm, "reviewer");
    if (!rv || rv.toLowerCase() === "none") bad("R2", `${slug}: review_required is true but no named reviewer`);
    const rc = fmValue(fm, "reviewer_credentials");
    if (!rc || rc.toLowerCase() === "none") bad("R2", `${slug}: review_required is true but reviewer_credentials is empty`);
  }
  const rowsMatch = fm.match(/^ledger_rows:\s*\[([^\]]*)\]/m);
  const rows = rowsMatch ? rowsMatch[1].split(",").map((s) => s.trim()).filter(Boolean) : [];
  const rawRows = fmValue(fm, "ledger_rows");
  if (rawRows && rawRows !== "[]" && rows.length === 0) bad("R2", `${slug}: ledger_rows is "${rawRows}" but parses to zero rows`);
  draftInfo.set(slug, rows);
}
if (!fails.some((f) => f.startsWith("FAIL  R2"))) ok("R2 all drafts carry complete front matter");

// R3: every cited ledger row resolves against the run's evidence.
const researchFile = path.join(runDir, "research.md");
const corpus = fs.existsSync(researchFile) ? read(researchFile) : "";
if (corpus) {
  for (const [slug, rows] of draftInfo) {
    for (const row of rows) {
      const escaped = row.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`(^|[^A-Za-z0-9-])${escaped}([^A-Za-z0-9-]|$)`).test(corpus)) bad("R3", `${slug}: ledger row "${row}" not found in run evidence`);
    }
  }
  if (!fails.some((f) => f.startsWith("FAIL  R3"))) ok("R3 every cited ledger row resolves");
} else if (drafts.length) {
  notes.push("  --  R3 research.md not found; ledger resolution skipped");
}

// R4: every draft has an audit with an explicit verdict.
const auditDir = path.join(runDir, "audit");
const verdictOf = (slug) => {
  const p = path.join(auditDir, `${slug}.md`);
  if (!fs.existsSync(p)) return null;
  const m = read(p).match(/^\s*(PASS|BLOCKED)\b/im);
  return m ? m[1].toUpperCase() : null;
};
for (const slug of draftInfo.keys()) {
  if (!fs.existsSync(path.join(auditDir, `${slug}.md`))) {
    bad("R4", `${slug}: no audit file at audit/${slug}.md`);
    continue;
  }
  if (!verdictOf(slug)) bad("R4", `${slug}: audit has no PASS or BLOCKED verdict line`);
}
if (!fails.some((f) => f.startsWith("FAIL  R4"))) ok("R4 every draft audited with a verdict");

// R5: translations never outrun a PASSING English audit, and carry a reviewer.
const translations = listMd(path.join(runDir, "translations"));
for (const file of translations) {
  const base = path.basename(file, ".md");
  const parts = base.split(".");
  const locale = parts.length > 1 ? parts[parts.length - 1] : "";
  const slug = parts.slice(0, -1).join(".");
  if (!draftInfo.has(slug)) {
    bad("R5", `${base}: no English draft for this translation`);
    continue;
  }
  if (!fs.existsSync(path.join(auditDir, `${slug}.md`))) {
    bad("R5", `${base}: translated without an English audit`);
    continue;
  }
  if (verdictOf(slug) !== "PASS") {
    bad("R5", `${base}: English audit is not PASS`);
    continue;
  }
  const fm = frontMatter(read(file));
  if (!fm) {
    bad("R5", `${base}: no front matter block`);
    continue;
  }
  for (const key of ["source_page", "locale", "translator", "status"]) {
    const v = fmValue(fm, key);
    if (!v || v === "[]") bad("R5", `${base}: front matter missing or empty "${key}"`);
  }
  const fmLocale = fmValue(fm, "locale");
  if (fmLocale && locale && fmLocale !== locale) bad("R5", `${base}: filename locale "${locale}" does not match front matter locale "${fmLocale}"`);
  const status = fmValue(fm, "status");
  const reviewer = fmValue(fm, "native_reviewer");
  if (status && !["draft", "reviewed"].includes(status)) bad("R5", `${base}: status must be draft or reviewed`);
  if (status === "reviewed" && (!reviewer || reviewer === "[]")) bad("R5", `${base}: marked reviewed with no named native_reviewer`);
}
if (!fails.some((f) => f.startsWith("FAIL  R5"))) ok(`R5 translations gated and reviewed (${translations.length} files)`);

// R6: no em dash glyph or entity in any run artifact.
for (const dir of ["", "drafts", "audit", "translations"]) {
  for (const file of listMd(path.join(runDir, dir))) {
    const n = (read(file).match(EM_DASH) || []).length;
    if (n) bad("R6", `${path.relative(runDir, file)} contains ${n} em dash glyph(s)`);
  }
}
const allArticlesHtml = path.join(runDir, "ALL_ARTICLES.html");
if (drafts.length && fs.existsSync(allArticlesHtml)) {
  const n = (read(allArticlesHtml).match(EM_DASH) || []).length;
  if (n) bad("R6", `ALL_ARTICLES.html contains ${n} em dash glyph(s)`);
}
if (!fails.some((f) => f.startsWith("FAIL  R6"))) ok("R6 no em dash glyphs in run artifacts");

// R7: ALL_ARTICLES.html exists when drafts do, and covers every draft.
const allArticles = path.join(runDir, "ALL_ARTICLES.html");
if (drafts.length) {
  if (!fs.existsSync(allArticles)) {
    bad("R7", "drafts exist but ALL_ARTICLES.html is missing");
  } else {
    const html = read(allArticles);
    for (const slug of draftInfo.keys()) {
      if (!html.includes(`id="${slug}"`) && !html.includes(`id='${slug}'`)) bad("R7", `ALL_ARTICLES.html has no section for draft "${slug}"`);
    }
  }
}
if (!fails.some((f) => f.startsWith("FAIL  R7"))) ok("R7 ALL_ARTICLES.html covers every draft");

for (const n of notes) console.log(n);
if (fails.length) {
  for (const f of fails) console.error(f);
  process.exit(1);
}
console.log("run verification passed");
