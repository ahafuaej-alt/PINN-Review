# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S087`  
Current batch: `SOB010` (2/10)  
Current unresolved count: **663**  
Next unresolved ID: `S3U-0664`  
Explicit conflict count: **100**

## Stage3-S087 additions — CR000099

- `S3U-0658` — No repository license is present at the final Stage-2 pinned snapshot.
- `S3U-0659` — No dependency/environment manifest or package-version specification is present, so the Python/PyTorch runtime cannot be reconstructed exactly from the repository.
- `S3U-0660` — No installation procedure is documented for the pinned repository.
- `S3U-0661` — Hardware provenance for the bundled ensemble/result production is not documented.
- `S3U-0662` — `Data.zip` and serialized model/result artifacts are bundled, but their payloads were not opened or loaded under the accepted static-inspection boundary; payload-level provenance therefore remains unresolved.
- `S3U-0663` — The parameterized ensemble generates many setup/retraining outputs, but no single canonical command-to-artifact provenance manifest maps the complete generated result tree.

No new explicit conflict is recorded in S087.

## Continuation

Continue from `S3U-0664` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
