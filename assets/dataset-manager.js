import {
  BIBLIOGRAPHIC_FIELDS,
  emptyBibliographic,
  extractLegacyBibliographic,
  formatMdpiCitation,
  normalizeBibliographic
} from './citation-format.mjs?v=full-venue-visible-20260724';

const MASTER_URL = '../data/papers-master.json';
const MAPPING_URL = '../data/country-mapping.json';
const CHANGES_URL = '../data/changes.json';
const GITHUB_ISSUE_URL = 'https://github.com/ahafuaej-alt/PINN-Review/issues/new';
const state = {
  master: null,
  mapping: null,
  changes: null,
  selected: null,
  initialBibliographic: {},
  bibliographicDirty: false,
  autoCitationDirty: false,
  manualCitation: false,
  graphicalCheck: { url: '', status: 'none', message: '' }
};

const form = document.querySelector('[data-manager-form]');
const status = document.querySelector('[data-manager-status]');
const shell = document.querySelector('[data-manager-shell]');
const search = document.querySelector('[data-manager-search]');
const results = document.querySelector('[data-manager-results]');
const empty = document.querySelector('[data-manager-empty]');
const validation = document.querySelector('[data-manager-validation]');
const impactGrid = document.querySelector('[data-impact-grid]');
const impactSummary = document.querySelector('[data-impact-summary]');
const toast = document.querySelector('[data-manager-toast]');
const submitButton = document.querySelector('[data-submit-update]');
const downloadButton = document.querySelector('[data-download-update]');
const copyButton = document.querySelector('[data-copy-update]');
const submissionHelp = document.querySelector('[data-submission-help]');
const typeGuidance = document.querySelector('[data-type-guidance]');
const graphicalFields = document.querySelector('[data-graphical-fields]');
const graphicalPreviewShell = document.querySelector('[data-graphical-preview-shell]');
const graphicalPreview = document.querySelector('[data-graphical-preview]');
const graphicalStatus = document.querySelector('[data-graphical-status]');
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
const normalize = (value) => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en');
const equal = (left, right) => JSON.stringify(left) === JSON.stringify(right);
const effectiveRealmYear = (paper) => paper?.overrides?.realm_year ?? paper?.year;
const field = (name) => form.elements.namedItem(name);
const typeWithoutRequiredAuthors = new Set(['standard', 'software', 'website']);
const GRAPHICAL_SPEC = Object.freeze({ width: 3840, height: 2160, format: 'webp', color_space: 'sRGB' });

let toastTimer;
const showToast = (message) => {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3200);
};

const formatDate = (value) => {
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.valueOf()) ? value : new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
};

const parseCountries = (value) => [...new Set(String(value).split(',').map((country) => country.trim()).filter(Boolean))];
const normalizeDoi = (value) => String(value || '').trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').replace(/^doi:\s*/i, '').replace(/\s+/g, '') || null;
const canonicalUrl = (value) => String(value || '').trim() || null;
const sentenceCount = (value) => {
  const clean = String(value || '').trim();
  if (!clean) return 0;
  return clean.split(/(?<=[.!?])\s+(?=[A-Z0-9])/u).filter(Boolean).length;
};

const bibliographicFromForm = () => normalizeBibliographic(Object.fromEntries(
  BIBLIOGRAPHIC_FIELDS.map((name) => [name, field(`bib_${name}`)?.value || ''])
));

const graphicalFromForm = () => field('graphical_enabled').checked ? {
  image_url: canonicalUrl(field('graphical_image_url').value),
  ...GRAPHICAL_SPEC,
  alt_text: field('graphical_alt_text').value.trim(),
  caption: field('graphical_caption').value.trim()
} : null;

const currentDraft = () => ({
  title: field('title').value.trim(),
  citation: field('citation').value.trim(),
  doi: normalizeDoi(field('doi').value),
  publisher_url: canonicalUrl(field('publisher_url').value),
  venue: { name: field('venue_name').value.trim(), type: field('venue_type').value },
  year: field('year').value === '' ? null : Number(field('year').value),
  access: field('access').value,
  countries: parseCountries(field('countries').value),
  bibliographic: bibliographicFromForm(),
  abstract: field('abstract').value.trim() || null,
  graphical_abstract: graphicalFromForm()
});

