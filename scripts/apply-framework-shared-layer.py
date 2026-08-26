from pathlib import Path

ROOT = Path('.')


def replace_between(text, start, end, replacement):
    a = text.index(start)
    b = text.index(end, a)
    return text[:a] + replacement.rstrip() + '\n\n  ' + text[b:]


def replace_once(text, old, new):
    if old not in text:
        raise SystemExit(f'anchor not found: {old[:120]!r}')
    return text.replace(old, new, 1)


js_path = ROOT / 'assets/frameworks.js'
js = js_path.read_text()

js = replace_once(
    js,
    "const state = { manifest: null, page: null, objects: new Map(), zoom: 1, filter: 'all', query: '' };",
    "const state = { manifest: null, page: null, objects: new Map(), zoom: 1, filter: 'all', query: '', selectedId: null };"
)

insert_marker = "\n\n  fetch(`${dataRoot}frameworks.json`)"
shared = r'''
  const relationshipMeta = {
    flow: { label: 'Forward dependency', description: 'Primary directional dependency in the maintained framework.' },
    coupling: { label: 'Coupling / interdependence', description: 'Mutually constraining design choices; neither side is treated as independent.' },
    feedback: { label: 'Feedback / redesign', description: 'Evidence-driven return from an observed outcome to an upstream design cause.' },
    selected: { label: 'Selected relationship', description: 'The relationship currently pinned in the inspector.' }
  };

  function frameworkIcon(id, label = '') {
    return `<svg class="framework-icon" viewBox="0 0 24 24" role="img"${label ? ` aria-label="${esc(label)}"` : ' aria-hidden="true"'}><use href="${prefix}assets/framework-icons.svg#icon-${esc(id)}"></use></svg>`;
  }

  function iconForFramework(id) {
    return ({ 'design-stack': 'design', 'co-design': 'coupling', 'design-performance': 'dependency', 'failure-diagnostics': 'diagnosis' })[id] || 'design';
  }

  function iconForItem(item) {
    if (item.kind === 'relationship') return item.type === 'feedback' ? 'feedback' : item.type === 'coupling' ? 'coupling' : 'dependency';
    if (root === 'design-stack') {
      const phase = item.phase || (item.kind === 'phase' ? item.id : '');
      return ({ 'problem-framing': 'problem', formulation: 'physics', training: 'training', reliability: 'reliability' })[phase] || 'design';
    }
    if (root === 'co-design') return ({ problem: 'problem', representation: 'representation', physics: 'physics', numerical: 'numerical', training: 'training', reliability: 'reliability', core: 'coupling' })[item.id] || 'coupling';
    if (root === 'design-performance') return 'dependency';
    if (root === 'failure-diagnostics') return item.kind === 'verification' ? 'reliability' : 'diagnosis';
    return 'design';
  }

  function relationLegend(types) {
    return `<div class="legend-items relationship-legend">${types.map((type) => {
      const meta = relationshipMeta[type];
      return `<article><span class="relation-swatch" data-type="${type}" aria-hidden="true"><i></i></span><div><b>${esc(meta.label)}</b><p>${esc(meta.description)}</p></div></article>`;
    }).join('')}</div>`;
  }
'''
if insert_marker not in js:
    raise SystemExit('shared helper insertion marker missing')
js = js.replace(insert_marker, '\n' + shared + insert_marker, 1)

landing = r'''function renderLanding(manifest) {
    const mount = document.querySelector('[data-framework-cards]');
    mount.innerHTML = manifest.frameworks.map((item) => `
      <a class="framework-card" href="${item.route}">
        <div class="framework-card-heading">${frameworkIcon(iconForFramework(item.id))}<span class="number">${item.number} · ${esc(item.short).toUpperCase()}</span></div>
        <h2>${esc(item.title)}</h2><p>${esc(item.description)}</p>
        <footer><span>${esc(item.kind)}</span><b aria-hidden="true">↗</b></footer>
      </a>`).join('');
  }'''
js = replace_between(js, 'function renderLanding(manifest) {', 'function renderPage(page) {', landing)

toolbar = r'''function renderToolbar(page) {
    return `<div class="framework-toolbar"><div class="container framework-toolbar-inner">
      <label class="toolbar-search"><span class="sr-only">Search this framework</span><input class="framework-search" type="search" value="${esc(state.query)}" placeholder="Search every element and relationship…" aria-label="Search this framework"></label>
      <label class="toolbar-filter"><span class="sr-only">Focus framework subset</span><select data-filter aria-label="Focus framework subset">${page.filters.map((filter) => `<option value="${filter.id}"${state.filter === filter.id ? ' selected' : ''}>${esc(filter.label)}</option>`).join('')}</select></label>
      <button class="button compact" type="button" data-zoom-out aria-label="Zoom out">−</button>
      <span class="zoom-readout" data-zoom-readout>${Math.round(state.zoom * 100)}%</span>
      <button class="button compact" type="button" data-zoom-in aria-label="Zoom in">+</button>
      <button class="button" type="button" data-fit>Fit</button>
      <button class="button" type="button" data-reset>Reset</button>
      <button class="button" type="button" data-expand>Expand view</button>
      <button class="button" type="button" data-legend aria-expanded="false">Legend</button>
      <button class="button" type="button" data-share>Copy shareable link</button>
      <details class="toolbar-export"><summary class="button">Export SVG</summary><div><button type="button" data-svg>Current view SVG</button><button type="button" data-svg-publication>Publication SVG</button></div></details>
      <details class="toolbar-contribute"><summary class="button">Contribute</summary><div><a href="${issueUrl('Suggest an edit', page.title)}" target="_blank" rel="noopener">Suggest an edit ↗</a><a href="${issueUrl('Propose a missing item', page.title)}" target="_blank" rel="noopener">Missing item ↗</a><a href="${issueUrl('Propose a missing relationship', page.title)}" target="_blank" rel="noopener">Missing relationship ↗</a></div></details>
    </div></div>`;
  }'''
js = replace_between(js, 'function renderToolbar(page) {', 'function renderLegend(page) {', toolbar)

