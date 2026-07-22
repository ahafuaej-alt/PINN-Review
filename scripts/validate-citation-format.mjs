import process from 'node:process';
import { extractLegacyBibliographic, formatMdpiCitation } from '../assets/citation-format.mjs';
import { readJson } from './lib/dataset-core.mjs';

const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const fixture = (type, bibliographic, overrides = {}) => ({
  title: 'A Test Reference',
  year: 2025,
  doi: '10.1234/test.2025',
  publisher_url: 'https://example.org/test',
  venue: { name: 'Journal of Tests', type },
  bibliographic,
  ...overrides
});

const journal = formatMdpiCitation(fixture('journal', {
  authors: 'Curie, M.; Noether, E.',
  journal_abbreviation: 'J. Tests',
  volume: '12',
  issue: '4',
  pages: '44–51'
}));
check(journal === 'Curie, M.; Noether, E. A Test Reference. J. Tests 2025, 12, 44–51. https://doi.org/10.1234/test.2025.', 'journal citation does not follow the expected MDPI order');
check(!journal.includes('(4)'), 'journal issue must not appear in an MDPI-formatted citation');

const book = formatMdpiCitation(fixture('book', {
  authors: 'Curie, M.', edition: '2nd ed.', publisher: 'Test Press', city: 'New York, NY', country: 'USA', pages: '10–25'
}, { doi: null }));
check(book.includes('Test Press: New York, NY, USA, 2025;'), 'book citation is missing publisher location or year');
check(book.includes('pp. 10–25.'), 'book citation is missing page notation');

const chapter = formatMdpiCitation(fixture('chapter', {
  authors: 'Noether, E.', book_title: 'Collected Tests', editors: 'Curie, M., Turing, A.', publisher: 'Test Press', city: 'London', country: 'UK', pages: '1–9'
}, { doi: null }));
check(chapter.includes('In Collected Tests;'), 'chapter citation is missing its book title');
check(chapter.includes('Eds.;'), 'chapter citation is missing its editor designation');

const conference = formatMdpiCitation(fixture('conference', {
  authors: 'Turing, A.', conference_name: 'International Test Conference', conference_location: 'Leeds', conference_country: 'UK', conference_date: '1–4 September 2025', pages: '12–18'
}, { doi: null }));
check(conference.includes('In Proceedings of International Test Conference, Leeds, UK, 1–4 September 2025;'), 'conference citation is missing meeting place or date');

const website = formatMdpiCitation(fixture('website', {
  authors: 'Atlas Team', access_date: '22 July 2026'
}, { doi: null }));
check(website.includes('Available online: https://example.org/test (accessed on 22 July 2026).'), 'website citation is missing URL or access date');

const thesis = formatMdpiCitation(fixture('thesis', {
  authors: 'Curie, M.', thesis_level: 'Ph.D. Thesis', institution: 'Test University', city: 'Paris', country: 'France', publication_date: 'July 2025'
}, { doi: null }));
check(thesis.includes('Ph.D. Thesis, Test University, Paris, France, July 2025.'), 'thesis citation is missing degree, institution, location, or date');

const standard = formatMdpiCitation(fixture('standard', {
  standard_number: 'TS 100-2025', publisher: 'Test Standards', city: 'Geneva', country: 'Switzerland'
}, { doi: null }));
check(standard.startsWith('TS 100-2025; A Test Reference.'), 'standard citation is missing its standard number');

const software = formatMdpiCitation(fixture('software', {
  software_version: 'version 5.1', software_description: 'Scientific software', publisher: 'Test Labs', city: 'Boston, MA', country: 'USA'
}, { doi: null }));
check(software.includes('A Test Reference, version 5.1; Scientific software; Test Labs: Boston, MA, USA, 2025.'), 'software citation is missing version, description, publisher, or place');

const master = readJson('data/papers-master.json');
const extractedAuthorCount = master.papers.filter((paper) => extractLegacyBibliographic(paper).authors).length;
check(extractedAuthorCount >= 800, `legacy author extraction coverage is unexpectedly low: ${extractedAuthorCount}/853`);

for (const paper of master.papers.filter((record) => record.provenance?.citation_mode === 'automatic')) {
  check(paper.citation === formatMdpiCitation(paper), `paper ${paper.id} has a stale automatic citation`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  mdpi_reference_types_tested: ['journal', 'book', 'chapter', 'conference', 'website', 'thesis', 'standard', 'software'],
  journal_issue_omitted: true,
  legacy_author_extraction: { matched: extractedAuthorCount, records: master.papers.length }
}, null, 2));
