# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S254`
- Latest completed resource: `CR000302`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000303`
- Exact next checkpoint: `Stage3-S255`

## Cumulative counts through S254 / RC08

- Resources: **299**
- Experiments: **344**
- Configurations: **628**
- Technical-evidence records: **2905**
- Reproducibility assessments: **299**
- Unresolved findings: **1464**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **64**

## S254

`CR000302` preserves the stable Stage-1/Stage-2 identity even though the Stage-1 hostname `yan.cce.illinois.edu` conflicts with the primary paper's `yan.cee.illinois.edu`. Stage 3 does not rewrite the resource identity. The Stage-2-pinned supporting repository `QimingZhu1992/PINN-AM` is extracted as a bounded 1D thermal PINN demonstration with one experiment and six configurations: four `resolution` scripts plus soft/hard boundary-enforcement variants. The repository implements a four-hidden-layer, 200-neuron-per-layer tanh network, Latin-hypercube collocation, a phase-change heat residual, Adam followed by L-BFGS-B, and a bundled FEM MAT file. A second explicit conflict is preserved because the README says the `resolution` folders vary neuron count while the four scripts keep hidden width at 200 and instead vary `N_f` from 10,000 to 40,000. Only the 1D repository artifact is materialized; the complete paper-level dataset/code bundle, licence, and reproducible environment remain unresolved. No binary payload was opened and no code was executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB028` remains **PASS (10/10)**. `SOB029` is now **9/10**.

## Continuation

Continue with `Stage3-S255` at `CR000303`.
