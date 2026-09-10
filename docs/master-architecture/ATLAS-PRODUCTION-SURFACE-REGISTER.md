# Atlas Production Surface Register

Status: **MANDATORY ARCHITECTURAL INPUT**

Date: 2026-09-07

Purpose: prevent the Master Atlas Architecture roadmap from narrowing its scope to only the PINN Ecosystem, four frameworks, Dataset Manager, or other highlighted subsystems. The complete production Atlas surface must be preserved, mapped, dependency-audited, and regression-tested before production migration, while remaining free to evolve into a new information architecture.

This register clarifies Task 1.1 and Task 1.2. It does not modify the locked scientific ontology, production `main`, or any independently governed Computational Resources branch.

## 1. Current-surface baseline — migration/preservation inventory

The following routes are explicitly in scope as the **CURRENT-SURFACE BASELINE** for Master Architecture planning, migration preservation, and later Atlas-wide dependency auditing:

1. `/`
2. `/pinn-ecosystem/`
3. `/architectures/`
4. `/activation-functions/`
5. `/training/`
6. `/optimizers/`
7. `/performance-metrics/`
8. `/mathematical-formulations/`
9. `/pinn-types/`
10. `/abbreviations/`
11. `/pinn-realm/`
12. `/applications/`
13. `/references/`
14. `/software/`
15. `/datasets/`
16. `/frameworks/`
17. `/frameworks/design-stack/`
18. `/frameworks/co-design/`
19. `/frameworks/design-performance/`
20. `/frameworks/failure-diagnostics/`
21. `/dataset-manager/`
22. `/dataset-manager/review/`
23. `/references/changelog/`
24. `/cite/`
25. `/privacy/`
26. `/404.html`

These 26 routes are a **preservation and migration baseline, not the final target information architecture and not a route ceiling**. Roadmap Task 9 must discover and add any additional current production route, page, tool, generated view, deep-link surface, or independent Atlas-facing consumer that exists in the repository/site at audit time.

## 2. Current surface versus target information architecture

The Master Architecture must keep three concepts distinct:

1. **Current production surface** — every route/page/tool that exists now and must not be accidentally lost, disconnected, or semantically corrupted during redesign or migration.
2. **Target Atlas information architecture** — the future organization of capabilities after dependency audit and architecture design. Current pages may be retained, redesigned, merged, nested under a parent, renamed, replaced by a dynamic explorer, or retained only as compatibility routes.
3. **Future extensible surface** — new pages, explorers, profiles, synthesis tools, architecture views, governance tools, and later scientific capabilities that do not exist in the current 26-route baseline.

Therefore, the current route inventory must never be interpreted as the permanent menu, final hierarchy, or maximum number of Atlas pages.

## 3. Reserved future Computational Resources information architecture

The independently governed Computational Resources workstream already preserves a preferred future Atlas organization:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

This is a **reserved target-information-architecture direction**, not an instruction to implement or modify the Computational Resources branches during Task 1.

Architectural consequences:

- current `/software/` and `/datasets/` routes must not be assumed to remain permanent top-level destinations;
- later architecture work may map them into the Computational Resources hierarchy, preserve them as redirects/compatibility routes, or otherwise reorganize them after evidence-based Task 9 auditing;
- Frameworks & Libraries under Computational Resources is a resource/software category and must not be confused with the Atlas scientific synthesis framework family under `/frameworks/`;
- the future Reproducibility Explorer may consume both paper-level reproducibility records and Computational Resources evidence only through an explicitly governed integration boundary;
- no current route is retired merely because a preferred future hierarchy exists; migration requires dependency, cross-link, deep-link, and regression checks first.

## 4. Open-ended future-page rule

The Atlas is expected to grow beyond the current route set. The permanent architecture must therefore support governed addition of new pages and page families without requiring a redesign of the scientific ontology, database, navigation model, or whole site for each addition.

Future additions may include, for example, Paper Profiles, Architecture & Data Map views, single-dimension and cross-dimensional explorers, reproducibility views, research-gap/opportunity explorers, diagnostic explorers, controlled builders, new scientific framework views, or capabilities not yet anticipated.

A new page must declare, as applicable:

- purpose and user role;
- authoritative upstream data owner(s);
- paper-level versus synthesis-level scope;
- identifiers/keys used;
- read-only versus write behavior;
- evidence/provenance requirements;
- dependencies on shared taxonomy/relationship definitions;
- navigation and cross-link placement;
- update/regeneration behavior;
- QA/regression obligations;
- lifecycle/retirement policy.

New pages are therefore open-ended, but their integration is governed rather than ad hoc.

## 5. Task 1.1 clarification

Task 1.1's highlighted reconciliation subjects — the 31-field PINN Ecosystem, four Atlas scientific frameworks, current bibliographic layer, Dataset Manager, verified bibliography, and Master Memory — are not the full Atlas page inventory.

For authoritative reconciliation purposes:

