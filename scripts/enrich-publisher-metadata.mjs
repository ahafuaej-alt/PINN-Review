import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { formatMdpiCitation, normalizeBibliographic } from '../assets/citation-format.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const USER_AGENT = 'PINN-Review-Atlas-Metadata-Enricher/1.0 (https://github.com/ahafuaej-alt/PINN-Review)';
const DEFAULT_REPORT = 'data/publisher-enrichment-review.json';
const REUSABLE_LICENSE = /creativecommons\.org\/(?:licenses\/(?:by|by-sa|by-nc|by-nc-sa)\/|publicdomain\/)|creativecommons\.org\/publicdomain\/zero\//iu;
const DOI_HOSTS = new Set(['doi.org', 'dx.doi.org']);
const REFERENCE_TYPE_MAP = Object.freeze({
  'journal-article': 'journal',
  'proceedings-article': 'conference',
  proceedings: 'conference_book',
  'book-chapter': 'chapter',
  book: 'book',
  'edited-book': 'book',
  monograph: 'book',
  'posted-content': 'preprint',
  dissertation: 'thesis',
  report: 'report',
  standard: 'standard',
  'reference-entry': 'chapter',
  'journal-issue': 'journal',
  'journal-volume': 'journal',
  dataset: 'other',
  component: 'other',
  other: 'other'
});

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const cleanText = (value) => String(value ?? '')
  .replace(/<[^>]*>/gu, ' ')
  .replace(/&nbsp;/giu, ' ')
  .replace(/&amp;/giu, '&')
  .replace(/&lt;/giu, '<')
  .replace(/&gt;/giu, '>')
  .replace(/&quot;/giu, '"')
  .replace(/&#39;|&apos;/giu, "'")
  .replace(/&#x([0-9a-f]+);/giu, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&#(\d+);/gu, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/\s+/gu, ' ')
  .trim();
const first = (value) => Array.isArray(value) ? cleanText(value[0]) : cleanText(value);
const lower = (value) => cleanText(value).toLocaleLowerCase('en');
const compactDoi = (value) => cleanText(value)
  .replace(/^https?:\/\/(?:dx\.)?doi\.org\//iu, '')
  .replace(/^doi:\s*/iu, '')
  .replace(/\s+/gu, '');
const validDoi = (value) => {
  const doi = compactDoi(value);
  return /^10\.\d{4,9}\/\S+$/iu.test(doi) ? doi : '';
};
const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
const writeJson = (relativePath, value) => {
  const target = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, stableJson(value));
};
const isDoiUrl = (value) => {
  try { return DOI_HOSTS.has(new URL(value).hostname.toLocaleLowerCase('en')); }
  catch { return false; }
};
const safePublisherUrl = (value) => {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || DOI_HOSTS.has(url.hostname.toLocaleLowerCase('en'))) return null;
    if (url.href.length > 600 || /(?:^|[?&])(token|session|auth|ticket|code)=/iu.test(url.search)) return null;
    return url.href;
  } catch {
    return null;
  }
};
const dateParts = (value) => {
  const parts = value?.['date-parts']?.[0];
  if (!Array.isArray(parts) || !Number.isInteger(parts[0])) return { year: null, date: null };
  const [year, month, day] = parts;
  const date = [String(year), month ? String(month).padStart(2, '0') : null, day ? String(day).padStart(2, '0') : null]
    .filter(Boolean)
    .join('-');
  return { year, date };
};
const bestDate = (metadata) => {
  for (const key of ['published-print', 'published-online', 'published', 'issued', 'posted', 'created']) {
    const parsed = dateParts(metadata?.[key]);
    if (parsed.year) return { ...parsed, source: key };
  }
  return { year: null, date: null, source: null };
};
const initialForPart = (part) => {
  const letters = [...part.replace(/[^\p{L}]/gu, '')];
  return letters.length ? `${letters[0].toLocaleUpperCase()}.` : '';
};
const formattedInitials = (given) => cleanText(given)
  .split(/\s+/u)
  .filter(Boolean)
  .map((word) => word.split('-').map(initialForPart).filter(Boolean).join('-'))
  .filter(Boolean)
  .join('');
const formatPerson = (person = {}) => {
  const family = cleanText([person['non-dropping-particle'], person.family].filter(Boolean).join(' '));
  const given = formattedInitials(person.given);
  const suffix = cleanText(person.suffix);
  if (!family) return cleanText(person.name || person.literal);
  return [family, given, suffix].filter(Boolean).join(', ');
};
export const formatPeople = (people) => (Array.isArray(people) ? people : [])
  .map(formatPerson)
  .filter(Boolean)
  .join('; ');
const normalizedTitle = (value) => lower(value)
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/gu, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim();
const titleTokens = (value) => new Set(normalizedTitle(value).split(/\s+/u).filter((token) => token.length > 2));
export const titleSimilarity = (left, right) => {
  const a = normalizedTitle(left);
  const b = normalizedTitle(right);
  if (!a || !b) return 0;
  if (a === b || a.includes(b) || b.includes(a)) return 1;
  const at = titleTokens(a);
  const bt = titleTokens(b);
  const intersection = [...at].filter((token) => bt.has(token)).length;
  const union = new Set([...at, ...bt]).size;
  return union ? intersection / union : 0;
};
const normalizeComparable = (value) => lower(value)
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/gu, '')
  .replace(/[^\p{L}\p{N}]+/gu, '');
