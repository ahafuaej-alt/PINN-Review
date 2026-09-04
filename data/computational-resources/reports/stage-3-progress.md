# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S063 |
| Next scale-out checkpoint | Stage3-S064 |
| Latest checkpoint resource | CR000072 |
| Forward frontier resource | CR000072 |
| Next resource | CR000073 |
| Next planned checkpoint resources | CR000073 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069, CR000070, CR000071, CR000072 — 7 / 10 |
| Completed Stage-3 technical resource records | 77 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 286 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 137 |
| Completed configuration count | 284 |
| Technical evidence records | 1026 |
| Static reproducibility assessments | 77 |
| Current QA status | PASS |
| Current unresolved technical item count | 490 |
| Next unresolved ID | S3U-0491 |
| Current conflicting-evidence finding count | 93 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S063` completes `CR000072`, preserving final Stage-2 authority for `https://github.com/loshchil/SGDR`, pinned commit `5269a615448b93d6ab5926b4402eaaf1dafca230`, no identified repository license, and verified official relationship `PRL000161` to Atlas paper 532.

The resource is represented as **supporting software / optimizer research code**, not as a PINN implementation. One bounded experiment captures the repository's SGDR Wide-Residual-Network image-classification workflow, with two configurations for CIFAR-10 and CIFAR-100. The pinned source exposes 28 scenarios, five run indices, WRN-28 width factors 10/20, batch size 128, 200 epochs, SGD momentum 0.9, weight decay 0.0005, warm-restart periods 1/10/50/100, and test-loss/test-accuracy evaluation.

Static reproducibility is **R1**. The source, entrypoint, architecture, scenario grid, hyperparameters and evaluation/output logic are explicit, but the pinned repository contains only `README.md` and `SGDR_WRNs.py`: no license, dependency manifest, version pins, installation procedure, bundled CIFAR data, explicit random seed, exact hardware provenance, or archived model checkpoints are available.

The exact next independently extractable resource is **`CR000073`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 77 Stage-3 resource records complete, **286** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`
- `Stage3-S059`: `CR000068`
- `Stage3-S060`: `CR000069`
- `Stage3-S061`: `CR000070`
- `Stage3-S062`: `CR000071`
- `Stage3-S063`: `CR000072`

Current canonical completion: **7 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S063`:

- Stage-3 technical resource records: **77**
- experiments: **137**
- configurations: **284**
- technical-evidence records: **1026**
- static reproducibility assessments: **77**
- unresolved findings: **490**
- explicit conflicting-evidence findings: **93**

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S064`** with **`CR000073`**.
