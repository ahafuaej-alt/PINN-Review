import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const rawVersion = process.argv[2] || process.env.GITHUB_SHA || 'local';
const version = String(rawVersion).replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 12) || 'local';
const skipDirs = new Set(['.git', '.github', 'node_modules', 'artifacts']);

async function walk(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else files.push(full);
  }
  return files;
}

const relative = (file) => path.relative(root, file).split(path.sep).join('/');
const isPublicHtml = (file) => file === 'index.html' || file === '404.html' || file.endsWith('/index.html');
const files = await walk(root);
const pages = files.map(relative).filter(isPublicHtml).sort();

for (const page of pages) {
  const absolute = path.join(root, page);
  let html = await fs.readFile(absolute, 'utf8');
  const pageDir = page === 'index.html' || page === '404.html' ? '.' : path.posix.dirname(page);
  const prefix = pageDir === '.' ? '' : '../'.repeat(pageDir.split('/').length);
  const themeSrc = `${prefix}assets/theme-init.js?v=${version}-ambient`;

  const themePattern = /(<script\b[^>]*src=["'])([^"']*assets\/theme-init\.js)(?:\?[^"']*)?(["'][^>]*><\/script>)/i;
  if (!themePattern.test(html)) throw new Error(`${page}: shared theme-init.js script was not found.`);
  html = html.replace(themePattern, `$1${themeSrc}$3`);

  const ambientPattern = /\s*<link\b[^>]*href=["'][^"']*assets\/ambient-motion\.css(?:\?[^"']*)?["'][^>]*>/i;
  html = html.replace(ambientPattern, '');
  const richPattern = /\s*<script\b[^>]*src=["'][^"']*assets\/ambient-rich\.js(?:\?[^"']*)?["'][^>]*><\/script>/i;
  html = html.replace(richPattern, '');

  await fs.writeFile(absolute, html, 'utf8');
}

console.log(`Prepared cache-busted shared UI with static ambient artwork for ${pages.length} public Atlas pages using version ${version}.`);
