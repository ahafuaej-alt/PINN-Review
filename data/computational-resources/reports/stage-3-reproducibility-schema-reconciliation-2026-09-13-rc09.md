# Stage 3 reproducibility-schema reconciliation — RC09

Date: 2026-09-13  
Reconciliation: `Stage3-RC09`  
Branch: `data/computational-resources-stage3`

## Finding

Pre-S264 cumulative schema readback found that the accepted `stage3-reproducibility.schema.json` requires `components`, `reproducibility_gaps`, `assessment_evidence_ids`, and `assessment_status`. `Stage3-S233` is the last adjacent checkpoint using that accepted structure. `Stage3-S234` introduced a shorthand shape using `classification_basis`, `evidence_ids`, `limitations`, and `r5_prohibited`, and that incompatible shape persists continuously through `Stage3-S263`.

The affected interval contains 30 reproducibility files and 38 records, covering `CR000275–CR000312`. The defect concerns record structure, not resource identity, scientific evidence, reproducibility level, or cumulative counts.

## Reconciliation

RC09 normalizes all 38 affected records back to the unchanged accepted schema. Published `resource_id` and `reproducibility_level` values are preserved exactly. Existing evidence identifiers are transferred losslessly to `assessment_evidence_ids`, and existing limitations become `reproducibility_gaps`. Required `components` are reconstructed conservatively from the already-published classification basis and linked evidence, preserving `unknown`, `not_available`, `not_applicable`, and verified/documented distinctions. No prerequisite is promoted merely to satisfy a higher reproducibility class.

The non-schema `r5_prohibited` key is removed. This does not relax the R5 prohibition: the accepted methodology and schema continue to permit only R0–R4.

Historical checkpoint QA records remain historical publication records. RC09 supersedes only the reproducibility-schema PASS assertions for S234–S263; it does not rewrite checkpoint membership, scientific conclusions, unresolved findings, conflicts, or batch arithmetic.

## Count neutrality and boundaries

Counts remain unchanged at 309 resources, 353 experiments, 628 configurations, 3005 technical-evidence records, 309 reproducibility assessments, 1501 unresolved findings, and 154 explicit conflicts. `SOB030` remains 9/10. Exact continuation remains `CR000313 → Stage3-S264`.

Stage 1, Stage 2, accepted methodology and schemas, `05-curated/`, public Atlas/site files, and `main` are unchanged. No scientific software, notebook, model, training, inference, solver, benchmark, dataset payload, or container was executed.

Detailed scope is recorded in `reproducibility-schema-reconciliation-2026-09-13-rc09-changes.json`; reconciliation QA is recorded in `reproducibility-schema-reconciliation-2026-09-13-rc09-qa.json`.
