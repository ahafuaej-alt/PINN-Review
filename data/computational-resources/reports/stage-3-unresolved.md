# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S189`

## Current totals

- Unresolved findings: **1280**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1281`

## New findings in S189

- `S3U-1276` — CR000211 / environment / medium: The repository declares bounded core dependencies but does not provide one exact environment lock spanning PhiFlow, PhiML and all optional backends.
- `S3U-1277` — CR000211 / backend_versions / medium: PyTorch, TensorFlow and JAX are documented as supported optional backends, but their compatible versions are not fixed by the repository-level setup metadata.
- `S3U-1278` — CR000211 / dependency_identity / medium: PhiML appears as both a package dependency with minimum version 1.14.0 and a repository submodule pinned to a specific commit; both observations are preserved without asserting equivalence.
- `S3U-1279` — CR000211 / gpu_environment / low: GPU execution and optional custom CUDA operators are documented, but no single GPU/CUDA environment is pinned at repository scope.
- `S3U-1280` — CR000211 / examples / low: The repository contains broad simulation, optimization and learning examples; they demonstrate framework capabilities but do not establish independent paper-specific experiments or Atlas relationships.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
