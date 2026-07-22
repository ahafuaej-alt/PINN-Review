(() => {
  'use strict';

  const MASTER_URL = '../data/papers-master.json';
  const MAPPING_URL = '../data/country-mapping.json';
  const CHANGES_URL = '../data/changes.json';
  const state = { master: null, mapping: null, changes: null, selected: null };
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
  const downloadButton = document.querySelector('[data-download-update]');
  const copyButton = document.querySelector('[data-copy-update]');
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
  const normalize = (value) => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en');
  const equal = (left, right) => JSON.stringify(left) === JSON.stringify(right);
  const effectiveRealmYear = (paper) => paper?.overrides?.realm_year ?? paper?.year;
  const field = (name) => form.elements.namedItem(name);

  let toastTimer;
  const showToast = (message) => {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
  };

  const formatDate = (value) => {
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isNaN(date.valueOf()) ? value : new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
  };

  const parseCountries = (value) => [...new Set(String(value).split(',').map((country) => country.trim()).filter(Boolean))];
  const normalizeDoi = (value) => String(value || '').trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').replace(/^doi:\s*/i, '').replace(/\s+/g, '') || null;
  const canonicalUrl = (value) => String(value || '').trim() || null;

  const currentDraft = () => ({
    title: field('title').value.trim(),
    citation: field('citation').value.trim(),
    doi: normalizeDoi(field('doi').value),
    publisher_url: canonicalUrl(field('publisher_url').value),
    venue: { name: field('venue_name').value.trim(), type: field('venue_type').value },
    year: field('year').value === '' ? null : Number(field('year').value),
    access: field('access').value,
    countries: parseCountries(field('countries').value)
  });

  const changedValues = () => {
    if (!state.selected) return {};
    const draft = currentDraft();
    return Object.fromEntries(Object.entries(draft).filter(([key, value]) => !equal(value, state.selected[key])));
  };

  const validateDraft = () => {
    if (!state.selected) return { errors: ['Select a paper first.'], warnings: [], changes: {} };
    const draft = currentDraft();
    const changes = changedValues();
    const errors = [];
    const warnings = [];
    if (!draft.title) errors.push('Paper title is required.');
    if (!draft.citation) errors.push('Formatted citation is required.');
    if (!draft.venue.name) errors.push('Journal or conference name is required.');
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
    if (!Object.keys(changes).length) warnings.push('No paper fields have changed.');
    if ('year' in changes && state.selected.overrides?.realm_year !== undefined) warnings.push(`Publishing the new year will resolve the legacy Realm override (${state.selected.overrides.realm_year}) and use ${draft.year ?? 'an unknown year'} everywhere.`);
    if (('title' in changes || 'venue' in changes) && !('citation' in changes)) warnings.push('Review the formatted citation: its title or venue may also need to change.');
    if ('year' in changes && !('citation' in changes)) {
      const nextYear = String(draft.year ?? '');
      const oldYear = String(state.selected.year ?? '');
      if (nextYear && !new RegExp(`\\b${nextYear}\\b`).test(draft.citation) && !oldYear) warnings.push('The current citation does not visibly contain the new year; manual citation editing may be required.');
      else warnings.push('The publication workflow will synchronize a single unambiguous citation-year occurrence automatically.');
    }
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
    impactSummary.textContent = fields.length ? `${fields.length} changed field${fields.length === 1 ? '' : 's'} will trigger a complete validated rebuild.` : 'No fields changed.';
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
      if (Number.isInteger(beforeReferenceYear)) referenceDeltas.push(`${beforeReferenceYear}: ${refCounts[beforeReferenceYear]} → ${refCounts[beforeReferenceYear] - 1}`);
      if (Number.isInteger(draft.year)) referenceDeltas.push(`${draft.year}: ${refCounts[draft.year] || 0} → ${(refCounts[draft.year] || 0) + (draft.year === beforeReferenceYear ? 0 : 1)}`);
      const realmDeltas = [];
      if (Number.isInteger(beforeRealmYear)) realmDeltas.push(`${beforeRealmYear}: ${realmCounts[beforeRealmYear]} → ${realmCounts[beforeRealmYear] - 1}`);
      if (Number.isInteger(draft.year)) realmDeltas.push(`${draft.year}: ${realmCounts[draft.year] || 0} → ${(realmCounts[draft.year] || 0) + (draft.year === beforeRealmYear ? 0 : 1)}`);
      cards.push({ title: 'Year analytics', body: `References ${referenceDeltas.join(' · ') || 'year becomes unknown'}. Realm ${realmDeltas.join(' · ') || 'year becomes unknown'}.` });
    }
    if ('countries' in result.changes) cards.push({ title: 'Geographic network', body: `${state.selected.countries.length} → ${draft.countries.length} country associations; this paper contributes ${pairCount(state.selected.countries)} → ${pairCount(draft.countries)} collaboration pairs.` });
    if (fields.some((name) => ['title', 'citation', 'doi', 'publisher_url', 'venue', 'access'].includes(name))) cards.push({ title: 'Reference system', body: 'Card metadata, search, filters, analytics, DOI destination, CSV, BibTeX, RIS, EndNote, and Zotero exports will be regenerated.' });
    cards.push({ title: 'Release metadata', body: 'The patch version, last-updated date, audit trail, data-quality counts, and downloadable JSON will be updated together.' });
    impactGrid.innerHTML = cards.map((card) => `<article><strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.body)}</p></article>`).join('');
  };

  const updatePreview = () => {
    if (!state.selected) return;
    const result = validateDraft();
    const hasChanges = Object.keys(result.changes).length > 0;
    const valid = result.errors.length === 0 && hasChanges;
    downloadButton.disabled = !valid;
    copyButton.disabled = !valid;
    validation.className = `manager-validation ${result.errors.length ? 'has-errors' : 'is-valid'}`;
    validation.innerHTML = [
      ...result.errors.map((message) => `<p><strong>Error:</strong> ${escapeHtml(message)}</p>`),
      ...result.warnings.map((message) => `<p><strong>Check:</strong> ${escapeHtml(message)}</p>`),
      ...(valid ? ['<p><strong>Ready:</strong> This package passes browser-side validation and will receive full repository validation before publication.</p>'] : [])
    ].join('');
    renderImpact(result);
  };

  const buildPackage = () => {
    const result = validateDraft();
    if (result.errors.length || !Object.keys(result.changes).length) throw new Error('Update package is not ready.');
    return {
      schema_version: '1.0.0',
      id: state.selected.id,
      changes: result.changes,
      reason: field('reason').value.trim(),
      evidence: { url: field('evidence_url').value.trim(), note: field('reason').value.trim() },
      submitted_by: field('submitted_by').value.trim() || null,
      submitted_at: new Date().toISOString()
    };
  };

  const populateForm = (paper) => {
    state.selected = paper;
    empty.hidden = true;
    form.hidden = false;
    field('title').value = paper.title;
    field('citation').value = paper.citation;
    field('year').value = paper.year ?? '';
    field('access').value = paper.access;
    field('venue_name').value = paper.venue.name;
    field('venue_type').value = paper.venue.type;
    field('doi').value = paper.doi || '';
    field('publisher_url').value = paper.publisher_url || '';
    field('countries').value = paper.countries.join(', ');
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
    const params = new URLSearchParams(location.search);
    params.set('id', String(paper.id));
    history.replaceState({ paper: paper.id }, '', `${location.pathname}?${params}`);
    renderResults();
    updatePreview();
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const matchingPapers = () => {
    const query = normalize(search.value.trim().replace(/^\[|\]$/g, ''));
    if (!query) return state.master.papers.slice(0, 12);
    return state.master.papers.filter((paper) => [paper.id, paper.title, paper.doi, paper.venue.name, paper.countries.join(' ')].some((value) => normalize(value).includes(query))).slice(0, 30);
  };

  const renderResults = () => {
    const matches = matchingPapers();
    results.innerHTML = matches.length ? matches.map((paper) => `<button type="button" role="option" data-manager-paper="${paper.id}" aria-selected="${paper.id === state.selected?.id}"><span>[${paper.id}]</span><strong>${escapeHtml(paper.title)}</strong><small>${escapeHtml(paper.year ?? 'Year not identified')} · ${escapeHtml(paper.venue.name)}</small></button>`).join('') : '<p class="manager-muted">No matching paper record.</p>';
  };

  const renderAudit = () => {
    const entries = state.changes.changes.slice(0, 8);
    document.querySelector('[data-audit-list]').innerHTML = entries.map((entry) => `<article><div><strong>${entry.paper_id ? `Paper [${entry.paper_id}]` : 'Dataset migration'}</strong><span>Version ${escapeHtml(entry.version)} · ${escapeHtml(formatDate(entry.date))}</span></div><p>${escapeHtml(entry.reason)}</p><small>${escapeHtml(entry.changed_fields.join(', '))}</small>${entry.evidence?.url ? `<a href="${escapeHtml(entry.evidence.url)}" target="_blank" rel="noopener">Evidence ↗</a>` : ''}</article>`).join('');
  };

  form?.addEventListener('input', (event) => {
    if (event.target.name === 'doi') {
      const oldDoiUrl = state.selected?.doi ? `https://doi.org/${state.selected.doi}` : '';
      if (!field('publisher_url').value || field('publisher_url').value === oldDoiUrl) {
        const doi = normalizeDoi(field('doi').value);
        field('publisher_url').value = doi ? `https://doi.org/${doi}` : '';
      }
    }
    updatePreview();
  });
  form?.addEventListener('change', updatePreview);
  form?.addEventListener('reset', () => setTimeout(() => populateForm(state.selected), 0));
  search?.addEventListener('input', renderResults);
  results?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-manager-paper]');
    if (button) populateForm(state.master.papers.find((paper) => paper.id === Number(button.dataset.managerPaper)));
  });

  const downloadText = (text, filename) => {
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  downloadButton?.addEventListener('click', () => {
    const update = buildPackage();
    downloadText(`${JSON.stringify(update, null, 2)}\n`, `pinn-atlas-paper-${update.id}-update.json`);
    showToast(`Update package for [${update.id}] downloaded`);
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
    status.textContent = `Canonical dataset ${master.metadata.dataset_version} loaded. Select a paper to prepare a validated update.`;
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
})();
