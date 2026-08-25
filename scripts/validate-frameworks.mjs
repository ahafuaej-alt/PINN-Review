import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const read = (file) => fs.readFile(path.join(root, file), 'utf8');
const json = async (file) => JSON.parse(await read(file));
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const unique = (values, label) => assert(new Set(values).size === values.length, `${label} IDs must be unique.`);
const evidenceFrom = (value, items = []) => {
  if (Array.isArray(value)) value.forEach((item) => evidenceFrom(item, items));
  else if (value && typeof value === 'object') {
    if (Number.isInteger(value.atlas_id)) items.push(value);
    Object.values(value).forEach((item) => evidenceFrom(item, items));
  }
  return items;
};

const manifest = await json('data/frameworks/frameworks.json');
assert(manifest.version === '2.0.0', `Expected Frameworks data v2.0.0, found ${manifest.version}.`);
assert(manifest.frameworks.length === 4, `Expected four canonical frameworks, found ${manifest.frameworks.length}.`);
unique(manifest.frameworks.map((item) => item.id), 'Framework');

const pages = Object.fromEntries(await Promise.all(manifest.frameworks.map(async (record) => {
  assert(record.data && record.route, `${record.id} lacks a data file or route.`);
  await fs.access(path.join(root, 'frameworks', record.route, 'index.html'));
  const page = await json(`data/frameworks/${record.data}`);
  assert(page.id === record.id, `${record.data} identifies itself as ${page.id}, not ${record.id}.`);
  return [record.id, page];
})));

const stack = pages['design-stack'];
assert(stack.phases.length === 4, `Design Stack requires four phases, found ${stack.phases.length}.`);
assert(stack.stages.length === 10, `Design Stack requires ten stages, found ${stack.stages.length}.`);
assert(stack.relationships.length >= 18, `Design Stack requires complete flow and feedback relationships, found ${stack.relationships.length}.`);
unique(stack.stages.map((item) => item.id), 'Design Stack stage');
unique(stack.relationships.map((item) => item.id), 'Design Stack relationship');
const stageIds = new Set(stack.stages.map((item) => item.id));
stack.relationships.forEach((relation) => assert(stageIds.has(relation.from) && stageIds.has(relation.to), `Design Stack relationship ${relation.id} has an invalid endpoint.`));
assert(stack.relationships.filter((item) => item.type === 'flow').length === 9, 'Design Stack requires nine forward stage transitions.');
assert(stack.relationships.filter((item) => item.type === 'feedback').length === 9, 'Design Stack requires nine evaluation-driven feedback loops.');
stack.stages.forEach((stage) => {
  assert(stage.columns.length === 3, `${stage.id} must preserve its three compact content columns.`);
  assert(stage.columns.every((column) => column.items.length >= 2), `${stage.id} contains an empty or underspecified content column.`);
  assert(Array.isArray(stage.evidence) && stage.evidence.length > 0, `${stage.id} lacks verified claim-level evidence.`);
});
assert(stack.relationships.filter((item) => item.type === 'feedback').every((item) => item.evidence.length > 0), 'Every Design Stack feedback loop must carry verified evidence.');

const coDesign = pages['co-design'];
assert(coDesign.core?.outcomes?.length === 5, 'Co-Design requires a central core with five outcomes.');
assert(coDesign.domains.length === 6, `Co-Design requires six domains, found ${coDesign.domains.length}.`);
assert(coDesign.relationships.length >= 20, `Co-Design requires the complete coupling and feedback set, found ${coDesign.relationships.length}.`);
unique(coDesign.domains.map((item) => item.id), 'Co-Design domain');
unique(coDesign.relationships.map((item) => item.id), 'Co-Design relationship');
const coNodeIds = new Set(['core', ...coDesign.domains.map((item) => item.id)]);
coDesign.relationships.forEach((relation) => assert(coNodeIds.has(relation.from) && coNodeIds.has(relation.to), `Co-Design relationship ${relation.id} has an invalid endpoint.`));
coDesign.domains.forEach((domain) => {
  assert(domain.panels.length >= 3 && domain.panels.every((panel) => panel.items.length >= 3), `${domain.id} lacks the compact detail of the scientific source map.`);
  assert(domain.evidence.length > 0, `${domain.id} lacks verified claim-level evidence.`);
});
assert(coDesign.relationships.every((item) => item.evidence.length > 0), 'Every Co-Design coupling and feedback relationship must carry verified evidence.');

const matrix = pages['design-performance'];
assert(matrix.rows.length === 14, `Dependency matrix requires fourteen design rows, found ${matrix.rows.length}.`);
assert(matrix.columns.length === 7, `Dependency matrix requires seven performance dimensions, found ${matrix.columns.length}.`);
assert(matrix.rows.reduce((sum, row) => sum + row.cells.length, 0) === 98, 'Dependency matrix must contain exactly 98 inspectable dependencies.');
unique(matrix.rows.map((item) => item.id), 'Dependency matrix row');
unique(matrix.rows.flatMap((row) => row.cells.map((cell) => cell.id)), 'Dependency matrix cell');
matrix.rows.forEach((row) => {
  assert(row.cells.length === 7, `${row.id} does not contain seven performance dependencies.`);
  assert(row.evidence.length > 0, `${row.id} lacks verified claim-level evidence.`);
  row.cells.forEach((cell, index) => {
    assert(cell.id === `${row.id}:${matrix.columns[index].id}`, `${cell.id} is not stably aligned to ${row.id} and ${matrix.columns[index].id}.`);
    assert(['major', 'context', 'indirect'].includes(cell.level), `${cell.id} has invalid influence level ${cell.level}.`);
    assert(cell.label, `${cell.id} lacks its scientific dependency label.`);
  });
});
assert(matrix.rows.some((row) => row.id === 'reuse-generalize'), 'Scalability and reuse content is missing from the matrix.');

