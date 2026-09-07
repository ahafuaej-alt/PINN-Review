# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S110`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (7/10)  
Current unresolved count: **813**  
Next unresolved ID: `S3U-0814`  
Explicit conflict count: **109**

## Stage3-S110 additions — CR000124

- `S3U-0807` — CR000124 has no repository license identified at the pinned snapshot.
- `S3U-0808` — CR000124 has no dependency manifest, reconstructable pinned environment, or installation procedure.
- `S3U-0809` — CR000124 uses random training-subset selection but no reproducibility seed is documented in the bounded workflows.
- `S3U-0810` — CR000124 does not document a complete hardware profile.
- `S3U-0811` — CR000124 has no released trained checkpoint verified in the bounded source.
- `S3U-0812` — CR000124 has no fixed machine-readable numerical acceptance target verified in the bounded source.
- `S3U-0813` — CR000124 `Models/FCR_PGA_LSTM.py` loads `ROA_temporal_mendota_train_test_split_4_year_train_new.mat` despite being the FCR-designated workflow and writing FCR results; the inspected source does not resolve this naming/provenance mismatch.

S110 adds **1 explicit conflict**, corresponding to the FCR workflow/data-filename mismatch. Cumulative explicit conflict count is **109**.

## Batch status

`SOB012` is **7/10** after CR000124. Aggregate QA is not yet due; `SOB011` remains the latest completed aggregate batch with **PASS** status.

## Continuation

Continue from `S3U-0814` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000125` for `Stage3-S111`.
