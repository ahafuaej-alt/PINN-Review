# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S069 |
| Next scale-out checkpoint | Stage3-S070 |
| Latest checkpoint resource | CR000079 |
| Forward frontier resource | CR000079 |
| Next resource | CR000080 |
| Next planned checkpoint resources | CR000080 |
| Current scale-out batch | SOB008 |
| Current batch completed members | CR000076–CR000079 — 4 / 10 |
| Completed Stage-3 technical resource records | 84 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 279 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 145 |
| Completed configuration count | 302 |
| Technical evidence records | 1096 |
| Static reproducibility assessments | 84 |
| Current QA status | PASS |
| Current unresolved technical item count | 540 |
| Next unresolved ID | S3U-0541 |
| Current conflicting-evidence finding count | 96 |
| Aggregate batch QA | SOB001–SOB007 PASS; SOB008 in progress 4 / 10 |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S069` completes `CR000079`.

`CR000079` preserves final Stage-2 authority for `https://github.com/romiele/W-NetGAN` at pinned commit `48e692a835d16385aac8122ac756828ae11730f5`, with verified official relationship `PRL000173` to Atlas paper 568 and repository license remaining unknown.

The pinned repository is materially heterogeneous across separate synthetic and Norne seismic-to-facies inversion entrypoints, custom W-NetGAN/forward-model/data-loader modules, bundled reservoir-data and simulator-output artifacts, and a code path capable of invoking bundled `DSS.C.64.exe`. S069 therefore applies the accepted single-resource complexity rule and records two bounded workflow experiments/configurations without executing either workflow.

The synthetic defaults use a 100×1×80 grid, 501 epochs, batch size 128, Adam at 1e-3, StepLR decay 0.5 every 20 epochs, 16 simulations, and a host-specific `D:/` project root. The Norne defaults use a 109×79×75 grid, the same epoch/batch/learning-rate baseline, StepLR every 50 epochs, content-loss weight 1, and precomputed training data by default. The GAN module implements transposed-convolutional generators and a three-stream discriminator scoring facies, seismic, and joint facies-seismic consistency.

A source-scope conflict is preserved: final Stage-2 authority records `no_bundled_research_dataset_identified`, while the same pinned repository tree contains `Dataset_norne` data files and simulator-output artifacts. Stage 2 remains read-only; Stage 3 records both claims explicitly rather than rewriting the authoritative historical record.

Static reproducibility is R1: source, entrypoints, architecture, substantial data artifacts, hyperparameters and evaluation code are visible, but dependency versions, installation, explicit seed control, hardware/runtime provenance, portable path configuration, and executable/simulator reconstruction are not pinned.

`SOB008` is now 4/10. Aggregate batch QA is not yet due. The exact next independently extractable resource is **`CR000080`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 84 Stage-3 resource records complete, **279** remain.

## Current cumulative totals

After `Stage3-S069`: **84 resources, 145 experiments, 302 configurations, 1096 technical-evidence records, 84 reproducibility assessments, 540 unresolved findings, 96 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, simulator, executable, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S070`** with **`CR000080`**.
