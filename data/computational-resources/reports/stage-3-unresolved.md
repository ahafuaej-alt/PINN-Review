# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S205`

## Current totals

- Unresolved findings: **1368**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1369`

## New findings in S205

- `S3U-1364` — CR000234 / license / medium: No repository license file or repository license metadata is available at the pinned source; no SPDX license is inferred.
- `S3U-1365` — CR000234 / dependency_manifest / low: README documents three exact runtime versions, but setup.py declares no install_requires dependency set, so the package manifest is incomplete.
- `S3U-1366` — CR000234 / runtime_validation / low: Documented NeuralUQ UQ methods and PINN/operator support remain source-scoped; no scientific workload was executed.
- `S3U-1367` — CR000234 / example_scope / low: Numerous example scripts and notebooks remain documentation/support material and are not promoted to standalone Stage-3 experiments.
- `S3U-1368` — CR000234 / dataset_asset_scope / low: Bundled SciML benchmark data and pretrained model arrays remain heterogeneous support assets rather than a separately normalized standalone research dataset.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