const similarValue = (left, right) => {
  const a = normalizeComparable(left);
  const b = normalizeComparable(right);
  return Boolean(a && b && (a === b || a.includes(b) || b.includes(a)));
};
const journalInitials = (value) => cleanText(value)
  .split(/\s+/u)
  .filter((word) => !/^(?:of|the|and|for|in|on)$/iu.test(word))
  .map((word) => word[0]?.toLocaleLowerCase('en') || '')
  .join('');
const venueEquivalent = (left, right) => similarValue(left, right)
  || (journalInitials(left).length >= 3 && journalInitials(left) === journalInitials(right));
const licenseUrls = (metadata) => (Array.isArray(metadata?.license) ? metadata.license : [])
  .map((item) => cleanText(item?.URL || item?.url))
  .filter(Boolean);
const allowsAbstractReuse = (metadata) => licenseUrls(metadata).some((url) => REUSABLE_LICENSE.test(url));
const pageFields = (metadata) => {
  const articleNumber = cleanText(metadata?.['article-number']);
  const page = cleanText(metadata?.page);
  if (articleNumber) return { article_number: articleNumber, ...(page ? { pages: page } : {}) };
  if (page) return /[–—-]|,|\bpp?\./u.test(page) ? { pages: page } : { article_number: page };
  return {};
};
const eventDate = (event) => {
  const start = dateParts(event?.start);
  const end = dateParts(event?.end);
  if (!start.date) return '';
  return end.date && end.date !== start.date ? `${start.date}–${end.date}` : start.date;
};
const referenceType = (metadata) => REFERENCE_TYPE_MAP[cleanText(metadata?.type)] || 'other';