legend = r'''function renderLegend(page) {
    if (root === 'design-performance') return `<div class="legend-title"><strong>Qualitative influence level</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div><div class="legend-items">${page.legend.map((item) => `<article><span class="influence-marker" data-level="${item.id}" aria-hidden="true"></span><div><b>${esc(item.label)}</b><p>${esc(item.description)}</p></div></article>`).join('')}<article><span class="tradeoff-symbol" aria-hidden="true">↕</span><div><b>Trade-off indicator</b><p>Improvement in one dimension may increase cost or reduce another.</p></div></article><article><span class="relation-swatch" data-type="selected"><i></i></span><div><b>${relationshipMeta.selected.label}</b><p>${relationshipMeta.selected.description}</p></div></article></div>`;
    if (root === 'failure-diagnostics') return `<div class="legend-title"><strong>Diagnostic relationship legend</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div>${relationLegend(['flow', 'feedback', 'selected'])}<div class="legend-path"><span>Challenge</span><i>→</i><span>Symptoms</span><i>→</i><span>Response</span><i>→</i><span>Improvement</span><i>↻</i><span>Verify / re-diagnose</span></div>`;
    const types = root === 'design-stack' ? ['flow', 'coupling', 'feedback', 'selected'] : ['coupling', 'feedback', 'selected'];
    return `<div class="legend-title"><strong>Relationship legend</strong><button type="button" data-close-legend aria-label="Close legend">×</button></div>${relationLegend(types)}`;
  }'''
js = replace_between(js, 'function renderLegend(page) {', 'function renderVisual(page) {', legend)

js = replace_once(
    js,
    "row.cells.forEach((cell, index) => state.objects.set(cell.id, { ...cell, kind: 'matrix-cell', row, column: page.columns[index], evidence: cell.evidence || row.evidence || [] }));",
    "row.cells.forEach((cell, index) => state.objects.set(cell.id, { ...cell, kind: 'matrix-cell', row, column: page.columns[index], evidence: cell.evidence || [] }));"
)

bind = r'''function bindInteractive(page) {
    const explorer = document.querySelector('[data-explorer]');
    const canvas = document.querySelector('[data-canvas]');
    const search = document.querySelector('.framework-search');
    const filter = document.querySelector('[data-filter]');
    search.value = state.query;
    filter.value = state.filter;
    explorer.addEventListener('click', (event) => {
      const inspectable = event.target.closest('[data-inspect-id]');
      if (inspectable) showDetail(inspectable.dataset.inspectId);
    });
    explorer.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      const inspectable = event.target.closest('[data-inspect-id]');
      if (!inspectable) return;
      event.preventDefault(); showDetail(inspectable.dataset.inspectId);
    });
    search.addEventListener('input', () => { state.query = search.value.trim(); applyVisibility(); syncUrlState(); });
    filter.addEventListener('change', () => { state.filter = filter.value; applyVisibility(); syncUrlState(); });
    document.querySelector('[data-zoom-in]').addEventListener('click', () => setZoom(state.zoom + 0.15));
    document.querySelector('[data-zoom-out]').addEventListener('click', () => setZoom(state.zoom - 0.15));
    document.querySelector('[data-fit]').addEventListener('click', () => { setZoom(1); canvas.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); });
    document.querySelector('[data-reset]').addEventListener('click', resetFrameworkView);
    document.querySelector('[data-expand]').addEventListener('click', toggleExpanded);
    document.querySelector('[data-legend]').addEventListener('click', toggleLegend);
    document.querySelector('[data-close-legend]').addEventListener('click', toggleLegend);
    document.querySelector('[data-share]').addEventListener('click', copyShareLink);
    document.querySelector('[data-svg]').addEventListener('click', () => downloadFrameworkSvg('current'));
    document.querySelector('[data-svg-publication]').addEventListener('click', () => downloadFrameworkSvg('publication'));
    applyVisibility(); setZoom(state.zoom, false);
    requestAnimationFrame(() => { drawRelations(); restoreSelectedItem(); });
    if ('ResizeObserver' in window) new ResizeObserver(() => drawRelations()).observe(document.querySelector('[data-relation-board]') || canvas);
    window.addEventListener('resize', drawRelations, { passive: true });
  }

  function resetFrameworkView() {
    state.filter = 'all'; state.query = ''; state.zoom = 1; state.selectedId = null;
    const search = document.querySelector('.framework-search');
    const filter = document.querySelector('[data-filter]');
    if (search) search.value = '';
    if (filter) filter.value = 'all';
    document.querySelectorAll('[data-inspect-id]').forEach((node) => node.classList.remove('is-active', 'is-related'));
    document.querySelector('[data-detail]').innerHTML = `<p class="eyebrow">Interactive explorer</p><h2>Choose an object</h2><p>${defaultInspectorText()}</p><div class="detail-hint"><span>Search</span><span>Focus</span><span>Select</span><span>Verify</span></div>`;
    applyVisibility(); setZoom(1, false);
    const url = new URL(location.href); url.searchParams.delete('filter'); url.searchParams.delete('q'); url.searchParams.delete('zoom'); url.hash = ''; history.replaceState(null, '', url);
    document.querySelector('[data-canvas]')?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }'''
js = replace_between(js, 'function bindInteractive(page) {', 'function restoreUrlState(page) {', bind)

visibility = r'''function applyVisibility() {
    const query = state.query.toLowerCase();
    document.querySelectorAll('[data-filter-key]').forEach((node) => {
      const filterMatch = state.filter === 'all' || node.dataset.filterKey === state.filter;
      node.hidden = false;
      node.classList.toggle('is-filter-muted', !filterMatch);
    });
    const searchable = root === 'design-performance' ? '.matrix-row' : root === 'failure-diagnostics' ? '.diagnostic-row' : root === 'design-stack' ? '.stack-stage' : '.co-domain, .co-core';
    document.querySelectorAll(searchable).forEach((node) => {
      const matches = !query || (node.dataset.search || node.textContent).toLowerCase().includes(query);
      node.classList.toggle('is-search-muted', !matches);
    });
    requestAnimationFrame(drawRelations);
  }'''
js = replace_between(js, 'function applyVisibility() {', 'function syncUrlState() {', visibility)

