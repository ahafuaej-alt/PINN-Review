import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dataDir = path.join(root, 'data', 'activation-functions');
const load = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));

const { records } = load('activation-records.json');
const { families, activations } = load('activation-taxonomy.json');
const summary = load('activation-summary.json');
const validation = load('activation-validation.json');
const sourceText = fs.readFileSync(path.join(dataDir, 'reference-activation-functions-source.txt'), 'utf8');
const researchNotes = fs.readFileSync(path.join(dataDir, 'reference-activation-functions-web-research-notes.txt'), 'utf8');
const sourceRows = [...sourceText.matchAll(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/gm)].map((match) => ({
  paper_id: Number(match[1]), activation_raw: match[2], notes_raw: match[3]
}));
const expectedIds = Array.from({ length: 853 }, (_, index) => index + 1);
const ids = records.map((record) => record.paper_id);
const idSet = new Set(ids);
const taxonomyIds = new Set(activations.map((item) => item.activation_id));

assert.equal(sourceRows.length, 853, 'Expected 853 completed source rows');
assert.equal(records.length, 853, 'Expected 853 generated paper records');
assert.equal(idSet.size, 853, 'Duplicate paper IDs detected');
assert.deepEqual(ids, expectedIds, 'Generated records must cover [1]–[853] in order');
assert.deepEqual(sourceRows.map((row) => row.paper_id), expectedIds, 'Source IDs must cover 1–853 in order');
assert.deepEqual(summary.missing_ids, [], 'Source coverage has missing IDs');
assert.deepEqual(summary.duplicate_ids, [], 'Source contains duplicate IDs');
assert.equal(records.filter((record) => record.activation_raw !== 'N/A').length, 482, 'Expected 482 named activation fields');
assert.equal(records.filter((record) => record.activation_raw === 'N/A').length, 371, 'Expected 371 explicit N/A fields');
assert.equal(new Set(records.filter((record) => record.activation_raw !== 'N/A').map((record) => record.activation_raw)).size, 163, 'Expected 163 distinct raw non-N/A fields');
assert.equal(families.length, 8, 'Expected eight activation families');
assert.equal(new Set(families).size, 8, 'Activation family names must be unique');

assert.ok(records.every((record) => record.paper_label === `[${record.paper_id}]` && /^\[\d+\]$/.test(record.paper_label)), 'A visible paper label is not [ID]');
assert.ok(records.every((record, index) => record.activation_raw === sourceRows[index].activation_raw && record.notes_raw === sourceRows[index].notes_raw), 'A raw activation field or note changed during generation');
assert.ok(records.every((record) => record.raw_activation_forms.length === record.activation_mentions.length), 'A raw occurrence was discarded');
assert.ok(records.every((record) => record.normalized_activation_ids.every((id) => taxonomyIds.has(id))), 'A normalized activation lacks a taxonomy entry');
assert.ok(records.every((record) => record.activation_mentions.every((mention) => mention.normalized_activation_ids.length || mention.manual_review_required)), 'An unmapped occurrence lacks a manual-review flag');
assert.ok(records.every((record) => record.activation_mentions.every((mention) => mention.normalized_activation_ids.every((id) => activations.some((item) => item.activation_id === id && item.aliases.includes(mention.raw_form))))), 'A normalized raw form is absent from taxonomy aliases');
assert.ok(activations.every((item) => item.paper_count === item.paper_ids.length && item.paper_count === new Set(item.paper_ids).size), 'An implementation paper count is not unique');
assert.ok(activations.every((item) => item.all_mention_count === item.all_mention_paper_ids.length && item.all_mention_count === new Set(item.all_mention_paper_ids).size), 'An all-mention count is not unique');
assert.ok(activations.every((item) => item.paper_ids.every((id) => idSet.has(id)) && item.all_mention_paper_ids.every((id) => idSet.has(id))), 'Taxonomy contains a fabricated ID');
assert.ok(activations.every((item) => item.paper_ids.every((id) => records.find((record) => record.paper_id === id)?.implementation_oriented_activation_ids.includes(item.activation_id))), 'Implementation count and supporting IDs disagree');
assert.ok(activations.every((item) => item.all_mention_paper_ids.every((id) => records.find((record) => record.paper_id === id)?.normalized_activation_ids.includes(item.activation_id))), 'All-mention count and supporting IDs disagree');

