# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 006 |
| Current checkpoint | Stage3-P06 |
| Last completed resource | CR000268 |
| Next resource | CR000091 |
| Completed Stage-3 resource count | 9 |
| Remaining Stage-3 registry resource count | 355 |
| Approved pilot resources completed | 9 / 10 |
| Approved pilot resources remaining | 1 |
| Completed experiment count | 22 |
| Completed configuration count | 78 |
| Technical evidence records | 116 |
| Static reproducibility assessments | 9 |
| Current QA status | PASS |
| Current unresolved technical item count | 20 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000268 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P06 result

The sixth pilot checkpoint extracted `CR000268` as a versioned scientific dataset from the verified Stage-2 identity, the live RSS V6 directory and product metadata, NASA PO.DAAC metadata, and Atlas paper 50.

### CR000268

- Profile: `dataset`
- Artifact form: `static_data_directory`
- Canonical directory: `https://data.remss.com/smap/SSS/V06.0/`
- Provider: Remote Sensing Systems (RSS)
- Product: Remote Sensing Systems SMAP Ocean Surface Salinities, Version 6.0 validated release
- Product release date in PO.DAAC metadata: 26 March 2024
- Experiments: 0
- Configurations: 0
- Static reproducibility: `R3`
- Atlas relationship: `PRL000008` → paper 50, *Bias Correction of SMAP L2 Sea Surface Salinity Based on Physics-Informed Neural Network*, DOI `10.3390/rs17183226`.
- The root directory exposes `documents/`, `FINAL/`, and `NRT/`; `FINAL/` contains L2C and L3 branches.
- RSS documents three V6 product families: Level 2C swath data, Level 3 8-day running averages, and Level 3 monthly averages.
- Product files are documented as netCDF-4 and CF/ACDD compliant.
- Product-specific citation DOIs are `10.5067/SMP60-2SOCS` (L2C), `10.5067/SMP60-3SPCS` (L3 8-day), and `10.5067/SMP60-3SMCS` (L3 monthly).
- RSS data use is governed by custom product-specific terms rather than an SPDX software licence; research/publication use is permitted with the applicable product statement.

### L2C product metadata

The provider/NASA product metadata describe the validated L2C stream as beginning on 1 April 2015 and continuing to the present, with global ocean coverage. Each file covers approximately one 98-minute orbit, about 15 files are produced per day, and global coverage is achieved in roughly three days with an 8-day repeat cycle.

The L2C product is represented on a 0.25° fixed Earth grid. It includes the native approximately 40-km `sss_smap_40km` field and the standard smoothed approximately 70-km `sss_smap` field, formal uncertainty products, geolocation/time variables, ancillary sea-surface temperature and wind, quality flags, and radiometric/intermediate retrieval quantities. The Stage-3 record stores a representative variable subset rather than pretending that a bounded catalogue read is a complete payload-level inventory.

### Paper-50 use

Paper 50 identifies the exact RSS V06.0 directory as the source of its SMAP L2C SSS data. Its use is represented separately from provider metadata.

The paper-specific workflow uses the Pacific Ocean domain (60°S–60°N, 110°E–80°W) for April 2015–December 2022. SMAP L2C observations were co-located with EN4.2.2 in-situ salinity profiles using spatial separation below 50 km and a ±24 h temporal window, prioritizing the minimum spatial-distance match. The paper reports 1,628,851 initial co-located points before its stated quality-control filters.

Its preprocessing includes four polarizations and two look angles and applies missing-value removal, SSS range 10–40 PSU, SURTEP range 273–308 K, and removal of points with `|SSS_smap-SSS_EN| > 3 PSU`. These are stored explicitly as **paper-use facts**, not as intrinsic RSS dataset preprocessing rules.

### Reproducibility boundary

`CR000268` reaches **R3** because the versioned product identity, public access path, data-use terms, product families, format, coverage, representative variable semantics, citation metadata, and a verified downstream use path are statically documented.

**R4 is withheld** because no NetCDF payload was downloaded or opened, no checksums were captured, and the complete file inventory was not normalized. The Stage3-D01 bounded dataset rule is therefore exercised directly: provider/catalogue metadata support substantial static extraction without pretending that file-level binary validation occurred.

## Cumulative pilot state

Nine heterogeneous resources are now complete. P06 confirms that dataset semantics can remain at resource level with zero experiments/configurations, while a paper relationship describes an evidence-scoped consumer/use case rather than turning the dataset into a paper experiment.

The checkpoint also confirms that a single versioned dataset resource can legitimately expose multiple product families and product-specific DOIs without generating duplicate `CR` identities.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No NetCDF file, dataset payload, API workflow, analysis notebook, model, or scientific computation was downloaded or executed.

## Next action

Continue the approved pilot with the final resource, `CR000091`, preserving the same small-checkpoint extraction and QA process. After `CR000091`, stop for pilot-level scientific acceptance review before any wider Stage-3 scale-out.
