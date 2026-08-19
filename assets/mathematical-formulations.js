(() => {
  'use strict';
  const rootHref = document.querySelector('.brand')?.getAttribute('href') || '../';
  const dataUrl = `${rootHref}data/mathematical-formulations.json`;
  const issueBase = 'https://github.com/ahafuaej-alt/PINN-Review/issues/new';
  const catalogue = document.querySelector('[data-formulation-catalogue]');
  const notationHost = document.querySelector('[data-notation-table]');
  const coverageHost = document.querySelector('[data-coverage-audit]');
  const referenceHost = document.querySelector('[data-reference-register]');
  const search = document.getElementById('math-search');
  const category = document.getElementById('math-category');
  const evidence = document.getElementById('math-evidence');
  const visible = document.getElementById('math-visible');
  const empty = document.querySelector('[data-math-empty]');
  const dialog = document.querySelector('[data-workflow-dialog]');
  const dialogContent = document.querySelector('[data-workflow-dialog-content]');
  const toast = document.querySelector('[data-math-toast]');
  let data = null;

  const escapeHtml = (value='') => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const issueUrl = ({title, body}) => `${issueBase}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  const showToast = (message) => { if (!toast) return; toast.textContent = message; toast.hidden = false; clearTimeout(showToast.timer); showToast.timer = setTimeout(() => { toast.hidden = true; }, 2600); };
  const refLink = (id) => `<a class="formula-ref" href="${rootHref}references/#ref=${Number(id)}" title="Open Atlas reference ${Number(id)}">[${Number(id)}]</a>`;
  const formulaSearchText = (f) => [f.id,f.name,f.category,f.evidence,f.meaning,f.purpose,f.relation,f.symbols,...(f.tags||[]),...(f.refs||[])].join(' ').toLowerCase();

  const workflow = {
    problem:{number:'01',title:'Problem & Physics',verb:'define',summary:'Define the physical system before choosing a network.',elements:['Governing equations and operators','Domain and geometry','Boundary, initial, terminal, and interface conditions','Material and physical parameters','Forcing, source terms, data availability, and time dependence'],links:[['Mathematical formulations','#a-mathematical-problem-and-canonical-pinn'],['PINN Ecosystem',`${rootHref}pinn-ecosystem/`],['References',`${rootHref}references/`]]},
    purpose:{number:'02',title:'PINN Purpose',verb:'target',summary:'State what computational role the PINN must perform because the role changes what is observable, trainable, and verifiable.',elements:['Forward solution','Inverse parameter identification','State reconstruction and data assimilation','PDE or system discovery','Surrogate and operator learning','Control, optimization, and uncertainty quantification'],links:[['Forward and inverse formulations','#b-computational-roles-and-constraint-enforcement'],['PINN Types',`${rootHref}pinn-types/`],['Applications',`${rootHref}applications/`]]},
    representation:{number:'03',title:'Representation',verb:'encode',summary:'Choose the inputs, outputs, variables, architecture, basis, and scaling that define the trainable approximation space.',elements:['Coordinates, parameters, geometry descriptors, observations','Scalar, vector, auxiliary, flux, stress, latent, and coefficient outputs','MLP, CNN/U-Net, RNN/LSTM, Transformer, GNN, KAN, operator networks','Activation and basis choices','Single-network, multi-network, parameterized, and latent structures'],links:[['Representation formulations','#d-reformulated-states-differentiation-and-approximation-bases'],['Architectures',`${rootHref}architectures/`],['Activation Functions',`${rootHref}activation-functions/`]]},
    enforcement:{number:'04',title:'Physics Enforcement',verb:'constrain',summary:'Decide how governing knowledge and admissibility conditions restrict the approximation.',elements:['Strong-form residuals','Weak, variational, energy, integral, and conservative forms','Soft penalties and exact hard constraints','Boundary, initial, interface, constitutive, entropy, equality, and inequality constraints','Augmented-Lagrangian and feasibility formulations'],links:[['Constraint formulations','#b-computational-roles-and-constraint-enforcement'],['Weak and conservative physics','#c-weak-variational-conservative-integral-and-discrete-physics'],['PINN Ecosystem',`${rootHref}pinn-ecosystem/`]]},
    numerics:{number:'05',title:'Numerical Evaluation of Physics',verb:'operate',summary:'Choose how derivatives, residuals, integrals, discrete operators, and collocation information are evaluated.',elements:['Automatic and higher-order differentiation','Numerical and mixed AD–numerical differentiation','Finite-difference, finite-volume, quadrature, spectral, and solver-in-the-loop residuals','Interior, boundary, initial, interface, observation, and quadrature points','Uniform, random, LHS/Sobol, adaptive, residual-based, and geometry-aware sampling'],links:[['Discrete and numerical formulations','#c-weak-variational-conservative-integral-and-discrete-physics'],['Differentiation and bases','#d-reformulated-states-differentiation-and-approximation-bases'],['Performance Metrics',`${rootHref}performance-metrics/`]]},
    training:{number:'06',title:'Training',verb:'optimize',summary:'Construct and balance the objective, then choose optimization and training strategies consistent with the problem.',elements:['Physics, data, BC/IC/interface, conservation, constitutive, and regularization losses','Fixed, adaptive, gradient-informed, NTK-informed, and augmented-Lagrangian weighting','Adam, L-BFGS, staged and second-order optimization','Learning-rate schedules, initialization, curriculum, pretraining, fine-tuning, early stopping','Multi-objective and Pareto considerations'],links:[['Training mathematics','#h-training-mathematics'],['Training',`${rootHref}training/`],['Optimizers',`${rootHref}optimizers/`]]},
    extensions:{number:'07',title:'Extensions & Hybrids',verb:'extend',summary:'Introduce decomposition, reuse, operator learning, probabilistic structure, or hybrid numerical components when the base formulation is insufficient.',elements:['Spatial, temporal, and space–time decomposition','Parameterized and reduced-order formulations','DeepONet, FNO/PINO, and operator learning','Inverse discovery and constitutive identification','Bayesian, variational, adversarial, flow, and ensemble formulations','Hybrid solver and numerical-method coupling'],links:[['Decomposition','#e-domain-interface-and-temporal-decomposition'],['Operator learning','#f-parameterized-reduced-and-operator-learning-formulations'],['Inverse and uncertainty','#g-inverse-discovery-probabilistic-and-uncertainty-formulations']]},
    evaluation:{number:'08',title:'Evaluation & Reliability',verb:'verify',summary:'Evaluate numerical accuracy together with physical fidelity, robustness, uncertainty, inverse quality, and computational cost.',elements:['Relative L2, RMSE, MAE, maximum and H1 errors','PDE residual and BC/IC/interface satisfaction','Conservation and admissibility','Robustness to seeds, noise, sparsity, and OOD conditions','Uncertainty calibration and inverse recovery','Training time, inference time, memory, FLOPs, and accuracy-matched comparisons'],links:[['Evaluation mathematics','#i-mathematical-evaluation-and-reliability'],['Performance Metrics',`${rootHref}performance-metrics/`],['PINN Ecosystem',`${rootHref}pinn-ecosystem/`]]},
    deployment:{number:'09',title:'Implementation & Deployment',verb:'realize',summary:'Turn a validated formulation into a reproducible implementation, while retaining provenance, versioning, computational constraints, and routes for correction.',elements:['Software and framework realization','Hardware, memory, parallelism, and scaling','Dataset and benchmark provenance','Versioned configuration and reference IDs','Monitoring, reproducibility, citation, and public correction workflows'],links:[['Software',`${rootHref}software/`],['Datasets & Benchmarks',`${rootHref}datasets/`],['Data Governance',`${rootHref}dataset-manager/`],['Cite',`${rootHref}cite/`]]}
  };

  const openWorkflow = (key) => {
    const item = workflow[key]; if (!item || !dialog || !dialogContent) return;
    dialogContent.innerHTML = `<div class="workflow-dialog-body"><p class="eyebrow compact">Stage ${item.number} · ${escapeHtml(item.verb)}</p><h2 id="workflow-dialog-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.summary)}</p><div class="workflow-dialog-grid"><section><h3>What belongs here</h3><ul>${item.elements.map((x)=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></section><section><h3>Design implication</h3><p>Select this stage before downstream choices that depend on it. Evaluation may send the workflow back here when accuracy, physical fidelity, robustness, uncertainty, or computational cost is unsatisfactory.</p></section></div><div class="workflow-dialog-links">${item.links.map(([label,href])=>`<a href="${href}">${escapeHtml(label)} →</a>`).join('')}</div></div>`;
    dialog.showModal();
  };

  document.querySelectorAll('[data-workflow-step]').forEach((button)=>button.addEventListener('click',()=>openWorkflow(button.dataset.workflowStep)));
  document.querySelector('[data-dialog-close]')?.addEventListener('click',()=>dialog?.close());
  dialog?.addEventListener('click',(event)=>{if(event.target===dialog)dialog.close();});

  const renderNotation = () => {
    const rows = data.notation || [];
    notationHost.innerHTML = `<table><thead><tr><th>Symbol</th><th>Meaning</th></tr></thead><tbody>${rows.map((row)=>`<tr><td>${row.symbol}</td><td>${escapeHtml(row.meaning)}</td></tr>`).join('')}</tbody></table>`;
  };
  const renderCoverage = () => {
    coverageHost.innerHTML = `<table><thead><tr><th>Concept family</th><th>Status</th><th>Reason</th></tr></thead><tbody>${(data.coverage_audit||[]).map((row)=>`<tr><td>${escapeHtml(row.topic)}</td><td><span class="coverage-status" data-status="${escapeHtml(row.status)}">${escapeHtml(row.status)}</span></td><td>${escapeHtml(row.note)}</td></tr>`).join('')}</tbody></table>`;
  };
  const renderReferences = () => {
    const refs=[...new Set((data.formulations||[]).flatMap((f)=>f.refs||[]))].sort((a,b)=>a-b);
    referenceHost.innerHTML=refs.map((id)=>`<a href="${rootHref}references/#ref=${id}" title="Open Atlas reference ${id}">[${id}]</a>`).join('');
  };
  const copyEquation = async (formula) => {
    try { await navigator.clipboard.writeText(formula.equation); showToast(`${formula.id} equation copied`); }
    catch { showToast('Copy failed; select the equation manually'); }
  };
  const openFormulaEdit = (formula) => {
    const body=`Atlas page: Mathematical Formulations\nFormulation: ${formula.id} — ${formula.name}\nEvidence level: ${formula.evidence}\n\nProposed correction:\n\n\nAuthoritative source / DOI / supporting Atlas IDs:\n\n\nReason for change:\n`;
    window.open(issueUrl({title:`Mathematical formulation edit: ${formula.id} ${formula.name}`,body}),'_blank','noopener');
  };
  const cardHtml = (f,index) => `<article class="formula-card" id="${f.id}" data-formula-card data-category="${escapeHtml(f.category)}" data-evidence="${escapeHtml(f.evidence)}" data-search="${escapeHtml(formulaSearchText(f))}"><div class="formula-card-head"><div><div class="formula-kickers"><span class="formula-pill id">${escapeHtml(f.id)}</span><span class="formula-pill">Eq ${index+1}</span><span class="formula-pill" data-evidence="${escapeHtml(f.evidence)}">${escapeHtml(f.evidence)}</span></div><h4>${escapeHtml(f.name)}</h4></div><div class="formula-actions"><button class="formula-action" type="button" data-copy-formula="${f.id}">Copy LaTeX</button><button class="formula-action" type="button" data-edit-formula="${f.id}">Suggest edit ↗</button></div></div><div class="equation-box">\\[${f.equation}\\]</div><div class="formula-explain-grid"><div class="formula-explain"><strong>Meaning</strong><p>${escapeHtml(f.meaning)}</p></div><div class="formula-explain"><strong>Purpose</strong><p>${escapeHtml(f.purpose)}</p></div><div class="formula-explain"><strong>Relation to canonical PINN</strong><p>${escapeHtml(f.relation)}</p></div><div class="formula-explain"><strong>Symbols introduced or specialized</strong><p>${f.symbols}</p></div></div><div class="formula-evidence"><div><strong>Atlas evidence IDs</strong><div class="formula-refs">${(f.refs||[]).map(refLink).join('')}</div></div><div><strong>Evidence role</strong><p>${f.evidence==='Direct'?'Original or direct methodological evidence':f.evidence==='Equivalent'?'Equivalent source formulation normalized to Atlas notation':'Cross-source normalized synthesis; not a verbatim source equation'}</p></div><div><strong>Tags</strong><div class="formula-tags">${(f.tags||[]).map((tag)=>`<span class="formula-tag">${escapeHtml(tag)}</span>`).join('')}</div></div></div></article>`;

  const renderCatalogue = () => {
    const forms=data.formulations||[];
    const categories=[...new Set(forms.map((f)=>f.category))];
    category.insertAdjacentHTML('beforeend',categories.map((name)=>`<option value="${escapeHtml(name)}">${escapeHtml(name)} (${forms.filter((f)=>f.category===name).length})</option>`).join(''));
    catalogue.innerHTML=categories.map((name)=>{const group=forms.filter((f)=>f.category===name);const slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');return `<section class="math-family" id="${slug}" data-family="${escapeHtml(name)}"><div class="math-family-head"><h3>${escapeHtml(name)}</h3><span>${group.length} formulations</span></div><div class="math-family-grid">${group.map((f)=>cardHtml(f,forms.indexOf(f))).join('')}</div></section>`}).join('');
    catalogue.querySelectorAll('[data-copy-formula]').forEach((button)=>button.addEventListener('click',()=>copyEquation(forms.find((f)=>f.id===button.dataset.copyFormula))));
    catalogue.querySelectorAll('[data-edit-formula]').forEach((button)=>button.addEventListener('click',()=>openFormulaEdit(forms.find((f)=>f.id===button.dataset.editFormula))));
    window.MathJax?.typesetPromise?.([catalogue,notationHost]);
  };
  const applyFilters = () => {
    if(!data)return; const q=(search.value||'').trim().toLowerCase(),c=category.value,e=evidence.value; let count=0;
    document.querySelectorAll('[data-formula-card]').forEach((card)=>{const show=(!q||card.dataset.search.includes(q))&&(c==='all'||card.dataset.category===c)&&(e==='all'||card.dataset.evidence===e);card.hidden=!show;if(show)count+=1;});
    document.querySelectorAll('.math-family').forEach((family)=>{family.hidden=![...family.querySelectorAll('[data-formula-card]')].some((card)=>!card.hidden);});
    visible.textContent=String(count); visible.nextElementSibling.textContent=`of ${data.formulations.length} visible`; empty.hidden=count!==0;
  };
  [search,category,evidence].forEach((control)=>control?.addEventListener(control===search?'input':'change',applyFilters));

  const openPageEdit = () => {
    const body='Atlas page: Mathematical Formulations\n\nArea / formulation ID:\n\nProposed correction or addition:\n\nAuthoritative source / DOI / supporting Atlas IDs:\n\nReason for change:\n';
    window.open(issueUrl({title:'Mathematical Formulations: proposed edit',body}),'_blank','noopener');
  };
  document.querySelectorAll('[data-page-edit]').forEach((button)=>button.addEventListener('click',openPageEdit));

  fetch(dataUrl,{cache:'no-store'}).then((response)=>{if(!response.ok)throw new Error(`Formulation data returned ${response.status}`);return response.json();}).then((payload)=>{
    data=payload;
    const integrity=data.integrity||{};
    const statMap={accepted:integrity.accepted_formulations,direct:integrity.direct,equivalent:integrity.equivalent,synthesized:integrity.synthesized,references:integrity.unique_atlas_references_used};
    Object.entries(statMap).forEach(([key,value])=>{document.querySelectorAll(`[data-math-stat="${key}"]`).forEach((node)=>node.textContent=String(value));});
    const generated=document.querySelector('[data-math-generated]'); if(generated&&data.generated){const d=new Date(`${data.generated}T00:00:00Z`);if(!Number.isNaN(d.getTime()))generated.textContent=new Intl.DateTimeFormat('en',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(d);}
    renderNotation();renderCoverage();renderReferences();renderCatalogue();applyFilters();
  }).catch((error)=>{catalogue.innerHTML=`<div class="math-loading">Could not load the formulation catalogue. ${escapeHtml(error.message)}</div>`;notationHost.innerHTML='<div class="math-loading">Notation unavailable.</div>';coverageHost.innerHTML='<div class="math-loading">Coverage audit unavailable.</div>';referenceHost.innerHTML='<div class="math-loading">Evidence register unavailable.</div>';});
})();
