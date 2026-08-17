import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "data/pinn-ecosystem/reference-pinn-ecosystem-source.md");
const outputPath = path.join(root, "data/pinn-ecosystem/pinn-ecosystem.json");

const layers = [
  { id: "problem", number: 1, title: "Problem & Physics", shortTitle: "Problem", description: "Defines the governing relations, numerical character, observations, and physical context that drive every downstream choice." },
  { id: "purpose", number: 2, title: "PINN Purpose", shortTitle: "Purpose", description: "States what the model must accomplish: solve, infer, discover, reuse, quantify, optimize, or control." },
  { id: "representation", number: 3, title: "Representation", shortTitle: "Representation", description: "Chooses how inputs, outputs, bases, architectures, and activations represent the physical state." },
  { id: "enforcement", number: 4, title: "Physics Enforcement", shortTitle: "Enforcement", description: "Specifies which physical conditions are imposed, how they are encoded, and how competing objectives are balanced." },
  { id: "operators", number: 5, title: "Numerical Evaluation of Physics", shortTitle: "Operators", description: "Evaluates differential, integral, discrete, or time-stepping operators used to construct the physical residual." },
  { id: "training", number: 6, title: "Training", shortTitle: "Training", description: "Controls collocation, optimization, initialization, scaling, stabilization, schedules, and staged learning." },
  { id: "extensions", number: 7, title: "Structural Extensions", shortTitle: "Extensions", description: "Adds decomposition, operator learning, reduced models, probabilistic methods, numerical hybrids, reuse, and parallel execution." },
  { id: "reliability", number: 8, title: "Evaluation & Reliability", shortTitle: "Reliability", description: "Tests numerical accuracy, physical fidelity, robustness, uncertainty, computational cost, theory, and failure modes." },
  { id: "ecosystem", number: 9, title: "Ecosystem", shortTitle: "Ecosystem", description: "Connects implementation software, reporting standards, reproducibility, and scientific application domains." }
];

const layerByGroupNumber = new Map([
  [1, "problem"], [24, "problem"],
  [2, "purpose"], [25, "purpose"],
  [3, "representation"], [4, "representation"], [5, "representation"], [6, "representation"], [7, "representation"],
  [8, "enforcement"], [9, "enforcement"], [10, "enforcement"], [11, "enforcement"],
  [12, "operators"],
  [13, "training"], [14, "training"], [15, "training"], [16, "training"], [17, "training"], [18, "training"], [19, "training"],
  [20, "extensions"], [21, "extensions"], [22, "extensions"], [23, "extensions"], [26, "extensions"], [27, "extensions"], [28, "extensions"],
  [29, "reliability"], [30, "reliability"], [31, "reliability"], [34, "reliability"],
  [32, "ecosystem"], [33, "ecosystem"], [35, "ecosystem"]
]);

const slugify = (value) => value
  .normalize("NFKD")
  .replace(/[\u0300-\u036f\u200b-\u200d\ufeff]/g, "")
  .toLowerCase()
  .replace(/&/g, " and ")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 72);

