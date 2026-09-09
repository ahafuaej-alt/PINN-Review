# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S170`
- Latest completed resource: `CR000190`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000192`
- Exact next checkpoint: `Stage3-S171`

## Cumulative counts through S170 / RC04

- Resources: **192**
- Experiments: **279**
- Configurations: **496**
- Technical-evidence records: **2107**
- Reproducibility assessments: **192**
- Unresolved findings: **1175**
- Explicit conflicts: **133**
- Independently extractable resources remaining: **171**

## RC04

CR000191 is a Stage-2-authoritative `duplicate_identity_observation` for canonical CR000153 (`jzhange/AAF-for-PINNs`). It is not independently extracted or counted in Stage 3. PRL000312 remains solely on CR000153. The continuation pointer advances count-neutrally to CR000192; SOB019 remains 2/10.

CR000192 (`Steph-Yhf/NSFnets`) is Stage-2-authoritative as a distinct GitHub fork with its own immutable repository identity and is eligible for independent extraction.

## S170

CR000190 preserves the Stage-2-authoritative `xzhao399/DEM_TO` snapshot at `a946ba6cc0ed7016eedbd5f00c3a7391c6e3ca03` as adjacent physics-informed deep-energy topology-optimization code, not a conventional PINN. Three workflows and five configurations cover heat grids at 100×50, 200×100, and 400×200 plus compliant inverter and gripper cases.

The static level is **R1**. No license, citation, dependency manifest, or portable environment exists. Google Drive/Colab coupling, compiled MMA objects, one Heat_400_200 path mismatch, absent model-save targets, bounded binary lineage, and the unexecuted workflow block higher levels. Two path/artifact conflicts remain explicit. SOB019 advances to 2/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S171` at `CR000192` after published-head and reconciliation-QA readback.