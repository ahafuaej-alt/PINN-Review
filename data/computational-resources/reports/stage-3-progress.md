# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S198`
- Latest completed resource: `CR000223`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000224`
- Exact next checkpoint: `Stage3-S199`

## Cumulative counts through S198 / RC05

- Resources: **222**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2392**
- Reproducibility assessments: **222**
- Unresolved findings: **1332**
- Explicit conflicts: **145**
- Independently extractable resources remaining: **141**

## S198

`CR000223` preserves the final Stage-2-authoritative NVIDIA PhysicsNeMo product identity and the linked `NVIDIA/physicsnemo` source snapshot at pinned commit `65ec388929884436051203bca9dfb912eabd4c18`. Product-page identity and repository-snapshot claims remain separate. The framework remains broader than the historical PINN-toolbox scope associated with Atlas review paper 367 and `PRL000079`.

Static extraction records the Apache-2.0 license, Python 3.11–3.14 package requirement, PyTorch-centered dependency surface, multiple CUDA/optional-dependency variants, symbolic PDE utilities, PINN and other model-family capabilities, distributed training support, and heterogeneous examples/reference/model/data-support assets. Reference examples are capability evidence rather than synthetic paper-specific experiments or configurations. Static reproducibility is `R2`.

## Continuation

Continue with `Stage3-S199` at `CR000224`.
