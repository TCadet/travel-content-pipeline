import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const skillDir = path.resolve(here, "..");
const skillName = path.basename(skillDir);
const home = os.homedir();

const fails = [];
const notes = [];
const ok = (m) => notes.push(`  ok  ${m}`);
const bad = (g, m) => fails.push(`FAIL  ${g}: ${m}`);
const read = (p) => fs.readFileSync(p, "utf8");

function walk(dir, base = dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))) {
    if (["context.md", "runs", ".git", "node_modules"].includes(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, base));
    else out.push({ rel: path.relative(base, p).split(path.sep).join("/"), abs: p });
  }
  return out;
}

const requiredFiles = [
  "SKILL.md", "README.md", "LICENSE", "context.example.md",
  "references/01_master_research_prompt.md",
  "references/02_content_idea_generation_prompt.md",
  "references/03_content_writing_prompt.md",
  "references/04_content_audit_prompt.md",
  "references/05_translation_prompt.md",
  "scripts/verify-pipeline.mjs",
  "scripts/verify-run.mjs",
];

// G1: required files.
for (const rel of requiredFiles) {
  if (!fs.existsSync(path.join(skillDir, rel))) bad("G1", `missing ${rel}`);
}
if (!fails.some((f) => f.startsWith("FAIL  G1"))) ok(`G1 ${requiredFiles.length} required files present`);

// G2: SKILL.md frontmatter is valid for Claude Code, opencode, and the agents alias.
const skillMd = read(path.join(skillDir, "SKILL.md"));
const fm = skillMd.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!fm) bad("G2", "SKILL.md has no YAML frontmatter");
else {
  const block = fm[1];
  const name = (block.match(/^name:\s*(.+)$/m) || [])[1]?.trim();
  const desc = (block.match(/^description:\s*(.+)$/m) || [])[1]?.trim();
  if (name !== skillName) bad("G2", `frontmatter name "${name}" does not match directory "${skillName}"`);
  if (!desc) bad("G2", "frontmatter has no description");
  else if (!/^Use when/.test(desc)) bad("G2", "description should start with \"Use when\"");
  if (name && name.length > 64) bad("G2", `name is ${name.length} chars, over the 64 limit`);
  if (desc && desc.length > 1024) bad("G2", `description is ${desc.length} chars, over the 1024 limit`);
  if (!fails.some((f) => f.startsWith("FAIL  G2"))) ok(`G2 frontmatter valid (desc ${desc.length} chars)`);
}

