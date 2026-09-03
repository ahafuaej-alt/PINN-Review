# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S059 |
| Next scale-out checkpoint | Stage3-S060 |
| Latest checkpoint resource | CR000068 |
| Forward frontier resource | CR000068 |
| Next resource | CR000069 |
| Next planned checkpoint resources | CR000069 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068 — 3 / 10 |
| Completed Stage-3 technical resource records | 73 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 290 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 128 |
| Completed configuration count | 274 |
| Technical evidence records | 976 |
| Static reproducibility assessments | 73 |
| Current QA status | PASS |
| Current unresolved technical item count | 458 |
| Next unresolved ID | S3U-0459 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S059` completes `CR000068`, preserving final Stage-2 authority for `https://github.com/PredictiveIntelligenceLab/GradientPathologiesPINNs`, pinned commit `93e752b0e3b541818d5cca49b681f4957bc36808`, and `PRL000157` official relationship to Atlas paper 525.

The resource is represented as a **PINN implementation**. Because the pinned repository contains three distinct PDE workflows plus shared gradient-pathology and architecture machinery, S059 is a single-resource checkpoint. Three experiments/configurations materialize the explicit M1 entrypoint states for Helmholtz, nonlinear Klein–Gordon, and lid-driven-cavity Navier–Stokes.

Static reproducibility is **R1**. Source, equations, architectures, training loops, hyperparameters, evaluation logic, and bundled cavity reference CSVs are visible, but no dependency/version manifest, installation instructions, explicit random seed, exact hardware provenance, or repository license is available in the pinned snapshot.

The exact next independently extractable resource is **`CR000069`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 73 Stage-3 resource records complete, **290** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`
- `Stage3-S059`: `CR000068`

Current canonical completion: **3 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S059`:

- Stage-3 technical resource records: **73**
- experiments: **128**
- configurations: **274**
- technical-evidence records: **976**
- static reproducibility assessments: **73**
- unresolved findings: **458**
- explicit conflicting-evidence findings: **89**

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S060`** with **`CR000069`**.
