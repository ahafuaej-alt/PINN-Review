# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-14
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S311`
Latest reconciliation: `Stage3-RC10` — PASS

## Current totals

- Unresolved findings: **1662**
- Explicit conflicts: **158**
- Next unresolved ID: `S3U-1663`

## New findings in S311

- `S3U-1657` — CR000363 / static_runtime_validation_unresolved / high: Stage-3 inspection is static; dependencies, training, inference and evaluation were not executed.
- `S3U-1658` — CR000363 / hardware_environment_unresolved / medium: hardware and accelerator requirements for reproducing the documented workflows were not established at the pinned snapshot.
- `S3U-1659` — CR000363 / rve_data_lineage_unresolved / high: bundled RVE pickle files are present, but exact generation, transformation and split lineage was not fully reconciled.
- `S3U-1660` — CR000363 / pretrained_artifact_lineage_unresolved / high: bundled trained-model artifacts are present, but run lineage and checksums were not independently verified.
- `S3U-1661` — CR000363 / documented_results_reproduction_unresolved / high: README accuracy and speedup statements were not independently reproduced.
- `S3U-1662` — CR000363 / partial_dependency_pinning_unresolved / medium: the requirements manifest pins the principal TensorFlow/JAX stack, but `cmcrameri` and `matplotlib` are unpinned.

## New explicit conflicts in S311

None. Existing conflicts remain preserved.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC10 changes only the independently extractable corpus denominator and is count-neutral for unresolved findings and conflicts.
