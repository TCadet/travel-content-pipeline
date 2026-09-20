import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const checker = path.join(here, "verify-run.mjs");
const root = fs.mkdtempSync(path.join(os.tmpdir(), "verify-run-tests-"));

const bodyWords = (n) =>
  Array.from({ length: Math.ceil(n / 8) }, () => "gate fee rule date cost step fine delay queue stamp slot").join(" ")
    .split(/\s+/).slice(0, n).join(" ");

function writeRun(dir, opts) {
  const { bodyWords: words = 1300, citations = 2, publishable = "false", reviewer = "Dana Reviewer" } = opts;
  fs.mkdirSync(path.join(dir, "drafts"), { recursive: true });
  fs.mkdirSync(path.join(dir, "audit"), { recursive: true });
  fs.writeFileSync(path.join(dir, "research.md"), "# Research\n\n| C-101 | sample rule | C-102 | sample fee |\n");
  fs.writeFileSync(path.join(dir, "idea-slate.md"), "# Idea slate\n\n| IDEA-1 | dense | KEEP |\n");
  const links = [];
  for (let i = 0; i < citations; i++) links.push(`- [Source ${i + 1}](https://authority-${i + 1}.test/document)`);
  const draft = [
    "---",
    "title: Dense draft",
    "meta_title: Dense draft",
    "meta_description: A dense draft fixture with enough words and citations.",
    "slug: dense",
    "primary_query: dense draft",
    "secondary_queries: []",
    "intent: informational",
    "cluster: Sample cluster (hub)",
    "author: Alex Author",
    "author_credentials: ten years at the desk",
    "review_required: true",
    `reviewer: ${reviewer}`,
    "reviewer_credentials: licensed practitioner",
    "markets: []",
    "locales: []",
    "ledger_rows: [C-101, C-102]",
    "internal_links: []",
    "media:",
    "  - asset: diagram",
    "    alt: A diagram of the procedure",
    "schema_types: [Article]",
    `publishable: ${publishable}`,
    "---",
    "",
    "## The decision",
    "",
    bodyWords(words),
    "",
    "## Sources",
    "",
    links.join("\n"),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(dir, "drafts", "dense.md"), draft);
  fs.writeFileSync(path.join(dir, "audit", "dense.md"), "## Audit\n\nno issues\n\n## Fix\n\nnone needed\n\n## Verify\n\nPASS\n");
  fs.writeFileSync(path.join(dir, "ALL_ARTICLES.html"), '<section id="dense"></section>');
}

const cases = [
  { name: "valid", opts: {}, expectExit: 0, expectText: "run verification passed" },
  { name: "shortBody", opts: { bodyWords: 300 }, expectExit: 1, expectText: "R8" },
  { name: "thinCitations", opts: { citations: 1 }, expectExit: 1, expectText: "R9" },
  { name: "publishPending", opts: { publishable: "true", reviewer: "PENDING" }, expectExit: 1, expectText: "R10" },
];

let failed = 0;
for (const c of cases) {
  const dir = path.join(root, c.name);
  writeRun(dir, c.opts);
  const r = spawnSync(process.execPath, [checker, dir], { encoding: "utf8" });
  const out = (r.stdout || "") + (r.stderr || "");
  const exitOk = (c.expectExit === 0 ? r.status === 0 : r.status === c.expectExit);
  const textOk = out.includes(c.expectText);
  const pass = exitOk && textOk;
  console.log(`CASE ${c.name}: ${pass ? "PASS" : "FAIL"} (exit ${r.status}, expect ${c.expectExit}${textOk ? "" : ", missing text: " + c.expectText})`);
  if (!pass) {
    console.log("  stdout: " + (r.stdout || "").trim().replace(/\n/g, " | "));
    console.log("  stderr: " + (r.stderr || "").trim().replace(/\n/g, " | "));
    failed++;
  }
}

fs.rmSync(root, { recursive: true, force: true });
console.log(failed === 0 ? `SELF-TESTS GREEN (${cases.length}/${cases.length})` : `SELF-TESTS RED (${cases.length - failed}/${cases.length})`);
process.exit(failed === 0 ? 0 : 1);
