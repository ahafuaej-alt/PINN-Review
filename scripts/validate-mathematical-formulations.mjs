import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const runBrowser = process.argv.includes('--browser');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const executablePath = process.env.CHROME_BIN;
const dataDir = path.join(root, 'data', 'mathematical-formulations');
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const readJson = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));

const manifest = await readJson(path.join(dataDir, 'manifest.json'));
assert(Array.isArray(manifest.parts) && manifest.parts.length === 9, 'Expected nine A–I formulation data parts.');
const parts = [];
for (const spec of manifest.parts) {
  const part = await readJson(path.join(dataDir, spec.file));
  assert(part.category === spec.category, `${spec.file}: category differs from manifest.`);
  assert(part.formulations?.length === spec.count, `${spec.file}: expected ${spec.count} formulations, got ${part.formulations?.length}.`);
  assert(part.formulations.every((item) => item.category === part.category), `${spec.file}: formulation category mismatch.`);
  parts.push(part);
}
const formulations = parts.flatMap((part) => part.formulations);
const ids = formulations.map((item) => item.id);
const expectedIds = Array.from({ length: 114 }, (_, index) => `F${String(index + 1).padStart(3, '0')}`);
assert(formulations.length === 114, `Expected 114 formulation records, got ${formulations.length}.`);
assert(new Set(ids).size === 114, 'Duplicate mathematical formulation IDs detected.');
assert(JSON.stringify(ids) === JSON.stringify(expectedIds), 'Mathematical formulation IDs must be sequential F001–F114.');

const evidenceCounts = Object.fromEntries(['Direct','Equivalent','Synthesized'].map((name) => [name, formulations.filter((item) => item.evidence === name).length]));
assert(evidenceCounts.Direct === 18, `Expected 18 Direct formulations, got ${evidenceCounts.Direct}.`);
assert(evidenceCounts.Equivalent === 57, `Expected 57 Equivalent formulations, got ${evidenceCounts.Equivalent}.`);
assert(evidenceCounts.Synthesized === 39, `Expected 39 Synthesized formulations, got ${evidenceCounts.Synthesized}.`);
assert(evidenceCounts.Direct + evidenceCounts.Equivalent + evidenceCounts.Synthesized === formulations.length, 'Evidence-level counts do not reconcile with formulation total.');

for (const item of formulations) {
  assert(item.name && item.equation && item.meaning && item.purpose && item.relation && item.symbols, `${item.id}: required formulation content is incomplete.`);
  assert(Array.isArray(item.refs) && item.refs.length > 0, `${item.id}: no Atlas evidence IDs.`);
  assert(item.refs.every((id) => Number.isInteger(id) && id >= 1 && id <= 853), `${item.id}: reference ID outside Atlas range 1–853.`);
  assert(Array.isArray(item.tags), `${item.id}: tags must be an array.`);
}
const uniqueRefs = [...new Set(formulations.flatMap((item) => item.refs))].sort((a,b) => a-b);
assert(uniqueRefs.length === 154, `Expected 154 unique Atlas evidence references, got ${uniqueRefs.length}.`);
assert(uniqueRefs[0] === 5 && uniqueRefs.at(-1) === 845, `Expected evidence ID range [5]–[845], got [${uniqueRefs[0]}]–[${uniqueRefs.at(-1)}].`);
assert(manifest.integrity?.accepted_formulations === 114, 'Manifest accepted formulation total is not 114.');
assert(manifest.integrity?.direct === 18 && manifest.integrity?.equivalent === 57 && manifest.integrity?.synthesized === 39, 'Manifest evidence counts differ from the formulation data.');
assert(manifest.integrity?.unique_atlas_references_used === 154, 'Manifest unique reference count is not 154.');
assert(manifest.integrity?.invalid_reference_ids?.length === 0, 'Manifest reports invalid Atlas evidence IDs.');
assert(Array.isArray(manifest.notation) && manifest.notation.length >= 20, 'Global symbol dictionary is missing or unexpectedly small.');
assert(Array.isArray(manifest.coverage_audit) && manifest.coverage_audit.length >= 20, 'Coverage audit is missing or unexpectedly small.');

const pagePath = path.join(root, 'mathematical-formulations', 'index.html');
const pageHtml = await fs.readFile(pagePath, 'utf8');
const pageJs = await fs.readFile(path.join(root, 'assets', 'mathematical-formulations.js'), 'utf8');
const pageCss = await fs.readFile(path.join(root, 'assets', 'mathematical-formulations.css'), 'utf8');
const themeInit = await fs.readFile(path.join(root, 'assets', 'theme-init.js'), 'utf8');
const publicSource = [pageHtml, JSON.stringify(manifest), ...parts.map((part) => JSON.stringify(part))].join('\n');
const bannedPatterns = [
  [/manuscript/i, 'manuscript-oriented wording'],
  [/1\s*[–-]\s*509/, 'temporary 1–509 appearance-order system'],
  [/appearance\s+order/i, 'appearance-order wording'],
  [/review\s+under\s+preparation/i, 'review-under-preparation wording']
];
for (const [pattern, label] of bannedPatterns) assert(!pattern.test(publicSource), `Public Mathematical Formulations content still exposes ${label}.`);
assert(pageHtml.includes('Foundations &amp; Terminology'), 'Mathematical Formulations breadcrumb does not match navigation family.');
assert(pageHtml.includes('data-math-workflow'), 'Nine-stage workflow is missing from Mathematical Formulations page.');
assert((pageHtml.match(/data-workflow-step=/g) || []).length === 9, 'Expected exactly nine workflow stage controls.');
assert(pageHtml.includes('data-page-edit'), 'Page-level edit proposal control is missing.');
assert(pageJs.includes('data-edit-formula'), 'Per-formulation edit proposal control is missing.');
assert(pageJs.includes('issues/new'), 'Edit proposals do not open a reviewable GitHub issue route.');
assert(pageJs.includes('manifest.json') && pageJs.includes('manifest.parts'), 'Mathematical Formulations explorer does not load segmented manifest data.');
assert(themeInit.includes("['Mathematical Formulations', 'mathematical-formulations/'"), 'Shared navigation does not expose Mathematical Formulations.');
assert(themeInit.includes("label: 'Foundations & Terminology'"), 'Shared navigation family was not renamed to Foundations & Terminology.');
assert(pageCss.includes('@media(max-width:760px)'), 'Mathematical Formulations mobile styles are missing.');
assert(pageCss.includes('@media(prefers-reduced-motion:reduce)'), 'Mathematical Formulations reduced-motion styles are missing.');

