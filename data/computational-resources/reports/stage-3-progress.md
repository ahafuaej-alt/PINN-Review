# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S095`.
- Current canonical batch: `SOB011`.
- Current batch status: **0/10 independently extractable members complete**.
- Latest completed resource: `CR000107`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB010` — **PASS**.
- Exact next independently extractable resource: `CR000108`.
- Next checkpoint: `Stage3-S096`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **110**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1342**
- Static reproducibility assessments: **110**
- Unresolved findings: **709**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **253**

## Latest checkpoint

`Stage3-S095` completed `CR000107` (`jpzxshi/sympnets`) at the final Stage-2 pinned SHA `336e2df0cb7c946acb562ef0baf0109bc9963bf5`. `PRL000213 → Atlas 662` remains a verified official relationship.

The repository implements intrinsic structure-preserving symplectic networks for Hamiltonian-system identification rather than a PINN/PDE-residual method. Four source-defined study surfaces are preserved: pendulum, double pendulum, three-body dynamics, and irregular-time-step pendulum. S095 records one resource, four experiments, four configurations, nine technical-evidence records, one R2 reproducibility assessment and five new unresolved findings, with no new explicit conflict.

S095 closes SOB010 at 10/10. The required SOB010 aggregate QA passes, reconciling the batch from the SOB009 boundary totals `100/177/363/1256/100/651/100` to `110/201/392/1342/110/709/101` for resources/experiments/configurations/evidence/reproducibility/unresolved/conflicts.

No scientific software, model, training, inference, evaluation, test or environment was executed.

## Continuation

Resume only from `CR000108` for `Stage3-S096` as the first independently extractable member of `SOB011`.
