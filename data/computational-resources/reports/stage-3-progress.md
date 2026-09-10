# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S172`
- Latest completed resource: `CR000193`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000194`
- Exact next checkpoint: `Stage3-S173`

## Cumulative counts through S172 / RC04

- Resources: **194**
- Experiments: **283**
- Configurations: **500**
- Technical-evidence records: **2126**
- Reproducibility assessments: **194**
- Unresolved findings: **1187**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **169**

## S172

CR000193 preserves the Stage-2-authoritative `Scien42/NSFnet` repository pinned at `b6ff7f79e2319e5efac89678c6230b9471b13e10`, GPL-3.0, with no inferred Atlas-paper relationship. The bounded extraction maps three repository-defined implementation surfaces under the single authoritative resource: baseline NSFnet, entropy-viscosity-regularized ev-NSFnet, and the physics-informed KAN notebook.

The baseline cavity-flow NSFnet maps the steady 2D incompressible Navier–Stokes problem at Re=2000, a four-hidden-layer width-120 tanh network, 40,000 equation points, 10:1 boundary/equation weighting, and five Adam training stages. The ev-NSFnet surface maps Re=5000, 120,000 equation points, a width-120 main network plus width-40 viscosity network, staged entropy-viscosity controls, capped effective viscosity, and the documented freeze/defreeze schedule.

Static reproducibility is **R1**. The KAN notebook contains two consequential source-level conflicts: first-derivative viscous terms in the momentum residual and an upper-lid loss that enforces `u=1` without an explicit `v=0` penalty while other walls enforce both components. These are preserved without repairing or inferring intended runtime behavior. Stored notebook outputs are historical static repository evidence only.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S173` at `CR000194` after published-head and checkpoint-QA readback.
