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

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  await fs.mkdir(artifactRoot, { recursive: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1200 }, reducedMotion: 'reduce', acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(`${baseUrl}/frameworks/design-performance/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dependency-matrix-v2');
  await page.waitForFunction(() => document.documentElement.dataset.designPerformanceLayout === 'ready');

  const contract = await page.evaluate(() => ({
    rows: document.querySelectorAll('.matrix-row').length,
    cells: document.querySelectorAll('.matrix-cell').length,
    outcomes: document.querySelectorAll('.dp-outcome-head').length,
    families: document.querySelectorAll('.dp-family-rail').length,
    matrixWidth: document.querySelector('.dependency-matrix-v2')?.scrollWidth || 0,
    familySticky: getComputedStyle(document.querySelector('.dp-family-rail')).position,
    designSticky: getComputedStyle(document.querySelector('.dp-design-dimension')).position,
    outcomeSticky: getComputedStyle(document.querySelector('.dp-outcome-head')).position,
    workbench: Boolean(document.querySelector('.dp-workbench')),
    mobileView: Boolean(document.querySelector('.dp-mobile-view')),
    notes: Boolean(document.querySelector('.dp-scientific-notes'))
  }));
  assert(contract.rows === 14, `Expected 14 design rows, found ${contract.rows}.`);
  assert(contract.cells === 98, `Expected 98 dependency cells, found ${contract.cells}.`);
  assert(contract.outcomes === 7, `Expected 7 outcome headers, found ${contract.outcomes}.`);
  assert(contract.families === 4, `Expected 4 design-family rails, found ${contract.families}.`);
  assert(contract.matrixWidth >= 2200, `Matrix was compressed below scientific reading scale (${contract.matrixWidth}px).`);
  assert(contract.familySticky === 'sticky' && contract.designSticky === 'sticky' && contract.outcomeSticky === 'sticky', `Sticky matrix context failed: ${JSON.stringify(contract)}.`);
  assert(contract.workbench && contract.mobileView && contract.notes, 'Workbench, mobile representation, or scientific notes are missing.');

  await page.locator('[data-dp-lens="tradeoffs"]').click();
  const tradeoffLens = await page.evaluate(() => ({
    badges: document.querySelectorAll('.dp-tradeoff-badge').length,
    active: document.querySelectorAll('.matrix-cell.dp-tradeoff-focus').length,
    muted: document.querySelectorAll('.matrix-cell.dp-lens-muted').length,
    status: document.querySelector('[data-dp-status]')?.textContent || ''
  }));
  assert(tradeoffLens.badges > 0 && tradeoffLens.active > 0 && tradeoffLens.muted > 0 && /trade-offs/i.test(tradeoffLens.status), `Trade-off lens failed: ${JSON.stringify(tradeoffLens)}.`);

  await page.locator('[data-dp-lens="evidence"]').click();
  const evidenceLens = await page.evaluate(() => ({
    exact: document.querySelectorAll('.matrix-cell.dp-evidence-cell').length,
    row: document.querySelectorAll('.matrix-cell.dp-evidence-row').length,
    total: document.querySelectorAll('.matrix-cell.dp-evidence-cell,.matrix-cell.dp-evidence-row').length,
    status: document.querySelector('[data-dp-status]')?.textContent || ''
  }));
  assert(evidenceLens.total === 98 && /documentation scope/i.test(evidenceLens.status), `Evidence lens must classify all 98 cells without implying strength: ${JSON.stringify(evidenceLens)}.`);

  const detail = page.locator('[data-detail]:visible').first();
  await page.locator('[data-dp-outcome="accuracy"]').click();
  await page.waitForFunction(() => {
    const visible = [...document.querySelectorAll('[data-detail]')].find((node) => {
      const style = getComputedStyle(node);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
    const text = (visible?.innerText || '').toLowerCase();
    return text.includes('numerical accuracy') && text.includes('do not infer') && text.includes('typical verification quantities');
  }, null, { timeout: 3000 });
  const outcomeInspector = (await detail.innerText()).toLowerCase();
  assert(outcomeInspector.includes('numerical accuracy') && outcomeInspector.includes('do not infer') && outcomeInspector.includes('typical verification quantities'), 'Outcome inspector is missing scientific scope/caution/metrics guidance.');

  const targetCell = page.locator('.matrix-cell[data-inspect-id="sampling:trainability"]');
  await targetCell.click();
  await detail.locator('[data-dp-audit-panel]').waitFor({ state: 'visible', timeout: 3000 });
  const cellInspector = (await detail.innerText()).toLowerCase();
  assert(cellInspector.includes('audited dependency record'), 'Cell inspector is missing the audited dependency record.');
  assert(cellInspector.includes('evidence scope') && cellInspector.includes('row-level synthesis'), 'Cell inspector does not distinguish row-level evidence scope.');
  assert(cellInspector.includes('registered trade-offs involving this outcome'), 'Cell inspector is missing explicit trade-off relationships.');
  assert(cellInspector.includes('design stack') && cellInspector.includes('co-design') && cellInspector.includes('failure diagnostics'), 'Cell inspector is missing cross-framework reasoning links.');

  await page.locator('[data-dp-compare]').click();
  for (const id of ['architecture-basis', 'sampling', 'optimizer']) await page.locator(`[data-dp-compare-toggle="${id}"]`).click();
  const comparison = await page.evaluate(() => ({
    selected: document.querySelectorAll('.dp-compare-toggle.is-selected').length,
    rows: document.querySelectorAll('.matrix-row.dp-compare-selected').length,
    muted: document.querySelectorAll('.matrix-row.dp-lens-muted').length
  }));
  assert(comparison.selected === 3 && comparison.rows === 3 && comparison.muted === 11, `Three-row comparison mode failed: ${JSON.stringify(comparison)}.`);

  const firstCell = page.locator('.matrix-cell[data-row-index="0"][data-col-index="0"]');
  await firstCell.focus(); await page.keyboard.press('ArrowRight');
  const focusedCol = await page.evaluate(() => document.activeElement?.dataset?.colIndex);
  assert(focusedCol === '1', `Spreadsheet ArrowRight navigation failed; focused column ${focusedCol}.`);

  const publicationDownload = page.waitForEvent('download');
  await page.locator('[data-svg-publication]').click();
  const download = await publicationDownload;
  const downloadPath = await download.path();
  const svg = await fs.readFile(downloadPath, 'utf8');
  assert(svg.includes('data-native-vector="true"'), 'Publication export is not the dedicated native-vector matrix exporter.');
  assert(!svg.includes('<foreignObject'), 'Publication matrix SVG still contains foreignObject HTML serialization.');
  assert((svg.match(/<circle/g) || []).length >= 98, 'Publication SVG is missing qualitative influence markers.');
  assert(svg.includes('QUALITATIVE INFLUENCE LEVEL') && svg.includes('Explicit outcome-pair trade-off'), 'Publication SVG is missing integrated legend semantics.');

  await page.screenshot({ path: path.join(artifactRoot, 'design-performance-v2-wide.png'), fullPage: true });

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const mobilePage = await mobile.newPage();
  await mobilePage.goto(`${baseUrl}/frameworks/design-performance/`, { waitUntil: 'networkidle' });
  await mobilePage.waitForSelector('.dp-mobile-view');
  const mobileState = await mobilePage.evaluate(() => ({
    table: getComputedStyle(document.querySelector('.dp-table-shell')).display,
    mobile: getComputedStyle(document.querySelector('.dp-mobile-view')).display,
    cards: document.querySelectorAll('.dp-mobile-card').length
  }));
  assert(mobileState.table === 'none' && mobileState.mobile !== 'none' && mobileState.cards === 7, `Default mobile scientific representation failed: ${JSON.stringify(mobileState)}.`);
  await mobilePage.locator('[data-dp-mobile-mode="outcome"]').click();
  assert(await mobilePage.locator('.dp-mobile-card').count() === 14, 'Outcome-oriented mobile representation must show all 14 design dimensions.');
  await mobilePage.locator('[data-dp-full-mobile]').click();
  const fullMobile = await mobilePage.evaluate(() => ({ classed: document.querySelector('.matrix-board-v2').classList.contains('dp-force-full-mobile'), table: getComputedStyle(document.querySelector('.dp-table-shell')).display, width: document.querySelector('.dependency-matrix-v2').scrollWidth }));
  assert(fullMobile.classed && fullMobile.table !== 'none' && fullMobile.width >= 2200, `Mobile full-matrix expansion failed: ${JSON.stringify(fullMobile)}.`);
  await mobilePage.screenshot({ path: path.join(artifactRoot, 'design-performance-v2-mobile.png'), fullPage: true });
  await mobile.close();

  assert(errors.length === 0, `Browser errors: ${errors.join(' | ')}`);
  console.log(`Design–Performance v2 browser QA passed: 14 rows · 7 outcomes · 98 cells · native SVG · mobile dual representation.`);
} finally {
  await browser.close();
}