const citationRecord = (draft = currentDraft()) => ({
  title: draft.title,
  doi: draft.doi,
  publisher_url: draft.publisher_url,
  venue: draft.venue,
  year: draft.year,
  bibliographic: draft.bibliographic
});

const changedValues = () => {
  if (!state.selected) return {};
  const draft = currentDraft();
  const changes = {};
  ['title', 'doi', 'publisher_url', 'venue', 'year', 'access', 'countries'].forEach((name) => {
    if (!equal(draft[name], state.selected[name])) changes[name] = draft[name];
  });
  ['abstract', 'graphical_abstract'].forEach((name) => {
    if (!equal(draft[name], state.selected[name] || null)) changes[name] = draft[name];
  });
  const shouldStoreBibliographic = state.bibliographicDirty || (state.autoCitationDirty && !state.selected.bibliographic);
  if (shouldStoreBibliographic && !equal(draft.bibliographic, state.selected.bibliographic || {})) changes.bibliographic = draft.bibliographic;
  if (state.manualCitation && !equal(draft.citation, state.selected.citation)) changes.citation = draft.citation;
  return changes;
};

const generatedCitation = () => formatMdpiCitation(citationRecord());

const typeWarnings = (draft) => {
  const warnings = [];
  const bibliography = draft.bibliographic;
  const type = draft.venue.type;
  const missing = (label, ...names) => {
    if (names.every((name) => !bibliography[name])) warnings.push(`${label} is normally required for this ${type.replaceAll('_', ' ')} reference.`);
  };
  if (['journal', 'preprint', 'conference_journal'].includes(type)) {
    // Journal abbreviation is optional metadata; venue_name drives the generated citation.
    missing('Volume', 'volume');
    missing('Pages or article number', 'pages', 'article_number');
    if (bibliography.issue) warnings.push('The issue is stored as metadata but will not appear in the MDPI-formatted journal citation.');
  }
  if (['book', 'chapter', 'conference_book', 'standard', 'software', 'report'].includes(type)) {
    missing('Publisher', 'publisher');
    missing('Publisher city/location', 'city');
    missing('Publisher country', 'country');
  }
  if (['chapter', 'conference_book'].includes(type)) missing('Book or collected-work title', 'book_title');
  if (['conference', 'presentation'].includes(type)) {
    missing('Conference name', 'conference_name');
    missing('Conference location', 'conference_location');
    missing('Conference date', 'conference_date');
  }
  if (type === 'website') missing('Access date', 'access_date');
  if (type === 'thesis') {
    missing('Thesis level', 'thesis_level');
    missing('Degree-granting institution', 'institution');
  }
  if (type === 'patent') missing('Patent number', 'patent_number');
  if (type === 'standard') missing('Standard number', 'standard_number');
  return warnings;
};

