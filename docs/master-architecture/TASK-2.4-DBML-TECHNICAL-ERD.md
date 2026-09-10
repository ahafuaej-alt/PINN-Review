# Task 2.4 — Provider-Neutral DBML / Technical ERD

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.4

Branch: `docs/master-atlas-roadmap`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Controlling implementation contract: frozen Master Plan v1.0 + Task 2.1 eight-level conceptual architecture + Task 2.2 complete internal component/field map + Task 2.3 Mermaid conceptual source.

Authoritative technical source:

`docs/master-architecture/atlas-technical-erd.dbml`

Source creation commit: `8affea7f8dc11e5688b5bc1700e1bad1aeea4c01`

Verified source blob SHA: `f617304f1031e707d7ca7547637c4911368282cc`

## 1. Scope and interpretation

Task 2.4 translates the accepted conceptual architecture into a **provider-neutral logical relational/technical ERD**. It is an implementation serialization design, not a scientific ontology version and not yet the final PostgreSQL schema of Task 12.

The DBML intentionally does **not** select Supabase, Neon, PostgreSQL hosting, or another provider. Concrete SQL types, UUID strategy, indexes, partial indexes, triggers, RLS, partitioning, generated columns, full-text/vector search, materialized-view strategy, provider extensions, retention policies, and deployment migrations remain later design/prototype decisions.

Scientific meaning continues to be owned by the locked v0.7 five-owner package. The DBML must conform to those owners rather than redefine them.

## 2. Relational translation rules

1. **Canonical scalar fields remain scalar columns where practical.**
2. **Repeatable canonical arrays/objects may become child or link tables** when this improves multiplicity, traceability and querying. This is serialization, not a new scientific entity decision.
3. **No rejected/deferred v0.7 field is revived.** Mandatory `study_component_id`, `physical_knowledge_representation[]` and competing `solution_postprocessing[]` remain absent; richer `domain_decomposition_method[]` structure remains deferred.
4. **Evidence is first-class and immutable at source level.** `verbatim_evidence`, original locator, source role and conflict/mismatch history are not overwritten by normalized reclassification.
5. **Polymorphic scientific linkage is explicit rather than faked.** Canonical `linked_entity_type + linked_record_id` and source/target scientific relationship IDs remain polymorphic and therefore require application/QA referential validation in addition to ordinary relational FKs.
6. **Taxonomy/vocabulary/relationship registries remain semantic owners.** Technical links to terms/provisional terms are explicit where high-value; not every controlled scalar is forced into a physical FK at this provider-neutral stage.
7. **L6 analytical outputs are derived products, not paper facts.**
8. **L7 framework/gap/opportunity tables are synthesis structures, not L4 facts or L5 canonical relations.**
9. **L8 surfaces are consumers/workflow interfaces.** `surface_registry` models current/future pages without freezing the present 26 routes as a permanent route ceiling.
10. **Computational Resources remains independently governed.** The ERD contains only `bounded_subsystems` and `subsystem_entity_links`; it does not copy Stage 1/2/3 CR internal schemas into the Atlas scientific model.

## 3. Major technical domains represented

### L1 — source layer
`source_artifacts`, `paper_sources`.

### L2 — bibliographic identity/corpus
`papers`, `paper_authors`, `paper_bibliographic_metadata`, `bibliographic_history`, `paper_study_design_components`, review-scope identity structures.

### L3 — evidence/provenance
`evidence`, `evidence_classification_history`, `scientific_conflicts`, `conflict_evidence`.

### L4 — verified paper science
Relational families cover applications, problems/equations/constraints/problem characteristics/data regimes/PINN challenges, contributions/claims, outcomes, validation, the methodological feature set and its structured children, evaluation results/test cases, reproducibility, operational reproduction attempts, diagnostic pathways/components/evidence, limitations, open problems, future work and extraction control.

The methodological implementation explicitly represents the v0.7 additions including `model_variable_representation[]`, `network_configuration[]`, `training_protocol[]`, `parallel_execution[]`, `loss_weighting_method[]`, `fidelity_source_role[]`, `derived_output_method[]`, problem characteristics, data regimes and physical constraints without merging their scientific meanings.

### L5 — semantic control
Controlled-vocabulary registries, taxonomy terms/aliases/provisional terms, relationship type registry, source-supported scientific relationship assertions, no-merge rules, X1–X9 extension proposals and ontology changelog/support tables.

`scientific_relationships` is deliberately distinct from `relationship_registry`: the registry defines allowable relation semantics; relationship assertions record evidence-scoped use of those semantics.

### L6 — cross-paper intelligence
`dimension_catalog`, `analysis_specs`, `analysis_results`, support/provenance links, analytical integrity findings and research gap/opportunity candidate signals.

