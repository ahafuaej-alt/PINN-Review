import { extractLegacyBibliographic, formatMdpiCitation, normalizeBibliographic } from '../assets/citation-format.mjs';
import { bumpPatchVersion, readJson, writeJsonAtomic } from './lib/dataset-core.mjs';
import { generateDatasets } from './build-datasets.mjs';

const JOURNAL_STYLE_TYPES = new Set(['journal', 'conference_journal', 'preprint']);
const SOURCE_CORRECTIONS = new Map([
  [651, {
    venue: { name: 'arXiv [Electrical Engineering and Systems Science > Systems and Control]', type: 'preprint' },
    evidence_url: 'https://arxiv.org/abs/2408.14951'
  }],
  [766, {
    title: 'Learning Specialized Activation Functions for Physics-Informed Neural Networks',
    doi: '10.4208/cicp.OA-2023-0058',
    publisher_url: 'https://www.global-sci.com/cicp/article/view/7207',
    venue: { name: 'Communications in Computational Physics', type: 'journal' },
    bibliographic: {
      authors: 'Wang, H.; Lu, L.; Song, S.; Huang, G.',
      journal_abbreviation: 'Commun. Comput. Phys.',
      volume: '34',
      issue: '4',
      pages: '869-906',
      publisher: 'Global Science Press',
      publication_date: '2023-11'
    },
    evidence_url: 'https://www.global-sci.com/cicp/article/view/7207'
  }],
  [838, {
    title: 'Physics-Guided, Physics-Informed, and Physics-Encoded Neural Networks and Operators in Scientific Computing: Fluid and Solid Mechanics',
    doi: '10.1115/1.4064449',
    publisher_url: 'https://doi.org/10.1115/1.4064449',
    venue: { name: 'Journal of Computing and Information Science in Engineering', type: 'journal' },
    bibliographic: {
      authors: 'Faroughi, S.A.; Pawar, N.M.; Fernandes, C.; Raissi, M.; Das, S.; Kalantari, N.K.; Mahjour, S.K.',
      journal_abbreviation: 'J. Comput. Inf. Sci. Eng.',
      volume: '24',
      issue: '4',
      article_number: '040802',
      publisher: 'ASME International',
      publication_date: '2024-01-29'
    },
    evidence_url: 'https://doi.org/10.1115/1.4064449'
  }]
]);

const master = readJson('data/papers-master.json');
const changesLog = readJson('data/changes.json');
const today = new Date().toISOString().slice(0, 10);

let eligible = 0;
let citationChanges = 0;
let bibliographicBackfills = 0;
let automaticModeChanges = 0;
let sourceMetadataCorrections = 0;
const failures = [];
const changedPaperIds = [];

for (const paper of master.papers) {
  if (!JOURNAL_STYLE_TYPES.has(paper.venue?.type)) continue;
  eligible += 1;
  let changed = false;

  const correction = SOURCE_CORRECTIONS.get(paper.id);
  if (correction) {
    let corrected = false;
    for (const name of ['title', 'doi', 'publisher_url']) {
      if (correction[name] !== undefined && paper[name] !== correction[name]) {
        paper[name] = correction[name];
        corrected = true;
      }
    }
    if (correction.venue && JSON.stringify(paper.venue) !== JSON.stringify(correction.venue)) {
      paper.venue = structuredClone(correction.venue);
      corrected = true;
    }
    if (correction.bibliographic) {
      const merged = normalizeBibliographic({ ...(paper.bibliographic || {}), ...correction.bibliographic });
      if (JSON.stringify(normalizeBibliographic(paper.bibliographic || {})) !== JSON.stringify(merged)) {
        paper.bibliographic = merged;
        corrected = true;
      }
    }
    paper.provenance ||= {};
    if (correction.evidence_url && paper.provenance.evidence_url !== correction.evidence_url) {
      paper.provenance.evidence_url = correction.evidence_url;
      corrected = true;
    }
    if (corrected) {
      sourceMetadataCorrections += 1;
      changed = true;
    }
  }

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
  if (paper.provenance.citation_name_source !== 'venue.name') {
    paper.provenance.citation_name_source = 'venue.name';
    changed = true;
  }
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
  const canonicalVenue = String(paper.venue.name).trim().replace(/[\s,;:.]+$/u, '');
  if (!paper.citation.includes(canonicalVenue)) throw new Error(`paper ${paper.id}: citation does not contain venue.name after migration`);
}

master.metadata.dataset_version = bumpPatchVersion(master.metadata.dataset_version);
master.metadata.last_updated = today;
master.metadata.record_count = master.papers.length;

changesLog.changes.unshift({
  change_id: `full-venue-citation-migration-${today}-${master.metadata.dataset_version}`,
  version: master.metadata.dataset_version,
  date: today,
  paper_id: null,
  changed_fields: ['title', 'doi', 'publisher_url', 'venue', 'citation', 'bibliographic', 'provenance.citation_mode', 'provenance.citation_name_source'],
  reason: 'Regenerated every journal, conference-journal, and preprint citation from the canonical full publication name stored in venue.name.',
  evidence: {
    url: 'https://github.com/ahafuaej-alt/PINN-Review',
    note: 'Repository-wide deterministic MDPI citation migration; journal_abbreviation remains optional metadata only. Source corrections for papers 651, 766, and 838 use their authoritative arXiv, publisher, and DOI records.'
  },
  submitted_by: 'repository maintenance',
  impact: {
    journal_style_records: eligible,
    citation_changes: citationChanges,
    bibliographic_backfills: bibliographicBackfills,
    automatic_mode_changes: automaticModeChanges,
    source_metadata_corrections: sourceMetadataCorrections,
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
  source_metadata_corrections: sourceMetadataCorrections,
  changed_paper_count: changedPaperIds.length,
  changed_paper_ids: changedPaperIds,
  generated
}, null, 2));
