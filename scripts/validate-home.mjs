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

const html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
const homeJs = await fs.readFile(path.join(root, 'assets', 'home-refresh.js'), 'utf8');
const overview = JSON.parse(await fs.readFile(path.join(root, 'data', 'atlas-overview.json'), 'utf8'));

assert(html.includes('<link rel="canonical" href="https://ahafuaej-alt.github.io/PINN-Review/">'), 'Homepage canonical URL is missing or incorrect.');
assert(html.includes('property="og:title"') && html.includes('property="og:description"') && html.includes('property="og:url"'), 'Homepage Open Graph metadata is incomplete.');
assert(html.includes('assets/home-refresh.css') && html.includes('assets/home-refresh.js'), 'Homepage refresh assets are not loaded.');
assert(html.includes('Atlas Evidence Architecture'), 'Atlas Evidence Architecture figure is missing.');
assert(html.includes('id="ecosystem-feature-title"'), 'Featured PINN Ecosystem section is missing.');
assert(html.includes('id="atlas-title"'), 'Grouped Atlas research directory is missing.');
assert(html.includes('id="evidence-title"'), 'Evidence protocol section is missing.');
assert(homeJs.includes('Foundations & Terminology'), 'Homepage runtime hierarchy does not rename the foundations group.');
assert(homeJs.includes('mathematical-formulations/'), 'Homepage does not integrate Mathematical Formulations.');
assert(homeJs.includes('overviewCard'), 'Homepage live snapshot provenance enhancement is missing.');
assert(homeJs.includes('data-home-workflow'), 'Homepage interactive nine-stage workflow is missing.');
assert(homeJs.includes('architectureRoute'), 'Homepage evidence architecture is not interactive.');

