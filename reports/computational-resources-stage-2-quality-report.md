# Computational Resources Stage 2 Pilot Quality Report

Verification date: 2026-08-26

## Result

The 13-resource pilot passes structural and referential integrity checks. It is ready for schema and scientific review, not publication.

## Structural checks

- All JSONL files parse line by line.
- Exactly 13 pilot resource records are present and every resource ID is unique.
- All 16 Stage 1 pilot PRL IDs are preserved.
- PRL000332 is the only new relationship ID and materializes the paper 312 mapping to canonical resource CR000184.
- All 17 relationship records point to one of the 13 pilot resources and to an Atlas paper ID present in the master paper dataset.
- Alias records point to valid canonical pilot resource IDs.
- Profile discoveries use discovery IDs only; no stable resource ID is invented.
- Static-evidence tables contain one row per pilot resource.
- Evidence-log subject IDs resolve to resources, relationships, or aliases in this overlay.

## Provenance checks

- Stage 1 source snapshot SHA-256 remains `72a168a3c57e07afcdcd8f513fbb54d34851095ea46eeb9618a996fbf769ee8e`.
- Stage 1 resource IDs are unchanged.
- Stage 1 relationship IDs are unchanged.
- Source line numbers are retained on every relationship.
- The internal paper reference 32 for paper 701 appears only under provenance; it is not an Atlas paper ID.
- URL repairs and alias resolutions are recorded separately from canonical records.

## Scope checks

- Changes are confined to `data/computational-resources/02-verification/` and the three Stage 2 reports.
- No public Atlas page, navigation, application, dataset, or deployment file is modified.
- No clone, build, package installation, notebook execution, model training, or test-suite execution was performed.
- Repository verification is static and pinned to recorded default-branch commit SHAs.
- The mandatory pilot boundary is respected.

## Review-sensitive outcomes

- CR000145 remains a profile resource; the likely paper-specific repository is a discovery candidate pending stable-ID approval.
- CR000174 remains a profile resource with discoveries but no inferred paper relationship.
- CR000049 is a software mention for paper 467, not paper-specific code.
- CR000069 is an upstream dataset source for paper 526, not that paper's official repository.
- CR000117 is supplementary code for paper 701; the separate supplementary-data DOI is not merged into CR000117.
- CR000044 remains non-PINN by accepted manual decision.

## Gate

Stop after this commit. Do not merge, deploy, publish, or continue to a broader Stage 2 batch until review approval is recorded.
