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

await fs.writeFile(
  path.join(root, 'assets', 'deployment-version.json'),
  `${JSON.stringify({ version })}\n`,
  'utf8'
);

for (const page of pages) {
  const absolute = path.join(root, page);
  let html = await fs.readFile(absolute, 'utf8');
  const pageDir = page === 'index.html' || page === '404.html' ? '.' : path.posix.dirname(page);
  const prefix = pageDir === '.' ? '' : '../'.repeat(pageDir.split('/').length);
  const themeSrc = `${prefix}assets/theme-init.js?v=${version}-ambient`;
  const ambientHref = `${prefix}assets/ambient-motion.css?v=${version}-ambient`;
  const richSrc = `${prefix}assets/ambient-rich.js?v=${version}-ambient`;
  const versionHref = `${prefix}assets/deployment-version.json`;

  const themePattern = /(<script\b[^>]*src=["'])([^"']*assets\/theme-init\.js)(?:\?[^"']*)?(["'][^>]*><\/script>)/i;
  if (!themePattern.test(html)) throw new Error(`${page}: shared theme-init.js script was not found.`);
  html = html.replace(themePattern, `$1${themeSrc}$3`);

  const ambientPattern = /\s*<link\b[^>]*href=["'][^"']*assets\/ambient-motion\.css(?:\?[^"']*)?["'][^>]*>/i;
  html = html.replace(ambientPattern, '');
  const richPattern = /\s*<script\b[^>]*src=["'][^"']*assets\/ambient-rich\.js(?:\?[^"']*)?["'][^>]*><\/script>/i;
  html = html.replace(richPattern, '');

  html = html.replace(/\s*<meta\b[^>]*data-atlas-cache-policy[^>]*>/gi, '');
  html = html.replace(/\s*<script\b[^>]*data-atlas-build-guard[^>]*>[\s\S]*?<\/script>/gi, '');

  const freshnessBlock = `
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" data-atlas-cache-policy>
  <meta http-equiv="Pragma" content="no-cache" data-atlas-cache-policy>
  <meta http-equiv="Expires" content="0" data-atlas-cache-policy>
  <script data-atlas-build-guard>
    (() => {
      const expectedBuild = ${JSON.stringify(version)};
      const marker = '__atlas_build';
      const versionUrl = new URL(${JSON.stringify(versionHref)}, document.baseURI);
      window.__ATLAS_BUILD__ = expectedBuild;
      let checking = false;
      const checkFreshness = () => {
        if (checking) return;
        checking = true;
        const probe = new URL(versionUrl.href);
        probe.searchParams.set('_', Date.now().toString(36));
        fetch(probe.href, { cache: 'no-store', credentials: 'same-origin' })
          .then((response) => response.ok ? response.json() : null)
          .then((payload) => {
            const liveBuild = payload?.version;
            if (!liveBuild || liveBuild === expectedBuild) return;
            const current = new URL(location.href);
            if (current.searchParams.get(marker) === liveBuild) return;
            current.searchParams.set(marker, liveBuild);
            location.replace(current.href);
          })
          .catch(() => {})
          .finally(() => { checking = false; });
      };
      addEventListener('pageshow', (event) => {
        if (event.persisted) checkFreshness();
      });
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') checkFreshness();
      }, { passive: true });
      setTimeout(checkFreshness, 0);
    })();
  </script>`;

  const headMatch = html.match(/<head\b[^>]*>/i)?.[0];
  if (!headMatch) throw new Error(`${page}: <head> element was not found.`);
  html = html.replace(headMatch, `${headMatch}${freshnessBlock}`);

  const themeTag = html.match(new RegExp(`<script\\b[^>]*src=["']${themeSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*><\\/script>`, 'i'))?.[0];
  if (!themeTag) throw new Error(`${page}: rewritten theme-init.js tag could not be resolved.`);
  html = html.replace(
    themeTag,
    `${themeTag}\n  <link rel="stylesheet" href="${ambientHref}">\n  <script src="${richSrc}" defer></script>`
  );

  await fs.writeFile(absolute, html, 'utf8');
}

console.log(`Prepared cache-busted shared UI, build freshness guard, and optimized ambient motion for ${pages.length} public Atlas pages using version ${version}.`);
