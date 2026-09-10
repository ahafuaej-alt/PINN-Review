# Task 3.2 — Complete Paper Profile Field Specification

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.2.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Profile-section contract: `TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md`.

Architecture input: `TASK-2.2-COMPLETE-INTERNAL-COMPONENTS-AND-FIELDS.md`.

This task expands `PP-01`–`PP-19` field-by-field. It is an architectural mapping and implementation-readiness specification. It **does not** amend the locked v0.7 Canonical Schema, Controlled Vocabularies, Taxonomy Registry, Relationship Registry, Ontology Governance rules, Extraction/Evidence Protocol, or Serialization Specification. It does not create a database, a machine-readable Paper Profile schema (Task 3.5), conditional UI logic (Task 3.3), evidence-drawer interaction design (Task 3.4), or a UI mockup (Task 3.6).

## 1. Verified authority readback

Task 3.2 was prepared only after readback of the current locked owners and implementation contract:

- Canonical Schema / Field Dictionary — v0.7-pilot-atlas-prefreeze (`CS`): entity structure, field names, cardinality, requirement classes and structural boundaries.
- Controlled Vocabularies — v0.7-pilot-atlas-prefreeze (`CV`): enumerated values and controlled labels.
- Taxonomy Term and Alias Registry — v0.7-pilot-atlas-prefreeze (`TR`): normalized concepts, aliases, source-local terms, no-merge decisions and term lifecycle.
- Relationship Registry — v0.7-pilot-atlas-prefreeze (`RR`): typed relationships and their status/scope.
- Ontology Governance and Change Rules — v0.7-pilot-atlas-prefreeze (`OG`): lifecycle, evidence governance, versioning, conflict handling and promotion.
- Extraction, Evidence and Verification Protocol — v0.7-pilot-atlas-prefreeze (`EP`): applicability, extraction, evidence and verification behavior.
- Database Implementation and GitHub Serialization Specification — v0.7-pilot-atlas-prefreeze (`SER`): machine-readable representation only.

The verified starting branch head was `9b470376a2d62bf5bad8b17e7f5c8800c30b9879`. No production `main` data, locked Drive v0.7 owner, or Computational Resources Stage 1/2/3 artifact is changed by Task 3.2.

## 2. Reading rules and notation

### 2.1 Owner codes

- `BIB/L2` — governed bibliographic/corpus identity owner at architecture Level 2. Where v0.7 `PAPERS` also owns a field, `CS` is named explicitly.
- `CS` — locked Canonical Schema / Field Dictionary.
- `CV` — locked Controlled Vocabularies for closed/controlled values.
- `TR` — locked taxonomy/alias owner for canonical, provisional, alias and paper-specific concepts.
- `RR` — locked typed-relationship owner.
- `EP` — locked evidence/applicability protocol.
- `SER` — locked technical serialization contract; subordinate to science.
- `ARCH` — architecture-only association/projection needed by the Paper Profile. `ARCH` never means a new v0.7 scientific field.

### 2.2 Multiplicity and requirement

`[M]`, `[O]` and `[C]` are the exact v0.7 requirement classes. `1`, `0..1`, `1..N` and `0..N` state value/record multiplicity. A mandatory field is mandatory **only for a scientifically applicable record**. Non-applicable primary-study content must not be fabricated for review-only or otherwise inapplicable papers.

### 2.3 Evidence codes

- `BIB-PROV` — bibliographic provenance/history, not a substitute for scientific L3 evidence.
- `E-LINK` — synthesis/normalization-relevant scientific content must be linked through the separate L3 `EVIDENCE` object by `linked_entity_type` + `linked_record_id`, with `paper_id`, `evidence_id`, locator, origin, verification and support state retained.
- `E-INLINE` — the nested v0.7 structure also carries its own `evidence_locator`; this does not replace `E-LINK` where the scientific assertion participates in normalization/synthesis.
- `E-DIRECT` — the source record contains direct `evidence_location` / `evidence_text`; retain those fields and also preserve the normal L3 evidence relationship when synthesis-relevant.
- `PROV` — the field is itself provenance/workflow/version metadata and does not need a second evidence claim merely to exist.
- `N/A` — identifier/technical linkage field; scientific evidence applies to the linked record, not to the key itself.

EP remains controlling: every scientific record used for synthesis must have evidence; raw/verbatim evidence, source locators, source role and conflict/mismatch state remain immutable after capture except through explicit correction/supersession with history preserved.

### 2.4 Semantic-control codes

- `CV` — exact controlled vocabulary where one exists.
- `TR` — taxonomy term/alias/provisional/paper-specific normalization as appropriate.
- `RR` — typed relation only when an approved/provisional relationship is scientifically justified.
- `SRC` — source-grounded literal/description; do not invent a closed vocabulary.
- `ID` — stable identifier or FK.
- `BIB` — bibliographic owner.
- `STATE` — explicit workflow/reporting/applicability state; do not replace with generic null.

### 2.5 Serialization rule

SER currently uses JSON as the canonical GitHub representation, one normalized paper object in `papers/P-XXXX.json` plus a separate `evidence/P-XXXX.evidence.json`. Exact v0.7 snake_case scientific keys are reused. Empty arrays mean only “no represented records”; they do not mean the paper asserted absence. Explicit states such as `not_reported`, `reported_unavailable`, `not_applicable`, `conflict_found` and `mismatched` must remain explicit when governed.

**No view duplication rule:** a Paper Profile section may project a field owned by another normalized object, but Task 3.2 never serializes a second competing copy merely because the UI shows it in another section.

The `PP-xx.Fnn` labels below are documentation coordinates only. They are not ontology IDs, database column names, or new scientific fields.

---

## 3. PP-01 — Bibliographic Identity

Primary authority: L2 bibliographic/corpus identity, with the overlapping locked `PAPERS` fields owned by CS. Profile cardinality: exactly one identity projection per `paper_id`.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Technical serialization |
|---|---|---:|---|---|---|---|
| PP-01.F01 `paper_id` | CS/BIB | [M] 1 | N/A | ID | all papers | `paper.paper_id`; canonical FK target |
| PP-01.F02 `atlas_reference_id` | CS/BIB | [M] 1 | BIB-PROV | ID | Atlas corpus papers | `paper.atlas_reference_id` |
| PP-01.F03 `title` | CS/BIB | [M] 1 | BIB-PROV | BIB | all papers | `paper.title` |
| PP-01.F04 authors / author list | BIB/L2 | 1..N when bibliographically resolved | BIB-PROV | BIB | all papers | L2 bibliographic projection; do not mint a competing v0.7 scientific key in Task 3.2 |
| PP-01.F05 `publication_year` | CS/BIB | [M] 1 | BIB-PROV | BIB | all papers | `paper.publication_year` |
| PP-01.F06 venue / source / publication | BIB/L2 | 0..1 governed value | BIB-PROV | BIB | when resolved | L2 bibliographic projection; exact physical ownership remains bibliographic |
| PP-01.F07 `doi` / persistent identifier | CS/BIB | [O] 0..1 | BIB-PROV | BIB/ID | when available | `paper.doi` or current exact v0.7 persistent-identifier representation; no fabricated DOI |
| PP-01.F08 `bibliographic_link` | CS/BIB | [O] 0..1 | BIB-PROV | BIB | when available | `paper.bibliographic_link` |
| PP-01.F09 canonical/publication URL(s) | BIB/L2 | 0..N as governed | BIB-PROV | BIB | when resolved | L2 projection; Task 9/10/12 may formalize final physical layout without changing science |
| PP-01.F10 volume / issue / pages / article number | BIB/L2 | 0..1 each | BIB-PROV | BIB | publication-dependent | L2 projection; retain source-specific bibliographic distinctions |
| PP-01.F11 publication/reference type | BIB/L2 | 0..1 | BIB-PROV | BIB | when governed | L2 projection; must not substitute for scientific study design |
| PP-01.F12 `publication_document_type` | CS + CV | [M] 1 | BIB-PROV | CV | all applicable paper records | `paper.publication_document_type` |
| PP-01.F13 `publisher_article_label` | CS | [O] 0..1 | BIB-PROV | SRC | when explicitly present | `paper.publisher_article_label`; never infer study design from it |
| PP-01.F14 access/open-access state | BIB/L2 | 0..1 when governed | BIB-PROV | BIB/STATE | when known | L2 projection; not a scientific claim |
| PP-01.F15 bibliographic verification state/source(s) | BIB/L2 | 1 logical state + 1..N sources/history as needed | BIB-PROV | STATE | all verified metadata | L2 metadata-history projection; exact correction/history record is Task 10 |
| PP-01.F16 bibliographic conflict/history | BIB/L2 | 0..N | BIB-PROV | STATE | when correction/conflict exists | linked L2 history; never overwrite earlier verified value without history |

