# Repository Control Register

**Repository:** `ahafuaej-alt/PINN-Review`  
**Register refreshed:** 2026-09-07  
**Purpose:** maintain the authoritative production, scientific-workstream, historical-provenance, release-governance, and branch-cleanup policy for the PINN Review Atlas.

## Current control baseline

- Production authority: `main`
- Audited production head: `df27069ada4ed1d65cde2c7a208bfa0653cb662d` — `Route Dataset Manager updates through controlled integration`
- Authoritative/preserved branches: **5**
- Temporary merged branch pending ordinary cleanup if still present: `ci/protect-dataset-manager-writes`
- `main` protection: **not yet enabled**
- Repository rulesets: **none at the pre-protection checkpoint**
- Obsolete/superseded branch refs removed after reachability and provenance review before the current protection migration: **97**
- Stage 3 was not modified by repository-governance cleanup or Issue #368 migration work.

Branch age or naming is never sufficient evidence for deletion. Cleanup requires Git reachability plus scientific/operational provenance review and explicit approval.

## Authoritative branch register

| Branch | Role | Status | Merge / retention policy | Next action |
| --- | --- | --- | --- | --- |
| `main` | Production authority | ACTIVE / LIVE | Production changes must use controlled integration; no uncontrolled scientific or feature development directly on `main`. | Complete Issue #368 protection and protected-release verification. |
| `data/computational-resources-stage3` | Computational Resources Stage 3 | ACTIVE SCIENTIFIC | Do not merge casually. Integrate only after Stage 3 scientific closure and dedicated integration QA. | Continue checkpointed Stage 3 work only. |
| `data/computational-resources-stage1` | Computational Resources Stage 1 | HISTORICAL / CLOSED | Preserve as scientific provenance even when fully represented in later history. | No active development. |
| `data/computational-resources-stage2` | Computational Resources Stage 2 | HISTORICAL / CLOSED | Preserve as scientific provenance; Stage 2 is scientifically closed. | No active development. |
| `docs/master-atlas-roadmap` | Atlas roadmap and repository-governance documentation | ACTIVE DOCUMENTATION | Maintain architecture, workstream, and repository-control records here until deliberate integration. | Keep this register synchronized with governance state. |

## Branch-cleanup closure

The repository was reduced from approximately 102 branches to the five authoritative/preserved branches above through staged audits. In total **97 obsolete or superseded refs** were removed before the current Issue #368 protection migration.

Every deletion batch was gated by applicable checks: branch purpose and head, comparison with the relevant authority, unique-commit review, merged-PR provenance, open-PR dependencies, scientific-provenance requirements, workflow/documentation dependencies, explicit cleanup approval, and post-deletion verification.

Historical Stage 1 and Stage 2 branches are deliberately retained because scientific provenance value is independent of Git uniqueness.

## Issue #368 — protected production integration

Issue #368 governs migration from unrestricted direct writes to a protected `main` production authority.

### Original three mutating workflows

The original scope contained:

1. `.github/workflows/update-site-reach.yml`
2. `.github/workflows/update-dataset.yml`
3. `.github/workflows/accept-all-publisher-enrichment.yml`

PR #369 migrated those original writers to controlled release-branch / pull-request integration and merged as `b7c562cd994c1a8eafd9719adc672977e8d23ce6`.

The publisher-metadata acceptance campaign subsequently completed. PR #374 removed `.github/workflows/accept-all-publisher-enrichment.yml` from the active production release surface and merged as `32bb2c7e7d4bf865f9cef6e993634aca0c8a6799`. Its scripts, datasets, audit history, and reproducibility evidence remain preserved.

### Additional active writer found by protection-readiness audit

The 2026-09-07 re-audit found that `.github/workflows/dataset-update-request.yml`, the Dataset Manager owner/maintainer application path, still contained `git push origin HEAD:main`. Enabling protection at that point would have broken an actively used production workflow.

PR #377, `Route Dataset Manager updates through controlled integration`, changed only that workflow. The direct push was replaced by:

- a short-lived `ci/dataset-request-*` release branch;
- a pull request for the exact validated candidate SHA;
- exact-candidate merge through the pull-request API;
- verification that the merged SHA is reachable from `origin/main`;
- temporary release-branch cleanup;
- preservation of canonical and derived dataset validation, issue reporting, and batch-deployment behavior.

Both existing PR gates passed (`Validate canonical dataset` and `Atlas navigation integrity`). PR #377 merged as `df27069ada4ed1d65cde2c7a208bfa0653cb662d`.

The continuing production mutation surface that must remain compatible with protected `main` is therefore:

- `.github/workflows/update-site-reach.yml`;
- `.github/workflows/update-dataset.yml` while it remains an intentional manual writer;
- `.github/workflows/dataset-update-request.yml` for Dataset Manager owner/maintainer updates.

No broad Actions bypass is intended.

## Genuine release evidence

