import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const executablePath = process.env.CHROME_BIN;
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
if (!chromium) throw new Error('Unable to load Chromium from playwright-core.');

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const artifactDir = path.resolve(process.env.FRAMEWORK_QA_ARTIFACTS || 'artifacts/frameworks');
await fs.mkdir(artifactDir, { recursive: true });
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const routes = [
  { id: 'design-stack', path: 'frameworks/design-stack/', selector: '.stack-board', objects: ['.stack-stage', 10], relations: 18 },
  { id: 'co-design', path: 'frameworks/co-design/', selector: '.co-board', objects: ['.co-domain', 6], relations: 20 },
  { id: 'design-performance', path: 'frameworks/design-performance/', selector: '.matrix-board', objects: ['.matrix-row', 14], cells: 98 },
  { id: 'failure-diagnostics', path: 'frameworks/failure-diagnostics/', selector: '.diagnostic-board', objects: ['.diagnostic-row', 13], categories: 4 }
];
const viewports = [
  { name: 'wide', width: 1800, height: 1100 },
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 }
];

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport, reducedMotion: 'reduce', acceptDownloads: true });
    for (const route of routes) {
      const page = await context.newPage();
      const errors = [];
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(`${baseUrl}/${route.path}`, { waitUntil: 'networkidle' });
      await page.waitForSelector(route.selector);
      const snapshot = await page.evaluate(({ route, viewport }) => {
        const canvas = document.querySelector('[data-canvas]');
        const markerSizes = [...document.querySelectorAll('.influence-marker')].map((node) => {
          const box = node.getBoundingClientRect(); return [Math.round(box.width * 10) / 10, Math.round(box.height * 10) / 10];
        });
        return {
          bodyWidth: document.body.scrollWidth,
          viewportWidth: innerWidth,
          canvasClientWidth: canvas?.clientWidth || 0,
          canvasScrollWidth: canvas?.scrollWidth || 0,
          objectCount: document.querySelectorAll(route.objects[0]).length,
          relationCount: document.querySelectorAll('.relation-path').length,
          feedbackCount: document.querySelectorAll('.relation-feedback').length,
          cellCount: document.querySelectorAll('.matrix-cell').length,
          columnCount: document.querySelectorAll('.dependency-matrix thead th').length - 1,
          categoryCount: document.querySelectorAll('.diagnostic-category').length,
          verifyPresent: Boolean(document.querySelector('.diagnostic-verify')),
          corePresent: Boolean(document.querySelector('.co-core')),
          markerSizes,
          navFrameworkChildren: [...document.querySelectorAll('.atlas-nav-group')].find((group) => group.querySelector('.atlas-nav-group-toggle')?.textContent.trim() === 'Frameworks')?.querySelectorAll('.atlas-nav-item').length || 0,
          zoomText: document.querySelector('[data-zoom-readout]')?.textContent,
          filterOptions: document.querySelector('[data-filter]')?.options.length || 0,
          viewportName: viewport.name
        };
      }, { route, viewport });
      assert(snapshot.bodyWidth <= snapshot.viewportWidth + 1, `${route.id}/${viewport.name}: body overflows (${snapshot.bodyWidth} > ${snapshot.viewportWidth}).`);
      assert(snapshot.objectCount === route.objects[1], `${route.id}/${viewport.name}: expected ${route.objects[1]} objects, found ${snapshot.objectCount}.`);
      assert(snapshot.navFrameworkChildren === 5, `${route.id}/${viewport.name}: Frameworks navigator does not contain five children.`);
      assert(snapshot.zoomText === '100%' && snapshot.filterOptions >= 5, `${route.id}/${viewport.name}: toolbar state is incomplete (zoom ${snapshot.zoomText || 'missing'}, ${snapshot.filterOptions} filter options).`);
      if (route.relations) assert(snapshot.relationCount === route.relations, `${route.id}/${viewport.name}: expected ${route.relations} relationships, found ${snapshot.relationCount}.`);
      if (route.id === 'design-stack') assert(snapshot.feedbackCount === 9, `${route.id}/${viewport.name}: nine redesign loops are not rendered.`);
      if (route.id === 'co-design') assert(snapshot.corePresent, `${route.id}/${viewport.name}: central co-design core is missing.`);
      if (route.cells) {
        assert(snapshot.cellCount === route.cells && snapshot.columnCount === 7, `${route.id}/${viewport.name}: matrix is not 14 × 7.`);
        const sizes = new Set(snapshot.markerSizes.map((size) => size.join('×')));
        assert(sizes.size === 1 && sizes.has('13×13'), `${route.id}/${viewport.name}: influence markers are not uniformly 13 × 13 (${[...sizes].join(', ')}).`);
        if (viewport.width >= 1050) assert(snapshot.canvasScrollWidth <= snapshot.canvasClientWidth + 2, `${route.id}/${viewport.name}: complete matrix does not fit at 100% (${snapshot.canvasScrollWidth} > ${snapshot.canvasClientWidth}).`);
      }
      if (route.categories) assert(snapshot.categoryCount === route.categories && snapshot.verifyPresent, `${route.id}/${viewport.name}: diagnostic categories or verification loop are incomplete.`);
      assert(errors.length === 0, `${route.id}/${viewport.name}: browser errors: ${errors.join(' | ')}`);
      await page.screenshot({ path: path.join(artifactDir, `${route.id}-${viewport.name}.png`), fullPage: true });
      await page.close();
    }
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', acceptDownloads: true });
  const matrix = await context.newPage();
  await matrix.goto(`${baseUrl}/frameworks/design-performance/`, { waitUntil: 'networkidle' });
  await matrix.waitForSelector('.matrix-cell');
  await matrix.selectOption('[data-filter]', 'representation');
  const visibleRows = await matrix.locator('.matrix-row:not([hidden])').count();
  assert(visibleRows === 4, `Matrix filter should show four representation rows, found ${visibleRows}.`);
  await matrix.fill('.framework-search', 'gradient flow');
  const highlighted = await matrix.locator('.matrix-row:not(.is-search-muted):not([hidden])').count();
  assert(highlighted === 1, `Matrix search should isolate one row, found ${highlighted}.`);
  await matrix.click('[data-inspect-id="activation-features:trainability"]');
  assert((await matrix.locator('[data-detail]').textContent()).includes('gradient flow'), 'Matrix cell inspector does not expose the scientific relation label.');
  await matrix.click('[data-zoom-in]');
  assert((await matrix.locator('[data-zoom-readout]').textContent()) === '115%', 'Zoom-in control did not update the live state.');
  await matrix.click('[data-fit]');
  assert((await matrix.locator('[data-zoom-readout]').textContent()) === '100%', 'Fit did not restore the complete matrix view.');
  await matrix.click('[data-expand]');
  assert(await matrix.locator('[data-explorer].is-expanded').count() === 1, 'Expanded view did not activate.');
  await matrix.click('[data-expand]');
  const downloadPromise = matrix.waitForEvent('download');
  await matrix.click('[data-svg]');
  const download = await downloadPromise;
  const downloadPath = await download.path();
  const svg = await fs.readFile(downloadPath, 'utf8');
  assert(svg.includes('<foreignObject') && svg.includes('dependency-matrix') && svg.includes('gradient flow'), 'Current-state SVG export does not contain the live filtered matrix state.');
  await matrix.close();

  const diagnostics = await context.newPage();
  await diagnostics.goto(`${baseUrl}/frameworks/failure-diagnostics/#item=poor-conservation`, { waitUntil: 'networkidle' });
  await diagnostics.waitForSelector('.diagnostic-board');
  assert((await diagnostics.locator('[data-detail]').textContent()).includes('Finite-volume / control-volume residuals'), 'Diagnostic deep link does not restore the selected pathway.');
  await diagnostics.close();

  const optimizer = await context.newPage();
  await optimizer.goto(`${baseUrl}/optimizers/`, { waitUntil: 'networkidle' });
  await optimizer.waitForSelector('[data-framework-backlinks]');
  assert(await optimizer.locator('[data-framework-backlinks] a').count() >= 4, 'Canonical Optimizers page lacks automatic Frameworks backlinks.');
  await optimizer.close();
  await context.close();
} finally {
  await browser.close();
}

console.log('Framework visual QA passed: 4 source-faithful views · 3 viewports · interactions · deep links · backlinks · current-state SVG export.');
