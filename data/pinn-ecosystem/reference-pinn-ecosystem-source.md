# General view of everything related to a PINN

## 1. Problem / Physical-System Definition

This is the level **before the neural network itself**. It determines nearly every downstream choice.

### Governing physics

-  Partial differential equations — PDEs 
-  Ordinary differential equations — ODEs 
-  Differential-algebraic equations — DAEs 
-  Integral equations 
-  Integro-differential equations 
-  Constitutive equations 
-  Conservation laws 
-  Algebraic physical relations 
-  Energy principles 
-  Variational principles 
-  Inequality constraints 
-  Complementarity conditions 
-  KKT-type conditions 
-  Stochastic differential equations 
-  Coupled multiphysics equations 
-  Fractional differential equations 
-  Nonlocal operators 

The manuscript explicitly argues that the trainable physical relation does not have to be a PDE; it can also be an ODE, DAE, integral equation, constitutive law, energy principle, etc. 

### Problem characteristics

-  Steady / transient 
-  Linear / nonlinear 
-  Smooth / discontinuous 
-  Stiff 
-  Multiscale 
-  High-frequency / oscillatory 
-  High-dimensional 
-  Nonlocal 
-  Fractional 
-  Chaotic 
-  Long-time 
-  Heterogeneous 
-  Multiphase 
-  Multimaterial 
-  Interface-dominated 
-  Shock-dominated 
-  Boundary-layer dominated 
-  Irregular geometry 
-  Open/unbounded domain 
-  Stochastic system 
-  Sparse-observation problem 

These should appear in the final diagram because they are **drivers** of PINN design rather than components selected independently.

---

# 2. Computational Role / PINN Task

This is another major branch that should probably appear near the center of the final figure.

### Core tasks

-  Forward solution 
-  Inverse problem 
-  Parameter identification 
-  State estimation 
-  Hidden-variable inference 
-  Source identification 
-  Boundary-condition inference 
-  Constitutive parameter inference 
-  Data assimilation 
-  Governing-equation discovery 
-  System identification 

### Reuse-oriented tasks

-  Surrogate modeling 
-  Repeated-query simulation 
-  Parametric modeling 
-  Solution-family learning 
-  Operator learning 
-  Reduced-order modeling 

### Decision-oriented tasks

-  Optimization 
-  Control 
-  Model predictive control 
-  Reinforcement learning 
-  Digital twins 
-  Online model updating 
-  Design optimization 

### Probabilistic tasks

-  Uncertainty quantification 
-  Bayesian inference 
-  Probabilistic forecasting 

The manuscript repeatedly distinguishes these computational roles and specifically concludes that the formulation should be selected according to whether the purpose is forward approximation, inverse inference, repeated evaluation, or data assimilation. 

---

# 3. Input Representation

This is a true **PINN element**.

### Basic inputs

-  Spatial coordinate x 
-  Spatial coordinates x,y 
-  Spatial coordinates x,y,z 
-  Time t 

### Extended inputs

-  Physical parameters 
-  Material properties 
-  Geometry parameters 
-  Geometry descriptors 
-  Frequency 
-  Reynolds number 
-  Boundary data 
-  Initial-state descriptors 
-  Source locations 
-  Forcing functions 
-  Operating conditions 
-  Control variables 
-  Sensor measurements 
-  Stochastic variables 
-  Permeability descriptors 
-  Equation parameters 

### Operator-learning inputs

-  Functions 
-  Sensor samples of functions 
-  Initial-condition functions 
-  Boundary-condition functions 
-  Coefficient fields 
-  Forcing fields 
-  Geometry fields 

So an important graphical branch is:

**PINN Inputs → coordinates | parameters | geometry | physical conditions | observations | functions**

---

# 4. Output / State Representation

Another fundamental PINN element.

### Primary outputs

-  Scalar fields 
-  Vector fields 
-  State variables 

Examples in the manuscript include:

-  temperature 
-  pressure 
-  velocity 
-  displacement 
-  stress 
-  saturation 
-  concentration 
-  electrical/magnetic fields 
-  potential 
-  hydraulic head 
-  activation time 

