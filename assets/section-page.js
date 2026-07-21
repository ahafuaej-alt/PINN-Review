(() => {
  const sections = {
    architectures: {
      eyebrow: 'Methods & theory',
      title: 'Architectures',
      description: 'A structured view of network designs, hybrid methods, operator learning, domain decomposition, and theoretical advances.',
      items: [
        ['Architecture families', 'Compare the structural ideas that distinguish major PINN variants.'],
        ['Method relationships', 'Connect precursor methods, extensions, and hybrid architectures.'],
        ['Evidence register', 'Trace each architectural characteristic to primary reference IDs.']
      ]
    },
    training: {
      eyebrow: 'Optimization & learning',
      title: 'Training',
      description: 'Loss design, learning rates, optimizers, initialization, sampling, activation functions, and convergence diagnostics.',
      items: [
        ['Training pipeline', 'Follow the decisions that shape a PINN from initialization to convergence.'],
        ['Method comparisons', 'Compare optimization and sampling strategies using consistent dimensions.'],
        ['Evidence register', 'Link claims and reported outcomes to primary reference IDs.']
      ]
    },
    applications: {
      eyebrow: 'Scientific domains',
      title: 'Applications',
      description: 'Application maps spanning fluid flow, electromagnetism, mechanics, geoscience, energy, biology, aerospace, mathematics, and emerging areas.',
      items: [
        ['Domain atlas', 'Navigate from scientific domains to problems, equations, and geometries.'],
        ['Cross-domain comparison', 'Reveal where methods and challenges recur across disciplines.'],
        ['Evidence register', 'Inspect the paper-level basis for every application category.']
      ]
    },
    software: {
      eyebrow: 'Research ecosystem',
      title: 'Software',
      description: 'PINN-native libraries and the broader frameworks, solvers, packages, and languages used to build physics-informed models.',
      items: [
        ['Ecosystem map', 'Separate PINN-based software from general tools that support PINN workflows.'],
        ['Capability matrix', 'Compare scope, language, differentiation, equations, and availability.'],
        ['Evidence register', 'Connect each software record to its reported use in the literature.']
      ]
    },
    datasets: {
      eyebrow: 'Data & reproducibility',
      title: 'Datasets & benchmarks',
      description: 'Ready-made and generated datasets, benchmark equations, geometries, conditions, metrics, and access information.',
      items: [
        ['Dataset catalogue', 'Filter datasets by domain, origin, dimensionality, and availability.'],
        ['Benchmark matrix', 'Compare equations, boundary conditions, geometries, and evaluation metrics.'],
        ['Evidence register', 'Trace every dataset and benchmark to primary reference IDs.']
      ]
    }
  };

  const key = document.body.dataset.section;
  const section = sections[key];
  if (!section) return;

  document.title = `${section.title} · PINN Review Atlas`;
  document.querySelector('[data-eyebrow]').textContent = section.eyebrow;
  document.querySelector('[data-title]').textContent = section.title;
  document.querySelector('[data-description]').textContent = section.description;
  document.querySelector('[data-crumb]').textContent = section.title;
  document.querySelector('[data-items]').innerHTML = section.items.map(([title, text]) => `<div><strong>${title}</strong><span>${text}</span></div>`).join('');
})();

