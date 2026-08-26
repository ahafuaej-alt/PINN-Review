import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dataDir = path.join(root, 'data', 'performance');

function loadCompressedJson(names) {
  const base64 = names
    .map((name) => fs.readFileSync(path.join(dataDir, name), 'utf8').trim())
    .join('');
  return JSON.parse(zlib.gunzipSync(Buffer.from(base64, 'base64')).toString('utf8'));
}

const paperPartIds = ['00','01','02','03','04','05a','05b','06','07','08','09','10'];
const paperData = loadCompressedJson(paperPartIds.map((id) => `paper-data.part${id}.txt`));
const taxonomyData = loadCompressedJson([
  'metric-taxonomy.json.gz.b64.part1',
  'metric-taxonomy.json.gz.b64.part2'
]);
const supplement = JSON.parse(fs.readFileSync(path.join(dataDir, 'paper-performance-supplemental.json'), 'utf8'));
const summary = JSON.parse(fs.readFileSync(path.join(dataDir, 'performance-summary.json'), 'utf8'));
const validation = JSON.parse(fs.readFileSync(path.join(dataDir, 'performance-validation.json'), 'utf8'));

const basePapers = paperData.papers;
const supplementalRecords = supplement.records;
const papers = [...basePapers, ...supplementalRecords].sort((left, right) => left.paper_id - right.paper_id);
const metrics = taxonomyData.metrics;
const expectedGroups = new Set([
  'Solution accuracy',
  'Physics satisfaction',
  'Boundary and initial constraints',
  'Conservation and physical integrity',
  'Inverse problems',
  'Equation discovery',
  'Optimization and training',
  'Generalization and robustness',
  'Computational efficiency',
  'Uncertainty and reliability',
  'Model comparison and reporting'
]);
const expectedSupplementIds = [194,452,694,776,803,809,812,813];

assert.equal(basePapers.length, 845, 'Expected 845 records in the original extraction');
assert.equal(supplementalRecords.length, 8, 'Expected eight researched supplemental records');
assert.deepEqual(supplementalRecords.map((paper) => paper.paper_id), expectedSupplementIds, 'Supplement ID set differs');
assert.equal(papers.length, 853, 'Expected complete 853-paper performance coverage');
assert.equal(metrics.length, 123, 'Expected 123 taxonomy metrics');
assert.equal(new Set(metrics.map((metric) => metric.metric_group)).size, 11, 'Expected 11 metric groups');
assert.deepEqual(new Set(metrics.map((metric) => metric.metric_group)), expectedGroups, 'Metric groups differ from source taxonomy');

const ids = papers.map((paper) => paper.paper_id);
assert.equal(new Set(ids).size, papers.length, 'Duplicate paper IDs detected');
assert.ok(papers.every((paper) => paper.paper_label === `[${paper.paper_id}]`), 'A paper label is not formatted as [ID]');
assert.ok(papers.every((paper) => /^\[\d+\]$/.test(paper.paper_label)), 'A visible paper label violates the [ID] regex');
assert.deepEqual(
  [...Array(853)].map((_, index) => index + 1).filter((id) => !new Set(ids).has(id)),
  [],
  'One or more Reference IDs still lack a performance record'
);

assert.ok(supplementalRecords.every((paper) => Array.isArray(paper.research_sources) && paper.research_sources.length > 0), 'Every supplemental record must retain research sources');
assert.ok(supplementalRecords.every((paper) => paper.research_sources.every((source) => /^https:\/\//.test(source.url))), 'Every supplemental source must use an HTTPS URL');
assert.equal(supplementalRecords.find((paper) => paper.paper_id === 694)?.reporting_status, 'reported_numerically');
assert.ok(supplementalRecords.filter((paper) => paper.paper_id !== 694).every((paper) => paper.reporting_status === 'reported_qualitatively'));

const metricIds = new Set(metrics.map((metric) => metric.metric_id));
assert.equal(metricIds.size, metrics.length, 'Duplicate metric IDs detected');
assert.ok(supplementalRecords.every((paper) => paper.normalized_metric_ids.every((metricId) => metricIds.has(metricId))), 'A supplemental metric lacks a taxonomy mapping');
const unrecognizedMetricIds = [...new Set(basePapers.flatMap((paper) => paper.normalized_metric_ids || []).filter((metricId) => !metricIds.has(metricId)))].sort();
assert.deepEqual(unrecognizedMetricIds, ['validation_loss', 'wasserstein_distance'], 'Unexpected unrecognized metric IDs');

assert.equal(summary.source_rows, papers.length, 'Summary/source row mismatch');
assert.equal(summary.valid_paper_ids, 853, 'Summary valid-ID count mismatch');
assert.deepEqual(summary.missing_ids, [], 'Summary still lists missing IDs');
assert.equal(summary.taxonomy_metrics, metrics.length, 'Summary/taxonomy count mismatch');
assert.equal(summary.metric_groups, expectedGroups.size, 'Summary/group count mismatch');
assert.equal(summary.normalized_observations, papers.reduce((total, paper) => total + (paper.normalized_metric_ids || []).length, 0), 'Normalized observation count mismatch');
assert.equal(validation.checks.all_labels_bracketed, true, 'Validation report does not confirm [ID] labels');
assert.equal(validation.checks.all_reference_ids_represented, true, 'Validation report does not confirm complete ID coverage');
assert.deepEqual(validation.supplemented_paper_ids, expectedSupplementIds, 'Validation supplement ID set mismatch');

const statuses = papers.reduce((counts, paper) => {
  counts[paper.reporting_status] = (counts[paper.reporting_status] || 0) + 1;
  return counts;
}, {});
assert.equal(statuses.reported_numerically, 464);
assert.equal(statuses.reported_qualitatively, 161);
assert.equal(statuses.not_reported, 200);
assert.equal(statuses.review_paper, 19);
assert.equal(statuses.non_pinn_record, 8);
assert.equal(statuses.software_or_framework, 1);

const performanceJs = fs.readFileSync(path.join(root, 'assets', 'performance.js'), 'utf8');
const supplementLoader = fs.readFileSync(path.join(root, 'assets', 'performance-data-supplement-loader.js'), 'utf8');
const performanceHtml = fs.readFileSync(path.join(root, 'performance-metrics', 'index.html'), 'utf8');
const referencesHtml = fs.readFileSync(path.join(root, 'references', 'index.html'), 'utf8');
assert.match(performanceJs, /\[\$\{Number\(id\)\}\]/, 'Client label helper must render [ID]');
assert.ok(!performanceJs.includes("Array.from({length:11}"), 'Client still references obsolete unsplit chunk list');
assert.match(supplementLoader, /paper-performance-supplemental\.json/, 'Supplement loader does not load the researched records');
assert.match(performanceHtml, /performance-data-supplement-loader\.js/, 'Performance page does not load the supplement merger');
assert.match(referencesHtml, /performance-data-supplement-loader\.js/, 'Reference Technical details do not load the supplement merger');

console.log(JSON.stringify({
  ok: true,
  papers: papers.length,
  supplemental_records: supplementalRecords.length,
  metrics: metrics.length,
  groups: expectedGroups.size,
  statuses,
  missing_ids: summary.missing_ids,
  supplemented_ids: expectedSupplementIds,
  unrecognized_metric_ids: unrecognizedMetricIds
}, null, 2));