### Auxiliary outputs

-  Flux 
-  Stress 
-  Derivatives 
-  Phase variables 
-  Recovery variables 
-  Lagrange multipliers 
-  Constitutive quantities 
-  Unknown coefficients 
-  Hidden physical parameters 
-  Latent states 

### Output formulations

-  Primitive-variable formulation 
-  Mixed-variable formulation 
-  Streamfunction formulation 
-  Stress-displacement formulation 
-  State-parameter joint formulation 
-  Complex-valued representation 
-  Real/imaginary separated representation 
-  Bounded-output transformation 
-  Positive-output transformation 

This distinction is important because the manuscript stresses that **output selection changes the derivative order, loss formulation, physical coupling, and trainability**. 

---

# 5. Neural Architecture / Approximation Model

This is what people usually think of first when they say “PINN architecture,” but it is only one branch.

### Classical architecture

-  Fully connected neural network 
-  Multilayer perceptron — MLP 
-  Feedforward neural network 

### Deep-learning architectures

-  CNN 
-  U-Net 
-  Encoder-decoder 
-  RNN 
-  LSTM 
-  GRU 
-  Transformer 
-  Attention network 
-  Graph neural network — GNN 
-  Graph convolutional network 
-  Graph attention network 
-  PointNet 
-  Point-cloud network 

### Structured PINN architectures

-  Residual networks 
-  Low-rank networks 
-  Multi-network PINNs 
-  Branching networks 
-  Shared-network architectures 
-  Gated networks 
-  Hypernetworks 
-  Parameterized PINNs 

### Alternative representations

-  Radial basis function networks 
-  Kolmogorov-Arnold networks — KANs 
-  SIREN 
-  Fourier-feature networks 
-  Gabor-based networks 
-  Discrete cosine networks 
-  Kernel-based representations 
-  Physics-derived basis functions 

### Reduced representations

-  POD-based models 
-  Reduced-basis models 
-  Tensor decomposition 
-  Separation-of-variables architectures 
-  Low-rank representations 
-  Latent-space models 

The manuscript explicitly recommends comparing architectures by **topology, activation, basis selection, latent variables, and physical outputs**, not merely network depth and width. 

---

# 6. Network Hyperparameters

This should be a subordinate branch under architecture.

-  Number of hidden layers 
-  Number of neurons 
-  Network width 
-  Network depth 
-  Number of subnetworks 
-  Number of branches 
-  Latent dimension 
-  Parameter count 
-  Connectivity 
-  Shared vs separate parameters 
-  Network topology 

And increasingly:

-  Neural architecture search 
-  Automated architecture design 
-  AutoPINN-type configuration 
-  Differentiable architecture search 

The manuscript notes that automated search has already been used for **depth, width, activation, and loss design**. 

---

# 7. Activation Function

Definitely one of the major PINN elements.

### Conventional

-  tanh 
-  sigmoid 
-  ReLU 
-  Leaky ReLU 
-  PReLU 
-  Softplus 
-  ELU/SELU 

### Modern smooth activations

-  SiLU 
-  Swish 
-  GELU 

### Oscillatory / spectral

-  sine 
-  sinusoidal activation 
-  SIREN 
-  Fourier-based activation/features 

### Adaptive

-  adaptive tanh 
-  adaptive Swish 
-  adaptive slope activation 
-  neuron-wise adaptive activation 
-  layer-wise adaptive activation 
-  adaptive piecewise-linear activation 

### Alternative / composite

-  RBF 
-  Gabor 
-  Padé-based 
-  Taylor-based 
-  Fourier mixtures 
-  kernelized mixtures 
-  hybrid activation combinations 

The manuscript specifically connects activation selection to **derivative smoothness, frequency representation, gradient propagation, and objective conditioning**. 

---

# 8. Physics-Enforcement Mechanism

This deserves a **major branch of its own**.

## Soft enforcement