const validateDraft = () => {
  if (!state.selected) return { errors: ['Select a paper first.'], warnings: [], changes: {} };
  const draft = currentDraft();
  const changes = changedValues();
  const errors = [];
  const warnings = [];
  if (!draft.title) errors.push('Paper title is required.');
  if (!draft.venue.name) errors.push('Journal, conference, book, or source name is required.');
  if (draft.year !== null && (!Number.isInteger(draft.year) || draft.year < 1800 || draft.year > 2100)) errors.push('Publication year must be between 1800 and 2100.');
  if (draft.doi && !/^10\.\d{4,9}\/.+/i.test(draft.doi)) errors.push('DOI must use the form 10.xxxx/xxxxx.');
  if (draft.publisher_url) {
    try { if (new URL(draft.publisher_url).protocol !== 'https:') errors.push('Publisher URL must use HTTPS.'); }
    catch { errors.push('Publisher URL is not valid.'); }
  }
  if (!draft.countries.length) errors.push('At least one affiliation country is required.');
  const unmapped = draft.countries.filter((country) => !state.mapping[country]);
  if (unmapped.length) errors.push(`Unmapped country name${unmapped.length === 1 ? '' : 's'}: ${unmapped.join(', ')}.`);
  const evidenceUrl = field('evidence_url').value.trim();
  if (!evidenceUrl) errors.push('An authoritative evidence URL is required.');
  else {
    try { if (new URL(evidenceUrl).protocol !== 'https:') errors.push('Evidence URL must use HTTPS.'); }
    catch { errors.push('Evidence URL is not valid.'); }
  }
  if (!field('reason').value.trim()) errors.push('A reason is required for the audit trail.');

  if (draft.graphical_abstract) {
    const graphical = draft.graphical_abstract;
    if (!graphical.image_url) errors.push('A graphical-abstract WebP URL is required.');
    else {
      try {
        const imageUrl = new URL(graphical.image_url);
        if (imageUrl.protocol !== 'https:' || !/\.webp$/iu.test(imageUrl.pathname)) errors.push('The graphical abstract must use an HTTPS URL ending in .webp.');
      } catch { errors.push('The graphical-abstract URL is not valid.'); }
    }
    if (!graphical.alt_text) errors.push('Graphical-abstract alt text is required.');
    else if (sentenceCount(graphical.alt_text) > 2) errors.push('Graphical-abstract alt text must be one or two concise sentences.');
    if (!graphical.caption) errors.push('A one-sentence graphical-abstract caption is required.');
    else if (sentenceCount(graphical.caption) !== 1) errors.push('The graphical-abstract caption must be one sentence.');
    if (state.graphicalCheck.url === graphical.image_url && state.graphicalCheck.status === 'pending') errors.push('The graphical abstract is still being checked.');
    else if (state.graphicalCheck.url !== graphical.image_url || state.graphicalCheck.status !== 'valid') errors.push('The graphical abstract must load successfully at exactly 3840 × 2160 pixels before submission.');
  }

  if (state.manualCitation) {
    if (!draft.citation) errors.push('The manually edited citation cannot be empty.');
    warnings.push('Manual citation mode is active. Confirm punctuation and MDPI field order against the linked guide.');
  } else if (state.autoCitationDirty) {
    if (!typeWithoutRequiredAuthors.has(draft.venue.type) && !draft.bibliographic.authors) errors.push('Authors are required to generate this MDPI citation automatically.');
    const automatic = generatedCitation();
    if (!automatic) errors.push('The automatic citation could not be generated from the supplied fields.');
    warnings.push(...typeWarnings(draft));
  }

  if (!Object.keys(changes).length) warnings.push('No paper fields have changed.');
  if ('year' in changes && state.selected.overrides?.realm_year !== undefined) warnings.push(`Publishing the new year will resolve the legacy Realm override (${state.selected.overrides.realm_year}) and use ${draft.year ?? 'an unknown year'} everywhere.`);
  return { errors, warnings, changes, draft };
};

const countByYear = (papers, yearFor) => papers.reduce((counts, paper) => {
  const year = yearFor(paper);
  if (Number.isInteger(year)) counts[year] = (counts[year] || 0) + 1;
  return counts;
}, {});

const pairCount = (countries) => countries.length < 2 ? 0 : (countries.length * (countries.length - 1)) / 2;

