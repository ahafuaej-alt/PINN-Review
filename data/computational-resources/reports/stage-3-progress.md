# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S178`
- Latest completed resource: `CR000200`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000201`
- Exact next checkpoint: `Stage3-S179`

## Cumulative counts through S178 / RC05

- Resources: **201**
- Experiments: **297**
- Configurations: **519**
- Technical-evidence records: **2189**
- Reproducibility assessments: **201**
- Unresolved findings: **1217**
- Explicit conflicts: **138**
- Independently extractable resources remaining: **162**

## S178

CR000200 preserves the Stage-2-authoritative `PredictiveIntelligenceLab/CausalPINNs` repository pinned at `0d1d83f87f6fa2d6756d0e35cac94a7be6183841`, licensed CC-BY-NC-SA-4.0, with the causal-PINN paper citation and no inferred Atlas-paper relationship. The separate patent/noncommercial warning is retained without legal interpretation.

Four benchmark families are mapped as experiments: Allen-Cahn, Lorenz, Kuramoto-Sivashinsky and Navier-Stokes. Simple and chaotic Kuramoto-Sivashinsky workflows are separate configurations, giving five configurations total. The resource receives **R2**: exact dependencies, bundled inputs, mathematics, configurations, training and evaluation logic are present, but undocumented installation, pervasive bundled-data path mismatches and a blocking Navier-Stokes name-resolution defect prevent R3/R4. The README's request-only data statement conflicts with the bundled tree and is preserved explicitly. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S179` at `CR000201` after published-head and checkpoint-QA readback.
