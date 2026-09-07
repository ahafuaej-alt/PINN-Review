# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S104`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **0/10 independently extractable members complete**.
- Latest completed resource: `CR000117`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000118`.
- Next checkpoint: `Stage3-S105`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **120**
- Experiments: **206**
- Configurations: **402**
- Technical-evidence records: **1422**
- Static reproducibility assessments: **120**
- Unresolved findings: **767**
- Explicit conflicts: **103**
- Independently extractable resources remaining: **243**

## Latest checkpoint

`Stage3-S104` completed `CR000117`, the Zenodo DOI-hosted supplementary-code artifact linked to Atlas 701. Final Stage-2 pilot authority and verified `PRL000228` relationship are preserved.

The primary paper documents a physics-informed stochastic grid-frequency model combining a stochastic differential equation with a neural network that maps external techno-economic drivers to time-dependent system parameters. Reported applications include probabilistic short-horizon prediction, system-parameter identification, and synthetic frequency time-series generation. The paper and Stage-2 records keep the supplementary-code DOI separate from the related data DOI.

Archive internals were explicitly deferred by Stage 2 and were not directly text-inspectable through the bounded interface. S104 therefore records one resource, zero source-internal experiments, zero configurations, eight technical-evidence records, one R1 reproducibility assessment, six new unresolved findings, and no new explicit conflict. Paper-level applications remain source-scoped and are not promoted into unverified code-internal records.

No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` is complete at 10/10 and aggregate QA is **PASS**. It contains `CR000108–CR000117`, adds 10 resources, 5 experiments, 10 configurations, 80 evidence records, 10 reproducibility assessments, 58 unresolved findings and 2 explicit conflicts, and reconciles exactly to the cumulative totals above.

`SOB012` starts at `CR000118` and is currently 0/10.

## Continuation

Resume only from `CR000118` for `Stage3-S105` as the first independently extractable member of `SOB012`.
