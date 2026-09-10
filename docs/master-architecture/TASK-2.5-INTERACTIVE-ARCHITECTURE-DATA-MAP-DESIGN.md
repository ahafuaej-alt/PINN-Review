# Task 2.5 — Interactive Atlas Architecture & Data Map Page Design

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.5

Branch: `docs/master-atlas-roadmap`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Controlling contract: frozen Master Plan v1.0 + Task 2.1 eight-level conceptual architecture + Task 2.2 complete internal component/field map + Task 2.3 `atlas-conceptual-architecture.mmd` + Task 2.4 `atlas-technical-erd.dbml` + Task 1.6 requirement/coverage matrix + `ATLAS-PRODUCTION-SURFACE-REGISTER.md`.

Scope: **page/product design only**. This task specifies the future interactive Atlas Architecture & Data Map page and its interaction/data contracts. It does not implement HTML/CSS/JavaScript, create a production route, change navigation, select a database provider, modify the live Atlas, generate a new ontology version, or perform Task 2.6 shared-definition extraction.

---

## 1. Page mission

The Architecture & Data Map is the Atlas's **read-only architecture observability surface**. It must let a researcher, maintainer, reviewer or developer answer, without inspecting repository internals manually:

1. What are the permanent Atlas responsibility/authority levels?
2. Which scientific owner governs a field, taxonomy term, relation or synthesis object?
3. Where is a paper-level datum stored conceptually and technically?
4. Which evidence/provenance objects support it?
5. Which analytics, synthesis objects, pages, APIs or workflows consume it?
6. Which current production routes depend on a given source/record/definition?
7. Which frozen requirement or QA rule protects a given architectural object?
8. What version/change/migration state applies?
9. Where does Computational Resources connect, and where does its independent authority begin?
10. What is current, proposed, deprecated, historical, unresolved or merely derived?

The page is **not** an ontology editor, database administration console, Dataset Manager replacement, scientific review interface, or framework authoring tool.

Core rule:

> The page visualizes governed architecture and lineage; it never becomes the authority it visualizes.

---

## 2. Proposed surface identity

### 2.1 Working page family

Working product name: **Atlas Architecture & Data Map**.

A future route may be chosen during target-IA / Task 9 / implementation work (for example an architecture-oriented route), but **Task 2.5 does not authorize or freeze a production URL**.

### 2.2 L8 classification

Conceptual home: **L8-U6 Architecture & Data Map**.

Behavior: primarily read-only. Any later links to maintenance/review tools are navigational hand-offs to the owning workflow; the map itself does not perform authoritative scientific writes.

### 2.3 Principal upstream sources

The future implementation must consume governed, version-controlled representations derived from:

- Task 2.1 conceptual level/authority definitions;
- Task 2.2 component and field map;
- Task 2.3 Mermaid conceptual source;
- Task 2.4 DBML technical ERD;
- Task 1.6 111-requirement coverage contract;
- Task 1.3 R1–R48;
- Task 1.4 X1–X9;
- Task 1.5 H1–H11 and NDU/CMR gates;
- authority/version/governance definitions;
- the production-surface registry and later Task 9 dependency audit;
- later machine-readable shared definitions created under Task 2.6.

The rendered page must not manually duplicate scientific definitions when a governed source can supply them.

---

# 3. Information architecture

The page contains a persistent header/control area, a primary view workspace, and a shared contextual inspector.

## 3.1 Persistent header

Required elements:

- page title and concise purpose;
- visible badge: **Architecture view — not scientific authority**;
- current architecture-contract version;
- locked scientific ontology version currently being represented;
- data/build timestamp or source revision identifiers;
- global search;
- view switcher;
- share/copy-state control for reproducible deep links when implemented;
- help/legend.

Version labels must keep distinct at least:

- Master Plan / architecture contract version;
- scientific ontology/schema version;
- bibliographic/data release version where relevant;
- page/UI release version;
- Computational Resources subsystem version where shown.

## 3.2 Primary view switcher

The first implementation should provide **six coordinated primary views**:

1. **Conceptual Architecture**
2. **Technical ERD**
3. **Authority & Provenance**
4. **Requirements & QA Coverage**
5. **Surface & Dependency Map**
6. **Versions & Change State**

