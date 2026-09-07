# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S107`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (3/10)  
Current unresolved count: **786**  
Next unresolved ID: `S3U-0787`  
Explicit conflict count: **105**

## Stage3-S107 additions — CR000120

- `S3U-0780` — No reconstructable dependency manifest or pinned software environment was identified for the Stage-2 MeshfreeFlowNet snapshot.
- `S3U-0781` — No installation procedure or explicit Python/PyTorch version specification was identified in the inspected repository surface.
- `S3U-0782` — The RB2D sample data are external; the payload was not downloaded or inspected under the static-only Stage-3 boundary.
- `S3U-0783` — The RB2D README instructs `bash run_experiments.sh`, but the pinned repository tree contains `run_experiment.sh`; the documented reproduction launcher is absent.
- `S3U-0784` — No released trained checkpoint was verified for the bounded RB2D workflow.
- `S3U-0785` — No machine-readable expected-result set or fixed numerical acceptance target was verified for the bounded RB2D workflow.
- `S3U-0786` — Hardware is only partially specified through CUDA/GPU-oriented instructions; a reproducible hardware/runtime profile is not documented.

S107 adds **1 explicit conflict**, corresponding to the reproduction-launcher filename mismatch. Cumulative explicit conflict count is **105**.

## Batch status

`SOB012` is **3/10** after CR000120. Aggregate QA is not yet due; `SOB011` remains the latest completed aggregate batch with **PASS** status.

## Continuation

Continue from `S3U-0787` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000121` for `Stage3-S108`.
