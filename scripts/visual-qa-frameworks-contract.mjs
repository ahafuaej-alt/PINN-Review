import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const executablePath = process.env.CHROME_BIN;
if (!executablePath) throw new Error('CHROME_BIN must point to a Chromium-compatible browser.');
const playwrightPath = process.env.PLAYWRIGHT_CORE_PATH;
const playwrightModule = playwrightPath ? await import(pathToFileURL(playwrightPath).href) : await import('playwright-core');
const chromium = playwrightModule.chromium || playwrightModule.default?.chromium;
if (!chromium) throw new Error('Unable to load Chromium from playwright-core.');

const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const artifactDir = path.resolve(process.env.FRAMEWORK_QA_ARTIFACTS || 'artifacts/frameworks');
await fs.mkdir(artifactDir, { recursive: true });
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const routes = [
  { id: 'design-stack', path: 'frameworks/design-stack/', selector: '.stack-board', objects: ['.stack-stage', 10], relations: 24 },
  { id: 'co-design', path: 'frameworks/co-design/', selector: '.co-board', objects: ['.co-domain', 6], relations: 20 },
  { id: 'design-performance', path: 'frameworks/design-performance/', selector: '.matrix-board-v2', objects: ['.matrix-row', 14], cells: 98 },
  { id: 'failure-diagnostics', path: 'frameworks/failure-diagnostics/', selector: '.diagnostic-board', objects: ['.diagnostic-row', 13], categories: 4 }
];
const viewports = [
  { name: 'wide', width: 1800, height: 1100 },
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 }
];

