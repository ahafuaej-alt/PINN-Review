(() => {
  if (document.body.dataset.framework !== 'design-performance') return;

  const DATA_URL = '../../data/frameworks/design-performance.json';
  const META_URL = '../../data/frameworks/design-performance-v2.json';
  let matrixData = null;
  let matrixMeta = null;
  let inspectorDataPromise = null;

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  function loadInspectorData() {
    inspectorDataPromise ||= Promise.all([
      fetch(DATA_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`design-performance.json returned ${response.status}`))),
      fetch(META_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`design-performance-v2.json returned ${response.status}`)))
    ]).then(([data, meta]) => {
      matrixData = data;
      matrixMeta = meta;
    }).catch((error) => console.error('Design–Performance outcome inspector data could not initialize.', error));
    return inspectorDataPromise;
  }

  async function restoreOutcomeInspector(id) {
    await loadInspectorData();
    const column = matrixData?.columns?.find((item) => item.id === id);
    const outcome = matrixMeta?.outcomes?.[id];
    const detail = document.querySelector('.framework-detail[data-detail]');
    if (!column || !outcome || !detail) return;

    const text = detail.innerText || '';
    if (text.includes(column.title) && text.includes('Do not infer') && text.includes('Typical verification quantities')) return;

    detail.innerHTML = `<div class="framework-inspector-head"><div><p class="eyebrow">Performance outcome</p><h2>${esc(column.code)} · ${esc(column.title)}</h2></div></div>
      <section class="framework-inspector-section"><h3>Scientific meaning</h3><p>${esc(outcome.summary)}</p><p class="dp-caution"><b>Do not infer:</b> ${esc(outcome.caution)}</p></section>
      <section class="framework-inspector-section"><h3>Typical verification quantities</h3><ul>${(outcome.typical_metrics || []).map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>
      <section class="framework-inspector-section"><h3>Design dependencies</h3><p>Select a matrix cell in this outcome column to inspect the maintained qualitative dependency, evidence scope, and registered trade-offs.</p></section>
      <section class="framework-inspector-section"><h3>Continue through the Atlas</h3><div class="framework-detail-links"><a class="button" href="../../performance-metrics/">Performance Metrics →</a><a class="button" href="../failure-diagnostics/">Failure Diagnostics →</a><a class="button" href="../design-stack/">Design Stack →</a><a class="button" href="../co-design/">Co-Design →</a></div></section>`;
    detail.dataset.dpOutcomeInspector = id;
    window.AtlasConcepts?.enhance(detail);
  }

  function bindOutcomeInspectorGuard(table) {
    if (table.dataset.dpOutcomeGuard === 'true') return;
    table.dataset.dpOutcomeGuard = 'true';
    const schedule = (target) => {
      const outcome = target?.closest?.('[data-dp-outcome]');
      if (!outcome) return;
      setTimeout(() => restoreOutcomeInspector(outcome.dataset.dpOutcome), 0);
    };
    table.addEventListener('click', (event) => schedule(event.target));
    table.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      schedule(event.target);
    });
  }

  function syncMobileFullMatrixVisibility(table) {
    const board = table.closest('.matrix-board-v2');
    const shell = table.closest('.dp-table-shell');
    if (!board || !shell) return;
    if (board.classList.contains('dp-force-full-mobile')) shell.style.setProperty('visibility', 'visible', 'important');
    else shell.style.removeProperty('visibility');
  }

  function bindMobileFullMatrixVisibility(table) {
    const board = table.closest('.matrix-board-v2');
    if (!board || board.dataset.dpMobileVisibilityBound === 'true') return;
    board.dataset.dpMobileVisibilityBound = 'true';
    board.addEventListener('click', (event) => {
      if (!event.target.closest('[data-dp-full-mobile]')) return;
      syncMobileFullMatrixVisibility(table);
    });
    syncMobileFullMatrixVisibility(table);
  }

  function applyLayoutContract() {
    const table = document.querySelector('.dependency-matrix-v2');
    if (!table || table.dataset.dpLayoutReady === 'true') return false;
    const row = table.tHead?.rows?.[0];
    const family = row?.querySelector('.dp-family-head');
    const design = row?.querySelector('.dp-design-head');
    if (!family || !design) return false;

    design.colSpan = 2;
    design.classList.add('dp-combined-head');
    design.innerHTML = '<span>PINN design dimension</span><small>Design family · what is chosen</small>';
    family.remove();
    bindOutcomeInspectorGuard(table);
    bindMobileFullMatrixVisibility(table);
    table.dataset.dpLayoutReady = 'true';
    document.documentElement.dataset.designPerformanceLayout = 'ready';
    return true;
  }

  loadInspectorData();
  if (applyLayoutContract()) return;
  const observer = new MutationObserver(() => {
    if (!applyLayoutContract()) return;
    observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
