import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-core';

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const outputDir = path.resolve(process.env.VISUAL_QA_OUTPUT || 'artifacts/activation-functions-visual-qa');
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');

const modes = [
  { name: 'desktop-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 1000, theme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' }
];
const captures = [
  ['top', 'body'], ['filters', '[data-search]'], ['overview', '[data-top-activations]'],
  ['matrix', '.activation-matrix'], ['papers', '[data-papers]'], ['explorer', '[data-activation-explorer]']
];
const assert = (condition, message) => { if (!condition) throw new Error(message); };

async function bodyLayout(page) {
  return page.evaluate(() => {
    const compareBar = document.querySelector('[data-compare-bar]');
    return {
      bodyScrollWidth: document.body.scrollWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      documentClientWidth: document.documentElement.clientWidth,
      viewportWidth: innerWidth,
      theme: document.documentElement.dataset.theme || 'system',
      kpiCount: document.querySelectorAll('.kpi').length,
      familyCount: document.querySelectorAll('[data-family-card]').length,
      paperCardCount: document.querySelectorAll('[data-paper-card]').length,
      compareBarHidden: compareBar?.hidden ?? true,
      compareBarDisplay: compareBar ? getComputedStyle(compareBar).display : 'absent',
      summary: document.querySelector('[data-result-summary]')?.textContent?.trim() || ''
    };
  });
}