const cleanInline = (value) => value
  .replace(/[\u200b-\u200d\ufeff]/g, "")
  .replace(/\*\*/g, "")
  .replace(/`/g, "")
  .replace(/\s+/g, " ")
  .trim();

function parseSource(markdown) {
  const groups = [];
  let current = null;
  let subgroup = "Elements";
  let introOpen = false;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const numberedHeading = rawLine.match(/^#{1,2}\s+(\d+)\.\s+(.+?)\s*$/);
    if (numberedHeading) {
      const number = Number(numberedHeading[1]);
      current = {
        number,
        id: slugify(numberedHeading[2]),
        title: cleanInline(numberedHeading[2]),
        descriptionParts: [],
        subgroups: []
      };
      groups.push(current);
      subgroup = "Elements";
      introOpen = true;
      continue;
    }

    if (/^#\s+The key conceptual organization/.test(rawLine)) break;
    if (!current) continue;

    const nestedHeading = rawLine.match(/^#{2,3}\s+(.+?)\s*$/);
    if (nestedHeading) {
      subgroup = cleanInline(nestedHeading[1]);
      introOpen = false;
      continue;
    }

    const bullet = rawLine.match(/^\s*-\s+(.+?)\s*$/);
    if (bullet) {
      introOpen = false;
      const name = cleanInline(bullet[1]);
      let target = current.subgroups.find((entry) => entry.title === subgroup);
      if (!target) {
        target = { id: slugify(subgroup), title: subgroup, items: [] };
        current.subgroups.push(target);
      }
      target.items.push({
        id: `${current.id}-${slugify(name)}-${target.items.length + 1}`,
        name
      });
      continue;
    }

    const text = cleanInline(rawLine);
    if (introOpen && text && text !== "---") current.descriptionParts.push(text);
  }

  return groups.map((group) => {
    const layerId = layerByGroupNumber.get(group.number);
    if (!layerId) throw new Error(`No layer assigned to group ${group.number}: ${group.title}`);
    const layer = layers.find((entry) => entry.id === layerId);
    const itemCount = group.subgroups.reduce((sum, entry) => sum + entry.items.length, 0);
    return {
      number: group.number,
      id: group.id,
      title: group.title,
      layerId,
      description: group.descriptionParts.join(" ") || layer.description,
      itemCount,
      subgroups: group.subgroups
    };
  });
}

const relationSeed = [
  [1, 2, "drives", "design", "The physical system constrains the useful computational role."],
  [1, 3, "determines", "design", "Coordinates, parameters, geometry, and conditions follow from the problem definition."],
  [1, 4, "determines", "design", "State variables and auxiliary outputs must expose the quantities required by the physics."],
  [1, 8, "constrains", "design", "Problem regularity and geometry affect whether physics is imposed softly, weakly, or exactly."],
  [1, 12, "determines", "design", "Operator order and structure select a suitable differentiation pathway."],
  [1, 13, "drives", "training", "Localized, stiff, multiscale, or irregular behavior changes the sampling strategy."],
  [1, 20, "motivates", "extensions", "Large, long-time, or multiphysics systems often motivate decomposition."],
  [1, 34, "exposes", "reliability", "Problem characteristics determine the most likely numerical failure modes."],
  [24, 3, "supplies", "design", "Observed variables and parameter fields enter through the input representation."],
  [24, 10, "supplies", "design", "Data availability and quality determine which mismatch terms are defensible."],
  [24, 25, "enables", "design", "Inverse recovery and discovery require informative observations."],
  [24, 29, "supports", "reliability", "Independent data enable validation beyond the training objective."],
  [2, 3, "configures", "design", "The computational purpose decides whether inputs are coordinates, parameters, functions, or observations."],
  [2, 4, "configures", "design", "Forward, inverse, discovery, and control tasks require different outputs."],
  [2, 5, "guides", "design", "The role helps select a pointwise network, sequence model, graph model, or operator."],
  [2, 29, "sets", "reliability", "Evaluation criteria must reflect the intended computational role."],
  [25, 4, "requires", "design", "Inverse and discovery tasks expose parameters, coefficients, or latent states as outputs."],
  [25, 10, "requires", "design", "Identifiability depends on a suitable combination of physics and data objectives."],
  [25, 31, "depends on", "reliability", "Inverse conclusions require stability and identifiability analysis."],
  [3, 5, "feeds", "design", "The approximation model consumes the chosen coordinates, parameters, fields, or functions."],
  [4, 12, "changes", "design", "Primitive, mixed, and auxiliary-output formulations change derivative order and cost."],
  [4, 10, "defines", "design", "Predicted states and auxiliary variables determine the available residual terms."],
  [5, 6, "contains", "design", "Depth, width, topology, and parameter sharing configure the architecture."],
  [5, 7, "uses", "design", "Activation choice controls smoothness, frequency representation, and gradient propagation."],
  [5, 16, "is initialized by", "training", "Initialization acts on the selected architecture and basis."],
  [5, 28, "executes through", "extensions", "Model topology affects parallel and distributed execution."],
  [7, 12, "must support", "design", "The activation must provide the derivative smoothness required by the operator."],
  [8, 9, "implements", "design", "An enforcement mechanism acts on explicit physical constraints."],
  [8, 10, "constructs", "design", "Soft, weak, variational, hard, or discrete enforcement changes the objective."],
  [8, 12, "uses", "design", "Strong-form residuals and alternative formulations evaluate physics differently."],
  [9, 10, "contributes to", "design", "Equations, boundary conditions, interfaces, and admissibility become objective terms or exact constructions."],
  [9, 13, "places", "training", "Boundary, initial, interface, and observation constraints require dedicated point sets."],
  [10, 11, "is balanced by", "training", "Composite objectives require explicit or adaptive weighting."],
  [10, 14, "is minimized by", "training", "The objective landscape determines optimizer behavior."],
  [11, 14, "conditions", "training", "Loss balancing changes gradient scales seen by the optimizer."],
  [12, 10, "evaluates", "design", "Differential and numerical operators generate the physics residual."],
  [12, 28, "sets cost for", "extensions", "Derivative evaluation often dominates memory and parallelization requirements."],
  [13, 10, "samples", "training", "Collocation and data points define where every objective term is evaluated."],
  [13, 19, "participates in", "training", "Adaptive resampling and causal point selection are part of the training schedule."],
  [14, 15, "uses", "training", "Each optimizer depends on a compatible learning-rate policy or line search."],
  [14, 19, "is scheduled by", "training", "Staged training can switch optimizers and batch policies."],
  [16, 14, "conditions", "training", "Initialization influences the region of the loss landscape reached by optimization."],
  [17, 10, "normalizes", "training", "Nondimensionalization and residual scaling change objective conditioning."],
  [17, 14, "stabilizes", "training", "Well-scaled inputs and outputs improve optimizer conditioning."],
  [18, 19, "stabilizes", "training", "Regularization, clipping, stopping, and restarts modify the training process."],
  [20, 5, "restructures", "extensions", "Decomposition replaces one global model with coupled local networks."],
  [20, 9, "adds", "extensions", "Subdomains introduce interface and transmission conditions."],
  [20, 13, "partitions", "extensions", "Each subdomain or time window needs its own collocation design."],
  [20, 28, "enables", "extensions", "Independent subnetworks create domain-parallel execution opportunities."],
  [21, 3, "requires", "extensions", "Operator learning consumes functions, fields, or sensor samples rather than coordinates alone."],
  [21, 5, "specializes", "extensions", "Branch-trunk, Fourier, graph, or wavelet operators alter the approximation model."],
  [21, 27, "supports", "extensions", "Learning a function-to-function map enables reuse across conditions and parameters."],
  [22, 5, "compresses", "extensions", "Reduced bases and low-rank representations constrain the model space."],
  [22, 23, "integrates with", "extensions", "Reduced representations can be embedded in classical solver hybrids."],
  [23, 8, "changes", "extensions", "Numerical solvers and discrete operators provide alternative physics-enforcement pathways."],
  [23, 12, "supplies", "extensions", "Classical discretizations can replace or complement automatic differentiation."],
  [23, 32, "depends on", "ecosystem", "Hybrid workflows require interoperable neural and numerical software."],
  [26, 5, "extends", "extensions", "Probabilistic PINNs add Bayesian, generative, ensemble, or invertible representations."],
  [26, 10, "changes", "extensions", "Likelihoods, priors, and adversarial terms modify the objective."],
  [26, 29, "requires", "reliability", "Uncertainty predictions require coverage, calibration, and reliability evaluation."],
  [27, 30, "must be tested by", "reliability", "Reuse claims require interpolation, extrapolation, and out-of-distribution benchmarks."],
  [28, 32, "runs on", "ecosystem", "Distributed execution depends on GPU, HPC, and framework infrastructure."],
  [29, 30, "is established by", "reliability", "Metrics become evidence only through appropriate benchmarks and comparisons."],
  [30, 33, "must be reported through", "ecosystem", "Benchmark conclusions require complete, reproducible configuration reporting."],
  [31, 7, "explains", "reliability", "Spectral bias and smoothness theory inform activation selection."],
  [31, 10, "analyzes", "reliability", "Error, stability, NTK, Hessian, and conditioning analyses study the objective."],
  [31, 14, "informs", "reliability", "Loss-landscape and curvature analyses guide optimizer choice."],
  [34, 18, "is mitigated by", "reliability", "Stabilization methods respond to optimization and approximation failures."],
  [34, 20, "is mitigated by", "extensions", "Decomposition targets scale, locality, and long-time failures."],
  [34, 29, "must be detected by", "reliability", "Reliability metrics should expose known numerical and physical pathologies."],
  [32, 33, "supports", "ecosystem", "Frameworks and infrastructure determine which configurations can be reproduced."],
  [33, 29, "makes auditable", "reliability", "Complete reporting lets readers reproduce numerical and physical evaluation."],
  [35, 1, "provides context for", "ecosystem", "The scientific domain supplies the equations, scales, geometry, and admissibility requirements."]
];

const builderStages = [
  {
    id: "context", number: 1, title: "Problem & purpose", description: "Define the physical system, task, and data regime.",
    fields: [
      { id: "governing-physics", groupNumber: 1, label: "Governing physics", subgroups: ["Governing physics"], required: true, defaults: ["Partial differential equations — PDEs"] },
      { id: "problem-characteristics", groupNumber: 1, label: "Problem characteristics", subgroups: ["Problem characteristics"], defaults: ["Steady / transient"] },
      { id: "role", groupNumber: 2, label: "Computational role", required: true, defaults: ["Forward solution"] },
      { id: "data-regime", groupNumber: 24, label: "Data regime", subgroups: ["Data amount", "Data quality", "Fidelity"], defaults: ["Sparse data", "Noise-free"] }
    ]
  },
  {
    id: "representation", number: 2, title: "Representation", description: "Choose model inputs, outputs, architecture, and activation.",
    fields: [
      { id: "inputs", groupNumber: 3, label: "Inputs", required: true, defaults: ["Spatial coordinates x,y", "Time t"] },
      { id: "outputs", groupNumber: 4, label: "Outputs", required: true, defaults: ["Scalar fields"] },
      { id: "architecture", groupNumber: 5, label: "Architecture", required: true, defaults: ["Multilayer perceptron — MLP"] },
      { id: "activation", groupNumber: 7, label: "Activation", required: true, defaults: ["tanh"] }
    ]
  },
  {
    id: "physics", number: 3, title: "Physics construction", description: "Select the imposed physics, enforcement route, and objective.",
    fields: [
      { id: "enforcement", groupNumber: 8, label: "Physics enforcement", required: true, defaults: ["PDE residual"] },
      { id: "constraints", groupNumber: 9, label: "Physical constraints", defaults: ["Initial conditions", "Boundary conditions"] },
      { id: "objective", groupNumber: 10, label: "Loss / objective", required: true, defaults: ["Composite loss", "PDE loss", "IC loss", "BC loss"] },
      { id: "weighting", groupNumber: 11, label: "Loss balancing", defaults: ["Fixed weights"] }
    ]
  },
  {
    id: "numerics", number: 4, title: "Numerical evaluation", description: "Decide how the residual is differentiated and where it is evaluated.",
    fields: [
      { id: "differentiation", groupNumber: 12, label: "Differentiation", required: true, defaults: ["Higher-order AD"] },
      { id: "sampling", groupNumber: 13, label: "Collocation / sampling", required: true, defaults: ["Interior collocation points", "Boundary points", "Initial-condition points", "Latin hypercube sampling"] }
    ]
  },
  {
    id: "training", number: 5, title: "Training", description: "Configure optimization, scaling, initialization, and stabilization.",
    fields: [
      { id: "optimizer", groupNumber: 14, label: "Optimizer", required: true, defaults: ["Adam → L-BFGS"] },
      { id: "learning-rate", groupNumber: 15, label: "Learning-rate strategy", defaults: ["Adaptive learning rate"] },
      { id: "initialization", groupNumber: 16, label: "Initialization", defaults: ["Xavier"] },
      { id: "scaling", groupNumber: 17, label: "Scaling / normalization", defaults: ["Input normalization", "Output normalization", "Residual scaling"] },
      { id: "stabilization", groupNumber: 18, label: "Stabilization", defaults: ["Gradient clipping", "Early stopping"] },
      { id: "training-strategy", groupNumber: 19, label: "Training strategy", defaults: ["Full-batch", "Staged training"] }
    ]
  },
  {
    id: "extensions", number: 6, title: "Structural extensions", description: "Add only the neighboring methods required by the problem.",
    fields: [
      { id: "decomposition", groupNumber: 20, label: "Decomposition", optional: true, defaults: [] },
      { id: "operator-learning", groupNumber: 21, label: "Operator learning", optional: true, defaults: [] },
      { id: "reduced-order", groupNumber: 22, label: "Reduced-order / basis", optional: true, defaults: [] },
      { id: "hybrid", groupNumber: 23, label: "Numerical hybrid", optional: true, defaults: [] },
      { id: "uncertainty", groupNumber: 26, label: "Uncertainty method", optional: true, defaults: [] },
      { id: "reuse", groupNumber: 27, label: "Generalization / reuse", optional: true, defaults: [] },
      { id: "parallelization", groupNumber: 28, label: "Parallel execution", optional: true, defaults: [] }
    ]
  },
  {
    id: "verification", number: 7, title: "Verification & reporting", description: "Specify how the design will be tested, implemented, and reproduced.",
    fields: [
      { id: "evaluation", groupNumber: 29, label: "Evaluation metrics", required: true, defaults: ["Relative L2", "PDE residual", "Training time"] },
      { id: "benchmarking", groupNumber: 30, label: "Validation / benchmarking", required: true, defaults: ["Analytical benchmark", "Repeated-seed analysis"] },
      { id: "software", groupNumber: 32, label: "Software / infrastructure", defaults: ["DeepXDE"] },
      { id: "reproducibility", groupNumber: 33, label: "Reproducibility record", defaults: ["Equation specification", "Random seed", "Hardware", "Training time", "Code"] }
    ]
  }
];

const markdown = fs.readFileSync(sourcePath, "utf8");
const groups = parseSource(markdown);
const groupByNumber = new Map(groups.map((group) => [group.number, group]));

const relations = relationSeed.map(([fromNumber, toNumber, type, lens, summary], index) => {
  const from = groupByNumber.get(fromNumber);
  const to = groupByNumber.get(toNumber);
  if (!from || !to) throw new Error(`Invalid relation ${fromNumber} -> ${toNumber}`);
  return { id: `relation-${index + 1}`, from: from.id, to: to.id, type, lens, summary };
});

const stages = builderStages.map((stage) => ({
  ...stage,
  fields: stage.fields.map(({ groupNumber, ...field }) => {
    const group = groupByNumber.get(groupNumber);
    if (!group) throw new Error(`Invalid builder group ${groupNumber}`);
    return { ...field, groupId: group.id };
  })
}));

const enrichedLayers = layers.map((layer) => ({
  ...layer,
  groupIds: groups.filter((group) => group.layerId === layer.id).map((group) => group.id)
}));

const allItems = groups.flatMap((group) => group.subgroups.flatMap((entry) => entry.items.map((item) => item.name)));
const data = {
  schemaVersion: "1.1.0",
  datasetVersion: "2026.08.17.2",
  title: "PINN Ecosystem",
  description: "A layered taxonomy of the coupled choices, extensions, evaluation practices, infrastructure, and scientific contexts that define a physics-informed neural network workflow.",
  source: "data/pinn-ecosystem/reference-pinn-ecosystem-source.md",
  governance: {
    evidencePolicy: "Community additions are proposals. They enter the curated taxonomy only after evidence review.",
    repository: "ahafuaej-alt/PINN-Review"
  },
  stats: {
    layers: enrichedLayers.length,
    groups: groups.length,
    itemOccurrences: allItems.length,
    uniqueItemNames: new Set(allItems.map((item) => item.toLocaleLowerCase("en"))).size,
    relations: relations.length
  },
  layers: enrichedLayers,
  groups,
  relations,
  relationLenses: [
    { id: "all", title: "All relationships" },
    { id: "design", title: "Design logic" },
    { id: "training", title: "Training dependencies" },
    { id: "extensions", title: "Structural extensions" },
    { id: "reliability", title: "Reliability logic" },
    { id: "ecosystem", title: "Ecosystem support" }
  ],
  builder: {
    title: "PINN Design Studio",
    description: "Select compatible elements, inspect design warnings, and generate a portable architecture diagram.",
    selectionPolicy: {
      countLimits: "No arbitrary item-count caps are imposed. Select every element that materially belongs to the design.",
      requiredMeaning: "Required marks the minimum information needed for a complete Atlas design record; it is not a claim that one method is universally mandatory.",
      enforcement: "Only logical contradictions are blocked. Valid hybrid combinations remain selectable with a scientific interpretation notice; performance-sensitive choices remain advisory."
    },
    stages
  }
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Built ${path.relative(root, outputPath)}: ${data.stats.layers} layers, ${data.stats.groups} groups, ${data.stats.itemOccurrences} item occurrences, ${data.stats.relations} relations.`);
