const FIELDS = [
  'authors',
  'editors',
  'journal_abbreviation',
  'volume',
  'issue',
  'pages',
  'article_number',
  'edition',
  'book_title',
  'chapter',
  'publisher',
  'city',
  'country',
  'conference_name',
  'conference_location',
  'conference_country',
  'conference_date',
  'abstract_number',
  'paper_number',
  'thesis_level',
  'institution',
  'access_date',
  'publication_date',
  'patent_number',
  'standard_number',
  'software_version',
  'software_description',
  'report_number'
];

export const BIBLIOGRAPHIC_FIELDS = Object.freeze([...FIELDS]);

const text = (value) => String(value ?? '').trim();
const stripTerminal = (value) => text(value).replace(/[\s,;:.]+$/u, '');
const sentence = (value) => {
  const clean = stripTerminal(value);
  return clean ? `${clean}.` : '';
};
const semicolonPart = (value) => {
  const clean = stripTerminal(value);
  return clean ? `${clean};` : '';
};
const commaList = (...values) => values.map(stripTerminal).filter(Boolean).join(', ');
const join = (...values) => values.map(text).filter(Boolean).join(' ').replace(/\s+([,.;:])/gu, '$1').replace(/\s{2,}/gu, ' ').trim();
const pagesLabel = (value) => {
  const clean = stripTerminal(value);
  if (!clean) return '';
  if (/^(?:p|pp)\.\s/iu.test(clean)) return clean;
  return `${/[–—-]|,/.test(clean) ? 'pp.' : 'p.'} ${clean}`;
};
const doiSentence = (doi) => {
  const clean = text(doi).replace(/^https?:\/\/(?:dx\.)?doi\.org\//iu, '').replace(/^doi:\s*/iu, '');
  return clean ? `https://doi.org/${stripTerminal(clean)}.` : '';
};

export const emptyBibliographic = () => Object.fromEntries(FIELDS.map((field) => [field, '']));

export const normalizeBibliographic = (value = {}) => Object.fromEntries(
  FIELDS.map((field) => [field, text(value?.[field])]).filter(([, fieldValue]) => fieldValue)
);

const normalizedWithMap = (value) => {
  let normalized = '';
  const map = [];
  let previousWasSpace = true;
  [...String(value ?? '')].forEach((sourceCharacter, sourceIndex) => {
    const characters = sourceCharacter.normalize('NFKD').replace(/[\u0300-\u036f]/gu, '').toLocaleLowerCase('en');
    [...characters].forEach((character) => {
      if (/[a-z0-9]/u.test(character)) {
        normalized += character;
        map.push(sourceIndex);
        previousWasSpace = false;
      } else if (!previousWasSpace) {
        normalized += ' ';
        map.push(sourceIndex);
        previousWasSpace = true;
      }
    });
  });
  if (normalized.endsWith(' ')) {
    normalized = normalized.slice(0, -1);
    map.pop();
  }
  return { normalized, map };
};

const titleStart = (citation, title) => {
  const source = normalizedWithMap(citation);
  const target = normalizedWithMap(title).normalized;
  const probes = [target, target.split(' ').slice(0, 10).join(' '), target.split(' ').slice(0, 6).join(' ')].filter(Boolean);
  for (const probe of probes) {
    const offset = source.normalized.indexOf(probe);
    if (offset > 0) return source.map[offset];
  }
  return -1;
};

const parseJournalTail = (citation, year) => {
  if (!Number.isInteger(year)) return {};
  const yearMatch = [...String(citation).matchAll(new RegExp(`\\b${year}\\b`, 'gu'))].at(-1);
  if (!yearMatch) return {};
  const tail = String(citation)
    .slice(yearMatch.index + String(year).length)
    .replace(/https?:\/\/doi\.org\/\S+/giu, '')
    .trim()
    .replace(/^[\s,;:.]+/u, '')
    .replace(/[\s.]+$/u, '');
  if (!tail) return {};
  const parts = tail.split(/\s*,\s*/u).filter(Boolean);
  if (!parts.length) return {};
  const volumeMatch = parts[0].match(/^([^()\s]+)(?:\(([^)]+)\))?$/u);
  const result = {};
  if (volumeMatch) {
    result.volume = volumeMatch[1];
    if (volumeMatch[2]) result.issue = volumeMatch[2];
    if (parts[1]) {
      if (/^[A-Za-z]?\d+(?:[–—-]\d+)?$/u.test(parts[1])) result.pages = parts[1];
      else result.article_number = parts[1];
    }
  }
  return result;
};

