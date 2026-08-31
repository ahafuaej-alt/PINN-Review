# Computational Resources Stage 3 — Technical Evidence

`04-evidence/` stores field-level evidence supporting facts in `03-technical/`. It does not replace Stage 2 identity, availability, licensing, relationship, alias, profile, or snapshot provenance.

## Canonical evidence record

Each record preserves at minimum:

```text
evidence_id
resource_id
experiment_id
configuration_id
technical_field
value
field_status
confidence
evidence_type
source_relation
evidence_source
repository_path_or_paper_section
verified_commit_sha
extraction_date
notes
```

For repository evidence, `verified_commit_sha` is the Stage 2 pinned snapshot whenever available. For papers, provider metadata, and non-version-control artifacts the commit field is `null` with source identity/location preserved elsewhere in the record.

## Evidence types

```text
repository_implemented
repository_documented
source_code
configuration_file
environment_file
notebook
README
formal_documentation
primary_paper
supplementary_material
archive_metadata
dataset_metadata
citation_metadata
inferred
```

Inference must use `source_relation: inferred_from_evidence` and must never be represented as direct implementation or documentation verification.

## Source-scope separation

Repository code, repository documentation, primary papers, supplements, and provider metadata are independent evidence scopes. When two scopes disagree, both values are preserved and the affected technical claim is marked `conflicting_evidence`.

A paper description never proves that a repository implements the same method. A repository default never silently replaces a paper-reported experiment.

## Storage

During the pilot and subsequent micro-batches:

```text
04-evidence/
├── technical-evidence/
└── extraction-log/
```

Evidence files should be partitioned by pilot/checkpoint or micro-batch as volume grows. Do not create parallel repository/paper/dataset fact stores; use `evidence_type` and `source_relation` to distinguish provenance in one evidence model.

## Static boundary

Commands, installation instructions, entrypoints, and configuration snippets are captured as evidence but are not executed. Large binary/archive downloads are not required for Stage 3; bounded inspection and `deep_archive_inspection_deferred` are valid evidence-backed outcomes.
