(() => {
  const key = 'pinn-atlas-theme';
  let saved = 'system';
  try { saved = localStorage.getItem(key) || 'system'; } catch (_) { /* Use the system preference. */ }
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  const effective = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'dark' ? '#09111d' : '#f5f8fb');
})();
