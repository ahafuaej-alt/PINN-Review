# Stage 2 B011 Checkpoint 04 Deferred and Qualified Findings

Verification date: 2026-08-29

B011 checkpoint 04 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000277 | Atlas paper 144 gives the exact Kaggle URL and verifies `PRL000028`. The authoritative UCI record independently verifies the underlying household-electric-power dataset, DOI `10.24432/C58K54`, and CC BY 4.0. | Dataset relationship and upstream identity/citation/license are verified. The CR identity remains the Kaggle landing page; the CC BY 4.0 finding is scoped to UCI because Kaggle item-level license metadata was not independently extracted. File/schema and mirror-equivalence normalization remain Stage 3 work. |
| CR000278 | Atlas paper 146 gives the exact EIRIE item URL and verifies `PRL000029`. Official European Commission/JRC material verifies EIRIE platform identity, but the direct CITnet item endpoint did not yield a stable retrievable item page. | Paper-data relationship is verified. Redirect/final-URL and current item-level access semantics are bounded unknowns; no item-level dataset license or standalone dataset DOI/citation was inferred. Item metadata and file-level normalization remain Stage 3 work. |
| CR000279 | Atlas paper 153 and the official Copernicus Marine page verify `GLOBAL_MULTIYEAR_PHY_001_030`, DOI `10.48670/moi-00021`, and `PRL000031`. The official service documentation establishes Copernicus Marine terms/Licence Agreement rather than an SPDX license. | Product identity, DOI, documentation, access role, and paper relationship are verified. Product-version/file/variable subset normalization remains Stage 3 work. CR000280 (`10.48670/moi-00215`) is a separate resource and was not processed. |

No code, archive, external dataset, model artifact, notebook, or bundled data file was executed, downloaded, unpacked, opened, subsetted, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B011 remains in progress and the next resource is **CR000280**.
