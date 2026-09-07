# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S114`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (2/10)  
Current unresolved count: **840**  
Next unresolved ID: `S3U-0841`  
Explicit conflict count: **110**

## Stage3-S114 additions — CR000129

- `S3U-0836` — CR000129 hardware used for the documented workflows is not reported in the bounded pinned source surface.
- `S3U-0837` — CR000129 has no released trained checkpoint identified in the pinned repository.
- `S3U-0838` — CR000129 does not provide expected numerical baseline values or acceptance tolerances for the default HeatEquation workflow.
- `S3U-0839` — the README links Atlas-723's generalization-error paper but does not delimit which of the repository's evolved five implemented problem modules correspond exactly to that paper's original experiments.
- `S3U-0840` — CR000129 has conflicting default sampling semantics: `DefaultConfig/HeatEquation.json` specifies `point="sobol"`, while `EquationModels/HeatEquation.py` directly constructs collocation, boundary and initial samples from `torch.linspace` and Cartesian products rather than using the point selector.

S114 adds **1 explicit conflict** (`S3U-0840`). Cumulative explicit conflict count is **110**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **2/10** after CR000129.

## Continuation

Continue from `S3U-0841` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000130` for `Stage3-S115`.
