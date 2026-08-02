(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));
  const label = (id) => `[${Number(id)}]`;
  const humanize = (value) => String(value || '').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  const statusLabel = (status) => ({
    reported: 'Reported',
    not_explicitly_stated: 'Not explicitly stated',
    review_or_survey: 'Review or survey',
    non_pinn_record: 'Non-PINN record',
    conceptual_or_not_implemented: 'Conceptual / not implemented',
    paper_unavailable: 'Paper unavailable',
    other_na: 'Other N/A'
  }[status] || humanize(status));
  const roleLabel = (role) => ({
    hidden_layer: 'Hidden layer',
    output_layer: 'Output layer',
    gate: 'Gate',
    constraint_or_loss: 'Constraint or loss',
    cnn_or_encoder_module: 'CNN / encoder module',
    operator_network_module: 'Operator-network module',
    compared_candidate: 'Compared candidate',
    adaptive_or_trainable: 'Adaptive or trainable',
    custom_basis_or_kernel: 'Custom basis or kernel',
    general_mention: 'General mention',
    role_not_specified: 'Role not specified'
  }[role] || humanize(role));

  const state = {
    papers: [],
    taxonomy: [],
    families: [],
    summary: null,
    filtered: [],
    page: 1,
    pageSize: 30,
    selected: new Set(),
    activationMap: new Map(),
    lastDialogTrigger: null,
    topSignature: '',
    familySignature: '',
    explorerSignature: ''
  };

  const controls = () => ({
    search: $('[data-search]'),
    family: $('[data-family]'),
    activation: $('[data-activation]'),
    status: $('[data-status]'),
    presence: $('[data-presence]'),
    role: $('[data-role]'),
    adaptive: $('[data-adaptive]'),
    standardness: $('[data-standardness]'),
    multiplicity: $('[data-multiplicity]'),
    review: $('[data-review]'),
    countMode: $('[data-count-mode]')
  });

  async function fetchJson(file) {
    const response = await fetch(file, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${file} returned ${response.status}`);
    return response.json();
  }

  function currentParams() {
    const fields = controls();
    const params = new URLSearchParams();
    const mappings = [
      ['q', fields.search.value.trim()],
      ['family', fields.family.value],
      ['activation', fields.activation.value],
      ['status', fields.status.value],
      ['presence', fields.presence.value],
      ['role', fields.role.value],
      ['adaptive', fields.adaptive.value],
      ['standardness', fields.standardness.value],
      ['multiplicity', fields.multiplicity.value],
      ['review', fields.review.value]
    ];
    mappings.forEach(([key, value]) => { if (value) params.set(key, value); });
    if (fields.countMode.value !== 'implementation') params.set('mode', fields.countMode.value);
    if (state.selected.size) params.set('compare', [...state.selected].sort((a, b) => a - b).join(','));
    return params;
  }

  function syncUrl(push = false) {
    const params = currentParams();
    const target = `${location.pathname}${params.size ? `?${params}` : ''}`;
    if (`${location.pathname}${location.search}` !== target) history[push ? 'pushState' : 'replaceState'](null, '', target);
  }

  function restoreUrl() {
    const fields = controls();
    const params = new URLSearchParams(location.search);
    fields.search.value = params.get('q') || params.get('paper') || '';
    fields.family.value = params.get('family') || '';
    fields.activation.value = params.get('activation') || '';
    fields.status.value = params.get('status') || '';
    fields.presence.value = params.get('presence') || '';
    fields.role.value = params.get('role') || '';
    fields.adaptive.value = params.get('adaptive') || '';
    fields.standardness.value = params.get('standardness') || '';
    fields.multiplicity.value = params.get('multiplicity') || '';
    fields.review.value = params.get('review') || '';
    fields.countMode.value = params.get('mode') === 'all_mentions' ? 'all_mentions' : 'implementation';
    state.selected.clear();
    (params.get('compare') || '').split(',').map(Number).filter((id) => Number.isInteger(id) && id >= 1 && id <= 853).slice(0, 5).forEach((id) => state.selected.add(id));
  }

  const activationFor = (id) => state.activationMap.get(id);
  const recordActivations = (record) => (record.normalized_activation_ids || []).map(activationFor).filter(Boolean);
  const exactIdQuery = (query) => {
    const match = String(query).trim().match(/^\[?(\d+)\]?$/);
    return match ? Number(match[1]) : null;
  };

  function matchRecord(record) {
    const fields = controls();
    const query = fields.search.value.trim();
    const idQuery = exactIdQuery(query);
    if (idQuery !== null && record.paper_id !== idQuery) return false;
    if (fields.status.value && record.reporting_status !== fields.status.value) return false;
    if (fields.presence.value === 'named' && record.activation_raw === 'N/A') return false;
    if (fields.presence.value === 'na' && record.activation_raw !== 'N/A') return false;
    if (fields.role.value && !(record.activation_roles || []).includes(fields.role.value)) return false;
    if (fields.adaptive.value === 'true' && record.adaptive_classification !== 'adaptive_or_trainable') return false;
    if (fields.adaptive.value === 'false' && record.adaptive_classification !== 'fixed_or_standard') return false;
    if (fields.standardness.value === 'standard' && record.standardness !== 'standard') return false;
    if (fields.standardness.value === 'custom' && !['custom_basis_kernel', 'mixed'].includes(record.standardness)) return false;
    if (fields.standardness.value === 'module' && !['module_specific', 'mixed'].includes(record.standardness)) return false;
    if (fields.multiplicity.value === 'single' && record.activation_count !== 1) return false;
    if (fields.multiplicity.value === 'multiple' && record.activation_count <= 1) return false;
    if (fields.review.value === 'required' && !record.manual_review_required) return false;
    if (fields.review.value === 'not_required' && record.manual_review_required) return false;
    if (fields.family.value && !(record.activation_families || []).includes(fields.family.value)) return false;
    if (fields.activation.value && !(record.normalized_activation_ids || []).includes(fields.activation.value)) return false;
    if (query && idQuery === null) {
      const activations = recordActivations(record);
      const haystack = [
        record.paper_label,
        record.activation_raw,
        record.notes_raw,
        ...(record.raw_activation_forms || []),
        ...(record.activation_families || []),
        ...(record.activation_roles || []).map(roleLabel),
        ...activations.flatMap((item) => [item.activation_name, item.family, item.activation_type, ...(item.aliases || []), ...(item.tags || [])])
      ].join(' ').toLowerCase();
      if (!haystack.includes(query.toLowerCase())) return false;
    }
    return true;
  }

  function renderKpis() {
    const items = [
      ['source_records', 'Source records', 'Complete [1]–[853] coverage'],
      ['named_activation_records', 'Named fields', 'Source-reported activation text'],
      ['explicit_na_records', 'Explicit N/A', 'Reason retained from the source note'],
      ['distinct_raw_non_na_fields', 'Distinct raw fields', 'Exact non-N/A source wording'],
      ['canonical_activation_functions', 'Canonical entries', 'Conservative normalization'],
      ['activation_families', 'Families', 'Transparent browsing taxonomy'],
      ['adaptive_or_trainable_records', 'Adaptive / trainable', 'Source-supported adaptation'],
      ['multi_activation_records', 'Multiple activations', 'No layer order inferred'],
      ['review_or_survey_records', 'Review / survey', 'Separated from implementation counts'],
      ['non_pinn_records', 'Non-PINN', 'Architecture context retained'],
      ['not_explicitly_stated_records', 'Not explicitly stated', 'Not treated as no activation'],
      ['manual_review_records', 'Manual review', 'Ambiguous normalization retained']
    ];
    $('[data-kpis]').innerHTML = items.map(([key, title, note]) => `<article class="kpi"><button type="button" data-kpi="${key}"><strong>${Number(state.summary[key]).toLocaleString()}</strong><span>${escapeHtml(title)}</span><small>${escapeHtml(note)}</small></button></article>`).join('');
    $$('[data-kpi]').forEach((button) => button.addEventListener('click', () => {
      const fields = controls();
      const key = button.dataset.kpi;
      if (key === 'source_records') resetFilters(false);
      else if (key === 'named_activation_records') fields.presence.value = 'named';
      else if (key === 'explicit_na_records') fields.presence.value = 'na';
      else if (key === 'adaptive_or_trainable_records') fields.adaptive.value = 'true';
      else if (key === 'multi_activation_records') fields.multiplicity.value = 'multiple';
      else if (key === 'review_or_survey_records') fields.status.value = 'review_or_survey';
      else if (key === 'non_pinn_records') fields.status.value = 'non_pinn_record';
      else if (key === 'not_explicitly_stated_records') fields.status.value = 'not_explicitly_stated';
      else if (key === 'manual_review_records') fields.review.value = 'required';
      else return;
      applyFilters({ push: true, scroll: true });
    }));
  }

  function populateFilters() {
    const fields = controls();
    fields.family.insertAdjacentHTML('beforeend', state.families.map((family) => `<option>${escapeHtml(family)}</option>`).join(''));
    fields.activation.insertAdjacentHTML('beforeend', [...state.taxonomy].sort((a, b) => a.activation_name.localeCompare(b.activation_name)).map((item) => `<option value="${item.activation_id}">${escapeHtml(item.activation_name)}</option>`).join(''));
    restoreUrl();
  }

  const countFor = (item) => controls().countMode.value === 'all_mentions' ? item.all_mention_count : item.paper_count;
  const idsFor = (item) => controls().countMode.value === 'all_mentions' ? item.all_mention_paper_ids : item.paper_ids;

  function renderTopActivations() {
    const signature = controls().countMode.value;
    if (state.topSignature === signature && $('[data-top-activations]').children.length) {
      updateActiveControls();
      return;
    }
    state.topSignature = signature;
    const top = [...state.taxonomy].sort((a, b) => countFor(b) - countFor(a) || a.activation_name.localeCompare(b.activation_name)).slice(0, 15);
    const maximum = Math.max(...top.map(countFor), 1);
    $('[data-top-activations]').innerHTML = top.map((item) => {
      const count = countFor(item);
      return `<button class="metric-bar" type="button" data-chart-activation="${item.activation_id}" aria-pressed="false"><span class="metric-bar-label" title="${escapeHtml(item.activation_name)}">${escapeHtml(item.activation_name)}</span><span class="metric-bar-track" aria-hidden="true"><span class="metric-bar-fill" style="width:${(count / maximum) * 100}%"></span></span><span class="metric-bar-count">${count}</span></button>`;
    }).join('');
    $$('[data-chart-activation]').forEach((button) => {
      const item = top.find((candidate) => candidate.activation_id === button.dataset.chartActivation);
      button.setAttribute('aria-label', `Filter papers mentioning ${item.activation_name}: ${countFor(item)} supporting papers in the selected count mode`);
      button.addEventListener('click', () => {
        const select = controls().activation;
        select.value = select.value === button.dataset.chartActivation ? '' : button.dataset.chartActivation;
        applyFilters({ push: true, scroll: true });
      });
    });
    updateActiveControls();
  }

  function renderFamilies() {
    const signature = controls().countMode.value;
    if (state.familySignature === signature && $('[data-families]').children.length) {
      updateActiveControls();
      return;
    }
    state.familySignature = signature;
    $('[data-families]').innerHTML = state.families.map((family) => {
      const entries = state.taxonomy.filter((item) => item.family === family);
      const papers = new Set(entries.flatMap(idsFor));
      return `<button class="group-card" type="button" data-family-card="${escapeHtml(family)}" aria-pressed="false"><strong>${escapeHtml(family)}</strong><span>${entries.length} canonical entries · ${papers.size} papers</span><small>Counts follow the selected implementation/all-mentions mode</small></button>`;
    }).join('');
    $$('[data-family-card]').forEach((button) => button.addEventListener('click', () => {
      const select = controls().family;
      select.value = select.value === button.dataset.familyCard ? '' : button.dataset.familyCard;
      applyFilters({ push: true, scroll: true });
    }));
    updateActiveControls();
  }

  function updateActiveControls() {
    const fields = controls();
    $$('[data-chart-activation]').forEach((button) => {
      const active = button.dataset.chartActivation === fields.activation.value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $$('[data-family-card]').forEach((button) => {
      const active = button.dataset.familyCard === fields.family.value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderSummary() {
    const mode = controls().countMode.value === 'implementation' ? 'implementation-oriented counts' : 'all source mentions';
    $('[data-result-summary]').textContent = `${state.filtered.length.toLocaleString()} paper record${state.filtered.length === 1 ? '' : 's'} shown · chart mode: ${mode} · visible IDs use [square brackets]`;
    $('[data-count-explanation]').textContent = controls().countMode.value === 'implementation'
      ? 'Implementation-oriented counts exclude review/survey and non-PINN mentions, and exclude functions reported only as constraints or losses.'
      : 'All-source-mentions counts include review and non-PINN mentions while preserving their status labels.';
  }

  function matrixState(record, family) {
    if (record.reporting_status === 'reported') return record.activation_families.includes(family) ? 'reported' : 'empty';
    if (record.reporting_status === 'not_explicitly_stated') return 'not-explicit';
    if (record.reporting_status === 'review_or_survey') return 'review';
    if (['non_pinn_record', 'conceptual_or_not_implemented'].includes(record.reporting_status)) return 'non-pinn';
    return 'unavailable';
  }

  function renderMatrix() {
    $('[data-matrix-head]').innerHTML = `<tr><th scope="col">Paper</th>${state.families.map((family) => `<th scope="col" title="${escapeHtml(family)}">${escapeHtml(family.replaceAll(' and ', ' & '))}</th>`).join('')}</tr>`;
    $('[data-matrix-body]').innerHTML = state.filtered.slice(0, 50).map((record) => `<tr><th scope="row"><button class="id-link matrix-id" type="button" data-matrix-paper="${record.paper_id}">${record.paper_label}</button></th>${state.families.map((family) => {
      const cellState = matrixState(record, family);
      const enabled = cellState === 'reported';
      const text = enabled ? 'reported' : cellState === 'empty' ? 'not reported for this family' : statusLabel(record.reporting_status);
      return `<td><button class="matrix-cell ${cellState}" type="button" data-matrix-paper="${record.paper_id}" data-matrix-family="${escapeHtml(family)}" aria-label="${record.paper_label}: ${escapeHtml(family)} — ${escapeHtml(text)}" ${enabled ? '' : 'disabled'}><span class="matrix-symbol" aria-hidden="true">${enabled ? '●' : cellState === 'not-explicit' ? '?' : cellState === 'review' ? 'R' : cellState === 'non-pinn' ? 'N' : cellState === 'unavailable' ? '—' : ''}</span></button></td>`;
    }).join('')}</tr>`).join('');
    $$('[data-matrix-paper]', $('[data-matrix-body]')).forEach((button) => button.addEventListener('click', () => openPaper(Number(button.dataset.matrixPaper), button.dataset.matrixFamily || '', button)));
  }

  function activationChips(record, limit = 7) {
    const activations = recordActivations(record);
    if (!activations.length) return '<span class="metric-chip">N/A — see source reason</span>';
    return `${activations.slice(0, limit).map((item) => `<span class="metric-chip">${escapeHtml(item.activation_name)}</span>`).join('')}${activations.length > limit ? `<span class="metric-chip">+${activations.length - limit}</span>` : ''}`;
  }

  function renderPapers() {
    const start = (state.page - 1) * state.pageSize;
    const pageRecords = state.filtered.slice(start, start + state.pageSize);
    $('[data-papers]').innerHTML = pageRecords.map((record) => `<article class="paper-card activation-card" data-paper-card="${record.paper_id}"><div class="paper-top"><a class="paper-id id-link" href="../references/#ref=${record.paper_id}">${record.paper_label}</a><span class="status-chip activation-status-${record.reporting_status}">${escapeHtml(statusLabel(record.reporting_status))}</span></div><div class="paper-metrics">${activationChips(record)}</div>${record.activation_families.length ? `<div class="activation-family-list">${record.activation_families.map((family) => `<span class="activation-family-chip">${escapeHtml(family)}</span>`).join('')}</div>` : ''}${record.activation_roles.length ? `<div class="activation-role-list">${record.activation_roles.map((role) => `<span class="activation-role-chip">${escapeHtml(roleLabel(role))}</span>`).join('')}</div>` : ''}<p class="paper-raw"><span class="activation-raw-label">Source-reported activation field</span>${escapeHtml(record.activation_raw)}</p><p class="paper-raw"><span class="activation-raw-label">Exact source note</span>${escapeHtml(record.notes_raw || '(blank source note)')}</p>${record.manual_review_required ? `<p class="activation-review-note"><strong>Manual normalization review:</strong> raw wording remains authoritative.</p>` : ''}<div class="paper-actions"><button class="button" type="button" data-open-paper="${record.paper_id}">Details</button><a class="button" href="../references/#ref=${record.paper_id}">Reference</a><label class="compare-choice"><input type="checkbox" data-compare="${record.paper_id}" ${state.selected.has(record.paper_id) ? 'checked' : ''}> Compare</label></div></article>`).join('') || '<div class="performance-notice"><strong>No records match these filters.</strong> Reset or broaden the evidence criteria.</div>';
    $$('[data-open-paper]').forEach((button) => button.addEventListener('click', () => openPaper(Number(button.dataset.openPaper), '', button)));
    $$('[data-compare]').forEach((input) => input.addEventListener('change', () => toggleCompare(Number(input.dataset.compare), input.checked, input)));
    renderPager();
    renderCompareBar();
  }

  function renderPager() {
    const pages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
    state.page = Math.min(state.page, pages);
    $('[data-pager]').innerHTML = pages <= 1 ? '' : `<button type="button" data-prev ${state.page === 1 ? 'disabled' : ''}>Previous</button><span>Page ${state.page} of ${pages}</span><button type="button" data-next ${state.page === pages ? 'disabled' : ''}>Next</button>`;
    $('[data-prev]')?.addEventListener('click', () => { state.page -= 1; renderPapers(); $('[data-papers]').scrollIntoView({ behavior: 'smooth' }); });
    $('[data-next]')?.addEventListener('click', () => { state.page += 1; renderPapers(); $('[data-papers]').scrollIntoView({ behavior: 'smooth' }); });
  }

  function renderExplorer() {
    const selected = controls().activation.value;
    const signature = `${controls().countMode.value}|${selected}`;
    if (state.explorerSignature === signature && $('[data-activation-explorer]').children.length) return;
    state.explorerSignature = signature;
    $('[data-activation-explorer]').innerHTML = state.taxonomy.map((item) => {
      const supportingIds = idsFor(item);
      const annotations = item.source_specific_annotations || [];
      return `<details class="metric-entry activation-entry ${selected === item.activation_id ? 'is-filtered' : ''}"><summary><strong>${escapeHtml(item.activation_name)}</strong><span>${countFor(item)} papers</span></summary><div class="metric-body"><div class="evidence-separator"><strong>Source-derived facts</strong></div><dl><dt>Raw aliases</dt><dd><div class="alias-list">${item.aliases.map((alias) => `<code>${escapeHtml(alias)}</code>`).join('')}</div></dd><dt>Supporting papers</dt><dd>${supportingIds.length} unique IDs in the selected count mode</dd><dt>Source annotations</dt><dd>${annotations.length ? `<ul class="annotation-list">${annotations.map((note) => `<li>${escapeHtml(note || '(blank source note)')}</li>`).join('')}</ul>` : 'No nonblank annotation.'}</dd></dl><div class="evidence-separator"><strong>General explanatory definition</strong></div><dl><dt>Definition</dt><dd>${escapeHtml(item.definition)}</dd><dt>Smoothness</dt><dd>${escapeHtml(item.smoothness)}</dd><dt>Typical role</dt><dd>${escapeHtml(item.typical_role)}</dd></dl><div class="evidence-separator"><strong>Normalization decisions</strong></div><dl><dt>Family</dt><dd>${escapeHtml(item.family)}</dd><dt>Type</dt><dd>${escapeHtml(humanize(item.activation_type))}</dd><dt>Tags</dt><dd>${item.tags.map((tag) => `<span class="activation-role-chip">${escapeHtml(tag)}</span>`).join(' ') || 'None'}</dd><dt>Adaptive variants</dt><dd>${item.adaptive_variants.length ? item.adaptive_variants.map(escapeHtml).join(', ') : 'None linked in the source taxonomy'}</dd><dt>Review flag</dt><dd>${item.manual_review_required ? 'Manual review retained' : 'No manual-review flag'}</dd><dt>Supporting IDs</dt><dd><div class="paper-id-list">${supportingIds.map((id) => `<button type="button" data-explorer-paper="${id}">${label(id)}</button>`).join('')}</div></dd></dl></div></details>`;
    }).join('');
    $$('[data-explorer-paper]').forEach((button) => button.addEventListener('click', () => {
      controls().search.value = label(button.dataset.explorerPaper);
      applyFilters({ push: true, scroll: true });
    }));
  }

  function mentionRows(record, family = '') {
    const mentions = (record.activation_mentions || []).filter((mention) => !family || mention.normalized_activation_ids.some((id) => activationFor(id)?.family === family));
    return mentions.map((mention) => `<tr><td><code>${escapeHtml(mention.raw_form)}</code></td><td>${mention.normalized_activation_ids.map((id) => escapeHtml(activationFor(id)?.activation_name || id)).join(', ') || 'Not normalized'}</td><td>${mention.roles.map(roleLabel).map(escapeHtml).join(', ')}</td><td>${mention.implementation_oriented ? 'Implementation-oriented' : 'Mention/context only'}</td></tr>`).join('');
  }

  function openPaper(paperId, family = '', trigger = null) {
    const record = state.papers.find((item) => item.paper_id === paperId);
    if (!record) return;
    state.lastDialogTrigger = trigger || document.activeElement;
    $('[data-detail-content]').innerHTML = `<h2 class="detail-title" id="activation-detail-title">Activation details for ${record.paper_label}</h2><div class="detail-grid"><div class="detail-group"><h3>Reporting context</h3><p><span class="status-chip">${escapeHtml(statusLabel(record.reporting_status))}</span> · ${escapeHtml(humanize(record.adaptive_classification))} · ${escapeHtml(humanize(record.standardness))}</p>${family ? `<p>Matrix family focus: <strong>${escapeHtml(family)}</strong></p>` : ''}</div><div class="detail-group"><h3>Source evidence</h3><p><strong>Activation field</strong></p><div class="raw-block">${escapeHtml(record.activation_raw)}</div><p><strong>Note</strong></p><div class="raw-block">${escapeHtml(record.notes_raw || '(blank source note)')}</div></div>${record.activation_mentions.length ? `<div class="detail-group"><h3>Occurrence-level interpretation</h3><div class="matrix-wrap"><table class="compare-table"><thead><tr><th>Raw occurrence</th><th>Canonical entry</th><th>Role</th><th>Count context</th></tr></thead><tbody>${mentionRows(record, family)}</tbody></table></div></div>` : `<div class="detail-group"><h3>N/A interpretation</h3><p>${escapeHtml(record.notes_raw)}. This is not converted to zero or “no activation.”</p></div>`}<div class="detail-group"><h3>Normalization audit</h3>${record.normalization_notes.length ? `<ul>${record.normalization_notes.map((note) => `<li>${escapeHtml(note)}</li>`).join('')}</ul>` : '<p>No normalization warning is attached.</p>'}${record.manual_review_required ? '<p class="activation-warning"><strong>Manual review required.</strong> The raw source remains authoritative.</p>' : ''}</div><p><a class="button" href="../references/#ref=${record.paper_id}">Open ${record.paper_label} in References</a></p></div>`;
    $('[data-detail-dialog]').showModal();
  }

  function toggleCompare(paperId, checked, input) {
    if (checked && state.selected.size >= 5) {
      input.checked = false;
      showToast('Select no more than five papers.');
      return;
    }
    if (checked) state.selected.add(paperId); else state.selected.delete(paperId);
    renderCompareBar();
    syncUrl();
  }

  function renderCompareBar() {
    const bar = $('[data-compare-bar]');
    bar.hidden = state.selected.size === 0;
    $('[data-compare-count]').textContent = `${state.selected.size} selected`;
    $('[data-open-compare]').disabled = state.selected.size < 2;
  }

  function openComparison(trigger) {
    if (state.selected.size < 2) return showToast('Select at least two papers.');
    const records = [...state.selected].sort((a, b) => a - b).map((id) => state.papers.find((record) => record.paper_id === id)).filter(Boolean);
    const rows = [
      ['Reporting status', (record) => statusLabel(record.reporting_status)],
      ['Exact raw field', (record) => record.activation_raw],
      ['Exact source note', (record) => record.notes_raw || '(blank source note)'],
      ['Canonical activations', (record) => recordActivations(record).map((item) => item.activation_name).join(', ') || 'N/A'],
      ['Families', (record) => record.activation_families.join('; ') || 'N/A'],
      ['Roles', (record) => record.activation_roles.map(roleLabel).join(', ') || 'N/A'],
      ['Adaptive / fixed', (record) => humanize(record.adaptive_classification)],
      ['Reported activation count', (record) => String(record.activation_count)],
      ['Normalization review', (record) => record.manual_review_required ? 'Manual review required' : 'No manual-review flag']
    ];
    state.lastDialogTrigger = trigger;
    $('[data-compare-content]').innerHTML = `<h2 class="detail-title" id="activation-compare-title">Compare ${records.map((record) => record.paper_label).join(', ')}</h2><p class="activation-warning"><strong>Scientific caution:</strong> Activation entries are compared as reported, not ranked. Direct comparison requires compatible PDEs, derivative orders, architectures, layer roles, initialization, optimization, loss weighting, and training budgets.</p><div class="matrix-wrap"><table class="compare-table"><thead><tr><th>Field</th>${records.map((record) => `<th>${record.paper_label}</th>`).join('')}</tr></thead><tbody>${rows.map(([title, accessor]) => `<tr><th scope="row">${escapeHtml(title)}</th>${records.map((record) => `<td>${escapeHtml(accessor(record))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    $('[data-compare-dialog]').showModal();
  }

  function clearComparison() {
    state.selected.clear();
    $$('[data-compare]').forEach((input) => { input.checked = false; });
    renderCompareBar();
    syncUrl();
  }

  function applyFilters({ push = false, scroll = false } = {}) {
    state.filtered = state.papers.filter(matchRecord);
    state.page = 1;
    renderSummary();
    renderTopActivations();
    renderFamilies();
    renderMatrix();
    renderPapers();
    renderExplorer();
    syncUrl(push);
    if (scroll) $('[data-result-summary]').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetFilters(push = true) {
    const fields = controls();
    [fields.search, fields.family, fields.activation, fields.status, fields.presence, fields.role, fields.adaptive, fields.standardness, fields.multiplicity, fields.review].forEach((field) => { field.value = ''; });
    fields.countMode.value = 'implementation';
    applyFilters({ push });
  }

  function downloadFile(name, mime, content) {
    const url = URL.createObjectURL(new Blob([content], { type: `${mime};charset=utf-8` }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function exportJson() {
    downloadFile('activation-functions-filtered.json', 'application/json', `${JSON.stringify({ count_mode: controls().countMode.value, records: state.filtered }, null, 2)}\n`);
  }

  function csvCell(value) {
    let text = String(value ?? '');
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""')}"`;
  }

  function exportCsv() {
    const columns = ['Reference ID', 'Visible reference label', 'Reporting status', 'Raw activation-function field', 'Raw notes', 'Canonical activation functions', 'Activation families', 'Activation roles', 'Adaptive/fixed classification', 'Manual-review status', 'Normalization notes'];
    const rows = state.filtered.map((record) => [record.paper_id, record.paper_label, record.reporting_status, record.activation_raw, record.notes_raw, recordActivations(record).map((item) => item.activation_name).join('; '), record.activation_families.join('; '), record.activation_roles.map(roleLabel).join('; '), record.adaptive_classification, record.manual_review_required ? 'required' : 'not required', record.normalization_notes.join(' ') ]);
    downloadFile('activation-functions-filtered.csv', 'text/csv', `\uFEFF${[columns, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n')}\r\n`);
  }

  let toastTimer;
  function showToast(message) {
    const toast = $('[data-toast]');
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
  }

  function bindEvents() {
    const fields = controls();
    let searchTimer;
    fields.search.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => applyFilters(), 120);
    });
    [fields.family, fields.activation, fields.status, fields.presence, fields.role, fields.adaptive, fields.standardness, fields.multiplicity, fields.review].forEach((field) => field.addEventListener('change', () => applyFilters({ push: true })));
    fields.countMode.addEventListener('change', () => applyFilters({ push: true }));
    $('[data-reset]').addEventListener('click', () => resetFilters());
    $('[data-export-json]').addEventListener('click', exportJson);
    $('[data-export-csv]').addEventListener('click', exportCsv);
    $('[data-open-compare]').addEventListener('click', (event) => openComparison(event.currentTarget));
    $('[data-clear-compare]').addEventListener('click', clearComparison);
    $$('dialog').forEach((dialog) => {
      dialog.addEventListener('close', () => state.lastDialogTrigger?.focus?.());
      dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    });
    addEventListener('popstate', () => { restoreUrl(); applyFilters(); });
  }

  async function init() {
    try {
      const [recordData, taxonomyData, summary] = await Promise.all([
        fetchJson('../data/activation-functions/activation-records.json'),
        fetchJson('../data/activation-functions/activation-taxonomy.json'),
        fetchJson('../data/activation-functions/activation-summary.json')
      ]);
      state.papers = recordData.records;
      state.taxonomy = taxonomyData.activations;
      state.families = taxonomyData.families;
      state.summary = summary;
      state.activationMap = new Map(state.taxonomy.map((item) => [item.activation_id, item]));
      renderKpis();
      populateFilters();
      bindEvents();
      applyFilters();
    } catch (error) {
      console.error(error);
      $('[data-result-summary]').innerHTML = `<strong>Activation data could not be loaded.</strong> ${escapeHtml(error.message)}`;
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
