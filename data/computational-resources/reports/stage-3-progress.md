# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S053 |
| Next scale-out checkpoint | Stage3-S054 |
| Latest checkpoint resource | CR000062 |
| Forward frontier resource | CR000062 |
| Next resource | CR000063 |
| Next planned checkpoint resources | CR000063 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057, CR000058, CR000060, CR000061, CR000062 — 7 / 10 |
| Completed Stage-3 technical resource records | 67 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 296 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 117 |
| Completed configuration count | 262 |
| Technical evidence records | 902 |
| Static reproducibility assessments | 67 |
| Current QA status | PASS |
| Current unresolved technical item count | 408 |
| Next unresolved ID | S3U-0409 |
| Current conflicting-evidence finding count | 87 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S053` completes `CR000062`, preserving the final Stage-2 `ehsanhaghighat/sciann` core-framework identity at commit `e3615412c149dbf3152433c09cdd741be2b04f62` and the official `PRL000151` relationship to Atlas paper 512.

SciANN is represented as a reusable **`pinn_framework_library`** at resource scope with zero experiments and zero configurations. Its framework surface includes `Variable`, `Functional`, `Parameter`, `SciModel`, Data/PDE/Tie constraints, functional differentiation, MLP/RNN/radial-basis surfaces, parameter inversion, Keras and SciPy optimizers, adaptive weighting, logging/checkpoint hooks, prediction, examples, tests, and CI. `CR000061` remains the separate SciANN applications/examples resource; its experiments/configurations are not copied into CR000062.

The exact `LICENSE` and package metadata identify MIT, while the pinned README badge claims Apache-2.0. The conflict is preserved explicitly. Runtime declarations also conflict: README recommends Python 3.9 with TensorFlow/Keras 2.10 and says Python 3.8–3.10; `requirements.txt` pins TensorFlow 2.8.1; CI covers Python 3.7–3.9; and packaging metadata retains older Python statements while omitting TensorFlow/Keras from active install requirements.

Static reproducibility is **R2**. Source, installation routes, framework API, physics constraints, architecture, training/evaluation, examples and tests are statically recoverable. R3 is withheld because the environment generations conflict, most dependencies are not locked transitively, the project declares itself unmaintained, and no single paper/application dataset/configuration/checkpoint/result contract exists at framework scope.

The exact next independently extractable resource is **`CR000063`**.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities after this canonical resolution. With 67 Stage-3 resource records complete, **296** remain.

## Current batch — SOB006

Completed canonical scale-out members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`
- `CR000056`: pilot-complete; no scale-out duplication
- `Stage3-S049`: `CR000057`
- `Stage3-S050`: `CR000058`
- `CR000059`: pilot-complete; no scale-out duplication
- `Stage3-S051`: `CR000060`
- `Stage3-S052`: `CR000061`
- `Stage3-S053`: `CR000062`

Current canonical completion: **7 / 10 independently extractable SOB006 members**.

No aggregate QA is due until ten canonical SOB006 members are complete.

## Control notes

The preserved S050 and S051 pre-QA control deviations remain documented in their checkpoint QA and prior reports; no history is rewritten. `Stage3-S052` and `Stage3-S053` follow the normal policy: all checkpoint artifacts are assembled and QA-validated before one completion commit is published.

## Current cumulative totals

After `Stage3-S053`:

- Stage-3 technical resource records: **67**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **902**
- static reproducibility assessments: **67**
- unresolved findings: **408**
- explicit conflicting-evidence findings: **87**

S053 adds one resource, zero experiments, zero configurations, thirteen technical-evidence records, one reproducibility assessment, eight bounded unresolved findings, and three explicit conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, notebook, script, package, model training, evaluation, inference, test, accelerator workflow, or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S054`** with **`CR000063`**.
