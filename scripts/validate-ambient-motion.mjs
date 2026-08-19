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
  assert(html.includes(`ambient-rich.js?v=${expectedVersion}-ambient`), `${page}: ambient-rich.js is not loaded with the prepared cache key.`);
  assert(html.includes('data-atlas-build-guard'), `${page}: build freshness guard is missing.`);
  assert(html.includes('deployment-version.json'), `${page}: deployment-version freshness sentinel is missing.`);
  assert(html.includes('data-atlas-cache-policy'), `${page}: document cache policy metadata is missing.`);
}

const deploymentVersion = JSON.parse(await fs.readFile(path.join(root, 'assets', 'deployment-version.json'), 'utf8'));
assert(deploymentVersion.version === expectedVersion, `deployment-version.json is ${deploymentVersion.version}, expected ${expectedVersion}.`);

const ambientCss = await fs.readFile(path.join(root, 'assets/ambient-motion.css'), 'utf8');
for (const token of ['atlasAmbientViewportDrift', 'atlasAmbientWaveTravel', 'atlasAmbientResidualTravel', 'atlasRichSpeckDrift', 'atlas-rich-signal', '@media (prefers-reduced-motion: reduce)']) {
  assert(ambientCss.includes(token), `ambient-motion.css is missing ${token}.`);
}
assert(!ambientCss.includes('drop-shadow('), 'ambient-motion.css must not reintroduce expensive SVG drop-shadow filters.');

const themeInit = await fs.readFile(path.join(root, 'assets/theme-init.js'), 'utf8');
for (const token of ['dataset.motionEngine', 'requestAnimationFrame', 'startFallback', 'probeMotion']) {
  assert(themeInit.includes(token), `theme-init.js is missing runtime ambient fallback token ${token}.`);
}

const richAmbient = await fs.readFile(path.join(root, 'assets/ambient-rich.js'), 'utf8');
for (const token of ['data-rich-track', 'data-rich-signal', 'dataset.motionLevel', 'dataset.richEngine', 'getPointAtLength', 'frameInterval', 'prefers-reduced-motion']) {
  assert(richAmbient.includes(token), `ambient-rich.js is missing optimized-motion token ${token}.`);
}
assert(!richAmbient.includes('pointermove'), 'ambient-rich.js must not reintroduce pointermove-driven per-frame parallax.');
assert(!richAmbient.includes('scrollPhase'), 'ambient-rich.js must not reintroduce scroll-driven per-frame parallax.');

console.log(`Static optimized ambient-motion and freshness contract passed for ${pages.length} public Atlas pages.`);
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

