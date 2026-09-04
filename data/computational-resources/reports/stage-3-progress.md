# Computational Resources Stage 3 — Progress

**Status:** active — controlled scale-out  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S074`  
**Current scale-out batch:** `SOB008`  
**Last completed resource:** `CR000084`  
**Next resource:** `CR000085`  
**Next checkpoint:** `Stage3-S075`  
**Checkpoint QA:** PASS  
**Latest aggregate batch QA:** `SOB007` PASS  
**Aggregate QA due:** when `SOB008` reaches 10/10 independently extractable resources

## Stage-3 cumulative state

- Completed Stage-3 resources: **89**
- Completed experiments: **152**
- Completed configurations: **314**
- Technical evidence records: **1150**
- Reproducibility assessments: **89**
- Unresolved findings: **578**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **274**

## Current batch

`SOB008`: **9 / 10** independently extractable resources completed.

Completed members: `CR000076`, `CR000077`, `CR000078`, `CR000079`, `CR000080`, `CR000081`, `CR000082`, `CR000083`, `CR000084`.

Aggregate batch QA is **not yet due**.

## Stage3-S074 checkpoint summary

Processed exactly one resource. `CR000084` is a complete but extremely sparse pinned snapshot containing only `README.md`; it is bounded-complete without manufacturing absent scientific implementation details. Bounded inspection of `CR000085` shows multiple Phase-Field DeepONet notebooks and data surfaces, so it remains unprocessed for a separate checkpoint under the accepted complexity rule.

### CR000084 — taniyakapoor/Causal-PINN-for-beam

- Final Stage-2 classification: `pinn_or_physics_informed_implementation`
- Authoritative pinned SHA: `b1739dbecaf7d453efc2700e53310bd15846bd97`
- License: not available
- Verified relationship: `PRL000185 → Atlas 593`, `official`
- Stage-3 profile: `pinn_implementation`
- Experiments: **0**; configurations: **0**; evidence: **6**; reproducibility: **R0**
- New unresolved findings: **6**; new explicit conflicts: **0**

The pinned tree contains only a README stating that the repository is intended to reproduce the named beam-simulation paper. No source implementation, dependency/environment specification, data, checkpoints, training configuration, evaluation procedure or expected results are present in the authoritative snapshot. Stage 3 therefore preserves identity and documentation claims while leaving implementation-specific fields unavailable.

## Scope protection

S074 modifies only Stage-3 technical/evidence/report paths. Stage 1, Stage 2, public Atlas/site files, `05-curated/`, methodology and schemas remain unchanged. No scientific workload was executed.

## Exact continuation

Resume at `CR000085` for `Stage3-S075`.
