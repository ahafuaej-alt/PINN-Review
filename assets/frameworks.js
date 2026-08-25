(() => {
  const root = document.body.dataset.framework;
  const prefix = root === 'landing' ? '../' : '../../';
  const escapeHtml = (value='') => String(value).replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const conceptUrl = (route) => `${prefix}${route}`;
  const paperUrl = (id) => `${prefix}references/#ref=${id}`;

  fetch(`${prefix}data/frameworks/frameworks.json`).then((response) => {
    if (!response.ok) throw new Error(`Framework data request failed: ${response.status}`);
    return response.json();
  }).then((data) => root === 'landing' ? renderLanding(data) : renderPage(data)).catch((error) => {
    const mount = document.querySelector('[data-framework-page], [data-framework-cards]');
    if (mount) mount.innerHTML = `<p class="framework-empty">The framework data could not be loaded. ${escapeHtml(error.message)}</p>`;
  });

  function renderLanding(data) {
    const mount = document.querySelector('[data-framework-cards]');
    mount.innerHTML = data.frameworks.map((item) => `<a class="framework-card" href="${item.route}"><span class="number">${item.number} · ${escapeHtml(item.short).toUpperCase()}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description)}</p><footer><span>${escapeHtml(item.kind)}</span><b aria-hidden="true">↗</b></footer></a>`).join('');
  }

  function renderPage(data) {
    const page = data.pages[root];
    if (!page) throw new Error('Unknown framework.');
    const mount = document.querySelector('[data-framework-page]');
    mount.innerHTML = `<section class="framework-page-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${prefix}">Home</a><span>/</span><a href="${prefix}frameworks/">Frameworks</a><span>/</span><span>${escapeHtml(page.title)}</span></nav><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.title)}</h1><p class="lede">${escapeHtml(page.description)}</p></div></section>
      <div class="framework-toolbar"><div class="container framework-toolbar-inner"><input class="framework-search" type="search" placeholder="Search this framework…" aria-label="Search this framework"><button class="button" type="button" data-fit>Fit view</button><button class="button" type="button" data-share>Copy shareable link</button><button class="button" type="button" data-svg>Download current SVG</button><a class="button" href="${issueUrl('Suggest an edit', page.title)}" target="_blank" rel="noopener">Suggest an edit ↗</a><a class="button" href="${issueUrl('Propose a missing relationship', page.title)}" target="_blank" rel="noopener">Missing relationship ↗</a></div></div>
      <section class="section"><div class="container"><div class="framework-workspace"><div class="framework-canvas" data-canvas>${renderVisual(page)}</div><aside class="framework-detail" data-detail><p class="eyebrow">Inspect an element</p><h2>Choose an item</h2><p>Select a node or row to inspect its scientific role, supporting Atlas paper IDs, and canonical cross-links.</p></aside></div><div class="framework-interpretation"><strong>Scientific interpretation &amp; scope</strong><p>${escapeHtml(page.interpretation)}</p></div></div></section>
      <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Semantic cross-linking</p><h2>Continue through<br>the Atlas</h2></div><p>Framework items reuse canonical Atlas concepts rather than creating independent definitions.</p></div><div class="framework-related"><a href="${prefix}pinn-ecosystem/"><small>DESIGN SYSTEM</small><strong>PINN Ecosystem</strong></a><a href="${prefix}mathematical-formulations/"><small>MATHEMATICS</small><strong>Mathematical Formulations</strong></a><a href="${prefix}performance-metrics/"><small>EVALUATION</small><strong>Performance Metrics</strong></a></div></div></section>`;
    bind(page);
  }

  function renderVisual(page) {
    if (page.rows) return `<div class="matrix-wrap"><table class="dependency-matrix"><thead><tr><th>Design decision</th>${page.columns.map((c)=>`<th>${escapeHtml(c)}</th>`).join('')}</tr></thead><tbody>${page.rows.map((row,i)=>`<tr><td tabindex="0" data-item="${i}"><strong>${escapeHtml(row.title)}</strong></td>${row.values.map((v)=>`<td data-strength="${v}" title="${['','Context-dependent','Strong relationship','Direct / high dependency'][v]}">${['','○','◐','●'][v]}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="framework-caveat"><strong>Legend:</strong> ○ context-dependent · ◐ strong relationship · ● direct / high dependency</p></div>`;
    if (root === 'failure-diagnostics') return `<div class="diagnostic-grid">${page.groups.map((g,i)=>`<button class="diagnostic-row" type="button" data-item="${i}"><strong>${escapeHtml(g.title)}</strong><p>${escapeHtml(g.summary)}</p><span>Inspect →</span></button>`).join('')}</div>`;
    return `<div class="framework-node-grid">${page.groups.map((g,i)=>`<button class="framework-node" type="button" data-item="${i}"><small>${String(i+1).padStart(2,'0')} · ${root === 'co-design' ? 'CO-DESIGN DOMAIN' : 'DESIGN STAGE'}</small><strong>${escapeHtml(g.title)}</strong><span>${escapeHtml(g.summary)}</span></button>`).join('')}</div>`;
  }

  function bind(page) {
    const items = page.rows || page.groups;
    const nodes = [...document.querySelectorAll('[data-item]')];
    const search = document.querySelector('.framework-search');
    nodes.forEach((node) => {
      const select = () => showDetail(items[Number(node.dataset.item)], node);
      node.addEventListener('click', select);
      node.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') select(); });
    });
    search.addEventListener('input', () => {
      const query = search.value.toLowerCase().trim();
      nodes.forEach((node) => { const item = items[Number(node.dataset.item)]; node.closest('tr') ? node.closest('tr').hidden = !`${item.title} ${item.summary||''}`.toLowerCase().includes(query) : node.hidden = !`${item.title} ${item.summary||''}`.toLowerCase().includes(query); });
    });
    document.querySelector('[data-fit]').addEventListener('click', () => { search.value=''; search.dispatchEvent(new Event('input')); document.querySelector('[data-canvas]').scrollTo({top:0,left:0,behavior:'smooth'}); });
    document.querySelector('[data-share]').addEventListener('click', async () => { await navigator.clipboard.writeText(location.href); flash('Link copied'); });
    document.querySelector('[data-svg]').addEventListener('click', () => downloadSvg(page, items));
  }

  function showDetail(item, node) {
    document.querySelectorAll('[data-item]').forEach((entry)=>entry.classList.remove('is-active'));
    node.classList.add('is-active');
    const detail = document.querySelector('[data-detail]');
    detail.innerHTML = `<p class="eyebrow">Selected framework element</p><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.summary || 'Qualitative dependency profile across the six performance dimensions.')}</p><h3>Supporting paper IDs</h3><div class="paper-pills">${(item.papers||[]).map((id)=>`<a href="${paperUrl(id)}">[${id}]</a>`).join('')}</div><h3>Canonical Atlas concept</h3><div class="framework-detail-links"><a class="button primary" href="${conceptUrl(item.concept)}">Open canonical entry →</a><a class="button" href="${issueUrl('Suggest a framework correction', item.title)}" target="_blank" rel="noopener">Suggest correction ↗</a></div>`;
    history.replaceState(null,'',`#item=${encodeURIComponent(item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-'))}`);
  }

  function issueUrl(type, context) {
    const title = `[Frameworks] ${type}: ${context}`;
    const body = `Framework: ${context}\n\nRequested change:\n\nScientific rationale:\n\nSupporting DOI, URL, or Atlas paper IDs:`;
    return `https://github.com/ahafuaej-alt/PINN-Review/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }

  function downloadSvg(page, items) {
    const width=1600, row=110, height=Math.max(900,items.length*row+180);
    const blocks=items.map((item,i)=>`<g transform="translate(110 ${110+i*row})"><rect width="1380" height="82" rx="18" fill="#111c2d" stroke="#75e7cf"/><text x="28" y="34" fill="#f5f7fb" font-family="Arial" font-size="24" font-weight="700">${escapeHtml(item.title)}</text><text x="28" y="62" fill="#a9b4c8" font-family="Arial" font-size="17">${escapeHtml((item.summary||'Qualitative design–performance dependency').slice(0,130))}</text></g>`).join('');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#09111d"/><text x="110" y="66" fill="#f5f7fb" font-family="Arial" font-size="34" font-weight="700">${escapeHtml(page.title)}</text>${blocks}<text x="110" y="${height-45}" fill="#75e7cf" font-family="Arial" font-size="16">PINN Review Atlas · live framework export</text></svg>`;
    const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));link.download=`${root}.svg`;link.click();URL.revokeObjectURL(link.href);flash('SVG prepared');
  }

  function flash(message) {
    let toast=document.querySelector('.framework-toast');if(!toast){toast=document.createElement('div');toast.className='framework-toast';toast.style.cssText='position:fixed;right:1rem;bottom:1rem;z-index:30;padding:.75rem 1rem;border-radius:.7rem;background:var(--ink);color:var(--paper)';document.body.append(toast);}toast.textContent=message;clearTimeout(toast.timer);toast.timer=setTimeout(()=>toast.remove(),1800);
  }
})();
