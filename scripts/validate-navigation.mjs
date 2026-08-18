import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const repoRoot = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const runBrowser = process.argv.includes('--browser');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const skipDirs = new Set(['.git', '.github', 'node_modules', 'artifacts']);

const expectedNavigation = {
  direct: [
    ['PINN Ecosystem', 'pinn-ecosystem/'],
    ['Cite', 'cite/']
  ],
  groups: [
    ['Methods & Evaluation', [
      ['Architectures', 'architectures/'],
      ['Activation Functions', 'activation-functions/'],
      ['Training', 'training/'],
      ['Optimizers', 'optimizers/'],
      ['Performance Metrics', 'performance-metrics/']
    ]],
    ['Taxonomy & Terminology', [
      ['PINN Types', 'pinn-types/'],
      ['Abbreviations', 'abbreviations/']
    ]],
    ['Research Landscape', [
      ['PINN Realm', 'pinn-realm/'],
      ['Applications', 'applications/'],
      ['References', 'references/']
    ]],
    ['Tools & Resources', [
      ['Software', 'software/'],
      ['Datasets & Benchmarks', 'datasets/']
    ]],
    ['Data Governance', [
      ['Dataset Manager', 'dataset-manager/'],
      ['Publisher Metadata Review', 'dataset-manager/review/'],
      ['Reference Changelog', 'references/changelog/']
    ]]
  ],
  external: ['GitHub ↗', 'https://github.com/ahafuaej-alt/PINN-Review']
};

const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const toPosix = (value) => value.split(path.sep).join('/');
const normalizeRoute = (value) => value.replace(/^\/+/, '').replace(/index\.html$/i, '').replace(/\/+$/, '');

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

function isPublicHtml(relativePath) {
  if (relativePath === '404.html' || relativePath === 'index.html') return true;
  return relativePath.endsWith('/index.html');
}

function pageUrl(relativePath) {
  if (relativePath === 'index.html') return `${baseUrl}/`;
  return `${baseUrl}/${relativePath}`;
}

async function assertRouteExists(route) {
  const target = path.join(repoRoot, route, 'index.html');
  try {
    const stat = await fs.stat(target);
    assert(stat.isFile(), `Configured navigation route ${route} does not resolve to an index.html file.`);
  } catch {
    fail(`Configured navigation route ${route} does not resolve to ${toPosix(path.relative(repoRoot, target))}.`);
  }
}

const allFiles = await walk(repoRoot);
const relativeFiles = allFiles.map((file) => toPosix(path.relative(repoRoot, file)));
const publicPages = relativeFiles.filter(isPublicHtml).sort();
assert(publicPages.length >= 20, `Expected at least 20 public Atlas HTML entry points, found ${publicPages.length}.`);

const configuredRoutes = [
  ...expectedNavigation.direct.map(([, route]) => route),
  ...expectedNavigation.groups.flatMap(([, items]) => items.map(([, route]) => route))
];
assert(new Set(configuredRoutes).size === configuredRoutes.length, 'Duplicate route exists in the canonical navigation contract.');
for (const route of configuredRoutes) await assertRouteExists(route);

const themeInitPath = path.join(repoRoot, 'assets', 'theme-init.js');
const themeInit = await fs.readFile(themeInitPath, 'utf8');
assert(themeInit.includes("navLinks.classList.add('atlas-global-nav')"), 'Shared theme-init.js does not activate atlas-global-nav.');
assert(themeInit.includes('navLinks.replaceChildren()'), 'Shared navigation no longer replaces per-page menu content.');
assert(themeInit.includes("label: 'Methods & Evaluation'"), 'Canonical Methods & Evaluation group is missing from theme-init.js.');
assert(themeInit.includes("label: 'Data Governance'"), 'Canonical Data Governance group is missing from theme-init.js.');

