# Stage 2 B012 Checkpoint 07 Deferred and Qualified Findings

Verification date: 2026-08-29

B012 checkpoint 07 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. Three Stage-1 parser-leakage relationships were conclusively resolved as explicit `not_verified` records rather than left uncertain.

| Resource | Result | Status |
|---|---|---|
| CR000307 | Atlas papers 476 and 692 explicitly use the JHTDB turbulent-channel-flow database, verifying `PRL000137` and `PRL000224`. Paper 476 itself writes JHTDB citations `[20]`, `[21]`, `[22]`, proving that Stage-1 `PRL000001–PRL000003` arose from paper-internal-reference leakage. Official JHTDB metadata gives DOI `10.7281/T10K26QW` and ODC-By attribution terms. | Two genuine relationships verified; three leaked PRLs explicitly `not_verified`. Exact paper-specific fields, subdomains, time ranges, and preprocessing remain Stage 3 work. |
| CR000308 | Zenodo verifies *HDNNP training data set for H2O*, DOI `10.5281/zenodo.2634098`, and a 103.8 MB archive. Atlas paper 511 cites the exact record, verifying `PRL000149`. | Dataset identity, DOI, and relationship verified. Exact record-level license remains bounded unknown because no explicit value was independently visible. Archive contents and README remain Stage 3 work and were not opened. |
| CR000309 | GitHub repository is pinned to `5e92879d6d8311bfecab50b605f9bbc142df0b94`, is public/non-fork/non-archived, and has an MIT license. Atlas paper 549 cites the exact repository, verifying `PRL000168`. `CITATION.cff` identifies version 1.0.0 but contains DOI `10.5281/zenodo.1234`. | Repository identity, pin, license, and relationship verified. The CFF DOI is rejected as placeholder/defective metadata and is not promoted. Notebook internals, dependencies, generated data, and reproducibility execution remain Stage 3 work. |

No code, notebook, archive, external dataset, HDF5 payload, model artifact, or generated data was executed, downloaded, unpacked, opened, subsetted, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B012 remains in progress and the next resource is **CR000310**.
