# Task 2.2 — Complete Internal Components and Conceptual Fields

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.2

Branch: `docs/master-atlas-roadmap`

Controlling contract: frozen Master Plan v1.0; Task 2.1 eight-level conceptual architecture; Task 1.6 requirement/coverage matrix; Task 1.3 R1–R48; Task 1.4 X1–X9; Task 1.5 H1–H11/NDU/CMR; `ATLAS-PRODUCTION-SURFACE-REGISTER.md`; locked Drive `v0.7-pilot-atlas-prefreeze` Canonical Schema / Field Dictionary, Extraction/Evidence Protocol, QA rules, and the other single-owner ontology documents.

Scope: conceptual internal architecture only. This document expands L1–L8 and the global QA/versioning/governance plane into required components, conceptual fields/attributes, applicability and ownership boundaries. It does **not** create SQL tables, physical foreign keys, DBML, Mermaid implementation source, provider-specific schema, new scientific ontology fields, production migrations, or Atlas pages.

## 1. Interpretation rules

Task 2.2 uses four labels:

- **[AUTH]** — an authoritative scientific/bibliographic concept or field already owned by the locked scientific/bibliographic contract.
- **[ARCH]** — conceptual architecture/implementation metadata required to operate the system later; it is not by itself a new scientific ontology field.
- **[DERIVED]** — an analytical/synthesis/display product derived from governed upstream records; never an alternate authority.
- **[FUTURE-X6]** — a possible future structural specialization that is **not adopted now** and would require Task 1.4 X6 evidence, later ontology governance, migration and regression before scientific promotion.

A conceptual domain may group fields owned by several existing single-owner documents for navigation/architecture purposes. Such grouping does **not** create a new scientific owner.

The locked v0.7 structural decisions remain binding: `study_component_id` remains unadopted; `physical_knowledge_representation[]` remains unadopted; `solution_postprocessing[]` must not be introduced as a competitor to `derived_output_method[]`; richer `domain_decomposition_method[]` structure remains deferred/monitored; `adaptive_weighting[]` is historical migration provenance and `loss_weighting_method[]` is the current owner.

---

# 2. L1 — Primary Scientific Sources

## 2.1 Permanent internal components

### L1-S1 Source Artifact Registry
Purpose: identify every source artifact used for bibliographic verification, scientific extraction, evidence verification or governed external validation.

Conceptual attributes:
- [ARCH] `source_artifact_id` — stable implementation identity for the artifact/association;
- [AUTH/ARCH] linked `paper_id` where the artifact belongs to an Atlas paper;
- [ARCH] `artifact_type` — full paper, supplement, appendix, dataset supplement, code supplement, figure/table source, bibliographic authority, governed external validation source, other;
- [ARCH] `source_role` — primary scientific source, bibliographic verification source, supplementary scientific source, external validation source, etc.;
- [ARCH] `title_or_label`;
- [ARCH] `source_uri_or_drive_reference`;
- [ARCH] `access_state` — available, restricted, unavailable, unresolved, etc.;
- [ARCH] `retrieval_or_association_date`;
- [ARCH] `content_version_or_fingerprint` when technically practical;
- [ARCH] `source_notes`.

### L1-S2 Paper–Source Association
Conceptual attributes:
- [AUTH] `paper_id`;
- [ARCH] `source_artifact_id`;
- [ARCH] `association_role`;
- [ARCH] `is_primary_full_text`;
- [ARCH] `association_verification_state`;
- [ARCH] `association_provenance`.

### L1-S3 Supplementary/Component Source Scope
Conceptual attributes:
- [ARCH] supplement/component label;
- [ARCH] parent source artifact;
- [ARCH] scientific scope;
- [ARCH] relation to the paper or study-design component;
- [ARCH] availability/access state.

### L1-S4 Source Integrity State
Conceptual attributes:
- [ARCH] source completeness state;
- [ARCH] version/replacement history;
- [ARCH] duplicate-source equivalence or non-equivalence;
- [ARCH] source conflict note where identity/content differs;
- [ARCH] archive/current pointer.

## 2.2 Boundary
L1 preserves source identity and association. It does not normalize scientific claims, repair source contradictions, or infer missing evidence. Scientific evidence captured from L1 enters L3 without mutating L1.

---

# 3. L2 — Bibliographic Identity & Corpus Registry

## 3.1 Permanent internal components

### L2-B1 Stable Paper Identity
Conceptual attributes:
- [AUTH] `paper_id`;
- [AUTH] `atlas_reference_id`;
- [ARCH] stable public/internal identifier aliases if later needed;
- [ARCH] duplicate-resolution status;
- [ARCH] corpus membership/status.

### L2-B2 Verified Bibliographic Metadata
Conceptual attributes:
- [AUTH/BIB] title;
- [AUTH/BIB] authors;
- [AUTH/BIB] publication year;
- [AUTH/BIB] venue/journal/conference/source;
- [AUTH/BIB] DOI/persistent identifier;
- [AUTH/BIB] bibliographic URL(s);
- [AUTH/BIB] publication/reference type;
- [AUTH] `publication_document_type` where scientific schema requires it;
- [AUTH] `publisher_article_label` as exact source wording, separate from scientific study design;
- [AUTH/BIB] access/OA state where governed;
- [AUTH/BIB] country/institution/collaboration metadata only when bibliographically justified.

### L2-B3 Corpus/Record Version Identity
Conceptual attributes:
- [AUTH] `record_version` — historical extraction/record version;
- [AUTH] `canonical_normalization_version` — current scientific normalization version;
- [ARCH] bibliographic data version/release;
- [ARCH] corpus inclusion/exclusion lifecycle state where later required.

### L2-B4 Bibliographic Verification
Conceptual attributes:
- [ARCH/BIB] verification status;
- [ARCH/BIB] verification source(s);
- [ARCH/BIB] verified by/date;
- [ARCH/BIB] unresolved bibliographic conflict state;
- [ARCH/BIB] notes.

