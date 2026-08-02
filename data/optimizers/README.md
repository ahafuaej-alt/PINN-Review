# Optimizer data

This directory powers the Atlas `/optimizers/` explorer and the optimizer module in **References → View details → Technical details**.

## Provenance

- `reference-optimizer-source.md` is the authoritative paper-level table supplied for this feature. Its 853 rows cover reference IDs `[1]`–`[853]` exactly once.
- `reference-optimizer-web-research-notes.md` documents the targeted research that completed the eight rows formerly absent from an earlier extraction: `[194]`, `[452]`, `[694]`, `[776]`, `[803]`, `[809]`, `[812]`, and `[813]`.
- Paper–algorithm associations come only from the completed source table. The research-notes file documents provenance; it does not add separate occurrences during generation.

The completed source contains 566 records with at least one reported optimizer or training/inference algorithm and 287 explicit `N/A` records. `N/A` means that the source does not report an algorithm. It is never converted to zero, treated as optimizer failure, or used to infer an optimizer.

## Parsing and normalization

`scripts/build-optimizers.mjs` parses the Markdown table, retains every raw field, and splits lists only on commas or semicolons outside parentheses. Parenthetical annotations such as `RProp (trainrp)`, `AMSGrad (Adam variant)`, and `FOGD (fractional-order gradient descent)` remain present in both the record and taxonomy outputs.

Normalization is intentionally conservative:

- capitalization, spacing, and dash variants are merged where the identity is unambiguous;
- technically distinct variants such as AdamW, AMSGrad, RAdam, L-BFGS-B, and learning-rate-configured Adam forms remain separate;
- multiple listed algorithms are not assigned a training order;
- broad or unusual training/inference labels remain visible and can require manual review;
- probabilistic inference, reinforcement learning, regression, and metaheuristic procedures are clearly typed rather than presented as ordinary gradient optimizers.

The eight browsing families are organizational tags, not claims of mathematical equivalence or performance.

## Generated files

- `optimizer-records.json` — 853 paper records with raw and normalized forms, status, families, strategy, annotations, and review flags.
- `optimizer-taxonomy.json` — canonical forms, aliases found in the source, neutral descriptions, types, and unique supporting IDs.
- `optimizer-summary.json` — all interface counts and chart totals generated from the records.
- `optimizer-validation.json` — hashes and source-level invariant results.

Do not edit generated JSON manually.

## Update procedure

1. Edit or replace `reference-optimizer-source.md` with a reviewed source table.
2. Update the explicit mapping and taxonomy metadata in `scripts/build-optimizers.mjs` only when a genuinely new source form appears.
3. Run `node scripts/build-optimizers.mjs`.
4. Run `node scripts/build-optimizers.mjs --check` and `node scripts/validate-optimizers.mjs`.
5. Review the raw-form diff, manual-review records, counts, and browser behavior before merge.

## Scientific limitation

Frequency is reporting prevalence, not optimizer quality. Direct methodological comparison requires compatible governing problems, architectures, loss formulations, learning-rate schedules, training budgets, stopping criteria, implementations, and evaluation protocols. The dataset does not support claims about superiority, convergence speed, stability, or universal suitability.