These are views over related governed definitions, not six separate authorities.

## 3.3 Shared contextual inspector

Selecting any node/table/field/rule/surface/edge opens a shared inspector on desktop and a bottom sheet/full-screen detail panel on mobile.

The inspector should display, as applicable:

- canonical object ID/key;
- display label;
- object class;
- conceptual level;
- scientific/technical owner;
- authoritative source document/definition;
- semantic definition;
- requirement class/cardinality where scientifically governed;
- technical representation/table/column(s);
- upstream sources;
- downstream consumers;
- evidence/provenance obligations;
- applicable R/X/H/other requirements;
- QA/regression tests;
- version introduced/current/deprecated;
- migration/history state;
- current production surfaces using it once Task 9 supplies verified dependency data;
- warnings/no-merge constraints;
- bounded-subsystem status where applicable;
- links to related architecture objects.

The inspector must distinguish **authoritative value**, **architecture metadata**, **derived analytical object**, **synthesis object**, **provisional proposal**, and **external bounded-subsystem object**.

---

# 4. View A — Conceptual Architecture

Source basis: Task 2.3 Mermaid + Task 2.1/2.2 definitions.

## 4.1 Default composition

Display the eight permanent responsibility levels:

- L1 Primary Scientific Sources;
- L2 Bibliographic Identity & Corpus Registry;
- L3 Evidence & Provenance;
- L4 Verified Paper Scientific Knowledge;
- L5 Ontology, Taxonomy & Semantic Control;
- L6 Cross-Paper Intelligence & Analytical Semantics;
- L7 Curated Atlas Synthesis & Frameworks;
- L8 Atlas Experience, Tools & Integration Surfaces;

with the **Global QA / Versioning / Governance Plane** visibly surrounding/cross-cutting them and Computational Resources displayed as an adjacent independently governed subsystem connected through the bounded L8/G13 interface.

## 4.2 Required interactions

- expand/collapse a level into its Task 2.2 internal components;
- select a component to populate the inspector;
- toggle principal scientific flow;
- toggle semantic-control/feedback edges;
- toggle evidence/provenance drill-down edges;
- toggle global-governance overlay;
- toggle bounded-subsystem interfaces;
- focus one level while dimming unrelated objects;
- trace upstream/downstream from the selected object;
- search by component ID such as `L4-P13`, name, table, field or requirement.

## 4.3 Semantic visual rules

The visualization must communicate that:

- the architecture is **not a simple one-way ETL pipeline**;
- L5 controls semantics without owning all scientific facts;
- L3 evidence remains independently traceable after normalization;
- L6 analytics are not L7 official synthesis;
- L7 synthesis is not L4 paper fact or L5 canonical relation;
- L8 presentation/editing tools do not become scientific authorities;
- global governance applies across all levels.

Meaning must not depend on color alone; edge type, line style, labels, icons/patterns and textual legend must provide redundant cues.

---

# 5. View B — Technical ERD

Source basis: Task 2.4 provider-neutral DBML.

## 5.1 Purpose

Expose the logical relational implementation while preserving the distinction between relational serialization and scientific ownership.

## 5.2 Default behavior

Because the current ERD contains 108 tables and 151 explicit references, the page must **not render all technical detail at full density by default**.

Default presentation:

- group tables by L1–L8 / Global domain;
- show domain clusters first;
- progressively disclose tables;
- progressively disclose columns;
- expose relationship edges on focus/selection rather than drawing all 151 simultaneously;
- provide a mini-map/overview on wide screens when useful;
- provide a textual/table alternative.

## 5.3 Technical interactions

- search table/column;
- filter by architecture level/domain;
- show only direct neighbors of selected table;
- upstream/downstream lineage mode;
- paper-centric path mode (`papers` → scientific record → evidence/taxonomy → analytics/synthesis → surface);
- provenance-centric path mode (`source_artifacts` → evidence → linked record → synthesis/surface);
- semantic-control path mode (taxonomy/relationship registry → assertion/use → consumer);
- surface-consumer mode (`surface_registry` and dependencies);
- external-subsystem mode;
- hide derived/operational tables;
- highlight polymorphic links requiring QA/application enforcement.