const renderImpact = (result) => {
  const fields = Object.keys(result.changes);
  const visibleFields = [...new Set([...fields, ...(state.autoCitationDirty ? ['citation'] : [])])];
  impactSummary.textContent = visibleFields.length ? `${visibleFields.length} affected field${visibleFields.length === 1 ? '' : 's'} will trigger a complete validated rebuild.` : 'No fields changed.';
  if (!state.selected || !fields.length) {
    impactGrid.innerHTML = '<p class="manager-muted">Edit a field to preview affected records, counts, and views.</p>';
    return;
  }
  const draft = result.draft;
  const cards = [];
  if ('year' in result.changes) {
    const refCounts = countByYear(state.master.papers, (paper) => paper.year);
    const realmCounts = countByYear(state.master.papers, effectiveRealmYear);
    const beforeReferenceYear = state.selected.year;
    const beforeRealmYear = effectiveRealmYear(state.selected);
    const referenceDeltas = [];
    if (Number.isInteger(beforeReferenceYear)) referenceDeltas.push(`${beforeReferenceYear}: ${refCounts[beforeReferenceYear]} → ${refCounts[beforeReferenceYear] - (draft.year === beforeReferenceYear ? 0 : 1)}`);
    if (Number.isInteger(draft.year)) referenceDeltas.push(`${draft.year}: ${refCounts[draft.year] || 0} → ${(refCounts[draft.year] || 0) + (draft.year === beforeReferenceYear ? 0 : 1)}`);
    const realmDeltas = [];
    if (Number.isInteger(beforeRealmYear)) realmDeltas.push(`${beforeRealmYear}: ${realmCounts[beforeRealmYear]} → ${realmCounts[beforeRealmYear] - (draft.year === beforeRealmYear ? 0 : 1)}`);
    if (Number.isInteger(draft.year)) realmDeltas.push(`${draft.year}: ${realmCounts[draft.year] || 0} → ${(realmCounts[draft.year] || 0) + (draft.year === beforeRealmYear ? 0 : 1)}`);
    cards.push({ title: 'Year analytics', body: `References ${referenceDeltas.join(' · ') || 'year becomes unknown'}. Realm ${realmDeltas.join(' · ') || 'year becomes unknown'}.` });
  }
  if ('countries' in result.changes) cards.push({ title: 'Geographic network', body: `${state.selected.countries.length} → ${draft.countries.length} country associations; this paper contributes ${pairCount(state.selected.countries)} → ${pairCount(draft.countries)} collaboration pairs.` });
  if (visibleFields.some((name) => ['abstract', 'graphical_abstract'].includes(name))) cards.push({ title: 'Reference evidence panels', body: 'The nested Abstract and Graphical abstract panels, accessibility text, caption, search data, version, and audit trail will be regenerated together.' });
  if (visibleFields.some((name) => ['title', 'citation', 'bibliographic', 'doi', 'publisher_url', 'venue', 'access'].includes(name))) cards.push({ title: 'Reference system', body: 'The MDPI citation, card metadata, search, filters, analytics, DOI destination, CSV, BibTeX, RIS, EndNote, and Zotero exports will be regenerated.' });
  cards.push({ title: 'Release metadata', body: 'The patch version, last-updated date, audit trail, data-quality counts, and downloadable JSON will be updated together.' });
  impactGrid.innerHTML = cards.map((card) => `<article><strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.body)}</p></article>`).join('');
};

const updatePreview = () => {
  if (!state.selected) return;
  const result = validateDraft();
  const hasChanges = Object.keys(result.changes).length > 0;
  const valid = result.errors.length === 0 && hasChanges;
  submitButton.disabled = !valid;
  downloadButton.disabled = !valid;
  copyButton.disabled = !valid;
  validation.className = `manager-validation ${result.errors.length ? 'has-errors' : 'is-valid'}`;
  validation.innerHTML = [
    ...result.errors.map((message) => `<p><strong>Error:</strong> ${escapeHtml(message)}</p>`),
    ...result.warnings.map((message) => `<p><strong>Check:</strong> ${escapeHtml(message)}</p>`),
    ...(valid ? ['<p><strong>Ready to submit:</strong> Select the green button below, then confirm the prefilled request on GitHub.</p>'] : [])
  ].join('');
  renderImpact(result);
};

const refreshGeneratedCitation = () => {
  if (state.manualCitation || !state.autoCitationDirty) return;
  field('citation').value = generatedCitation();
};

let graphicalTimer;
const setGraphicalStatus = (status, message) => {
  state.graphicalCheck = { url: field('graphical_image_url').value.trim(), status, message };
  graphicalStatus.textContent = message;
  graphicalPreviewShell.dataset.status = status;
  updatePreview();
};

