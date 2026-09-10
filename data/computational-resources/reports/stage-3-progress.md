# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S185`
- Latest completed resource: `CR000207`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000208`
- Exact next checkpoint: `Stage3-S186`

## Cumulative counts through S185 / RC05

- Resources: **208**
- Experiments: **320**
- Configurations: **578**
- Technical-evidence records: **2269**
- Reproducibility assessments: **208**
- Unresolved findings: **1258**
- Explicit conflicts: **141**
- Independently extractable resources remaining: **155**

## S185

`CR000207` preserves the Stage-2-authoritative `lmandl/PITI-DeepONet` identity at pinned SHA `4f95fb526113956c20330a75bf282715e1290aeb`, no repository-level license, project citation DOI `10.1016/j.cma.2026.118917`, and no asserted Atlas-paper relationship.

The bounded extraction contains four PDE experiment families—Heat, Burgers, Allen-Cahn, and Kuramoto-Sivashinsky—and preserves all 17 explicit training-script variants in the pinned 38-file tree as configurations. README documents the time-integrated tangent-operator formulation and explicit Euler, RK4, ABM2, and implicit Euler inference schemes.

`requirements.txt` provides a fully pinned JAX/CUDA-oriented environment and README documents `pip install -r requirements.txt`. The pinned snapshot contains no data, model checkpoint, or result file, while representative training scripts reference local problem-data paths. Hardware provenance is unknown.

The static reproducibility level is `R2`: environment versions and installation are documented, but missing scientific inputs and the static-execution boundary prevent a stronger classification. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S186` at `CR000208`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