// G3: every relative file path named in the docs and the step prompts exists.
const named = new Set();
const g3Texts = [skillMd, read(path.join(skillDir, "README.md"))];
for (const f of fs.readdirSync(path.join(skillDir, "references")).filter((f) => f.endsWith(".md")).sort()) {
  g3Texts.push(read(path.join(skillDir, "references", f)));
}
for (const text of g3Texts) {
  for (const m of text.matchAll(/`([A-Za-z0-9_./-]+\.(?:md|mjs|py))`/g)) named.add(m[1].replace(/^\.\//, ""));
}
const skipGeneric = new Set(["context.md", "SKILL.md", "README.md", "LICENSE", "research.md", "idea-slate.md", "termbase.md"]);
const missingNamed = [...named].filter((r) => !skipGeneric.has(r) && !fs.existsSync(path.join(skillDir, r)));
if (missingNamed.length) bad("G3", `referenced files missing: ${missingNamed.join(", ")}`);
else ok(`G3 all ${named.size} referenced paths resolve`);

// G4: no em dash glyph or em dash entity in any package file.
const AMP = String.fromCharCode(38);
const EM_DASH = new RegExp(`\\u2014|${AMP}mdash;|${AMP}#8212;|${AMP}#x2014;`, "gi");
for (const { rel, abs } of walk(skillDir)) {
  if (!/\.(md|mjs|py|txt|json)$/.test(rel)) continue;
  const n = (read(abs).match(EM_DASH) || []).length;
  if (n) bad("G4", `${rel} contains ${n} em dash glyph(s)`);
}
if (!fails.some((f) => f.startsWith("FAIL  G4"))) ok("G4 no em dash glyphs");

// G5: the audit prompt carries its full framework plus Sections 11 and 12.
const audit = read(path.join(skillDir, "references/04_content_audit_prompt.md"));
if (audit.indexOf("### 11. POLICY COMPLIANCE") === -1) bad("G5", "policy module (Section 11) missing");
if (!audit.includes("### 12. CURRENT AI-GENERATION TELLS")) bad("G5", "current-tells module (Section 12) missing");
if (!audit.includes("### 13. QUALITY SCORECARD")) bad("G5", "quality scorecard (Section 13) missing");
for (const term of ["Search Quality Rater Guidelines", "people-first", "scaled content abuse", "site reputation abuse", "Doorway pages", "Keyword stuffing", "Cloaking"]) {
  if (!audit.toLowerCase().includes(term.toLowerCase())) bad("G5", `policy module missing "${term}"`);
}
const missingSections = [];
for (let i = 1; i <= 10; i += 1) {
  if (!audit.includes(`### ${i}.`)) missingSections.push(i);
}
if (missingSections.length) bad("G5", `framework sections missing: ${missingSections.join(", ")}`);
if (!fails.some((f) => f.startsWith("FAIL  G5"))) ok("G5 audit prompt complete: framework plus Sections 11, 12, and 13");

// G6: translation step is opt-in and gated on the English audit.
const tr = read(path.join(skillDir, "references/05_translation_prompt.md"));
for (const [label, re] of [["opt-in at Checkpoint 2", /Checkpoint 2/i], ["English audit precondition", /Precondition[\s\S]{0,200}(Critical|Major)/i], ["native review", /native reviewer/i]]) {
  if (!re.test(tr)) bad("G6", `translation prompt missing ${label}`);
}
if (!fails.some((f) => f.startsWith("FAIL  G6"))) ok("G6 translation is opt-in, gated, and human-reviewed");

// G7: the context template carries every field the prompts rely on.
const ctx = read(path.join(skillDir, "context.example.md"));
const fields = ["business_name", "niche", "sub_niche", "freshness_window", "research_scope", "primary_reader", "markets_served", "locales_served", "keywords", "data_asset", "capacity_per_cycle", "content_root", "voice", "seasonality_calendar"];
const missCtx = fields.filter((f) => !ctx.includes(f));
if (missCtx.length) bad("G7", `context template missing ${missCtx.join(", ")}`);
else ok(`G7 context template carries ${fields.length} fields`);

// G8: freshness is operator-set, with no hard-coded window in the prompts.
for (const rel of ["SKILL.md", "references/01_master_research_prompt.md", "references/02_content_idea_generation_prompt.md"]) {
  const t = read(path.join(skillDir, rel));
  if (/last (14|two) (days|weeks)|previous two weeks/i.test(t)) bad("G8", `${rel} hard-codes a freshness window`);
}
if (!/freshness_window/.test(read(path.join(skillDir, "context.example.md")))) bad("G8", "context template does not expose freshness_window");
if (!fails.some((f) => f.startsWith("FAIL  G8"))) ok("G8 freshness window is operator-set, no hard-coded limit");

// G9: business-agnostic and free of leak markers. The forbidden list holds
// generic markers anyone's private material would carry; add your own before
// publishing a fork. This file skips itself because it contains the patterns
// it searches for.
const forbidden = ["confidential", "internal only", "do not distribute", "not for distribution", "previous session"];
for (const { rel, abs } of walk(skillDir)) {
  if (!/\.(md|mjs|py)$/.test(rel)) continue;
  if (rel === "scripts/verify-pipeline.mjs") continue;
  const low = read(abs).toLowerCase();
  for (const t of forbidden) if (low.includes(t)) bad("G9", `${rel} contains leak marker "${t}"`);
  if (/(?<![A-Za-z])[A-Za-z]:[\\/]|\/Users\/|\/home\//.test(read(abs))) bad("G9", `${rel} contains an absolute path`);
}
if (!fails.some((f) => f.startsWith("FAIL  G9"))) ok("G9 business-agnostic, no process language or absolute paths");

// G10: installed copies are identical to this one.
const copies = [
  path.join(home, ".claude", "skills", skillName),
  path.join(home, ".config", "opencode", "skills", skillName),
  path.join(home, ".agents", "skills", skillName),
  path.join(home, ".codex", "skills", skillName),
  path.join(home, ".gemini", "skills", skillName),
];
const hash = (files) => crypto.createHash("sha256").update(files.map((f) => `${f.rel}:${crypto.createHash("sha256").update(fs.readFileSync(f.abs)).digest("hex")}`).join("\n")).digest("hex");
const mine = hash(walk(skillDir));
let compared = 0;
for (const dir of copies) {
  if (!fs.existsSync(dir)) continue;
  if (!fs.existsSync(path.join(dir, "SKILL.md"))) continue;
  if (hash(walk(dir)) !== mine) bad("G10", `installed copy differs: ${dir}`);
  else compared += 1;
}
if (!fails.some((f) => f.startsWith("FAIL  G10"))) {
  if (compared === 0) ok("G10 no installed copies present to compare");
  else ok(`G10 installed copies identical (${compared} checked)`);
}

// G11: the run stops for the operator exactly twice, after ideas and after audit,
// and no file reintroduces a numbered Gate or a third checkpoint.
const hasC1 = /Checkpoint 1, after Step 2/i.test(skillMd);
const hasC2 = /Checkpoint 2, after Step 4/i.test(skillMd);
if (!hasC1) bad("G11", "Checkpoint 1 (after Step 2) not declared in SKILL.md");
if (!hasC2) bad("G11", "Checkpoint 2 (after Step 4) not declared in SKILL.md");
for (const { rel, abs } of walk(skillDir)) {
  if (!/\.md$/.test(rel)) continue;
  const t = read(abs);
  if (/gate\s*[123]\b/i.test(t)) bad("G11", `${rel} names a numbered Gate`);
  if (/checkpoint\s*[3-9]\b/i.test(t)) bad("G11", `${rel} names a third checkpoint`);
}
if (!fails.some((f) => f.startsWith("FAIL  G11"))) ok("G11 exactly two checkpoints, no numbered Gate");

for (const n of notes) console.log(n);
if (fails.length) {
  for (const f of fails) console.error(f);
  process.exit(1);
}
console.log("pipeline verification passed");
