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
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto(`${baseUrl}/frameworks/design-stack/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-runtime-geometry="edge-anchored"]');

  const menuCheck = async (selector, menuSelector) => {
    const details = page.locator(selector);
    await details.scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => scrollY);
    await details.locator('summary').click();
    const state = await page.evaluate(({ selector, menuSelector, before }) => {
      const details = document.querySelector(selector);
      const menu = document.querySelector(menuSelector);
      const rect = menu?.getBoundingClientRect();
      return {
        before,
        after: scrollY,
        open: Boolean(details?.open),
        top: rect?.top ?? -1,
        bottom: rect?.bottom ?? -1,
        viewportHeight: innerHeight,
        visible: Boolean(rect && rect.width > 0 && rect.height > 0)
      };
    }, { selector, menuSelector, before });
    assert(state.open && state.visible, `${selector}: popover did not open visibly.`);
    assert(Math.abs(state.after - state.before) <= 1, `${selector}: opening the popover changed page scroll (${state.before} → ${state.after}).`);
    assert(state.top >= 0 && state.bottom <= state.viewportHeight + 1, `${selector}: popover falls outside the visible viewport (${state.top}..${state.bottom} of ${state.viewportHeight}).`);
    await details.locator('summary').click();
  };

  await menuCheck('.toolbar-export', '.toolbar-export > div');
  await menuCheck('.toolbar-contribute', '.toolbar-contribute > div');

  const geometry = await page.evaluate(() => {
    const board = document.querySelector('[data-relation-board]');
    const boardRect = board.getBoundingClientRect();
    const width = board.scrollWidth, height = board.scrollHeight;
    const sx = width / boardRect.width, sy = height / boardRect.height;
    const box = (id) => {
      const node = board.querySelector(`[data-node-id="${CSS.escape(id)}"]`);
      const r = node.getBoundingClientRect();
      return {
        left: (r.left - boardRect.left) * sx,
        right: (r.right - boardRect.left) * sx,
        top: (r.top - boardRect.top) * sy,
        bottom: (r.bottom - boardRect.top) * sy,
        width: r.width * sx,
        height: r.height * sy
      };
    };
    return [...document.querySelectorAll('.relation-path')].map((path) => {
      const from = box(path.dataset.from);
      const to = box(path.dataset.to);
      const start = path.getPointAtLength(0);
      const end = path.getPointAtLength(path.getTotalLength());
      const type = path.dataset.type;
      const expectedStart = type === 'flow'
        ? { x: from.left + from.width / 2, y: from.bottom + 1.5 }
        : type === 'coupling'
          ? { x: from.left - 1.5, y: from.top + from.height / 2 }
          : { x: from.right + 1.5, y: from.top + from.height / 2 };
      const expectedEnd = type === 'flow'
        ? { x: to.left + to.width / 2, y: to.top - 1.5 }
        : type === 'coupling'
          ? { x: to.left - 1.5, y: to.top + to.height / 2 }
          : { x: to.right + 1.5, y: to.top + to.height / 2 };
      const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
      return {
        id: path.dataset.inspectId,
        type,
        startError: distance(start, expectedStart),
        endError: distance(end, expectedEnd),
        markerStart: path.getAttribute('marker-start'),
        markerEnd: path.getAttribute('marker-end'),
        contract: path.dataset.geometryContract
      };
    });
  });

  assert(geometry.length === 24, `Expected 24 Design Stack relations, found ${geometry.length}.`);
  geometry.forEach((relation) => {
    assert(relation.contract === 'edge-anchored', `${relation.id}: relation lacks edge-anchored geometry contract.`);
    assert(relation.startError <= 2.5 && relation.endError <= 2.5, `${relation.id}: path endpoint is detached (${relation.startError.toFixed(2)}px start, ${relation.endError.toFixed(2)}px end).`);
    assert(relation.markerEnd?.includes('framework-arrow-'), `${relation.id}: end arrow marker is missing.`);
    if (relation.type === 'coupling') assert(relation.markerStart?.includes('framework-arrow-coupling'), `${relation.id}: coupling is not bidirectional.`);
  });

  const markerUnits = await page.locator('#framework-arrow-flow').getAttribute('markerUnits');
  assert(markerUnits === 'userSpaceOnUse', `Arrowheads must use stable user-space geometry, found ${markerUnits || 'missing'}.`);

  const legend = await page.evaluate(() => {
    const container = document.querySelector('.stack-bottom-legend');
    const style = getComputedStyle(container);
    const items = [...container.querySelectorAll(':scope > span')].map((node) => {
      const swatch = node.querySelector('.relation-swatch');
      const box = swatch.getBoundingClientRect();
      return { label: node.textContent.trim(), swatchWidth: box.width, swatchHeight: box.height };
    });
    return { fontSize: Number.parseFloat(style.fontSize), height: container.getBoundingClientRect().height, items };
  });
  assert(legend.items.length === 4, `Compact legend should have four entries, found ${legend.items.length}.`);
  assert(legend.fontSize >= 10, `Compact legend text is too small (${legend.fontSize}px).`);
  assert(legend.height >= 36, `Compact legend container is too compressed (${legend.height}px).`);
  assert(legend.items.every((item) => item.swatchWidth >= 30 && item.swatchHeight >= 16), `Compact legend swatches are not readable: ${JSON.stringify(legend.items)}.`);

  await page.locator('.toolbar-export summary').click();
  const currentPromise = page.waitForEvent('download');
  await page.click('[data-svg]');
  const currentDownload = await currentPromise;
  const currentSvg = await fs.readFile(await currentDownload.path(), 'utf8');
  assert(currentSvg.includes('data-export-renderer="native"'), 'Design Stack current SVG did not use the native vector exporter.');
  assert(currentSvg.includes('data-export-mode="current"'), 'Design Stack current SVG lacks current-view metadata.');
  assert(!currentSvg.includes('<foreignObject'), 'Design Stack current SVG still contains foreignObject HTML.');
  assert((currentSvg.match(/data-native-stage=/g) || []).length === 10, 'Design Stack current SVG does not contain all ten native stage groups.');
  assert((currentSvg.match(/data-native-relation=/g) || []).length === 24, 'Design Stack current SVG does not contain all 24 native relationships.');

  await page.locator('.toolbar-export summary').click();
  const publicationPromise = page.waitForEvent('download');
  await page.click('[data-svg-publication]');
  const publicationDownload = await publicationPromise;
  const publicationSvg = await fs.readFile(await publicationDownload.path(), 'utf8');
  assert(publicationSvg.includes('data-export-renderer="native"') && publicationSvg.includes('data-export-mode="publication"'), 'Publication SVG did not use the native vector exporter.');
  assert(!publicationSvg.includes('<foreignObject'), 'Publication SVG still contains foreignObject HTML.');

  assert(errors.length === 0, `Framework runtime browser errors: ${errors.join(' | ')}`);
  await fs.mkdir(path.resolve('artifacts/frameworks'), { recursive: true });
  await page.screenshot({ path: path.resolve('artifacts/frameworks/design-stack-runtime-fixes.png'), fullPage: true });
  await page.close();
  await context.close();
  console.log('Framework runtime rendering/export regression QA passed.');
} finally {
  await browser.close();
}
