# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S254`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1464**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1465`

## New findings in S254

- `S3U-1460` — CR000302 / canonical_hostname_conflict / medium / **explicit conflict**: Stage 1 preserves `yan.cce.illinois.edu`, while the primary paper reports `yan.cee.illinois.edu`. Stage 3 preserves CR000302 and both source values; no silent canonical rewrite is made.
- `S3U-1461` — CR000302 / resolution_folder_semantics_conflict / medium / **explicit conflict**: The pinned README says `resolution` contains PINN cases with different numbers of neurons, but the four pinned scripts all use four hidden layers of width 200 and vary `N_f` from 10,000 to 40,000.
- `S3U-1462` — CR000302 / complete_paper_level_artifact_bundle_not_verified / medium: The paper promises datasets and PINN code at the corrected group hostname, while the verified supporting repository exposes only a 1D demo. A complete paper-level bundle is not established.
- `S3U-1463` — CR000302 / environment_and_license_incomplete / low: The scripts import TensorFlow, NumPy, SciPy, pyDOE, and Matplotlib without version pins or an installation manifest, and Stage 2 identified no reusable repository licence.
- `S3U-1464` — CR000302 / fem_mat_payload_not_independently_inspected / low: `1D/dat/thermal_fine.mat` is present and code accesses `x`, `tt`, and `Tem`, but the binary MAT payload was not opened; its internal schema and values are not independently verified.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
