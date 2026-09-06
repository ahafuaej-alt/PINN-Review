# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S092`.
- Current canonical batch: `SOB010`.
- Current batch status: **7/10 independently extractable members complete**.
- Latest completed resource: `CR000104`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000105`.
- Next checkpoint: `Stage3-S093`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **107**
- Experiments: **193**
- Configurations: **380**
- Technical-evidence records: **1315**
- Static reproducibility assessments: **107**
- Unresolved findings: **693**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **256**

## Latest checkpoint

`Stage3-S092` completed `CR000104` (`KurbanIntelligenceLab/QuantumShellNet`) at the final Stage-2 pinned SHA `e02fd50eb4cf87074e31550ebdd47c1eba9dae08`. `PRL000209 → Atlas 656` remains a verified official relationship.

The repository implements a convolutional QuantumShellNet model for ground-state/material-property prediction across `single_element`, `molecule`, and `unseen` task modes. Because the inspected source does not implement PINN/PDE-residual semantics, Stage 3 records it as `non_pinn_research_code` while preserving the Stage-2 corpus relationship. Three bounded experiment/configuration pairs represent the three task modes without expanding the parameterized seed sweep.

S092 records one resource, three experiments, three configurations, nine technical-evidence records, one R1 reproducibility assessment, six new unresolved findings, and one new explicit conflict. The conflict preserves the source/documentation mismatch in which train.py defines `--save_folder` and test.py defines `--load_folder` while both later access `args.root`; the README also mixes root wording with save-folder examples. No scientific workload or external data was executed or opened. SOB010 is 7/10.

## Continuation

Resume only from `CR000105` for `Stage3-S093`. Preserve all accepted pilot exclusions and completed-resource boundaries.
