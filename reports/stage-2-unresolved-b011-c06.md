# Stage 2 B011 Checkpoint 06 Deferred and Qualified Findings

Verification date: 2026-08-29

B011 checkpoint 06 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000283 | Atlas paper 156 explicitly uses SwissALTI3D 2019 and gives the exact legacy swisstopo URL, verifying `PRL000035`. Current official swisstopo documentation verifies the same product and custom OGD terms. | Relationship and product identity are verified. The direct redirect behavior of the paper's legacy French URL was not independently observed; this is a bounded availability snapshot field, not a verification failure. Exact tiles, release-specific coverage and resampling remain Stage 3 work. |
| CR000284 | Atlas paper 156 explicitly uses Copernicus GLO-30 and gives the Copernicus Browser data location, verifying `PRL000036`. Official CDSE documentation verifies GLO-30, DOI `10.5270/ESA-c5d3d65`, free/custom licence terms and current access conditions. | Product, citation, licence scope and relationship are verified. Current 30 m view-service access requires CCM registration as of August 2026; this is recorded as present-day access semantics rather than retroactively applied to the paper's January 2025 access. Tile/release/subset normalization remains Stage 3 work. |
| CR000285 | Atlas paper 196 directly adopts the one-year NREL time-series load and solar-PV dataset at OEDI submission 5773, verifying `PRL000039`. OEDI/federal metadata verify DOI `10.25984/2228282`, public access and item-level CC BY 4.0. | Dataset identity, citation, item-level licence and relationship are verified. The broader AWS GADAL collection advertises CC BY 3.0 United States; this is a collection-level scope difference and is not used to replace the CR-specific item licence. File/schema/split normalization remains Stage 3 work. |

No code, DEM, archive, external dataset, S3 object, raster, CSV, model artifact, notebook, shapefile, repository file, or bundled data file was executed, downloaded, unpacked, opened, subsetted, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B011 remains in progress and the next resource is **CR000286**.