### L2-B5 Metadata Correction & History
Conceptual attributes:
- [ARCH] history/change ID;
- [AUTH/BIB] paper ID;
- [ARCH] field changed;
- [ARCH] old value;
- [ARCH] new value;
- [ARCH] source/reason;
- [ARCH] reviewer/changed by;
- [ARCH] date/time;
- [ARCH] verification state;
- [ARCH] downstream impact/rebuild status.

## 3.2 Boundary
L2 is the stable bibliographic identity backbone. It is not the complete scientific Paper Profile and must not become an alternative scientific ontology owner. One authoritative bibliographic value feeds all derived pages.

---

# 4. L3 — Evidence & Provenance

## 4.1 Permanent internal components

### L3-E1 Evidence Identity & Linkage
Locked v0.7 attributes:
- [AUTH] `evidence_id`;
- [AUTH] `paper_id`;
- [AUTH] `evidence_category`;
- [AUTH] `linked_entity_type`;
- [AUTH] `linked_record_id`.

### L3-E2 Evidence Content
- [AUTH] `normalized_statement`;
- [AUTH] `verbatim_evidence` — immutable;
- [ARCH] optional structured translation/normalization working state only if provenance remains explicit.

### L3-E3 Evidence Locator
- [AUTH] `source_section`;
- [AUTH] `source_subsection`;
- [AUTH] `page`;
- [AUTH] `paragraph`;
- [AUTH] `figure`;
- [AUTH] `table`;
- [AUTH] `appendix`;
- [AUTH] `scope_locator` for mixed/component-specific sources;
- [ARCH] link to the L1 source artifact where implementation later supports it.

### L3-E4 Evidence Role, Strength & Origin
- [AUTH] `evidence_type`;
- [AUTH] `statement_strength`;
- [AUTH] `author_or_reviewer / origin_class`;
- [AUTH] `evidence_source_role`.

### L3-E5 Verification, Support & Conflict
- [AUTH] `verification_status`;
- [AUTH] `support_status`;
- [AUTH] `verified_by`;
- [AUTH] `verification_date`;
- [AUTH] `verification_notes`;
- [ARCH] explicit conflict/mismatch identity or grouping when implementation needs more than the existing support state;
- [ARCH] ambiguity/unresolved reason.

### L3-E6 Evidence Version/History
Conceptual attributes:
- [AUTH/ARCH] source extraction version;
- [AUTH/ARCH] ontology/normalization version reference;
- [ARCH] prior normalized classifications;
- [ARCH] reclassification history;
- [ARCH] immutable-original marker/history chain.

### L3-E7 Evidence Graph
Conceptual associations:
- evidence → L4 paper scientific records;
- evidence → L5 taxonomy/relationship proposals;
- evidence → L6 analytical drill-down;
- evidence → L7 synthesis support/contradiction;
- evidence → L8 provenance display.

## 4.2 Boundary
Verification status and semantic support status remain distinct. Absence of reporting is not negative evidence. Evidence location is never invented. Reclassification may change normalized interpretation but never verbatim evidence, locator, source role or recorded conflict/mismatch.

---

# 5. L4 — Verified Paper Scientific Knowledge

## 5.1 Architecture decision for L4

L4 is **not limited to the 19-item shorthand used in Task 2.1**. Task 2.2 distinguishes:

1. authoritative v0.7 record families/fields;
2. permanent conceptual facets that deserve explicit visibility in the architecture;
3. cross-cutting context/association requirements;
4. items that belong outside L4.

No new v0.7 scientific field/entity is created by this organization.

## 5.2 Permanent L4 record families and conceptual domains

### L4-P1 Study Design, Applicability & Review Scope — FIRST-CLASS CONCEPTUAL DOMAIN
Existing authoritative structures:
- [AUTH] `study_design_components[]`;
- [AUTH] `publication_document_type` remains separate and bibliographic/document-form oriented;
- [AUTH] `publisher_article_label` remains exact source wording and never determines design alone;
- [AUTH] `REVIEW_SYNTHESIS_SCOPE.review_scope_id`;
- [AUTH] review domains/problem families/tasks/method families;
- [AUTH] review time window/sources/search strategy/screening method;
- [AUTH] included-study count if stated;
- [AUTH] last search date/reporting guideline;
- [AUTH] review analysis methods/screening roles/quality appraisal/risk-of-bias/certainty methods when reported;
- [AUTH] origin/verification/ontology version.

Permanent rule: primary-study, review, bibliometric, theoretical, mixed and other study-design components must remain independently representable. Review scope is not converted into demonstrated current-paper application/task/result semantics.

### L4-P2 Scientific Record Lifecycle & Extraction State
Existing authoritative structures:
- [AUTH] `record_version`;
- [AUTH] `canonical_normalization_version`;
- [AUTH] `EXTRACTION_CONTROL.paper_id`;
- [AUTH] extraction status;
- [AUTH] extracted by/date;
- [AUTH] last verified date;
- [AUTH] verification status/notes;
- [AUTH] ontology version used.

This is lifecycle metadata attached to L4 records, not scientific content itself.

### L4-P3 Application & Physical System
Existing authoritative structures:
- [AUTH] application ID/paper ID;
- [AUTH] primary application domain;
- [AUTH] subdomain;
- [AUTH] specific demonstrated application;
- [AUTH] physical system;
- [AUTH] application context;
- [AUTH] secondary demonstrated domains;
- [AUTH] related applications;
- [AUTH] potential applications;
- [AUTH] origin/verification/ontology version.

Permanent boundary: demonstrated ≠ related ≠ potential.

### L4-P4 Problem Definition & Governing Physics
Existing authoritative structures:
- [AUTH] problem ID/paper ID;
- [AUTH] physical problem;
- [AUTH] governing equations[];
- [AUTH] equation family;
- [AUTH] boundary conditions;
- [AUTH] initial conditions;
- [AUTH] `physical_constraints[]` with type, target/quantity, statement/description, scope, locator;
- [AUTH] problem class;
- [AUTH] `problem_characteristics[]`;
- [AUTH] origin/verification/ontology version.

