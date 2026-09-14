# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S311`
- Latest completed resource: `CR000363`
- Latest completed aggregate batch: `SOB035` - **PASS (10/10)**
- Current batch: `SOB036` - **0/1**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC10` - **PASS (count-neutral independently-extractable-corpus reconciliation)**
- Exact next independently extractable resource: `CR000364`
- Exact next checkpoint: `Stage3-S312`

## Cumulative counts through S311 / RC10

- Resources: **360**
- Experiments: **371**
- Configurations: **670**
- Technical-evidence records: **3538**
- Reproducibility assessments: **360**
- Unresolved findings: **1662**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **1**

## S311

`CR000363` preserves the final Stage-2 EquiNO identity at pinned SHA `be71c1f872c84eaf43ddadba01c8dd54d9c4f544` as a promoted CR000174 profile discovery with no Atlas-paper relationship. Static inspection resolves three executable RVE3 training workflows—EquiNO, PINN and VPIOnet—plus the shared configuration, evaluation path, bundled RVE data, pretrained artifacts and substantially pinned TensorFlow environment. The resource is assessed at `R2`; exact data/artifact lineage, hardware requirements, runtime reproduction and two unpinned packages remain bounded gaps. No dependency installation, training, inference or scientific workload was executed.

## Stage3-RC10 corpus reconciliation

RC10 is count-neutral for Stage-3 extraction records. The nominal 364-ID registry contains three entries that are not separate independently extractable resources: `CR000021` aliases `CR000184`, `CR000191` aliases `CR000153`, and `CR000221` has no final authoritative Stage-2 extractable record. The corrected independently extractable corpus is therefore **361**. With S311 complete, **360/361** independently extractable resources are complete and only `CR000364` remains. Historical checkpoint counts, IDs and accepted scientific records are unchanged.

## Aggregate batch QA

`SOB035` closes **PASS (10/10)** with `CR000354` through `CR000363`. `SOB036` is the terminal one-resource batch containing only `CR000364`; it has not started.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S311 / RC10.

## Continuation

Continue with `Stage3-S312` at `CR000364`.