export const candidateFromCrossref = (metadata, { sourceUrl } = {}) => {
  const publication = bestDate(metadata);
  const containerTitle = first(metadata?.['container-title']);
  const shortContainer = first(metadata?.['short-container-title']) || containerTitle;
  const event = metadata?.event || {};
  const candidate = {
    source: 'Crossref REST API',
    source_url: sourceUrl || (metadata?.DOI ? `https://api.crossref.org/works/${encodeURIComponent(metadata.DOI)}` : null),
    doi: validDoi(metadata?.DOI),
    title: first(metadata?.title),
    year: publication.year,
    publisher_url: safePublisherUrl(metadata?.resource?.primary?.URL),
    venue: {
      name: containerTitle || first(metadata?.publisher),
      type: referenceType(metadata)
    },
    bibliographic: normalizeBibliographic({
      authors: formatPeople(metadata?.author),
      editors: formatPeople(metadata?.editor),
      journal_abbreviation: shortContainer,
      volume: metadata?.volume,
      issue: metadata?.issue,
      ...pageFields(metadata),
      edition: metadata?.['edition-number'],
      book_title: ['book-chapter', 'reference-entry'].includes(metadata?.type) ? containerTitle : '',
      publisher: metadata?.publisher,
      conference_name: event?.name,
      conference_location: event?.location,
      conference_date: eventDate(event),
      publication_date: publication.date,
      report_number: metadata?.number
    }),
    abstract: allowsAbstractReuse(metadata) ? cleanText(metadata?.abstract) : '',
    abstract_available_but_restricted: Boolean(cleanText(metadata?.abstract)) && !allowsAbstractReuse(metadata),
    access: allowsAbstractReuse(metadata) ? 'Open access' : null,
    license_urls: licenseUrls(metadata),
    deposited_type: cleanText(metadata?.type),
    member: cleanText(metadata?.member),
    indexed_at: cleanText(metadata?.indexed?.['date-time'])
  };
  return candidate;
};

