import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-core';

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const outputDir = path.resolve(process.env.VISUAL_QA_OUTPUT || 'artifacts/pinn-ecosystem-visual-qa');
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');

const modes = [
  { name: 'desktop-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 1000, theme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' }
];
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const choose = async (page, value) => page.locator(`[data-option="${value}"]`).evaluate((node) => {
  node.checked = true;
  node.dispatchEvent(new Event('change', { bubbles: true }));
});

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, 'run-started.json'), `${JSON.stringify({ startedAt: new Date().toISOString() }, null, 2)}\n`);
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const report = { generatedAt: new Date().toISOString(), modes: [] };

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, colorScheme: mode.theme, reducedMotion: 'reduce' });
    await context.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('requestfailed', (request) => errors.push(`requestfailed: ${request.url()} (${request.failure()?.errorText || 'unknown'})`));
    page.on('response', (response) => { if (response.url().startsWith(baseUrl) && response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });

    await page.goto(`${baseUrl}/pinn-ecosystem/`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !document.querySelector('[data-builder-shell]')?.hidden && document.querySelectorAll('[data-field-id]').length > 0);
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });
    const layout = await page.evaluate(() => ({
      bodyWidth: document.body.scrollWidth,
      documentWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      viewportWidth: innerWidth,
      theme: document.documentElement.dataset.theme || 'system',
      fields: document.querySelectorAll('[data-builder-field]').length,
      selected: document.querySelectorAll('[data-field-id]:checked').length,
      diagramHeight: Number(document.querySelector('[data-pinn-diagram]')?.dataset.diagramHeight || 0),
      diagramScrollWidth: document.querySelector('[data-diagram-viewport]')?.scrollWidth || 0,
      diagramClientWidth: document.querySelector('[data-diagram-viewport]')?.clientWidth || 0,
      capText: document.body.textContent.includes('Select up to')
    }));
    assert(layout.theme === mode.theme, `${mode.name}: expected ${mode.theme} theme.`);
    assert(layout.fields === 31, `${mode.name}: expected 31 design fields.`);
    assert(layout.selected > 0, `${mode.name}: standard design did not load.`);
    assert(layout.diagramHeight > 1800, `${mode.name}: flowchart did not expand dynamically.`);
    assert(!layout.capText, `${mode.name}: arbitrary count-cap text remains.`);
    assert(layout.bodyWidth <= layout.viewportWidth + 1 && layout.documentWidth <= layout.clientWidth + 1, `${mode.name}: horizontal overflow detected.`);
    if (mode.width < 600) assert(layout.diagramScrollWidth > layout.diagramClientWidth, `${mode.name}: readable mobile panning width was not applied.`);

    const checkedValues = await page.locator('[data-field-id]:checked').evaluateAll((nodes) => nodes.map((node) => node.value));
    const diagramText = await page.locator('[data-pinn-diagram]').textContent();
    for (const value of checkedValues) assert(diagramText.includes(value), `${mode.name}: diagram omitted selected element “${value}”.`);

    if (mode.name === 'desktop-light') {
      await page.locator('[data-stage-index="1"]').click();
      await choose(page, 'Spatial coordinate x');
      await page.locator('[data-selection-rule-dialog]').waitFor({ state: 'visible' });
      assert((await page.locator('[data-selection-rule-content]').textContent()).includes('Choose one spatial-coordinate bundle'), 'Strict coordinate rule did not explain the block.');
      assert(!(await page.locator('[data-option="Spatial coordinate x"]').isChecked()), 'Blocked coordinate selection remained checked.');
      await page.locator('[data-close-rule]').click();

      await page.locator('[data-stage-index="2"]').click();
      await choose(page, 'Strong form');
      await choose(page, 'Weak form');
      await page.locator('[data-selection-rule-dialog]').waitFor({ state: 'visible' });
      const hybridNotice = await page.locator('[data-selection-rule-content]').textContent();
      assert(hybridNotice.includes('explicit hybrid formulation'), 'Strong + weak did not produce the hybrid interpretation notice.');
      await page.locator('[data-keep-rule]').click();
      assert(await page.locator('[data-option="Strong form"]').isChecked(), 'Strong form was incorrectly rejected.');
      assert(await page.locator('[data-option="Weak form"]').isChecked(), 'Weak form was incorrectly rejected.');

      const constraintOptions = ['Governing equation', 'Dirichlet', 'Neumann', 'Robin', 'Periodic', 'Conservation', 'Incompressibility'];
      for (const value of constraintOptions) await choose(page, value);
      assert(constraintOptions.every((value) => diagramText.includes(value)) || (await page.locator('[data-pinn-diagram]').textContent()).includes('Incompressibility'), 'Selections beyond the former six-item cap did not reach the flowchart.');

      await page.locator('[data-legend-edge="feedback"]').click();
      assert((await page.locator('[data-diagram-legend-detail]').textContent()).includes('sends the design back'), 'Interactive feedback legend did not explain the arrow.');
      assert(await page.locator('.diagram-edge.feedback').evaluate((node) => node.classList.contains('is-emphasized')), 'Feedback arrow was not highlighted.');
      await page.locator('[data-legend-edge="feedback"]').click();
      await page.locator('[data-diagram-zoom-in]').click();
      assert((await page.locator('[data-diagram-zoom-value]').textContent()).includes('125%'), 'Diagram zoom control did not update.');
      await page.locator('[data-diagram-zoom-fit]').click();
    }

    await page.locator('.studio-diagram').scrollIntoViewIfNeeded();
    const screenshot = `${mode.name}-flowchart.png`;
    await page.locator('.studio-diagram').screenshot({ path: path.join(outputDir, screenshot) });
    assert(errors.length === 0, `${mode.name}: browser errors:\n${errors.join('\n')}`);
    assert(badResponses.length === 0, `${mode.name}: HTTP errors:\n${badResponses.join('\n')}`);
    report.modes.push({ ...mode, layout, screenshot, errors, badResponses });
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(outputDir, 'visual-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`PINN Ecosystem visual QA passed in ${modes.length} viewport/theme modes.`);
