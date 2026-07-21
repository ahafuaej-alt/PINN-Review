(() => {
  const state = { rows: [], query: '', sort: 'id-asc', access: 'all', venue: 'all' };
  const results = document.querySelector('[data-reference-results]');
  const search = document.querySelector('[data-reference-search]');
  const sort = document.querySelector('[data-reference-sort]');
  const access = document.querySelector('[data-reference-access]');
  const venue = document.querySelector('[data-reference-venue]');
  const meta = document.querySelector('[data-reference-meta]');
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));

  const filteredRows = () => {
    const query = state.query.trim().replace(/^\[|\]$/g, '').toLocaleLowerCase('en');
    const isReferenceId = /^\d+$/.test(query);
    return state.rows.filter((row) => (state.access === 'all' || row.access === state.access) && (state.venue === 'all' || row.venue === state.venue) && (!query || (isReferenceId
      ? String(row.id) === query
      : `${row.title} ${row.citation} ${row.doi || ''} ${row.venue || ''} ${row.year || ''} ${row.access || ''}`.toLocaleLowerCase('en').includes(query))))
      .sort((a, b) => {
        if (state.sort === 'id-desc') return b.id - a.id;
        if (state.sort === 'year-desc') return (b.year || 0) - (a.year || 0) || a.id - b.id;
        if (state.sort === 'year-asc') return (a.year || 9999) - (b.year || 9999) || a.id - b.id;
        if (state.sort === 'access') return (a.access || '').localeCompare(b.access || '') || a.id - b.id;
        if (state.sort === 'venue') return (a.venue || '').localeCompare(b.venue || '') || a.id - b.id;
        return a.id - b.id;
      });
  };

  const render = () => {
    const rows = filteredRows();
    results.className = 'bibliography-list';
    results.innerHTML = rows.length ? rows.map((row) => {
      const destination = row.publisher_url;
      const paperId = destination ? `<a class="paper-id" href="${escapeHtml(destination)}" target="_blank" rel="noopener" title="Open DOI or publisher record for paper ${row.id}">[${row.id}]</a>` : `<a class="paper-id unavailable" href="#ref=${row.id}" title="Publisher link not yet verified">[${row.id}]</a>`;
      const publisher = destination ? `<a class="record-link" href="${escapeHtml(destination)}" target="_blank" rel="noopener">${row.doi ? 'DOI' : 'Publisher page'} ↗</a>` : '<span class="record-link unavailable">Link not verified</span>';
      return `<article class="bibliography-card" data-bibliography-id="${row.id}">
        <div>${paperId}</div>
        <div><p class="citation-title">${escapeHtml(row.title)}</p><div class="reference-marks"><span class="record-status venue-mark">${escapeHtml(row.venue || 'Venue not identified')}</span><span class="record-status access-${escapeHtml((row.access || 'not-verified').toLowerCase().replace(/\s+/g, '-'))}">${escapeHtml(row.access || 'Not verified')}</span><span class="record-status year-mark">${escapeHtml(row.year || 'Year not identified')}</span></div><p class="citation-text mdpi-reference">${escapeHtml(row.citation)}</p><div class="record-actions"><a class="record-link" href="#ref=${row.id}">Permalink</a>${publisher}</div></div>
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
    const data = [['Reference', 'Title', 'MDPI citation', 'Journal / conference', 'Year', 'Accessibility', 'DOI / publisher URL'], ...filteredRows().map((row) => [row.id, row.title, row.citation, row.venue, row.year || '', row.access, row.publisher_url || ''])];
    const csv = data.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'pinn-review-references.csv'; link.click(); URL.revokeObjectURL(url);
  };

  search.addEventListener('input', () => { state.query = search.value; history.replaceState(null, '', location.pathname); render(); });
  sort.addEventListener('change', () => { state.sort = sort.value; render(); });
  access.addEventListener('change', () => { state.access = access.value; render(); });
  venue.addEventListener('change', () => { state.venue = venue.value; render(); });
  document.querySelector('[data-reference-export]').addEventListener('click', exportCsv);
  window.addEventListener('hashchange', applyHash);

  fetch('../data/references.json')
    .then((response) => { if (!response.ok) throw new Error(`Reference data returned ${response.status}`); return response.json(); })
    .then((rows) => {
      state.rows = rows;
      const openCount = rows.filter((row) => row.access === 'Open access').length;
      const subscriptionCount = rows.filter((row) => row.access === 'Subscription').length;
      document.querySelector('[data-ref-stat="total"]').textContent = rows.length.toLocaleString();
      document.querySelector('[data-ref-stat="open"]').textContent = openCount.toLocaleString();
      document.querySelector('[data-ref-stat="subscription"]').textContent = subscriptionCount.toLocaleString();
      document.querySelector('[data-ref-stat="range"]').textContent = `${rows[0].id}–${rows[rows.length - 1].id}`;
      [...new Set(rows.map((row) => row.venue).filter(Boolean))].sort((a, b) => a.localeCompare(b)).forEach((name) => { const option = document.createElement('option'); option.value = name; option.textContent = name; venue.append(option); });
      render(); applyHash();
    })
    .catch((error) => { results.className = ''; results.innerHTML = `<p class="evidence-error"><strong>The bibliography could not load.</strong><br>${escapeHtml(error.message)}</p>`; meta.textContent = 'Data unavailable'; });
})();