inspector = r'''function showDetail(id, updateHistory = true) {
    const item = state.objects.get(id);
    if (!item) return;
    state.selectedId = id;
    document.querySelectorAll('[data-inspect-id]').forEach((node) => {
      node.classList.toggle('is-active', node.dataset.inspectId === id);
      node.classList.remove('is-related');
    });
    if (item.kind === 'relationship') {
      document.querySelectorAll('[data-node-id]').forEach((node) => node.classList.toggle('is-related', [item.from, item.to].includes(node.dataset.nodeId)));
    }
    document.querySelector('[data-detail]').innerHTML = renderDetail(item);
    if (window.AtlasConcepts) window.AtlasConcepts.enhance(document.querySelector('[data-detail]'));
    if (updateHistory) {
      const url = new URL(location.href); url.hash = `item=${encodeURIComponent(id)}`; history.replaceState(null, '', url);
    }
  }

  function renderDetail(item) {
    const title = item.kind === 'relationship' ? item.label : item.kind === 'matrix-cell' ? `${item.row.title} → ${item.column.title}` : item.title;
    const evidence = item.kind === 'matrix-cell' && !item.evidence?.length ? (item.row?.evidence || []) : (item.evidence || []);
    const concepts = item.concepts || item.row?.concepts || [];
    const related = item.related_frameworks || item.row?.related_frameworks || [];
    return `<div class="framework-inspector-head">${frameworkIcon(iconForItem(item))}<div><p class="eyebrow">${esc(kindLabel(item.kind))}</p><h2>${esc(title)}</h2></div></div>
      <section class="framework-inspector-section" data-inspector-section="meaning"><h3>Scientific meaning</h3>${renderScientificMeaning(item)}</section>
      <section class="framework-inspector-section" data-inspector-section="relationships"><h3>Relationships</h3>${renderRelationshipSection(item)}</section>
      ${renderEvidence(evidence, item)}
      ${renderConceptLinks(concepts)}
      ${renderRelatedLinks(related)}
      <div class="detail-actions"><a class="button" href="${issueUrl('Suggest a framework correction', title)}" target="_blank" rel="noopener">Suggest correction ↗</a>${root === 'failure-diagnostics' && item.kind === 'failure-mode' ? `<a class="button" href="${issueUrl('Propose a missing response', title)}" target="_blank" rel="noopener">Missing response ↗</a>` : ''}</div>`;
  }

  function renderScientificMeaning(item) {
    let body = `<p>${esc(item.summary || item.detail || item.instruction || (item.kind === 'failure-mode' ? `Diagnostic pathway for ${item.title}.` : ''))}</p>`;
    if (item.kind === 'stage') body += renderColumnDetails(item.columns);
    if (item.kind === 'domain') body += renderPanelDetails(item.panels);
    if (item.kind === 'core') body += `<h4>Co-design outcomes</h4>${renderList(item.outcomes)}`;
    if (item.kind === 'matrix-cell') body += `<div class="matrix-detail"><span class="influence-marker" data-level="${item.level}"></span><div><b>${esc(levelLabel(item.level))}</b><p>${esc(item.row.title)} influences ${esc(item.column.title)} through <strong>${esc(item.label)}</strong>.</p>${item.row.tradeoff ? '<p class="tradeoff-note">↕ This design row carries a problem-dependent trade-off indicator.</p>' : ''}</div></div>`;
    if (item.kind === 'failure-mode') body += `<h4>Observable symptoms</h4>${renderList(item.symptoms)}<h4>Methodological responses</h4>${renderList(item.responses)}<h4>Targeted improvement</h4><p class="target-improvement">${esc(item.improvement)}</p>`;
    if (item.kind === 'verification') body += `<h4>Evaluation criteria</h4>${renderList(item.criteria)}`;
    return body;
  }

  function renderRelationshipSection(item) {
    if (item.kind === 'relationship') return `<div class="relationship-route"><span>${esc(objectTitle(item.from))}</span><i>→</i><span>${esc(objectTitle(item.to))}</span></div><p>${esc(item.summary || item.detail || '')}</p>`;
    if (item.kind === 'matrix-row') return `<div class="framework-relationship-list">${item.cells.map((cell, index) => `<button type="button" data-inspect-id="${cell.id}"><span>${esc(state.page.columns[index].title)}</span><b>${esc(cell.label)}</b><small>${esc(levelLabel(cell.level))}</small></button>`).join('')}</div>`;
    if (item.kind === 'matrix-cell') return `<div class="relationship-route"><span>${esc(item.row.title)}</span><i>→</i><span>${esc(item.column.title)}</span></div>`;
    if (item.kind === 'failure-mode') return `<div class="diagnostic-mini-path"><span>Challenge</span><i>→</i><span>Symptoms</span><i>→</i><span>Response</span><i>→</i><span>Improvement</span><i>↻</i><span>Verify</span></div>`;
    if (item.kind === 'verification') return `<div class="diagnostic-mini-path"><span>Targeted improvement</span><i>→</i><span>Verification</span><i>↻</i><span>Re-diagnose if needed</span></div>`;
    if (item.kind === 'phase') {
      const children = item.stage_ids || [];
      return `<div class="framework-relationship-list">${children.map((id) => `<button type="button" data-inspect-id="${id}"><span>Contains</span><b>${esc(objectTitle(id))}</b></button>`).join('')}</div>`;
    }
    if (item.kind === 'diagnostic-category') {
      const children = item.mode_ids || [];
      return `<div class="framework-relationship-list">${children.map((id) => `<button type="button" data-inspect-id="${id}"><span>Contains</span><b>${esc(objectTitle(id))}</b></button>`).join('')}</div>`;
    }
    const relationships = (state.page.relationships || []).filter((relation) => relation.from === item.id || relation.to === item.id);
    if (!relationships.length) return '<p class="framework-detail-empty">No explicit relationship object is registered for this item.</p>';
    return `<div class="framework-relationship-list">${relationships.map((relation) => `<button type="button" data-inspect-id="${relation.id}"><span>${esc(relationshipMeta[relation.type]?.label || relation.type)}</span><b>${esc(relation.label)}</b><small>${esc(objectTitle(relation.from))} → ${esc(objectTitle(relation.to))}</small></button>`).join('')}</div>`;
  }

  function renderColumnDetails(columns = []) { return `<div class="detail-columns">${columns.map((column) => `<section><h4>${esc(column.title)}</h4>${renderList(column.items)}</section>`).join('')}</div>`; }
  function renderPanelDetails(panels = []) { return `<div class="detail-columns">${panels.map((panel) => `<section><h4>${esc(panel.title)}</h4>${renderList(panel.items)}</section>`).join('')}</div>`; }
  function renderList(items = []) { return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`; }
  function kindLabel(kind) { return ({ phase: 'Design phase', stage: 'Design stage', relationship: 'Scientific relationship', core: 'Central co-design formulation', domain: 'Co-design domain', 'matrix-row': 'Design dimension', 'matrix-cell': 'Design–performance dependency', 'diagnostic-category': 'Diagnostic category', 'failure-mode': 'Failure-mode pathway', verification: 'Verification loop' })[kind] || 'Framework object'; }
  function levelLabel(level) { return ({ major: 'Direct / major dependency', context: 'Context-dependent dependency', indirect: 'Indirect / secondary dependency' })[level] || level; }
  function objectTitle(id) { const item = state.objects.get(id); return item?.title || id; }

  function frameworkLocation(item) {
    if (!item) return state.page.title;
    if (root === 'design-stack') {
      if (item.kind === 'phase') return `${item.roman} · ${item.title}`;
      if (item.kind === 'stage') { const phase = state.page.phases.find((entry) => entry.id === item.phase); return `${phase?.roman || ''} · ${item.number} · ${item.title}`.replace(/^ · /, ''); }
      if (item.kind === 'relationship') return `Relationship · ${objectTitle(item.from)} → ${objectTitle(item.to)}`;
    }
    if (root === 'co-design') {
      if (item.kind === 'core') return `Core · ${item.title}`;
      if (item.kind === 'domain') return `${item.number} · ${item.title}`;
      if (item.kind === 'relationship') return `Relationship · ${objectTitle(item.from)} → ${objectTitle(item.to)}`;
    }
    if (root === 'design-performance') {
      if (item.kind === 'matrix-row') return `${item.number} · ${item.title}`;
      if (item.kind === 'matrix-cell') return `${item.row.number} · ${item.row.title} → ${item.column.code} · ${item.column.title}`;
    }
    if (root === 'failure-diagnostics') {
      if (item.kind === 'diagnostic-category') return `${item.code} · ${item.title}`;
      if (item.kind === 'failure-mode') { const category = state.page.categories.find((entry) => entry.id === item.category); return `${category?.code || ''} · ${item.number} · ${item.title}`.replace(/^ · /, ''); }
      if (item.kind === 'verification') return 'Verification loop';
    }
    return item.title || state.page.title;
  }

  function supportBadge(support) {
    const value = support || 'Supporting';
    return `<span class="evidence-support-badge" data-support="${slug(value)}">${esc(value)}</span>`;
  }

  function renderEvidence(evidence, item) {
    const location = frameworkLocation(item);
    if (!evidence.length) return `<section class="framework-inspector-section detail-evidence" data-inspector-section="evidence"><h3>Supporting evidence</h3><p class="evidence-pending">No claim-level paper is displayed until its Reference ID and relevance to this exact framework object have been verified.</p></section>`;
    return `<section class="framework-inspector-section detail-evidence" data-inspector-section="evidence"><h3>Supporting evidence</h3>${evidence.map((entry) => `<article class="framework-evidence-claim"><div class="evidence-claim-head"><a class="evidence-reference-id" href="${prefix}references/#ref=${entry.atlas_id}">[${entry.atlas_id}]</a>${supportBadge(entry.support)}<span class="framework-location-tag">${esc(location)}</span></div><p>${esc(entry.rationale || '')}</p></article>`).join('')}</section>`;
  }

  function renderConceptLinks(concepts) {
    return `<section class="framework-inspector-section" data-inspector-section="concepts"><h3>Canonical concepts</h3>${concepts.length ? `<div class="framework-detail-links">${concepts.map((concept) => `<span class="framework-concept-pair"><button class="button primary" type="button" data-concept-id="${esc(concept.id)}">${esc(concept.label)}</button><a class="button concept-open-link" data-concept-open="${esc(concept.id)}" href="#">Open →</a></span>`).join('')}</div>` : '<p class="framework-detail-empty">No additional canonical concept is registered for this object.</p>'}</section>`;
  }

  function renderRelatedLinks(references) {
    const content = references.length ? `<div class="framework-detail-links">${references.map((reference) => {
      const [frameworkId, itemId] = reference.split(':');
      const framework = state.manifest.frameworks.find((entry) => entry.id === frameworkId);
      if (!framework) return '';
      const href = `${prefix}frameworks/${framework.route}${itemId ? `#item=${encodeURIComponent(itemId)}` : ''}`;
      return `<a class="button" href="${href}">${esc(framework.title)}${itemId ? ` · ${esc(itemId.replace(/-/g, ' '))}` : ''} →</a>`;
    }).join('')}</div>` : '<p class="framework-detail-empty">No explicit cross-framework object is registered for this item.</p>';
    return `<section class="framework-inspector-section" data-inspector-section="related"><h3>Related framework objects</h3>${content}</section>`;
  }'''
