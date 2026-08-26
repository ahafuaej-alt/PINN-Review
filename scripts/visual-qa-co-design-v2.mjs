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
const artifactRoot = path.resolve(process.env.FRAMEWORK_QA_ARTIFACTS || 'artifacts/frameworks');
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  const context = await browser.newContext({ viewport: { width: 1680, height: 1100 }, reducedMotion: 'reduce', acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto(`${baseUrl}/frameworks/co-design/`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.coDesignV2 === 'ready');
  await page.waitForSelector('.co-v2-path');

  const audit = await page.evaluate(() => {
    const paths = [...document.querySelectorAll('.co-v2-path')];
    const captions = [...document.querySelectorAll('.co-v2-caption')];
    const conceptButtons = [...document.querySelectorAll('.co-concept-item')];
    const board = document.querySelector('.co-board');
    const core = document.querySelector('.co-core');
    const cards = [...document.querySelectorAll('.co-domain')];
    const panelFontSizes = [...document.querySelectorAll('.co-panels ul')].map((node) => Number.parseFloat(getComputedStyle(node).fontSize));
    return {
      total: paths.length,
      influences: paths.filter((path) => path.dataset.semantic === 'influence').length,
      verification: paths.filter((path) => path.dataset.semantic === 'verification').length,
      feedback: paths.filter((path) => path.dataset.semantic === 'feedback').length,
      captions: captions.length,
      concepts: conceptButtons.map((button) => ({ id: button.dataset.conceptId, label: button.textContent.trim() })),
      boardWidth: board.scrollWidth,
      boardHeight: board.scrollHeight,
      coreClip: getComputedStyle(core).clipPath,
      domainIcons: cards.filter((card) => card.querySelector('.co-domain-icon use')).length,
      minPanelFont: Math.min(...panelFontSizes),
      weakSeparate: [...document.querySelectorAll('.co-concept-item')].some((button) => button.dataset.conceptId === 'formulation:weak-form'),
      variationalSeparate: [...document.querySelectorAll('.co-concept-item')].some((button) => button.dataset.conceptId === 'formulation:variational-form'),
      rmseSeparate: [...document.querySelectorAll('.co-concept-item')].some((button) => button.dataset.conceptId === 'metric:rmse'),
      maeSeparate: [...document.querySelectorAll('.co-concept-item')].some((button) => button.dataset.conceptId === 'metric:mae')
    };
  });

  assert(audit.total === 20, `Expected 20 audited Co-Design relations, found ${audit.total}.`);
  assert(audit.influences === 14 && audit.verification === 1 && audit.feedback === 5, `Unexpected relation semantics: ${JSON.stringify(audit)}.`);
  assert(audit.captions === 20, `Expected one maintained caption per relation, found ${audit.captions}.`);
  assert(audit.domainIcons === 6, `Expected six common-family domain icons, found ${audit.domainIcons}.`);
  assert(audit.boardWidth >= 1500 && audit.boardHeight >= 1000, `Co-Design full map is too compressed (${audit.boardWidth}×${audit.boardHeight}).`);
  assert(audit.minPanelFont >= 9.5, `Co-Design panel text remains too small (${audit.minPanelFont}px).`);
  assert(audit.coreClip && audit.coreClip !== 'none', 'Co-Design core is not rendered as a hexagonal visual center.');
  assert(audit.weakSeparate && audit.variationalSeparate, 'Weak form and variational form are not independently addressable canonical concepts.');
  assert(audit.rmseSeparate && audit.maeSeparate, 'RMSE and MAE are not independently addressable canonical concepts.');
  assert(audit.concepts.length >= 11, `Expected at least 11 curated internal canonical concept controls, found ${audit.concepts.length}.`);

  const reciprocal = await page.evaluate(() => {
    const ids = ['problem-representation','representation-problem','representation-core','core-representation','physics-core','core-physics','numerical-core','core-numerical','training-core','core-training'];
    return ids.map((id) => {
      const path = document.querySelector(`.co-v2-path[data-inspect-id="${id}"]`);
      return { id, markerStart: path?.getAttribute('marker-start'), markerEnd: path?.getAttribute('marker-end'), d: path?.getAttribute('d') };
    });
  });
  reciprocal.forEach((item) => {
    assert(item.d && item.markerEnd, `${item.id}: directed relation is missing geometry or arrowhead.`);
    assert(!item.markerStart, `${item.id}: reciprocal pair member was incorrectly converted to one bidirectional arrow.`);
  });

  const correctedLabels = await page.evaluate(() => ({
    representation: document.querySelector('.co-v2-caption[data-inspect-id="reliability-representation"]')?.textContent.replace(/\s+/g, ' ').trim(),
    training: document.querySelector('.co-v2-caption[data-inspect-id="reliability-training"]')?.textContent.replace(/\s+/g, ' ').trim(),
    coreReliability: document.querySelector('.co-v2-path[data-inspect-id="core-reliability"]')?.dataset.semantic
  }));
  assert(correctedLabels.representation?.includes('approximation failure'), `Representation feedback label was not corrected: ${correctedLabels.representation}`);
  assert(correctedLabels.training?.includes('loss imbalance'), `Training feedback label was not corrected: ${correctedLabels.training}`);
  assert(correctedLabels.coreReliability === 'verification', 'Core → Reliability must be a verification dependency, not generic coupling.');

  await page.goto(`${baseUrl}/frameworks/co-design/#item=representation-core`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.coDesignV2 === 'ready');
  await page.waitForFunction(() => {
    const detail = document.querySelector('[data-detail]');
    return detail?.dataset.coV2Enriched === 'representation-core' && Boolean(detail.querySelector('.co-v2-inspector-grid'));
  });
  const inspectorText = await page.locator('[data-detail]').innerText();
  assert(inspectorText.includes('Direction') && inspectorText.includes('Mechanism') && inspectorText.includes('Scientific consequence'), 'Relationship inspector does not expose the v2 directional scientific structure.');
  assert(inspectorText.includes('reciprocal pair member'), 'Relationship inspector does not distinguish reciprocal pair semantics.');

  const weakButton = page.locator('.co-concept-item[data-concept-id="formulation:weak-form"]');
  await weakButton.click();
  const trace = await page.evaluate(() => ({
    visible: document.querySelector('[data-co-trace-status]')?.classList.contains('is-active'),
    label: document.querySelector('[data-co-trace-status] b')?.textContent,
    traced: document.querySelectorAll('.co-v2-path.is-traced').length,
    muted: document.querySelectorAll('.co-v2-path.is-muted').length
  }));
  assert(trace.visible && trace.label === 'Weak form', `Concept trace status is incorrect: ${JSON.stringify(trace)}.`);
  assert(trace.traced >= 5 && trace.muted > 0, 'Concept trace mode did not highlight a maintained pathway while muting unrelated relations.');
  await page.locator('[data-clear-trace]').click();

  await page.locator('[data-legend]').click();
  const legendText = await page.locator('.framework-legend-panel').innerText();
  assert(legendText.includes('Directional influence') && legendText.includes('Reciprocal pair') && legendText.includes('Verification dependency') && legendText.includes('Verification feedback'), 'Expanded Co-Design legend is not synchronized with the audited relation semantics.');
  await page.locator('[data-co-close-legend]').click();

  await page.locator('.toolbar-export summary').click();
  const currentPromise = page.waitForEvent('download');
  await page.click('[data-svg]');
  const currentDownload = await currentPromise;
  const currentSvg = await fs.readFile(await currentDownload.path(), 'utf8');
  assert(currentSvg.includes('data-native-vector="true"') && currentSvg.includes('data-export-mode="current"'), 'Co-Design current SVG did not use the native vector exporter.');
  assert(!currentSvg.includes('<foreignObject'), 'Co-Design current SVG still contains foreignObject HTML.');
  assert(currentSvg.includes('<polygon'), 'Co-Design native SVG does not contain the central hexagonal core.');
  assert((currentSvg.match(/class="co-v2-path/g) || []).length === 20, 'Co-Design current SVG does not contain all 20 native relationship paths.');

  await page.locator('.toolbar-export summary').click();
  const publicationPromise = page.waitForEvent('download');
  await page.click('[data-svg-publication]');
  const publicationDownload = await publicationPromise;
  const publicationSvg = await fs.readFile(await publicationDownload.path(), 'utf8');
  assert(publicationSvg.includes('data-native-vector="true"') && publicationSvg.includes('data-export-mode="publication"'), 'Co-Design publication SVG did not use the native vector exporter.');
  assert(!publicationSvg.includes('<foreignObject'), 'Co-Design publication SVG still contains foreignObject HTML.');

  await fs.mkdir(artifactRoot, { recursive: true });
  await page.screenshot({ path: path.join(artifactRoot, 'co-design-v2-wide.png'), fullPage: true });
  await page.close();
  await context.close();

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const mobile = await mobileContext.newPage();
  const mobileErrors = [];
  mobile.on('console', (message) => { if (message.type() === 'error') mobileErrors.push(message.text()); });
  mobile.on('pageerror', (error) => mobileErrors.push(error.message));
  await mobile.goto(`${baseUrl}/frameworks/co-design/`, { waitUntil: 'networkidle' });
  await mobile.waitForFunction(() => document.documentElement.dataset.coDesignV2 === 'ready');
  const mobileState = await mobile.evaluate(() => {
    const board = document.querySelector('.co-board');
    const core = document.querySelector('.co-core');
    const cards = [...document.querySelectorAll('.co-domain')];
    const canvas = document.querySelector('.framework-canvas');
    return {
      boardWidth: board.getBoundingClientRect().width,
      canvasWidth: canvas.getBoundingClientRect().width,
      relationVisible: getComputedStyle(document.querySelector('.co-relation-layer')).display !== 'none',
      coreOrder: getComputedStyle(core).order,
      singleColumnPanels: cards.every((card) => getComputedStyle(card.querySelector('.co-panels')).gridTemplateColumns.split(' ').length === 1),
      fullMapToggle: Boolean(document.querySelector('[data-co-full-map]'))
    };
  });
  assert(mobileState.boardWidth <= mobileState.canvasWidth + 2, `Default mobile Co-Design stack still forces horizontal map overflow (${mobileState.boardWidth} > ${mobileState.canvasWidth}).`);
  assert(!mobileState.relationVisible, 'Default mobile representation should hide dense map arrows and use the vertical domain stack.');
  assert(mobileState.singleColumnPanels && mobileState.fullMapToggle, 'Mobile Co-Design representation is missing stacked panels or full-map access.');
  await mobile.locator('[data-co-full-map]').click();
  const fullMap = await mobile.locator('.co-board').evaluate((node) => ({ forced: node.classList.contains('force-full-map'), width: node.scrollWidth }));
  assert(fullMap.forced && fullMap.width >= 1500, 'Mobile Expand full map did not expose the complete radial map.');
  await mobile.screenshot({ path: path.join(artifactRoot, 'co-design-v2-mobile.png'), fullPage: true });
  assert(mobileErrors.length === 0, `Co-Design mobile browser errors: ${mobileErrors.join(' | ')}`);
  await mobile.close();
  await mobileContext.close();

  assert(errors.length === 0, `Co-Design v2 browser errors: ${errors.join(' | ')}`);
  console.log('Co-Design v2 scientific, interaction, responsive, and native-export QA passed.');
} finally {
  await browser.close();
}
