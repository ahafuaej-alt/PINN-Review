# Repository Control Register

**Repository:** `ahafuaej-alt/PINN-Review`  
**Audit date:** 2026-09-03  
**Purpose:** establish a non-destructive authority map for production, active research workstreams, historical scientific branches, and branch-cleanup review.

## Control baseline

- Production branch: `main`
- Audited `main` head: `975c34c7b850359a86b27d49c9c75db60740a44a`
- Open pull requests at audit time: **0**
- Total branches at audit time: **96**
- `main` branch protection at audit time: **not enabled**
- Repository rulesets at audit time: **none**
- Branch deletion performed by this audit: **none**
- Branch merges performed by this audit: **none**

Branch age or naming is never sufficient evidence for deletion. A branch may be considered for cleanup only after Git reachability and scientific/operational provenance are both checked.

## Authoritative workstreams

| Branch | Role | Status | Audit relationship to `main` | Merge policy | Next action |
| --- | --- | --- | --- | --- | --- |
| `main` | Production authority | ACTIVE / LIVE | authoritative production head | production changes must be controlled | migrate direct-write workflows, then enable protection |
| `data/computational-resources-stage3` | Computational Resources Stage 3 | ACTIVE SCIENTIFIC | 76 commits ahead, 5 behind | **do not merge until Stage 3 scientific closure and integration review** | continue checkpointed Stage 3 work only |
| `docs/master-atlas-roadmap` | Atlas architecture/roadmap documentation | ACTIVE DOCUMENTATION | 3 commits ahead at audit start | documentation review before integration | maintain roadmap and repository-control records here |

## Historical scientific branches — preserve

These branches are fully contained in `main` according to Git ancestry but are retained as scientific provenance/checkpoint references.

| Branch | Unique commits vs `main` | Behind `main` | Policy |
| --- | ---: | ---: | --- |
| `data/computational-resources-stage1` | 0 | 211 | preserve as closed scientific history |
| `data/computational-resources-stage2` | 0 | 6 | preserve as closed scientific history |

A zero unique-commit count does not by itself authorize deletion of a scientific-stage branch.

## History-contained cleanup candidates — explicit approval still required

The following branches have **zero commits ahead of `main`** and are therefore history-contained at this audit point. They are cleanup candidates from a Git-reachability standpoint only. No deletion is authorized by this register.

| Branch | Unique commits vs `main` | Classification |
| --- | ---: | --- |
| `data/stage2-c03-correction-temp` | 0 | temporary branch; cleanup candidate |
| `chore/tmp-ignore` | 0 | temporary branch; cleanup candidate |
| `chore/tmp-ignore2` | 0 | temporary branch; cleanup candidate |
| `chore/tmp-ignore3` | 0 | same contained head as `chore/tmp-ignore2`; cleanup candidate |
| `chore/tmp-ignore4` | 0 | same contained head as `chore/tmp-ignore2`; cleanup candidate |
| `feat/frameworks-rebuild` | 0 | fully contained; cleanup candidate |
| `fix/frameworks-evidence-confidentiality` | 0 | fully contained; cleanup candidate |
| `fix/frameworks-navigation-overflow` | 0 | fully contained; cleanup candidate |

Before deletion, confirm that the branch is not referenced by documentation, workflows, release procedures, or an intentionally retained scientific checkpoint.

## Stale or supersession-unknown branches with unique commits — preserve for review

These conventional branches are **not** safe-delete candidates because they contain commits not reachable from current `main`. Unique commits can represent useful work, obsolete experiments, or functionality later reimplemented differently; Git ancestry alone cannot decide which.

| Branch | Commits ahead of `main` | Required action |
| --- | ---: | --- |
| `feat/atlas-concept-knowledge-system` | 3 | supersession/content review |
| `feat/canonical-concept-mapping` | 24 | supersession/content review |
| `feat/co-design-arrange-mode` | 14 | supersession/content review |
| `feat/co-design-framework-v2` | 41 | supersession/content review |
| `feat/design-performance-workbench` | 55 | supersession/content review |
| `feat/design-stack-scientific-flow` | 12 | supersession/content review |
| `feat/failure-diagnostics-workbench` | 9 | supersession/content review |
| `feat/frameworks` | 6 | supersession/content review |
| `feat/frameworks-shared-interactions` | 13 | supersession/content review |
| `feat/realm-svg-export` | 4 | supersession/content review |
| `fix/atlas-reach-goatcounter-refresh` | 2 | supersession/content review |
| `fix/canonical-context-precision` | 5 | supersession/content review |
| `fix/co-design-pages-qa` | 1 | supersession/content review |
| `fix/concept-runtime-regressions` | 8 | supersession/content review |
| `fix/design-performance-marker-semantics` | 2 | supersession/content review |
| `fix/failure-diagnostics-pages-qa` | 4 | supersession/content review |
| `fix/firefox-deployment-freshness-20260820` | 5 | supersession/content review |
| `fix/framework-rendering-export` | 17 | supersession/content review |
| `fix/nested-404-assets-20260820` | 3 | supersession/content review |
| `fix/performance-navigation-technical-details` | 8 | supersession/content review |
| `fix/realm-annual-charts-newest-first` | 2 | supersession/content review |
| `fix/reference-prose-concept-links` | 9 | supersession/content review |
| `fix/static-ambient-performance-20260820` | 5 | supersession/content review |
| `refactor/unify-publication-year-source` | 1 | supersession/content review |

