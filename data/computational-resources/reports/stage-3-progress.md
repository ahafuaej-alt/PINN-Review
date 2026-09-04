# Computational Resources Stage 3 Progress

Date: 2026-09-04  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S076`.
- Current canonical batch: `SOB009`.
- Current batch status: **1/10 independently extractable members complete**.
- Latest completed resource: `CR000086`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000088`.
- Next checkpoint: `Stage3-S077`.
- `CR000087` is Stage-3 pilot-complete and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **91**
- Experiments: **156**
- Configurations: **320**
- Technical-evidence records: **1170**
- Static reproducibility assessments: **91**
- Unresolved findings: **594**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **272**

## Latest checkpoint

`Stage3-S076` completed `CR000086` (`somdattagoswami/IGAPack-PhaseField`) at final Stage-2 pinned SHA `ee77c8e47e8832c4229b3f11b149fae1bb5873bc`.

Final Stage-2 authority is preserved: `PRL000187 → Atlas 598` is a verified `paper_dataset_mention`, because the primary paper states that high-fidelity data were generated using codes in this repository. Stage 3 therefore records the repository as numerical phase-field fracture solver/data-generation code (`simulator_solver`), not as the paper's physics-informed variational DeepONet implementation.

The bounded static extraction records one solver workflow, two capability configurations, ten evidence records, one R2 reproducibility assessment, eight new unresolved findings, and no new explicit conflicts. No scientific workload was executed.

## Continuation

Resume only from `CR000088` for `Stage3-S077`. Preserve the accepted pilot exclusions, including `CR000087`.
