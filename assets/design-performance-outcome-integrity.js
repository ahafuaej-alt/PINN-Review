(() => {
  if (document.body.dataset.framework !== 'design-performance') return;

  const DATA_URL = '../../data/frameworks/design-performance.json';
  const META_URL = '../../data/frameworks/design-performance-v2.json';
  let data = null;
  let meta = null;
  let ready = null;

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  function load() {
    ready ||= Promise.all([
      fetch(DATA_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`design-performance.json returned ${response.status}`))),
      fetch(META_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`design-performance-v2.json returned ${response.status}`)))
    ]).then(([matrix, metadata]) => {
      data = matrix;
      meta = metadata;
    }).catch((error) => console.error('Design–Performance outcome inspector integrity could not initialize.', error));
    return ready;
  }

  async function ensureOutcome(id) {
    await load();
    const column = data?.columns?.find((item) => item.id === id);
    const outcome = meta?.outcomes?.[id];
    const detail = document.querySelector('.framework-detail[data-detail]');
    if (!column || !outcome || !detail) return;

    const text = detail.innerText || '';
    const complete = text.includes(column.title) && text.includes('Do not infer') && text.includes('Typical verification quantities');
    if (complete) return;

    detail.innerHTML = `<div class="framework-inspector-head"><div><p class="eyebrow">Performance outcome</p><h2>${esc(column.code)} · ${esc(column.title)}</h2></div></div>
      <section class="framework-inspector-section"><h3>Scientific meaning</h3><p>${esc(outcome.summary)}</p><p class="dp-caution"><b>Do not infer:</b> ${esc(outcome.caution)}</p></section>
      <section class="framework-inspector-section"><h3>Typical verification quantities</h3><ul>${(outcome.typical_metrics || []).map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>
      <section class="framework-inspector-section"><h3>Design dependencies</h3><p>Select a matrix cell in this outcome column to inspect the maintained qualitative dependency, evidence scope, and registered trade-offs.</p></section>
      <section class="framework-inspector-section"><h3>Continue through the Atlas</h3><div class="framework-detail-links"><a class="button" href="../../performance-metrics/">Performance Metrics →</a><a class="button" href="../failure-diagnostics/">Failure Diagnostics →</a><a class="button" href="../design-stack/">Design Stack →</a><a class="button" href="../co-design/">Co-Design →</a></div></section>`;
    detail.dataset.dpOutcomeInspector = id;
    window.AtlasConcepts?.enhance(detail);
  }

  function scheduleFrom(target) {
    const outcome = target?.closest?.('[data-dp-outcome]');
    if (!outcome) return;
    requestAnimationFrame(() => requestAnimationFrame(() => ensureOutcome(outcome.dataset.dpOutcome)));
  }

  document.addEventListener('click', (event) => scheduleFrom(event.target));
  document.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    scheduleFrom(event.target);
  });

  load();
})();
