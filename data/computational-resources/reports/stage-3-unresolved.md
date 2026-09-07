# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S116`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (4/10)  
Current unresolved count: **853**  
Next unresolved ID: `S3U-0854`  
Explicit conflict count: **111**

## Stage3-S116 additions — CR000131

- `S3U-0848` — CR000131 has no repository license identified in final Stage 2.
- `S3U-0849` — CR000131 provides no dependency manifest or complete version-pinned environment for its PINN stack.
- `S3U-0850` — the 1D Poisson PINN source states JAX 0.2.24 is installed while calling `jax.block_until_ready`, which the same source states is available only from JAX 0.2.27; this is explicit conflicting evidence.
- `S3U-0851` — Latin-hypercube collocation sampling has no explicit NumPy/pyDOE seed even though model initialization uses JAX PRNG seed 17.
- `S3U-0852` — hardware used for the repository's timing comparisons is not reported in the bounded source.
- `S3U-0853` — no released trained PINN checkpoint or expected numerical acceptance baseline was identified for the representative workflow.

S116 adds **1 explicit conflict** (`S3U-0850`). Cumulative explicit conflict count is **111**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **4/10** after CR000131.

## Continuation

Continue from `S3U-0854` only for genuinely new findings. Exact next resource is `CR000132` for `Stage3-S117`.