assert.ok(records.filter((record) => record.activation_raw === 'N/A').every((record) => record.reporting_status !== 'reported' && record.normalized_activation_ids.length === 0), 'An N/A row gained a reported activation');
assert.ok(records.filter((record) => record.reporting_status === 'review_or_survey').every((record) => record.implementation_oriented_activation_ids.length === 0), 'Review mentions leaked into implementation counts');
assert.ok(records.find((record) => record.paper_id === 14)?.activation_mentions.every((mention) => mention.roles.includes('gate')), 'LSTM gate roles were lost');
assert.ok(records.find((record) => record.paper_id === 308)?.activation_roles.includes('hidden_layer') && records.find((record) => record.paper_id === 308)?.activation_roles.includes('output_layer'), 'Hidden/output layer distinction was lost');
assert.ok(records.find((record) => record.paper_id === 332)?.activation_mentions.find((mention) => mention.raw_form === 'ReLU (in loss)')?.roles.includes('constraint_or_loss'), 'Loss-only ReLU role was lost');
assert.equal(records.find((record) => record.paper_id === 332)?.activation_mentions.find((mention) => mention.raw_form === 'ReLU (in loss)')?.implementation_oriented, false, 'Loss-only ReLU entered implementation counts');
assert.deepEqual(records.find((record) => record.paper_id === 747)?.raw_activation_forms, ['φ(x)=max{x³,0}', 'φ(x)=max(0,x)²'], 'Formula comma was split internally');
assert.ok(records.find((record) => record.paper_id === 813)?.normalized_activation_ids.includes('adaptive_tanh'), '[813] must resolve to adaptive tanh');
assert.ok(records.find((record) => record.paper_id === 813)?.activation_roles.includes('adaptive_or_trainable'), '[813] must retain its adaptive role');
assert.equal(records.find((record) => record.paper_id === 170)?.reporting_status, 'review_or_survey', '[170] must remain a review record');
assert.equal(records.find((record) => record.paper_id === 170)?.implementation_oriented_activation_ids.length, 0, '[170] must not enter implementation counts');
assert.equal(records.find((record) => record.paper_id === 809)?.reporting_status, 'non_pinn_record', '[809] must remain a non-PINN/FNO record');
assert.match(records.find((record) => record.paper_id === 809)?.notes_raw || '', /Fourier neural operator/, '[809] FNO explanation is missing');
assert.notEqual(activations.find((item) => item.activation_id === 'swish')?.activation_id, activations.find((item) => item.activation_id === 'silu')?.activation_id, 'Swish and SiLU must remain separate');
assert.ok(activations.find((item) => item.activation_id === 'rbf_unspecified')?.manual_review_required, 'Unspecified RBF must retain manual review');
assert.ok(activations.find((item) => item.activation_id === 'gaussian_unspecified')?.manual_review_required, 'Unspecified Gaussian must retain manual review');

assert.equal(summary.source_records, 853);
assert.equal(summary.named_activation_records, 482);
assert.equal(summary.explicit_na_records, 371);
assert.equal(summary.distinct_raw_non_na_fields, 163);
assert.equal(summary.canonical_activation_functions, activations.length);
assert.equal(summary.activation_families, families.length);
assert.equal(summary.all_source_mention_records, 482);
assert.ok(summary.implementation_oriented_records < summary.all_source_mention_records, 'Implementation and all-mention record totals must differ');
assert.ok(summary.top_activations_implementation.every((entry) => entry.count === activations.find((item) => item.activation_id === entry.activation_id)?.paper_count), 'Implementation chart count differs from taxonomy');
assert.ok(summary.top_activations_all_mentions.every((entry) => entry.count === activations.find((item) => item.activation_id === entry.activation_id)?.all_mention_count), 'All-mentions chart count differs from taxonomy');
assert.ok(Object.values(validation.checks).every(Boolean), 'Generated validation report contains a failed check');

const formerMissing = [170, 194, 452, 694, 776, 803, 809, 812, 813];
assert.deepEqual(summary.formerly_missing_ids, formerMissing);
assert.ok(formerMissing.every((id) => researchNotes.includes(`[${id}]`)), 'Research notes omit a formerly missing ID');