const navMount = html.match(/<div\b[^>]*class=["'][^"']*nav-links[^"']*["'][^>]*id=["']nav-links["'][^>]*>([\s\S]*?)<\/div>/i)
  || html.match(/<div\b[^>]*id=["']nav-links["'][^>]*class=["'][^"']*nav-links[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
assert(navMount, 'Homepage shared navigation mount is missing.');
assert(!/<a\b/i.test(navMount[1]), 'Homepage contains a legacy page-defined navigation link; the shared navigation mount must remain empty.');

for (const [key, value] of Object.entries(overview.stats || {})) {
  assert(Number.isInteger(value) && value > 0, `Atlas overview statistic ${key} is invalid.`);
}
assert(overview.stats.papers === 853, `Expected current Atlas corpus size 853, got ${overview.stats.papers}.`);
assert(overview.stats.mathematical_formulations === 114, `Expected 114 mathematical formulations, got ${overview.stats.mathematical_formulations}.`);
for (const key of ['papers','countries','performance_metrics','optimizer_forms','activation_functions','ecosystem_layers','mathematical_formulations']) {
  const source = overview.sources?.[key];
  assert(source?.dataset && source?.page && /^\d{4}-\d{2}-\d{2}$/.test(source?.date || ''), `Homepage source ${key} lacks dataset/page/date provenance.`);
}

console.log('Static homepage contract passed.');
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN must point to a Chromium-compatible browser when --browser is used.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium from the configured Playwright module.');

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const modes = [
  { name: 'wide-light', width: 1600, height: 1000, theme: 'light' },
  { name: 'wide-dark', width: 1600, height: 1000, theme: 'dark' },
  { name: 'compact-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'tablet-dark', width: 1024, height: 900, theme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' }
];

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.nav-links.atlas-global-nav', { state: 'attached' });
    await page.waitForFunction(() => document.documentElement.dataset.atlasOverview === 'ready');

    const state = await page.evaluate(() => {
      const groupLabels = [...document.querySelectorAll('.home-directory-group .directory-label h3')].map((node) => node.textContent.trim());
      const metricText = (key) => document.querySelector(`.home-snapshot [data-overview-value="${key}"]`)?.textContent.trim();
      const figure = document.querySelector('.evidence-architecture-card')?.getBoundingClientRect();
      const ecosystem = document.querySelector('.home-feature-section')?.getBoundingClientRect();
      const directory = document.querySelector('.home-directory')?.getBoundingClientRect();
      const evidence = document.querySelector('.home-evidence-section')?.getBoundingClientRect();
      const reach = document.querySelector('.reach-section')?.getBoundingClientRect();
      return {
        groupLabels,
        metrics: {
          papers: metricText('papers'),
          countries: metricText('countries'),
          performance_metrics: metricText('performance_metrics'),
          optimizer_forms: metricText('optimizer_forms'),
          activation_functions: metricText('activation_functions'),
          mathematical_formulations: document.querySelector('[data-overview-value="mathematical_formulations"]')?.textContent.trim()
        },
        bodyWidth: document.body.scrollWidth,
        docWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        viewportWidth: innerWidth,
        figureWidth: figure?.width || 0,
        figureHeight: figure?.height || 0,
        order: {
          ecosystem: ecosystem?.top + scrollY,
          directory: directory?.top + scrollY,
          evidence: evidence?.top + scrollY,
          reach: reach?.top + scrollY
        },
        architectureTitle: document.querySelector('#architecture-title')?.textContent.trim(),
        architectureLinks: document.querySelectorAll('[data-architecture-route]').length,
        snapshotCards: document.querySelectorAll('[data-overview-card]').length,
        provenanceLinks: document.querySelectorAll('.home-snapshot-provenance').length,
        workflowButtons: document.querySelectorAll('[data-home-workflow]').length,
        mathCard: Boolean(document.querySelector('a[href="mathematical-formulations/"]')),
        liveStatuses: document.querySelectorAll('.home-status[data-state="live"]').length,
        preparedStatuses: document.querySelectorAll('.home-status[data-state="prepared"]').length,
        governanceStatuses: document.querySelectorAll('.home-status[data-state="governance"]').length,
        homeTitle: document.querySelector('.home-hero h1')?.textContent.replace(/\s+/g,' ').trim(),
        atlasTitle: document.querySelector('#atlas-title')?.textContent.replace(/\s+/g,' ').trim(),
        reachTitle: document.querySelector('#atlas-reach-title')?.textContent.trim()
      };
    });

    const expectedLabels = ['Methods & Evaluation', 'Foundations & Terminology', 'Research Landscape', 'Tools & Resources', 'Data Governance'];
    assert(JSON.stringify(state.groupLabels) === JSON.stringify(expectedLabels), `${mode.name}: grouped research directory order differs from the approved hierarchy.`);
    assert(state.metrics.papers === '853', `${mode.name}: homepage paper count did not load from Atlas overview.`);
    assert(state.metrics.countries === '63', `${mode.name}: homepage country count did not load from Atlas overview.`);
    assert(state.metrics.performance_metrics === '123', `${mode.name}: performance metric count did not load.`);
    assert(state.metrics.optimizer_forms === '53', `${mode.name}: optimizer count did not load.`);
    assert(state.metrics.activation_functions === '62', `${mode.name}: activation count did not load.`);
    assert(state.metrics.mathematical_formulations === '114', `${mode.name}: Mathematical Formulations count did not load.`);
    assert(state.snapshotCards === 6 && state.provenanceLinks === 6, `${mode.name}: expected six clickable snapshot cards with six provenance footers.`);
    assert(state.architectureLinks >= 12, `${mode.name}: Atlas Evidence Architecture lacks interactive destinations.`);
    assert(state.workflowButtons === 9, `${mode.name}: expected nine interactive workflow stages.`);
    assert(state.mathCard, `${mode.name}: Mathematical Formulations is missing from the Home directory.`);
    assert(state.homeTitle === 'Physics, learning, and evidence mapped', `${mode.name}: Home hero title style is incorrect: “${state.homeTitle}”.`);
    assert(state.atlasTitle === 'One AtlasFive research doors' || state.atlasTitle === 'One Atlas Five research doors', `${mode.name}: Atlas directory title was not converted from review-oriented wording.`);
    assert(state.reachTitle === 'Atlas usage snapshot', `${mode.name}: usage title still has paper-style punctuation.`);
    assert(state.bodyWidth <= state.viewportWidth + 1, `${mode.name}: body width ${state.bodyWidth}px exceeds viewport ${state.viewportWidth}px.`);
    assert(state.docWidth <= state.clientWidth + 1, `${mode.name}: document width ${state.docWidth}px exceeds client ${state.clientWidth}px.`);
    assert(state.figureWidth > 250 && state.figureHeight > 180, `${mode.name}: evidence architecture figure is not visibly rendered.`);
    assert(state.architectureTitle === 'Atlas Evidence Architecture', `${mode.name}: architecture title is missing.`);
    assert(state.order.ecosystem < state.order.directory && state.order.directory < state.order.evidence && state.order.evidence < state.order.reach, `${mode.name}: homepage research-first section order is incorrect.`);
    assert(state.liveStatuses >= 7, `${mode.name}: mature live modules are not clearly identified after adding formulations.`);
    assert(state.preparedStatuses >= 5, `${mode.name}: prepared workspaces are not clearly distinguished.`);
    assert(state.governanceStatuses === 3, `${mode.name}: expected three governance modules.`);

    await page.locator('[data-home-workflow="01"]').click();
    assert(await page.locator('[data-home-workflow-dialog]').evaluate((node) => node.open), `${mode.name}: workflow details dialog did not open.`);
    const workflowTitle = await page.locator('[data-home-workflow-dialog] h2').textContent();
    assert(workflowTitle?.trim() === 'Problem & Physics', `${mode.name}: workflow dialog opened the wrong stage.`);
    await page.locator('.home-workflow-close').click();

    await context.close();
  }

  console.log(`Homepage browser QA passed in ${modes.length} viewport/theme modes with live provenance, architecture links, and nine-stage workflow.`);
} finally {
  await browser.close();
}
