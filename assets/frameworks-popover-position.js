(() => {
  const selector = '.toolbar-export, .toolbar-contribute';

  function shouldOpenUpward(details) {
    const summary = details.querySelector('summary');
    const menu = details.querySelector(':scope > div');
    if (!summary || !menu) return false;
    const summaryRect = summary.getBoundingClientRect();
    const gap = 8;
    const roomBelow = window.innerHeight - summaryRect.bottom - gap;
    const roomAbove = summaryRect.top - gap;
    const renderedHeight = menu.getBoundingClientRect().height;
    const estimatedHeight = renderedHeight || Math.min(window.innerHeight * .6, Math.max(56, menu.children.length * 44 + 16));
    return estimatedHeight > roomBelow && roomAbove > roomBelow;
  }

  function position(details) {
    if (!details.open) return;
    details.classList.toggle('opens-upward', shouldOpenUpward(details));
  }

  function bind(details) {
    if (details.dataset.popoverPositionBound) return;
    details.dataset.popoverPositionBound = 'true';
    const summary = details.querySelector('summary');
    summary?.addEventListener('click', () => {
      if (!details.open) details.classList.toggle('opens-upward', shouldOpenUpward(details));
    }, true);
    details.addEventListener('toggle', () => {
      if (details.open) position(details);
      else details.classList.remove('opens-upward');
    });
  }

  function bindAll(root = document) {
    root.querySelectorAll(selector).forEach(bind);
  }

  const mount = document.querySelector('[data-framework-page]');
  if (mount) {
    const observer = new MutationObserver(() => bindAll(mount));
    observer.observe(mount, { childList: true, subtree: true });
  }
  bindAll();

  window.addEventListener('resize', () => document.querySelectorAll(`${selector}[open]`).forEach(position), { passive: true });
})();
