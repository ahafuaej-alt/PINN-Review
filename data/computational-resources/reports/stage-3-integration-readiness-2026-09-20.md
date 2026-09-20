# Computational Resources Stage 3 — Integration Readiness Audit

Audit date: 2026-09-20  
Integration branch: `data/computational-resources-integration`  
Status: **PASS for integration candidate; no pull request to `main` created**

## 1. Source authorities

- Current `main`: `719e30a9c93dc157cd0fae35b124978adf14ea47`
- Closed Stage 3: `14870ae8f6a7e344d8a5f848647a32b70571402e`
- Shared merge base: `0b52ed7c7cb83236680d5f0b90558d9f9d6406d5`
- Pre-integration divergence: Stage 3 **362 commits ahead / 247 commits behind** `main`
- Integration merge commit: `a95f77f3be22755796598d798e15ccdf31778518`

The closed Stage-3 branch was not moved, rebased, squashed, reset, or rewritten.

## 2. Integration construction

The integration branch was created from the exact current `main` head. The integration merge commit has exactly two parents: current `main` and the immutable Stage-3 closure commit.

Tree-level reconciliation preserves current `main` everywhere except `data/computational-resources/**`, where the exact closed Stage-3 subtree is authoritative.

- Stage-3 computational-resources subtree: `c20802d3be514c37dd48a560a60348039c5699b8`
- Integration merge tree: `a73acd54de6f219dbcb447fee25d67071cd827b4`

## 3. Production-surface preservation

Post-merge tree readback confirms current-`main` versions are preserved for production surfaces including:

- `.github/**`
- `README.md`
- `docs/**`
- root `reports/**`
- `scripts/**`
- `data/atlas-overview.json`
- `data/changes.json`
- `data/papers-master.json`
- `data/pinn-realm.json`
- `data/references.json`
- `data/references-metadata.json`
- `data/site-reach.json`

GitHub comparison from `main` to the integration candidate reports only `data/computational-resources/**` paths. The compare view is capped at 300 files, so scope acceptance is based on the stronger Git-tree reconciliation described above.

## 4. Stage-3 scientific preservation

Terminal Stage-3 records were read back from the integration branch unchanged:

- Corrected independently extractable corpus: **361**
- Completed: **361/361**
- Resources: **361**
- Experiments: **374**
- Configurations: **673**
- Technical-evidence records: **3552**
- Reproducibility assessments: **361**
- Preserved unresolved findings: **1669**
- Preserved explicit conflicts: **158**
- Terminal checkpoint: `Stage3-S312` — **PASS**
- Terminal aggregate batch: `SOB036` — **PASS (1/1)**
- `SOB035` dedicated aggregate QA: **present / PASS**
- `SOB036` dedicated aggregate QA: **present / PASS**

No scientific workload was executed and no accepted Stage-3 extraction result was reopened or reinterpreted.

## 5. Integration gates

- Source-head stability: **PASS**
- Closed Stage-3 branch unchanged: **PASS**
- Current `main` unchanged during integration: **PASS**
- Two-parent merge history: **PASS**
- `main` ancestry preserved: **PASS**
- Stage-3 ancestry preserved: **PASS**
- Exact Stage-3 computational-resources subtree preservation: **PASS**
- Current production-main surfaces preserved: **PASS**
- Current non-computational `data/**` preserved: **PASS**
- Integration diff scope: **PASS**
- Terminal Stage-3 QA/count readback: **PASS**
- Static-only execution boundary: **PASS**
- Repository provenance-text screen: **PASS**

## 6. Release condition

The integration candidate is ready for a separate pull-request review against `main`, but no pull request is created by this audit.

Because `main` can continue to advance, its head must be re-read immediately before opening or merging a pull request. If `main` is no longer `719e30a9c93dc157cd0fae35b124978adf14ea47`, the integration branch must first be reconciled with the newer `main` and this QA repeated.
