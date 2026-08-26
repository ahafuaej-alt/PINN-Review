(() => {
  'use strict';

  const results = document.querySelector('[data-reference-results]');
  if (!results) return;

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));
  const label = (id) => `[${Number(id)}]`;
  const statusLabel = (status) => ({
    reported_numerically: 'Numerical values reported',
    reported_qualitatively: 'Qualitative reporting',
    not_reported: 'No performance metrics reported',
    review_paper: 'Review paper',
    non_pinn_record: 'Non-PINN record',
    software_or_framework: 'Software or framework'
  }[status] || String(status || 'Status not identified').replaceAll('_', ' '));
  const optimizerStatusLabel = (status) => ({
    reported: 'Optimizer/training algorithm reported',
    not_reported: 'Explicit N/A in optimizer source',
    source_record_missing: 'Optimizer source record missing'
  }[status] || String(status || 'Status not identified').replaceAll('_', ' '));
  const activationStatusLabel = (status) => ({
    reported: 'Activation function reported or mentioned',
    not_explicitly_stated: 'Activation function not explicitly stated',
    review_or_survey: 'Review or survey context',
    non_pinn_record: 'Non-PINN record',
    conceptual_or_not_implemented: 'Conceptual or not implemented',
    paper_unavailable: 'Paper unavailable',
    other_na: 'Other source N/A'
  }[status] || String(status || 'Status not identified').replaceAll('_', ' '));
  const activationRoleLabel = (role) => ({
    hidden_layer: 'Hidden layer', output_layer: 'Output layer', gate: 'Gate',
    constraint_or_loss: 'Constraint or loss', cnn_or_encoder_module: 'CNN / encoder module',
    operator_network_module: 'Operator-network module', compared_candidate: 'Compared candidate',
    adaptive_or_trainable: 'Adaptive or trainable', custom_basis_or_kernel: 'Custom basis or kernel',
    general_mention: 'General mention', role_not_specified: 'Role not specified'
  }[role] || String(role || '').replaceAll('_', ' '));

  const loadGzipJson = async (paths) => {
    if (!('DecompressionStream' in window)) throw new Error('Compressed Atlas data are not supported by this browser.');
    const chunks = await Promise.all(paths.map(async (path) => {
      const response = await fetch(path, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${path} returned ${response.status}`);
      return response.text();
    }));
    const binary = atob(chunks.join('').replace(/\s+/g, ''));
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return JSON.parse(await new Response(stream).text());
  };

  const splitReportedForms = (value) => {
    const parts = [];
    let current = '';
    let depth = 0;
    for (const character of String(value || '')) {
      if (character === '(') depth += 1;
      if (character === ')') depth = Math.max(0, depth - 1);
      if (depth === 0 && (character === ';' || character === ',')) {
        if (current.trim()) parts.push(current.trim().replace(/\s+/g, ' '));
        current = '';
      } else current += character;
    }
    if (current.trim()) parts.push(current.trim().replace(/\s+/g, ' '));
    return parts;
  };

  const parseAbbreviations = (text) => {
    const map = new Map();
    String(text).split(/\r?\n/).forEach((line) => {
      const match = line.match(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*$/);
      if (!match) return;
      map.set(Number(match[1]), splitReportedForms(match[2]));
    });
    return map;
  };

  let technicalDataPromise;
  const loadTechnicalData = () => {
    if (technicalDataPromise) return technicalDataPromise;
    const paperParts = ['00','01','02','03','04','05a','05b','06','07','08','09','10']
      .map((part) => `../data/performance/paper-data.part${part}.txt`);
    technicalDataPromise = Promise.all([
      loadGzipJson(paperParts),
      loadGzipJson([
        '../data/performance/metric-taxonomy.json.gz.b64.part1',
        '../data/performance/metric-taxonomy.json.gz.b64.part2'
      ]),
      fetch('../data/reference-pinn-abbreviations.txt', { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Abbreviation source returned ${response.status}`);
        return response.text();
      }),
      fetch('../data/optimizers/optimizer-records.json', { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Optimizer records returned ${response.status}`);
        return response.json();
      }),
      fetch('../data/optimizers/optimizer-taxonomy.json', { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Optimizer taxonomy returned ${response.status}`);
        return response.json();
      }),
      fetch('../data/activation-functions/activation-records.json', { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Activation records returned ${response.status}`);
        return response.json();
      }),
      fetch('../data/activation-functions/activation-taxonomy.json', { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Activation taxonomy returned ${response.status}`);
        return response.json();
      })
    ]).then(([paperData, taxonomyData, abbreviationText, optimizerRecords, optimizerTaxonomy, activationRecords, activationTaxonomy]) => ({
      papers: new Map((paperData.papers || []).map((paper) => [Number(paper.paper_id), paper])),
      metrics: new Map((taxonomyData.metrics || []).map((metric) => [metric.metric_id, metric])),
      abbreviations: parseAbbreviations(abbreviationText),
      optimizerRecords: new Map((optimizerRecords.records || []).map((record) => [Number(record.paper_id), record])),
      optimizers: new Map((optimizerTaxonomy.optimizers || []).map((optimizer) => [optimizer.optimizer_id, optimizer])),
      activationRecords: new Map((activationRecords.records || []).map((record) => [Number(record.paper_id), record])),
      activations: new Map((activationTaxonomy.activations || []).map((activation) => [activation.activation_id, activation]))
    }));
    return technicalDataPromise;
  };

  const optimizersHtml = (paperId, data) => {
    const record = data.optimizerRecords.get(paperId);
    if (!record) return `<section class="technical-module"><div class="technical-module-head"><h4>Optimizers</h4><a href="../optimizers/?q=${paperId}">Open explorer ↗</a></div><p class="technical-empty">No optimizer source record is available for ${label(paperId)} in the current optimizer dataset.</p></section>`;
    const resolved = (record.normalized_optimizer_ids || []).map((optimizerId) => data.optimizers.get(optimizerId)).filter(Boolean);
    const grouped = new Map();
    resolved.forEach((optimizer) => {
      const families = [optimizer.family, ...(optimizer.secondary_tags || [])];
      families.forEach((family) => grouped.set(family, [...(grouped.get(family) || []), optimizer.optimizer_name]));
    });
    const groupsHtml = [...grouped].map(([family, names]) => `<div class="technical-group"><strong>${escapeHtml(family)}</strong><div class="technical-chips">${[...new Set(names)].map((name) => `<span>${escapeHtml(name)}</span>`).join('')}</div></div>`).join('');
    const raw = String(record.optimizer_raw || '').trim();
    const notes = (record.normalization_notes || []).join(' ');
    return `<section class="technical-module"><div class="technical-module-head"><h4>Optimizers</h4><a href="../optimizers/?q=${paperId}">Open ${label(paperId)} in explorer ↗</a></div><p><span class="technical-status">${escapeHtml(optimizerStatusLabel(record.reporting_status))}</span>${resolved.length ? ` · ${resolved.length} canonical form${resolved.length === 1 ? '' : 's'}` : ''}</p>${groupsHtml || `<p class="technical-empty">${record.reporting_status === 'not_reported' ? 'The optimizer source explicitly reports N/A; no optimizer is inferred.' : `No normalized optimizer is assigned to ${label(paperId)}.`}</p>`}${raw ? `<details class="technical-raw"><summary>Exact raw optimizer field</summary><p>${escapeHtml(raw)}</p></details>` : ''}${notes ? `<p class="technical-warning"><strong>${record.manual_review_required ? 'Manual review warning:' : 'Normalization note:'}</strong> ${escapeHtml(notes)}</p>` : ''}</section>`;
  };

  const performanceHtml = (paperId, data) => {
    const record = data.papers.get(paperId);
    if (!record) return `<section class="technical-module"><div class="technical-module-head"><h4>Performance metrics</h4><a href="../performance-metrics/?q=${paperId}">Open explorer ↗</a></div><p class="technical-empty">No paper-level performance record is present for ${label(paperId)} in the current source file.</p></section>`;
    const resolved = (record.normalized_metric_ids || []).map((metricId) => ({
      id: metricId,
      metric: data.metrics.get(metricId)
    }));
    const grouped = new Map();
    resolved.forEach(({ id, metric }) => {
      const group = metric?.metric_group || 'Source-only or pending taxonomy review';
      const name = metric?.metric_name || id.replaceAll('_', ' ');
      grouped.set(group, [...(grouped.get(group) || []), name]);
    });
    const groupsHtml = [...grouped].map(([group, names]) => `<div class="technical-group"><strong>${escapeHtml(group)}</strong><div class="technical-chips">${names.map((name) => `<span>${escapeHtml(name)}</span>`).join('')}</div></div>`).join('');
    const rawDetails = String(record.metric_details_raw || '').trim();
    return `<section class="technical-module"><div class="technical-module-head"><h4>Performance metrics</h4><a href="../performance-metrics/?q=${paperId}">Open ${label(paperId)} in explorer ↗</a></div><p><span class="technical-status">${escapeHtml(statusLabel(record.reporting_status))}</span>${resolved.length ? ` · ${resolved.length} normalized metric${resolved.length === 1 ? '' : 's'}` : ''}</p>${groupsHtml || '<p class="technical-empty">No normalized metric is assigned to this record.</p>'}${rawDetails ? `<details class="technical-raw"><summary>Original extracted metric description</summary><p>${escapeHtml(rawDetails)}</p></details>` : ''}</section>`;
  };

  const activationsHtml = (paperId, data) => {
    const record = data.activationRecords.get(paperId);
    if (!record) return `<section class="technical-module"><div class="technical-module-head"><h4>Activation functions</h4><a href="../activation-functions/?q=${paperId}">Open explorer ↗</a></div><p class="technical-empty">No activation-function source record is available for ${label(paperId)}.</p></section>`;
    const resolved = (record.normalized_activation_ids || []).map((activationId) => data.activations.get(activationId)).filter(Boolean);
    const grouped = new Map();
    resolved.forEach((activation) => grouped.set(activation.family, [...(grouped.get(activation.family) || []), activation.activation_name]));
    const groupsHtml = [...grouped].map(([family, names]) => `<div class="technical-group"><strong>${escapeHtml(family)}</strong><div class="technical-chips">${[...new Set(names)].map((name) => `<span>${escapeHtml(name)}</span>`).join('')}</div></div>`).join('');
    const roleHtml = (record.activation_roles || []).length ? `<div class="technical-group"><strong>Source-supported roles</strong><div class="technical-chips">${record.activation_roles.map((role) => `<span>${escapeHtml(activationRoleLabel(role))}</span>`).join('')}</div></div>` : '';
    const raw = String(record.activation_raw || '').trim();
    const sourceNote = String(record.notes_raw || '').trim();
    const normalizationNotes = (record.normalization_notes || []).join(' ');
    const classification = record.adaptive_classification === 'adaptive_or_trainable' ? 'Adaptive or trainable' : record.adaptive_classification === 'fixed_or_standard' ? 'Fixed or standard' : 'Not applicable';
    return `<section class="technical-module"><div class="technical-module-head"><h4>Activation functions</h4><a href="../activation-functions/?q=${paperId}">Open ${label(paperId)} in explorer ↗</a></div><p><span class="technical-status">${escapeHtml(activationStatusLabel(record.reporting_status))}</span> · ${escapeHtml(classification)}${resolved.length ? ` · ${resolved.length} canonical entr${resolved.length === 1 ? 'y' : 'ies'}` : ''}</p>${groupsHtml}${roleHtml}${!groupsHtml ? `<p class="technical-empty">${escapeHtml(sourceNote || 'No normalized activation is assigned; the source reason is retained below.')}</p>` : ''}<details class="technical-raw"><summary>Exact raw activation field and note</summary><p><strong>Field:</strong> ${escapeHtml(raw || 'N/A')}</p><p><strong>Note:</strong> ${escapeHtml(sourceNote || '(blank source note)')}</p></details>${normalizationNotes || record.manual_review_required ? `<p class="technical-warning"><strong>${record.manual_review_required ? 'Manual review warning:' : 'Normalization note:'}</strong> ${escapeHtml(normalizationNotes || 'Raw wording remains authoritative.')}</p>` : ''}</section>`;
  };

  const abbreviationsHtml = (paperId, data) => {
    const terms = data.abbreviations.get(paperId) || [];
    return `<section class="technical-module"><div class="technical-module-head"><h4>Abbreviations</h4><a href="../abbreviations/#ref=${paperId}">Open ${label(paperId)} in abbreviation index ↗</a></div>${terms.length ? `<div class="technical-chips">${terms.map((term) => `<span>${escapeHtml(term)}</span>`).join('')}</div>` : `<p class="technical-empty">No abbreviation record is available for ${label(paperId)} in the current abbreviation source.</p>`}</section>`;
  };

  const renderTechnicalDetails = async (details, paperId) => {
    if (details.dataset.loaded === 'true' || details.dataset.loading === 'true') return;
    details.dataset.loading = 'true';
    const body = details.querySelector('.nested-detail-body');
    const summaryStatus = details.querySelector('summary small');
    body.innerHTML = '<div class="technical-loading"><strong>Loading Atlas technical evidence…</strong><span>Combining paper-level records from current Atlas modules.</span></div>';
    try {
      const data = await loadTechnicalData();
      body.innerHTML = `<div class="technical-details-grid">${performanceHtml(paperId, data)}${optimizersHtml(paperId, data)}${activationsHtml(paperId, data)}${abbreviationsHtml(paperId, data)}<section class="technical-module technical-future"><h4>Future technical modules</h4><p>Architecture, sampling, software, dataset, and other technical fields can be added here as their Atlas pages and validated paper-level datasets become available.</p></section></div>`;
      const performanceCount = data.papers.get(paperId)?.normalized_metric_ids?.length || 0;
      const optimizerCount = data.optimizerRecords.get(paperId)?.normalized_optimizer_ids?.length || 0;
      const activationCount = data.activationRecords.get(paperId)?.normalized_activation_ids?.length || 0;
      const abbreviationCount = data.abbreviations.get(paperId)?.length || 0;
      summaryStatus.textContent = `${performanceCount} metrics · ${optimizerCount} optimizers · ${activationCount} activations · ${abbreviationCount} abbreviations`;
      details.dataset.loaded = 'true';
    } catch (error) {
      body.innerHTML = `<div class="detail-empty"><strong>Technical details could not be loaded.</strong><p>${escapeHtml(error.message)}</p></div>`;
      summaryStatus.textContent = 'Load failed';
    } finally {
      delete details.dataset.loading;
    }
  };

  const enhanceCard = (card) => {
    if (card.dataset.technicalEnhanced === 'true') return;
    const paperId = Number(card.dataset.bibliographyId);
    const list = card.querySelector('.nested-detail-list');
    if (!paperId || !list) return;
    const technical = document.createElement('details');
    technical.className = 'nested-reference-detail technical-reference-detail';
    technical.dataset.technicalDetail = String(paperId);
    technical.innerHTML = `<summary><span>Technical details</span><small>Metrics, optimizers, activations, abbreviations, and Supporting evidence</small></summary><div class="nested-detail-body"><div class="technical-loading"><strong>Open this panel to load technical details.</strong></div></div>`;
    list.insertBefore(technical, list.children[1] || null);
    technical.addEventListener('toggle', () => {
      if (technical.open) renderTechnicalDetails(technical, paperId);
    });
    card.dataset.technicalEnhanced = 'true';
  };

  const enhanceVisibleCards = () => results.querySelectorAll('.bibliography-card').forEach(enhanceCard);
  const observer = new MutationObserver(enhanceVisibleCards);
  observer.observe(results, { childList: true, subtree: true });
  enhanceVisibleCards();
})();
