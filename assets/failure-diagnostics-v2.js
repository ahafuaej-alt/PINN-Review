(() => {
  if (document.body.dataset.framework !== 'failure-diagnostics') return;

  const DATA_URL = '../../data/frameworks/failure-diagnostics.json';
  const META_URL = '../../data/frameworks/failure-diagnostics-v2.json';
  const DP_DATA_URL = '../../data/frameworks/design-performance.json';
  const DP_META_URL = '../../data/frameworks/design-performance-v2.json';
  const ICONS = '../../assets/framework-icons.svg';
  const PREFIX = '../../';
  const stages = ['challenge', 'symptoms', 'response', 'improvement'];
  const stageLabels = {
    challenge: ['1', 'Challenge / pathology', 'Why it happens'],
    symptoms: ['2', 'Observable symptoms', 'How it appears'],
    response: ['3', 'Methodological response', 'What to try'],
    improvement: ['4', 'Targeted improvement', 'What it improves']
  };
  const categoryIcons = { approximation: 'representation', physics: 'physics', training: 'training', reliability: 'reliability' };
  const categoryColors = { approximation: '#1747b8', physics: '#13813d', training: '#ed5c14', reliability: '#234eae' };
  const state = {
    data: null,
    meta: null,
    dpData: null,
    dpMeta: null,
    board: null,
    symptomQuery: '',
    selectedSymptoms: new Set(),
    candidates: new Set(),
    focusedMode: null,
    compareMode: false,
    compareModes: new Set(),
    evidenceLens: false,
    mobileMode: null,
    mobileStep: 0
  };

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const xml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
  const icon = (id, label = '') => `<svg class="fd-icon" viewBox="0 0 24 24" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}><use href="${ICONS}#icon-${esc(id)}"></use></svg>`;
  const modeById = (id) => state.data?.modes.find((mode) => mode.id === id);
  const profileById = (id) => state.meta?.mode_profiles?.[id];
  const categoryById = (id) => state.data?.categories.find((category) => category.id === id);
  const outcomeById = (id) => state.dpData?.columns.find((column) => column.id === id);
  const outcomeMeta = (id) => state.dpMeta?.outcomes?.[id];
  const normalize = (value = '') => String(value).toLowerCase().replace(/[–—]/g, '-').replace(/[^a-z0-9/ +.-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const componentId = (modeId, stage) => `${modeId}:${stage}`;
  const allSymptoms = () => state.data.modes.flatMap((mode) => mode.symptoms.map((label, index) => ({ key: `${mode.id}:${index}`, modeId: mode.id, label, normalized: normalize(label) })));

  Promise.all([
    fetch(DATA_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Failure diagnostics returned ${response.status}`))),
    fetch(META_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Failure diagnostics metadata returned ${response.status}`))),
    fetch(DP_DATA_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Design–Performance data returned ${response.status}`))),
    fetch(DP_META_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Design–Performance metadata returned ${response.status}`)))
  ]).then(([data, meta, dpData, dpMeta]) => {
    state.data = data;
    state.meta = meta;
    state.dpData = dpData;
    state.dpMeta = dpMeta;
    state.mobileMode = data.modes[0]?.id || null;
    waitForBoard();
  }).catch((error) => console.error('Failure Diagnostics workbench could not initialize.', error));

  function waitForBoard() {
    const board = document.querySelector('.diagnostic-board');
    if (board) return enhance(board);
    const observer = new MutationObserver(() => {
      const found = document.querySelector('.diagnostic-board');
      if (!found) return;
      observer.disconnect();
      enhance(found);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function enhance(board) {
    state.board = board;
    board.classList.add('fd-board-v2');
    rebuild();
    bindControls();
    bindExportOverride();
    bindToolbarReset();
    restoreHash();
    updateSymptomResults();
    refreshMobile();
    state.board.dataset.nativeVectorExport = 'true';
    const detail = document.querySelector('[data-detail]');
    if (detail && !location.hash) detail.innerHTML = defaultInspector();
    window.AtlasConcepts?.enhance(state.board);
  }

  function rebuild() {
    const verification = state.meta.verification_order.map((id) => {
      const column = outcomeById(id);
      const meta = outcomeMeta(id);
      return `<button type="button" class="fd-outcome-chip" data-fd-outcome="${id}" title="${esc(meta?.summary || '')}"><span>${esc(column?.code || '')}</span><b>${esc(column?.title || id)}</b></button>`;
    }).join('');

    state.board.innerHTML = `
      <section class="fd-workbench" aria-label="Failure-mode diagnostic workbench">
        <div class="fd-workbench-intro">
          <span class="fd-workbench-kicker">DIAGNOSE FROM OBSERVATIONS</span>
          <strong>Start from a symptom, not a method.</strong>
          <p>Observed signatures generate candidate failure modes for differential diagnosis. Matching is qualitative and unranked; run discriminating checks before intervention.</p>
        </div>
        <div class="fd-symptom-controls">
          <label><span>Observed symptom</span><input type="search" data-fd-symptom-search placeholder="e.g., late-time degradation, BC error, unsampled error…" autocomplete="off"></label>
          <button type="button" class="button" data-fd-clear-symptoms disabled>Clear observations</button>
          <button type="button" class="button" data-fd-evidence-lens aria-pressed="false">Evidence coverage</button>
          <button type="button" class="button" data-fd-compare aria-pressed="false">Compare candidate failures</button>
        </div>
        <div class="fd-symptom-palette" data-fd-symptom-palette aria-label="Observable symptom choices"></div>
        <div class="fd-candidate-summary" data-fd-candidate-summary></div>
      </section>

      <div class="fd-map-shell">
        <div class="fd-map-main">
          ${renderHeader()}
          ${state.data.categories.map(renderCategory).join('')}
        </div>
        <aside class="fd-verification-rail" data-fd-verify tabindex="0" aria-label="Verify improvement and re-diagnose">
          <div class="fd-verify-loop" aria-hidden="true">
            ${icon('feedback')}
            <svg viewBox="0 0 120 170"><path d="M60 13 C105 13 105 75 82 87 C107 99 105 157 60 157"/><path d="M60 157 C15 157 15 99 38 87 C13 75 15 13 60 13"/></svg>
          </div>
          <span class="fd-verify-step">VERIFY</span>
          <h3>Verify improvement</h3>
          <p>Check the targeted intervention across the relevant Design–Performance outcomes. If the evidence does not improve, re-diagnose the dominant failure mode and revisit upstream design choices.</p>
          <div class="fd-outcome-stack">${verification}</div>
          <div class="fd-verify-decision"><b>Improved?</b><span>Retain the intervention and document the evidence.</span><b>Not improved?</b><span>Return to symptoms → checks → alternative hypothesis.</span></div>
        </aside>
      </div>

      <section class="fd-compare-panel" data-fd-compare-panel hidden></section>
      ${renderMobileStepper()}
      <p class="diagnostic-rule fd-rule"><b>Diagnose first, then respond:</b> association is not diagnosis. Identify plausible causes from symptoms, run discriminating checks, select a targeted methodological response, and verify the expected improvement with appropriate criteria.</p>
      <p class="fd-evidence-boundary"><b>Evidence boundary:</b> the Evidence Coverage lens reports documentation scope, not scientific confidence, effect size, or probability that a failure mode is present.</p>`;
  }

  function renderHeader() {
    return `<div class="diagnostic-head fd-head">
      <span class="fd-head-category">Diagnostic family</span>
      ${stages.map((stage) => {
        const [number, title, subtitle] = stageLabels[stage];
        return `<b class="fd-head-${stage}"><span>${number}</span>${esc(title)}<small>${esc(subtitle)}</small></b>`;
      }).join('')}
    </div>`;
  }

  function renderCategory(category) {
    const modes = category.mode_ids.map(modeById).filter(Boolean);
    return `<section class="diagnostic-category diagnostic-${category.id} fd-category" data-filter-key="${category.id}" data-category="${category.id}">
      <button type="button" class="diagnostic-category-rail fd-category-rail" data-fd-category="${category.id}" aria-label="${esc(`${category.code}. ${category.title}. ${category.summary}`)}">
        ${icon(categoryIcons[category.id] || 'diagnosis')}
        <b>${esc(category.code)}</b><strong>${esc(category.title)}</strong><small>${esc(category.summary)}</small>
      </button>
      <div class="diagnostic-rows">${modes.map(renderModeRow).join('')}</div>
    </section>`;
  }

  function renderModeRow(mode) {
    const profile = profileById(mode.id);
    const searchText = normalize([mode.title, ...mode.symptoms, ...mode.responses, mode.improvement, ...(profile?.checks || []), ...(profile?.confirmation_metrics || [])].join(' '));
    return `<article class="diagnostic-row fd-row" data-mode="${mode.id}" data-row-index="${mode.number - 1}" data-search="${esc(searchText)}">
      ${renderComponent(mode, profile, 'challenge')}
      ${renderComponent(mode, profile, 'symptoms')}
      ${renderComponent(mode, profile, 'response')}
      ${renderComponent(mode, profile, 'improvement')}
      <button type="button" class="fd-row-tools" data-fd-focus="${mode.id}" aria-label="Focus pathway ${mode.number}: ${esc(mode.title)}"><span>Focus</span><i>↗</i></button>
      <button type="button" class="fd-row-compare" data-fd-compare-mode="${mode.id}" aria-label="Add ${esc(mode.title)} to comparison" aria-pressed="false">＋</button>
    </article>`;
  }

  function renderComponent(mode, profile, stage) {
    const id = componentId(mode.id, stage);
    const scope = profile?.evidence_scope?.[stage] || 'unverified';
    const stageText = stage === 'challenge' ? mode.title : stage === 'symptoms' ? mode.symptoms.join('; ') : stage === 'response' ? mode.responses.join('; ') : mode.improvement;
    const label = `${mode.number}. ${mode.title}. ${stageLabels[stage][1]}: ${stageText}`;
    const arrow = stage !== 'improvement' ? `<svg class="fd-flow-arrow" viewBox="0 0 52 20" aria-hidden="true"><path d="M2 10 H42"/><path d="M36 4 L44 10 L36 16"/></svg>` : '';
    if (stage === 'challenge') {
      return `<button type="button" class="diagnostic-cell diagnostic-challenge fd-cell fd-${stage}" data-fd-component="${id}" data-stage="${stage}" data-evidence-scope="${scope}" aria-label="${esc(label)}"><span>${mode.number}</span><strong>${esc(mode.title)}</strong>${evidenceBadge(scope)}${arrow}</button>`;
    }
    if (stage === 'improvement') {
      return `<button type="button" class="diagnostic-cell diagnostic-improvement fd-cell fd-${stage}" data-fd-component="${id}" data-stage="${stage}" data-evidence-scope="${scope}" aria-label="${esc(label)}"><strong>${esc(mode.improvement)}</strong>${evidenceBadge(scope)}</button>`;
    }
    const items = stage === 'symptoms' ? mode.symptoms : mode.responses;
    return `<button type="button" class="diagnostic-cell fd-cell fd-${stage}" data-fd-component="${id}" data-stage="${stage}" data-evidence-scope="${scope}" aria-label="${esc(label)}"><ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>${evidenceBadge(scope)}${arrow}</button>`;
  }

  function evidenceBadge(scope) {
    const label = state.meta.evidence_scope_labels[scope] || scope;
    const symbol = scope === 'exact' ? '●' : scope === 'pathway' ? '◐' : '○';
    return `<span class="fd-evidence-badge" data-scope="${scope}" title="${esc(label)}"><i>${symbol}</i>${esc(label)}</span>`;
  }

  function bindControls() {
    const board = state.board;
    const search = board.querySelector('[data-fd-symptom-search]');
    search.addEventListener('input', () => {
      state.symptomQuery = search.value.trim();
      renderSymptomPalette();
    });
    board.querySelector('[data-fd-clear-symptoms]').addEventListener('click', clearSymptoms);
    board.querySelector('[data-fd-evidence-lens]').addEventListener('click', toggleEvidenceLens);
    board.querySelector('[data-fd-compare]').addEventListener('click', toggleCompareMode);
    board.querySelector('[data-fd-verify]').addEventListener('click', (event) => { if (!event.target.closest('[data-fd-outcome]')) showVerification(); });
    board.querySelector('[data-fd-verify]').addEventListener('keydown', (event) => { if (event.target === event.currentTarget && ['Enter', ' '].includes(event.key)) { event.preventDefault(); showVerification(); } });
    board.querySelector('[data-fd-mobile-mode]').addEventListener('change', (event) => { state.mobileMode = event.target.value; state.mobileStep = 0; refreshMobile(); });

    board.addEventListener('click', (event) => {
      const symptom = event.target.closest('[data-fd-symptom]');
      if (symptom) { toggleSymptom(symptom.dataset.fdSymptom); return; }
      const component = event.target.closest('[data-fd-component]');
      if (component) { showComponent(component.dataset.fdComponent); return; }
      const focus = event.target.closest('[data-fd-focus]');
      if (focus) { focusMode(focus.dataset.fdFocus); return; }
      const compare = event.target.closest('[data-fd-compare-mode]');
      if (compare) { toggleCompareCandidate(compare.dataset.fdCompareMode); return; }
      const candidate = event.target.closest('[data-fd-candidate]');
      if (candidate) { focusMode(candidate.dataset.fdCandidate); showMode(candidate.dataset.fdCandidate); return; }
      const category = event.target.closest('[data-fd-category]');
      if (category) showCategory(category.dataset.fdCategory);
      const outcome = event.target.closest('[data-fd-outcome]');
      if (outcome) showOutcome(outcome.dataset.fdOutcome);
      const mobileNav = event.target.closest('[data-fd-mobile-nav]');
      if (mobileNav) { moveMobile(Number(mobileNav.dataset.fdMobileNav)); return; }
    });

    board.addEventListener('keydown', (event) => {
      const component = event.target.closest('[data-fd-component]');
      if (component) navigateGrid(event, component);
    });

    document.querySelector('[data-filter]')?.addEventListener('change', () => requestAnimationFrame(syncSpecialVisibility));
    document.querySelector('.framework-search')?.addEventListener('input', () => requestAnimationFrame(syncSpecialVisibility));
    renderSymptomPalette();
  }

  function bindToolbarReset() {
    document.querySelector('[data-reset]')?.addEventListener('click', () => {
      state.selectedSymptoms.clear();
      state.candidates.clear();
      state.focusedMode = null;
      state.compareMode = false;
      state.compareModes.clear();
      state.evidenceLens = false;
      const input = state.board?.querySelector('[data-fd-symptom-search]');
      if (input) input.value = '';
      state.symptomQuery = '';
      updateSymptomResults();
      updateFocus();
      updateCompare();
      updateEvidenceLens();
    });
  }

  function renderSymptomPalette() {
    const palette = state.board.querySelector('[data-fd-symptom-palette]');
    if (!palette) return;
    const query = normalize(state.symptomQuery);
    let options = allSymptoms();
    if (query) options = options.filter((item) => item.normalized.includes(query) || normalize(modeById(item.modeId)?.title).includes(query));
    if (!query) {
      const selected = options.filter((item) => state.selectedSymptoms.has(item.key));
      const unselected = options.filter((item) => !state.selectedSymptoms.has(item.key));
      options = [...selected, ...unselected.slice(0, Math.max(0, 10 - selected.length))];
    } else options = options.slice(0, 14);
    palette.innerHTML = options.length ? options.map((item) => {
      const mode = modeById(item.modeId);
      const selected = state.selectedSymptoms.has(item.key);
      return `<button type="button" class="fd-symptom-chip${selected ? ' is-selected' : ''}" data-fd-symptom="${item.key}" aria-pressed="${selected}"><span>${mode.number}</span>${esc(item.label)}</button>`;
    }).join('') : '<span class="fd-no-match">No maintained symptom contains that phrase. Try another observation or use the framework search above.</span>';
  }

  function toggleSymptom(key) {
    if (state.selectedSymptoms.has(key)) state.selectedSymptoms.delete(key); else state.selectedSymptoms.add(key);
    updateSymptomResults();
  }

  function clearSymptoms() {
    state.selectedSymptoms.clear();
    state.candidates.clear();
    state.board.querySelector('[data-fd-symptom-search]').value = '';
    state.symptomQuery = '';
    updateSymptomResults();
  }

  function updateSymptomResults() {
    const selectedRecords = allSymptoms().filter((item) => state.selectedSymptoms.has(item.key));
    state.candidates = new Set(selectedRecords.map((item) => item.modeId));
    renderSymptomPalette();
    const clear = state.board.querySelector('[data-fd-clear-symptoms]');
    if (clear) clear.disabled = !state.selectedSymptoms.size;
    state.board.querySelectorAll('.fd-row').forEach((row) => {
      const candidate = !state.selectedSymptoms.size || state.candidates.has(row.dataset.mode);
      row.classList.toggle('fd-symptom-muted', !candidate);
      row.classList.toggle('fd-candidate-row', state.selectedSymptoms.size > 0 && candidate);
    });
    const summary = state.board.querySelector('[data-fd-candidate-summary]');
    if (!summary) return;
    if (!state.selectedSymptoms.size) {
      summary.innerHTML = '<span><b>Diagnostic boundary:</b> choose one or more observed signatures. Candidate pathways are displayed without probability or confidence scores.</span>';
      return;
    }
    const candidates = [...state.candidates].map(modeById).filter(Boolean).sort((a, b) => a.number - b.number);
    summary.innerHTML = `<div><b>${state.selectedSymptoms.size} observed signature${state.selectedSymptoms.size === 1 ? '' : 's'}</b><span>${candidates.length} consistent pathway${candidates.length === 1 ? '' : 's'} in the maintained map</span></div><div class="fd-candidate-buttons">${candidates.map((mode) => `<button type="button" data-fd-candidate="${mode.id}"><span>${mode.number}</span>${esc(mode.title)}</button>`).join('')}</div><p>These are differential-diagnosis candidates, not a ranking. Use the discriminating checks in each pathway before selecting an intervention.</p>`;
  }

  function toggleEvidenceLens() {
    state.evidenceLens = !state.evidenceLens;
    updateEvidenceLens();
  }

  function updateEvidenceLens() {
    state.board.classList.toggle('fd-evidence-lens', state.evidenceLens);
    const button = state.board.querySelector('[data-fd-evidence-lens]');
    if (button) { button.setAttribute('aria-pressed', String(state.evidenceLens)); button.classList.toggle('primary', state.evidenceLens); }
  }

  function toggleCompareMode() {
    state.compareMode = !state.compareMode;
    if (!state.compareMode) state.compareModes.clear();
    updateCompare();
  }

  function toggleCompareCandidate(modeId) {
    if (!state.compareMode) state.compareMode = true;
    if (state.compareModes.has(modeId)) state.compareModes.delete(modeId);
    else {
      if (state.compareModes.size >= 3) {
        flash('Compare up to three failure modes at a time.');
        return;
      }
      state.compareModes.add(modeId);
    }
    updateCompare();
  }

  function updateCompare() {
    const button = state.board.querySelector('[data-fd-compare]');
    if (button) { button.setAttribute('aria-pressed', String(state.compareMode)); button.classList.toggle('primary', state.compareMode); button.textContent = state.compareMode ? `Comparing ${state.compareModes.size}/3` : 'Compare candidate failures'; }
    state.board.querySelectorAll('[data-fd-compare-mode]').forEach((control) => {
      const selected = state.compareModes.has(control.dataset.fdCompareMode);
      control.setAttribute('aria-pressed', String(selected));
      control.classList.toggle('is-selected', selected);
      control.textContent = selected ? '✓' : '＋';
      control.hidden = !state.compareMode;
    });
    const panel = state.board.querySelector('[data-fd-compare-panel]');
    if (!panel) return;
    panel.hidden = !state.compareMode;
    if (!state.compareMode) return;
    const modes = [...state.compareModes].map(modeById).filter(Boolean).sort((a, b) => a.number - b.number);
    panel.innerHTML = `<header><div><span class="fd-workbench-kicker">DIFFERENTIAL DIAGNOSIS</span><h3>Compare candidate failures</h3></div><p>Compare observed signatures, discriminating checks, candidate responses, trade-offs, and verification quantities. No probability or universal best-fix score is assigned.</p></header>${modes.length ? `<div class="fd-compare-grid">${modes.map(compareCard).join('')}</div>` : '<p class="fd-empty-compare">Use the + controls on up to three pathways to compare them side by side.</p>'}`;
  }

  function compareCard(mode) {
    const profile = profileById(mode.id);
    const selected = allSymptoms().filter((item) => item.modeId === mode.id && state.selectedSymptoms.has(item.key)).map((item) => item.label);
    return `<article class="fd-compare-card" data-category="${mode.category}"><header><span>${mode.number}</span><div><small>${esc(categoryById(mode.category)?.title || '')}</small><b>${esc(mode.title)}</b></div></header>
      <h4>Matched observations</h4>${renderList(selected.length ? selected : ['No selected observation is specific to this pathway yet.'])}
      <h4>Discriminating checks</h4>${renderList(profile.checks)}
      <h4>Candidate responses</h4>${renderList(mode.responses)}
      <h4>Trade-offs</h4>${renderList(profile.tradeoffs)}
      <h4>Verify</h4>${renderOutcomeTags(profile.verification.outcomes)}
      <button type="button" class="button" data-fd-candidate="${mode.id}">Focus this pathway</button></article>`;
  }

  function focusMode(modeId) {
    state.focusedMode = state.focusedMode === modeId ? null : modeId;
    updateFocus();
  }

  function updateFocus() {
    state.board.querySelectorAll('.fd-row').forEach((row) => {
      row.classList.toggle('fd-focus-muted', Boolean(state.focusedMode) && row.dataset.mode !== state.focusedMode);
      row.classList.toggle('fd-focused-row', row.dataset.mode === state.focusedMode);
    });
    state.board.querySelectorAll('[data-fd-focus]').forEach((button) => {
      const active = button.dataset.fdFocus === state.focusedMode;
      button.classList.toggle('is-active', active);
      button.querySelector('span').textContent = active ? 'Unfocus' : 'Focus';
    });
    if (state.focusedMode) state.board.querySelector(`.fd-row[data-mode="${CSS.escape(state.focusedMode)}"]`)?.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
  }

  function syncSpecialVisibility() {
    if (!state.board) return;
    updateFocus();
    updateSymptomResults();
  }

  function showComponent(id) {
    const lastColon = id.lastIndexOf(':');
    if (lastColon < 0) return;
    const modeId = id.slice(0, lastColon);
    const stage = id.slice(lastColon + 1);
    if (!stages.includes(stage)) return;
    const mode = modeById(modeId); const profile = profileById(modeId); const detail = document.querySelector('[data-detail]');
    if (!mode || !profile || !detail) return;
    state.board.querySelectorAll('[data-fd-component]').forEach((node) => node.classList.toggle('is-active', node.dataset.fdComponent === id));
    const scope = profile.evidence_scope[stage] || 'unverified';
    detail.innerHTML = `<div class="framework-inspector-head">${icon(categoryIcons[mode.category])}<div><p class="eyebrow">Diagnostic component · ${esc(stageLabels[stage][1])}</p><h2>${mode.number} · ${esc(mode.title)}</h2><div class="fd-inspector-scope">${evidenceBadge(scope)}</div></div></div>
      <section class="framework-inspector-section fd-inspector-component"><h3>${esc(stageLabels[stage][1])}</h3>${renderComponentMeaning(mode, profile, stage)}</section>
      ${renderChecks(mode, profile)}
      ${renderVerificationProfile(mode, profile)}
      ${renderTradeoffs(profile)}
      ${renderCrossLinks(mode, profile)}
      ${renderEvidence(mode, scope)}
      ${renderConcepts(mode)}
      <div class="detail-actions"><button type="button" class="button primary" data-fd-detail-focus="${mode.id}">Focus full pathway</button><a class="button" href="${issueUrl('Suggest a diagnostic correction', `${mode.title} · ${stage}`)}" target="_blank" rel="noopener">Suggest correction ↗</a></div>`;
    detail.querySelector('[data-fd-detail-focus]')?.addEventListener('click', () => { focusMode(mode.id); showMode(mode.id); });
    window.AtlasConcepts?.enhance(detail);
    setHash(id);
  }

  function showMode(modeId) {
    const mode = modeById(modeId); const profile = profileById(modeId); const detail = document.querySelector('[data-detail]');
    if (!mode || !profile || !detail) return;
    detail.innerHTML = `<div class="framework-inspector-head">${icon(categoryIcons[mode.category])}<div><p class="eyebrow">Failure-mode diagnostic pathway</p><h2>${mode.number} · ${esc(mode.title)}</h2><small class="fd-family-label">${esc(categoryById(mode.category)?.title || '')}</small></div></div>
      <section class="framework-inspector-section"><h3>Observed signature → diagnostic hypothesis</h3>${renderList(mode.symptoms)}<p class="fd-diagnostic-caution">A symptom match is not a diagnosis. Use the discriminating checks below to confirm or reject this hypothesis.</p></section>
      ${renderChecks(mode, profile)}
      <section class="framework-inspector-section"><h3>Candidate intervention</h3>${renderList(mode.responses)}<h4>Expected targeted improvement</h4><p class="target-improvement">${esc(mode.improvement)}</p></section>
      ${renderVerificationProfile(mode, profile)}
      ${renderTradeoffs(profile)}
      ${renderCrossLinks(mode, profile)}
      ${renderEvidence(mode, 'pathway')}
      ${renderConcepts(mode)}`;
    window.AtlasConcepts?.enhance(detail);
    setHash(mode.id);
  }

  function showCategory(categoryId) {
    const category = categoryById(categoryId); const detail = document.querySelector('[data-detail]');
    if (!category || !detail) return;
    const modes = category.mode_ids.map(modeById).filter(Boolean);
    detail.innerHTML = `<div class="framework-inspector-head">${icon(categoryIcons[categoryId])}<div><p class="eyebrow">Diagnostic family</p><h2>${category.code} · ${esc(category.title)}</h2></div></div><section class="framework-inspector-section"><h3>Scientific role</h3><p>${esc(category.summary)}</p></section><section class="framework-inspector-section"><h3>Contained failure modes</h3><div class="framework-relationship-list">${modes.map((mode) => `<button type="button" data-fd-category-mode="${mode.id}"><span>Failure mode ${mode.number}</span><b>${esc(mode.title)}</b><small>${mode.symptoms.length} observable signatures · ${profileById(mode.id).checks.length} discriminating checks</small></button>`).join('')}</div></section>`;
    detail.querySelectorAll('[data-fd-category-mode]').forEach((button) => button.addEventListener('click', () => showMode(button.dataset.fdCategoryMode)));
    setHash(`category:${categoryId}`);
  }

  function showVerification() {
    const detail = document.querySelector('[data-detail]'); if (!detail) return;
    detail.innerHTML = `<div class="framework-inspector-head">${icon('feedback')}<div><p class="eyebrow">Verification-driven redesign</p><h2>Verify improvement → retain or re-diagnose</h2></div></div><section class="framework-inspector-section"><h3>Decision rule</h3><p>${esc(state.meta.audit.verification_policy)}</p><p class="fd-diagnostic-caution">Verification must be pathway-specific. A reduction in one training loss is not sufficient evidence that the diagnosed failure mode has been resolved.</p></section><section class="framework-inspector-section"><h3>Seven Design–Performance outcomes</h3><div class="fd-inspector-outcomes">${state.meta.verification_order.map((id) => outcomeInspectorCard(id)).join('')}</div></section><section class="framework-inspector-section"><h3>Close the loop</h3><div class="diagnostic-mini-path"><span>Observed symptom</span><i>→</i><span>Hypothesis</span><i>→</i><span>Discriminating check</span><i>→</i><span>Intervention</span><i>→</i><span>Outcome verification</span><i>↻</i><span>Re-diagnose if needed</span></div></section><section class="framework-inspector-section"><h3>Continue through the Atlas</h3><div class="framework-detail-links"><a class="button" href="../design-performance/">Design–Performance →</a><a class="button" href="${PREFIX}performance-metrics/">Performance Metrics →</a><a class="button" href="../design-stack/">Design Stack →</a><a class="button" href="../co-design/">Co-Design →</a></div></section>`;
    setHash('verify');
  }

  function showOutcome(id) {
    const column = outcomeById(id); const meta = outcomeMeta(id); const detail = document.querySelector('[data-detail]');
    if (!column || !meta || !detail) return;
    detail.innerHTML = `<div class="framework-inspector-head">${icon(meta.icon)}<div><p class="eyebrow">Verification outcome</p><h2>${column.code} · ${esc(column.title)}</h2></div></div><section class="framework-inspector-section"><h3>Scientific meaning</h3><p>${esc(meta.summary)}</p><p class="fd-diagnostic-caution"><b>Do not infer:</b> ${esc(meta.caution)}</p></section><section class="framework-inspector-section"><h3>Typical verification quantities</h3>${renderList(meta.typical_metrics)}</section><section class="framework-inspector-section"><h3>Failure pathways that target this outcome</h3><div class="framework-relationship-list">${state.data.modes.filter((mode) => profileById(mode.id).verification.outcomes.includes(id)).map((mode) => `<button type="button" data-fd-outcome-mode="${mode.id}"><span>Failure mode ${mode.number}</span><b>${esc(mode.title)}</b><small>${esc(profileById(mode.id).verification.metrics.join(' · '))}</small></button>`).join('')}</div></section><section class="framework-inspector-section"><h3>Open shared performance view</h3><div class="framework-detail-links"><a class="button primary" href="../design-performance/#outcome=${encodeURIComponent(id)}">Design–Performance · ${esc(column.title)} →</a><a class="button" href="${PREFIX}performance-metrics/">Performance Metrics →</a></div></section>`;
    detail.querySelectorAll('[data-fd-outcome-mode]').forEach((button) => button.addEventListener('click', () => showMode(button.dataset.fdOutcomeMode)));
    setHash(`outcome:${id}`);
  }

  function renderComponentMeaning(mode, profile, stage) {
    if (stage === 'challenge') return `<p>${esc(mode.title)}</p><p>This is a diagnostic hypothesis about the dominant pathology, not a conclusion inferred from one symptom.</p>`;
    if (stage === 'symptoms') return `${renderList(mode.symptoms)}<h4>Confirmatory diagnostics are separate</h4>${renderList(profile.confirmation_metrics)}<p class="fd-diagnostic-caution">Symptoms alert the researcher; confirmatory quantities help test the hypothesis.</p>`;
    if (stage === 'response') return `${renderList(mode.responses)}<p>Choose a response only after the observed signatures and discriminating checks are consistent with this pathway.</p>`;
    return `<p class="target-improvement">${esc(mode.improvement)}</p><p>Verify the improvement using the pathway-specific outcome profile; do not infer success from the intervention itself.</p>`;
  }

  function renderChecks(mode, profile) {
    return `<section class="framework-inspector-section"><h3>Discriminating checks</h3>${renderList(profile.checks)}<h4>Confirmatory quantities</h4>${renderList(profile.confirmation_metrics)}</section>`;
  }

  function renderVerificationProfile(mode, profile) {
    return `<section class="framework-inspector-section fd-verification-profile"><h3>What should be measured after intervention?</h3>${renderOutcomeTags(profile.verification.outcomes)}<h4>Pathway-specific verification quantities</h4>${renderList(profile.verification.metrics)}<p><a href="${PREFIX}performance-metrics/">Open Performance Metrics →</a></p></section>`;
  }

  function renderOutcomeTags(ids) {
    return `<div class="fd-outcome-tags">${ids.map((id) => { const column = outcomeById(id); return `<button type="button" data-fd-inline-outcome="${id}"><span>${esc(column?.code || '')}</span>${esc(column?.title || id)}</button>`; }).join('')}</div>`;
  }

  function renderTradeoffs(profile) {
    return `<section class="framework-inspector-section"><h3>Trade-offs to verify</h3>${renderList(profile.tradeoffs)}<p class="fd-diagnostic-caution">A response can improve the targeted pathology while degrading cost, conditioning, interface fidelity, or generalization. Verify both intended benefit and collateral effects.</p></section>`;
  }

  function renderCrossLinks(mode, profile) {
    const links = profile.cross_links;
    const stack = links.stack.map((id) => `<a class="fd-trace-node" href="../design-stack/#item=${encodeURIComponent(id)}"><small>Design Stack</small><b>${esc(id.replace(/-/g, ' '))}</b></a>`).join('');
    const codesign = links.codesign.map((id) => `<a class="fd-trace-node" href="../co-design/#item=${encodeURIComponent(id)}"><small>Co-Design</small><b>${esc(id.replace(/-/g, ' '))}</b></a>`).join('');
    const rows = links.performance_rows.map((id) => `<a class="fd-trace-node" href="../design-performance/#item=${encodeURIComponent(id)}"><small>Design–Performance</small><b>${esc(id.replace(/-/g, ' '))}</b></a>`).join('');
    const outcomes = links.performance_outcomes.map((id) => { const column = outcomeById(id); return `<a class="fd-trace-node" href="../design-performance/#outcome=${encodeURIComponent(id)}"><small>Outcome</small><b>${esc(column?.title || id)}</b></a>`; }).join('');
    const atlas = links.atlas.map((item) => `<a class="fd-trace-node" href="${PREFIX}${item.route}"><small>Atlas</small><b>${esc(item.label)}</b></a>`).join('');
    return `<section class="framework-inspector-section fd-cross-trace"><h3>Cross-framework reasoning trace</h3><p>Move from the diagnosed failure to the upstream design choices, coupled formulation domain, affected performance outcome, and verification tools.</p><div class="fd-trace-chain"><span class="fd-trace-origin">Failure ${mode.number}</span><i>→</i>${stack}${codesign}${rows}${outcomes}${atlas}</div></section>`;
  }

  function renderEvidence(mode, scope) {
    const label = scope === 'pathway' ? 'Pathway evidence' : state.meta.evidence_scope_labels[scope] || scope;
    return `<section class="framework-inspector-section detail-evidence"><h3>${esc(label)}</h3><p class="fd-evidence-note"><b>Evidence scope:</b> ${esc(state.meta.evidence_scope_labels[scope] || 'Pathway-level synthesis evidence')}. This label describes documentation scope, not confidence or effect strength.</p>${mode.evidence.map((entry) => `<article class="framework-evidence-claim"><div class="evidence-claim-head"><a class="evidence-reference-id" href="${PREFIX}references/#ref=${entry.atlas_id}">[${entry.atlas_id}]</a><span class="evidence-support-badge" data-support="${esc(entry.support.toLowerCase())}">${esc(entry.support)}</span></div><p>${esc(entry.rationale)}</p></article>`).join('')}</section>`;
  }

  function renderConcepts(mode) {
    if (!mode.concepts?.length) return '';
    return `<section class="framework-inspector-section"><h3>Canonical concepts</h3><div class="framework-detail-links">${mode.concepts.map((concept) => `<button class="button primary" type="button" data-concept-id="${esc(concept.id)}">${esc(concept.label)}</button>`).join('')}</div></section>`;
  }

  function outcomeInspectorCard(id) {
    const column = outcomeById(id); const meta = outcomeMeta(id);
    return `<button type="button" data-fd-inspector-outcome="${id}"><span>${esc(column?.code || '')}</span><div><b>${esc(column?.title || id)}</b><small>${esc(meta?.summary || '')}</small></div></button>`;
  }

  function defaultInspector() {
    return `<p class="eyebrow">Scientific diagnostic workbench</p><h2>Start with what you observe</h2><p>Select an observed symptom above the map, or select any of the 52 pathway components. The workbench separates symptoms from confirmatory diagnostics, exposes trade-offs and evidence scope, and links the diagnosis to Design Stack, Co-Design, Design–Performance, and Performance Metrics.</p><div class="detail-hint"><span>Observe</span><span>Check</span><span>Intervene</span><span>Verify</span><span>Re-diagnose</span></div>`;
  }

  function renderMobileStepper() {
    return `<section class="fd-mobile-stepper" aria-label="Mobile failure-mode diagnostic stepper"><header><span class="fd-workbench-kicker">MOBILE DIAGNOSTIC STEPPER</span><h3>Observe → check → respond → verify</h3><label>Failure mode<select data-fd-mobile-mode>${state.data.modes.map((mode) => `<option value="${mode.id}">${mode.number} · ${esc(mode.title)}</option>`).join('')}</select></label></header><div data-fd-mobile-content></div><footer><button type="button" class="button" data-fd-mobile-nav="-1">← Previous</button><span data-fd-mobile-progress></span><button type="button" class="button primary" data-fd-mobile-nav="1">Next →</button></footer><button type="button" class="button fd-open-full-map" data-fd-open-full>Open full diagnostic map</button></section>`;
  }

  function refreshMobile() {
    const container = state.board?.querySelector('[data-fd-mobile-content]'); if (!container) return;
    const mode = modeById(state.mobileMode) || state.data.modes[0]; const profile = profileById(mode.id);
    const steps = [
      ['Observed symptoms', renderList(mode.symptoms)],
      ['Candidate failure mode', `<p><b>${esc(mode.title)}</b></p><p>Use the next step to test this hypothesis before selecting a response.</p>`],
      ['Discriminating checks', renderList(profile.checks)],
      ['Methodological response', `${renderList(mode.responses)}<p class="target-improvement">Expected: ${esc(mode.improvement)}</p>`],
      ['Verify improvement', `${renderOutcomeTags(profile.verification.outcomes)}${renderList(profile.verification.metrics)}<p>Not improved? Re-diagnose and test another plausible failure mode.</p>`]
    ];
    const [title, content] = steps[state.mobileStep];
    container.innerHTML = `<article class="fd-mobile-step"><span>${state.mobileStep + 1}</span><h4>${esc(title)}</h4>${content}</article>`;
    const progress = state.board.querySelector('[data-fd-mobile-progress]'); if (progress) progress.textContent = `${state.mobileStep + 1} / ${steps.length}`;
    const select = state.board.querySelector('[data-fd-mobile-mode]'); if (select) select.value = mode.id;
    const prev = state.board.querySelector('[data-fd-mobile-nav="-1"]'); const next = state.board.querySelector('[data-fd-mobile-nav="1"]');
    if (prev) prev.disabled = state.mobileStep === 0;
    if (next) next.textContent = state.mobileStep === steps.length - 1 ? 'Re-diagnose ↻' : 'Next →';
    container.querySelectorAll('[data-fd-inline-outcome]').forEach((button) => button.addEventListener('click', () => showOutcome(button.dataset.fdInlineOutcome)));
    const full = state.board.querySelector('[data-fd-open-full]');
    if (full && !full.dataset.bound) { full.dataset.bound = 'true'; full.addEventListener('click', () => document.querySelector('[data-expand]')?.click()); }
  }

  function moveMobile(delta) {
    const last = 4;
    if (state.mobileStep === last && delta > 0) state.mobileStep = 0;
    else state.mobileStep = Math.max(0, Math.min(last, state.mobileStep + delta));
    refreshMobile();
  }

  function navigateGrid(event, component) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', ' '].includes(event.key)) return;
    if (['Enter', ' '].includes(event.key)) { event.preventDefault(); showComponent(component.dataset.fdComponent); return; }
    event.preventDefault();
    const row = component.closest('.fd-row'); const rowIndex = Number(row.dataset.rowIndex); const stage = component.dataset.stage; let stageIndex = stages.indexOf(stage); let targetRow = rowIndex;
    if (event.key === 'ArrowLeft') stageIndex -= 1;
    if (event.key === 'ArrowRight') stageIndex += 1;
    if (event.key === 'ArrowUp') targetRow -= 1;
    if (event.key === 'ArrowDown') targetRow += 1;
    stageIndex = Math.max(0, Math.min(stages.length - 1, stageIndex)); targetRow = Math.max(0, Math.min(state.data.modes.length - 1, targetRow));
    const targetMode = state.data.modes[targetRow];
    state.board.querySelector(`[data-fd-component="${CSS.escape(componentId(targetMode.id, stages[stageIndex]))}"]`)?.focus();
  }

  function restoreHash() {
    const params = new URLSearchParams(location.hash.replace(/^#/, ''));
    const raw = params.get('item');
    if (!raw) return;
    if (raw === 'verify') return showVerification();
    if (raw.startsWith('category:')) return showCategory(raw.slice('category:'.length));
    if (raw.startsWith('outcome:')) return showOutcome(raw.slice('outcome:'.length));
    if (state.data.modes.some((mode) => mode.id === raw)) return showMode(raw);
    const lastColon = raw.lastIndexOf(':');
    if (lastColon > 0 && state.data.modes.some((mode) => mode.id === raw.slice(0, lastColon)) && stages.includes(raw.slice(lastColon + 1))) showComponent(raw);
  }

  function setHash(id) {
    const url = new URL(location.href); url.hash = `item=${encodeURIComponent(id)}`; history.replaceState(null, '', url);
  }

  function issueUrl(type, context) {
    const title = `[Frameworks] ${type}: ${context}`;
    const body = `Framework: ${state.data.title}\nElement or relationship: ${context}\n\nRequested change:\n\nScientific rationale:\n\nSupporting DOI, URL, or verified Reference IDs:`;
    return `https://github.com/ahafuaej-alt/PINN-Review/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }

  function renderList(items = []) {
    return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function bindExportOverride() {
    document.querySelector('[data-svg]')?.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); exportNativeSvg('current'); }, true);
    document.querySelector('[data-svg-publication]')?.addEventListener('click', (event) => { event.preventDefault(); event.stopImmediatePropagation(); exportNativeSvg('publication'); }, true);
  }

  function exportNativeSvg(mode) {
    const width = 2500, margin = 44, familyW = 260, challengeW = 430, symptomsW = 490, responseW = 540, improvementW = 400, verifyW = 250;
    const mapW = familyW + challengeW + symptomsW + responseW + improvementW;
    const headerY = 112, headerH = 102, rowH = 118, gap = 10, ruleH = 104;
    const categoryGapTotal = gap * (state.data.categories.length - 1);
    const rowsHeight = state.data.modes.length * rowH + categoryGapTotal;
    const height = headerY + headerH + rowsHeight + ruleH + 110;
    const dark = mode === 'current' && document.documentElement.dataset.theme === 'dark';
    const bg = dark ? '#0b111c' : '#ffffff', ink = dark ? '#eef4ff' : '#13213a', muted = dark ? '#aebbd0' : '#53617a', line = dark ? '#344258' : '#cbd5e5';
    const pieces = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" data-export-mode="${mode}" data-native-vector="true"><rect width="100%" height="100%" fill="${bg}"/><style>text{font-family:Arial,Helvetica,sans-serif;fill:${ink}}.b{font-weight:700}.m{fill:${muted}}.s{font-size:17px}.xs{font-size:14px}</style><defs>${svgMarkers()}</defs>`];
    pieces.push(`<text x="${margin}" y="42" font-size="31" class="b">PINN FAILURE-MODE DIAGNOSTICS</text><text x="${margin}" y="76" font-size="18" class="m">Observe → hypothesize → discriminate → intervene → verify → re-diagnose</text>`);
    const heads = [
      [margin, familyW, 'DIAGNOSTIC FAMILY', 'What is failing'],
      [margin + familyW, challengeW, '1 · CHALLENGE / PATHOLOGY', 'Why it happens'],
      [margin + familyW + challengeW, symptomsW, '2 · OBSERVABLE SYMPTOMS', 'How it appears'],
      [margin + familyW + challengeW + symptomsW, responseW, '3 · METHODOLOGICAL RESPONSE', 'What to try'],
      [margin + familyW + challengeW + symptomsW + responseW, improvementW, '4 · TARGETED IMPROVEMENT', 'What it improves']
    ];
    heads.forEach(([x, w, title, sub], index) => {
      const color = index === 0 ? '#34228f' : ['#b20e13', '#e35a0a', '#12813d', '#1747b8'][index - 1];
      pieces.push(svgCell(x, headerY, w, headerH, color, color, 1, 16));
      pieces.push(svgWrapped(title, x + w / 2, headerY + 36, Math.floor(w / 11), 20, '#ffffff', true));
      pieces.push(svgWrapped(sub, x + w / 2, headerY + 70, Math.floor(w / 10), 15, '#ffffff', false));
    });
    const verifyX = margin + mapW + 18;
    pieces.push(svgCell(verifyX, headerY, verifyW, headerH, '#1747b8', '#1747b8', 1, 16));
    pieces.push(svgWrapped('VERIFY IMPROVEMENT', verifyX + verifyW / 2, headerY + 38, 22, 20, '#ffffff', true));
    pieces.push(svgWrapped('retain or re-diagnose', verifyX + verifyW / 2, headerY + 72, 22, 14, '#ffffff', false));

    let y = headerY + headerH;
    state.data.categories.forEach((category, categoryIndex) => {
      if (categoryIndex) y += gap;
      const modes = category.mode_ids.map(modeById).filter(Boolean); const color = categoryColors[category.id]; const catH = modes.length * rowH;
      pieces.push(svgCell(margin, y, familyW, catH, dark ? '#111926' : '#fbfcff', color, 2, 18));
      pieces.push(`<circle cx="${margin + familyW / 2}" cy="${y + catH / 2 - 58}" r="29" fill="none" stroke="${color}" stroke-width="3"/><text x="${margin + familyW / 2}" y="${y + catH / 2 - 49}" text-anchor="middle" font-size="25" fill="${color}" class="b">${category.code}</text>${svgWrapped(category.title.toUpperCase(), margin + familyW / 2, y + catH / 2 + 2, 24, 19, color, true)}${svgWrapped(category.summary, margin + familyW / 2, y + catH / 2 + 65, 27, 14, muted, false)}`);
      modes.forEach((modeData) => {
        const profile = profileById(modeData.id); const x0 = margin + familyW;
        const selected = mode === 'current' && state.focusedMode && state.focusedMode !== modeData.id; const opacity = selected ? .25 : 1;
        pieces.push(`<g opacity="${opacity}">`);
        const cells = [
          [x0, challengeW, modeData.title, 'challenge'],
          [x0 + challengeW, symptomsW, modeData.symptoms, 'symptoms'],
          [x0 + challengeW + symptomsW, responseW, modeData.responses, 'response'],
          [x0 + challengeW + symptomsW + responseW, improvementW, modeData.improvement, 'improvement']
        ];
        cells.forEach(([x, w, content, stage], index) => {
          pieces.push(svgCell(x, y, w, rowH, dark ? '#101722' : '#ffffff', color, .9));
          if (stage === 'challenge') {
            pieces.push(`<circle cx="${x + 30}" cy="${y + rowH / 2}" r="20" fill="${color}"/><text x="${x + 30}" y="${y + rowH / 2 + 6}" text-anchor="middle" font-size="16" fill="#fff" class="b">${modeData.number}</text>${svgWrapped(content, x + 62, y + 35, 38, 16, color, true, 'start', 4)}`);
          } else if (Array.isArray(content)) {
            content.slice(0, 4).forEach((item, itemIndex) => pieces.push(svgWrapped(`• ${item}`, x + 18, y + 27 + itemIndex * 23, Math.floor(w / 9.2), 13, ink, false, 'start', 1)));
          } else pieces.push(svgWrapped(content, x + w / 2, y + 42, Math.floor(w / 9.2), 16, color, true, 'middle', 4));
          if (index < 3) pieces.push(`<path d="M ${x + w - 7} ${y + rowH / 2} H ${x + w + 15}" stroke="${color}" stroke-width="3" marker-end="url(#arr-${category.id})"/>`);
          const scope = profile.evidence_scope[stage]; const symbol = scope === 'exact' ? '●' : scope === 'pathway' ? '◐' : '○';
          pieces.push(`<text x="${x + w - 18}" y="${y + rowH - 12}" text-anchor="end" font-size="11" fill="${muted}">${symbol}</text>`);
        });
        pieces.push('</g>');
        y += rowH;
      });
    });

    const railTop = headerY + headerH; const railH = rowsHeight;
    pieces.push(svgCell(verifyX, railTop, verifyW, railH, dark ? '#10182a' : '#f8fbff', '#1747b8', 2, 18));
    pieces.push(`<path d="M ${verifyX + verifyW / 2} ${railTop + 90} C ${verifyX + verifyW - 30} ${railTop + 90}, ${verifyX + verifyW - 30} ${railTop + 230}, ${verifyX + verifyW / 2} ${railTop + 250} C ${verifyX + 25} ${railTop + 270}, ${verifyX + 25} ${railTop + 410}, ${verifyX + verifyW / 2} ${railTop + 430}" fill="none" stroke="#1747b8" stroke-width="4" stroke-dasharray="10 8" marker-end="url(#verify-arr)"/>`);
    pieces.push(svgWrapped('CHECK TARGETED OUTCOMES', verifyX + verifyW / 2, railTop + 500, 22, 17, '#1747b8', true));
    let oy = railTop + 548;
    state.meta.verification_order.forEach((id) => { const column = outcomeById(id); pieces.push(`<rect x="${verifyX + 22}" y="${oy - 18}" width="${verifyW - 44}" height="36" rx="18" fill="${dark ? '#172338' : '#ffffff'}" stroke="#9bb7e8"/><text x="${verifyX + verifyW / 2}" y="${oy + 6}" text-anchor="middle" font-size="13" class="b">${xml(column?.title || id)}</text>`); oy += 49; });
    pieces.push(svgWrapped('If not improved: re-diagnose and revisit upstream design choices.', verifyX + verifyW / 2, oy + 28, 24, 15, '#1747b8', true, 'middle', 5));

    const ruleY = headerY + headerH + rowsHeight + 34;
    pieces.push(`<rect x="${margin + 350}" y="${ruleY}" width="${mapW - 700}" height="${ruleH}" rx="22" fill="${dark ? '#171329' : '#fbf8ff'}" stroke="#5b37bf" stroke-width="2"/><text x="${margin + 390}" y="${ruleY + 42}" font-size="19" fill="#5b37bf" class="b">DIAGNOSE FIRST, THEN RESPOND</text>${svgWrapped('Association is not diagnosis. Identify plausible causes from symptoms, run discriminating checks, select a targeted response, and verify the expected improvement.', margin + 390, ruleY + 70, 150, 14, ink, false, 'start', 2)}`);
    pieces.push(`<text x="${margin}" y="${height - 38}" font-size="12" class="m">Evidence symbols: ● exact component support · ◐ pathway-level synthesis evidence · ○ not yet independently verified. Documentation scope only; not confidence or effect strength.</text></svg>`);
    downloadSvg(pieces.join(''), `failure-diagnostics-${mode}-view.svg`);
  }

  function svgMarkers() {
    return Object.entries(categoryColors).map(([id, color]) => `<marker id="arr-${id}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${color}"/></marker>`).join('') + '<marker id="verify-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1747b8"/></marker>';
  }

  function svgCell(x, y, w, h, fill, stroke, sw = 1, rx = 0) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  }

  function svgWrapped(text, x, y, maxChars, fontSize, color, bold = false, anchor = 'middle', maxLines = 3) {
    const words = String(text).split(/\s+/); const lines = []; let line = '';
    words.forEach((word) => { const next = line ? `${line} ${word}` : word; if (next.length > maxChars && line) { lines.push(line); line = word; } else line = next; }); if (line) lines.push(line);
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${fontSize}" fill="${color}"${bold ? ' font-weight="700"' : ''}>${lines.slice(0, maxLines).map((item, index) => `<tspan x="${x}" dy="${index ? fontSize * 1.24 : 0}">${xml(item)}</tspan>`).join('')}</text>`;
  }

  function downloadSvg(svg, filename) {
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1200); flash('Native-vector diagnostic SVG exported.');
  }

  function flash(message) {
    let toast = document.querySelector('.framework-toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'framework-toast'; document.body.append(toast); }
    toast.textContent = message; clearTimeout(toast.timer); toast.timer = setTimeout(() => toast.remove(), 2200);
  }

  document.addEventListener('click', (event) => {
    const inlineOutcome = event.target.closest('[data-fd-inline-outcome]');
    if (inlineOutcome) { event.preventDefault(); showOutcome(inlineOutcome.dataset.fdInlineOutcome); }
    const inspectorOutcome = event.target.closest('[data-fd-inspector-outcome]');
    if (inspectorOutcome) { event.preventDefault(); showOutcome(inspectorOutcome.dataset.fdInspectorOutcome); }
  });
})();
