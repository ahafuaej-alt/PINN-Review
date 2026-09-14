# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S296`
- Latest completed resource: `CR000347`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000348`
- Exact next checkpoint: `Stage3-S297`

## Cumulative counts through S296 / RC09

- Resources: **344**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3389**
- Reproducibility assessments: **344**
- Unresolved findings: **1608**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **19**

## S296

`CR000347` preserves final Stage-2 classification as WSClean scientific software and verified `PRL000329` for Atlas paper 853. Current canonical GitLab documentation identifies WSClean as a fast generic widefield radio-interferometric imager, GPL version 3 software with CMake/build and installation documentation and a documented `wsclean` command-line entrypoint. Stage 2 did not establish an immutable paper-specific source revision, and paper 853's exact WSClean version/options remain unresolved; no configuration identity is therefore manufactured. CR000347 is assessed at `R2`; no repository clone, build, installation, test or imaging workflow was executed.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **4/10** with `CR000344`, `CR000345`, `CR000346` and `CR000347`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S296.

## Continuation

Continue with `Stage3-S297` at `CR000348`.