### Atlas Reach

A genuine mutating re-run of workflow run `33851670491` retrieved **313 visits across 12 countries**, passed validation, created `ci/atlas-reach-33851670491-2`, opened PR #372, and merged into `main` as `ea7fddeec515328a0021f24d3163f65971977d28`. The temporary release branch was removed.

That run proved the controlled release-branch → pull request → merge path. It also exposed a Pages provenance defect: the artifact was built from the intended SHA but `actions/deploy-pages@v4` registered the reusable-workflow caller SHA as `pages_build_version`.

PR #373 corrected the reusable Pages workflow by asserting checkout provenance and setting the deployment step's `GITHUB_SHA` to the requested `source_sha`; it merged as `2bd57d0e8864114ddb9d9171d513c75ccb93830f`.

A fresh Atlas Reach mutation using the corrected Pages revision remains the cleanest path-specific post-fix proof.

### Canonical dataset and synchronized deployment

Paper 810 was applied as dataset version **2.3.1** at commit `fbf2a224961031771b750d6fd0f9e2fa53ec4f2a`. Its first batch deployment exposed a stale derived Atlas-overview condition. PR #376 repaired deterministic derived-data synchronization and merged as `00aaccc75f2657a60d346da5290425683bbf149c`.

Verified deployment run `34058677903` then proved the corrected reusable Pages exact-SHA mechanism end to end:

- `pages.yml` received `source_sha=00aaccc75f2657a60d346da5290425683bbf149c`;
- checkout `HEAD` equaled that SHA;
- canonical/generated dataset validation and static/browser QA passed;
- `actions/deploy-pages@v4` ran with the same `GITHUB_SHA`;
- `pages_build_version` was the same SHA;
- deployment completed successfully.

This proves the shared exact-SHA Pages mechanism. It does **not** prove that `.github/workflows/update-dataset.yml` has completed a genuine `ci/dataset-release-*` mutation under the migrated design. It also predates PR #377, so a genuine Dataset Manager mutation after protection is still required to prove that newly migrated path.

## Target `main` protection policy

Protection should enforce the following without a broad workflow bypass:

1. require pull-request integration into `main`;
2. block force pushes;
3. block deletion of `main`;
4. prevent uncontrolled direct development pushes;
5. allow workflows to create release pull requests and merge them only through the normal protected merge boundary;
6. require status checks only when their exact contexts are stable and guaranteed for every protected merge path.

At this checkpoint, **no required status-check context is designated**. Existing checks are valuable validation evidence but are not universal across all release paths; making a non-universal context mandatory would risk deadlocking valid automated release PRs.

## Repository control rules

1. **`main` is production authority.** No manual scientific or feature development is performed directly on it.
2. **One clearly named active branch per major workstream.** Use conventional prefixes such as `data/`, `feat/`, `fix/`, `docs/`, `ci/`, `refactor/`, `test/`, or `chore/`.
3. **Active scientific branches are checkpointed and merged only after scientific closure and integration QA.**
4. **No branch deletion based on age, apparent inactivity, or naming.** Cleanup requires Git reachability plus provenance/supersession review.
5. **Branches with unique commits are preserved until their unique work is explicitly classified.**
6. **Historical scientific branches may be retained even when fully integrated.** Their provenance value is independent of Git uniqueness.
7. **Force-updating an established research branch is prohibited unless a specific recovery procedure explicitly requires it.**
8. **Update this register whenever an authoritative workstream changes state, is integrated, archived, or approved for deletion.**
9. **No broad Actions bypass for protected `main`.** Automation should use the same governed integration boundary as other production changes wherever practical.

## Deletion gate

A branch may be proposed for deletion only when all applicable conditions are true:

- `ahead_by == 0` relative to the relevant authoritative branch, or all unique commits are intentionally superseded/archived/recovered elsewhere;
- no active workflow depends on the branch;
- no open pull request depends on the branch;
- no scientific checkpoint/provenance requirement requires retention;
- no documentation or release procedure designates it as authoritative;
- deletion has explicit cleanup approval.

## Remaining Issue #368 gates

Before Issue #368 is closed:

1. enable the target protection/ruleset on `main`;
2. verify force pushes and deletion of `main` are blocked;
3. run a genuine mutation through a continuing production writer after protection and verify its controlled release PR merges normally;
4. verify Pages deploys that exact integrated production SHA where the path includes deployment;
5. obtain a genuine post-PR-#377 Dataset Manager mutation under protected `main`;
6. determine whether `.github/workflows/update-dataset.yml` remains an intentional manual production writer; if retained, obtain a genuine migrated-path mutation rather than manufacturing unsupported scientific data;
7. update this register with the actual protection/ruleset state and protected-release evidence;
8. close Issue #368 only after all applicable gates pass.

Until those gates pass, the repository has a clean authoritative branch model and protection-compatible workflow design, but `main` must not be described as protected.