### L4-P5 Scientific Objective & Computational Task
Existing authoritative structures:
- [AUTH] computational task;
- [AUTH] forward/inverse classification;
- [AUTH] scientific objective;
- [AUTH] engineering objective where reported;
- [AUTH/L5] task taxonomy assignment/aliases/relations.

This is an explicit conceptual domain because objective/task answers a different question from the physical problem.

### L4-P6 Data & Observation Context — FIRST-CLASS CONCEPTUAL FACET, NOT NEW OWNER
This domain is a governed architectural projection across existing owners so data conditions cannot disappear inside generic methodology prose.

Existing structures include:
- [AUTH] `data_regime[]` — role, amount/density, quality/noise, label status, locator;
- [AUTH] `fidelity_source_role[]` — fidelity level, source type, workflow role, locator;
- [AUTH] validation data source[];
- [AUTH] model input/output roles from `model_variable_representation[]` where observations feed the model;
- [AUTH] reproducibility data availability state;
- [ARCH] explicit cross-links among these records where the same data source plays several roles.

Permanent boundary: data regime ≠ fidelity role ≠ availability ≠ model variable role.

### L4-P7 PINN Problem / Challenge Addressed
Existing authoritative structures:
- [AUTH] `PINN_problem_addressed[]`;
- [AUTH] `PINN_challenge_addressed[]`;
- [AUTH/L5] taxonomy status/aliases/provisional handling;
- [ARCH] evidence links to the specific challenge/problem statement.

Permanent boundary: problem characteristic ≠ PINN challenge/failure by default.

### L4-P8 PINN Type / Family Assignment
Conceptual attributes:
- [AUTH/L5] canonical PINN type/family term ID or provisional/source-local term;
- [AUTH/L5] source terminology/alias;
- [ARCH] paper-level assignment role/scope;
- [ARCH] evidence link;
- [ARCH] component/test-case scope where a paper uses more than one family.

The taxonomy definition itself remains L5; L4 stores paper-level assignment/linkage only.

### L4-P9 Methodological Features — COMPOSITE FIRST-CLASS DOMAIN
Existing v0.7 structures include:
- [AUTH] `PINN_architecture[]`;
- [AUTH] `model_variable_representation[]`;
- [AUTH] `network_configuration[]`;
- [AUTH] `physics_enforcement[]`;
- [AUTH] `physics_integration_mode[]`;
- [AUTH] `loss_components[]`;
- [AUTH] `loss_weighting_method[]`;
- [AUTH] `sampling_strategy[]`;
- [AUTH] `optimizer[]`;
- [AUTH] `training_protocol[]`;
- [AUTH] `activation_function[]`;
- [AUTH] `differentiation_method[]`;
- [AUTH] `geometry_representation[]`;
- [AUTH] `domain_decomposition_method[]`;
- [AUTH] `parallel_execution[]`;
- [AUTH] `transformation_method[]`;
- [AUTH] `uncertainty_method[]`;
- [AUTH] `software_framework[]`;
- [AUTH] `fidelity_source_role[]`;
- [AUTH] `derived_output_method[]`;
- [AUTH] ontology version.

Permanent boundary tests from v0.7 remain active, including input/output identity ≠ transformation ≠ derived output; physical constraint ≠ enforcement; network configuration ≠ architecture family; loss weighting ≠ loss component/generic training protocol; training protocol ≠ optimizer/transfer-learning identity; parallel execution ≠ hardware report/domain decomposition implication.

### L4-P10 Contribution & Innovation
Existing authoritative structures:
- [AUTH] contribution ID/paper ID;
- [AUTH] main contribution;
- [AUTH] contribution types[];
- [AUTH] methodological innovation;
- [AUTH] algorithmic innovation;
- [AUTH] architectural innovation;
- [AUTH] solution mechanism;
- [AUTH] comparison baselines[];
- [AUTH] origin/verification/ontology version.

### L4-P11 Claim, Demonstration & Generality
Existing authoritative structures:
- [AUTH] problem claimed to be solved;
- [AUTH] problem actually demonstrated;
- [AUTH] generality claim;
- [AUTH] generality evidence;
- [AUTH/L3] evidence source role/origin and support state;
- [ARCH] scope of generality claim/demonstration.

Permanent boundary: claim ≠ demonstration; author-stated generality ≠ independently supported generality.

### L4-P12 Outcome / Degree of Resolution
Existing authoritative structures:
- [AUTH] outcome ID/paper ID;
- [AUTH] problem outcome;
- [AUTH] degree of resolution;
- [AUTH] reported improvement;
- [AUTH] reported advantages[];
- [AUTH] reported disadvantages[];
- [AUTH] reported failure cases[];
- [AUTH] origin/verification/ontology version.

### L4-P13 Validation
Existing authoritative structures:
- [AUTH] validation ID/paper ID;
- [AUTH] validation types[];
- [AUTH] validation data source[];
- [AUTH] benchmark type;
- [AUTH] baseline methods[];
- [AUTH] comparison result;
- [AUTH] experimental/numerical/analytical/real-world validation;
- [AUTH] generalization tested;
- [AUTH] robustness tested;
- [AUTH] noise tested;
- [AUTH] scalability tested;
- [AUTH] ontology version.

### L4-P14 Evaluation Results & Test Cases
Existing authoritative structures:
- [AUTH] result ID/paper ID;
- [AUTH] metric;
- [AUTH] value/baseline value/improvement where reported;
- [AUTH] test case;
- [AUTH] conditions;
- [AUTH] reference solution type;
- [AUTH] comparison methods[];
- [AUTH] performance summary;
- [AUTH] result-specific advantages/disadvantages;
- [AUTH] verification/ontology version;
- [ARCH] links to the relevant validation, method/configuration, hardware/software and training/inference context when needed to interpret performance correctly.

Separate test cases/conditions must remain separate records.

### L4-P15 Reproducibility & Reproduction State
Existing authoritative structures:
- [AUTH] code availability + URL when applicable;
- [AUTH] data availability + URL when applicable;
- [AUTH] model availability;
- [AUTH] reproducibility information;
- [AUTH] hyperparameters reported;
- [AUTH] random seed reported;
- [AUTH] hardware reported;
- [AUTH] training cost reported.