## 5.4 Mandatory warnings

The ERD view must prominently state:

- DBML is provider-neutral and not final PostgreSQL DDL;
- a physical table is not automatically a scientific entity/owner;
- repeatable-array normalization is serialization;
- polymorphic scientific links require additional integrity enforcement;
- later Task 12 may refine technical implementation without changing scientific semantics.

---

# 6. View C — Authority & Provenance

## 6.1 Purpose

Answer **who owns this meaning and how can it be traced?**

## 6.2 Authority lanes

The view must expose the five non-overlapping scientific owners separately:

1. Canonical Schema / Field Dictionary;
2. Controlled Vocabularies;
3. Taxonomy Term & Alias Registry;
4. Relationship Registry;
5. Ontology Governance & Change Rules.

It should additionally show operational/supporting authorities such as bibliographic identity, evidence protocol, QA, architecture contract and bounded subsystem authority without implying that these replace the five scientific owners.

## 6.3 Provenance trace

For a selected object, the page should be able to render a lineage such as:

**source artifact → evidence record/locator → verified L4 record → taxonomy/relation semantics → eligible L6 analysis → reviewed L7 synthesis → L8 consumer surface**

with branches where the chain legitimately skips a level.

Required evidence-state distinctions include:

- author/source statement;
- normalized Atlas extraction;
- Atlas inference;
- Atlas synthesis;
- verification status;
- semantic support status;
- contradictory/mismatched evidence;
- unresolved ambiguity;
- not reported / not applicable / reported unavailable where relevant.

No provenance visualization may imply that absence is negative evidence or that verification equals support.

---

# 7. View D — Requirements & QA Coverage

Source basis: Task 1.6 matrix + Task 1.3/1.4/1.5.

## 7.1 Required coverage families

The view must expose at minimum:

- Task 1.1 authority/reconciliation requirements;
- Task 1.2 end-to-end objective obligations;
- **R1–R48** scientific invariants;
- **X1–X9** controlled extension classes;
- **H1–H11** hard gates;
- NDU/CMR and GO / CONDITIONAL GO / STOP / ROLLBACK rules;
- complete-surface/future-extension requirements.

The frozen matrix remains **111/111 mapped with specification orphan count 0** unless a later governed contract revision changes it.

## 7.2 Interactions

- filter by rule family;
- filter by level/owner/surface;
- show requirements protecting the selected architecture object;
- inverse lookup: choose a requirement and highlight every covered level/table/surface/test obligation;
- show QA/test status when real implementation tests exist later;
- distinguish **specified/mapped** from **implemented/tested/passed** so planning coverage is never mistaken for production readiness.

---

# 8. View E — Surface & Dependency Map

## 8.1 Current baseline

Until Task 9 produces a complete audit, this view must show the **26-route production register explicitly as an unaudited/partially audited preservation baseline**, not as a fully known dependency graph.

It must state clearly:

> 26 current routes = current-surface migration/preservation baseline, not final target IA and not route ceiling.

## 8.2 Required route classes

At minimum, users should be able to group the current baseline into:

- entry/navigation/support;
- bibliographic/publication intelligence;
- methodology/scientific knowledge;
- current software/data/resource surfaces;
- synthesis framework surfaces;
- controlled maintenance/review.

## 8.3 Future Task 9 enrichment

Once Task 9 supplies verified page audit data, each surface node should expose:

- route and purpose;
- implementation files;
- authoritative upstream sources;
- derived datasets/transformations;
- joining IDs;
- read/write behavior;
- mutation/review pathways;
- duplicated values/semantics;
- current/future owner;
- scripts/workflows/assets/search/navigation dependencies;
- inbound/outbound links;
- deep-link requirements;
- mobile/accessibility requirements;
- migration impact;
- regression tests;
- explicit disposition.

Disposition values include retain, redesign, merge, become child, rename, replace, compatibility redirect, or retire only after verified migration/regression closure.

## 8.4 Future-page extensibility

The map must contain a visible **Future / Unregistered Surface** concept so the visualization itself does not encode the 26-route ceiling.

New pages should enter through the L8 surface registry with purpose, owner, scope, IDs, read/write behavior, provenance, taxonomy dependencies, crosslinks, regeneration, QA and lifecycle declarations.

