(() => {
  if (document.body.dataset.framework !== 'design-performance') return;

  const DATA_URL = '../../data/frameworks/design-performance.json';
  const META_URL = '../../data/frameworks/design-performance-v2.json';
  const ICONS = '../../assets/framework-icons.svg';
  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const levelLabel = (level) => ({ major: 'Direct / major dependency', context: 'Context-dependent dependency', indirect: 'Indirect / secondary dependency' })[level] || level;
  const groupMeta = {
    representation: { code: 'I', title: 'Representation', icon: 'representation' },
    'physics-numerics': { code: 'II', title: 'Physics & Numerics', icon: 'physics' },
    training: { code: 'III', title: 'Training', icon: 'training' },
    extension: { code: 'IV', title: 'Structural Extension & Reuse', icon: 'coupling' }
  };
  const state = { data: null, meta: null, board: null, lens: 'full', rowFocus: null, outcomeFocus: null, compare: false, compareRows: new Set(), mobileMode: 'design', fullMobile: false };

  const icon = (id, label = '') => `<svg class="dp-icon" viewBox="0 0 24 24" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}><use href="${ICONS}#icon-${esc(id)}"></use></svg>`;
  const rowById = (id) => state.data.rows.find((row) => row.id === id);
  const colById = (id) => state.data.columns.find((column) => column.id === id);
  const cellById = (id) => {
    const [rowId, colId] = String(id).split(':');
    const row = rowById(rowId); const index = state.data.columns.findIndex((column) => column.id === colId);
    return row && index >= 0 ? { row, column: state.data.columns[index], cell: row.cells[index], index } : null;
  };
  const labelFor = (cell) => state.meta.label_overrides[cell.id] || cell.label;
  const tradeoffsFor = (rowId, columnId = null) => state.meta.tradeoffs.filter((item) => item.row === rowId && (!columnId || item.from === columnId || item.to === columnId));
  const evidenceScope = (row, cell) => Array.isArray(cell.evidence) && cell.evidence.length ? 'cell-specific' : Array.isArray(row.evidence) && row.evidence.length ? 'row-level synthesis' : 'unverified';

  Promise.all([fetch(DATA_URL).then((r) => r.json()), fetch(META_URL).then((r) => r.json())])
    .then(([data, meta]) => { state.data = data; state.meta = meta; state.rowFocus = data.rows[0]?.id; state.outcomeFocus = data.columns[0]?.id; waitForBoard(); })
    .catch((error) => console.error('Design–Performance workbench could not initialize.', error));

  function waitForBoard() {
    const board = document.querySelector('.matrix-board');
    if (board) return enhance(board);
    const observer = new MutationObserver(() => {
      const found = document.querySelector('.matrix-board');
      if (!found) return;
      observer.disconnect(); enhance(found);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function enhance(board) {
    state.board = board;
    board.classList.add('matrix-board-v2');
    rebuildMatrix();
    bindControls();
    bindMatrixInteractions();
    bindExportOverride();
    restoreOutcomeHash();
    applyLens();
    window.AtlasConcepts?.enhance(board);
  }

  function rebuildMatrix() {
    const groupCounts = state.data.rows.reduce((map, row) => map.set(row.group, (map.get(row.group) || 0) + 1), new Map());
    const firstIndex = new Map();
    state.data.rows.forEach((row, index) => { if (!firstIndex.has(row.group)) firstIndex.set(row.group, index); });
    const tradeoffCellIds = new Set(state.meta.tradeoffs.flatMap((item) => [`${item.row}:${item.from}`, `${item.row}:${item.to}`]));

    state.board.innerHTML = `
      <p class="matrix-principle">No design element controls a single outcome. Most PINN choices affect several performance dimensions simultaneously.</p>
      ${renderWorkbench()}
      <div class="dp-table-shell" data-dp-table-shell>
        <table class="dependency-matrix dependency-matrix-v2" aria-label="PINN Design–Performance qualitative dependency matrix">
          <colgroup><col class="dp-family-col"><col class="matrix-design-col">${state.data.columns.map(() => '<col class="dp-outcome-col">').join('')}</colgroup>
          <thead><tr>
            <th class="dp-family-head"><span>Design family</span></th>
            <th class="dp-design-head"><span>PINN design dimension</span><small>What is chosen</small></th>
            ${state.data.columns.map((column, index) => renderOutcomeHeader(column, index)).join('')}
          </tr></thead>
          <tbody>${state.data.rows.map((row, rowIndex) => {
            const gm = groupMeta[row.group];
            const familyCell = firstIndex.get(row.group) === rowIndex ? `<th class="dp-family-rail" scope="rowgroup" rowspan="${groupCounts.get(row.group)}" data-group="${row.group}">${icon(gm.icon)}<b>${gm.code}</b><span>${esc(gm.title)}</span></th>` : '';
            return `<tr class="matrix-row${firstIndex.get(row.group) === rowIndex ? ' group-start' : ''}" data-row-id="${row.id}" data-row-index="${rowIndex}" data-filter-key="${row.group}" data-search="${esc(`${row.title} ${row.detail} ${row.cells.map((cell) => `${cell.label} ${state.meta.label_overrides[cell.id] || ''}`).join(' ')}`)}">
              ${familyCell}
              <th class="dp-design-dimension" scope="row" tabindex="0" data-inspect-id="${row.id}">
                <div class="dp-row-title"><i>${row.number}</i><div><b>${esc(row.title)}</b><small>${esc(row.detail)}</small></div><button class="dp-compare-toggle" type="button" data-dp-compare-toggle="${row.id}" aria-label="Add ${esc(row.title)} to comparison" aria-pressed="false">＋</button></div>
                ${row.concepts?.length ? `<div class="dp-concept-tags">${row.concepts.map((concept) => `<button type="button" data-concept-id="${esc(concept.id)}">${esc(concept.label)}</button>`).join('')}</div>` : ''}
              </th>
              ${row.cells.map((cell, colIndex) => `<td data-row-id="${row.id}" data-col-id="${state.data.columns[colIndex].id}" data-col-index="${colIndex}"><button type="button" class="matrix-cell" data-inspect-id="${cell.id}" data-level="${cell.level}" data-evidence-scope="${evidenceScope(row, cell)}" data-row-index="${rowIndex}" data-col-index="${colIndex}" aria-label="${esc(`${row.title} to ${state.data.columns[colIndex].title}: ${levelLabel(cell.level)}, ${labelFor(cell)}`)}"><span class="influence-marker" data-level="${cell.level}" aria-hidden="true"></span><small>${esc(labelFor(cell))}</small>${tradeoffCellIds.has(cell.id) ? `<span class="dp-tradeoff-badge" title="Explicit trade-off relationship registered">↕</span>` : ''}</button></td>`).join('')}
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
      ${renderMobileView()}
      <div class="matrix-inline-legend dp-matrix-legend">
        ${state.data.legend.map((item) => `<span><i class="influence-marker" data-level="${item.id}"></i>${esc(item.label)}</span>`).join('')}
        <span><i class="dp-tradeoff-badge">↕</i>Explicit outcome-pair trade-off</span>
        <span class="dp-evidence-key"><i></i>Evidence coverage lens = documentation scope, not influence strength</span>
      </div>
      <aside class="dp-scientific-notes"><b>Scientific interpretation</b><span>Qualitative synthesis, not effect-size estimation.</span><span>Dependency strength is problem-, formulation-, and implementation-dependent.</span><span>Outcome colors identify columns; marker fill—not marker color—encodes dependency strength.</span><span>Verify performance claims with appropriate metrics and failure diagnostics.</span></aside>`;
  }

  function renderOutcomeHeader(column, index) {
    const meta = state.meta.outcomes[column.id];
    return `<th class="dp-outcome-head" data-column="${column.id}" data-col-index="${index}" data-dp-outcome="${column.id}" tabindex="0" role="button" aria-label="Inspect ${esc(column.title)}">
      <span class="dp-outcome-code">${column.code}</span>${icon(meta.icon, column.title)}<b>${esc(column.title)}</b><small>${esc(column.subtitle)}</small><em>Inspect outcome ↗</em>
    </th>`;
  }

  function renderWorkbench() {
    return `<section class="dp-workbench" aria-label="Design–Performance scientific lenses">
      <div class="dp-lens-buttons" role="group" aria-label="Matrix lens">
        <button type="button" data-dp-lens="full" class="primary">Full matrix</button>
        <button type="button" data-dp-lens="design">Design focus</button>
        <button type="button" data-dp-lens="outcome">Outcome focus</button>
        <button type="button" data-dp-lens="tradeoffs">Trade-offs</button>
        <button type="button" data-dp-lens="evidence">Evidence coverage</button>
      </div>
      <label>Design dimension<select data-dp-row-focus>${state.data.rows.map((row) => `<option value="${row.id}">${row.number} · ${esc(row.title)}</option>`).join('')}</select></label>
      <label>Performance outcome<select data-dp-outcome-focus>${state.data.columns.map((column) => `<option value="${column.id}">${column.code} · ${esc(column.title)}</option>`).join('')}</select></label>
      <button class="button" type="button" data-dp-compare aria-pressed="false">Compare dimensions</button>
      <button class="button" type="button" data-dp-clear-compare disabled>Clear comparison</button>
      <span class="dp-workbench-status" data-dp-status>Complete 14 × 7 qualitative synthesis</span>
    </section>`;
  }

  function renderMobileView() {
    return `<section class="dp-mobile-view" aria-label="Mobile Design–Performance explorer">
      <div class="dp-mobile-mode"><button type="button" class="primary" data-dp-mobile-mode="design">By design dimension</button><button type="button" data-dp-mobile-mode="outcome">By outcome</button><button type="button" data-dp-full-mobile>Open full matrix</button></div>
      <div data-dp-mobile-content></div>
    </section>`;
  }

  function bindControls() {
    state.board.querySelectorAll('[data-dp-lens]').forEach((button) => button.addEventListener('click', () => { state.lens = button.dataset.dpLens; applyLens(); }));
    state.board.querySelector('[data-dp-row-focus]').addEventListener('change', (event) => { state.rowFocus = event.target.value; if (state.lens !== 'design') state.lens = 'design'; applyLens(); scrollRowIntoView(state.rowFocus); });
    state.board.querySelector('[data-dp-outcome-focus]').addEventListener('change', (event) => { state.outcomeFocus = event.target.value; if (state.lens !== 'outcome') state.lens = 'outcome'; applyLens(); scrollColumnIntoView(state.outcomeFocus); });
    state.board.querySelector('[data-dp-compare]').addEventListener('click', () => { state.compare = !state.compare; if (!state.compare) state.compareRows.clear(); updateCompareControls(); applyLens(); });
    state.board.querySelector('[data-dp-clear-compare]').addEventListener('click', () => { state.compareRows.clear(); updateCompareControls(); applyLens(); });
    state.board.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-dp-compare-toggle]');
      if (toggle) { event.preventDefault(); event.stopPropagation(); toggleCompareRow(toggle.dataset.dpCompareToggle); return; }
      const outcome = event.target.closest('[data-dp-outcome]');
      if (outcome) { showOutcome(outcome.dataset.dpOutcome); return; }
      const inspectable = event.target.closest('.matrix-cell,.dp-design-dimension');
      if (inspectable?.dataset.inspectId) requestAnimationFrame(() => enrichInspector(inspectable.dataset.inspectId));
    });
    state.board.addEventListener('keydown', (event) => {
      const outcome = event.target.closest('[data-dp-outcome]');
      if (outcome && ['Enter', ' '].includes(event.key)) { event.preventDefault(); showOutcome(outcome.dataset.dpOutcome); return; }
      const cell = event.target.closest('.matrix-cell');
      if (cell) navigateGrid(event, cell);
    });
    state.board.querySelectorAll('[data-dp-mobile-mode]').forEach((button) => button.addEventListener('click', () => { state.mobileMode = button.dataset.dpMobileMode; refreshMobile(); }));
    state.board.querySelector('[data-dp-full-mobile]').addEventListener('click', () => { state.fullMobile = !state.fullMobile; state.board.classList.toggle('dp-force-full-mobile', state.fullMobile); refreshMobile(); });
    refreshMobile(); updateCompareControls();
  }

  function bindMatrixInteractions() {
    state.board.addEventListener('pointerover', (event) => {
      const cell = event.target.closest('.matrix-cell'); if (!cell) return;
      highlightCrosshair(Number(cell.dataset.rowIndex), Number(cell.dataset.colIndex));
    });
    state.board.addEventListener('focusin', (event) => {
      const cell = event.target.closest('.matrix-cell'); if (!cell) return;
      highlightCrosshair(Number(cell.dataset.rowIndex), Number(cell.dataset.colIndex));
    });
    state.board.addEventListener('pointerleave', clearCrosshair);
    state.board.addEventListener('focusout', (event) => { if (!state.board.contains(event.relatedTarget)) clearCrosshair(); });
  }

  function highlightCrosshair(rowIndex, colIndex) {
    clearCrosshair();
    state.board.querySelector(`.matrix-row[data-row-index="${rowIndex}"]`)?.classList.add('dp-crosshair-row');
    state.board.querySelector(`.dp-outcome-head[data-col-index="${colIndex}"]`)?.classList.add('dp-crosshair-col');
    state.board.querySelectorAll(`td[data-col-index="${colIndex}"]`).forEach((cell) => cell.classList.add('dp-crosshair-col'));
  }
  function clearCrosshair() { state.board.querySelectorAll('.dp-crosshair-row,.dp-crosshair-col').forEach((node) => node.classList.remove('dp-crosshair-row', 'dp-crosshair-col')); }

  function applyLens() {
    const rows = [...state.board.querySelectorAll('.matrix-row')];
    const cells = [...state.board.querySelectorAll('.matrix-cell')];
    rows.forEach((row) => row.classList.remove('dp-lens-muted', 'dp-compare-selected'));
    cells.forEach((cell) => cell.classList.remove('dp-lens-muted', 'dp-tradeoff-focus', 'dp-evidence-cell', 'dp-evidence-row'));
    state.board.querySelectorAll('.dp-outcome-head').forEach((head) => head.classList.remove('dp-outcome-focus'));

    if (state.lens === 'design') rows.forEach((row) => row.classList.toggle('dp-lens-muted', row.dataset.rowId !== state.rowFocus));
    if (state.lens === 'outcome') {
      const colIndex = state.data.columns.findIndex((column) => column.id === state.outcomeFocus);
      state.board.querySelector(`.dp-outcome-head[data-col-index="${colIndex}"]`)?.classList.add('dp-outcome-focus');
      cells.forEach((cell) => cell.classList.toggle('dp-lens-muted', Number(cell.dataset.colIndex) !== colIndex));
    }
    if (state.lens === 'tradeoffs') {
      const ids = new Set(state.meta.tradeoffs.flatMap((item) => [`${item.row}:${item.from}`, `${item.row}:${item.to}`]));
      cells.forEach((cell) => { const active = ids.has(cell.dataset.inspectId); cell.classList.toggle('dp-lens-muted', !active); cell.classList.toggle('dp-tradeoff-focus', active); });
    }
    if (state.lens === 'evidence') cells.forEach((cell) => cell.classList.add(cell.dataset.evidenceScope === 'cell-specific' ? 'dp-evidence-cell' : 'dp-evidence-row'));
    if (state.compare && state.compareRows.size) rows.forEach((row) => { const selected = state.compareRows.has(row.dataset.rowId); row.classList.toggle('dp-lens-muted', !selected); row.classList.toggle('dp-compare-selected', selected); });

    state.board.querySelectorAll('[data-dp-lens]').forEach((button) => { const active = button.dataset.dpLens === state.lens; button.classList.toggle('primary', active); button.setAttribute('aria-pressed', String(active)); });
    state.board.querySelector('[data-dp-row-focus]').value = state.rowFocus;
    state.board.querySelector('[data-dp-outcome-focus]').value = state.outcomeFocus;
    const status = ({ full: 'Complete 14 × 7 qualitative synthesis', design: `Design focus · ${rowById(state.rowFocus)?.title}`, outcome: `Outcome focus · ${colById(state.outcomeFocus)?.title}`, tradeoffs: `${state.meta.tradeoffs.length} explicit outcome-pair trade-offs`, evidence: 'Evidence coverage · documentation scope only' })[state.lens];
    state.board.querySelector('[data-dp-status]').textContent = state.compare && state.compareRows.size ? `${status} · comparing ${state.compareRows.size} dimensions` : status;
    refreshMobile();
  }

  function toggleCompareRow(id) {
    if (!state.compare) state.compare = true;
    if (state.compareRows.has(id)) state.compareRows.delete(id);
    else if (state.compareRows.size < 3) state.compareRows.add(id);
    else flash('Compare up to three design dimensions at once.');
    updateCompareControls(); applyLens();
  }

  function updateCompareControls() {
    const button = state.board.querySelector('[data-dp-compare]');
    button.setAttribute('aria-pressed', String(state.compare)); button.classList.toggle('primary', state.compare);
    button.textContent = state.compare ? 'Comparison active' : 'Compare dimensions';
    state.board.querySelector('[data-dp-clear-compare]').disabled = !state.compareRows.size;
    state.board.querySelectorAll('[data-dp-compare-toggle]').forEach((toggle) => {
      const selected = state.compareRows.has(toggle.dataset.dpCompareToggle);
      toggle.setAttribute('aria-pressed', String(selected)); toggle.classList.toggle('is-selected', selected); toggle.textContent = selected ? '✓' : '＋';
    });
  }

  function navigateGrid(event, cell) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let row = Number(cell.dataset.rowIndex), col = Number(cell.dataset.colIndex);
    if (event.key === 'ArrowLeft') col -= 1;
    if (event.key === 'ArrowRight') col += 1;
    if (event.key === 'ArrowUp') row -= 1;
    if (event.key === 'ArrowDown') row += 1;
    if (event.key === 'Home') col = 0;
    if (event.key === 'End') col = state.data.columns.length - 1;
    row = Math.max(0, Math.min(state.data.rows.length - 1, row)); col = Math.max(0, Math.min(state.data.columns.length - 1, col));
    state.board.querySelector(`.matrix-cell[data-row-index="${row}"][data-col-index="${col}"]`)?.focus();
  }

  function showOutcome(id) {
    const column = colById(id), meta = state.meta.outcomes[id], detail = document.querySelector('[data-detail]');
    if (!column || !meta || !detail) return;
    state.outcomeFocus = id;
    detail.innerHTML = `<div class="framework-inspector-head">${icon(meta.icon)}<div><p class="eyebrow">Performance outcome</p><h2>${column.code} · ${esc(column.title)}</h2></div></div>
      <section class="framework-inspector-section"><h3>Scientific meaning</h3><p>${esc(meta.summary)}</p><p class="dp-caution"><b>Do not infer:</b> ${esc(meta.caution)}</p></section>
      <section class="framework-inspector-section"><h3>Typical verification quantities</h3><ul>${meta.typical_metrics.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>
      <section class="framework-inspector-section"><h3>Design dependencies</h3><div class="framework-relationship-list">${state.data.rows.map((row) => { const cell = row.cells[state.data.columns.findIndex((entry) => entry.id === id)]; return `<button type="button" data-inspect-id="${cell.id}"><span>${esc(levelLabel(cell.level))}</span><b>${esc(row.title)}</b><small>${esc(labelFor(cell))}</small></button>`; }).join('')}</div></section>
      <section class="framework-inspector-section"><h3>Continue through the Atlas</h3><div class="framework-detail-links"><a class="button" href="../../performance-metrics/">Performance Metrics →</a><a class="button" href="../failure-diagnostics/">Failure Diagnostics →</a><a class="button" href="../design-stack/">Design Stack →</a><a class="button" href="../co-design/">Co-Design →</a></div></section>`;
    const url = new URL(location.href); url.hash = `outcome=${encodeURIComponent(id)}`; history.replaceState(null, '', url);
    if (state.lens === 'outcome') applyLens();
  }

  function restoreOutcomeHash() {
    const id = new URLSearchParams(location.hash.replace(/^#/, '')).get('outcome');
    if (id && state.meta.outcomes[id]) requestAnimationFrame(() => showOutcome(id));
  }

  function enrichInspector(id) {
    const record = cellById(id); if (!record) return;
    const { row, column, cell } = record; const detail = document.querySelector('[data-detail]'); if (!detail) return;
    const scope = evidenceScope(row, cell);
    const evidenceHeading = detail.querySelector('[data-inspector-section="evidence"] h3');
    if (scope === 'row-level synthesis' && evidenceHeading) evidenceHeading.textContent = 'Row-level synthesis evidence';
    const evidenceSection = detail.querySelector('[data-inspector-section="evidence"]');
    if (scope === 'row-level synthesis' && evidenceSection && !evidenceSection.querySelector('.dp-evidence-scope-note')) evidenceSection.insertAdjacentHTML('afterbegin', '<p class="dp-evidence-scope-note"><b>Evidence scope:</b> these verified references support the design dimension at row level; they are not automatically claimed as exact support for every individual cell.</p>');
    detail.querySelector('[data-dp-audit-panel]')?.remove();
    const links = state.meta.row_links[row.id] || { stack: [], codesign: [] };
    const relatedTradeoffs = tradeoffsFor(row.id, column.id);
    const levelCaveat = cell.level === 'major' ? 'Primary dependency in the synthesis; the sign and magnitude remain problem dependent.' : cell.level === 'context' ? 'Substantial in relevant regimes, but strongly dependent on problem, formulation, or implementation.' : 'Mediated through another design choice or performance outcome; do not interpret as negligible.';
    detail.insertAdjacentHTML('beforeend', `<section class="framework-inspector-section dp-audit-panel" data-dp-audit-panel><h3>Audited dependency record</h3>
      <div class="dp-audit-grid"><span><b>Mechanism</b>${esc(labelFor(cell))}</span><span><b>Influence class</b>${esc(levelLabel(cell.level))}</span><span><b>Evidence scope</b>${esc(scope)}</span></div>
      <p>${esc(levelCaveat)}</p>
      ${relatedTradeoffs.length ? `<h4>Registered trade-offs involving this outcome</h4>${relatedTradeoffs.map((item) => `<article class="dp-tradeoff-card"><b>${esc(colById(item.from).title)} ↕ ${esc(colById(item.to).title)}</b><small>${esc(item.strength)} dependency</small><p>${esc(item.summary)}</p></article>`).join('')}` : '<p class="framework-detail-empty">No explicit outcome-pair trade-off is registered for this cell.</p>'}
      <h4>Cross-framework reasoning</h4><div class="framework-detail-links">${links.stack.map((target) => `<a class="button" href="../design-stack/#item=${encodeURIComponent(target)}">Design Stack · ${esc(target.replace(/-/g, ' '))} →</a>`).join('')}${links.codesign.map((target) => `<a class="button" href="../co-design/#item=${encodeURIComponent(target)}">Co-Design · ${esc(target)} →</a>`).join('')}<a class="button" href="../failure-diagnostics/">Failure Diagnostics →</a><a class="button" href="../../performance-metrics/">Performance Metrics →</a></div>
    </section>`);
    window.AtlasConcepts?.enhance(detail);
  }

  function refreshMobile() {
    const container = state.board.querySelector('[data-dp-mobile-content]'); if (!container) return;
    state.board.querySelectorAll('[data-dp-mobile-mode]').forEach((button) => button.classList.toggle('primary', button.dataset.dpMobileMode === state.mobileMode));
    const fullButton = state.board.querySelector('[data-dp-full-mobile]'); fullButton.textContent = state.fullMobile ? 'Close full matrix' : 'Open full matrix'; fullButton.classList.toggle('primary', state.fullMobile);
    if (state.mobileMode === 'design') {
      const row = rowById(state.rowFocus) || state.data.rows[0];
      container.innerHTML = `<label>Design dimension<select data-dp-mobile-row>${state.data.rows.map((item) => `<option value="${item.id}"${item.id === row.id ? ' selected' : ''}>${item.number} · ${esc(item.title)}</option>`).join('')}</select></label><div class="dp-mobile-cards">${row.cells.map((cell, index) => mobileCard(row, state.data.columns[index], cell)).join('')}</div>`;
      container.querySelector('[data-dp-mobile-row]').addEventListener('change', (event) => { state.rowFocus = event.target.value; refreshMobile(); });
    } else {
      const column = colById(state.outcomeFocus) || state.data.columns[0]; const index = state.data.columns.findIndex((item) => item.id === column.id);
      container.innerHTML = `<label>Performance outcome<select data-dp-mobile-outcome>${state.data.columns.map((item) => `<option value="${item.id}"${item.id === column.id ? ' selected' : ''}>${item.code} · ${esc(item.title)}</option>`).join('')}</select></label><div class="dp-mobile-cards">${state.data.rows.map((row) => mobileCard(row, column, row.cells[index])).join('')}</div>`;
      container.querySelector('[data-dp-mobile-outcome]').addEventListener('change', (event) => { state.outcomeFocus = event.target.value; refreshMobile(); });
    }
  }

  function mobileCard(row, column, cell) {
    return `<button type="button" class="dp-mobile-card" data-inspect-id="${cell.id}" data-level="${cell.level}"><span>${row.number} · ${esc(row.title)}</span><b>${column.code} · ${esc(column.title)}</b><div><i class="influence-marker" data-level="${cell.level}"></i><strong>${esc(labelFor(cell))}</strong></div><small>${esc(levelLabel(cell.level))}</small></button>`;
  }

  function scrollRowIntoView(id) { state.board.querySelector(`.matrix-row[data-row-id="${CSS.escape(id)}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
  function scrollColumnIntoView(id) { state.board.querySelector(`.dp-outcome-head[data-column="${CSS.escape(id)}"]`)?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); }

  function bindExportOverride() {
    document.querySelector('[data-svg]')?.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); exportNativeSvg('current'); }, true);
    document.querySelector('[data-svg-publication]')?.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); exportNativeSvg('publication'); }, true);
  }

  function exportNativeSvg(mode) {
    const width = 2480, familyW = 170, designW = 500, colW = (width - familyW - designW - 80) / 7, margin = 40, headerY = 118, headerH = 180, rowH = 92, legendH = 220;
    const height = headerY + headerH + state.data.rows.length * rowH + legendH + 70;
    const dark = mode === 'current' && document.documentElement.dataset.theme === 'dark';
    const bg = dark ? '#0b111c' : '#ffffff', ink = dark ? '#eef4ff' : '#10213d', muted = dark ? '#aebbd0' : '#54627a', line = dark ? '#344258' : '#cdd6e5';
    const colors = { accuracy: '#1747b8', fidelity: '#14763a', trainability: '#eb5a16', cost: '#5632aa', robustness: '#087a9c', identifiability: '#263dbe', scalability: '#b8125e', representation: '#1747b8', 'physics-numerics': '#14763a', training: '#eb5a16', extension: '#5632aa' };
    const dependencyColor = dark ? '#d2d9e5' : '#344357';
    const pieces = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" data-export-mode="${mode}" data-native-vector="true"><rect width="100%" height="100%" fill="${bg}"/><style>text{font-family:Arial,Helvetica,sans-serif;fill:${ink}}.m{fill:${muted}}.b{font-weight:700}.s{font-size:18px}.xs{font-size:15px}</style>`];
    pieces.push(`<rect x="${margin + familyW}" y="28" width="${width - margin * 2 - familyW}" height="62" rx="18" fill="${bg}" stroke="#1747b8" stroke-width="2"/><text x="${width / 2}" y="68" text-anchor="middle" font-size="24" class="b">No design element controls a single outcome. Most PINN choices affect several performance dimensions simultaneously.</text>`);
    pieces.push(svgCell(margin, headerY, familyW, headerH, dark ? '#0d2b58' : '#edf4ff', line));
    pieces.push(`<text x="${margin + familyW / 2}" y="${headerY + 86}" text-anchor="middle" font-size="18" class="b">DESIGN</text><text x="${margin + familyW / 2}" y="${headerY + 112}" text-anchor="middle" font-size="18" class="b">FAMILY</text>`);
    pieces.push(svgCell(margin + familyW, headerY, designW, headerH, dark ? '#0d2b58' : '#edf4ff', line));
    pieces.push(`<text x="${margin + familyW + designW / 2}" y="${headerY + 78}" text-anchor="middle" font-size="22" class="b">PINN DESIGN DIMENSION</text><text x="${margin + familyW + designW / 2}" y="${headerY + 108}" text-anchor="middle" font-size="16" class="m">What is chosen</text>`);
    state.data.columns.forEach((column, index) => {
      const x = margin + familyW + designW + index * colW; const color = colors[column.id];
      pieces.push(svgCell(x, headerY, colW, headerH, dark ? '#121a28' : '#ffffff', color, 2));
      pieces.push(`<text x="${x + colW / 2}" y="${headerY + 34}" text-anchor="middle" font-size="18" class="b" fill="${color}">${column.code}</text>${svgWrapped(column.title.toUpperCase(), x + colW / 2, headerY + 62, Math.floor(colW / 11), 18, color, true)}${svgWrapped(column.subtitle, x + colW / 2, headerY + 124, Math.floor(colW / 10), 15, muted, false)}`);
    });
    let y = headerY + headerH;
    const groupCounts = state.data.rows.reduce((map, row) => map.set(row.group, (map.get(row.group) || 0) + 1), new Map());
    const groupStarts = new Map(); state.data.rows.forEach((row, index) => { if (!groupStarts.has(row.group)) groupStarts.set(row.group, index); });
    state.data.rows.forEach((row, rowIndex) => {
      const groupColor = colors[row.group];
      if (groupStarts.get(row.group) === rowIndex) {
        const gh = groupCounts.get(row.group) * rowH; const gm = groupMeta[row.group];
        pieces.push(svgCell(margin, y, familyW, gh, dark ? '#111926' : '#fbfcff', groupColor, 2));
        pieces.push(`<text x="${margin + familyW / 2}" y="${y + gh / 2 - 12}" text-anchor="middle" font-size="22" class="b" fill="${groupColor}">${gm.code}</text>${svgWrapped(gm.title.toUpperCase(), margin + familyW / 2, y + gh / 2 + 18, 18, 16, groupColor, true)}`);
      }
      pieces.push(svgCell(margin + familyW, y, designW, rowH, dark ? '#111926' : '#fbfcff', line));
      pieces.push(`<circle cx="${margin + familyW + 28}" cy="${y + rowH / 2}" r="15" fill="${groupColor}"/><text x="${margin + familyW + 28}" y="${y + rowH / 2 + 6}" text-anchor="middle" font-size="15" fill="#fff" class="b">${row.number}</text><text x="${margin + familyW + 55}" y="${y + 34}" font-size="18" class="b">${xml(row.title)}</text>${svgWrapped(row.detail, margin + familyW + 55, y + 56, 52, 13, muted, false, 'start')}`);
      row.cells.forEach((cell, colIndex) => {
        const column = state.data.columns[colIndex], x = margin + familyW + designW + colIndex * colW;
        const mutedCell = mode === 'current' && isCellMuted(row.id, column.id); const opacity = mutedCell ? .22 : 1;
        pieces.push(`<g opacity="${opacity}">${svgCell(x, y, colW, rowH, dark ? '#0f1622' : '#ffffff', line)}${svgMarker(x + colW / 2, y + 29, cell.level, dependencyColor)}${svgWrapped(labelFor(cell), x + colW / 2, y + 54, Math.floor(colW / 10), 14, muted, false)}${tradeoffsFor(row.id, column.id).length ? `<text x="${x + colW - 18}" y="${y + rowH / 2 + 6}" text-anchor="middle" font-size="22" fill="#c9322c" class="b">↕</text>` : ''}</g>`);
      });
      y += rowH;
    });
    pieces.push(`<line x1="${margin}" y1="${y + 28}" x2="${width - margin}" y2="${y + 28}" stroke="${line}"/><text x="${margin}" y="${y + 66}" font-size="18" class="b">QUALITATIVE INFLUENCE LEVEL</text>${svgMarker(margin + 310, y + 60, 'major', dependencyColor)}<text x="${margin + 335}" y="${y + 66}" class="s">Direct / major</text>${svgMarker(margin + 570, y + 60, 'context', dependencyColor)}<text x="${margin + 595}" y="${y + 66}" class="s">Context-dependent</text>${svgMarker(margin + 900, y + 60, 'indirect', dependencyColor)}<text x="${margin + 925}" y="${y + 66}" class="s">Indirect / secondary</text><text x="${margin + 1240}" y="${y + 66}" font-size="24" fill="#c9322c" class="b">↕</text><text x="${margin + 1270}" y="${y + 66}" class="s">Explicit outcome-pair trade-off</text>`);
    pieces.push(`<text x="${margin}" y="${y + 116}" class="xs m">NOTES · Qualitative synthesis, not effect-size estimation. Dependency strength varies by problem, formulation, and implementation.</text><text x="${margin}" y="${y + 144}" class="xs m">Marker fill, not color, encodes dependency strength; outcome colors identify columns only.</text><text x="${margin}" y="${y + 172}" class="xs m">Evidence coverage distinguishes exact cell support from row-level synthesis; it is not an influence-strength scale.</text><text x="${margin}" y="${y + 200}" class="xs m">Verify design consequences using appropriate performance metrics and failure diagnostics.</text></svg>`);
    downloadSvg(pieces.join(''), `design-performance-${mode}-view.svg`);
  }

  function isCellMuted(rowId, columnId) {
    const rowNode = state.board.querySelector(`.matrix-row[data-row-id="${CSS.escape(rowId)}"]`);
    const cellNode = state.board.querySelector(`.matrix-cell[data-inspect-id="${CSS.escape(`${rowId}:${columnId}`)}"]`);
    return rowNode?.classList.contains('dp-lens-muted') || cellNode?.classList.contains('dp-lens-muted');
  }
  function svgCell(x, y, w, h, fill, stroke, sw = 1) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; }
  function svgMarker(cx, cy, level, color) { if (level === 'major') return `<circle cx="${cx}" cy="${cy}" r="9" fill="${color}" stroke="${color}" stroke-width="2"/>`; if (level === 'context') return `<g><circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${color}" stroke-width="2"/><path d="M ${cx} ${cy - 9} A 9 9 0 0 0 ${cx} ${cy + 9} Z" fill="${color}"/></g>`; return `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${color}" stroke-width="2"/>`; }
  function svgWrapped(text, x, y, maxChars, fontSize, color, bold = false, anchor = 'middle') { const words = String(text).split(/\s+/); const lines = []; let line = ''; words.forEach((word) => { const next = line ? `${line} ${word}` : word; if (next.length > maxChars && line) { lines.push(line); line = word; } else line = next; }); if (line) lines.push(line); return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${fontSize}" fill="${color}"${bold ? ' font-weight="700"' : ''}>${lines.slice(0, 3).map((item, index) => `<tspan x="${x}" dy="${index ? fontSize * 1.22 : 0}">${xml(item)}</tspan>`).join('')}</text>`; }
  function xml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char])); }
  function downloadSvg(svg, filename) { const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1200); flash('Native-vector matrix SVG exported.'); }
  function flash(message) { let toast = document.querySelector('.framework-toast'); if (!toast) { toast = document.createElement('div'); toast.className = 'framework-toast'; document.body.append(toast); } toast.textContent = message; clearTimeout(toast.timer); toast.timer = setTimeout(() => toast.remove(), 2200); }
})();
