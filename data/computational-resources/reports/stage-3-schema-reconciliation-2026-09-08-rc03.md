# Stage 3 schema reconciliation — RC03

Date: 2026-09-08
Scope: published S129 and S132 metadata at parent `2ed6603b4f6ebc7378b4973f6c6d6acae0c91b37`.

Six records contained seven values outside the accepted schema enumerations. CR000145 is represented with `resource_profile: profile` and `artifact_form: profile_page`. Its three profile evidence rows, and the two CR000149 inventory/verification evidence rows, use `evidence_type: repository_documented`. Their provider/repository source relations, source paths and scientific values remain intact.

This is a count-neutral correction: 152 resources, 239 experiments, 438 configurations, 1705 technical-evidence records, 152 reproducibility assessments, 962 unresolved findings and 115 explicit conflicts remain the published S132 baseline. Historical checkpoint QA records describe their original publication; this reconciliation supersedes their schema-pass claim for the corrected rows. No history is rewritten.

All accepted record schemas, cumulative identifier/reference checks, reproducibility gates and SOB001–SOB014 counts pass after correction. The exact seven before/after fields are retained in [the reconciliation QA](../03-technical/batch-qa/schema-reconciliation-2026-09-08-rc03-qa.json).

Stage 1, Stage 2, accepted schemas/methodology, curated and public site files are unchanged. No scientific workload was executed. S133 remains unpublished and is not included in this corrective commit.