export const extractLegacyBibliographic = (paper = {}) => {
  if (paper.bibliographic && Object.keys(paper.bibliographic).length) return normalizeBibliographic(paper.bibliographic);
  const citation = text(paper.citation);
  const title = text(paper.title);
  const start = titleStart(citation, title);
  const authors = start > 0 ? stripTerminal(citation.slice(0, start)) : '';
  const type = paper.venue?.type;
  const journalTail = ['journal', 'preprint', 'conference_journal'].includes(type) ? parseJournalTail(citation, paper.year) : {};
  return normalizeBibliographic({
    authors,
    journal_abbreviation: text(paper.venue?.name),
    ...journalTail
  });
};

const formattedDate = (bibliographic, year) => text(bibliographic.publication_date) || (Number.isInteger(year) ? String(year) : '');
const authorsAndTitle = (paper, bibliographic) => join(sentence(bibliographic.authors), sentence(paper.title));
const publisherPlace = (bibliographic) => commaList(bibliographic.city, bibliographic.country);
const publisherStatement = (bibliographic) => {
  const publisher = stripTerminal(bibliographic.publisher);
  const place = publisherPlace(bibliographic);
  if (!publisher && !place) return '';
  return `${publisher || '[Publisher]'}${place ? `: ${place}` : ''}`;
};
const editorsStatement = (editors) => {
  const clean = stripTerminal(editors);
  if (!clean) return '';
  const editorCount = clean.match(/,\s*[A-Z](?:[.\-]?[A-Z])*(?:\.)?(?=\s*,|\s*$)/gu)?.length || 1;
  return `${clean}, ${editorCount > 1 ? 'Eds.' : 'Ed.'};`;
};

