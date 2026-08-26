(() => {
  'use strict';

  const rootHref = document.querySelector('.brand')?.getAttribute('href') || './';
  const rootUrl = new URL(rootHref, document.baseURI);
  const coreRegistryUrl = new URL('data/concepts/core.json', rootUrl);
  const fullRegistryUrl = new URL('data/concepts/registry.json', rootUrl);
  const evidenceUrl = new URL('data/concepts/evidence-relationships.json', rootUrl);
  const state = { registry: null, byId: new Map(), evidence: null, fullRegistryPromise: null, activeId: null, returnFocus: null, observer: null, queued: false };
  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const absoluteHref = (href) => new URL(href, rootUrl).href;

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = new URL('assets/concepts.css?v=knowledge-20260826', rootUrl).href;
  style.dataset.atlasConceptStyles = '';
  if (!document.querySelector('[data-atlas-concept-styles]')) document.head.append(style);

  const tooltip = document.createElement('div');
  tooltip.className = 'atlas-concept-tooltip';
  tooltip.id = 'atlas-concept-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.hidden = true;

  const backdrop = document.createElement('div');
  backdrop.className = 'atlas-concept-backdrop';
  backdrop.hidden = true;

  const inspector = document.createElement('aside');
  inspector.className = 'atlas-concept-inspector';
  inspector.id = 'atlas-concept-inspector';
  inspector.setAttribute('role', 'dialog');
  inspector.setAttribute('aria-modal', 'true');
  inspector.setAttribute('aria-labelledby', 'atlas-concept-title');
  inspector.hidden = true;
  inspector.innerHTML = '<button class="atlas-concept-close" type="button" aria-label="Close concept inspector">×</button><div data-concept-inspector-content></div>';
  document.body.append(tooltip, backdrop, inspector);

  const api = {
    ready: null,
    get: (id) => state.byId.get(id) || null,
    href: (id) => {
      const concept = state.byId.get(id);
      return concept?.destinations?.[0] ? absoluteHref(concept.destinations[0].href) : null;
    },
    open: (id, source) => openInspector(id, source),
    enhance: (root = document) => enhance(root)
  };
  window.AtlasConcepts = api;

  api.ready = fetch(coreRegistryUrl, { cache: 'no-store' })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error(`Concept registry returned ${response.status}`)))
    .then((registry) => {
      state.registry = registry;
      state.byId = new Map(registry.concepts.map((concept) => [concept.id, concept]));
      enhance(document);
      startObserver();
      const requested = new URL(location.href).searchParams.get('concept');
      if (requested) openInspector(requested, null, false);
      document.dispatchEvent(new CustomEvent('atlas:concepts-ready', { detail: { count: registry.totalConcepts || registry.concepts.length } }));
      return registry;
    })
    .catch((error) => console.error('Canonical concept registry could not be initialized.', error));

  function enhance(root) {
    if (!state.registry || !root) return;
    root.querySelectorAll?.('[data-concept-id]').forEach(enhanceExplicitConcept);
    root.querySelectorAll?.('[data-concept-open]').forEach(enhanceOpenLink);
    autoLink(root);
  }

  function enhanceExplicitConcept(element) {
    const concept = state.byId.get(element.dataset.conceptId);
    if (element.dataset.conceptReady === 'true') return;
    element.dataset.conceptReady = 'true';
    element.classList.add('atlas-concept');
    if (!element.matches('button,a')) {
      element.tabIndex = 0;
      element.setAttribute('role', 'button');
    }
    element.setAttribute('aria-haspopup', 'dialog');
    element.setAttribute('aria-expanded', 'false');
    element.setAttribute('aria-label', `${concept?.label || element.textContent.trim() || 'Scientific concept'}. Open concept details.`);
  }

  function enhanceOpenLink(element) {
    const concept = state.byId.get(element.dataset.conceptOpen);
    if (!concept?.destinations?.length) return;
    element.href = absoluteHref(concept.destinations[0].href);
    element.setAttribute('aria-label', `Open canonical entry for ${concept.label}`);
  }

  function autoLink(root) {
    const rules = state.registry.autoLink || [];
    if (!rules.length || !(root instanceof Element || root instanceof Document || root instanceof DocumentFragment)) return;
    const termMap = new Map();
    for (const rule of rules) for (const term of rule.terms || []) termMap.set(term.toLocaleLowerCase('en'), rule.id);
    const terms = [...termMap.keys()].sort((a, b) => b.length - a.length);
    if (!terms.length) return;
    const expression = new RegExp(`\\b(${terms.map(escapeRegExp).join('|')})\\b`, 'giu');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue?.trim() || !expression.test(node.nodeValue)) { expression.lastIndex = 0; return NodeFilter.FILTER_REJECT; }
        expression.lastIndex = 0;
        const parent = node.parentElement;
        if (!parent || parent.closest('a,button,label,summary,select,option,textarea,input,pre,code,kbd,samp,script,style,svg,math,[contenteditable="true"],[data-no-concept-link],[data-concept-id]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      expression.lastIndex = 0;
      for (const match of node.nodeValue.matchAll(expression)) {
        if (match.index > cursor) fragment.append(node.nodeValue.slice(cursor, match.index));
        const id = termMap.get(match[0].toLocaleLowerCase('en'));
        const concept = state.byId.get(id);
        if (!concept) { fragment.append(match[0]); cursor = match.index + match[0].length; continue; }
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'atlas-concept';
        button.dataset.conceptId = id;
        button.dataset.conceptReady = 'true';
        button.setAttribute('aria-haspopup', 'dialog');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', `${concept.label}. Open concept details.`);
        button.textContent = match[0];
        fragment.append(button);
        cursor = match.index + match[0].length;
      }
      if (cursor < node.nodeValue.length) fragment.append(node.nodeValue.slice(cursor));
      node.replaceWith(fragment);
    }
  }

  function startObserver() {
    state.observer = new MutationObserver((mutations) => {
      if (state.queued) return;
      const roots = mutations.flatMap((mutation) => [...mutation.addedNodes]).filter((node) => node.nodeType === Node.ELEMENT_NODE);
      if (!roots.length) return;
      state.queued = true;
      requestAnimationFrame(() => {
        state.queued = false;
        state.observer.disconnect();
        roots.forEach((root) => enhance(root));
        state.observer.observe(document.body, { childList: true, subtree: true });
      });
    });
    state.observer.observe(document.body, { childList: true, subtree: true });
  }

  function showTooltip(target) {
    const concept = state.byId.get(target.dataset.conceptId);
    if (!concept || !inspector.hidden) return;
    tooltip.innerHTML = `<strong>${escapeHtml(concept.label)}</strong><span>${escapeHtml(concept.shortMeaning)}</span><small>${concept.destinations.length} destination${concept.destinations.length === 1 ? '' : 's'} · Select for details</small>`;
    tooltip.hidden = false;
    target.setAttribute('aria-describedby', tooltip.id);
    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const left = Math.max(10, Math.min(innerWidth - tooltipRect.width - 10, rect.left + rect.width / 2 - tooltipRect.width / 2));
    const above = rect.top - tooltipRect.height - 10;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${above > 8 ? above : rect.bottom + 10}px`;
  }

  function hideTooltip(target) {
    tooltip.hidden = true;
    target?.removeAttribute('aria-describedby');
  }

  async function openInspector(id, source = null, updateUrl = true) {
    await api.ready;
    let concept = state.byId.get(id);
    if (!concept) {
      await loadFullRegistry();
      concept = state.byId.get(id);
    }
    if (!concept) return;
    hideTooltip(source);
    state.activeId = id;
    state.returnFocus = source instanceof HTMLElement ? source : document.activeElement;
    document.querySelectorAll('[data-concept-id][aria-expanded="true"]').forEach((element) => element.setAttribute('aria-expanded', 'false'));
    source?.setAttribute?.('aria-expanded', 'true');
    inspector.querySelector('[data-concept-inspector-content]').innerHTML = renderInspector(concept);
    inspector.hidden = false;
    backdrop.hidden = false;
    document.documentElement.classList.add('concept-inspector-open');
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('concept', id);
      history.replaceState(null, '', url);
    }
    inspector.querySelector('.atlas-concept-close').focus({ preventScroll: true });
    renderEvidence(concept);
  }

  function loadFullRegistry() {
    state.fullRegistryPromise ||= fetch(fullRegistryUrl, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(`Full concept registry returned ${response.status}`)))
      .then((registry) => {
        state.registry = registry;
        state.byId = new Map(registry.concepts.map((concept) => [concept.id, concept]));
        enhance(document);
        return registry;
      });
    return state.fullRegistryPromise;
  }

  function renderInspector(concept) {
    const destinations = concept.destinations.map((destination, index) => `<a class="atlas-concept-destination${index === 0 ? ' primary' : ''}" href="${escapeHtml(absoluteHref(destination.href))}"><span>${escapeHtml(destination.label)}</span><b>${index === 0 ? 'Open →' : 'View →'}</b></a>`).join('');
    const contexts = concept.appearsIn?.length ? concept.appearsIn.map((context) => `<a href="${escapeHtml(absoluteHref(context.href))}"><span>${escapeHtml(context.context || 'Atlas context')}</span><strong>${escapeHtml(context.label)}</strong><b aria-hidden="true">→</b></a>`).join('') : '<p class="atlas-concept-empty">No additional maintained contexts are registered yet.</p>';
    return `<header class="atlas-concept-head"><p>${escapeHtml(concept.category)}</p><h2 id="atlas-concept-title">${escapeHtml(concept.label)}</h2><code>${escapeHtml(concept.id)}</code></header>
      <p class="atlas-concept-meaning">${escapeHtml(concept.shortMeaning)}</p>
      <section><h3>Canonical destination${concept.destinations.length === 1 ? '' : 's'}</h3><div class="atlas-concept-destinations">${destinations}</div></section>
      <section><h3>Where this concept appears</h3><div class="atlas-concept-contexts">${contexts}</div></section>
      <section data-concept-evidence-section ${concept.evidenceCount ? '' : 'hidden'}><h3>${concept.category === 'Reference' ? 'Supported concepts and claims' : 'Supporting evidence'}</h3><div class="atlas-concept-evidence" data-concept-evidence><p>Loading claim-level relationships…</p></div></section>
      <footer><button type="button" class="atlas-concept-copy" data-copy-concept-link>Copy concept link</button><span>${concept.evidenceCount || 0} claim-level relationship${concept.evidenceCount === 1 ? '' : 's'}</span></footer>`;
  }

  async function renderEvidence(concept) {
    if (!concept.evidenceCount) return;
    try {
      state.evidence ||= await fetch(evidenceUrl, { cache: 'no-store' }).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Evidence graph returned ${response.status}`)));
      if (state.activeId !== concept.id) return;
      const isReference = concept.category === 'Reference';
      const referenceId = isReference ? Number(concept.id.split(':')[1]) : null;
      const relationships = state.evidence.relationships.filter((relation) => isReference ? relation.paperId === referenceId : relation.objectId === concept.id);
      const host = inspector.querySelector('[data-concept-evidence]');
      host.innerHTML = relationships.slice(0, 12).map((relation) => {
        const targetConcept = state.byId.get(relation.objectId);
        const href = isReference && targetConcept?.destinations?.[0] ? absoluteHref(targetConcept.destinations[0].href) : absoluteHref(`references/#ref=${relation.paperId}`);
        const linkLabel = isReference ? (targetConcept?.label || relation.claim) : `[${relation.paperId}]`;
        return `<article><a href="${escapeHtml(href)}">${escapeHtml(linkLabel)}</a><div><strong>${escapeHtml(relation.supportType)}</strong><p>${escapeHtml(relation.rationale)}</p></div></article>`;
      }).join('') + (relationships.length > 12 ? `<p class="atlas-concept-evidence-more">${relationships.length - 12} additional relationships remain available in the evidence graph.</p>` : '');
    } catch (_) {
      const host = inspector.querySelector('[data-concept-evidence]');
      if (host) host.innerHTML = '<p>Claim-level evidence is temporarily unavailable.</p>';
    }
  }

  function closeInspector(updateUrl = true) {
    if (inspector.hidden) return;
    inspector.hidden = true;
    backdrop.hidden = true;
    document.documentElement.classList.remove('concept-inspector-open');
    document.querySelectorAll('[data-concept-id][aria-expanded="true"]').forEach((element) => element.setAttribute('aria-expanded', 'false'));
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.delete('concept');
      history.replaceState(null, '', url);
    }
    state.returnFocus?.focus?.({ preventScroll: true });
    state.activeId = null;
  }

  document.addEventListener('pointerover', (event) => { const target = event.target.closest?.('[data-concept-id]'); if (target) showTooltip(target); });
  document.addEventListener('pointerout', (event) => { const target = event.target.closest?.('[data-concept-id]'); if (target && !target.contains(event.relatedTarget)) hideTooltip(target); });
  document.addEventListener('focusin', (event) => { const target = event.target.closest?.('[data-concept-id]'); if (target) showTooltip(target); });
  document.addEventListener('focusout', (event) => { const target = event.target.closest?.('[data-concept-id]'); if (target) hideTooltip(target); });
  document.addEventListener('click', (event) => {
    const concept = event.target.closest?.('[data-concept-id]');
    if (concept) { event.preventDefault(); openInspector(concept.dataset.conceptId, concept); return; }
    if (event.target.closest?.('[data-copy-concept-link]')) {
      const record = state.byId.get(state.activeId);
      const url = new URL(record.destinations[0].href, rootUrl);
      url.searchParams.set('concept', record.id);
      navigator.clipboard?.writeText(url.href);
      const button = event.target.closest('[data-copy-concept-link]');
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy concept link'; }, 1400);
    }
  });
  document.addEventListener('keydown', (event) => {
    const target = event.target.closest?.('[data-concept-id]');
    if (target && !target.matches('button,a') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openInspector(target.dataset.conceptId, target); }
    if (event.key === 'Escape' && !inspector.hidden) closeInspector();
  });
  inspector.querySelector('.atlas-concept-close').addEventListener('click', () => closeInspector());
  backdrop.addEventListener('click', () => closeInspector());
  addEventListener('popstate', () => {
    const requested = new URL(location.href).searchParams.get('concept');
    if (requested && state.byId.has(requested)) openInspector(requested, null, false);
    else closeInspector(false);
  });

  function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
})();
