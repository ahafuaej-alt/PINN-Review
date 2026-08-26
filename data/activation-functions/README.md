# Activation Functions data

This directory contains the auditable paper-level data behind the Atlas **Activation Functions** explorer.

## Provenance

`reference-activation-functions-source.txt` is the authoritative completed table supplied for this feature. It contains one row for every Reference ID `[1]`–`[853]`: 482 rows have a named activation field and 371 contain `N/A`. The source has 163 distinct non-`N/A` raw fields.

`reference-activation-functions-web-research-notes.txt` documents the prior completion of nine formerly absent records: `[170]`, `[194]`, `[452]`, `[694]`, `[776]`, `[803]`, `[809]`, `[812]`, and `[813]`. The feature does not repeat or extend that research cycle. `[813]` is retained as `adaptive tanh`; the other completed records retain their documented `N/A` reasons.

## Generated files

- `activation-records.json`: paper records, raw evidence, occurrence-level normalization, roles, and review flags.
- `activation-taxonomy.json`: canonical entries, aliases, families, general definitions, source annotations, and unique supporting IDs.
- `activation-summary.json`: derived KPI and chart totals.
- `activation-validation.json`: source checksums, ID coverage, and invariant results.

Run `node scripts/build-activation-functions.mjs` after changing the source or mapping policy. Use `--check` in validation workflows to detect stale generated artifacts.

## Parsing and normalization

The parser preserves `activation_raw` and `notes_raw` exactly. It splits lists only on commas or semicolons outside parentheses, square brackets, and braces. This prevents formulas such as `φ(x)=max{x³,0}` from being broken internally.

Only clear aliases and capitalization or punctuation variants share a canonical entry. Meaningful adaptive, trainable, slope-qualified, SIREN, KAN, feature-mapping, kernel, gate, and custom mathematical forms remain distinct. Swish and SiLU are separate entries. `RBF` and `Gaussian` remain separate from `Gaussian RBF` when the source does not establish equivalence.

Every raw occurrence remains in `activation_mentions`, even when one raw form maps to multiple explicit alternatives or to no activation. Ambiguous mappings retain the source wording and set `manual_review_required: true`.

## Roles and context

Roles are assigned only from explicit wording in the activation field or note. Supported tags include hidden layer, output layer, gate, constraint/loss, CNN or encoder module, operator-network module, compared candidate, adaptive/trainable, and custom basis/kernel. Missing layer evidence remains `role_not_specified`.

Constraint- or loss-only nonlinearities remain searchable but are excluded from implementation-oriented activation counts. Gate, output, module, feature-mapping, and basis/kernel uses retain explicit labels rather than being presented as interchangeable feed-forward hidden-layer choices.

## Count modes

The default **implementation-oriented records** mode excludes review/survey and non-PINN mentions, and excludes a function when its only supported role is a constraint or loss. **All source mentions** includes those contextual mentions while preserving their reporting status. In both modes, each canonical activation contributes at most once per paper.

Frequency is descriptive, not a ranking. The data do not establish superiority, convergence, stability, or suitability across different PDEs, derivative orders, architectures, initializations, optimizers, loss formulations, or training budgets.

## `N/A` classification

`N/A` is never converted to zero or “no activation.” Its reporting status is derived from the source note: not explicitly stated, review/survey, non-PINN, conceptual/not implemented, paper unavailable, or other N/A. The exact reason remains visible in the paper card, dialog, export, and References technical-details panel.

## Updating safely

1. Revise the authoritative source only with user-approved evidence.
2. Add a conservative source-form mapping or retain the form as a manual-review entry.
3. Update role logic only when the source wording supports the role.
4. Regenerate the JSON artifacts.
5. Run `node scripts/validate-activation-functions.mjs`, JavaScript syntax checks, existing Atlas validators, DOM interaction checks, and four-mode Chromium visual QA before merge.
