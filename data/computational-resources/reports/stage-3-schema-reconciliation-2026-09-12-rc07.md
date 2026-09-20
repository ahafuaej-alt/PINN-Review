# Stage 3 cumulative schema reconciliation — RC07

Date: 2026-09-12
Reconciliation: `Stage3-RC07`
Branch: `data/computational-resources-stage3`
Expected parent: `3143c34ce9df2eed7e47e3fa1493dadc275b24fa`

## Scope and decision

A full-corpus readback against the accepted Stage3-D01 schemas found 58 enum-invalid values across 35 records in 16 files published after Stage3-RC05. The affected checkpoints are `Stage3-S183`, `Stage3-S184`, `Stage3-S189`–`Stage3-S191`, `Stage3-S195`, `Stage3-S196`, and `Stage3-S202`, spanning `SOB020`–`SOB022`.

RC07 normalizes those values to the already accepted vocabulary. It is count-neutral and does not change scientific identities, Stage-2 authority, pinned SHAs, relationships, fact values, evidence IDs, experiments, configurations, reproducibility levels, unresolved findings, or explicit-conflict counts. Historical checkpoint and batch QA records remain historical publication records; RC07 supersedes only their affected schema-pass assertions.

## Lossless vocabulary mappings

- `CR000205`: `pinn_variant_implementation` → `pinn_implementation`.
- `CR000206`: `physics_informed_operator_or_operator_learning` → `physics_informed_operator_learning`; the pinned PI-DeepONet source supports the specific accepted role.
- `CR000218`, `CR000219`, and `CR000220`: `paper_code_collection_or_tutorial` → `tutorial_educational`, and `repository` → `source_repository`.
- Five `conflicting` field states → `conflicting_evidence` in the linked CR000220 and CR000230 resource, evidence, and reproducibility records.
- Six `repository_metadata` evidence types → `repository_documented`.
- Four `dependency_manifest` evidence types → `environment_file`.
- Twenty-nine `documented_by_repository` source relations → `documented_in_repository`.

The six nonstandard `conflicts_with` source relations were resolved by source scope rather than blind substitution:

- CR000205's README/source comparison is represented as `inferred_from_evidence`; its supporting evidence row is correspondingly paired as `evidence_type: inferred`.
- CR000206's active-path inconsistency remains `implemented_in_code`.
- CR000212's README/requirements disagreement remains `documented_in_repository`.

This produces 59 field edits in total: 58 invalid-enum corrections plus one necessary evidence-type alignment for the accepted inference pairing.

The complete field-by-field before/after record is preserved in [`schema-reconciliation-2026-09-12-rc07-changes.json`](../03-technical/batch-qa/schema-reconciliation-2026-09-12-rc07-changes.json).

## Cumulative validation

All 248 resource records, 339 experiment records, 609 configuration records, 2,550 technical-evidence records, and 248 reproducibility assessments validate against the unchanged accepted schemas. Cumulative identifier uniqueness, reciprocal resource/experiment/configuration membership, evidence ownership and reference resolution, evidence-use completeness, inference pairing, missing-value labels, and R5 exclusion pass.

`SOB020`, `SOB021`, and `SOB022` retain their accepted memberships and count deltas after correction. `SOB023` remains the latest completed aggregate batch at 10/10 PASS. `SOB024` remains 8/10.

## Boundaries and continuation

Stage 1, historical Stage 2, accepted methodology and schemas, `05-curated/`, public Atlas/site files, and `main` are unchanged. No scientific software, notebook, dependency, dataset, model, training, inference, evaluation, test, container, or benchmark was executed.

Published cumulative totals remain 248 resources, 339 experiments, 609 configurations, 2,550 technical-evidence records, 248 reproducibility assessments, 1,384 unresolved findings, and 146 explicit conflicts. Exactly 115 independently extractable resources remain.

After atomic publication and post-commit verification, exact continuation remains `CR000251 → Stage3-S217`.