const diagnostics = pages['failure-diagnostics'];
assert(diagnostics.categories.length === 4, `Failure diagnostics requires four challenge categories, found ${diagnostics.categories.length}.`);
assert(diagnostics.modes.length === 13, `Failure diagnostics requires thirteen failure modes, found ${diagnostics.modes.length}.`);
unique(diagnostics.modes.map((item) => item.id), 'Failure mode');
const modeIds = new Set(diagnostics.modes.map((item) => item.id));
diagnostics.categories.forEach((category) => category.mode_ids.forEach((id) => assert(modeIds.has(id), `${category.id} points to unknown mode ${id}.`)));
diagnostics.modes.forEach((mode) => {
  assert(mode.symptoms.length >= 2, `${mode.id} lacks observable symptoms.`);
  assert(mode.responses.length >= 2, `${mode.id} lacks methodological responses.`);
  assert(mode.improvement, `${mode.id} lacks a targeted improvement.`);
  assert(Array.isArray(mode.evidence) && mode.evidence.length > 0, `${mode.id} lacks verified claim-level evidence.`);
});
assert(diagnostics.verification.criteria.length === 5, 'Failure diagnostics requires all five verification criteria.');
assert(diagnostics.verification.evidence.length > 0, 'The verification loop lacks supporting evidence.');

const allSource = JSON.stringify({ manifest, pages });
assert(!allSource.includes('"papers"'), 'Legacy unverified paper-ID arrays remain in Frameworks data.');
const references = await json('data/references.json');
const referenceIds = new Set(references.map((item) => item.id));
const evidenceEntries = evidenceFrom(pages);
const supportingAtlasIds = new Set();
for (const entry of evidenceEntries) {
  assert(referenceIds.has(entry.atlas_id), `Evidence points to unknown Atlas ID ${entry.atlas_id}.`);
  assert(['Direct', 'Contextual', 'Synthesis'].includes(entry.support), `Atlas [${entry.atlas_id}] has invalid support type ${entry.support}.`);
  assert(entry.rationale?.length >= 40, `Atlas [${entry.atlas_id}] lacks a substantive claim-level rationale.`);
  supportingAtlasIds.add(entry.atlas_id);
}

const backlinks = await json('data/frameworks/backlinks.json');
for (const [route, links] of Object.entries(backlinks.routes)) {
  await fs.access(path.join(root, route, 'index.html'));
  links.forEach((link) => {
    assert(pages[link.framework], `Backlink ${route}/${link.label} points to unknown framework ${link.framework}.`);
    const page = pages[link.framework];
    const ids = new Set([page.core?.id, ...(page.stages || page.domains || page.rows || page.modes || []).map((item) => item?.id), page.verification?.id].filter(Boolean));
    assert(ids.has(link.item), `Backlink ${route}/${link.label} points to unknown item ${link.item}.`);
  });
}

const [landing, script, style, theme, home, readme, sitemap] = await Promise.all([
  read('frameworks/index.html'), read('assets/frameworks.js'), read('assets/frameworks.css'),
  read('assets/theme-init.js'), read('index.html'), read('README.md'), read('sitemap.xml')
]);
for (const token of ['data-framework-cards', 'Interpretation boundary', 'Four views']) assert(landing.includes(token), `Framework landing page lacks ${token}.`);
for (const token of ['Expand view', 'data-zoom-in', 'data-filter', 'Interactive explorer', 'Download current SVG', 'Copy shareable link', 'Propose a missing item', 'Propose a missing relationship', 'foreignObject']) assert(script.includes(token), `Framework interaction script lacks ${token}.`);
for (const token of ['.stack-board', '.co-board', '.dependency-matrix', '.diagnostic-board', '.influence-marker', 'width: 13px', 'height: 13px']) assert(style.includes(token), `Framework stylesheet lacks ${token}.`);
for (const route of ['frameworks/', 'frameworks/design-stack/', 'frameworks/co-design/', 'frameworks/design-performance/', 'frameworks/failure-diagnostics/']) assert(theme.includes(`'${route}'`), `Shared navigation lacks ${route}.`);
assert(theme.includes("label: 'Frameworks'") && theme.includes("['Frameworks Overview'"), 'Frameworks is not a top-level navigation family with child pages.');
assert(theme.includes('data/frameworks/backlinks.json') && theme.includes('Appears in Frameworks'), 'Automatic semantic backlinks are missing.');
assert(home.includes('Six research doors') && home.includes('05 / FRAMEWORKS') && home.includes('06 / GOVERNANCE'), 'Homepage hierarchy is not updated to six research doors.');
assert(readme.includes('### Frameworks') && readme.includes('**26** public HTML entry points'), 'README Frameworks/public-surface contract is stale.');
for (const item of manifest.frameworks) assert(sitemap.includes(`/frameworks/${item.route}`), `Sitemap lacks ${item.route}.`);

const inspectableCount = stack.phases.length + stack.stages.length + stack.relationships.length + 1 + coDesign.domains.length + coDesign.relationships.length + matrix.rows.length + 98 + diagnostics.categories.length + diagnostics.modes.length + 1;
console.log(`Frameworks validation passed: 4 frameworks · ${inspectableCount} stable inspectable objects · 10 stages · 20 co-design relations · 98 matrix cells · 13 diagnostic pathways · ${evidenceEntries.length} claim-level links · ${supportingAtlasIds.size} unique supporting Atlas papers.`);
