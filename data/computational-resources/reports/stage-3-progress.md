# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S163`
- Latest completed resource: `CR000182`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000183`
- Exact next checkpoint: `Stage3-S164`

## Cumulative counts through S163

- Resources: **184**
- Experiments: **269**
- Configurations: **478**
- Technical-evidence records: **2025**
- Reproducibility assessments: **184**
- Unresolved findings: **1133**
- Explicit conflicts: **124**
- Independently extractable resources remaining: **179**

## S163

CR000182 preserves the verified transfer of the immutable Keras repository from `fchollet/keras` to `keras-team/keras` at pinned SHA `37e91d59b957b57b9961d97bd120499ddfb36841`, together with its Apache-2.0 license and no-Atlas-relationship boundary. It remains a general-purpose multi-backend deep-learning framework rather than PINN code.

Bounded static extraction maps the framework's TensorFlow, JAX, PyTorch and OpenVINO surfaces and one bundled MNIST convolutional-classifier demonstration. Backend-specific manifests, installation and test instructions, 282 test modules and a complete example support **R3**; nonlocked environments, absent deterministic controls and the unexecuted boundary block R4. SOB018 advances to 4/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S164` at `CR000183` after published-head and checkpoint-QA readback.
