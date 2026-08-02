(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));
  const label = (id) => `[${Number(id)}]`;
  const statusLabel = (status) => ({
    reported: 'Reported',
    not_reported: 'Explicit N/A',
    source_record_missing: 'Source record missing'
  }[status] || String(status || '').replaceAll('_', ' '));
  const strategyLabel = (strategy) => ({
    single_optimizer: 'Single optimizer',
    multiple_optimizers: 'Multiple optimizers',
    sequential_or_hybrid_optimizer_set: 'Sequential/hybrid optimizer set',
    not_applicable: 'Not applicable'
  }[strategy] || String(strategy || '').replaceAll('_', ' '));

  const state = {
    papers: [],
    taxonomy: [],
    families: [],
    summary: null,
    filtered: [],
    page: 1,
    pageSize: 30,
    selected: new Set(),
    optimizerMap: new Map(),
    lastDialogTrigger: null
  };

  const controls = () => ({
    search: $('[data-search]'),
    family: $('[data-family]'),
    optimizer: $('[data-optimizer]'),
    status: $('[data-status]'),
    strategy: $('[data-strategy]'),
    review: $('[data-review]')
  });

  async function fetchJson(path) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path} returned ${response.status}`);
    return response.json();
  }

  function currentParams() {
    const fields = controls();
    const params = new URLSearchParams();
    const mappings = [
      ['q', fields.search.value.trim()],
      ['family', fields.family.value],
      ['optimizer', fields.optimizer.value],
      ['status', fields.status.value],
      ['strategy', fields.strategy.value],
      ['review', fields.review.value]
    ];
    mappings.forEach(([key, value]) => { if (value) params.set(key, value); });
    if (state.selected.size) params.set('compare', [...state.selected].sort((a, b) => a - b).join(','));
    return params;
  }

  function syncUrl(push = false) {
    const params = currentParams();
    const target = `${location.pathname}${params.size ? `?${params}` : ''}`;
    const method = push ? 'pushState' : 'replaceState';
    if (`${location.pathname}${location.search}` !== target) history[method](null, '', target);
  }

  function restoreUrl() {
    const fields = controls();
    const params = new URLSearchParams(location.search);
    fields.search.value = params.get('q') || params.get('paper') || '';
    fields.family.value = params.get('family') || '';
    fields.optimizer.value = params.get('optimizer') || '';
    fields.status.value = params.get('status') || '';
    fields.strategy.value = params.get('strategy') || '';
    fields.review.value = params.get('review') || '';
    state.selected.clear();
    (params.get('compare') || '').split(',').map(Number).filter((id) => Number.isInteger(id) && id >= 1 && id <= 853).slice(0, 5).forEach((id) => state.selected.add(id));
  }

  function optimizerFor(id) {
    return state.optimizerMap.get(id);
  }

  function recordOptimizers(record) {
    return (record.normalized_optimizer_ids || []).map(optimizerFor).filter(Boolean);
  }

  function exactIdQuery(query) {
    const match = String(query).trim().match(/^\[?(\d+)\]?$/);
    return match ? Number(match[1]) : null;
  }

  function matchRecord(record) {
    const fields = controls();
    const query = fields.search.value.trim();
    const idQuery = exactIdQuery(query);
    if (idQuery !== null && record.paper_id !== idQuery) return false;
    if (fields.status.value && record.reporting_status !== fields.status.value) return false;
    if (fields.strategy.value && record.training_strategy !== fields.strategy.value) return false;
    if (fields.review.value === 'required' && !record.manual_review_required) return false;
    if (fields.review.value === 'not_required' && record.manual_review_required) return false;
    if (fields.family.value && !(record.optimizer_families || []).includes(fields.family.value)) return false;
    if (fields.optimizer.value && !(record.normalized_optimizer_ids || []).includes(fields.optimizer.value)) return false;
    if (query && idQuery === null) {
      const optimizers = recordOptimizers(record);
      const haystack = [
        record.paper_label,
        record.optimizer_raw,
        ...(record.raw_optimizer_forms || []),
        ...(record.optimizer_families || []),
        ...(record.source_annotations || []),
        ...optimizers.flatMap((optimizer) => [optimizer.optimizer_name, optimizer.method_type, ...(optimizer.aliases || [])])
      ].join(' ').toLowerCase();
      if (!haystack.includes(query.toLowerCase())) return false;
    }
    return true;
  }

  function renderKpis() {
    const summary = state.summary;
    const items = [
      ['source_rows', 'Source rows', 'Completed paper-level table'],
      ['references_reporting_an_optimizer', 'Reporting an algorithm', 'Optimizer or training/inference algorithm'],
      ['explicit_na_records', 'Explicit N/A', 'No algorithm reported in the source'],
      ['missing_source_records', 'Missing source records', 'Distinct from explicit N/A'],
      ['distinct_raw_optimizer_forms', 'Distinct raw forms', 'Exact source wording'],
      ['canonical_optimizer_forms', 'Canonical forms', 'For filtering and aggregation'],
      ['single_optimizer_records', 'Single-optimizer records', 'One canonical form'],
      ['multi_optimizer_records', 'Multi-optimizer records', 'No order inferred'],
      ['optimizer_families', 'Optimizer families', 'Browsing taxonomy'],
      ['manual_review_required', 'Manual review', 'Cautious normalization retained']
    ];
    $('[data-kpis]').innerHTML = items.map(([key, title, note]) => `<article class="kpi"><button type="button" data-kpi="${key}"><strong>${Number(summary[key]).toLocaleString()}</strong><span>${escapeHtml(title)}</span><small>${escapeHtml(note)}</small></button></article>`).join('');
    $$('[data-kpi]').forEach((button) => button.addEventListener('click', () => {
      const fields = controls();
      const key = button.dataset.kpi;
      if (key === 'source_rows') resetFilters(false);
      else if (key === 'references_reporting_an_optimizer') fields.status.value = 'reported';
      else if (key === 'explicit_na_records') fields.status.value = 'not_reported';
      else if (key === 'missing_source_records') fields.status.value = 'source_record_missing';
      else if (key === 'single_optimizer_records') fields.strategy.value = 'single_optimizer';
      else if (key === 'multi_optimizer_records') fields.strategy.value = 'multiple_optimizers';
      else if (key === 'manual_review_required') fields.review.value = 'required';
      else return;
      applyFilters({ push: true, scroll: true });
    }));
  }

  function populateFilters() {
    const fields = controls();
    fields.family.insertAdjacentHTML('beforeend', state.families.map((family) => `<option>${escapeHtml(family)}</option>`).join(''));
    fields.optimizer.insertAdjacentHTML('beforeend', state.taxonomy.slice().sort((a, b) => a.optimizer_name.localeCompare(b.optimizer_name)).map((optimizer) => `<option value="${optimizer.optimizer_id}">${escapeHtml(optimizer.optimizer_name)}</option>`).join(''));
    restoreUrl();
  }

  function renderTopOptimizers() {
    const top = state.summary.top_optimizers || [];
    const maximum = Math.max(...top.map((item) => item.count), 1);
    $('[data-top-optimizers]').innerHTML = top.map((item) => `<button class="metric-bar" type="button" data-chart-optimizer="${item.optimizer_id}" aria-pressed="false"><span class="metric-bar-label" title="${escapeHtml(item.optimizer_name)}">${escapeHtml(item.optimizer_name)}</span><span class="metric-bar-track" aria-hidden="true"><span class="metric-bar-fill" style="width:${(item.count / maximum) * 100}%"></span></span><span class="metric-bar-count">${item.count}</span></button>`).join('');
    $$('[data-chart-optimizer]').forEach((button) => {
      const item = top.find((candidate) => candidate.optimizer_id === button.dataset.chartOptimizer);
      button.setAttribute('aria-label', `Filter papers reporting ${item.optimizer_name}: ${item.count} papers`);
      button.addEventListener('click', () => {
        const select = controls().optimizer;
        select.value = select.value === button.dataset.chartOptimizer ? '' : button.dataset.chartOptimizer;
        applyFilters({ push: true, scroll: true });
        renderExplorer();
      });
    });
    updateActiveControls();
  }

  function renderFamilies() {
    $('[data-families]').innerHTML = state.families.map((family) => {
      const algorithms = state.taxonomy.filter((optimizer) => optimizer.family === family);
      const papers = new Set(state.papers.filter((record) => (record.optimizer_families || []).includes(family)).map((record) => record.paper_id));
      return `<button class="group-card" type="button" data-family-card="${escapeHtml(family)}" aria-pressed="false"><strong>${escapeHtml(family)}</strong><span>${algorithms.length} canonical algorithms · ${papers.size} papers</span><small>Filter the paper records and matrix</small></button>`;
    }).join('');
    $$('[data-family-card]').forEach((button) => button.addEventListener('click', () => {
      const select = controls().family;
      select.value = select.value === button.dataset.familyCard ? '' : button.dataset.familyCard;
      applyFilters({ push: true, scroll: true });
      renderExplorer();
    }));
    updateActiveControls();
  }

  function updateActiveControls() {
    const fields = controls();
    $$('[data-chart-optimizer]').forEach((button) => {
      const active = button.dataset.chartOptimizer === fields.optimizer.value;
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
    $('[data-result-summary]').textContent = `${state.filtered.length.toLocaleString()} paper record${state.filtered.length === 1 ? '' : 's'} shown · visible IDs use [square brackets]`;
  }

  function matrixStatus(record, family) {
    if (record.reporting_status === 'source_record_missing') return 'source-missing';
    if (record.reporting_status === 'not_reported') return 'not-reported';
    return (record.optimizer_families || []).includes(family) ? 'reported' : 'not-reported';
  }

  function renderMatrix() {
    $('[data-matrix-head]').innerHTML = `<tr><th scope="col">Paper</th>${state.families.map((family) => `<th scope="col" title="${escapeHtml(family)}">${escapeHtml(family.replace(' and ', ' & '))}</th>`).join('')}</tr>`;
    $('[data-matrix-body]').innerHTML = state.filtered.slice(0, 50).map((record) => `<tr><th scope="row"><button class="id-link matrix-id" type="button" data-matrix-paper="${record.paper_id}">${record.paper_label}</button></th>${state.families.map((family) => {
      const status = matrixStatus(record, family);
      const reported = status === 'reported';
      const accessibleStatus = reported ? 'reported' : record.reporting_status === 'source_record_missing' ? 'source record missing' : 'not reported for this family';
      return `<td><button class="matrix-cell ${status}" type="button" data-matrix-paper="${record.paper_id}" data-matrix-family="${escapeHtml(family)}" aria-label="${record.paper_label}: ${escapeHtml(family)} — ${accessibleStatus}" ${reported ? '' : 'disabled'}></button></td>`;
    }).join('')}</tr>`).join('');
    $$('[data-matrix-paper]', $('[data-matrix-body]')).forEach((button) => button.addEventListener('click', () => openPaper(Number(button.dataset.matrixPaper), button.dataset.matrixFamily || '', button)));
  }

  function optimizerChips(record, limit = 7) {
    const optimizers = recordOptimizers(record);
    if (!optimizers.length) return record.reporting_status === 'not_reported' ? '<span class="metric-chip">N/A</span>' : '<span class="metric-chip">No source record</span>';
    return `${optimizers.slice(0, limit).map((optimizer) => `<span class="metric-chip">${escapeHtml(optimizer.optimizer_name)}</span>`).join('')}${optimizers.length > limit ? `<span class="metric-chip">+${optimizers.length - limit}</span>` : ''}`;
  }

  function renderPapers() {
    const start = (state.page - 1) * state.pageSize;
    const pageRecords = state.filtered.slice(start, start + state.pageSize);
    $('[data-papers]').innerHTML = pageRecords.map((record) => `<article class="paper-card optimizer-card" data-paper-card="${record.paper_id}"><div class="paper-top"><a class="paper-id id-link" href="../references/#ref=${record.paper_id}">${record.paper_label}</a><span class="status-chip ${record.reporting_status === 'not_reported' ? 'optimizer-status-na' : record.reporting_status === 'source_record_missing' ? 'optimizer-status-missing' : ''}">${statusLabel(record.reporting_status)}</span></div><div class="paper-metrics">${optimizerChips(record)}</div>${record.optimizer_families?.length ? `<div class="optimizer-family-list">${record.optimizer_families.map((family) => `<span class="optimizer-family-chip">${escapeHtml(family)}</span>`).join('')}</div>` : ''}<p class="paper-raw"><span class="optimizer-raw-label">Exact source field</span>${escapeHtml(record.optimizer_raw)}</p>${record.manual_review_required ? `<p class="optimizer-review-note"><strong>Manual normalization review:</strong> ${escapeHtml(record.normalization_notes.at(-1) || 'An unusual source form has been retained cautiously.')}</p>` : ''}${record.research_note_available ? '<p class="optimizer-source-note">Targeted research note available for this formerly missing source row.</p>' : ''}<div class="paper-actions"><button class="button" type="button" data-open-paper="${record.paper_id}">Details</button><label class="compare-choice"><input type="checkbox" data-compare="${record.paper_id}" ${state.selected.has(record.paper_id) ? 'checked' : ''}> Compare</label></div></article>`).join('') || '<div class="performance-notice"><strong>No paper records match the active filters.</strong> Reset one or more filters to broaden the view.</div>';
    $$('[data-open-paper]').forEach((button) => button.addEventListener('click', () => openPaper(Number(button.dataset.openPaper), '', button)));
    $$('[data-compare]').forEach((checkbox) => checkbox.addEventListener('change', () => toggleCompare(Number(checkbox.dataset.compare), checkbox.checked, checkbox)));
    renderPager();
  }

  function renderPager() {
    const pages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
    if (state.page > pages) state.page = pages;
    $('[data-pager]').innerHTML = pages > 1 ? `<button type="button" data-prev ${state.page === 1 ? 'disabled' : ''}>← Previous</button><span>Page ${state.page} of ${pages}</span><button type="button" data-next ${state.page === pages ? 'disabled' : ''}>Next →</button>` : '';
    $('[data-prev]')?.addEventListener('click', () => changePage(-1));
    $('[data-next]')?.addEventListener('click', () => changePage(1));
  }

  function changePage(delta) {
    state.page += delta;
    renderPapers();
    $('[data-papers]').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showDialog(dialog, trigger) {
    state.lastDialogTrigger = trigger || document.activeElement;
    dialog.showModal();
    $('.dialog-close', dialog)?.focus();
  }

  function openPaper(id, onlyFamily = '', trigger = null) {
    const record = state.papers.find((paper) => paper.paper_id === id);
    if (!record) return;
    const optimizers = recordOptimizers(record).filter((optimizer) => !onlyFamily || optimizer.family === onlyFamily || optimizer.secondary_tags?.includes(onlyFamily));
    const notes = record.normalization_notes || [];
    $('[data-detail-content]').innerHTML = `<h2 class="detail-title" id="optimizer-detail-title">Algorithms reported by ${record.paper_label}</h2><p><span class="status-chip">${statusLabel(record.reporting_status)}</span> · <span>${escapeHtml(strategyLabel(record.training_strategy))}</span> · <a class="id-link" href="../references/#ref=${record.paper_id}">Open reference ${record.paper_label}</a></p>${optimizers.length ? `<div class="detail-grid">${optimizers.map((optimizer) => `<section class="detail-group"><h3>${escapeHtml(optimizer.optimizer_name)} <span class="method-type">${escapeHtml(optimizer.method_type)}</span></h3><p>${escapeHtml(optimizer.description)}</p><div class="optimizer-family-list"><span class="optimizer-family-chip">${escapeHtml(optimizer.family)}</span>${(optimizer.secondary_tags || []).map((tag) => `<span class="optimizer-family-chip">${escapeHtml(tag)}</span>`).join('')}</div></section>`).join('')}</div>` : `<section class="detail-group"><h3>${record.reporting_status === 'not_reported' ? 'Explicit N/A' : 'No source record'}</h3><p>${record.reporting_status === 'not_reported' ? `The completed optimizer source explicitly contains N/A for ${record.paper_label}. No optimizer is inferred.` : `No optimizer source record is available for ${record.paper_label} in the current optimizer dataset.`}</p></section>`}<h3>Exact source field</h3><div class="raw-block">${escapeHtml(record.optimizer_raw)}</div>${record.source_annotations?.length ? `<h3>Source annotations</h3><ul class="annotation-list">${record.source_annotations.map((annotation) => `<li>${escapeHtml(annotation)}</li>`).join('')}</ul>` : ''}${notes.length ? `<h3>Normalization notes</h3><ul class="annotation-list">${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join('')}</ul>` : ''}${record.research_note_available ? `<p class="optimizer-warning">This row is one of eight records completed through targeted publication research. The <a href="../data/optimizers/reference-optimizer-web-research-notes.md">research notes</a> preserve the evidence boundary.</p>` : ''}`;
    showDialog($('[data-detail-dialog]'), trigger);
  }

  function toggleCompare(id, enabled, checkbox) {
    if (enabled && state.selected.size >= 5) {
      checkbox.checked = false;
      showToast('Select no more than five papers.');
      return;
    }
    enabled ? state.selected.add(id) : state.selected.delete(id);
    renderCompareBar();
    syncUrl(false);
  }

  function renderCompareBar() {
    const bar = $('[data-compare-bar]');
    bar.hidden = state.selected.size === 0;
    $('[data-compare-count]').textContent = `${state.selected.size} selected: ${[...state.selected].sort((a, b) => a - b).map(label).join(', ')}`;
    $('[data-open-compare]').disabled = state.selected.size < 2;
  }

  function openCompare(trigger) {
    const papers = [...state.selected].sort((a, b) => a - b).map((id) => state.papers.find((paper) => paper.paper_id === id)).filter(Boolean);
    if (papers.length < 2) {
      showToast('Select at least two papers to compare.');
      return;
    }
    const values = [
      ['Reporting status', (paper) => statusLabel(paper.reporting_status)],
      ['Exact raw optimizer text', (paper) => paper.optimizer_raw],
      ['Canonical optimizers', (paper) => recordOptimizers(paper).map((optimizer) => optimizer.optimizer_name).join('; ') || 'None'],
      ['Optimizer families', (paper) => (paper.optimizer_families || []).join('; ') || 'None'],
      ['Number of optimizers reported', (paper) => String((paper.normalized_optimizer_ids || []).length)],
      ['Training strategy', (paper) => strategyLabel(paper.training_strategy)],
      ['Source annotations', (paper) => (paper.source_annotations || []).join('; ') || 'None'],
      ['Manual-review status', (paper) => paper.manual_review_required ? 'Manual review required' : 'No manual-review flag']
    ];
    $('[data-compare-content]').innerHTML = `<h2 class="detail-title" id="optimizer-compare-title">Optimizer reporting comparison: ${papers.map((paper) => paper.paper_label).join(', ')}</h2><div class="optimizer-warning"><strong>Optimizer choices are listed as reported and are not ranked.</strong> Direct methodological comparison requires compatible problems, architectures, loss formulations, learning-rate schedules, training budgets, stopping criteria, and software implementations.</div><div class="matrix-wrap"><table class="compare-table"><thead><tr><th scope="col">Dimension</th>${papers.map((paper) => `<th scope="col">${paper.paper_label}</th>`).join('')}</tr></thead><tbody>${values.map(([name, getter]) => `<tr><th scope="row">${escapeHtml(name)}</th>${papers.map((paper) => `<td>${escapeHtml(getter(paper))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    showDialog($('[data-compare-dialog]'), trigger);
  }

  function renderExplorer() {
    const fields = controls();
    const relevant = state.taxonomy.filter((optimizer) => !fields.family.value || optimizer.family === fields.family.value || optimizer.secondary_tags?.includes(fields.family.value)).filter((optimizer) => !fields.optimizer.value || optimizer.optimizer_id === fields.optimizer.value);
    $('[data-optimizer-explorer]').innerHTML = relevant.map((optimizer) => `<details class="metric-entry optimizer-entry ${fields.optimizer.value === optimizer.optimizer_id ? 'is-filtered' : ''}" id="optimizer-${optimizer.optimizer_id}"><summary><strong>${escapeHtml(optimizer.optimizer_name)} <span class="method-type">${escapeHtml(optimizer.method_type)}</span></strong><span>${optimizer.paper_count} paper${optimizer.paper_count === 1 ? '' : 's'}</span></summary><div class="metric-body"><dl><dt>Primary family</dt><dd>${escapeHtml(optimizer.family)}</dd><dt>Method type</dt><dd>${escapeHtml(optimizer.method_type)}</dd><dt>Neutral description</dt><dd>${escapeHtml(optimizer.description)}</dd><dt>Aliases in source</dt><dd><div class="alias-list">${optimizer.aliases.map((alias) => `<code>${escapeHtml(alias)}</code>`).join('')}</div></dd>${optimizer.secondary_tags?.length ? `<dt>Secondary tags</dt><dd>${optimizer.secondary_tags.map(escapeHtml).join('; ')}</dd>` : ''}<dt>Manual review</dt><dd>${optimizer.manual_review_required ? 'Required for cautious classification or normalization' : 'No algorithm-level review flag'}</dd></dl>${optimizer.source_annotations?.length ? `<strong>Source-specific annotations</strong><ul class="annotation-list">${optimizer.source_annotations.map((annotation) => `<li>${escapeHtml(annotation)}</li>`).join('')}</ul>` : ''}<strong>Supporting paper IDs</strong><div class="paper-id-list">${optimizer.paper_ids.map((id) => `<button type="button" data-explorer-paper="${id}" aria-label="Open optimizer details for ${label(id)}">${label(id)}</button>`).join('')}</div></div></details>`).join('') || '<p>No optimizer dictionary entry matches the active family and optimizer filters.</p>';
    $$('[data-explorer-paper]').forEach((button) => button.addEventListener('click', () => openPaper(Number(button.dataset.explorerPaper), '', button)));
  }

  function exportRows(format) {
    const rows = state.filtered.map((record) => ({
      'Reference ID': record.paper_id,
      'Visible reference label': record.paper_label,
      'Reporting status': record.reporting_status,
      'Raw optimizer field': record.optimizer_raw,
      'Canonical optimizers': recordOptimizers(record).map((optimizer) => optimizer.optimizer_name).join('; '),
      'Optimizer families': (record.optimizer_families || []).join('; '),
      'Manual-review status': record.manual_review_required ? 'required' : 'not_required',
      'Normalization notes': (record.normalization_notes || []).join(' | ')
    }));
    let content;
    let type;
    let filename;
    if (format === 'json') {
      content = JSON.stringify(rows, null, 2);
      type = 'application/json;charset=utf-8';
      filename = 'pinn-optimizers-filtered.json';
    } else {
      const keys = ['Reference ID', 'Visible reference label', 'Reporting status', 'Raw optimizer field', 'Canonical optimizers', 'Optimizer families', 'Manual-review status', 'Normalization notes'];
      const quote = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
      content = `\uFEFF${[keys.join(','), ...rows.map((row) => keys.map((key) => quote(row[key])).join(','))].join('\r\n')}`;
      type = 'text/csv;charset=utf-8';
      filename = 'pinn-optimizers-filtered.csv';
    }
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([content], { type }));
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast(`Exported ${rows.length} filtered record${rows.length === 1 ? '' : 's'} as ${format.toUpperCase()}.`);
  }

  let toastTimer;
  function showToast(message) {
    const toast = $('[data-toast]');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3200);
  }

  function renderAll() {
    renderSummary();
    renderMatrix();
    renderPapers();
    renderCompareBar();
    updateActiveControls();
  }

  function applyFilters({ push = false, scroll = false, updateUrl = true } = {}) {
    state.filtered = state.papers.filter(matchRecord);
    state.page = 1;
    renderAll();
    if (updateUrl) syncUrl(push);
    if (scroll) {
      $('[data-result-summary]').focus({ preventScroll: true });
      $('[data-papers]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function resetFilters(update = true) {
    const fields = controls();
    Object.values(fields).forEach((field) => { field.value = ''; });
    state.selected.clear();
    if (update) {
      applyFilters({ push: true });
      renderExplorer();
    }
  }

  function bind() {
    const fields = controls();
    fields.search.addEventListener('input', () => applyFilters({ push: false }));
    [fields.family, fields.optimizer].forEach((field) => field.addEventListener('change', () => {
      applyFilters({ push: true });
      renderExplorer();
    }));
    [fields.status, fields.strategy, fields.review].forEach((field) => field.addEventListener('change', () => applyFilters({ push: true })));
    $('[data-reset]').addEventListener('click', () => resetFilters(true));
    $('[data-export-json]').addEventListener('click', () => exportRows('json'));
    $('[data-export-csv]').addEventListener('click', () => exportRows('csv'));
    $('[data-open-compare]').addEventListener('click', (event) => openCompare(event.currentTarget));
    $('[data-clear-compare]').addEventListener('click', () => {
      state.selected.clear();
      renderPapers();
      renderCompareBar();
      syncUrl(false);
    });
    $$('dialog').forEach((dialog) => dialog.addEventListener('close', () => state.lastDialogTrigger?.focus?.()));
    window.addEventListener('popstate', () => {
      restoreUrl();
      applyFilters({ updateUrl: false });
      renderExplorer();
    });
  }

  async function init() {
    try {
      const [recordData, taxonomyData, summary] = await Promise.all([
        fetchJson('../data/optimizers/optimizer-records.json'),
        fetchJson('../data/optimizers/optimizer-taxonomy.json'),
        fetchJson('../data/optimizers/optimizer-summary.json')
      ]);
      state.papers = recordData.records || [];
      state.taxonomy = taxonomyData.optimizers || [];
      state.families = taxonomyData.families || [];
      state.summary = summary;
      state.optimizerMap = new Map(state.taxonomy.map((optimizer) => [optimizer.optimizer_id, optimizer]));
      populateFilters();
      renderKpis();
      renderTopOptimizers();
      renderFamilies();
      bind();
      state.filtered = state.papers.filter(matchRecord);
      renderAll();
      renderExplorer();
    } catch (error) {
      console.error(error);
      $('main').insertAdjacentHTML('afterbegin', `<div class="container performance-notice"><strong>Optimizer data could not be loaded.</strong> ${escapeHtml(error.message)}</div>`);
    }
  }

  init();
})();