js = replace_between(js, 'function showDetail(id, updateHistory = true) {', 'function collectEvidence(value, found = new Map()) {', inspector)

evidence = r'''function collectEvidenceGroups() {
    const groups = new Map();
    for (const item of state.objects.values()) {
      const entries = item.evidence || [];
      for (const entry of entries) {
        if (!Number.isInteger(entry.atlas_id)) continue;
        if (!groups.has(entry.atlas_id)) groups.set(entry.atlas_id, { atlas_id: entry.atlas_id, claims: [] });
        const claim = { support: entry.support || 'Supporting', rationale: entry.rationale || '', location: frameworkLocation(item) };
        const signature = `${claim.support}|${claim.rationale}|${claim.location}`;
        const target = groups.get(entry.atlas_id).claims;
        if (!target.some((existing) => `${existing.support}|${existing.rationale}|${existing.location}` === signature)) target.push(claim);
      }
    }
    return [...groups.values()].sort((a, b) => a.atlas_id - b.atlas_id);
  }

  function renderEvidenceSection(page) {
    const evidence = collectEvidenceGroups();
    return `<section class="section framework-evidence-section"><div class="container">
      <div class="section-head"><div><p class="eyebrow">Supporting evidence</p><h2>Claim-level<br>support</h2></div><p>Each Reference ID is linked to the exact framework locations it supports; support type and rationale remain attached to every claim.</p></div>
      <div class="evidence-summary"><div><strong>${evidence.length}</strong><span>verified papers currently linked</span></div><p>${esc(state.manifest.evidence_status)}</p></div>
      ${evidence.length ? `<div class="evidence-paper-grid">${evidence.map((paper) => `<article class="evidence-paper-card"><header><a class="evidence-reference-id" href="${prefix}references/#ref=${paper.atlas_id}"><b>[${paper.atlas_id}]</b></a><span>${paper.claims.length} supported location${paper.claims.length === 1 ? '' : 's'}</span></header><div class="evidence-paper-claims">${paper.claims.slice(0, 2).map((claim) => `<div class="evidence-paper-claim"><div>${supportBadge(claim.support)}<span class="framework-location-tag">${esc(claim.location)}</span></div><small>${esc(claim.rationale)}</small></div>`).join('')}${paper.claims.length > 2 ? `<details><summary>+${paper.claims.length - 2} more supported locations</summary>${paper.claims.slice(2).map((claim) => `<div class="evidence-paper-claim"><div>${supportBadge(claim.support)}<span class="framework-location-tag">${esc(claim.location)}</span></div><small>${esc(claim.rationale)}</small></div>`).join('')}</details>` : ''}</div></article>`).join('')}</div>` : '<p class="framework-caveat"><strong>Evidence gate:</strong> unverified placeholder IDs are never displayed.</p>'}
    </div></section>`;
  }'''
