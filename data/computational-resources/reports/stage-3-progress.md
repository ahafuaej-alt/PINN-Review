# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S066 |
| Next scale-out checkpoint | Stage3-S067 |
| Latest checkpoint resource | CR000075 |
| Forward frontier resource | CR000075 |
| Next resource | CR000076 |
| Next planned checkpoint resources | CR000076 |
| Current scale-out batch | SOB008 |
| Current batch completed members | none — 0 / 10 |
| Completed Stage-3 technical resource records | 80 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 283 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 141 |
| Completed configuration count | 298 |
| Technical evidence records | 1060 |
| Static reproducibility assessments | 80 |
| Current QA status | PASS |
| Current unresolved technical item count | 513 |
| Next unresolved ID | S3U-0514 |
| Current conflicting-evidence finding count | 94 |
| Aggregate batch QA | SOB001–SOB007 PASS; SOB008 not started |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S066` completes `CR000075`, preserving final Stage-2 authority for `https://github.com/mosaic-group/inverse-dirichlet-pinn`, pinned commit `157a3ed4f401e6d94940872ac6e91fa95c0405d3`, no identified repository license, and verified official relationship `PRL000166` to Atlas paper 540.

The resource is represented as a PINN implementation. Bounded extraction covers the Poisson loss-weighting comparison and the square-domain active-turbulence forward PINN, with nine configurations spanning gradient-standard-deviation/inverse-Dirichlet weighting, max-to-mean weighting, MGDA-style weighting, vanilla weighting, and the Poisson analytical optimal weighting branch. One explicit source-code conflict preserves the mismatch between the Poisson CLI method comment and implemented method branches.

Static reproducibility is R1. Source workflows, seeds, architecture and many hyperparameters are explicit, but dependency versions, installation procedure, exact runtime/hardware environment, external active-turbulence data layout, and result-level artifacts are insufficiently pinned.

`CR000075` closes canonical `SOB007` at 10/10. Aggregate SOB007 QA is PASS. The exact next independently extractable resource is **`CR000076`**, first member of `SOB008`.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 80 Stage-3 resource records complete, **283** remain.

## Current cumulative totals

After `Stage3-S066`: **80 resources, 141 experiments, 298 configurations, 1060 technical-evidence records, 80 reproducibility assessments, 513 unresolved findings, 94 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S067`** with **`CR000076`**.