-  Penalty-based enforcement 
-  PDE residual 
-  ODE residual 
-  Data mismatch 
-  Boundary-condition loss 
-  Initial-condition loss 
-  Interface loss 
-  Constitutive loss 
-  Conservation loss 

## Hard enforcement

-  Hard boundary constraints 
-  Hard initial constraints 
-  Output transformation 
-  Trial/test-solution construction 
-  Distance-function construction 
-  Automatic boundary fitting 
-  Boundary-satisfying ansatz 
-  Constraint-aware architecture 

## Alternative physics formulations

-  Strong form 
-  Weak form 
-  Variational formulation 
-  Energy formulation 
-  Galerkin formulation 
-  Integral formulation 
-  Boundary-integral formulation 
-  Finite-volume-informed formulation 
-  Discretization-aware formulation 
-  Solver-in-the-loop formulation 

This is a central distinction in the manuscript: physics can enter through the **loss, architecture, basis, numerical operator, prior, simulator, or other structural mechanism**, and those alternatives are not equivalent. 

---

# 9. Physical Constraints

Separate this from the mechanism used to enforce them.

### Standard

-  Governing equation 
-  Initial conditions 
-  Boundary conditions 
-  Interface conditions 

### Boundary-condition types

-  Dirichlet 
-  Neumann 
-  Robin 
-  Periodic 
-  No-slip 
-  Traction 
-  Flux 
-  Radiation 
-  Absorbing 
-  Perfectly conducting 

### Additional physical constraints

-  Conservation 
-  Flux continuity 
-  Traction continuity 
-  Mass balance 
-  Energy balance 
-  Incompressibility 
-  Constitutive consistency 
-  Symmetry 
-  Reciprocity 
-  Positive definiteness 
-  Positivity 
-  Boundedness 
-  Monotonicity 
-  Smoothness 
-  Entropy condition 
-  Admissibility condition 
-  Stability constraints 
-  Inequality constraints 
-  Operational constraints 
-  KKT consistency 

This category is especially useful for the future figure because it answers:

**“What physics is being imposed?”**

while the previous category answers:

**“How is it imposed?”**

---

# 10. Loss Function / Objective Construction

Another central branch.

### Base components

-  PDE loss 
-  ODE loss 
-  Data loss 
-  IC loss 
-  BC loss 
-  Interface loss 
-  Auxiliary loss 
-  Constitutive loss 
-  Conservation loss 

### Extended losses

-  Gradient-enhanced residual 
-  Entropy loss 
-  Energy loss 
-  Variational loss 
-  Weak-form loss 
-  Integral residual 
-  Flux residual 
-  Discrete conservation loss 
-  Inequality loss 
-  Regularization loss 
-  Probabilistic likelihood 
-  Adversarial objective 

### Objective structure

-  Single objective 
-  Composite loss 
-  Multi-objective loss 
-  Constrained optimization objective 

The manuscript repeatedly characterizes PINN training as an inherently **multi-objective optimization problem**. 

---

# 11. Loss Weighting / Balancing

This should not be merged with the loss itself.

-  Fixed weights 
-  Manual weighting 
-  Adaptive weighting 
-  Dynamic weighting 
-  Self-adaptive weights 
-  Pointwise adaptive weights 
-  Gradient-norm balancing 
-  Gradient-based weighting 
-  Loss-ratio weighting 
-  NTK-based weighting 
-  Uncertainty-based weighting 
-  Credibility-based weighting 
-  Adversarial weighting 
-  Minimax weighting 
-  Multi-objective weighting 
-  Pareto-based treatment 
-  Augmented Lagrangian 
-  Lagrange multipliers 
-  Continuation of physics weights 
-  Learnable penalty coefficients 

This is one of the manuscript's major training themes. 

---

# 12. Differentiation / Differential-Operator Evaluation

Another major PINN element.

### Automatic differentiation

-  AD 
-  Forward-mode AD 
-  Reverse-mode AD 
-  Higher-order AD 

### Numerical differentiation

-  Finite difference 
-  Finite volume 
-  Discrete operators 
-  Grid-based derivatives 

### Hybrid approaches

