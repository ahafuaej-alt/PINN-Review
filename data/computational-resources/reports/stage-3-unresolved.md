# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S105`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (1/10)  
Current unresolved count: **774**  
Next unresolved ID: `S3U-0775`  
Explicit conflict count: **104**

## Stage3-S105 additions — CR000118

- `S3U-0768` — The pinned requirements manifest names NumPy, SciPy and TensorFlow but pins no package versions and specifies no Python version.
- `S3U-0769` — No installation procedure or reconstructable environment specification is documented for CR000118.
- `S3U-0770` — The CFD/MRI research data are hosted externally; the data payload was not loaded or inspected within the Stage-3 static boundary.
- `S3U-0771` — Random time/residual/boundary sampling is implemented, but no random seed or stochastic-control provenance was identified.
- `S3U-0772` — Hardware requirements, accelerator assumptions, and runtime characteristics are not documented in the inspected repository evidence.
- `S3U-0773` — No released trained checkpoint or machine-readable expected-result artifact was verified at the pinned repository snapshot.
- `S3U-0774` — The default transfer-learning path requests 31 snapshots while its implemented time-index construction yields 29 unique indices and can subsequently draw only indices already present, so the default sampling loop cannot reach its requested length.

S105 adds **1 explicit conflict**: the default `TL_WS_PINN.py` time-index construction cannot reach the requested 31 snapshots under its implemented 29-interval default. Cumulative explicit conflict count is **104**.

## Batch status

`SOB012` is **1/10** after CR000118. Aggregate QA is not yet due; `SOB011` remains the latest completed aggregate batch with **PASS** status.

## Continuation

Continue from `S3U-0775` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000119` for `Stage3-S106`.