js = replace_between(js, 'function collectEvidence(value, found = new Map()) {', 'function renderAtlasTools() {', evidence)

draw = r'''function drawRelations() {
    if (!['design-stack', 'co-design'].includes(root)) return;
    const board = document.querySelector('[data-relation-board]');
    const layer = document.querySelector('[data-relation-layer]');
    if (!board || !layer) return;
    const width = board.scrollWidth, height = board.scrollHeight;
    layer.setAttribute('viewBox', `0 0 ${width} ${height}`);
    layer.setAttribute('width', width); layer.setAttribute('height', height);
    layer.innerHTML = `<defs>
      <marker id="framework-arrow-flow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L6,3.5 L0,7 Z"></path></marker>
      <marker id="framework-arrow-coupling" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto-start-reverse"><path d="M0,0 L6,3.5 L0,7 Z"></path></marker>
      <marker id="framework-arrow-feedback" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L6,3.5 L0,7 Z"></path></marker>
    </defs>`;
    const rect = board.getBoundingClientRect();
    const scaleX = width / rect.width, scaleY = height / rect.height;
    const box = (id) => {
      const node = board.querySelector(`[data-node-id="${id}"]`);
      if (!node || node.hidden || node.closest('[hidden]')) return null;
      const bounds = node.getBoundingClientRect();
      const muted = node.classList.contains('is-filter-muted') || node.classList.contains('is-search-muted') || Boolean(node.closest('.is-filter-muted,.is-search-muted'));
      return { left: (bounds.left - rect.left) * scaleX, right: (bounds.right - rect.left) * scaleX, top: (bounds.top - rect.top) * scaleY, bottom: (bounds.bottom - rect.top) * scaleY, width: bounds.width * scaleX, height: bounds.height * scaleY, muted };
    };
    state.page.relationships.forEach((relation, index) => {
      const source = box(relation.from), target = box(relation.to);
      if (!source || !target) return;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', `relation-path relation-${relation.type}${source.muted || target.muted ? ' is-muted' : ''}`);
      path.setAttribute('data-inspect-id', relation.id); path.setAttribute('tabindex', '0');
      const marker = relation.type === 'feedback' ? 'framework-arrow-feedback' : relation.type === 'coupling' ? 'framework-arrow-coupling' : 'framework-arrow-flow';
      if (relation.type === 'coupling') path.setAttribute('marker-start', `url(#${marker})`);
      path.setAttribute('marker-end', `url(#${marker})`);
      path.setAttribute('d', relationPath(source, target, relation, width, index));
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title'); title.textContent = relation.label; path.append(title); layer.append(path);
      if (root === 'co-design' && relation.type === 'coupling') drawRelationCaption(layer, source, target, relation, index, source.muted || target.muted);
    });
    if (state.selectedId) document.querySelectorAll(`[data-inspect-id="${CSS.escape(state.selectedId)}"]`).forEach((node) => node.classList.add('is-active'));
  }'''
js = replace_between(js, 'function drawRelations() {', 'function relationPath(source, target, relation, width, index) {', draw)

js = replace_once(
    js,
    "function drawRelationCaption(layer, source, target, relation, index) {",
    "function drawRelationCaption(layer, source, target, relation, index, muted = false) {"
)
js = replace_once(
    js,
    "group.setAttribute('class', 'relation-caption'); group.setAttribute('data-inspect-id', relation.id); group.setAttribute('tabindex', '0');",
    "group.setAttribute('class', `relation-caption${muted ? ' is-muted' : ''}`); group.setAttribute('data-inspect-id', relation.id); group.setAttribute('tabindex', '0');"
)

exporter = r'''function renderExportLegend() {
    if (root === 'design-performance') return `<div class="framework-export-legend">${state.page.legend.map((item) => `<span><i class="influence-marker" data-level="${item.id}"></i>${esc(item.label)}</span>`).join('')}<span><i class="tradeoff-symbol">↕</i>Potential trade-off</span></div>`;
    if (root === 'failure-diagnostics') return `<div class="framework-export-legend"><span><i class="relation-swatch" data-type="flow"><i></i></i>${relationshipMeta.flow.label}</span><span><i class="relation-swatch" data-type="feedback"><i></i></i>${relationshipMeta.feedback.label}</span></div>`;
    const types = root === 'design-stack' ? ['flow', 'coupling', 'feedback'] : ['coupling', 'feedback'];
    return `<div class="framework-export-legend">${types.map((type) => `<span><i class="relation-swatch" data-type="${type}"><i></i></i>${relationshipMeta[type].label}</span>`).join('')}</div>`;
  }

  function downloadFrameworkSvg(mode = 'current') {
    const surface = document.querySelector('[data-zoom-surface]');
    const clone = surface.cloneNode(true);
    clone.querySelectorAll('[tabindex]').forEach((node) => node.removeAttribute('tabindex'));
    clone.querySelectorAll('button').forEach((node) => { const replacement = document.createElement('div'); replacement.className = node.className; replacement.innerHTML = node.innerHTML; [...node.attributes].forEach((attribute) => { if (attribute.name.startsWith('data-')) replacement.setAttribute(attribute.name, attribute.value); }); node.replaceWith(replacement); });
    if (mode === 'publication') clone.querySelectorAll('.is-search-muted,.is-filter-muted,.is-active,.is-related,.is-muted').forEach((node) => node.classList.remove('is-search-muted', 'is-filter-muted', 'is-active', 'is-related', 'is-muted'));
    const header = document.createElement('div'); header.className = 'framework-export-header'; header.innerHTML = `<div><small>PINN Review Atlas · Framework</small><strong>${esc(state.page.title)}</strong><span>${mode === 'publication' ? 'Clean publication view' : 'Current focused view'}</span></div>${renderExportLegend()}`; clone.prepend(header);
    const width = Math.max(1200, Math.ceil(surface.scrollWidth));
    const height = Math.max(820, Math.ceil(surface.scrollHeight) + 140);
    const computed = getComputedStyle(document.documentElement);
    const variables = ['--paper', '--ink', '--muted', '--faint', '--line', '--violet', '--mint', '--surface-hover', '--surface-faint', '--nav-popover', '--framework-orange'].map((name) => `${name}:${computed.getPropertyValue(name)};`).join('');
    let css = '';
    [...document.styleSheets].forEach((sheet) => { try { if (sheet.href?.includes('frameworks.css')) css += [...sheet.cssRules].map((rule) => rule.cssText).join('\n'); } catch (_) { /* Cross-origin styles are intentionally skipped. */ } });
    const html = new XMLSerializer().serializeToString(clone);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" data-export-mode="${mode}"><style>:root{${variables}}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,sans-serif}${css.replace(/<\/style/gi, '<\\/style')}</style><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;min-height:${height}px;padding:16px;background:var(--paper);box-sizing:border-box">${html}</div></foreignObject></svg>`;
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = `${root}-${mode}-view.svg`; document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url); flash(mode === 'publication' ? 'Clean publication SVG exported' : 'Current focused framework exported as SVG');
  }

  function downloadCurrentSvg() { downloadFrameworkSvg('current'); }'''
