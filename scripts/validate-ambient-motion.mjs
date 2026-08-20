import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const runBrowser = process.argv.includes('--browser');
const expectedVersion = process.env.AMBIENT_VERSION || 'ambient-qa';
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
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
assert(pages.length >= 21, `Expected at least 21 public pages, found ${pages.length}.`);

for (const page of pages) {
  const html = await fs.readFile(path.join(root, page), 'utf8');
  assert(html.includes(`theme-init.js?v=${expectedVersion}-ambient`), `${page}: theme-init cache key is not the prepared ${expectedVersion} version.`);
  assert(html.includes(`<meta name="atlas-build" content="${expectedVersion}">`), `${page}: deployment build metadata is missing.`);
  assert(html.includes('http-equiv="Cache-Control"'), `${page}: document cache revalidation metadata is missing.`);
  assert(!html.includes('ambient-motion.css'), `${page}: animated ambient CSS must not be deployed.`);
  assert(!html.includes('ambient-rich.js'), `${page}: animated ambient JavaScript must not be deployed.`);
}

const deploymentVersion = JSON.parse(await fs.readFile(path.join(root, 'assets/deployment-version.json'), 'utf8'));
assert(deploymentVersion.version === expectedVersion, 'Deployment sentinel does not match the prepared build.');
assert(deploymentVersion.profile === 'static-ambient', 'Deployment sentinel has the wrong performance profile.');

const themeInit = await fs.readFile(path.join(root, 'assets/theme-init.js'), 'utf8');
for (const token of ['atlas-ambient-background', "dataset.motionEngine = 'static'", 'animation: none;', 'will-change: auto;', 'deployment-version.json?check=', "cache: 'no-store'", "searchParams.set('atlas-build'"]) {
  assert(themeInit.includes(token), `theme-init.js is missing static ambient token ${token}.`);
}
for (const token of ['startFallback', 'probeMotion', "dataset.motionEngine = 'raf'"]) {
  assert(!themeInit.includes(token), `theme-init.js still contains continuous fallback token ${token}.`);
}

console.log(`Static ambient performance contract passed for ${pages.length} public Atlas pages.`);
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN is required for --browser validation.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium.');
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const targets = ['/', '/pinn-realm/', '/mathematical-formulations/', '/pinn-ecosystem/'];

try {
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'no-preference' });
  for (const target of targets) {
    const page = await context.newPage();
    await page.route('**/*', async (route) => {
      const type = route.request().resourceType();
      if (['image', 'font', 'media'].includes(type)) return route.abort();
      if (route.request().url().startsWith('https://cdn.jsdelivr.net/')) return route.abort();
      return route.continue();
    });
    await page.goto(`${baseUrl}${target}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.atlas-ambient-background svg', { state: 'attached' });
    const before = await page.evaluate(() => {
      const ambient = document.querySelector('.atlas-ambient-background');
      const svg = ambient?.querySelector('svg');
      return {
        transform: getComputedStyle(svg).transform,
        animation: getComputedStyle(svg).animationName,
        engine: ambient?.dataset.motionEngine || '',
        richNodes: document.querySelectorAll('[data-rich-track], [data-rich-signal], [data-rich-speck]').length,
        opacity: parseFloat(getComputedStyle(ambient).opacity),
        bodyWidth: document.body.scrollWidth,
        viewportWidth: innerWidth
      };
    });
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => {
      const ambient = document.querySelector('.atlas-ambient-background');
      const svg = ambient?.querySelector('svg');
      return {
        transform: getComputedStyle(svg).transform,
        animation: getComputedStyle(svg).animationName,
        engine: ambient?.dataset.motionEngine || ''
      };
    });
    assert(before.animation === 'none' && after.animation === 'none', `${target}: ambient SVG must remain static.`);
    assert(before.engine === 'static' && after.engine === 'static', `${target}: static engine marker is missing.`);
    assert(before.transform === after.transform, `${target}: ambient transform changed during the stability window.`);
    assert(before.richNodes === 0, `${target}: animated rich ambient nodes were deployed.`);
    assert(before.opacity > 0.45, `${target}: static ambient artwork is too faint.`);
    assert(before.bodyWidth <= before.viewportWidth + 1, `${target}: ambient layer causes horizontal overflow.`);
    await page.close();
  }
  await context.close();
  console.log(`Static ambient browser QA passed across ${targets.length} representative Atlas pages.`);
} finally {
  await browser.close();
}
