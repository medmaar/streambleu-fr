// Regenerates public/sitemap.xml from the routes in src/app.
// Runs automatically before `next build` (see "prebuild" in package.json).
// Excludes dynamic routes, noindex/transactional pages and any URL that is
// the source of a redirect in public/_redirects (sitemaps must list 200s only).
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { execSync } from "node:child_process";

const SITE = "https://streambleu.fr";
const APP = "src/app";
const EXCLUDE = new Set(["/commande"]);

const redirected = new Set(
  readFileSync("public/_redirects", "utf8")
    .split("\n")
    .map((l) => l.trim().split(/\s+/)[0])
    .filter((s) => s && s.startsWith("/")),
);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name === "page.tsx") out.push(p);
  }
  return out;
}

function lastmod(file) {
  try {
    const d = execSync(`git log -1 --format=%cs -- "${file}"`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    if (d) return d;
  } catch {}
  return new Date().toISOString().slice(0, 10);
}

function meta(route) {
  if (route === "/") return ["daily", "1.0"];
  if (["/abonnement-iptv", "/iptv-france", "/iptv-premium", "/meilleur-iptv-france", "/tarifs", "/essai-gratuit"].includes(route)) return ["weekly", "0.95"];
  if (["/applications-iptv", "/boitier-iptv", "/appareils-iptv", "/prix-iptv", "/comparatif-iptv", "/blog", "/liste-chaines", "/iptv-francais"].includes(route)) return ["weekly", "0.9"];
  if (/^\/(politique|conditions|avertissement|dmca)/.test(route)) return ["yearly", "0.3"];
  if (route.startsWith("/tarifs/")) return ["monthly", "0.7"];
  return ["monthly", "0.8"];
}

const routes = walk(APP)
  .map((f) => {
    const rel = relative(APP, f).split(sep).slice(0, -1);
    return { file: f, route: "/" + rel.join("/") };
  })
  .map((r) => ({ ...r, route: r.route === "/" ? "/" : r.route.replace(/\/$/, "") }))
  .filter((r) => !r.route.includes("["))
  .filter((r) => !EXCLUDE.has(r.route) && !redirected.has(r.route))
  .sort((a, b) => (a.route === "/" ? -1 : b.route === "/" ? 1 : a.route.localeCompare(b.route)));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(({ file, route }) => {
    const [freq, prio] = meta(route);
    return `  <url>\n    <loc>${SITE}${route === "/" ? "" : route}</loc>\n    <lastmod>${lastmod(file)}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`;
  }),
  "</urlset>",
  "",
].join("\n");

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${routes.length} URLs`);