- the entire production Atlas is an implementation dependency and preservation constraint;
- the highlighted subjects were examined more deeply because they carry important scientific, synthesis, editing, or ownership semantics;
- unhighlighted pages are **not excluded** from the Master Architecture;
- no page may be rebuilt, dropped, silently disconnected, or assigned new data ownership merely because it was not individually analyzed in Task 1.1;
- detailed page-by-page source/write/dependency classification remains assigned to Task 9.

Task 1.1 PASS therefore means the scientific and architectural authority boundaries are reconciled sufficiently to continue planning; it does **not** mean every production page has already been dependency-audited.

## 6. Task 1.2 clarification

Task 1.2's objective to integrate the "complete existing Atlas" means all routes in the current-surface baseline, plus any later discovered production surfaces, while explicitly allowing a redesigned target information architecture and future new pages.

The project objective is therefore not limited to new scientific pages or the principal synthesis systems. It must preserve and correctly integrate existing public, analytical, methodological, bibliographic, governance, editorial, support, navigation, legal, and fallback surfaces while enabling their governed reorganization.

All future Master Plan requirements must be checked for impact on the complete production surface and compatibility with future surface extension.

## 7. Required Task 9 audit and disposition for every page/tool

For every current route or production surface, Task 9 must determine at minimum:

- route/page identity and purpose;
- current implementation files;
- authoritative upstream data sources;
- generated/derived datasets and transformations;
- paper IDs, taxonomy IDs, framework IDs, resource IDs, or other joining keys used;
- read-only versus write-capable behavior;
- forms, issue/request workflows, review interfaces, or other mutation pathways;
- duplicated values and duplicated scientific semantics;
- current ownership of each displayed value;
- future single-source owner for each value;
- relationship to locked ontology, bibliography, synthesis, or independently governed subsystems;
- dependencies on scripts, workflows, assets, indexes, search, navigation, and deployment;
- outbound and inbound cross-links;
- deep links and route stability requirements;
- mobile/responsive requirements;
- accessibility and fallback behavior where applicable;
- migration impact;
- regression tests needed before production cutover.

Each audited current route must also receive an explicit future disposition, chosen from or equivalent to:

- **retain**;
- **redesign**;
- **merge**;
- **become child of another section**;
- **rename**;
- **replace with a new dynamic page/explorer**;
- **retain as compatibility/deep-link redirect**;
- **retire only after verified migration and regression closure**.

Disposition decisions must be evidence-based and must not silently discard data ownership, scientific meaning, inbound links, user workflows, or historical URLs.

## 8. Initial functional grouping

The grouping below describes the **current baseline only**. It is organizational and does not confer scientific authority or freeze the target navigation hierarchy.

### Atlas entry/navigation and support
- `/`
- `/cite/`
- `/privacy/`
- `/404.html`

### Bibliographic and publication intelligence
- `/references/`
- `/references/changelog/`
- `/pinn-realm/`

### Methodology / scientific knowledge surfaces
- `/pinn-ecosystem/`
- `/architectures/`
- `/activation-functions/`
- `/training/`
- `/optimizers/`
- `/performance-metrics/`
- `/mathematical-formulations/`
- `/pinn-types/`
- `/abbreviations/`
- `/applications/`

### Current software/data/resource-oriented surfaces
- `/software/`
- `/datasets/`

These current routes must be audited against the reserved future Computational Resources hierarchy rather than presumed to remain top-level.

### Synthesis frameworks
- `/frameworks/`
- `/frameworks/design-stack/`
- `/frameworks/co-design/`
- `/frameworks/design-performance/`
- `/frameworks/failure-diagnostics/`

### Controlled maintenance/review
- `/dataset-manager/`
- `/dataset-manager/review/`

## 9. Preservation and evolution rule

No Master Architecture, database, ontology-serialization, ingestion, migration, navigation, or page redesign decision is complete until its impact on the full current Atlas production surface **and on future page extensibility** has been considered.

A page may ultimately remain independent, become a relational-database consumer, become a synthesis consumer, move under a parent subsystem, become a dynamic explorer, remain a static/support page, or be replaced — but that status must be decided explicitly from the Task 9 audit and later migration planning, not assumed from Task 1 examples or today's navigation.

## 10. Roadmap consequence

This register is a mandatory input to:

- Task 1.3–1.7, where relevant to scientific rules, dynamic extension, acceptance gates, coverage, and Master Plan freeze;
- Task 2 permanent architecture and target information-architecture design;
- Task 3 Paper Profile cross-link planning;
- Task 4–8 scientific explorers/frameworks;
- **Task 9 complete page/data dependency audit and future route disposition**;
- Task 10 correction propagation;
- Tasks 12–18 database/UI prototypes and regression reconciliation;
- Tasks 19–20 migration and production pilot;
- Task 22 lifecycle maintenance and addition of new Atlas tools/pages.

## 11. Completion safeguard

Master Plan v1.0 must not be frozen under Task 1.7 unless the requirement/coverage work explicitly:

1. recognizes the complete current Atlas production surface;
2. preserves the mandatory Task 9 page/data dependency audit;
3. distinguishes current routes from the target information architecture;
4. preserves the reserved Computational Resources future hierarchy as a bounded integration requirement;
5. supports governed addition of future pages/tools without treating the current route register as a ceiling.