js = replace_between(js, 'function downloadCurrentSvg() {', 'function flash(message) {', exporter)

js_path.write_text(js)

css_path = ROOT / 'assets/frameworks.css'
css = css_path.read_text()
css += r'''

/* Shared Framework interaction contract v4 */
.framework-card-heading { display:flex; align-items:center; gap:.65rem; }
.framework-icon { width:22px; height:22px; flex:0 0 auto; fill:none; stroke:currentColor; color:var(--violet); }
.framework-inspector-head { grid-column:1 / -1; display:flex; align-items:center; gap:.75rem; padding-bottom:.75rem; border-bottom:1px solid var(--line); }
.framework-inspector-head .framework-icon { width:30px; height:30px; }
.framework-inspector-head .eyebrow { margin:0 0 .3rem; }
.framework-inspector-head h2 { margin:0; }
.framework-inspector-section { min-width:0; padding:.75rem; border:1px solid var(--line); border-radius:.72rem; background:color-mix(in srgb,var(--paper) 97%,transparent); }
.framework-detail > .framework-inspector-section { grid-column:auto; }
.framework-detail > .framework-inspector-section[data-inspector-section="meaning"],
.framework-detail > .framework-inspector-section[data-inspector-section="relationships"] { grid-column:span 1; }
.framework-detail > .framework-inspector-section[data-inspector-section="evidence"],
.framework-detail > .framework-inspector-section[data-inspector-section="concepts"],
.framework-detail > .framework-inspector-section[data-inspector-section="related"] { grid-column:1 / -1; }
.framework-inspector-section h3 { margin:.05rem 0 .5rem; }
.framework-inspector-section h4 { margin:.8rem 0 .3rem; font-size:.74rem; }
.framework-detail-empty { margin:.2rem 0; color:var(--faint)!important; }
.framework-relationship-list { display:grid; gap:.4rem; }
.framework-relationship-list button { display:grid; gap:.16rem; width:100%; padding:.58rem .65rem; border:1px solid var(--line); border-radius:.58rem; background:var(--surface-faint); color:var(--ink); text-align:left; cursor:pointer; }
.framework-relationship-list button:hover,.framework-relationship-list button:focus-visible { border-color:var(--mint); background:var(--surface-hover); }
.framework-relationship-list span,.framework-relationship-list small { color:var(--muted); font-size:.66rem; }
.diagnostic-mini-path { display:flex; flex-wrap:wrap; align-items:center; gap:.35rem; }
.diagnostic-mini-path span { padding:.4rem .5rem; border:1px solid var(--line); border-radius:.48rem; background:var(--surface-faint); font-size:.68rem; }
.diagnostic-mini-path i { color:var(--violet); font-style:normal; font-weight:800; }
.evidence-claim-head { display:flex; flex-wrap:wrap; align-items:center; gap:.35rem; }
.evidence-reference-id { color:inherit; font-weight:800; text-decoration:none; }
.evidence-reference-id:hover,.evidence-reference-id:focus-visible { color:var(--violet); }
.evidence-support-badge,.framework-location-tag { display:inline-flex!important; align-items:center; min-height:22px; padding:.18rem .42rem; border-radius:999px; font:700 .62rem/1 ui-monospace,monospace; letter-spacing:.02em; }
.evidence-support-badge { border:1px solid color-mix(in srgb,var(--violet) 35%,var(--line)); background:color-mix(in srgb,var(--violet) 7%,var(--paper)); color:var(--violet)!important; }
.evidence-support-badge[data-support="direct"] { border-color:color-mix(in srgb,var(--mint) 55%,var(--line)); background:color-mix(in srgb,var(--mint) 9%,var(--paper)); color:color-mix(in srgb,var(--mint) 72%,var(--ink))!important; }
.evidence-support-badge[data-support="equivalent"] { border-color:color-mix(in srgb,var(--framework-blue) 45%,var(--line)); background:color-mix(in srgb,var(--framework-blue) 7%,var(--paper)); color:var(--framework-blue)!important; }
.framework-location-tag { border:1px solid var(--line); background:var(--surface-faint); color:var(--muted)!important; }
.evidence-paper-grid { align-items:start; }
.evidence-paper-card { display:grid; gap:.55rem; padding:.78rem; border:1px solid var(--line); border-radius:.7rem; background:color-mix(in srgb,var(--paper) 97%,transparent); }
.evidence-paper-card > header { display:flex; align-items:center; justify-content:space-between; gap:.6rem; }
.evidence-paper-card > header > span { color:var(--muted); font-size:.66rem; }
.evidence-paper-claims { display:grid; gap:.5rem; }
.evidence-paper-claim { display:grid; gap:.28rem; padding-top:.48rem; border-top:1px solid var(--line); }
.evidence-paper-claim > div { display:flex; flex-wrap:wrap; gap:.3rem; }
.evidence-paper-claim small { color:var(--muted); font-size:.68rem; line-height:1.45; }
.evidence-paper-card details summary { cursor:pointer; color:var(--violet); font-size:.68rem; }
.toolbar-export { position:relative; flex:0 0 auto; }
.toolbar-export summary { list-style:none; cursor:pointer; }
.toolbar-export summary::-webkit-details-marker { display:none; }
.toolbar-export > div { position:absolute; right:0; top:calc(100% + .45rem); z-index:25; display:grid; min-width:190px; padding:.45rem; border:1px solid var(--line); border-radius:.8rem; background:var(--nav-popover); box-shadow:var(--shadow); }
.toolbar-export button { border:0; border-radius:.55rem; background:transparent; color:var(--ink); padding:.6rem .7rem; text-align:left; cursor:pointer; }
.toolbar-export button:hover,.toolbar-export button:focus-visible { background:var(--surface-hover); }
.is-filter-muted { opacity:.1!important; filter:saturate(.2); }
.relation-path.is-muted,.relation-caption.is-muted { opacity:.12; }
.relation-path.relation-flow { stroke:color-mix(in srgb,var(--ink) 72%,transparent); stroke-width:2.05; }
.relation-path.relation-coupling { stroke:color-mix(in srgb,var(--mint) 82%,var(--ink)); stroke-width:1.9; }
.relation-path.relation-feedback { stroke:var(--violet); stroke-width:1.85; stroke-dasharray:7 5; }
.relation-layer #framework-arrow-flow path { fill:color-mix(in srgb,var(--ink) 72%,transparent); }
.relation-layer #framework-arrow-coupling path { fill:color-mix(in srgb,var(--mint) 82%,var(--ink)); }
.relation-layer #framework-arrow-feedback path { fill:var(--violet); }
.relation-swatch[data-type="coupling"] i::before { content:''; position:absolute; left:0; top:6px; border-width:4px 6px 4px 0; border-style:solid; border-color:transparent var(--mint) transparent transparent; }
.framework-export-header { display:flex; justify-content:space-between; align-items:flex-end; gap:1rem; margin-bottom:18px; padding:14px 16px; border:1px solid var(--line); border-radius:12px; background:var(--paper); }
.framework-export-header > div:first-child { display:grid; gap:3px; }
.framework-export-header small,.framework-export-header span { color:var(--muted); font-size:11px; }
.framework-export-header strong { font-size:20px; }
.framework-export-legend { display:flex; flex-wrap:wrap; justify-content:flex-end; gap:8px 12px; }
.framework-export-legend > span { display:flex; align-items:center; gap:6px; color:var(--muted); font-size:11px; white-space:nowrap; }
.framework-export-legend .relation-swatch { display:inline-block; flex:0 0 auto; }
@media (max-width: 760px) {
  .framework-detail > .framework-inspector-section { grid-column:1 / -1!important; }
  .framework-export-header { align-items:flex-start; flex-direction:column; }
}
'''
css_path.write_text(css)

