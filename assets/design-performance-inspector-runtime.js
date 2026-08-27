(() => {
  if (document.body.dataset.framework !== 'design-performance') return;

  const DATA_URL = '../../data/frameworks/design-performance.json';
  const META_URL = '../../data/frameworks/design-performance-v2.json';
  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const levelLabel = (level) => ({ major: 'Direct / major dependency', context: 'Context-dependent dependency', indirect: 'Indirect / secondary dependency' })[level] || level;
  let matrix = null;
  let meta = null;

  Promise.all([fetch(DATA_URL).then((response) => response.json()), fetch(META_URL).then((response) => response.json())])
    .then(([data, metadata]) => {
      matrix = data;
      meta = metadata;
      scheduleCurrent();
    })
    .catch((error) => console.error('Design–Performance inspector integrity layer could not initialize.', error));

  const recordFor = (id) => {
    if (!matrix || !meta) return null;
    const [rowId, columnId] = String(id || '').split(':');
    if (!rowId || !columnId) return null;
    const row = matrix.rows.find((item) => item.id === rowId);
    const columnIndex = matrix.columns.findIndex((item) => item.id === columnId);
    if (!row || columnIndex < 0) return null;
    return { row, column: matrix.columns[columnIndex], cell: row.cells[columnIndex] };
  };

  const labelFor = (cell) => meta?.label_overrides?.[cell.id] || cell.label;
  const tradeoffsFor = (rowId, columnId) => (meta?.tradeoffs || []).filter((item) => item.row === rowId && (item.from === columnId || item.to === columnId));
  const scopeFor = (row, cell) => Array.isArray(cell.evidence) && cell.evidence.length ? 'cell-specific' : Array.isArray(row.evidence) && row.evidence.length ? 'row-level synthesis' : 'unverified';

  function applyIntegrity(id) {
    const record = recordFor(id);
    const detail = document.querySelector('[data-detail]');
    if (!record || !detail) return;
    const { row, column, cell } = record;
    const scope = scopeFor(row, cell);
    const evidence = detail.querySelector('[data-inspector-section="evidence"]');
    if (!evidence) return;

    const heading = evidence.querySelector('h3');
    if (heading) heading.textContent = scope === 'row-level synthesis' ? 'Row-level synthesis evidence' : scope === 'cell-specific' ? 'Cell-specific supporting evidence' : 'Supporting evidence';
    if (scope === 'row-level synthesis' && !evidence.querySelector('.dp-evidence-scope-note')) {
      evidence.insertAdjacentHTML('afterbegin', '<p class="dp-evidence-scope-note"><b>Evidence scope:</b> these verified references support the design dimension at row level; they are not automatically claimed as exact support for every individual cell.</p>');
    }

    detail.querySelector('[data-dp-audit-panel]')?.remove();
    const links = meta.row_links?.[row.id] || { stack: [], codesign: [] };
    const relatedTradeoffs = tradeoffsFor(row.id, column.id);
    const caveat = cell.level === 'major'
      ? 'Primary dependency in the synthesis; the sign and magnitude remain problem dependent.'
      : cell.level === 'context'
        ? 'Substantial in relevant regimes, but strongly dependent on problem, formulation, or implementation.'
        : 'Mediated through another design choice or performance outcome; do not interpret as negligible.';

    detail.insertAdjacentHTML('beforeend', `<section class="framework-inspector-section dp-audit-panel" data-dp-audit-panel><h3>Audited dependency record</h3>
      <div class="dp-audit-grid"><span><b>Mechanism</b>${esc(labelFor(cell))}</span><span><b>Influence class</b>${esc(levelLabel(cell.level))}</span><span><b>Evidence scope</b>${esc(scope)}</span></div>
      <p>${esc(caveat)}</p>
      ${relatedTradeoffs.length ? `<h4>Registered trade-offs involving this outcome</h4>${relatedTradeoffs.map((item) => `<article class="dp-tradeoff-card"><b>${esc(matrix.columns.find((candidate) => candidate.id === item.from)?.title || item.from)} ↕ ${esc(matrix.columns.find((candidate) => candidate.id === item.to)?.title || item.to)}</b><small>${esc(item.strength)} dependency</small><p>${esc(item.summary)}</p></article>`).join('')}` : '<p class="framework-detail-empty">No explicit outcome-pair trade-off is registered for this cell.</p>'}
      <h4>Cross-framework reasoning</h4><div class="framework-detail-links">${(links.stack || []).map((target) => `<a class="button" href="../design-stack/#item=${encodeURIComponent(target)}">Design Stack · ${esc(target.replace(/-/g, ' '))} →</a>`).join('')}${(links.codesign || []).map((target) => `<a class="button" href="../co-design/#item=${encodeURIComponent(target)}">Co-Design · ${esc(target)} →</a>`).join('')}<a class="button" href="../failure-diagnostics/">Failure Diagnostics →</a><a class="button" href="../../performance-metrics/">Performance Metrics →</a></div>
    </section>`);
    window.AtlasConcepts?.enhance(detail);
  }

  function scheduleCurrent() {
    const id = new URLSearchParams(location.hash.replace(/^#/, '')).get('item');
    if (id) requestAnimationFrame(() => applyIntegrity(id));
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-inspect-id]');
    if (target) applyIntegrity(target.dataset.inspectId);
  });

  document.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    const target = event.target.closest('[data-inspect-id]');
    if (target) applyIntegrity(target.dataset.inspectId);
  });

  const detailObserver = new MutationObserver(() => scheduleCurrent());
  const startObserver = () => {
    const detail = document.querySelector('[data-detail]');
    if (detail) detailObserver.observe(detail, { childList: true });
    else requestAnimationFrame(startObserver);
  };
  startObserver();
})();
