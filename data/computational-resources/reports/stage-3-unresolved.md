# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S214`

## Current totals

- Unresolved findings: **1381**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1382`

## New findings in S214

- `S3U-1380` — CR000246 / supporting_framework_source_scope / low: CR000246 is the Darknet project-site/supporting-framework resource; linked source build options are statically bounded, but repository runtime versions and bundled assets were not executed and the paper's public code remains a separate resource.
- `S3U-1381` — CR000247 / legacy_runtime_compatibility / low: Bolt targets Python 2.5/2.6 and an old NumPy/Cython toolchain; setup.py also retains hard-coded platform paths, so modern compatibility remains untested.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
