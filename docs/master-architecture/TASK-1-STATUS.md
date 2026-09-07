# Task 1 — Status Register

Date: 2026-09-07

This register records execution status for Task 1 of `CONTROLLED-ROADMAP.md` without changing the scientific ontology or production Atlas data.

| Roadmap item | Status | Authoritative execution record |
|---|---|---|
| 1.1 Authoritative Reconciliation | **PASS — COMPLETE (surface scope clarified)** | `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md` + `ATLAS-PRODUCTION-SURFACE-REGISTER.md` |
| 1.2 Complete project objective | **PASS — COMPLETE (surface scope clarified)** | `TASK-1.2-COMPLETE-PROJECT-OBJECTIVE.md` + `ATLAS-PRODUCTION-SURFACE-REGISTER.md` |
| 1.3 Non-negotiable scientific rules | **PASS — COMPLETE** | `TASK-1.3-NON-NEGOTIABLE-SCIENTIFIC-RULES.md` |
| 1.4 Controlled dynamic-extension rules | **PASS — COMPLETE** | `TASK-1.4-CONTROLLED-DYNAMIC-EXTENSION-RULES.md` |
| 1.5 Operational scale-out acceptance gates | **PASS — COMPLETE** | `TASK-1.5-OPERATIONAL-SCALEOUT-ACCEPTANCE-GATES.md` |
| 1.6 Formal requirement/coverage matrix | **PASS — COMPLETE** | `TASK-1.6-REQUIREMENT-COVERAGE-MATRIX.md` |
| 1.7 Freeze Master Plan v1.0 | **NEXT** | Not started |

## Complete Atlas production-surface rule

`ATLAS-PRODUCTION-SURFACE-REGISTER.md` is a mandatory architectural input for the remainder of the roadmap.

The Master Architecture must consider the **complete Atlas production surface**, not only the 31-field PINN Ecosystem, the four Atlas frameworks, the Dataset Manager, or other highlighted scientific/implementation subsystems.

The current 26-route inventory is a **current-surface migration/preservation baseline**, not the final target information architecture and not a route ceiling. Task 9 must inspect the repository/site and add any additional production route, tool, generated surface, deep-link surface, or independently linked Atlas-facing consumer found at audit time.

The permanent architecture must also permit governed addition of future Atlas pages and page families. Current pages may later be retained, redesigned, merged, nested, renamed, replaced, redirected, or retired only after explicit dependency/migration/regression treatment.

The reserved future Computational Resources information-architecture direction remains:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

This does not authorize modification of Computational Resources Stage 1/2/3 branches.

## Task 1.1 completion boundary

Task 1.1 passed without modifying locked `v0.7-pilot-atlas-prefreeze`, production Atlas `main`, or any Computational Resources Stage 1/2/3 branch. Computational Resources remains an independently governed Atlas subsystem and bounded future architectural dependency, not a Task 1.1 scientific-authority input.

Task 1.1's deeper treatment of Ecosystem, frameworks, bibliography, Dataset Manager, and Master Memory must not be interpreted as exclusion of other Atlas pages. The complete production surface is an implementation dependency and preservation constraint; detailed per-page ownership/dependency analysis remains assigned to Task 9.

## Task 1.2 completion boundary

Task 1.2 formally defines the complete end-to-end project objective from primary scientific sources through bibliography, evidence/provenance, verified paper-level scientific knowledge, dynamic ontology, cross-paper intelligence, Atlas synthesis frameworks, user-facing pages/tools, ingestion/review, correction/history, architecture/documentation, storage responsibilities, scale-out, and ongoing governance.

Its phrase "complete existing Atlas" explicitly means every route in `ATLAS-PRODUCTION-SURFACE-REGISTER.md` plus any additional current production surface discovered later, while the permanent architecture remains open to future pages and page families.

Task 1.2 did not modify locked `v0.7-pilot-atlas-prefreeze`, production Atlas `main`, any Computational Resources Stage 1/2/3 branch, or any production database. Computational Resources remains a bounded future integration dependency rather than an absorbed Task 1 scientific workstream.

## Task 1.3 completion boundary

Task 1.3 formalizes 48 non-negotiable scientific and scientific-implementation invariants, derived from locked v0.7 governance plus the completed Task 1.1/1.2 authority/objective records and the full production-surface rule.

The rules cover authority; evidence/provenance; scientific-semantic separations; ambiguity/contradiction/novelty; identity and record granularity; synthesis/aggregation; AI-assisted extraction and human verification; serialization; complete current/future Atlas surfaces; Computational Resources integration boundaries; historical/version preservation; and research-quality acceptance.

Task 1.3 explicitly does **not** define Task 1.4 dynamic-extension mechanics or Task 1.5 numerical scale-out gates.

Any later architecture, schema, prototype, page, migration, ingestion workflow, synthesis system, or production release that violates a Task 1.3 invariant fails scientific acceptance even if technically functional.

No locked v0.7 scientific document, production `main` file, Computational Resources Stage 1/2/3 branch, production database, or ontology version was modified by Task 1.3.

## Task 1.4 completion boundary

Task 1.4 formalizes the controlled dynamic-extension lifecycle while keeping Task 1.3 R1–R48 mandatory.

It defines nine extension classes: existing adequate representation; source-local/paper-specific concept; provisional taxonomy/alias candidate; provisional relationship candidate; controlled/extensible value candidate; structural/schema candidate; synthesis-only extension; page/tool/information-architecture extension; and bounded-subsystem integration extension.

