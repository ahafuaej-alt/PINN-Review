# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S191`

## Current totals

- Unresolved findings: **1291**
- Explicit conflicts: **142**
- Next unresolved ID: `S3U-1292`

## New findings in S191

- `S3U-1287` — CR000213 / environment / medium: The repository specifies ranged core dependencies and optional dependency groups rather than one exact unified environment lock.
- `S3U-1288` — CR000213 / backend_environment / medium: CPU/GPU/TPU support depends on backend-specific JAX/JAXLIB installation and no single hardware/backend target is pinned for all repository capabilities.
- `S3U-1289` — CR000213 / asset_normalization / low: Heterogeneous notebooks, examples and bundled model/checkpoint assets are preserved as framework capability evidence but are not individually normalized in this bounded supporting-software extraction.
- `S3U-1290` — CR000213 / identity_continuity / low: Pinned documentation and project metadata retain historical `google/jax-md` URLs; Stage-2 authority establishes these as transfer continuity for the same resource, not a second identity.
- `S3U-1291` — CR000213 / examples / low: Repository examples and framework publications do not establish an Atlas-paper experiment relationship and are not promoted to Stage-3 experiments or configurations.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
