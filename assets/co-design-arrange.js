(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const STORAGE_KEY = 'pinn-review-atlas:co-design-layout:v1';
  const MOVABLE_SELECTOR = '.co-domain[data-node-id], .co-core[data-node-id]';
  const CARD_SELECTOR = '.co-domain, .co-core';
  const CAPTION_SELECTOR = '.co-v2-caption';
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

  const number = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  function requestRedraw() {
    if (state.redrawQueued) return;
    state.redrawQueued = true;
    requestAnimationFrame(() => {
      state.redrawQueued = false;
      window.dispatchEvent(new Event('resize'));
      scheduleLabels();
    });
  }

  function boardMetrics() {
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
    const m = boardMetrics();
    state.baseBoxes.clear();
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      const rect = node.getBoundingClientRect();
      const id = node.dataset.nodeId;
      state.baseBoxes.set(id, {
        left: (rect.left - m.rect.left) * m.scaleX,
        top: (rect.top - m.rect.top) * m.scaleY,
        width: rect.width * m.scaleX,
        height: rect.height * m.scaleY
      });
      node.dataset.coArrangeBase = 'true';
    });
  }

  function loadLayout() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      Object.entries(parsed || {}).forEach(([id, value]) => {
        if (!value || !Number.isFinite(value.x) || !Number.isFinite(value.y)) return;
        state.translations.set(id, { x: value.x, y: value.y });
      });
    } catch (_) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function saveLayout() {
    const output = {};
    state.translations.forEach((value, id) => {
      if (Math.abs(value.x) < .5 && Math.abs(value.y) < .5) return;
      output[id] = { x: Math.round(value.x * 10) / 10, y: Math.round(value.y * 10) / 10 };
    });
    if (Object.keys(output).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(output));
    else localStorage.removeItem(STORAGE_KEY);
    updateStatus();
  }

  function applyTranslation(node, value) {
    const x = number(value?.x);
    const y = number(value?.y);
    node.style.translate = `${x}px ${y}px`;
    node.dataset.coArrangeX = String(x);
    node.dataset.coArrangeY = String(y);
  }

  function applyStoredLayout() {
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      const value = state.translations.get(node.dataset.nodeId) || { x: 0, y: 0 };
      applyTranslation(node, value);
    });
    requestRedraw();
  }

  function hasCustomLayout() {
    return [...state.translations.values()].some((value) => Math.abs(value.x) >= .5 || Math.abs(value.y) >= .5);
  }

  function updateStatus(message = '') {
    if (!state.controls) return;
    const status = state.controls.querySelector('[data-co-layout-status]');
    const arrange = state.controls.querySelector('[data-co-arrange]');
    const lock = state.controls.querySelector('[data-co-lock]');
    const reset = state.controls.querySelector('[data-co-reset-layout]');
    arrange?.setAttribute('aria-pressed', String(state.arrange));
    arrange?.classList.toggle('primary', state.arrange);
    lock?.setAttribute('aria-pressed', String(!state.arrange));
    lock?.classList.toggle('primary', !state.arrange);
    if (reset) reset.disabled = !hasCustomLayout();
    if (status) {
      const layout = hasCustomLayout() ? 'Custom layout' : 'Curated layout';
      const mode = state.arrange ? 'Arrange mode' : 'Locked';
      status.textContent = message || `${layout} · ${mode}`;
    }
    document.body.classList.toggle('co-arrange-active', state.arrange);
  }

  function canArrange() {
    return window.matchMedia('(min-width: 821px)').matches || state.board.classList.contains('force-full-map');
  }

  function setArrange(active) {
    if (active && !canArrange()) {
      updateStatus('Expand the full map before arranging on mobile.');
      return;
    }
    state.arrange = Boolean(active);
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => {
      node.setAttribute('aria-grabbed', state.arrange ? 'false' : 'undefined');
      node.classList.toggle('is-arrange-movable', state.arrange);
    });
    updateStatus();
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
      <p><b data-co-layout-status>Curated layout · Locked</b><span>Drag the six domain cards or the central Co-Design hub. Relationship paths stay attached automatically; labels are re-placed to avoid cards and one another.</span></p>`;
    anchor.insertAdjacentElement('afterend', controls);
    state.controls = controls;
    controls.querySelector('[data-co-arrange]').addEventListener('click', () => setArrange(true));
    controls.querySelector('[data-co-lock]').addEventListener('click', () => setArrange(false));
    controls.querySelector('[data-co-reset-layout]').addEventListener('click', resetLayout);
    updateStatus();
  }

  function clampTranslation(id, x, y) {
    const base = state.baseBoxes.get(id);
    if (!base) return { x, y };
    const minX = MARGIN - base.left;
    const maxX = state.board.scrollWidth - MARGIN - base.left - base.width;
    const minY = MARGIN - base.top;
    const maxY = state.board.scrollHeight - MARGIN - base.top - base.height;
    return {
      x: Math.min(maxX, Math.max(minX, x)),
      y: Math.min(maxY, Math.max(minY, y))
    };
  }

  function beginDrag(event, node) {
    if (!state.arrange || event.button !== 0) return;
    if (event.target.closest('button,a,input,select,summary,[data-concept-id]')) return;
    event.preventDefault();
    const id = node.dataset.nodeId;
    const current = state.translations.get(id) || { x: 0, y: 0 };
    const m = boardMetrics();
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
    updateStatus(`Moving ${node.querySelector('h3,strong')?.textContent?.trim() || 'map object'}…`);
  }

  function moveDrag(event) {
    const drag = state.drag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const x = drag.startX + (event.clientX - drag.startClientX) * drag.scaleX;
    const y = drag.startY + (event.clientY - drag.startClientY) * drag.scaleY;
    const next = clampTranslation(drag.id, x, y);
    state.translations.set(drag.id, next);
    applyTranslation(drag.node, next);
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
    state.board.querySelectorAll(MOVABLE_SELECTOR).forEach((node) => applyTranslation(node, { x: 0, y: 0 }));
    setArrange(false);
    requestRedraw();
    state.canvas?.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    updateStatus('Curated layout restored · Locked');
  }

  function ensureLabelLayer() {
    let layer = state.board.querySelector('.co-label-layer');
    if (!layer) {
      layer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      layer.setAttribute('class', 'co-label-layer');
      layer.setAttribute('aria-label', 'Co-Design relationship explanations');
      state.board.append(layer);
    }
    const relationLayer = state.board.querySelector('.co-relation-layer');
    const viewBox = relationLayer?.getAttribute('viewBox') || `0 0 ${state.board.scrollWidth} ${state.board.scrollHeight}`;
    layer.setAttribute('viewBox', viewBox);
    layer.setAttribute('width', state.board.scrollWidth);
    layer.setAttribute('height', state.board.scrollHeight);
    state.labelLayer = layer;
    return layer;
  }

  function rectOverlap(a, b, padding = 0) {
    return !(a.right + padding <= b.left || a.left >= b.right + padding || a.bottom + padding <= b.top || a.top >= b.bottom + padding);
  }

  function expandRect(rect, amount) {
    return { left: rect.left - amount, top: rect.top - amount, right: rect.right + amount, bottom: rect.bottom + amount, width: rect.width + amount * 2, height: rect.height + amount * 2 };
  }

  function shiftedRect(rect, dx, dy) {
    return { left: rect.left + dx, right: rect.right + dx, top: rect.top + dy, bottom: rect.bottom + dy, width: rect.width, height: rect.height };
  }

  function candidateOffsets(group, screenScaleX, screenScaleY) {
    const semantic = group.dataset.semantic;
    const verticalFirst = semantic === 'feedback' || semantic === 'verification';
    const screenCandidates = verticalFirst
      ? [[0,0],[0,-54],[0,54],[-80,0],[80,0],[-110,-48],[110,-48],[-110,48],[110,48],[0,-108],[0,108]]
      : [[0,0],[0,-48],[0,48],[-88,0],[88,0],[-82,-58],[82,-58],[-82,58],[82,58],[0,-98],[0,98],[-150,0],[150,0]];
    return screenCandidates.map(([x, y]) => ({ screenX: x, screenY: y, svgX: x * screenScaleX, svgY: y * screenScaleY }));
  }

  function arrangeLabels() {
    const relationLayer = state.board.querySelector('.co-relation-layer');
    if (!relationLayer) return;
    const captions = [...relationLayer.querySelectorAll(CAPTION_SELECTOR), ...state.board.querySelectorAll(`.co-label-layer ${CAPTION_SELECTOR}`)];
    if (!captions.length) return;
    const layer = ensureLabelLayer();
    const relationBox = relationLayer.getBoundingClientRect();
    const viewBox = relationLayer.viewBox?.baseVal;
    const screenScaleX = relationBox.width && viewBox?.width ? viewBox.width / relationBox.width : 1;
    const screenScaleY = relationBox.height && viewBox?.height ? viewBox.height / relationBox.height : 1;
    const boardRect = state.board.getBoundingClientRect();
    const obstacles = [...state.board.querySelectorAll(CARD_SELECTOR)].map((node) => expandRect(node.getBoundingClientRect(), 12));
    const accepted = [];

    captions.forEach((group) => {
      if (group.parentNode !== layer) layer.append(group);
      group.removeAttribute('transform');
      const original = group.getBoundingClientRect();
      const candidates = candidateOffsets(group, screenScaleX, screenScaleY);
      let chosen = candidates[0];
      let bestScore = Infinity;

      candidates.forEach((candidate, index) => {
        const test = shiftedRect(original, candidate.screenX, candidate.screenY);
        const outside = test.left < boardRect.left + 10 || test.right > boardRect.right - 10 || test.top < boardRect.top + 10 || test.bottom > boardRect.bottom - 10;
        let score = outside ? 100000 : index * 3;
        obstacles.forEach((obstacle) => { if (rectOverlap(test, obstacle)) score += 1000; });
        accepted.forEach((other) => { if (rectOverlap(test, other, 8)) score += 700; });
        if (score < bestScore) {
          bestScore = score;
          chosen = candidate;
        }
      });

      group.setAttribute('transform', `translate(${chosen.svgX.toFixed(2)} ${chosen.svgY.toFixed(2)})`);
      group.dataset.coLabelPlaced = bestScore < 700 ? 'clear' : 'best-fit';
      accepted.push(shiftedRect(original, chosen.screenX, chosen.screenY));
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

  function observeRelationLayer() {
    state.observer?.disconnect();
    const layer = state.board.querySelector('.co-relation-layer');
    if (!layer) return;
    state.observer = new MutationObserver(() => scheduleLabels());
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
    observeRelationLayer();
    window.addEventListener('resize', () => {
      if (!hasCustomLayout()) captureBaseBoxes();
      scheduleLabels();
    }, { passive: true });
    document.addEventListener('click', (event) => {
      if (event.target.closest('[data-co-full-map],[data-zoom-in],[data-zoom-out],[data-fit],[data-reset],[data-expand]')) {
        setTimeout(() => {
          if (!hasCustomLayout()) captureBaseBoxes();
          requestRedraw();
        }, 40);
      }
    });
    document.documentElement.dataset.coDesignArrange = 'ready';
    updateStatus();
  }

  waitForReady();
})();
