import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dataDir = path.join(root, 'data', 'optimizers');
const load = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));

const { records } = load('optimizer-records.json');
const { families, optimizers } = load('optimizer-taxonomy.json');
const summary = load('optimizer-summary.json');
const validation = load('optimizer-validation.json');
const sourceText = fs.readFileSync(path.join(dataDir, 'reference-optimizer-source.md'), 'utf8');
const researchNotes = fs.readFileSync(path.join(dataDir, 'reference-optimizer-web-research-notes.md'), 'utf8');

const sourceRows = [...sourceText.matchAll(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*$/gm)].map((match) => ({
  paper_id: Number(match[1]),
  optimizer_raw: match[2]
}));
const expectedIds = Array.from({ length: 853 }, (_, index) => index + 1);
const ids = records.map((record) => record.paper_id);
const idSet = new Set(ids);
const taxonomyIds = new Set(optimizers.map((optimizer) => optimizer.optimizer_id));
const expectedFamilies = new Set([
  'Adaptive first-order optimizers',
  'Gradient-descent and stochastic-gradient methods',
  'Quasi-Newton and second-order methods',
  'Conjugate-gradient, least-squares, and related solvers',
  'Metaheuristic and evolutionary methods',
  'Reinforcement-learning algorithms',
  'Bayesian optimization and probabilistic inference',
  'Meta-learned and specialized methods'
]);

assert.equal(sourceRows.length, 853, 'Expected 853 completed source rows');
assert.equal(records.length, 853, 'Expected 853 generated records');
assert.equal(idSet.size, 853, 'Duplicate paper IDs detected');
assert.deepEqual(ids, expectedIds, 'Optimizer records must cover [1]–[853] in order');
assert.deepEqual(sourceRows.map((row) => row.paper_id), expectedIds, 'Source IDs must cover 1–853 in order');
assert.deepEqual(families, [...expectedFamilies], 'Optimizer families differ from the documented taxonomy');
assert.equal(new Set(families).size, 8, 'Expected eight optimizer families');

assert.equal(records.filter((record) => record.reporting_status === 'reported').length, 566, 'Expected 566 reported records');
assert.equal(records.filter((record) => record.reporting_status === 'not_reported').length, 287, 'Expected 287 explicit N/A records');
assert.ok(records.every((record) => record.paper_label === `[${record.paper_id}]`), 'A visible label is not [ID]');
assert.ok(records.every((record) => /^\[\d+\]$/.test(record.paper_label)), 'A visible label violates the bracketed-ID regex');
assert.ok(records.every((record, index) => record.optimizer_raw === sourceRows[index].optimizer_raw), 'Raw optimizer text changed during generation');
assert.ok(records.every((record) => record.normalized_optimizer_ids.every((id) => taxonomyIds.has(id))), 'A normalized ID lacks a taxonomy entry');
assert.ok(records.every((record) => record.raw_optimizer_forms.every((form) => optimizers.some((optimizer) => optimizer.aliases.includes(form)))), 'A raw form is absent from taxonomy aliases');
assert.ok(records.filter((record) => record.reporting_status === 'not_reported').every((record) => record.optimizer_raw === 'N/A' && record.raw_optimizer_forms.length === 0 && record.normalized_optimizer_ids.length === 0), 'Explicit N/A record gained an optimizer');
assert.ok(records.filter((record) => record.reporting_status === 'reported').every((record) => record.raw_optimizer_forms.length > 0 && record.normalized_optimizer_ids.length > 0), 'Reported record lacks an optimizer');
assert.ok(optimizers.every((optimizer) => optimizer.paper_count === optimizer.paper_ids.length && optimizer.paper_count === new Set(optimizer.paper_ids).size), 'A canonical count does not equal unique supporting IDs');
assert.ok(optimizers.every((optimizer) => optimizer.paper_ids.every((id) => idSet.has(id))), 'Taxonomy contains a fabricated reference ID');
assert.deepEqual(records.find((record) => record.optimizer_raw === 'Gradient descent (with AdaGrad; variable momentum)')?.raw_optimizer_forms, ['Gradient descent (with AdaGrad; variable momentum)'], 'A semicolon inside parentheses was split');
assert.ok(records.find((record) => record.optimizer_raw === 'RProp (trainrp)')?.source_annotations.includes('trainrp'), 'A parenthetical source annotation was lost');
assert.equal(optimizers.find((optimizer) => optimizer.optimizer_id === 'adam')?.paper_count, 480, 'Adam count must use unique supporting papers');
assert.equal(optimizers.find((optimizer) => optimizer.optimizer_id === 'hamiltonian_monte_carlo')?.method_type, 'probabilistic', 'HMC must not be typed as an ordinary gradient optimizer');
assert.equal(optimizers.find((optimizer) => optimizer.optimizer_id === 'soft_actor_critic')?.method_type, 'reinforcement learning', 'SAC must retain its reinforcement-learning type');