-  AD + numerical differentiation 
-  Mixed automatic-numerical differentiation 
-  Spectral differentiation 
-  Physics-derived derivatives 

### Efficiency-oriented differentiation

-  Closed-form gradients 
-  Domain-decoupled gradients 
-  First-order reformulation 
-  Mixed-variable formulation 
-  Auxiliary derivative outputs 
-  Hessian-vector products 
-  Taylor-mode differentiation 
-  Stochastic trace estimation 
-  Learned differential operators 

### Time-discrete treatment

-  Runge-Kutta 
-  Implicit Runge-Kutta 
-  Time-stepping residuals 

The manuscript explicitly identifies **differentiation pathway** as one of the variables defining PINN behavior. 

---

# 13. Collocation / Sampling

Your example of **sampler** should become this entire branch.

### Point type

-  Interior collocation points 
-  Boundary points 
-  Initial-condition points 
-  Interface points 
-  Observation/data points 
-  Measurement points 
-  Quadrature points 

### Basic sampling

-  Uniform grid 
-  Random sampling 
-  Uniform random sampling 
-  Latin hypercube sampling 
-  Sobol sampling 
-  Low-discrepancy sampling 
-  Mesh-node sampling 
-  Full-grid sampling 
-  Quadrature sampling 

### Structured sampling

-  Sparse-grid sampling 
-  Mesh-assisted sampling 
-  Geometry-aware sampling 
-  Interface-aware sampling 

### Adaptive sampling

-  Residual-based sampling 
-  Residual-driven resampling 
-  Importance sampling 
-  Gradient-based sampling 
-  Distribution-aware sampling 
-  Error-focused sampling 
-  High-residual-region refinement 
-  Shock-focused sampling 
-  Boundary-layer sampling 
-  Near-interface refinement 
-  Near-wall refinement 
-  Dynamic resampling 
-  Adaptive-grid sampling 
-  Causal sampling 

The manuscript's future-directions section explicitly says collocation design should be treated as **part of the solver**, not merely preprocessing. 

---

# 14. Optimizer

A major branch.

### First-order

-  Gradient descent 
-  Full-batch gradient descent 
-  Mini-batch gradient descent 
-  Adam 
-  Adam variants 

### Quasi-Newton

-  L-BFGS 
-  L-BFGS-B 
-  BFGS 
-  Self-scaled BFGS 
-  Broyden-type methods 

### Second-order / curvature-oriented

-  Newton 
-  Newton-CG 
-  Levenberg-Marquardt 
-  Conjugate-gradient methods 
-  Curvature-aware methods 

### Other deterministic

-  Proximal-gradient methods 
-  Complex gradient descent 
-  Scaled conjugate-gradient methods 

### Global / population methods

-  Particle swarm optimization 
-  Differential evolution 
-  Evolutionary methods 

### Probabilistic inference optimizers

-  Hamiltonian Monte Carlo 
-  Variational inference 
-  Ensemble Kalman inversion 

### Hybrid optimization

A very important category:

-  Adam → L-BFGS 
-  First-order → second-order 
-  Staged optimizer switching 
-  Adaptive optimizer transitions 

The manuscript explicitly reports comparisons among **Adam, L-BFGS, self-scaled BFGS, and Broyden-type methods** and concludes that no universal optimizer sequence exists. 

---

# 15. Learning-Rate Strategy

This should be distinct from the optimizer.

-  Fixed learning rate 
-  Exponential decay 
-  Step decay 
-  Plateau reduction 
-  Cosine annealing 
-  One-cycle policy 
-  Staged reduction 
-  Adaptive learning rate 
-  Layer-wise learning rate 
-  Curvature-aware learning rate 

---

# 16. Initialization

Another genuine PINN training element.

-  Random initialization 
-  Xavier 
-  Glorot 
-  He 
-  Kaiming 
-  Orthogonal initialization 
-  Negative-mean initialization 
-  Pseudo-inverse initialization 
-  Pretrained initialization 
-  Transfer initialization 
-  Meta-initialization 
-  Physics-informed initialization 
-  Operator-pretrained initialization 