console.log(`Static Mathematical Formulations integrity passed: ${formulations.length} records · ${evidenceCounts.Direct} Direct · ${evidenceCounts.Equivalent} Equivalent · ${evidenceCounts.Synthesized} Synthesized · ${uniqueRefs.length} Atlas references.`);
if (!runBrowser) process.exit(0);

assert(executablePath, 'CHROME_BIN must point to a Chromium-compatible browser when --browser is used.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
assert(chromium, 'Unable to load Chromium from the configured Playwright module.');
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const modes = [
  { name:'wide-light', width:1600, height:1000, theme:'light' },
  { name:'compact-dark', width:1440, height:1000, theme:'dark' },
  { name:'tablet-light', width:1024, height:900, theme:'light' },
  { name:'mobile-dark', width:390, height:844, theme:'dark' }
];

try {
  for (const mode of modes) {
    const context = await browser.newContext({ viewport:{ width:mode.width, height:mode.height }, reducedMotion:'reduce' });
    const page = await context.newPage();
    await page.addInitScript((theme) => localStorage.setItem('pinn-atlas-theme', theme), mode.theme);
    await page.route('**/*', async (requestRoute) => {
      const request = requestRoute.request();
      if (['image','font','media'].includes(request.resourceType())) return requestRoute.abort();
      if (request.url().startsWith('https://cdn.jsdelivr.net/')) return requestRoute.abort();
      return requestRoute.continue();
    });
    await page.goto(`${baseUrl}/mathematical-formulations/`, { waitUntil:'domcontentloaded' });
    await page.waitForSelector('.nav-links.atlas-global-nav', { state:'attached' });
    await page.waitForFunction(() => document.querySelectorAll('[data-formula-card]').length === 114);

    const state = await page.evaluate(() => ({
      cards: document.querySelectorAll('[data-formula-card]').length,
      workflow: document.querySelectorAll('[data-workflow-step]').length,
      referenceLinks: document.querySelectorAll('.math-reference-register a').length,
      sourceEditButtons: document.querySelectorAll('[data-edit-formula]').length,
      activePage: document.querySelector('[aria-current="page"] .atlas-nav-item-name')?.textContent.trim(),
      activeGroup: document.querySelector('.atlas-nav-group.is-active .atlas-nav-group-toggle')?.textContent.replace(/\s+/g,' ').trim(),
      title: document.querySelector('.math-hero h1')?.textContent.replace(/\s+/g,' ').trim(),
      bodyWidth: document.body.scrollWidth,
      docWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      viewportWidth: innerWidth
    }));
    assert(state.cards === 114, `${mode.name}: expected 114 rendered formulation cards.`);
    assert(state.workflow === 9, `${mode.name}: expected nine workflow controls.`);
    assert(state.referenceLinks === 154, `${mode.name}: expected 154 unique evidence-register links.`);
    assert(state.sourceEditButtons === 114, `${mode.name}: expected one edit proposal control per formulation.`);
    assert(state.activePage === 'Mathematical Formulations', `${mode.name}: Mathematical Formulations is not the active navigation destination.`);
    assert(state.activeGroup === 'Foundations & Terminology', `${mode.name}: Foundations & Terminology is not active.`);
    assert(state.title === 'PINN Mathematical Formulations', `${mode.name}: public page title is incorrect: “${state.title}”.`);
    assert(state.bodyWidth <= state.viewportWidth + 1, `${mode.name}: body width ${state.bodyWidth}px exceeds viewport ${state.viewportWidth}px.`);
    assert(state.docWidth <= state.clientWidth + 1, `${mode.name}: document width ${state.docWidth}px exceeds client ${state.clientWidth}px.`);

    await page.locator('[data-workflow-step="problem"]').click();
    assert(await page.locator('[data-workflow-dialog]').evaluate((node) => node.open), `${mode.name}: workflow dialog did not open.`);
    assert((await page.locator('[data-workflow-dialog] h2').textContent())?.trim() === 'Problem & Physics', `${mode.name}: wrong workflow dialog content.`);
    await page.locator('[data-dialog-close]').click();

    await page.locator('#math-search').fill('F114');
    await page.waitForFunction(() => document.getElementById('math-visible')?.textContent.trim() === '1');
    const visibleId = await page.locator('[data-formula-card]:not([hidden]) .formula-pill.id').textContent();
    assert(visibleId?.trim() === 'F114', `${mode.name}: formula search did not isolate F114.`);
    await context.close();
  }
  console.log(`Mathematical Formulations browser QA passed in ${modes.length} responsive theme modes.`);
} finally {
  await browser.close();
}
