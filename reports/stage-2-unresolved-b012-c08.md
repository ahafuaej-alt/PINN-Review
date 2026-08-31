# Stage 2 B012 Checkpoint 08 Deferred and Qualified Findings

Verification date: 2026-08-29

B012 checkpoint 08 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. One source URL typo was conclusively resolved through the established alias mechanism.

| Resource | Result | Status |
|---|---|---|
| CR000310 | Atlas paper 555 directly uses the UNSW gear-wear run-to-failure dataset and cites Version 1 DOI `10.17632/p2yryg9k6z.1`, while Stage 1 contains `10.17632/p2yrryg9k6z.1`. Mendeley verifies the corrected Version 1 identity and CC BY 4.0. | `VA000055` repairs the extra-r source typo; `PRL000169` is verified. Version 1 says 10-second acquisitions, while the paper and later Version 2 say 11 seconds; file/version reconciliation remains Stage 3 work. |
| CR000311 | Atlas paper 563 describes the LIAS induction-motor dataset and gives the exact MCSA URL. The current MCSA-DC portal verifies the rotor-bar-failure dataset and CC BY 4.0. | `PRL000172` is verified. The live downloadable package is labeled Version 1 (2023), later than the paper's 2022 access date; file-level continuity remains Stage 3 work. |
| CR000312 | Atlas paper 571 directly uses ATL03 Version 5 and gives the exact NSIDC URL. NSIDC verifies DOI `10.5067/ATLAS/ATL03.005`, citation metadata and V5 documentation. | `PRL000175` is verified. NSIDC now marks Version 5 retired and documents a V5 geolocation issue for data after 24 October 2021. Paper-specific subset exposure and migration to newer releases remain Stage 3 questions, not Stage-2 identity failures. |

No dataset, archive, CSV, HDF5 granule, Read me, model artifact, notebook, source code, or third-party payload was executed, downloaded, unpacked, opened, subsetted, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B012 remains in progress and the next resource is **CR000313**.
