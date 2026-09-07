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
| 2.5 Design interactive Atlas Architecture & Data Map page | **NEXT** | Not started |
| 2.6 Reuse shared architecture definitions for dependent documentation/UI validation | **PENDING** | Not started |

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

Task 2.2 expands L1–L8 and the global plane into complete conceptual component/field maps while preserving locked ownership.

Key Task 2.2 results remain:

- locked v0.7 structural families assigned = **21/21**;
- structural-family orphan count = **0**;
- Task 2.1 conceptual requirement-family orphan count = **0**;
- additional L4 completeness candidates reviewed = **15/15**;
- new v0.7 scientific fields/entities created = **0**;
- rejected/deferred structures revived = **0**;
- current major paper-extraction structural gap discovered = **0**.

## Task 2.3 completion boundary

Task 2.3 adds the version-controlled Mermaid conceptual source:

`docs/master-architecture/atlas-conceptual-architecture.mmd`

and the execution/readback record:

`docs/master-architecture/TASK-2.3-MERMAID-CONCEPTUAL-ARCHITECTURE.md`.

Mermaid coverage:

- conceptual levels L1–L8 = **8/8**;
- L1 internal groups = **4/4**;
- L2 = **5/5**;
- L3 = **7/7**;
- L4 permanent conceptual domains/facets = **20/20**;
- L5 = **7/7**;
- L6 = **6/6**;
- L7 = **8/8**;
- L8 = **9/9**;
- global governance G1–G14 = **14/14**;
- Computational Resources bounded subsystem = represented explicitly.

## Task 2.4 completion boundary

Task 2.4 adds the provider-neutral relational source:

`docs/master-architecture/atlas-technical-erd.dbml`

and execution/readback record:

`docs/master-architecture/TASK-2.4-DBML-TECHNICAL-ERD.md`.

Technical-ERD validation:

- DBML tables = **108**;
- explicit DBML references = **151**;
- duplicate tables = **0**;
- duplicate columns within tables = **0**;
- tables without a primary key = **0**;
- unresolved table/column reference endpoints = **0**;
- block/brace imbalance = **0**.

The DBML normalizes repeatable v0.7 structures into relational child/link tables without creating new scientific owners or reviving rejected/deferred fields. L3 evidence, L4 verified science, L5 semantic control, L6 analytics, L7 synthesis, L8 surfaces, and G1–G14 governance remain distinguishable.

`scientific_relationships` is separate from `relationship_registry`; framework/synthesis tables remain separate from paper-level scientific relationship assertions. Computational Resources is represented only by bounded subsystem/interface tables and retains independent internal governance.

The source is deliberately provider-neutral. PostgreSQL-specific DDL, ID types, indexes, triggers/RLS, physical polymorphic enforcement, JSONB trade-offs, search infrastructure, partitioning and provider selection are deferred to later Tasks 11–13 / Task 12.

Current 26 production routes remain a preservation/migration baseline rather than final target IA. Task 9 remains mandatory for registered and later-discovered surfaces. Future pages remain open-ended but governed.

No locked v0.7 scientific document, production `main` file, Computational Resources Stage 1/2/3 branch, production database, migration, extraction, or Atlas page implementation was modified by Task 2.4.

## Exact next action

Proceed only to **Task 2.5 — design the interactive Atlas Architecture & Data Map page**, consuming Tasks 2.1–2.4 while preserving scientific authority/provenance and without yet performing production implementation.
