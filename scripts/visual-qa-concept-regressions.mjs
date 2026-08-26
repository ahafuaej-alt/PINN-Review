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
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });

  {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`${baseUrl}/performance-metrics/?metric=root_mean_squared_error#metric-root_mean_squared_error`, { waitUntil: 'networkidle' });
    await page.waitForSelector('#metric-root_mean_squared_error');
    const snapshot = await page.evaluate(() => ({
      failed: document.body.textContent.includes('Performance data could not be loaded.'),
      metricOpen: Boolean(document.querySelector('#metric-root_mean_squared_error')?.open),
      explorerPaperButtons: document.querySelectorAll('#metric-root_mean_squared_error [data-explorer-paper]').length
    }));
    assert(!snapshot.failed, 'RMSE deep link still triggers the performance-data failure notice.');
    assert(snapshot.metricOpen, 'RMSE deep link does not open the requested Metric Explorer card.');
    assert(snapshot.explorerPaperButtons > 0, 'RMSE Metric Explorer card did not finish rendering supporting paper links.');
    assert(errors.length === 0, `Performance Metrics page raised runtime errors: ${errors.join(' | ')}`);
    await page.close();
  }

  {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`${baseUrl}/frameworks/design-stack/?concept=metric:rmse`, { waitUntil: 'networkidle' });
    await page.waitForSelector('#atlas-concept-inspector:not([hidden])');
    const snapshot = await page.evaluate(() => ({
      title: document.querySelector('#atlas-concept-title')?.textContent?.trim() || '',
      destinations: [...document.querySelectorAll('.atlas-concept-destination')].map((link) => ({ label: link.textContent.trim(), href: link.getAttribute('href') })),
      contexts: [...document.querySelectorAll('.atlas-concept-contexts a')].map((link) => ({ label: link.textContent.trim(), href: link.getAttribute('href') }))
    }));
    assert(snapshot.title.includes('Root mean squared error'), `Unexpected concept inspector title: ${snapshot.title}`);
    assert(snapshot.destinations.some((item) => item.href?.includes('/performance-metrics/?metric=root_mean_squared_error')), 'RMSE Metric Explorer destination is missing.');
    assert(snapshot.destinations.some((item) => item.href?.includes('/mathematical-formulations/#F107')), 'RMSE exact Mathematical Formulations F107 destination is missing.');
    assert(snapshot.contexts.some((item) => item.href?.includes('/mathematical-formulations/#F107')), 'RMSE exact F107 occurrence is missing from “Where this concept appears”.');
    assert(!snapshot.contexts.some((item) => item.href?.includes('/frameworks/design-stack/#item=physics-enforcement')), 'RMSE incorrectly appears in the Design Stack Physics Enforcement context.');
    assert(!snapshot.contexts.some((item) => item.href?.includes('/frameworks/co-design/#item=physics')), 'RMSE incorrectly appears in the Co-Design Physics & Constraints context.');
    assert(!snapshot.contexts.some((item) => item.href?.includes('/frameworks/design-performance/#item=physics-enforcement')), 'RMSE incorrectly appears in the Design–Performance Physics Enforcement context.');
    assert(errors.length === 0, `Design Stack concept inspector raised runtime errors: ${errors.join(' | ')}`);
    await page.close();
  }

  {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`${baseUrl}/mathematical-formulations/#F107`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#F107');
    await page.waitForFunction(() => document.querySelectorAll('.equation-box mjx-container').length > 0, null, { timeout: 30000 });
    await page.waitForTimeout(300);
    const snapshot = await page.evaluate(() => ({
      formulaCards: document.querySelectorAll('.formula-card').length,
      equationBoxes: document.querySelectorAll('.equation-box').length,
      renderedMath: document.querySelectorAll('.equation-box mjx-container').length,
      rmseCard: Boolean(document.querySelector('#F107')),
      rawEquationBoxes: [...document.querySelectorAll('.equation-box')].filter((box) => /\\\[|\\\]/.test(box.textContent)).length
    }));
    assert(snapshot.formulaCards >= 100, `Mathematical Formulations catalogue is incomplete (${snapshot.formulaCards} cards).`);
    assert(snapshot.rmseCard, 'RMSE Mathematical Formulations F107 deep link does not resolve to its formula card.');
    assert(snapshot.renderedMath > 0, 'MathJax did not render the formulation equations.');
    assert(snapshot.rawEquationBoxes === 0, `${snapshot.rawEquationBoxes} equation boxes still expose raw display-math delimiters.`);
    const mathErrors = errors.filter((message) => /MathJax|replaceChild|Node\.replaceChild/i.test(message));
    assert(mathErrors.length === 0, `Mathematical Formulations raised MathJax/DOM errors: ${mathErrors.join(' | ')}`);
    await page.close();
  }

  await context.close();
  console.log('Concept runtime regression QA passed.');
} finally {
  await browser.close();
}
