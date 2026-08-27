(() => {
  if (document.body.dataset.framework !== 'co-design') return;

  const prefix = '../../';
  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const nativeRevokeObjectUrl = URL.revokeObjectURL.bind(URL);
  URL.revokeObjectURL = (url) => {
    if (String(url).startsWith('blob:')) setTimeout(() => nativeRevokeObjectUrl(url), 1200);
    else nativeRevokeObjectUrl(url);
  };
  let attempts = 0;
  let relationMap = new Map();
  let titleMap = new Map([['core', 'PINN Co-Design']]);
  let inspectorObserver = null;

  const enhanceConcepts = () => {
    const board = document.querySelector('.co-board');
    const concepts = board?.querySelectorAll('.co-concept-item') || [];
    if (board && concepts.length && window.AtlasConcepts?.enhance) {
      window.AtlasConcepts.enhance(board);
      document.documentElement.dataset.coDesignConcepts = 'ready';
      return;
    }
    if (attempts++ < 80) setTimeout(enhanceConcepts, 50);
  };

  const semanticLabel = (meta) => {
    if (meta.semantic === 'feedback') return 'Verification feedback';
    if (meta.semantic === 'verification') return 'Verification dependency';
    if (meta.pair) return 'Directional influence · reciprocal pair member';
    return 'Directional influence';
  };

  function selectedRelationId() {
    return new URLSearchParams(location.hash.replace(/^#/, '')).get('item') || '';
  }

  function inspectorIsCurrent(detail, id) {
    return detail?.dataset.coV2Enriched === id && Boolean(detail.querySelector('.co-v2-inspector-grid'));
  }

  function enrichInspector() {
    const id = selectedRelationId();
    const meta = relationMap.get(id);
    const detail = document.querySelector('[data-detail]');
    if (!meta || !detail || inspectorIsCurrent(detail, id)) return;
    const relationships = detail.querySelector('[data-inspector-section="relationships"]');
    if (!relationships) return;
    const source = titleMap.get(meta.from) || meta.from;
    const target = titleMap.get(meta.to) || meta.to;
    const heading = detail.querySelector('.framework-inspector-head h2');
    if (heading) heading.textContent = meta.label;
    const meaning = detail.querySelector('[data-inspector-section="meaning"]');
    if (meaning) meaning.innerHTML = `<h3>Scientific meaning</h3><p>${esc(meta.mechanism)}</p>`;
    relationships.innerHTML = `<h3>Relationships</h3>
      <div class="co-v2-route"><span>${esc(source)}</span><i>→</i><span>${esc(target)}</span></div>
      <div class="co-v2-inspector-grid">
        <article><b>Direction</b><p>${esc(semanticLabel(meta))}</p></article>
        <article><b>Mechanism</b><p>${esc(meta.mechanism)}</p></article>
        <article><b>Scientific consequence</b><p>${esc(meta.consequence)}</p></article>
        ${meta.pair ? '<article><b>Reciprocal structure</b><p>The reverse direction is stored and evidenced separately; this arrow does not imply symmetry of mechanism.</p></article>' : ''}
        ${meta.semantic === 'feedback' ? `<article><b>Observed signal</b><p>${esc(meta.trigger)}</p></article><article><b>Targeted redesign</b><p>${esc(meta.action)}</p></article>` : ''}
      </div>`;
    detail.dataset.coV2Enriched = id;
  }

  function queueInspectorEnrichment() {
    const detail = document.querySelector('[data-detail]');
    const id = selectedRelationId();
    if (!detail || !id || !relationMap.has(id) || inspectorIsCurrent(detail, id)) return;
    queueMicrotask(enrichInspector);
  }

  function bindInspectorObserver() {
    if (inspectorObserver) return;
    inspectorObserver = new MutationObserver(queueInspectorEnrichment);
    inspectorObserver.observe(document.body, { childList: true, subtree: true });
    const resetAndEnrich = (event) => {
      const item = event.target.closest?.('[data-inspect-id]');
      if (!item || !relationMap.has(item.dataset.inspectId)) return;
      document.querySelector('[data-detail]')?.removeAttribute('data-co-v2-enriched');
      setTimeout(enrichInspector, 0);
      setTimeout(enrichInspector, 50);
      setTimeout(enrichInspector, 150);
    };
    document.addEventListener('click', resetAndEnrich, true);
    document.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      resetAndEnrich(event);
    }, true);
  }

  Promise.all([
    fetch(`${prefix}data/frameworks/co-design.json`).then((response) => response.json()),
    fetch(`${prefix}data/frameworks/co-design-v2.json`).then((response) => response.json())
  ]).then(([page, config]) => {
    page.domains.forEach((domain) => titleMap.set(domain.id, domain.title));
    const base = new Map(page.relationships.map((relation) => [relation.id, relation]));
    relationMap = new Map(config.relations.map((meta) => {
      const relation = base.get(meta.id) || {};
      return [meta.id, { ...meta, from: relation.from, to: relation.to }];
    }));
    bindInspectorObserver();
    queueInspectorEnrichment();
  }).catch((error) => console.error('Co-Design relationship inspector bridge could not initialize.', error));

  enhanceConcepts();
})();
