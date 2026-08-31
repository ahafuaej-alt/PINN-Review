# Computational Resources Stage 2 — B013 Checkpoint 06 Progress

Verification date: 2026-08-30

This checkpoint continues B013 and processes exactly CR000329–CR000331. Checkpoint-specific and canonical Stage-2 reports under `data/computational-resources/reports/` are the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000331 |
| Last persistence checkpoint | B013-C06 |
| Next resource | CR000332 |
| Completed expansion batches | 12 |
| Expansion resources processed | 318 |
| Pending expansion resources | 26 |
| Expansion relationships verified | 271 |
| Completed Stage-1 resource count | 331 |
| Remaining Stage-1 resource count | 26 |
| Completed Stage-1 PRL assertions | 301 |
| Pending Stage-1 PRL assertions | 30 |
| Verified relationship records | 288 |
| Explicitly `not_verified` relationship records | 13 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 18 of 25 |
| B013 resources remaining | 7 |
| Current QA status | B013-C06 passed |

Completed Stage-1 CR IDs are `CR000001–CR000331` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000332–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C06 must not be reprocessed. Resume with **CR000332**.

## B013 checkpoint 06 summary

Three resources were processed: **CR000329–CR000331**.

- **CR000329** / Italian Civil Protection press/data source. Atlas paper 714 explicitly states that the Italy COVID-19 data used in the study were downloaded from Italian Civil Protection and the Ministry of Health, verifying PRL000231. The Stage-1 press-release path reflects an older site structure; the current official press area is used canonically while the original URL remains in provenance. A separate official DPC structured COVID-19 repository exists and reports CC BY 4.0, but it is not identity-conflated with this cited web resource and its licence is not transferred by inference.
- **CR000330** / Italian Ministry of Health institutional portal. The same primary-paper statement verifies PRL000232. The paper cites the institutional portal rather than an exact dataset file. Current official Ministry COVID-19 situation and surveillance/archive pages remain publicly documented, while the legacy portal may present browser-validation protection to automated clients. Resource-level licence and exact historical file identity remain bounded unknown.
- **CR000331** / Minnesota Governor COVID-19 News. Paper 714 explicitly gives this exact URL after stating that events and interventions are available from official websites, so PRL000233's provenance is verified. However, the official resource is a Minnesota-specific COVID-19 intervention/news archive and not a dataset; the Stage-1 resource classification is corrected to `government_intervention_news_source` and relationship type to `paper_resource_mention`. Its geographic content does not substantiate the adjacent Italy intervention-timeline claim. This is recorded as an objective scientific-scope limitation, not a manual-review uncertainty.

No new alias, ordinary manual-review item, scientific-review item, schema issue or stop condition was produced. One canonical path correction, one resource-classification correction and one relationship-type correction were recorded.

No government data payload, archive export, CSV/JSON file, report, executive-order document, dashboard, dependency environment or third-party software was downloaded, installed or executed. No Stage-3 source reconciliation or timeline reconstruction was performed.

Stage 2 resumes with **CR000332**. CR000332 has not been started.
