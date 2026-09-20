# Stage 3 S081–S088 technical-evidence/schema reconciliation

Date: 2026-09-06
Status: PASS
Scope: Stage3-S081 through Stage3-S088 technical-evidence records only

## Reason for reconciliation

A post-publication audit found evidence_type labels in S081–S088 that were not members of the accepted `stage3-common.schema.json#/$defs/evidenceType` enumeration. S083 and S084 also used `field_status: conflicting`, whereas the accepted field-status enumeration uses `conflicting_evidence`.

No scientific claim, evidence identifier, resource identifier, experiment/configuration identifier, count, Stage-2 record, methodology decision, or schema was changed.

## Accepted evidence-type mapping

- `repository_metadata` → `repository_documented`
- `repository_documentation` → `README` when the evidence source is the repository README
- `environment_manifest` → `environment_file`
- `conflicting_evidence` → the underlying accepted evidence source type:
  - S083 TE-CR000095-0008 → `repository_documented` because the conflict is established from the provider README and run script
  - S084 TE-CR000096-0008 → `source_code` because the conflict is established directly from BB.py and BB4.py
- `documentation_and_source_code` → source-specific accepted types:
  - S088 TE-CR000100-0004 → `repository_documented` because the environment claim is documented by README/setup.py
  - S088 TE-CR000100-0005 → `source_code` because the workflow claim is implemented in the inspected source

The two affected conflict records were also normalized from `field_status: conflicting` to the accepted `field_status: conflicting_evidence`; their conflict claims and values are unchanged.

## Audit result

Affected checkpoints: S081, S082, S083, S084, S085, S086, S087, S088.

Invalid evidence_type occurrences corrected: 29.
Additional field_status enum corrections: 2.

After normalization, every S081–S088 technical-evidence record uses an accepted evidence_type and accepted field_status value, and the `inferred` / `inferred_from_evidence` conditional remains satisfied. Evidence IDs, resource/experiment/configuration references, verified repository SHAs, source relations, scientific values, confidence labels, and extraction dates are unchanged.

Checkpoint technical-evidence counts remain unchanged:
- S081: 12
- S082: 10
- S083: 10
- S084: 9
- S085: 8
- S086: 9
- S087: 9
- S088: 8

Cumulative Stage-3 totals remain unchanged at the S088 boundary: 103 resources, 183 experiments, 370 configurations, 1,282 technical-evidence records, 103 reproducibility assessments, 669 unresolved findings, and 100 explicit conflicts. SOB010 remains 3/10. The next controlled scale-out resource remains CR000101 / Stage3-S089.

## Integrity conclusion

PASS. The reconciliation is schema-only and count-neutral. Stage 1, Stage 2, `05-curated/`, public Atlas/site files, accepted methodology, and accepted schemas remain untouched.
