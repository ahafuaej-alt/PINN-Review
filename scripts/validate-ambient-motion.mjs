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
  assert(html.includes(`ambient-motion.css?v=${expectedVersion}-ambient`), `${page}: ambient-motion.css is not loaded with the prepared cache key.`);
}

const ambientCss = await fs.readFile(path.join(root, 'assets/ambient-motion.css'), 'utf8');
for (const token of ['atlasAmbientViewportDrift', 'atlasAmbientWaveTravel', 'atlasAmbientResidualTravel', '@media (prefers-reduced-motion: reduce)']) {
  assert(ambientCss.includes(token), `ambient-motion.css is missing ${token}.`);
}
console.log(`Static ambient-motion contract passed for ${pages.length} public Atlas pages.`);
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN is required for --browser validation.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium.');
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });

const targets = ['/', '/pinn-realm/', '/mathematical-formulations/'];
const modes = [
  { name: 'desktop-motion', width: 1600, height: 1000, reducedMotion: 'no-preference' },
  { name: 'mobile-motion', width: 390, height: 844, reducedMotion: 'no-preference' },
  { name: 'desktop-reduced', width: 1600, height: 1000, reducedMotion: 'reduce' }
];

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, reducedMotion: mode.reducedMotion });
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
        const svg = document.querySelector('.atlas-ambient-background svg');
        const wave = document.querySelector('.atlas-ambient-wave');
        const ambient = document.querySelector('.atlas-ambient-background');
        return {
          svgTransform: getComputedStyle(svg).transform,
          svgAnimation: getComputedStyle(svg).animationName,
          waveDashOffset: getComputedStyle(wave).strokeDashoffset,
          ambientZ: getComputedStyle(ambient).zIndex,
          ambientOpacity: parseFloat(getComputedStyle(ambient).opacity),
          bodyWidth: document.body.scrollWidth,
          viewportWidth: innerWidth
        };
      });
      await page.waitForTimeout(900);
      const after = await page.evaluate(() => {
        const svg = document.querySelector('.atlas-ambient-background svg');
        const wave = document.querySelector('.atlas-ambient-wave');
        return {
          svgTransform: getComputedStyle(svg).transform,
          svgAnimation: getComputedStyle(svg).animationName,
          waveDashOffset: getComputedStyle(wave).strokeDashoffset
        };
      });

      assert(before.ambientZ === '0', `${target} ${mode.name}: ambient layer is not above body paint.`);
      assert(before.ambientOpacity > 0.45, `${target} ${mode.name}: ambient layer is too faint to perceive.`);
      assert(before.bodyWidth <= before.viewportWidth + 1, `${target} ${mode.name}: ambient layer causes horizontal overflow.`);
      if (mode.reducedMotion === 'reduce') {
        assert(after.svgAnimation === 'none', `${target} ${mode.name}: viewport animation should be disabled.`);
      } else {
        assert(after.svgAnimation.includes('atlasAmbientViewportDrift'), `${target} ${mode.name}: viewport drift animation is not active.`);
        const transformMoved = before.svgTransform !== after.svgTransform;
        const dashMoved = before.waveDashOffset !== after.waveDashOffset;
        assert(transformMoved || dashMoved, `${target} ${mode.name}: sampled ambient rendering did not actually move over 900 ms.`);
      }
      await page.close();
    }
    await context.close();
  }
  console.log(`Ambient-motion browser QA passed across ${targets.length} pages and ${modes.length} motion/viewport modes.`);
} finally {
  await browser.close();
}