const metaTags = (html) => {
  const fields = {};
  for (const tag of String(html).match(/<meta\b[^>]*>/giu) || []) {
    const attributes = {};
    for (const match of tag.matchAll(/\b([:\w-]+)\s*=\s*(["'])(.*?)\2/giu)) attributes[lower(match[1])] = cleanText(match[3]);
    const key = lower(attributes.name || attributes.property);
    const content = cleanText(attributes.content);
    if (!key || !content) continue;
    if (!fields[key]) fields[key] = [];
    fields[key].push(content);
  }
  return fields;
};
const metaFirst = (fields, ...keys) => {
  for (const key of keys) if (fields[lower(key)]?.[0]) return fields[lower(key)][0];
  return '';
};
const metaAll = (fields, ...keys) => {
  for (const key of keys) if (fields[lower(key)]?.length) return fields[lower(key)];
  return [];
};
const parseYear = (value) => {
  const match = cleanText(value).match(/\b(18|19|20|21)\d{2}\b/u);
  return match ? Number(match[0]) : null;
};
const typeFromMeta = (value) => {
  const type = lower(value);
  if (/journal|article/u.test(type)) return 'journal';
  if (/conference|proceeding/u.test(type)) return 'conference';
  if (/preprint/u.test(type)) return 'preprint';
  if (/chapter/u.test(type)) return 'chapter';
  if (/book/u.test(type)) return 'book';
  if (/thesis|dissertation/u.test(type)) return 'thesis';
  if (/report/u.test(type)) return 'report';
  return 'unknown';
};
export const candidateFromHtml = (html, finalUrl) => {
  const fields = metaTags(html);
  const firstPage = metaFirst(fields, 'citation_firstpage');
  const lastPage = metaFirst(fields, 'citation_lastpage');
  const pages = firstPage && lastPage && firstPage !== lastPage ? `${firstPage}–${lastPage}` : firstPage;
  const publicationDate = metaFirst(fields, 'citation_publication_date', 'citation_date', 'dc.date', 'article:published_time');
  const license = metaAll(fields, 'dc.rights', 'citation_license', 'license');
  const reusable = license.some((value) => REUSABLE_LICENSE.test(value));
  const type = typeFromMeta(metaFirst(fields, 'citation_type', 'dc.type', 'og:type'));
  return {
    source: 'Publisher HTML citation metadata',
    source_url: finalUrl,
    doi: validDoi(metaFirst(fields, 'citation_doi', 'dc.identifier')),
    title: metaFirst(fields, 'citation_title', 'dc.title', 'og:title'),
    year: parseYear(publicationDate),
    publisher_url: safePublisherUrl(finalUrl),
    venue: {
      name: metaFirst(fields, 'citation_journal_title', 'citation_conference_title', 'dc.source'),
      type
    },
    bibliographic: normalizeBibliographic({
      authors: metaAll(fields, 'citation_author', 'dc.creator').join('; '),
      journal_abbreviation: metaFirst(fields, 'citation_journal_abbrev'),
      volume: metaFirst(fields, 'citation_volume'),
      issue: metaFirst(fields, 'citation_issue'),
      pages,
      article_number: metaFirst(fields, 'citation_article_number'),
      publisher: metaFirst(fields, 'citation_publisher', 'dc.publisher'),
      conference_name: metaFirst(fields, 'citation_conference_title'),
      publication_date: publicationDate
    }),
    abstract: reusable ? metaFirst(fields, 'citation_abstract', 'dc.description', 'description') : '',
    abstract_available_but_restricted: Boolean(metaFirst(fields, 'citation_abstract', 'dc.description', 'description')) && !reusable,
    access: reusable ? 'Open access' : null,
    license_urls: license,
    deposited_type: type
  };
};

const fetchWithRetry = async (url, options = {}, attempts = 4) => {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'user-agent': USER_AGENT,
          accept: 'application/json',
          ...(options.headers || {})
        },
        signal: AbortSignal.timeout(30_000)
      });
      if (response.status === 429 || response.status >= 500) {
        const retryAfter = Number(response.headers.get('retry-after')) || attempt * 2;
        await sleep(Math.min(retryAfter * 1000, 20_000));
        continue;
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(attempt * 1000);
    }
  }
  throw lastError || new Error(`Request failed for ${url}`);
};
const readLimitedText = async (response, maximumBytes = 2_000_000) => {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const chunks = [];
  let length = 0;
  while (length < maximumBytes) {
    const { value, done } = await reader.read();
    if (done) break;
    const remaining = maximumBytes - length;
    const chunk = value.length > remaining ? value.slice(0, remaining) : value;
    chunks.push(chunk);
    length += chunk.length;
    if (value.length > remaining) break;
  }
  await reader.cancel().catch(() => {});
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return new TextDecoder().decode(bytes);
};
const resolvePublisherUrl = async (doi) => {
  if (!doi) return null;
  try {
    const response = await fetchWithRetry(`https://doi.org/${doi}`, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { accept: 'text/html,application/xhtml+xml' }
    }, 2);
    return safePublisherUrl(response.url);
  } catch {
    return null;
  }
};
export const lookupPaper = async (paper, { resolveDoi = true } = {}) => {
  if (paper.doi) {
    const doi = compactDoi(paper.doi);
    const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;
    const response = await fetchWithRetry(url);
    if (response.ok) {
      const payload = await response.json();
      const candidate = candidateFromCrossref(payload?.message || {}, { sourceUrl: url });
      if (!candidate.publisher_url && resolveDoi) candidate.publisher_url = await resolvePublisherUrl(doi);
      return candidate;
    }
    if (response.status !== 404) throw new Error(`Crossref ${response.status} for DOI ${doi}`);
    const cslResponse = await fetchWithRetry(`https://doi.org/${doi}`, {
      headers: { accept: 'application/vnd.citationstyles.csl+json' }
    });
    if (cslResponse.ok) {
      const csl = await cslResponse.json();
      const candidate = candidateFromCrossref({
        ...csl,
        DOI: csl.DOI || doi,
        type: csl.type || 'other',
        'container-title': csl['container-title'] ? [csl['container-title']] : [],
        issued: csl.issued
      }, { sourceUrl: `https://doi.org/${doi}` });
      if (resolveDoi) candidate.publisher_url = await resolvePublisherUrl(doi);
      candidate.source = 'DOI content negotiation';
      return candidate;
    }
  }
  if (paper.publisher_url) {
    const response = await fetchWithRetry(paper.publisher_url, {
      redirect: 'follow',
      headers: { accept: 'text/html,application/xhtml+xml' }
    });
    if (!response.ok) throw new Error(`Publisher page ${response.status}`);
    const contentType = lower(response.headers.get('content-type'));
    if (!contentType.includes('html')) throw new Error(`Publisher page returned ${contentType || 'unknown content type'}`);
    return candidateFromHtml(await readLimitedText(response), response.url || paper.publisher_url);
  }
  return null;
};