export const formatMdpiCitation = (paper = {}) => {
  const bibliographic = { ...emptyBibliographic(), ...normalizeBibliographic(paper.bibliographic) };
  const type = paper.venue?.type || 'unknown';
  const year = Number.isInteger(paper.year) ? String(paper.year) : '';
  const venue = stripTerminal(bibliographic.journal_abbreviation || paper.venue?.name);
  const volume = stripTerminal(bibliographic.volume);
  const pagesOrArticle = stripTerminal(bibliographic.pages || bibliographic.article_number);
  const doi = doiSentence(paper.doi);
  const base = authorsAndTitle(paper, bibliographic);
  let citation = '';

  if (['journal', 'conference_journal', 'preprint'].includes(type)) {
    const publication = commaList(join(venue, year), volume, pagesOrArticle);
    citation = join(base, sentence(publication), doi);
  } else if (type === 'book') {
    const titleWithEdition = join(sentence(bibliographic.authors), `${stripTerminal(paper.title)}${bibliographic.edition ? `, ${stripTerminal(bibliographic.edition)}` : ''};`);
    const tail = [publisherStatement(bibliographic), year].filter(Boolean).join(', ');
    const additions = [bibliographic.chapter ? `Chapter ${stripTerminal(bibliographic.chapter)}` : '', pagesLabel(bibliographic.pages)].filter(Boolean).join(', ');
    citation = join(titleWithEdition, tail ? semicolonPart(tail) : '', additions ? sentence(additions) : '', doi);
  } else if (type === 'chapter' || type === 'conference_book') {
    const container = stripTerminal(bibliographic.book_title || paper.venue?.name);
    const inBook = container ? `In ${container}${bibliographic.edition ? `, ${stripTerminal(bibliographic.edition)}` : ''};` : '';
    const publisherAndYear = [publisherStatement(bibliographic), year].filter(Boolean).join(', ');
    const additions = [bibliographic.volume ? `Volume ${stripTerminal(bibliographic.volume)}` : '', pagesLabel(bibliographic.pages)].filter(Boolean).join(', ');
    citation = join(base, inBook, editorsStatement(bibliographic.editors), publisherAndYear ? semicolonPart(publisherAndYear) : '', additions ? sentence(additions) : '', doi);
  } else if (type === 'conference') {
    const event = stripTerminal(bibliographic.conference_name || paper.venue?.name);
    const eventDetails = commaList(event ? `In Proceedings of ${event}` : '', bibliographic.conference_location, bibliographic.conference_country, bibliographic.conference_date);
    const additions = [bibliographic.abstract_number ? `Abstract ${stripTerminal(bibliographic.abstract_number)}` : '', pagesLabel(bibliographic.pages)].filter(Boolean).join(', ');
    citation = join(base, eventDetails ? semicolonPart(eventDetails) : '', additions ? sentence(additions) : '', doi);
  } else if (type === 'presentation') {
    const event = stripTerminal(bibliographic.conference_name || paper.venue?.name);
    const eventDetails = commaList(event ? `Presented at the ${event}` : '', bibliographic.conference_location, bibliographic.conference_country, bibliographic.conference_date);
    citation = join(base, eventDetails ? semicolonPart(eventDetails) : '', bibliographic.paper_number ? sentence(`Paper ${bibliographic.paper_number}`) : '', doi);
  } else if (type === 'website') {
    const available = paper.publisher_url ? `Available online: ${stripTerminal(paper.publisher_url)}` : '';
    const accessed = bibliographic.access_date ? `(accessed on ${stripTerminal(bibliographic.access_date)}).` : (available ? '.' : '');
    citation = join(base, year ? sentence(year) : '', available, accessed);
  } else if (type === 'thesis') {
    const thesis = commaList(bibliographic.thesis_level, bibliographic.institution, bibliographic.city, bibliographic.country, formattedDate(bibliographic, paper.year));
    citation = join(base, thesis ? sentence(thesis) : '', doi);
  } else if (type === 'patent') {
    citation = join(base, sentence(commaList(bibliographic.patent_number, formattedDate(bibliographic, paper.year))), doi);
  } else if (type === 'standard') {
    const standardTitle = join(bibliographic.standard_number ? `${stripTerminal(bibliographic.standard_number)};` : '', sentence(paper.title));
    const publisherAndYear = [publisherStatement(bibliographic), year].filter(Boolean).join(', ');
    citation = join(standardTitle, publisherAndYear ? sentence(publisherAndYear) : '', doi);
  } else if (type === 'software') {
    const softwareTitle = `${stripTerminal(paper.title)}${bibliographic.software_version ? `, ${stripTerminal(bibliographic.software_version)}` : ''};`;
    const publisherAndYear = [publisherStatement(bibliographic), year].filter(Boolean).join(', ');
    citation = join(bibliographic.authors ? sentence(bibliographic.authors) : '', softwareTitle, bibliographic.software_description ? semicolonPart(bibliographic.software_description) : '', publisherAndYear ? sentence(publisherAndYear) : '');
  } else if (type === 'magazine') {
    citation = join(base, commaList(venue, formattedDate(bibliographic, paper.year), pagesLabel(bibliographic.pages)) ? sentence(commaList(venue, formattedDate(bibliographic, paper.year), pagesLabel(bibliographic.pages))) : '', doi);
  } else if (type === 'report') {
    const reportHead = join(sentence(bibliographic.authors), `${stripTerminal(paper.title)};`);
    const reportNumber = bibliographic.report_number ? semicolonPart(bibliographic.report_number) : '';
    const publisherAndDate = [publisherStatement(bibliographic), formattedDate(bibliographic, paper.year)].filter(Boolean).join(', ');
    citation = join(reportHead, reportNumber, publisherAndDate ? semicolonPart(publisherAndDate) : '', bibliographic.pages ? sentence(pagesLabel(bibliographic.pages)) : '', doi);
  } else {
    const publication = commaList(join(venue, year), volume, pagesOrArticle);
    citation = join(base, publication ? sentence(publication) : '', doi || (paper.publisher_url ? sentence(paper.publisher_url) : ''));
  }

  return citation.replace(/\s{2,}/gu, ' ').trim();
};
