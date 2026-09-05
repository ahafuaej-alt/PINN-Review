# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S085`.
- Current canonical batch: `SOB010`.
- Current batch status: **0/10 independently extractable members complete**.
- Latest completed resource: `CR000097`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000098`.
- Next checkpoint: `Stage3-S086`.
- Pilot-complete resources remain excluded; `CR000087` and `CR000091` were skipped in SOB009 and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **100**
- Experiments: **177**
- Configurations: **363**
- Technical-evidence records: **1256**
- Static reproducibility assessments: **100**
- Unresolved findings: **651**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **263**

## Latest checkpoint

`Stage3-S085` completed `CR000097` (`demiludan/LSTM_JHMpaper`) at the final Stage-2 pinned SHA `ac9d3d8875e7560a8b8583bf7576abd44b3480f7`. `PRL000199 → Atlas 615` remains a verified official relationship.

The bounded static extraction preserves Stage-2 classification as research code related to the PINN corpus rather than manufacturing PINN semantics from the code. One experiment family and three configurations represent the H_LSTM, B_LSTM and S_LSTM source variants. The scripts define 60-day multivariate streamflow forecasting workflows; B_LSTM includes Monte-Carlo dropout, while the pinned S_LSTM source calls `exit()` after model summary and before its declared training block. The scripts reference `Data_98_18.dat`, which is absent from the pinned repository tree.

S085 records one resource, one experiment, three configurations, eight technical-evidence records, one R1 reproducibility assessment, six new unresolved findings, and no new explicit conflict. No scientific workload was executed. SOB009 aggregate QA passed at 10/10.

## Continuation

Resume only from `CR000098` for `Stage3-S086`. Preserve all accepted pilot exclusions and completed-resource boundaries.
