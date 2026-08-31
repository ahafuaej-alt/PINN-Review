# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P06

## Structural QA

Status: **PASS**

- 1 resource record validated against `stage3-resource-technical.schema.json`.
- 0 experiment records were warranted; no experiment record was fabricated.
- 0 configuration records were warranted; no configuration record was fabricated.
- 10 evidence records validated against `stage3-technical-evidence.schema.json`.
- 1 static reproducibility assessment validated against `stage3-reproducibility.schema.json`.
- All P06 identifiers are unique.
- Every fact-level evidence reference resolves.
- Empty `experiment_ids` and `configuration_ids` are valid and scientifically intentional for this dataset resource.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Repository pinned-snapshot validation is not applicable because `CR000268` is an external static dataset directory, not a Git repository.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No scientific workload or dataset payload was executed.
- Public-text provenance scan passed.

## Scientific extraction QA

Status: **PASS**

### CR000268

The resource is correctly represented as `dataset` with artifact form `static_data_directory`. The Stage-2 identity and relationship are preserved: `PRL000008` links the exact RSS V06.0 directory to Atlas paper 50, *Bias Correction of SMAP L2 Sea Surface Salinity Based on Physics-Informed Neural Network* (`10.3390/rs17183226`).

The provider-level dataset identity is independently supported by RSS and NASA PO.DAAC metadata. The V6.0 validated release contains Level 2C swath data, Level 3 8-day running averages, and Level 3 monthly averages; product files are documented as netCDF-4 and CF/ACDD compliant. The three product-family DOIs remain citation metadata beneath one `CR000268` identity and are not treated as three distinct computational resources.

For the L2C product, the metadata establish global coverage from 1 April 2015 to the present, approximately one 98-minute orbit per file, about 15 files per day, a 0.25° fixed Earth grid, native approximately 40-km SSS, and the standard smoothed approximately 70-km SSS. A representative variable inventory is stored with explicit indication that it is not exhaustive.

The paper-use layer remains separate. Paper 50 uses RSS V6 L2C data over the Pacific (60°S–60°N, 110°E–80°W) for April 2015–December 2022 and co-locates those data with EN4.2.2 salinity observations using <50 km spatial separation and a ±24 h temporal window. Its reported quality-control and input preparation are stored as `reported_in_primary_paper` facts, not as provider-level preprocessing requirements.

The dataset reaches **R3 static reproducibility** because product identity/version, access, use terms, product families, data format, coverage, representative variable semantics, citation metadata, and a verified downstream use path are all statically documented. **R4 is withheld** because no NetCDF payload was opened, no checksum was captured, and no complete file-level inventory was normalized. This is an intentional bounded Stage-3 dataset inspection, not an unavailable dataset or a Stage-2 verification failure.

## Pilot acceptance tests exercised cumulatively

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Zero configurations when no stable configuration identity is evidenced | PASS |
| Framework/library can have zero experiments | PASS |
| Dataset can have zero experiments/configurations | PASS |
| Supporting library ≠ PINN | PASS |
| Non-PINN research code ≠ PINN | PASS |
| Simulator/solver ≠ PINN | PASS |
| Operator learning ≠ classical PINN | PASS |
| Dataset ≠ software implementation | PASS |
| Paper reporting ≠ repository/provider implementation | PASS |
| Paper dataset use ≠ provider dataset scope | PASS |
| Resource identity ≠ paper relationship | PASS |
| Resource can have no Atlas relationship | PASS |
| Framework/product citations ≠ Atlas relationships | PASS |
| Multiple product DOIs can remain under one resource identity | PASS |
| Large example/data corpus need not be expanded exhaustively in the pilot | PASS |
| Bundled/listed files ≠ independently inspected payload automatically | PASS |
| Custom data-use terms ≠ SPDX software license | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Pinned Stage-2 repository snapshots retained when applicable | PASS |
| Static R3 can be assigned for a versioned dataset with documented access/use metadata | PASS |
| R4 withheld when binary/file-level end-to-end validation is intentionally deferred | PASS |
| Static R4 can be assigned without execution when end-to-end artifacts are complete | PASS |
| R5 cannot be assigned | PASS |
| Consequential conflicting evidence preserved | PASS |

## Current methodological observation

P06 confirms that the Stage3-D01 hierarchy handles versioned scientific datasets without forcing experiment semantics. The dataset itself remains the resource; a paper relationship supplies evidence for one specific consumer/use pipeline rather than turning the archive into a paper experiment.

The checkpoint also validates the source-scope rule for data preprocessing: provider-level product generation/metadata and paper-level co-location/filtering are distinct technical claims and can coexist cleanly in the same resource record.

No schema change is required at Stage3-P06.