for (const relativePath of publicPages) {
  const html = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
  assert(/<header\b[^>]*class=["'][^"']*site-header/.test(html), `${relativePath}: missing .site-header.`);
  assert(/<nav\b[^>]*class=["'][^"']*nav/.test(html), `${relativePath}: missing .nav shell.`);
  assert(/class=["'][^"']*brand/.test(html), `${relativePath}: missing Atlas brand/Home link.`);
  assert(/class=["'][^"']*nav-links/.test(html), `${relativePath}: missing .nav-links mount.`);
  assert(/theme-init\.js/.test(html), `${relativePath}: does not load the shared theme-init.js navigation system.`);

  const brandMatch = html.match(/<a\b[^>]*class=["'][^"']*brand[^"']*["'][^>]*href=["']([^"']+)["']|<a\b[^>]*href=["']([^"']+)["'][^>]*class=["'][^"']*brand/);
  assert(brandMatch, `${relativePath}: could not resolve logo/Home href.`);
  const brandHref = brandMatch[1] || brandMatch[2];
  const pageDir = relativePath === 'index.html' || relativePath === '404.html' ? '' : path.posix.dirname(relativePath);
  const resolved = path.posix.normalize(path.posix.join('/', pageDir, brandHref)).replace(/\/$/, '') || '/';
  assert(resolved === '/', `${relativePath}: logo/Home href ${brandHref} resolves to ${resolved}, not Atlas root.`);
}

// These grouped labels are unique enough to detect a second canonical menu definition.
// They may appear in this validation contract, but in production HTML/JS they must occur only in theme-init.js.
const uniqueGroupLabels = expectedNavigation.groups.map(([label]) => label);
for (const label of uniqueGroupLabels) {
  const occurrences = [];
  for (const relativePath of relativeFiles.filter((file) => /\.(?:html|js|mjs)$/.test(file) && file !== 'scripts/validate-navigation.mjs')) {
    const source = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
    if (source.includes(label)) occurrences.push(relativePath);
  }
  assert(occurrences.length === 1 && occurrences[0] === 'assets/theme-init.js', `Duplicate canonical navigation definition for “${label}” found in: ${occurrences.join(', ') || 'none'}.`);
}

console.log(`Static navigation integrity passed for ${publicPages.length} public Atlas pages and ${configuredRoutes.length} internal menu routes.`);

if (!runBrowser) process.exit(0);
assert(executablePath, 'CHROME_BIN must point to a Chromium-compatible browser when --browser is used.');

const playwrightModule = process.env.PLAYWRIGHT_CORE_PATH || 'playwright-core';
const { chromium } = await import(playwrightModule.startsWith('/') ? pathToFileURL(playwrightModule).href : playwrightModule);
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const viewports = [
  { name: 'wide-desktop', width: 1600, height: 1000, expectCompact: false },
  { name: 'compact-desktop', width: 1440, height: 1000, expectCompact: true },
  { name: 'mobile', width: 390, height: 844, expectCompact: true }
];

try {
  // Verify exact hierarchy and group membership once from the generated navigation.
  const contractContext = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
  const contractPage = await contractContext.newPage();
  await contractPage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
  await contractPage.waitForSelector('.nav-links.atlas-global-nav');
  const renderedContract = await contractPage.evaluate(() => {
    const destination = (link) => {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return url.href;
      return url.pathname.replace(/^\//, '');
    };
    return {
      direct: [...document.querySelectorAll('.nav-links.atlas-global-nav > a')].map((link) => [link.textContent.trim(), destination(link)]),
      groups: [...document.querySelectorAll('.atlas-nav-group')].map((group) => [
        group.querySelector('.atlas-nav-group-toggle')?.textContent.trim().replace(/\s+/g, ' '),
        [...group.querySelectorAll('.atlas-nav-dropdown a')].map((link) => [link.querySelector('.atlas-nav-item-name')?.textContent.trim(), destination(link)])
      ])
    };
  });
  const internalDirect = renderedContract.direct.filter(([label]) => label !== expectedNavigation.external[0]);
  assert(JSON.stringify(internalDirect) === JSON.stringify(expectedNavigation.direct), `Rendered direct navigation differs from contract: ${JSON.stringify(internalDirect)}`);
  assert(JSON.stringify(renderedContract.groups) === JSON.stringify(expectedNavigation.groups), 'Rendered navigation groups or group membership differ from the approved hierarchy.');
  const external = renderedContract.direct.find(([label]) => label === expectedNavigation.external[0]);
  assert(external?.[1] === expectedNavigation.external[1], 'GitHub external route differs from the approved destination.');
  await contractContext.close();

  // Verify nested governance pages resolve and activate the correct group/item.
  for (const route of ['dataset-manager/review/', 'references/changelog/']) {
    const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto(`${baseUrl}/${route}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.nav-links.atlas-global-nav');
    const nested = await page.evaluate(() => ({
      activeGroup: document.querySelector('.atlas-nav-group.is-active .atlas-nav-group-toggle')?.textContent.trim().replace(/\s+/g, ' '),
      activeItem: document.querySelector('.atlas-nav-item[aria-current="page"] .atlas-nav-item-name')?.textContent.trim()
    }));
    assert(nested.activeGroup === 'Data Governance', `${route}: nested route did not activate Data Governance.`);
    const expectedItem = route.startsWith('dataset-manager') ? 'Publisher Metadata Review' : 'Reference Changelog';
    assert(nested.activeItem === expectedItem, `${route}: expected active item ${expectedItem}, got ${nested.activeItem || 'none'}.`);
    await context.close();
  }

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.route('**/*', async (route) => {
      const request = route.request();
      const type = request.resourceType();
      const url = request.url();
      if (['image', 'font', 'media'].includes(type)) return route.abort();
      // Keep shared navigation/theme behavior and CSS; abort feature scripts/data to keep the deployment invariant focused and fast.
      if (type === 'script' && !/(?:theme-init|app)\.js(?:\?|$)/.test(url)) return route.abort();
      if (type === 'fetch' || type === 'xhr') return route.abort();
      return route.continue();
    });

    for (const relativePath of publicPages) {
      await page.goto(pageUrl(relativePath), { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('.nav-links.atlas-global-nav');

      if (viewport.expectCompact) {
        await page.evaluate(() => document.querySelector('.nav-links.atlas-global-nav')?.classList.add('open'));
      }

      const layout = await page.evaluate(() => {
        const brand = document.querySelector('.brand');
        const nav = document.querySelector('.nav-links.atlas-global-nav');
        const toggle = document.querySelector('.nav-toggle');
        return {
          bodyScrollWidth: document.body.scrollWidth,
          docScrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          viewportWidth: innerWidth,
          navPresent: Boolean(nav),
          brandPath: brand ? new URL(brand.href, location.href).pathname : null,
          toggleDisplay: toggle ? getComputedStyle(toggle).display : 'none'
        };
      });
      assert(layout.navPresent, `${relativePath} (${viewport.name}): shared navigation did not render.`);
      assert(layout.bodyScrollWidth <= layout.viewportWidth + 1, `${relativePath} (${viewport.name}): body width ${layout.bodyScrollWidth}px exceeds viewport ${layout.viewportWidth}px.`);
      assert(layout.docScrollWidth <= layout.clientWidth + 1, `${relativePath} (${viewport.name}): document width ${layout.docScrollWidth}px exceeds client ${layout.clientWidth}px.`);
      assert(layout.brandPath === '/', `${relativePath} (${viewport.name}): logo/Home resolves to ${layout.brandPath}, expected /.`);
      if (viewport.expectCompact) assert(layout.toggleDisplay !== 'none', `${relativePath} (${viewport.name}): compact navigation toggle is not visible.`);
      else assert(layout.toggleDisplay === 'none', `${relativePath} (${viewport.name}): full desktop navigation unexpectedly shows the hamburger toggle.`);
    }
    await context.close();
  }

  console.log(`Browser navigation integrity passed across ${publicPages.length} pages × ${viewports.length} supported viewport modes.`);
} finally {
  await browser.close();
}