---

# 17. Scaling / Normalization / Preprocessing

Often neglected, but your manuscript correctly treats it as part of the formulation.

-  Nondimensionalization 
-  Input normalization 
-  Output normalization 
-  Standardization 
-  Feature scaling 
-  Coordinate scaling 
-  Output rescaling 
-  Physical-unit restoration 
-  Residual scaling 
-  Loss normalization 

### Data preprocessing

-  Data augmentation 
-  Noise injection 
-  Sliding windows 
-  Train/validation/test splitting 
-  Synthetic pretraining 

---

# 18. Regularization / Training Stabilization

-  Weight decay 
-  Dropout 
-  Gradient clipping 
-  Batch normalization 
-  Layer normalization 
-  Moving-average weights 
-  Early stopping 
-  Slope recovery 
-  Lipschitz regularization 
-  Minimax regularization 
-  Gradient projection 
-  Dynamic pulling 
-  Restart strategies 

---

# 19. Training Strategy

This is larger than the optimizer.

### Basic

-  Full-batch 
-  Mini-batch 
-  Gradient-based training 

### Staged

-  Pretraining 
-  Fine-tuning 
-  Sequential training 
-  Staged training 
-  Curriculum learning 
-  Continuation learning 

### Time-oriented

-  Causal training 
-  Time marching 
-  Temporal windows 
-  Block time marching 
-  Progressive time horizon 

### Transfer/reuse

-  Transfer learning 
-  Meta-learning 
-  Multi-fidelity learning 
-  Online adaptation 
-  Fine-tuning 
-  Layer freezing 
-  Pretrained basis reuse 

### Automated training

-  Learned optimizer 
-  Automatic hyperparameter selection 
-  Neural architecture search 
-  Automated loss design 

The manuscript treats initialization, continuation, pretraining, optimizer transitions, and transfer as **methodological choices rather than implementation details**. 

---

# 20. Decomposition

This is exactly the type of “related approach” that should appear in the general PINN map.

## Spatial decomposition

-  Domain decomposition 
-  Subdomain PINNs 
-  Local PINNs 

## Temporal decomposition

-  Time decomposition 
-  Temporal windows 
-  Time marching 

## Space-time decomposition

-  Space-time subdomains 

## Named/general variants appearing in the manuscript

-  XPINN 
-  APINN 
-  Conservative PINN decomposition 
-  Extended PINN 
-  Distributed PINN 
-  Parallel PINN 
-  Progressive domain decomposition 
-  Adaptive decomposition 
-  Soft decomposition 
-  Gated decomposition 

## Physical decomposition

-  One network per material 
-  One network per phase 
-  One network per physical field 
-  Matrix/fracture separation 
-  State/parameter network separation 

## Interface coupling

-  Solution continuity 
-  Flux continuity 
-  Residual continuity 
-  Traction continuity 
-  Transmission conditions 

This category should be visually connected to **architecture + sampling + loss + parallelization**, because decomposition changes all four. The manuscript emphasizes exactly this coupling. 

---

# 21. Operator Learning

I would make this a separate neighboring branch rather than place it simply under “architecture.”

### Approaches

-  DeepONet 
-  Physics-informed DeepONet 
-  PI-DeepONet 
-  Separable DeepONet 
-  Variational DeepONet 
-  Stacked DeepONet 
-  Fourier neural operator 
-  Physics-informed FNO 
-  Graph neural operator 
-  Wavelet neural operator 
-  Laplace operator approaches 
-  Low-rank operators 
-  Multiresolution operators 
-  Separable operator networks 

### Related approaches

-  Hypernetwork PINNs 
-  Parameterized PINNs 
-  Solution-operator regularization 
-  Operator surrogate 
-  Learned differential operator 

This branch represents the transition:

**single PINN solution → family of solutions / function-to-function map**

which is a major conceptual distinction in your manuscript. 

---

# 22. Reduced-Order / Basis Approaches

Closely related but not identical to operator learning.