**Rule:** do not merge these branches wholesale into current `main`. Review their unique diffs against current production semantics and recover only still-valid work through a current conventional branch when needed.

## Legacy session branches — unknown until audited

There are **59 legacy session branches using a historical non-conventional prefix**. They predate the current repository naming policy.

Current status: **UNKNOWN — DO NOT TOUCH**.

Required audit for each branch:

1. identify purpose and last commit;
2. compare against current `main`;
3. determine unique-commit count;
4. check whether unique work was later superseded or independently integrated;
5. determine scientific or operational provenance value;
6. classify as preserve, recover/review, or cleanup candidate.

No legacy branch should be deleted merely because it is old or because an equivalent feature appears to exist on `main`.

## `main` protection dependency

`main` should be protected, but enabling a blocking rule immediately would interfere with legitimate workflows that currently commit directly to `main`.

Confirmed direct-`main` writer workflows:

- `.github/workflows/update-site-reach.yml` — validates and commits refreshed `data/site-reach.json`, then pushes to `main` and deploys that exact SHA.
- `.github/workflows/update-dataset.yml` — applies and validates a canonical dataset update, commits synchronized dataset files, pushes to `main`, then deploys.
- `.github/workflows/accept-all-publisher-enrichment.yml` — validates accepted publisher-metadata proposals and, when changes exist, commits and pushes them to `main` before deployment.

Therefore branch protection must be introduced **together with a compatible write-path design**, not as an isolated switch.

### Preferred migration

1. Each workflow that mutates repository content creates or updates a controlled conventional branch instead of pushing directly to `main`.
2. The workflow validates the exact candidate commit.
3. Integration occurs through a pull request or another explicitly governed mechanism.
4. Deployment uses the integrated production SHA.
5. After the migration is verified, protect `main` against uncontrolled direct pushes, force pushes, and deletion.
6. Add required status checks only after the stable check contexts and their trigger behavior have been verified; do not hard-code unreliable or PR-inapplicable checks.

A broad Actions bypass can preserve current automation but would weaken the goal of making `main` a strictly controlled production authority. PR-based workflow writes are preferred where practical.

## Repository control rules

1. **`main` is production authority.** No manual scientific or feature development is performed directly on it.
2. **One clearly named active branch per major workstream.** Use conventional prefixes such as `data/`, `feat/`, `fix/`, `docs/`, `ci/`, `refactor/`, `test/`, or `chore/`.
3. **Active scientific branches are checkpointed and merged only after scientific closure and integration QA.**
4. **No branch deletion based on age, apparent inactivity, or naming.** Cleanup requires Git reachability plus provenance/supersession review.
5. **Branches with unique commits are preserved until their unique work is explicitly classified.**
6. **Historical scientific branches may be retained even when fully merged.** Their provenance value is independent of Git uniqueness.
7. **Force-updating an established research branch is prohibited unless a specific recovery procedure explicitly requires it.**
8. **Update this register whenever an authoritative workstream changes state, is integrated, archived, or approved for deletion.**

## Deletion gate

A branch may be proposed for deletion only when all applicable conditions are true:

- `ahead_by == 0` relative to the relevant authoritative branch, or all unique commits are intentionally archived/recovered elsewhere;
- no active workflow depends on the branch;
- no open pull request depends on the branch;
- no scientific checkpoint/provenance requirement requires retention;
- no documentation or release procedure designates it as authoritative;
- deletion has explicit cleanup approval.

## Next controlled actions

1. Migrate the three confirmed direct-`main` writer workflows to a protection-compatible integration path.
2. Enable `main` protection after the migrated workflows are validated end-to-end.
3. Audit the 59 legacy session branches for unique commits and supersession.
4. Re-check the eight history-contained candidates immediately before any cleanup action.
5. Present any proposed deletion batch for explicit approval before deleting branch refs.

Until those actions are complete, the safe repository policy is: **organize and classify; do not delete or merge by assumption.**
