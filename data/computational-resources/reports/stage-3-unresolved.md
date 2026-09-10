# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S183`

## Current totals

- Unresolved findings: **1247**
- Explicit conflicts: **140**
- Next unresolved ID: `S3U-1248`

## New findings in S183

- `S3U-1242` — CR000205 / license / high: No repository license is identified at the pinned commit.
- `S3U-1243` — CR000205 / environment / high: No formal dependency/environment manifest or installation procedure is available, so the accepted R2 environment gate is not satisfied.
- `S3U-1244` — CR000205 / training / high / **explicit conflict**: README states 10,000 iterations and Adam learning rate 0.0005 for all models, while pinned SPINN source sets `nIter = 100001` and configures a `1e-8` optimizer branch after iteration 500.
- `S3U-1245` — CR000205 / sampling / high / **explicit conflict**: README states `100^2` collocation points for all models, while pinned Simple PINN and SA-PINN sources construct 101 points on each axis.
- `S3U-1246` — CR000205 / provenance / medium: README reports five repetitions with different random seeds, but the bounded pinned tree exposes fixed PRNG keys in the individual scripts and no repository-level five-run repetition driver or exact five-run seed set.
- `S3U-1247` — CR000205 / relationship / medium: The README links motivating SPINN literature, but final Stage-2 authority records no project citation metadata and no Atlas-paper relationship; none is inferred.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
