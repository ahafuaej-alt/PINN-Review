(() => {
  const state = { rows: [], query: '', sort: 'asc' };
  const results = document.querySelector('[data-reference-results]');
  const search = document.querySelector('[data-reference-search]');
  const sort = document.querySelector('[data-reference-sort]');
  const meta = document.querySelector('[data-reference-meta]');
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));

  const filteredRows = () => {
    const query = state.query.trim().replace(/^\[|\]$/g, '').toLocaleLowerCase('en');
    const isReferenceId = /^\d+$/.test(query);
    return state.rows.filter((row) => !query || (isReferenceId
      ? String(row.id) === query
      : `${row.title} ${row.citation} ${row.doi || ''}`.toLocaleLowerCase('en').includes(query)))
      .sort((a, b) => state.sort === 'desc' ? b.id - a.id : a.id - b.id);
  };

  const render = () => {
    const rows = filteredRows();
    results.className = 'bibliography-list';
    results.innerHTML = rows.length ? rows.map((row) => {
      const publisher = row.publisher_url && row.publisher_url !== row.paper_url ? `<a class="record-link" href="${escapeHtml(row.publisher_url)}" target="_blank" rel="noopener">DOI / publisher ↗</a>` : '';
      return `<article class="bibliography-card" data-bibliography-id="${row.id}">
        <div><a class="paper-id" href="${escapeHtml(row.paper_url)}" target="_blank" rel="noopener" title="Open paper ${row.id}">[${row.id}]</a></div>
        <div><p class="citation-title">${escapeHtml(row.title)}</p><p class="citation-text">${escapeHtml(row.citation)}</p><div class="record-actions"><span class="record-status ${row.in_drive ? 'drive' : ''}">${row.in_drive ? 'Drive paper' : 'Publisher record'}</span><a class="record-link" href="#ref=${row.id}">Permalink</a>${publisher}</div></div>
      </article>`;
    }).join('') : '<p class="empty-results">No bibliographic record matches this search.</p>';
    meta.textContent = `${rows.length.toLocaleString()} of ${state.rows.length.toLocaleString()} references`;
  };

  const applyHash = () => {
    const match = location.hash.match(/^#ref=(\d+)$/);
    if (!match) return;
    state.query = match[1];
    search.value = state.query;
    render();
    requestAnimationFrame(() => {
      const target = document.querySelector(`[data-bibliography-id="${match[1]}"]`);
      target?.classList.add('is-focused');
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const exportCsv = () => {
    const data = [['Reference', 'Title', 'Citation', 'Paper URL', 'Publisher URL'], ...filteredRows().map((row) => [row.id, row.title, row.citation, row.paper_url, row.publisher_url || ''])];
    const csv = data.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'pinn-review-references.csv'; link.click(); URL.revokeObjectURL(url);
  };

  search.addEventListener('input', () => { state.query = search.value; history.replaceState(null, '', location.pathname); render(); });
  sort.addEventListener('change', () => { state.sort = sort.value; render(); });
  document.querySelector('[data-reference-export]').addEventListener('click', exportCsv);
  window.addEventListener('hashchange', applyHash);

  fetch('../data/references.json')
    .then((response) => { if (!response.ok) throw new Error(`Reference data returned ${response.status}`); return response.json(); })
    .then((rows) => {
      state.rows = rows;
      const driveCount = rows.filter((row) => row.in_drive).length;
      document.querySelector('[data-ref-stat="total"]').textContent = rows.length.toLocaleString();
      document.querySelector('[data-ref-stat="drive"]').textContent = driveCount.toLocaleString();
      document.querySelector('[data-ref-stat="publisher"]').textContent = (rows.length - driveCount).toLocaleString();
      document.querySelector('[data-ref-stat="range"]').textContent = `${rows[0].id}–${rows[rows.length - 1].id}`;
      render(); applyHash();
    })
    .catch((error) => { results.className = ''; results.innerHTML = `<p class="evidence-error"><strong>The bibliography could not load.</strong><br>${escapeHtml(error.message)}</p>`; meta.textContent = 'Data unavailable'; });
})();
