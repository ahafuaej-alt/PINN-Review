# Stage 3 schema reconciliation — RC04

Date: 2026-09-08
Scope: published S137 evidence at parent `992b0c7e04f5f9f9dc1d80447383f6ad1100bc60`.

Two CR000154 evidence records paired `source_relation: inferred_from_evidence` with values outside the accepted `evidence_type` enumeration. Both now use `evidence_type: inferred`; their scientific values, confidence, status, sources and relations remain unchanged.

This is a count-neutral correction: 159 resources, 247 experiments, 446 configurations, 1784 technical-evidence records, 159 reproducibility assessments, 1003 unresolved findings and 117 explicit conflicts remain the published S139 baseline. Historical checkpoint QA records describe their original publication; this reconciliation supersedes their schema-pass claim for the corrected rows. No history is rewritten.

All accepted record schemas, cumulative identifier/reference checks, reproducibility gates and completed aggregate counts are revalidated after correction. The exact before/after fields are retained in [the reconciliation QA](../03-technical/batch-qa/schema-reconciliation-2026-09-08-rc04-qa.json).

Stage 1, Stage 2, accepted schemas/methodology, curated and public site files are unchanged. No scientific workload was executed.
