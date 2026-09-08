# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S128`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (7/10)
Current unresolved count: **937**
Next unresolved ID: `S3U-0938`
Explicit conflict count: **115**

## Stage3-S128 additions

- `S3U-0931` — CR000144; relationship; high; **explicit conflict**: The frozen Stage-2 relationship record gives DOI `10.1109/TGRS.2024.3436985`, while the IEEE publisher record for the matching title gives `10.1109/TGRS.2024.3440471`.
- `S3U-0932` — CR000144; resource; medium: The approximately 650 MB archive was not downloaded or unpacked; deep archive inspection remains deferred under the accepted bounded static archive policy.
- `S3U-0933` — CR000144; resource; high: Archive-internal environment declarations, dependency versions and installation instructions remain unverified.
- `S3U-0934` — CR000144; resource; high: Executable entrypoints and exact run commands remain unverified without archive inspection.
- `S3U-0935` — CR000144; resource; medium: The exact internal manifest and mapping among code, data, result artifacts and individual paper experiments remain unverified.
- `S3U-0936` — CR000144; experiment; medium: Training hyperparameters, random-seed policy and experimental hardware are not established by the bounded metadata inspected for this checkpoint.
- `S3U-0937` — CR000144; resource; medium: Released checkpoint/model availability and exact expected per-run numerical outputs inside the archive remain unknown.

This checkpoint adds **1 explicit conflict**, raising the cumulative explicit-conflict count to **115**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-128-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000145`. Exact next checkpoint: `Stage3-S129`.
