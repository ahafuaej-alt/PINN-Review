# Computational Resources Stage 3 — Controlled Scale-Out Plan

Plan date: 2026-08-31  
Plan ID: `Stage3-SO-D01`  
Methodology: accepted `Stage3-D01`  
Status: **READY FOR CONTROLLED EXTRACTION**

## 1. Scope

The ten-resource Stage-3 pilot is scientifically accepted. This plan governs extraction of the remaining **354** resources in the verified `CR000001–CR000364` registry.

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain out of scope. Stage 3 remains static-only: no scientific software, model, notebook, dataset payload, solver, training process, inference workflow, environment, or container is executed. R5 remains prohibited.

## 2. Resource ordering

### Primary ordering rule

Process remaining resources in **ascending numeric `CR######` order**, excluding resources already completed in the ten-resource pilot.

Pilot-complete exclusions:

- `CR000003`
- `CR000010`
- `CR000056`
- `CR000059`
- `CR000087`
- `CR000091`
- `CR000163`
- `CR000217`
- `CR000227`
- `CR000268`

This deterministic order is preferred over profile-based grouping because it is auditable, avoids cherry-picking easy resources, naturally mixes resource types, and prevents difficult or unavailable artifacts from being systematically postponed.

### Authoritative Stage-2 record rule

The resource order is based on stable CR identity, but technical extraction must use the **final authoritative Stage-2 state**, not simply the first historical resource record found.

When multiple Stage-2 records exist for the same CR:

1. explicit closure/reconciliation overlays and records that state they supersede earlier fields take precedence for those fields;
2. retained Stage-2 pinned repository SHAs remain authoritative for repository snapshots unless a final closure record explicitly supersedes them;
3. historical batch records remain provenance, not competing current truth;
4. Stage 3 must not rewrite Stage 2 to resolve a new technical observation.

`CR000001` is the canonical example: its original obsolete documentation host was superseded during Stage2-RC01 by the current official PINA documentation.

## 3. Batch and checkpoint size

### Scale-out batch

- Nominal batch size: **10 resources**.
- A batch is a reporting/QA unit, not one large commit.
- The final batch may contain fewer than 10 resources.
- Each completed batch receives an aggregate QA summary before the next batch begins.

### Checkpoint

- Normal checkpoint target: **2 resources**.
- Hard maximum: **2 resources**.
- Minimum: **1 resource**.
- One checkpoint = one Git commit after QA passes.

A resource must receive its own single-resource checkpoint when bounded inspection reveals material complexity, including any of the following:

- large framework/library scope;
- DOI/archive or substantial static-data product;
- unusually high experiment/configuration multiplicity;
- consequential paper/code conflict;
- suspected Stage-2 identity/relationship contradiction;
- unusually large evidence set;
- any case where pairing would make the checkpoint difficult to audit or safely resume.

Do not force a complex resource into a two-resource checkpoint merely to satisfy the nominal batch size.

## 4. Checkpoint and batch naming

- Global scale-out checkpoints: `Stage3-S001`, `Stage3-S002`, ...
- Scale-out batches: `SOB001`, `SOB002`, ...
- Normal checkpoint commit message: `data: record Stage 3 scale-out checkpoint S###`
- Batch-summary commit, if separate: `data: summarize Stage 3 scale-out batch SOB###`

Suggested file families:

- `03-technical/resources/scaleout-checkpoint-###-resources.jsonl`
- `03-technical/experiments/scaleout-checkpoint-###-experiments.jsonl`
- `03-technical/configurations/scaleout-checkpoint-###-...-configurations.jsonl`
- `03-technical/reproducibility/scaleout-checkpoint-###-reproducibility.jsonl`
- `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`
- `04-evidence/technical-evidence/scaleout-checkpoint-###-...-evidence.jsonl`
- `04-evidence/extraction-log/scaleout-checkpoint-###-extraction-log.jsonl`

## 5. First scale-out batch

`SOB001` contains the first ten remaining resources in ascending CR order:

1. `CR000001`
2. `CR000002`
3. `CR000004`
4. `CR000005`
5. `CR000006`
6. `CR000007`
7. `CR000008`
8. `CR000009`
9. `CR000011`
10. `CR000012`

Planned normal checkpoints:

| Checkpoint | Planned resources |
|---|---|
| `Stage3-S001` | `CR000001`, `CR000002` |
| `Stage3-S002` | `CR000004`, `CR000005` |
| `Stage3-S003` | `CR000006`, `CR000007` |
| `Stage3-S004` | `CR000008`, `CR000009` |
| `Stage3-S005` | `CR000011`, `CR000012` |

This pairing is provisional only in the sense that any complex resource may be split into a single-resource checkpoint under the adaptive rule above. The **resource order itself does not change**.

## 6. Continuation rules

Every new Stage-3 work session must:

1. read `reports/stage-3-progress.md`, this plan, the unresolved register, and the latest checkpoint QA first;
2. verify the current branch head before inspecting or writing a new checkpoint;
3. resume from the exact `Next resource` recorded in progress;
4. skip all resources already completed in pilot or scale-out checkpoints;
5. resolve the resource through the final authoritative Stage-2 record/overlay before inspecting external technical sources;
6. use the exact Stage-2 pinned repository snapshot when one exists;
7. use primary papers only when needed to establish paper-specific formulation, experiments, evaluation, or resource role;
8. preserve repository/provider/paper/archive claims as source-scoped facts rather than silently merging them;
9. never rerun or reinterpret a completed resource simply because a later resource is similar;
10. update progress, unresolved findings, cumulative counts, and exact next resource before committing;
11. commit only after all checkpoint QA gates pass;
12. verify the post-commit branch head and changed-path scope before starting the next checkpoint.

