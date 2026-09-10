# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S182`
- Latest completed resource: `CR000204`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000205`
- Exact next checkpoint: `Stage3-S183`

## Cumulative counts through S182 / RC05

- Resources: **205**
- Experiments: **314**
- Configurations: **557**
- Technical-evidence records: **2236**
- Reproducibility assessments: **205**
- Unresolved findings: **1241**
- Explicit conflicts: **138**
- Independently extractable resources remaining: **158**

## S182

`CR000204` preserves the Stage-2-authoritative `maximbeekenkamp/Physics-informed-DeepONets` fork identity at pinned SHA `77e7c747d653b34e79e43df7d88bad87de5c27d8`, no repository-level license, the repository citation DOI `10.1126/sciadv.abi8605`, and no independently asserted Atlas-paper relationship.

The exact pinned source tree is shared with upstream `CR000089`, but the Stage-2 identities and relationship states remain distinct. The bounded extraction therefore preserves the accepted scientific boundaries of the identical tree without collapsing records: five experiment families and nine configurations across Antiderivative, Advection, Diffusion-reaction, Burgers and Eikonal workflows.

The static reproducibility level is `R1`. JAX 0.3.25 is declared, but no complete dependency/environment manifest or installation procedure satisfies the accepted R2 prerequisite. Bundled data/generators and trained artifacts were identified by path only and were not loaded. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S183` at `CR000205`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
