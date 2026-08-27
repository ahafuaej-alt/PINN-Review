(() => {
  if (document.body.dataset.framework !== 'design-performance') return;

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
    table.dataset.dpLayoutReady = 'true';
    document.documentElement.dataset.designPerformanceLayout = 'ready';
    return true;
  }

  if (applyLayoutContract()) return;
  const observer = new MutationObserver(() => {
    if (!applyLayoutContract()) return;
    observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