Permanent explicit semantics: available ≠ reported unavailable ≠ not reported ≠ not applicable.

[ARCH] A later implementation should also be able to represent an explicitly verified Atlas reproduction/replication attempt **as a separate operational/reproducibility record**, without rewriting the author's reporting state. This is not a new v0.7 paper field. If a reusable scientific replication ontology becomes necessary, it enters X6/FUTURE governance.

### L4-P16 Limitations
Existing locked LIMITATIONS fields remain the complete paper-level limitation record, including category, statement, scope, severity if stated, source, explicit/inferred state, evidence location/text, origin, verification and ontology version.

### L4-P17 Open Problems
Existing locked OPEN_PROBLEMS fields remain distinct, including category, statement, research-gap scope, problem scope, explicit/inferred, author-stated/Atlas-inferred, persistence if supported, evidence, verification and ontology version.

### L4-P18 Future Work
Existing locked FUTURE_WORK fields remain distinct, including statement, type, target, scope, priority/timeframe if stated, explicit/inferred state, evidence, verification and ontology version.

### L4-P19 Paper Diagnostic Pathways
Existing authoritative fields:
- [AUTH] diagnostic ID/paper ID;
- [AUTH] failure mode/problem;
- [AUTH] observed symptoms[];
- [AUTH] diagnosed causes/mechanisms[];
- [AUTH] discriminating checks/analyses[];
- [AUTH] interventions/responses[];
- [AUTH] targeted improvements[];
- [AUTH] verification result IDs/metrics;
- [AUTH] directly reported trade-offs[];
- [AUTH] component-level evidence/support links;
- [AUTH] scope notes;
- [AUTH] verification/ontology version.

Permanent boundary: symptom ≠ cause; intervention ≠ verified improvement; paper pathway ≠ Atlas diagnostic synthesis category.

### L4-P20 Evidence and Semantic Linkage Facets
These are not duplicate evidence/taxonomy stores. L4 requires explicit links to:
- [AUTH] L3 evidence IDs;
- [AUTH/L5] taxonomy term IDs/aliases/provisional terms;
- [AUTH/L5] registered/provisional relationship types;
- [ARCH] supporting record-to-record context links;
- [ARCH] bounded paper-to-Computational-Resource links through stable IDs/interfaces when that subsystem reaches an authorized integration checkpoint.

## 5.3 Cross-cutting L4 context associations

Task 2.2 requires later technical design to preserve scientifically material association among repeatable records without inventing a mandatory `study_component_id`.

Conceptual association requirements include:
- application ↔ problem;
- problem ↔ task/objective;
- problem/task ↔ challenge;
- method/configuration ↔ experiment/test case;
- validation ↔ evaluation result;
- comparator/baseline ↔ relevant result;
- outcome ↔ demonstrated evidence;
- diagnostic pathway component ↔ verification result;
- evidence ↔ exact component/record;
- resource link ↔ paper/method/reproducibility context.

Implementation may later use junctions, scoped relation records, evidence locators or other keys, but Task 2.4/12 must not introduce a scientific identifier that contradicts the locked decision that mandatory `study_component_id` is currently unjustified.

## 5.4 L4 completeness audit of additional candidates

| Candidate | Task 2.2 disposition | Existing representation / reason |
|---|---|---|
| Study objective / scientific question | **SUBSTRUCTURE — explicit** | `PAPER_PROBLEMS.scientific_objective`, engineering objective, task/review scope; no new field needed. |
| Study design | **FIRST-CLASS CONCEPTUAL DOMAIN** | `study_design_components[]` + `REVIEW_SYNTHESIS_SCOPE`; makes mixed/review/bibliometric/theory applicability visible without adding schema. |
| Assumptions / validity / applicability conditions | **CROSS-CUTTING CONTEXT** | problem characteristics, physical constraints, test conditions, validation scope, evidence scope; promote new structure only if future X6 demonstrates irreducible loss. |
| Data / observation model | **FIRST-CLASS CONCEPTUAL FACET** | `data_regime[]`, `fidelity_source_role[]`, validation data source, model-variable roles, data availability; explicitly visible but no competing owner. |
| Experiment / configuration / test-case structure | **CROSS-CUTTING ASSOCIATION REQUIREMENT** | repeatable records + `test_case` + component-aware evidence locators currently suffice; mandatory `study_component_id` remains rejected unless stable linking failure is demonstrated. |
| Theoretical analysis / guarantees | **SUBSTRUCTURE / CROSS-CUTTING FACET** | contribution types, analytical validation, outcomes, evidence and taxonomy can preserve theory claims/guarantees; no new entity justified now. |
| Ablation / sensitivity analysis | **SUBSTRUCTURE OF EVALUATION/VALIDATION** | separate test cases/results/conditions and comparisons; preserve design-variable context. |
| Robustness / generalization / extrapolation | **SUBSTRUCTURE OF VALIDATION + EVALUATION** | explicit generalization/robustness/noise/scalability states plus result records; extrapolation can remain evidence-scoped/provisional if terminology is novel. |
| Failure / negative-result record | **SUBSTRUCTURE ACROSS OUTCOME + EVALUATION + DIAGNOSTIC PATHWAY** | reported failure cases, negative/inconclusive outcomes, diagnostics and evidence; no forced positive framing. |
| Comparator / baseline configuration | **CROSS-CUTTING CONTEXT** | contribution comparison baselines, validation baseline methods, evaluation comparison methods/reference solution; later technical associations must preserve which baseline belongs to which result. |
| Computational efficiency / cost | **SUBSTRUCTURE OF EVALUATION + REPRODUCIBILITY** | metrics/results/test conditions plus training cost/hardware/software/phase context; training time ≠ inference time. |
| Uncertainty / statistical characterization | **SUBSTRUCTURE OF METHODOLOGY + VALIDATION/EVALUATION** | `uncertainty_method[]` plus validation/results; probabilistic uncertainty propagation does not imply Bayesian PINN. |
| Model variables / scientific quantities | **SUBSTRUCTURE OF METHODOLOGY** | `model_variable_representation[]` + `transformation_method[]` + `derived_output_method[]` with strict boundary. |
| Reproduction / replication outcome | **REPRODUCIBILITY SUBSTRUCTURE / OPERATIONAL EXTENSION** | author reporting remains current REPRODUCIBILITY; Atlas replication attempts must be separate operational records; reusable scientific specialization would require future X6. |
| Paper-to-resource linkage | **CROSS-SYSTEM RELATION — NOT L4-OWNED RESOURCE DATA** | L4 stores/link uses stable paper context; resource identity/evidence remains in independent Computational Resources subsystem. |

