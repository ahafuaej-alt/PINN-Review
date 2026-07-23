const REPORT_URL = '../../data/publisher-enrichment-review.json';
const PAGE_SIZE = 40;

const elements = {
  stats: document.querySelector('#review-stats'),
  search: document.querySelector('#review-search'),
  status: document.querySelector('#review-status'),
  field: document.querySelector('#review-field'),
  arxiv: document.querySelector('#review-arxiv'),
  count: document.querySelector('#review-count'),
  results: document.querySelector('#review-results'),
  loadMore: document.querySelector('#load-more')
};

let report = null;
let visible = PAGE_SIZE;

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const displayValue = (value) => {
  if (value === null || value === undefined || value === '') return 'Not available';
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  return String(value);
};

const safeUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
};

const queryState = () => {
  const params = new URLSearchParams(location.search);
  return {
    q: params.get('q') || '',
    status: params.get('status') || '',
    field: params.get('field') || '',
    arxiv: params.get('arxiv') || ''
  };
};

const updateUrl = () => {
  const params = new URLSearchParams();
  if (elements.search.value.trim()) params.set('q', elements.search.value.trim());
  if (elements.status.value) params.set('status', elements.status.value);
  if (elements.field.value) params.set('field', elements.field.value);
  if (elements.arxiv.value) params.set('arxiv', elements.arxiv.value);
  history.replaceState(null, '', `${location.pathname}${params.size ? `?${params}` : ''}`);
};

const addOptions = (select, values) => {
  for (const value of values) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value.replaceAll('_', ' ');
    select.append(option);
  }
};

const stat = (value, label) => `<div class="review-stat"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`;

const renderStats = () => {
  const summary = report.summary;
  const graphicalAbstractChanges = report.graphical_abstract_invariant?.unchanged
    ? 0
    : Math.abs(
      (report.graphical_abstract_invariant?.after || 0)
      - (report.graphical_abstract_invariant?.before || 0)
    );
  elements.stats.innerHTML = [
    stat(report.dataset_version_after, 'Dataset version'),
    stat(summary.eligible, 'Records checked'),
    stat(summary.enriched, 'Records enriched'),
    stat(summary.with_conflicts, 'Records with findings'),
    stat(summary.failed, 'Failed lookups'),
    stat(summary.journal_versions_found, 'Published versions found'),
    stat(summary.arxiv_only, 'arXiv-only records'),
    stat(graphicalAbstractChanges, 'Graphical abstracts modified')
  ].join('');
};

const matches = (record) => {
  const query = elements.search.value.trim().toLocaleLowerCase('en');
  if (elements.status.value && record.status !== elements.status.value) return false;
  if (elements.field.value && !(record.conflicts || []).some((item) => item.field === elements.field.value)) return false;
  if (elements.arxiv.value === 'published' && !record.journal_version) return false;
  if (elements.arxiv.value === 'preprint' && (!record.arxiv || record.journal_version)) return false;
  if (!query) return true;
  const searchable = [
    record.id,
    record.title,
    record.doi,
    record.evidence_url,
    record.source,
    ...(record.fields_added || []),
    ...(record.conflicts || []).flatMap((item) => [item.field, displayValue(item.current), displayValue(item.proposed)])
  ].join(' ').toLocaleLowerCase('en');
  return searchable.includes(query);
};

const findingMarkup = (finding, index) => `
  <details>
    <summary>${escapeHtml(finding.field)} — ${escapeHtml(finding.reason)}</summary>
    <div class="comparison">
      <section><h3>Current Atlas value</h3><pre>${escapeHtml(displayValue(finding.current))}</pre></section>
      <section><h3>Publisher / DOI proposal</h3><pre>${escapeHtml(displayValue(finding.proposed))}</pre></section>
    </div>
  </details>
`;

const cardMarkup = (record) => {
  const evidence = safeUrl(record.evidence_url);
  const warnings = (record.warnings || []).map((warning) => `<li>${escapeHtml(warning)}</li>`).join('');
  const findings = (record.conflicts || []).map(findingMarkup).join('');
  const added = (record.fields_added || []).map((field) => `<span class="review-badge">${escapeHtml(field)}</span>`).join('');
  return `
    <article class="review-card" id="review-${record.id}">
      <header>
        <h2>[${record.id}] ${escapeHtml(record.title)}</h2>
        <span class="review-badge ${escapeHtml(record.status)}">${escapeHtml(record.status)}</span>
      </header>
      <div class="review-badges">${added || '<span class="review-badge">No fields applied</span>'}</div>
      ${warnings ? `<details><summary>Lookup notes</summary><ul>${warnings}</ul></details>` : ''}
      ${findings || '<p>No conflicting existing values were found.</p>'}
      <div class="review-actions">
        <a href="../?id=${record.id}">Review paper ${record.id} in Dataset Manager</a>
        ${evidence ? `<a href="${escapeHtml(evidence)}" target="_blank" rel="noopener">Open evidence</a>` : ''}
      </div>
    </article>
  `;
};

const render = () => {
  updateUrl();
  const filtered = report.records.filter(matches).sort((left, right) => left.id - right.id);
  const shown = filtered.slice(0, visible);
  elements.count.textContent = `${filtered.length.toLocaleString()} matching records; showing ${shown.length.toLocaleString()}.`;
  elements.results.innerHTML = shown.length
    ? shown.map(cardMarkup).join('')
    : '<div class="empty-state"><h2>No matching records</h2><p>Change or clear the filters to continue.</p></div>';
  elements.loadMore.hidden = shown.length >= filtered.length;
};

const initialize = async () => {
  const response = await fetch(REPORT_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Review report returned ${response.status}`);
  report = await response.json();
  const statuses = [...new Set(report.records.map((record) => record.status))].sort();
  const fields = [...new Set(report.records.flatMap((record) => (record.conflicts || []).map((item) => item.field)))].sort();
  addOptions(elements.status, statuses);
  addOptions(elements.field, fields);
  const state = queryState();
  elements.search.value = state.q;
  elements.status.value = statuses.includes(state.status) ? state.status : '';
  elements.field.value = fields.includes(state.field) ? state.field : '';
  elements.arxiv.value = ['published', 'preprint'].includes(state.arxiv) ? state.arxiv : '';
  renderStats();
  render();
};

for (const element of [elements.search, elements.status, elements.field, elements.arxiv]) {
  element.addEventListener(element === elements.search ? 'input' : 'change', () => {
    visible = PAGE_SIZE;
    render();
  });
}
elements.loadMore.addEventListener('click', () => {
  visible += PAGE_SIZE;
  render();
});

initialize().catch((error) => {
  elements.results.innerHTML = `<div class="empty-state"><h2>Review report unavailable</h2><p>${escapeHtml(error.message)}</p></div>`;
});