const blockHeavyResources = async (page) => {
  await page.route('**/*', async (route) => {
    const type = route.request().resourceType();
    if (['image', 'font', 'media'].includes(type)) return route.abort();
    if (route.request().url().startsWith('https://cdn.jsdelivr.net/')) return route.abort();
    return route.continue();
  });
};

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, reducedMotion: mode.reducedMotion });
    for (const target of targets) {
      const page = await context.newPage();
      await blockHeavyResources(page);
      await page.goto(`${baseUrl}${target}`, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('.atlas-ambient-background svg[data-rich-ambient="true"]', { state: 'attached' });
      await page.waitForSelector('[data-rich-signal="0"]', { state: 'attached' });

      const before = await page.evaluate(() => {
        const svg = document.querySelector('.atlas-ambient-background svg');
        const wave = document.querySelector('.atlas-ambient-wave');
        const ambient = document.querySelector('.atlas-ambient-background');
        const signal = document.querySelector('[data-rich-signal="0"]');
        return {
          svgTransform: getComputedStyle(svg).transform,
          svgAnimation: getComputedStyle(svg).animationName,
          waveDashOffset: getComputedStyle(wave).strokeDashoffset,
          signalTransform: signal?.getAttribute('transform') || '',
          ambientZ: getComputedStyle(ambient).zIndex,
          ambientOpacity: parseFloat(getComputedStyle(ambient).opacity),
          bodyWidth: document.body.scrollWidth,
          viewportWidth: innerWidth,
          motionLevel: ambient?.dataset.motionLevel || '',
          build: window.__ATLAS_BUILD__ || '',
          richTrackCount: document.querySelectorAll('[data-rich-track]').length,
          richSignalCount: document.querySelectorAll('[data-rich-signal]').length,
          richSpeckCount: document.querySelectorAll('[data-rich-speck]').length
        };
      });

      await page.waitForTimeout(900);

      const after = await page.evaluate(() => {
        const svg = document.querySelector('.atlas-ambient-background svg');
        const wave = document.querySelector('.atlas-ambient-wave');
        const ambient = document.querySelector('.atlas-ambient-background');
        const signal = document.querySelector('[data-rich-signal="0"]');
        return {
          svgTransform: getComputedStyle(svg).transform,
          svgAnimation: getComputedStyle(svg).animationName,
          waveDashOffset: getComputedStyle(wave).strokeDashoffset,
          signalTransform: signal?.getAttribute('transform') || '',
          motionEngine: ambient?.dataset.motionEngine || '',
          richEngine: ambient?.dataset.richEngine || '',
          motionLevel: ambient?.dataset.motionLevel || '',
          build: window.__ATLAS_BUILD__ || ''
        };
      });

      assert(before.ambientZ === '0', `${target} ${mode.name}: ambient layer is not above body paint.`);
      assert(before.ambientOpacity > 0.45, `${target} ${mode.name}: ambient layer is too faint to perceive.`);
      assert(before.bodyWidth <= before.viewportWidth + 1, `${target} ${mode.name}: ambient layer causes horizontal overflow.`);
      assert(before.build === expectedVersion && after.build === expectedVersion, `${target} ${mode.name}: deployed build marker is incorrect.`);
      assert(before.motionLevel === 'optimized' && after.motionLevel === 'optimized', `${target} ${mode.name}: optimized ambient layer did not initialize.`);
      assert(before.richTrackCount === 2, `${target} ${mode.name}: expected exactly 2 scientific trajectories.`);
      assert(before.richSignalCount === 2, `${target} ${mode.name}: expected exactly 2 travelling signals.`);
      assert(before.richSpeckCount === 10, `${target} ${mode.name}: expected exactly 10 collocation points.`);

      if (mode.reducedMotion === 'reduce') {
        assert(after.svgAnimation === 'none', `${target} ${mode.name}: viewport animation should be disabled.`);
        assert(after.motionEngine === 'reduced', `${target} ${mode.name}: reduced-motion runtime state was not preserved.`);
        assert(after.richEngine === 'reduced', `${target} ${mode.name}: optimized reduced-motion state was not preserved.`);
      } else {
        const baseMoved = before.svgTransform !== after.svgTransform || before.waveDashOffset !== after.waveDashOffset;
        const richMoved = before.signalTransform !== after.signalTransform;
        assert(baseMoved, `${target} ${mode.name}: base ambient rendering did not move over 900 ms.`);
        assert(richMoved, `${target} ${mode.name}: optimized signal particle did not travel over 900 ms.`);
        assert(after.motionEngine === 'css', `${target} ${mode.name}: CSS motion should remain the primary base engine when healthy.`);
        assert(after.richEngine === 'raf-lite', `${target} ${mode.name}: lightweight signal engine is not active.`);
      }
      await page.close();
    }
    await context.close();
  }

  const fallbackContext = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'no-preference' });
  const fallbackPage = await fallbackContext.newPage();
  await blockHeavyResources(fallbackPage);
  await fallbackPage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
  await fallbackPage.waitForSelector('.atlas-ambient-background svg[data-rich-ambient="true"]', { state: 'attached' });
  await fallbackPage.addStyleTag({ content: `
    .atlas-ambient-background svg,
    .atlas-ambient-wave,
    .atlas-ambient-residual { animation: none !important; }
  ` });
  await fallbackPage.waitForFunction(() => document.querySelector('.atlas-ambient-background')?.dataset.motionEngine === 'raf', null, { timeout: 4000 });
  const fallbackBefore = await fallbackPage.evaluate(() => {
    const ambient = document.querySelector('.atlas-ambient-background');
    const svg = ambient?.querySelector('svg');
    return {
      engine: ambient?.dataset.motionEngine || '',
      richEngine: ambient?.dataset.richEngine || '',
      transform: svg?.style.transform || ''
    };
  });
  await fallbackPage.waitForTimeout(300);
  const fallbackAfter = await fallbackPage.evaluate(() => {
    const ambient = document.querySelector('.atlas-ambient-background');
    const svg = ambient?.querySelector('svg');
    return {
      engine: ambient?.dataset.motionEngine || '',
      richEngine: ambient?.dataset.richEngine || '',
      transform: svg?.style.transform || ''
    };
  });
  assert(fallbackBefore.engine === 'raf' && fallbackAfter.engine === 'raf', 'Forced CSS freeze: runtime fallback did not stay active.');
  assert(fallbackBefore.richEngine === 'raf-lite' && fallbackAfter.richEngine === 'raf-lite', 'Forced CSS freeze: lightweight scientific motion stopped unexpectedly.');
  assert(fallbackBefore.transform !== fallbackAfter.transform, 'Forced CSS freeze: requestAnimationFrame fallback did not produce real movement.');
  await fallbackPage.close();
  await fallbackContext.close();

  // Simulate a browser restoring an older HTML document while the deployment has advanced.
  // The build guard must probe the no-store sentinel and move the document to the live build marker.
  const freshnessContext = await browser.newContext({ viewport: { width: 1200, height: 800 }, reducedMotion: 'no-preference' });
  const freshnessPage = await freshnessContext.newPage();
  await freshnessPage.route('**/assets/deployment-version.json*', async (route) => {
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ version: 'firefox-fresh-build' }) });
  });
  await freshnessPage.goto(`${baseUrl}/?__atlas_build=stale-build`, { waitUntil: 'domcontentloaded' });
  await freshnessPage.waitForFunction(() => new URL(location.href).searchParams.get('__atlas_build') === 'firefox-fresh-build', null, { timeout: 4000 });
  const recovered = await freshnessPage.evaluate(() => ({
    marker: new URL(location.href).searchParams.get('__atlas_build'),
    documentBuild: window.__ATLAS_BUILD__ || ''
  }));
  assert(recovered.marker === 'firefox-fresh-build', 'Stale-browser recovery did not replace the cached document URL with the live build marker.');
  assert(recovered.documentBuild === expectedVersion, 'Stale-browser recovery damaged the prepared document build marker.');
  await freshnessPage.close();
  await freshnessContext.close();

  console.log(`Optimized ambient browser QA passed across ${targets.length} pages, ${modes.length} motion/viewport modes, CSS fallback, and stale-browser recovery.`);
} finally {
  await browser.close();
}
