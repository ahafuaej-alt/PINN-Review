# Performance Metrics data

This directory powers the **Performance Metrics** section of the PINN Review Atlas.

## Authoritative sources

- `Reference_PINN_Performance_Eval.md`: paper-level metric names, details, values, and source classifications.
- `PINN_Performance_Evaluation_Metrics_Table(1).docx`: the 123-metric taxonomy, organized into 11 metric groups, including definitions, calculation ideas, preferred directions, and typical PINN uses.

No external values are added. Ambiguous mappings remain auditable and are marked for manual review rather than guessed.

## Reference-ID invariant

Every paper is represented by its Atlas reference ID in square brackets, for example **[248]**. The numeric `paper_id` is retained for joins and URLs, while `paper_label` is always `[ID]`. Validation fails when this invariant is violated.

## Files

- `performance-summary.json`: aggregate counts used by the overview cards and prevalence views.
- `performance-validation.json`: duplicate, missing-ID, manual-review, and label-format checks.
- `metric-taxonomy.json.gz.b64.part1/part2`: gzip-compressed, base64-encoded metric dictionary split for repository transport.
- `paper-data.part*.txt`: gzip-compressed, base64-encoded paper records, split into ordered chunks. Chunk `05` is represented by `05a` and `05b`.

The browser concatenates the ordered text chunks, decodes base64, decompresses gzip with `DecompressionStream`, and parses the resulting JSON.

## Reporting statuses

The data distinguishes:

- `reported_numerically`
- `reported_qualitatively`
- `not_reported`
- `review_paper`
- `non_pinn_record`
- `software_or_framework`

Missing or non-applicable reporting is never converted to zero.

## Scientific comparability

A shared metric name does not make two values directly comparable. Direct comparison requires compatible metric definitions, normalization, variables, units, governing problems, domains, datasets, cases, noise levels, reference solutions, and evaluation sets. The interface therefore presents heterogeneous records as evidence, not as a universal paper ranking.

## Validation

From the repository root, run:

```bash
node --check assets/performance.js
node scripts/validate-performance-metrics.mjs
```

The validator reconstructs both compressed datasets and checks:

- 845 unique paper records;
- labels formatted as `[ID]`;
- the eight source-missing IDs;
- 123 unique metrics and 11 source-defined groups;
- known taxonomy mappings and the explicitly tracked unrecognized IDs `validation_loss` and `wasserstein_distance`;
- consistency of summary counts and reporting statuses.

## Updating the data

Regenerate the normalized records from the two authoritative source files, preserve raw metric text, rebuild the compressed chunks and summary files, then run the validator before publishing. Do not renumber papers or silently repair missing IDs.
