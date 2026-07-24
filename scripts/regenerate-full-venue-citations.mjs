import { extractLegacyBibliographic, formatMdpiCitation, normalizeBibliographic } from '../assets/citation-format.mjs';
import { bumpPatchVersion, readJson, writeJsonAtomic } from './lib/dataset-core.mjs';
import { generateDatasets } from './build-datasets.mjs';

const JOURNAL_STYLE_TYPES = new Set(['journal', 'conference_journal', 'preprint']);
const master = readJson('data/papers-master.json');
const changesLog = readJson('data/changes.json');
const today = new Date().toISOString().slice(0, 10);

let eligible = 0;
let citationChanges = 0;
let bibliographicBackfills = 0;
let automaticModeChanges = 0;
const failures = [];
const changedPaperIds = [];

for (const paper of master.papers) {
  if (!JOURNAL_STYLE_TYPES.has(paper.venue?.type)) continue;
  eligible += 1;

  const parsedLegacy = extractLegacyBibliographic({ ...paper, bibliographic: undefined });
  const bibliographic = normalizeBibliographic({
    ...parsedLegacy,
    ...(paper.bibliographic || {})
  });

  if (!bibliographic.authors) {
    failures.push(`paper ${paper.id}: authors could not be extracted or found in bibliographic metadata`);
    continue;
  }

  const generatedCitation = formatMdpiCitation({ ...paper, bibliographic });
  if (!generatedCitation) {
    failures.push(`paper ${paper.id}: MDPI citation generation returned an empty value`);
    continue;
  }

  const canonicalVenue = String(paper.venue?.name || '').trim().replace(/[\s,;:.]+$/u, '');
  if (!canonicalVenue || !generatedCitation.includes(canonicalVenue)) {
    failures.push(`paper ${paper.id}: generated citation does not contain the canonical venue name “${canonicalVenue || '[missing]'}”`);
    continue;
  }

  let changed = false;
  if (!paper.bibliographic || JSON.stringify(normalizeBibliographic(paper.bibliographic)) !== JSON.stringify(bibliographic)) {
    paper.bibliographic = bibliographic;
    bibliographicBackfills += 1;
    changed = true;
  }
  if (paper.citation !== generatedCitation) {
    paper.citation = generatedCitation;
    citationChanges += 1;
    changed = true;
  }
  paper.provenance ||= {};
  if (paper.provenance.citation_mode !== 'automatic') {
    paper.provenance.citation_mode = 'automatic';
    automaticModeChanges += 1;
    changed = true;
  }
  paper.provenance.citation_name_source = 'venue.name';
  if (changed) {
    paper.last_updated = today;
    changedPaperIds.push(paper.id);
  }
}

if (failures.length) {
  throw new Error(`Full-venue citation migration stopped; no files were written:\n${failures.join('\n')}`);
}
if (eligible === 0) throw new Error('No journal-style records were found');

for (const paper of master.papers.filter((record) => JOURNAL_STYLE_TYPES.has(record.venue?.type))) {
  const expected = formatMdpiCitation(paper);
  if (paper.citation !== expected) throw new Error(`paper ${paper.id}: citation is not the canonical full-venue MDPI output after migration`);
}

master.metadata.dataset_version = bumpPatchVersion(master.metadata.dataset_version);
master.metadata.last_updated = today;
master.metadata.record_count = master.papers.length;

changesLog.changes.unshift({
  change_id: `full-venue-citation-migration-${today}-${master.metadata.dataset_version}`,
  version: master.metadata.dataset_version,
  date: today,
  paper_id: null,
  changed_fields: ['citation', 'bibliographic', 'provenance.citation_mode', 'provenance.citation_name_source'],
  reason: 'Regenerated every journal, conference-journal, and preprint citation from the canonical full publication name stored in venue.name.',
  evidence: {
    url: 'https://github.com/ahafuaej-alt/PINN-Review',
    note: 'Repository-wide deterministic MDPI citation migration; journal_abbreviation remains optional metadata only.'
  },
  submitted_by: 'repository maintenance',
  impact: {
    journal_style_records: eligible,
    citation_changes: citationChanges,
    bibliographic_backfills: bibliographicBackfills,
    automatic_mode_changes: automaticModeChanges,
    changed_paper_count: changedPaperIds.length,
    changed_paper_ids: changedPaperIds
  }
});

writeJsonAtomic('data/papers-master.json', master);
writeJsonAtomic('data/changes.json', changesLog);
const generated = generateDatasets();

console.log(JSON.stringify({
  status: 'applied',
  version: master.metadata.dataset_version,
  journal_style_records: eligible,
  citation_changes: citationChanges,
  bibliographic_backfills: bibliographicBackfills,
  automatic_mode_changes: automaticModeChanges,
  changed_paper_count: changedPaperIds.length,
  changed_paper_ids: changedPaperIds,
  generated
}, null, 2));
