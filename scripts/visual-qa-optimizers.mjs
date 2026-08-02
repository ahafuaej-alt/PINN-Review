import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-core';

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const outputDir = path.resolve(process.env.VISUAL_QA_OUTPUT || 'artifacts/optimizer-visual-qa');

if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');

const modes = [
  { name: 'desktop-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 1000, theme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' }
];

const captures = [
  ['top', 'body'],
  ['filters', '[data-search]'],
  ['overview', '[data-top-optimizers]'],
  ['matrix', '.optimizer-matrix'],
  ['papers', '[data-papers]'],
  ['explorer', '[data-optimizer-explorer]']
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function bodyLayout(page) {
  return page.evaluate(() => ({
    bodyScrollWidth: document.body.scrollWidth,
    documentScrollWidth: document.documentElement.scrollWidth,
    documentClientWidth: document.documentElement.clientWidth,
    viewportWidth: window.innerWidth,
    theme: document.documentElement.dataset.theme || 'system',
    metaThemeColor: document.querySelector('meta[name="theme-color"]')?.content || '',
    kpiCount: document.querySelectorAll('.kpi').length,
    familyCount: document.querySelectorAll('[data-family-card]').length,
    paperCardCount: document.querySelectorAll('[data-paper-card]').length,
    compareBarHidden: document.querySelector('[data-compare-bar]')?.hidden ?? false,
    compareBarDisplay: getComputedStyle(document.querySelector('[data-compare-bar]')).display,
    summary: document.querySelector('[data-result-summary]')?.textContent?.trim() || ''
  }));
}

function assertNoBodyOverflow(layout, modeName, checkpoint) {
  const allowance = 1;
  assert(
    layout.bodyScrollWidth <= layout.viewportWidth + allowance,
    `${modeName} ${checkpoint}: body width ${layout.bodyScrollWidth}px exceeds viewport ${layout.viewportWidth}px`
  );
  assert(
    layout.documentScrollWidth <= layout.documentClientWidth + allowance,
    `${modeName} ${checkpoint}: document width ${layout.documentScrollWidth}px exceeds client width ${layout.documentClientWidth}px`
  );
}

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const report = { baseUrl, executablePath, generatedAt: new Date().toISOString(), modes: [] };

try {
  for (const mode of modes) {
    const context = await browser.newContext({
      viewport: { width: mode.width, height: mode.height },
      colorScheme: mode.theme,
      reducedMotion: 'reduce'
    });
    await context.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];

    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(`console: ${message.text()}`);
    });
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('requestfailed', (request) => errors.push(`requestfailed: ${request.url()} (${request.failure()?.errorText || 'unknown'})`));
    page.on('response', (response) => {
      if (response.url().startsWith(baseUrl) && response.status() >= 400) {
        badResponses.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.goto(`${baseUrl}/optimizers/`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => (
      document.querySelectorAll('.kpi').length === 10
      && document.querySelectorAll('[data-family-card]').length === 8
      && document.querySelectorAll('[data-paper-card]').length === 30
      && document.querySelector('[data-result-summary]')?.textContent?.includes('853 paper records')
    ));
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });

    const initial = await bodyLayout(page);
    assert(initial.theme === mode.theme, `${mode.name}: expected ${mode.theme} theme, received ${initial.theme}`);
    assert(initial.kpiCount === 10, `${mode.name}: expected 10 KPI cards`);
    assert(initial.familyCount === 8, `${mode.name}: expected 8 optimizer-family cards`);
    assert(initial.paperCardCount === 30, `${mode.name}: expected 30 paper cards on the first page`);
    assert(initial.compareBarHidden, `${mode.name}: zero-selection comparison bar is not marked hidden`);
    assert(initial.compareBarDisplay === 'none', `${mode.name}: zero-selection comparison bar is visibly rendered`);
    assert(initial.summary.includes('853 paper records'), `${mode.name}: 853-record summary is missing`);
    assertNoBodyOverflow(initial, mode.name, 'initial');

    const screenshots = [];
    for (const [captureName, selector] of captures) {
      if (captureName === 'top') await page.evaluate(() => scrollTo(0, 0));
      else await page.locator(selector).first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
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

    await page.locator('[data-search]').fill('[248]');
    await page.waitForFunction(() => (
      document.querySelectorAll('[data-paper-card]').length === 1
      && document.querySelector('[data-paper-card="248"]')
      && document.querySelector('[data-result-summary]')?.textContent?.includes('1 paper record shown')
    ));
    assertNoBodyOverflow(await bodyLayout(page), mode.name, 'exact ID filter');

    await page.locator('[data-open-paper="248"]').click();
    await page.locator('[data-detail-dialog][open]').waitFor();
    assert(
      (await page.locator('#optimizer-detail-title').textContent())?.includes('[248]'),
      `${mode.name}: optimizer detail dialog does not retain the bracketed paper ID`
    );
    const detailFilename = `${mode.name}-detail-248.png`;
    await page.screenshot({ path: path.join(outputDir, detailFilename), fullPage: false });
    screenshots.push(detailFilename);
    assertNoBodyOverflow(await bodyLayout(page), mode.name, 'detail dialog');
    await page.locator('[data-detail-dialog] .dialog-close').click();

    await page.locator('[data-reset]').click();
    await page.waitForFunction(() => (
      document.querySelectorAll('[data-paper-card]').length === 30
      && document.querySelector('[data-result-summary]')?.textContent?.includes('853 paper records')
    ));
    await page.locator('[data-compare="1"]').check();
    await page.locator('[data-compare="2"]').check();
    assert(await page.locator('[data-compare-bar]').isVisible(), `${mode.name}: comparison bar did not appear after selecting two papers`);
    await page.locator('[data-open-compare]').click();
    await page.locator('[data-compare-dialog][open]').waitFor();
    assert(
      (await page.locator('#optimizer-compare-title').textContent())?.includes('[1], [2]'),
      `${mode.name}: comparison dialog does not retain both bracketed paper IDs`
    );
    const compareFilename = `${mode.name}-compare-1-2.png`;
    await page.screenshot({ path: path.join(outputDir, compareFilename), fullPage: false });
    screenshots.push(compareFilename);
    assertNoBodyOverflow(await bodyLayout(page), mode.name, 'comparison dialog');

    assert(errors.length === 0, `${mode.name}: browser errors:\n${errors.join('\n')}`);
    assert(badResponses.length === 0, `${mode.name}: HTTP errors:\n${badResponses.join('\n')}`);

    report.modes.push({
      ...mode,
      initial,
      screenshots,
      consoleErrors: errors,
      badResponses
    });
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(outputDir, 'visual-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Optimizer visual QA passed in ${modes.length} viewport/theme modes.`);
console.log(`Artifacts: ${outputDir}`);
