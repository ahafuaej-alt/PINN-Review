import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-core';

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const outputDir = path.resolve(process.env.VISUAL_QA_OUTPUT || 'artifacts/site-reach-visual-qa');
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');

const modes = [
  { name: 'desktop-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 1000, theme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' }
];
const activeFixture = {
  schemaVersion: 1,
  status: 'active',
  provider: 'GoatCounter',
  trackingEndpoint: 'https://example.invalid/count',
  trackingStartedAt: '2026-08-12',
  updatedAt: '2026-08-12T03:00:00.000Z',
  visits: { total: 1284, last30Days: 476 },
  countries: {
    reached: 42,
    top: [
      { code: 'US', name: 'United States', visits: 304 },
      { code: 'CN', name: 'China', visits: 241 },
      { code: 'DE', name: 'Germany', visits: 118 },
      { code: 'GB', name: 'United Kingdom', visits: 103 },
      { code: 'IN', name: 'India', visits: 92 }
    ]
  }
};
const setupFixture = {
  schemaVersion: 1,
  status: 'setup_required',
  provider: 'GoatCounter',
  trackingEndpoint: null,
  trackingStartedAt: null,
  updatedAt: null,
  visits: { total: null, last30Days: null },
  countries: { reached: null, top: [] }
};
const assert = (condition, message) => { if (!condition) throw new Error(message); };

async function layout(page) {
  return page.evaluate(() => ({
    bodyWidth: document.body.scrollWidth,
    documentWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    viewportWidth: innerWidth,
    theme: document.documentElement.dataset.theme || 'system',
    status: document.querySelector('[data-atlas-reach]')?.dataset.reachStatus,
    countryRows: document.querySelectorAll('.reach-country').length,
    metrics: [...document.querySelectorAll('.reach-metrics dd')].map((node) => node.textContent.trim())
  }));
}

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const report = { generatedAt: new Date().toISOString(), modes: [] };

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, colorScheme: mode.theme, reducedMotion: 'reduce' });
    await context.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];
    await page.route('**/data/site-reach.json*', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(activeFixture) }));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('requestfailed', (request) => errors.push(`requestfailed: ${request.url()} (${request.failure()?.errorText || 'unknown'})`));
    page.on('response', (response) => { if (response.url().startsWith(baseUrl) && response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });

    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => document.querySelector('[data-atlas-reach]')?.dataset.reachStatus === 'active');
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });
    await page.locator('[data-atlas-reach]').scrollIntoViewIfNeeded();
    const initial = await layout(page);
    assert(initial.theme === mode.theme, `${mode.name}: expected ${mode.theme} theme.`);
    assert(initial.status === 'active', `${mode.name}: reach panel did not become active.`);
    assert(initial.countryRows === 5, `${mode.name}: expected five country rows.`);
    assert(initial.metrics.join('|') === '1,284|476|42', `${mode.name}: aggregate metrics are incorrect.`);
    assert(initial.bodyWidth <= initial.viewportWidth + 1 && initial.documentWidth <= initial.clientWidth + 1, `${mode.name}: horizontal overflow detected.`);
    const bars = await page.locator('.reach-country-fill').evaluateAll((nodes) => nodes.map((node) => Number.parseFloat(node.style.width)));
    assert(bars.length === 5 && Math.abs(bars[0] - 100) < .01 && bars.every((width) => width >= 4 && width <= 100), `${mode.name}: country bars are invalid.`);

    const filename = `${mode.name}-atlas-reach.png`;
    await page.screenshot({ path: path.join(outputDir, filename), fullPage: false });
    const screenshots = [filename];
    if (mode.width < 600) {
      await page.evaluate(() => scrollTo(0, 0));
      await page.locator('.nav-toggle').click();
      assert(await page.locator('.nav-toggle').getAttribute('aria-expanded') === 'true', `${mode.name}: mobile navigation did not open.`);
      const navigation = `${mode.name}-navigation.png`;
      await page.screenshot({ path: path.join(outputDir, navigation), fullPage: false });
      screenshots.push(navigation);
    }

    if (mode.name === 'desktop-light') {
      await page.unroute('**/data/site-reach.json*');
      await page.route('**/data/site-reach.json*', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(setupFixture) }));
      await page.reload({ waitUntil: 'networkidle' });
      await page.waitForFunction(() => document.querySelector('[data-atlas-reach]')?.dataset.reachStatus === 'setup_required');
      assert((await page.locator('[data-reach-total]').textContent()).trim() === '—', 'Setup state invented a total visit count.');
      assert((await page.locator('[data-reach-summary]').textContent()).includes('when collection begins'), 'Setup state is not transparent.');
      await page.goto(`${baseUrl}/privacy/#analytics`, { waitUntil: 'networkidle' });
      assert((await page.locator('#analytics').textContent()).includes('earlier traffic is not reconstructed'), 'Privacy page omits the tracking-start boundary.');
    }

    assert(errors.length === 0, `${mode.name}: browser errors:\n${errors.join('\n')}`);
    assert(badResponses.length === 0, `${mode.name}: HTTP errors:\n${badResponses.join('\n')}`);
    report.modes.push({ ...mode, initial, screenshots, errors, badResponses });
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(outputDir, 'visual-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Atlas reach visual QA passed in ${modes.length} viewport/theme modes.`);