const verifyGraphicalAbstract = ({ immediate = false } = {}) => {
  clearTimeout(graphicalTimer);
  const enabled = field('graphical_enabled').checked;
  graphicalFields.hidden = !enabled;
  graphicalPreviewShell.hidden = !enabled;
  if (!enabled) {
    graphicalPreview.removeAttribute('src');
    graphicalPreview.hidden = true;
    state.graphicalCheck = { url: '', status: 'none', message: '' };
    updatePreview();
    return;
  }
  const url = field('graphical_image_url').value.trim();
  if (!url) {
    graphicalPreview.removeAttribute('src');
    graphicalPreview.hidden = true;
    setGraphicalStatus('none', 'Add a WebP URL to verify the image.');
    return;
  }
  const run = () => {
    setGraphicalStatus('pending', 'Checking WebP format and 3840 × 2160 dimensions…');
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      if (field('graphical_image_url').value.trim() !== url) return;
      graphicalPreview.src = url;
      graphicalPreview.alt = field('graphical_alt_text').value.trim();
      graphicalPreview.hidden = false;
      if (image.naturalWidth === GRAPHICAL_SPEC.width && image.naturalHeight === GRAPHICAL_SPEC.height) setGraphicalStatus('valid', 'Verified: WebP URL loads at 3840 × 2160 pixels. Confirm that the source file uses the sRGB color space.');
      else setGraphicalStatus('invalid', `Image dimensions are ${image.naturalWidth} × ${image.naturalHeight}; exactly 3840 × 2160 is required.`);
    };
    image.onerror = () => {
      if (field('graphical_image_url').value.trim() !== url) return;
      graphicalPreview.removeAttribute('src');
      graphicalPreview.hidden = true;
      setGraphicalStatus('invalid', 'The WebP image could not be loaded from this URL.');
    };
    image.src = url;
  };
  if (immediate) run(); else graphicalTimer = setTimeout(run, 350);
};

const buildPackage = () => {
  const result = validateDraft();
  if (result.errors.length || !Object.keys(result.changes).length) throw new Error('Update package is not ready.');
  return {
    schema_version: '1.2.0',
    id: state.selected.id,
    changes: result.changes,
    options: { citation_mode: state.manualCitation ? 'manual' : 'automatic' },
    reason: field('reason').value.trim(),
    evidence: { url: field('evidence_url').value.trim(), note: field('reason').value.trim() },
    submitted_by: field('submitted_by').value.trim() || null,
    submitted_at: new Date().toISOString()
  };
};

const renderTypeFields = () => {
  const type = field('venue_type').value;
  document.querySelectorAll('[data-bib-types]').forEach((label) => {
    const types = label.dataset.bibTypes.split(/\s+/);
    label.hidden = !types.includes('all') && !types.includes(type);
  });
  const labels = {
    journal: 'Journal fields follow the MDPI journal/periodical format.',
    preprint: 'Preprint fields use journal-style metadata where available.',
    conference_journal: 'Use the full publication name above; the journal abbreviation is optional metadata.',
    conference: 'Proceedings require the meeting name, place, country, and date.',
    presentation: 'Unpublished presentations require the meeting, place, country, and date.',
    conference_book: 'Book-published proceedings require container, editors, publisher, and place.',
    book: 'Books require edition when applicable, publisher, city, and country.',
    chapter: 'Contributions require book title, editors, publisher, city, and country.',
    website: 'Online resources require the URL and access date.',
    thesis: 'Theses require level, institution, location, and date.',
    patent: 'Patents require the patent number and granted date.',
    standard: 'Standards require their number plus publisher and place.',
    software: 'Software may include version, description, publisher, and place.',
    magazine: 'Periodical news items use a full date and optional pagination.',
    report: 'Reports may include report number, publisher, place, date, and pages.'
  };
  typeGuidance.textContent = labels[type] || 'Complete every field supported by the authoritative source.';
};

