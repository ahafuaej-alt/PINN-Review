# Task 2 — Status Register

Date: 2026-09-07

Status: **IN PROGRESS**

Parent contract: frozen Master Plan v1.0 (`TASK-1.7-MASTER-PLAN-V1.0-FREEZE.md`).

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

| Roadmap item | Status | Authoritative execution record |
|---|---|---|
| 2.1 Define full eight-level conceptual architecture plus global QA/versioning/governance | **PASS — COMPLETE** | `TASK-2.1-EIGHT-LEVEL-CONCEPTUAL-ARCHITECTURE.md` |
| 2.2 Expand every major level into complete internal components and fields | **PASS — COMPLETE** | `TASK-2.2-COMPLETE-INTERNAL-COMPONENTS-AND-FIELDS.md` |
| 2.3 Create version-controlled Mermaid architecture source | **PASS — COMPLETE** | `TASK-2.3-MERMAID-CONCEPTUAL-ARCHITECTURE.md` + `atlas-conceptual-architecture.mmd` |
| 2.4 Create version-controlled DBML/technical ERD source | **PASS — COMPLETE** | `TASK-2.4-DBML-TECHNICAL-ERD.md` + `atlas-technical-erd.dbml` |
| 2.5 Design interactive Atlas Architecture & Data Map page | **PASS — COMPLETE** | `TASK-2.5-INTERACTIVE-ARCHITECTURE-DATA-MAP-DESIGN.md` |
| 2.6 Reuse shared architecture definitions for dependent documentation/UI validation | **NEXT** | Not started |

## Task 2.1 architecture boundary

The permanent conceptual Atlas architecture remains eight logical responsibility/authority levels surrounded by a global QA/versioning/governance plane:

1. Primary Scientific Sources;
2. Bibliographic Identity & Corpus Registry;
3. Evidence & Provenance;
4. Verified Paper Scientific Knowledge;
5. Ontology, Taxonomy & Semantic Control;
6. Cross-Paper Intelligence & Analytical Semantics;
7. Curated Atlas Synthesis & Frameworks;
8. Atlas Experience, Tools & Integration Surfaces.

The global plane preserves scientific authority, evidence/provenance, human verification, R1–R48 semantic boundaries, X1–X9 controlled extension, H1–H11 QA, NDU/CMR scale-out gates, version separation, correction/history/rollback, stable identity, dependency propagation, access/write governance, full production-surface preservation, and Computational Resources bounded-subsystem governance.

## Task 2.2 completion boundary

Key results remain:

- locked v0.7 structural families assigned = **21/21**;
- structural-family orphan count = **0**;
- Task 2.1 conceptual requirement-family orphan count = **0**;
- additional L4 completeness candidates reviewed = **15/15**;
- new v0.7 scientific fields/entities created = **0**;
- rejected/deferred structures revived = **0**;
- current major paper-extraction structural gap discovered = **0**.

## Task 2.3 completion boundary

Version-controlled Mermaid source:

`docs/master-architecture/atlas-conceptual-architecture.mmd`

Mermaid coverage remains:

- conceptual levels L1–L8 = **8/8**;
- L1 = **4/4**;
- L2 = **5/5**;
- L3 = **7/7**;
- L4 permanent conceptual domains/facets = **20/20**;
- L5 = **7/7**;
- L6 = **6/6**;
- L7 = **8/8**;
- L8 = **9/9**;
- global governance G1–G14 = **14/14**;
- Computational Resources bounded subsystem represented explicitly.

## Task 2.4 completion boundary

Provider-neutral relational source:

`docs/master-architecture/atlas-technical-erd.dbml`

Technical-ERD validation remains:

- DBML tables = **108**;
- explicit DBML references = **151**;
- duplicate tables = **0**;
- duplicate columns = **0**;
- tables without primary key = **0**;
- unresolved reference endpoints = **0**;
- block/brace imbalance = **0**.

The DBML remains provider-neutral and does not redefine scientific ownership.

## Task 2.5 completion boundary

Task 2.5 defines the future **Atlas Architecture & Data Map** as a read-only L8 architecture-observability surface rather than a new scientific authority.

The design specifies six coordinated primary views:

1. Conceptual Architecture;
2. Technical ERD;
3. Authority & Provenance;
4. Requirements & QA Coverage;
5. Surface & Dependency Map;
6. Versions & Change State.

It also defines:

- shared stable-ID selection and contextual inspector;
- cross-view tracing from source/evidence to verified science, semantic control, analytics, synthesis and surfaces;
- progressive disclosure for the 108-table/151-reference ERD;
- explicit five-owner authority presentation;
- R1–R48 / X1–X9 / H1–H11 / 111-requirement coverage lookup;
- the 26-route production surface as a preservation baseline, not a route ceiling;
- Task 9 dependency-audit enrichment without pretending that audit is already complete;
- future-page extensibility;
- bounded Computational Resources integration;
- responsive/mobile behavior;
- accessibility and text/table fallbacks;
- shareable/deep-link state based on stable IDs;
- version separation and change-history visibility;
- explicit read-only/write-governance boundary;
- failure/regression requirements for the later prototype.

Design-contract orphan among Task 2.1–2.4 principal architecture domains = **0**.

Task 2.5 did **not** implement a page, choose/freeze a route, alter navigation, select a visualization library, select a database provider, execute Task 9, modify production `main`, or create shared machine-readable definitions.

Current 26 production routes remain a preservation/migration baseline rather than final target IA. Task 9 remains mandatory for registered and later-discovered surfaces. Future pages remain open-ended but governed.

## Exact next action

Proceed only to **Task 2.6 — define and reuse shared machine-readable architecture definitions so the Mermaid architecture, technical ERD metadata, Task 2 documentation and future Architecture & Data Map UI can be generated/validated against a common controlled representation**, preventing cross-artifact drift.
