# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S088`  
Current batch: `SOB010` (3/10)  
Current unresolved count: **669**  
Next unresolved ID: `S3U-0670`  
Explicit conflict count: **100**

## Stage3-S088 additions — CR000100

- `S3U-0664` — `setup.py` declares the runtime dependencies but does not pin package versions, so the exact Python environment is not reconstructable from the repository alone.
- `S3U-0665` — The location workflow requires trained external EikoNet models, but their exact checkpoint identities and provenance are not bundled in the pinned HypoSVI repository.
- `S3U-0666` — The event-pick and station inputs required for the paper/example workflow are external; no canonical reproduction dataset is bundled at the pinned snapshot.
- `S3U-0667` — The README points to an externally hosted Colab example rather than preserving the example as an immutable repository artifact.
- `S3U-0668` — Particle initialization uses NumPy randomness in `LocateEvents`, but no deterministic repository-level seed is established in the inspected workflow.
- `S3U-0669` — Hardware/runtime provenance for the published or example HypoSVI calculations is not documented in the pinned repository.

No new explicit conflict is recorded in S088.

## Continuation

Continue from `S3U-0670` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