Boundary: `PP-01` identifies the publication. It is not the scientific study design, extraction state, complete Paper Profile, or an alternative bibliographic authority.

## 4. PP-02 — Study / Extraction Identity

`PP-02` combines three **distinct** owners in one display section without merging their semantics: study design in `PAPERS`, optional review scope, and `EXTRACTION_CONTROL`/technical provenance.

### 4.1 Study-design and version fields

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Technical serialization |
|---|---|---:|---|---|---|---|
| PP-02.F01 `study_design_components[]` | CS + CV | [M] 1..N | E-LINK for nontrivial scientific classification | CV | all papers | `paper.study_design_components[]` |
| PP-02.F02 `record_version` | CS | [M] 1 | PROV | STATE | all papers | `paper.record_version`; historical extraction/record version |
| PP-02.F03 `canonical_normalization_version` | CS/OG | [M] 1 | PROV | STATE | all papers | `paper.canonical_normalization_version` |
| PP-02.F04 `source_extraction_version` | SER technical provenance | [O] 0..1 | PROV | STATE | legacy/migrated records | `implementation_metadata.source_extraction_version` or equivalent SER-governed technical location; not a new science field |
| PP-02.F05 legacy/source record ID | SER technical provenance | [O] 0..N | PROV | ID | when legacy batch IDs exist | technical metadata only; never canonical FK target |

`publication_document_type` and `publisher_article_label` may be shown beside study design for contrast, but their single authoritative values remain PP-01 / `paper.*`; they are not duplicated here.

### 4.2 `REVIEW_SYNTHESIS_SCOPE` — optional review/synthesis component

Entity cardinality: `0..1` per paper in current SER. The entity is used only where a review/systematic-review/bibliometric component makes it scientifically applicable.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-02.R01 `review_scope_id` | CS | [M] 1 when entity used | N/A | ID | review/synthesis component | `review_synthesis_scope.review_scope_id` |
| PP-02.R02 `paper_id` | CS | [M] 1 | N/A | ID | when entity used | `review_synthesis_scope.paper_id` |
| PP-02.R03 `review_domains[]` | CS | [O] 0..N | E-LINK | TR/CV as applicable | explicitly covered domains | `.review_domains[]` |
| PP-02.R04 `review_problem_families[]` | CS | [O] 0..N | E-LINK | TR | when reported/supported | `.review_problem_families[]` |
| PP-02.R05 `review_tasks[]` | CS | [O] 0..N | E-LINK | CV/TR | when reported/supported | `.review_tasks[]` |
| PP-02.R06 `review_method_families[]` | CS | [O] 0..N | E-LINK | TR | when reported/supported | `.review_method_families[]` |
| PP-02.R07 `review_time_window` | CS | [O] 0..1 | E-LINK | SRC | only if source states it | `.review_time_window` |
| PP-02.R08 `review_sources[]` | CS | [O] 0..N | E-LINK | SRC | only if source states them | `.review_sources[]` |
| PP-02.R09 `search_strategy` | CS | [O] 0..1 | E-LINK | SRC | explicitly reported | `.search_strategy` |
| PP-02.R10 `screening_method` | CS | [O] 0..1 | E-LINK | SRC | explicitly reported | `.screening_method` |
| PP-02.R11 `included_study_count_if_stated` | CS | [O] 0..1 | E-LINK | SRC/numeric | explicitly stated | `.included_study_count_if_stated` |
| PP-02.R12 `last_search_date` | CS | [O] 0..1 | E-LINK | SRC/date | explicitly reported | `.last_search_date` |
| PP-02.R13 `reporting_guideline` | CS | [O] 0..1 | E-LINK | SRC/TR if governed | explicitly reported | `.reporting_guideline` |
| PP-02.R14 `review_analysis_methods[]` | CS | [O] 0..N | E-LINK | TR | explicitly performed/reported | `.review_analysis_methods[]` |
| PP-02.R15 `screening_roles` | CS | [O] 0..1 | E-LINK | SRC | explicitly reported | `.screening_roles` |
| PP-02.R16 `quality_appraisal_method` | CS | [O] 0..1 | E-LINK | SRC/TR | explicitly reported | `.quality_appraisal_method` |
| PP-02.R17 `risk_of_bias_method` | CS | [O] 0..1 | E-LINK | STATE/SRC | report `not_performed` / `not_applicable` only when supported; silence ≠ performed | `.risk_of_bias_method` |
| PP-02.R18 `certainty_assessment_method` | CS | [O] 0..1 | E-LINK | STATE/SRC | explicitly reported | `.certainty_assessment_method` |
| PP-02.R19 `origin_class` | CS + CV | [M] 1 | PROV | CV | when entity used | `.origin_class` |
| PP-02.R20 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | when entity used | `.verification_status` |
| PP-02.R21 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | when entity used | `.ontology_version` |

Boundary: review scope must never be promoted into demonstrated application, direct task, primary outcome, validation or direct evaluation unless the paper separately performs that work.

### 4.3 `EXTRACTION_CONTROL` — one per paper

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-02.X01 `paper_id` | CS | [M] 1 | N/A | ID | all operational records | `extraction_control.paper_id` |
| PP-02.X02 `extraction_status` | CS + CV | [M] 1 | PROV | CV/STATE | all operational records | `.extraction_status` |
| PP-02.X03 `extracted_by` | CS | [M] 1 | PROV | ID/SRC | all extracted records | `.extracted_by` |
| PP-02.X04 `extraction_date` | CS | [M] 1 | PROV | date | all extracted records | `.extraction_date` |
| PP-02.X05 `last_verified_date` | CS | [C] 0..1 | PROV | date | once verification occurs | `.last_verified_date` |
| PP-02.X06 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | all operational records | `.verification_status` |
| PP-02.X07 `verification_notes` | CS | [O] 0..1 | PROV | SRC | when needed | `.verification_notes` |
| PP-02.X08 `ontology_version_used` | CS/OG | [M] 1 | PROV | STATE | all operational records | `.ontology_version_used` |

No mandatory `study_component_id` is introduced. Mixed-design scope remains representable through `study_design_components[]` plus component-aware evidence locators.

## 5. PP-03 — Application