const pageJs = fs.readFileSync(path.join(root, 'assets', 'activation-functions.js'), 'utf8');
const pageCss = fs.readFileSync(path.join(root, 'assets', 'activation-functions.css'), 'utf8');
const pageHtml = fs.readFileSync(path.join(root, 'activation-functions', 'index.html'), 'utf8');
const technicalJs = fs.readFileSync(path.join(root, 'assets', 'reference-technical-details.js'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'assets', 'app.js'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const referencesHtml = fs.readFileSync(path.join(root, 'references', 'index.html'), 'utf8');

assert.match(pageJs, /`\[\$\{Number\(id\)\}\]`/, 'Client label helper must render [ID]');
assert.match(pageJs, /activation-records\.json/, 'Activation page does not load paper records');
assert.match(pageJs, /activation-taxonomy\.json/, 'Activation page does not load taxonomy');
assert.match(pageJs, /implementation_oriented/, 'Implementation-oriented count mode is missing');
assert.match(pageJs, /all_mentions/, 'All-source-mentions count mode is missing');
assert.match(pageJs, /\/\^\[=\+\\-@\]\//, 'CSV formula-injection protection is missing');
assert.match(pageHtml, /assets\/activation-functions\.js/, 'Activation page script is missing');
assert.match(pageHtml, /data-detail-dialog[^>]*aria-labelledby/, 'Detail dialog lacks an accessible label');
assert.match(pageHtml, /data-compare-dialog[^>]*aria-labelledby/, 'Comparison dialog lacks an accessible label');
assert.match(pageHtml, /data-count-mode/, 'Count-mode control is missing');
assert.match(pageCss, /@media\(max-width:560px\)/, 'Mobile activation styles are missing');
assert.match(pageCss, /@media\(prefers-reduced-motion:reduce\)/, 'Reduced-motion activation styles are missing');
assert.match(pageCss, /body\{overflow-x:hidden\}/, 'Body-level overflow guard is missing');
assert.match(pageCss, /compare-bar\[hidden\]\{display:none\}/, 'Empty comparison bar can override the hidden state');
assert.match(technicalJs, /activation-records\.json/, 'Reference Technical details do not load activation records');
assert.match(technicalJs, /activation-taxonomy\.json/, 'Reference Technical details do not load activation taxonomy');
assert.match(technicalJs, /Exact raw activation field and note/, 'Reference Technical details omit exact activation evidence');
assert.match(referencesHtml, /reference-technical-details\.js/, 'References page does not load Technical details');
assert.match(indexHtml, /href="activation-functions\/"/, 'Atlas landing page lacks the Activation Functions card/link');
assert.ok(appJs.indexOf("['Performance Metrics'") < appJs.indexOf("['Optimizers'") && appJs.indexOf("['Optimizers'") < appJs.indexOf("['Activation Functions'") && appJs.indexOf("['Activation Functions'") < appJs.indexOf("['Abbreviations'"), 'Shared navigation order is incorrect');
assert.ok(technicalJs.indexOf('${performanceHtml') < technicalJs.indexOf('${optimizersHtml') && technicalJs.indexOf('${optimizersHtml') < technicalJs.indexOf('${activationsHtml') && technicalJs.indexOf('${activationsHtml') < technicalJs.indexOf('${abbreviationsHtml'), 'Reference Technical details module order is incorrect');

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
const sharedAppScript = indexHtml.match(/assets\/app\.js\?v=[^"']+/)?.[0];
assert.ok(sharedAppScript, 'The Atlas homepage does not load a versioned shared navigation script');
assert.ok(htmlFiles.every((filePath) => fs.readFileSync(filePath, 'utf8').includes(sharedAppScript)), 'An Atlas HTML page does not load the current cache-busted shared navigation script');

for (const scriptPath of ['assets/activation-functions.js', 'assets/reference-technical-details.js', 'assets/app.js', 'scripts/build-activation-functions.mjs', 'scripts/validate-activation-functions.mjs']) {
  execFileSync(process.execPath, ['--check', path.join(root, scriptPath)], { stdio: 'pipe' });
}
execFileSync(process.execPath, [path.join(root, 'scripts', 'build-activation-functions.mjs'), '--check'], { cwd: root, stdio: 'pipe' });

const fabricatedIds = [...pageHtml.matchAll(/\[(\d+)\]/g)].map((match) => Number(match[1])).filter((id) => !idSet.has(id));
assert.deepEqual(fabricatedIds, [], 'Activation HTML contains a fabricated bracketed reference ID');

console.log(JSON.stringify({
  ok: true,
  records: records.length,
  named: summary.named_activation_records,
  explicit_na: summary.explicit_na_records,
  raw_fields: summary.distinct_raw_non_na_fields,
  canonical_forms: activations.length,
  families: families.length,
  adaptive_records: summary.adaptive_or_trainable_records,
  multi_activation_records: summary.multi_activation_records,
  manual_review_records: summary.manual_review_records,
  implementation_oriented_records: summary.implementation_oriented_records,
  all_source_mention_records: summary.all_source_mention_records
}, null, 2));
