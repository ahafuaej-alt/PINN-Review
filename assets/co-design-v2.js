(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const prefix = '../../';
  const svgNS = 'http://www.w3.org/2000/svg';
  const state = {
    page: null,
    config: null,
    relations: new Map(),
    board: null,
    layer: null,
    observer: null,
    trace: null,
    drawQueued: false,
    ready: false
  };

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const iconIds = {
    problem: 'problem',
    representation: 'representation',
    physics: 'physics',
    numerical: 'numerical',
    training: 'training',
    reliability: 'reliability',
    core: 'coupling'
  };

  const conceptAliases = {
    'Adam (first-order)': 'Adam',
    'L-BFGS (quasi-Newton)': 'L-BFGS'
  };

  function iconMarkup(id) {
    const icon = iconIds[id] || 'coupling';
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="${prefix}assets/framework-icons.svg#icon-${icon}"></use></svg>`;
  }

  function cssVar(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function colorMap() {
    return {
      problem: cssVar('--co-problem', '#2454c6'),
      representation: cssVar('--co-representation', '#0d819f'),
      physics: cssVar('--co-physics', '#18763a'),
      numerical: cssVar('--co-numerical', '#ec681f'),
      training: cssVar('--co-training', '#ce3630'),
      reliability: cssVar('--co-reliability', '#5d35b5'),
      core: cssVar('--co-core', '#1747b8'),
      selected: cssVar('--framework-orange', '#eb5a16'),
      paper: cssVar('--paper', '#0f1722'),
      ink: cssVar('--ink', '#edf4f7'),
      muted: cssVar('--muted', '#98a6b5'),
      line: cssVar('--line', '#2d3946')
    };
  }

  function relationMeta(id) {
    return state.relations.get(id) || null;
  }

  function objectTitle(id) {
    if (id === 'core') return state.page?.core?.title || 'PINN Co-Design';
    return state.page?.domains?.find((item) => item.id === id)?.title || id;
  }

  function validateConfig() {
    const baseIds = new Set((state.page.relationships || []).map((item) => item.id));
    const configured = state.config.relations || [];
    const configuredIds = new Set(configured.map((item) => item.id));
    const missing = [...baseIds].filter((id) => !configuredIds.has(id));
    const unknown = [...configuredIds].filter((id) => !baseIds.has(id));
    if (missing.length || unknown.length || configuredIds.size !== configured.length) {
      throw new Error(`Co-Design v2 relationship audit mismatch. Missing: ${missing.join(', ') || 'none'}; unknown: ${unknown.join(', ') || 'none'}.`);
    }
    configured.forEach((item) => state.relations.set(item.id, item));
  }

  function waitForBoard() {
    const board = document.querySelector('.co-board[data-relation-board]');
    if (board) return Promise.resolve(board);
    return new Promise((resolve) => {
      const observer = new MutationObserver(() => {
        const found = document.querySelector('.co-board[data-relation-board]');
        if (!found) return;
        observer.disconnect();
        resolve(found);
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    });
  }

  function rebuildPanel(domainId, panelTitle, labels) {
    const domain = state.board.querySelector(`[data-node-id="${CSS.escape(domainId)}"]`);
    if (!domain) return;
    const panel = [...domain.querySelectorAll('.co-panels section')].find((section) => section.querySelector('b')?.textContent.trim() === panelTitle);
    if (!panel) return;
    const ul = panel.querySelector('ul');
    if (!ul) return;
    ul.innerHTML = labels.map((label) => `<li>${conceptMarkup(label)}</li>`).join('');
  }

  function conceptMarkup(sourceLabel) {
    const canonicalLabel = conceptAliases[sourceLabel] || sourceLabel;
    const concept = state.config.concept_items?.[canonicalLabel];
    if (!concept) return esc(sourceLabel);
    return `<button class="co-concept-item" type="button" data-concept-id="${esc(concept.id)}" data-trace-key="${esc(concept.trace)}" data-trace-label="${esc(concept.label)}" aria-label="Inspect and trace ${esc(concept.label)}">${esc(concept.label)}</button>`;
  }

  function enhanceConceptItems() {
    const overrides = state.config.panel_overrides || {};
    Object.entries(overrides).forEach(([domainId, panels]) => {
      Object.entries(panels).forEach(([panelTitle, labels]) => rebuildPanel(domainId, panelTitle, labels));
    });

    state.board.querySelectorAll('.co-domain .co-panels li').forEach((li) => {
      if (li.querySelector('.co-concept-item')) return;
      const label = li.textContent.trim();
      const markup = conceptMarkup(label);
      if (markup !== esc(label)) li.innerHTML = markup;
    });

    state.board.querySelectorAll('.co-concept-item').forEach((button) => {
      if (button.dataset.coTraceBound) return;
      button.dataset.coTraceBound = 'true';
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        setTrace(button.dataset.traceKey, button.dataset.traceLabel);
      });
    });

    window.AtlasConcepts?.enhance?.(state.board);
  }

  function enhanceDomainHeaders() {
    state.page.domains.forEach((domain) => {
      const node = state.board.querySelector(`[data-node-id="${CSS.escape(domain.id)}"]`);
      const header = node?.querySelector('header');
      if (!header || header.querySelector('.co-domain-icon')) return;
      const title = header.querySelector('h3');
      if (title) title.dataset.number = domain.number;
      header.insertAdjacentHTML('afterbegin', `<span class="co-domain-icon">${iconMarkup(domain.id)}</span>`);
    });
    const core = state.board.querySelector('[data-node-id="core"]');
    if (core && !core.querySelector('.co-core-icon')) core.insertAdjacentHTML('afterbegin', `<span class="co-core-icon">${iconMarkup('core')}</span>`);
  }

  function addControls() {
    if (document.querySelector('.co-v2-controls')) return;
    const workspace = document.querySelector('.framework-workspace');
    if (!workspace) return;
    workspace.insertAdjacentHTML('beforebegin', `<div class="co-v2-controls" aria-label="Co-Design view controls">
      <button class="button co-mobile-map-toggle" type="button" data-co-full-map>Expand full map</button>
      <span class="co-trace-status" data-co-trace-status><span>Trace active: <b></b></span><button type="button" data-clear-trace>Clear ×</button></span>
    </div>`);
    document.querySelector('[data-co-full-map]')?.addEventListener('click', () => {
      const active = state.board.classList.toggle('force-full-map');
      document.querySelector('[data-co-full-map]').textContent = active ? 'Use mobile stack' : 'Expand full map';
      scheduleDraw();
    });
    document.querySelector('[data-clear-trace]')?.addEventListener('click', clearTrace);
  }

  function addInlineLegend() {
    state.board.querySelector('.co-v2-legend')?.remove();
    state.board.insertAdjacentHTML('beforeend', `<div class="co-v2-legend" aria-label="Co-Design relationship legend">
      <span><i class="legend-influence"></i>Directional influence</span>
      <span><i class="legend-reciprocal"></i>Reciprocal pair</span>
      <span><i class="legend-feedback"></i>Verification feedback</span>
      <span><i class="legend-selected"></i>Selected relationship</span>
    </div>`);
  }

  function patchExpandedLegend() {
    const panel = document.querySelector('.framework-legend-panel');
    if (!panel) return;
    panel.innerHTML = `<div class="legend-title"><strong>Co-Design relationship legend</strong><button type="button" data-co-close-legend aria-label="Close legend">×</button></div>
      <div class="co-v2-expanded-legend">
        <article><b>Directional influence →</b><p>${esc(state.config.relation_semantics.influence)}</p></article>
        <article><b>Reciprocal pair ⇄</b><p>${esc(state.config.relation_semantics.reciprocal)}</p></article>
        <article><b>Verification dependency ↓</b><p>${esc(state.config.relation_semantics.verification)}</p></article>
        <article><b>Verification feedback ↻</b><p>${esc(state.config.relation_semantics.feedback)}</p></article>
      </div>`;
    panel.querySelector('[data-co-close-legend]')?.addEventListener('click', () => {
      panel.hidden = true;
      document.querySelector('[data-legend]')?.setAttribute('aria-expanded', 'false');
    });
  }

  function metrics() {
    const rect = state.board.getBoundingClientRect();
    const width = state.board.scrollWidth;
    const height = state.board.scrollHeight;
    return { rect, width, height, scaleX: rect.width ? width / rect.width : 1, scaleY: rect.height ? height / rect.height : 1 };
  }

  function boxFor(id, m) {
    const node = state.board.querySelector(`[data-node-id="${CSS.escape(id)}"]`);
    if (!node || node.hidden || node.closest('[hidden]')) return null;
    const bounds = node.getBoundingClientRect();
    return {
      node,
      left: (bounds.left - m.rect.left) * m.scaleX,
      right: (bounds.right - m.rect.left) * m.scaleX,
      top: (bounds.top - m.rect.top) * m.scaleY,
      bottom: (bounds.bottom - m.rect.top) * m.scaleY,
      width: bounds.width * m.scaleX,
      height: bounds.height * m.scaleY,
      cx: (bounds.left - m.rect.left + bounds.width / 2) * m.scaleX,
      cy: (bounds.top - m.rect.top + bounds.height / 2) * m.scaleY,
      muted: node.classList.contains('is-filter-muted') || node.classList.contains('is-search-muted') || Boolean(node.closest('.is-filter-muted,.is-search-muted'))
    };
  }

  function edgePoint(source, target, offset = 0) {
    const dx = target.cx - source.cx;
    const dy = target.cy - source.cy;
    if (Math.abs(dx) >= Math.abs(dy)) {
      return { x: dx >= 0 ? source.right + 1 : source.left - 1, y: source.cy + offset, axis: 'h' };
    }
    return { x: source.cx + offset, y: dy >= 0 ? source.bottom + 1 : source.top - 1, axis: 'v' };
  }

  function relationPath(meta, source, target, m) {
    if (meta.semantic === 'feedback') {
      const side = meta.feedback_side === 'left' ? 'left' : 'right';
      const lane = Number(meta.lane || 0);
      const outerX = side === 'left' ? 18 + lane * 18 : m.width - 18 - lane * 18;
      const sy = source.cy;
      const ty = target.cy;
      const sx = side === 'left' ? source.left - 1 : source.right + 1;
      const tx = side === 'left' ? target.left - 1 : target.right + 1;
      return `M ${sx.toFixed(2)} ${sy.toFixed(2)} C ${outerX.toFixed(2)} ${sy.toFixed(2)}, ${outerX.toFixed(2)} ${sy.toFixed(2)}, ${outerX.toFixed(2)} ${(sy + ty) / 2} S ${outerX.toFixed(2)} ${ty.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)}`;
    }

    const offset = meta.pair ? (Number(meta.lane || 0) % 2 === 0 ? -9 : 9) : 0;
    const start = edgePoint(source, target, offset);
    const end = edgePoint(target, source, offset);

    if (meta.semantic === 'verification') {
      const mid = (start.y + end.y) / 2;
      return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} C ${start.x.toFixed(2)} ${mid.toFixed(2)}, ${end.x.toFixed(2)} ${mid.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
    }

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    if (Math.abs(dx) >= Math.abs(dy)) {
      const mid = (start.x + end.x) / 2;
      return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} C ${mid.toFixed(2)} ${start.y.toFixed(2)}, ${mid.toFixed(2)} ${end.y.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
    }
    const mid = (start.y + end.y) / 2;
    return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} C ${start.x.toFixed(2)} ${mid.toFixed(2)}, ${end.x.toFixed(2)} ${mid.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
  }

  function markerDefs(colors) {
    const domains = ['problem', 'representation', 'physics', 'numerical', 'training', 'reliability', 'core'];
    return `<defs>${domains.map((domain) => `<marker id="co-arrow-${domain}" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors[domain])}"/></marker>`).join('')}<marker id="co-arrow-selected" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors.selected)}"/></marker></defs>`;
  }

  function wrapLabel(text, max = 38) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = '';
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= max || !line) line = candidate;
      else { lines.push(line); line = word; }
    });
    if (line) lines.push(line);
    return lines.slice(0, 3);
  }

  function captionPosition(meta, source, target, m) {
    if (meta.semantic === 'feedback') {
      const side = meta.feedback_side === 'left' ? 'left' : 'right';
      const lane = Number(meta.lane || 0);
      const x = side === 'left' ? 105 + lane * 18 : m.width - 105 - lane * 18;
      return { x: x + Number(meta.label_dx || 0), y: (source.cy + target.cy) / 2 + Number(meta.label_dy || 0) };
    }
    return {
      x: (source.cx + target.cx) / 2 + Number(meta.label_dx || 0),
      y: (source.cy + target.cy) / 2 + Number(meta.label_dy || 0)
    };
  }

  function drawCaption(meta, source, target, m, muted) {
    const pos = captionPosition(meta, source, target, m);
    const lines = wrapLabel(meta.label);
    const width = Math.min(270, Math.max(118, Math.max(...lines.map((line) => line.length), 1) * 6.2 + 18));
    const height = 14 + lines.length * 14;
    const group = document.createElementNS(svgNS, 'g');
    group.setAttribute('class', `co-v2-caption${muted ? ' is-muted' : ''}`);
    group.setAttribute('data-inspect-id', meta.id);
    group.setAttribute('data-semantic', meta.semantic);
    group.setAttribute('tabindex', '0');
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', pos.x - width / 2);
    rect.setAttribute('y', pos.y - height / 2);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('rx', 8);
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', pos.x);
    text.setAttribute('y', pos.y - ((lines.length - 1) * 7) + 4);
    text.setAttribute('text-anchor', 'middle');
    lines.forEach((line, index) => {
      const tspan = document.createElementNS(svgNS, 'tspan');
      tspan.setAttribute('x', pos.x);
      tspan.setAttribute('dy', index === 0 ? 0 : 14);
      tspan.textContent = line;
      text.append(tspan);
    });
    const title = document.createElementNS(svgNS, 'title');
    title.textContent = `${objectTitle(meta.from)} → ${objectTitle(meta.to)}: ${meta.label}`;
    group.append(rect, text, title);
    state.layer.append(group);
  }

  function selectedRelationId() {
    return new URLSearchParams(location.hash.replace(/^#/, '')).get('item');
  }

  function renderRelations() {
    if (!state.board || !state.layer || !state.config) return;
    state.observer?.disconnect();
    const m = metrics();
    const colors = colorMap();
    state.layer.classList.add('co-relation-layer');
    state.layer.setAttribute('viewBox', `0 0 ${m.width} ${m.height}`);
    state.layer.setAttribute('width', m.width);
    state.layer.setAttribute('height', m.height);
    state.layer.setAttribute('data-co-design-geometry', 'audited-directional-v2');
    state.layer.innerHTML = markerDefs(colors);
    const selected = selectedRelationId();
    const tracedIds = new Set(state.trace ? (state.config.trace_paths?.[state.trace.key] || []) : []);

    state.config.relations.forEach((meta) => {
      const source = boxFor(state.page.relationships.find((item) => item.id === meta.id)?.from, m);
      const target = boxFor(state.page.relationships.find((item) => item.id === meta.id)?.to, m);
      if (!source || !target) return;
      meta.from = state.page.relationships.find((item) => item.id === meta.id).from;
      meta.to = state.page.relationships.find((item) => item.id === meta.id).to;
      const muted = source.muted || target.muted || (state.trace && !tracedIds.has(meta.id));
      const active = selected === meta.id;
      const traced = tracedIds.has(meta.id);
      const color = colors[meta.color_domain] || colors.core;
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('class', `co-v2-path${muted ? ' is-muted' : ''}${active ? ' is-active' : ''}${traced ? ' is-traced' : ''}`);
      path.setAttribute('data-inspect-id', meta.id);
      path.setAttribute('data-semantic', meta.semantic);
      path.setAttribute('data-from', meta.from);
      path.setAttribute('data-to', meta.to);
      path.setAttribute('tabindex', '0');
      path.setAttribute('d', relationPath(meta, source, target, m));
      path.setAttribute('stroke', active || traced ? colors.selected : color);
      path.setAttribute('marker-end', `url(#${active || traced ? 'co-arrow-selected' : `co-arrow-${meta.color_domain || 'core'}`})`);
      const title = document.createElementNS(svgNS, 'title');
      title.textContent = `${objectTitle(meta.from)} → ${objectTitle(meta.to)} · ${meta.label}`;
      path.append(title);
      state.layer.append(path);
      drawCaption(meta, source, target, m, muted);
    });

    observeLayer();
  }

  function observeLayer() {
    if (!state.layer) return;
    if (!state.observer) state.observer = new MutationObserver(() => scheduleDraw());
    state.observer.observe(state.layer, { childList: true });
  }

  function scheduleDraw() {
    if (!state.ready || state.drawQueued) return;
    state.drawQueued = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      state.drawQueued = false;
      renderRelations();
      applyTraceClasses();
    }));
  }

  function traceNodes(pathIds) {
    const nodes = new Set(['core']);
    pathIds.forEach((id) => {
      const base = state.page.relationships.find((item) => item.id === id);
      if (base) { nodes.add(base.from); nodes.add(base.to); }
    });
    return nodes;
  }

  function applyTraceClasses() {
    state.board.querySelectorAll('[data-node-id]').forEach((node) => node.classList.remove('is-trace-source', 'is-trace-muted'));
    if (!state.trace) return;
    const pathIds = state.config.trace_paths?.[state.trace.key] || [];
    const nodes = traceNodes(pathIds);
    state.board.querySelectorAll('[data-node-id]').forEach((node) => {
      const id = node.dataset.nodeId;
      node.classList.toggle('is-trace-muted', !nodes.has(id));
      node.classList.toggle('is-trace-source', id === state.trace.key || id === 'core' || (state.trace.key === 'reliability' && id === 'reliability'));
    });
  }

  function setTrace(key, label) {
    if (!state.config.trace_paths?.[key]) return;
    state.trace = { key, label };
    const status = document.querySelector('[data-co-trace-status]');
    if (status) {
      status.classList.add('is-active');
      const b = status.querySelector('b');
      if (b) b.textContent = label;
    }
    renderRelations();
    applyTraceClasses();
  }

  function clearTrace() {
    state.trace = null;
    document.querySelector('[data-co-trace-status]')?.classList.remove('is-active');
    state.board?.querySelectorAll('[data-node-id]').forEach((node) => node.classList.remove('is-trace-source', 'is-trace-muted'));
    renderRelations();
  }

  function semanticLabel(meta) {
    if (meta.semantic === 'feedback') return 'Verification feedback';
    if (meta.semantic === 'verification') return 'Verification dependency';
    if (meta.pair) return 'Directional influence · reciprocal pair member';
    return 'Directional influence';
  }

  function enrichInspector(id) {
    const meta = relationMeta(id);
    if (!meta) return;
    const detail = document.querySelector('[data-detail]');
    if (!detail) return;
    const heading = detail.querySelector('.framework-inspector-head h2');
    if (heading) heading.textContent = meta.label;
    const meaning = detail.querySelector('[data-inspector-section="meaning"]');
    if (meaning) meaning.innerHTML = `<h3>Scientific meaning</h3><p>${esc(meta.mechanism)}</p>`;
    const relationships = detail.querySelector('[data-inspector-section="relationships"]');
    if (relationships) relationships.innerHTML = `<h3>Relationships</h3>
      <div class="co-v2-route"><span>${esc(objectTitle(meta.from))}</span><i>→</i><span>${esc(objectTitle(meta.to))}</span></div>
      <div class="co-v2-inspector-grid">
        <article><b>Direction</b><p>${esc(semanticLabel(meta))}</p></article>
        <article><b>Mechanism</b><p>${esc(meta.mechanism)}</p></article>
        <article><b>Scientific consequence</b><p>${esc(meta.consequence)}</p></article>
        ${meta.pair ? `<article><b>Reciprocal structure</b><p>The reverse direction is stored and evidenced separately; this arrow does not imply symmetry of mechanism.</p></article>` : ''}
        ${meta.semantic === 'feedback' ? `<article><b>Observed signal</b><p>${esc(meta.trigger)}</p></article><article><b>Targeted redesign</b><p>${esc(meta.action)}</p></article>` : ''}
      </div>`;
  }

  function bindInspectorEnhancement() {
    document.addEventListener('click', (event) => {
      const inspectable = event.target.closest('[data-inspect-id]');
      if (!inspectable) return;
      const id = inspectable.dataset.inspectId;
      if (!relationMeta(id)) return;
      setTimeout(() => { enrichInspector(id); scheduleDraw(); }, 0);
    });
    document.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      const inspectable = event.target.closest('[data-inspect-id]');
      if (!inspectable || !relationMeta(inspectable.dataset.inspectId)) return;
      setTimeout(() => { enrichInspector(inspectable.dataset.inspectId); scheduleDraw(); }, 0);
    });
  }

  function wrapWords(text, maxChars) {
    const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
    const lines = [];
    let line = '';
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= maxChars || !line) line = candidate;
      else { lines.push(line); line = word; }
    });
    if (line) lines.push(line);
    return lines;
  }

  function svgText(text, x, y, options = {}) {
    const size = options.size || 12;
    const lines = wrapWords(text, options.maxChars || 32).slice(0, options.maxLines || 6);
    const anchor = options.anchor || 'start';
    const weight = options.weight || 400;
    const fill = options.fill || '#edf4f7';
    const lineHeight = options.lineHeight || size * 1.28;
    return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" fill="${esc(fill)}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${lines.map((line, index) => `<tspan x="${x.toFixed(2)}" dy="${index === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`).join('')}</text>`;
  }

  function localBox(node, m) {
    const bounds = node.getBoundingClientRect();
    return {
      left: (bounds.left - m.rect.left) * m.scaleX,
      top: (bounds.top - m.rect.top) * m.scaleY,
      width: bounds.width * m.scaleX,
      height: bounds.height * m.scaleY,
      right: (bounds.right - m.rect.left) * m.scaleX,
      bottom: (bounds.bottom - m.rect.top) * m.scaleY
    };
  }

  function exportDomain(domain, m, colors, publication) {
    const node = state.board.querySelector(`[data-node-id="${CSS.escape(domain.id)}"]`);
    if (!node) return '';
    const box = localBox(node, m);
    const color = colors[domain.id] || colors.core;
    const opacity = publication ? 1 : Number.parseFloat(getComputedStyle(node).opacity) || 1;
    let out = `<g opacity="${opacity}"><rect x="${box.left}" y="${box.top}" width="${box.width}" height="${box.height}" rx="16" fill="${esc(colors.paper)}" stroke="${esc(color)}" stroke-width="1.8"/>`;
    out += `<circle cx="${box.left + 28}" cy="${box.top + 28}" r="17" fill="${esc(color)}"/>`;
    out += svgText(String(domain.number), box.left + 28, box.top + 33, { size: 13, weight: 800, anchor: 'middle', fill: '#ffffff' });
    out += svgText(domain.title, box.left + 52, box.top + 31, { size: 16, weight: 800, fill: color, maxChars: 32, maxLines: 2 });

    node.querySelectorAll('.co-panels section').forEach((section) => {
      const sb = localBox(section, m);
      out += `<rect x="${sb.left}" y="${sb.top}" width="${sb.width}" height="${sb.height}" rx="9" fill="${esc(colors.paper)}" stroke="${esc(color)}" stroke-opacity=".38"/>`;
      const title = section.querySelector('b')?.textContent.trim() || '';
      out += svgText(title, sb.left + sb.width / 2, sb.top + 15, { size: 10.5, weight: 800, anchor: 'middle', fill: color, maxChars: 28, maxLines: 1 });
      let y = sb.top + 31;
      section.querySelectorAll('li').forEach((li) => {
        const label = li.textContent.replace(/↗/g, '').trim();
        const lines = wrapWords(label, Math.max(18, Math.floor(sb.width / 7.2))).slice(0, 2);
        out += `<circle cx="${sb.left + 9}" cy="${y - 3}" r="1.8" fill="${esc(colors.ink)}"/>`;
        out += svgText(lines.join(' '), sb.left + 15, y, { size: 8.8, fill: colors.ink, maxChars: Math.max(18, Math.floor(sb.width / 7.2)), maxLines: 2, lineHeight: 10.5 });
        y += 12 + Math.max(0, lines.length - 1) * 9;
      });
    });
    return `${out}</g>`;
  }

  function exportCore(m, colors, publication) {
    const node = state.board.querySelector('[data-node-id="core"]');
    if (!node) return '';
    const b = localBox(node, m);
    const opacity = publication ? 1 : Number.parseFloat(getComputedStyle(node).opacity) || 1;
    const pts = [
      [b.left + b.width * .22, b.top], [b.left + b.width * .78, b.top], [b.right, b.top + b.height * .5],
      [b.left + b.width * .78, b.bottom], [b.left + b.width * .22, b.bottom], [b.left, b.top + b.height * .5]
    ].map(([x,y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
    let out = `<g opacity="${opacity}"><polygon points="${pts}" fill="#082753" stroke="#6ea3ff" stroke-width="2.5"/>`;
    out += svgText(state.page.core.subtitle, b.left + b.width / 2, b.top + 74, { size: 12, anchor: 'middle', fill: '#b9d4ff', maxChars: 42, maxLines: 2 });
    out += svgText(state.page.core.title, b.left + b.width / 2, b.top + 112, { size: 26, weight: 800, anchor: 'middle', fill: '#ffffff', maxChars: 28, maxLines: 2 });
    let y = b.top + 170;
    state.page.core.outcomes.forEach((item) => {
      out += `<circle cx="${b.left + b.width * .33}" cy="${y - 4}" r="7" fill="none" stroke="#d7e6ff"/><path d="M ${b.left + b.width * .33 - 3} ${y - 4} l 2 2 l 4 -5" fill="none" stroke="#d7e6ff" stroke-width="1.4"/>`;
      out += svgText(item, b.left + b.width * .38, y, { size: 12, fill: '#d7e6ff', maxChars: 24, maxLines: 1 });
      y += 22;
    });
    return `${out}</g>`;
  }

  function cleanRelationSvg(html, publication) {
    if (!publication) return html;
    return html.replace(/\sclass="([^"]*)"/g, (_, classes) => ` class="${classes.split(/\s+/).filter((name) => !['is-active','is-traced','is-muted'].includes(name)).join(' ')}"`)
      .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, (value) => value);
  }

  function exportLegend(width, y, colors) {
    const items = [
      ['Directional influence', colors.representation, false],
      ['Reciprocal pair', '#58cdb2', false],
      ['Verification feedback', colors.reliability, true],
      ['Selected relationship', colors.selected, false]
    ];
    const start = Math.max(40, width / 2 - 370);
    return items.map(([label, color, dashed], index) => {
      const x = start + index * 190;
      return `<line x1="${x}" y1="${y}" x2="${x + 35}" y2="${y}" stroke="${color}" stroke-width="${label.startsWith('Selected') ? 3 : 2}"${dashed ? ' stroke-dasharray="8 6"' : ''}/><path d="M ${x + 35} ${y} l -7 -4 l 0 8 z" fill="${color}"/>${svgText(label, x + 44, y + 4, { size: 10.5, fill: colors.ink, maxChars: 26, maxLines: 1 })}`;
    }).join('');
  }

  async function downloadNativeSvg(mode) {
    const publication = mode === 'publication';
    const wasFull = state.board.classList.contains('force-full-map');
    const needsFull = publication && matchMedia('(max-width: 820px)').matches && !wasFull;
    if (needsFull) {
      state.board.classList.add('force-full-map');
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      renderRelations();
    }
    const m = metrics();
    const colors = colorMap();
    const topPad = 74;
    const bottomPad = 64;
    const relationMarkup = cleanRelationSvg(state.layer.innerHTML, publication);
    const domains = state.page.domains.map((domain) => exportDomain(domain, m, colors, publication)).join('');
    const core = exportCore(m, colors, publication);
    const title = svgText('PINN Co-Design Framework', 28, 33, { size: 24, weight: 800, fill: colors.ink, maxChars: 50, maxLines: 1 });
    const subtitle = svgText('Audited directional influences, reciprocal pairs, verification dependency, and evidence-driven redesign feedback', 28, 54, { size: 11, fill: colors.muted, maxChars: 120, maxLines: 1 });
    const style = `<style>.co-v2-path{fill:none;stroke-width:2.15;stroke-linecap:round;stroke-linejoin:round}.co-v2-path[data-semantic="feedback"]{stroke-dasharray:9 7}.co-v2-path.is-muted{opacity:.12}.co-v2-caption rect{fill:${colors.paper};stroke:${colors.line};stroke-width:1}.co-v2-caption text{fill:${colors.ink};font:700 11px Arial,Helvetica,sans-serif}.co-v2-caption[data-semantic="feedback"] text{fill:${colors.reliability}}</style>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${m.width}" height="${m.height + topPad + bottomPad}" viewBox="0 0 ${m.width} ${m.height + topPad + bottomPad}" data-export-mode="${mode}" data-native-vector="true"><rect width="100%" height="100%" fill="${esc(colors.paper)}"/>${style}${title}${subtitle}<g transform="translate(0 ${topPad})">${relationMarkup}${domains}${core}</g>${exportLegend(m.width, m.height + topPad + 32, colors)}</svg>`;
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `co-design-${mode}-view.svg`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast(publication ? 'Native publication SVG exported' : 'Native current-view SVG exported');
    if (needsFull) {
      state.board.classList.remove('force-full-map');
      scheduleDraw();
    }
  }

  function bindExportOverride() {
    document.addEventListener('click', (event) => {
      const current = event.target.closest('[data-svg]');
      const publication = event.target.closest('[data-svg-publication]');
      if (!current && !publication) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      downloadNativeSvg(publication ? 'publication' : 'current');
    }, true);
  }

  function toast(message) {
    let node = document.querySelector('.framework-toast');
    if (!node) { node = document.createElement('div'); node.className = 'framework-toast'; document.body.append(node); }
    node.textContent = message;
    clearTimeout(node._timer);
    node._timer = setTimeout(() => node.remove(), 2200);
  }

  function bindRedrawTriggers() {
    if ('ResizeObserver' in window) new ResizeObserver(scheduleDraw).observe(state.board);
    window.addEventListener('resize', scheduleDraw, { passive: true });
    document.addEventListener('input', (event) => { if (event.target.matches('.framework-search')) scheduleDraw(); });
    document.addEventListener('change', (event) => { if (event.target.matches('[data-filter]')) scheduleDraw(); });
    document.addEventListener('click', (event) => {
      if (event.target.closest('[data-zoom-in],[data-zoom-out],[data-fit],[data-reset],[data-expand],[data-inspect-id]')) scheduleDraw();
    });
  }

  async function initialize() {
    try {
      const [page, config, board] = await Promise.all([
        fetch(`${prefix}data/frameworks/co-design.json`).then((response) => response.ok ? response.json() : Promise.reject(new Error(`co-design.json returned ${response.status}`))),
        fetch(`${prefix}data/frameworks/co-design-v2.json`).then((response) => response.ok ? response.json() : Promise.reject(new Error(`co-design-v2.json returned ${response.status}`))),
        waitForBoard()
      ]);
      state.page = page;
      state.config = config;
      state.board = board;
      state.layer = board.querySelector('[data-relation-layer]');
      validateConfig();
      enhanceDomainHeaders();
      enhanceConceptItems();
      addControls();
      addInlineLegend();
      patchExpandedLegend();
      bindInspectorEnhancement();
      bindExportOverride();
      bindRedrawTriggers();
      state.ready = true;
      renderRelations();
      applyTraceClasses();
      const restored = selectedRelationId();
      if (restored && relationMeta(restored)) setTimeout(() => enrichInspector(restored), 0);
      document.documentElement.dataset.coDesignV2 = 'ready';
    } catch (error) {
      console.error('Co-Design v2 could not be initialized.', error);
      document.documentElement.dataset.coDesignV2 = 'error';
    }
  }

  initialize();
})();
