# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S065 |
| Next scale-out checkpoint | Stage3-S066 |
| Latest checkpoint resource | CR000074 |
| Forward frontier resource | CR000074 |
| Next resource | CR000075 |
| Next planned checkpoint resources | CR000075 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069, CR000070, CR000071, CR000072, CR000073, CR000074 — 9 / 10 |
| Completed Stage-3 technical resource records | 79 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 284 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 139 |
| Completed configuration count | 289 |
| Technical evidence records | 1048 |
| Static reproducibility assessments | 79 |
| Current QA status | PASS |
| Current unresolved technical item count | 505 |
| Next unresolved ID | S3U-0506 |
| Current conflicting-evidence finding count | 93 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S065` completes `CR000074`, preserving final Stage-2 authority for `https://github.com/AdamCobb/hamiltorch`, pinned commit `19b627b2aabc77c1b4b78db0f860372eb1bf9778`, BSD-2-Clause license, and relationship `PRL000163` to Atlas paper 536 as **not_verified** with manual review still required.

The resource is represented as **supporting probabilistic-inference software**, not as a PINN implementation. The pinned package exposes HMC, NUTS, RMHMC, multiple integration schemes and metric choices. One bounded synthetic 3D Gaussian multiple-chain HMC experiment records parallel and serial configurations, with 400 samples, step size 0.3, five integration steps per sample, four workers, and explicit seeds 0–7.

Static reproducibility is **R1**. The pinned source, BSD license, package version 0.4.1, installation instructions, PyTorch minimum version, synthetic target, sampler parameters, seeds, and archived notebook outputs are explicit, but exact dependency locking, operating-system/runtime reconstruction, and machine provenance are insufficiently specified for R2. Archived timing outputs were not reproduced and are retained only as notebook provenance.

The exact next independently extractable resource is **`CR000075`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 79 Stage-3 resource records complete, **284** remain.

## Current batch — SOB007

Canonical completed members: CR000066–CR000074. Current canonical completion: **9 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S065`: **79 resources, 139 experiments, 289 configurations, 1048 technical-evidence records, 79 reproducibility assessments, 505 unresolved findings, 93 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S066`** with **`CR000075`**.
