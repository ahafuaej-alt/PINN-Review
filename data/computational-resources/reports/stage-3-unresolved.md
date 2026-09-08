# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S149`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (9/10)
Current unresolved count: **1051**
Next unresolved ID: `S3U-1052`
Explicit conflict count: **120**

## Stage3-S149 additions

- `S3U-1047` — CR000167; resource; high: No repository license, CITATION file or formal dependency manifest was identified.
- `S3U-1048` — CR000167; resource; high: The README explicitly describes the implementation as coarse and not fully tested and states uncertainty about correctness.
- `S3U-1049` — CR000167; resource; high: The MNIST example downloads its benchmark data at runtime; no reusable research dataset is bundled.
- `S3U-1050` — CR000167; resource; high: PyTorch, torchvision and NumPy versions, hardware requirements and random seeds are not pinned.
- `S3U-1051` — CR000167; resource; medium: Stored example outputs are not accompanied by numerical acceptance thresholds or released checkpoints.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-149-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000168`. Exact next checkpoint: `Stage3-S150`.
