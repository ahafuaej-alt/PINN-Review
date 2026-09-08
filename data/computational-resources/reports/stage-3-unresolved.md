# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S127`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (6/10)
Current unresolved count: **930**
Next unresolved ID: `S3U-0931`
Explicit conflict count: **114**

## Stage3-S127 additions

- `S3U-0921` — CR000142; resource; medium: No repository license was identified at the pinned Stage-2 snapshot.
- `S3U-0922` — CR000142; resource; medium: requirements.txt leaves scipy, h5py, matplotlib and tqdm unversioned while only the core Python/PyTorch/CUDA stack is explicitly pinned in README setup.
- `S3U-0923` — CR000142; configuration; medium: The representative run script hard-codes a cluster-specific experiment directory and CUDA device assignments; actual experimental GPU hardware is not reported.
- `S3U-0924` — CR000142; resource; low: No pretrained checkpoint or immutable released result bundle for the representative convection pair was identified in the pinned tree.
- `S3U-0925` — CR000142; experiment; low: No quantitative acceptance threshold or expected numerical baseline is specified for a successful rerun of the representative convection pair.
- `S3U-0926` — CR000143; resource; high: The pinned repository contains only README.md and exposes no implementation files for the paper-reported AW-PINN method.
- `S3U-0927` — CR000143; resource; high: No dependency declaration, environment, installation workflow, entrypoint or executable configuration is available in the pinned repository.
- `S3U-0928` — CR000143; resource; medium: No repository license or repository citation metadata is present in the pinned snapshot.
- `S3U-0929` — CR000143; experiment; high: The primary paper reports the AW-PINN methodology and VIV experiments, but implementation equivalence cannot be established from the pinned repository because no code is present.
- `S3U-0930` — CR000143; experiment; medium: The paper states that data are available on request; no reusable dataset, released checkpoint, seed policy or hardware specification is provided by the pinned repository.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-127-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000144`. Exact next checkpoint: `Stage3-S128`.
