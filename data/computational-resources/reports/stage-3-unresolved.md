# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08  
Current checkpoint: `Stage3-S122`  
Latest completed batch: `SOB013` — **PASS**  
Current batch: `SOB014` (0/10)  
Current unresolved count: **887**  
Next unresolved ID: `S3U-0888`  
Explicit conflict count: **112**

## Stage3-S122 additions — CR000137

- `S3U-0883` — the README pip command installs the latest stable release rather than the immutable Stage-2 snapshot; immutable reproduction therefore depends on the pinned-source/manual-install path.
- `S3U-0884` — `requirements.txt` and `setup.py` use unversioned dependencies even though `Pipfile.lock` provides an exact Python-3.8 locked environment; the documented install paths are not unified around the lock file.
- `S3U-0885` — the representative README examples do not report a random-seed policy.
- `S3U-0886` — execution hardware for the representative examples is not specified.
- `S3U-0887` — expected outputs are illustrated by solution/residual plots, but no quantitative acceptance thresholds are specified for the representative examples.

S122 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **112**.

## Batch status

`SOB013` is **PASS (10/10)** after CR000137. `SOB014` begins at CR000138.

## Continuation

Continue from `S3U-0888` only for genuinely new findings. Exact next resource is `CR000138` for `Stage3-S123`.
