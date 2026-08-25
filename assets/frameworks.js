(() => {
  const root = document.body.dataset.framework;
  const prefix = root === 'landing' ? '../' : '../../';
  const dataRoot = `${prefix}data/frameworks/`;
  const state = { manifest: null, page: null, objects: new Map(), zoom: 1, filter: 'all', query: '' };
  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const slug = (value = '') => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const flatten = (value) => {
    if (Array.isArray(value)) return value.map(flatten).join(' ');
    if (value && typeof value === 'object') return Object.entries(value).filter(([key]) => !['evidence'].includes(key)).map(([, item]) => flatten(item)).join(' ');
    return String(value ?? '');
  };
  const issueUrl = (type, context) => {
    const title = `[Frameworks] ${type}: ${context}`;
    const body = `Framework: ${state.page?.title || context}\nElement or relationship: ${context}\n\nRequested change:\n\nScientific rationale:\n\nSupporting DOI, URL, or verified Atlas paper IDs:`;
    return `https://github.com/ahafuaej-alt/PINN-Review/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  };

  fetch(`${dataRoot}frameworks.json`)
    .then((response) => response.ok ? response.json() : Promise.reject(new Error(`Framework manifest returned ${response.status}`)))
    .then((manifest) => {
      state.manifest = manifest;
      if (root === 'landing') return renderLanding(manifest);
      const record = manifest.frameworks.find((item) => item.id === root);
      if (!record) throw new Error('Unknown framework route.');
      return fetch(`${dataRoot}${record.data}`)
        .then((response) => response.ok ? response.json() : Promise.reject(new Error(`${record.data} returned ${response.status}`)))
        .then((page) => renderPage(page));
    })
    .catch((error) => {
      const mount = document.querySelector('[data-framework-page], [data-framework-cards]');
      if (mount) mount.innerHTML = `<p class="framework-empty">The framework data could not be loaded. ${esc(error.message)}</p>`;
    });

  function renderLanding(manifest) {
    const mount = document.querySelector('[data-framework-cards]');
    mount.innerHTML = manifest.frameworks.map((item) => `
      <a class="framework-card" href="${item.route}">
        <span class="number">${item.number} · ${esc(item.short).toUpperCase()}</span>
        <h2>${esc(item.title)}</h2><p>${esc(item.description)}</p>
        <footer><span>${esc(item.kind)}</span><b aria-hidden="true">↗</b></footer>
      </a>`).join('');
  }

  function renderPage(page) {
    state.page = page;
    buildObjectIndex(page);
    restoreUrlState(page);
    const mount = document.querySelector('[data-framework-page]');
    mount.innerHTML = `
      <section class="framework-page-hero"><div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${prefix}">Home</a><span>/</span><a href="${prefix}frameworks/">Frameworks</a><span>/</span><span>${esc(page.title)}</span></nav>
        <p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.title)}</h1><p class="lede">${esc(page.description)}</p>
      </div></section>
      <section class="section framework-live-section" data-explorer>
        <div class="container framework-live-head"><div><p class="eyebrow">Live structured framework</p><h2>${visualLabel()}</h2></div><p>Select any stage, domain, relationship, matrix cell, or diagnostic pathway to inspect its scientific meaning and cross-links.</p></div>
        ${renderToolbar(page)}
        <div class="container framework-explorer">
          <div class="framework-legend-panel" data-legend-panel hidden>${renderLegend(page)}</div>
          <div class="framework-workspace">
            <div class="framework-canvas" data-canvas tabindex="0" aria-label="Interactive ${esc(page.title)}">
              <div class="framework-zoom-surface" data-zoom-surface style="--framework-zoom:${state.zoom}">${renderVisual(page)}</div>
            </div>
            <aside class="framework-detail" data-detail aria-live="polite">
              <p class="eyebrow">Interactive explorer</p><h2>Choose an object</h2>
              <p>${defaultInspectorText()}</p>
              <div class="detail-hint"><span>Search</span><span>Filter</span><span>Select</span><span>Verify</span></div>
            </aside>
          </div>
        </div>
      </section>
      <section class="section framework-reading"><div class="container framework-reading-grid">
        <article><p class="eyebrow">What this framework represents</p><h2>Scientific purpose</h2><p>${esc(page.represents)}</p></article>
        <article><p class="eyebrow">Scientific interpretation & scope</p><h2>How to read it</h2><p>${esc(page.interpretation)}</p></article>
      </div></section>
      ${renderEvidenceSection(page)}
      <section class="section"><div class="container">
        <div class="section-head"><div><p class="eyebrow">Cross-linked Atlas concepts</p><h2>Continue through<br>the evidence system</h2></div><p>Framework objects point to canonical Atlas concepts rather than creating independent duplicate definitions.</p></div>
        <div class="framework-related atlas-tools">${renderAtlasTools()}</div>
      </div></section>
      <section class="section framework-related-section"><div class="container">
        <div class="section-head"><div><p class="eyebrow">Related frameworks</p><h2>Change the<br>scientific view</h2></div><p>Move from design sequence to interaction, consequence, or failure-oriented reasoning without losing the selected concept.</p></div>
        <div class="framework-related">${renderRelatedFrameworks()}</div>
      </div></section>
      <section class="section"><div class="container"><aside class="living-framework">
        <div><p class="eyebrow">Living scientific framework</p><h2>Correct, extend, and document</h2><p>Proposals remain public and reviewable before the maintained taxonomy or relationship set changes.</p></div>
        <div class="living-actions"><a class="button primary" href="${issueUrl('Suggest an edit', page.title)}" target="_blank" rel="noopener">Suggest an edit ↗</a><a class="button" href="${issueUrl('Propose a missing item', page.title)}" target="_blank" rel="noopener">Propose missing item ↗</a><a class="button" href="${issueUrl('Propose a missing relationship', page.title)}" target="_blank" rel="noopener">Propose relationship ↗</a></div>
      </aside></div></section>`;
    bindInteractive(page);
  }

  function visualLabel() {
    return ({
      'design-stack': 'Complete design flow and redesign loops',
      'co-design': 'Coupled co-design systems map',
      'design-performance': 'Complete 14 × 7 dependency matrix',
      'failure-diagnostics': 'Thirteen challenge-to-improvement pathways'
    })[root];
  }

  function defaultInspectorText() {
    return ({
      'design-stack': 'Select a phase, design stage, forward dependency, or evaluation feedback loop.',
      'co-design': 'Select the central formulation, a co-design domain, or a labelled coupling.',
      'design-performance': 'Select a design row or any of the 98 dependency cells.',
      'failure-diagnostics': 'Select a category, failure mode, or the verification loop.'
    })[root];
  }

  function renderToolbar(page) {
    return `<div class="framework-toolbar"><div class="container framework-toolbar-inner">
      <label class="toolbar-search"><span class="sr-only">Search this framework</span><input class="framework-search" type="search" value="${esc(state.query)}" placeholder="Search every element and relationship…" aria-label="Search this framework"></label>
      <label class="toolbar-filter"><span class="sr-only">Filter framework</span><select data-filter aria-label="Filter framework">${page.filters.map((filter) => `<option value="${filter.id}"${state.filter === filter.id ? ' selected' : ''}>${esc(filter.label)}</option>`).join('')}</select></label>
      <button class="button compact" type="button" data-zoom-out aria-label="Zoom out">−</button>
      <span class="zoom-readout" data-zoom-readout>${Math.round(state.zoom * 100)}%</span>
      <button class="button compact" type="button" data-zoom-in aria-label="Zoom in">+</button>
      <button class="button" type="button" data-fit>Fit</button>
      <button class="button" type="button" data-expand>Expand view</button>
      <button class="button" type="button" data-legend aria-expanded="false">Legend</button>
      <button class="button" type="button" data-share>Copy shareable link</button>
      <button class="button" type="button" data-svg>Download current SVG</button>
      <details class="toolbar-contribute"><summary class="button">Contribute</summary><div><a href="${issueUrl('Suggest an edit', page.title)}" target="_blank" rel="noopener">Suggest an edit ↗</a><a href="${issueUrl('Propose a missing item', page.title)}" target="_blank" rel="noopener">Missing item ↗</a><a href="${issueUrl('Propose a missing relationship', page.title)}" target="_blank" rel="noopener">Missing relationship ↗</a></div></details>
    </div></div>`;
  }

  function renderLegend(page) {
    if (root === 'design-performance') return `<div class="legend-title"><strong>Qualitative influence level</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div><div class="legend-items">${page.legend.map((item) => `<article><span class="influence-marker" data-level="${item.id}" aria-hidden="true"></span><div><b>${esc(item.label)}</b><p>${esc(item.description)}</p></div></article>`).join('')}<article><span class="tradeoff-symbol" aria-hidden="true">↕</span><div><b>Trade-off indicator</b><p>Improvement in one dimension may increase cost or reduce another.</p></div></article></div>`;
    if (root === 'failure-diagnostics') return `<div class="legend-title"><strong>Diagnostic reasoning path</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div><div class="legend-path"><span>1 · Challenge / pathology</span><i>→</i><span>2 · Observable symptoms</span><i>→</i><span>3 · Methodological response</span><i>→</i><span>4 · Targeted improvement</span><i>↻</i><span>Verify and re-diagnose</span></div>`;
    const items = root === 'design-stack'
      ? [['flow', 'Main design flow', 'Typical forward design sequence'], ['coupling', 'Strong interdependence', 'Coupled phases and design choices'], ['feedback', 'Feedback / redesign loop', 'Evaluation-guided return to an upstream cause']]
      : [['coupling', 'Coupled relationship', 'A labelled scientific dependency between domains'], ['feedback', 'Verification feedback', 'A reliability outcome that prompts redesign'], ['selected', 'Selected relationship', 'Highlighted source, target, and scientific interpretation']];
    return `<div class="legend-title"><strong>Relationship legend</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div><div class="legend-items">${items.map(([type, title, text]) => `<article><span class="relation-swatch" data-type="${type}" aria-hidden="true"></span><div><b>${title}</b><p>${text}</p></div></article>`).join('')}</div>`;
  }

  function renderVisual(page) {
    if (root === 'design-stack') return renderDesignStack(page);
    if (root === 'co-design') return renderCoDesign(page);
    if (root === 'design-performance') return renderMatrix(page);
    return renderDiagnostics(page);
  }

  function renderDesignStack(page) {
    const phases = page.phases.map((phase) => {
      const stages = phase.stage_ids.map((id) => page.stages.find((stage) => stage.id === id));
      return `<section class="stack-phase" data-filter-key="${phase.id}" data-search="${esc(flatten({ phase, stages }))}">
        <button class="stack-phase-rail" type="button" data-inspect-id="phase:${phase.id}"><b>${phase.roman}</b><span>${esc(phase.title)}</span><small>${esc(phase.summary)}</small><i aria-hidden="true">↕</i></button>
        <div class="stack-stage-list">${stages.map((stage) => renderStackStage(stage)).join('')}</div>
      </section>`;
    }).join('');
    return `<div class="stack-board relation-board" data-relation-board>
      <svg class="relation-layer" data-relation-layer aria-label="Design flow and feedback relationships"></svg>
      <div class="stack-content">${phases}</div>
      <aside class="stack-feedback-notes" aria-label="Evaluation feedback families">
        <strong>Evaluation-guided redesign</strong>
        <span data-targets="physical-problem,computational-role">Redefine the problem or role</span>
        <span data-targets="inputs-outputs,representation">Change outputs or architecture</span>
        <span data-targets="physics-enforcement,differentiation">Reformulate physics or differentiation</span>
        <span data-targets="sampling,loss">Resample or rebalance the loss</span>
        <span data-targets="optimization">Adjust optimizer, LR, initialization, or strategy</span>
      </aside>
      <div class="stack-bottom-legend"><span><i class="flow-line"></i>Main design flow</span><span><i class="coupling-line"></i>Strong interdependence</span><span><i class="feedback-line"></i>Feedback / redesign loops</span></div>
    </div>`;
  }

  function renderStackStage(stage) {
    return `<article class="stack-stage framework-object" tabindex="0" data-node-id="${stage.id}" data-inspect-id="${stage.id}" data-search="${esc(flatten(stage))}">
      <header><span>${stage.number}</span><div><h3>${esc(stage.title)}</h3><p>${esc(stage.subtitle)}</p></div></header>
      <div class="stack-stage-columns">${stage.columns.map((column) => `<section><b>${esc(column.title)}</b><ul>${column.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>`).join('')}</div>
    </article>`;
  }

  function renderCoDesign(page) {
    const domains = page.domains.map((domain) => `<article class="co-domain co-${domain.position}" tabindex="0" data-node-id="${domain.id}" data-inspect-id="${domain.id}" data-filter-key="${domain.id}" data-search="${esc(flatten(domain))}">
      <header><span>${domain.number}</span><h3>${esc(domain.title)}</h3></header>
      <div class="co-panels">${domain.panels.map((panel) => `<section><b>${esc(panel.title)}</b><ul>${panel.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>`).join('')}</div>
    </article>`).join('');
    const feedback = page.relationships.filter((item) => item.type === 'feedback');
    return `<div class="co-board relation-board" data-relation-board>
      <svg class="relation-layer" data-relation-layer aria-label="Labelled co-design relationships"></svg>
      ${domains}
      <button class="co-core" type="button" data-node-id="core" data-inspect-id="core" data-search="${esc(flatten(page.core))}">
        <small>${esc(page.core.subtitle)}</small><strong>${esc(page.core.title)}</strong><span>${page.core.outcomes.map((item) => `<i>✓ ${esc(item)}</i>`).join('')}</span>
      </button>
      <aside class="co-feedback-ledger"><b>Verification-driven redesign</b>${feedback.map((item) => `<button type="button" data-inspect-id="${item.id}">${esc(item.label)}</button>`).join('')}</aside>
    </div>`;
  }

  function renderMatrix(page) {
    const groupNames = Object.fromEntries(page.filters.filter((item) => item.id !== 'all').map((item) => [item.id, item.label]));
    return `<div class="matrix-board">
      <p class="matrix-principle">No design element controls a single outcome. Most PINN choices affect several performance dimensions simultaneously.</p>
      <table class="dependency-matrix">
        <colgroup><col class="matrix-design-col">${page.columns.map(() => '<col>').join('')}</colgroup>
        <thead><tr><th><span>PINN design dimension</span><small>What is chosen</small></th>${page.columns.map((column) => `<th data-column="${column.id}"><b>${column.code} · ${esc(column.title)}</b><small>${esc(column.subtitle)}</small></th>`).join('')}</tr></thead>
        <tbody>${page.rows.map((row, index) => {
          const groupStart = index === 0 || page.rows[index - 1].group !== row.group;
          return `<tr class="matrix-row${groupStart ? ' group-start' : ''}" data-filter-key="${row.group}" data-search="${esc(flatten(row))}">
            <th scope="row" tabindex="0" data-inspect-id="${row.id}">${groupStart ? `<small class="matrix-group">${esc(groupNames[row.group])}</small>` : ''}<span><i>${row.number}</i><b>${esc(row.title)}</b></span><small>${esc(row.detail)}</small></th>
            ${row.cells.map((cell, columnIndex) => `<td><button type="button" class="matrix-cell" data-inspect-id="${cell.id}" data-level="${cell.level}" title="${esc(`${row.title} → ${page.columns[columnIndex].title}: ${cell.label}`)}"><span class="influence-marker" data-level="${cell.level}" aria-hidden="true"></span><small>${esc(cell.label)}</small>${row.tradeoff && columnIndex === 2 ? '<i class="tradeoff-symbol" title="Potential trade-off">↕</i>' : ''}</button></td>`).join('')}
          </tr>`;
        }).join('')}</tbody>
      </table>
      <div class="matrix-inline-legend">${page.legend.map((item) => `<span><i class="influence-marker" data-level="${item.id}"></i>${esc(item.label)}</span>`).join('')}<span><i class="tradeoff-symbol">↕</i>Potential trade-off</span></div>
    </div>`;
  }

  function renderDiagnostics(page) {
    return `<div class="diagnostic-board">
      <div class="diagnostic-head"><span>Category</span><b>1 · Challenge / pathology<small>Why it happens</small></b><b>2 · Observable symptoms<small>How it appears</small></b><b>3 · Methodological response<small>What to try</small></b><b>4 · Targeted improvement<small>What it improves</small></b></div>
      ${page.categories.map((category) => {
        const modes = category.mode_ids.map((id) => page.modes.find((mode) => mode.id === id));
        return `<section class="diagnostic-category diagnostic-${category.id}" data-filter-key="${category.id}" data-search="${esc(flatten({ category, modes }))}">
          <button type="button" class="diagnostic-category-rail" data-inspect-id="category:${category.id}"><b>${category.code}</b><strong>${esc(category.title)}</strong><small>${esc(category.summary)}</small></button>
          <div class="diagnostic-rows">${modes.map((mode) => `<article class="diagnostic-row" data-mode="${mode.id}" data-search="${esc(flatten(mode))}">
            <button type="button" class="diagnostic-cell diagnostic-challenge" data-inspect-id="${mode.id}"><span>${mode.number}</span><strong>${esc(mode.title)}</strong></button>
            <button type="button" class="diagnostic-cell" data-inspect-id="${mode.id}"><ul>${mode.symptoms.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></button>
            <button type="button" class="diagnostic-cell" data-inspect-id="${mode.id}"><ul>${mode.responses.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></button>
            <button type="button" class="diagnostic-cell diagnostic-improvement" data-inspect-id="${mode.id}"><strong>${esc(mode.improvement)}</strong></button>
          </article>`).join('')}</div>
        </section>`;
      }).join('')}
      <aside class="diagnostic-verify" tabindex="0" data-inspect-id="verify"><div><span aria-hidden="true">↻</span><b>${esc(page.verification.title)}</b><p>${esc(page.verification.instruction)}</p></div><ul>${page.verification.criteria.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></aside>
      <p class="diagnostic-rule"><b>Diagnose first, then respond:</b> identify the dominant failure mode from symptoms, select a targeted response, and verify improvement with appropriate evaluation criteria.</p>
    </div>`;
  }

  function buildObjectIndex(page) {
    state.objects.clear();
    if (root === 'design-stack') {
      page.phases.forEach((phase) => state.objects.set(`phase:${phase.id}`, { ...phase, kind: 'phase' }));
      page.stages.forEach((item) => state.objects.set(item.id, { ...item, kind: 'stage' }));
      page.relationships.forEach((item) => state.objects.set(item.id, { ...item, kind: 'relationship' }));
    } else if (root === 'co-design') {
      state.objects.set('core', { ...page.core, kind: 'core' });
      page.domains.forEach((item) => state.objects.set(item.id, { ...item, kind: 'domain' }));
      page.relationships.forEach((item) => state.objects.set(item.id, { ...item, kind: 'relationship' }));
    } else if (root === 'design-performance') {
      page.rows.forEach((row) => {
        state.objects.set(row.id, { ...row, kind: 'matrix-row' });
        row.cells.forEach((cell, index) => state.objects.set(cell.id, { ...cell, kind: 'matrix-cell', row, column: page.columns[index], evidence: cell.evidence || row.evidence || [] }));
      });
    } else {
      page.categories.forEach((item) => state.objects.set(`category:${item.id}`, { ...item, kind: 'diagnostic-category' }));
      page.modes.forEach((item) => state.objects.set(item.id, { ...item, kind: 'failure-mode' }));
      state.objects.set('verify', { ...page.verification, kind: 'verification' });
    }
  }

  function bindInteractive(page) {
    const explorer = document.querySelector('[data-explorer]');
    const canvas = document.querySelector('[data-canvas]');
    const search = document.querySelector('.framework-search');
    const filter = document.querySelector('[data-filter]');
    search.value = state.query;
    filter.value = state.filter;
    explorer.addEventListener('click', (event) => {
      const inspectable = event.target.closest('[data-inspect-id]');
      if (inspectable) showDetail(inspectable.dataset.inspectId);
    });
    explorer.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      const inspectable = event.target.closest('[data-inspect-id]');
      if (!inspectable) return;
      event.preventDefault(); showDetail(inspectable.dataset.inspectId);
    });
    search.addEventListener('input', () => { state.query = search.value.trim(); applyVisibility(); syncUrlState(); });
    filter.addEventListener('change', () => { state.filter = filter.value; applyVisibility(); syncUrlState(); });
    document.querySelector('[data-zoom-in]').addEventListener('click', () => setZoom(state.zoom + 0.15));
    document.querySelector('[data-zoom-out]').addEventListener('click', () => setZoom(state.zoom - 0.15));
    document.querySelector('[data-fit]').addEventListener('click', () => { setZoom(1); canvas.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); });
    document.querySelector('[data-expand]').addEventListener('click', toggleExpanded);
    document.querySelector('[data-legend]').addEventListener('click', toggleLegend);
    document.querySelector('[data-close-legend]').addEventListener('click', toggleLegend);
    document.querySelector('[data-share]').addEventListener('click', copyShareLink);
    document.querySelector('[data-svg]').addEventListener('click', downloadCurrentSvg);
    applyVisibility(); setZoom(state.zoom, false);
    requestAnimationFrame(() => { drawRelations(); restoreSelectedItem(); });
    if ('ResizeObserver' in window) new ResizeObserver(() => drawRelations()).observe(document.querySelector('[data-relation-board]') || canvas);
    window.addEventListener('resize', drawRelations, { passive: true });
  }

  function restoreUrlState(page) {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    state.filter = page.filters.some((item) => item.id === filter) ? filter : 'all';
    state.query = params.get('q') || '';
    const zoomParam = params.get('zoom');
    const zoom = zoomParam === null || zoomParam.trim() === '' ? Number.NaN : Number(zoomParam);
    state.zoom = Number.isFinite(zoom) ? Math.min(2.2, Math.max(0.75, zoom)) : 1;
  }

  function restoreSelectedItem() {
    const id = new URLSearchParams(location.hash.replace(/^#/, '')).get('item');
    if (id && state.objects.has(id)) showDetail(id, false);
  }

  function setZoom(value, updateUrl = true) {
    state.zoom = Math.round(Math.min(2.2, Math.max(0.75, value)) * 100) / 100;
    document.querySelector('[data-zoom-surface]').style.setProperty('--framework-zoom', state.zoom);
    document.querySelector('[data-zoom-readout]').textContent = `${Math.round(state.zoom * 100)}%`;
    if (updateUrl) syncUrlState();
    requestAnimationFrame(drawRelations);
  }

  function toggleExpanded() {
    const explorer = document.querySelector('[data-explorer]');
    const expanded = explorer.classList.toggle('is-expanded');
    document.body.classList.toggle('framework-expanded', expanded);
    document.querySelector('[data-expand]').textContent = expanded ? 'Close expanded view' : 'Expand view';
    requestAnimationFrame(drawRelations);
  }

  function toggleLegend() {
    const panel = document.querySelector('[data-legend-panel]');
    panel.hidden = !panel.hidden;
    document.querySelector('[data-legend]').setAttribute('aria-expanded', String(!panel.hidden));
  }

  function applyVisibility() {
    const query = state.query.toLowerCase();
    document.querySelectorAll('[data-filter-key]').forEach((node) => {
      const filterMatch = state.filter === 'all' || node.dataset.filterKey === state.filter;
      node.hidden = !filterMatch;
    });
    const searchable = root === 'design-performance' ? '.matrix-row' : root === 'failure-diagnostics' ? '.diagnostic-row' : root === 'design-stack' ? '.stack-stage' : '.co-domain, .co-core';
    document.querySelectorAll(searchable).forEach((node) => {
      const matches = !query || (node.dataset.search || node.textContent).toLowerCase().includes(query);
      node.classList.toggle('is-search-muted', !matches);
    });
    requestAnimationFrame(drawRelations);
  }

  function syncUrlState() {
    const url = new URL(location.href);
    state.filter === 'all' ? url.searchParams.delete('filter') : url.searchParams.set('filter', state.filter);
    state.query ? url.searchParams.set('q', state.query) : url.searchParams.delete('q');
    state.zoom === 1 ? url.searchParams.delete('zoom') : url.searchParams.set('zoom', state.zoom.toFixed(2));
    history.replaceState(null, '', url);
  }

  function showDetail(id, updateHistory = true) {
    const item = state.objects.get(id);
    if (!item) return;
    document.querySelectorAll('[data-inspect-id]').forEach((node) => {
      node.classList.toggle('is-active', node.dataset.inspectId === id);
      node.classList.remove('is-related');
    });
    if (item.kind === 'relationship') {
      document.querySelectorAll('[data-node-id]').forEach((node) => node.classList.toggle('is-related', [item.from, item.to].includes(node.dataset.nodeId)));
    }
    document.querySelector('[data-detail]').innerHTML = renderDetail(item);
    if (updateHistory) {
      const url = new URL(location.href); url.hash = `item=${encodeURIComponent(id)}`; history.replaceState(null, '', url);
    }
  }

  function renderDetail(item) {
    let body = `<p>${esc(item.summary || item.detail || item.instruction || '')}</p>`;
    if (item.kind === 'stage') body += renderColumnDetails(item.columns);
    if (item.kind === 'domain') body += renderPanelDetails(item.panels);
    if (item.kind === 'core') body += `<h3>Co-design outcomes</h3>${renderList(item.outcomes)}`;
    if (item.kind === 'relationship') body += `<div class="relationship-route"><span>${esc(objectTitle(item.from))}</span><i>→</i><span>${esc(objectTitle(item.to))}</span></div>`;
    if (item.kind === 'matrix-row') body += `<h3>Dependency profile</h3>${renderList(item.cells.map((cell, index) => `${state.page.columns[index].title}: ${cell.label} (${levelLabel(cell.level)})`))}`;
    if (item.kind === 'matrix-cell') body += `<div class="matrix-detail"><span class="influence-marker" data-level="${item.level}"></span><div><b>${esc(levelLabel(item.level))}</b><p>${esc(item.row.title)} influences ${esc(item.column.title)} through <strong>${esc(item.label)}</strong>.</p>${item.row.tradeoff ? '<p class="tradeoff-note">↕ This design row carries a problem-dependent trade-off indicator.</p>' : ''}</div></div>`;
    if (item.kind === 'failure-mode') body += `<h3>Observable symptoms</h3>${renderList(item.symptoms)}<h3>Methodological responses</h3>${renderList(item.responses)}<h3>Targeted improvement</h3><p class="target-improvement">${esc(item.improvement)}</p>`;
    if (item.kind === 'verification') body += `<h3>Evaluation criteria</h3>${renderList(item.criteria)}`;
    const title = item.kind === 'relationship' ? item.label : item.kind === 'matrix-cell' ? `${item.row.title} → ${item.column.title}` : item.title;
    return `<p class="eyebrow">${esc(kindLabel(item.kind))}</p><h2>${esc(title)}</h2>${body}${renderEvidence(item.evidence || item.row?.evidence || [])}${renderConceptLinks(item.concepts || item.row?.concepts || [])}${renderRelatedLinks(item.related_frameworks || [])}<div class="detail-actions"><a class="button" href="${issueUrl('Suggest a framework correction', title)}" target="_blank" rel="noopener">Suggest correction ↗</a>${root === 'failure-diagnostics' && item.kind === 'failure-mode' ? `<a class="button" href="${issueUrl('Propose a missing response', title)}" target="_blank" rel="noopener">Missing response ↗</a>` : ''}</div>`;
  }

  function renderColumnDetails(columns = []) { return `<div class="detail-columns">${columns.map((column) => `<section><h3>${esc(column.title)}</h3>${renderList(column.items)}</section>`).join('')}</div>`; }
  function renderPanelDetails(panels = []) { return `<div class="detail-columns">${panels.map((panel) => `<section><h3>${esc(panel.title)}</h3>${renderList(panel.items)}</section>`).join('')}</div>`; }
  function renderList(items = []) { return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`; }
  function kindLabel(kind) { return ({ phase: 'Design phase', stage: 'Design stage', relationship: 'Scientific relationship', core: 'Central co-design formulation', domain: 'Co-design domain', 'matrix-row': 'Design dimension', 'matrix-cell': 'Design–performance dependency', 'diagnostic-category': 'Diagnostic category', 'failure-mode': 'Failure-mode pathway', verification: 'Verification loop' })[kind] || 'Framework object'; }
  function levelLabel(level) { return ({ major: 'Direct / major dependency', context: 'Context-dependent dependency', indirect: 'Indirect / secondary dependency' })[level] || level; }
  function objectTitle(id) { const item = state.objects.get(id); return item?.title || id; }

  function renderEvidence(evidence) {
    if (!evidence.length) return `<section class="detail-evidence"><h3>Supporting Atlas evidence</h3><p class="evidence-pending">No claim-level paper is displayed until its canonical Atlas record and relevance to this claim have been verified.</p></section>`;
    return `<section class="detail-evidence"><h3>Supporting Atlas evidence</h3>${evidence.map((entry) => `<article><a href="${prefix}references/#ref=${entry.atlas_id}">Atlas [${entry.atlas_id}]</a><span>${esc(entry.support || 'Supporting')}</span><p>${esc(entry.rationale || '')}</p></article>`).join('')}</section>`;
  }

  function renderConceptLinks(concepts) {
    if (!concepts.length) return '';
    return `<section><h3>Canonical Atlas concepts</h3><div class="framework-detail-links">${concepts.map((concept) => `<a class="button primary" href="${prefix}${concept.route}">${esc(concept.label)} →</a>`).join('')}</div></section>`;
  }

  function renderRelatedLinks(references) {
    if (!references.length) return '';
    return `<section><h3>Related framework objects</h3><div class="framework-detail-links">${references.map((reference) => {
      const [frameworkId, itemId] = reference.split(':');
      const framework = state.manifest.frameworks.find((entry) => entry.id === frameworkId);
      if (!framework) return '';
      const href = `${prefix}frameworks/${framework.route}${itemId ? `#item=${encodeURIComponent(itemId)}` : ''}`;
      return `<a class="button" href="${href}">${esc(framework.title)}${itemId ? ` · ${esc(itemId.replace(/-/g, ' '))}` : ''} →</a>`;
    }).join('')}</div></section>`;
  }

  function collectEvidence(value, found = new Map()) {
    if (Array.isArray(value)) value.forEach((item) => collectEvidence(item, found));
    else if (value && typeof value === 'object') {
      if (Number.isInteger(value.atlas_id)) found.set(value.atlas_id, value);
      Object.values(value).forEach((item) => collectEvidence(item, found));
    }
    return found;
  }

  function renderEvidenceSection(page) {
    const evidence = [...collectEvidence(page).values()];
    return `<section class="section framework-evidence-section"><div class="container">
      <div class="section-head"><div><p class="eyebrow">Evidence & supporting papers</p><h2>Claim-level<br>support</h2></div><p>Supporting papers use canonical Atlas IDs and are separately rechecked against the exact framework claim.</p></div>
      <div class="evidence-summary"><div><strong>${evidence.length}</strong><span>verified Atlas papers currently linked</span></div><p>${esc(state.manifest.evidence_status)}</p></div>
      ${evidence.length ? `<div class="evidence-paper-grid">${evidence.map((entry) => `<a href="${prefix}references/#ref=${entry.atlas_id}"><b>Atlas [${entry.atlas_id}]</b><span>${esc(entry.support || 'Supporting')} support</span><small>${esc(entry.rationale || '')}</small></a>`).join('')}</div>` : '<p class="framework-caveat"><strong>Evidence gate:</strong> unverified placeholder IDs are never displayed.</p>'}
    </div></section>`;
  }

  function renderAtlasTools() {
    return [
      ['DESIGN SYSTEM', 'PINN Ecosystem', 'pinn-ecosystem/'], ['FORMULATIONS', 'Mathematical Formulations', 'mathematical-formulations/'], ['METHODS', 'Architectures', 'architectures/'], ['TRAINING', 'Training', 'training/'], ['OPTIMIZATION', 'Optimizers', 'optimizers/'], ['EVALUATION', 'Performance Metrics', 'performance-metrics/']
    ].map(([type, title, route]) => `<a href="${prefix}${route}"><small>${type}</small><strong>${title}</strong></a>`).join('');
  }

  function renderRelatedFrameworks() {
    return state.manifest.frameworks.filter((item) => item.id !== root).map((item) => `<a href="${prefix}frameworks/${item.route}"><small>${item.number} · ${esc(item.kind)}</small><strong>${esc(item.title)}</strong></a>`).join('');
  }

  function drawRelations() {
    if (!['design-stack', 'co-design'].includes(root)) return;
    const board = document.querySelector('[data-relation-board]');
    const layer = document.querySelector('[data-relation-layer]');
    if (!board || !layer) return;
    const width = board.scrollWidth, height = board.scrollHeight;
    layer.setAttribute('viewBox', `0 0 ${width} ${height}`);
    layer.setAttribute('width', width); layer.setAttribute('height', height);
    layer.innerHTML = `<defs><marker id="framework-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z"></path></marker><marker id="framework-arrow-feedback" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z"></path></marker></defs>`;
    const rect = board.getBoundingClientRect();
    const scaleX = width / rect.width, scaleY = height / rect.height;
    const box = (id) => {
      const node = board.querySelector(`[data-node-id="${id}"]`);
      if (!node || node.hidden || node.closest('[hidden]')) return null;
      const bounds = node.getBoundingClientRect();
      return { left: (bounds.left - rect.left) * scaleX, right: (bounds.right - rect.left) * scaleX, top: (bounds.top - rect.top) * scaleY, bottom: (bounds.bottom - rect.top) * scaleY, width: bounds.width * scaleX, height: bounds.height * scaleY };
    };
    state.page.relationships.forEach((relation, index) => {
      const source = box(relation.from), target = box(relation.to);
      if (!source || !target) return;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', `relation-path relation-${relation.type}`);
      path.setAttribute('data-inspect-id', relation.id); path.setAttribute('tabindex', '0');
      path.setAttribute('marker-end', relation.type === 'feedback' ? 'url(#framework-arrow-feedback)' : 'url(#framework-arrow)');
      path.setAttribute('d', relationPath(source, target, relation, width, index));
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title'); title.textContent = relation.label; path.append(title); layer.append(path);
      if (root === 'co-design' && relation.type === 'coupling') drawRelationCaption(layer, source, target, relation, index);
    });
  }

  function relationPath(source, target, relation, width, index) {
    if (root === 'design-stack') {
      if (relation.type === 'flow') {
        const sx = source.left + source.width / 2, sy = source.bottom, tx = target.left + target.width / 2, ty = target.top;
        const middle = (sy + ty) / 2; return `M ${sx} ${sy} C ${sx} ${middle}, ${tx} ${middle}, ${tx} ${ty}`;
      }
      const sx = source.right, sy = source.top + source.height / 2, tx = target.right, ty = target.top + target.height / 2;
      const rail = width - 18 - (index % 3) * 8; return `M ${sx} ${sy} C ${rail} ${sy}, ${rail} ${ty}, ${tx} ${ty}`;
    }
    const scx = source.left + source.width / 2, scy = source.top + source.height / 2, tcx = target.left + target.width / 2, tcy = target.top + target.height / 2;
    const dx = tcx - scx, dy = tcy - scy;
    let sx = scx, sy = scy, tx = tcx, ty = tcy;
    if (Math.abs(dx) > Math.abs(dy)) { sx += Math.sign(dx) * source.width / 2; tx -= Math.sign(dx) * target.width / 2; }
    else { sy += Math.sign(dy) * source.height / 2; ty -= Math.sign(dy) * target.height / 2; }
    const bend = relation.type === 'feedback' ? 52 + (index % 4) * 14 : 18 + (index % 3) * 8;
    if (Math.abs(dx) > Math.abs(dy)) return `M ${sx} ${sy} C ${(sx + tx) / 2} ${sy - bend}, ${(sx + tx) / 2} ${ty + bend}, ${tx} ${ty}`;
    return `M ${sx} ${sy} C ${sx + bend} ${(sy + ty) / 2}, ${tx - bend} ${(sy + ty) / 2}, ${tx} ${ty}`;
  }

  function drawRelationCaption(layer, source, target, relation, index) {
    const x = (source.left + source.width / 2 + target.left + target.width / 2) / 2;
    const y = (source.top + source.height / 2 + target.top + target.height / 2) / 2 + ((index % 3) - 1) * 18;
    const label = relation.label.length > 42 ? `${relation.label.slice(0, 40)}…` : relation.label;
    const width = Math.min(250, Math.max(98, label.length * 5.2 + 16));
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'relation-caption'); group.setAttribute('data-inspect-id', relation.id); group.setAttribute('tabindex', '0');
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('x', x - width / 2); rect.setAttribute('y', y - 10); rect.setAttribute('width', width); rect.setAttribute('height', 20); rect.setAttribute('rx', 8);
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text'); text.setAttribute('x', x); text.setAttribute('y', y + 3.5); text.setAttribute('text-anchor', 'middle'); text.textContent = label;
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title'); title.textContent = relation.label;
    group.append(rect, text, title); layer.append(group);
  }

  async function copyShareLink() {
    syncUrlState();
    try { await navigator.clipboard.writeText(location.href); flash('Shareable framework state copied'); }
    catch (_) { const input = document.createElement('textarea'); input.value = location.href; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); flash('Shareable framework state copied'); }
  }

  function downloadCurrentSvg() {
    const surface = document.querySelector('[data-zoom-surface]');
    const clone = surface.cloneNode(true);
    clone.querySelectorAll('[tabindex]').forEach((node) => node.removeAttribute('tabindex'));
    clone.querySelectorAll('button').forEach((node) => { const replacement = document.createElement('div'); replacement.className = node.className; replacement.innerHTML = node.innerHTML; [...node.attributes].forEach((attribute) => { if (attribute.name.startsWith('data-')) replacement.setAttribute(attribute.name, attribute.value); }); node.replaceWith(replacement); });
    const width = Math.max(1200, Math.ceil(surface.scrollWidth));
    const height = Math.max(700, Math.ceil(surface.scrollHeight));
    const computed = getComputedStyle(document.documentElement);
    const variables = ['--paper', '--ink', '--muted', '--faint', '--line', '--violet', '--mint', '--surface-hover', '--surface-faint', '--nav-popover'].map((name) => `${name}:${computed.getPropertyValue(name)};`).join('');
    let css = '';
    [...document.styleSheets].forEach((sheet) => { try { if (sheet.href?.includes('frameworks.css')) css += [...sheet.cssRules].map((rule) => rule.cssText).join('\n'); } catch (_) { /* Cross-origin styles are intentionally skipped. */ } });
    const html = new XMLSerializer().serializeToString(clone);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><style>:root{${variables}}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,sans-serif}${css.replace(/<\/style/gi, '<\\/style')}</style><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;min-height:${height}px;padding:16px;background:var(--paper);box-sizing:border-box">${html}</div></foreignObject></svg>`;
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = `${root}-current-view.svg`; document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url); flash('Current live framework exported as SVG');
  }

  function flash(message) {
    let toast = document.querySelector('.framework-toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'framework-toast'; document.body.append(toast); }
    toast.textContent = message; clearTimeout(toast.timer); toast.timer = setTimeout(() => toast.remove(), 2200);
  }
})();