The required extension sequence is now: preserve evidence → search current owners → test semantic adequacy → normalize only when adequate → retain scoped/provisional meaning when not adequate → classify extension → record trigger/evidence → review recurrence/generalizability/analytical need → adjudicate → update only the correct owner in a candidate future version → changelog → migrate normalized records without rewriting source evidence → backward/regression QA → governed promotion.

Post-v0.7 canonical scientific additions or structural scientific changes require a later governed ontology version. Locked v0.7 is not silently mutated. Paper-specific/source-local/provisional information can remain preserved without being falsely presented as canonical v0.7 science.

Task 1.4 also formalizes alias scope, controlled/extensible-value handling, provisional/canonical relation handling, structural-home-first/schema-escalation rules, generalization-before-duplication, migration/history preservation, synthesis-only extension, future-page extensibility, and Computational Resources bounded integration.

Task 1.4 deliberately sets **no numerical scale-out thresholds, clean-mapping percentages, batch sizes, or unresolved-rate gates**; those belong to Task 1.5.

No locked v0.7 scientific document, production `main` file, Computational Resources Stage 1/2/3 branch, production database, route, page, or ontology version was modified by Task 1.4.

## Task 1.5 completion boundary

Task 1.5 restores and formalizes the operational scale-out readiness policy while treating Task 1.3 R1–R48 and Task 1.4 X1–X9 as non-bypassable constraints.

It defines a paper-scoped **Normalization Decision Unit (NDU)** so repeated mentions inside one paper do not inflate mapping statistics, and a **Clean Mapping Rate (CMR)** measuring whether NDUs can be represented under the existing governed structure without structural loss or semantic coercion.

CMR bands are now explicit:

- **GO:** CMR ≥95%, provided every hard gate passes and active major structural gaps = 0;
- **CONDITIONAL GO:** 90% ≤ CMR <95%, permitting only bounded additional qualification/adversarial work rather than unrestricted corpus widening;
- **STOP:** CMR <90%, or any hard-gate failure, or any active major structural gap.

CMR counts X1–X5 as clean structural mapping when the current governed structure preserves scientific meaning. Legitimate source-local/paper-specific/provisional concepts are therefore not penalized merely because they are noncanonical. X6 structural specialization, unresolved structural-owner ambiguity, or representation requiring information loss is not clean mapping.

Eleven hard gate families H1–H11 require, as applicable: zero forced mappings; 100% provenance completeness for accepted verified evidence-bound scientific records; 100% human scientific review coverage for verified/published scientific records; evidence/history immutability; 100% identity/referential integrity; Task 1.3 semantic-boundary regression; conflict/mismatch/ambiguity preservation; zero ineligible positive-synthesis contamination; zero active major structural gaps; complete 36-paper/eight-sentinel/A6/no-merge/framework regression; and explicit batch checkpoint/publication readiness.

Task 1.5 does **not** set future batch size, start Task 20/21, choose infrastructure, change ontology version, or authorize production extraction.

No locked v0.7 scientific document, production `main` file, Computational Resources Stage 1/2/3 branch, production database, route, page, migration, or ontology version was modified by Task 1.5.

## Task 1.6 completion boundary

Task 1.6 creates the formal implementation-contract coverage matrix without claiming that downstream implementation is already complete.

The matrix contains **111 explicit contract requirements**: 11 Task 1.1 authority/reconciliation requirements, 20 Task 1.2 project-objective obligations, all **48/48** Task 1.3 invariants, all **9/9** Task 1.4 extension classes, all **11/11** Task 1.5 hard gates, five NDU/CMR/disposition rules, and seven complete-surface/future-extension rules.

Every row identifies its owner, required representation, evidence/provenance obligation, QA/acceptance path, downstream roadmap/consumer coverage, and coverage state. **Specification orphan count = 0.**

The matrix additionally enumerates the current **26/26** registered production routes and binds every route to the mandatory Task 9 audit. It explicitly preserves the rule that the route list is a current preservation/migration baseline rather than final target information architecture or a route ceiling. New/discovered surfaces extend the Task 9 audit inventory.

The reserved future Computational Resources hierarchy remains a bounded target-information-architecture direction, and the matrix does not import or modify Computational Resources Stage 1/2/3 schemas.

Task 1.6 also provides a requirement-to-roadmap handoff map for Tasks 2–22 and a Task 1.7 freeze safeguard. PASS means the Master Plan specification has no orphan requirement; it does not mean Tasks 2–22 are implemented.

No locked v0.7 scientific document, production `main` file, Computational Resources Stage 1/2/3 branch, production database, route, page, migration, or ontology version was modified by Task 1.6.

## Master Plan freeze safeguard

Task 1.7 must not freeze Master Plan v1.0 unless final readback confirms Task 1.1–1.6 are mutually consistent; locked v0.7 remains unchanged; R1–R48, X1–X9, H1–H11 and the NDU/CMR dispositions remain covered; Task 1.6 orphan count remains zero; the current 26-route production surface remains an audit/preservation baseline rather than final IA; Task 9 remains mandatory for every registered and later-discovered production surface; the Computational Resources hierarchy remains bounded and independently governed; future pages remain open-ended but governed; and no downstream implementation/provider/migration/ontology-version decision is falsely presented as completed.

## Exact next action

Proceed only to **Task 1.7 — Freeze Master Plan v1.0 as the implementation contract, not as a new ontology version**, by performing a final Task 1.1–1.6 consistency/readback audit, confirming the Task 1.6 orphan count remains zero and the complete-surface/future-extension safeguards remain present, recording the freeze decision, synchronizing the Master Memory, and stopping before Task 2.
