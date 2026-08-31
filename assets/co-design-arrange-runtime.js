(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const STORAGE_KEY = 'pinn-review-atlas:co-design-layout:v1';
  const MOVABLE_SELECTOR = '.co-domain[data-node-id], .co-core[data-node-id]';
  const CARD_SELECTOR = '.co-domain, .co-core';
  const MARGIN = 26;
  const state = {
    board: null,
    canvas: null,
    controls: null,
    labelLayer: null,
    arrange: false,
    drag: null,
    baseBoxes: new Map(),
    translations: new Map(),
    observer: null,
    labelQueued: false,
    redrawQueued: false
  };

  const finite = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;

  function requestRedraw() {
    if (state.redrawQueued) return;
    state.redrawQueued = true;
    requestAnimationFrame(() => {
      state.redrawQueued = false;
      window.dispatchEvent(new Event('resize'));
      scheduleLabels();
    });
  }

  function metrics() {
    const rect = state.board.getBoundingClientRect();
    const width = state.board.scrollWidth;
    const height = state.board.scrollHeight;
    return {
      rect,
      width,
      height,
      scaleX: rect.width ? width / rect.width : 1,
      scaleY: rect.height ? height / rect.height : 1
    };
  }

  function captureBaseBoxes() {
    const m = metrics();
    state.baseBoxes.clear();
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      const rect = node.getBoundingClientRect();
      state.baseBoxes.set(node.dataset.nodeId, {
        left: (rect.left - m.rect.left) * m.scaleX,
        top: (rect.top - m.rect.top) * m.scaleY,
        width: rect.width * m.scaleX,
        height: rect.height * m.scaleY
      });
    });
  }

  function loadLayout() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      Object.entries(JSON.parse(raw) || {}).forEach(([id, value]) => {
        if (!value || !Number.isFinite(value.x) || !Number.isFinite(value.y)) return;
        state.translations.set(id, { x: value.x, y: value.y });
      });
    } catch (_) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function hasCustomLayout() {
    return [...state.translations.values()].some((value) => Math.abs(value.x) >= .5 || Math.abs(value.y) >= .5);
  }

  function saveLayout() {
    const output = {};
    state.translations.forEach((value, id) => {
      if (Math.abs(value.x) < .5 && Math.abs(value.y) < .5) return;
      output[id] = { x: Math.round(value.x * 10) / 10, y: Math.round(value.y * 10) / 10 };
    });
    if (Object.keys(output).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(output));
    else localStorage.removeItem(STORAGE_KEY);
    updateControls();
  }

  function setNodeTranslation(node, value) {
    const x = finite(value?.x);
    const y = finite(value?.y);
    node.style.translate = `${x}px ${y}px`;
    node.dataset.coArrangeX = String(x);
    node.dataset.coArrangeY = String(y);
  }

  function applyStoredLayout() {
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      setNodeTranslation(node, state.translations.get(node.dataset.nodeId) || { x: 0, y: 0 });
    });
    requestRedraw();
  }

  function updateControls(message = '') {
    if (!state.controls) return;
    const arrange = state.controls.querySelector('[data-co-arrange]');
    const lock = state.controls.querySelector('[data-co-lock]');
    const reset = state.controls.querySelector('[data-co-reset-layout]');
    const status = state.controls.querySelector('[data-co-layout-status]');
    arrange?.setAttribute('aria-pressed', String(state.arrange));
    arrange?.classList.toggle('primary', state.arrange);
    lock?.setAttribute('aria-pressed', String(!state.arrange));
    lock?.classList.toggle('primary', !state.arrange);
    if (reset) reset.disabled = !hasCustomLayout();
    if (status) {
      const layout = hasCustomLayout() ? 'Custom layout' : 'Curated layout';
      status.textContent = message || `${layout} · ${state.arrange ? 'Arrange mode' : 'Locked'}`;
    }
    document.body.classList.toggle('co-arrange-active', state.arrange);
  }

  function canArrange() {
    return matchMedia('(min-width: 821px)').matches || state.board.classList.contains('force-full-map');
  }

  function setArrange(active) {
    if (active && !canArrange()) {
      updateControls('Expand the full map before arranging on mobile.');
      return;
    }
    state.arrange = Boolean(active);
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      node.classList.toggle('is-arrange-movable', state.arrange);
      if (state.arrange) node.setAttribute('aria-grabbed', 'false');
      else node.removeAttribute('aria-grabbed');
    });
    updateControls();
  }

  function addControls() {
    if (document.querySelector('.co-arrange-controls')) {
      state.controls = document.querySelector('.co-arrange-controls');
      return;
    }
    const anchor = document.querySelector('.co-v2-controls') || document.querySelector('.framework-workspace');
    if (!anchor) return;
    const controls = document.createElement('div');
    controls.className = 'co-arrange-controls';
    controls.setAttribute('aria-label', 'Co-Design map arrangement controls');
    controls.innerHTML = `
      <div class="co-arrange-actions">
        <button class="button" type="button" data-co-arrange aria-pressed="false">Arrange map</button>
        <button class="button primary" type="button" data-co-lock aria-pressed="true">Lock map</button>
        <button class="button" type="button" data-co-reset-layout>Reset layout</button>
      </div>
      <p><b data-co-layout-status>Curated layout · Locked</b><span>Move the six domain cards or the central Co-Design hub. Relationship paths remain attached automatically; explanation labels are placed in clear corridors.</span></p>`;
    anchor.insertAdjacentElement('afterend', controls);
    state.controls = controls;
    controls.querySelector('[data-co-arrange]').addEventListener('click', () => setArrange(true));
    controls.querySelector('[data-co-lock]').addEventListener('click', () => setArrange(false));
    controls.querySelector('[data-co-reset-layout]').addEventListener('click', resetLayout);
    updateControls();
  }

  function clampTranslation(id, x, y) {
    const base = state.baseBoxes.get(id);
    if (!base) return { x, y };
    return {
      x: Math.min(state.board.scrollWidth - MARGIN - base.left - base.width, Math.max(MARGIN - base.left, x)),
      y: Math.min(state.board.scrollHeight - MARGIN - base.top - base.height, Math.max(MARGIN - base.top, y))
    };
  }

  function beginDrag(event, node) {
    if (!state.arrange || event.button !== 0) return;
    if (event.target.closest('button,a,input,select,summary,[data-concept-id]')) return;
    event.preventDefault();
    const id = node.dataset.nodeId;
    const current = state.translations.get(id) || { x: 0, y: 0 };
    const m = metrics();
    state.drag = {
      pointerId: event.pointerId,
      node,
      id,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: current.x,
      startY: current.y,
      scaleX: m.scaleX,
      scaleY: m.scaleY
    };
    node.setPointerCapture?.(event.pointerId);
    node.classList.add('is-dragging');
    node.setAttribute('aria-grabbed', 'true');
    updateControls(`Moving ${node.querySelector('h3,strong')?.textContent?.trim() || 'map object'}…`);
  }

  function moveDrag(event) {
    const drag = state.drag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const next = clampTranslation(
      drag.id,
      drag.startX + (event.clientX - drag.startClientX) * drag.scaleX,
      drag.startY + (event.clientY - drag.startClientY) * drag.scaleY
    );
    state.translations.set(drag.id, next);
    setNodeTranslation(drag.node, next);
    requestRedraw();
  }

  function endDrag(event) {
    const drag = state.drag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    drag.node.classList.remove('is-dragging');
    drag.node.setAttribute('aria-grabbed', 'false');
    drag.node.releasePointerCapture?.(event.pointerId);
    state.drag = null;
    saveLayout();
    requestRedraw();
  }

  function bindDragging() {
    state.board.addEventListener('pointerdown', (event) => {
      const node = event.target.closest(MOVABLE_SELECTOR);
      if (node) beginDrag(event, node);
    });
    state.board.addEventListener('pointermove', moveDrag);
    state.board.addEventListener('pointerup', endDrag);
    state.board.addEventListener('pointercancel', endDrag);
    state.board.addEventListener('lostpointercapture', (event) => {
      if (state.drag?.pointerId === event.pointerId) endDrag(event);
    });
  }

  function resetLayout() {
    state.translations.clear();
    localStorage.removeItem(STORAGE_KEY);
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => setNodeTranslation(node, { x: 0, y: 0 }));
    setArrange(false);
    state.canvas?.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    requestRedraw();
    updateControls('Curated layout restored · Locked');
  }

  function ensureLabelLayer(relationLayer) {
    let layer = state.board.querySelector('.co-label-layer');
    if (!layer) {
      layer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      layer.setAttribute('class', 'co-label-layer');
      layer.setAttribute('aria-label', 'Co-Design relationship explanations');
      state.board.append(layer);
    }
    layer.setAttribute('viewBox', relationLayer.getAttribute('viewBox') || `0 0 ${state.board.scrollWidth} ${state.board.scrollHeight}`);
    layer.setAttribute('width', state.board.scrollWidth);
    layer.setAttribute('height', state.board.scrollHeight);
    state.labelLayer = layer;
    return layer;
  }

  const expandRect = (rect, amount) => ({ left: rect.left - amount, top: rect.top - amount, right: rect.right + amount, bottom: rect.bottom + amount });
  const shiftedRect = (rect, dx, dy) => ({ left: rect.left + dx, right: rect.right + dx, top: rect.top + dy, bottom: rect.bottom + dy, width: rect.width, height: rect.height });
  const overlaps = (a, b, padding = 0) => !(a.right + padding <= b.left || a.left >= b.right + padding || a.bottom + padding <= b.top || a.top >= b.bottom + padding);

  function candidates(group, svgPerScreenX, svgPerScreenY) {
    const vertical = ['feedback', 'verification'].includes(group.dataset.semantic);
    const offsets = vertical
      ? [[0,0],[0,-56],[0,56],[-86,0],[86,0],[-112,-50],[112,-50],[-112,50],[112,50],[0,-112],[0,112],[-160,0],[160,0]]
      : [[0,0],[0,-50],[0,50],[-92,0],[92,0],[-88,-62],[88,-62],[-88,62],[88,62],[0,-104],[0,104],[-156,0],[156,0]];
    return offsets.map(([x, y]) => ({ screenX: x, screenY: y, svgX: x * svgPerScreenX, svgY: y * svgPerScreenY }));
  }

  function arrangeLabels() {
    const relationLayer = state.board.querySelector('.co-relation-layer');
    if (!relationLayer) return;
    const originals = [...relationLayer.querySelectorAll('.co-v2-caption')];
    const layer = ensureLabelLayer(relationLayer);
    layer.replaceChildren();
    if (!originals.length) return;

    const relationRect = relationLayer.getBoundingClientRect();
    const vb = relationLayer.viewBox?.baseVal;
    const svgPerScreenX = relationRect.width && vb?.width ? vb.width / relationRect.width : 1;
    const svgPerScreenY = relationRect.height && vb?.height ? vb.height / relationRect.height : 1;
    const boardRect = state.board.getBoundingClientRect();
    const obstacles = [...state.board.querySelectorAll(CARD_SELECTOR)].map((node) => expandRect(node.getBoundingClientRect(), 12));
    const accepted = [];

    originals.forEach((original) => {
      original.classList.add('co-caption-source-hidden');
      original.setAttribute('aria-hidden', 'true');
      original.setAttribute('tabindex', '-1');

      const clone = original.cloneNode(true);
      clone.classList.remove('co-caption-source-hidden');
      clone.removeAttribute('aria-hidden');
      clone.setAttribute('tabindex', '0');
      clone.removeAttribute('transform');
      layer.append(clone);

      const base = clone.getBoundingClientRect();
      let chosen = { screenX: 0, screenY: 0, svgX: 0, svgY: 0 };
      let bestScore = Infinity;
      candidates(clone, svgPerScreenX, svgPerScreenY).forEach((candidate, index) => {
        const test = shiftedRect(base, candidate.screenX, candidate.screenY);
        const outside = test.left < boardRect.left + 10 || test.right > boardRect.right - 10 || test.top < boardRect.top + 10 || test.bottom > boardRect.bottom - 10;
        let score = outside ? 100000 : index * 2;
        obstacles.forEach((rect) => { if (overlaps(test, rect)) score += 1200; });
        accepted.forEach((rect) => { if (overlaps(test, rect, 8)) score += 800; });
        if (score < bestScore) {
          bestScore = score;
          chosen = candidate;
        }
      });
      clone.setAttribute('transform', `translate(${chosen.svgX.toFixed(2)} ${chosen.svgY.toFixed(2)})`);
      clone.dataset.coLabelPlaced = bestScore < 800 ? 'clear' : 'best-fit';
      accepted.push(shiftedRect(base, chosen.screenX, chosen.screenY));
    });
  }

  function scheduleLabels() {
    if (state.labelQueued) return;
    state.labelQueued = true;
    requestAnimationFrame(() => {
      state.labelQueued = false;
      arrangeLabels();
    });
  }

  function observeRelations() {
    state.observer?.disconnect();
    const layer = state.board.querySelector('.co-relation-layer');
    if (!layer) return;
    state.observer = new MutationObserver(scheduleLabels);
    state.observer.observe(layer, { childList: true, subtree: false });
    scheduleLabels();
  }

  function waitForReady() {
    const board = document.querySelector('.co-board[data-relation-board]');
    const relationLayer = board?.querySelector('.co-relation-layer');
    if (!board || !relationLayer || document.documentElement.dataset.coDesignV2 !== 'ready') {
      setTimeout(waitForReady, 60);
      return;
    }
    state.board = board;
    state.canvas = document.querySelector('.framework-canvas');
    captureBaseBoxes();
    loadLayout();
    applyStoredLayout();
    addControls();
    bindDragging();
    observeRelations();

    window.addEventListener('resize', () => {
      if (!hasCustomLayout()) captureBaseBoxes();
      scheduleLabels();
    }, { passive: true });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-co-full-map],[data-zoom-in],[data-zoom-out],[data-fit],[data-reset],[data-expand]')) return;
      setTimeout(() => {
        if (!hasCustomLayout()) captureBaseBoxes();
        requestRedraw();
      }, 50);
    });

    document.documentElement.dataset.coDesignArrange = 'ready';
    updateControls();
  }

  waitForReady();
})();
