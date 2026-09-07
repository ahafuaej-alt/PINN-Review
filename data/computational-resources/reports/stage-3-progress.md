# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S107`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **3/10 independently extractable members complete**.
- Latest completed resource: `CR000120`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000121`.
- Next checkpoint: `Stage3-S108`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **123**
- Experiments: **209**
- Configurations: **406**
- Technical-evidence records: **1448**
- Static reproducibility assessments: **123**
- Unresolved findings: **786**
- Explicit conflicts: **105**
- Independently extractable resources remaining: **240**

## Latest checkpoint

`Stage3-S107` completed `CR000120`, preserving the final Stage-2 identity for `maxjiang93/space_time_pde`, pinned SHA `5e355b0434baf1757d071ce993b84073c8426223`, and verified `PRL000235` paper-resource mention to Atlas 716.

The pinned repository identifies itself as MeshfreeFlowNet, a PyTorch physics-constrained continuous space-time super-resolution framework. Bounded extraction records one explicit two-dimensional Rayleigh-Benard experiment and one pinned launcher configuration. The training source combines regression and PDE-residual losses; setting `alpha_pde=0` disables the PDE term.

A consequential reproduction-instruction conflict is explicit: `experiments/rb2d/README.md` instructs `bash run_experiments.sh`, while the pinned tree contains `experiments/rb2d/run_experiment.sh`. The documented plural launcher is absent from the pinned snapshot and is not silently normalized.

CR000120 is classified R1. Source, MIT licensing, data-retrieval instructions, entrypoint, training surface, key hyperparameters, seed, PDE-loss wiring and evaluation instructions are inspectable, but no reconstructable dependency environment or installation specification was identified, the external dataset was not loaded, and no released checkpoint or machine-readable expected result set was verified.

No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118`, `CR000119`, and `CR000120` and is **3/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000121` for `Stage3-S108`.
