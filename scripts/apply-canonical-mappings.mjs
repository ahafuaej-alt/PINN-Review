import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const write = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const mappings = read('data/concepts/canonical-mappings.json');
const registry = read('data/concepts/registry.json');
const core = read('data/concepts/core.json');
const evidence = read('data/concepts/evidence-relationships.json');

const uniqueStrings = (values = []) => [...new Set(values.filter(Boolean))];
const uniqueLinks = (values = []) => {
  const seen = new Set();
  return values.filter((entry) => {
    if (!entry?.href) return false;
    const key = `${entry.href}|${entry.label || ''}|${entry.context || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
const asSecondary = (entry) => ({ ...entry, primary: false });
const contextFromDestination = (source, destination, context) => ({
  label: destination.label || source.label,
  href: destination.href,
  context
});

const fullById = new Map(registry.concepts.map((concept) => [concept.id, concept]));
const failures = [];
for (const item of [...mappings.sameConcept, ...mappings.contextOnly]) {
  if (!fullById.has(item.source)) failures.push(`Unknown mapping source ${item.source}`);
  if (!fullById.has(item.target)) failures.push(`Unknown mapping target ${item.target}`);
}
for (const item of mappings.keepSeparate || []) {
  if (!fullById.has(item.left)) failures.push(`Unknown keepSeparate concept ${item.left}`);
  if (!fullById.has(item.right)) failures.push(`Unknown keepSeparate concept ${item.right}`);
}
if (failures.length) throw new Error(failures.join('\n'));

function applyMappings(document, sourceDocument = registry) {
  const byId = new Map(document.concepts.map((concept) => [concept.id, concept]));
  const sourceById = new Map(sourceDocument.concepts.map((concept) => [concept.id, concept]));

  for (const item of mappings.sameConcept) {
    const source = sourceById.get(item.source);
    const target = byId.get(item.target);
    const localSource = byId.get(item.source);
    if (!source || !target) continue;

    const sourceDestinations = source.destinations || [];
    const targetDestinations = target.destinations || [];
    const sourceContexts = source.appearsIn || [];
    const targetContexts = target.appearsIn || [];
    const sourceOccurrences = sourceDestinations.map((destination) => contextFromDestination(source, destination, source.category || 'Atlas context'));

    target.destinations = uniqueLinks([...targetDestinations, ...sourceDestinations.map(asSecondary)]);
    target.appearsIn = uniqueLinks([...targetContexts, ...sourceOccurrences, ...sourceContexts]);
    target.sameConceptRecords = uniqueStrings([...(target.sameConceptRecords || []), item.source]);

    if (localSource) {
      localSource.canonicalId = item.target;
      localSource.sameConceptAs = item.target;
      localSource.destinations = uniqueLinks([...(localSource.destinations || []), ...targetDestinations.map(asSecondary)]);
      localSource.appearsIn = uniqueLinks([...(localSource.appearsIn || []), ...targetContexts]);
    }
  }

  for (const item of mappings.contextOnly) {
    const source = sourceById.get(item.source);
    const target = byId.get(item.target);
    const localSource = byId.get(item.source);
    if (!source || !target) continue;

    const sourceContexts = (source.destinations || []).map((destination) => contextFromDestination(source, destination, source.category || 'Atlas context'));
    target.appearsIn = uniqueLinks([...(target.appearsIn || []), ...sourceContexts]);
    target.contextRecords = uniqueStrings([...(target.contextRecords || []), item.source]);

    if (localSource) {
      const canonicalBacklinks = (target.destinations || []).slice(0, 1).map((destination) => ({
        label: `Canonical concept · ${target.label}`,
        href: destination.href,
        context: 'Canonical concept'
      }));
      localSource.appearsIn = uniqueLinks([...(localSource.appearsIn || []), ...canonicalBacklinks]);
      localSource.contextFor = uniqueStrings([...(localSource.contextFor || []), item.target]);
    }
  }

  const genericContexts = {
    metric: [{ label: 'References · Paper Technical Details', href: 'references/', context: 'Paper-level usage' }],
    optimizer: [
      { label: 'Training', href: 'training/', context: 'Training context' },
      { label: 'References · Paper Technical Details', href: 'references/', context: 'Paper-level usage' }
    ],
    activation: [
      { label: 'Architectures', href: 'architectures/', context: 'Representation context' },
      { label: 'References · Paper Technical Details', href: 'references/', context: 'Paper-level usage' }
    ],
    architecture: [{ label: 'Architectures', href: 'architectures/', context: 'Representation context' }],
    sampling: [{ label: 'Training', href: 'training/', context: 'Training context' }]
  };
  for (const concept of document.concepts) {
    const namespace = concept.id.split(':')[0];
    if (genericContexts[namespace]) concept.appearsIn = uniqueLinks([...(concept.appearsIn || []), ...genericContexts[namespace]]);
  }

  document.semanticMapping = {
    schemaVersion: mappings.schemaVersion,
    updated: mappings.updated,
    sameConceptCount: mappings.sameConcept.length,
    contextOnlyCount: mappings.contextOnly.length,
    keepSeparateCount: (mappings.keepSeparate || []).length
  };
  document.keepSeparate = (mappings.keepSeparate || []).map(({ left, right, reason }) => ({ left, right, reason }));
}

applyMappings(registry, registry);
applyMappings(core, registry);

const canonicalTargetBySource = new Map(mappings.sameConcept.map((item) => [item.source, item.target]));
for (const relation of evidence.relationships) {
  const target = canonicalTargetBySource.get(relation.objectId);
  if (target) relation.canonicalObjectId = target;
  else delete relation.canonicalObjectId;
}

const relationCountFor = (conceptId) => evidence.relationships.filter((relation) => relation.objectId === conceptId || relation.canonicalObjectId === conceptId).length;
const byPaperCount = new Map((evidence.byPaper || []).map((entry) => [entry.paperId, entry.relationshipIds.length]));
for (const document of [registry, core]) {
  for (const concept of document.concepts) {
    if (concept.category === 'Reference') {
      const paperId = Number(concept.id.split(':')[1]);
      concept.evidenceCount = byPaperCount.get(paperId) || 0;
    } else concept.evidenceCount = relationCountFor(concept.id);
  }
}

evidence.semanticMapping = {
  schemaVersion: mappings.schemaVersion,
  canonicalObjectField: 'canonicalObjectId',
  description: 'For exact same-concept mappings, canonicalObjectId exposes source evidence through the semantic canonical concept without duplicating paper relationships.'
};

write('data/concepts/registry.json', registry);
write('data/concepts/core.json', core);
write('data/concepts/evidence-relationships.json', evidence);
console.log(`Applied ${mappings.sameConcept.length} same-concept mappings, ${mappings.contextOnly.length} contextual mappings, and ${(mappings.keepSeparate || []).length} explicit separations.`);
