# Performance Metrics data

This directory powers the **Performance Metrics** section of the PINN Review Atlas.

## Sources

Primary source files:

- `Reference_PINN_Performance_Eval.md`: paper-level metric names, details, values, and source classifications.
- `PINN_Performance_Evaluation_Metrics_Table(1).docx`: the 123-metric taxonomy, organized into 11 metric groups, including definitions, calculation ideas, preferred directions, and typical PINN uses.

Supplemental research:

- `paper-performance-supplemental.json`: web-researched records for [194], [452], [694], [776], [803], [809], [812], and [813], which were absent from the primary paper-level extraction.
- Every supplemental record retains its publisher DOI or authoritative institutional source URL and access date.
- Exact numerical claims are stored only when publicly exposed by the indexed publication record. [694] is numerical; the other seven records remain qualitative because their indexed pages do not expose scalar result tables.

Ambiguous mappings remain auditable and are not silently converted to invented values or zeros.

## Reference-ID invariant

Every paper is represented by its Reference ID in square brackets, for example **[248]**. The numeric `paper_id` is retained for joins and URLs, while `paper_label` is always `[ID]`. Validation fails when this invariant is violated.

## Files

- `performance-summary.json`: aggregate counts used by the overview cards and prevalence views.
- `performance-validation.json`: duplicate, coverage, supplemental-provenance, manual-review, and label-format checks.
- `paper-performance-supplemental.json`: the eight researched records that complete coverage from [1] through [853].
- `metric-taxonomy.json.gz.b64.part1/part2`: gzip-compressed, base64-encoded metric dictionary split for repository transport.
- `paper-data.part*.txt`: gzip-compressed, base64-encoded primary paper records, split into ordered chunks. Chunk `05` is represented by `05a` and `05b`.

`assets/performance-data-supplement-loader.js` reconstructs the primary compressed datasets in the browser, merges the researched supplement, updates metric paper counts and summary statistics, and supplies the resulting 853-paper dataset to both the Performance Metrics explorer and reference Technical details.

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
node --check assets/performance-data-supplement-loader.js
node scripts/validate-performance-metrics.mjs
```

The validator reconstructs the compressed datasets and checks:

- 845 records in the original extraction plus eight researched supplemental records;
- complete unique coverage of [1] through [853];
- labels formatted as `[ID]`;
- source URLs for every supplemental record;
- the numerical/qualitative distinction for the researched records;
- 123 unique metrics and 11 source-defined groups;
- known taxonomy mappings and the explicitly tracked primary-source IDs `validation_loss` and `wasserstein_distance`;
- consistency of summary counts and reporting statuses.

## Updating the data

Regenerate the normalized primary records from the two original source files when those files change. Preserve raw metric text and source provenance. New supplemental web research must retain authoritative URLs, access dates, and a clear distinction between exact numerical reporting and qualitative evaluation. Run the validator before publishing.
