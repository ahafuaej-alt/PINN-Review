(() => {
  const selector = '.toolbar-export, .toolbar-contribute';

  function position(details) {
    details.classList.remove('opens-upward');
    if (!details.open) return;
    const summary = details.querySelector('summary');
    const menu = details.querySelector(':scope > div');
    if (!summary || !menu) return;
    const summaryRect = summary.getBoundingClientRect();
    const menuHeight = menu.getBoundingClientRect().height;
    const gap = 8;
    const roomBelow = window.innerHeight - summaryRect.bottom - gap;
    const roomAbove = summaryRect.top - gap;
    if (menuHeight > roomBelow && roomAbove > roomBelow) details.classList.add('opens-upward');
  }

  function bind(details) {
    if (details.dataset.popoverPositionBound) return;
    details.dataset.popoverPositionBound = 'true';
    details.addEventListener('toggle', () => position(details));
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