-  POD 
-  Reduced basis 
-  Deep reduced-order models 
-  Separation of variables 
-  Time-space separation 
-  Tensor decomposition 
-  SVD compression 
-  Spectral basis 
-  Fourier basis 
-  Wavelet basis 
-  RBF basis 
-  Green-function basis 

---

# 23. Hybrid Numerical–PINN Methods

This is another essential branch for the “general view.”

### PINN + classical numerical method

-  PINN + FEM 
-  PINN + FVM 
-  PINN + FDM 
-  PINN + boundary element/integral method 
-  PINN + Runge-Kutta 
-  PINN + finite-volume residual 
-  PINN + finite-difference residual 
-  PINN + differentiable FEM 
-  PINN + control-volume formulation 

### Solver integration

-  Solver-in-the-loop 
-  Differentiable solver 
-  Numerical operator inside loss 
-  Numerical solver as data generator 
-  PINN as surrogate for solver 
-  PINN correction to solver 
-  Learned closure 
-  Learned constitutive model 

The manuscript ultimately argues that this kind of hybridization is probably one of the most credible long-term roles for PINNs. 

---

# 24. Data

Data should also appear in the general figure.

### Data source

-  Experimental measurements 
-  Sensor data 
-  Analytical solution 
-  Numerical simulation 
-  FEM data 
-  CFD data 
-  Synthetic data 
-  Public datasets 
-  Operational data 

### Data amount

-  Data-free / residual-only 
-  Sparse data 
-  Dense data 

### Data quality

-  Noise-free 
-  Noisy 
-  Incomplete 
-  Missing 
-  Irregular 
-  Multi-fidelity 

### Fidelity

-  Low fidelity 
-  High fidelity 
-  Multi-fidelity 

### Role

-  Training 
-  Validation 
-  Testing 
-  Calibration 
-  Independent verification 

---

# 25. Inverse Problems and Discovery

Although these are computational roles, they deserve a visible methodological branch.

-  Unknown parameter estimation 
-  Unknown coefficient recovery 
-  Source identification 
-  Material-property identification 
-  Boundary-condition inference 
-  Initial-state inference 
-  Hidden-state reconstruction 
-  Field reconstruction 
-  Constitutive-law discovery 
-  PDE discovery 
-  Governing-equation discovery 
-  Model calibration 
-  System identification 

### Related concept

-  Identifiability 

The future-direction analysis particularly identifies **inverse identifiability under incomplete or imperfect physics** as an unresolved issue. 

---

# 26. Uncertainty Quantification / Probabilistic PINNs

A major neighboring family.

-  Bayesian PINNs 
-  Bayesian neural networks 
-  Monte Carlo dropout 
-  Ensembles 
-  Multi-output PINNs 
-  Physics-informed GAN 
-  Physics-informed VAE 
-  Normalizing flows 
-  Invertible neural networks 
-  Stochastic PINNs 
-  Posterior inference 
-  Hamiltonian Monte Carlo 
-  Variational inference 
-  Ensemble Kalman inversion 

### UQ targets

-  State uncertainty 
-  Parameter uncertainty 
-  Observation uncertainty 
-  Epistemic uncertainty 
-  Aleatoric uncertainty 
-  Model-form uncertainty 

### UQ evaluation

-  Calibration 
-  Coverage 
-  Credible intervals 
-  Reliability 
-  Predictive variance 
-  Distributional agreement 

The manuscript specifically recommends moving from qualitative uncertainty displays toward **calibrated uncertainty evaluation**. 

---

# 27. Generalization / Knowledge Reuse

-  Transfer learning 
-  Meta-learning 
-  Fine-tuning 
-  Parameterized PINNs 
-  Operator learning 
-  Multi-fidelity learning 
-  Pretrained PINNs 
-  Shared representations 
-  Hypernetworks 
-  Cross-geometry reuse 
-  Cross-parameter reuse 
-  Cross-time reuse 
-  Cross-task reuse 

### Validation considerations

-  Interpolation 
-  Extrapolation 
-  Out-of-distribution testing 
-  Parameter-range validity 
-  Function-space validity 
-  Domain shift 