---

# 9. View F — Versions & Change State

## 9.1 Purpose

Prevent version conflation and make architecture evolution auditable.

## 9.2 Required version tracks

Display separate tracks for:

- source/document versions;
- bibliographic/data versions;
- record/extraction versions;
- scientific ontology/schema versions;
- taxonomy/relationship registry versions where separately released;
- synthesis/framework versions;
- architecture/Master Plan versions;
- database/migration versions once created;
- page/UI release versions;
- Computational Resources subsystem versions.

## 9.3 Change interactions

- choose an object and see version history;
- compare current versus historical architectural representation when data exists;
- expose migration/change rationale;
- show impacted consumers/dependencies;
- show QA/regression status;
- show rollback target/status where applicable;
- clearly label historical baselines as historical, not current authority.

The page must make visible that **Master Plan v1.0 is an implementation contract and is not scientific ontology v1.0/v0.8**.

---

# 10. Global search, filtering and selection model

## 10.1 Search domains

Global search should eventually cover:

- L1–L8 component IDs/names;
- G1–G14 governance objects;
- DBML tables/columns;
- canonical scientific field/entity names;
- taxonomy dimensions/terms and aliases where permitted;
- relation types;
- R/X/H requirement IDs;
- QA test IDs;
- synthesis/framework IDs;
- routes/surface IDs;
- version/change IDs;
- bounded subsystem IDs.

Search results must be grouped by object class and authority layer.

## 10.2 Filters

Common filters:

- conceptual level;
- object class;
- authority owner;
- scientific vs architecture vs derived vs synthesis vs provisional vs external;
- current/historical/proposed/deprecated state;
- verified/unresolved status where meaningful;
- current production vs future surface;
- subsystem.

## 10.3 Selection synchronization

A selected governed object should remain selected as the user switches compatible views. Example:

`physical_constraints[]` → L4 conceptual facet → relational child table(s) → Canonical Schema owner → R-rule/QA obligations → downstream Paper Profile/application/framework consumers.

This cross-view identity must be driven by stable keys, not text-label matching.

---

# 11. URL/deep-link state design

The future page should support reproducible, shareable states without requiring server-side mutation.

Recommended URL-state dimensions, subject to later implementation design:

- active view;
- selected object ID;
- optional focus level/domain;
- active filters;
- lineage direction/mode;
- optional version snapshot.

Examples are intentionally not frozen as production URLs in Task 2.5.

Requirements:

- browser back/forward must restore meaningful state;
- a deep link to an unavailable/deprecated object should degrade to a clear historical/not-found state rather than silently selecting a different object;
- copied links must not depend on transient layout coordinates;
- stable IDs, not display names, should anchor selection.

---

# 12. Desktop interaction design

Recommended wide-screen composition:

- top: title/version/search/view controls;
- left: collapsible filters/object navigator;
- center: primary visualization canvas;
- right: contextual inspector;
- optional bottom status/legend strip for lineage, warnings and source revisions.

The inspector should be resizable/collapsible. Dense technical views must support zoom/pan but also provide keyboard-accessible non-spatial alternatives.

---

# 13. Mobile and narrow-screen design

The page must remain functionally useful on mobile rather than shrinking a desktop graph.

Required mobile pattern:

- view selector as horizontally scrollable tabs or accessible select/menu;
- search first;
- filter drawer;
- visualization uses progressive disclosure / one focused neighborhood at a time;
- node selection opens bottom sheet or full-screen detail;
- ERD defaults to domain/table list and neighbor view rather than attempting to show 108 tables simultaneously;
- breadcrumb/back-to-parent control;
- explicit upstream/downstream lists as an alternative to edge tracing;
- no hover-only information;
- touch targets meet accessibility sizing expectations;
- landscape is supported but not required for basic use.

---

# 14. Accessibility requirements

Task 2.5 requires the future implementation to meet at least these design obligations:

