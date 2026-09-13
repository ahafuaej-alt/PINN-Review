# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S263`
- Latest completed resource: `CR000312`
- Latest completed aggregate batch: `SOB029` - **PASS (10/10)**
- Current batch: `SOB030` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` - **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000313`
- Exact next checkpoint: `Stage3-S264`

## Cumulative counts through S263 / RC08

- Resources: **309**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3005**
- Reproducibility assessments: **309**
- Unresolved findings: **1501**
- Explicit conflicts: **154**
- Independently extractable resources remaining: **54**

## S263

`CR000312` preserves the exact historical ATL03 Version-5 identity, DOI `10.5067/ATLAS/ATL03.005`, and verified `PRL000175` relationship for Atlas paper 571. NSIDC documents ATL03 V5 as an HDF5 global geolocated-photon product with WGS84 coordinates and 70 cm spatial resolution; the V5 payload is now retired while documentation remains available. The provider's V5 geolocation-error advisory begins on 24 October 2021. Every ICESat-2 acquisition date listed by the paper precedes that onset, with the latest reported study acquisition on 15 September 2021, so the paper-reported study dates are outside the affected interval. The paper substantially documents AE-DBSCAN photon extraction, outlier removal, Parrish refraction correction and GOT4.8 tide correction before using processed ATL03 bathymetric points as PI-CNN labels/reference data. Exact ATL03 granule identities and the derived processed-point payload remain unresolved. NSIDC announced V5 payload retirement for 19 December 2023, while the paper records the V5 URL as accessed on 21 January 2024; Stage 3 retains this as an explicit timing conflict because the paper statement does not distinguish documentation-page access from payload access. No HDF5 granule was opened or processed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **9/10**.

## Continuation

Continue with `Stage3-S264` at `CR000313`.
