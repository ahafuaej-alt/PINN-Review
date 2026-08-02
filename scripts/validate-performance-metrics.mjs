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
const summary = JSON.parse(fs.readFileSync(path.join(dataDir, 'performance-summary.json'), 'utf8'));
const validation = JSON.parse(fs.readFileSync(path.join(dataDir, 'performance-validation.json'), 'utf8'));

const papers = paperData.papers;
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

assert.equal(papers.length, 845, 'Expected 845 paper records');
assert.equal(metrics.length, 123, 'Expected 123 taxonomy metrics');
assert.equal(new Set(metrics.map((m) => m.metric_group)).size, 11, 'Expected 11 metric groups');
assert.deepEqual(new Set(metrics.map((m) => m.metric_group)), expectedGroups, 'Metric groups differ from source taxonomy');

const ids = papers.map((p) => p.paper_id);
assert.equal(new Set(ids).size, papers.length, 'Duplicate paper IDs detected');
assert.ok(papers.every((p) => p.paper_label === `[${p.paper_id}]`), 'A paper label is not formatted as [ID]');
assert.ok(papers.every((p) => /^\[\d+\]$/.test(p.paper_label)), 'A visible paper label violates the [ID] regex');
assert.deepEqual(
  [...Array(853)].map((_, i) => i + 1).filter((id) => !new Set(ids).has(id)),
  [194,452,694,776,803,809,812,813],
  'Missing ID set differs from source validation'
);

const metricIds = new Set(metrics.map((m) => m.metric_id));
assert.equal(metricIds.size, metrics.length, 'Duplicate metric IDs detected');
const unrecognizedMetricIds = [...new Set(papers.flatMap((p) => p.normalized_metric_ids || []).filter((id) => !metricIds.has(id)))].sort();
assert.deepEqual(unrecognizedMetricIds, ['validation_loss', 'wasserstein_distance'], 'Unexpected unrecognized metric IDs');
assert.equal(summary.source_rows, papers.length, 'Summary/source row mismatch');
assert.equal(summary.taxonomy_metrics, metrics.length, 'Summary/taxonomy count mismatch');
assert.equal(summary.metric_groups, expectedGroups.size, 'Summary/group count mismatch');
assert.equal(validation.checks.all_labels_bracketed, true, 'Validation report does not confirm [ID] labels');

const statuses = papers.reduce((acc, p) => {
  acc[p.reporting_status] = (acc[p.reporting_status] || 0) + 1;
  return acc;
}, {});
assert.equal(statuses.reported_numerically, 463);
assert.equal(statuses.reported_qualitatively, 154);
assert.equal(statuses.not_reported, 200);
assert.equal(statuses.review_paper, 19);
assert.equal(statuses.non_pinn_record, 8);
assert.equal(statuses.software_or_framework, 1);

const js = fs.readFileSync(path.join(root, 'assets', 'performance.js'), 'utf8');
assert.match(js, /\[\$\{Number\(id\)\}\]/, 'Client label helper must render [ID]');
assert.ok(!js.includes("Array.from({length:11}"), 'Client still references obsolete unsplit chunk list');

console.log(JSON.stringify({
  ok: true,
  papers: papers.length,
  metrics: metrics.length,
  groups: expectedGroups.size,
  statuses,
  missing_ids: summary.missing_ids,
  unrecognized_metric_ids: unrecognizedMetricIds
}, null, 2));
