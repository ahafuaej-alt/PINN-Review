# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S309`
- Latest completed resource: `CR000360`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000361`
- Exact next checkpoint: `Stage3-S310`

## Cumulative counts through S309 / RC09

- Resources: **357**
- Experiments: **368**
- Configurations: **667**
- Technical-evidence records: **3508**
- Reproducibility assessments: **357**
- Unresolved findings: **1652**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **6**

## S309

`CR000360` preserves the final Stage-2 NSFnet repository identity at pinned SHA `b6ff7f79e2319e5efac89678c6230b9471b13e10`, including its status as an independent physics-informed implementation with no Atlas relationship and specifically no code relationship to Atlas paper 476. Static source inspection resolves two workflows: base NSFnet steady cavity flow at Re=2000 and entropy-viscosity ev-NSFnet at Re=5000. Architectures, residual formulations, sampling surfaces and staged training schedules are recorded without inventing seed configurations. Bundled MAT payloads and the root notebook were not opened, referenced checkpoints are absent, and README result claims were not independently validated. CR000360 is assessed at `R2`; no dependency installation, training, inference or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **7/10** with `CR000354` through `CR000360`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S309, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S310` at `CR000361`.
