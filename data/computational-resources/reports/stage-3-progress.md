# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S070 |
| Next scale-out checkpoint | Stage3-S071 |
| Latest checkpoint resource | CR000080 |
| Forward frontier resource | CR000080 |
| Next resource | CR000081 |
| Next planned checkpoint resources | CR000081 |
| Current scale-out batch | SOB008 |
| Current batch completed members | CR000076–CR000080 — 5 / 10 |
| Completed Stage-3 technical resource records | 85 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 278 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 147 |
| Completed configuration count | 306 |
| Technical evidence records | 1108 |
| Static reproducibility assessments | 85 |
| Current QA status | PASS |
| Current unresolved technical item count | 549 |
| Next unresolved ID | S3U-0550 |
| Current conflicting-evidence finding count | 96 |
| Aggregate batch QA | SOB001–SOB007 PASS; SOB008 in progress 5 / 10 |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S070` completes `CR000080`.

`CR000080` preserves final Stage-2 authority for `https://github.com/qsxiong/ssm_cnn` at pinned commit `34edcc0e0f35607facd30d26b77d1e21ac147039`, with verified official relationship `PRL000174` to Atlas paper 569 and repository license remaining unknown.

The pinned repository contains only `README.md` and the 3,787,749-byte `ssm_cnn_kernel.ipynb`. The notebook separates a numerical MSDS study from experimental validation on a five-story library building, with conventional deep 1D CNN and physics-informed extended-state-space SSM-CNN variants in both sections. S070 therefore applies the accepted single-resource complexity rule and records two experiments and four configurations without executing notebook cells or scientific workloads.

The numerical comparison uses a 25% test split with `random_state=0`, 200 epochs, batch size 20, Adam at 1e-3 and early-stopping patience 50. The experimental comparison uses a 20% validation split with `random_state=0`, 500 epochs, batch size 20, Adam at 1e-3 and early-stopping patience 400. Baseline variants use MSE; physics-informed variants use the notebook's custom extended-state-space/kinematic loss.

The experimental workflow requires external CSV files through the host-specific root `D:/research work/Pyhsical SSM-CNN/data/`; no research data are bundled in the pinned repository. Static reproducibility is R1 because source, architectures, training logic and key hyperparameters are visible, while dependency versions, installation, external data, complete model-training seed control, hardware/runtime provenance and portable checkpoints are not pinned.

`SOB008` is now 5/10. Aggregate batch QA is not yet due. The exact next independently extractable resource is **`CR000081`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 85 Stage-3 resource records complete, **278** remain.

## Current cumulative totals

After `Stage3-S070`: **85 resources, 147 experiments, 306 configurations, 1108 technical-evidence records, 85 reproducibility assessments, 549 unresolved findings, 96 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, simulator, executable, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S071`** with **`CR000081`**.
