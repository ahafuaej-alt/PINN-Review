# Stage 3 schema reconciliation — RC06

Date: 2026-09-12
Scope: count-neutral accepted-schema enum normalization for published checkpoints `Stage3-S206` through `Stage3-S210` at parent `837090930bba040bfa7f8865e469ad11eee7010e`.

Seven published resource records contained `artifact_form` values outside the accepted `stage3-common.schema.json` enumeration. `CR000235` used `provider_profile`; `CR000236`, `CR000237`, `CR000238`, `CR000240`, `CR000241`, and `CR000242` used `documentation_web_resource`.

RC06 maps these values losslessly to accepted artifact forms without altering scientific meaning, identity, relationships, evidence, reproducibility, unresolved findings, conflicts, experiments, configurations, or counts:

- `CR000235`: `provider_profile` → `profile_page`
- `CR000236`: `documentation_web_resource` → `documentation_site`
- `CR000237`: `documentation_web_resource` → `documentation_site`
- `CR000238`: `documentation_web_resource` → `documentation_site`
- `CR000240`: `documentation_web_resource` → `documentation_site`
- `CR000241`: `documentation_web_resource` → `documentation_site`
- `CR000242`: `documentation_web_resource` → `documentation_site`

Historical checkpoint QA files remain historical publication records. RC06 supersedes only their schema-pass claims for the corrected rows. No history is rewritten and the accepted schemas and methodology are unchanged.

Cumulative schema and reference integrity were rechecked across the affected S206–S210 records, and the completed `SOB023` membership/count state remains unchanged and valid at 10/10. Published cumulative totals remain 240 resources, 339 experiments, 609 configurations, 2499 technical-evidence records, 240 reproducibility assessments, 1376 unresolved findings, and 146 explicit conflicts. `SOB024` remains 0/10; 123 independently extractable resources remain.

Stage 1, historical Stage 2, accepted schemas/methodology, `05-curated/`, and public Atlas/site files are unchanged. No scientific workload was executed. Exact continuation remains `CR000243 → Stage3-S211`.