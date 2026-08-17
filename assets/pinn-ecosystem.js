(() => {
  "use strict";

  const DATA_URL = "../data/pinn-ecosystem/pinn-ecosystem.json";
  const ISSUE_URL = "https://github.com/ahafuaej-alt/PINN-Review/issues/new";
  const layerColors = ["#005a9c", "#2166ac", "#5b2ea6", "#00796b", "#006d87", "#9a4d00", "#a8246f", "#455466", "#304b63"];
  const stagePalette = {
    context: { color: "#005a9c", tint: "#e7f2fb", label: "Problem & purpose" },
    representation: { color: "#5b2ea6", tint: "#f0eafb", label: "Representation" },
    physics: { color: "#00796b", tint: "#e5f5f1", label: "Physics construction" },
    numerics: { color: "#006d87", tint: "#e5f3f7", label: "Numerical evaluation" },
    training: { color: "#9a4d00", tint: "#fff0df", label: "Training" },
    extensions: { color: "#a8246f", tint: "#fbe8f2", label: "Structural extensions" },
    verification: { color: "#455466", tint: "#edf1f5", label: "Verification & reporting" }
  };
  const stageShortLabels = {
    context: "Problem",
    representation: "Represent.",
    physics: "Physics",
    numerics: "Numerics",
    training: "Training",
    extensions: "Extend",
    verification: "Verify"
  };

  const selectionRules = [
    {
      id: "coordinate-dimensionality",
      kind: "blocked",
      title: "Choose one spatial-coordinate bundle",
      applies: (selections) => countExact(selections, "inputs", ["Spatial coordinate x", "Spatial coordinates x,y", "Spatial coordinates x,y,z"]) > 1,
      conflict: (selections) => selectedExact(selections, "inputs", ["Spatial coordinate x", "Spatial coordinates x,y", "Spatial coordinates x,y,z"]),
      reason: "The builder represents one model input signature. Selecting 1D, 2D, and 3D coordinate bundles together would leave the network dimensionality undefined. Choose the bundle used by the model; use geometry descriptors, fields, or a documented multi-network design for heterogeneous domains."
    },
    {
      id: "residual-only-observations",
      kind: "blocked",
      title: "Residual-only conflicts with observational supervision",
      applies: (selections) => hasExact(selections, "data-regime", ["Data-free / residual-only"]) && (
        hasExact(selections, "data-regime", ["Sparse data", "Dense data", "Multi-fidelity", "Low fidelity", "High fidelity"]) ||
        hasExact(selections, "inputs", ["Sensor measurements"]) ||
        hasExact(selections, "enforcement", ["Data mismatch"]) ||
        hasExact(selections, "objective", ["Data loss"]) ||
        hasExact(selections, "sampling", ["Observation/data points", "Measurement points"])
      ),
      conflict: (selections) => selectedExactAcross(selections, {
        "data-regime": ["Data-free / residual-only", "Sparse data", "Dense data", "Multi-fidelity", "Low fidelity", "High fidelity"],
        inputs: ["Sensor measurements"], enforcement: ["Data mismatch"], objective: ["Data loss"], sampling: ["Observation/data points", "Measurement points"]
      }),
      reason: "A data-free/residual-only design contains no observational supervision. Data mismatch, data loss, measurement points, sensor observations, and fidelity-labelled datasets therefore describe a different data regime. Remove the observational component or select a data-informed regime."
    },
    {
      id: "single-versus-multi-objective",
      kind: "blocked",
      title: "Single- and multi-objective formulations are mutually exclusive",
      applies: (selections) => hasExact(selections, "objective", ["Single objective"]) && hasExact(selections, "objective", ["Multi-objective loss"]),
      conflict: (selections) => selectedExact(selections, "objective", ["Single objective", "Multi-objective loss"]),
      reason: "These labels specify incompatible optimization semantics for one objective definition. A scalar composite loss may still be selected with Single objective; choose Multi-objective loss only when objectives remain distinct in the optimization procedure."
    },
    {
      id: "strong-weak-hybrid",
      kind: "conditional",
      title: "Strong + weak requires an explicit hybrid formulation",
      applies: (selections) => hasExact(selections, "enforcement", ["Strong form"]) && hasExact(selections, "enforcement", ["Weak form", "Variational formulation", "Energy formulation", "Galerkin formulation", "Integral formulation", "Boundary-integral formulation"]),
      conflict: (selections) => selectedExact(selections, "enforcement", ["Strong form", "Weak form", "Variational formulation", "Energy formulation", "Galerkin formulation", "Integral formulation", "Boundary-integral formulation"]),
      reason: "This combination is scientifically valid when separate residuals, operators, subdomains, scales, or constraints use different formulations. It is not a single interchangeable choice: document the hybrid residual construction, test/trial spaces or quadrature, and relative weighting."
    },
    {
      id: "hard-soft-condition",
      kind: "conditional",
      title: "Exact and penalized enforcement need distinct scopes",
      applies: (selections) => (
        hasExact(selections, "enforcement", ["Hard boundary constraints", "Output transformation", "Distance-function construction", "Boundary-satisfying ansatz"]) &&
        (hasExact(selections, "enforcement", ["Boundary-condition loss"]) || hasExact(selections, "objective", ["BC loss"]))
      ) || (
        hasExact(selections, "enforcement", ["Hard initial constraints"]) &&
        (hasExact(selections, "enforcement", ["Initial-condition loss"]) || hasExact(selections, "objective", ["IC loss"]))
      ),
      conflict: (selections) => selectedExactAcross(selections, {
        enforcement: ["Hard boundary constraints", "Hard initial constraints", "Output transformation", "Distance-function construction", "Boundary-satisfying ansatz", "Boundary-condition loss", "Initial-condition loss"],
        objective: ["BC loss", "IC loss"]
      }),
      reason: "Exact construction and soft penalties can coexist only when they apply to different boundaries, variables, conditions, or uncertainty treatments. Penalizing a condition already satisfied identically is otherwise redundant and can distort loss balancing."
    },
    {
      id: "mixed-batch-policy",
      kind: "conditional",
      title: "Full- and mini-batch selections imply a staged policy",
      applies: (selections) => (
        hasExact(selections, "training-strategy", ["Full-batch"]) && hasExact(selections, "training-strategy", ["Mini-batch"])
      ) || (
        hasExact(selections, "optimizer", ["Full-batch gradient descent"]) && hasExact(selections, "optimizer", ["Mini-batch gradient descent"])
      ),
      conflict: (selections) => selectedExactAcross(selections, {
        optimizer: ["Full-batch gradient descent", "Mini-batch gradient descent"],
        "training-strategy": ["Full-batch", "Mini-batch"]
      }),
      reason: "A training step cannot simultaneously use both batch policies on the same objective evaluation. The combination is valid as a staged, alternating, or component-specific schedule; record when each policy is used."
    },
    {
      id: "fixed-scheduled-learning-rate",
      kind: "conditional",
      title: "Fixed and scheduled learning rates need separate phases",
      applies: (selections) => hasExact(selections, "learning-rate", ["Fixed learning rate"]) && selectedExact(selections, "learning-rate", ["Exponential decay", "Step decay", "Plateau reduction", "Cosine annealing", "One-cycle policy", "Staged reduction", "Adaptive learning rate", "Layer-wise learning rate", "Curvature-aware learning rate"]).length > 0,
      conflict: (selections) => selectedExact(selections, "learning-rate", ["Fixed learning rate", "Exponential decay", "Step decay", "Plateau reduction", "Cosine annealing", "One-cycle policy", "Staged reduction", "Adaptive learning rate", "Layer-wise learning rate", "Curvature-aware learning rate"]),
      reason: "A learning rate cannot be both constant and changing for the same parameters at the same step. The combination is valid across optimizer phases, parameter groups, or scheduled intervals when that scope is stated explicitly."
    },
    {
      id: "mixed-noise-regime",
      kind: "conditional",
      title: "Noise-free + noisy implies multiple data sources",
      applies: (selections) => hasExact(selections, "data-regime", ["Noise-free"]) && hasExact(selections, "data-regime", ["Noisy"]),
      conflict: (selections) => selectedExact(selections, "data-regime", ["Noise-free", "Noisy"]),
      reason: "One observation cannot be both noise-free and noisy. Keep both only when the design uses distinct sources—for example exact boundary data and noisy interior measurements—and state which loss terms receive each source."
    },
    {
      id: "complex-representation",
      kind: "conditional",
      title: "Complex and split-real outputs need an explicit mapping",
      applies: (selections) => hasExact(selections, "outputs", ["Complex-valued representation"]) && hasExact(selections, "outputs", ["Real/imaginary separated representation"]),
      conflict: (selections) => selectedExact(selections, "outputs", ["Complex-valued representation", "Real/imaginary separated representation"]),
      reason: "These are alternative encodings for the same complex field, but both can appear in a hybrid or comparison design. State which variables or models use native complex values and which use separated real and imaginary outputs."
    }
  ];

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
    liveNavigator: document.querySelector("[data-live-navigator]"),
    liveSelectionCount: document.querySelector("[data-live-selection-count]"),
    liveStageTrack: document.querySelector("[data-live-stage-track]"),
    liveStageFocus: document.querySelector("[data-live-stage-focus]"),
    liveNavigatorToggle: document.querySelector("[data-live-navigator-toggle]"),
    liveNavigatorToggleLabel: document.querySelector("[data-live-navigator-toggle-label]"),
    diagram: document.querySelector("[data-pinn-diagram]"),
    diagramDescription: document.querySelector("[data-diagram-description]"),
    diagramState: document.querySelector("[data-diagram-state]"),
    compatibilityList: document.querySelector("[data-compatibility-list]"),
    signalCount: document.querySelector("[data-signal-count]"),
    designSummary: document.querySelector("[data-design-summary]"),
    ruleDialog: document.querySelector("[data-selection-rule-dialog]"),
    ruleDialogContent: document.querySelector("[data-selection-rule-content]"),
    legendDetail: document.querySelector("[data-diagram-legend-detail]"),
    diagramViewport: document.querySelector("[data-diagram-viewport]"),
    studioDiagram: document.querySelector(".studio-diagram"),
    diagramExpand: document.querySelector("[data-diagram-expand]")
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
    toastTimer: null,
    conditionalRuleIds: new Set(),
    lastConditionalSelection: null,
    diagramZoom: 1
  };

  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
  const escapeXml = escapeHtml;
  const normalize = (value = "") => String(value).normalize("NFKD").replace(/[\u0300-\u036f\u200b-\u200d\ufeff]/g, "").toLocaleLowerCase("en");
  const compact = (value, length = 150) => value.length > length ? `${value.slice(0, length - 1).trim()}…` : value;
  const selectionValues = (selections, fieldId) => [...(selections.get(fieldId) || [])];
  const hasExact = (selections, fieldId, names) => selectionValues(selections, fieldId).some((value) => names.includes(value));
  const selectedExact = (selections, fieldId, names) => selectionValues(selections, fieldId).filter((value) => names.includes(value));
  const selectedExactAcross = (selections, fields) => Object.entries(fields).flatMap(([fieldId, names]) => selectedExact(selections, fieldId, names));
  const countExact = (selections, fieldId, names) => selectedExact(selections, fieldId, names).length;
  const cloneSelections = (selections = state.selections) => new Map([...selections].map(([fieldId, values]) => [fieldId, new Set(values)]));
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
    setLiveNavigatorCollapsed(window.matchMedia("(max-width: 1040px)").matches);
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
      const candidate = new Map(allBuilderFields().map((field) => [field.id, new Set()]));
      let skipped = 0;
      for (const [fieldId, values] of Object.entries(decoded)) {
        const field = fields.get(fieldId);
        if (!field || !Array.isArray(values)) continue;
        const allowed = new Set(fieldOptions(field).map((option) => option.name));
        for (const value of values.filter((entry) => allowed.has(entry))) {
          candidate.get(fieldId).add(value);
          if (firstBlockingRule(candidate)) { candidate.get(fieldId).delete(value); skipped += 1; }
        }
      }
      state.selections = candidate;
      showToast(skipped ? `Shared design loaded; ${skipped} contradictory selection${skipped === 1 ? " was" : "s were"} omitted.` : "Shared PINN design loaded.");
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
      return `${subgroupHeading}<label class="option-choice" data-option-label><input type="checkbox" name="builder-${field.id}" value="${escapeHtml(option.name)}" data-field-id="${field.id}" data-option="${escapeHtml(option.name)}" ${values.has(option.name) ? "checked" : ""}><span>${escapeHtml(option.name)}</span></label>`;
    }).join("");
    return `
      <details class="builder-field" data-builder-field="${field.id}">
        <summary><span class="field-label"><strong>${escapeHtml(field.label)}${field.required ? " *" : ""}</strong><span>Group ${group.number} · ${options.length} choices</span></span><span class="field-selected" data-field-summary="${field.id}" title="${escapeHtml(summary)}">${escapeHtml(summary)}</span><span class="field-chevron" aria-hidden="true">⌄</span></summary>
        <div class="field-options">${options.length > 12 ? `<label class="field-search"><span class="visually-hidden">Filter ${escapeHtml(field.label)}</span><input type="search" data-field-search="${field.id}" placeholder="Filter ${escapeHtml(field.label.toLowerCase())}…"></label>` : ""}<div class="option-grid">${optionMarkup}</div><p class="field-limit"><strong>${field.required ? "Core record field." : "Optional field."}</strong> Select every applicable element; no arbitrary count cap is imposed.</p></div>
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
    renderLiveNavigator();
  }

  function setLiveNavigatorCollapsed(collapsed) {
    if (!els.liveNavigator) return;
    els.liveNavigator.dataset.collapsed = String(collapsed);
    els.liveNavigatorToggle?.setAttribute("aria-expanded", String(!collapsed));
    if (els.liveNavigatorToggleLabel) els.liveNavigatorToggleLabel.textContent = collapsed ? "Expand" : "Collapse";
  }

  function renderLiveNavigator() {
    if (!els.liveNavigator || !els.liveStageTrack || !els.liveStageFocus) return;
    const stages = state.data.builder.stages;
    const total = [...state.selections.values()].reduce((sum, values) => sum + values.size, 0);
    const activeStage = stages[state.activeStage];
    const palette = stagePalette[activeStage.id];
    const activeCount = activeStage.fields.reduce((sum, field) => sum + selected(field.id).length, 0);
    els.liveNavigator.style.setProperty("--live-stage-color", palette.color);
    if (els.liveSelectionCount) els.liveSelectionCount.textContent = `${total} selected`;
    els.liveStageTrack.innerHTML = stages.map((stage, index) => {
      const count = stage.fields.reduce((sum, field) => sum + selected(field.id).length, 0);
      const stageColor = stagePalette[stage.id];
      return `<button class="live-stage-button" type="button" data-live-stage-index="${index}" data-has-selection="${count > 0}" aria-current="${index === state.activeStage ? "step" : "false"}" aria-label="Edit ${escapeHtml(stage.title)}; ${count} selected element${count === 1 ? "" : "s"}" title="${escapeHtml(stage.title)}"><span class="live-stage-node" style="--stage-color:${stageColor.color}">${String(stage.number).padStart(2, "0")}<b class="live-stage-count">${count}</b></span><span class="live-stage-label">${escapeHtml(stageShortLabels[stage.id] || stage.title)}</span></button>`;
    }).join("");
    const fields = activeStage.fields.map((field) => {
      const values = selected(field.id);
      const valueMarkup = values.length
        ? values.map((value) => `<span>${escapeHtml(value)}</span>`).join("")
        : `<em>${field.required ? "Not yet specified" : "Optional · none"}</em>`;
      return `<div class="live-field-row"><dt>${escapeHtml(field.label)}${field.required ? " *" : ""}</dt><dd>${valueMarkup}</dd></div>`;
    }).join("");
    const conditionalCount = matchingRules(state.selections, "conditional").length;
    els.liveStageFocus.innerHTML = `<div class="live-stage-focus-head"><strong>${escapeHtml(activeStage.title)}</strong><span>${activeCount} selected${conditionalCount ? ` · ${conditionalCount} conditional` : ""}</span></div><dl class="live-field-list">${fields}</dl>`;
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

  function selectedText(fieldId, fallback = "Not selected", limit = Infinity) {
    const values = selected(fieldId);
    if (!values.length) return fallback;
    return Number.isFinite(limit) && values.length > limit ? `${values.slice(0, limit).join(" · ")} +${values.length - limit}` : values.join(" · ");
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
    renderLiveNavigator();
    renderDiagram();
    renderCompatibility();
    renderDesignSummary();
    els.diagramState.textContent = count ? `${count} selected elements` : "Empty design";
  }

  function wrapText(value, maxLength = 34) {
    const words = String(value).split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      if (!line || `${line} ${word}`.length <= maxLength) line = line ? `${line} ${word}` : word;
      else { lines.push(line); line = word; }
    }
    if (line) lines.push(line);
    return lines;
  }

  const diagramCanvas = { width: 1600, height: 900 };
  const diagramStageSubtitles = {
    context: "Define what the PINN must solve.",
    representation: "Map coordinates to physical state.",
    physics: "Couple state, residuals, constraints, and objective.",
    numerics: "Differentiate and place evidence.",
    training: "Optimize, scale, and stabilize.",
    extensions: "Add only problem-required structural branches.",
    verification: "Test accuracy, physics, cost, and reproducibility."
  };
  const diagramStageSpecs = {
    context: { x: 24, y: 185, width: 350, height: 174, indicator: "side", contentY: 101, contentHeight: 59 },
    representation: { x: 24, y: 420, width: 350, height: 210, indicator: "side", contentY: 101, contentHeight: 91 },
    numerics: { x: 430, y: 645, width: 338, height: 214, indicator: "top", contentY: 96, contentHeight: 102 },
    training: { x: 832, y: 645, width: 338, height: 214, indicator: "top", contentY: 94, contentHeight: 106 },
    extensions: { x: 1230, y: 185, width: 350, height: 198, indicator: "side", contentY: 101, contentHeight: 78 },
    verification: { x: 1230, y: 427, width: 350, height: 420, indicator: "side", contentY: 101, contentHeight: 300 }
  };

  function diagramStageValues(stage, includeRequiredPlaceholders = true) {
    return stage.fields.flatMap((field) => {
      const values = selected(field.id);
      if (values.length) return values;
      return includeRequiredPlaceholders && field.required ? ["Not yet specified"] : [];
    });
  }

  function diagramChipLayout(values, box, { emptyLabel = "No elements selected" } = {}) {
    const items = values.length ? values : [emptyLabel];
    const empty = values.length === 0;
    let fontSize = items.length > 18 ? 7.2 : items.length > 12 ? 8.2 : items.length > 8 ? 9.2 : 10.5;
    let chipHeight = Math.max(18, fontSize + 13);
    let gapX = 7;
    let gapY = 6;
    const build = () => {
      let cursorX = 0;
      let cursorY = 0;
      let row = 0;
      const chips = items.map((value) => {
        const estimatedTextWidth = String(value).length * fontSize * 0.56;
        const width = Math.min(box.width, Math.max(52, estimatedTextWidth + 20));
        if (cursorX && cursorX + width > box.width + 0.5) {
          cursorX = 0;
          cursorY += chipHeight + gapY;
          row += 1;
        }
        const chip = { value: String(value), x: cursorX, y: cursorY, width, estimatedTextWidth, row };
        cursorX += width + gapX;
        return chip;
      });
      return { chips, height: cursorY + chipHeight, rows: row + 1 };
    };
    let layout = build();
    while (layout.height > box.height && fontSize > 5.2) {
      fontSize -= 0.45;
      chipHeight = Math.max(13, fontSize + 9);
      gapX = Math.max(3, gapX - 0.35);
      gapY = Math.max(2, gapY - 0.4);
      layout = build();
    }
    if (layout.height > box.height) {
      const fittedHeight = Math.max(9, (box.height - Math.max(0, layout.rows - 1) * 1.5) / layout.rows);
      chipHeight = fittedHeight;
      fontSize = Math.max(4.4, fittedHeight - 4.5);
      gapY = 1.5;
      layout = build();
    }
    const chips = layout.chips.map((chip) => {
      const availableTextWidth = Math.max(18, chip.width - 18);
      const compress = chip.estimatedTextWidth > availableTextWidth;
      return `<g class="diagram-chip${empty ? " is-empty" : ""}" transform="translate(${box.x + chip.x} ${box.y + chip.y})"><rect width="${chip.width}" height="${chipHeight}" rx="${Math.min(8, chipHeight / 2)}"/><text x="${chip.width / 2}" y="${chipHeight / 2 + fontSize * 0.35}" text-anchor="middle" style="font-size:${fontSize}px"${compress ? ` textLength="${availableTextWidth}" lengthAdjust="spacingAndGlyphs"` : ""}>${escapeXml(chip.value)}</text></g>`;
    }).join("");
    return `<g class="diagram-chip-field" data-chip-count="${items.length}">${chips}</g>`;
  }

  function diagramStageIndicator(spec, color) {
    if (spec.indicator === "top") return `<rect class="diagram-stage-indicator" x="${spec.x + 14}" y="${spec.y + 12}" width="${spec.width - 28}" height="5" rx="2.5" fill="${color}"/>`;
    return `<rect class="diagram-stage-indicator" x="${spec.x + 9}" y="${spec.y + 16}" width="5" height="${spec.height - 32}" rx="2.5" fill="${color}"/>`;
  }

  function diagramStageCard(stage) {
    const spec = diagramStageSpecs[stage.id];
    const palette = stagePalette[stage.id];
    const values = diagramStageValues(stage);
    const selectedCount = stage.fields.reduce((sum, field) => sum + selected(field.id).length, 0);
    const headerX = spec.x + 22;
    const countX = spec.x + spec.width - 22;
    const badgeY = spec.y + 19;
    let content;
    if (stage.id === "extensions" && !selectedCount) {
      content = `<g class="diagram-empty-state" transform="translate(${spec.x + 22} ${spec.y + spec.contentY})"><rect width="${spec.width - 44}" height="${spec.contentHeight}" rx="13"/><circle cx="24" cy="24" r="8"/><path d="M24 19V29M19 24H29"/><text class="diagram-empty-title" x="44" y="27">No extension selected</text><text class="diagram-empty-copy" x="20" y="51">Optional path remains explicit and auditable.</text></g>`;
    } else {
      content = diagramChipLayout(values, {
        x: spec.x + 22,
        y: spec.y + spec.contentY,
        width: spec.width - 44,
        height: spec.contentHeight
      });
    }
    return `<g class="diagram-stage diagram-stage-card" data-diagram-stage="${stage.id}" style="--stage-color:${palette.color};--stage-tint:${palette.tint}"><title>${escapeXml(stage.title)}: ${escapeXml(values.join(" · ") || "No optional elements selected")}</title><rect class="diagram-stage-shell" x="${spec.x}" y="${spec.y}" width="${spec.width}" height="${spec.height}" rx="20"/>${diagramStageIndicator(spec, palette.color)}<rect class="diagram-stage-badge" x="${headerX}" y="${badgeY}" width="72" height="21" rx="10.5"/><text class="diagram-stage-number" x="${headerX + 12}" y="${badgeY + 14.5}">STAGE ${String(stage.number).padStart(2, "0")}</text><circle class="diagram-stage-count-dot" cx="${countX}" cy="${badgeY + 10.5}" r="11" fill="${palette.color}"/><text class="diagram-stage-count" x="${countX}" y="${badgeY + 14}" text-anchor="middle">${selectedCount}</text><text class="diagram-stage-title" x="${headerX}" y="${spec.y + 70}">${escapeXml(stage.title)}</text><text class="diagram-stage-subtitle" x="${headerX}" y="${spec.y + 89}">${escapeXml(diagramStageSubtitles[stage.id])}</text>${content}</g>`;
  }

  function diagramInfoBox(fieldId, title, x, y, width, height) {
    const field = allBuilderFields().find((entry) => entry.id === fieldId);
    const values = selected(fieldId);
    const shown = values.length ? values : [field?.required ? "Not yet specified" : "Optional · none"];
    let fontSize = 10.5;
    let lineHeight = 17;
    let lines;
    const rebuild = () => {
      const maxChars = Math.max(17, Math.floor((width - 36) / (fontSize * 0.55)));
      return shown.flatMap((value) => wrapText(value, maxChars).map((line, index) => ({ text: line, bullet: index === 0 })));
    };
    lines = rebuild();
    while (44 + lines.length * lineHeight > height && fontSize > 5.3) {
      fontSize -= 0.5;
      lineHeight = Math.max(8, fontSize + 4);
      lines = rebuild();
    }
    const text = lines.map((line, index) => `<tspan x="${line.bullet ? 18 : 31}" dy="${index ? lineHeight : 0}">${line.bullet ? "• " : "  "}${escapeXml(line.text)}</tspan>`).join("");
    return `<g class="diagram-core-box" data-diagram-field="${fieldId}" transform="translate(${x} ${y})"><title>${escapeXml(title)}: ${escapeXml(shown.join(" · "))}</title><rect width="${width}" height="${height}" rx="15"/><circle cx="18" cy="20" r="6"/><text class="diagram-core-label" x="31" y="24">${escapeXml(title.toUpperCase())}</text><text class="diagram-core-values" x="18" y="52" style="font-size:${fontSize}px">${text}</text></g>`;
  }

  function diagramStateSignature() {
    const inputText = selected("inputs").join(" ").toLowerCase();
    const args = [];
    if (inputText.includes("x,y,z") || inputText.includes("x, y, z")) args.push("x, y, z");
    else if (inputText.includes("x,y") || inputText.includes("x, y")) args.push("x, y");
    else if (inputText.includes("spatial") || inputText.includes("coordinate")) args.push("x");
    if (inputText.includes("time") || inputText.includes(" t")) args.push("t");
    return `uθ(${args.join(", ") || "ξ"})`;
  }

  function diagramPhysicsCore(stage) {
    const palette = stagePalette.physics;
    const selectedCount = stage.fields.reduce((sum, field) => sum + selected(field.id).length, 0);
    return `<g class="diagram-stage diagram-core-stage" data-diagram-stage="physics" style="--stage-color:${palette.color};--stage-tint:${palette.tint}"><title>Physics-informed model core: trainable state generates residual and constraint evaluations; their losses and the selected balancing weights feed the composite objective.</title><rect class="diagram-core-shell" x="430" y="185" width="724" height="408" rx="26"/><rect class="diagram-stage-indicator" x="448" y="198" width="688" height="6" rx="3" fill="${palette.color}"/><rect class="diagram-stage-badge" x="456" y="207" width="72" height="21" rx="10.5"/><text class="diagram-stage-number" x="468" y="221.5">STAGE 03</text><circle class="diagram-stage-count-dot" cx="1116" cy="217.5" r="11" fill="${palette.color}"/><text class="diagram-stage-count" x="1116" y="221" text-anchor="middle">${selectedCount}</text><text class="diagram-core-title" x="456" y="261">Physics-informed model core</text><text class="diagram-stage-subtitle" x="456" y="282">Trainable state → residuals and constraints → weighted composite objective.</text><g class="diagram-state-box" transform="translate(456 331)"><rect width="190" height="160" rx="26"/><text class="diagram-state-label" x="95" y="39" text-anchor="middle">TRAINABLE STATE</text><text class="diagram-state-equation" x="95" y="90" text-anchor="middle">${escapeXml(diagramStateSignature())}</text><text class="diagram-state-copy" x="95" y="121" text-anchor="middle">neural approximation</text><circle cx="37" cy="139" r="4"/><path d="M47 139H143"/><circle cx="153" cy="139" r="4"/></g>${diagramInfoBox("enforcement", "Governing residual", 700, 309, 190, 95)}${diagramInfoBox("constraints", "Physical constraints", 700, 424, 190, 115)}${diagramInfoBox("objective", "Composite objective", 938, 309, 190, 115)}${diagramInfoBox("weighting", "Loss balancing", 938, 464, 190, 75)}<g class="diagram-core-edge" data-core-edge="state-to-residual"><path d="M646 369C668 369 674 356 700 356" marker-start="url(#port-inner)" marker-end="url(#arrow-inner)"/></g><g class="diagram-core-edge" data-core-edge="state-to-constraints"><path d="M646 455C668 455 674 481 700 481" marker-start="url(#port-inner)" marker-end="url(#arrow-inner)"/></g><g class="diagram-core-edge" data-core-edge="residual-to-objective"><path d="M890 356H938" marker-start="url(#port-inner)" marker-end="url(#arrow-inner)"/></g><g class="diagram-core-edge" data-core-edge="constraints-to-objective"><path d="M890 481C916 481 912 405 938 405" marker-start="url(#port-inner)" marker-end="url(#arrow-inner)"/></g><g class="diagram-core-edge" data-core-edge="weights-to-objective"><path d="M1033 464V424" marker-start="url(#port-inner)" marker-end="url(#arrow-inner)"/></g></g>`;
  }

  const edgeSvg = (path, type, label) => `<g class="diagram-edge ${type}" data-diagram-edge="${type}"><path d="${path}" marker-start="url(#port-${type})" marker-end="url(#arrow-${type})"/><title>${escapeXml(label)}</title></g>`;

  function diagramRelationLabel(x, y, width, text, type = "primary") {
    return `<g class="diagram-relation-label ${type}" transform="translate(${x} ${y})"><rect width="${width}" height="22" rx="11"/><text x="${width / 2}" y="15" text-anchor="middle">${escapeXml(text)}</text></g>`;
  }

  function diagramHeader(total) {
    const label = `${total} SELECTED ELEMENT${total === 1 ? "" : "S"}`;
    const pillWidth = Math.max(188, 48 + label.length * 6.6);
    return `<g class="diagram-atlas-heading" transform="translate(48 34)"><circle class="diagram-atlas-mark" cx="18" cy="18" r="17"/><path class="diagram-atlas-wave" d="M5 22L11 12L17 25L23 10L31 22"/><text class="diagram-eyebrow" x="48" y="12">LIVE ARCHITECTURE · COMPLETE FLOWCHART</text><text class="diagram-main-title" x="48" y="42">Your PINN</text><g class="diagram-status" transform="translate(48 58)"><rect width="${pillWidth}" height="27" rx="13.5"/><circle cx="15" cy="13.5" r="4"/><text x="29" y="17">${label}</text></g></g>`;
  }

  function diagramIntegratedLegend() {
    const stages = [
      ["context", "Problem", 0],
      ["representation", "Representation", 86],
      ["physics", "Physics core", 201],
      ["numerics", "Numerics", 301],
      ["training", "Training", 391],
      ["extensions", "Extensions", 476],
      ["verification", "Verification", 573]
    ];
    const stageItems = stages.map(([id, label, x]) => `<g transform="translate(${x} 0)"><circle cx="6" cy="6" r="6" fill="${stagePalette[id].color}"/><text x="17" y="10">${label}</text></g>`).join("");
    return `<g class="diagram-integrated-legend" transform="translate(854 30)"><rect class="diagram-integrated-legend-shell" width="698" height="112" rx="18"/><text class="diagram-eyebrow" x="18" y="23">LEGEND · STAGES &amp; RELATIONSHIPS</text><g class="diagram-integrated-stage-items" transform="translate(18 36)">${stageItems}</g><line x1="18" y1="66" x2="680" y2="66"/><g class="diagram-integrated-edge-items" transform="translate(18 81)"><path class="primary" d="M0 7H68" marker-start="url(#port-primary)" marker-end="url(#arrow-primary)"/><text x="80" y="11">Design dependency</text><path class="optional" d="M220 7H288" marker-start="url(#port-optional)" marker-end="url(#arrow-optional)"/><text x="300" y="11">Conditional extension</text><path class="feedback" d="M462 7H530" marker-start="url(#port-feedback)" marker-end="url(#arrow-feedback)"/><text x="542" y="11">Validation feedback</text></g></g>`;
  }

  function diagramDefinitions() {
    return `<defs><pattern id="diagram-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="var(--d-grid)" stroke-width=".65"/></pattern><linearGradient id="diagram-stage-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--d-surface-top)"/><stop offset=".56" stop-color="var(--d-surface-mid)"/><stop offset="1" stop-color="var(--d-surface-bottom)"/></linearGradient><linearGradient id="diagram-core-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--d-core-top)"/><stop offset=".58" stop-color="var(--d-core-mid)"/><stop offset="1" stop-color="var(--d-core-bottom)"/></linearGradient><linearGradient id="diagram-inner-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--d-inner-top)"/><stop offset="1" stop-color="var(--d-inner-bottom)"/></linearGradient><linearGradient id="diagram-state-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--d-state-top)"/><stop offset=".55" stop-color="var(--d-state-mid)"/><stop offset="1" stop-color="var(--d-state-bottom)"/></linearGradient><linearGradient id="diagram-chip-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--d-chip-top)"/><stop offset="1" stop-color="var(--d-chip-bottom)"/></linearGradient><filter id="diagram-shadow" x="-20%" y="-20%" width="140%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="10" result="farBlur"/><feOffset in="farBlur" dy="12" result="farOffset"/><feFlood flood-color="var(--d-shadow)" flood-opacity=".16" result="farColor"/><feComposite in="farColor" in2="farOffset" operator="in" result="farShadow"/><feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="nearBlur"/><feOffset in="nearBlur" dy="2.5" result="nearOffset"/><feFlood flood-color="var(--d-shadow)" flood-opacity=".2" result="nearColor"/><feComposite in="nearColor" in2="nearOffset" operator="in" result="nearShadow"/><feMerge><feMergeNode in="farShadow"/><feMergeNode in="nearShadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="diagram-core-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur"/><feOffset in="blur" dy="8" result="offset"/><feFlood flood-color="#078b79" flood-opacity=".19" result="color"/><feComposite in="color" in2="offset" operator="in" result="shadowColor"/><feMerge><feMergeNode in="shadowColor"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="diagram-micro-shadow" x="-15%" y="-18%" width="130%" height="145%"><feGaussianBlur in="SourceAlpha" stdDeviation="2.4" result="blur"/><feOffset in="blur" dy="3" result="offset"/><feFlood flood-color="var(--d-shadow)" flood-opacity=".14" result="color"/><feComposite in="color" in2="offset" operator="in" result="shadowColor"/><feMerge><feMergeNode in="shadowColor"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="diagram-pill-shadow" x="-12%" y="-25%" width="124%" height="160%"><feGaussianBlur in="SourceAlpha" stdDeviation="1.1" result="blur"/><feOffset in="blur" dy="1.5" result="offset"/><feFlood flood-color="var(--d-shadow)" flood-opacity=".13" result="color"/><feComposite in="color" in2="offset" operator="in" result="shadowColor"/><feMerge><feMergeNode in="shadowColor"/><feMergeNode in="SourceGraphic"/></feMerge></filter>${diagramMarker("primary", "var(--d-edge)")}${diagramMarker("optional", "#b12a72")}${diagramMarker("feedback", "#c24d20")}${diagramMarker("inner", "#078b79")}<style>${diagramSvgStyles()}</style></defs>`;
  }

  function diagramMarker(id, color) {
    return `<marker id="arrow-${id}" markerWidth="10" markerHeight="10" refX="8.5" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M1.5 1.2L8.5 5L1.5 8.8" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker><marker id="port-${id}" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2.5" fill="${color}"/></marker>`;
  }

  function diagramSvgStyles() {
    return `.pinn-diagram{--d-canvas:#edf4f7;--d-grid:#d8e4ea;--d-surface-top:#fff;--d-surface-mid:#fbfdfe;--d-surface-bottom:#edf3f6;--d-core-top:#fff;--d-core-mid:#fbfefd;--d-core-bottom:#edf8f6;--d-inner-top:#fff;--d-inner-bottom:#eef4f7;--d-state-top:#f7fffd;--d-state-mid:#e8f7f4;--d-state-bottom:#d7efeb;--d-chip-top:#fff;--d-chip-bottom:#eef4f7;--d-ink:#14283a;--d-muted:#607589;--d-line:#b9cbd7;--d-edge:#314d66;--d-shadow:#0c2438;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}@media(prefers-color-scheme:dark){.pinn-diagram{--d-canvas:#0c1928;--d-grid:#1c3144;--d-surface-top:#172739;--d-surface-mid:#132334;--d-surface-bottom:#101e2d;--d-core-top:#142b34;--d-core-mid:#102830;--d-core-bottom:#0d2229;--d-inner-top:#1a2d3f;--d-inner-bottom:#142536;--d-state-top:#123c3a;--d-state-mid:#10332f;--d-state-bottom:#0d2927;--d-chip-top:#203448;--d-chip-bottom:#17293a;--d-ink:#edf6fb;--d-muted:#a6b7c6;--d-line:#385065;--d-edge:#8aa0b4;--d-shadow:#000}}[data-theme="light"] .pinn-diagram{--d-canvas:#edf4f7;--d-grid:#d8e4ea;--d-surface-top:#fff;--d-surface-mid:#fbfdfe;--d-surface-bottom:#edf3f6;--d-core-top:#fff;--d-core-mid:#fbfefd;--d-core-bottom:#edf8f6;--d-inner-top:#fff;--d-inner-bottom:#eef4f7;--d-state-top:#f7fffd;--d-state-mid:#e8f7f4;--d-state-bottom:#d7efeb;--d-chip-top:#fff;--d-chip-bottom:#eef4f7;--d-ink:#14283a;--d-muted:#607589;--d-line:#b9cbd7;--d-edge:#314d66;--d-shadow:#0c2438}[data-theme="dark"] .pinn-diagram{--d-canvas:#0c1928;--d-grid:#1c3144;--d-surface-top:#172739;--d-surface-mid:#132334;--d-surface-bottom:#101e2d;--d-core-top:#142b34;--d-core-mid:#102830;--d-core-bottom:#0d2229;--d-inner-top:#1a2d3f;--d-inner-bottom:#142536;--d-state-top:#123c3a;--d-state-mid:#10332f;--d-state-bottom:#0d2927;--d-chip-top:#203448;--d-chip-bottom:#17293a;--d-ink:#edf6fb;--d-muted:#a6b7c6;--d-line:#385065;--d-edge:#8aa0b4;--d-shadow:#000}.diagram-canvas{fill:var(--d-canvas)}.diagram-grid{fill:url(#diagram-grid);opacity:.66}.diagram-grid+*{}.diagram-stage-card{filter:url(#diagram-shadow)}.diagram-stage-shell{fill:url(#diagram-stage-face);stroke:var(--d-line);stroke-width:1.4}.diagram-core-shell{fill:url(#diagram-core-face);stroke:#459d92;stroke-width:2.2;filter:url(#diagram-core-glow)}.diagram-stage-indicator,.diagram-stage-count-dot{filter:url(#diagram-pill-shadow)}.diagram-stage-badge{fill:var(--stage-tint);stroke:color-mix(in srgb,var(--stage-color) 18%,var(--d-line));stroke-width:.8}.diagram-stage-number,.diagram-eyebrow,.diagram-state-label{fill:var(--d-muted);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:1.1px}.diagram-stage-count{fill:#fff;font-size:10px;font-weight:760}.diagram-stage-title{fill:var(--d-ink);font-size:18px;font-weight:730}.diagram-core-title{fill:var(--d-ink);font-size:23px;font-weight:760}.diagram-stage-subtitle{fill:var(--d-muted);font-size:11.5px;font-weight:520}.diagram-chip rect{fill:url(#diagram-chip-face);stroke:var(--d-line);stroke-width:1;filter:url(#diagram-pill-shadow)}.diagram-chip text{fill:var(--d-ink);font-weight:540}.diagram-chip.is-empty text{fill:var(--d-muted)}.diagram-core-box rect{fill:url(#diagram-inner-face);stroke:var(--d-line);stroke-width:1.2;filter:url(#diagram-micro-shadow)}.diagram-core-box circle{fill:#078b79}.diagram-core-label{fill:var(--d-muted);font-size:10px;font-weight:720;letter-spacing:.55px}.diagram-core-values{fill:var(--d-ink);font-weight:540}.diagram-state-box rect{fill:url(#diagram-state-face);stroke:#078b79;stroke-width:2.2;filter:url(#diagram-micro-shadow)}.diagram-state-label{fill:var(--d-muted);font-size:11px;letter-spacing:1.7px}.diagram-state-equation{fill:var(--d-ink);font-family:Georgia,"Times New Roman",serif;font-size:28px;font-weight:600;font-style:italic}.diagram-state-copy{fill:var(--d-muted);font-size:10.5px}.diagram-state-box circle{fill:#078b79}.diagram-state-box path,.diagram-core-edge path{fill:none;stroke:#078b79;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.diagram-empty-state rect{fill:color-mix(in srgb,#b12a72 7%,var(--d-inner-bottom));stroke:color-mix(in srgb,#b12a72 38%,var(--d-line));stroke-dasharray:5 5}.diagram-empty-state circle{fill:none;stroke:#b12a72;stroke-width:1.7}.diagram-empty-state path{stroke:#b12a72;stroke-width:1.7;stroke-linecap:round}.diagram-empty-title{fill:var(--d-ink);font-size:11.5px}.diagram-empty-copy{fill:var(--d-muted);font-size:10.5px}.diagram-edge{transition:opacity 160ms ease}.diagram-edge path{fill:none;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}.diagram-edge.primary path{stroke:var(--d-edge)}.diagram-edge.optional path{stroke:#b12a72;stroke-dasharray:7 7}.diagram-edge.feedback path{stroke:#c24d20;stroke-dasharray:2 8}.diagram-stage.is-dimmed,.diagram-edge.is-dimmed{opacity:.16;filter:saturate(.35)}.diagram-edge.is-emphasized path{stroke-width:3.5}.diagram-relation-label rect{fill:var(--d-surface-top);stroke:var(--d-line)}.diagram-relation-label text{fill:var(--d-muted);font-size:9.5px;font-weight:620}.diagram-relation-label.optional rect{stroke:color-mix(in srgb,#b12a72 38%,var(--d-line))}.diagram-relation-label.feedback rect{stroke:color-mix(in srgb,#c24d20 38%,var(--d-line))}.diagram-atlas-mark{fill:none;stroke:#078b79;stroke-width:2}.diagram-atlas-wave{fill:none;stroke:var(--d-ink);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.diagram-eyebrow{font-size:11px;letter-spacing:1.7px}.diagram-main-title{fill:var(--d-ink);font-size:28px;font-weight:760;letter-spacing:-.55px}.diagram-status rect,.diagram-integrated-legend-shell{fill:url(#diagram-stage-face);stroke:var(--d-line);stroke-width:1.1;filter:url(#diagram-shadow)}.diagram-status circle{fill:#078b79}.diagram-status text{fill:var(--d-ink);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10px;font-weight:760;letter-spacing:.8px}.diagram-integrated-legend>line{stroke:var(--d-line)}.diagram-integrated-stage-items text,.diagram-integrated-edge-items text{fill:var(--d-muted);font-size:9.5px;font-weight:620}.diagram-integrated-edge-items path{fill:none;stroke-width:2.1;stroke-linecap:round}.diagram-integrated-edge-items .primary{stroke:var(--d-edge)}.diagram-integrated-edge-items .optional{stroke:#b12a72;stroke-dasharray:7 7}.diagram-integrated-edge-items .feedback{stroke:#c24d20;stroke-dasharray:2 8}`;
  }

  function renderDiagram() {
    const stages = Object.fromEntries(state.data.builder.stages.map((stage) => [stage.id, stage]));
    const total = [...state.selections.values()].reduce((sum, values) => sum + values.size, 0);
    const edges = [
      edgeSvg("M199 359V411", "primary", "Problem definition constrains the selected representation."),
      edgeSvg("M374 525H421", "primary", "Representation defines the trainable physical state."),
      edgeSvg("M599 593V636", "primary", "Physics construction determines numerical evaluation requirements."),
      edgeSvg("M768 752H823", "primary", "Numerical evaluation supplies derivatives and sampled evidence to training."),
      edgeSvg("M1170 752H1221", "primary", "Training proceeds to verification independently of optional extensions."),
      edgeSvg("M1154 286H1221", "optional", "Physics construction may require a structural extension."),
      edgeSvg("M1405 383V418", "optional", "Selected structural extensions must be carried into verification."),
      edgeSvg("M1230 560C1202 560 1192 568 1145 568", "feedback", "Validation feedback returns the design to physics construction.")
    ].join("");
    const labels = [
      diagramRelationLabel(366, 494, 66, "defines"),
      diagramRelationLabel(1169, 252, 68, "optional", "optional"),
      diagramRelationLabel(1164, 533, 82, "validate", "feedback")
    ].join("");
    els.diagram.setAttribute("viewBox", "0 0 1600 900");
    els.diagram.dataset.diagramHeight = "900";
    els.diagram.dataset.diagramAspect = "16:9";
    applyDiagramWidth();
    els.diagram.innerHTML = `${diagramDefinitions()}<rect class="diagram-canvas" width="1600" height="900" rx="28"/><rect class="diagram-grid" x="1" y="1" width="1598" height="898" rx="27"/>${diagramHeader(total)}${diagramIntegratedLegend()}${edges}${diagramStageCard(stages.context)}${diagramStageCard(stages.representation)}${diagramPhysicsCore(stages.physics)}${diagramStageCard(stages.numerics)}${diagramStageCard(stages.training)}${diagramStageCard(stages.extensions)}${diagramStageCard(stages.verification)}${labels}<text class="diagram-eyebrow" x="48" y="878">PINN REVIEW ATLAS · DYNAMIC LANDSCAPE ARCHITECTURE · 16:9</text><text class="diagram-stage-subtitle" x="1552" y="878" text-anchor="end">Every selected element remains explicit · no “+N” summaries</text>`;
    els.diagramDescription.textContent = `Generated 16:9 seven-stage PINN architecture with every selected element shown. Trainable state feeds governing residual and physical-constraint evaluations; their losses and the selected balancing weights feed the composite objective. ${summaryRows().map(([label, value]) => `${label}: ${value}.`).join(" ")}`;
  }

  function includesSelection(fieldIds, terms) {
    const values = fieldIds.flatMap(selected).map(normalize);
    return terms.some((term) => values.some((value) => value.includes(normalize(term))));
  }

  function matchingRules(selections = state.selections, kind = null) {
    return selectionRules.filter((rule) => (!kind || rule.kind === kind) && rule.applies(selections));
  }

  function firstBlockingRule(selections = state.selections) {
    return matchingRules(selections, "blocked")[0] || null;
  }

  function showSelectionRule(rule, attempted, selections, { conditional = false } = {}) {
    const field = allBuilderFields().find((entry) => entry.id === attempted.fieldId);
    const conflicts = rule.conflict(selections);
    state.lastConditionalSelection = conditional ? attempted : null;
    els.ruleDialogContent.innerHTML = `
      <span class="rule-kind" data-kind="${rule.kind}">${rule.kind === "blocked" ? "Selection blocked" : "Conditionally compatible"}</span>
      <h2 id="selection-rule-title">${escapeHtml(rule.title)}</h2>
      <p class="rule-attempt"><strong>${escapeHtml(field?.label || attempted.fieldId)}:</strong> ${escapeHtml(attempted.option)}</p>
      <p>${escapeHtml(rule.reason)}</p>
      <div class="rule-conflicts"><strong>Combination reviewed</strong><span>${conflicts.map(escapeHtml).join(" · ")}</span></div>
      <div class="rule-basis"><strong>Scientific rule scope</strong><span>${rule.kind === "blocked" ? "Logical contradiction or undefined model specification—not a performance preference." : "Allowed only with the stated hybrid, staged, source-specific, or variable-specific interpretation."}</span></div>
      <div class="rule-actions">${conditional ? `<button class="button primary" type="button" data-keep-rule>Keep documented combination</button><button class="button" type="button" data-undo-rule>Undo ${escapeHtml(attempted.option)}</button>` : `<button class="button primary" type="button" data-close-rule>Return to selection</button>`}</div>`;
    els.ruleDialog.showModal();
  }

  function compatibilitySignals() {
    const signals = [];
    const add = (level, title, text) => signals.push({ level, title, text });
    const coreComplete = state.data.builder.stages.slice(0, 5).every(stageComplete);
    for (const rule of matchingRules(state.selections, "conditional")) add("conditional", rule.title, rule.reason);
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
    if (coreComplete) add("good", "Core specification is recorded", "The minimum fields needed for a complete Atlas design record are populated. This is a documentation status, not proof that the method is scientifically valid or numerically effective.");
    const levelOrder = { warning: 0, conditional: 1, suggestion: 2, good: 3 };
    return signals.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
  }

  function renderCompatibility() {
    const signals = compatibilitySignals();
    const warningCount = signals.filter((signal) => signal.level === "warning").length;
    const conditionalCount = signals.filter((signal) => signal.level === "conditional").length;
    els.signalCount.textContent = `${warningCount} warning${warningCount === 1 ? "" : "s"} · ${conditionalCount} conditional`;
    els.compatibilityList.innerHTML = signals.length ? signals.map((signal) => `<article class="compatibility-signal" data-level="${signal.level}"><span class="signal-icon" aria-hidden="true">${signal.level === "warning" ? "!" : signal.level === "conditional" ? "≈" : signal.level === "good" ? "✓" : "→"}</span><div><strong>${escapeHtml(signal.title)}</strong><p>${escapeHtml(signal.text)}</p></div></article>`).join("") : `<p class="relation-empty">Select elements to begin the dependency review.</p>`;
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
    const viewBox = els.diagram.getAttribute("viewBox") || "0 0 1600 900";
    const [, , width, height] = viewBox.split(/\s+/).map(Number);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}" class="pinn-diagram" role="img" aria-label="Generated PINN architecture">${els.diagram.innerHTML}</svg>`;
  }

  function applyDiagramWidth() {
    els.diagram.style.width = `${Math.round(state.diagramZoom * 100)}%`;
  }

  function setDiagramZoom(value) {
    state.diagramZoom = Math.max(0.75, Math.min(1.75, value));
    applyDiagramWidth();
    document.querySelector("[data-diagram-zoom-value]").textContent = `${Math.round(state.diagramZoom * 100)}%`;
  }

  function setLegendFocus(kind = null, value = null) {
    const activeButton = kind && value ? document.querySelector(`[data-legend-${kind}="${CSS.escape(value)}"]`) : null;
    const clear = activeButton?.getAttribute("aria-pressed") === "true";
    document.querySelectorAll("[data-legend-stage], [data-legend-edge]").forEach((button) => button.setAttribute("aria-pressed", "false"));
    els.diagram.querySelectorAll(".diagram-stage, .diagram-edge").forEach((element) => element.classList.remove("is-dimmed", "is-emphasized"));
    if (clear || !kind || !value) {
      els.legendDetail.textContent = "Select a stage color or arrow type to highlight its role in the generated flowchart.";
      return;
    }
    activeButton.setAttribute("aria-pressed", "true");
    if (kind === "stage") {
      els.diagram.querySelectorAll(".diagram-stage").forEach((element) => element.classList.toggle("is-dimmed", element.dataset.diagramStage !== value));
      els.diagram.querySelectorAll(".diagram-edge").forEach((element) => element.classList.add("is-dimmed"));
      const stage = state.data.builder.stages.find((entry) => entry.id === value);
      els.legendDetail.textContent = `${stage.title}: ${stage.description} The color identifies this design stage; it does not rank importance.`;
    } else {
      els.diagram.querySelectorAll(".diagram-stage").forEach((element) => element.classList.add("is-dimmed"));
      els.diagram.querySelectorAll(".diagram-edge").forEach((element) => {
        element.classList.toggle("is-dimmed", element.dataset.diagramEdge !== value);
        element.classList.toggle("is-emphasized", element.dataset.diagramEdge === value);
      });
      const descriptions = {
        primary: "Design dependency: upstream problem, representation, physics, numerical, and training choices constrain the next stage.",
        optional: "Conditional extension: this branch is included only when the selected problem needs decomposition, operator learning, a numerical hybrid, uncertainty treatment, reuse, or parallel execution.",
        feedback: "Validation feedback: failed physical, numerical, or benchmark evidence sends the design back for revision; this is not a one-way pipeline."
      };
      els.legendDetail.textContent = descriptions[value];
    }
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
    els.ruleDialog.addEventListener("click", (event) => {
      if (event.target === els.ruleDialog || event.target.closest("[data-close-rule], [data-keep-rule]")) {
        state.lastConditionalSelection = null;
        els.ruleDialog.close();
      }
      if (event.target.closest("[data-undo-rule]") && state.lastConditionalSelection) {
        const { fieldId, option } = state.lastConditionalSelection;
        state.selections.get(fieldId)?.delete(option);
        const input = document.querySelector(`[data-field-id="${CSS.escape(fieldId)}"][data-option="${CSS.escape(option)}"]`);
        if (input) input.checked = false;
        state.lastConditionalSelection = null;
        els.ruleDialog.close();
        updateFieldSummary(fieldId);
        updateBuilderOutputs();
        showToast("Conditional selection removed.");
      }
    });
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
    els.liveStageTrack?.addEventListener("click", (event) => {
      const stage = event.target.closest("[data-live-stage-index]");
      if (!stage) return;
      setActiveStage(Number(stage.dataset.liveStageIndex));
      document.querySelector(`#stage-panel-${CSS.escape(state.data.builder.stages[state.activeStage].id)}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.liveNavigatorToggle?.addEventListener("click", () => setLiveNavigatorCollapsed(els.liveNavigator.dataset.collapsed !== "true"));
    document.querySelector("[data-view-full-diagram]")?.addEventListener("click", () => els.studioDiagram?.scrollIntoView({ behavior: "smooth", block: "start" }));
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
      const previous = cloneSelections();
      const candidate = cloneSelections();
      const values = candidate.get(field.id) || new Set();
      if (input.checked) {
        values.add(input.dataset.option);
      } else values.delete(input.dataset.option);
      candidate.set(field.id, values);
      if (input.checked) {
        const blocked = firstBlockingRule(candidate);
        if (blocked) {
          input.checked = false;
          showSelectionRule(blocked, { fieldId: field.id, option: input.dataset.option }, candidate);
          return;
        }
      }
      state.selections = candidate;
      updateFieldSummary(field.id);
      updateBuilderOutputs();
      if (input.checked) {
        const previousConditional = new Set(matchingRules(previous, "conditional").map((rule) => rule.id));
        const conditional = matchingRules(candidate, "conditional").find((rule) => !previousConditional.has(rule.id));
        if (conditional) showSelectionRule(conditional, { fieldId: field.id, option: input.dataset.option }, candidate, { conditional: true });
      }
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
    document.querySelector("[data-diagram-zoom-out]")?.addEventListener("click", () => setDiagramZoom(state.diagramZoom - 0.25));
    document.querySelector("[data-diagram-zoom-fit]")?.addEventListener("click", () => setDiagramZoom(1));
    document.querySelector("[data-diagram-zoom-in]")?.addEventListener("click", () => setDiagramZoom(state.diagramZoom + 0.25));
    els.diagramExpand?.addEventListener("click", () => {
      const expanded = els.studioDiagram.dataset.expanded !== "true";
      els.studioDiagram.dataset.expanded = String(expanded);
      els.diagramExpand.setAttribute("aria-expanded", String(expanded));
      els.diagramExpand.textContent = expanded ? "Compact view" : "Expand view";
    });
    document.querySelector("[data-diagram-legend]")?.addEventListener("click", (event) => {
      const stage = event.target.closest("[data-legend-stage]");
      const edge = event.target.closest("[data-legend-edge]");
      if (stage) setLegendFocus("stage", stage.dataset.legendStage);
      if (edge) setLegendFocus("edge", edge.dataset.legendEdge);
    });
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderDiagram, 120);
    });
  }

  init();
})();
