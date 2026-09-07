# Task 3 — Status Register

Date: 2026-09-07

Status: **IN PROGRESS**

Parent contract: frozen Master Plan v1.0 (`TASK-1.7-MASTER-PLAN-V1.0-FREEZE.md`).

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

| Roadmap item | Status | Authoritative execution record |
|---|---|---|
| 3.1 Define all first-class Paper Profile sections | **PASS — COMPLETE** | `TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md` |
| 3.2 Expand every section field-by-field | **PASS — COMPLETE** | `TASK-3.2-PAPER-PROFILE-FIELD-SPECIFICATION.md` |
| 3.3 Define conditional profile sections and display logic | **PASS — COMPLETE** | `TASK-3.3-CONDITIONAL-PROFILE-SECTIONS-AND-DISPLAY-LOGIC.md` |
| 3.4 Define evidence/provenance drill-down behavior | **PASS — COMPLETE** | `TASK-3.4-EVIDENCE-PROVENANCE-DRILLDOWN-BEHAVIOR.md` |
| 3.5 Create a machine-readable profile specification in GitHub | **PASS — COMPLETE** | `TASK-3.5-MACHINE-READABLE-PAPER-PROFILE-SPECIFICATION.md` + `atlas-paper-profile-spec.json` |
| 3.6 Create a Paper Profile UI mockup before implementation | **NEXT** | Not started |

## Task 3.1 completion boundary

Task 3.1 defines the complete first-class semantic Paper Profile architecture as 19 stable sections:

`PP-01` Bibliographic Identity; `PP-02` Study / Extraction Identity; `PP-03` Application; `PP-04` Problem; `PP-05` Computational Task; `PP-06` PINN Problem / Challenge; `PP-07` PINN Type / Family; `PP-08` Methodology; `PP-09` Contribution; `PP-10` Claim vs Demonstration; `PP-11` Outcome; `PP-12` Validation; `PP-13` Evaluation; `PP-14` Reproducibility; `PP-15` Limitations; `PP-16` Open Problems; `PP-17` Future Work; `PP-18` Diagnostic Pathways; `PP-19` Evidence / Provenance.

The profile is an L8 read/delivery projection composed from governed L2 bibliographic identity, L3 evidence/provenance, L4 verified paper scientific knowledge and L5 semantic identities/relations. It is not a new scientific owner.

Task 3.1 coverage:

- requested first-class profile sections = **19/19**;
- Task 2.2 L4 permanent conceptual facets mapped = **20/20**;
- profile-section conceptual orphan count = **0**;
- new locked-v0.7 scientific fields/entities = **0**;
- Computational Resources separation = **preserved**.

L4-P6 Data & Observation Context remains explicitly represented within PP-08 Methodology and may later be cross-referenced to Problem/Validation/Evaluation; it is not lost and Task 3.1 does not create an unsupported twentieth first-class scientific section.

All critical semantic separations remain mandatory, including problem ≠ task ≠ challenge; contribution ≠ outcome; claim ≠ demonstration; validation ≠ evaluation; limitation ≠ open problem ≠ future work ≠ Atlas gap; paper diagnostic pathway ≠ L7 diagnostic synthesis; raw evidence ≠ normalized record ≠ Atlas inference/synthesis.

## Task 3.2 completion boundary

Task 3.2 expands `PP-01`–`PP-19` field-by-field against the locked v0.7 owners. For every locked field family and structured subfield it records authoritative owner, multiplicity/requirement, evidence/provenance obligation, controlled-vocabulary/taxonomy/relationship semantics, scientific applicability and current technical serialization.

Coverage/result:

- first-class Paper Profile sections mapped = **19/19**;
- Task-2.2 L4 permanent conceptual facets represented = **20/20**;
- locked paper/profile schema entities represented = **16/16**;
- locked top-level fields mapped = **244/244**;
- explicitly structured locked subfields mapped = **73/73**;
- locked field/subfield mappings total = **317/317**;
- locked-v0.7 field/entity additions = **0**;
- profile-field orphan count = **0**;
- prohibited/deferred structures silently revived = **0**;
- Computational Resources boundary violations = **0**.

The specification treats the Paper Profile as a read projection rather than a competing serialized scientific owner. `PP-04`/`PP-05`/`PP-06`/part of `PP-08` project different facets of the same normalized `problems[]` records; `PP-09`/`PP-10` project different facets of the same `contributions[]` records; PP-19 reads the separate L3 evidence store.

`PP-07` PINN Type / Family remains an architecture/L5 projection over existing governed concepts and `PINN_architecture[]`; Task 3.2 does not manufacture `pinn_type_id` or a new locked assignment entity before Task 4.

`PAPER_VALIDATION` is represented exactly as locked: no unsupported `origin_class` or record-level `verification_status` was added. Workflow/scientific support remains available through L3 evidence and extraction control.

No mandatory `study_component_id`, `physical_knowledge_representation[]`, competing `solution_postprocessing[]`, competing canonical `adaptive_weighting[]`, premature PINN-type entity, framework-synthesis paper fields, or Computational Resources fields were introduced.

## Task 3.3 completion boundary

Task 3.3 defines deterministic conditional section/body rendering over the Task-3.1/3.2 contract without creating new scientific ownership.