const conflict = (field, current, proposed, reason = 'Existing value differs from publisher/DOI metadata') => ({
  field,
  current,
  proposed,
  reason
});
const setMissing = (target, key, value, added, conflicts, label = key, equivalent = similarValue) => {
  if (value === null || value === undefined || cleanText(value) === '') return;
  if (target[key] === null || target[key] === undefined || cleanText(target[key]) === '') {
    target[key] = value;
    added.push(label);
  } else if (!equivalent(target[key], value)) {
    conflicts.push(conflict(label, target[key], value));
  }
};
const setBibliographic = (paper, candidate, added, conflicts) => {
  const next = { ...(paper.bibliographic || {}) };
  for (const [field, value] of Object.entries(candidate.bibliographic || {})) {
    setMissing(next, field, value, added, conflicts, `bibliographic.${field}`);
  }
  if (Object.keys(next).length) paper.bibliographic = next;
};
const titleAccepted = (paper, candidate) => titleSimilarity(paper.title, candidate.title) >= 0.62;

export const mergeCandidate = (sourcePaper, candidate, today = new Date().toISOString().slice(0, 10)) => {
  const paper = structuredClone(sourcePaper);
  const added = [];
  const conflicts = [];
  const warnings = [];
  if (!candidate) return { paper, added, conflicts, warnings, status: 'no-metadata' };

  const similarity = titleSimilarity(paper.title, candidate.title);
  if (candidate.title && !titleAccepted(paper, candidate)) {
    conflicts.push(conflict('title', paper.title, candidate.title, `DOI/title similarity ${similarity.toFixed(3)} is below the safety threshold`));
    return { paper, added, conflicts, warnings, status: 'title-mismatch', similarity };
  }
  if (candidate.title && normalizedTitle(paper.title) !== normalizedTitle(candidate.title)) {
    conflicts.push(conflict('title', paper.title, candidate.title, `Publisher title differs; similarity ${similarity.toFixed(3)}`));
  }

  setMissing(paper, 'doi', candidate.doi, added, conflicts, 'doi', (a, b) => lower(compactDoi(a)) === lower(compactDoi(b)));
  if (candidate.publisher_url) {
    if (!paper.publisher_url || isDoiUrl(paper.publisher_url)) {
      if (paper.publisher_url !== candidate.publisher_url) {
        paper.publisher_url = candidate.publisher_url;
        added.push('publisher_url');
      }
    } else if (new URL(paper.publisher_url).hostname !== new URL(candidate.publisher_url).hostname) {
      conflicts.push(conflict('publisher_url', paper.publisher_url, candidate.publisher_url));
    }
  }
  if (candidate.year && paper.year === null) {
    paper.year = candidate.year;
    added.push('year');
  } else if (candidate.year && paper.year !== candidate.year) {
    conflicts.push(conflict('year', paper.year, candidate.year));
  }
  if (candidate.venue?.name) {
    if (!paper.venue?.name || lower(paper.venue.name) === 'venue not identified') {
      paper.venue = { ...(paper.venue || {}), name: candidate.venue.name };
      added.push('venue.name');
    } else if (!venueEquivalent(paper.venue.name, candidate.venue.name)) {
      conflicts.push(conflict('venue.name', paper.venue.name, candidate.venue.name));
    }
  }
  if (candidate.venue?.type && candidate.venue.type !== 'unknown') {
    if (!paper.venue?.type || paper.venue.type === 'unknown') {
      paper.venue = { ...(paper.venue || {}), type: candidate.venue.type };
      added.push('venue.type');
    } else if (paper.venue.type !== candidate.venue.type) {
      conflicts.push(conflict('venue.type', paper.venue.type, candidate.venue.type));
    }
  }

  setBibliographic(paper, candidate, added, conflicts);
  if (candidate.abstract) {
    if (!paper.abstract) {
      paper.abstract = candidate.abstract;
      added.push('abstract');
    } else if (normalizedTitle(paper.abstract) !== normalizedTitle(candidate.abstract)) {
      conflicts.push(conflict('abstract', paper.abstract, candidate.abstract, 'A reusable publisher abstract differs from the stored abstract'));
    }
  } else if (candidate.abstract_available_but_restricted) {
    warnings.push('Abstract is available in deposited metadata but was not copied because its reuse license was not established.');
  }
  if (candidate.access === 'Open access') {
    if (paper.access === 'Not verified') {
      paper.access = 'Open access';
      added.push('access');
    } else if (paper.access === 'Subscription') {
      conflicts.push(conflict('access', paper.access, candidate.access, 'Deposited metadata contains an explicit reusable Creative Commons license'));
    }
  }

  const suggestedCitation = formatMdpiCitation(paper);
  if (suggestedCitation && paper.citation !== suggestedCitation) {
    conflicts.push(conflict('citation', paper.citation, suggestedCitation, 'Structured metadata produces a different automatic MDPI citation; review before replacing'));
  }
  if (added.length) {
    paper.last_updated = today;
    paper.provenance = {
      ...(paper.provenance || {}),
      publisher_enrichment: {
        source: candidate.source,
        source_url: candidate.source_url,
        retrieved_at: today,
        fields_added: [...new Set(added)],
        deposited_type: candidate.deposited_type || null,
        license_urls: candidate.license_urls || []
      }
    };
  }
  return {
    paper,
    added: [...new Set(added)],
    conflicts,
    warnings,
    status: added.length ? 'enriched' : (conflicts.length ? 'review' : 'unchanged'),
    similarity,
    suggested_citation: suggestedCitation
  };
};