Entity: `PAPER_APPLICATIONS`; paper cardinality `0..N` according to scientific applicability. Each application record is independent.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-03.F01 `application_id` | CS/SER | [M] 1 | N/A | ID | each application record | `applications[].application_id` |
| PP-03.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-03.F03 `primary_application_domain` | CS + CV/TR | [M] 1 | E-LINK | CV/TR | direct demonstrated application record | `.primary_application_domain` |
| PP-03.F04 `application_subdomain` | CS + TR | [C] 0..1 | E-LINK | TR | when hierarchy/source supports it | `.application_subdomain` |
| PP-03.F05 `specific_application` | CS + TR | [C] 0..1 | E-LINK | TR/SRC | concrete demonstrated use case when applicable | `.specific_application` |
| PP-03.F06 `physical_system` | CS + TR | [C] 0..1 | E-LINK | TR/SRC | when applicable/reported | `.physical_system` |
| PP-03.F07 `application_context` | CS | [O] 0..1 | E-LINK | SRC | when context matters | `.application_context` |
| PP-03.F08 `secondary_application_domains[]` | CS + CV/TR | [O] 0..N | E-LINK | CV/TR | additional demonstrated domains only | `.secondary_application_domains[]` |
| PP-03.F09 `related_applications[]` | CS + TR | [O] 0..N | E-LINK | TR | explicitly related, not demonstrated | `.related_applications[]` |
| PP-03.F10 `potential_applications[]` | CS + TR | [O] 0..N | E-LINK | TR | proposed/potential only | `.potential_applications[]` |
| PP-03.F11 `origin_class` | CS + CV | [M] 1 | PROV | CV | each record | `.origin_class` |
| PP-03.F12 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.verification_status` |
| PP-03.F13 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each record | `.ontology_version` |

Hard boundary: demonstrated ≠ related ≠ potential application. Display grouping may never erase those roles.

## 6. PP-04 — Problem

Entity owner: `PAPER_PROBLEMS`. PP-04, PP-05, PP-06 and part of PP-08 are **different profile projections of the same normalized `problems[]` object**. They must not create duplicate problem records.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-04.F01 `problem_id` | CS/SER | [M] 1 | N/A | ID | each problem record | `problems[].problem_id` |
| PP-04.F02 `paper_id` | CS | [M] 1 | N/A | ID | each problem | `.paper_id` |
| PP-04.F03 `physical_problem` | CS + TR | [M] 1 | E-LINK | TR/SRC | each applicable problem | `.physical_problem` |
| PP-04.F04 `governing_equations[]` | CS | [C] 0..N | E-LINK | TR/SRC | when governing equations are applicable/reported | `.governing_equations[]` |
| PP-04.F05 `equation_family` | CS + TR | [C] 0..1 | E-LINK | TR | when classifiable | `.equation_family` |
| PP-04.F06 `boundary_conditions` | CS | [C] 0..1 structured/source representation | E-LINK | SRC/TR | when applicable/reported | `.boundary_conditions` |
| PP-04.F07 `initial_conditions` | CS | [C] 0..1 structured/source representation | E-LINK | SRC/TR | when applicable/reported | `.initial_conditions` |
| PP-04.F08 `physical_constraints[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | source-supported analytically useful constraints | `.physical_constraints[]` |
| ↳ `constraint_type` | CS + CV | 1 per represented constraint object | E-INLINE | CV/extensible | when object exists | object key `.constraint_type` |
| ↳ `target_or_quantity` | CS | 0..1 | E-INLINE | SRC/TR | when reported | `.target_or_quantity` |
| ↳ `mathematical_statement_or_description` | CS | 0..1 | E-INLINE | SRC | when reported | `.mathematical_statement_or_description` |
| ↳ `scope` | CS | 0..1 | E-INLINE | SRC | when scope is material | `.scope` |
| ↳ `evidence_locator` | CS/EP | 0..1 as precisely available | E-INLINE | PROV | when available | `.evidence_locator` |
| PP-04.F09 `problem_class` | CS + TR | [O] 0..1 | E-LINK | TR | when useful/reported | `.problem_class` |
| PP-04.F10 `problem_characteristics[]` | CS + TR | [O] 0..N | E-LINK | TR; canonical/provisional/paper-specific | when materially conditioning the problem | `.problem_characteristics[]`; term-linked/provisional values |
| PP-04.F11 `origin_class` | CS + CV | [M] 1 | PROV | CV | each problem | `.origin_class` |
| PP-04.F12 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each problem | `.verification_status` |
| PP-04.F13 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each problem | `.ontology_version` |

`physical_constraint` ≠ enforcement mechanism. `problem_characteristic` ≠ PINN challenge/failure by default. R-C20 exact-satisfaction may be used only when mathematical construction guarantees exact satisfaction.

## 7. PP-05 — Computational Task

PP-05 is not a separate locked entity. It is the task/objective facet of each `PAPER_PROBLEMS` record and therefore reuses the same `problem_id`.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-05.F01 problem binding (`problem_id`) | CS | 1 | N/A | ID | each task projection | same `problems[].problem_id`; no second task record ID |
| PP-05.F02 `computational_task` | CS + CV/TR | [M] 1 | E-LINK | CV/TR | each applicable problem record | `problems[].computational_task` |
| PP-05.F03 `forward_inverse_classification` | CS + CV/TR | [C] 0..1 | E-LINK | CV/TR | when meaningful | `.forward_inverse_classification` |
| PP-05.F04 `scientific_objective` | CS | [M] 1 | E-LINK | SRC/TR if normalized | each applicable problem | `.scientific_objective` |
| PP-05.F05 `engineering_objective` | CS | [O] 0..1 | E-LINK | SRC/TR | when explicitly present | `.engineering_objective` |
| PP-05.F06 application/problem/task association | ARCH + RR | 0..N query associations | E-LINK where asserted | RR only if registered/provisional relation needed | when multiple scopes need disambiguation | derived association over stable IDs; no new v0.7 field in Task 3.2 |

Physical problem ≠ computational task ≠ scientific/engineering objective.

## 8. PP-06 — PINN Problem / Challenge

PP-06 is the PINN-specific difficulty facet of the same `problems[]` record; it does not absorb general problem characteristics.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-06.F01 problem binding (`problem_id`) | CS | 1 | N/A | ID | each challenge projection | same `problems[].problem_id` |
| PP-06.F02 `PINN_problem_addressed[]` | CS + TR | [O] 0..N | E-LINK | TR | source-supported PINN-specific problem(s) | `problems[].PINN_problem_addressed[]` |
| PP-06.F03 `PINN_challenge_addressed[]` | CS + CV/TR | [O] 0..N | E-LINK | CV/TR | source-supported PINN challenge(s) | `.PINN_challenge_addressed[]` |
| PP-06.F04 term/alias/provisional state | TR | 1 state per normalized concept | PROV + source evidence | TR | whenever a concept is normalized | reference registry term/status; do not flatten provisional/author-defined labels |
| PP-06.F05 mitigation/relationship links | RR | 0..N | E-LINK | RR | only when relation conditions are supported | registered/provisional relationship reference; R-A1-02 remains contextual/provisional unless promoted |

A general problem characteristic is not duplicated into a challenge merely because it can make PINN training difficult.

## 9. PP-07 — PINN Type / Family

Task 3.1 requires PINN Type / Family as a first-class profile section, but locked v0.7 does **not** define a dedicated `pinn_type_id`, `pinn_type_assignment` entity, or complete PINN-type taxonomy. Formal classification is Task 4. Therefore PP-07 is an architecture-level governed projection, not a silent schema amendment.

| Item | Owner | Multiplicity | Evidence | Semantic control | Applicability | Technical serialization |
|---|---|---:|---|---|---|---|
| PP-07.F01 source/current architecture-family expression | CS (`PINN_architecture[]`) + TR | 0..N | E-LINK | TR | where paper reports/uses an architecture/family expression | read from `methodological_features[].PINN_architecture[]`; do not rename as `pinn_type_id` |
| PP-07.F02 canonical/provisional/paper-specific term reference | TR | 0..N | E-LINK/PROV | TR | where a valid L5 term exists | registry reference/projection; no new locked field |
| PP-07.F03 source terminology / author-defined alias | TR | 0..N | E-LINK | TR alias scope | named variants/source taxonomies | preserve exact source label and alias scope |
| PP-07.F04 assignment role/scope | ARCH | 0..N | E-LINK | SRC/TR | when a paper contains multiple families/components | view-level scope derived from existing evidence/component/test-case context; no new v0.7 key |
| PP-07.F05 component/test-case scope | ARCH/EP | 0..N | E-LINK | SRC | mixed/multi-model studies | use evidence `scope_locator` and existing IDs; no mandatory `study_component_id` |
| PP-07.F06 evidence/support projection | L3/EP | 0..N | evidence object itself | STATE | every displayed scientific assignment | query linked evidence/support state; no duplicate evidence fields |

Task 4 may later justify a specialized taxonomy or assignment serialization through governed extension. Until then, PP-07 must not manufacture one.

## 10. PP-08 — Methodology

PP-08 combines `METHODOLOGICAL_FEATURES` with the data/observation facet `problems[].data_regime[]`. It may cross-link to validation/reproducibility, but those owners remain PP-12 and PP-14.

### 10.1 Data and observation context from `PAPER_PROBLEMS`

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-08.D01 problem binding (`problem_id`) | CS | 1 | N/A | ID | each data-regime projection | same `problems[].problem_id` |
| PP-08.D02 `data_regime[]` | CS + CV | [O] 0..N objects | E-INLINE + E-LINK | CV/extensible | when paper reports data amount/quality/labels/role | `problems[].data_regime[]` |
| ↳ `data_role` | CS + CV | 0..1 | E-INLINE | CV/extensible | when reported | `.data_role` |
| ↳ `amount_or_density` | CS + CV | 0..1 | E-INLINE | CV/extensible | only when reported; silence ≠ sparse/dense | `.amount_or_density` |
| ↳ `quality_or_noise` | CS + CV | 0..1 | E-INLINE | CV/extensible | only when reported | `.quality_or_noise` |
| ↳ `label_status` | CS + CV | 0..1 | E-INLINE | CV | only when applicable/reported | `.label_status` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |

### 10.2 `METHODOLOGICAL_FEATURES`

Entity cardinality: `0..N` per paper as scientifically applicable.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-08.M01 `feature_set_id` | CS/SER | [M] 1 | N/A | ID | each method-feature record | `methodological_features[].feature_set_id` |
| PP-08.M02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-08.M03 `PINN_architecture[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported/applicable | `.PINN_architecture[]` |
| PP-08.M04 `model_variable_representation[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | scientifically meaningful model inputs/outputs | `.model_variable_representation[]` |
| ↳ `direction` | CS + CV | 1 when object represented | E-INLINE | CV: `input` / `output` | each interface item | `.direction` |
| ↳ `quantity_or_variable` | CS | 0..1 | E-INLINE | SRC/TR | when reported | `.quantity_or_variable` |
| ↳ `scientific_role` | CS | 0..1 | E-INLINE | SRC/TR | when reported | `.scientific_role` |
| ↳ `representation_type` | CS | 0..1 | E-INLINE | TR/SRC | when reported | `.representation_type` |
| ↳ `network_component_or_scope` | CS | 0..1 | E-INLINE | SRC | multi-network/component studies | `.network_component_or_scope` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M05 `network_configuration[]` | CS | [O] 0..N objects | E-INLINE + E-LINK | SRC/numeric | explicitly reported topology/configuration | `.network_configuration[]` |
| ↳ `component_scope` | CS | 0..1 | E-INLINE | SRC | when multiple components | `.component_scope` |
| ↳ `hidden_layers_or_depth` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.hidden_layers_or_depth` |
| ↳ `width_or_neurons` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.width_or_neurons` |
| ↳ `subnetwork_count` | CS | 0..1 | E-INLINE | numeric | explicitly reported | `.subnetwork_count` |
| ↳ `branch_count` | CS | 0..1 | E-INLINE | numeric | explicitly reported | `.branch_count` |
| ↳ `latent_dimension` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.latent_dimension` |
| ↳ `parameter_count` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.parameter_count` |
| ↳ `connectivity_or_parameter_sharing` | CS | 0..1 | E-INLINE | SRC/TR | explicitly reported | `.connectivity_or_parameter_sharing` |
| ↳ `topology_notes` | CS | 0..1 | E-INLINE | SRC | useful source detail | `.topology_notes` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M06 `physics_enforcement[]` | CS + TR | [O] 0..N | E-LINK | TR | when applicable/reported | `.physics_enforcement[]` |
| PP-08.M07 `physics_integration_mode[]` | CS + CV/TR | [O] 0..N | E-LINK | CV/TR | when applicable/reported | `.physics_integration_mode[]` |
| PP-08.M08 `loss_components[]` | CS + TR | [O] 0..N | E-LINK | TR/SRC | when reported | `.loss_components[]` |
| PP-08.M09 `sampling_strategy[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.sampling_strategy[]` |
| PP-08.M10 `optimizer[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.optimizer[]` |
| PP-08.M11 `training_protocol[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | explicit sequencing/scheduling/control | `.training_protocol[]` |
| ↳ `protocol_type` | CS + CV | 1 when object represented | E-INLINE | CV/extensible | each protocol item | `.protocol_type` |
| ↳ `method_or_strategy` | CS | 0..1 | E-INLINE | TR/SRC | when reported | `.method_or_strategy` |
| ↳ `target_or_scope` | CS | 0..1 | E-INLINE | SRC | when relevant | `.target_or_scope` |
| ↳ `stage_or_order` | CS | 0..1 | E-INLINE | SRC/numeric | staged/sequential controls | `.stage_or_order` |
| ↳ `schedule_or_trigger` | CS | 0..1 | E-INLINE | SRC | when reported | `.schedule_or_trigger` |
| ↳ `parameters_or_values` | CS | 0..1 structured/source value | E-INLINE | SRC | when reported | `.parameters_or_values` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M12 `activation_function[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.activation_function[]` |
| PP-08.M13 `differentiation_method[]` | CS + TR | [O] 0..N scalar or objects | E-LINK; E-INLINE for structured detail | TR/SRC | when reported | `.differentiation_method[]`; legacy scalar and structured forms remain valid |
| ↳ `method` | CS | 1 for structured form | E-INLINE | TR | when structured | `.method` |
| ↳ `operator_or_derivative_target` | CS | 0..1 | E-INLINE | SRC/TR | when reported | `.operator_or_derivative_target` |
| ↳ `spatial_or_temporal_role` | CS | 0..1 | E-INLINE | SRC/CV if governed | when reported | `.spatial_or_temporal_role` |
| ↳ `component_methods[]` | CS | 0..N | E-INLINE | TR/SRC | explicit composite schemes only | `.component_methods[]` |
| ↳ `scheme_family` | CS | 0..1 | E-INLINE | TR/SRC | explicitly reported | `.scheme_family` |
| ↳ `stencil_or_support` | CS | 0..1 | E-INLINE | SRC | explicitly reported | `.stencil_or_support` |
| ↳ `formal_order` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.formal_order` |
| ↳ `spacing_or_scale` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.spacing_or_scale` |
| ↳ `operator_specific_composition` | CS | 0..1 | E-INLINE | SRC | explicitly reported | `.operator_specific_composition` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M14 `geometry_representation[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.geometry_representation[]` |
| PP-08.M15 `domain_decomposition_method[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.domain_decomposition_method[]`; richer structured enrichment remains deferred |
| PP-08.M16 `parallel_execution[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | explicit parallel/distributed execution only | `.parallel_execution[]` |
| ↳ `execution_phase` | CS + CV | 1 when object represented | E-INLINE | CV: training/inference/both | each item | `.execution_phase` |
| ↳ `parallelism_mode` | CS + CV/TR | 0..1 | E-INLINE | CV/extensible | explicitly reported | `.parallelism_mode` |
| ↳ `decomposition_or_model_scope` | CS | 0..1 | E-INLINE | SRC | when reported | `.decomposition_or_model_scope` |
| ↳ `distributed_or_shared_memory_context` | CS | 0..1 | E-INLINE | SRC | when reported | `.distributed_or_shared_memory_context` |
| ↳ `scale_or_worker_count_when_reported` | CS | 0..1 | E-INLINE | numeric/SRC | explicitly reported | `.scale_or_worker_count_when_reported` |
| ↳ `coordination_or_communication_notes` | CS | 0..1 | E-INLINE | SRC | when material | `.coordination_or_communication_notes` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M17 `loss_weighting_method[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | explicit weighting/balancing | `.loss_weighting_method[]`; canonical owner |
| ↳ `method_or_mode` | CS + CV | 1 when object represented | E-INLINE | CV/extensible | each weighting item | `.method_or_mode` |
| ↳ `target_loss_components[]` | CS | 0..N | E-INLINE | TR/SRC | when reported | `.target_loss_components[]` |
| ↳ `weighting_rule_or_update_rule` | CS | 0..1 | E-INLINE | SRC/TR | when reported | `.weighting_rule_or_update_rule` |
| ↳ `schedule_or_stage` | CS | 0..1 | E-INLINE | SRC | when applicable | `.schedule_or_stage` |
| ↳ `reported_values_or_parameters` | CS | 0..1 structured/source value | E-INLINE | SRC | when reported | `.reported_values_or_parameters` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M18 `transformation_method[]` | CS + CV/TR | [O] 0..N objects | E-LINK | CV/TR | transformations before/during solution | `.transformation_method[]` |
| ↳ `role` | CS + CV | 1 when object represented | E-LINK | CV | each transformation | `.role` |
| ↳ `method` | CS | 0..1 | E-LINK | TR/SRC | when reported | `.method` |
| ↳ `target` | CS | 0..1 | E-LINK | SRC/TR | when reported | `.target` |
| ↳ `basis` | CS | 0..1 | E-LINK | SRC/TR | when reported | `.basis` |
| PP-08.M19 `uncertainty_method[]` | CS + TR | [O] 0..N | E-LINK | TR | when reported | `.uncertainty_method[]` |
| PP-08.M20 `software_framework[]` | CS + TR | [O] 0..N | E-LINK | TR/SRC | when methodology reports software/framework | `.software_framework[]` |
| PP-08.M21 `fidelity_source_role[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | explicit multi-fidelity source/workflow semantics | `.fidelity_source_role[]` |
| ↳ `fidelity_level` | CS + CV | 1 when object represented | E-INLINE | CV/extensible | each fidelity item | `.fidelity_level` |
| ↳ `source_type` | CS + CV/TR | 1 when object represented | E-INLINE | CV/extensible | each item | `.source_type` |
| ↳ `workflow_role` | CS + CV/TR | 1 when object represented | E-INLINE | CV/extensible | each item | `.workflow_role` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M22 `derived_output_method[]` | CS + CV/TR | [O] 0..N objects | E-INLINE + E-LINK | CV/TR | scientific quantity derived after inference | `.derived_output_method[]`; sole output-derivation owner |
| ↳ `derived_quantity` | CS | 1 when object represented | E-INLINE | SRC/TR | each derivation | `.derived_quantity` |
| ↳ `source_output[]` | CS | 1..N when object represented | E-INLINE | SRC/TR | each derivation | `.source_output[]` |
| ↳ `derivation_method` | CS | 1 when object represented | E-INLINE | TR/SRC | each derivation | `.derivation_method` |
| ↳ `operation_type` | CS + CV | 1 when object represented | E-INLINE | CV/extensible | each derivation | `.operation_type` |
| ↳ `pipeline_stage` | CS + CV | 1 | E-INLINE | CV (`post_inference`) | each derivation | `.pipeline_stage` |
| ↳ `evidence_locator` | CS/EP | 0..1 | E-INLINE | PROV | as available | `.evidence_locator` |
| PP-08.M23 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each method-feature record | `.ontology_version` |

Critical no-merges: data regime ≠ fidelity role; input/output identity ≠ transformation ≠ derived output; physical constraint ≠ enforcement; network configuration ≠ architecture family; loss component ≠ loss weighting ≠ generic training protocol; training protocol ≠ optimizer/transfer identity; parallel execution ≠ hardware reporting and does not imply domain decomposition. Legacy `adaptive_weighting[]` is migration input only and normalizes losslessly to `loss_weighting_method[]`; it must not coexist as a competing canonical key.

## 11. PP-09 — Contribution

Entity: `PAPER_CONTRIBUTIONS`; `0..N` per paper as applicable. Claim/demonstration fields in the same normalized object are presented separately in PP-10 without copying them.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-09.F01 `contribution_id` | CS/SER | [M] 1 | N/A | ID | each contribution | `contributions[].contribution_id` |
| PP-09.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-09.F03 `main_contribution` | CS | [M] 1 | E-LINK | SRC/TR | each contribution | `.main_contribution` |
| PP-09.F04 `contribution_types[]` | CS + CV/TR | [M] 1..N | E-LINK | CV/TR | each contribution | `.contribution_types[]` |
| PP-09.F05 `methodological_innovation` | CS | [O] 0..1 | E-LINK | SRC/TR | when supported | `.methodological_innovation` |
| PP-09.F06 `algorithmic_innovation` | CS | [O] 0..1 | E-LINK | SRC/TR | when supported | `.algorithmic_innovation` |
| PP-09.F07 `architectural_innovation` | CS | [O] 0..1 | E-LINK | SRC/TR | when supported | `.architectural_innovation` |
| PP-09.F08 `solution_mechanism` | CS | [C] 0..1 | E-LINK | SRC/TR | when a claimed/demonstrated solution mechanism applies | `.solution_mechanism` |
| PP-09.F09 `comparison_baselines[]` | CS | [O] 0..N | E-LINK | TR/SRC | when comparison forms part of contribution | `.comparison_baselines[]` |
| PP-09.F10 `origin_class` | CS + CV | [M] 1 | PROV | CV | each record | `.origin_class` |
| PP-09.F11 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.verification_status` |
| PP-09.F12 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each record | `.ontology_version` |

Contribution ≠ outcome. A contribution statement does not establish successful validation or superiority.

## 12. PP-10 — Claim vs Demonstration

These are fields of the same `contributions[]` records, shown in a dedicated section because their distinction is scientifically mandatory.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-10.F01 contribution binding (`contribution_id`) | CS | 1 | N/A | ID | each claim/demonstration projection | same `contributions[].contribution_id` |
| PP-10.F02 `problem_claimed_to_be_solved` | CS | [C] 0..1 | E-LINK with author-origin role | SRC/TR | when source makes a solution claim | `contributions[].problem_claimed_to_be_solved` |
| PP-10.F03 `problem_actually_demonstrated` | CS | [C] 0..1 | E-LINK with current-paper demonstration evidence | SRC/TR | when demonstrable from current paper | `.problem_actually_demonstrated` |
| PP-10.F04 `generality_claim` | CS | [O] 0..1 | E-LINK | SRC | when author claims generality | `.generality_claim` |
| PP-10.F05 `generality_evidence` | CS | [C] 0..1 | E-LINK | SRC | when generality claim requires/has evidence | `.generality_evidence` |
| PP-10.F06 claim evidence/support state | L3/EP | 0..N projected evidence records | evidence object itself | CV/STATE | when claim displayed | query PP-19 evidence; no duplicate field |
| PP-10.F07 demonstration evidence/support state | L3/EP | 0..N projected evidence records | evidence object itself | CV/STATE | when demonstration displayed | query PP-19 evidence; no duplicate field |

Author claim ≠ actual current-paper demonstration ≠ review synthesis ≠ cited-primary evidence ≠ Atlas inference. A verified evidence record may still be semantically `mismatched` or `conflict_found`.

## 13. PP-11 — Outcome

Entity: `PAPER_OUTCOMES`; `0..N` per paper as applicable.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-11.F01 `outcome_id` | CS/SER | [M] 1 | N/A | ID | each outcome | `outcomes[].outcome_id` |
| PP-11.F02 `paper_id` | CS | [M] 1 | N/A | ID | each outcome | `.paper_id` |
| PP-11.F03 `problem_outcome` | CS + CV | [M] 1 | E-LINK | CV | each applicable outcome | `.problem_outcome` |
| PP-11.F04 `degree_of_resolution` | CS + CV | [M] 1 | E-LINK | CV | each outcome | `.degree_of_resolution` |
| PP-11.F05 `reported_improvement` | CS | [O] 0..1 | E-LINK with context | SRC | explicitly reported | `.reported_improvement` |
| PP-11.F06 `reported_advantages[]` | CS | [O] 0..N | E-LINK | SRC/TR | explicitly reported | `.reported_advantages[]` |
| PP-11.F07 `reported_disadvantages[]` | CS | [O] 0..N | E-LINK | SRC/TR | explicitly reported | `.reported_disadvantages[]` |
| PP-11.F08 `reported_failure_cases[]` | CS | [O] 0..N | E-LINK | SRC/TR | explicitly reported | `.reported_failure_cases[]` |
| PP-11.F09 `origin_class` | CS + CV | [M] 1 | PROV | CV | each outcome | `.origin_class` |
| PP-11.F10 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each outcome | `.verification_status` |
| PP-11.F11 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each outcome | `.ontology_version` |

Negative and inconclusive outcomes are first-class valid states; they must not be hidden to improve completeness optics.

## 14. PP-12 — Validation

Entity: `PAPER_VALIDATION`; `0..N` per paper as applicable. The locked entity does not define an `origin_class` or record-level `verification_status`; Task 3.2 therefore does not invent either. Scientific support is carried through L3 evidence and overall extraction/verification control.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-12.F01 `validation_id` | CS/SER | [M] 1 | N/A | ID | each validation record | `validation[].validation_id` |
| PP-12.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-12.F03 `validation_type[]` | CS + CV | [M] 1..N | E-LINK | CV | each validation record | `.validation_type[]` |
| PP-12.F04 `validation_data_source[]` | CS | [C] 0..N | E-LINK | TR/SRC | when validation uses data/reference source | `.validation_data_source[]` |
| PP-12.F05 `benchmark_type` | CS + TR | [C] 0..1 | E-LINK | TR/SRC | benchmark validation | `.benchmark_type` |
| PP-12.F06 `baseline_methods[]` | CS + TR | [O] 0..N | E-LINK | TR | when compared | `.baseline_methods[]` |
| PP-12.F07 `comparison_result` | CS | [O] 0..1 | E-LINK | SRC | when a validation comparison is reported | `.comparison_result` |
| PP-12.F08 `experimental_validation` | CS | [C] 0..1 | E-LINK | SRC/STATE | when applicable | `.experimental_validation` |
| PP-12.F09 `numerical_validation` | CS | [C] 0..1 | E-LINK | SRC/STATE | when applicable | `.numerical_validation` |
| PP-12.F10 `analytical_validation` | CS | [C] 0..1 | E-LINK | SRC/STATE | when applicable | `.analytical_validation` |
| PP-12.F11 `real_world_validation` | CS | [C] 0..1 | E-LINK | SRC/STATE | when applicable | `.real_world_validation` |
| PP-12.F12 `generalization_tested` | CS | [M] 1 explicit state | E-LINK where positive/negative statement is scientific | STATE | each applicable validation record | `.generalization_tested` |
| PP-12.F13 `robustness_tested` | CS | [M] 1 explicit state | E-LINK where scientific | STATE | each applicable record | `.robustness_tested` |
| PP-12.F14 `noise_tested` | CS | [M] 1 explicit state | E-LINK where scientific | STATE | each applicable record | `.noise_tested` |
| PP-12.F15 `scalability_tested` | CS | [M] 1 explicit state | E-LINK where scientific | STATE | each applicable record | `.scalability_tested` |
| PP-12.F16 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each validation record | `.ontology_version` |

Simulation/numerical validation ≠ clinical/real-world validation. Validation describes how a result was tested; evaluation stores the metric/test-case result records.

## 15. PP-13 — Evaluation

Entity: `EVALUATION_RESULTS`; `0..N` per paper. Separate materially different test cases/conditions into separate records.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-13.F01 `result_id` | CS/SER | [M] 1 | N/A | ID | each result | `evaluation_results[].result_id` |
| PP-13.F02 `paper_id` | CS | [M] 1 | N/A | ID | each result | `.paper_id` |
| PP-13.F03 `metric` | CS + TR | [M] 1 | E-LINK | TR | each result | `.metric` |
| PP-13.F04 `value` | CS | [C] 0..1 | E-LINK | numeric/SRC | when metric value reported | `.value` |
| PP-13.F05 `baseline_value` | CS | [C] 0..1 | E-LINK | numeric/SRC | when comparable baseline exists | `.baseline_value` |
| PP-13.F06 `improvement` | CS | [C] 0..1 | E-LINK | numeric/SRC | when explicitly supported or losslessly derivable under governed rules | `.improvement` |
| PP-13.F07 `test_case` | CS | [M] 1 | E-LINK | SRC/TR | each result | `.test_case` |
| PP-13.F08 `conditions` | CS | [O] 0..1 structured/source context | E-LINK | SRC | when context is material | `.conditions` |
| PP-13.F09 `reference_solution_type` | CS + TR | [O] 0..1 | E-LINK | TR/SRC | when reference solution exists | `.reference_solution_type` |
| PP-13.F10 `comparison_methods[]` | CS + TR | [O] 0..N | E-LINK | TR | when compared | `.comparison_methods[]` |
| PP-13.F11 `performance_summary` | CS | [O] 0..1 | E-LINK | SRC | when source-supported | `.performance_summary` |
| PP-13.F12 `reported_advantages[]` | CS | [O] 0..N | E-LINK | SRC | when directly reported | `.reported_advantages[]` |
| PP-13.F13 `reported_disadvantages[]` | CS | [O] 0..N | E-LINK | SRC | when directly reported | `.reported_disadvantages[]` |
| PP-13.F14 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each result | `.verification_status` |
| PP-13.F15 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each result | `.ontology_version` |
| PP-13.F16 contextual association to validation/method/configuration/hardware/software/phase | ARCH + existing owners | 0..N associations | E-LINK | RR only where a typed edge is justified | contextual performance comparisons | derived/joined view over existing IDs and evidence; no new v0.7 field |

Performance context must retain, where available, problem/test case, training versus inference phase, hardware/software/backend, sample/collocation counts, network size, optimizer/schedule, spatial/temporal scope, comparator configuration and reference solution. Missing context is not reconstructed. Faster convergence ≠ lower wall time.

## 16. PP-14 — Reproducibility

Entity: `REPRODUCIBILITY`; cardinality `1:0..1` per paper. These fields record **author/source reporting state**, not a claim that the Atlas independently reproduced the work.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-14.F01 `reproducibility_id` | CS/SER | [M] 1 when entity used | N/A | ID | applicable paper | `reproducibility.reproducibility_id` |
| PP-14.F02 `paper_id` | CS | [M] 1 | N/A | ID | entity used | `.paper_id` |
| PP-14.F03 `code_available` | CS + CV | [M] 1 four-state | E-LINK when based on source statement | CV/STATE | entity used | `.code_available` |
| PP-14.F04 `code_url` | CS | [C] 0..1 | E-LINK/BIB-PROV | SRC/URL | when code available and URL exists | `.code_url` |
| PP-14.F05 `data_available` | CS + CV | [M] 1 four-state | E-LINK when based on source statement | CV/STATE | entity used | `.data_available` |
| PP-14.F06 `data_url` | CS | [C] 0..1 | E-LINK/BIB-PROV | SRC/URL | available + URL exists | `.data_url`; request-based availability belongs in information, not a fabricated URL |
| PP-14.F07 `model_available` | CS + CV | [O] 0..1 state | E-LINK | CV/STATE | when applicable | `.model_available` |
| PP-14.F08 `reproducibility_information` | CS | [O] 0..1 | E-LINK | SRC | when additional reporting is present | `.reproducibility_information` |
| PP-14.F09 `hyperparameters_reported` | CS + CV | [M] 1 reporting state | E-LINK where needed | CV/STATE | applicable paper | `.hyperparameters_reported` |
| PP-14.F10 `random_seed_reported` | CS + CV | [M] 1 reporting state | E-LINK where needed | CV/STATE | applicable paper | `.random_seed_reported` |
| PP-14.F11 `hardware_reported` | CS + CV | [M] 1 reporting state | E-LINK where needed | CV/STATE | applicable paper | `.hardware_reported` |
| PP-14.F12 `training_cost_reported` | CS + CV | [M] 1 reporting state | E-LINK where needed | CV/STATE | applicable paper | `.training_cost_reported` |
| PP-14.F13 Atlas operational reproduction result | ARCH/FUTURE-X6 | not a current v0.7 field | independent operational provenance | separate governed state | only after an Atlas reproduction attempt exists | must be a separate future operational record; never overwrite `reproducibility` |
| PP-14.F14 Computational Resources cross-link | ARCH bounded integration | 0..N | CR + Atlas provenance | stable `paper_id` + independent `CR` identity | only when future integration checkpoint authorizes | cross-link only; no CR schema absorption or inferred reproducibility equivalence |

`available` ≠ `reported_unavailable` ≠ `not_reported` ≠ `not_applicable`. `reported` ≠ `not_reported` ≠ `not_applicable`. GPU/HPC acknowledgement alone does not establish a reproducibility hardware report or parallel execution.

## 17. PP-15 — Limitations

Entity: `LIMITATIONS`; each limitation is a separate `0..N` record.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-15.F01 `limitation_id` | CS/SER | [M] 1 | N/A | ID | each limitation | `limitations[].limitation_id` |
| PP-15.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-15.F03 `limitation_category` | CS + CV/TR | [M] 1 | E-DIRECT | CV/TR | each limitation | `.limitation_category` |
| PP-15.F04 `limitation_statement` | CS | [M] 1 | E-DIRECT | SRC | each limitation | `.limitation_statement` |
| PP-15.F05 `limitation_scope` | CS | [M] 1 | E-DIRECT | SRC/TR | each limitation | `.limitation_scope` |
| PP-15.F06 `limitation_severity` | CS | [O] 0..1 | E-DIRECT | SRC | only if stated/supported | `.limitation_severity` |
| PP-15.F07 `limitation_source` | CS | [M] 1 | PROV/E-DIRECT | SRC/CV if governed | each limitation | `.limitation_source` |
| PP-15.F08 `explicit_or_inferred` | CS + CV | [M] 1 | PROV | CV/STATE | each limitation | `.explicit_or_inferred` |
| PP-15.F09 `evidence_location` | CS/EP | [M] 1 | evidence itself | PROV | each limitation | `.evidence_location` |
| PP-15.F10 `evidence_text` | CS/EP | [M] 1 | evidence itself | SRC | each limitation | `.evidence_text`; preserve source wording |
| PP-15.F11 `origin_class` | CS + CV | [M] 1 | PROV | CV | each limitation | `.origin_class` |
| PP-15.F12 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each limitation | `.verification_status` |
| PP-15.F13 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each limitation | `.ontology_version` |

A present-study limitation is not automatically a field-wide/PINN-general open problem.

## 18. PP-16 — Open Problems

Entity: `OPEN_PROBLEMS`; each unresolved issue is a separate `0..N` record.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-16.F01 `open_problem_id` | CS/SER | [M] 1 | N/A | ID | each open problem | `open_problems[].open_problem_id` |
| PP-16.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-16.F03 `open_problem_category` | CS + TR/CV | [M] 1 | E-DIRECT | TR/CV | each record | `.open_problem_category` |
| PP-16.F04 `open_problem_statement` | CS | [M] 1 | E-DIRECT | SRC | each record | `.open_problem_statement` |
| PP-16.F05 `research_gap_scope` | CS + CV | [M] 1 | E-DIRECT | CV | each record | `.research_gap_scope` |
| PP-16.F06 `problem_scope` | CS | [M] 1 | E-DIRECT | SRC/TR | each record | `.problem_scope` |
| PP-16.F07 `explicit_or_inferred` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.explicit_or_inferred` |
| PP-16.F08 `author_stated_or_atlas_inferred` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.author_stated_or_atlas_inferred` |
| PP-16.F09 `persistence_status` | CS | [O] 0..1 | E-LINK/PROV | STATE/SRC | when later persistence is assessed | `.persistence_status` |
| PP-16.F10 `evidence_location` | CS/EP | [M] 1 | evidence itself | PROV | each record | `.evidence_location` |
| PP-16.F11 `evidence_text` | CS/EP | [M] 1 | evidence itself | SRC | each record | `.evidence_text` |
| PP-16.F12 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.verification_status` |
| PP-16.F13 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each record | `.ontology_version` |

Paper open problem ≠ Atlas cross-paper research gap. Atlas gaps remain L7 synthesis products with independent support counting and contradictory evidence.

## 19. PP-17 — Future Work

Entity: `FUTURE_WORK`; each proposed direction is a separate `0..N` record.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-17.F01 `future_work_id` | CS/SER | [M] 1 | N/A | ID | each future-work item | `future_work[].future_work_id` |
| PP-17.F02 `paper_id` | CS | [M] 1 | N/A | ID | each record | `.paper_id` |
| PP-17.F03 `future_work_statement` | CS | [M] 1 | E-DIRECT | SRC | each record | `.future_work_statement` |
| PP-17.F04 `future_work_type` | CS + CV/TR | [M] 1 | E-DIRECT | CV/TR | each record | `.future_work_type` |
| PP-17.F05 `future_work_target` | CS | [M] 1 | E-DIRECT | SRC/TR | each record | `.future_work_target` |
| PP-17.F06 `future_work_scope` | CS | [M] 1 | E-DIRECT | SRC/TR | each record | `.future_work_scope` |
| PP-17.F07 `priority_if_stated` | CS | [C] 0..1 | E-DIRECT | SRC | only if stated | `.priority_if_stated` |
| PP-17.F08 `timeframe_if_stated` | CS | [C] 0..1 | E-DIRECT | SRC | only if stated | `.timeframe_if_stated` |
| PP-17.F09 `explicit_or_inferred` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.explicit_or_inferred` |
| PP-17.F10 `evidence_location` | CS/EP | [M] 1 | evidence itself | PROV | each record | `.evidence_location` |
| PP-17.F11 `evidence_text` | CS/EP | [M] 1 | evidence itself | SRC | each record | `.evidence_text` |
| PP-17.F12 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each record | `.verification_status` |
| PP-17.F13 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each record | `.ontology_version` |

Future work ≠ current demonstrated capability and must not be automatically converted into an open problem or Atlas recommendation.

## 20. PP-18 — Diagnostic Pathways

Entity: `PAPER_DIAGNOSTIC_PATHWAYS`; optional repeatable `0..N`. Create a record only when the source supports a meaningful diagnostic chain. Components preserve separate support states.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-18.F01 `diagnostic_id` | CS/SER | [M] 1 | N/A | ID | each pathway | `diagnostic_pathways[].diagnostic_id` |
| PP-18.F02 `paper_id` | CS | [M] 1 | N/A | ID | each pathway | `.paper_id` |
| PP-18.F03 `failure_mode_or_problem` | CS + TR | [M] 1 | component evidence required | TR/SRC | pathway trigger | `.failure_mode_or_problem` |
| PP-18.F04 `observed_symptoms[]` | CS + TR | [O] 0..N | component evidence | TR/SRC | when source reports symptom(s) | `.observed_symptoms[]` |
| PP-18.F05 `diagnosed_cause_or_mechanism[]` | CS + TR | [O] 0..N | component evidence | TR/SRC | when source diagnoses cause/mechanism | `.diagnosed_cause_or_mechanism[]` |
| PP-18.F06 `discriminating_checks_or_analyses[]` | CS + TR | [O] 0..N | component evidence | TR/SRC | when reported | `.discriminating_checks_or_analyses[]` |
| PP-18.F07 `interventions_or_responses[]` | CS + TR | [O] 0..N | component evidence | TR/SRC | when applied/proposed in source | `.interventions_or_responses[]` |
| PP-18.F08 `targeted_improvements[]` | CS | [O] 0..N | component evidence | SRC/TR | when reported | `.targeted_improvements[]` |
| PP-18.F09 `verification_result_ids[]` | CS | [O] 0..N FKs | N/A; target result has evidence | ID | when existing evaluation/validation records verify component | `.verification_result_ids[]`; all FKs must resolve |
| PP-18.F10 `verification_metrics[]` | CS | [O] 0..N | component evidence | TR/SRC | when no result ID is appropriate | `.verification_metrics[]` |
| PP-18.F11 `directly_reported_tradeoffs[]` | CS | [O] 0..N | component evidence | SRC | only directly reported trade-offs | `.directly_reported_tradeoffs[]` |
| PP-18.F12 `component_evidence_links[]` | CS/EP | [M] 1..N objects sufficient to cover scientifically asserted components | evidence linkage itself | CV/STATE | every pathway | `.component_evidence_links[]` |
| ↳ `component_type` | CS + CV | 1 per link | N/A | CV | each evidence link | `.component_type` |
| ↳ `evidence_id` | CS/EP | 1 per link | evidence anchor | ID | each link | `.evidence_id`; must resolve |
| ↳ `support_status` | CS + CV | 1 per link | semantic support state | CV/STATE | each link | `.support_status` |
| PP-18.F13 `scope_notes` | CS | [O] 0..1 | E-LINK if scientifically material | SRC | when scope needs clarification | `.scope_notes` |
| PP-18.F14 `verification_status` | CS + CV | [M] 1 | PROV | CV/STATE | each pathway | `.verification_status` |
| PP-18.F15 `ontology_version` | CS/OG | [M] 1 | PROV | STATE | each pathway | `.ontology_version` |

Observed symptom ≠ diagnosed cause. Intervention/response ≠ verified improvement. Adjacency inside a source-supported pathway does not automatically create a corpus-global causal edge. Atlas Failure-Diagnostics categories/recommendations remain L7 synthesis and are not copied into the paper record.

## 21. PP-19 — Evidence / Provenance

Entity: `EVIDENCE`; `0..N` per paper, but every synthesis-relevant scientific record must resolve to evidence. Evidence is serialized separately from normalized paper data so provenance review is independent from normalized-record edits.

| Item | Owner | Multiplicity / req. | Evidence | Semantic control | Applicability | Serialization |
|---|---|---:|---|---|---|---|
| PP-19.F01 `evidence_id` | CS/SER | [M] 1 | evidence anchor | ID | each evidence record | separate paper evidence JSON; stable/immutable ID |
| PP-19.F02 `paper_id` | CS | [M] 1 | evidence anchor | ID | each evidence record | evidence record `.paper_id` |
| PP-19.F03 `evidence_category` | CS | [M] 1 | evidence metadata | TR/CV if governed | each evidence record | `.evidence_category` |
| PP-19.F04 `linked_entity_type` | CS | [M] 1 | evidence linkage | ID/STATE | each record | `.linked_entity_type` |
| PP-19.F05 `linked_record_id` | CS | [M] 1 | evidence linkage | ID | each record | `.linked_record_id`; must resolve |
| PP-19.F06 `normalized_statement` | CS | [M] 1 | evidence interpretation | SRC/TR | each record | `.normalized_statement`; revisable classification, not raw quote |
| PP-19.F07 `verbatim_evidence` | CS/OG/EP | [M] 1 | raw evidence itself | SRC | each record | `.verbatim_evidence`; immutable after capture except explicit correction/supersession history |
| PP-19.F08 `source_section` | CS/EP | [M] 1 | locator | SRC | each record | `.source_section` |
| PP-19.F09 `source_subsection` | CS/EP | [C] 0..1 | locator | SRC | when available/applicable | `.source_subsection` |
| PP-19.F10 `page` | CS/EP | [C] 0..1 | locator | SRC | when available/applicable | `.page` |
| PP-19.F11 `paragraph` | CS/EP | [C] 0..1 | locator | SRC | when available/applicable | `.paragraph` |
| PP-19.F12 `figure` | CS/EP | [C] 0..1 | locator | SRC | figure evidence | `.figure` |
| PP-19.F13 `table` | CS/EP | [C] 0..1 | locator | SRC | table evidence | `.table` |
| PP-19.F14 `appendix` | CS/EP | [C] 0..1 | locator | SRC | appendix evidence | `.appendix` |
| PP-19.F15 `evidence_type` | CS + CV | [M] 1 | evidence metadata | CV | each record | `.evidence_type` |
| PP-19.F16 `statement_strength` | CS + CV | [M] 1 | evidence metadata | CV | each record | `.statement_strength` |
| PP-19.F17 `author_or_reviewer` | CS + CV | [M] 1 | provenance | CV | each record | `.author_or_reviewer`; preserve exact current v0.7 origin semantics |
| PP-19.F18 `evidence_source_role` | CS + CV | [M] 1 | provenance | CV | each record | `.evidence_source_role` |
| PP-19.F19 `scope_locator` | CS/EP | [O] 0..1 | provenance | SRC | mixed/component-scoped evidence | `.scope_locator`; replaces need for mandatory `study_component_id` |
| PP-19.F20 `verification_status` | CS + CV | [M] 1 | workflow state | CV/STATE | each record | `.verification_status` |
| PP-19.F21 `support_status` | CS + CV | [M] 1 | semantic support state | CV/STATE | each record | `.support_status`; independent of verification |
| PP-19.F22 `verified_by` | CS | [C] 0..1 | provenance | ID/SRC | after verification | `.verified_by` |
| PP-19.F23 `verification_date` | CS | [C] 0..1 | provenance | date | after verification | `.verification_date` |
| PP-19.F24 `verification_notes` | CS | [O] 0..1 | provenance | SRC | when needed | `.verification_notes` |
| PP-19.F25 profile-wide evidence index | ARCH/L3 | derived 0..N | evidence records themselves | N/A | every Paper Profile | query all evidence by `paper_id`; never duplicate evidence objects in `papers/P-XXXX.json` |
| PP-19.F26 section/record evidence grouping | ARCH/L3 | derived 0..N | evidence records themselves | N/A | when rendering PP-02–PP-18 | group by `linked_entity_type`/`linked_record_id`, component links and scope locator; detailed drawer behavior belongs to Task 3.4 |

Verification status answers whether an item was checked; support status answers what the checked evidence establishes. `verified + mismatched` is a valid combination and must remain representable.

## 22. Cross-section linkage contract

The Paper Profile must preserve the following associations without introducing convenience duplicates:

| Association | Current representation rule | Task 3.2 decision |
|---|---|---|
| paper ↔ every child scientific record | stable `paper_id` | mandatory stable join; one bibliographic identity |
| application ↔ problem | existing record IDs + evidence/context; RR relation only where scientifically justified | derived association; do not add a generic unconditional edge |
| problem ↔ computational task/objective | same `problems[]` object | direct same-record projection; no duplicate task entity |
| problem ↔ PINN challenge | same `problems[]` object plus TR/RR semantics | preserve distinction; no automatic characteristic→failure edge |
| problem/data context ↔ methodology | `problem_id`, method records, evidence scope | view/query association; no data-regime duplication under method object |
| methodology/configuration ↔ test case/evaluation | stable record IDs + evidence/conditions | contextual association; exact physical junction may be designed in Task 12 if needed |
| validation ↔ evaluation | validation/result IDs + context/evidence where existing | query association; validation ≠ result |
| comparator ↔ evaluation result | `comparison_methods[]`, baseline fields, test case/conditions/evidence | context must remain attached; no global superiority edge |
| outcome ↔ demonstration evidence | outcome/contribution records + L3 evidence | query by evidence and scope; contribution ≠ outcome |
| diagnostic component ↔ verification result | `verification_result_ids[]` + `component_evidence_links[]` | explicit governed linkage |
| scientific record ↔ evidence | `EVIDENCE.linked_entity_type` + `linked_record_id`; component links where required | mandatory for synthesis-relevant content |
| normalized concept ↔ taxonomy | L5 term IDs/status/aliases where feasible | preserve canonical/provisional/paper-specific state; no arbitrary string flattening |
| paper relation ↔ relationship registry | registered canonical/provisional relation IDs where needed | context/evidence required; no framework-derived automatic relation |
| Paper Profile ↔ Computational Resources | future stable `paper_id` ↔ independent `CR` identity | bounded external integration only; no CR absorption or inferred equivalence |

No mandatory `study_component_id` is created. Existing repeatable records + section/chapter/component-aware evidence locators remain the governing solution unless a later adversarial case proves a stable irreducible linking failure.

## 23. Applicability contract

Task 3.3 will define UI visibility/display logic, but the scientific applicability rules are already fixed here:

1. `PP-01` and the core `PP-02` identity/extraction projection apply to every operational paper record.
2. Review/synthesis scope is present only for applicable review/systematic-review/bibliometric components.
3. PP-03–PP-14 and PP-18 are populated only for scientific components that actually support those primary/reanalysis records; review-scope material must not be forced into them.
4. PP-15–PP-17 are repeatable only when evidence supports a limitation, open problem or future-work item; absence of a record is not a claim that none exists.
5. PP-19 evidence is cross-cutting. Every material scientific assertion entering normalization/synthesis requires evidence even when its profile section is otherwise optional.
6. Mixed papers preserve component/source scope through evidence roles and locators rather than collapsing review, cited, adapted, reanalysis and current-paper-original content.
7. `not_applicable`, `not_reported`, `reported_unavailable`, `mismatched`, `conflict_found` and analogous governed states remain semantically explicit where defined.

## 24. Technical serialization contract for the profile

The Paper Profile is a **read projection**, not a second canonical JSON model. Current SER ownership remains:

```text
papers/P-XXXX.json
  paper
  review_synthesis_scope            # when applicable
  applications[]
  problems[]
  contributions[]
  outcomes[]
  validation[]
  methodological_features[]
  evaluation_results[]
  reproducibility                   # 0..1
  diagnostic_pathways[]
  limitations[]
  open_problems[]
  future_work[]
  extraction_control
  implementation_metadata

evidence/P-XXXX.evidence.json
  evidence provenance records
```

PP-04/PP-05/PP-06/PP-08 may render different facets of `problems[]`; PP-09/PP-10 render different facets of `contributions[]`. They must use the same normalized source objects rather than materializing competing copies. PP-19 reads the separate evidence store. PP-07 remains an L5/architecture projection until Task 4 formally governs PINN Type / Variant classification.

Task 3.2 does **not** choose SQL tables/columns. The later Task 12 relational design must reproduce this ownership/cardinality/evidence contract without changing scientific meaning.

## 25. Locked structures deliberately not added

Task 3.2 explicitly refuses to create:

- mandatory `study_component_id`;
- `physical_knowledge_representation[]`;
- competing `solution_postprocessing[]`;
- competing canonical `adaptive_weighting[]` after migration to `loss_weighting_method[]`;
- richer mandatory structured `domain_decomposition_method[]` enrichment while it remains deferred;
- a new `pinn_type_id` / PINN-type assignment table before Task 4 governance;
- per-paper Design Stack graph fields;
- per-paper Co-Design synthesis edges;
- per-paper 14×7 / 98-cell Design–Performance matrix fields;
- Atlas-generated diagnostic categories/recommendations as source-paper fields;
- Atlas research gaps/opportunities as if they were paper-owned evidence;
- Computational Resources `CR` fields or resource identity inside the scientific Paper Profile schema.

Any later need for such a structure must enter the controlled X1–X9 lifecycle and, where scientifically structural, a governed post-v0.7 ontology version with changelog, migration and QA.

## 26. Coverage and acceptance audit

Task 3.2 field coverage was audited against the locked CS plus the Task-2/Task-3 architecture:

- first-class Paper Profile sections: **19/19 mapped**;
- Task-2.2 L4 permanent conceptual facets: **20/20 represented**;
- locked paper/profile schema entities represented: **16/16** (`PAPERS`, `REVIEW_SYNTHESIS_SCOPE`, `PAPER_APPLICATIONS`, `PAPER_PROBLEMS`, `PAPER_CONTRIBUTIONS`, `PAPER_OUTCOMES`, `PAPER_VALIDATION`, `METHODOLOGICAL_FEATURES`, `EVALUATION_RESULTS`, `REPRODUCIBILITY`, `PAPER_DIAGNOSTIC_PATHWAYS`, `LIMITATIONS`, `OPEN_PROBLEMS`, `FUTURE_WORK`, `EVIDENCE`, `EXTRACTION_CONTROL`);
- locked top-level fields across those entities: **244/244 mapped**;
- explicitly structured locked subfields: **73/73 mapped**;
- locked field/subfield mappings total: **317/317**;
- conceptual PP-07 PINN Type / Family: represented without manufacturing a new locked field/entity;
- L2-only bibliographic projection: retained under bibliographic authority without pretending it is a new CS field;
- evidence/provenance requirement: explicit for every scientific field family;
- vocabulary/taxonomy/relationship ownership: explicit and kept separate;
- serialization owner/path: explicit for every locked field family or marked architecture-only when no locked serialization exists;
- locked-v0.7 field/entity additions made by Task 3.2: **0**;
- profile-field orphan count: **0**;
- prohibited/deferred structure silently revived: **0**;
- Computational Resources boundary violations: **0**.

### Scientific acceptance result

**PASS.** The complete Paper Profile can be expanded field-by-field under the locked v0.7 authority without silently changing the ontology, flattening evidence semantics, duplicating normalized owners, or absorbing L7/Computational-Resources objects into paper-level scientific truth.

## 27. Stop boundary

Task 3.2 ends with the field-level scientific/architectural contract above.

**Task 3.3 has not been started.**

Exact next action, only when separately authorized: **Task 3.3 — define conditional profile sections and display logic**, using the Task 3.1 section identities and this Task 3.2 field/applicability/ownership contract as mandatory inputs.