# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S092`  
Current batch: `SOB010` (7/10)  
Current unresolved count: **693**  
Next unresolved ID: `S3U-0694`  
Explicit conflict count: **101**

## Stage3-S092 additions — CR000104

- `S3U-0688` — No repository license was identified at the final Stage-2 pinned snapshot.
- `S3U-0689` — `requirements.txt` lists the required Python packages without pinned versions; README specifies Python 3.10+ rather than a reconstructable environment.
- `S3U-0690` — Training/evaluation data are external to the repository and the inspected provider link does not establish an immutable data version or checksum.
- `S3U-0691` — The training interface is internally inconsistent: `train.py` defines `--save_folder` but later accesses undefined `args.root`; README training wording also mixes `--root` with `--save_folder` examples.
- `S3U-0692` — The testing interface is internally inconsistent: `test.py` defines `--load_folder` but later accesses undefined `args.root` when constructing checkpoint paths.
- `S3U-0693` — Specific hardware provenance for the reported study results is not documented in the inspected repository evidence.

New explicit conflict in S092: the train/test output/load-path CLI and runtime-variable mismatch documented above. Cumulative explicit conflict count is **101**.

## Continuation

Continue from `S3U-0694` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