If a session stops unexpectedly, the latest committed checkpoint is authoritative. Uncommitted partial work must not be treated as completed.

## 7. QA gates for every checkpoint

A checkpoint may be committed only when all applicable gates pass:

### Structural

- Stage-3 resource records validate against `stage3-resource-technical.schema.json`.
- Experiment records validate against `stage3-experiment.schema.json`.
- Configuration records validate against `stage3-configuration.schema.json`.
- Technical-evidence records validate against `stage3-technical-evidence.schema.json`.
- Reproducibility records validate against `stage3-reproducibility.schema.json`.
- All new IDs are unique cumulatively.
- Every fact-level evidence reference resolves.
- Resource → experiment → configuration cross-references resolve.
- Inference uses `evidence_type=inferred` with `source_relation=inferred_from_evidence`.

### Scientific

- Stage-2 identity/provenance is preserved.
- Paper, repository, provider, archive, and inferred claims remain source-scoped.
- PINN, operator-learning, framework/library, supporting software, non-PINN code, simulator/solver, and dataset roles are not collapsed into one category.
- Bundled files are not automatically promoted to reusable datasets.
- Missing values preserve the distinctions among `unknown`, `not_available`, `not_applicable`, and `false`.
- Consequential source conflicts remain explicit.
- The three accepted pilot interpretations remain enforced.

### Reproducibility

- Only R0–R4 may be assigned.
- R4 requires all critical static gates to be satisfied.
- A missing imported runtime dependency blocks R4.
- Archived successful results do not override an incomplete environment specification.
- No execution evidence is claimed.

### Repository safety

- No Stage-1 or Stage-2 path changes.
- No public Atlas/site changes.
- No `05-curated/` changes.
- Public repository text contains no inappropriate development-tool attribution.
- Branch head has not changed unexpectedly before publication.
- Post-commit compare shows the expected fast-forward and only intended Stage-3 paths.

Any failed gate prevents publication of that checkpoint until corrected or scientifically bounded.

## 8. Batch-level QA

After each ten-resource scale-out batch:

- verify that every planned CR is either completed or explicitly blocked by a documented hard-stop condition;
- reconcile cumulative resource/experiment/configuration/evidence/reproducibility counts;
- summarize new unresolved findings by severity and scope;
- summarize new conflicting-evidence findings;
- verify no duplicate IDs or orphan references across the whole Stage-3 corpus;
- sample-check source-scope discipline across different resource profiles;
- confirm no methodology/schema drift has occurred;
- record the exact first CR of the next batch.

A batch summary does not require reopening completed resources unless QA identifies a concrete defect.

## 9. Unresolved-register policy

The unresolved register is a **scientific audit trail**, not a prerequisite backlog that must be cleared before extraction can continue.

### ID continuity

- Existing IDs `S3U-0001` through `S3U-0023` are preserved.
- The next new unresolved item is `S3U-0024`.
- IDs are never reused or renumbered.

### Scope

Every finding is attached to the smallest correct scope:

- resource;
- experiment;
- configuration;
- evidence/source relationship.

A configuration-specific defect does not automatically contaminate the whole resource.

### Severity

- **low** — useful reproducibility/detail gap with limited effect on interpretation;
- **medium** — materially limits environment, workflow, licensing, or evidence precision;
- **high** — blocks a claimed workflow/reproducibility level or reveals a consequential source/code defect.

Severity does not by itself stop scale-out.

### Normal non-blocking findings

The following normally remain open while extraction proceeds:

- missing license;
- unpinned or omitted dependency;
- missing seed;
- missing checkpoint;
- incomplete installation instructions;
- unavailable expected result;
- bounded archive/data inspection;
- configuration-specific source conflict.

The affected fact or reproducibility level must be downgraded appropriately.

### Hard-stop findings

Pause scale-out before advancing past the affected CR only when:

1. the accepted schemas cannot represent the resource without scientific distortion;
2. Stage-2 resource identity or relationship appears materially contradicted and the contradiction prevents a defensible bounded Stage-3 record;
3. cumulative identifier/reference integrity cannot be restored;
4. a required QA gate cannot be satisfied without violating the static-only boundary.

Do not silently change Stage 2. Record the Stage-3 finding and require a focused scientific decision.

### Resolution

Resolved items remain in the audit history with resolution evidence; they are not deleted. A later source may close an item only when the evidence directly addresses the original finding.

## 10. Bounded-extraction rule

Scale-out is not an instruction to exhaustively enumerate every example, notebook, result file, or test in a large project.

For each resource, extract enough static evidence to represent its scientifically meaningful capabilities, experiments/configurations, environment, inputs/outputs, evaluation, and reproducibility without artificial record proliferation. Framework examples remain capability evidence unless a distinct research experiment is genuinely supported.

This accepted boundedness rule is essential for completing all 354 remaining resources consistently.

## 11. Start condition

The plan is complete. The exact next resource is **`CR000001`**.

The first planned extraction checkpoint is **`Stage3-S001`**, normally covering **`CR000001` and `CR000002`**. No extraction is performed by this planning record itself.