# Shared icon family usable by Frameworks and future workflow surfaces.
icon_path = ROOT / 'assets/framework-icons.svg'
icon_path.write_text('''<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>
<symbol id="icon-design" viewBox="0 0 24 24"><path d="M4 5h16M7 5v5m10-5v5M5 10h14v9H5zM8 14h3m2 0h3"/></symbol>
<symbol id="icon-coupling" viewBox="0 0 24 24"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="3"/><path d="M9.4 8.8l1.7 5.2m3.5-5.2L12.9 14M10 7h4"/></symbol>
<symbol id="icon-dependency" viewBox="0 0 24 24"><path d="M4 5h5v5H4zM15 14h5v5h-5zM9 7.5h4a4 4 0 0 1 4 4V14M15 16.5H9a4 4 0 0 1-4-4V10"/></symbol>
<symbol id="icon-diagnosis" viewBox="0 0 24 24"><circle cx="10" cy="10" r="5"/><path d="M13.8 13.8L20 20M8 10h4M10 8v4"/></symbol>
<symbol id="icon-problem" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M3 12c3-5 15-5 18 0-3 5-15 5-18 0zM12 3c5 3 5 15 0 18-5-3-5-15 0-18z"/></symbol>
<symbol id="icon-representation" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M6.7 10.8l3.6-3.6m3.4 0l3.6 3.6m-10.6 2.4l3.6 3.6m3.4 0l3.6-3.6"/></symbol>
<symbol id="icon-physics" viewBox="0 0 24 24"><path d="M5 18l4-12 3 8 2-5 5 9M4 18h16"/></symbol>
<symbol id="icon-numerical" viewBox="0 0 24 24"><path d="M4 5h16v14H4zM8 9h2m4 0h2M8 13h2m4 0h2M8 17h8"/></symbol>
<symbol id="icon-training" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1m0-12.8l-2.1 2.1m-8.6 8.6l-2.1 2.1"/></symbol>
<symbol id="icon-reliability" viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6zM8.5 12l2.2 2.2 4.8-5"/></symbol>
<symbol id="icon-feedback" viewBox="0 0 24 24"><path d="M19 8a7 7 0 1 0 1 7M19 8V3m0 5h-5"/></symbol>
</defs></svg>''')

# Cache-bust the shared Framework assets on all five public Framework entry points.
html_paths = [ROOT / 'frameworks/index.html'] + [ROOT / f'frameworks/{name}/index.html' for name in ['design-stack', 'co-design', 'design-performance', 'failure-diagnostics']]
for path in html_paths:
    text = path.read_text()
    text = text.replace('frameworks.css?v=20260825-frameworks-v2', 'frameworks.css?v=20260826-frameworks-v4')
    text = text.replace('frameworks.js?v=knowledge-20260826', 'frameworks.js?v=20260826-frameworks-v4')
    path.write_text(text)

# Strengthen static Framework contracts.
validator_path = ROOT / 'scripts/validate-frameworks.mjs'
validator = validator_path.read_text()
validator = replace_once(
    validator,
    "for (const token of ['Expand view', 'data-zoom-in', 'data-filter', 'Interactive explorer', 'Download current SVG', 'Copy shareable link', 'Propose a missing item', 'Propose a missing relationship', 'foreignObject']) assert(script.includes(token), `Framework interaction script lacks ${token}.`);",
    "for (const token of ['Expand view', 'data-zoom-in', 'data-filter', 'data-reset', 'Interactive explorer', 'Current view SVG', 'Publication SVG', 'Copy shareable link', 'data-inspector-section', 'framework-location-tag', 'evidence-support-badge', 'collectEvidenceGroups', 'is-filter-muted', 'marker-start', 'framework-icons.svg', 'Propose a missing item', 'Propose a missing relationship', 'foreignObject']) assert(script.includes(token), `Framework interaction script lacks ${token}.`);"
)
validator = replace_once(
    validator,
    "for (const token of ['.stack-board', '.co-board', '.dependency-matrix', '.diagnostic-board', '.influence-marker', 'width: 13px', 'height: 13px']) assert(style.includes(token), `Framework stylesheet lacks ${token}.`);",
    "for (const token of ['.stack-board', '.co-board', '.dependency-matrix', '.diagnostic-board', '.influence-marker', 'width: 13px', 'height: 13px', '.framework-inspector-section', '.evidence-support-badge', '.framework-location-tag', '.is-filter-muted', '.framework-export-header', '.framework-icon']) assert(style.includes(token), `Framework stylesheet lacks ${token}.`);"
)
validator = replace_once(
    validator,
    "collectConcepts(pages);\nassert(conceptRecords.length > 0, 'Framework objects contain no canonical concept records.');",
    "collectConcepts(pages);\nfor (const [frameworkId, page] of Object.entries(pages)) { const records = []; collectConcepts(page); assert(JSON.stringify(page).includes('\\\"concepts\\\"'), `${frameworkId} contains no canonical concept mappings.`); }\nassert(conceptRecords.length > 0, 'Framework objects contain no canonical concept records.');"
)
validator_path.write_text(validator)

