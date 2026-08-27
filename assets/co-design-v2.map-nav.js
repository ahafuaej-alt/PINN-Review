(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const waitForMap = () => new Promise((resolve) => {
    const ready = () => {
      const canvas = document.querySelector('[data-canvas]');
      const board = document.querySelector('.co-board[data-relation-board]');
      if (canvas && board && document.documentElement.dataset.coDesignV2 === 'ready') {
        resolve({ canvas, board });
        return true;
      }
      return false;
    };
    if (ready()) return;
    const observer = new MutationObserver(() => {
      if (!ready()) return;
      observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  });

  const labels = [
    ['problem', '1 · Physical Problem & Role'],
    ['representation', '2 · Representation'],
    ['physics', '3 · Physics & Constraints'],
    ['core', 'PINN Co-Design · center'],
    ['training', '5 · Training & Optimization'],
    ['numerical', '4 · Numerical Realization'],
    ['reliability', '6 · Verification & Reliability']
  ];

  waitForMap().then(({ canvas, board }) => {
    const controls = document.querySelector('.co-v2-controls');
    if (!controls || controls.querySelector('[data-co-map-nav]')) return;

    controls.insertAdjacentHTML('beforeend', `
      <div class="co-map-nav" data-co-map-nav aria-label="Large Co-Design map navigation">
        <label class="co-map-jump"><span>Map focus</span><select aria-label="Jump to Co-Design map domain">
          ${labels.map(([id, label]) => `<option value="${id}"${id === 'core' ? ' selected' : ''}>${label}</option>`).join('')}
        </select></label>
        <button class="button" type="button" data-co-center>Center map</button>
        <span class="co-map-hint">Large systems map · select any arrow label for direction, mechanism, consequence, and evidence.</span>
      </div>`);

    const isMobileStack = () => matchMedia('(max-width: 820px)').matches && !board.classList.contains('force-full-map');

    const focusNode = (id, behavior = 'smooth') => {
      const node = board.querySelector(`[data-node-id="${CSS.escape(id)}"]`);
      if (!node) return;
      if (isMobileStack()) {
        node.scrollIntoView({ behavior, block: 'start' });
        return;
      }
      const nodeRect = node.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const left = canvas.scrollLeft + nodeRect.left + nodeRect.width / 2 - canvasRect.left - canvas.clientWidth / 2;
      const top = canvas.scrollTop + nodeRect.top + nodeRect.height / 2 - canvasRect.top - canvas.clientHeight / 2;
      canvas.scrollTo({ left: Math.max(0, left), top: Math.max(0, top), behavior });
    };

    const select = controls.querySelector('.co-map-jump select');
    select.addEventListener('change', () => focusNode(select.value));
    controls.querySelector('[data-co-center]').addEventListener('click', () => {
      select.value = 'core';
      focusNode('core');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-fit],[data-reset],[data-expand],[data-co-full-map]')) return;
      setTimeout(() => focusNode(select.value || 'core'), 80);
    });

    const hashId = new URLSearchParams(location.hash.replace(/^#/, '')).get('item');
    const initial = hashId && board.querySelector(`[data-node-id="${CSS.escape(hashId)}"]`) ? hashId : 'core';
    select.value = initial;
    requestAnimationFrame(() => requestAnimationFrame(() => focusNode(initial, 'auto')));
  });
})();