function assertNoBodyOverflow(layout, modeName, checkpoint) {
  assert(layout.bodyScrollWidth <= layout.viewportWidth + 1, `${modeName} ${checkpoint}: body width ${layout.bodyScrollWidth}px exceeds viewport ${layout.viewportWidth}px`);
  assert(layout.documentScrollWidth <= layout.documentClientWidth + 1, `${modeName} ${checkpoint}: document width ${layout.documentScrollWidth}px exceeds client width ${layout.documentClientWidth}px`);
}

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const report = { baseUrl, executablePath, generatedAt: new Date().toISOString(), modes: [] };

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, colorScheme: mode.theme, reducedMotion: 'reduce', acceptDownloads: true });
    await context.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('requestfailed', (request) => errors.push(`requestfailed: ${request.url()} (${request.failure()?.errorText || 'unknown'})`));
    page.on('response', (response) => { if (response.url().startsWith(baseUrl) && response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });

    await page.goto(`${baseUrl}/activation-functions/`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => document.querySelectorAll('.kpi').length === 12 && document.querySelectorAll('[data-family-card]').length === 8 && document.querySelectorAll('[data-paper-card]').length === 30 && document.querySelector('[data-result-summary]')?.textContent?.includes('853 paper records'));
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });

    const initial = await bodyLayout(page);
    assert(initial.theme === mode.theme, `${mode.name}: expected ${mode.theme} theme, received ${initial.theme}`);
    assert(initial.kpiCount === 12, `${mode.name}: expected 12 KPI cards`);
    assert(initial.familyCount === 8, `${mode.name}: expected 8 family cards`);
    assert(initial.paperCardCount === 30, `${mode.name}: expected 30 paper cards`);
    assert(initial.compareBarHidden && initial.compareBarDisplay === 'none', `${mode.name}: zero-selection comparison bar is visible`);
    assertNoBodyOverflow(initial, mode.name, 'initial');

    const kpis = await page.locator('.kpi strong').allTextContents();
    assert(kpis[0].replaceAll(',', '') === '853' && kpis[1] === '482' && kpis[2] === '371' && kpis[3] === '163', `${mode.name}: fixed source KPI totals are incorrect`);
    const widths = await page.locator('.metric-bar-fill').evaluateAll((nodes) => nodes.map((node) => Number.parseFloat(node.style.width)));
    assert(widths.length === 15 && Math.abs(widths[0] - 100) < 0.01 && widths.every((width) => width > 0 && width <= 100), `${mode.name}: proportional chart bars are invalid`);

    const screenshots = [];
    for (const [captureName, selector] of captures) {
      if (captureName === 'top') await page.evaluate(() => scrollTo(0, 0));
      else await page.locator(selector).first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      const filename = `${mode.name}-${captureName}.png`;
      await page.screenshot({ path: path.join(outputDir, filename), fullPage: false });
      screenshots.push(filename);
      assertNoBodyOverflow(await bodyLayout(page), mode.name, captureName);
    }

    if (mode.width < 600) {
      await page.evaluate(() => scrollTo(0, 0));
      await page.locator('.nav-toggle').click();
      assert(await page.locator('.nav-toggle').getAttribute('aria-expanded') === 'true', `${mode.name}: mobile navigation did not open`);
      const filename = `${mode.name}-navigation.png`;
      await page.screenshot({ path: path.join(outputDir, filename), fullPage: false });
      screenshots.push(filename);
      assertNoBodyOverflow(await bodyLayout(page), mode.name, 'navigation');
      await page.locator('.nav-toggle').click();
    }

    const tanhButton = page.locator('[data-chart-activation="tanh"]');
    await tanhButton.focus();
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => new URLSearchParams(location.search).get('activation') === 'tanh');
    assert(await tanhButton.getAttribute('aria-pressed') === 'true', `${mode.name}: keyboard chart activation did not set aria-pressed`);
    await page.locator('[data-reset]').click();

    for (const query of ['813', '[813]']) {
      await page.locator('[data-search]').fill(query);
      await page.waitForFunction(() => document.querySelectorAll('[data-paper-card]').length === 1 && document.querySelector('[data-paper-card="813"]'));
      assert((await page.locator('[data-paper-card="813"]').textContent())?.includes('adaptive tanh'), `${mode.name}: ${query} did not resolve [813] to adaptive tanh`);
    }
    await page.locator('[data-open-paper="813"]').click();
    await page.locator('[data-detail-dialog][open]').waitFor();
    assert((await page.locator('#activation-detail-title').textContent())?.includes('[813]'), `${mode.name}: detail dialog lost [813]`);
    const detailFilename = `${mode.name}-detail-813.png`;
    await page.screenshot({ path: path.join(outputDir, detailFilename), fullPage: false });
    screenshots.push(detailFilename);
    await page.locator('[data-detail-dialog] .dialog-close').click();

    await page.locator('[data-reset]').click();
    await page.locator('[data-status]').selectOption('review_or_survey');
    await page.waitForFunction(() => document.querySelector('[data-result-summary]')?.textContent?.startsWith('59 paper records'));
    await page.locator('[data-status]').selectOption('non_pinn_record');
    await page.waitForFunction(() => document.querySelector('[data-result-summary]')?.textContent?.startsWith('211 paper records'));
    await page.locator('[data-reset]').click();
    await page.locator('[data-role]').selectOption('output_layer');
    assert(!((await page.locator('[data-result-summary]').textContent()) || '').startsWith('0 paper'), `${mode.name}: output-layer role filter returned no records`);
    await page.locator('[data-reset]').click();
    await page.locator('[data-adaptive]').selectOption('true');
    await page.waitForFunction(() => document.querySelector('[data-result-summary]')?.textContent?.startsWith('17 paper records'));
    await page.locator('[data-reset]').click();
    await page.locator('[data-family]').selectOption('Periodic and oscillatory functions');
    assert(!((await page.locator('[data-result-summary]').textContent()) || '').startsWith('0 paper'), `${mode.name}: periodic-family filter returned no records`);

    await page.locator('[data-reset]').click();
    const implementationTanh = Number(await page.locator('[data-chart-activation="tanh"] .metric-bar-count').textContent());
    await page.locator('[data-count-mode]').selectOption('all_mentions');
    const allMentionTanh = Number(await page.locator('[data-chart-activation="tanh"] .metric-bar-count').textContent());
    assert(allMentionTanh > implementationTanh, `${mode.name}: review/all-mention mode did not change tanh count`);

    await page.locator('[data-search]').fill('[308]');
    await page.locator('[data-matrix-paper="308"][data-matrix-family="Bounded sigmoidal and saturating functions"]').click();
    await page.locator('[data-detail-dialog][open]').waitFor();
    assert((await page.locator('[data-detail-dialog]').textContent())?.includes('Hidden layer') && (await page.locator('[data-detail-dialog]').textContent())?.includes('Output layer'), `${mode.name}: matrix detail lost hidden/output roles`);
    await page.locator('[data-detail-dialog] .dialog-close').click();

    await page.locator('[data-reset]').click();
    await page.waitForFunction(() => document.querySelectorAll('[data-paper-card]').length === 30);
    for (const id of [1, 2, 3, 4, 5]) await page.locator(`[data-compare="${id}"]`).check();
    assert((await page.locator('[data-compare-count]').textContent()) === '5 selected', `${mode.name}: comparison did not accept five papers`);
    await page.locator('[data-open-compare]').click();
    await page.locator('[data-compare-dialog][open]').waitFor();
    assert((await page.locator('#activation-compare-title').textContent())?.includes('[1], [2], [3], [4], [5]'), `${mode.name}: five-paper comparison lost bracketed IDs`);
    const compareFilename = `${mode.name}-compare-1-5.png`;
    await page.screenshot({ path: path.join(outputDir, compareFilename), fullPage: false });
    screenshots.push(compareFilename);
    await page.locator('[data-compare-dialog] .dialog-close').click();

    if (mode.name === 'desktop-light') {
      const [jsonDownload] = await Promise.all([page.waitForEvent('download'), page.locator('[data-export-json]').click()]);
      const [csvDownload] = await Promise.all([page.waitForEvent('download'), page.locator('[data-export-csv]').click()]);
      assert((await jsonDownload.suggestedFilename()).endsWith('.json') && (await csvDownload.suggestedFilename()).endsWith('.csv'), 'Filtered exports did not download JSON and CSV');

      await page.goto(`${baseUrl}/references/?q=813#ref=813`, { waitUntil: 'networkidle' });
      await page.locator('[data-bibliography-id="813"]').waitFor();
      await page.locator('[data-bibliography-id="813"] > .reference-content > .reference-details > summary').click();
      await page.locator('[data-technical-detail="813"] > summary').click();
      await page.waitForFunction(() => document.querySelector('[data-technical-detail="813"]')?.textContent?.includes('Activation functions') && document.querySelector('[data-technical-detail="813"]')?.textContent?.includes('adaptive tanh'));
      const technicalFilename = `${mode.name}-reference-technical-813.png`;
      await page.locator('[data-technical-detail="813"]').scrollIntoViewIfNeeded();
      await page.screenshot({ path: path.join(outputDir, technicalFilename), fullPage: false });
      screenshots.push(technicalFilename);
      assertNoBodyOverflow(await bodyLayout(page), mode.name, 'reference technical details');
    }

    assert(errors.length === 0, `${mode.name}: browser errors:\n${errors.join('\n')}`);
    assert(badResponses.length === 0, `${mode.name}: HTTP errors:\n${badResponses.join('\n')}`);
    report.modes.push({ ...mode, initial, screenshots, consoleErrors: errors, badResponses });
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(outputDir, 'visual-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Activation Functions visual QA passed in ${modes.length} viewport/theme modes.`);
console.log(`Artifacts: ${outputDir}`);
