# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S088`.
- Current canonical batch: `SOB010`.
- Current batch status: **3/10 independently extractable members complete**.
- Latest completed resource: `CR000100`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000101`.
- Next checkpoint: `Stage3-S089`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **103**
- Experiments: **183**
- Configurations: **370**
- Technical-evidence records: **1282**
- Static reproducibility assessments: **103**
- Unresolved findings: **669**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **260**

## Latest checkpoint

`Stage3-S088` completed `CR000100` (`Ulvetanna/HypoSVI`) at the final Stage-2 pinned SHA `4d449575d3266507741e844e4f1a39935c65f987`. `PRL000203 → Atlas 634` remains a verified official relationship.

Material complexity required a single-resource checkpoint. One bounded experiment and one configuration preserve the repository's HypoSVI hypocenter-location workflow, which combines external trained EikoNet travel-time models with Stein variational gradient descent. The final Stage-2 role `research_code_related_to_pinn_corpus` is preserved rather than manufacturing a broader standalone PINN-implementation classification.

S088 records one resource, one experiment, one configuration, eight technical-evidence records, one R2 reproducibility assessment, six new unresolved findings, and no new explicit conflict. The pinned package documents MIT licensing, installation and algorithm defaults, but exact dependency versions, external EikoNet checkpoint/data provenance, deterministic particle-initialization seed, and hardware provenance remain incomplete. No scientific workload was executed. SOB010 is 3/10.

## Continuation

Resume only from `CR000101` for `Stage3-S089`. Preserve all accepted pilot exclusions and completed-resource boundaries.
