# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S058

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S056`: CR000065 PN-Net non-PINN research code — PASS.
- `Stage3-S057`: CR000066 locally adaptive activation-functions mixed resource, R1 — PASS.
- `Stage3-S058`: CR000067 AdaHessian supporting optimizer software, R2 — **PASS**.

## Stage3-S058 checkpoint

`CR000067` preserves the final Stage-2 repository identity `https://github.com/amirgholami/adahessian`, pinned commit `85ebc00ce873c8497a64ca80bbfa5d996109efea`, MIT license, and `PRL000156` official relationship to Atlas paper 519, *ADAHESSIAN: An Adaptive Second Order Optimizer for Machine Learning*.

### Scope classification

The resource is classified as **supporting software**. It is a second-order optimizer implementation used across general machine-learning workflows; it is not treated as a PINN implementation simply because an Atlas paper cites/uses it.

The pinned repository contains PyTorch image-classification, TensorFlow, and transformer/fairseq implementation families. This breadth triggers the accepted single-resource complexity rule. Bounded extraction materializes the explicit PyTorch image-classification paper-reproduction path and preserves the other implementation families as source-scoped repository facts.

### Ontology

One experiment is materialized:

- **CR000067-E001 — AdaHessian CIFAR-10 ResNet image-classification reproduction workflow.**

One configuration is retained:

- **CR000067-E001-C001 — PyTorch ResNet-20 CIFAR-10 AdaHessian reference configuration.** The repository pins Python 3.7.7, PyTorch 1.5.0, torchvision 0.6.0 and CUDA Toolkit 10.2.89; the reproduction script selects AdaHessian at learning rate 0.15 and ResNet depth 20. The entrypoint defaults to 160 epochs, batch size 256, seed 1 and cross-entropy loss, and writes the best checkpoint to `checkpoint/netbest.pkl`.

The optimizer implementation estimates Hessian diagonal information using a Hutchinson-style random Rademacher vector and requires `loss.backward(create_graph=True)`.

### Reproducibility

Static reproducibility is **R2**. Environment creation and activation are documented, the bounded environment is strongly version-pinned, an entrypoint and reproduction script are present, seed and major hyperparameters are explicit, and evaluation/checkpoint logic is visible.

R3 is withheld because external CIFAR-10 acquisition is required, exact paper-era GPU/run-state provenance is incomplete, and the entrypoint enables `cudnn.benchmark=True` without an explicit deterministic-algorithm setting. The top-level pip recommendation points to an external `torch_optimizer` distribution and is not treated as identity-equivalent to the pinned source tree.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **1**
- technical-evidence records: **10**
- reproducibility assessments: **1**
- unresolved findings: **6**
- new explicit conflicts: **0**

No dependency installation, dataset download, model deserialization, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **2 / 10** canonical members complete:

- `CR000066` — Stage3-S057
- `CR000067` — Stage3-S058

Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S058`:

- technical resource records: **72**
- experiments: **125**
- configurations: **271**
- technical-evidence records: **964**
- static reproducibility assessments: **72**
- unresolved findings: **451**
- explicit conflicting-evidence findings: **89**

## Registry accounting

The Stage-2 registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 72 completed Stage-3 technical resource records, **291** remain.

## Continuation QA

`Stage3-S058` is PASS. `SOB007` is 2/10 and does not require aggregate QA yet. The forward frontier is `CR000067`; the exact next independently extractable resource is **`CR000068`**, to be processed as `Stage3-S059`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
