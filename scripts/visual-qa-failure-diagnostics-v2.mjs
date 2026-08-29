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
  await page.goto(`${baseUrl}/frameworks/failure-diagnostics/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.fd-board-v2');

  const contract = await page.evaluate(() => ({
    categories: document.querySelectorAll('.fd-category').length,
    rows: document.querySelectorAll('.fd-row').length,
    components: document.querySelectorAll('[data-fd-component]').length,
    verificationOutcomes: document.querySelectorAll('.fd-outcome-chip').length,
    workbench: Boolean(document.querySelector('.fd-workbench')),
    compare: Boolean(document.querySelector('.fd-compare-panel')),
    mobile: Boolean(document.querySelector('.fd-mobile-stepper')),
    width: document.querySelector('.fd-map-shell')?.scrollWidth || 0,
    categorySticky: getComputedStyle(document.querySelector('.fd-category-rail')).position,
    challengeSticky: getComputedStyle(document.querySelector('.fd-challenge')).position,
    headerSticky: getComputedStyle(document.querySelector('.fd-head')).position,
    nativeExport: document.querySelector('.fd-board-v2')?.dataset.nativeVectorExport
  }));
  assert(contract.categories === 4, `Expected four diagnostic families, found ${contract.categories}.`);
  assert(contract.rows === 13, `Expected thirteen failure modes, found ${contract.rows}.`);
  assert(contract.components === 52, `Expected 52 deep-linkable pathway components, found ${contract.components}.`);
  assert(contract.verificationOutcomes === 7, `Expected seven verification outcomes, found ${contract.verificationOutcomes}.`);
  assert(contract.workbench && contract.compare && contract.mobile, 'Symptom workbench, comparison panel, or mobile stepper is missing.');
  assert(contract.width >= 1900, `Scientific map was compressed below the intended wide-layout scale (${contract.width}px).`);
  assert(contract.categorySticky === 'sticky' && contract.challengeSticky === 'sticky' && contract.headerSticky === 'sticky', `Sticky map context failed: ${JSON.stringify(contract)}.`);
  assert(contract.nativeExport === 'true', 'Failure Diagnostics did not register its native-vector exporter.');

  const firstSymptom = page.locator('[data-fd-symptom]').first();
  const symptomLabel = (await firstSymptom.innerText()).trim();
  await firstSymptom.click();
  const candidateState = await page.evaluate(() => ({
    selected: document.querySelectorAll('.fd-symptom-chip.is-selected').length,
    candidates: document.querySelectorAll('.fd-candidate-row').length,
    muted: document.querySelectorAll('.fd-symptom-muted').length,
    text: document.querySelector('[data-fd-candidate-summary]')?.innerText || ''
  }));
  assert(candidateState.selected === 1 && candidateState.candidates >= 1 && candidateState.muted >= 1, `Symptom-first differential diagnosis failed after selecting ${symptomLabel}: ${JSON.stringify(candidateState)}.`);
  assert(/not a ranking|unranked|without probability/i.test(candidateState.text), 'Candidate summary must state the non-probabilistic interpretation boundary.');

  const symptomComponent = page.locator('[data-fd-component="spectral-bias:symptoms"]');
  await symptomComponent.click();
  const detail = page.locator('[data-detail]:visible').first();
  await detail.locator('.fd-cross-trace').waitFor({ state: 'visible', timeout: 3000 });
  const inspector = (await detail.innerText()).toLowerCase();
  assert(inspector.includes('discriminating checks'), 'Component inspector is missing discriminating checks.');
  assert(inspector.includes('confirmatory') && inspector.includes('symptoms alert'), 'Component inspector does not separate symptoms from confirmatory diagnostics.');
  assert(inspector.includes('trade-offs to verify'), 'Component inspector is missing response trade-offs.');
  assert(inspector.includes('cross-framework reasoning trace') && inspector.includes('design stack') && inspector.includes('co-design') && inspector.includes('design–performance') && inspector.includes('performance metrics'), 'Component inspector is missing the global cross-framework reasoning chain.');
  assert(inspector.includes('evidence scope') && inspector.includes('documentation scope'), 'Component inspector is missing evidence-scope semantics.');
  assert(page.url().includes('spectral-bias%3Asymptoms') || page.url().includes('spectral-bias:symptoms'), 'Component selection did not create a stable deep link.');

  await page.locator('[data-fd-evidence-lens]').click();
  const evidenceLens = await page.evaluate(() => ({
    enabled: document.querySelector('.fd-board-v2').classList.contains('fd-evidence-lens'),
    exact: document.querySelectorAll('.fd-cell[data-evidence-scope="exact"]').length,
    pathway: document.querySelectorAll('.fd-cell[data-evidence-scope="pathway"]').length,
    visibleBadges: [...document.querySelectorAll('.fd-cell > .fd-evidence-badge')].filter((node) => Number.parseFloat(getComputedStyle(node).opacity) > .5).length
  }));
  assert(evidenceLens.enabled && evidenceLens.exact > 0 && evidenceLens.pathway > 0 && evidenceLens.visibleBadges === 52, `Evidence coverage lens failed: ${JSON.stringify(evidenceLens)}.`);

  await page.locator('[data-fd-compare]').click();
  for (const id of ['spectral-bias', 'imbalanced-loss', 'stagnation']) await page.locator(`[data-fd-compare-mode="${id}"]`).click();
  const comparison = await page.evaluate(() => ({
    selected: document.querySelectorAll('.fd-row-compare.is-selected').length,
    cards: document.querySelectorAll('.fd-compare-card').length,
    panelHidden: document.querySelector('[data-fd-compare-panel]').hidden,
    text: document.querySelector('[data-fd-compare-panel]')?.innerText || ''
  }));
  assert(comparison.selected === 3 && comparison.cards === 3 && !comparison.panelHidden, `Three-pathway comparison failed: ${JSON.stringify(comparison)}.`);
  assert(/no probability|universal best-fix/i.test(comparison.text), 'Comparison panel must preserve the qualitative interpretation boundary.');

  await symptomComponent.focus();
  await page.keyboard.press('ArrowRight');
  const focused = await page.evaluate(() => document.activeElement?.dataset?.fdComponent || '');
  assert(focused === 'spectral-bias:response', `Arrow-key pathway navigation failed; focused ${focused}.`);

  await page.locator('[data-fd-outcome="fidelity"]').click();
  const outcomeText = (await detail.innerText()).toLowerCase();
  assert(outcomeText.includes('physical fidelity') && outcomeText.includes('typical verification quantities') && outcomeText.includes('design–performance'), 'Verification outcome inspector is incomplete.');

  const exportMenu = page.locator('.toolbar-export');
  if (!(await exportMenu.evaluate((node) => node.open))) await exportMenu.locator('summary').click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('[data-svg-publication]').click()
  ]);
  const downloadPath = await download.path();
  const svg = await fs.readFile(downloadPath, 'utf8');
  assert(svg.includes('data-native-vector="true"'), 'Publication export is not the dedicated native-vector Failure Diagnostics exporter.');
  assert(!svg.includes('<foreignObject'), 'Publication Failure Diagnostics SVG still contains foreignObject HTML serialization.');
  assert(svg.includes('DIAGNOSE FIRST, THEN RESPOND') && svg.includes('VERIFY IMPROVEMENT'), 'Publication SVG is missing the diagnostic rule or verification loop.');
  assert(svg.includes('● exact component support') && svg.includes('◐ pathway-level synthesis evidence'), 'Publication SVG is missing evidence-scope semantics.');

  await page.screenshot({ path: path.join(artifactRoot, 'failure-diagnostics-v2-wide.png'), fullPage: true });

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const mobilePage = await mobile.newPage();
  await mobilePage.goto(`${baseUrl}/frameworks/failure-diagnostics/`, { waitUntil: 'networkidle' });
  await mobilePage.waitForSelector('.fd-mobile-stepper');
  const mobileState = await mobilePage.evaluate(() => ({
    map: getComputedStyle(document.querySelector('.fd-map-shell')).display,
    stepper: getComputedStyle(document.querySelector('.fd-mobile-stepper')).display,
    step: document.querySelector('.fd-mobile-step h4')?.textContent || '',
    progress: document.querySelector('[data-fd-mobile-progress]')?.textContent || ''
  }));
  assert(mobileState.map === 'none' && mobileState.stepper !== 'none' && /Observed symptoms/i.test(mobileState.step) && mobileState.progress.includes('1 / 5'), `Mobile diagnostic stepper failed: ${JSON.stringify(mobileState)}.`);
  await mobilePage.locator('[data-fd-mobile-nav="1"]').click();
  await mobilePage.locator('[data-fd-mobile-nav="1"]').click();
  const thirdStep = await mobilePage.locator('.fd-mobile-step h4').innerText();
  assert(/Discriminating checks/i.test(thirdStep), `Mobile stepper did not reach discriminating checks; found ${thirdStep}.`);
  await mobilePage.screenshot({ path: path.join(artifactRoot, 'failure-diagnostics-v2-mobile.png'), fullPage: true });
  await mobile.close();

  assert(errors.length === 0, `Browser console/page errors detected: ${errors.join(' | ')}`);
  console.log('Failure Diagnostics v2 browser QA passed: wide map, symptom-first diagnosis, component deep links, evidence lens, comparison, keyboard navigation, native SVG, and mobile stepper.');
} finally {
  await browser.close();
}