- full keyboard operation for view switcher, search, filters, node/table navigation and inspector;
- logical focus order and visible focus indicator;
- semantic headings/landmarks;
- accessible names for controls/nodes;
- graphs have equivalent structured list/table representations;
- color is never the sole carrier of authority/status/edge semantics;
- adequate contrast;
- zoom does not cause essential content loss;
- reduced-motion preference respected;
- no hover-only interactions;
- screen-reader announcements for selection/view/filter changes where appropriate;
- errors, unavailable data and provisional states exposed textually;
- relationship/edge descriptions available in text form.

Accessibility is a release requirement, not decorative QA.

---

# 15. Performance and progressive disclosure

The architecture page may eventually visualize hundreds of objects and relationships. The design therefore requires:

- progressive loading/disclosure by view/domain;
- no all-at-once edge rendering for the 108-table/151-reference ERD by default;
- cached/precomputed graph/layout data where later justified;
- virtualized long lists/tables when needed;
- search/filter before rendering very large neighborhoods;
- deterministic fallbacks when graph rendering fails;
- a text/table mode that remains usable without advanced visualization.

Performance optimization must not remove provenance or authority information.

---

# 16. Scientific and architectural warnings

The page must use explicit contextual warnings where misinterpretation risk is material.

Mandatory examples:

- **Scientific authority:** visualization is not an ontology owner.
- **Conceptual vs physical:** conceptual level does not equal database schema/table.
- **Evidence:** verified evidence may contradict/mismatch; verification is not support.
- **Analytics:** frequency/count does not equal evidence strength.
- **Synthesis:** framework edge/matrix cell is not automatically a canonical paper relation or causal effect.
- **Routes:** current routes are baseline, not final IA/ceiling.
- **CR:** Computational Resources has independent internal governance.
- **Versions:** architecture version is not ontology version.
- **Technical ERD:** provider-neutral DBML is not deployed PostgreSQL DDL.

Warnings should be contextual and concise rather than permanently overwhelming the page.

---

# 17. Computational Resources boundary

The page may show the reserved future direction:

- Code & Software;
- Datasets;
- Frameworks & Libraries;
- Simulators & Solvers;
- Reproducibility Explorer.

But it must visually and textually mark this as an **independently governed subsystem / target-IA direction**.

Allowed Atlas-side visualization:

- subsystem identity/version;
- permitted shared keys/relations;
- bounded link/interface contract;
- dependency/consumer surfaces;
- reproducibility integration boundary.

Not allowed in Task 2.5 architecture design:

- importing Stage 1/2/3 CR internal schemas into Atlas scientific ownership;
- treating CR `Frameworks & Libraries` as the same thing as the four Atlas scientific synthesis frameworks;
- manufacturing equivalence between paper reproducibility and CR reproducibility records.

---

# 18. Read/write and security boundary

The initial Architecture & Data Map should be designed as **read-only**.

Future optional actions may include links such as "open in review tool", "open Dataset Manager", "open ontology proposal", or "view source definition", but the architecture page itself must not silently gain write authority.

If later write-capable controls are proposed, they require an explicit separate workflow design with:

- authenticated role;
- owning authority;
- proposal versus authoritative write distinction;
- human review state;
- audit trail;
- rollback;
- QA/regeneration consequences.

Task 2.5 authorizes none of those writes.

---

# 19. Source-of-truth and regeneration contract

The future page must be generated from shared version-controlled definitions rather than hand-maintained duplicate diagrams.

Task 2.5 establishes the consumption contract; **Task 2.6** is responsible for defining/reusing shared machine-readable architecture definitions so Mermaid, DBML-derived metadata, documentation and future UI validation do not drift.

Required future build metadata shown by the page should include:

- source artifact revisions/commits;
- architecture-contract version;
- ontology version represented;
- generation timestamp;
- validation status;
- stale/out-of-sync warning if inputs disagree.

No silently stale architecture map is acceptable.

---

# 20. Validation and regression requirements for future implementation

The future implementation cannot be accepted solely because the graph renders.

Minimum test families:

## 20.1 Source fidelity
- all eight levels present;
- Task 2.2 internal component counts/IDs represented;
- G1–G14 present;
- DBML table/reference metadata generated without orphan endpoints;
- five scientific owners kept distinct;
- 111 frozen requirements remain addressable;
- 26 current baseline routes represented until Task 9 supersedes/enriches the register.

