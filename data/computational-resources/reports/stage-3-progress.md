# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S272`
- Latest completed resource: `CR000321`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000322`
- Exact next checkpoint: `Stage3-S273`

## Cumulative counts through S272 / RC09

- Resources: **318**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3111**
- Reproducibility assessments: **318**
- Unresolved findings: **1530**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **45**

## S272

`CR000321` preserves the corrected official SCEDC portal identity, archive citation DOI `10.7909/C3WD3xH1`, and verified `PRL000204` relationship for Atlas paper 634. The primary paper defines the observational sample as the first 10,000 SCEDC events beginning `2019-01-01`, using detections and phase picks from the SCEDC phase-arrival observational catalogue; the paper states that these events and phase picks were manually reviewed by Southern California Seismic Network analysts. The case study reports approximately 30 observations per event and applies the same observational catalogue to 1-D and 3-D velocity-model inversions. Official SCEDC documentation confirms event/phase catalogue access, event-phase files keyed by SCSN event identifier, station metadata through FDSN/StationXML services, and the archive citation DOI. However, the exact historical event list, terminal timestamp, retrieval query/catalog snapshot, station subset and file-level phase manifest used by the paper are not independently frozen by the bounded source set. No SCEDC data payload or scientific workflow was executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **8/10**.

## Continuation

Continue with `Stage3-S273` at `CR000322`.
