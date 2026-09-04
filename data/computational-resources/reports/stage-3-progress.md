# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S064 |
| Next scale-out checkpoint | Stage3-S065 |
| Latest checkpoint resource | CR000073 |
| Forward frontier resource | CR000073 |
| Next resource | CR000074 |
| Next planned checkpoint resources | CR000074 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069, CR000070, CR000071, CR000072, CR000073 — 8 / 10 |
| Completed Stage-3 technical resource records | 78 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 285 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 138 |
| Completed configuration count | 287 |
| Technical evidence records | 1038 |
| Static reproducibility assessments | 78 |
| Current QA status | PASS |
| Current unresolved technical item count | 498 |
| Next unresolved ID | S3U-0499 |
| Current conflicting-evidence finding count | 93 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S064` completes `CR000073`, preserving final Stage-2 authority for `https://github.com/Shengfeng233/PINN-Preprocess`, pinned commit `ca2efdbe82792898ec7542c087a48c1df4a83609`, MIT license, and verified official relationship `PRL000162` to Atlas paper 533.

The resource is represented as a **PINN implementation** for preprocessing studies in 2D unsteady incompressible Navier–Stokes flow reconstruction. One bounded comparative experiment captures three configurations: Baseline, InnerNorm, and full Normalization. The repository maps four Reynolds-number flow cases and uses external MAT training/reference data, PyTorch automatic differentiation, Adam with exponential learning-rate decay, a W&B grid sweep, and relative-L2 evaluation for `u`, `v`, and `p`.

Static reproducibility is **R1**. The pinned source, license, entrypoint, equations, preprocessing paths, architecture, hyperparameters, case mapping, checkpoint logic, and evaluation metric are explicit, but package versions, installation instructions, explicit random seeds, exact hardware provenance, immutable run artifacts, and bundled datasets are absent; the main sweep also depends on an external Weights & Biases service/account.

The exact next independently extractable resource is **`CR000074`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 78 Stage-3 resource records complete, **285** remain.

## Current batch — SOB007

Canonical completed members: CR000066–CR000073. Current canonical completion: **8 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S064`: **78 resources, 138 experiments, 287 configurations, 1038 technical-evidence records, 78 reproducibility assessments, 498 unresolved findings, 93 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S065`** with **`CR000074`**.