---

# 28. Parallelization / Computational Execution

Also related to the PINN ecosystem.

-  GPU training 
-  HPC 
-  Multi-GPU 
-  Parallel collocation 
-  Distributed training 
-  Domain-parallel training 
-  Master/worker schemes 
-  Parallel subnetworks 
-  Mini-batching 
-  Large-batch collocation 
-  Separable computation 

---

# 29. Evaluation

This should be a **major outer layer of the diagram**, not an afterthought.

## Numerical accuracy

-  MSE 
-  RMSE 
-  MAE 
-  MAPE 
-  Relative L1​ 
-  Relative L2​ 
- L∞​ 
- H1 
-  Energy norm 
-  Maximum error 
-  R² 

## Physical fidelity

-  PDE residual 
-  IC residual 
-  BC residual 
-  Interface residual 
-  Conservation error 
-  Mass balance 
-  Energy balance 
-  Flux balance 
-  Divergence error 
-  Constitutive consistency 
-  Physical admissibility 

## Structural/local accuracy

-  Error maps 
-  Line profiles 
-  Time histories 
-  Shock location 
-  Front location 
-  Boundary error 
-  Interface error 
-  Spectral error 
-  SSIM 

## Inverse evaluation

-  Parameter error 
-  State error 
-  Coefficient error 
-  Identifiability 
-  Parameter trajectories 

## Robustness/generalization

-  Multiple random seeds 
-  Repeated runs 
-  Noise sensitivity 
-  Data-sparsity sensitivity 
-  Missing data 
-  Extrapolation 
-  OOD tests 

## Uncertainty

-  Coverage 
-  Calibration 
-  Variance 
-  Credible intervals 
-  Reliability diagrams 

## Computational

-  Training time 
-  Inference time 
-  Wall-clock time 
-  Memory 
-  FLOPs 
-  Parameter count 
-  Throughput 
-  Solver calls 
-  Speedup 
-  Core-hours 
-  Scaling 
-  Time-to-solution 
-  Success probability 

Your Evidence Explorer already takes this idea much further, using **123 normalized metrics across 11 groups**, so this taxonomy can connect directly to the Atlas. 

---

# 30. Validation / Benchmarking

Distinct from metric calculation.

-  Analytical benchmark 
-  Numerical benchmark 
-  FEM comparison 
-  FVM comparison 
-  CFD comparison 
-  Experimental comparison 
-  Cross-validation 
-  Ablation study 
-  Sensitivity analysis 
-  Repeated-seed analysis 
-  Benchmark PDE 
-  Accuracy-matched comparison 
-  Physics-based validation 
-  Independent validation 

---

# 31. Theory

This belongs in the ecosystem even though it is not a PINN “setting.”

-  Approximation theory 
-  Universal approximation 
-  Convergence theory 
-  Generalization theory 
-  Error bounds 
-  A priori error analysis 
-  A posteriori analysis 
-  Stability 
-  Conditional stability 
-  Identifiability 
-  Neural tangent kernel 
-  Hessian analysis 
-  Loss landscape 
-  Optimization geometry 
-  Pareto stationarity 
-  Spectral bias 
-  Gradient dynamics 
-  Conditioning 
-  PDE Jacobian conditioning 

---

# 32. Software / Framework / Infrastructure

A final ecosystem diagram should definitely include this.

### PINN/scientific-ML software appearing in the manuscript

-  DeepXDE 
-  NeuroDiffEq 
-  SciANN 
-  Elvet 
-  PiNN 
-  PyDEns / PyDens 
-  NeuralPDE 
-  ADCME 
-  DGM 
-  Neural Tangents 

### Underlying infrastructure

-  TensorFlow 
-  automatic-differentiation engines 
-  GPU frameworks 
-  HPC infrastructure 

The manuscript explicitly treats software as part of the methodological history because frameworks determine which formulations can be implemented, reproduced, compared, and extended. 

---

# 33. Reproducibility / Reporting

This should probably appear in the outermost ring.