## 20.2 Semantic-boundary sentinels
Test at minimum:
- claim vs demonstration;
- demonstrated vs related vs potential application;
- problem vs task vs challenge;
- contribution vs outcome;
- validation vs evaluation;
- limitation vs open problem vs future work vs Atlas gap;
- evidence verification vs support;
- relationship registry vs scientific relationship assertion;
- paper diagnostic pathway vs Atlas diagnostic synthesis;
- 98-cell synthesis vs canonical relation;
- architecture version vs ontology version;
- paper reproducibility vs CR reproducibility.

## 20.3 Interaction
- cross-view selection stays on same stable object;
- filter/search results are reproducible;
- URL/deep-link state restores correctly;
- historical/deprecated objects do not silently resolve to another object;
- lineage traces preserve direction and object class.

## 20.4 Surface preservation
- all current registered routes visible in baseline mode;
- future/unregistered-surface capability present;
- no route is marked retired absent Task 9 + migration/regression authorization.

## 20.5 Responsive/accessibility
- keyboard-only workflow;
- screen-reader structured alternative;
- mobile focused-neighborhood/table fallback;
- no color-only status semantics;
- no hover-only critical content.

## 20.6 Failure behavior
If Mermaid/ERD graph rendering fails, the page must still provide searchable structured lists/tables and source/revision information rather than failing blank.

---

# 21. Explicit non-goals / deferred work

Task 2.5 does **not**:

- implement the page;
- choose/finalize its production route;
- alter target site navigation;
- create HTML/CSS/JS/React/etc.;
- select a chart/graph library;
- choose a database provider;
- define final PostgreSQL DDL;
- create live APIs;
- execute Task 9 page auditing;
- replace Task 3 Paper Profile design;
- implement Task 15 prototype;
- create ontology/taxonomy changes;
- modify Computational Resources;
- create the Task 2.6 shared-definition artifact.

Task 15 remains the later **prototype implementation** stage for this page family. Task 2.5 is its design contract.

---

# 22. Design coverage check

PASS coverage:

- Task 2.1 eight levels = represented in page design;
- Task 2.2 component/field map = drill-down/inspector source;
- Task 2.3 Mermaid = Conceptual Architecture source;
- Task 2.4 DBML = Technical ERD source;
- global G1–G14 = governance/version/QA views and overlays;
- Task 1.6 requirements = dedicated Requirements & QA view;
- L3 evidence/provenance = dedicated authority/provenance lineage;
- L5 semantic control = separate owner/extension semantics;
- L6 analytics vs L7 synthesis = separate view semantics;
- L8 = explicit read-only consumer/workflow boundary;
- 26 current routes = baseline dependency view, not route ceiling;
- future page extensibility = explicit;
- Task 9 future audit enrichment = reserved;
- Computational Resources = bounded independent subsystem;
- mobile/responsive = specified;
- accessibility = specified;
- deep-link/shareable state = specified;
- failure/text fallback = specified;
- implementation/provider choices = deliberately deferred.

Design-contract orphan among Task 2.1–2.4 principal architecture domains: **0**.

---

# 23. Change boundary

Task 2.5 changes only planning/documentation state on `docs/master-atlas-roadmap` plus the Master Memory synchronization.

It does not modify:

- locked v0.7 Drive owner documents;
- production `main`;
- any production route/page/navigation;
- Computational Resources Stage 1/2/3 branches;
- a live database/provider;
- the 853-paper corpus;
- Mermaid/DBML scientific meaning;
- ontology/taxonomy/relationship scientific content.

---

# 24. Verdict

**PASS — Task 2.5 is complete.**

The future Atlas Architecture & Data Map now has a complete interaction/information design contract that exposes conceptual architecture, technical ERD, authority/provenance, frozen requirement/QA coverage, current/future surface dependencies, and version/change state without becoming a new scientific authority.

## Exact next action

Proceed only to **Task 2.6 — define and reuse shared machine-readable architecture definitions so the Mermaid architecture, technical ERD metadata, Task 2 documentation and future Architecture & Data Map UI can be generated/validated against a common controlled representation**, preventing cross-artifact drift.

**STOP BOUNDARY: Task 2.6 was not started.**
