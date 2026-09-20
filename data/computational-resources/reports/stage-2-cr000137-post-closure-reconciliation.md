# Computational Resources Stage 2 — CR000137 Post-Closure Reconciliation

Reconciliation date: 2026-09-08

## Purpose

Stage 2 is scientifically closed. This narrowly scoped post-closure correction restores the missing final authority for `CR000137` and its original Stage-1 relationship assertion `PRL000264 → Atlas 745`. Historical Batch-006 files are preserved unchanged for auditability. The two machine-readable records created with this report are authoritative overlays for CR000137 and PRL000264.

## Defect

The Stage-1 inventory contains `CR000137 = https://github.com/NeuroDiffGym/neurodiffeq` and `PRL000264 = CR000137 → Atlas 745`. Historical Stage-2 Batch-006 outputs contain CR000136 and CR000138 but omit CR000137 and PRL000264. Later relationship-resolution, review-closure, and user-report reconciliation passes did not restore them, despite Stage-2 closure accounting asserting complete Stage-1 coverage.

This is an administrative/provenance omission, not a reopening of Stage-2 scientific review.

## Restored resource authority

- Resource: `CR000137`
- Canonical repository: `https://github.com/NeuroDiffGym/neurodiffeq`
- Host/type: GitHub repository
- Default branch: `master`
- Immutable Stage-2 snapshot: `df47923878f39377bd45922a0654f79849488452`
- Snapshot basis: latest `master` commit at or before the original Batch-006 verification date, 2026-08-27. Repository history shows this commit was created 2026-04-22 and no later commit existed by 2026-08-27.
- Visibility: public
- Archived/fork: false / false
- License: MIT
- Classification: `pinn_or_physics_informed_implementation`
- Documentation: present
- Dependency/environment surfaces: `Pipfile`, `Pipfile.lock`, `docker/Dockerfile`, `docs/requirements.txt`, `setup.py`

The immutable README identifies NeuroDiffEq as a neural-network differential-equation library and explicitly cites the 2025 paper *Recent Advances of NeuroDiffEq -- An Open-Source Library for Physics-Informed Neural Networks*.

## Restored relationship authority

- Link: `PRL000264`
- Resource: `CR000137`
- Atlas reference: `745`
- Paper: *Recent Advances of NeuroDiffEq -- An Open-Source Library for Physics-Informed Neural Networks*
- DOI/arXiv identifier: `10.48550/arXiv.2502.12177`
- Final relationship: `official`
- Final status: `verified`
- Confidence: high

The pinned repository README cites the exact 2025 paper and the paper describes the same NeuroDiffEq library and its advanced physics-informed neural-network capabilities.

## Corrective authority files

- `data/computational-resources/02-verification/resources/stage-2-post-closure-cr000137-resource.jsonl`
- `data/computational-resources/02-verification/relationships/stage-2-post-closure-cr000137-relationship.jsonl`

These overlays supersede the historical omission only. They do not rewrite or invalidate any existing Batch-006 record.

## Focused QA

- CR000137 Stage-1 identity recovered: PASS
- PRL000264 Stage-1 assertion recovered: PASS
- immutable repository snapshot resolved at the original Stage-2 verification boundary: PASS
- canonical repository identity: PASS
- license and documentation evidence: PASS
- Atlas-745 relationship evidence: PASS
- CR and PRL identifiers remain unique within final authority: PASS
- historical Batch-006 files unchanged: PASS
- no other Stage-2 resource or relationship disposition changed: PASS
- Stage-1 data unchanged: PASS
- Stage-2 methodology and schemas unchanged: PASS
- public Atlas/site and curated data unchanged: PASS
- scientific execution boundary preserved: PASS

## Closure effect

Stage-2 scientific closure remains intact. The correction makes the closure claim internally consistent by restoring authority for the one Stage-1 resource/relationship pair omitted from the historical Batch-006 output. No Stage-2 totals are reinterpreted as new scientific work; CR000137 was already a Stage-1 resource and PRL000264 was already a Stage-1 relationship assertion.
