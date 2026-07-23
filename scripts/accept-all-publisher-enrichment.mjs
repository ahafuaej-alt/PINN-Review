import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { formatMdpiCitation, normalizeBibliographic } from '../assets/citation-format.mjs';
import { reconcilePublisherReview } from '../assets/publisher-review-state.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const ACCEPTABLE_STATUSES = new Set(['enriched', 'review', 'title-mismatch']);

const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
const writeJson = (relativePath, value) => fs.writeFileSync(path.join(ROOT, relativePath), stableJson(value));
const hasValue = (value) => value !== null && value !== undefined && !(typeof value === 'string' && value.trim() === '');

const nextMinorVersion = (version) => {
  const match = String(version || '').match(/^(\d+)\.(\d+)\.(\d+)$/u);
  if (!match) throw new Error(`Invalid dataset version: ${version}`);
  return `${match[1]}.${Number(match[2]) + 1}.0`;
};

const setNested = (target, dottedPath, value) => {
  if (!hasValue(value)) return false;
  const parts = dottedPath.split('.');
  let cursor = target;
  for (const part of parts.slice(0, -1)) {
    if (!cursor[part] || typeof cursor[part] !== 'object' || Array.isArray(cursor[part])) cursor[part] = {};
    cursor = cursor[part];
  }
  const key = parts.at(-1);
  const before = JSON.stringify(cursor[key]);
  cursor[key] = structuredClone(value);
  return before !== JSON.stringify(cursor[key]);
};

const applyPublishedVersion = (paper, proposed) => {
  if (!proposed || typeof proposed !== 'object') return [];
  const changed = [];
  for (const field of ['title', 'doi', 'publisher_url', 'year', 'abstract', 'access']) {
    if (setNested(paper, field, proposed[field])) changed.push(field);
  }
  if (proposed.venue && typeof proposed.venue === 'object') {
    for (const field of ['name', 'type']) {
      if (setNested(paper, `venue.${field}`, proposed.venue[field])) changed.push(`venue.${field}`);
    }
  }
  if (proposed.bibliographic && typeof proposed.bibliographic === 'object') {
    const normalized = normalizeBibliographic(proposed.bibliographic);
    for (const [field, value] of Object.entries(normalized)) {
      if (setNested(paper, `bibliographic.${field}`, value)) changed.push(`bibliographic.${field}`);
    }
  }
  return changed;
};

const parseArgs = (argv) => {
  const options = { summary: '/tmp/publisher-review-acceptance-summary.json' };
  for (const arg of argv) {
    if (arg.startsWith('--summary=')) options.summary = arg.slice('--summary='.length);
  }
  return options;
};

