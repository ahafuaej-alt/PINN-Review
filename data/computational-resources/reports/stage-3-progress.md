# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S112`.
- Latest completed canonical batch: `SOB012` — **PASS**.
- Current canonical batch: `SOB013`.
- Current batch status: **0/10 independently extractable members complete**.
- Latest completed resources: `CR000126`, `CR000127`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000128`.
- Next checkpoint: `Stage3-S113`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **130**
- Experiments: **216**
- Configurations: **413**
- Technical-evidence records: **1500**
- Static reproducibility assessments: **130**
- Unresolved findings: **829**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **233**

## Latest checkpoint

`Stage3-S112` completed `CR000126` and `CR000127`. CR000126 preserves the Stage-2 pinned ClimODE SHA `e729d23e8799ce0e075699e76d60227d848d8d0c`, MIT license, and verified official `PRL000247` relationship to Atlas 717. Three source-explicit ClimODE forecasting workflows are represented: global, global-monthly, and regional. ClimODE is treated as a physics-informed neural ODE method, not a classical PDE-residual PINN.

CR000127 preserves the verified Zenodo DOI and `PRL000249` relationship to Atlas 718. The primary paper establishes PI-RFR as recurrent feature-reasoning image inpainting initialized with numerical climate-model spatial patterns and reports ideal and realistic Antarctic reconstruction experiments. Archive internals were not directly inspectable, so paper-level claims remain source-scoped and no source-internal experiment/configuration records were manufactured.

CR000126 is R2 and CR000127 is R1. No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB012` contains exactly `CR000118` through `CR000127` and is **PASS (10/10)** after aggregate QA. `SOB013` begins at `CR000128`.

## Continuation

Resume only from `CR000128` for `Stage3-S113`.