### L4 completeness verdict

- Candidate dimensions reviewed: **15/15 dispositioned**.
- New v0.7 scientific fields/entities created: **0**.
- Previously rejected/deferred structures revived: **0**.
- Current major paper-extraction structural gap discovered: **0**.
- Architectural visibility improvements adopted: explicit Study Design/Applicability domain; explicit Data/Observation conceptual facet; explicit cross-cutting experiment/config/test-case association requirement; explicit assumptions/scope and comparator/context requirements.

This is consistent with the locked v0.7 QA conclusion that no high-value extraction dimension remains structurally absent, while making those dimensions harder to lose during later ERD/UI design.

---

# 6. L5 — Ontology, Taxonomy & Semantic Control

## 6.1 Permanent internal components

### L5-O1 Schema Authority Map
Conceptual attributes:
- [AUTH] entity/field owner pointer;
- [AUTH] field/entity name;
- [AUTH] cardinality/requirement class;
- [AUTH] structural boundary;
- [AUTH] version introduced/deprecated;
- [ARCH] downstream consumer map.

This is a representation of the Canonical Schema owner, not a new schema owner.

### L5-O2 Controlled Vocabulary Registry
Conceptual attributes:
- [AUTH] vocabulary/dimension ID;
- [AUTH] controlled key/value;
- [AUTH] definition;
- [AUTH] extensibility policy;
- [AUTH] applicability/context;
- [AUTH] version state;
- [ARCH] aliases/display labels only when allowed by owner.

### L5-O3 Taxonomy Term & Alias Registry
Locked structural attributes:
- [AUTH] term ID;
- [AUTH] taxonomy dimension;
- [AUTH] canonical label;
- [AUTH] parent term ID;
- [AUTH] aliases[];
- [AUTH] alias metadata including scope/source paper/evidence;
- [AUTH] definition;
- [AUTH] status;
- [AUTH] first-seen paper/evidence;
- [AUTH] version added/deprecated;
- [AUTH] replacement term;
- [AUTH] review notes/status.

### L5-O4 Relationship Registry
Locked structural attributes:
- [AUTH] relation ID;
- [AUTH] source entity type;
- [AUTH] relation type;
- [AUTH] target entity type;
- [AUTH] definition;
- [AUTH] status;
- [AUTH] first-seen paper/evidence;
- [AUTH] version added/deprecated;
- [AUTH] inverse relation;
- [AUTH] review notes.

### L5-O5 Non-Equivalence / No-Merge Constraints
Conceptual attributes:
- [AUTH] constraint ID or governed rule reference;
- [AUTH] participating concepts/relations;
- [AUTH] prohibited merge/generalization;
- [AUTH] rationale/evidence/sentinel;
- [AUTH] version/state.

### L5-O6 Provisional / Source-Local Extension Workbench
Conceptual attributes:
- [ARCH under X1–X9] proposal ID;
- candidate class X1–X9;
- source term/relation/value/structure;
- proposed mapping;
- paper/evidence triggers;
- recurrence/generalizability review;
- collision/duplicate analysis;
- review state;
- disposition: canonicalize/alias/merge/re-parent/keep source-local/reject/defer/structural candidate;
- owning scientific document;
- candidate future version.

### L5-O7 Ontology Changelog & Migration Reference
Locked/changelog attributes:
- [AUTH] change ID;
- [AUTH] ontology version;
- [AUTH] change type;
- [AUTH] affected record type/ID;
- [AUTH] rationale;
- [AUTH] triggering paper IDs;
- [AUTH] supporting evidence IDs;
- [AUTH] reviewer/date;
- [AUTH] migration notes.

## 6.2 Boundary
L5 governs semantics and scientific evolution. Consumers may propose changes but cannot write canonical state directly. Master Plan or database schema changes cannot substitute for an ontology promotion.

---

# 7. L6 — Cross-Paper Intelligence & Analytical Semantics

## 7.1 Permanent internal components

### L6-A1 Dimension Catalogue
Conceptual attributes:
- [ARCH] `dimension_id`;
- [ARCH] name/definition;
- [ARCH] upstream L4/L5 owner(s);
- [ARCH] eligible record types;
- [ARCH] unit of analysis;
- [ARCH] allowed filters/groupings;
- [ARCH] evidence/provenance drill-down rule;
- [ARCH] invalid/misleading comparison constraints;
- [ARCH] version/state.

### L6-A2 Single-Dimension Intelligence Profile
Conceptual attributes:
- [DERIVED] dimension value/term;
- [DERIVED] eligible paper/record count;
- [DERIVED] distribution/recurrence;
- [DERIVED] temporal pattern;
- [DERIVED] application/problem/method associations where valid;
- [DERIVED] validation/outcome/reproducibility associations where valid;
- [DERIVED] supporting and contradictory evidence references;
- [DERIVED] scope/context warnings.

### L6-A3 Cross-Dimensional Query/Comparison Specification
Conceptual attributes:
- [ARCH] query/analysis ID;
- selected dimensions;
- comparison type;
- inclusion/eligibility rule;
- denominator definition;
- grouping/unit of analysis;
- filters;
- contextual constraints;
- aggregation method;
- invalid-combination rule;
- evidence drill-down;
- reproducibility/version metadata.

