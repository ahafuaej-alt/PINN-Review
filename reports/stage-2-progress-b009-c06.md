# Computational Resources Stage 2 — B009 Checkpoint 06 Progress

Verification date: 2026-08-28

This checkpoint closes B009 by processing its sole remaining unprocessed resource, CR000238. It intentionally stops at the logical batch boundary rather than beginning B010 in the same checkpoint. The cumulative `reports/stage-2-progress.md` remains historically complete through B009-C02; checkpoint-specific progress reports are the authoritative continuation deltas until the cumulative report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B009 (completed) |
| Last completed resource | CR000238 |
| Last persistence checkpoint | B009-C06 |
| Next logical batch | B010 |
| Next resource | CR000239 |
| Completed expansion batches | 9 |
| Expansion resources processed | 225 |
| Pending expansion resources | 119 |
| Expansion relationships verified | 180 |
| Completed Stage-1 resource count | 238 |
| Remaining Stage-1 resource count | 119 |
| Completed Stage-1 PRL assertions | 206 |
| Pending Stage-1 PRL assertions | 125 |
| Verified relationship records | 197 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B009 resources completed | 25 of 25 |
| B009 resources remaining | 0 |
| Current QA status | B009-C06 passed; B009 complete |

Completed CR IDs/ranges are `CR000001–CR000238` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000239–CR000357`.

The pilot set, B001–B009, and all completed checkpoints through B009-C06 must not be reprocessed. Resume with **B010 at CR000239**.

## B009 checkpoint 06 summary

One resource was processed: CR000238, the sole remaining B009 resource.

- CR000238 / `https://gpytorch.ai` is verified as the live GPyTorch project/documentation web resource and classified `supporting_software_or_library_documentation`.
- Atlas review paper 401, *Physics-informed machine learning* (DOI `10.1038/s42254-021-00314-5`), lists the exact GPyTorch URL in its Related links and discusses GPyTorch as a Gaussian-process/kernel-method toolkit relevant to physics-informed learning. **PRL000099 is verified**.
- CR000238 points to the same GPyTorch project represented canonically by repository resource CR000233. Repository-level MIT license, citation, dependency, and example/test-asset metadata remain on CR000233 and are not duplicated onto the documentation URL.
- Paper-internal reference 161 is retained only as provenance and is not promoted to an Atlas reference ID.
- No alias, ordinary manual-review item, scientific-review item, new relationship type, schema issue, or stop condition was produced.

No third-party code was executed, no archive or model asset was unpacked, no external dataset was downloaded, and no Stage-3 normalization was performed.

**B009 is complete.** Stage 2 resumes with **B010 at CR000239**.