Core decisions:

- all **19/19** `PP-01`–`PP-19` semantic section identities remain permanently discoverable in a fixed section-status index;
- exactly **3/3** core section bodies always render: `PP-01`, `PP-02`, `PP-19`;
- exactly **16/16** scientific section bodies (`PP-03`–`PP-18`) are conditional on scientific applicability, represented governed content, explicit semantic states, integrity-forced visibility or review-mode pending content;
- applicability, represented-content state and scientific integrity are separate display axes and are never collapsed into one ambiguous status;
- `not_applicable` is not treated as missing; empty arrays are not treated as negative evidence or `not_reported`;
- verified negative/inconclusive outcomes, conflicts, mismatches, provisional terms and source-local terms remain visible;
- review-only papers use `REVIEW_SYNTHESIS_SCOPE` and do not populate direct scientific sections from cited-study content;
- mixed papers preserve current-paper/reanalysis/review/cited/adapted source/component scope without introducing mandatory `study_component_id`;
- public verified mode excludes unreviewed AI/extraction proposals from scientific claims, while maintenance mode may show them as clearly separate pending content;
- no generic profile-completeness percentage may be computed from field filling;
- mobile/compact/export views must preserve the same scientific distinctions;
- new locked-v0.7 fields/entities = **0**;
- silently revived prohibited/deferred structures = **0**;
- Computational Resources boundary violations = **0**.

The authoritative decision record is `TASK-3.3-CONDITIONAL-PROFILE-SECTIONS-AND-DISPLAY-LOGIC.md`.

## Task 3.4 completion boundary

Task 3.4 defines the auditable Paper Profile evidence/provenance interaction contract:

`profile record/component → L3 evidence set → exact evidence record → source locator/source context → L5 semantic/provenance trace`.

Core results:

- PP-19 locked evidence fields covered = **24/24** (`F01`–`F24`);
- PP-19 derived evidence index/grouping projections covered = **2/2** (`F25`–`F26`);
- Task-3.2 evidence/provenance classes governed = **6/6** (`BIB-PROV`, `E-LINK`, `E-INLINE`, `E-DIRECT`, `PROV`, `N/A`);
- verification status and support status remain independent, including valid `verified + mismatched` representation;
- source roles preserve current-paper original/reanalysis/review/cited/adapted/unclear provenance;
- source text and Atlas normalized interpretation remain separate;
- record, component, PP-19 index and integrity-warning drill-down entry points are all specified;
- conflicts/mismatches are never hidden by positive-only evidence filtering;
- evidence counts cannot be presented as evidence strength or independent-study counts;
- inline/direct evidence plus L3 evidence cannot be double-counted;
- public verified evidence and maintenance/pending evidence remain separated;
- locator/source URL invention is prohibited;
- logical deep-link restoration includes `paper_id`, `PP-xx`, record/component identity and `evidence_id` where selected;
- evidence/history/correction display preserves immutable original source evidence;
- adversarial evidence/provenance cases covered = **15/15**;
- new locked-v0.7 fields/entities = **0**;
- silently revived prohibited/deferred structures = **0**;
- Computational Resources boundary violations = **0**.

The authoritative decision record is `TASK-3.4-EVIDENCE-PROVENANCE-DRILLDOWN-BEHAVIOR.md`.

## Task 3.5 completion boundary

Task 3.5 creates `atlas-paper-profile-spec.json` as a non-authoritative L8 machine-readable coordination contract and `validate-paper-profile-spec.py` as a read-only drift validator.

Core results:

- stable Paper Profile sections = **19/19**;
- explicit Task-3.2 profile coordinates bound = **274**;
- deterministic nested structured subfield IDs = **73**;
- total machine-readable profile field IDs = **347**;
- locked Task-3.2 mappings preserved = **317/317** (`244` top-level + `73` structured subfields);
- additional non-locked profile coordinates = **30**, retained only as documented bibliographic/technical/L3/ARCH/future-bounded projections;
- core body sections = **3/3**; conditional body sections = **16/16**;
- display-rule references = **18/18** (`R-D01`–`R-D18`);
- evidence/provenance classes = **6/6**; evidence entry points = **4/4**; drill-down stages = **5/5**;
- machine-readable spec scientific-authority flag = **false**;
- machine-readable spec may-define-scientific-meaning flag = **false**;
- new locked-v0.7 fields/entities = **0**;
- Computational Resources boundary violations = **0**.

For every explicit coordinate, Task 3.2 remains the owner/multiplicity/evidence/semantic/applicability/serialization source. Nested IDs are deterministic profile coordinates and do not rename the underlying scientific keys. The validator is intended to detect cross-artifact drift; its source was syntax-checked during construction, but an executed repository validator run is not claimed in this connector session.

The authoritative decision record is `TASK-3.5-MACHINE-READABLE-PAPER-PROFILE-SPECIFICATION.md`.

## Exact next action

Proceed only to **Task 3.6 — create the Paper Profile UI mockup before implementation**, using Tasks 3.1–3.5 and `atlas-paper-profile-spec.json` as controlling design inputs without implementing a production page/route.

**STOP boundary: Task 3.6 has not been started.**
