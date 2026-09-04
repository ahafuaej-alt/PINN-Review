# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S062 |
| Next scale-out checkpoint | Stage3-S063 |
| Latest checkpoint resource | CR000071 |
| Forward frontier resource | CR000071 |
| Next resource | CR000072 |
| Next planned checkpoint resources | CR000072 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069, CR000070, CR000071 — 6 / 10 |
| Completed Stage-3 technical resource records | 76 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 287 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 136 |
| Completed configuration count | 282 |
| Technical evidence records | 1014 |
| Static reproducibility assessments | 76 |
| Current QA status | PASS |
| Current unresolved technical item count | 482 |
| Next unresolved ID | S3U-0483 |
| Current conflicting-evidence finding count | 93 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S062` completes `CR000071`, preserving final Stage-2 authority for `https://github.com/youngsikhwang/Dual-Cone-Gradient-Descent`, pinned commit `7242cd76e8f94616c7e4611ba971c5bc33244e9e`, MIT license, and verified official relationship PRL000160 to Atlas paper 527.

The resource is represented as a **PINN implementation / PINN-optimization research code**. Three bounded primary experiments capture the repository's main 2D Helmholtz, viscous Burgers, and nonlinear Klein-Gordon benchmark families. The main benchmark surface documents DCGD `avg`, `proj`, and `center` modes, learning-rate sweeps, a 3-hidden-layer × 50-neuron tanh network, batch size 128, seed 111, 50,000 iterations, ten repeats, and relative-L2 evaluation. SPINN, CausalPINNs, and PINNsFormer adaptations are retained as capability evidence rather than expanded into separate experiment records.

Static reproducibility is **R1**. The repository has MIT licensing, extensive package/version pinning, explicit seed, architecture, equations, hyperparameters, bundled Burgers data, and evaluation logic. R2 is withheld because the documented benchmark route contains consequential static defects: the README pip command conflicts with the Conda-style manifest, `main.py` passes an extra constructor argument, the run script uses a mismatched Klein-Gordon token, the Adam+DCGD call path violates the wrapper step signature, and Burgers uses an absolute host-specific MAT path. These defects are preserved, not repaired.

The exact next independently extractable resource is **`CR000072`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 76 Stage-3 resource records complete, **287** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`
- `Stage3-S059`: `CR000068`
- `Stage3-S060`: `CR000069`
- `Stage3-S061`: `CR000070`
- `Stage3-S062`: `CR000071`

Current canonical completion: **6 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S062`:

- Stage-3 technical resource records: **76**
- experiments: **136**
- configurations: **282**
- technical-evidence records: **1014**
- static reproducibility assessments: **76**
- unresolved findings: **482**
- explicit conflicting-evidence findings: **93**

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S063`** with **`CR000072`**.
