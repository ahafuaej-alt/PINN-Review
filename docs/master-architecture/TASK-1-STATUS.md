# Task 1 — Status Register

Date: 2026-09-07

This register records execution status for Task 1 of `CONTROLLED-ROADMAP.md` without changing the scientific ontology or production Atlas data.

| Roadmap item | Status | Authoritative execution record |
|---|---|---|
| 1.1 Authoritative Reconciliation | **PASS — COMPLETE (surface scope clarified)** | `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md` + `ATLAS-PRODUCTION-SURFACE-REGISTER.md` |
| 1.2 Complete project objective | **PASS — COMPLETE (surface scope clarified)** | `TASK-1.2-COMPLETE-PROJECT-OBJECTIVE.md` + `ATLAS-PRODUCTION-SURFACE-REGISTER.md` |
| 1.3 Non-negotiable scientific rules | **PASS — COMPLETE** | `TASK-1.3-NON-NEGOTIABLE-SCIENTIFIC-RULES.md` |
| 1.4 Controlled dynamic-extension rules | **PASS — COMPLETE** | `TASK-1.4-CONTROLLED-DYNAMIC-EXTENSION-RULES.md` |
| 1.5 Operational scale-out acceptance gates | **NEXT** | Not started |
| 1.6 Formal requirement/coverage matrix | Pending | Not started |
| 1.7 Freeze Master Plan v1.0 | Pending | Not started |

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

## Master Plan freeze safeguard

Task 1.7 must not freeze Master Plan v1.0 unless Task 1.6 coverage work recognizes the full production-surface register and maps both the Task 1.3 non-negotiable scientific rules and Task 1.4 controlled-extension lifecycle into the implementation/QA coverage contract while preserving the mandatory Task 9 page/data dependency audit.

## Exact next action

Proceed only to **Task 1.5 — Restore/formalize operational scale-out acceptance gates**, using `TASK-1.3-NON-NEGOTIABLE-SCIENTIFIC-RULES.md` and `TASK-1.4-CONTROLLED-DYNAMIC-EXTENSION-RULES.md` as mandatory constraints.