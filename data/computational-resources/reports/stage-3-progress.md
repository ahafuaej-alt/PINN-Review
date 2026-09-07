# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S105`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **1/10 independently extractable members complete**.
- Latest completed resource: `CR000118`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000119`.
- Next checkpoint: `Stage3-S106`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **121**
- Experiments: **208**
- Configurations: **405**
- Technical-evidence records: **1433**
- Static reproducibility assessments: **121**
- Unresolved findings: **774**
- Explicit conflicts: **104**
- Independently extractable resources remaining: **242**

## Latest checkpoint

`Stage3-S105` completed `CR000118`, the pinned `lu-group/pinn-thrombus-mri` repository officially linked to Atlas 711. Final Stage-2 SHA `481e42d414b1c6f7d0e2506f878ad624ed784b75` and verified `PRL000230` authority are preserved.

Bounded source inspection records two experiments and three configurations: a fixed-geometry hemodynamic reconstruction experiment with a data-only baseline and warm-start Navier-Stokes PINN, plus the stretched-geometry transfer-learning workflow. The shared network maps `(t,x,y,z)` to `(u,v,w,p)` with three momentum residuals and incompressibility, and the repository evaluates relative L2 errors for velocity components and velocity magnitude.

The default transfer-learning entrypoint contains a consequential static source defect: `num_snapshot=31` while `num_interval_total=29`; its initial construction already contains all candidate random indices, so the subsequent uniqueness loop cannot add the two missing indices. The transfer-learning configuration is therefore retained with `conflicting_evidence` status rather than silently corrected.

R1 is conservative because source, license, entrypoints, mathematics, architecture, training surfaces and evaluation code are documented, while dependency versions, Python version, installation, external data payload, seeds, hardware and released checkpoints remain incomplete.

No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118` and is **1/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000119` for `Stage3-S106` as the second independently extractable member of `SOB012`.
