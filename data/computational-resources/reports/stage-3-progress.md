# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S183`
- Latest completed resource: `CR000205`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000206`
- Exact next checkpoint: `Stage3-S184`

## Cumulative counts through S183 / RC05

- Resources: **206**
- Experiments: **315**
- Configurations: **560**
- Technical-evidence records: **2247**
- Reproducibility assessments: **206**
- Unresolved findings: **1247**
- Explicit conflicts: **140**
- Independently extractable resources remaining: **157**

## S183

`CR000205` preserves the Stage-2-authoritative `maximbeekenkamp/SPINNs` identity at pinned SHA `3e57d82bb945f21362ddcd4f9a9e3b47196a8622`, no repository-level license, no project citation metadata, and no asserted Atlas-paper relationship.

The bounded extraction contains one 2D heat-equation comparison experiment and three configurations: Simple PINN, SA-PINN, and SPINN. README-level benchmark claims are retained separately from exact pinned source declarations.

Two direct documentation/source conflicts are preserved. The README states 10,000 iterations and Adam learning rate 0.0005 for all models, while the pinned SPINN source sets `nIter = 100000 + 1` and configures a second Adam learning rate of `1e-8` for the post-500-iteration branch. The README also states `100^2` collocation points for all models, while the pinned Simple PINN and SA-PINN sources construct 101 points on each axis.

The static reproducibility level is `R1`. No formal dependency/environment manifest or installation procedure satisfies the accepted R2 prerequisite. The README reports five random-seed repetitions, but the exact five-run seed set and a repository-level repetition driver are not available in the bounded tree. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S184` at `CR000206`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
