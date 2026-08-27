(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const CARD_SELECTOR = '.co-domain, .co-core';
  const LABEL_SELECTOR = '.co-label-layer .co-v2-caption';
  let observer = null;
  let placing = false;
  let resizeTimer = 0;

  const intersects = (a, b, padding = 0) => !(
    a.right + padding <= b.left ||
    a.left >= b.right + padding ||
    a.bottom + padding <= b.top ||
    a.top >= b.bottom + padding
  );

  const expand = (rect, amount) => ({
    left: rect.left - amount,
    right: rect.right + amount,
    top: rect.top - amount,
    bottom: rect.bottom + amount
  });

  const shifted = (rect, x, y) => ({
    left: rect.left + x,
    right: rect.right + x,
    top: rect.top + y,
    bottom: rect.bottom + y,
    width: rect.width,
    height: rect.height
  });

  function screenCandidates(label) {
    const semantic = label.dataset.semantic || 'influence';
    const vertical = semantic === 'feedback' || semantic === 'verification';
    const angles = vertical
      ? [-90, 90, 180, 0, -135, -45, 135, 45, -67.5, 67.5, -112.5, 112.5, -22.5, 22.5, -157.5, 157.5]
      : [0, 180, -90, 90, -45, -135, 45, 135, -22.5, -157.5, -67.5, -112.5, 22.5, 157.5, 67.5, 112.5];
    const radii = [0, 44, 72, 104, 140, 184, 232, 288, 352, 424, 504, 592];
    const candidates = [];
    radii.forEach((radius) => {
      if (radius === 0) {
        candidates.push({ x: 0, y: 0, distance: 0 });
        return;
      }
      angles.forEach((degrees, order) => {
        const radians = degrees * Math.PI / 180;
        candidates.push({
          x: Math.cos(radians) * radius,
          y: Math.sin(radians) * radius,
          distance: radius + order * .02
        });
      });
    });
    return candidates;
  }

  function overlapArea(a, b) {
    const width = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
    const height = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    return width * height;
  }

  function placeLabels() {
    if (placing) return;
    const board = document.querySelector('.co-board');
    const relationLayer = board?.querySelector('.co-relation-layer');
    const labelLayer = board?.querySelector('.co-label-layer');
    const labels = labelLayer ? [...labelLayer.querySelectorAll('.co-v2-caption')] : [];
    if (!board || !relationLayer || !labelLayer || labels.length !== 20) return;

    placing = true;
    try {
      const boardRect = board.getBoundingClientRect();
      const relationRect = relationLayer.getBoundingClientRect();
      const viewBox = relationLayer.viewBox?.baseVal;
      const svgPerScreenX = relationRect.width && viewBox?.width ? viewBox.width / relationRect.width : 1;
      const svgPerScreenY = relationRect.height && viewBox?.height ? viewBox.height / relationRect.height : 1;
      const obstacles = [...board.querySelectorAll(CARD_SELECTOR)].map((node) => expand(node.getBoundingClientRect(), 16));
      const accepted = [];

      labels.forEach((label) => {
        label.removeAttribute('transform');
        const base = label.getBoundingClientRect();
        let chosen = null;
        let bestFallback = null;

        for (const candidate of screenCandidates(label)) {
          const test = shifted(base, candidate.x, candidate.y);
          const outside = test.left < boardRect.left + 14 || test.right > boardRect.right - 14 || test.top < boardRect.top + 14 || test.bottom > boardRect.bottom - 14;
          if (outside) continue;
          const cardCollision = obstacles.some((rect) => intersects(test, rect));
          const labelCollision = accepted.some((rect) => intersects(test, rect, 10));
          if (!cardCollision && !labelCollision) {
            chosen = candidate;
            break;
          }

          const collisionArea = obstacles.reduce((sum, rect) => sum + overlapArea(test, rect), 0)
            + accepted.reduce((sum, rect) => sum + overlapArea(test, expand(rect, 10)), 0);
          const score = collisionArea * 100 + candidate.distance;
          if (!bestFallback || score < bestFallback.score) bestFallback = { ...candidate, score };
        }

        if (!chosen) {
          const step = 42;
          const maxX = Math.min(760, Math.max(0, boardRect.width - base.width));
          const maxY = Math.min(620, Math.max(0, boardRect.height - base.height));
          outer: for (let radius = step; radius <= Math.max(maxX, maxY); radius += step) {
            for (let x = -radius; x <= radius; x += step) {
              for (const y of [-radius, radius]) {
                const test = shifted(base, x, y);
                if (test.left < boardRect.left + 14 || test.right > boardRect.right - 14 || test.top < boardRect.top + 14 || test.bottom > boardRect.bottom - 14) continue;
                if (obstacles.some((rect) => intersects(test, rect)) || accepted.some((rect) => intersects(test, rect, 10))) continue;
                chosen = { x, y, distance: Math.hypot(x, y) };
                break outer;
              }
            }
            for (let y = -radius + step; y < radius; y += step) {
              for (const x of [-radius, radius]) {
                const test = shifted(base, x, y);
                if (test.left < boardRect.left + 14 || test.right > boardRect.right - 14 || test.top < boardRect.top + 14 || test.bottom > boardRect.bottom - 14) continue;
                if (obstacles.some((rect) => intersects(test, rect)) || accepted.some((rect) => intersects(test, rect, 10))) continue;
                chosen = { x, y, distance: Math.hypot(x, y) };
                break outer;
              }
            }
          }
        }

        chosen ||= bestFallback || { x: 0, y: 0 };
        label.setAttribute('transform', `translate(${(chosen.x * svgPerScreenX).toFixed(2)} ${(chosen.y * svgPerScreenY).toFixed(2)})`);
        label.dataset.coLabelPlaced = chosen === bestFallback ? 'best-fit' : 'clear';
        accepted.push(shifted(base, chosen.x, chosen.y));
      });

      document.documentElement.dataset.coDesignLabelLayout = 'ready';
    } finally {
      placing = false;
    }
  }

  function bind() {
    const board = document.querySelector('.co-board');
    const layer = board?.querySelector('.co-label-layer');
    if (!board || !layer || document.documentElement.dataset.coDesignArrange !== 'ready') {
      setTimeout(bind, 50);
      return;
    }

    observer?.disconnect();
    observer = new MutationObserver(() => placeLabels());
    observer.observe(layer, { childList: true });
    placeLabels();

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(placeLabels, 30);
    }, { passive: true });
  }

  bind();
})();