const parseArgs = (argv) => {
  const options = {
    apply: argv.includes('--apply'),
    resolveDoi: !argv.includes('--no-resolve-doi'),
    limit: null,
    ids: null,
    delayMs: 100,
    report: DEFAULT_REPORT
  };
  for (const arg of argv) {
    if (arg.startsWith('--limit=')) options.limit = Number(arg.slice(8));
    if (arg.startsWith('--ids=')) options.ids = new Set(arg.slice(6).split(',').map(Number).filter(Number.isInteger));
    if (arg.startsWith('--delay-ms=')) options.delayMs = Number(arg.slice(11));
    if (arg.startsWith('--report=')) options.report = arg.slice(9);
  }
  return options;
};
const nextMinorVersion = (version) => {
  const match = cleanText(version).match(/^(\d+)\.(\d+)\.(\d+)$/u);
  if (!match) throw new Error(`Invalid dataset version ${version}`);
  return `${match[1]}.${Number(match[2]) + 1}.0`;
};
const makeSummary = (records) => {
  const fieldCounts = {};
  for (const record of records) {
    for (const field of record.fields_added || []) fieldCounts[field] = (fieldCounts[field] || 0) + 1;
  }
  return {
    eligible: records.length,
    enriched: records.filter((record) => record.status === 'enriched').length,
    unchanged: records.filter((record) => record.status === 'unchanged').length,
    review: records.filter((record) => ['review', 'title-mismatch'].includes(record.status)).length,
    failed: records.filter((record) => record.status === 'failed').length,
    with_conflicts: records.filter((record) => record.conflicts?.length).length,
    restricted_abstracts: records.filter((record) => record.warnings?.some((warning) => warning.startsWith('Abstract is available'))).length,
    fields_added: Object.fromEntries(Object.entries(fieldCounts).sort(([left], [right]) => left.localeCompare(right)))
  };
};