const populateForm = (paper) => {
  state.selected = paper;
  state.initialBibliographic = extractLegacyBibliographic(paper);
  state.bibliographicDirty = false;
  state.autoCitationDirty = false;
  state.manualCitation = false;
  state.graphicalCheck = { url: '', status: 'none', message: '' };
  empty.hidden = true;
  form.hidden = false;
  field('title').value = paper.title;
  field('citation').value = paper.citation;
  field('citation').readOnly = true;
  field('citation_manual').checked = false;
  field('year').value = paper.year ?? '';
  field('access').value = paper.access;
  field('venue_name').value = paper.venue.name;
  field('venue_type').value = [...field('venue_type').options].some((option) => option.value === paper.venue.type) ? paper.venue.type : 'unknown';
  field('doi').value = paper.doi || '';
  field('publisher_url').value = paper.publisher_url || '';
  field('countries').value = paper.countries.join(', ');
  field('abstract').value = paper.abstract || '';
  field('graphical_enabled').checked = Boolean(paper.graphical_abstract);
  field('graphical_image_url').value = paper.graphical_abstract?.image_url || '';
  field('graphical_alt_text').value = paper.graphical_abstract?.alt_text || '';
  field('graphical_caption').value = paper.graphical_abstract?.caption || '';
  BIBLIOGRAPHIC_FIELDS.forEach((name) => { if (field(`bib_${name}`)) field(`bib_${name}`).value = state.initialBibliographic[name] || ''; });
  // Show the canonical automatic citation immediately instead of waiting for
  // another bibliographic field to be edited. This also marks a legacy stored
  // citation for regeneration when any paper update is submitted.
  const automaticCitation = generatedCitation();
  state.autoCitationDirty = Boolean(automaticCitation && automaticCitation !== paper.citation);
  field('citation').value = state.autoCitationDirty ? automaticCitation : paper.citation;
  field('evidence_url').value = paper.publisher_url || (paper.doi ? `https://doi.org/${paper.doi}` : '');
  field('reason').value = '';
  field('submitted_by').value = '';
  document.querySelector('[data-editor-id]').textContent = `[${paper.id}]`;
  document.querySelector('[data-editor-title]').textContent = paper.title;
  document.querySelector('[data-open-reference]').href = `../references/?q=${paper.id}#ref=${paper.id}`;
  const warning = document.querySelector('[data-legacy-warning]');
  if (paper.overrides?.realm_year !== undefined) {
    warning.hidden = false;
    warning.innerHTML = `<strong>Legacy year conflict</strong><span>References currently use ${paper.year ?? 'an unidentified year'}, while PINN Realm preserves ${paper.overrides.realm_year} from the standardized country/year source. Editing the publication year resolves this override and applies the new value everywhere.</span>`;
  } else warning.hidden = true;
  submissionHelp.classList.remove('is-opened');
  submissionHelp.innerHTML = '<strong>Nothing has been sent yet.</strong><span>After the form is valid, select <b>Submit update request</b>. GitHub will open with the update already filled in; select <b>Create new issue</b> there to send it and receive a trackable confirmation.</span>';
  renderTypeFields();
  verifyGraphicalAbstract({ immediate: Boolean(paper.graphical_abstract) });
  const params = new URLSearchParams(location.search);
  params.set('id', String(paper.id));
  history.replaceState({ paper: paper.id }, '', `${location.pathname}?${params}`);
  renderResults();
  updatePreview();
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const matchingPapers = () => {
  const query = normalize(search.value.trim().replace(/^\[|\]$/g, ''));
  const matches = query
    ? state.master.papers.filter((paper) => [paper.id, paper.title, paper.doi, paper.venue.name, paper.venue.type, paper.countries.join(' ')].some((value) => normalize(value).includes(query))).slice(0, 30)
    : state.master.papers.slice(0, 12);
  if (state.selected && !matches.some((paper) => paper.id === state.selected.id)) matches.unshift(state.selected);
  return matches;
};

const renderResults = () => {
  const matches = matchingPapers();
  results.innerHTML = matches.length ? matches.map((paper) => `<button type="button" role="option" data-manager-paper="${paper.id}" aria-selected="${paper.id === state.selected?.id}"><span>[${paper.id}]</span><strong>${escapeHtml(paper.title)}</strong><small>${escapeHtml(paper.year ?? 'Year not identified')} · ${escapeHtml(paper.venue.type.replaceAll('_', ' '))} · ${escapeHtml(paper.venue.name)}</small></button>`).join('') : '<p class="manager-muted">No matching paper record.</p>';
};

const renderAudit = () => {
  const entries = state.changes.changes.slice(0, 8);
  document.querySelector('[data-audit-list]').innerHTML = entries.map((entry) => `<article><div><strong>${entry.paper_id ? `Paper [${entry.paper_id}]` : 'Dataset migration'}</strong><span>Version ${escapeHtml(entry.version)} · ${escapeHtml(formatDate(entry.date))}</span></div><p>${escapeHtml(entry.reason)}</p><small>${escapeHtml(entry.changed_fields.join(', '))}</small>${entry.evidence?.url ? `<a href="${escapeHtml(entry.evidence.url)}" target="_blank" rel="noopener">Evidence ↗</a>` : ''}</article>`).join('');
};

const handleFormMutation = (event) => {
  const name = event.target.name;
  if (!name) return;
  if (name === 'citation_manual') {
    state.manualCitation = event.target.checked;
    field('citation').readOnly = !state.manualCitation;
    if (!state.manualCitation) {
      state.autoCitationDirty = true;
      state.bibliographicDirty ||= !state.selected.bibliographic;
      refreshGeneratedCitation();
    }
  } else if (name === 'doi') {
    const oldDoiUrl = state.selected?.doi ? `https://doi.org/${state.selected.doi}` : '';
    if (!field('publisher_url').value || field('publisher_url').value === oldDoiUrl) {
      const doi = normalizeDoi(field('doi').value);
      field('publisher_url').value = doi ? `https://doi.org/${doi}` : '';
    }
    state.autoCitationDirty = true;
    state.bibliographicDirty ||= !state.selected.bibliographic;
    refreshGeneratedCitation();
  } else if (name.startsWith('bib_')) {
    state.bibliographicDirty = true;
    state.autoCitationDirty = true;
    refreshGeneratedCitation();
  } else if (['title', 'year', 'venue_name', 'venue_type'].includes(name)) {
    state.autoCitationDirty = true;
    state.bibliographicDirty ||= !state.selected.bibliographic;
    if (name === 'venue_type') renderTypeFields();
    refreshGeneratedCitation();
  } else if (name === 'graphical_enabled') {
    verifyGraphicalAbstract({ immediate: true });
  } else if (name === 'graphical_image_url') {
    verifyGraphicalAbstract();
    return;
  } else if (name === 'graphical_alt_text') {
    graphicalPreview.alt = event.target.value.trim();
  }
  updatePreview();
};

form?.addEventListener('input', handleFormMutation);
form?.addEventListener('change', handleFormMutation);
form?.addEventListener('reset', () => setTimeout(() => populateForm(state.selected), 0));
search?.addEventListener('input', renderResults);
results?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-manager-paper]');
  if (button) populateForm(state.master.papers.find((paper) => paper.id === Number(button.dataset.managerPaper)));
});

