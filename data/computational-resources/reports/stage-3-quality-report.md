# Computational Resources Stage 3 — Quality Report

**Stage:** 3 — deep static technical/scientific extraction  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S071`  
**Checkpoint status:** PASS  
**Current batch:** `SOB008` — 6/10  
**Latest aggregate QA:** `SOB007` PASS  

## S071 QA result

| QA control | Result |
|---|---|
| Accepted Stage3-D01 methodology preserved | PASS |
| Accepted Stage-3 schemas unchanged | PASS |
| Final Stage-2 authority resolved first | PASS |
| Authoritative repository SHA preserved | PASS |
| Static-only evidence boundary preserved | PASS |
| Resource schema validation | PASS |
| Experiment schema validation | PASS |
| Configuration schema validation | PASS |
| Technical-evidence schema validation | PASS |
| Reproducibility schema validation | PASS |
| Cumulative identifier uniqueness | PASS |
| Evidence-reference integrity | PASS |
| Resource → experiment cross-references | PASS |
| Experiment → configuration cross-references | PASS |
| Inference labeling | PASS |
| Missing-value semantics | PASS |
| R0–R4 reproducibility constraint | PASS |
| R5 exclusion | PASS |
| Explicit conflict preservation | PASS |
| Stage-1 / Stage-2 write safety | PASS |
| Public Atlas/site write safety | PASS |
| `05-curated/` write safety | PASS |
| Repository execution prohibition | PASS |
| Pre-commit branch-head stability | PASS |
| Single-checkpoint boundary | PASS |

## Checkpoint counts

| Measure | S071 | Cumulative |
|---|---:|---:|
| Resources | 1 | 86 |
| Experiments | 3 | 150 |
| Configurations | 6 | 312 |
| Technical evidence | 14 | 1122 |
| Reproducibility assessments | 1 | 86 |
| Unresolved findings | 9 | 558 |
| Explicit conflicts | 1 | 97 |

## Scientific QA notes

CR000081 is represented as a `pinn_implementation`, preserving the Stage-2 classification and verified official paper relationship without collapsing distinct PDE workflows into one synthetic experiment.

The Klein–Gordon, Burgers and Allen–Cahn workflows remain distinct. Their full-PINN/SA-PINN basis models and GPT-PINN meta-network configurations are represented separately, with implementation settings attributed to exact pinned source locations.

The README-versus-entrypoint device portability disagreement is preserved explicitly as `conflicting_evidence`. No runtime claim is manufactured from the static source inspection.

The R1 assessment is conservative. Exact README package versions, seeds, architectures and substantial training settings are visible, but environment locking, installation, exact hardware provenance, pretrained checkpoints and cross-framework portability remain incomplete.

## Batch state

`SOB008` is now **6 / 10** independently extractable resources. Aggregate batch QA is therefore **not due**. The latest completed aggregate QA remains `SOB007`, PASS.

## Continuation gate

**PASS.** Continue at `CR000082` in `Stage3-S072` under the unchanged Stage3-D01 methodology and schemas.
