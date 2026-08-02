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
      })
    ]).then(([paperData, taxonomyData, abbreviationText]) => ({
      papers: new Map((paperData.papers || []).map((paper) => [Number(paper.paper_id), paper])),
      metrics: new Map((taxonomyData.metrics || []).map((metric) => [metric.metric_id, metric])),
      abbreviations: parseAbbreviations(abbreviationText)
    }));
    return technicalDataPromise;
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
      body.innerHTML = `<div class="technical-details-grid">${performanceHtml(paperId, data)}${abbreviationsHtml(paperId, data)}<section class="technical-module technical-future"><h4>Future technical modules</h4><p>Optimizer, architecture, activation-function, sampling, software, dataset, and other technical fields can be added here as their Atlas pages and validated paper-level datasets become available.</p></section></div>`;
      const performanceCount = data.papers.get(paperId)?.normalized_metric_ids?.length || 0;
      const abbreviationCount = data.abbreviations.get(paperId)?.length || 0;
      summaryStatus.textContent = `${performanceCount} metrics · ${abbreviationCount} abbreviations`;
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
    technical.innerHTML = `<summary><span>Technical details</span><small>Metrics, abbreviations, and Atlas evidence</small></summary><div class="nested-detail-body"><div class="technical-loading"><strong>Open this panel to load technical details.</strong></div></div>`;
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
