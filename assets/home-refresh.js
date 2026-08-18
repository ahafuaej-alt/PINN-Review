(() => {
  'use strict';

  const accessibilityStyle = document.createElement('style');
  accessibilityStyle.textContent = '.home-refresh .visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}';
  document.head.append(accessibilityStyle);

  const navMount = document.querySelector('.site-header .nav-links');
  if (navMount && !navMount.classList.contains('atlas-global-nav')) navMount.replaceChildren();

  const rootHref = document.querySelector('.brand')?.getAttribute('href') || './';
  const number = new Intl.NumberFormat('en');
  const date = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

  const formatValue = (_key, value) => {
    if (!Number.isFinite(Number(value))) return String(value ?? '—');
    return number.format(Number(value));
  };

  const applyOverview = (overview) => {
    const stats = overview?.stats || {};
    document.querySelectorAll('[data-overview-value]').forEach((node) => {
      const key = node.dataset.overviewValue;
      if (!(key in stats)) return;
      node.textContent = formatValue(key, stats[key]);
    });

    document.querySelectorAll('[data-overview-aria]').forEach((node) => {
      const key = node.dataset.overviewAria;
      if (!(key in stats)) return;
      node.setAttribute('aria-label', `${formatValue(key, stats[key])} ${node.dataset.overviewUnit || ''}`.trim());
    });

    const lastUpdated = document.querySelector('[data-overview-updated]');
    if (lastUpdated && overview.last_source_update) {
      const parsed = new Date(`${overview.last_source_update}T00:00:00Z`);
      if (!Number.isNaN(parsed.getTime())) lastUpdated.textContent = `Latest source update ${date.format(parsed)}`;
    }

    document.documentElement.dataset.atlasOverview = 'ready';
  };

  fetch(`${rootHref}data/atlas-overview.json`, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Atlas overview returned ${response.status}`);
      return response.json();
    })
    .then(applyOverview)
    .catch(() => {
      document.documentElement.dataset.atlasOverview = 'fallback';
      const lastUpdated = document.querySelector('[data-overview-updated]');
      if (lastUpdated) lastUpdated.textContent = 'Snapshot values shown from the published page fallback.';
    });
})();