### L6-A4 Aggregate/Trend Result
Conceptual attributes:
- [DERIVED] result ID;
- analysis/query ID;
- measure/count/statistic;
- denominator;
- time/geography/domain scope;
- supporting paper IDs/record IDs/evidence IDs;
- contradictory/mismatched set;
- uncertainty/coverage note where relevant;
- generated version/time.

### L6-A5 Contradiction / Negative / Integrity Analytics
Conceptual attributes:
- [DERIVED] conflict family/type;
- affected scientific dimension;
- source records/evidence;
- support/mismatch state;
- scope;
- whether conflict is internal-paper or cross-paper;
- non-resolution warning.

### L6-A6 Research-Gap/Opportunity Candidate Signals
Conceptual attributes:
- [DERIVED] candidate signal ID;
- source analytical pattern;
- supporting independent papers;
- contradictory evidence;
- scope;
- recurrence;
- evidence quality/role notes;
- status = analytical candidate only until L7 synthesis review.

## 7.2 Required intelligence families
The current Master Plan requires the starting families: Application, Problem, Computational Task, PINN Type, Methodology, Contribution, Outcome, Validation, Evaluation, Reproducibility, Limitations, Open Problems, Future Work, Research Gaps, Research Opportunities, Failure/Diagnostic, Evidence, Relationships, Temporal, and Domain/Geographic/Collaboration intelligence.

## 7.3 Boundary
L6 owns reproducible analytical products, not paper facts and not automatically official Atlas synthesis. Frequency is not evidence strength; repeated statements in one paper are not independent support; qualitative association is not causal/effect-size estimation.

---

# 8. L7 — Curated Atlas Synthesis & Frameworks

## 8.1 Permanent internal components

### L7-SY1 General Atlas Synthesis Record
Conceptual attributes:
- [DERIVED/GOVERNED] synthesis ID;
- synthesis type;
- normalized synthesis statement;
- scope/context;
- supporting paper IDs;
- supporting evidence IDs/record IDs;
- independent support count;
- contradictory evidence;
- evidence strength/quality descriptors;
- reviewer confidence;
- verification/review state;
- ontology/data/synthesis version;
- created/reviewed/updated dates;
- downstream consumers.

### L7-SY2 Atlas Research Gap
Existing v0.7 authoritative synthesis fields:
- [AUTH] gap ID;
- [AUTH] normalized gap;
- [AUTH] category;
- [AUTH] scope;
- [AUTH] derived-from evidence/records;
- [AUTH] supporting paper IDs;
- [AUTH] evidence strength;
- [AUTH] independent support count;
- [AUTH] contradictory evidence;
- [AUTH] Atlas interpretation;
- [AUTH] reviewer confidence;
- [AUTH] verification status;
- [AUTH] ontology version.

### L7-SY3 Atlas Research Opportunity
Existing v0.7 authoritative synthesis fields mirror the gap structure but preserve the distinction: opportunity = actionable direction; gap = unresolved deficit.

### L7-SY4 Design Stack & Feedback Loops
Conceptual synthesis components:
- stage/node identity;
- stage definition;
- governed source dimensions;
- feedback edge identity;
- edge scope/condition;
- supporting evidence chain;
- contradictory/limiting evidence;
- synthesis status/version.

The fixed graph remains synthesis-level unless a source independently supports a specific paper-level relation.

### L7-SY5 Co-Design Framework
Conceptual synthesis components:
- mechanism/consequence/trigger/action node or semantic role;
- curated relation/edge;
- scope/context;
- supporting evidence;
- contradictory evidence;
- confidence;
- synthesis version.

Curated Co-Design semantics do not automatically become L5 canonical paper relations.

### L7-SY6 Design–Performance 14×7 / 98-Cell Matrix
Conceptual attributes per cell:
- cell ID;
- design variable;
- performance dimension;
- qualitative influence classification;
- synthesis statement;
- confidence;
- supporting paper count/IDs;
- evidence links;
- contradictory evidence;
- application/problem dependence;
- cross-outcome trade-offs/notes;
- synthesis version/last update.

A cell is not a causal effect estimate or canonical relationship merely because it is displayed.

### L7-SY7 Failure-Mode Diagnostics Synthesis
Conceptual attributes:
- Atlas diagnostic category/mode;
- normalized failure/symptom/mechanism/check/intervention/recommendation semantics;
- source paper diagnostic-pathway links;
- supporting/contradictory evidence;
- confidence/scope;
- cross-framework links;
- synthesis version.

Paper-supported pathway components remain L4; Atlas categories/recommendations remain L7.

### L7-SY8 Future Official Frameworks
Any later official framework must declare:
- synthesis purpose;
- upstream governed dimensions;
- evidence eligibility;
- framework semantics;
- paper-fact versus synthesis boundary;
- review/confidence/versioning;
- relation to existing frameworks;
- L8 presentation surfaces.

---

# 9. L8 — Atlas Experience, Tools & Integration Surfaces

## 9.1 Permanent internal components

### L8-U1 Surface/Page Registry
Conceptual attributes required for every current/future page/tool:
- [ARCH] `surface_id`;
- route/route family;
- title/purpose;
- user role/audience;
- surface class: editor, review tool, database consumer, synthesis consumer, derived analytical view, support/legal/navigation, independent linked resource, API/view;
- authoritative upstream owner(s);
- paper-level versus synthesis-level scope;
- IDs/keys used;
- read-only versus write behavior;
- evidence/provenance display requirement;
- taxonomy/relationship dependencies;
- generated/derived transformations;
- update/regeneration behavior;
- inbound/outbound crosslinks;
- navigation placement;
- deep-link/compatibility requirements;
- responsive/mobile requirements;
- accessibility/fallback requirements;
- security/access role;
- QA/regression suite;
- lifecycle/disposition state.

All 26 current registered routes must eventually have this audit metadata under Task 9, plus any later-discovered surface. The current 26 remain a baseline, not a route ceiling.

