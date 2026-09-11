# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S190`

## Current totals

- Unresolved findings: **1286**
- Explicit conflicts: **142**
- Next unresolved ID: `S3U-1287`

## New findings in S190

- `S3U-1281` — CR000212 / environment / medium: The dependency manifest provides `taichi>=1.1.0` and otherwise unpinned package names rather than an exact environment lock.
- `S3U-1282` — CR000212 / version_guidance / high / **explicit conflict**: At the same pinned snapshot, README states example compatibility with Taichi v0.8.3 while `requirements.txt` requires `taichi>=1.1.0`; the discrepancy is preserved without reconciliation.
- `S3U-1283` — CR000212 / license / medium: No repository license is identified at the pinned commit, and no license is inherited from the broader Taichi project.
- `S3U-1284` — CR000212 / example_environment / medium: Repository-level requirements do not establish exact compatible runtime or hardware requirements for every simulator example.
- `S3U-1285` — CR000212 / resource_role / low: README states DiffTaichi framework functionality has moved into Taichi and this repository now contains examples; the repository is therefore retained as historical supporting software rather than treated as the current framework implementation.
- `S3U-1286` — CR000212 / examples / low: The repository documents multiple differentiable simulator examples, but these do not establish independent Atlas-paper experiments or relationships and are not promoted to Stage-3 experiments.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
