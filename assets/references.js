(() => {
  'use strict';

  const DATA_URL = '../data/references.json';
  const METADATA_URL = '../data/references-metadata.json';
  const STORAGE_SELECTION = 'pinn-atlas-reading-list';
  const STORAGE_RECENT = 'pinn-atlas-recent-reference-searches';
  const DEFAULTS = { query: '', sort: 'id-asc', access: 'all', venue: 'all', yearFrom: 'all', yearTo: 'all', page: 1, perPage: 50 };
  const state = { ...DEFAULTS, rows: [], selected: new Set(), recent: [] };

  const elements = {
    results: document.querySelector('[data-reference-results]'),
    search: document.querySelector('[data-reference-search]'),
    clearSearch: document.querySelector('[data-clear-search]'),
    sort: document.querySelector('[data-reference-sort]'),
    access: document.querySelector('[data-reference-access]'),
    venue: document.querySelector('[data-reference-venue]'),
    yearFrom: document.querySelector('[data-reference-year-from]'),
    yearTo: document.querySelector('[data-reference-year-to]'),
    perPage: document.querySelector('[data-reference-per-page]'),
    meta: document.querySelector('[data-reference-meta]'),
    pagination: document.querySelector('[data-reference-pagination]'),
    chips: document.querySelector('[data-active-filters]'),
    suggestions: document.querySelector('[data-reference-suggestions]'),
    recent: document.querySelector('[data-recent-searches]'),
    selectionBar: document.querySelector('[data-selection-bar]'),
    toast: document.querySelector('[data-reference-toast]')
  };

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const normalizeText = (value) => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const safeUrl = (value) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === 'https:' ? parsed.href : '';
    } catch (_) {
      return '';
    }
  };

  const normalizeWithMap = (value) => {
    let text = '';
    const map = [];
    let spaced = true;
    for (let index = 0; index < value.length; index += 1) {
      const expanded = value[index].normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en');
      for (const char of expanded) {
        if (/^[\p{L}\p{N}]$/u.test(char)) {
          text += char;
          map.push(index);
          spaced = false;
        } else if (!spaced) {
          text += ' ';
          map.push(index);
          spaced = true;
        }
      }
    }
    return { text: text.trimEnd(), map };
  };

  const extractAuthorsText = (row) => {
    const citation = String(row.citation || '');
    const clean = (value) => {
      const candidate = String(value || '').replace(/[.,;:\s]+$/g, '').trim();
      return /\p{L}/u.test(candidate) ? candidate : '';
    };
    const yearStyle = citation.match(/^(.+?),\s*(?:18|19|20)\d{2}[a-z]?\.\s+/i);
    if (yearStyle) return clean(yearStyle[1]);
    const titleWords = normalizeText(row.title).split(' ').filter(Boolean);
    const mapped = normalizeWithMap(citation);
    let normalizedIndex = -1;
    for (let size = titleWords.length; size >= Math.min(2, titleWords.length); size -= 1) {
      const candidate = titleWords.slice(0, size).join(' ');
      normalizedIndex = mapped.text.indexOf(candidate);
      if (normalizedIndex >= 0) break;
    }
    if (normalizedIndex >= 0 && mapped.map[normalizedIndex] != null) {
      return clean(citation.slice(0, mapped.map[normalizedIndex]));
    }
    return '';
  };

  const authorsArray = (row) => {
    const text = row._authors || extractAuthorsText(row);
    if (!text) return [];
    if (text.includes(';')) return text.split(';').map((name) => name.trim()).filter((name) => name && !/^et al\.?$/i.test(name));
    const parts = text.split(',').map((part) => part.trim()).filter(Boolean);
    if (parts.length > 1 && parts.every((part) => /^[A-Z](?:[.\-][A-Z])*\.?\s+[\p{L}'’\-]+/u.test(part))) return parts;
    const pairs = [];
    if (parts.length >= 2 && parts.length % 2 === 0 && parts.filter((_, index) => index % 2 === 1).every((part) => /^[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þ.\-\s]*$/i.test(part))) {
      for (let index = 0; index < parts.length; index += 2) pairs.push(`${parts[index]}, ${parts[index + 1]}`);
      return pairs.filter((name) => !/^et al\.?$/i.test(name));
    }
    return parts.filter((name) => !/^et al\.?$/i.test(name));
  };

  const prepareRow = (row) => {
    row._authors = extractAuthorsText(row);
    row._authorList = authorsArray(row);
    row._search = normalizeText(`${row.id} ${row.title} ${row.citation} ${row.doi || ''} ${row.venue || ''} ${row.year || ''} ${row.access || ''} ${row._authors}`);
    row._words = [...new Set(row._search.split(' ').filter(Boolean))];
    return row;
  };

  const editDistance = (a, b) => {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
    for (let i = 1; i <= a.length; i += 1) {
      let diagonal = previous[0];
      previous[0] = i;
      for (let j = 1; j <= b.length; j += 1) {
        const saved = previous[j];
        previous[j] = Math.min(previous[j] + 1, previous[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
        diagonal = saved;
      }
    }
    return previous[b.length];
  };

  const parseQuery = (query) => {
    const parsed = { terms: [], phrases: [], fields: [] };
    const tokens = String(query || '').match(/(?:[^\s"]+:"[^"]*"|"[^"]*"|\S+)/g) || [];
    tokens.forEach((token) => {
      const colon = token.indexOf(':');
      if (colon > 0) {
        const field = token.slice(0, colon).toLowerCase();
        const value = token.slice(colon + 1).replace(/^"|"$/g, '');
        if (['year', 'access', 'venue', 'author'].includes(field) && value) parsed.fields.push({ field, value: normalizeText(value), raw: value });
        else parsed.terms.push(normalizeText(token));
      } else if (token.startsWith('"') && token.endsWith('"')) {
        parsed.phrases.push(normalizeText(token.slice(1, -1)));
      } else {
        parsed.terms.push(normalizeText(token));
      }
    });
    parsed.terms = parsed.terms.filter(Boolean);
    parsed.phrases = parsed.phrases.filter(Boolean);
    return parsed;
  };

  const fuzzyMatch = (row, term) => {
    if (!term) return true;
    if (row._search.includes(term)) return true;
    if (term.length < 4) return false;
    const threshold = term.length >= 8 ? 2 : 1;
    return row._words.some((word) => word[0] === term[0] && Math.abs(word.length - term.length) <= threshold && editDistance(word, term) <= threshold);
  };

  const matchesSearch = (row, query) => {
    const trimmed = query.trim().replace(/^\[|\]$/g, '');
    if (!trimmed) return true;
    if (/^\d+$/.test(trimmed)) return String(row.id) === trimmed;
    const parsed = parseQuery(trimmed);
    if (!parsed.phrases.every((phrase) => row._search.includes(phrase))) return false;
    if (!parsed.terms.every((term) => fuzzyMatch(row, term))) return false;
    return parsed.fields.every(({ field, value, raw }) => {
      if (field === 'author') return normalizeText(row._authors).includes(value);
      if (field === 'venue') return normalizeText(row.venue).includes(value);
      if (field === 'access') {
        const normalizedAccess = normalizeText(row.access);
        const aliases = value === 'open' ? 'open access' : value === 'sub' ? 'subscription' : value === 'unverified' ? 'not verified' : value;
        return normalizedAccess.includes(aliases);
      }
      if (field === 'year') {
        const range = raw.match(/^((?:18|19|20)\d{2})(?:\.\.|-|–)((?:18|19|20)\d{2})$/);
        if (range) return Number(row.year) >= Number(range[1]) && Number(row.year) <= Number(range[2]);
        return String(row.year || '') === raw;
      }
      return true;
    });
  };

  const filteredRows = () => state.rows.filter((row) => {
    if (state.access !== 'all' && row.access !== state.access) return false;
    if (state.venue !== 'all' && row.venue !== state.venue) return false;
    if (state.yearFrom !== 'all' && (!row.year || row.year < Number(state.yearFrom))) return false;
    if (state.yearTo !== 'all' && (!row.year || row.year > Number(state.yearTo))) return false;
    return matchesSearch(row, state.query);
  }).sort((a, b) => {
    if (state.sort === 'id-desc') return b.id - a.id;
    if (state.sort === 'year-desc') return (b.year || 0) - (a.year || 0) || a.id - b.id;
    if (state.sort === 'year-asc') return (a.year || 9999) - (b.year || 9999) || a.id - b.id;
    if (state.sort === 'access') return (a.access || '').localeCompare(b.access || '') || a.id - b.id;
    if (state.sort === 'venue') return (a.venue || '').localeCompare(b.venue || '') || a.id - b.id;
    return a.id - b.id;
  });

  const highlightTerms = () => {
    const parsed = parseQuery(state.query);
    return [...parsed.phrases, ...parsed.terms].filter((term) => term.length > 1 && !term.includes(':')).slice(0, 8);
  };

  const highlight = (value, terms) => {
    if (!terms.length) return escapeHtml(value);
    const expression = new RegExp(`(${terms.map(escapeRegex).join('|')})`, 'gi');
    return String(value ?? '').split(expression).map((part, index) => index % 2 ? `<mark>${escapeHtml(part)}</mark>` : escapeHtml(part)).join('');
  };

  const readStorage = () => {
    try {
      const selected = JSON.parse(localStorage.getItem(STORAGE_SELECTION) || '[]');
      if (Array.isArray(selected)) state.selected = new Set(selected.map(Number).filter(Number.isFinite));
      const recent = JSON.parse(localStorage.getItem(STORAGE_RECENT) || '[]');
      if (Array.isArray(recent)) state.recent = recent.filter((item) => typeof item === 'string').slice(0, 6);
    } catch (_) {
      state.selected = new Set();
      state.recent = [];
    }
  };

  const saveSelection = () => {
    try { localStorage.setItem(STORAGE_SELECTION, JSON.stringify([...state.selected])); } catch (_) { /* Selection still works for this visit. */ }
  };

  const saveRecent = () => {
    const value = state.query.trim();
    if (!value) return;
    state.recent = [value, ...state.recent.filter((item) => item !== value)].slice(0, 6);
    try { localStorage.setItem(STORAGE_RECENT, JSON.stringify(state.recent)); } catch (_) { /* Suggestions are optional. */ }
    renderRecent();
  };

  const readUrl = () => {
    const params = new URLSearchParams(location.search);
    state.query = params.get('q') || DEFAULTS.query;
    state.sort = params.get('sort') || DEFAULTS.sort;
    state.access = params.get('access') || DEFAULTS.access;
    state.venue = params.get('venue') || DEFAULTS.venue;
    state.yearFrom = params.get('yearFrom') || DEFAULTS.yearFrom;
    state.yearTo = params.get('yearTo') || DEFAULTS.yearTo;
    state.page = Math.max(1, Number.parseInt(params.get('page') || DEFAULTS.page, 10) || 1);
    state.perPage = [25, 50, 100].includes(Number(params.get('perPage'))) ? Number(params.get('perPage')) : DEFAULTS.perPage;
  };

  const buildUrl = ({ includeHash = false } = {}) => {
    const params = new URLSearchParams();
    if (state.query) params.set('q', state.query);
    if (state.yearFrom !== 'all') params.set('yearFrom', state.yearFrom);
    if (state.yearTo !== 'all') params.set('yearTo', state.yearTo);
    if (state.access !== 'all') params.set('access', state.access);
    if (state.venue !== 'all') params.set('venue', state.venue);
    if (state.sort !== DEFAULTS.sort) params.set('sort', state.sort);
    if (state.page !== 1) params.set('page', String(state.page));
    if (state.perPage !== DEFAULTS.perPage) params.set('perPage', String(state.perPage));
    const query = params.toString();
    const hash = includeHash && /^#ref=\d+$/.test(location.hash) ? location.hash : '';
    return `${location.pathname}${query ? `?${query}` : ''}${hash}`;
  };

  const writeUrl = (mode = 'replace') => {
    const method = mode === 'push' ? 'pushState' : 'replaceState';
    history[method]({ atlasReferences: true }, '', buildUrl());
  };

  const syncControls = () => {
    elements.search.value = state.query;
    elements.clearSearch.hidden = !state.query;
    elements.sort.value = [...elements.sort.options].some((option) => option.value === state.sort) ? state.sort : DEFAULTS.sort;
    elements.access.value = [...elements.access.options].some((option) => option.value === state.access) ? state.access : 'all';
    elements.venue.value = [...elements.venue.options].some((option) => option.value === state.venue) ? state.venue : 'all';
    elements.yearFrom.value = [...elements.yearFrom.options].some((option) => option.value === state.yearFrom) ? state.yearFrom : 'all';
    elements.yearTo.value = [...elements.yearTo.options].some((option) => option.value === state.yearTo) ? state.yearTo : 'all';
    elements.perPage.value = String(state.perPage);
    state.sort = elements.sort.value;
    state.access = elements.access.value;
    state.venue = elements.venue.value;
    state.yearFrom = elements.yearFrom.value;
    state.yearTo = elements.yearTo.value;
  };

  let toastTimer;
  const showToast = (message) => {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimer = setTimeout(() => { elements.toast.hidden = true; }, 2600);
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const field = document.createElement('textarea');
    field.value = text;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  };

  const downloadText = (text, filename, type = 'text/plain;charset=utf-8') => {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const citationType = (row) => /conference|proceedings|symposium|workshop|meeting/i.test(row.venue || '') ? 'CONF' : 'JOUR';
  const citationKey = (row) => {
    const first = row._authorList[0] || `ref${row.id}`;
    const surname = first.includes(',') ? first.split(',')[0] : first.trim().split(/\s+/).pop();
    return `${String(surname || 'ref').replace(/[^\p{L}\p{N}]/gu, '')}${row.year || 'nd'}_${row.id}`;
  };
  const bibValue = (value) => String(value ?? '').replace(/([{}])/g, '\\$1');

  const toBibTeX = (row) => {
    const type = citationType(row) === 'CONF' ? 'inproceedings' : 'article';
    const fields = [
      ['title', row.title],
      ['author', row._authorList.join(' and ') || row._authors],
      [type === 'inproceedings' ? 'booktitle' : 'journal', row.venue],
      ['year', row.year],
      ['doi', row.doi],
      ['url', safeUrl(row.publisher_url)]
    ].filter(([, value]) => value !== null && value !== undefined && String(value).trim());
    return `@${type}{${citationKey(row)},\n${fields.map(([key, value]) => `  ${key} = {${bibValue(value)}}`).join(',\n')}\n}`;
  };

  const toRis = (row) => [
    `TY  - ${citationType(row)}`,
    ...row._authorList.map((author) => `AU  - ${author}`),
    `TI  - ${row.title}`,
    `T2  - ${row.venue || ''}`,
    row.year ? `PY  - ${row.year}` : '',
    row.doi ? `DO  - ${row.doi}` : '',
    safeUrl(row.publisher_url) ? `UR  - ${safeUrl(row.publisher_url)}` : '',
    `N1  - PINN Review Atlas reference [${row.id}]`,
    'ER  - '
  ].filter(Boolean).join('\r\n');

  const toEndNote = (row) => [
    `%0 ${citationType(row) === 'CONF' ? 'Conference Proceedings' : 'Journal Article'}`,
    ...row._authorList.map((author) => `%A ${author}`),
    `%T ${row.title}`,
    `%J ${row.venue || ''}`,
    row.year ? `%D ${row.year}` : '',
    row.doi ? `%R ${row.doi}` : '',
    safeUrl(row.publisher_url) ? `%U ${safeUrl(row.publisher_url)}` : '',
    `%Z PINN Review Atlas reference [${row.id}]`
  ].filter(Boolean).join('\r\n');

  const toCsv = (rows) => {
    const data = [['Reference', 'Title', 'Authors', 'MDPI citation', 'Journal / conference', 'Year', 'Accessibility', 'DOI', 'Publisher URL'], ...rows.map((row) => [row.id, row.title, row._authors, row.citation, row.venue, row.year || '', row.access, row.doi || '', safeUrl(row.publisher_url)])];
    return `\ufeff${data.map((line) => line.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n')}`;
  };

  const exportRows = async (rows, format) => {
    if (!rows.length) return;
    const suffix = rows.length === 1 ? `ref-${rows[0].id}` : `${rows.length}-references`;
    if (format === 'bibtex') downloadText(rows.map(toBibTeX).join('\n\n'), `pinn-review-${suffix}.bib`, 'application/x-bibtex;charset=utf-8');
    if (format === 'ris') downloadText(`${rows.map(toRis).join('\r\n\r\n')}\r\n`, `pinn-review-${suffix}.ris`, 'application/x-research-info-systems;charset=utf-8');
    if (format === 'endnote') downloadText(`${rows.map(toEndNote).join('\r\n\r\n')}\r\n`, `pinn-review-${suffix}.enw`);
    if (format === 'zotero') downloadText(`${rows.map(toRis).join('\r\n\r\n')}\r\n`, `pinn-review-${suffix}-zotero.ris`, 'application/x-research-info-systems;charset=utf-8');
    if (format === 'csv') downloadText(toCsv(rows), `pinn-review-${suffix}.csv`, 'text/csv;charset=utf-8');
    if (format === 'copy') {
      await copyText(rows.map((row) => `[${row.id}] ${row.citation}`).join('\n\n'));
      showToast(`${rows.length} citation${rows.length === 1 ? '' : 's'} copied`);
    }
  };

  const selectedRows = () => state.rows.filter((row) => state.selected.has(row.id)).sort((a, b) => a.id - b.id);

  const renderSelection = () => {
    const count = state.selected.size;
    document.querySelectorAll('[data-selected-count], [data-floating-selected-count]').forEach((node) => { node.textContent = `${count.toLocaleString()} selected`; });
    document.querySelectorAll('[data-bulk-action]').forEach((button) => { button.disabled = count === 0; });
    elements.selectionBar.hidden = count === 0;
  };

  const renderChips = () => {
    const chips = [];
    if (state.query) chips.push({ key: 'query', label: `Search: ${state.query}` });
    if (state.yearFrom !== 'all' || state.yearTo !== 'all') chips.push({ key: 'year', label: `${state.yearFrom === 'all' ? 'Any' : state.yearFrom}–${state.yearTo === 'all' ? 'Any' : state.yearTo}` });
    if (state.access !== 'all') chips.push({ key: 'access', label: state.access });
    if (state.venue !== 'all') chips.push({ key: 'venue', label: state.venue });
    elements.chips.innerHTML = chips.length ? `${chips.map((chip) => `<button type="button" data-clear-filter="${chip.key}" title="Remove ${escapeHtml(chip.label)}">${escapeHtml(chip.label)} <span aria-hidden="true">×</span></button>`).join('')}<button class="clear-all-chip" type="button" data-clear-filter="all">Clear all</button>` : '';
    elements.chips.hidden = chips.length === 0;
  };

  const paginationItems = (current, total) => {
    const wanted = new Set([1, total, current - 1, current, current + 1].filter((page) => page >= 1 && page <= total));
    const pages = [...wanted].sort((a, b) => a - b);
    const output = [];
    pages.forEach((page, index) => {
      if (index && page - pages[index - 1] > 1) output.push('…');
      output.push(page);
    });
    return output;
  };

  const renderPagination = (totalRows) => {
    const pages = Math.max(1, Math.ceil(totalRows / state.perPage));
    state.page = Math.min(Math.max(1, state.page), pages);
    if (pages <= 1) {
      elements.pagination.innerHTML = '';
      elements.pagination.hidden = true;
      return;
    }
    elements.pagination.hidden = false;
    elements.pagination.innerHTML = `<button type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}>Previous</button>${paginationItems(state.page, pages).map((item) => item === '…' ? '<span aria-hidden="true">…</span>' : `<button type="button" data-page="${item}" ${item === state.page ? 'aria-current="page"' : ''}>${item}</button>`).join('')}<button type="button" data-page="${state.page + 1}" ${state.page === pages ? 'disabled' : ''}>Next</button>`;
  };

  const cardHtml = (row, terms) => {
    const destination = safeUrl(row.publisher_url);
    const paperId = destination ? `<a class="paper-id" href="${escapeHtml(destination)}" target="_blank" rel="noopener" title="Open DOI or publisher record for paper ${row.id}">[${row.id}]</a>` : `<a class="paper-id unavailable" href="?q=${row.id}#ref=${row.id}" title="Publisher link not yet verified">[${row.id}]</a>`;
    const publisher = destination ? `<a class="record-link publisher-link" href="${escapeHtml(destination)}" target="_blank" rel="noopener">${row.doi ? 'DOI' : 'Publisher page'} ↗</a>` : '<span class="record-link unavailable">Link not verified</span>';
    const permalink = `${location.pathname}?q=${row.id}#ref=${row.id}`;
    const accessClass = escapeHtml((row.access || 'not-verified').toLowerCase().replace(/\s+/g, '-'));
    return `<article class="bibliography-card" id="ref-${row.id}" data-bibliography-id="${row.id}">
      <div class="reference-select"><label><input type="checkbox" data-select-reference="${row.id}" ${state.selected.has(row.id) ? 'checked' : ''}><span class="skip-link">Select reference ${row.id}</span></label>${paperId}</div>
      <div class="reference-content"><p class="citation-title">${highlight(row.title, terms)}</p><div class="reference-marks"><button class="record-status venue-mark" type="button" data-filter-venue="${escapeHtml(row.venue || '')}">${escapeHtml(row.venue || 'Venue not identified')}</button><button class="record-status access-${accessClass}" type="button" data-filter-access="${escapeHtml(row.access || 'Not verified')}">${escapeHtml(row.access || 'Not verified')}</button><button class="record-status year-mark" type="button" data-filter-year="${escapeHtml(row.year || '')}">${escapeHtml(row.year || 'Year not identified')}</button></div><p class="citation-text mdpi-reference">${highlight(row.citation, terms)}</p>
        <div class="record-actions"><button type="button" data-record-action="copy-citation" data-id="${row.id}">Copy citation</button>${row.doi ? `<button type="button" data-record-action="copy-doi" data-id="${row.id}">Copy DOI</button>` : ''}<button type="button" data-record-action="bibtex" data-id="${row.id}">BibTeX</button><button type="button" data-record-action="ris" data-id="${row.id}">RIS</button><button type="button" data-record-action="endnote" data-id="${row.id}">EndNote</button><button type="button" data-record-action="zotero" data-id="${row.id}">Zotero</button><a class="record-link" href="${escapeHtml(permalink)}">Permalink</a>${publisher}</div>
        <details class="reference-details"><summary>View details</summary><dl><div><dt>Authors</dt><dd>${escapeHtml(row._authors || 'Not identified')}</dd></div><div><dt>Journal / conference</dt><dd>${escapeHtml(row.venue || 'Not identified')}</dd></div><div><dt>Year</dt><dd>${escapeHtml(row.year || 'Not identified')}</dd></div><div><dt>Access</dt><dd>${escapeHtml(row.access || 'Not verified')}</dd></div>${row.doi ? `<div><dt>DOI</dt><dd><a href="https://doi.org/${escapeHtml(row.doi)}" target="_blank" rel="noopener">${escapeHtml(row.doi)} ↗</a></dd></div>` : ''}<div class="full-citation"><dt>Full MDPI-formatted citation</dt><dd>${escapeHtml(row.citation)}</dd></div></dl></details>
      </div>
    </article>`;
  };

  const renderEmpty = () => {
    const label = state.query ? ` for “${escapeHtml(state.query)}”` : '';
    return `<div class="empty-results enhanced-empty"><strong>No references found${label}.</strong><p>Try checking the spelling, removing a venue or access filter, or expanding the publication-year range.</p><button class="button primary" type="button" data-clear-all>Clear all filters</button></div>`;
  };

  const render = ({ keepFocus = false } = {}) => {
    const rows = filteredRows();
    const totalPages = Math.max(1, Math.ceil(rows.length / state.perPage));
    state.page = Math.min(state.page, totalPages);
    const start = (state.page - 1) * state.perPage;
    const pageRows = rows.slice(start, start + state.perPage);
    elements.results.className = 'bibliography-list';
    elements.results.innerHTML = pageRows.length ? pageRows.map((row) => cardHtml(row, highlightTerms())).join('') : renderEmpty();
    const range = rows.length ? `${start + 1}–${Math.min(start + state.perPage, rows.length)} of ` : '';
    elements.meta.textContent = `${range}${rows.length.toLocaleString()} matching references · ${state.rows.length.toLocaleString()} total`;
    renderPagination(rows.length);
    renderChips();
    renderSelection();
    syncControls();
    if (!keepFocus) document.querySelector('.bibliography-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const setFilter = (key, value, { push = true, scroll = true } = {}) => {
    state[key] = value;
    state.page = 1;
    writeUrl(push ? 'push' : 'replace');
    render({ keepFocus: !scroll });
  };

  const clearAll = () => {
    Object.assign(state, { query: '', access: 'all', venue: 'all', yearFrom: 'all', yearTo: 'all', page: 1 });
    writeUrl('push');
    render();
    elements.search.focus();
  };

  const renderRecent = () => {
    elements.recent.hidden = state.recent.length === 0;
    elements.recent.innerHTML = state.recent.length ? `<span>Recent searches</span>${state.recent.map((query) => `<button type="button" data-recent-query="${escapeHtml(query)}">${escapeHtml(query)}</button>`).join('')}<button type="button" data-clear-recent>Clear history</button>` : '';
  };

  const renderInsights = () => {
    const chart = (target, items, type) => {
      const max = Math.max(...items.map((item) => item.count), 1);
      document.querySelector(target).innerHTML = items.map((item) => `<button type="button" class="mini-bar" data-insight-type="${type}" data-insight-value="${escapeHtml(item.value)}" title="Filter by ${escapeHtml(item.label)}"><span class="mini-label">${escapeHtml(item.label)}</span><span class="mini-track"><span style="width:${(item.count / max) * 100}%"></span></span><strong>${item.count.toLocaleString()}</strong></button>`).join('');
    };
    const countBy = (values) => [...values.reduce((map, value) => value ? map.set(value, (map.get(value) || 0) + 1) : map, new Map()).entries()].map(([value, count]) => ({ value, label: value, count }));
    const years = countBy(state.rows.map((row) => row.year)).sort((a, b) => Number(b.value) - Number(a.value)).slice(0, 8).sort((a, b) => Number(a.value) - Number(b.value));
    const accesses = countBy(state.rows.map((row) => row.access)).sort((a, b) => b.count - a.count);
    const venues = countBy(state.rows.map((row) => row.venue)).filter((item) => normalizeText(item.value) !== 'venue not identified').sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)).slice(0, 6);
    const authors = countBy(state.rows.flatMap((row) => row._authorList)).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)).slice(0, 6);
    chart('[data-year-insights]', years, 'year');
    chart('[data-access-insights]', accesses, 'access');
    chart('[data-venue-insights]', venues, 'venue');
    chart('[data-author-insights]', authors, 'author');
  };

  const buildOptions = () => {
    [elements.yearFrom, elements.yearTo].forEach((select) => { while (select.options.length > 1) select.remove(1); });
    while (elements.venue.options.length > 1) elements.venue.remove(1);
    const years = [...new Set(state.rows.map((row) => row.year).filter(Number.isFinite))].sort((a, b) => a - b);
    years.forEach((year) => {
      [elements.yearFrom, elements.yearTo].forEach((select) => {
        const option = document.createElement('option');
        option.value = String(year);
        option.textContent = String(year);
        select.append(option);
      });
    });
    const venues = [...new Set(state.rows.map((row) => row.venue).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    venues.forEach((name) => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      elements.venue.append(option);
    });
    elements.suggestions.innerHTML = [...state.recent.map((value) => `<option value="${escapeHtml(value)}"></option>`), ...venues.slice(0, 80).map((value) => `<option value="venue:&quot;${escapeHtml(value)}&quot;"></option>`)].join('');
  };

  const applyHash = () => {
    const match = location.hash.match(/^#ref=(\d+)$/);
    if (!match || !state.rows.length) return;
    state.query = match[1];
    state.page = 1;
    history.replaceState({ atlasReferences: true }, '', `${location.pathname}?q=${match[1]}#ref=${match[1]}`);
    render({ keepFocus: true });
    requestAnimationFrame(() => {
      const target = document.querySelector(`[data-bibliography-id="${match[1]}"]`);
      target?.classList.add('is-focused');
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const copySearchLink = async () => {
    writeUrl('replace');
    await copyText(new URL(buildUrl({ includeHash: true }), location.origin).href);
    showToast('Search link copied');
  };

  const recordById = (id) => state.rows.find((row) => row.id === Number(id));

  document.addEventListener('click', async (event) => {
    const recordAction = event.target.closest('[data-record-action]');
    if (recordAction) {
      const row = recordById(recordAction.dataset.id);
      if (!row) return;
      const action = recordAction.dataset.recordAction;
      if (action === 'copy-citation') { await copyText(row.citation); showToast(`Citation [${row.id}] copied`); }
      else if (action === 'copy-doi') { await copyText(row.doi); showToast(`DOI for [${row.id}] copied`); }
      else await exportRows([row], action);
      return;
    }
    const bulk = event.target.closest('[data-bulk-action]');
    if (bulk) {
      if (bulk.dataset.bulkAction === 'clear') {
        state.selected.clear();
        saveSelection();
        render({ keepFocus: true });
      } else await exportRows(selectedRows(), bulk.dataset.bulkAction);
      return;
    }
    const page = event.target.closest('[data-page]');
    if (page && !page.disabled) {
      state.page = Number(page.dataset.page);
      writeUrl('push');
      render();
      return;
    }
    const chip = event.target.closest('[data-clear-filter]');
    if (chip) {
      const key = chip.dataset.clearFilter;
      if (key === 'all') clearAll();
      else if (key === 'year') { state.yearFrom = 'all'; state.yearTo = 'all'; state.page = 1; writeUrl('push'); render(); }
      else setFilter(key, key === 'query' ? '' : 'all');
      return;
    }
    if (event.target.closest('[data-clear-all]')) { clearAll(); return; }
    if (event.target.closest('[data-retry-references]')) { loadData(); return; }
    if (event.target.closest('[data-copy-search-link]')) { await copySearchLink(); return; }
    if (event.target.closest('[data-export-current]')) { exportRows(filteredRows(), 'csv'); return; }
    const recent = event.target.closest('[data-recent-query]');
    if (recent) { state.query = recent.dataset.recentQuery; state.page = 1; writeUrl('push'); render(); return; }
    if (event.target.closest('[data-clear-recent]')) {
      state.recent = [];
      try { localStorage.removeItem(STORAGE_RECENT); } catch (_) { /* Optional storage. */ }
      renderRecent();
      return;
    }
    const insight = event.target.closest('[data-insight-type]');
    if (insight) {
      const { insightType: type, insightValue: value } = insight.dataset;
      if (type === 'year') { state.yearFrom = value; state.yearTo = value; state.page = 1; writeUrl('push'); render(); }
      if (type === 'access') setFilter('access', value);
      if (type === 'venue') setFilter('venue', value);
      if (type === 'author') setFilter('query', `author:"${value}"`);
      return;
    }
    const venueFilter = event.target.closest('[data-filter-venue]');
    if (venueFilter?.dataset.filterVenue) { setFilter('venue', venueFilter.dataset.filterVenue); return; }
    const accessFilter = event.target.closest('[data-filter-access]');
    if (accessFilter) { setFilter('access', accessFilter.dataset.filterAccess); return; }
    const yearFilter = event.target.closest('[data-filter-year]');
    if (yearFilter?.dataset.filterYear) {
      state.yearFrom = yearFilter.dataset.filterYear;
      state.yearTo = yearFilter.dataset.filterYear;
      state.page = 1;
      writeUrl('push');
      render();
    }
  });

  document.addEventListener('change', (event) => {
    const checkbox = event.target.closest('[data-select-reference]');
    if (checkbox) {
      const id = Number(checkbox.dataset.selectReference);
      if (checkbox.checked) state.selected.add(id); else state.selected.delete(id);
      saveSelection();
      renderSelection();
      return;
    }
    if (event.target === elements.search) { state.query = elements.search.value.trim(); state.page = 1; saveRecent(); writeUrl('push'); render({ keepFocus: true }); return; }
    if (event.target === elements.sort) setFilter('sort', elements.sort.value, { scroll: false });
    if (event.target === elements.access) setFilter('access', elements.access.value, { scroll: false });
    if (event.target === elements.venue) setFilter('venue', elements.venue.value, { scroll: false });
    if (event.target === elements.yearFrom) setFilter('yearFrom', elements.yearFrom.value, { scroll: false });
    if (event.target === elements.yearTo) setFilter('yearTo', elements.yearTo.value, { scroll: false });
    if (event.target === elements.perPage) { state.perPage = Number(elements.perPage.value); state.page = 1; writeUrl('push'); render({ keepFocus: true }); }
  });

  let searchTimer;
  elements.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    state.query = elements.search.value;
    state.page = 1;
    elements.clearSearch.hidden = !state.query;
    searchTimer = setTimeout(() => { writeUrl('replace'); render({ keepFocus: true }); }, 120);
  });
  elements.search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { clearTimeout(searchTimer); state.query = elements.search.value.trim(); state.page = 1; saveRecent(); writeUrl('push'); render({ keepFocus: true }); }
  });
  elements.clearSearch.addEventListener('click', () => { state.query = ''; state.page = 1; writeUrl('push'); render({ keepFocus: true }); elements.search.focus(); });

  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) {
      event.preventDefault();
      elements.search.focus();
    }
    if (event.key === 'Escape' && document.activeElement === elements.search && elements.search.value) {
      state.query = '';
      state.page = 1;
      writeUrl('push');
      render({ keepFocus: true });
    }
  });

  window.addEventListener('popstate', () => { readUrl(); syncControls(); render({ keepFocus: true }); });
  window.addEventListener('hashchange', applyHash);

  const renderError = (error) => {
    elements.results.className = '';
    elements.results.innerHTML = `<div class="evidence-error enhanced-error"><strong>The bibliography could not load.</strong><p>${escapeHtml(error.message)}</p><div><button class="button primary" type="button" data-retry-references>Retry loading</button><a class="button" href="${DATA_URL}" download>Download the bibliography directly</a><a class="button" href="https://github.com/ahafuaej-alt/PINN-Review/issues/new?template=reference-correction.yml">Report an issue ↗</a></div></div>`;
    elements.meta.textContent = 'Data unavailable';
  };

  const loadData = () => {
    elements.results.innerHTML = '<div class="loading-state"><span><strong>Loading the master bibliography</strong>The 853 reference records will appear here.</span></div>';
    Promise.all([
      fetch(DATA_URL).then((response) => { if (!response.ok) throw new Error(`Reference data returned ${response.status}`); return response.json(); }),
      fetch(METADATA_URL).then((response) => { if (!response.ok) throw new Error(`Reference metadata returned ${response.status}`); return response.json(); })
    ])
      .then(([rows, metadata]) => {
        if (!Array.isArray(rows)) throw new Error('Reference data is not a record array.');
        if (metadata.record_count !== rows.length) throw new Error('Reference data and metadata record counts disagree.');
        state.rows = rows.map(prepareRow);
        state.selected = new Set([...state.selected].filter((id) => state.rows.some((row) => row.id === id)));
        saveSelection();
        buildOptions();
        readUrl();
        syncControls();
        const years = rows.map((row) => row.year).filter(Number.isFinite);
        const stats = {
          total: rows.length,
          open: rows.filter((row) => row.access === 'Open access').length,
          subscription: rows.filter((row) => row.access === 'Subscription').length,
          range: `${Math.min(...years)}–${Math.max(...years)}`,
          dois: rows.filter((row) => row.doi).length,
          unverified: rows.filter((row) => row.access === 'Not verified').length
        };
        Object.entries(stats).forEach(([key, value]) => document.querySelectorAll(`[data-ref-stat="${key}"]`).forEach((node) => { node.textContent = typeof value === 'number' ? value.toLocaleString() : value; }));
        document.querySelectorAll('[data-dataset-version]').forEach((node) => { node.textContent = metadata.version; });
        document.querySelectorAll('[data-dataset-records]').forEach((node) => { node.textContent = metadata.record_count.toLocaleString(); });
        const updated = new Date(`${metadata.last_updated}T00:00:00Z`);
        const updatedLabel = Number.isNaN(updated.valueOf()) ? metadata.last_updated : new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(updated);
        document.querySelectorAll('[data-dataset-updated]').forEach((node) => { node.textContent = updatedLabel; });
        renderInsights();
        renderRecent();
        render({ keepFocus: true });
        applyHash();
      })
      .catch(renderError);
  };

  readStorage();
  readUrl();
  renderRecent();
  loadData();
})();
