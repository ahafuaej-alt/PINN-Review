(() => {
  const sourceUrl = '../data/reference-pinn-abbreviations.txt';
  const state = { rows: [], terms: [], papers: new Map(), view: 'terms', query: '', sort: 'frequency' };
  const $ = (selector) => document.querySelector(selector);
  const results = $('[data-results]');
  const search = $('[data-search]');
  const sort = $('[data-sort]');
  const meta = $('[data-result-meta]');

  const verifiedMeanings = new Map([
    ['PINN', [{ text: 'Physics-informed neural network', refs: [2, 8, 84] }]],
    ['XPINN', [{ text: 'Extended physics-informed neural network', refs: [647, 839] }]],
    ['cPINN', [{ text: 'Conservative physics-informed neural network', refs: [628, 791] }]],
    ['B-PINN', [{ text: 'Bayesian physics-informed neural network', refs: [410] }]],
    ['BPINN', [{ text: 'Bayesian physics-informed neural network', refs: [616, 618] }]],
    ['PIML', [{ text: 'Physics-informed machine learning', refs: [150, 818] }]],
    ['VPINN', [{ text: 'Variational physics-informed neural network', refs: [493, 636, 637] }]],
    ['PPINN', [{ text: 'Parareal physics-informed neural network', refs: [413] }]],
    ['fPINN', [{ text: 'Fractional physics-informed neural network', refs: [470] }]],
    ['hp-VPINN', [{ text: 'hp-variational physics-informed neural network', refs: [493] }]],
    ['PI-LSTM', [{ text: 'Physics-informed long short-term memory network', refs: [557] }]],
    ['SA-PINN', [{ text: 'Self-adaptive physics-informed neural network', refs: [541] }]],
    ['Meta-PINN', [{ text: 'Meta-learning physics-informed neural network', refs: [572, 574, 576, 579] }]],
    ['SPINN', [{ text: 'Soft-constraint physics-informed neural network (meaning used in this paper)', refs: [609] }]],
    ['CPINN', [{ text: 'Coupled physics-informed neural network', refs: [707, 708] }]],
    ['DD-PINN', [
      { text: 'Domain-decoupled physics-informed neural network (meaning used in this paper)', refs: [651] },
      { text: 'Data-driven physics-informed neural network (meaning used in this paper)', refs: [740] }
    ]],
    ['CS-PINN', [{ text: 'Coefficient-subnetwork physics-informed neural network', refs: [609] }]],
    ['E-PINN', [{ text: 'Explicit-time-domain physics-informed neural network', refs: [659] }]],
    ['IPINN', [{ text: 'Improved physics-informed neural network', refs: [489] }]],
    ['HWPINN', [{ text: 'Hard-constraint wide-body physics-informed neural network', refs: [609] }]],
    ['PIKAN', [{ text: 'Physics-informed Kolmogorov–Arnold network', refs: [150] }]],
    ['PINO', [{ text: 'Physics-informed neural operator', refs: [149, 150] }]]
  ]);

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));

  const splitReportedForms = (value) => {
    const parts = [];
    let current = '';
    let depth = 0;
    for (const char of value) {
      if (char === '(') depth += 1;
      if (char === ')') depth = Math.max(0, depth - 1);
      if (depth === 0 && (char === ';' || char === ',')) {
        if (current.trim()) parts.push(current.trim().replace(/\s+/g, ' '));
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim()) parts.push(current.trim().replace(/\s+/g, ' '));
    return parts;
  };

  const parseSource = (text) => text.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*$/);
    return match ? [{ reference: Number(match[1]), terms: splitReportedForms(match[2]) }] : [];
  });

  const buildTerms = (rows) => {
    const index = new Map();
    rows.forEach(({ reference, terms }) => new Set(terms).forEach((term) => {
      if (!index.has(term)) index.set(term, []);
      index.get(term).push(reference);
    }));
    return [...index].map(([name, references]) => ({ name, references: references.sort((a, b) => a - b), count: references.length }));
  };

  const termHash = (term) => `#term=${encodeURIComponent(term)}`;
  const refHash = (reference) => `#ref=${reference}`;
  const normalized = (value) => String(value).toLocaleLowerCase('en');
  const paperFor = (reference) => state.papers.get(Number(reference));
  const paperLink = (reference, className = 'reference-chip', label = `[${reference}]`) => {
    const paper = paperFor(reference);
    const href = paper?.paper_url || `../references/#ref=${reference}`;
    return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noopener" title="Open paper ${reference}">${escapeHtml(label)}</a>`;
  };

  const meaningsFor = (term) => {
    const ownNote = term.name.match(/^(.+?)\s*\((.+)\)$/);
    const key = ownNote ? ownNote[1].trim() : term.name;
    const verified = verifiedMeanings.get(key) || [];
    const supplied = ownNote
      ? [{ text: ownNote[2].trim(), refs: term.references }]
      : [];
    return { verified, supplied };
  };

  const meaningText = (term) => {
    const meanings = meaningsFor(term);
    return [...meanings.verified, ...meanings.supplied].map((item) => item.text).join(' ');
  };

  const meaningHtml = (term) => {
    const meanings = meaningsFor(term);
    const blocks = [
      ...meanings.verified.map((item) => ({ ...item, label: 'Verified meaning' })),
      ...meanings.supplied.map((item) => ({ ...item, label: 'Source-supplied note' }))
    ];
    if (!blocks.length) return '<p class="unverified-meaning">Expansion or meaning not yet verified from the current source record.</p>';
    return blocks.map((item) => `<p class="term-meaning"><strong>${item.label}</strong>${escapeHtml(item.text)} <span class="meaning-evidence">${item.refs.map((ref) => paperLink(ref, 'term-link')).join(' ')}</span></p>`).join('');
  };

  const setStats = () => {
    const links = state.rows.reduce((total, row) => total + row.terms.length, 0);
    const refs = state.rows.map((row) => row.reference);
    $('[data-stat="references"]').textContent = state.rows.length.toLocaleString();
    $('[data-stat="terms"]').textContent = state.terms.length.toLocaleString();
    $('[data-stat="links"]').textContent = links.toLocaleString();
    $('[data-stat="range"]').textContent = `${Math.min(...refs)}–${Math.max(...refs)}`;
  };

  const renderFrequency = () => {
    const top = [...state.terms].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name)).slice(0, 12);
    const maximum = top[0]?.count || 1;
    $('[data-frequency-chart]').innerHTML = top.map((term) => {
      const width = (Math.log1p(term.count) / Math.log1p(maximum)) * 100;
      return `<a class="frequency-row" href="${termHash(term.name)}" title="Open ${escapeHtml(term.name)}">
        <span class="frequency-label">${escapeHtml(term.name)}</span><span class="frequency-track"><span class="frequency-fill" style="width:${width.toFixed(2)}%"></span></span><span class="frequency-count">${term.count}</span>
      </a>`;
    }).join('');
  };

  const filteredTerms = () => {
    const query = normalized(state.query.trim().replace(/^\[|\]$/g, ''));
    const filtered = state.terms.filter((term) => !query || normalized(term.name).includes(query) || normalized(meaningText(term)).includes(query) || term.references.some((ref) => String(ref) === query));
    return filtered.sort((a, b) => {
      if (state.sort === 'alpha') return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      if (state.sort === 'alpha-desc') return b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
      return b.count - a.count || a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
  };

  const filteredRows = () => {
    const query = normalized(state.query.trim().replace(/^\[|\]$/g, ''));
    const filtered = state.rows.filter((row) => !query || String(row.reference) === query || row.terms.some((term) => normalized(term).includes(query)));
    return filtered.sort((a, b) => state.sort === 'alpha-desc' ? b.reference - a.reference : a.reference - b.reference);
  };

  const renderTerms = (terms) => {
    const maximum = Math.max(...state.terms.map((term) => term.count), 1);
    results.className = 'results-grid';
    results.innerHTML = terms.length ? terms.map((term) => {
      const visible = term.references.slice(0, 24);
      const remaining = term.references.length - visible.length;
      const width = (Math.log1p(term.count) / Math.log1p(maximum)) * 100;
      return `<article class="term-card" data-term="${escapeHtml(term.name)}">
        <div class="term-head"><h3><a href="${termHash(term.name)}">${escapeHtml(term.name)}</a></h3><span class="term-count">${term.count} ${term.count === 1 ? 'reference' : 'references'}</span></div>
        <div class="term-bar" aria-hidden="true"><span style="width:${width.toFixed(2)}%"></span></div>
        ${meaningHtml(term)}
        <div class="reference-chips" aria-label="Supporting reference IDs">${visible.map((ref) => paperLink(ref)).join('')}${remaining > 0 ? `<span class="reference-chip more-chip">+${remaining} more</span>` : ''}</div>
      </article>`;
    }).join('') : '<p class="empty-results">No abbreviation or reference ID matches this search.</p>';
    meta.textContent = `${terms.length.toLocaleString()} of ${state.terms.length.toLocaleString()} forms`;
  };

  const renderReferences = (rows) => {
    results.className = 'reference-list';
    results.innerHTML = rows.length ? rows.map((row) => `<article class="reference-row" data-reference="${row.reference}">
      <div>${paperLink(row.reference, 'reference-id', `Reference [${row.reference}]`)}<br><a class="record-link" href="${refHash(row.reference)}">Permalink</a></div>
      <div class="term-links">${row.terms.map((term) => `<a class="term-link" href="${termHash(term)}">${escapeHtml(term)}</a>`).join('<span aria-hidden="true">·</span>')}</div>
    </article>`).join('') : '<p class="empty-results">No reference record matches this search.</p>';
    meta.textContent = `${rows.length.toLocaleString()} of ${state.rows.length.toLocaleString()} references`;
  };

  const render = () => {
    if (state.view === 'terms') renderTerms(filteredTerms());
    else renderReferences(filteredRows());
  };

  const selectView = (view) => {
    state.view = view;
    document.querySelectorAll('[data-view]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.view === view)));
    sort.innerHTML = view === 'terms'
      ? '<option value="frequency">Frequency: high to low</option><option value="alpha">Abbreviation: A–Z</option><option value="alpha-desc">Abbreviation: Z–A</option>'
      : '<option value="alpha">Reference ID: low to high</option><option value="alpha-desc">Reference ID: high to low</option>';
    state.sort = view === 'terms' ? 'frequency' : 'alpha';
    render();
  };

  const applyHash = () => {
    const raw = location.hash.slice(1);
    if (!raw) return;
    const [key, value = ''] = raw.split('=');
    if (key === 'term') {
      selectView('terms');
      state.query = decodeURIComponent(value);
    } else if (key === 'ref' && /^\d+$/.test(value)) {
      selectView('references');
      state.query = value;
    } else return;
    search.value = state.query;
    render();
    requestAnimationFrame(() => {
      const target = key === 'term'
        ? [...document.querySelectorAll('[data-term]')].find((item) => item.dataset.term === state.query)
        : document.querySelector(`[data-reference="${value}"]`);
      target?.classList.add('is-focused');
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const exportCsv = () => {
    const isTerms = state.view === 'terms';
    const rows = isTerms
      ? [['Abbreviation', 'Verified meaning or source note', 'Reference count', 'Reference IDs'], ...filteredTerms().map((term) => [term.name, meaningText(term), term.count, term.references.map((ref) => `[${ref}]`).join(' ')])]
      : [['Reference', 'Abbreviations'], ...filteredRows().map((row) => [row.reference, row.terms.join('; ')])];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `pinn-${isTerms ? 'abbreviations' : 'reference-register'}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  document.querySelectorAll('[data-view]').forEach((tab) => tab.addEventListener('click', () => selectView(tab.dataset.view)));
  search.addEventListener('input', () => { state.query = search.value; history.replaceState(null, '', location.pathname); render(); });
  sort.addEventListener('change', () => { state.sort = sort.value; render(); });
  $('[data-export]').addEventListener('click', exportCsv);
  window.addEventListener('hashchange', applyHash);

  Promise.all([
    fetch(sourceUrl).then((response) => { if (!response.ok) throw new Error(`Source file returned ${response.status}`); return response.text(); }),
    fetch('../data/references.json').then((response) => { if (!response.ok) throw new Error(`Reference links returned ${response.status}`); return response.json(); })
  ])
    .then(([text, papers]) => {
      state.papers = new Map(papers.map((paper) => [paper.id, paper]));
      state.rows = parseSource(text);
      state.terms = buildTerms(state.rows);
      setStats();
      renderFrequency();
      render();
      applyHash();
    })
    .catch((error) => {
      results.className = '';
      results.innerHTML = `<p class="evidence-error"><strong>The interactive index could not load.</strong><br>${escapeHtml(error.message)}. The <a href="${sourceUrl}">source TXT remains available here</a>.</p>`;
      $('[data-frequency-chart]').innerHTML = '<p class="evidence-error">Frequency data unavailable.</p>';
      meta.textContent = 'Source unavailable';
    });
})();
