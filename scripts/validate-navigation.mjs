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
    ['Frameworks', 'frameworks/'],
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
    ['Foundations & Terminology', [
      ['Mathematical Formulations', 'mathematical-formulations/'],
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
  return relativePath === 'index.html' || relativePath === '404.html' || relativePath.endsWith('/index.html');
}

function pageUrl(relativePath) {
  return relativePath === 'index.html' ? `${baseUrl}/` : `${baseUrl}/${relativePath}`;
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
assert(publicPages.length >= 21, `Expected at least 21 public Atlas HTML entry points, found ${publicPages.length}.`);

const routeExpectations = new Map();
for (const [label, route] of expectedNavigation.direct) routeExpectations.set(route, { label, group: null });
for (const [group, items] of expectedNavigation.groups) {
  for (const [label, route] of items) routeExpectations.set(route, { label, group });
}
const configuredRoutes = [...routeExpectations.keys()];
assert(configuredRoutes.length === 19, `Expected 19 internal Atlas menu routes, found ${configuredRoutes.length}.`);
assert(new Set(configuredRoutes).size === configuredRoutes.length, 'Duplicate route exists in the canonical navigation contract.');
for (const route of configuredRoutes) await assertRouteExists(route);

const notFoundHtml = await fs.readFile(path.join(repoRoot, '404.html'), 'utf8');
assert(notFoundHtml.includes("const marker='/PINN-Review/'"), '404.html lacks the project-root resolver required for nested missing URLs.');
assert(notFoundHtml.includes("document.write('<base href=") && notFoundHtml.includes("'+root+'"), '404.html does not establish its dynamic Atlas base before loading assets.');
assert(notFoundHtml.indexOf("document.write('<base href=") < notFoundHtml.indexOf('assets/theme-init.js'), '404.html must establish its base before shared assets load.');

const themeInitPath = path.join(repoRoot, 'assets', 'theme-init.js');
const themeInit = await fs.readFile(themeInitPath, 'utf8');
assert(themeInit.includes("navLinks.classList.add('atlas-global-nav')"), 'Shared theme-init.js does not activate atlas-global-nav.');
assert(themeInit.includes('navLinks.replaceChildren()'), 'Shared navigation no longer replaces per-page menu content.');
assert(themeInit.includes(".replace(/—/g, ' ')"), 'Shared public-title cleanup no longer removes em dashes.');
assert(themeInit.includes(".replace(/\\./g, '')"), 'Shared public-title cleanup no longer removes full stops from hero headings.');
for (const [group] of expectedNavigation.groups) {
  assert(themeInit.includes(`label: '${group}'`), `Canonical group “${group}” is missing from theme-init.js.`);
}
for (const route of configuredRoutes) {
  assert(themeInit.includes(`'${route}'`), `Configured route ${route} is missing from theme-init.js.`);
}

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

// Page content may repeat group names. What must remain singular is the canonical
// JavaScript group definition with a `label:` signature that actually builds the menu.
const productionScripts = relativeFiles.filter((file) => file.startsWith('assets/') && /\.js$/.test(file));
for (const [label] of expectedNavigation.groups) {
  const occurrences = [];
  const signature = `label: '${label}'`;
  for (const relativePath of productionScripts) {
    const source = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
    if (source.includes(signature)) occurrences.push(relativePath);
  }
  assert(
    occurrences.length === 1 && occurrences[0] === 'assets/theme-init.js',
    `Duplicate canonical navigation definition for “${label}” found in: ${occurrences.join(', ') || 'none'}.`
  );
}

console.log(`Static navigation integrity passed for ${publicPages.length} public Atlas pages and ${configuredRoutes.length} internal menu routes.`);
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN must point to a Chromium-compatible browser when --browser is used.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath
  ? await import(pathToFileURL(playwrightPath).href)
  : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium from the configured Playwright module.');

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const viewports = [
  { name: 'wide-desktop', width: 1600, height: 1000, compact: false },
  { name: 'compact-desktop', width: 1440, height: 1000, compact: true },
  { name: 'mobile', width: 390, height: 844, compact: true }
];

async function waitForNavigation(page) {
  await page.waitForSelector('.nav-links.atlas-global-nav', { state: 'attached' });
}

async function layoutSnapshot(page) {
  return page.evaluate(() => {
    const brand = document.querySelector('.brand');
    const nav = document.querySelector('.nav-links.atlas-global-nav');
    const toggle = document.querySelector('.nav-toggle');
    const headings = [...document.querySelectorAll('.hero h1, .page-hero h1, .ecosystem-hero h1')].map((node) => node.textContent.replace(/\s+/g, ' ').trim());
    return {
      bodyScrollWidth: document.body.scrollWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      viewportWidth: innerWidth,
      navPresent: Boolean(nav),
      brandPath: brand ? new URL(brand.href, location.href).pathname : null,
      toggleDisplay: toggle ? getComputedStyle(toggle).display : 'none',
      headings
    };
  });
}

function assertNoOverflow(layout, label) {
  assert(layout.bodyScrollWidth <= layout.viewportWidth + 1, `${label}: body width ${layout.bodyScrollWidth}px exceeds viewport ${layout.viewportWidth}px.`);
  assert(layout.documentScrollWidth <= layout.clientWidth + 1, `${label}: document width ${layout.documentScrollWidth}px exceeds client ${layout.clientWidth}px.`);
}

function assertTitleStyle(headings, label) {
  for (const heading of headings) {
    assert(!heading.includes('—'), `${label}: public hero title still contains an em dash: “${heading}”.`);
    assert(!heading.includes('.'), `${label}: public hero title still contains a full stop: “${heading}”.`);
  }
}

try {
  const contractContext = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
  const contractPage = await contractContext.newPage();
  await contractPage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
  await waitForNavigation(contractPage);
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

  for (const [route, expected] of routeExpectations) {
    const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto(`${baseUrl}/${route}`, { waitUntil: 'domcontentloaded' });
    await waitForNavigation(page);
    const active = await page.evaluate(() => {
      const current = document.querySelector('.nav-links.atlas-global-nav [aria-current="page"]');
      const group = current?.closest('.atlas-nav-group');
      return {
        label: current?.querySelector('.atlas-nav-item-name')?.textContent.trim() || current?.textContent.trim() || null,
        group: group?.querySelector('.atlas-nav-group-toggle')?.textContent.trim().replace(/\s+/g, ' ') || null,
        groupActive: group ? group.classList.contains('is-active') : true
      };
    });
    assert(active.label === expected.label, `${route}: expected active page “${expected.label}”, got “${active.label || 'none'}”.`);
    assert(active.group === expected.group, `${route}: expected group “${expected.group || 'direct'}”, got “${active.group || 'direct'}”.`);
    assert(active.groupActive, `${route}: intended navigation group is not marked active.`);
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
      if (type === 'script' && !/(?:theme-init|app)\.js(?:\?|$)/.test(url)) return route.abort();
      if (type === 'fetch' || type === 'xhr') return route.abort();
      return route.continue();
    });

    for (const relativePath of publicPages) {
      await page.goto(pageUrl(relativePath), { waitUntil: 'domcontentloaded' });
      await waitForNavigation(page);
      let layout = await layoutSnapshot(page);
      assertTitleStyle(layout.headings, `${relativePath} (${viewport.name})`);
      await page.addStyleTag({ content: 'main,.site-footer{display:none!important}' });

      await page.evaluate((compact) => {
        const nav = document.querySelector('.nav-links.atlas-global-nav');
        nav?.classList.toggle('open', compact);
        document.querySelectorAll('.atlas-nav-group').forEach((group) => group.classList.remove('open'));
      }, viewport.compact);

      layout = await layoutSnapshot(page);
      assert(layout.navPresent, `${relativePath} (${viewport.name}): shared navigation did not render.`);
      assert(layout.brandPath === '/', `${relativePath} (${viewport.name}): logo/Home resolves to ${layout.brandPath}, expected /.`);
      if (viewport.compact) assert(layout.toggleDisplay !== 'none', `${relativePath} (${viewport.name}): compact navigation toggle is not visible.`);
      else assert(layout.toggleDisplay === 'none', `${relativePath} (${viewport.name}): full desktop navigation unexpectedly shows the hamburger toggle.`);
      assertNoOverflow(layout, `${relativePath} (${viewport.name}, base menu)`);

      for (let groupIndex = 0; groupIndex < expectedNavigation.groups.length; groupIndex += 1) {
        await page.evaluate(({ compact, groupIndex }) => {
          const nav = document.querySelector('.nav-links.atlas-global-nav');
          nav?.classList.toggle('open', compact);
          document.querySelectorAll('.atlas-nav-group').forEach((group, index) => group.classList.toggle('open', index === groupIndex));
        }, { compact: viewport.compact, groupIndex });
        layout = await layoutSnapshot(page);
        assertNoOverflow(layout, `${relativePath} (${viewport.name}, group ${groupIndex + 1})`);
      }
    }
    await context.close();
  }

  console.log(`Browser navigation integrity passed across ${publicPages.length} pages × ${viewports.length} supported viewport modes, including every group-open state and public-title convention.`);
} finally {
  await browser.close();
}
