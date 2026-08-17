(() => {
  "use strict";

  const DATA_URL = "../data/pinn-ecosystem/pinn-ecosystem.json";
  const ISSUE_URL = "https://github.com/ahafuaej-alt/PINN-Review/issues/new";
  const layerColors = ["#1674b8", "#346ea5", "#6354d9", "#087f70", "#0b8792", "#a55a0b", "#be4b8c", "#667687", "#45596d"];

  const els = {
    status: document.querySelector("[data-ecosystem-status]"),
    shell: document.querySelector("[data-ecosystem-shell]"),
    layerFlow: document.querySelector("[data-layer-flow]"),
    layerMap: document.querySelector("[data-layer-map]"),
    relationFocus: document.querySelector("[data-relation-focus]"),
    search: document.querySelector("[data-ecosystem-search]"),
    clearSearch: document.querySelector("[data-clear-search]"),
    relationLens: document.querySelector("[data-relation-lens]"),
    groupDialog: document.querySelector("[data-group-dialog]"),
    groupDialogContent: document.querySelector("[data-group-dialog-content]"),
    proposalDialog: document.querySelector("[data-proposal-dialog]"),
    proposalForm: document.querySelector("[data-proposal-form]"),
    proposalGroup: document.querySelector("[data-proposal-group]"),
    toast: document.querySelector("[data-ecosystem-toast]"),
    builderStatus: document.querySelector("[data-builder-status]"),
    builderShell: document.querySelector("[data-builder-shell]"),
    stageNav: document.querySelector("[data-builder-stage-nav]"),
    stagePanels: document.querySelector("[data-builder-stage-panels]"),
    selectionCount: document.querySelector("[data-selection-count]"),
    diagram: document.querySelector("[data-pinn-diagram]"),
    diagramDescription: document.querySelector("[data-diagram-description]"),
    diagramState: document.querySelector("[data-diagram-state]"),
    compatibilityList: document.querySelector("[data-compatibility-list]"),
    signalCount: document.querySelector("[data-signal-count]"),
    designSummary: document.querySelector("[data-design-summary]")
  };

  const state = {
    data: null,
    groups: new Map(),
    layers: new Map(),
    selectedGroupId: null,
    lens: "all",
    query: "",
    activeStage: 0,
    selections: new Map(),
    toastTimer: null
  };

  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
  const escapeXml = escapeHtml;
  const normalize = (value = "") => String(value).normalize("NFKD").replace(/[\u0300-\u036f\u200b-\u200d\ufeff]/g, "").toLocaleLowerCase("en");
  const compact = (value, length = 150) => value.length > length ? `${value.slice(0, length - 1).trim()}…` : value;
  const colorForLayer = (layerId) => {
    const layer = state.layers.get(layerId);
    return layerColors[Math.max(0, (layer?.number || 1) - 1) % layerColors.length];
  };

  async function init() {
    try {
      const response = await fetch(DATA_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`Taxonomy request returned ${response.status}.`);
      state.data = await response.json();
      state.groups = new Map(state.data.groups.map((group) => [group.id, group]));
      state.layers = new Map(state.data.layers.map((layer) => [layer.id, layer]));
      renderStats();
      renderLayerFlow();
      populateControls();
      renderLayerMap();
      initializeBuilder();
      attachEvents();
      els.shell.hidden = false;
      els.status.hidden = true;
      els.builderShell.hidden = false;
      els.builderStatus.hidden = true;
    } catch (error) {
      console.error(error);
      els.status.dataset.state = "error";
      els.status.textContent = "The PINN ecosystem data could not be loaded. Refresh the page or download the taxonomy JSON directly.";
      els.builderStatus.dataset.state = "error";
      els.builderStatus.textContent = "The design studio could not be initialized because its taxonomy data is unavailable.";
    }
  }

  function renderStats() {
    const stats = state.data.stats;
    document.querySelectorAll("[data-ecosystem-stat]").forEach((element) => {
      const key = element.dataset.ecosystemStat;
      const value = key === "items" ? stats.itemOccurrences : stats[key];
      element.textContent = Number(value).toLocaleString("en-US");
    });
    document.querySelectorAll("[data-ecosystem-version]").forEach((element) => { element.textContent = state.data.datasetVersion; });
  }

  function renderLayerFlow() {
    els.layerFlow.innerHTML = state.data.layers.map((layer) => `
      <article class="layer-flow-step" style="--layer-color:${colorForLayer(layer.id)}">
        <b>Layer ${String(layer.number).padStart(2, "0")}</b>
        <strong>${escapeHtml(layer.title)}</strong>
        <span>${layer.groupIds.length} groups</span>
      </article>`).join("");
  }

  function populateControls() {
    els.relationLens.innerHTML = state.data.relationLenses.map((lens) => `<option value="${escapeHtml(lens.id)}">${escapeHtml(lens.title)}</option>`).join("");
    els.proposalGroup.innerHTML = `<option value="">Choose a group…</option>${state.data.layers.map((layer) => {
      const options = layer.groupIds.map((groupId) => {
        const group = state.groups.get(groupId);
        return `<option value="${escapeHtml(group.id)}">${group.number}. ${escapeHtml(group.title)}</option>`;
      }).join("");
      return `<optgroup label="Layer ${layer.number} · ${escapeHtml(layer.title)}">${options}</optgroup>`;
    }).join("")}`;
  }

  function groupSearchResult(group, query) {
    if (!query) return { matches: true, itemMatches: [] };
    const groupText = normalize(`${group.title} ${group.description}`);
    const itemMatches = group.subgroups.flatMap((subgroup) => subgroup.items
      .filter((item) => normalize(`${subgroup.title} ${item.name}`).includes(query))
      .map((item) => item.name));
    return { matches: groupText.includes(query) || itemMatches.length > 0, itemMatches };
  }

  function renderLayerMap() {
    const query = normalize(state.query.trim());
    let visibleGroups = 0;
    let matchingItems = 0;

    els.layerMap.innerHTML = state.data.layers.map((layer) => {
      const groups = layer.groupIds.map((groupId) => state.groups.get(groupId)).map((group) => ({ group, result: groupSearchResult(group, query) })).filter(({ result }) => result.matches);
      if (!groups.length) return "";
      visibleGroups += groups.length;
      matchingItems += groups.reduce((sum, entry) => sum + entry.result.itemMatches.length, 0);
      const color = colorForLayer(layer.id);
      return `
        <details class="layer-band" data-layer-id="${layer.id}" style="--layer-color:${color}" open>
          <summary>
            <span class="layer-number">${String(layer.number).padStart(2, "0")}</span>
            <span class="layer-title"><strong>${escapeHtml(layer.title)}</strong><span>${escapeHtml(layer.description)}</span></span>
            <span class="layer-count">${groups.length} group${groups.length === 1 ? "" : "s"}</span>
            <span class="layer-chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="group-grid">${groups.map(({ group, result }) => renderGroupCard(group, result, color)).join("")}</div>
        </details>`;
    }).join("");

    if (!visibleGroups) {
      els.layerMap.innerHTML = `<div class="ecosystem-status"><strong>No matching element</strong><br>Try a broader term or propose the missing item for review.</div>`;
    }
    els.status.hidden = false;
    els.status.textContent = query ? `${visibleGroups} groups and ${matchingItems} direct item matches for “${state.query.trim()}”.` : `${state.data.stats.groups} groups organized across ${state.data.stats.layers} dependent layers.`;
    updateSelectedCard();
  }

  function renderGroupCard(group, result, color) {
    const relationCount = state.data.relations.filter((relation) => relation.from === group.id || relation.to === group.id).length;
    const previews = result.itemMatches.slice(0, 3).map((name) => `<span>${escapeHtml(name)}</span>`).join("");
    return `
      <article class="group-card" data-group-id="${group.id}" data-selected="${group.id === state.selectedGroupId}" style="--layer-color:${color}">
        <button class="group-open" type="button" data-focus-group="${group.id}">
          <span class="group-kicker"><span>Group ${String(group.number).padStart(2, "0")}</span><span>${group.itemCount} items</span></span>
          <h3>${escapeHtml(group.title)}</h3>
          <p>${escapeHtml(compact(group.description, 142))}</p>
          ${previews ? `<span class="group-match-preview">${previews}</span>` : ""}
        </button>
        <div class="group-card-actions"><button type="button" data-open-group="${group.id}">Explore ${group.subgroups.length} subgroup${group.subgroups.length === 1 ? "" : "s"}</button><button type="button" data-propose-group="${group.id}">＋ Add missing</button><span class="visually-hidden">${relationCount} relationships</span></div>
      </article>`;
  }

  function updateSelectedCard() {
    document.querySelectorAll(".group-card").forEach((card) => { card.dataset.selected = String(card.dataset.groupId === state.selectedGroupId); });
  }

  function filteredRelations() {
    return state.data.relations.filter((relation) => state.lens === "all" || relation.lens === state.lens);
  }

  function focusGroup(groupId, { scroll = false } = {}) {
    if (!state.groups.has(groupId)) return;
    state.selectedGroupId = groupId;
    updateSelectedCard();
    renderRelationFocus();
    if (scroll) document.querySelector(`.group-card[data-group-id="${CSS.escape(groupId)}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function relationEntry(relation, direction) {
    const relatedId = direction === "incoming" ? relation.from : relation.to;
    const related = state.groups.get(relatedId);
    const layer = state.layers.get(related.layerId);
    return `<button class="relation-entry" type="button" data-related-group="${related.id}" style="--relation-color:${colorForLayer(related.layerId)}"><b>Layer ${layer.number} · ${escapeHtml(related.title)} · ${escapeHtml(relation.type)}</b><span>${escapeHtml(relation.summary)}</span></button>`;
  }

  function renderRelationFocus() {
    const group = state.groups.get(state.selectedGroupId);
    if (!group) return;
    const layer = state.layers.get(group.layerId);
    const relations = filteredRelations();
    const incoming = relations.filter((relation) => relation.to === group.id);
    const outgoing = relations.filter((relation) => relation.from === group.id);
    const color = colorForLayer(group.layerId);
    els.relationFocus.style.setProperty("--focus-color", color);
    els.relationFocus.innerHTML = `
      <div class="relation-focus-head"><p class="eyebrow compact">Layer ${layer.number} · Relationship focus</p><h2>${escapeHtml(group.title)}</h2><p>${incoming.length} incoming · ${outgoing.length} outgoing under the selected lens</p></div>
      <div class="relation-columns">
        <div class="relation-column"><strong>Depends on / is driven by</strong>${incoming.length ? incoming.map((relation) => relationEntry(relation, "incoming")).join("") : `<p class="relation-empty">No incoming relationship is encoded under this lens.</p>`}</div>
        <div class="relation-column"><strong>Changes / supports</strong>${outgoing.length ? outgoing.map((relation) => relationEntry(relation, "outgoing")).join("") : `<p class="relation-empty">No outgoing relationship is encoded under this lens.</p>`}</div>
      </div>
      <div class="focus-actions"><button class="button primary" type="button" data-open-focused>Explore items</button><button class="button" type="button" data-propose-focused>＋ Missing item</button></div>`;
  }

  function openGroup(groupId) {
    const group = state.groups.get(groupId);
    if (!group) return;
    const layer = state.layers.get(group.layerId);
    const builderLocation = findBuilderLocation(group.id);
    els.groupDialogContent.innerHTML = `
      <header class="group-dialog-head"><p class="eyebrow compact" style="color:${colorForLayer(layer.id)}">Layer ${layer.number} · Group ${String(group.number).padStart(2, "0")} · ${group.itemCount} items</p><h2 id="group-dialog-title">${escapeHtml(group.title)}</h2><p>${escapeHtml(group.description)}</p></header>
      <div class="subgroup-list">${group.subgroups.map((subgroup) => `
        <section class="subgroup"><div class="subgroup-head"><h3>${escapeHtml(subgroup.title)}</h3><span>${subgroup.items.length}</span></div><ul class="item-cloud">${subgroup.items.map((item) => `<li>${escapeHtml(item.name)}</li>`).join("")}</ul></section>`).join("")}</div>
      <div class="group-dialog-actions"><button class="button primary" type="button" data-dialog-propose="${group.id}">Propose a missing item</button>${builderLocation ? `<button class="button" type="button" data-dialog-builder="${group.id}">Use this group in the builder →</button>` : ""}<button class="button" type="button" data-dialog-focus="${group.id}">Inspect relationships</button></div>`;
    els.groupDialog.showModal();
  }

  function openProposal(groupId = "") {
    els.proposalForm.reset();
    if (groupId && state.groups.has(groupId)) els.proposalGroup.value = groupId;
    els.proposalDialog.showModal();
  }

  function proposalText(formData) {
    const group = state.groups.get(formData.get("group"));
    const layer = group ? state.layers.get(group.layerId) : null;
    return [
      "## Proposed PINN ecosystem item",
      "",
      `- **Item:** ${formData.get("item") || ""}`,
      `- **Group:** ${group ? `${group.number}. ${group.title}` : "Not selected"}`,
      `- **Layer:** ${layer ? `${layer.number}. ${layer.title}` : "Not selected"}`,
      `- **Subgroup:** ${formData.get("subgroup") || "Not specified"}`,
      `- **Authoritative evidence:** ${formData.get("evidence") || "Not supplied"}`,
      `- **Supporting Atlas reference IDs:** ${formData.get("references") || "Not specified"}`,
      `- **Related group(s):** ${formData.get("related") || "Not specified"}`,
      `- **Submitted by:** ${formData.get("submitter") || "Anonymous"}`,
      "",
      "### Rationale and cross-layer relationship",
      "",
      formData.get("rationale") || "",
      "",
      "### Review checklist",
      "",
      "- [ ] Terminology and aliases checked",
      "- [ ] Evidence supports the proposed item",
      "- [ ] Duplicate and subgroup placement checked",
      "- [ ] Incoming and outgoing relationships reviewed",
      "- [ ] Taxonomy regenerated and validated",
      "",
      `Prepared from: ${location.href.split("#")[0]}`
    ].join("\n");
  }

  function initializeBuilder() {
    loadDefaultSelections();
    loadSharedSelections();
    renderStageNavigation();
    renderStagePanels();
    updateBuilderOutputs();
  }

  function allBuilderFields() {
    return state.data.builder.stages.flatMap((stage, stageIndex) => stage.fields.map((field) => ({ ...field, stageIndex })));
  }

  function fieldOptions(field) {
    const group = state.groups.get(field.groupId);
    const allowed = new Set(field.subgroups || group.subgroups.map((subgroup) => subgroup.title));
    const seen = new Set();
    const result = [];
    for (const subgroup of group.subgroups) {
      if (!allowed.has(subgroup.title)) continue;
      for (const item of subgroup.items) {
        const key = normalize(item.name);
        if (seen.has(key)) continue;
        seen.add(key);
        result.push({ name: item.name, subgroup: subgroup.title });
      }
    }
    return result;
  }

  function loadDefaultSelections() {
    state.selections.clear();
    for (const field of allBuilderFields()) state.selections.set(field.id, new Set(field.defaults || []));
  }

  function serializeSelections() {
    return Object.fromEntries([...state.selections.entries()].filter(([, values]) => values.size).map(([id, values]) => [id, [...values]]));
  }

  function encodeDesign() {
    const encoded = btoa(encodeURIComponent(JSON.stringify(serializeSelections()))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    return `build=${encoded}`;
  }

  function decodeDesign(value) {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
    return JSON.parse(decodeURIComponent(atob(padded)));
  }

  function loadSharedSelections() {
    if (!location.hash.startsWith("#build=")) return;
    try {
      const decoded = decodeDesign(location.hash.slice(7));
      const fields = new Map(allBuilderFields().map((field) => [field.id, field]));
      for (const [fieldId, values] of Object.entries(decoded)) {
        const field = fields.get(fieldId);
        if (!field || !Array.isArray(values)) continue;
        const allowed = new Set(fieldOptions(field).map((option) => option.name));
        state.selections.set(fieldId, new Set(values.filter((value) => allowed.has(value)).slice(0, field.max || 1)));
      }
      showToast("Shared PINN design loaded.");
    } catch (error) {
      console.warn("Could not decode shared PINN design", error);
    }
  }

  function stageComplete(stage) {
    return stage.fields.filter((field) => field.required).every((field) => (state.selections.get(field.id)?.size || 0) > 0);
  }

  function renderStageNavigation() {
    els.stageNav.innerHTML = state.data.builder.stages.map((stage, index) => `
      <button class="stage-tab" type="button" role="tab" id="stage-tab-${stage.id}" aria-controls="stage-panel-${stage.id}" aria-selected="${index === state.activeStage}" data-stage-index="${index}" data-complete="${stageComplete(stage)}"><b>${stageComplete(stage) ? "✓" : String(stage.number).padStart(2, "0")}</b><span>${escapeHtml(stage.title)}</span></button>`).join("");
  }

  function renderStagePanels() {
    els.stagePanels.innerHTML = state.data.builder.stages.map((stage, index) => `
      <section class="builder-stage-panel" id="stage-panel-${stage.id}" role="tabpanel" aria-labelledby="stage-tab-${stage.id}" ${index === state.activeStage ? "" : "hidden"}>
        <p class="builder-stage-intro">${escapeHtml(stage.description)}</p>
        <div class="builder-fields">${stage.fields.map(renderBuilderField).join("")}</div>
      </section>`).join("");
    updateStageButtons();
  }

  function renderBuilderField(field) {
    const values = state.selections.get(field.id) || new Set();
    const options = fieldOptions(field);
    const group = state.groups.get(field.groupId);
    const summary = values.size ? [...values].join(" · ") : (field.optional ? "Optional · none" : "Nothing selected");
    let lastSubgroup = null;
    const optionMarkup = options.map((option) => {
      const subgroupHeading = option.subgroup !== lastSubgroup ? `<div class="option-subgroup">${escapeHtml(option.subgroup)}</div>` : "";
      lastSubgroup = option.subgroup;
      const inputType = field.max === 1 ? "radio" : "checkbox";
      return `${subgroupHeading}<label class="option-choice" data-option-label><input type="${inputType}" name="builder-${field.id}" value="${escapeHtml(option.name)}" data-field-id="${field.id}" data-option="${escapeHtml(option.name)}" ${values.has(option.name) ? "checked" : ""}><span>${escapeHtml(option.name)}</span></label>`;
    }).join("");
    return `
      <details class="builder-field" data-builder-field="${field.id}">
        <summary><span class="field-label"><strong>${escapeHtml(field.label)}${field.required ? " *" : ""}</strong><span>Group ${group.number} · ${options.length} choices</span></span><span class="field-selected" data-field-summary="${field.id}" title="${escapeHtml(summary)}">${escapeHtml(summary)}</span><span class="field-chevron" aria-hidden="true">⌄</span></summary>
        <div class="field-options">${options.length > 12 ? `<label class="field-search"><span class="visually-hidden">Filter ${escapeHtml(field.label)}</span><input type="search" data-field-search="${field.id}" placeholder="Filter ${escapeHtml(field.label.toLowerCase())}…"></label>` : ""}<div class="option-grid">${optionMarkup}</div><p class="field-limit">Select up to ${field.max || 1}. ${field.required ? "Required for a complete core design." : "Optional."}</p></div>
      </details>`;
  }

  function updateStageButtons() {
    const previous = document.querySelector("[data-stage-previous]");
    const next = document.querySelector("[data-stage-next]");
    if (previous) previous.disabled = state.activeStage === 0;
    if (next) {
      const isLast = state.activeStage === state.data.builder.stages.length - 1;
      next.textContent = isLast ? "Review design ✓" : "Next stage →";
    }
  }

  function setActiveStage(index) {
    state.activeStage = Math.max(0, Math.min(index, state.data.builder.stages.length - 1));
    document.querySelectorAll(".stage-tab").forEach((tab, tabIndex) => { tab.setAttribute("aria-selected", String(tabIndex === state.activeStage)); });
    document.querySelectorAll(".builder-stage-panel").forEach((panel, panelIndex) => { panel.hidden = panelIndex !== state.activeStage; });
    updateStageButtons();
  }

  function findBuilderLocation(groupId) {
    return allBuilderFields().find((field) => field.groupId === groupId) || null;
  }

  function goToBuilderGroup(groupId) {
    const locationInfo = findBuilderLocation(groupId);
    if (!locationInfo) return;
    els.groupDialog.close();
    setActiveStage(locationInfo.stageIndex);
    document.querySelector("#design-studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() => document.querySelector(`[data-builder-field="${CSS.escape(locationInfo.id)}"]`)?.setAttribute("open", ""));
  }

  function selected(fieldId) {
    return [...(state.selections.get(fieldId) || [])];
  }

  function selectedText(fieldId, fallback = "Not selected", limit = 2) {
    const values = selected(fieldId);
    if (!values.length) return fallback;
    return values.length > limit ? `${values.slice(0, limit).join(" · ")} +${values.length - limit}` : values.join(" · ");
  }

  function updateFieldSummary(fieldId) {
    const field = allBuilderFields().find((entry) => entry.id === fieldId);
    const values = state.selections.get(fieldId) || new Set();
    const summary = values.size ? [...values].join(" · ") : (field.optional ? "Optional · none" : "Nothing selected");
    const element = document.querySelector(`[data-field-summary="${CSS.escape(fieldId)}"]`);
    if (element) { element.textContent = summary; element.title = summary; }
  }

  function updateBuilderOutputs() {
    const count = [...state.selections.values()].reduce((sum, values) => sum + values.size, 0);
    els.selectionCount.textContent = `${count} selected`;
    renderStageNavigation();
    renderDiagram();
    renderCompatibility();
    renderDesignSummary();
    els.diagramState.textContent = count ? `${count} selected elements` : "Empty design";
  }

  function wrapText(value, maxLength = 28, maxLines = 3) {
    const words = String(value).split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      if (!line || `${line} ${word}`.length <= maxLength) line = line ? `${line} ${word}` : word;
      else { lines.push(line); line = word; if (lines.length === maxLines - 1) break; }
    }
    if (line && lines.length < maxLines) lines.push(line);
    const consumed = lines.join(" ").length;
    if (consumed < value.length && lines.length) lines[lines.length - 1] = `${lines[lines.length - 1].replace(/…$/, "").slice(0, Math.max(1, maxLength - 1)).trim()}…`;
    return lines;
  }

  function nodeSvg({ x, y, width, height, type, title, value }) {
    const stroke = { context: "#1674b8", model: "#6354d9", physics: "#087f70", training: "#a55a0b", trust: "#667687", extension: "#be4b8c" }[type];
    const lines = wrapText(value, Math.max(20, Math.floor(width / 8.5)), 3);
    return `<g class="diagram-node ${type}" transform="translate(${x} ${y})"><rect width="${width}" height="${height}" rx="17" fill="#ffffff" stroke="${stroke}" ${type === "extension" ? 'stroke-dasharray="6 5"' : ""}/><text x="18" y="29" font-family="Inter,Segoe UI,sans-serif" font-size="15" font-weight="700" fill="#122132">${escapeXml(title)}</text><text x="18" y="51" font-family="Inter,Segoe UI,sans-serif" font-size="11" fill="#526476">${lines.map((line, index) => `<tspan x="18" dy="${index ? 15 : 0}">${escapeXml(line)}</tspan>`).join("")}</text></g>`;
  }

  const edgeSvg = (path, feedback = false) => `<path d="${path}" fill="none" stroke="#728397" stroke-width="2.2" ${feedback ? 'stroke-dasharray="7 6" opacity=".55"' : 'opacity=".72"'} marker-end="url(#ecosystem-arrow)"/>`;

  function renderDiagram() {
    const extensionValues = ["decomposition", "operator-learning", "reduced-order", "hybrid", "uncertainty", "reuse", "parallelization"].flatMap(selected);
    const software = [...selected("software"), ...selected("reproducibility")];
    const nodes = [
      { x: 38, y: 42, width: 210, height: 90, type: "context", title: "Data", value: selectedText("data-regime") },
      { x: 286, y: 42, width: 424, height: 90, type: "context", title: "Problem & physics", value: `${selectedText("governing-physics")} · ${selectedText("problem-characteristics", "Characteristics open", 1)}` },
      { x: 750, y: 42, width: 212, height: 90, type: "context", title: "Purpose", value: selectedText("role") },
      { x: 38, y: 215, width: 190, height: 104, type: "model", title: "Inputs", value: selectedText("inputs") },
      { x: 278, y: 198, width: 260, height: 138, type: "model", title: "Approximation model", value: `${selectedText("architecture")} · ${selectedText("activation")}` },
      { x: 588, y: 215, width: 180, height: 104, type: "model", title: "Outputs", value: selectedText("outputs") },
      { x: 810, y: 215, width: 152, height: 104, type: "trust", title: "Evaluation", value: selectedText("evaluation") },
      { x: 570, y: 405, width: 216, height: 104, type: "physics", title: "Operator evaluation", value: selectedText("differentiation") },
      { x: 300, y: 405, width: 220, height: 104, type: "physics", title: "Physics & constraints", value: `${selectedText("enforcement")} · ${selectedText("constraints", "Constraints open", 1)}` },
      { x: 38, y: 405, width: 214, height: 104, type: "physics", title: "Composite objective", value: `${selectedText("objective")} · ${selectedText("weighting", "Weighting open", 1)}` },
      { x: 38, y: 578, width: 302, height: 88, type: "training", title: "Training loop", value: `${selectedText("sampling", "Sampling open", 1)} · ${selectedText("optimizer", "Optimizer open", 1)} · ${selectedText("training-strategy", "Strategy open", 1)}` },
      { x: 390, y: 578, width: 260, height: 88, type: "extension", title: "Structural extensions", value: extensionValues.length ? (extensionValues.length > 3 ? `${extensionValues.slice(0, 3).join(" · ")} +${extensionValues.length - 3}` : extensionValues.join(" · ")) : "Optional · none" },
      { x: 700, y: 578, width: 262, height: 88, type: "trust", title: "Implementation & record", value: software.length ? (software.length > 3 ? `${software.slice(0, 3).join(" · ")} +${software.length - 3}` : software.join(" · ")) : "Software and reporting open" }
    ];
    const edges = [
      edgeSvg("M248 87 C266 87 270 87 286 87"), edgeSvg("M710 87 C728 87 734 87 750 87"),
      edgeSvg("M133 132 C133 168 133 178 133 215"), edgeSvg("M498 132 C498 160 438 169 420 198"), edgeSvg("M856 132 C856 165 520 164 500 198"),
      edgeSvg("M228 267 C248 267 256 267 278 267"), edgeSvg("M538 267 C556 267 568 267 588 267"), edgeSvg("M768 267 C786 267 792 267 810 267"),
      edgeSvg("M678 319 C678 355 678 370 678 405"), edgeSvg("M570 456 C548 456 542 456 520 456"), edgeSvg("M300 456 C280 456 274 456 252 456"),
      edgeSvg("M143 405 C143 366 88 347 88 319"), edgeSvg("M143 509 C143 535 170 550 180 578"), edgeSvg("M180 578 C198 545 235 523 300 484", true),
      edgeSvg("M520 622 C488 560 466 392 448 336", true), edgeSvg("M700 622 C650 552 390 544 300 509", true), edgeSvg("M248 87 C280 155 208 347 180 405")
    ].join("");
    els.diagram.innerHTML = `<defs><marker id="ecosystem-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" fill="#728397"/></marker></defs><text x="38" y="178" font-family="SFMono-Regular,Consolas,monospace" font-size="10" font-weight="600" fill="#526476" letter-spacing="1">DIFFERENTIABLE REPRESENTATION</text><text x="38" y="378" font-family="SFMono-Regular,Consolas,monospace" font-size="10" font-weight="600" fill="#526476" letter-spacing="1">PHYSICS CONSTRUCTION</text><text x="38" y="552" font-family="SFMono-Regular,Consolas,monospace" font-size="10" font-weight="600" fill="#526476" letter-spacing="1">OPTIMIZE · EXTEND · REPORT</text>${edges}${nodes.map(nodeSvg).join("")}`;
    els.diagramDescription.textContent = `Generated PINN design. Problem: ${selectedText("governing-physics")}. Purpose: ${selectedText("role")}. Model: ${selectedText("architecture")} with ${selectedText("activation")} activation. Physics: ${selectedText("enforcement")}. Training: ${selectedText("optimizer")}.`;
  }

  function includesSelection(fieldIds, terms) {
    const values = fieldIds.flatMap(selected).map(normalize);
    return terms.some((term) => values.some((value) => value.includes(normalize(term))));
  }

  function compatibilitySignals() {
    const signals = [];
    const add = (level, title, text) => signals.push({ level, title, text });
    const coreComplete = state.data.builder.stages.slice(0, 5).every(stageComplete);
    const relu = includesSelection(["activation"], ["relu", "leaky relu", "prelu"]);
    const higherOrder = includesSelection(["differentiation"], ["higher-order ad"]);
    if (relu && higherOrder) add("warning", "Activation–derivative mismatch", "ReLU-family activations are non-smooth and have zero second derivative almost everywhere. A smooth activation is usually safer for strong-form higher-order residuals.");
    const transient = includesSelection(["problem-characteristics"], ["transient", "long-time", "time"]);
    const hasTime = includesSelection(["inputs"], ["time t", "initial-condition functions", "initial-state"]);
    if (transient && !hasTime) add("warning", "Time input is missing", "The selected problem is time-dependent, but no temporal coordinate or time-conditioned input is selected.");
    const inverse = includesSelection(["role"], ["inverse", "parameter identification", "state estimation", "hidden-variable", "source identification", "inference", "system identification"]);
    const dataFree = includesSelection(["data-regime"], ["data-free", "residual-only"]);
    const unknownOutput = includesSelection(["outputs"], ["unknown", "parameter", "coefficient", "latent", "state-parameter"]);
    if (inverse && (dataFree || !unknownOutput)) add("warning", "Inverse identifiability needs attention", "Inverse recovery normally needs informative observations and explicit parameter, coefficient, or latent-state outputs. Residual satisfaction alone may not identify a unique solution.");
    const operator = selected("operator-learning").length > 0 || includesSelection(["role"], ["operator learning", "solution-family"]);
    const functionInput = includesSelection(["inputs"], ["functions", "function", "coefficient fields", "forcing fields", "geometry fields", "sensor samples"]);
    if (operator && !functionInput) add("warning", "Operator input is still pointwise", "Operator learning maps functions to functions. Add sampled functions, coefficient fields, forcing fields, or another function-space input.");
    const weak = includesSelection(["enforcement", "objective"], ["weak", "variational", "galerkin", "energy formulation", "integral formulation"]);
    const quadrature = includesSelection(["sampling"], ["quadrature"]);
    if (weak && !quadrature) add("suggestion", "Add integration-aware sampling", "Weak, variational, energy, and integral formulations usually need quadrature or another integration-consistent sampling rule.");
    const hard = includesSelection(["enforcement"], ["hard", "output transformation", "distance-function", "boundary-satisfying"]);
    const boundaryPenalty = includesSelection(["objective"], ["bc loss", "ic loss", "boundary-condition loss", "initial-condition loss"]);
    if (hard && boundaryPenalty) add("suggestion", "Check redundant penalties", "When a condition is satisfied exactly by construction, its soft penalty may be unnecessary or should be justified separately.");
    const decomposition = selected("decomposition").length > 0;
    const interfaceCondition = includesSelection(["constraints", "objective"], ["interface", "flux continuity", "traction continuity", "transmission", "residual continuity"]);
    if (decomposition && !interfaceCondition) add("warning", "Decomposition needs coupling", "Subdomain or time-window models require explicit continuity, flux, traction, residual, or transmission coupling where their partitions meet.");
    const difficultTime = includesSelection(["problem-characteristics"], ["long-time", "chaotic"]);
    const timeStrategy = includesSelection(["training-strategy", "sampling", "decomposition"], ["causal", "time marching", "temporal window", "time decomposition", "progressive time"]);
    if (difficultTime && !timeStrategy) add("suggestion", "Consider a time-aware strategy", "Long-time or chaotic dynamics often benefit from causality, temporal windows, marching, or progressive horizons rather than one global time slab.");
    const uq = selected("uncertainty").length > 0 || includesSelection(["role"], ["uncertainty", "bayesian", "probabilistic"]);
    const uqMetric = includesSelection(["evaluation"], ["coverage", "calibration", "credible", "reliability", "predictive variance"]);
    if (uq && !uqMetric) add("warning", "Uncertainty is not yet calibrated", "Add coverage, calibration, credible-interval, reliability, or variance evaluation; qualitative uncertainty bands are not sufficient evidence.");
    const oscillatory = includesSelection(["problem-characteristics"], ["high-frequency", "oscillatory"]);
    const spectralActivation = includesSelection(["activation", "architecture"], ["sine", "siren", "fourier", "gabor", "spectral"]);
    if (oscillatory && !spectralActivation) add("suggestion", "Represent the target spectrum", "High-frequency or oscillatory fields may need sinusoidal, Fourier, Gabor, or other spectrum-aware representations to reduce spectral bias.");
    const firstOrder = includesSelection(["differentiation"], ["first-order reformulation", "auxiliary derivative outputs"]);
    const auxiliary = includesSelection(["outputs"], ["auxiliary", "flux", "stress", "derivatives", "mixed-variable"]);
    if (firstOrder && !auxiliary) add("warning", "First-order reformulation needs auxiliary states", "Expose fluxes, derivatives, stresses, or other auxiliary variables so the first-order system is represented explicitly.");
    if (firstOrder && auxiliary) add("good", "Derivative order is structurally reduced", "The auxiliary-output selection is consistent with a first-order or mixed-variable reformulation.");
    const hybridOptimizer = includesSelection(["optimizer"], ["adam → l-bfgs", "first-order → second-order", "staged optimizer"]);
    const staged = includesSelection(["training-strategy"], ["staged", "full-batch", "fine-tuning"]);
    if (hybridOptimizer && staged) add("good", "Optimizer staging is explicit", "The design represents coarse first-order progress and later curvature-based refinement as a deliberate training sequence.");
    const fixedWeights = includesSelection(["weighting"], ["fixed weights", "manual weighting"]);
    if (fixedWeights && selected("objective").length >= 5) add("suggestion", "Monitor objective imbalance", "Many loss components share fixed weights. Compare gradient magnitudes or add an adaptive balancing study.");
    if (!selected("benchmarking").length) add("warning", "No validation benchmark selected", "Choose an analytical, numerical, experimental, ablation, sensitivity, or repeated-seed benchmark before interpreting model accuracy.");
    if (coreComplete) add("good", "Core design path is complete", "Problem, representation, physics, numerical evaluation, and training all contain the required selections.");
    const levelOrder = { warning: 0, suggestion: 1, good: 2 };
    return signals.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]).slice(0, 8);
  }

  function renderCompatibility() {
    const signals = compatibilitySignals();
    els.signalCount.textContent = `${signals.filter((signal) => signal.level === "warning").length} warning${signals.filter((signal) => signal.level === "warning").length === 1 ? "" : "s"}`;
    els.compatibilityList.innerHTML = signals.length ? signals.map((signal) => `<article class="compatibility-signal" data-level="${signal.level}"><span class="signal-icon" aria-hidden="true">${signal.level === "warning" ? "!" : signal.level === "good" ? "✓" : "→"}</span><div><strong>${escapeHtml(signal.title)}</strong><p>${escapeHtml(signal.text)}</p></div></article>`).join("") : `<p class="relation-empty">Select elements to begin the dependency review.</p>`;
  }

  function summaryRows() {
    return [
      ["Problem", `${selectedText("governing-physics")} · ${selectedText("problem-characteristics")}`],
      ["Purpose & data", `${selectedText("role")} · ${selectedText("data-regime")}`],
      ["Representation", `${selectedText("inputs")} → ${selectedText("architecture")} + ${selectedText("activation")} → ${selectedText("outputs")}`],
      ["Physics", `${selectedText("enforcement")} · ${selectedText("constraints")} · ${selectedText("objective")}`],
      ["Numerics", `${selectedText("differentiation")} · ${selectedText("sampling")}`],
      ["Training", `${selectedText("optimizer")} · ${selectedText("training-strategy")} · ${selectedText("scaling")}`],
      ["Extensions", ["decomposition", "operator-learning", "reduced-order", "hybrid", "uncertainty", "reuse", "parallelization"].flatMap(selected).join(" · ") || "None selected"],
      ["Verification", `${selectedText("evaluation")} · ${selectedText("benchmarking")} · ${selectedText("software")}`]
    ];
  }

  function renderDesignSummary() {
    els.designSummary.innerHTML = `<dl class="summary-list">${summaryRows().map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>`;
  }

  function designSummaryText() {
    const lines = ["PINN design generated with the PINN Review Atlas", ""];
    for (const [label, value] of summaryRows()) lines.push(`${label}: ${value}`);
    lines.push("", "Compatibility signals:");
    for (const signal of compatibilitySignals()) lines.push(`- ${signal.level.toUpperCase()}: ${signal.title} — ${signal.text}`);
    lines.push("", `Taxonomy dataset: ${state.data.datasetVersion}`);
    return lines.join("\n");
  }

  function portableSvg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" role="img" aria-label="Generated PINN architecture"><rect width="1000" height="700" rx="22" fill="#f5f8fb"/>${els.diagram.innerHTML}</svg>`;
  }

  async function copyText(value, message) {
    try { await navigator.clipboard.writeText(value); showToast(message); }
    catch { showToast("Copy was blocked by the browser. Select and copy the text manually."); }
  }

  function downloadSvg() {
    const blob = new Blob([portableSvg()], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pinn-design.svg";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("PINN architecture SVG downloaded.");
  }

  function showToast(message) {
    clearTimeout(state.toastTimer);
    els.toast.textContent = message;
    els.toast.hidden = false;
    state.toastTimer = setTimeout(() => { els.toast.hidden = true; }, 3500);
  }

  function attachEvents() {
    els.search.addEventListener("input", () => { state.query = els.search.value; renderLayerMap(); });
    els.clearSearch.addEventListener("click", () => { els.search.value = ""; state.query = ""; renderLayerMap(); els.search.focus(); });
    els.relationLens.addEventListener("change", () => { state.lens = els.relationLens.value; if (state.selectedGroupId) renderRelationFocus(); });
    document.querySelector("[data-expand-layers]")?.addEventListener("click", () => document.querySelectorAll(".layer-band").forEach((layer) => { layer.open = true; }));
    document.querySelector("[data-collapse-layers]")?.addEventListener("click", () => document.querySelectorAll(".layer-band").forEach((layer) => { layer.open = false; }));

    els.layerMap.addEventListener("click", (event) => {
      const focus = event.target.closest("[data-focus-group]");
      const open = event.target.closest("[data-open-group]");
      const propose = event.target.closest("[data-propose-group]");
      if (focus) focusGroup(focus.dataset.focusGroup);
      if (open) openGroup(open.dataset.openGroup);
      if (propose) openProposal(propose.dataset.proposeGroup);
    });
    els.relationFocus.addEventListener("click", (event) => {
      const related = event.target.closest("[data-related-group]");
      if (related) focusGroup(related.dataset.relatedGroup, { scroll: true });
      if (event.target.closest("[data-open-focused]")) openGroup(state.selectedGroupId);
      if (event.target.closest("[data-propose-focused]")) openProposal(state.selectedGroupId);
    });
    els.groupDialogContent.addEventListener("click", (event) => {
      const propose = event.target.closest("[data-dialog-propose]");
      const builder = event.target.closest("[data-dialog-builder]");
      const focus = event.target.closest("[data-dialog-focus]");
      if (propose) { els.groupDialog.close(); openProposal(propose.dataset.dialogPropose); }
      if (builder) goToBuilderGroup(builder.dataset.dialogBuilder);
      if (focus) { els.groupDialog.close(); focusGroup(focus.dataset.dialogFocus, { scroll: true }); }
    });
    [els.groupDialog, els.proposalDialog].forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));
    document.querySelectorAll("[data-open-proposal]").forEach((button) => button.addEventListener("click", () => openProposal()));
    document.querySelectorAll("[data-close-proposal]").forEach((button) => button.addEventListener("click", () => els.proposalDialog.close()));

    els.proposalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!els.proposalForm.reportValidity()) return;
      const formData = new FormData(els.proposalForm);
      const group = state.groups.get(formData.get("group"));
      const params = new URLSearchParams({ title: `[PINN Ecosystem] Add ${formData.get("item")} to ${group?.title || "taxonomy"}`, body: proposalText(formData) });
      window.open(`${ISSUE_URL}?${params.toString()}`, "_blank", "noopener,noreferrer");
      showToast("GitHub opened with the proposal prepared. Confirm Create new issue to submit it.");
    });
    document.querySelector("[data-copy-proposal]")?.addEventListener("click", () => {
      const formData = new FormData(els.proposalForm);
      copyText(proposalText(formData), "Proposal text copied.");
    });

    els.stageNav.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-stage-index]");
      if (tab) setActiveStage(Number(tab.dataset.stageIndex));
    });
    els.stagePanels.addEventListener("input", (event) => {
      const search = event.target.closest("[data-field-search]");
      if (!search) return;
      const query = normalize(search.value);
      const field = search.closest(".builder-field");
      field.querySelectorAll("[data-option-label]").forEach((label) => { label.hidden = !normalize(label.textContent).includes(query); });
      field.querySelectorAll(".option-subgroup").forEach((heading) => { heading.hidden = false; });
    });
    els.stagePanels.addEventListener("change", (event) => {
      const input = event.target.closest("[data-field-id]");
      if (!input) return;
      const field = allBuilderFields().find((entry) => entry.id === input.dataset.fieldId);
      const values = state.selections.get(field.id) || new Set();
      if (field.max === 1) values.clear();
      if (input.checked) {
        if (values.size >= field.max) { input.checked = false; showToast(`Select up to ${field.max} choices for ${field.label}.`); return; }
        values.add(input.dataset.option);
      } else values.delete(input.dataset.option);
      state.selections.set(field.id, values);
      updateFieldSummary(field.id);
      updateBuilderOutputs();
    });

    document.querySelector("[data-stage-previous]")?.addEventListener("click", () => setActiveStage(state.activeStage - 1));
    document.querySelector("[data-stage-next]")?.addEventListener("click", () => {
      if (state.activeStage < state.data.builder.stages.length - 1) setActiveStage(state.activeStage + 1);
      else document.querySelector(".diagram-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.querySelector("[data-load-standard]")?.addEventListener("click", () => { loadDefaultSelections(); renderStagePanels(); updateBuilderOutputs(); showToast("Standard PINN configuration loaded."); });
    document.querySelector("[data-clear-builder]")?.addEventListener("click", () => { state.selections = new Map(allBuilderFields().map((field) => [field.id, new Set()])); renderStagePanels(); updateBuilderOutputs(); showToast("PINN design cleared."); });
    document.querySelector("[data-download-svg]")?.addEventListener("click", downloadSvg);
    document.querySelector("[data-copy-summary]")?.addEventListener("click", () => copyText(designSummaryText(), "PINN design summary copied."));
    document.querySelector("[data-copy-link]")?.addEventListener("click", () => {
      history.replaceState(null, "", `${location.pathname}${location.search}#${encodeDesign()}`);
      copyText(location.href, "Shareable PINN design link copied.");
    });
  }

  init();
})();
