# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S202`

## Current totals

- Unresolved findings: **1356**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1357`

## New findings in S202

- `S3U-1347` — CR000230 / license_scope / medium: Stage 2 verified no repository license file or GitHub license metadata, while setup.py carries an MIT classifier; the classifier is not promoted to repository SPDX authority. **Explicit conflict.**
- `S3U-1348` — CR000230 / dependency_pinning / medium: requirements.txt and Pipfile leave core TensorFlow/scientific dependencies unpinned in their direct declarations.
- `S3U-1349` — CR000230 / environment_normalization / low: Multiple environment manifests coexist and were not runtime-normalized or cross-resolved in Stage 3.
- `S3U-1350` — CR000230 / runtime_validation / low: Multi-worker/multi-GPU and self-adaptive solver claims remain documentation-scoped; no scientific workload was executed.
- `S3U-1351` — CR000230 / example_scope / low: Examples are not promoted to standalone Stage-3 experiments without a separately bounded scientific case.
- `S3U-1352` — CR000231 / dependency_pinning / low: Several requirements remain unversioned despite pinned versions for major numerical and ML dependencies.
- `S3U-1353` — CR000231 / environment_lock / low: No full immutable transitive environment lock was established in the assessed static scope.
- `S3U-1354` — CR000231 / dataset_scope / low: Bundled Navier-Stokes CSV sample/test files remain example/reference inputs rather than a standalone research dataset.
- `S3U-1355` — CR000231 / runtime_validation / low: Documented framework capabilities and installation routes were not executed or benchmarked in Stage 3.
- `S3U-1356` — CR000231 / example_scope / low: Examples/tutorials remain framework documentation rather than standalone Stage-3 experiments.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
