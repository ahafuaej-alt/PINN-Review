import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const checkOnly = process.argv.includes('--check');
const baseUrl = 'https://ahafuaej-alt.github.io/PINN-Review/';
const skipDirs = new Set(['.git', '.github', 'assets', 'data', 'scripts', 'node_modules', 'artifacts']);

async function walk(dir, files = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else files.push(full);
  }
  return files;
}

const all = await walk(root);
const pages = all
  .map((file) => path.relative(root, file).split(path.sep).join('/'))
  .filter((file) => file === 'index.html' || file.endsWith('/index.html'))
  .map((file) => file === 'index.html' ? '' : file.replace(/index\.html$/, ''))
  .sort((a, b) => a.localeCompare(b));

if (!pages.length || pages[0] !== '') throw new Error('Public homepage was not discovered while building sitemap.');
if (new Set(pages).size !== pages.length) throw new Error('Duplicate public route discovered while building sitemap.');

const escapeXml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
}[character]));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((route) => `  <url><loc>${escapeXml(`${baseUrl}${route}`)}</loc></url>`).join('\n')}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}sitemap.xml\n`;

async function writeOrCheck(relativePath, content) {
  const target = path.join(root, relativePath);
  if (checkOnly) {
    let existing;
    try { existing = await fs.readFile(target, 'utf8'); }
    catch { throw new Error(`${relativePath} is missing. Run node scripts/build-site-index.mjs.`); }
    if (existing !== content) throw new Error(`${relativePath} is stale. Run node scripts/build-site-index.mjs and commit the result.`);
  } else {
    await fs.writeFile(target, content);
  }
}

await writeOrCheck('sitemap.xml', sitemap);
await writeOrCheck('robots.txt', robots);
console.log(`${checkOnly ? 'Validated' : 'Generated'} sitemap for ${pages.length} public Atlas pages.`);
