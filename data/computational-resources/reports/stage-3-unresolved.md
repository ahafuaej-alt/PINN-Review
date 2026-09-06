# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S089`  
Current batch: `SOB010` (4/10)  
Current unresolved count: **675**  
Next unresolved ID: `S3U-0676`  
Explicit conflict count: **100**

## Stage3-S089 additions — CR000101

- `S3U-0670` — Executable scientific source is delivered inside `XPINN_Code.zip`; deep archive inspection is deferred, so internal entrypoints, experiment cases, and configuration details remain unresolved at this checkpoint.
- `S3U-0671` — No dependency/environment manifest or installation procedure is exposed at the pinned repository root.
- `S3U-0672` — The README recommends TensorFlow 1.14 and Python 3.6, but the broader dependency/version environment required by the archived workflows is not established by the inspected root evidence.
- `S3U-0673` — Dataset and input-file requirements for the archived XPINN workflows cannot be established from the pinned root tree and README alone.
- `S3U-0674` — Random-seed and hardware provenance are not documented in the inspected root evidence.
- `S3U-0675` — Evaluation commands, expected numeric outputs, and checkpoint/model artifacts cannot be established from the inspected root evidence.

No new explicit conflict is recorded in S089.

## Continuation

Continue from `S3U-0676` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
