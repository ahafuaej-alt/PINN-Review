# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S089`.
- Current canonical batch: `SOB010`.
- Current batch status: **4/10 independently extractable members complete**.
- Latest completed resource: `CR000101`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000102`.
- Next checkpoint: `Stage3-S090`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **104**
- Experiments: **183**
- Configurations: **370**
- Technical-evidence records: **1289**
- Static reproducibility assessments: **104**
- Unresolved findings: **675**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **259**

## Latest checkpoint

`Stage3-S089` completed `CR000101` (`AmeyaJagtap/XPINNs`) at the final Stage-2 pinned SHA `6202299d2c956f667166ce48944496bfd1097644`. `PRL000206 → Atlas 647` remains a verified official relationship.

Material archive scope required a single-resource checkpoint. The pinned root exposes `README.md`, `LICENSE`, `XPINN_Code.zip`, and `XPINNs_Paper.pdf`; executable scientific source is packaged inside the 4.17-MB ZIP rather than exposed as an unpacked tree. Under the accepted static archive boundary, deep archive inspection was deferred and no internal experiment or configuration was manufactured. The README documents generalized XPINN space-time domain decomposition and recommends TensorFlow 1.14 and Python 3.6.

S089 records one resource, zero experiments, zero configurations, seven technical-evidence records, one R1 reproducibility assessment, six new unresolved findings, and no new explicit conflict. No archive, paper PDF, or scientific workload was opened or executed. SOB010 is 4/10.

## Continuation

Resume only from `CR000102` for `Stage3-S090`. Preserve all accepted pilot exclusions and completed-resource boundaries.
