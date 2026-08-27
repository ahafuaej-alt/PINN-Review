import path from 'node:path';
import process from 'node:process';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const executablePath = process.env.CHROME_BIN;
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
if (!chromium) throw new Error('Unable to load Chromium from playwright-core.');

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const artifactRoot = path.resolve(process.env.FRAMEWORK_QA_ARTIFACTS || 'artifacts/frameworks');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const overlaps = (a, b, padding = 0) => !(a.right + padding <= b.left || a.left >= b.right + padding || a.bottom + padding <= b.top || a.top >= b.bottom + padding);

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  const context = await browser.newContext({ viewport: { width: 1680, height: 1100 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto(`${baseUrl}/frameworks/co-design/`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.coDesignArrange === 'ready');
  await page.waitForFunction(() => document.querySelectorAll('.co-label-layer .co-v2-caption').length === 20);

  const defaultState = await page.evaluate(() => {
    const labels = [...document.querySelectorAll('.co-label-layer .co-v2-caption')].map((node) => node.getBoundingClientRect());
    const cards = [...document.querySelectorAll('.co-domain, .co-core')].map((node) => node.getBoundingClientRect());
    let cardOverlaps = 0;
    let labelOverlaps = 0;
    labels.forEach((label) => cards.forEach((card) => {
      const intersects = !(label.right <= card.left || label.left >= card.right || label.bottom <= card.top || label.top >= card.bottom);
      if (intersects) cardOverlaps += 1;
    }));
    labels.forEach((label, index) => labels.slice(index + 1).forEach((other) => {
      const intersects = !(label.right + 4 <= other.left || label.left >= other.right + 4 || label.bottom + 4 <= other.top || label.top >= other.bottom + 4);
      if (intersects) labelOverlaps += 1;
    }));
    const originals = [...document.querySelectorAll('.co-relation-layer .co-v2-caption')];
    const labelLayer = document.querySelector('.co-label-layer');
    const card = document.querySelector('.co-domain');
    return {
      labels: labels.length,
      cardOverlaps,
      labelOverlaps,
      originalsHidden: originals.length === 20 && originals.every((node) => getComputedStyle(node).visibility === 'hidden' && node.getAttribute('aria-hidden') === 'true'),
      labelLayerZ: Number.parseInt(getComputedStyle(labelLayer).zIndex, 10),
      cardZ: Number.parseInt(getComputedStyle(card).zIndex, 10),
      controls: Boolean(document.querySelector('[data-co-arrange]') && document.querySelector('[data-co-lock]') && document.querySelector('[data-co-reset-layout]')),
      movable: document.querySelectorAll('.co-domain[data-node-id], .co-core[data-node-id]').length
    };
  });

  assert(defaultState.labels === 20, `Expected 20 readable explanation labels, found ${defaultState.labels}.`);
  assert(defaultState.originalsHidden, 'Original relationship labels were not hidden after creating the readable overlay.');
  assert(defaultState.labelLayerZ > defaultState.cardZ, `Explanation layer must render above map cards (${defaultState.labelLayerZ} <= ${defaultState.cardZ}).`);
  assert(defaultState.controls && defaultState.movable === 7, 'Arrange/Lock/Reset controls or the seven movable map objects are missing.');
  assert(defaultState.cardOverlaps === 0, `Relationship explanations still overlap map objects (${defaultState.cardOverlaps} collisions).`);
  assert(defaultState.labelOverlaps === 0, `Relationship explanations still overlap one another (${defaultState.labelOverlaps} collisions).`);

  const representation = page.locator('[data-node-id="representation"]');
  const relation = page.locator('.co-v2-path[data-inspect-id="representation-core"]');
  const beforeBox = await representation.boundingBox();
  const beforePath = await relation.getAttribute('d');
  assert(beforeBox && beforePath, 'Unable to locate Representation or its relation to the Co-Design core.');

  await page.locator('[data-co-arrange]').click();
  assert(await page.locator('body').evaluate((node) => node.classList.contains('co-arrange-active')), 'Arrange mode did not activate.');
  const dragTarget = page.locator('[data-node-id="representation"] header');
  const dragBox = await dragTarget.boundingBox();
  assert(dragBox, 'Representation drag handle area is unavailable.');
  await page.mouse.move(dragBox.x + dragBox.width * .55, dragBox.y + Math.min(28, dragBox.height * .5));
  await page.mouse.down();
  await page.mouse.move(dragBox.x + dragBox.width * .55 + 140, dragBox.y + Math.min(28, dragBox.height * .5) + 90, { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(180);

  const afterBox = await representation.boundingBox();
  const afterPath = await relation.getAttribute('d');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('pinn-review-atlas:co-design-layout:v1') || '{}'));
  assert(afterBox && Math.abs(afterBox.x - beforeBox.x) > 50 && Math.abs(afterBox.y - beforeBox.y) > 30, `Representation card did not move materially: ${JSON.stringify({ beforeBox, afterBox })}.`);
  assert(afterPath && afterPath !== beforePath, 'Attached relationship geometry did not update after moving its source card.');
  assert(stored.representation && Math.abs(stored.representation.x) > 50, 'Custom card position was not persisted locally.');

  await page.waitForFunction(() => document.querySelectorAll('.co-label-layer .co-v2-caption').length === 20);
  const movedCollisions = await page.evaluate(() => {
    const labels = [...document.querySelectorAll('.co-label-layer .co-v2-caption')].map((node) => node.getBoundingClientRect());
    const cards = [...document.querySelectorAll('.co-domain, .co-core')].map((node) => node.getBoundingClientRect());
    let collisions = 0;
    labels.forEach((label) => cards.forEach((card) => {
      if (!(label.right <= card.left || label.left >= card.right || label.bottom <= card.top || label.top >= card.bottom)) collisions += 1;
    }));
    return collisions;
  });
  assert(movedCollisions === 0, `Moving a card caused explanation labels to cover map objects (${movedCollisions} collisions).`);

  await page.locator('[data-co-lock]').click();
  assert(!(await page.locator('body').evaluate((node) => node.classList.contains('co-arrange-active'))), 'Lock map did not disable dragging.');

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.coDesignArrange === 'ready');
  const persistedX = await page.locator('[data-node-id="representation"]').evaluate((node) => Number(node.dataset.coArrangeX));
  assert(Math.abs(persistedX) > 50, `Custom layout did not restore after reload (${persistedX}).`);

  await page.locator('[data-co-reset-layout]').click();
  await page.waitForTimeout(100);
  const reset = await page.evaluate(() => ({
    stored: localStorage.getItem('pinn-review-atlas:co-design-layout:v1'),
    translations: [...document.querySelectorAll('.co-domain[data-node-id], .co-core[data-node-id]')].map((node) => [Number(node.dataset.coArrangeX), Number(node.dataset.coArrangeY)]),
    arrange: document.body.classList.contains('co-arrange-active')
  }));
  assert(reset.stored === null && reset.translations.every(([x, y]) => Math.abs(x) < .5 && Math.abs(y) < .5) && !reset.arrange, `Reset layout did not restore the curated locked map: ${JSON.stringify(reset)}.`);

  await fs.mkdir(artifactRoot, { recursive: true });
  await page.locator('.co-board').screenshot({ path: path.join(artifactRoot, 'co-design-arrange-default.png') });
  assert(errors.length === 0, `Co-Design arrange browser errors: ${errors.join(' | ')}`);
  await page.close();
  await context.close();

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const mobile = await mobileContext.newPage();
  await mobile.goto(`${baseUrl}/frameworks/co-design/`, { waitUntil: 'networkidle' });
  await mobile.waitForFunction(() => document.documentElement.dataset.coDesignArrange === 'ready');
  await mobile.locator('[data-co-arrange]').click();
  const blockedMessage = await mobile.locator('[data-co-layout-status]').textContent();
  assert(blockedMessage.includes('Expand the full map'), `Mobile stack did not prevent accidental free-form dragging: ${blockedMessage}`);
  await mobile.locator('[data-co-full-map]').click();
  await mobile.locator('[data-co-arrange]').click();
  assert(await mobile.locator('body').evaluate((node) => node.classList.contains('co-arrange-active')), 'Arrange mode did not become available after opening the full map on mobile.');
  await mobile.close();
  await mobileContext.close();

  console.log('Co-Design collision-aware labels and movable-map QA passed.');
} finally {
  await browser.close();
}
