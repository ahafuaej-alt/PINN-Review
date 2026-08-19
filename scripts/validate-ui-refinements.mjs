import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const runBrowser = process.argv.includes('--browser');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const read = (relativePath) => fs.readFile(path.join(root, relativePath), 'utf8');

const [pageHtml, refinementCss, themeInit, partB] = await Promise.all([
  read('mathematical-formulations/index.html'),
  read('assets/mathematical-formulations-refinements.css'),
  read('assets/theme-init.js'),
  read('data/mathematical-formulations/part-b.json').then(JSON.parse)
]);

assert(pageHtml.includes('mathematical-formulations-refinements.css'), 'Mathematical Formulations page does not load the workflow refinement stylesheet.');
assert(pageHtml.includes('data-workflow-feedback'), 'The visible workflow redesign-feedback rail is missing.');
assert(refinementCss.includes('.math-workflow-step:not(:nth-of-type(9))::after'), 'Visible main-flow connectors are missing between workflow cards.');
assert(refinementCss.includes('.math-workflow-feedback::before'), 'Dashed evaluation-to-redesign feedback line is missing.');
assert(refinementCss.includes('@media(prefers-reduced-motion:reduce)'), 'Workflow refinement lacks reduced-motion handling.');

const f019 = partB.formulations.find((item) => item.id === 'F019');
assert(f019, 'F019 Interface flux-continuity loss is missing.');
assert(f019.name === 'Interface flux-continuity loss', 'Unexpected F019 formulation record.');
assert(f019.equation.includes('\\right\\|_{2,\\Gamma_i}^{2}'), 'F019 norm must use one braced subscript group: ||·||_{2,Γ_i}^{2}.');
assert(!f019.equation.includes('\\right\\|_2^2_{\\Gamma_i}'), 'F019 still contains the ambiguous double-subscript form.');

for (const token of ['atlas-ambient-background', 'atlas-ambient-network', 'atlas-ambient-wave', 'atlas-ambient-collocation', 'atlasAmbientDriftA', 'prefers-reduced-motion: reduce', 'pointer-events: none', 'z-index: -1']) {
  assert(themeInit.includes(token), `Shared ambient background contract is missing “${token}”.`);
}
assert(themeInit.includes("ambient.setAttribute('aria-hidden', 'true')"), 'Ambient background must remain decorative and hidden from assistive technology.');
assert((themeInit.match(/className = 'atlas-ambient-background'/g) || []).length === 1, 'Ambient background must have one canonical shared definition.');

console.log('Static UI refinements passed: workflow connectors · F019 notation · shared PINN ambient background.');
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN must point to a Chromium-compatible browser when --browser is used.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium from the configured Playwright module.');
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });

const modes = [
  { name: 'wide-motion-light', width: 1600, height: 1000, reducedMotion: 'no-preference', theme: 'light' },
  { name: 'mobile-motion-dark', width: 390, height: 844, reducedMotion: 'no-preference', theme: 'dark' },
  { name: 'wide-reduced-dark', width: 1600, height: 1000, reducedMotion: 'reduce', theme: 'dark' },
  { name: 'mobile-reduced-light', width: 390, height: 844, reducedMotion: 'reduce', theme: 'light' }
];

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, reducedMotion: mode.reducedMotion });
    const page = await context.newPage();
    await page.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    await page.route('**/*', async (route) => {
      const request = route.request();
      if (['image', 'font', 'media'].includes(request.resourceType())) return route.abort();
      if (request.url().startsWith('https://cdn.jsdelivr.net/')) return route.abort();
      return route.continue();
    });
    await page.goto(`${baseUrl}/mathematical-formulations/`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.atlas-ambient-background', { state: 'attached' });
    await page.waitForFunction(() => document.querySelectorAll('[data-formula-card]').length === 114);

    const snapshot = await page.evaluate(() => {
      const ambient = document.querySelector('.atlas-ambient-background');
      const drift = document.querySelector('.atlas-ambient-drift-a');
      const firstStep = document.querySelector('.math-workflow-step');
      const feedback = document.querySelector('[data-workflow-feedback]');
      const mainConnector = getComputedStyle(firstStep, '::after');
      const feedbackLine = getComputedStyle(feedback, '::before');
      const ambientStyle = getComputedStyle(ambient);
      const driftStyle = getComputedStyle(drift);
      return {
        ambientCount: document.querySelectorAll('.atlas-ambient-background').length,
        ambientAriaHidden: ambient?.getAttribute('aria-hidden'),
        ambientPointerEvents: ambientStyle.pointerEvents,
        ambientPosition: ambientStyle.position,
        ambientZIndex: ambientStyle.zIndex,
        ambientAnimation: driftStyle.animationName,
        connectorContent: mainConnector.content,
        connectorWidth: parseFloat(mainConnector.width),
        feedbackContent: feedbackLine.content,
        feedbackStyle: feedbackLine.borderTopStyle,
        feedbackWidth: parseFloat(feedbackLine.width),
        bodyWidth: document.body.scrollWidth,
        documentWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        viewportWidth: innerWidth
      };
    });

    assert(snapshot.ambientCount === 1, `${mode.name}: expected exactly one shared ambient background.`);
    assert(snapshot.ambientAriaHidden === 'true', `${mode.name}: ambient background is not aria-hidden.`);
    assert(snapshot.ambientPointerEvents === 'none', `${mode.name}: ambient background can intercept pointer input.`);
    assert(snapshot.ambientPosition === 'fixed', `${mode.name}: ambient background is not fixed to the viewport.`);
    assert(snapshot.ambientZIndex === '-1', `${mode.name}: ambient background stacking changed unexpectedly.`);
    if (mode.reducedMotion === 'reduce') assert(snapshot.ambientAnimation === 'none', `${mode.name}: ambient motion did not stop for prefers-reduced-motion.`);
    else assert(snapshot.ambientAnimation && snapshot.ambientAnimation !== 'none', `${mode.name}: ambient background is not animated when motion is allowed.`);
    assert(snapshot.connectorContent !== 'none' && snapshot.connectorWidth > 0, `${mode.name}: main workflow connector is not visibly generated.`);
    assert(snapshot.feedbackContent !== 'none' && snapshot.feedbackStyle === 'dashed' && snapshot.feedbackWidth > 0, `${mode.name}: redesign feedback line is not visibly generated.`);
    assert(snapshot.bodyWidth <= snapshot.viewportWidth + 1, `${mode.name}: body width ${snapshot.bodyWidth}px exceeds viewport ${snapshot.viewportWidth}px.`);
    assert(snapshot.documentWidth <= snapshot.clientWidth + 1, `${mode.name}: document width ${snapshot.documentWidth}px exceeds client ${snapshot.clientWidth}px.`);

    await context.close();
  }
  console.log(`UI refinement browser QA passed in ${modes.length} responsive motion/theme modes.`);
} finally {
  await browser.close();
}
