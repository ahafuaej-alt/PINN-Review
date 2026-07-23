import assert from 'node:assert/strict';
import {
  candidateFromCrossref,
  candidateFromArxiv,
  candidateFromHtml,
  extractArxivId,
  formatPeople,
  mergeCandidate,
  titleSimilarity
} from './enrich-publisher-metadata.mjs';
import { reconcilePublisherReview, reviewResolutionSummary } from '../assets/publisher-review-state.mjs';

assert.equal(formatPeople([
  { given: 'David A.', family: 'Johnson' },
  { given: 'Yue', family: 'Jin' }
]), 'Johnson, D.A.; Jin, Y.');
assert.equal(extractArxivId('https://doi.org/10.48550/arXiv.2607.18634'), '2607.18634');
assert.equal(extractArxivId('arXiv:2402.01868v2'), '2402.01868');

const arxiv = candidateFromArxiv({
  id: '2607.18634',
  title: 'A Game-Theory Paper',
  summary: 'An abstract that must not be imported automatically.',
  published: '2026-07-24T00:00:00Z',
  authors: ['First Author', 'Second Author'],
  primary_category: 'cs.GT',
  categories: ['cs.GT', 'cs.AI'],
  journal_ref: '',
  doi: ''
});
assert.equal(arxiv.venue.name, 'arXiv [Computer Science > Computer Science and Game Theory]');
assert.equal(arxiv.venue.type, 'preprint');
assert.equal(arxiv.abstract, '');
assert.equal(arxiv.abstract_available_but_restricted, true);
const arxivPublished = {
  ...arxiv,
  journal_version: {
    source: 'Crossref title match',
    confidence: 0.98,
    doi: '10.1234/journal-version',
    venue: { name: 'Journal Version', type: 'journal' },
    year: 2026
  }
};

const crossref = candidateFromCrossref({
  DOI: '10.1234/example.1',
  title: ['A Physics-Informed Test Article'],
  type: 'journal-article',
  author: [
    { given: 'Ada', family: 'Lovelace' },
    { given: 'Alan M.', family: 'Turing' }
  ],
  'container-title': ['Journal of Reliable Metadata'],
  'short-container-title': ['J. Reliab. Metadata'],
  volume: '12',
  issue: '3',
  page: '101-119',
  publisher: 'Example Publisher',
  'published-online': { 'date-parts': [[2025, 4, 7]] },
  license: [{ URL: 'https://creativecommons.org/licenses/by/4.0/' }],
  abstract: '<jats:p>A concise licensed abstract.</jats:p>',
  resource: { primary: { URL: 'https://publisher.example/article/1' } }
});
assert.equal(crossref.venue.type, 'journal');
assert.equal(crossref.bibliographic.authors, 'Lovelace, A.; Turing, A.M.');
assert.equal(crossref.bibliographic.pages, '101-119');
assert.equal(crossref.bibliographic.publication_date, '2025-04-07');
assert.equal(crossref.abstract, 'A concise licensed abstract.');
assert.equal(crossref.publisher_url, 'https://publisher.example/article/1');
assert.equal(candidateFromCrossref({
  DOI: '10.1234/unsafe',
  title: ['Unsafe redirect target'],
  type: 'journal-article',
  resource: { primary: { URL: 'http://192.0.2.1:8000/article' } }
}).publisher_url, null);

const html = candidateFromHtml(`
  <meta name="citation_title" content="A Publisher HTML Test">
  <meta name="citation_author" content="Grace Hopper">
  <meta name="citation_journal_title" content="Publisher Journal">
  <meta name="citation_volume" content="9">
  <meta name="citation_firstpage" content="20">
  <meta name="citation_lastpage" content="29">
  <meta name="citation_doi" content="10.1234/html.2">
  <meta name="citation_publication_date" content="2024/06/01">
`, 'https://publisher.example/html-2');
assert.equal(html.title, 'A Publisher HTML Test');
assert.equal(html.year, 2024);
assert.equal(html.bibliographic.pages, '20–29');
assert.equal(html.doi, '10.1234/html.2');

const paper = {
  id: 1,
  title: 'A Physics-Informed Test Article',
  citation: 'Legacy citation.',
  doi: '10.1234/example.1',
  publisher_url: 'https://doi.org/10.1234/example.1',
  venue: { name: 'Journal of Reliable Metadata', type: 'journal' },
  year: 2025,
  access: 'Not verified',
  countries: ['United States'],
  provenance: {},
  last_updated: '2026-01-01'
};
const merged = mergeCandidate(paper, crossref, '2026-07-23');
assert.equal(merged.status, 'enriched');
assert.equal(merged.paper.bibliographic.volume, '12');
assert.equal(merged.paper.publisher_url, 'https://publisher.example/article/1');
assert.equal(merged.paper.access, 'Open access');
assert.equal(merged.paper.abstract, 'A concise licensed abstract.');
assert(merged.conflicts.some((item) => item.field === 'citation'));
assert.equal(merged.paper.citation, 'Legacy citation.');

const yearConflict = mergeCandidate({ ...paper, year: 2024 }, crossref, '2026-07-23');
assert(yearConflict.conflicts.some((item) => item.field === 'year' && item.current === 2024 && item.proposed === 2025));
assert.equal(yearConflict.paper.year, 2024);

const titleMismatch = mergeCandidate({ ...paper, title: 'Completely Different Subject' }, crossref, '2026-07-23');
assert.equal(titleMismatch.status, 'title-mismatch');
assert.equal(titleMismatch.added.length, 0);
assert(titleSimilarity('PINNs: A Review', 'PINNs — A Review') > 0.99);

const preprintPaper = {
  ...paper,
  title: 'A Game-Theory Paper',
  doi: null,
  publisher_url: null,
  venue: { name: 'arXiv', type: 'preprint' }
};
const publishedReview = mergeCandidate(preprintPaper, arxivPublished, '2026-07-23');
assert.equal(publishedReview.status, 'review');
assert.equal(publishedReview.paper.doi, null);
assert(publishedReview.conflicts.some((item) => item.field === 'published_version'));

const reconciliationFixture = {
  schema_version: '1.0.0',
  dataset_version_after: '2.1.0',
  summary: { eligible: 2 },
  records: [
    { id: 297, status: 'failed', conflicts: [], warnings: ['Publisher page 403'] },
    { id: 313, status: 'review', conflicts: [{ field: 'published_version' }], warnings: [] }
  ]
};
const reconciled = reconcilePublisherReview(reconciliationFixture, [
  {
    change_id: 'paper-313-test-2.1.1',
    version: '2.1.1',
    date: '2026-07-23',
    paper_id: 313,
    changed_fields: ['doi', 'venue', 'year'],
    reason: 'Approved the published version',
    evidence: { url: 'https://doi.org/10.1234/published' }
  },
  {
    change_id: 'paper-99-before-enrichment',
    version: '2.0.1',
    date: '2026-07-22',
    paper_id: 297,
    changed_fields: ['venue'],
    reason: 'Predates the review report',
    evidence: { url: 'https://example.org/old' }
  }
], '2.1.1');
assert.equal(reconciled.records.find((record) => record.id === 313).resolution.status, 'resolved');
assert.equal(reconciled.records.find((record) => record.id === 297).resolution, undefined);
assert.deepEqual(reviewResolutionSummary(reconciled), { open_records: 1, resolved_records: 1 });
assert.equal(reconciled.summary.open_records, 1);
assert.equal(reconciled.summary.resolved_records, 1);

console.log('Publisher enrichment tests passed.');