-  Equation specification 
-  Domain specification 
-  Geometry 
-  BC/IC specification 
-  Residual definition 
-  Loss weights 
-  Sampling method 
-  Number of points 
-  Network architecture 
-  Activation 
-  Initialization 
-  Optimizer 
-  Learning rate 
-  Learning-rate schedule 
-  Batch policy 
-  Stopping criterion 
-  Validation criterion 
-  Random seed 
-  Hardware 
-  Training time 
-  Inference time 
-  Code 
-  Dataset 
-  Model provenance 

Your future-directions section explicitly proposes interoperable schemas covering **equations, domains, conditions, residuals, sampling, optimizers, metrics, and model provenance**. 

---

# 34. Failure Modes / Challenges

This is very important because each development can later be visually connected to the challenge it tries to solve.

### Optimization

-  Non-convexity 
-  Local minima 
-  Saddle points 
-  Gradient imbalance 
-  Vanishing gradients 
-  Exploding gradients 
-  Loss imbalance 
-  Ill-conditioning 
-  Competing objectives 
-  Pareto conflict 
-  Training stagnation 

### Approximation

-  Spectral bias 
-  High-frequency failure 
-  Multiscale failure 
-  Discontinuities 
-  Shocks 
-  Sharp gradients 
-  Boundary layers 

### Physics

-  Conservation error 
-  Incorrect weak solution 
-  Boundary violation 
-  Interface violation 
-  Physically inadmissible solution 
-  Trivial residual solution 

### Sampling

-  Inadequate domain coverage 
-  Missing localized features 
-  Sampling bias 

### Differentiation

-  High-order AD cost 
-  Memory cost 
-  Numerical differentiation error 

### Scalability

-  High dimension 
-  Large domain 
-  Long time 
-  Multiphysics 
-  Computational cost 
-  Memory 

### Generalization

-  Domain shift 
-  Extrapolation 
-  Parameter-domain limits 
-  Retraining cost 

### Inverse problems

-  Non-identifiability 
-  Model discrepancy 
-  Sparse data 
-  Noise 

### Reliability

-  Uncalibrated uncertainty 
-  Poor reproducibility 
-  Incomplete reporting 

These are not side issues. The manuscript argues that many PINN innovations are best interpreted as **responses to specific numerical or optimization pathologies**. 

---

# 35. Application / Scientific Domain

This can form the outermost contextual layer.

-  Fluid mechanics / CFD 
-  Electromagnetics 
-  Wave physics 
-  Solid mechanics 
-  Structural mechanics 
-  Materials 
-  Geoscience 
-  Porous media 
-  Hydrology 
-  Energy 
-  Thermal systems 
-  Batteries 
-  Biomedical / biomechanics 
-  Cardiac electrophysiology 
-  Aerospace 
-  Space 
-  Chemical engineering 
-  Transport phenomena 
-  Environmental systems 
-  Power systems 
-  Quantum systems 
-  Mathematics 
-  Industrial processes 
-  Digital twins 
-  Control and robotics 

---

# The key conceptual organization

For the final figure, I would **not draw 35 independent boxes**. That would become unreadable.

Instead, I suggest organizing everything into **nine major layers**:

**1. Problem & Physics**
 → equations, geometry, scales, regularity, data availability

**2. PINN Purpose**
 → forward, inverse, discovery, surrogate, operator, control, UQ

**3. Representation**
 → inputs, outputs, architecture, basis, activation

**4. Physics Enforcement**
 → residual, constraints, strong/weak/variational/energy/hard/discrete

**5. Numerical Evaluation of Physics**
 → AD, numerical differentiation, mixed differentiation, discretization

**6. Training**
 → sampling, loss weighting, optimizer, initialization, LR, regularization, staged/transfer/meta training

**7. Structural Extensions**
 → decomposition, operator learning, reduced-order methods, probabilistic models, hybrid numerical methods

**8. Evaluation & Reliability**
 → numerical error, physical fidelity, robustness, UQ, cost, benchmarking

**9. Ecosystem**
 → software, hardware, datasets, reproducibility, applications