### L8-U2 Paper Profile Surface Family
Conceptual capabilities:
- bibliographic identity panel;
- study/applicability panel;
- L4 scientific domains;
- evidence/provenance drill-down;
- taxonomy/relationship links;
- related papers;
- links to L6/L7 intelligence/frameworks;
- bounded Computational Resources links;
- correction/history visibility where appropriate.

Task 3/16 owns detailed product specification/implementation.

### L8-U3 Explorers & Analytical Views
Includes single-dimension, cross-dimensional, application, PINN type, methodology, metrics, gap/opportunity, diagnostic, reproducibility and future explorers.

Required surface attributes:
- source dimension/query definition;
- filter constraints;
- valid/invalid comparisons;
- denominator/context display;
- evidence drill-down;
- contradictory evidence visibility;
- version/update stamp.

### L8-U4 Official Framework Surfaces
Consumes L7 official synthesis; must not convert display nodes/edges/cells into L4 facts or L5 canonical relations.

### L8-U5 Controlled Maintenance / Review Tools
Includes Dataset Manager patterns and future scientific review/ingestion tooling.

Conceptual attributes:
- workflow/tool ID;
- allowed actor/role;
- source authority being edited;
- candidate/proposal state;
- accept/edit/reject/needs-evidence/needs-ontology-review/unresolved states;
- validation result;
- reviewer/audit history;
- changed authoritative record;
- impacted derived consumers;
- rebuild/regeneration status;
- rollback path.

### L8-U6 Architecture & Data Map
Future surface must expose Task 2.1/2.2 conceptual architecture, Task 2.3 Mermaid, Task 2.4 technical ERD/DBML, requirement/coverage status, page/data dependency map and version/change status without creating another scientific owner.

### L8-U7 APIs, Views & Machine Consumers
Conceptual attributes:
- interface/view ID;
- version;
- purpose;
- upstream authority;
- exposed entities/fields;
- read/write permission;
- query/filter contract;
- provenance returned;
- compatibility/deprecation policy;
- rate/security/access considerations;
- consumer list.

### L8-U8 Navigation, Search & Cross-Linking
Conceptual attributes:
- entity-aware URL/deep-link contract;
- navigation registration;
- search index source;
- canonical IDs used;
- redirects/compatibility routes;
- cross-link relation semantics;
- orphan-link detection;
- fallback behavior.

### L8-U9 Computational Resources Bounded Integration
Reserved target direction:
- Code & Software;
- Datasets;
- Frameworks & Libraries;
- Simulators & Solvers;
- Reproducibility Explorer.

Conceptual interface attributes:
- Atlas `paper_id`;
- independent resource ID;
- explicit paper-resource relation type;
- evidence/provenance on both sides;
- reproducibility mapping state;
- resource page/API link;
- integration version;
- boundary/review state.

Resource internals remain independently governed; `Frameworks & Libraries` is not the four scientific synthesis frameworks.

---

# 10. Global QA / Versioning / Governance Plane

The global plane applies to every level and every future implementation.

## G1 Scientific Authority Registry
Conceptual attributes:
- authority/owner ID;
- scope;
- current authoritative version;
- superseded/historical versions;
- precedence rule;
- owner document/location;
- downstream consumers.

## G2 Requirement / Rule Registry
Conceptual attributes:
- requirement/rule ID;
- source contract (R/X/H/A/O/etc.);
- description;
- owning layer/owner;
- applicable levels/surfaces;
- QA/test mapping;
- implementation status;
- exception = prohibited unless governed.

## G3 QA Test & Assertion Registry
Conceptual attributes:
- test/assertion ID;
- requirement(s) tested;
- test class: schema, semantic, evidence, migration, route, UI, accessibility, referential, synthesis, regression, sentinel;
- inputs;
- expected outcome;
- result;
- evidence/log/artifact;
- run date/version;
- disposition.

## G4 Human Review / Verification Governance
Conceptual attributes:
- review ID;
- object type/ID;
- proposal/extraction state;
- reviewer;
- decision;
- reason/notes;
- evidence checked;
- ontology version;
- date;
- next required action.

Verified/published scientific records require 100% human scientific review coverage under H3.

## G5 Version Registry
Must distinguish:
- source/document version;
- bibliographic data version;
- record/extraction version;
- scientific ontology/schema version;
- normalization version;
- synthesis/framework version;
- implementation/schema/API version;
- page/UI release version;
- Computational Resources subsystem version.

Conceptual attributes: version ID, type, parent, status, effective date, changelog, compatible versions, migration requirement.

## G6 Change / Migration Governance
Conceptual attributes:
- change/migration ID;
- owner/layer;
- old state;
- new state;
- rationale;
- triggering papers/evidence/issue;
- backward-compatibility class;
- mapping/transformation;
- evidence immutability check;
- identity/referential check;
- affected consumers;
- rollback plan;
- approval/reviewer;
- QA result.

## G7 Batch / Checkpoint / Scale-Out Governance
Conceptual attributes:
- batch/checkpoint ID;
- included paper IDs;
- ontology/data version;
- extraction/review completeness;
- H1–H11 results;
- NDU counts;
- clean NDU counts;
- CMR;
- active major structural gaps;
- unresolved/provisional counts as descriptive state, not automatic failure;
- GO / CONDITIONAL GO / STOP / ROLLBACK disposition;
- next action.

## G8 Conflict, Ambiguity & Non-Equivalence Governance
Conceptual attributes:
- issue/conflict ID;
- affected layer/object;
- competing values/statements;
- evidence IDs;
- conflict type;
- scope;
- current resolution state;
- no-merge constraint if applicable;
- downstream surfaces affected.

## G9 Correction / History / Rollback
Conceptual attributes:
- correction ID;
- authoritative object/field;
- old/new state;
- source/reason;
- reviewer;
- date;
- impacted dependencies;
- regeneration result;
- rollback target/status;
- audit trail.

## G10 Dependency & Impact Propagation
Conceptual attributes:
- dependency edge ID;
- authoritative source object;
- dependent view/dataset/page/query/framework;
- dependency type;
- regeneration trigger;
- stale-state indicator;
- last synchronized version;
- regression required.