export const run = async (options) => {
  const master = readJson('data/papers-master.json');
  const beforeVersion = master.metadata.dataset_version;
  const today = new Date().toISOString().slice(0, 10);
  let eligible = master.papers.filter((paper) => paper.doi || paper.publisher_url);
  if (options.ids) eligible = eligible.filter((paper) => options.ids.has(paper.id));
  if (Number.isInteger(options.limit) && options.limit >= 0) eligible = eligible.slice(0, options.limit);
  const byId = new Map(master.papers.map((paper) => [paper.id, paper]));
  const records = [];

  for (let index = 0; index < eligible.length; index += 1) {
    const paper = eligible[index];
    process.stdout.write(`[${index + 1}/${eligible.length}] ${paper.id} ${paper.doi || paper.publisher_url}\n`);
    try {
      const candidate = await lookupPaper(paper, { resolveDoi: options.resolveDoi });
      const merged = mergeCandidate(paper, candidate, today);
      byId.set(paper.id, merged.paper);
      records.push({
        id: paper.id,
        title: paper.title,
        doi: paper.doi,
        source: candidate?.source || null,
        evidence_url: candidate?.source_url || paper.publisher_url,
        status: merged.status,
        similarity: merged.similarity ?? null,
        fields_added: merged.added,
        conflicts: merged.conflicts,
        warnings: merged.warnings
      });
    } catch (error) {
      records.push({
        id: paper.id,
        title: paper.title,
        doi: paper.doi,
        source: null,
        evidence_url: paper.publisher_url,
        status: 'failed',
        fields_added: [],
        conflicts: [],
        warnings: [error.message]
      });
    }
    if (options.delayMs > 0 && index < eligible.length - 1) await sleep(options.delayMs);
  }

  const summary = makeSummary(records);
  const report = {
    schema_version: '1.0.0',
    generated_at: new Date().toISOString(),
    mode: options.apply ? 'applied' : 'dry-run',
    policy: {
      apply_missing_values_only: true,
      preserve_existing_conflicts: true,
      title_similarity_threshold: 0.62,
      abstracts: 'Copied only when deposited metadata includes an explicit reusable Creative Commons/public-domain license.',
      graphical_abstracts: 'Never imported automatically.',
      citations: 'Suggested automatic MDPI citations are reported as review items and are not silently substituted.'
    },
    source: {
      primary: 'Crossref REST API (publisher-deposited DOI metadata)',
      fallback: 'Publisher HTML citation metadata or DOI content negotiation'
    },
    dataset_version_before: beforeVersion,
    dataset_version_after: options.apply ? nextMinorVersion(beforeVersion) : beforeVersion,
    summary,
    records
  };

  writeJson(options.report, report);
  if (!options.apply) return report;
  if (summary.enriched === 0) throw new Error('No records were enriched; refusing to create an empty dataset release.');
  master.papers = master.papers.map((paper) => byId.get(paper.id));
  master.metadata.dataset_version = nextMinorVersion(beforeVersion);
  master.metadata.last_updated = today;
  master.metadata.maintenance = {
    ...(master.metadata.maintenance || {}),
    publisher_enrichment: {
      date: today,
      eligible_records: summary.eligible,
      enriched_records: summary.enriched,
      conflict_records: summary.with_conflicts,
      failed_records: summary.failed,
      review_report: options.report
    }
  };
  writeJson('data/papers-master.json', master);

  const changes = readJson('data/changes.json');
  changes.changes.unshift({
    change_id: `publisher-enrichment-${today}-${master.metadata.dataset_version}`,
    version: master.metadata.dataset_version,
    date: today,
    paper_id: null,
    changed_fields: Object.keys(summary.fields_added),
    reason: 'Added missing bibliographic and publisher metadata from DOI registration records and publisher citation metadata without overwriting conflicting existing values.',
    evidence: {
      url: 'https://www.crossref.org/documentation/retrieve-metadata/rest-api/',
      note: `Review report: ${options.report}`
    },
    impact: summary
  });
  writeJson('data/changes.json', changes);
  return report;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run(parseArgs(process.argv.slice(2)))
    .then((report) => console.log(JSON.stringify(report.summary, null, 2)))
    .catch((error) => {
      console.error(error.stack || error.message);
      process.exit(1);
    });
}
