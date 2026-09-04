# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S068 |
| Next scale-out checkpoint | Stage3-S069 |
| Latest checkpoint resource | CR000078 |
| Forward frontier resource | CR000078 |
| Next resource | CR000079 |
| Next planned checkpoint resources | CR000079 |
| Current scale-out batch | SOB008 |
| Current batch completed members | CR000076–CR000078 — 3 / 10 |
| Completed Stage-3 technical resource records | 83 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 280 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 143 |
| Completed configuration count | 300 |
| Technical evidence records | 1084 |
| Static reproducibility assessments | 83 |
| Current QA status | PASS |
| Current unresolved technical item count | 531 |
| Next unresolved ID | S3U-0532 |
| Current conflicting-evidence finding count | 95 |
| Aggregate batch QA | SOB001–SOB007 PASS; SOB008 in progress 3 / 10 |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S068` completes `CR000078`.

`CR000078` preserves final Stage-2 authority for `https://github.com/arkadaw9/PID-GAN` at pinned commit `476792f63dcc61b334dadec1e35c5587f3cde97a`, with verified official relationship `PRL000171` to Atlas paper 562 and repository license remaining unknown.

The pinned repository is materially heterogeneous: PDE benchmarks include Burgers, Darcy, and Schrödinger, while imperfect-physics cases include tossing and collision; comparison surfaces include PID-GAN, PIG-GAN, PINN, APINN, and cGAN. Under the accepted bounded-extraction rule, S068 records one directly inspected representative Burgers PID-GAN experiment/configuration and preserves the remaining repository breadth as capability/scope evidence rather than proliferating records.

The representative Burgers workflow uses PyTorch autograd for the Burgers residual, a physics-probability term `exp(-lambda * residual^2)` supplied to the discriminator, generator/discriminator/Q-network MLPs, Adam optimizers, 30,000 epochs, 10,000 collocation points, explicit NumPy seed 1234, bundled `burgers_shock.mat`, and 500 posterior samples for relative-L2/residual/variance evaluation. Static control-flow inspection additionally shows that `train_generator` declares `range(5)` but returns within the first iteration, yielding one effective generator update per call; this is preserved as a high-severity unresolved code defect. No notebook or scientific workload was executed.

Static reproducibility is R1: source, bundled data, architecture, mathematics, training code, hyperparameters, and one NumPy seed are available, but no dependency/version manifest, installation procedure, exact runtime/hardware provenance, complete stochastic seeding, trained checkpoint, or repository license is available; the early-return defect further limits exact workflow interpretation.

`SOB008` is now 3/10. Aggregate batch QA is not yet due. The exact next independently extractable resource is **`CR000079`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 83 Stage-3 resource records complete, **280** remain.

## Current cumulative totals

After `Stage3-S068`: **83 resources, 143 experiments, 300 configurations, 1084 technical-evidence records, 83 reproducibility assessments, 531 unresolved findings, 95 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S069`** with **`CR000079`**.