Task 9 and Task 10 will elaborate this operationally.

## G11 Access / Write / Role Governance
Conceptual attributes:
- role/actor;
- permitted read scopes;
- permitted proposal scopes;
- permitted authoritative write scopes;
- approval requirement;
- audit requirement;
- prohibited direct-write targets;
- service/API identity where applicable.

## G12 Full-Surface Preservation & Lifecycle Governance
Conceptual attributes:
- surface ID;
- current status;
- target disposition;
- migration dependencies;
- inbound/outbound links;
- compatibility URL requirement;
- regression closure;
- retirement authorization.

No current route is retired solely because a target IA exists.

## G13 Bounded-Subsystem Integration Governance
Conceptual attributes:
- subsystem ID;
- independent authority/version;
- interface contract;
- shared keys/relations;
- provenance boundary;
- allowed read/write directions;
- integration checkpoint status;
- regression suite;
- unresolved schema conflicts.

Computational Resources is the current explicit subsystem governed by this pattern.

## G14 Reproducibility / Auditability of Atlas Knowledge
Conceptual attributes:
- synthesis/query/build ID;
- exact eligible inputs;
- input versions;
- transformation/query definition;
- evidence links;
- output version;
- generation date/tool/version;
- reviewer/acceptance state where scientific synthesis is involved.

---

# 11. Cross-level relationship contract

The permanent conceptual relationship flow is:

- L1 source artifacts associate to L2 stable paper identity and supply L3 evidence.
- L2 `paper_id` keys every paper-linked record and integration.
- L3 evidence supports/contradicts/qualifies L4 paper records and L7 synthesis.
- L5 governs the semantic definitions used by L4/L6/L7/L8 and receives controlled extension proposals.
- L4 verified paper knowledge feeds L6 analytics and eligible L7 synthesis.
- L6 analytical products may inform L7 review but do not automatically become official synthesis.
- L7 official synthesis feeds L8 framework/gap/opportunity/diagnostic surfaces.
- L8 may submit governed change/review requests but never becomes an alternate scientific owner.
- Global governance surrounds all levels and controls versioning, QA, access, migration, scale-out, correction and rollback.
- Computational Resources connects through an explicit L8/G13 boundary while keeping independent resource identity and internal governance.

No downstream transformation may erase a distinction required upstream.

---

# 12. Completeness / no-duplication / no-merge audit

## 12.1 Locked v0.7 structural-family coverage
All **21/21** locked Canonical Schema structural families are assigned a permanent conceptual home:

- PAPERS → L2 identity + L4 study/lifecycle facets;
- REVIEW_SYNTHESIS_SCOPE → L4-P1;
- PAPER_APPLICATIONS → L4-P3;
- PAPER_PROBLEMS → L4-P4/P5/P6/P7;
- PAPER_CONTRIBUTIONS → L4-P10/P11;
- PAPER_OUTCOMES → L4-P12;
- PAPER_VALIDATION → L4-P13;
- METHODOLOGICAL_FEATURES → L4-P6/P8/P9;
- EVALUATION_RESULTS → L4-P14;
- REPRODUCIBILITY → L4-P15;
- PAPER_DIAGNOSTIC_PATHWAYS → L4-P19;
- LIMITATIONS → L4-P16;
- OPEN_PROBLEMS → L4-P17;
- FUTURE_WORK → L4-P18;
- EVIDENCE → L3;
- ATLAS_RESEARCH_GAPS → L7-SY2;
- ATLAS_RESEARCH_OPPORTUNITIES → L7-SY3;
- EXTRACTION_CONTROL → L4-P2 + global review/QA;
- TAXONOMY_TERM_REGISTRY → L5-O3;
- RELATIONSHIP_REGISTRY → L5-O4;
- ONTOLOGY_CHANGELOG → L5-O7/global versioning.

Structural-family orphan count: **0**.

## 12.2 Task 2.1 requirement-family preservation
R1–R48, X1–X9, H1–H11, NDU/CMR, current-surface/future-page requirements and the Computational Resources boundary remain assigned. Conceptual requirement-family orphan count remains **0**.

## 12.3 L4 candidate audit
Additional L4 candidates reviewed = **15/15**; each has an explicit disposition. No candidate is silently dropped.

## 12.4 Duplication/no-merge findings
Task 2.2 explicitly prevents these duplicate/merge failures:
- bibliographic identity duplicated as scientific profile authority;
- evidence copied into normalized fields as replacement authority;
- study design conflated with publisher document label;
- review scope converted into current-paper demonstration;
- problem characteristic conflated with challenge/failure;
- data regime conflated with fidelity/availability;
- model output conflated with transformation/derived output;
- constraints conflated with enforcement;
- network configuration conflated with architecture family/reporting flag;
- loss weighting conflated with loss component/training protocol;
- training protocol conflated with optimizer/transfer-learning identity;
- hardware conflated with parallel execution;
- claim conflated with demonstration;
- limitation/open problem/future work/gap merged;
- validation merged with evaluation metric/result;
- paper diagnostic pathway merged with Atlas diagnostic synthesis;
- analytical recurrence treated as evidence strength;
- framework edge/cell promoted to canonical paper relation;
- page/UI/database treated as scientific authority;
- Computational Resources internal data absorbed into L4/L5.

## 12.5 Completeness verdict

**PASS.** The eight-level architecture plus global plane now has a complete conceptual internal-component/field map sufficient to proceed to diagram/source formalization.

Task 2.2 does not claim every later SQL column, table, UI component, API endpoint or target route is already designed. Those remain later tasks.

No locked v0.7 scientific document, production `main`, Computational Resources Stage 1/2/3 branch, production database, route/page implementation, migration or extraction record is modified by Task 2.2.

**STOP BOUNDARY:** Task 2.3 was not started.

**Exact next action, only when separately authorized:** Task 2.3 — create version-controlled Mermaid conceptual architecture source representing the Task 2.1 eight-level structure and the Task 2.2 complete internal-component map, without prematurely creating the Task 2.4 physical DBML/technical ERD.