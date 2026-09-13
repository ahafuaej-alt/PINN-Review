# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S271`
- Latest completed resource: `CR000320`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000321`
- Exact next checkpoint: `Stage3-S272`

## Cumulative counts through S271 / RC09

- Resources: **317**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3099**
- Reproducibility assessments: **317**
- Unresolved findings: **1527**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **46**

## S271

`CR000320` preserves the corrected official ESS-DIVE portal identity and verified `PRL000200` relationship for Atlas paper 615. The paper documents Quigley and Rock Creek as East River headwater catchments with short daily streamflow records: Quigley spans 1 September 2014 to 13 October 2016 with 774 observations, and Rock Creek spans 31 August 2014 to 4 October 2017 with 1131 observations. Pumphouse is also used in the study with a three-year record from 1 October 2014 to 30 September 2017, but the verified data-availability statement does not independently assign that record to a specific ESS-DIVE package. Meteorological forcing—precipitation and daily maximum/minimum temperature—is derived from 1-km Daymet data and is kept separate from the ESS-DIVE streamflow source. The paper reserves the last year of each short record for testing, uses the remaining data for calibration with a 90/10 training/validation split, and reports input sequence lengths of 60 days for Quigley/Pumphouse and 30 days for Rock Creek. Current ESS-DIVE documentation confirms the portal's repository role and its public-dataset licence policy, but the exact package DOI/version, file schema and package-specific licence for the cited headwater records remain unresolved. No payload, API response or dataset file was opened. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **7/10**.

## Continuation

Continue with `Stage3-S272` at `CR000321`.
