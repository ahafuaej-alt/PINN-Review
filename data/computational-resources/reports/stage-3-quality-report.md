# Computational Resources Stage 3 — Quality Report

**Stage:** 3 — deep static technical/scientific extraction  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S075`  
**Checkpoint status:** PASS  
**Current batch:** `SOB008` — 10/10 COMPLETE  
**Latest aggregate QA:** `SOB008` PASS  

## S075 QA result

| QA control | Result |
|---|---|
| Accepted Stage3-D01 methodology and schemas preserved | PASS |
| Final Stage-2 authority and pinned SHA resolved first | PASS |
| Static-only evidence boundary | PASS |
| All five Stage-3 schema validations | PASS |
| Cumulative identifier uniqueness | PASS |
| Evidence-reference integrity | PASS |
| Resource → experiment → configuration cross-references | PASS |
| Inference labeling and missing-value semantics | PASS |
| R0–R4 classification / R5 exclusion | PASS |
| Stage-1 / Stage-2 / public Atlas / `05-curated/` write safety | PASS |
| Pre-commit branch-head stability | PASS |
| Single-checkpoint boundary | PASS |
| SOB008 aggregate QA | PASS |

## Checkpoint counts

| Measure | S075 | Cumulative |
|---|---:|---:|
| Resources | 1 | 90 |
| Experiments | 3 | 155 |
| Configurations | 4 | 318 |
| Technical evidence | 10 | 1160 |
| Reproducibility assessments | 1 | 90 |
| Unresolved findings | 8 | 586 |
| Explicit conflicts | 0 | 97 |

## Scientific QA notes

CR000085 preserves final Stage-2 authority at the immutable repository SHA and the verified official relationship to Atlas 597. The resource is represented as physics-informed operator-learning code rather than a classical PINN implementation.

The bounded extraction covers three principal research workflows and four configurations. The repository also contains two 1D Allen-Cahn tutorial notebooks; these remain capability evidence and are not promoted to additional study experiments.

R2 is appropriate because source notebooks, bundled data, mathematics, architectures, training logic, hyperparameters and evaluation procedures are statically inspectable. A repository license, dependency/environment manifest, pinned package versions, installation instructions, reported random seeds and canonical pretrained checkpoints are unavailable. Archived notebook outputs are preserved as source-scoped evidence and do not justify R3/R4.

No new explicit conflict is present.

## SOB008 aggregate QA

SOB008 contains exactly CR000076–CR000085 as ten canonical independently extractable resources. Aggregate totals reconcile to **10 resources, 14 experiments, 20 configurations, 100 evidence records, 10 reproducibility assessments, 73 new unresolved findings, and 3 new conflicts**. Identifier/reference integrity, source-scope discipline, missing-value semantics, methodology/schema stability and repository boundaries all pass.

## Continuation gate

**PASS.** SOB008 is closed. Continue at `CR000086` in `Stage3-S076` under unchanged Stage3-D01 methodology and schemas.
