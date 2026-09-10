# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S184`

## Current totals

- Unresolved findings: **1253**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1254`

## New findings in S184

- `S3U-1248` — CR000206 / license / high: No repository license is identified at the pinned commit.
- `S3U-1249` — CR000206 / environment / high: No formal dependency/environment manifest or installation procedure is available, so the accepted R2 environment gate is not satisfied.
- `S3U-1250` — CR000206 / data / high: `dataset.py` requires `./Data/Dataset_square`, but the complete pinned tree contains no Data directory or MAT dataset.
- `S3U-1251` — CR000206 / implementation / high / **explicit conflict**: The active `model_train.py` forward path references `F_x/F_y/F_z`, `W_brx/W_bry/W_brz`, and `u_B`, while `model_run.py` initializes `W_br1`–`W_br4`/`W_br_fnn` and the CNN path producing `u_B` is commented out; runtime consequence is not asserted.
- `S3U-1252` — CR000206 / hardware / medium: Hardware provenance is not documented; `main.py` queries GPU devices but this does not establish actual execution hardware.
- `S3U-1253` — CR000206 / relationship / medium: README cites motivating PI-DeepONet, SA-PINN and SPINN literature, but final Stage-2 authority records no project citation metadata and no Atlas-paper relationship; none is inferred.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