const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport, reducedMotion: 'reduce', acceptDownloads: true });
    for (const route of routes) {
      const page = await context.newPage();
      const errors = [];
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(`${baseUrl}/${route.path}`, { waitUntil: 'networkidle' });
      await page.waitForSelector(route.selector);
      if (route.id === 'co-design') await page.waitForFunction(() => document.documentElement.dataset.coDesignV2 === 'ready');
      if (route.id === 'design-performance') await page.waitForFunction(() => document.documentElement.dataset.designPerformanceLayout === 'ready');

      const snapshot = await page.evaluate(({ route, viewport }) => {
        const canvas = document.querySelector('[data-canvas]');
        const relationSelector = route.id === 'co-design' ? '.co-v2-path' : '.relation-path';
        const visibleMatrixMarkers = [...document.querySelectorAll('.dependency-matrix-v2 .influence-marker')].map((node) => {
          const box = node.getBoundingClientRect(); return [Math.round(box.width * 10) / 10, Math.round(box.height * 10) / 10];
        }).filter(([width, height]) => width > 0 && height > 0);
        return {
          bodyWidth: document.body.scrollWidth,
          viewportWidth: innerWidth,
          canvasClientWidth: canvas?.clientWidth || 0,
          canvasScrollWidth: canvas?.scrollWidth || 0,
          diagnosticMapWidth: document.querySelector('.fd-map-shell')?.scrollWidth || 0,
          objectCount: document.querySelectorAll(route.objects[0]).length,
          relationCount: document.querySelectorAll(relationSelector).length,
          feedbackCount: document.querySelectorAll('.relation-feedback').length,
          couplingCount: document.querySelectorAll('.relation-coupling').length,
          stackItemCount: document.querySelectorAll('.stack-stage-item').length,
          phaseRailSymbols: document.querySelectorAll('.stack-phase-rail i').length,
          cellCount: document.querySelectorAll('.matrix-cell').length,
          outcomeCount: document.querySelectorAll('.dp-outcome-head').length,
          familyCount: document.querySelectorAll('.dp-family-rail').length,
          matrixWidth: document.querySelector('.dependency-matrix-v2')?.scrollWidth || 0,
          tableShellClientWidth: document.querySelector('.dp-table-shell')?.clientWidth || 0,
          tableShellScrollWidth: document.querySelector('.dp-table-shell')?.scrollWidth || 0,
          mobileMatrixDisplay: document.querySelector('.dp-mobile-view') ? getComputedStyle(document.querySelector('.dp-mobile-view')).display : null,
          mobileCardCount: document.querySelectorAll('.dp-mobile-card').length,
          categoryCount: document.querySelectorAll('.diagnostic-category').length,
          verifyPresent: Boolean(document.querySelector('.diagnostic-verify')),
          corePresent: Boolean(document.querySelector('.co-core')),
          coV2Ready: document.documentElement.dataset.coDesignV2 === 'ready',
          coV2RelationSemantics: route.id === 'co-design' ? {
            influence: document.querySelectorAll('.co-v2-path[data-semantic="influence"]').length,
            verification: document.querySelectorAll('.co-v2-path[data-semantic="verification"]').length,
            feedback: document.querySelectorAll('.co-v2-path[data-semantic="feedback"]').length
          } : null,
          visibleMatrixMarkers,
          evidenceCards: document.querySelectorAll('.evidence-paper-card').length,
          supportBadges: document.querySelectorAll('.evidence-paper-grid .evidence-support-badge').length,
          locationTags: document.querySelectorAll('.evidence-paper-grid .framework-location-tag').length,
          navFrameworkChildren: [...document.querySelectorAll('.atlas-nav-group')].find((group) => group.querySelector('.atlas-nav-group-toggle')?.textContent.trim() === 'Frameworks')?.querySelectorAll('.atlas-nav-item').length || 0,
          zoomText: document.querySelector('[data-zoom-readout]')?.textContent,
          filterOptions: document.querySelector('[data-filter]')?.options.length || 0,
          viewportName: viewport.name
        };
      }, { route, viewport });

      assert(snapshot.bodyWidth <= snapshot.viewportWidth + 1, `${route.id}/${viewport.name}: body overflows (${snapshot.bodyWidth} > ${snapshot.viewportWidth}).`);
      assert(snapshot.objectCount === route.objects[1], `${route.id}/${viewport.name}: expected ${route.objects[1]} objects, found ${snapshot.objectCount}.`);
      assert(snapshot.navFrameworkChildren === 5, `${route.id}/${viewport.name}: Frameworks navigator does not contain five children.`);
      assert(snapshot.evidenceCards >= 20, `${route.id}/${viewport.name}: claim-level evidence summary is incomplete (${snapshot.evidenceCards} verified papers).`);
      assert(snapshot.supportBadges >= snapshot.evidenceCards && snapshot.locationTags >= snapshot.evidenceCards, `${route.id}/${viewport.name}: evidence cards lack support badges or framework-location tags.`);
      assert(snapshot.zoomText === '100%' && snapshot.filterOptions >= 5, `${route.id}/${viewport.name}: toolbar state is incomplete.`);

      if (viewport.width >= 1050 && !['co-design', 'design-performance', 'failure-diagnostics'].includes(route.id)) {
        assert(snapshot.canvasScrollWidth <= snapshot.canvasClientWidth + 2, `${route.id}/${viewport.name}: complete framework should fit its canvas at 100%.`);
      }
      if (viewport.width >= 1050 && route.id === 'co-design') {
        assert(snapshot.canvasScrollWidth >= 2400 && snapshot.canvasScrollWidth > snapshot.canvasClientWidth + 300, `${route.id}/${viewport.name}: oversized systems map is not preserved.`);
      }
      if (viewport.width >= 1050 && route.id === 'failure-diagnostics') {
        assert(snapshot.diagnosticMapWidth >= 1900 && snapshot.canvasScrollWidth > snapshot.canvasClientWidth + 150, `${route.id}/${viewport.name}: oversized diagnostic map is not preserved (${snapshot.diagnosticMapWidth}px).`);
      }
      if (route.id === 'design-performance') {
        assert(snapshot.cellCount === 98 && snapshot.outcomeCount === 7 && snapshot.familyCount === 4, `${route.id}/${viewport.name}: matrix hierarchy is incomplete.`);
        assert(snapshot.matrixWidth >= 2200, `${route.id}/${viewport.name}: scientific matrix was compressed below reading scale (${snapshot.matrixWidth}px).`);
        if (viewport.width >= 1050) {
          assert(snapshot.canvasScrollWidth <= snapshot.canvasClientWidth + 2, `${route.id}/${viewport.name}: large matrix should scroll inside its dedicated table viewport, not the whole framework canvas.`);
          assert(snapshot.tableShellScrollWidth >= 2200 && snapshot.tableShellScrollWidth > snapshot.tableShellClientWidth + 600, `${route.id}/${viewport.name}: dedicated matrix scroll corridor is missing.`);
          const markerSizes = new Set(snapshot.visibleMatrixMarkers.map((size) => size.join('×')));
          assert(markerSizes.size === 1 && markerSizes.has('13×13'), `${route.id}/${viewport.name}: visible qualitative markers are inconsistent (${[...markerSizes].join(', ')}).`);
        } else {
          assert(snapshot.mobileMatrixDisplay !== 'none' && snapshot.mobileCardCount === 7, `${route.id}/${viewport.name}: dedicated mobile scientific representation is missing.`);
        }
      }

      if (route.relations) assert(snapshot.relationCount === route.relations, `${route.id}/${viewport.name}: expected ${route.relations} relationships, found ${snapshot.relationCount}.`);
      if (route.id === 'design-stack') {
        assert(snapshot.feedbackCount === 9 && snapshot.couplingCount === 6, `${route.id}/${viewport.name}: audited relation set is incomplete.`);
        assert(snapshot.stackItemCount >= 70 && snapshot.phaseRailSymbols === 0, `${route.id}/${viewport.name}: Design Stack interaction contract is incomplete.`);
      }
      if (route.id === 'co-design') {
        const s = snapshot.coV2RelationSemantics;
        assert(snapshot.corePresent && snapshot.coV2Ready && s.influence === 14 && s.verification === 1 && s.feedback === 5, `${route.id}/${viewport.name}: audited Co-Design relation semantics are incomplete.`);
      }
      if (route.categories) assert(snapshot.categoryCount === route.categories && snapshot.verifyPresent, `${route.id}/${viewport.name}: diagnostic categories or verification loop are incomplete.`);
      assert(errors.length === 0, `${route.id}/${viewport.name}: browser errors: ${errors.join(' | ')}`);
      await page.screenshot({ path: path.join(artifactDir, `${route.id}-${viewport.name}.png`), fullPage: true });
      await page.close();
    }
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', acceptDownloads: true });
  const matrix = await context.newPage();
  await matrix.goto(`${baseUrl}/frameworks/design-performance/`, { waitUntil: 'networkidle' });
  await matrix.waitForSelector('.dependency-matrix-v2');
  await matrix.selectOption('[data-filter]', 'representation');
  assert(await matrix.locator('.matrix-row:not(.is-filter-muted)').count() === 4, 'Matrix representation filter must emphasize four rows while preserving the full table.');
  await matrix.fill('.framework-search', 'gradient flow');
  assert(await matrix.locator('.matrix-row:not(.is-filter-muted):not(.is-search-muted)').count() === 1, 'Matrix search should isolate the activation/features row for gradient flow.');
  await matrix.click('[data-inspect-id="activation-features:trainability"]');
  const visibleMatrixDetail = matrix.locator('[data-detail]:visible').first();
  await visibleMatrixDetail.locator('[data-inspector-section="evidence"] h3', { hasText: 'Row-level synthesis evidence' }).waitFor({ state: 'visible', timeout: 3000 });
  const matrixDetail = await visibleMatrixDetail.innerText();
  assert(matrixDetail.includes('gradient flow') && matrixDetail.includes('[517]'), 'Matrix cell inspector lost its maintained mechanism or supporting paper mapping.');

  await matrix.click('.toolbar-export summary');
  const currentPromise = matrix.waitForEvent('download');
  await matrix.click('[data-svg]');
  const currentDownload = await currentPromise;
  const currentSvg = await fs.readFile(await currentDownload.path(), 'utf8');
  assert(currentSvg.includes('data-native-vector="true"') && currentSvg.includes('data-export-mode="current"') && !currentSvg.includes('<foreignObject'), 'Current matrix export must be genuine native-vector SVG.');
  assert(currentSvg.includes('gradient flow') && currentSvg.includes('QUALITATIVE INFLUENCE LEVEL'), 'Current matrix SVG lost focused scientific content or its integrated legend.');
  if (!(await matrix.locator('.toolbar-export').evaluate((node) => node.open))) await matrix.click('.toolbar-export summary');
  const publicationPromise = matrix.waitForEvent('download');
  await matrix.click('[data-svg-publication]');
  const publicationDownload = await publicationPromise;
  const publicationSvg = await fs.readFile(await publicationDownload.path(), 'utf8');
  assert(publicationSvg.includes('data-native-vector="true"') && publicationSvg.includes('data-export-mode="publication"') && !publicationSvg.includes('<foreignObject'), 'Publication matrix export must be genuine native-vector SVG.');
  await matrix.click('[data-reset]');
  assert((await matrix.locator('.matrix-row.is-filter-muted').count()) === 0 && (await matrix.locator('.framework-search').inputValue()) === '', 'Matrix reset did not restore the full context.');
  await matrix.close();

  const inspectorCases = [
    ['design-stack', 'physical-problem'],
    ['co-design', 'representation'],
    ['design-performance', 'architecture-basis'],
    ['failure-diagnostics', 'spectral-bias']
  ];
  for (const [frameworkId, objectId] of inspectorCases) {
    const page = await context.newPage();
    await page.goto(`${baseUrl}/frameworks/${frameworkId}/`, { waitUntil: 'networkidle' });
    await page.waitForSelector(`[data-inspect-id="${objectId}"]`);
    if (frameworkId === 'co-design') await page.waitForFunction(() => document.documentElement.dataset.coDesignV2 === 'ready');
    await page.click(frameworkId === 'design-stack' ? `[data-inspect-id="${objectId}"] > header` : `[data-inspect-id="${objectId}"]`);
    const sections = await page.locator('[data-detail] [data-inspector-section]').evaluateAll((nodes) => nodes.map((node) => node.dataset.inspectorSection));
    assert(['meaning', 'relationships', 'evidence', 'concepts', 'related'].every((name) => sections.includes(name)), `${frameworkId}: shared inspector architecture is incomplete (${sections.join(', ')}).`);
    assert(await page.locator('[data-detail] .evidence-support-badge').count() > 0, `${frameworkId}: inspector lacks support-type badges.`);
    assert(await page.locator('[data-detail] .framework-location-tag').count() > 0, `${frameworkId}: inspector lacks framework-location tags.`);
    assert(await page.locator('[data-detail] [data-concept-id]').count() > 0, `${frameworkId}: canonical concept controls are missing.`);
    await page.close();
  }

  const diagnostics = await context.newPage();
  await diagnostics.goto(`${baseUrl}/frameworks/failure-diagnostics/#item=poor-conservation`, { waitUntil: 'networkidle' });
  await diagnostics.waitForSelector('.diagnostic-board');
  assert((await diagnostics.locator('[data-detail]').textContent()).includes('Finite-volume / control-volume residuals'), 'Diagnostic deep link does not restore the selected pathway.');
  await diagnostics.close();
  await context.close();
} finally {
  await browser.close();
}

console.log('Framework browser contract passed: 4 scientific views · shared inspectors · evidence semantics · oversized map/matrix viewports · native matrix SVG export.');
