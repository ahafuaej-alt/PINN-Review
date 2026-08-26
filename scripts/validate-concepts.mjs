import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const registry = read('data/concepts/registry.json');
const core = read('data/concepts/core.json');
const evidence = read('data/concepts/evidence-relationships.json');
const papers = new Set(read('data/papers-master.json').papers.map((paper) => Number(paper.id ?? paper.paper_id)));
const failures = [];
const ids = new Set();
for (const concept of registry.concepts) {
  if (!/^[a-z][a-z0-9-]*:[a-z0-9][a-z0-9:-]*$/.test(concept.id)) failures.push(`Invalid canonical concept ID: ${concept.id}`);
  if (ids.has(concept.id)) failures.push(`Duplicate canonical concept ID: ${concept.id}`);
  ids.add(concept.id);
  if (!concept.label || !concept.shortMeaning) failures.push(`Concept lacks label or short meaning: ${concept.id}`);
  if (!concept.destinations?.length) failures.push(`Concept lacks a destination: ${concept.id}`);
  for (const destination of concept.destinations || []) if (/^\/?(?:https?:)?\/\//.test(destination.href) || destination.href.includes('..')) failures.push(`Non-canonical internal destination for ${concept.id}: ${destination.href}`);
}
for (const rule of registry.autoLink) if (!ids.has(rule.id)) failures.push(`Auto-link target is absent: ${rule.id}`);
const relationshipIds = new Set();
const relationKeys = new Set();
for (const relation of evidence.relationships) {
  if (relationshipIds.has(relation.id)) failures.push(`Duplicate evidence relationship ID: ${relation.id}`);
  relationshipIds.add(relation.id);
  if (!papers.has(relation.paperId)) failures.push(`Evidence relationship has unknown Reference ID [${relation.paperId}]`);
  if (!ids.has(relation.objectId)) failures.push(`Evidence relationship has unknown object: ${relation.objectId}`);
  if (!['Direct', 'Equivalent', 'Synthesized'].includes(relation.supportType)) failures.push(`Invalid support type: ${relation.supportType}`);
  if (!relation.rationale?.trim()) failures.push(`Evidence relationship lacks rationale: ${relation.id}`);
  const key = `${relation.paperId}|${relation.objectId}|${relation.supportType}|${relation.rationale}`;
  if (relationKeys.has(key)) failures.push(`Duplicate evidence relationship: ${key}`);
  relationKeys.add(key);
}
for (const paper of evidence.byPaper) for (const id of paper.relationshipIds) if (!relationshipIds.has(id)) failures.push(`Paper [${paper.paperId}] points to missing relationship ${id}`);
const multiRolePapers = evidence.byPaper.filter((paper) => new Set(paper.relationshipIds.map((id) => evidence.relationships.find((relation) => relation.id === id)?.objectId)).size > 1);
if (!multiRolePapers.length) failures.push('The evidence graph does not preserve any paper-to-multiple-concept relationship.');
const exactContractIds = ['optimizer:adam', 'optimizer:lbfgs', 'metric:rmse', 'metric:relative-l2', 'formulation:weak-form', 'formulation:variational-form', 'method:automatic-differentiation', 'architecture:fourier-features'];
for (const id of exactContractIds) if (!ids.has(id)) failures.push(`Required canonical contract ID is absent: ${id}`);
const coreIds = new Set(core.concepts.map((concept) => concept.id));
if (core.totalConcepts !== registry.concepts.length) failures.push('Core registry total does not match the exhaustive registry.');
for (const id of exactContractIds) if (!coreIds.has(id)) failures.push(`Required runtime concept is absent from the core registry: ${id}`);
for (const rule of core.autoLink) if (!coreIds.has(rule.id)) failures.push(`Core auto-link target is absent: ${rule.id}`);
const app = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8');
const interaction = fs.readFileSync(path.join(root, 'assets/concepts.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'assets/concepts.css'), 'utf8');
for (const token of ['assets/concepts.js?v=knowledge-20260826', 'dataset.atlasConcepts']) if (!app.includes(token)) failures.push(`Shared application does not load the concept system token: ${token}`);
for (const token of ['data/concepts/core.json', 'data/concepts/registry.json', 'loadFullRegistry', 'MutationObserver', "aria-haspopup", "event.key === 'Escape'", 'pointerover', 'focusin', 'data-concept-open', 'Where this concept appears', 'Supporting evidence']) if (!interaction.includes(token)) failures.push(`Concept interaction model lacks: ${token}`);
for (const token of ['--atlas-action', '--atlas-evidence', '--atlas-selected', '--atlas-related', '--atlas-warning', ':focus-visible', '.atlas-concept-inspector', 'text-decoration: none']) if (!styles.includes(token)) failures.push(`Concept style system lacks: ${token}`);
const htmlFiles = [];
const walkHtml = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', '.github', 'artifacts', 'node_modules'].includes(entry.name)) continue;
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(target);
    else if (entry.name === 'index.html' || target === path.join(root, '404.html')) htmlFiles.push(target);
  }
};
walkHtml(root);
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('assets/app.js?v=knowledge-20260826')) failures.push(`${path.relative(root, file)} does not load the current shared concept-capable application.`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Concept validation passed: ${ids.size} concepts, ${evidence.relationships.length} evidence relationships, ${multiRolePapers.length} papers supporting multiple objects.`);