### L7 — Atlas synthesis/frameworks
General synthesis/support tables, v0.7 Atlas research gaps/opportunities plus support sets, framework definitions/nodes/edges/support, the Design–Performance cells/support and diagnostic synthesis/support.

The 14×7/98-cell matrix remains synthesis-level. Framework edges do not become canonical paper relations merely because they are stored relationally.

### L8 — surfaces/integration
`surface_registry`, `surface_dependencies`, `interface_registry`, controlled `review_requests`, `bounded_subsystems`, and `subsystem_entity_links`.

### Global QA/versioning/governance
The ERD includes technical registries for authority, frozen requirements, QA tests/runs, human reviews, versions, migrations/impact, batches/CMR dispositions, correction history, dependency propagation, role permissions and reproducible knowledge builds.

These tables operationalize G1–G14; they do not create a new scientific authority.

## 4. Cardinality and multiplicity decisions

The locked v0.7 cardinalities remain the baseline:

- `papers` → applications/problems/contributions/outcomes/validation/methodological feature sets/evaluation results/diagnostic pathways/limitations/open problems/future work/evidence = primarily **1:N**;
- `papers` → reproducibility = **1:0..1**;
- `papers` → extraction control = **1:1**;
- evidence ↔ Atlas synthesis support = **many-to-many through explicit support tables**;
- taxonomy term ↔ normalized records = **1:N or N:M depending on dimension**;
- framework/synthesis support uses explicit join tables so supporting, contradictory and mismatched evidence are not collapsed.

Materially distinct test cases, configurations, diagnostic components and evidence objects therefore remain separately addressable.

## 5. Provider-neutral technical choices deliberately deferred

Task 2.4 does not decide:

- PostgreSQL-specific DDL;
- concrete ID datatype (`uuid`, text keys, sequences, etc.);
- JSONB versus fully normalized substructures where a later prototype demonstrates a better trade-off;
- physical indexes/constraints beyond DBML PK/FK/unique declarations;
- polymorphic-link enforcement mechanism;
- temporal/history implementation pattern;
- row-level security/auth provider;
- caching/materialized views;
- search/vector indexing;
- partitioning/archive strategy;
- database/provider deployment topology.

Those decisions require Tasks 11–13 and especially Task 12's actual PostgreSQL model/prototype evidence.

## 6. Structural validation

The committed DBML was read back and mechanically checked for structural integrity.

Results:

- DBML tables = **108**;
- explicit DBML `Ref` relationships = **151**;
- duplicate table names = **0**;
- duplicate column names within a table = **0**;
- tables without a primary key = **0**;
- unresolved referenced table/column endpoints = **0**;
- block/brace imbalance = **0**.

A native DBML compiler is not available in the current execution environment, so this result is a structural/source validation rather than a claim that provider-specific SQL generation has already been executed. Compilation and generated-DDL validation belong to the later technical prototype/Task 12–13 path.

## 7. Scientific boundary regression

PASS:

- locked v0.7 remains scientific authority;
- no new ontology version created;
- all 21 locked structural families remain representable;
- evidence remains separate from normalized science and synthesis;
- claim ≠ demonstration;
- demonstrated/related/potential applications remain separable;
- physical problem ≠ computational task ≠ PINN challenge;
- contribution ≠ outcome;
- validation ≠ evaluation;
- limitation ≠ open problem ≠ future work ≠ Atlas gap;
- paper relationship assertions ≠ framework relationships;
- L6 analytics ≠ L7 official synthesis;
- framework matrix/diagnostic synthesis ≠ L4/L5 authority;
- provisional/X1–X9 lifecycle remains explicit;
- 26 current routes remain a migration baseline, not a route ceiling;
- Computational Resources remains a bounded external subsystem.

## 8. Change boundary

Task 2.4 changed only planning/architecture files on `docs/master-atlas-roadmap` plus the Master Memory synchronization that follows this record.

It did **not** modify:

- locked v0.7 Drive owner documents;
- production `main`;
- Computational Resources Stage 1/2/3 branches;
- production Atlas data/pages;
- any live database;
- the 853-paper corpus records;
- ontology/taxonomy/relationship scientific content;
- provider configuration.

## 9. Verdict

**PASS — Task 2.4 is complete.**

The provider-neutral technical ERD is sufficiently explicit to serve as the relational architecture source for later visualization and shared-definition work while preserving all Task 2.1–2.3 scientific boundaries.

## Exact next action

Proceed only to **Task 2.5 — design the interactive Atlas Architecture & Data Map page**, using Task 2.1–2.4 as its source contract. The page design should expose conceptual architecture, technical ERD, ownership/provenance, requirement coverage and dependencies without becoming a new scientific authority or performing production implementation.

**STOP BOUNDARY: Task 2.5 was not started.**
