# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S061 |
| Next scale-out checkpoint | Stage3-S062 |
| Latest checkpoint resource | CR000070 |
| Forward frontier resource | CR000070 |
| Next resource | CR000071 |
| Next planned checkpoint resources | CR000071 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069, CR000070 — 5 / 10 |
| Completed Stage-3 technical resource records | 75 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 288 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 133 |
| Completed configuration count | 279 |
| Technical evidence records | 998 |
| Static reproducibility assessments | 75 |
| Current QA status | PASS |
| Current unresolved technical item count | 473 |
| Next unresolved ID | S3U-0474 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S061` completes `CR000070`, preserving final Stage-2 authority for `https://github.com/Shengfeng233/PINN-for-NS-equation`, pinned commit `961d1e23a1a41ec1d7072c81a4ee9d43444e125e`, the absence of an identified repository license, and verified official relationship PRL000159 to Atlas paper 526.

The resource is represented as a **PINN implementation** for sparse-data reconstruction of two-dimensional unsteady incompressible flow past a circular cylinder at `Re=3900`. One bounded experiment/configuration captures the explicit 36-measurement workflow, a 3→10×32→3 tanh network, incompressible Navier-Stokes residual enforcement by PyTorch automatic differentiation, Adam training with exponential learning-rate decay, Latin-hypercube collocation sampling, and relative-L2 evaluation of `u`, `v`, and `p`.

Static reproducibility is **R1**. Source, physics formulation, architecture, major training hyperparameters, bundled sparse training data, evaluation implementation, a pretrained state-dict artifact, and comparison outputs are visible. R2 is withheld because no dependency/version manifest, installation specification, explicit seed, hardware provenance, repository license, or bundled copy of the configured full validation MAT dataset establishes dependable reconstruction.

The exact next independently extractable resource is **`CR000071`**. Bounded preinspection shows that it spans multiple PDE families and optimizer/PINN variants, so it should receive its own checkpoint rather than being paired with CR000070.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 75 Stage-3 resource records complete, **288** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`
- `Stage3-S059`: `CR000068`
- `Stage3-S060`: `CR000069`
- `Stage3-S061`: `CR000070`

Current canonical completion: **5 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S061`:

- Stage-3 technical resource records: **75**
- experiments: **133**
- configurations: **279**
- technical-evidence records: **998**
- static reproducibility assessments: **75**
- unresolved findings: **473**
- explicit conflicting-evidence findings: **89**

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S062`** with **`CR000071`**.
