import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const read = (file) => fs.readFile(path.join(root, file), 'utf8');
const json = async (file) => JSON.parse(await read(file));
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };

const [data, meta, dpData, dpMeta, stack, coDesign, page, script, style] = await Promise.all([
  json('data/frameworks/failure-diagnostics.json'),
  json('data/frameworks/failure-diagnostics-v2.json'),
  json('data/frameworks/design-performance.json'),
  json('data/frameworks/design-performance-v2.json'),
  json('data/frameworks/design-stack.json'),
  json('data/frameworks/co-design.json'),
  read('frameworks/failure-diagnostics/index.html'),
  read('assets/failure-diagnostics-v2.js'),
  read('assets/failure-diagnostics-v2.css')
]);

assert(meta.version === '2.0.0', `Expected Failure Diagnostics metadata v2.0.0, found ${meta.version}.`);
assert(meta.framework_id === 'failure-diagnostics', 'Failure Diagnostics metadata points to the wrong framework.');
assert(data.categories.length === meta.audit.expected_categories && data.categories.length === 4, 'Failure Diagnostics must preserve four diagnostic families.');
assert(data.modes.length === meta.audit.expected_modes && data.modes.length === 13, 'Failure Diagnostics must preserve thirteen failure modes.');
assert(data.modes.length * 4 === meta.audit.expected_components && meta.audit.expected_components === 52, 'Failure Diagnostics must expose exactly 52 challenge/symptom/response/improvement components.');

const modeIds = data.modes.map((mode) => mode.id);
assert(new Set(modeIds).size === modeIds.length, 'Failure mode IDs must remain unique.');
assert(Object.keys(meta.mode_profiles).length === modeIds.length, 'Every failure mode must have exactly one v2 diagnostic profile.');
assert(modeIds.every((id) => meta.mode_profiles[id]), 'A failure mode is missing its v2 diagnostic profile.');
assert(Object.keys(meta.mode_profiles).every((id) => modeIds.includes(id)), 'The v2 metadata contains an unknown failure mode.');

const validScopes = new Set(['exact', 'pathway', 'unverified']);
const expectedStages = ['challenge', 'symptoms', 'response', 'improvement'];
const validOutcomes = new Set(dpData.columns.map((column) => column.id));
const validStack = new Set(stack.stages.map((stage) => stage.id));
const validCoDesign = new Set(coDesign.domains.map((domain) => domain.id));
const validRows = new Set(dpData.rows.map((row) => row.id));

assert(meta.verification_order.length === 7, 'Failure Diagnostics verification must use all seven Design–Performance outcomes.');
assert(new Set(meta.verification_order).size === 7, 'Failure Diagnostics verification outcomes must be unique.');
assert(meta.verification_order.every((id) => validOutcomes.has(id) && dpMeta.outcomes[id]), 'Failure Diagnostics verification contains an unknown Design–Performance outcome.');

for (const mode of data.modes) {
  const profile = meta.mode_profiles[mode.id];
  assert(profile.checks?.length >= 2, `${mode.id} needs at least two discriminating checks.`);
  assert(profile.confirmation_metrics?.length >= 2, `${mode.id} needs at least two confirmatory quantities.`);
  assert(profile.tradeoffs?.length >= 1, `${mode.id} needs at least one explicit trade-off.`);
  assert(profile.verification?.outcomes?.length >= 2, `${mode.id} needs a pathway-specific verification outcome set.`);
  assert(profile.verification?.metrics?.length >= 2, `${mode.id} needs pathway-specific verification quantities.`);
  assert(profile.verification.outcomes.every((id) => validOutcomes.has(id)), `${mode.id} points to an unknown verification outcome.`);
  assert(Object.keys(profile.evidence_scope).length === 4, `${mode.id} must classify all four evidence components.`);
  expectedStages.forEach((stage) => assert(validScopes.has(profile.evidence_scope[stage]), `${mode.id}:${stage} has an invalid evidence-scope label.`));
  const links = profile.cross_links;
  assert(links.stack?.length >= 1, `${mode.id} lacks a Design Stack cross-link.`);
  assert(links.codesign?.length >= 1, `${mode.id} lacks a Co-Design cross-link.`);
  assert(links.performance_rows?.length >= 1, `${mode.id} lacks a Design–Performance row cross-link.`);
  assert(links.performance_outcomes?.length >= 1, `${mode.id} lacks a Design–Performance outcome cross-link.`);
  assert(links.atlas?.some((item) => item.route === 'performance-metrics/'), `${mode.id} lacks its global Performance Metrics verification link.`);
  links.stack.forEach((id) => assert(validStack.has(id), `${mode.id} points to unknown Design Stack stage ${id}.`));
  links.codesign.forEach((id) => assert(validCoDesign.has(id), `${mode.id} points to unknown Co-Design domain ${id}.`));
  links.performance_rows.forEach((id) => assert(validRows.has(id), `${mode.id} points to unknown Design–Performance row ${id}.`));
  links.performance_outcomes.forEach((id) => assert(validOutcomes.has(id), `${mode.id} points to unknown Design–Performance outcome ${id}.`));
}

for (const token of ['failure-diagnostics-v2.css', 'failure-diagnostics-v2.js']) assert(page.includes(token), `Failure Diagnostics page does not load ${token}.`);
for (const token of ['Start from a symptom', 'Discriminating checks', 'Compare candidate failures', 'Evidence coverage', 'data-native-vector', 'exportNativeSvg', 'performance_rows', 'data-fd-mobile-mode', 'data-fd-component']) assert(script.includes(token), `Failure Diagnostics workbench script lacks ${token}.`);
for (const token of ['.fd-workbench', '.fd-map-shell', '.fd-verification-rail', '.fd-flow-arrow', '.fd-mobile-stepper', '.fd-evidence-lens', 'position: sticky']) assert(style.includes(token), `Failure Diagnostics stylesheet lacks ${token}.`);
assert(!script.includes('foreignObject'), 'Failure Diagnostics native SVG exporter must not serialize HTML through foreignObject.');
assert(meta.audit.method.includes('not a probability') && meta.audit.evidence_policy.includes('documentation scope'), 'Scientific interpretation boundaries are incomplete.');

console.log(`Failure Diagnostics v2 validation passed: ${data.categories.length} families · ${data.modes.length} modes · ${meta.audit.expected_components} deep-linkable components · 7 verification outcomes · symptom-first differential diagnosis · native-vector export.`);
