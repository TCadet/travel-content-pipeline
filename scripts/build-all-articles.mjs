import fs from "node:fs";
import path from "node:path";

const runDir = process.argv[2] || process.cwd();
const draftsDir = path.join(runDir, "drafts");
if (!fs.existsSync(draftsDir)) {
  console.error("usage: node scripts/build-all-articles.mjs <run-directory>");
  process.exit(2);
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const SAFE_URL = /^(https?:|mailto:|#|\/|\.\/|\.\.\/)/i;
const isSafeUrl = (u) => !u.startsWith("//") && SAFE_URL.test(u);

function inline(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))+)\)/g, (m, text, url) => {
      const target = url.trim();
      if (!isSafeUrl(target)) return text + " (" + target + ")";
      return '<a href="' + target.replace(/"/g, "&quot;") + '">' + text + "</a>";
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function render(md) {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  let para = [];
  const flush = () => {
    if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; }
  };
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*$/.test(line)) { flush(); i++; continue; }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      flush();
      out.push(`<h${h[1].length}>` + inline(h[2]) + `</h${h[1].length}>`);
      i++; continue;
    }
    if (/^\|/.test(line)) {
      flush();
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cellsOf = (r) => r.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
      const isSep = (r) => cellsOf(r).every((c) => /^:?-{3,}:?$/.test(c));
      out.push("<table>" + rows.filter((r) => !isSep(r)).map((r, idx) => {
        const tag = idx === 0 ? "th" : "td";
        return "<tr>" + cellsOf(r).map((c) => `<${tag}>` + inline(c) + `</${tag}>`).join("") + "</tr>";
      }).join("") + "</table>");
      continue;
    }
    const li = line.match(/^\s*[-*]\s+(.*)$/);
    if (li) {
      flush();
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^\s*[-*]\s+(.*)$/);
        if (m) { items.push(m[1]); i++; continue; }
        if (items.length && /^\s+\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !/^\|/.test(lines[i])) {
          items[items.length - 1] += " " + lines[i].trim(); i++; continue;
        }
        break;
      }
      out.push("<ul>" + items.map((t) => "<li>" + inline(t) + "</li>").join("") + "</ul>");
      continue;
    }
    const ol = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ol) {
      flush();
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^\s*\d+\.\s+(.*)$/);
        if (m) { items.push(m[1]); i++; continue; }
        if (items.length && /^\s+\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !/^\|/.test(lines[i])) {
          items[items.length - 1] += " " + lines[i].trim(); i++; continue;
        }
        break;
      }
      out.push("<ol>" + items.map((t) => "<li>" + inline(t) + "</li>").join("") + "</ol>");
      continue;
    }
    para.push(line.trim());
    i++;
  }
  flush();
  return out.join("\n");
}

const files = fs.readdirSync(draftsDir).filter((f) => /\.md$/i.test(f) && fs.statSync(path.join(draftsDir, f)).isFile()).sort();
const sections = [];
const skipped = [];
for (const f of files) {
  const raw = fs.readFileSync(path.join(draftsDir, f), "utf8").replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const titleMatch = raw.match(/^#\s+(.*)$/m);
  if (!titleMatch) { skipped.push(f); continue; }
  const title = titleMatch[1].trim();
  const slug = path.basename(f).replace(/\.md$/i, "").replace(/[^A-Za-z0-9._-]+/g, "-") || "draft";
  let content = raw.slice(raw.indexOf(titleMatch[0]) + titleMatch[0].length).trim();
  const srcMatch = content.match(/^##\s+Sources\s*$/m);
  if (srcMatch) {
    const srcStart = content.indexOf(srcMatch[0]);
    const rest = content.slice(srcStart + srcMatch[0].length);
    const nextHead = rest.search(/^#{1,4}\s/m);
    if (nextHead !== -1) content = content.slice(0, srcStart + srcMatch[0].length + nextHead).trim();
  }
  sections.push(`<section id="${slug}">\n<h1>${inline(title)}</h1>\n${render(content)}\n</section>`);
}

const html = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>All articles</title>\n<style>body{font:16px/1.6 Georgia,serif;max-width:760px;margin:2rem auto;padding:0 1rem}h1{margin-top:2.5rem}table{border-collapse:collapse}th,td{border:1px solid #999;padding:.35rem .6rem;text-align:left}</style>\n</head>\n<body>\n${sections.join("\n")}\n</body>\n</html>\n`;

fs.writeFileSync(path.join(runDir, "ALL_ARTICLES.html"), html);
if (skipped.length) {
  console.error(`Skipped drafts without an H1: ${skipped.join(", ")}`);
  process.exitCode = 1;
}
console.log(`ALL_ARTICLES.html built: ${sections.length} articles`);
