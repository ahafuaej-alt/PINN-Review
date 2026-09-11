# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S192`

## Current totals

- Unresolved findings: **1297**
- Explicit conflicts: **143**
- Next unresolved ID: `S3U-1298`

## New findings in S192

- `S3U-1292` — CR000214 / legacy_environment / medium: The documented workflow targets Ubuntu 18.04, Python 3.6.9, OpenFOAM 5 and TensorFlow 1.15; compatibility with newer TensorFlow/OpenFOAM stacks is not established.
- `S3U-1293` — CR000214 / archive_scope / medium: Three bundled ZIP archives and the TensorFlow C-API tarball are inventoried statically but their archive internals were not unpacked in Stage 3.
- `S3U-1294` — CR000214 / binary_provenance / medium: Bundled protobuf, HDF5, TensorBoard and compiled-object artifacts are present, but their exact build/training provenance is not independently reconstructed by static inspection.
- `S3U-1295` — CR000214 / workflow_maturity / low: The ML_LES workflow is explicitly marked work in progress and is therefore not promoted to a completed experiment/configuration.
- `S3U-1296` — CR000214 / in_situ_stability / medium: The IN_SITU workflow is explicitly work in progress and the root documentation warns that some training instances can segfault for unfavorable randomized initial weights/biases; no runtime incidence rate is established.
- `S3U-1297` — CR000214 / activation_conflict / medium / **explicit conflict**: The ML_RANS README documents a ReLU network example while the pinned active `ML_Model.py` uses tanh hidden activations.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.