export const acceptAllPublisherEnrichment = ({ today = new Date().toISOString().slice(0, 10) } = {}) => {
  const master = readJson('data/papers-master.json');
  const changes = readJson('data/changes.json');
  const sourceReport = readJson('data/publisher-enrichment-review.json');
  const currentVersion = master.metadata.dataset_version;
  const reconciled = reconcilePublisherReview(sourceReport, changes.changes, currentVersion);
  const releaseVersion = nextMinorVersion(currentVersion);
  const papersById = new Map(master.papers.map((paper) => [paper.id, paper]));
  const graphicalAbstractsBefore = stableJson(master.papers.map((paper) => ({ id: paper.id, graphical_abstract: paper.graphical_abstract ?? null })));
  const accepted = [];
  const skipped = { resolved: 0, failed: 0, no_metadata: 0, unsupported_status: 0 };

  for (const record of reconciled.records || []) {
    if (record.resolution?.status === 'resolved') {
      skipped.resolved += 1;
      continue;
    }
    if (record.status === 'failed') {
      skipped.failed += 1;
      continue;
    }
    if (record.status === 'no-metadata') {
      skipped.no_metadata += 1;
      continue;
    }
    if (!ACCEPTABLE_STATUSES.has(record.status)) {
      skipped.unsupported_status += 1;
      continue;
    }

    const paper = papersById.get(record.id);
    if (!paper) throw new Error(`Publisher review references unknown paper ${record.id}`);
    const acceptedFields = new Set(record.fields_added || []);
    let conflictChanges = 0;
    let publishedVersion = null;

    for (const finding of record.conflicts || []) {
      if (!finding || !finding.field) continue;
      acceptedFields.add(finding.field);
      if (finding.field === 'published_version') {
        publishedVersion = structuredClone(finding.proposed);
        const changed = applyPublishedVersion(paper, finding.proposed);
        for (const field of changed) acceptedFields.add(field);
        if (changed.length) conflictChanges += 1;
        continue;
      }
      if (setNested(paper, finding.field, finding.proposed)) conflictChanges += 1;
    }

    const generatedCitation = formatMdpiCitation(paper);
    if (generatedCitation && paper.citation !== generatedCitation) {
      paper.citation = generatedCitation;
      acceptedFields.add('citation');
      conflictChanges += 1;
    }

    paper.last_updated = today;
    paper.provenance = {
      ...(paper.provenance || {}),
      publisher_enrichment_review: {
        status: 'accepted',
        accepted_at: today,
        dataset_version: releaseVersion,
        report_baseline_version: sourceReport.dataset_version_after,
        original_status: record.status,
        source: record.source || null,
        evidence_url: record.evidence_url || null,
        accepted_fields: [...acceptedFields].sort(),
        conflict_count: (record.conflicts || []).length,
        published_version: publishedVersion
          ? {
              source: publishedVersion.source || null,
              confidence: publishedVersion.confidence ?? null,
              journal_ref: publishedVersion.journal_ref || null
            }
          : null
      }
    };

    accepted.push({
      id: record.id,
      title: paper.title,
      status: record.status,
      evidence_url: record.evidence_url || null,
      accepted_fields: [...acceptedFields].sort(),
      conflict_count: (record.conflicts || []).length,
      conflict_changes: conflictChanges
    });
  }

  if (!accepted.length) {
    return {
      changed: false,
      current_version: currentVersion,
      release_version: currentVersion,
      accepted_records: 0,
      accepted_conflicts: 0,
      skipped
    };
  }

  const graphicalAbstractsAfter = stableJson(master.papers.map((paper) => ({ id: paper.id, graphical_abstract: paper.graphical_abstract ?? null })));
  if (graphicalAbstractsBefore !== graphicalAbstractsAfter) throw new Error('Graphical abstracts changed during publisher review acceptance.');

  master.metadata.dataset_version = releaseVersion;
  master.metadata.last_updated = today;
  master.metadata.maintenance = {
    ...(master.metadata.maintenance || {}),
    publisher_enrichment: {
      ...(master.metadata.maintenance?.publisher_enrichment || {}),
      review_acceptance: {
        date: today,
        version: releaseVersion,
        accepted_records: accepted.length,
        accepted_conflicts: accepted.reduce((total, record) => total + record.conflict_count, 0),
        accepted_statuses: [...ACCEPTABLE_STATUSES],
        skipped,
        graphical_abstracts_unchanged: true
      }
    }
  };

  const paperAudits = accepted.map((record) => ({
    change_id: `publisher-review-accept-${record.id}-${today}-${releaseVersion}`,
    version: releaseVersion,
    date: today,
    paper_id: record.id,
    changed_fields: record.accepted_fields,
    reason: 'Accepted the remaining publisher/DOI metadata proposals in the Publisher metadata review queue.',
    evidence: {
      url: record.evidence_url,
      note: `Bulk acceptance from data/publisher-enrichment-review.json; original status: ${record.status}; conflict proposals: ${record.conflict_count}.`
    },
    impact: {
      publisher_review_resolved: true,
      accepted_conflicts: record.conflict_count
    }
  }));

  const summaryAudit = {
    change_id: `publisher-review-accept-all-${today}-${releaseVersion}`,
    version: releaseVersion,
    date: today,
    paper_id: null,
    changed_fields: [...new Set(accepted.flatMap((record) => record.accepted_fields))].sort(),
    reason: 'Accepted all still-open publisher metadata enrichment proposals with usable metadata, while leaving failed and unavailable lookups unresolved.',
    evidence: {
      url: 'data/publisher-enrichment-review.json',
      note: 'Graphical abstracts were excluded and verified unchanged.'
    },
    impact: {
      accepted_records: accepted.length,
      accepted_conflicts: accepted.reduce((total, record) => total + record.conflict_count, 0),
      skipped
    }
  };

  changes.changes.unshift(summaryAudit, ...paperAudits);
  writeJson('data/papers-master.json', master);
  writeJson('data/changes.json', changes);

  return {
    changed: true,
    current_version: currentVersion,
    release_version: releaseVersion,
    accepted_records: accepted.length,
    accepted_conflicts: accepted.reduce((total, record) => total + record.conflict_count, 0),
    accepted_by_status: Object.fromEntries(
      [...ACCEPTABLE_STATUSES].map((status) => [status, accepted.filter((record) => record.status === status).length])
    ),
    skipped,
    graphical_abstracts_unchanged: true
  };
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const options = parseArgs(process.argv.slice(2));
  const summary = acceptAllPublisherEnrichment();
  fs.writeFileSync(options.summary, stableJson(summary));
  process.stdout.write(stableJson(summary));
}
