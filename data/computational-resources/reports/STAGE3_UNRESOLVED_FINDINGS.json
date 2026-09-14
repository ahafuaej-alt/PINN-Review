# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-14
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S312`
Latest reconciliation: `Stage3-RC10` — PASS

## Current totals

- Unresolved findings: **1669**
- Explicit conflicts: **158**
- Next unresolved ID: `S3U-1670`

## New findings in S312

- `S3U-1663` — CR000364 / static_runtime_validation_unresolved / high: Stage-3 inspection is static; dependencies, training, inference and evaluation were not executed.
- `S3U-1664` — CR000364 / dependency_version_pinning_unresolved / medium: `requirements.txt` names the runtime dependencies but pins no dependency versions, and `setup.py` does not constrain the Python/runtime compatibility surface.
- `S3U-1665` — CR000364-E002 / cavity_dataset_availability_unresolved / high: the steady-cavity workflow references `../../data/cavity_steady/`, which is absent from the pinned repository and was not acquired in Stage 3.
- `S3U-1666` — CR000364-E003 / navier_stokes_dataset_availability_unresolved / high: the Navier–Stokes workflow references `../../data/Navier_Stokes/ns_V1e-3_N5000_T50.mat`, which is absent from the pinned repository and was not acquired in Stage 3.
- `S3U-1667` — CR000364 / hardware_environment_unresolved / medium: the example scripts contain GPU-selection/memory-growth logic, but no reproducible hardware or accelerator target is specified.
- `S3U-1668` — CR000364 / documented_results_reproduction_unresolved / high: README comparative-performance statements and `examples/results.png` were not independently reproduced or linked to a statically verified run lineage.
- `S3U-1669` — CR000364 / checkpoint_artifacts_unresolved / medium: no trained-model checkpoint artifacts are bundled at the pinned snapshot.

## New explicit conflicts in S312

None. Existing conflicts remain preserved.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC10 changes only the independently extractable corpus denominator and is count-neutral for unresolved findings and conflicts. S312 completes extraction of the corrected 361-resource corpus but does not resolve historical findings automatically.
