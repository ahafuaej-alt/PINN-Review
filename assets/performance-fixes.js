(() => {
  'use strict';

  const chart = document.querySelector('[data-top-metrics]');
  const metricSelect = document.querySelector('[data-metric]');
  const paperResults = document.querySelector('[data-papers]');
  const resultSummary = document.querySelector('[data-result-summary]');
  const metricExplorer = document.querySelector('[data-metric-explorer]');
  if (!chart || !metricSelect) return;

  const readableName = (value) => String(value || '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const ensureMetricOptions = () => {
    chart.querySelectorAll('[data-metric-id]').forEach((button) => {
      const metricId = button.dataset.metricId;
      if (!metricId || metricSelect.querySelector(`option[value="${CSS.escape(metricId)}"]`)) return;
      const option = document.createElement('option');
      option.value = metricId;
      option.textContent = button.querySelector('.metric-bar-label')?.textContent?.trim() || readableName(metricId);
      option.dataset.sourceOnly = 'true';
      metricSelect.append(option);
    });
  };

  const updateActiveBars = () => {
    const selectedMetric = metricSelect.value;
    chart.querySelectorAll('[data-metric-id]').forEach((button) => {
      const active = button.dataset.metricId === selectedMetric;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
  };

  const explainSourceOnlyMetric = () => {
    const selected = metricSelect.selectedOptions[0];
    if (!selected?.dataset.sourceOnly || !metricExplorer || metricExplorer.children.length) return;
    metricExplorer.innerHTML = `<article class="performance-card source-only-metric-note"><p class="eyebrow">Source-only metric</p><h3>${selected.textContent}</h3><p>This metric is reported in the paper-level extraction but is not yet defined as a separate entry in the 123-metric taxonomy. The paper records below remain filterable and preserve the original source wording.</p></article>`;
  };

  const applyMetric = (metricId) => {
    ensureMetricOptions();
    metricSelect.value = metricId;
    metricSelect.dispatchEvent(new Event('change', { bubbles: true }));
    queueMicrotask(() => {
      updateActiveBars();
      explainSourceOnlyMetric();
      resultSummary?.setAttribute('tabindex', '-1');
      resultSummary?.focus({ preventScroll: true });
      paperResults?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  chart.addEventListener('click', (event) => {
    const button = event.target.closest('[data-metric-id]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    applyMetric(button.dataset.metricId);
  }, true);

  metricSelect.addEventListener('change', () => {
    queueMicrotask(() => {
      updateActiveBars();
      explainSourceOnlyMetric();
    });
  });

  const observer = new MutationObserver(() => {
    ensureMetricOptions();
    updateActiveBars();
    chart.querySelectorAll('[data-metric-id]').forEach((button) => {
      const name = button.querySelector('.metric-bar-label')?.textContent?.trim() || readableName(button.dataset.metricId);
      const count = button.querySelector('.metric-bar-count')?.textContent?.trim() || '';
      button.title = `Filter papers reporting ${name}${count ? ` (${count} papers)` : ''}`;
      button.setAttribute('aria-label', button.title);
    });
  });
  observer.observe(chart, { childList: true, subtree: true });
  ensureMetricOptions();
  updateActiveBars();
})();
