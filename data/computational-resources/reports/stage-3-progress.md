# Computational Resources Stage 3 Progress

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S080`.
- Current canonical batch: `SOB009`.
- Current batch status: **5/10 independently extractable members complete**.
- Latest completed resource: `CR000092`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000093`.
- Next checkpoint: `Stage3-S081`.
- `CR000091` is Stage-3 pilot-complete and was correctly skipped; it must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **95**
- Experiments: **164**
- Configurations: **333**
- Technical-evidence records: **1207**
- Static reproducibility assessments: **95**
- Unresolved findings: **621**
- Explicit conflicts: **98**
- Independently extractable resources remaining: **268**

## Latest checkpoint

`Stage3-S080` completed `CR000092`, the external numerical-flow dataset at DOI `10.5281/zenodo.5039610`. Final Stage-2 authority is preserved: `PRL000194 → Atlas 605` is a verified `paper_dataset_mention`, while the associated `CR000091` ModalPINN software archive remains pilot-complete and was not reprocessed.

The bounded static extraction records the provider-documented two-dimensional fixed-cylinder vortex-shedding dataset at Reynolds number 100, generated with the Cadyf finite-element fluid-structure interaction solver. Zenodo exposes a 1.2 GB primary flow file, a reaction file and two processing scripts, with provider checksums. No archive payload was downloaded or unpacked and no processing script or scientific workload was executed.

S080 records one resource, zero experiments, zero configurations, six technical-evidence records, one R1 reproducibility assessment, six new unresolved findings and no new explicit conflicts.

## Continuation

Resume only from `CR000093` for `Stage3-S081`. Preserve all accepted pilot exclusions and completed-resource boundaries.
