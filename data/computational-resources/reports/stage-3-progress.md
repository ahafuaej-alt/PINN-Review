# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S058 |
| Next scale-out checkpoint | Stage3-S059 |
| Latest checkpoint resource | CR000067 |
| Forward frontier resource | CR000067 |
| Next resource | CR000068 |
| Next planned checkpoint resources | CR000068 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067 — 2 / 10 |
| Completed Stage-3 technical resource records | 72 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 291 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 125 |
| Completed configuration count | 271 |
| Technical evidence records | 964 |
| Static reproducibility assessments | 72 |
| Current QA status | PASS |
| Current unresolved technical item count | 451 |
| Next unresolved ID | S3U-0452 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S058` completes `CR000067`, preserving final Stage-2 authority for `https://github.com/amirgholami/adahessian`, pinned commit `85ebc00ce873c8497a64ca80bbfa5d996109efea`, MIT license, and `PRL000156` official relationship to Atlas paper 519.

AdaHessian is represented as **supporting software**, not a PINN/PDE implementation. Its pinned repository is materially broad, with PyTorch image-classification, TensorFlow, and transformer/fairseq implementation families; therefore S058 is a single-resource checkpoint. One explicit paper-reproduction workflow is materialized: CIFAR-10 image classification with a ResNet-20 and AdaHessian under the pinned PyTorch environment.

Static reproducibility is **R2**. The repository provides environment creation instructions, a strongly pinned Python/PyTorch/CUDA environment, entrypoint, seed, optimizer hyperparameters, reproduction scripts and checkpoint/evaluation logic. R3 is withheld because CIFAR-10 acquisition is external, exact GPU/run-state provenance is incomplete, and `cudnn.benchmark=True` does not establish deterministic replay.

The exact next independently extractable resource is **`CR000068`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 72 Stage-3 resource records complete, **291** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`

Current canonical completion: **2 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S058`:

- Stage-3 technical resource records: **72**
- experiments: **125**
- configurations: **271**
- technical-evidence records: **964**
- static reproducibility assessments: **72**
- unresolved findings: **451**
- explicit conflicting-evidence findings: **89**

S058 adds one resource, one experiment, one configuration, ten evidence records, one reproducibility assessment, six bounded unresolved findings, and no new explicit conflict.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S059`** with **`CR000068`**.