qa_path = ROOT / 'scripts/visual-qa-frameworks.mjs'
qa = qa_path.read_text()
qa = qa.replace("evidenceCards: document.querySelectorAll('.evidence-paper-grid a').length,", "evidenceCards: document.querySelectorAll('.evidence-paper-card').length,\n          supportBadges: document.querySelectorAll('.evidence-paper-grid .evidence-support-badge').length,\n          locationTags: document.querySelectorAll('.evidence-paper-grid .framework-location-tag').length,")
qa = qa.replace("assert(snapshot.evidenceCards >= 20, `${route.id}/${viewport.name}: claim-level evidence summary is incomplete (${snapshot.evidenceCards} verified papers).`);", "assert(snapshot.evidenceCards >= 20, `${route.id}/${viewport.name}: claim-level evidence summary is incomplete (${snapshot.evidenceCards} verified papers).`);\n      assert(snapshot.supportBadges >= snapshot.evidenceCards && snapshot.locationTags >= snapshot.evidenceCards, `${route.id}/${viewport.name}: evidence cards lack shared support badges or framework-location tags.`);")
qa = qa.replace("const visibleRows = await matrix.locator('.matrix-row:not([hidden])').count();\n  assert(visibleRows === 4, `Matrix filter should show four representation rows, found ${visibleRows}.`);", "const focusedRows = await matrix.locator('.matrix-row:not(.is-filter-muted)').count();\n  const allRowsAfterFocus = await matrix.locator('.matrix-row').count();\n  assert(allRowsAfterFocus === 14 && focusedRows === 4, `Matrix focus should preserve all fourteen rows while emphasizing four representation rows (${allRowsAfterFocus} total, ${focusedRows} focused).`);")
qa = qa.replace("const highlighted = await matrix.locator('.matrix-row:not(.is-search-muted):not([hidden])').count();", "const highlighted = await matrix.locator('.matrix-row:not(.is-filter-muted):not(.is-search-muted)').count();")
qa = qa.replace("assert(svg.includes('<foreignObject') && svg.includes('dependency-matrix') && svg.includes('gradient flow'), 'Current-state SVG export does not contain the live filtered matrix state.');", "assert(svg.includes('<foreignObject') && svg.includes('dependency-matrix') && svg.includes('gradient flow') && svg.includes('framework-export-header') && svg.includes('data-export-mode=\\\"current\\\"'), 'Current-state SVG export does not contain the focused matrix state and standardized export header.');\n  const publicationPromise = matrix.waitForEvent('download');\n  await matrix.click('[data-svg-publication]');\n  const publication = await publicationPromise;\n  const publicationSvg = await fs.readFile(await publication.path(), 'utf8');\n  assert(publicationSvg.includes('data-export-mode=\\\"publication\\\"') && publicationSvg.includes('Clean publication view') && !publicationSvg.includes('is-filter-muted') && !publicationSvg.includes('is-search-muted'), 'Publication SVG does not remove transient focus/search state.');\n  await matrix.click('[data-reset]');\n  assert((await matrix.locator('.matrix-row.is-filter-muted').count()) === 0 && (await matrix.locator('.framework-search').inputValue()) === '', 'Reset did not restore the complete matrix context.');")

insert = r'''

  const inspectorCases = [
    ['design-stack', 'physical-problem'],
    ['co-design', 'representation'],
    ['design-performance', 'architecture-basis'],
    ['failure-diagnostics', 'spectral-bias']
  ];
  for (const [frameworkId, objectId] of inspectorCases) {
    const page = await context.newPage();
    await page.goto(`${baseUrl}/frameworks/${frameworkId}/`, { waitUntil: 'networkidle' });
    await page.waitForSelector(`[data-inspect-id="${objectId}"]`);
    await page.click(`[data-inspect-id="${objectId}"]`);
    const sections = await page.locator('[data-detail] [data-inspector-section]').evaluateAll((nodes) => nodes.map((node) => node.dataset.inspectorSection));
    assert(['meaning', 'relationships', 'evidence', 'concepts', 'related'].every((name) => sections.includes(name)), `${frameworkId}: inspector does not use the shared five-section architecture (${sections.join(', ')}).`);
    assert(await page.locator('[data-detail] .evidence-support-badge').count() > 0, `${frameworkId}: inspector lacks standardized support-type badges.`);
    assert(await page.locator('[data-detail] .framework-location-tag').count() > 0, `${frameworkId}: inspector lacks framework-location tags.`);
    assert(await page.locator('[data-detail] [data-concept-id]').count() > 0, `${frameworkId}: canonical concept deep-link controls are missing.`);
    await page.close();
  }

  const relations = await context.newPage();
  await relations.goto(`${baseUrl}/frameworks/co-design/`, { waitUntil: 'networkidle' });
  await relations.waitForSelector('.relation-coupling');
  const couplingMarkers = await relations.locator('.relation-coupling').first().evaluate((node) => ({ start: node.getAttribute('marker-start'), end: node.getAttribute('marker-end') }));
  assert(couplingMarkers.start?.includes('framework-arrow-coupling') && couplingMarkers.end?.includes('framework-arrow-coupling'), 'Co-Design coupling does not use the shared bidirectional marker contract.');
  await relations.close();
'''
marker = "\n  const diagnostics = await context.newPage();"
if marker not in qa:
    raise SystemExit('visual QA insertion marker missing')
qa = qa.replace(marker, insert + marker, 1)
qa = qa.replace("console.log('Framework visual QA passed: 4 source-faithful views · 3 viewports · interactions · deep links · backlinks · current-state SVG export.');", "console.log('Framework visual QA passed: 4 source-faithful views · shared inspector/evidence/relationship/filter contracts · deep links · current + publication SVG export.');")
qa_path.write_text(qa)
