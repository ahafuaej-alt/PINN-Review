import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const files = ['design-stack', 'co-design', 'design-performance', 'failure-diagnostics'];
const routeIds = {
  'architectures/': 'page:architectures',
  'activation-functions/': 'page:activation-functions',
  'mathematical-formulations/': 'page:mathematical-formulations',
  'training/': 'page:training',
  'optimizers/': 'page:optimizers',
  'performance-metrics/': 'page:performance-metrics',
  'pinn-ecosystem/#layer-1': 'ecosystem:problem',
  'pinn-ecosystem/#layer-2': 'ecosystem:purpose',
  'pinn-ecosystem/#layer-3': 'ecosystem:representation',
  'pinn-ecosystem/#layer-5': 'ecosystem:operators',
  'pinn-ecosystem/#sampling': 'ecosystem:collocation-sampling'
};
const additions = {
  'design-stack:representation': ['architecture:fourier-features', 'architecture:siren'],
  'design-stack:physics-enforcement': ['formulation:weak-form', 'formulation:variational-form'],
  'design-stack:differentiation': ['method:automatic-differentiation'],
  'design-stack:sampling': ['sampling:sobol'],
  'design-stack:optimization': ['optimizer:adam', 'optimizer:lbfgs'],
  'design-stack:evaluation': ['metric:rmse', 'metric:relative-l2'],
  'co-design:representation': ['architecture:fourier-features'],
  'co-design:physics': ['formulation:weak-form', 'formulation:variational-form'],
  'co-design:numerical': ['method:automatic-differentiation', 'sampling:sobol'],
  'co-design:training': ['optimizer:adam', 'optimizer:lbfgs'],
  'co-design:reliability': ['metric:rmse', 'metric:relative-l2'],
  'design-performance:architecture-basis': ['architecture:fourier-features', 'architecture:siren'],
  'design-performance:physics-enforcement': ['formulation:weak-form', 'formulation:variational-form'],
  'design-performance:differentiation': ['method:automatic-differentiation'],
  'design-performance:sampling': ['sampling:sobol'],
  'design-performance:optimizer': ['optimizer:adam', 'optimizer:lbfgs'],
  'failure-diagnostics:spectral-bias': ['architecture:fourier-features', 'architecture:siren'],
  'failure-diagnostics:stagnation': ['optimizer:adam', 'optimizer:lbfgs'],
  'failure-diagnostics:poor-sampling': ['sampling:sobol'],
  'failure-diagnostics:verify': ['metric:rmse', 'metric:relative-l2']
};
const labels = {
  'optimizer:adam': 'Adam', 'optimizer:lbfgs': 'L-BFGS',
  'metric:rmse': 'RMSE', 'metric:relative-l2': 'Relative L2 error',
  'formulation:weak-form': 'Weak form', 'formulation:variational-form': 'Variational form',
  'method:automatic-differentiation': 'Automatic differentiation',
  'architecture:fourier-features': 'Fourier features', 'architecture:siren': 'SIREN',
  'sampling:sobol': 'Sobol sampling'
};
const supportMap = { Contextual: 'Equivalent', Synthesis: 'Synthesized' };
const canonicalAliases = {
  'optimizer:l-bfgs': 'optimizer:lbfgs',
  'metric:root-mean-squared-error': 'metric:rmse',
  'metric:relative-l2-error': 'metric:relative-l2'
};

for (const file of files) {
  const target = path.join(root, `data/frameworks/${file}.json`);
  const page = JSON.parse(fs.readFileSync(target, 'utf8'));
  const visit = (value) => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value.concepts)) {
      value.concepts = value.concepts.map((concept) => {
        const { route, ...canonical } = concept;
        const id = concept.id || routeIds[route];
        return { ...canonical, id: canonicalAliases[id] || id };
      }).filter((concept) => concept.id);
      for (const id of additions[`${file}:${value.id}`] || []) if (!value.concepts.some((concept) => concept.id === id)) value.concepts.push({ id, label: labels[id] || id });
    }
    if (Array.isArray(value.evidence)) value.evidence.forEach((entry) => { entry.support = supportMap[entry.support] || entry.support; });
    Object.values(value).forEach(visit);
  };
  visit(page);
  fs.writeFileSync(target, `${JSON.stringify(page, null, 2)}\n`);
}
console.log('Migrated framework links to canonical concept IDs and normalized evidence support types.');
