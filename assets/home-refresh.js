(() => {
  'use strict';

  const liveStyle = document.createElement('style');
  liveStyle.textContent = `
    .home-refresh .visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
    .home-refresh .architecture-viewport{overscroll-behavior-inline:contain;scrollbar-width:thin}
    .home-refresh .atlas-architecture .arch-title-compact{font-size:17px!important}
    .home-refresh .atlas-architecture .arch-hit{fill:transparent;stroke:transparent;stroke-width:2;cursor:pointer;pointer-events:all;transition:fill 150ms ease,stroke 150ms ease}
    .home-refresh .atlas-architecture .arch-hit:hover,.home-refresh .atlas-architecture .arch-hit:focus{fill:color-mix(in srgb,var(--mint) 7%,transparent);stroke:color-mix(in srgb,var(--mint) 70%,transparent);outline:none}
    .home-refresh .architecture-foot .architecture-live-note{color:var(--mint)}
    .home-refresh .home-snapshot-item{padding:0;display:flex;min-height:174px;flex-direction:column}
    .home-refresh .home-snapshot-main{display:block;flex:1;padding:1.05rem 1rem .72rem;color:inherit;text-decoration:none;transition:background 150ms ease}
    .home-refresh .home-snapshot-main:hover,.home-refresh .home-snapshot-main:focus-visible{background:var(--surface-hover);text-decoration:none;outline:none}
    .home-refresh .home-snapshot-main:focus-visible{box-shadow:inset 0 0 0 2px var(--mint)}
    .home-refresh .home-snapshot-provenance{display:grid;gap:.12rem;padding:.58rem .75rem;border-top:1px solid var(--line);color:var(--faint);background:var(--surface-faint);font-family:var(--mono);font-size:.49rem;line-height:1.35;text-decoration:none}
    .home-refresh .home-snapshot-provenance:hover,.home-refresh .home-snapshot-provenance:focus-visible{color:var(--mint);background:var(--surface-hover);text-decoration:none;outline:none}
    .home-refresh .home-snapshot-provenance b{font-weight:750;color:inherit;overflow-wrap:anywhere}.home-refresh .home-snapshot-provenance span{margin:0;color:inherit;font-size:inherit}
    .home-refresh .ecosystem-layer-stack{counter-reset:ecosystem-stage}
    .home-refresh button.ecosystem-layer{width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;transition:transform 160ms ease,border-color 160ms ease,background 160ms ease}
    .home-refresh button.ecosystem-layer:hover,.home-refresh button.ecosystem-layer:focus-visible{border-color:color-mix(in srgb,var(--mint) 55%,var(--line));background:var(--panel-strong);outline:none}
    .home-refresh button.ecosystem-layer::after{content:'↗';color:var(--faint);font-size:.7rem}
    .home-refresh .home-workflow-help{margin:.7rem 0 0;color:var(--faint);font-family:var(--mono);font-size:.57rem;text-align:right}
    .home-refresh .home-workflow-dialog{width:min(760px,calc(100% - 2rem));max-height:calc(100vh - 2rem);padding:0;border:1px solid var(--line);border-radius:20px;color:var(--ink);background:var(--panel);box-shadow:var(--shadow);overflow:auto}
    .home-refresh .home-workflow-dialog::backdrop{background:rgba(4,11,20,.64);backdrop-filter:blur(5px)}
    .home-refresh .home-workflow-close{position:sticky;top:.7rem;float:right;z-index:3;margin:.7rem .7rem 0 0;width:2.15rem;height:2.15rem;border:1px solid var(--line);border-radius:9px;color:var(--muted);background:var(--surface-soft);cursor:pointer}
    .home-refresh .home-workflow-body{padding:1.3rem 1.4rem 1.5rem}.home-refresh .home-workflow-body h2{margin:.2rem 0 .65rem;font-size:1.55rem}.home-refresh .home-workflow-body>p{color:var(--muted)}
    .home-refresh .home-workflow-grid{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:1rem}.home-refresh .home-workflow-grid section{padding:.8rem;border:1px solid var(--line);border-radius:11px;background:var(--surface-soft)}.home-refresh .home-workflow-grid h3{margin:0 0 .4rem;font-size:.82rem}.home-refresh .home-workflow-grid ul{margin:0;padding-left:1.05rem;color:var(--muted);font-size:.68rem}.home-refresh .home-workflow-grid p{margin:0;color:var(--muted);font-size:.68rem}
    .home-refresh .home-workflow-links{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:1rem}.home-refresh .home-workflow-links a{padding:.42rem .55rem;border:1px solid var(--line);border-radius:8px;color:var(--mint);font-family:var(--mono);font-size:.56rem;font-weight:800;text-decoration:none}.home-refresh .home-workflow-links a:hover{border-color:var(--mint);background:var(--surface-hover)}
    .home-refresh .home-module-card.math-formulations-card{border-color:color-mix(in srgb,var(--violet) 30%,var(--line));background:linear-gradient(145deg,color-mix(in srgb,var(--violet) 4%,var(--surface-soft)),var(--surface-soft))}
    @media(max-width:900px){.home-refresh .architecture-viewport{overflow-x:auto;padding-bottom:.3rem}.home-refresh .atlas-architecture{width:860px;min-width:860px;max-width:none}.home-refresh .architecture-scroll-hint{display:inline}}
    @media(max-width:760px){.home-refresh .home-workflow-grid{grid-template-columns:1fr}.home-refresh .home-snapshot-item{min-height:184px}}
    @media(prefers-reduced-motion:reduce){.home-refresh button.ecosystem-layer,.home-refresh .atlas-architecture .arch-hit{transition:none}}
  `;
  document.head.append(liveStyle);

  const navMount = document.querySelector('.site-header .nav-links');
  if (navMount && !navMount.classList.contains('atlas-global-nav')) navMount.replaceChildren();

  const rootHref = document.querySelector('.brand')?.getAttribute('href') || './';
  const number = new Intl.NumberFormat('en');
  const date = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const route = (value) => `${rootHref}${String(value || '').replace(/^\//, '')}`;

  const formatValue = (_key, value) => {
    if (!Number.isFinite(Number(value))) return String(value ?? '—');
    return number.format(Number(value));
  };
  const formatDate = (value) => {
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isNaN(parsed.getTime()) ? value : date.format(parsed);
  };

  const cleanHomepageCopy = () => {
    const lede = document.querySelector('.home-hero .lede');
    if (lede) lede.textContent = 'An evidence-led research system connecting a canonical PINN paper corpus to mathematical formulations, methods, evaluation, terminology, geography, resources, and transparent data governance.';
    const atlasTitle = document.getElementById('atlas-title');
    if (atlasTitle) atlasTitle.innerHTML = 'One Atlas<br>Five research doors';
    const reachTitle = document.getElementById('atlas-reach-title');
    if (reachTitle) reachTitle.textContent = 'Atlas usage snapshot';
    const evidenceTitle = document.getElementById('evidence-title');
    if (evidenceTitle) evidenceTitle.innerHTML = 'From publication<br>to research view';
    document.querySelectorAll('.citation-banner h2').forEach((heading) => { heading.textContent = heading.textContent.replace(/\.$/, ''); });

    const landscape = document.querySelector('[aria-labelledby="landscape-title"]');
    const landscapeCopy = landscape?.querySelector('.directory-label p');
    if (landscapeCopy) landscapeCopy.textContent = 'Where PINN research appears, who collaborates, and which papers support the Atlas evidence base.';
    const applicationCopy = landscape?.querySelector('a[href="applications/"] p');
    if (applicationCopy) applicationCopy.textContent = 'Scientific and engineering application domains represented across the Atlas evidence corpus.';
    const referencesCopy = landscape?.querySelector('a[href="references/"] p');
    if (referencesCopy) referencesCopy.textContent = 'Search the complete Atlas bibliography, metadata, source links, abstracts, and exports.';
  };

  const enhanceDirectory = (overview) => {
    const group = document.querySelector('[aria-labelledby="taxonomy-title"]');
    if (!group) return;
    const label = group.querySelector('.directory-label');
    const index = label?.querySelector('.directory-index');
    const title = label?.querySelector('h3');
    const copy = label?.querySelector('p');
    if (index) index.textContent = '02 / FOUNDATIONS';
    if (title) title.textContent = 'Foundations & Terminology';
    if (copy) copy.textContent = 'Core mathematical formulations, PINN families, and the terminology used to describe them.';
    const cards = group.querySelector('.directory-cards');
    if (cards && !cards.querySelector('a[href="mathematical-formulations/"]')) {
      const count = formatValue('mathematical_formulations', overview.stats?.mathematical_formulations ?? 114);
      cards.insertAdjacentHTML('afterbegin', `<a class="home-module-card math-formulations-card" href="mathematical-formulations/"><span class="home-status" data-state="live">Live</span><h4>Mathematical Formulations</h4><p>Explore a unified equation catalogue with stable notation, evidence levels, reference IDs, constraints, numerical formulations, training mathematics, and reliability measures.</p><span class="module-meta"><span data-overview-value="mathematical_formulations">${count}</span> formulations · 154 evidence references</span></a>`);
    }
  };

  const enhanceSnapshot = (overview) => {
    const items = [...document.querySelectorAll('.home-snapshot-item')];
    const specs = [
      { key:'papers', label:'Paper records', meta:'Canonical corpus' },
      { key:'countries', label:'Countries', meta:'Research landscape' },
      { key:'performance_metrics', label:'Performance metrics', meta:'Evaluation taxonomy' },
      { key:'optimizer_forms', label:'Optimizer forms', meta:'Canonical forms' },
      { key:'activation_functions', label:'Activation functions', meta:'Canonical entries' },
      { key:'ecosystem_layers', secondKey:'ecosystem_groups', label:'Ecosystem layers / groups', meta:'Design system' }
    ];
    items.forEach((item, index) => {
      const spec = specs[index]; if (!spec) return;
      const source = overview.sources?.[spec.key]; if (!source) return;
      const value = spec.secondKey
        ? `<span data-overview-value="${spec.key}">${formatValue(spec.key, overview.stats?.[spec.key])}</span> / <span data-overview-value="${spec.secondKey}">${formatValue(spec.secondKey, overview.stats?.[spec.secondKey])}</span>`
        : `<span data-overview-value="${spec.key}">${formatValue(spec.key, overview.stats?.[spec.key])}</span>`;
      item.innerHTML = `<a class="home-snapshot-main" href="${route(source.page)}" aria-label="Open ${spec.label}"><strong>${value}</strong><span>${spec.label}</span><small>${spec.meta}</small></a><a class="home-snapshot-provenance" href="${route(source.dataset)}" title="Open source dataset"><b>Source · ${source.label}</b><span>${source.date_label || 'Dataset date'} · ${formatDate(source.date)}</span></a>`;
      item.dataset.overviewCard = spec.key;
    });
  };

  const makeSvgHit = (svg, spec) => {
    const ns = 'http://www.w3.org/2000/svg';
    const hit = document.createElementNS(ns, 'rect');
    hit.setAttribute('x', spec.x); hit.setAttribute('y', spec.y); hit.setAttribute('width', spec.w); hit.setAttribute('height', spec.h); hit.setAttribute('rx', spec.rx || '10');
    hit.setAttribute('class', 'arch-hit'); hit.setAttribute('tabindex', '0'); hit.setAttribute('role', 'link'); hit.setAttribute('aria-label', `${spec.label} · open Atlas page`); hit.dataset.architectureRoute = spec.route;
    const activate = () => { window.location.href = route(spec.route); };
    hit.addEventListener('click', activate);
    hit.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
    svg.append(hit);
  };

  const enhanceArchitecture = () => {
    const svg = document.querySelector('.atlas-architecture');
    if (!svg || svg.dataset.interactive === 'true') return;
    svg.dataset.interactive = 'true';
    [...svg.querySelectorAll('.arch-title')].filter((node) => node.textContent.trim() === 'Primary paper').forEach((node) => node.classList.add('arch-title-compact'));
    const hits = [
      {x:20,y:169,w:150,h:224,rx:18,route:'references/',label:'Primary paper evidence'},
      {x:195,y:169,w:150,h:224,rx:18,route:'references/',label:'Canonical master paper record'},
      {x:370,y:145,w:170,h:272,rx:22,route:'dataset-manager/',label:'Normalize and validate'},
      {x:586,y:140,w:90,h:78,route:'references/',label:'References'},
      {x:684,y:140,w:90,h:78,route:'pinn-realm/',label:'PINN Realm'},
      {x:586,y:228,w:90,h:78,route:'performance-metrics/',label:'Performance Metrics'},
      {x:684,y:228,w:90,h:78,route:'optimizers/',label:'Optimizers'},
      {x:586,y:316,w:90,h:78,route:'activation-functions/',label:'Activation Functions'},
      {x:684,y:316,w:90,h:78,route:'pinn-ecosystem/',label:'PINN Ecosystem'},
      {x:835,y:263,w:125,h:34,rx:8,route:'dataset-manager/',label:'Dataset Manager'},
      {x:835,y:306,w:125,h:34,rx:8,route:'dataset-manager/review/',label:'Publisher Metadata Review'},
      {x:835,y:349,w:125,h:34,rx:8,route:'references/changelog/',label:'Reference Changelog'}
    ];
    hits.forEach((spec) => makeSvgHit(svg, spec));
    const foot = document.querySelector('.architecture-foot');
    if (foot && !foot.querySelector('.architecture-live-note')) {
      const note = document.createElement('span'); note.className = 'architecture-live-note'; note.textContent = 'Interactive nodes open live Atlas views'; foot.prepend(note);
    }
  };

  const workflow = {
    '01':{title:'Problem & Physics',verb:'define',summary:'Define the physical system and numerical problem before choosing the PINN representation.',elements:['Governing equations and operators','Domain and geometry','Boundary, initial, terminal, and interface conditions','Physical parameters, forcing, observations, and time dependence'],links:[['Mathematical Formulations','mathematical-formulations/'],['PINN Ecosystem','pinn-ecosystem/'],['References','references/']]},
    '02':{title:'PINN Purpose',verb:'target',summary:'Specify the computational role because forward, inverse, reconstruction, operator-learning, control, and UQ tasks require different outputs and validation.',elements:['Forward solution','Inverse identification and state reconstruction','PDE/system discovery','Surrogate and operator learning','Control, optimization, and uncertainty quantification'],links:[['PINN Types','pinn-types/'],['Mathematical Formulations','mathematical-formulations/'],['Applications','applications/']]},
    '03':{title:'Representation',verb:'encode',summary:'Choose the trainable approximation space: inputs, outputs, variables, architecture, basis, scaling, and network organization.',elements:['Coordinate, parameter, geometry, and observation inputs','Physical, auxiliary, flux, stress, latent, and coefficient outputs','MLP, CNN/U-Net, RNN/LSTM, Transformer, GNN, KAN, operator structures','Activation functions and basis features'],links:[['Architectures','architectures/'],['Activation Functions','activation-functions/'],['Formulation bases','mathematical-formulations/#d-reformulated-states-differentiation-and-approximation-bases']]},
    '04':{title:'Physics Enforcement',verb:'constrain',summary:'Choose how governing knowledge restricts the trainable approximation.',elements:['Strong-form residuals','Weak, variational, energy, integral, and conservative forms','Soft penalties and exact hard constraints','Boundary, initial, interface, constitutive, entropy, equality, and inequality conditions'],links:[['Constraint formulations','mathematical-formulations/#b-computational-roles-and-constraint-enforcement'],['Weak and conservative forms','mathematical-formulations/#c-weak-variational-conservative-integral-and-discrete-physics'],['PINN Ecosystem','pinn-ecosystem/']]},
    '05':{title:'Numerical Evaluation of Physics',verb:'operate',summary:'Determine how derivatives, residuals, integrals, discrete operators, and collocation information are evaluated.',elements:['Automatic, higher-order, numerical, and mixed differentiation','Finite-difference, finite-volume, quadrature, spectral, and solver-in-the-loop residuals','Interior, boundary, initial, interface, observation, and quadrature points','Uniform, random, LHS/Sobol, adaptive, residual-based, and geometry-aware sampling'],links:[['Numerical formulations','mathematical-formulations/#c-weak-variational-conservative-integral-and-discrete-physics'],['Performance Metrics','performance-metrics/'],['PINN Ecosystem','pinn-ecosystem/']]},
    '06':{title:'Training',verb:'optimize',summary:'Construct and balance the objective, then select optimization and training strategies consistent with the problem.',elements:['Physics, data, BC/IC/interface, conservation, constitutive, and regularization losses','Fixed, adaptive, gradient-informed, NTK-informed, and constrained weighting','Adam, L-BFGS, staged and second-order optimization','Learning-rate, initialization, curriculum, pretraining, fine-tuning, and stopping choices'],links:[['Training','training/'],['Optimizers','optimizers/'],['Training mathematics','mathematical-formulations/#h-training-mathematics']]},
    '07':{title:'Extensions & Hybrids',verb:'extend',summary:'Add decomposition, reuse, operator learning, uncertainty structure, or numerical coupling when the base formulation is insufficient.',elements:['Spatial, temporal, and space–time decomposition','Parameterized and reduced-order models','DeepONet, FNO/PINO, and operator learning','Inverse discovery, Bayesian/generative methods, and hybrid solvers'],links:[['Decomposition','mathematical-formulations/#e-domain-interface-and-temporal-decomposition'],['Operator learning','mathematical-formulations/#f-parameterized-reduced-and-operator-learning-formulations'],['Inverse and uncertainty','mathematical-formulations/#g-inverse-discovery-probabilistic-and-uncertainty-formulations']]},
    '08':{title:'Evaluation & Reliability',verb:'verify',summary:'Evaluate numerical accuracy together with physical fidelity, robustness, uncertainty, inverse quality, and computational cost.',elements:['Relative L2, RMSE, MAE, maximum and H1 errors','Residual and condition satisfaction','Conservation and physical admissibility','Robustness, calibration, inverse recovery, time, memory, FLOPs, and accuracy-matched comparisons'],links:[['Performance Metrics','performance-metrics/'],['Evaluation mathematics','mathematical-formulations/#i-mathematical-evaluation-and-reliability'],['PINN Ecosystem','pinn-ecosystem/']]},
    '09':{title:'Implementation & Deployment',verb:'realize',summary:'Turn a validated formulation into a reproducible implementation with explicit provenance, versioning, computational constraints, and correction routes.',elements:['Software and framework realization','Hardware, memory, parallelism, and scaling','Dataset and benchmark provenance','Versioned configurations, stable IDs, monitoring, citation, and public corrections'],links:[['Software','software/'],['Datasets & Benchmarks','datasets/'],['Dataset Manager','dataset-manager/'],['Cite','cite/']]}
  };

  const enhanceWorkflow = () => {
    const stack = document.querySelector('.ecosystem-layer-stack');
    if (!stack || stack.dataset.interactive === 'true') return;
    stack.dataset.interactive = 'true';
    const existing = [...stack.querySelectorAll('.ecosystem-layer')];
    existing.forEach((node) => {
      const number = node.querySelector('b')?.textContent.trim();
      if (!workflow[number]) return;
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'ecosystem-layer'; button.dataset.homeWorkflow = number;
      button.innerHTML = node.innerHTML;
      node.replaceWith(button);
    });
    const help = document.createElement('p'); help.className = 'home-workflow-help'; help.textContent = 'Select any layer to inspect its role, design elements, and Atlas links'; stack.after(help);

    let dialog = document.querySelector('[data-home-workflow-dialog]');
    if (!dialog) {
      dialog = document.createElement('dialog'); dialog.className = 'home-workflow-dialog'; dialog.dataset.homeWorkflowDialog = '';
      dialog.innerHTML = '<button class="home-workflow-close" type="button" aria-label="Close workflow details">×</button><div data-home-workflow-content></div>';
      document.body.append(dialog);
      dialog.querySelector('.home-workflow-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    }
    const content = dialog.querySelector('[data-home-workflow-content]');
    stack.querySelectorAll('[data-home-workflow]').forEach((button) => button.addEventListener('click', () => {
      const item = workflow[button.dataset.homeWorkflow];
      content.innerHTML = `<div class="home-workflow-body"><p class="eyebrow">Stage ${button.dataset.homeWorkflow} · ${item.verb}</p><h2>${item.title}</h2><p>${item.summary}</p><div class="home-workflow-grid"><section><h3>What belongs here</h3><ul>${item.elements.map((entry)=>`<li>${entry}</li>`).join('')}</ul></section><section><h3>Feedback logic</h3><p>Downstream evaluation can return the design to this stage when accuracy, physical fidelity, trainability, robustness, uncertainty, or computational cost remains unsatisfactory.</p></section></div><div class="home-workflow-links">${item.links.map(([label,href])=>`<a href="${route(href)}">${label} →</a>`).join('')}</div></div>`;
      dialog.showModal();
    }));
  };

  const applyOverview = (overview) => {
    const stats = overview?.stats || {};
    document.querySelectorAll('[data-overview-value]').forEach((node) => {
      const key = node.dataset.overviewValue;
      if (!(key in stats)) return;
      node.textContent = formatValue(key, stats[key]);
    });
    document.querySelectorAll('[data-overview-aria]').forEach((node) => {
      const key = node.dataset.overviewAria;
      if (!(key in stats)) return;
      node.setAttribute('aria-label', `${formatValue(key, stats[key])} ${node.dataset.overviewUnit || ''}`.trim());
    });
    const lastUpdated = document.querySelector('[data-overview-updated]');
    if (lastUpdated && overview.last_source_update) lastUpdated.textContent = `Atlas snapshot ${formatDate(overview.last_source_update)}`;
    enhanceSnapshot(overview);
    enhanceDirectory(overview);
    enhanceArchitecture();
    enhanceWorkflow();
    cleanHomepageCopy();
    document.documentElement.dataset.atlasOverview = 'ready';
  };

  cleanHomepageCopy();
  enhanceArchitecture();
  enhanceWorkflow();

  fetch(`${rootHref}data/atlas-overview.json`, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Atlas overview returned ${response.status}`);
      return response.json();
    })
    .then(applyOverview)
    .catch(() => {
      document.documentElement.dataset.atlasOverview = 'fallback';
      const lastUpdated = document.querySelector('[data-overview-updated]');
      if (lastUpdated) lastUpdated.textContent = 'Published snapshot fallback';
    });
})();