assert.equal(summary.source_rows, 853);
assert.equal(summary.references_reporting_an_optimizer, 566);
assert.equal(summary.explicit_na_records, 287);
assert.equal(summary.missing_source_records, 0);
assert.deepEqual(summary.missing_ids, []);
assert.equal(summary.distinct_raw_optimizer_forms, 69);
assert.equal(summary.canonical_optimizer_forms, optimizers.length);
assert.equal(summary.optimizer_families, 8);
assert.equal(summary.single_optimizer_records + summary.multi_optimizer_records + summary.sequential_or_hybrid_records, 566, 'Training strategies must partition reported records');
assert.ok(summary.top_optimizers.every((item) => item.count === optimizers.find((optimizer) => optimizer.optimizer_id === item.optimizer_id)?.paper_count), 'Chart count differs from taxonomy count');

const formerMissing = [194, 452, 694, 776, 803, 809, 812, 813];
assert.deepEqual(summary.formerly_missing_ids, formerMissing);
assert.ok(formerMissing.every((id) => researchNotes.includes(`[${id}]`)), 'Research notes omit a formerly missing ID');
assert.equal(records.find((record) => record.paper_id === 812)?.optimizer_raw, 'SGD (or variants)');
assert.ok(formerMissing.filter((id) => id !== 812).every((id) => records.find((record) => record.paper_id === id)?.reporting_status === 'not_reported'));
assert.ok(Object.values(validation.checks).every(Boolean), 'Generated validation report contains a failed check');

const optimizerJs = fs.readFileSync(path.join(root, 'assets', 'optimizers.js'), 'utf8');
const technicalJs = fs.readFileSync(path.join(root, 'assets', 'reference-technical-details.js'), 'utf8');
const optimizerHtml = fs.readFileSync(path.join(root, 'optimizers', 'index.html'), 'utf8');
const optimizerCss = fs.readFileSync(path.join(root, 'assets', 'optimizers.css'), 'utf8');
const referencesHtml = fs.readFileSync(path.join(root, 'references', 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'assets', 'app.js'), 'utf8');
assert.match(optimizerJs, /`\[\$\{Number\(id\)\}\]`/, 'Optimizer client label helper must render [ID]');
assert.match(optimizerJs, /optimizer-records\.json/, 'Optimizer page does not load paper records');
assert.match(optimizerJs, /optimizer-taxonomy\.json/, 'Optimizer page does not load taxonomy');
assert.match(technicalJs, /optimizer-records\.json/, 'Reference Technical details do not load optimizer records');
assert.match(technicalJs, /optimizer-taxonomy\.json/, 'Reference Technical details do not load optimizer taxonomy');
assert.match(optimizerHtml, /assets\/optimizers\.js/, 'Optimizer page script is missing');
assert.match(optimizerHtml, /data-detail-dialog[^>]*aria-labelledby/, 'Paper-detail dialog lacks an accessible label');
assert.match(optimizerHtml, /data-compare-dialog[^>]*aria-labelledby/, 'Comparison dialog lacks an accessible label');
assert.match(optimizerCss, /@media\(max-width:560px\)/, 'Mobile optimizer styles are missing');
assert.match(optimizerCss, /@media\(prefers-reduced-motion:reduce\)/, 'Reduced-motion optimizer styles are missing');
assert.match(optimizerCss, /body\{overflow-x:hidden\}/, 'Optimizer CSS does not guard body-level horizontal overflow');
assert.match(referencesHtml, /reference-technical-details\.js/, 'References page does not load Technical details');
assert.match(appJs, /Optimizers/, 'Shared navigation does not include Optimizers');
assert.ok(appJs.indexOf("['Performance Metrics'") < appJs.indexOf("['Optimizers'") && appJs.indexOf("['Optimizers'") < appJs.indexOf("['Abbreviations'"), 'Shared navigation order is incorrect');
assert.ok(technicalJs.indexOf('${performanceHtml') < technicalJs.indexOf('${optimizersHtml') && technicalJs.indexOf('${optimizersHtml') < technicalJs.indexOf('${abbreviationsHtml'), 'Reference Technical details module order is incorrect');

const htmlFiles = [];
const collectHtml = (directory) => {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    if (entry.name === '.git') return;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) collectHtml(target);
    else if (entry.name.endsWith('.html')) htmlFiles.push(target);
  });
};
collectHtml(root);
assert.ok(htmlFiles.every((filePath) => fs.readFileSync(filePath, 'utf8').includes('assets/app.js?v=ux-20260803a')), 'An Atlas HTML page does not load the cache-busted shared navigation script');

for (const scriptPath of ['assets/optimizers.js', 'assets/reference-technical-details.js', 'scripts/build-optimizers.mjs', 'scripts/validate-optimizers.mjs']) {
  execFileSync(process.execPath, ['--check', path.join(root, scriptPath)], { stdio: 'pipe' });
}

const fabricatedIds = [...optimizerHtml.matchAll(/\[(\d+)\]/g)].map((match) => Number(match[1])).filter((id) => !idSet.has(id));
assert.deepEqual(fabricatedIds, [], 'Optimizer HTML contains a fabricated bracketed reference ID');

console.log(JSON.stringify({
  ok: true,
  records: records.length,
  reported: summary.references_reporting_an_optimizer,
  not_reported: summary.explicit_na_records,
  raw_forms: summary.distinct_raw_optimizer_forms,
  canonical_forms: optimizers.length,
  families: families.length,
  manual_review_records: summary.manual_review_required,
  missing_ids: summary.missing_ids,
  formerly_missing_ids: formerMissing
}, null, 2));
