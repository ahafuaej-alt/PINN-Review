# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S204`

## Current totals

- Unresolved findings: **1363**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1364`

## New findings in S204

- `S3U-1359` — CR000233 / dependency_pinning / low: Core requirements use minimum/range constraints and scikit-learn is unversioned; no fully immutable transitive environment is established.
- `S3U-1360` — CR000233 / optional_environment / low: Optional dev/docs/examples/KeOps/Pyro/test groups have heterogeneous version constraints and were not normalized into one environment.
- `S3U-1361` — CR000233 / runtime_validation / low: GPU acceleration and scalable GP inference claims remain documentation-scoped; no scientific workload was executed.
- `S3U-1362` — CR000233 / example_scope / low: Repository examples/tutorials remain library documentation and are not promoted to standalone Stage-3 experiments.
- `S3U-1363` — CR000233 / dataset_scope / low: Bundled example/test archives and model assets remain support material rather than a standalone PINN research dataset.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