const downloadText = (downloadContent, filename) => {
  const url = URL.createObjectURL(new Blob([downloadContent], { type: 'application/json;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const base64Utf8 = (value) => {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += 8192) binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  return btoa(binary);
};

const issueUrl = (update) => {
  const fields = Object.keys(update.changes);
  const title = `[Dataset update] Paper ${update.id}: ${fields.join(', ')}`;
  const preview = state.manualCitation ? field('citation').value.trim() : generatedCitation();
  const payload = base64Utf8(JSON.stringify(update));
  const body = [
    '## PINN Review Atlas dataset update',
    '',
    `- **Paper:** [${update.id}] ${state.selected.title}`,
    `- **Changed fields:** ${fields.join(', ')}`,
    `- **Citation mode:** ${update.options.citation_mode}`,
    `- **Evidence:** ${update.evidence.url}`,
    '',
    '### Reason',
    update.reason,
    '',
    '### MDPI citation preview',
    `> ${preview.replace(/\n+/g, ' ')}`,
    '',
    '### Maintainer workflow',
    'The repository will validate this request automatically. After checking the evidence and validation comment, a maintainer can apply it by commenting `/apply-dataset-update`.',
    '',
    `<!-- PINN_DATASET_UPDATE_V1:${payload} -->`
  ].join('\n');
  const params = new URLSearchParams({ title, body });
  return `${GITHUB_ISSUE_URL}?${params}`;
};

submitButton?.addEventListener('click', () => {
  const update = buildPackage();
  const url = issueUrl(update);
  const opened = window.open(url, '_blank', 'noopener');
  if (!opened) window.location.assign(url);
  submissionHelp.classList.add('is-opened');
  submissionHelp.innerHTML = `<strong>GitHub opened for paper [${update.id}].</strong><span>Your information is still a draft until you select <b>Create new issue</b> on GitHub. After that, watch the request for the automatic validation comment.</span>`;
  showToast(`Confirm paper [${update.id}] on GitHub to send it`);
});

downloadButton?.addEventListener('click', () => {
  const update = buildPackage();
  downloadText(`${JSON.stringify(update, null, 2)}\n`, `pinn-atlas-paper-${update.id}-update.json`);
  showToast(`Backup package for [${update.id}] downloaded`);
});

copyButton?.addEventListener('click', async () => {
  const update = buildPackage();
  await navigator.clipboard.writeText(JSON.stringify(update));
  showToast(`Update JSON for [${update.id}] copied`);
});

window.addEventListener('popstate', () => {
  const id = Number(new URLSearchParams(location.search).get('id'));
  const paper = state.master?.papers.find((record) => record.id === id);
  if (paper) populateForm(paper);
});

Promise.all([
  fetch(MASTER_URL).then((response) => { if (!response.ok) throw new Error(`Master dataset returned ${response.status}`); return response.json(); }),
  fetch(MAPPING_URL).then((response) => { if (!response.ok) throw new Error(`Country mapping returned ${response.status}`); return response.json(); }),
  fetch(CHANGES_URL).then((response) => { if (!response.ok) throw new Error(`Audit trail returned ${response.status}`); return response.json(); })
]).then(([master, mapping, changes]) => {
  if (!Array.isArray(master.papers) || master.papers.length !== 853) throw new Error('Master dataset failed its 853-record integrity check.');
  state.master = master;
  state.mapping = mapping;
  state.changes = changes;
  status.textContent = `Canonical dataset ${master.metadata.dataset_version} loaded. Select a paper to prepare a validated, trackable update request.`;
  shell.hidden = false;
  document.querySelector('[data-manager-stat="records"]').textContent = master.papers.length.toLocaleString();
  document.querySelector('[data-manager-stat="version"]').textContent = master.metadata.dataset_version;
  document.querySelector('[data-manager-stat="updated"]').textContent = formatDate(master.metadata.last_updated);
  document.querySelector('[data-manager-stat="overrides"]').textContent = master.metadata.maintenance.legacy_realm_year_override_count.toLocaleString();
  document.querySelector('[data-footer-version]').textContent = master.metadata.dataset_version;
  document.querySelector('[data-country-options]').innerHTML = Object.keys(mapping).sort().map((country) => `<option value="${escapeHtml(country)}"></option>`).join('');
  renderResults();
  renderAudit();
  const requestedId = Number(new URLSearchParams(location.search).get('id'));
  const requested = master.papers.find((paper) => paper.id === requestedId);
  if (requested) populateForm(requested);
}).catch((error) => {
  status.classList.add('evidence-error');
  status.innerHTML = `<strong>Dataset Manager could not load.</strong><br>${escapeHtml(error.message)}`;
});
