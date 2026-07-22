(() => {
  'use strict';

  const DATA_URL = '../data/pinn-realm.json';
  const MAP_URL = '../data/world-map.json?v=realm-map-20260722a';
  const REFERENCES_ROUTE = '../references/';
  const DEFAULTS = { mode: 'countries', year: 'all', metric: 'volume', country: '', query: '' };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)');

  const state = {
    ...DEFAULTS,
    data: null,
    map: null,
    hover: '',
    playing: false,
    playTimer: null,
    searchOpen: false,
    searchIndex: -1
  };

  const elements = {
    map: document.querySelector('[data-realm-map]'),
    legend: document.querySelector('[data-realm-legend]'),
    details: document.querySelector('[data-realm-details]'),
    tooltip: document.querySelector('[data-realm-tooltip]'),
    referenceTooltip: document.querySelector('[data-reference-title-tooltip]'),
    status: document.querySelector('[data-realm-status]'),
    empty: document.querySelector('[data-realm-empty]'),
    year: document.querySelector('[data-realm-year]'),
    play: document.querySelector('[data-year-play]'),
    search: document.querySelector('[data-realm-search]'),
    clearSearch: document.querySelector('[data-realm-clear-search]'),
    searchResults: document.querySelector('[data-realm-search-results]'),
    metricControl: document.querySelector('[data-metric-control]'),
    mapTitle: document.querySelector('[data-map-title]'),
    mapCaption: document.querySelector('[data-map-caption]'),
    methodology: document.querySelector('[data-methodology-dialog]')
  };

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
  const normalize = (value) => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const number = (value) => Number(value || 0).toLocaleString();
  const percentage = (numerator, denominator) => denominator ? `${(numerator / denominator * 100).toFixed(1)}%` : '0.0%';
  const referenceUrl = (id) => `${REFERENCES_ROUTE}?q=${encodeURIComponent(id)}#ref=${encodeURIComponent(id)}`;
  const yearMatches = (paper) => state.year === 'all' || String(paper.year) === String(state.year);
  const paperIdsForYear = (ids) => ids.filter((id) => yearMatches(index.paperById.get(id)));
  const activePapers = () => state.data.papers.filter(yearMatches);
  const papersInYear = (year) => state.data.papers.filter((paper) => Number(paper.year) === Number(year));
  const chartYears = () => state.year === 'all' ? state.data.metadata.years : [Number(state.year)];
  const mapCountryName = (mapId) => index.countryByMapId.get(mapId)?.name || index.mapById.get(mapId)?.name || 'Country not identified';

  const index = {
    paperById: new Map(),
    countryByIso3: new Map(),
    countryByMapId: new Map(),
    mapById: new Map(),
    pathByMapId: new Map(),
    anchorByMapId: new Map()
  };

  const selectedMapId = () => state.hover || state.country;
  const sourceCountry = (mapId) => index.countryByMapId.get(mapId);

  const countryStats = (mapId) => {
    const country = sourceCountry(mapId);
    if (!country) return { name: mapCountryName(mapId), total: 0, national: 0, international: 0, ids: [], nationalIds: [], internationalIds: [] };
    const ids = paperIdsForYear(country.paper_ids);
    const nationalIds = paperIdsForYear(country.national_paper_ids);
    const internationalIds = paperIdsForYear(country.international_paper_ids);
    return { name: country.name, total: ids.length, national: nationalIds.length, international: internationalIds.length, ids, nationalIds, internationalIds };
  };

  const collaborationPartners = (mapId) => {
    const country = sourceCountry(mapId);
    if (!country) return [];
    const focalCount = countryStats(mapId).total;
    return state.data.collaborations.flatMap((pair) => {
      if (pair.a !== country.iso3 && pair.b !== country.iso3) return [];
      const jointIds = paperIdsForYear(pair.paper_ids);
      if (!jointIds.length) return [];
      const partnerIso3 = pair.a === country.iso3 ? pair.b : pair.a;
      const partner = index.countryByIso3.get(partnerIso3);
      if (!partner) return [];
      const partnerCount = countryStats(partner.map_id).total;
      const denominator = focalCount + partnerCount - jointIds.length;
      return [{
        country: partner,
        jointIds,
        volume: jointIds.length,
        intensity: denominator > 0 ? jointIds.length / denominator : 0
      }];
    }).sort((left, right) => right[state.metric] - left[state.metric] || right.volume - left.volume || left.country.name.localeCompare(right.country.name));
  };

  const collaborationMetricLabel = (partner) => state.metric === 'intensity' ? partner.intensity.toFixed(3) : number(partner.volume);

  const readUrl = () => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    const metric = params.get('metric');
    const year = params.get('year');
    const country = params.get('country');
    state.mode = mode === 'cooperation' ? 'cooperation' : 'countries';
    state.metric = metric === 'intensity' ? 'intensity' : 'volume';
    state.year = year && state.data?.metadata.years.map(String).includes(year) ? year : 'all';
    state.country = country && index.mapById.has(country) ? country : '';
    state.query = params.get('q') || '';
    state.hover = '';
  };

  const buildUrl = () => {
    const params = new URLSearchParams();
    if (state.mode !== DEFAULTS.mode) params.set('mode', state.mode);
    if (state.year !== DEFAULTS.year) params.set('year', state.year);
    if (state.metric !== DEFAULTS.metric) params.set('metric', state.metric);
    if (state.country) params.set('country', state.country);
    if (state.query) params.set('q', state.query);
    const query = params.toString();
    return `${location.pathname}${query ? `?${query}` : ''}`;
  };

  const writeUrl = (push = true) => history[push ? 'pushState' : 'replaceState']({ pinnRealm: true }, '', buildUrl());

  const stopPlayback = () => {
    if (state.playTimer) clearInterval(state.playTimer);
    state.playTimer = null;
    state.playing = false;
    if (elements.play) {
      elements.play.setAttribute('aria-pressed', 'false');
      elements.play.innerHTML = '<span aria-hidden="true">▶</span> Play';
    }
  };

  const setYear = (year, { push = true } = {}) => {
    stopPlayback();
    state.year = year;
    writeUrl(push);
    renderAll();
  };

  const yearOptions = () => ['all', ...state.data.metadata.years.map(String)];
  const stepYear = (direction, { fromPlayback = false } = {}) => {
    const options = yearOptions();
    let position = options.indexOf(String(state.year));
    if (position < 0) position = 0;
    const next = Math.max(0, Math.min(options.length - 1, position + direction));
    if (fromPlayback && next === position) {
      stopPlayback();
      return false;
    }
    state.year = options[next];
    writeUrl(false);
    renderAll();
    return true;
  };

  const togglePlayback = () => {
    if (state.playing) {
      stopPlayback();
      return;
    }
    if (state.year === 'all' || state.year === String(state.data.metadata.years.at(-1))) state.year = String(state.data.metadata.years[0]);
    state.playing = true;
    elements.play.setAttribute('aria-pressed', 'true');
    elements.play.innerHTML = '<span aria-hidden="true">Ⅱ</span> Pause';
    writeUrl(false);
    renderAll();
    state.playTimer = setInterval(() => stepYear(1, { fromPlayback: true }), reducedMotion ? 2200 : 1400);
  };

  const setSelection = (mapId, { push = true } = {}) => {
    state.country = mapId || '';
    state.hover = '';
    writeUrl(push);
    renderAll();
  };

  const clearSelection = ({ push = true } = {}) => setSelection('', { push });

  const fillBucket = (count, maximum) => count <= 0 || maximum <= 0 ? 0 : Math.min(5, Math.max(1, Math.ceil(count / maximum * 5)));

  // Collaboration lines must start on the main landmass, not the bounding-box
  // centre of every disconnected territory. The latter places France between
  // Europe and French Guiana and Russia between Eurasia and its antimeridian
  // islands. Natural Earth paths use one M…Z subpath per landmass, so the
  // largest subpath is a stable geographic anchor for this map scale.
  const mainLandmassAnchor = (pathData) => {
    const pointMarker = String(pathData || '').match(/^M(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)[ma]/);
    if (pointMarker) return { x: Number(pointMarker[1]), y: Number(pointMarker[2]) };
    const subpaths = String(pathData || '').match(/M[^M]+/g) || [];
    let best = null;
    subpaths.forEach((subpath) => {
      const coordinates = [...subpath.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
      if (coordinates.length < 4 || coordinates.length % 2) return;
      const xs = [];
      const ys = [];
      for (let position = 0; position < coordinates.length; position += 2) {
        xs.push(coordinates[position]);
        ys.push(coordinates[position + 1]);
      }
      const minimumX = Math.min(...xs);
      const maximumX = Math.max(...xs);
      const minimumY = Math.min(...ys);
      const maximumY = Math.max(...ys);
      const area = (maximumX - minimumX) * (maximumY - minimumY);
      if (!best || area > best.area) best = { area, x: (minimumX + maximumX) / 2, y: (minimumY + maximumY) / 2 };
    });
    return best ? { x: best.x, y: best.y } : null;
  };

  const pathCenter = (mapId) => index.anchorByMapId.get(mapId) || null;

  const connectionPath = (from, to) => {
    const distance = Math.hypot(to.x - from.x, to.y - from.y);
    if (!distance) return '';
    const midpoint = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
    const bend = Math.min(82, Math.max(9, distance * .16));
    const firstNormal = { x: -(to.y - from.y) / distance, y: (to.x - from.x) / distance };
    const secondNormal = { x: -firstNormal.x, y: -firstNormal.y };
    const normal = firstNormal.y <= secondNormal.y ? firstNormal : secondNormal;
    const control = { x: midpoint.x + normal.x * bend, y: midpoint.y + normal.y * bend };
    return `M${from.x.toFixed(2)},${from.y.toFixed(2)} Q${control.x.toFixed(2)},${control.y.toFixed(2)} ${to.x.toFixed(2)},${to.y.toFixed(2)}`;
  };

  const renderConnections = (mapId, partners) => {
    const group = elements.map.querySelector('[data-collaboration-lines]');
    if (!group) return;
    group.innerHTML = '';
    if (!mapId || !partners.length) return;
    const from = pathCenter(mapId);
    if (!from) return;
    const maximum = Math.max(...partners.map((partner) => partner[state.metric]), 0);
    partners.forEach((partner) => {
      const to = pathCenter(partner.country.map_id);
      if (!to) return;
      const ratio = maximum ? partner[state.metric] / maximum : 0;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      line.setAttribute('class', 'collaboration-line');
      line.setAttribute('d', connectionPath(from, to));
      line.setAttribute('stroke-width', String(1.1 + ratio * 4.4));
      line.dataset.fromMapId = mapId;
      line.dataset.toMapId = partner.country.map_id;
      line.setAttribute('aria-hidden', 'true');
      group.append(line);
    });
    const focalMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    focalMarker.setAttribute('class', 'collaboration-endpoint focal');
    focalMarker.setAttribute('cx', from.x.toFixed(2));
    focalMarker.setAttribute('cy', from.y.toFixed(2));
    focalMarker.setAttribute('r', '3.6');
    focalMarker.setAttribute('aria-hidden', 'true');
    group.append(focalMarker);
  };

  const countLegend = (maximum, label) => {
    const items = ['<span class="legend-item"><span class="legend-swatch pattern"></span>0 papers</span>'];
    for (let bucket = 1; bucket <= Math.min(5, maximum); bucket += 1) {
      const from = Math.floor((bucket - 1) * maximum / Math.min(5, maximum)) + 1;
      const to = Math.floor(bucket * maximum / Math.min(5, maximum));
      const range = from === to ? String(from) : `${from}–${to}`;
      items.push(`<span class="legend-item"><span class="legend-swatch" style="--legend-color:var(--realm-${bucket})"></span>${range}</span>`);
    }
    elements.legend.innerHTML = `<strong class="legend-title">${escapeHtml(label)}</strong>${items.join('')}`;
  };

  const renderLegend = (focalId, partners, maximum) => {
    if (state.mode === 'countries') {
      countLegend(maximum, 'Unique papers');
      return;
    }
    if (!focalId) {
      countLegend(maximum, 'International papers · select a country to reveal links');
      return;
    }
    const metricName = state.metric === 'intensity' ? 'Jaccard intensity' : 'Joint-paper volume';
    if (!partners.length) {
      elements.legend.innerHTML = `<strong class="legend-title">${metricName}</strong><span class="legend-item"><span class="legend-swatch focal"></span>Focal country</span><span class="legend-item">No active partners</span>`;
      return;
    }
    const values = partners.map((partner) => partner[state.metric]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const format = (value) => state.metric === 'intensity' ? value.toFixed(3) : number(value);
    elements.legend.innerHTML = `<strong class="legend-title">${metricName}</strong><span class="legend-item"><span class="legend-swatch focal"></span>Focal country</span><span class="legend-item"><span class="legend-swatch" style="--legend-color:var(--realm-2)"></span>Partner</span><span class="legend-item"><span class="legend-line" style="--legend-width:1.5px"></span>${format(min)}</span><span class="legend-item"><span class="legend-line" style="--legend-width:5px"></span>${format(max)}</span><span class="legend-item">Muted: no shared papers</span>`;
  };

  const renderMap = () => {
    const focalId = selectedMapId();
    const partners = state.mode === 'cooperation' && focalId ? collaborationPartners(focalId) : [];
    const partnerByMapId = new Map(partners.map((partner) => [partner.country.map_id, partner]));
    let counts;
    if (state.mode === 'countries') counts = new Map(state.data.countries.map((country) => [country.map_id, countryStats(country.map_id).total]));
    else counts = new Map(state.data.countries.map((country) => [country.map_id, countryStats(country.map_id).international]));
    const maximum = Math.max(0, ...counts.values());
    const partnerMaximum = Math.max(0, ...partners.map((partner) => partner[state.metric]));

    index.pathByMapId.forEach((path, mapId) => {
      path.classList.toggle('is-hovered', state.hover === mapId);
      path.removeAttribute('data-realm-state');
      path.removeAttribute('data-partner-bucket');
      const count = counts.get(mapId) || 0;
      path.dataset.bucket = String(fillBucket(count, maximum));
      if (state.mode === 'cooperation' && focalId) {
        if (mapId === focalId) path.dataset.realmState = 'focal';
        else if (partnerByMapId.has(mapId)) {
          path.dataset.realmState = 'partner';
          path.dataset.partnerBucket = String(Math.max(2, fillBucket(partnerByMapId.get(mapId)[state.metric], partnerMaximum)));
        } else path.dataset.realmState = 'muted';
      }
      const stats = countryStats(mapId);
      path.setAttribute('aria-label', state.mode === 'countries'
        ? `${stats.name}: ${stats.total} papers, ${stats.national} national and ${stats.international} international`
        : `${stats.name}: ${stats.international} international papers and ${collaborationPartners(mapId).length} partner countries`);
    });

    renderConnections(state.mode === 'cooperation' ? focalId : '', partners);
    renderLegend(focalId, partners, maximum);
  };

  const renderStats = () => {
    const papers = activePapers();
    const activeCountries = state.data.countries.filter((country) => countryStats(country.map_id).total > 0).length;
    const international = papers.filter((paper) => paper.countries.length >= 2).length;
    const pairs = state.data.collaborations.filter((pair) => paperIdsForYear(pair.paper_ids).length > 0).length;
    const values = { papers: papers.length, countries: activeCountries, international, pairs };
    Object.entries(values).forEach(([key, value]) => document.querySelectorAll(`[data-realm-stat="${key}"]`).forEach((node) => { node.textContent = number(value); }));
    elements.empty.hidden = papers.length > 0;
    const period = state.year === 'all' ? `all ${state.data.metadata.year_count} publication years` : state.year;
    elements.status.textContent = `${number(papers.length)} unique papers · ${number(activeCountries)} contributing countries · ${period}${state.country ? ` · selected: ${mapCountryName(state.country)}` : ''}`;
  };

  const referenceChips = (ids) => ids.map((id) => {
    const paper = index.paperById.get(id);
    if (!paper) return '';
    const label = `[${id}] — ${paper.title}`;
    return `<a class="reference-chip" href="${escapeHtml(referenceUrl(id))}" data-reference-id="${id}" data-reference-title="${escapeHtml(paper.title)}" title="${escapeHtml(paper.title)}" aria-label="${escapeHtml(label)}">[${id}]</a>`;
  }).join('');

  const referenceGroups = (ids) => {
    if (!ids.length) return '<p>No paper IDs are associated with this country in the selected period.</p>';
    const byYear = new Map();
    ids.forEach((id) => {
      const paper = index.paperById.get(id);
      if (!paper) return;
      byYear.set(paper.year, [...(byYear.get(paper.year) || []), id]);
    });
    return `<div class="reference-groups">${[...byYear.entries()].sort((a, b) => b[0] - a[0]).map(([year, paperIds], groupIndex) => `<details class="reference-group" ${state.year !== 'all' || groupIndex === 0 ? 'open' : ''}><summary><span>${year}</span><span>${number(paperIds.length)} paper${paperIds.length === 1 ? '' : 's'}</span></summary><div class="reference-chips">${referenceChips(paperIds)}</div></details>`).join('')}</div>`;
  };

  const annualChart = ({ label, valueForYear, denominatorForYear, percentageMeaning }) => {
    const years = chartYears();
    const entries = years.map((year) => {
      const value = Number(valueForYear(year) || 0);
      const denominator = Number(denominatorForYear(year) || 0);
      return { year, value, share: percentage(value, denominator) };
    });
    const maximum = Math.max(...entries.map((entry) => entry.value), 1);
    const columns = Math.max(entries.length, 1);
    return `<div class="annual-chart-scroll" tabindex="0" aria-label="Scrollable annual chart"><div class="annual-chart${entries.length === 1 ? ' is-single' : ''}" style="--chart-columns:${columns}" role="group" aria-label="${escapeHtml(label)}">${entries.map((entry) => {
      const height = entry.value ? Math.max(7, entry.value / maximum * 100) : 2;
      const description = `${entry.year}: ${number(entry.value)} paper${entry.value === 1 ? '' : 's'}, ${entry.share} ${percentageMeaning}`;
      return `<button class="annual-bar" type="button" data-chart-year="${entry.year}" aria-label="${escapeHtml(description)}" title="${escapeHtml(description)}" ${String(state.year) === String(entry.year) ? 'aria-current="true"' : ''}><span class="annual-bar-value">${number(entry.value)}</span><span class="annual-bar-track" aria-hidden="true"><span class="annual-bar-fill" style="--bar-height:${height}%"></span></span><span class="annual-bar-year">${entry.year}</span><span class="annual-bar-share">${entry.share}</span></button>`;
    }).join('')}</div></div><p class="annual-chart-note"><strong>Amount</strong> above each bar · <strong>percentage</strong> below each year. ${escapeHtml(percentageMeaning)}.</p>`;
  };

  const countryAnnualChart = (mapId, type = 'total') => {
    const country = sourceCountry(mapId);
    if (!country) return '<p>No annual publication series is available.</p>';
    if (type === 'international') {
      return annualChart({
        label: `Annual international publication counts and shares for ${country.name}`,
        valueForYear: (year) => country.annual[String(year)]?.international || 0,
        denominatorForYear: (year) => country.annual[String(year)]?.total || 0,
        percentageMeaning: 'of this country’s papers in that year were internationally coauthored'
      });
    }
    return annualChart({
      label: `Annual publication counts and shares for ${country.name}`,
      valueForYear: (year) => country.annual[String(year)]?.total || 0,
      denominatorForYear: (year) => papersInYear(year).length,
      percentageMeaning: 'of all papers published in that year were associated with this country'
    });
  };

  const globalAnnualChart = (mode) => mode === 'cooperation'
    ? annualChart({
      label: 'Annual growth of internationally coauthored PINN-related publications',
      valueForYear: (year) => papersInYear(year).filter((paper) => paper.countries.length >= 2).length,
      denominatorForYear: (year) => papersInYear(year).length,
      percentageMeaning: 'of all papers published in that year were international'
    })
    : annualChart({
      label: 'Annual growth of PINN-related publications',
      valueForYear: (year) => papersInYear(year).length,
      denominatorForYear: () => state.data.metadata.paper_count,
      percentageMeaning: 'of the complete 853-paper bibliography were published in that year'
    });

  const overviewDetails = () => {
    const cooperation = state.mode === 'cooperation';
    const title = cooperation ? 'Annual cooperation growth by year' : 'Annual growth of PINN-related publications';
    const description = cooperation
      ? 'International-paper amounts and their share of all publications in each visible year.'
      : 'Publication amounts and their share of the complete review bibliography.';
    return `<div class="details-placeholder"><span class="details-orbit" aria-hidden="true"></span><strong>Select a country</strong><p>Hover for a preview, or click a country to lock its evidence panel.</p></div><section class="details-section overview-chart"><p class="eyebrow compact">${cooperation ? 'International profile' : 'Publication profile'}</p><h2>${title}</h2><p>${description}</p>${globalAnnualChart(state.mode)}</section>`;
  };

  const individualDetails = (mapId) => {
    const stats = countryStats(mapId);
    const periodPapers = activePapers().length;
    const source = sourceCountry(mapId);
    return `<button class="details-close" type="button" data-close-details aria-label="Clear country selection">×</button>
      <div class="country-heading"><p class="eyebrow compact">Country profile${source ? ` · ${source.iso3}` : ''}</p><h2>${escapeHtml(stats.name)}</h2><p>${state.year === 'all' ? state.data.metadata.year_range : state.year} · ${percentage(stats.total, periodPapers)} of papers in the selected period</p></div>
      <div class="country-metrics"><div><strong>${number(stats.total)}</strong><span>Total · ${percentage(stats.total, periodPapers)} of period</span></div><div><strong>${number(stats.national)}</strong><span>National · ${percentage(stats.national, stats.total)} of country</span></div><div><strong>${number(stats.international)}</strong><span>International · ${percentage(stats.international, stats.total)} of country</span></div></div>
      <section class="details-section"><h3>Annual publication profile</h3>${countryAnnualChart(mapId)}</section>
      <section class="details-section"><h3>Annual international profile</h3>${countryAnnualChart(mapId, 'international')}</section>
      <section class="details-section"><h3>Applicable reference IDs</h3><p>Grouped by year; each ID opens its exact References record.</p>${referenceGroups(stats.ids)}</section>`;
  };

  const cooperationDetails = (mapId) => {
    const stats = countryStats(mapId);
    const country = sourceCountry(mapId);
    const partners = collaborationPartners(mapId);
    const partnerCards = partners.length ? partners.map((partner) => `<article class="partner-card"><div class="partner-card-head"><button class="partner-select" type="button" data-partner-map-id="${partner.country.map_id}"><span>${escapeHtml(partner.country.name)}</span><small>Select as focal country</small></button><span class="partner-strength">${number(partner.volume)} paper${partner.volume === 1 ? '' : 's'}${state.metric === 'intensity' ? ` · J ${partner.intensity.toFixed(3)}` : ''}</span></div><div class="reference-chips">${referenceChips(partner.jointIds)}</div></article>`).join('') : '<p>No international partners are present in the selected period.</p>';
    return `<button class="details-close" type="button" data-close-details aria-label="Clear country selection">×</button>
      <div class="country-heading"><p class="eyebrow compact">Cooperation profile${country ? ` · ${country.iso3}` : ''}</p><h2>${escapeHtml(stats.name)}</h2><p>${state.year === 'all' ? state.data.metadata.year_range : state.year} · ranked by ${state.metric === 'intensity' ? 'Jaccard intensity' : 'joint-paper volume'}</p></div>
      <div class="country-metrics"><div><strong>${number(stats.international)}</strong><span>International · ${percentage(stats.international, stats.total)} of country</span></div><div><strong>${number(partners.length)}</strong><span>Partner countries</span></div><div><strong>${number(partners.reduce((sum, partner) => sum + partner.volume, 0))}</strong><span>Pair-paper links</span></div></div>
      <section class="details-section"><h3>Annual international profile</h3>${countryAnnualChart(mapId, 'international')}</section>
      <section class="details-section"><h3>Annual publication profile</h3>${countryAnnualChart(mapId)}</section>
      <section class="details-section"><h3>Collaborating countries</h3><p>Each partnership lists the exact shared paper IDs. Multi-country papers appear once per unique pair.</p><div class="partner-list">${partnerCards}</div></section>`;
  };

  const renderDetails = () => {
    if (!state.country) {
      elements.details.classList.remove('is-open');
      elements.details.classList.add('is-overview');
      elements.details.innerHTML = overviewDetails();
      return;
    }
    elements.details.classList.remove('is-overview');
    elements.details.innerHTML = state.mode === 'countries' ? individualDetails(state.country) : cooperationDetails(state.country);
    elements.details.classList.add('is-open');
  };

  const renderControls = () => {
    document.querySelectorAll('[data-realm-mode]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.realmMode === state.mode)));
    document.querySelectorAll('[data-realm-metric]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.realmMetric === state.metric)));
    elements.metricControl.hidden = state.mode !== 'cooperation';
    elements.year.value = state.year;
    elements.search.value = state.query;
    elements.clearSearch.hidden = !state.query;
    elements.search.setAttribute('aria-expanded', String(state.searchOpen && !elements.searchResults.hidden));
    elements.mapTitle.textContent = state.mode === 'countries' ? 'Individual-country publications' : 'International affiliation co-occurrence';
    elements.mapCaption.textContent = state.mode === 'countries'
      ? 'Color represents unique papers associated with each country; totals include national and international papers.'
      : state.country ? `Lines and partner shading represent ${state.metric === 'intensity' ? 'Jaccard collaboration intensity' : 'shared-paper volume'} for the selected country.` : 'International-paper counts are shown until a focal country is selected; connection lines are intentionally hidden.';
  };

  const renderAll = () => {
    if (!state.data || !state.map) return;
    renderControls();
    renderStats();
    renderMap();
    renderDetails();
  };

  const tooltipHtml = (mapId) => {
    const stats = countryStats(mapId);
    if (state.mode === 'countries') return `<strong>${escapeHtml(stats.name)}</strong><dl><dt>Unique papers</dt><dd>${number(stats.total)}</dd><dt>Share of period</dt><dd>${percentage(stats.total, activePapers().length)}</dd><dt>National</dt><dd>${number(stats.national)}</dd><dt>International</dt><dd>${number(stats.international)}</dd></dl>`;
    const partners = collaborationPartners(mapId);
    return `<strong>${escapeHtml(stats.name)}</strong><dl><dt>International papers</dt><dd>${number(stats.international)}</dd><dt>Partner countries</dt><dd>${number(partners.length)}</dd>${state.country && state.country !== mapId ? `<dt>Shared with ${escapeHtml(mapCountryName(state.country))}</dt><dd>${number(collaborationPartners(state.country).find((partner) => partner.country.map_id === mapId)?.volume || 0)}</dd>` : ''}</dl><span class="tooltip-note">${partners.length ? 'Select to inspect exact shared references.' : 'No active international partnership in this period.'}</span>`;
  };

  const positionTooltip = (tooltip, clientX, clientY) => {
    tooltip.hidden = false;
    const padding = 12;
    const box = tooltip.getBoundingClientRect();
    let left = clientX + 14;
    let top = clientY + 14;
    if (left + box.width > innerWidth - padding) left = clientX - box.width - 14;
    if (top + box.height > innerHeight - padding) top = clientY - box.height - 14;
    tooltip.style.left = `${Math.max(padding, left)}px`;
    tooltip.style.top = `${Math.max(padding, top)}px`;
  };

  const showMapTooltip = (mapId, clientX, clientY) => {
    elements.tooltip.innerHTML = tooltipHtml(mapId);
    positionTooltip(elements.tooltip, clientX, clientY);
  };

  const showMapTooltipForPath = (path) => {
    const box = path.getBoundingClientRect();
    showMapTooltip(path.dataset.mapId, box.left + box.width / 2, box.top + box.height / 2);
  };

  const hideMapTooltip = () => { elements.tooltip.hidden = true; };

  const showReferenceTooltip = (anchor) => {
    const title = anchor.dataset.referenceTitle || 'Paper title not available';
    elements.referenceTooltip.textContent = title;
    const box = anchor.getBoundingClientRect();
    positionTooltip(elements.referenceTooltip, box.left + box.width / 2, box.top);
  };

  const hideReferenceTooltip = () => { elements.referenceTooltip.hidden = true; };

  const searchResults = (query) => {
    const normalized = normalize(query);
    if (!normalized) return [];
    const numeric = query.match(/\[?\s*(\d{1,3})\s*\]?/);
    const exactId = numeric && Number(numeric[1]) >= 1 && Number(numeric[1]) <= 853 ? Number(numeric[1]) : null;
    const countries = state.data.countries
      .filter((country) => normalize(country.name).includes(normalized))
      .map((country) => ({ type: 'country', score: normalize(country.name) === normalized ? 100 : 70, country }));
    const terms = normalized.split(' ').filter(Boolean);
    const papers = state.data.papers.flatMap((paper) => {
      const title = normalize(paper.title);
      const idMatch = exactId === paper.id;
      const titleMatch = terms.every((term) => title.includes(term));
      if (!idMatch && !titleMatch) return [];
      return [{ type: 'paper', score: idMatch ? 120 : title.startsWith(normalized) ? 80 : 60, paper }];
    });
    return [...countries, ...papers].sort((a, b) => b.score - a.score || (a.country?.name || a.paper?.title || '').localeCompare(b.country?.name || b.paper?.title || '')).slice(0, 12);
  };

  const renderSearchResults = () => {
    const results = searchResults(state.query);
    state.searchIndex = Math.min(state.searchIndex, results.length - 1);
    elements.searchResults.hidden = !state.searchOpen || !state.query;
    if (elements.searchResults.hidden) {
      elements.search.setAttribute('aria-expanded', 'false');
      return;
    }
    elements.search.setAttribute('aria-expanded', 'true');
    elements.searchResults.innerHTML = results.length ? results.map((result, position) => {
      if (result.type === 'country') {
        const stats = countryStats(result.country.map_id);
        return `<button type="button" role="option" data-search-result="country" data-map-id="${result.country.map_id}" ${position === state.searchIndex ? 'aria-selected="true"' : ''}><span class="search-result-kind">Country</span><span class="search-result-copy"><strong>${escapeHtml(result.country.name)}</strong><span>${number(stats.total)} papers in the selected period · ${result.country.iso3}</span></span></button>`;
      }
      const paper = result.paper;
      return `<button type="button" role="option" data-search-result="paper" data-paper-id="${paper.id}" ${position === state.searchIndex ? 'aria-selected="true"' : ''}><span class="search-result-kind">[${paper.id}]</span><span class="search-result-copy"><strong>${escapeHtml(paper.title)}</strong><span>${paper.year} · ${escapeHtml(paper.countries.join(', '))}</span></span></button>`;
    }).join('') : '<div class="search-no-result">No country, reference ID, or title matches this search.</div>';
  };

  const chooseSearchResult = (button) => {
    if (button.dataset.searchResult === 'country') {
      state.country = button.dataset.mapId;
      state.query = mapCountryName(state.country);
    } else {
      const paper = index.paperById.get(Number(button.dataset.paperId));
      if (!paper) return;
      const firstCountry = index.countryByIso3.get(paper.country_codes[0]);
      state.country = firstCountry?.map_id || '';
      if (state.year !== 'all' && String(state.year) !== String(paper.year)) state.year = String(paper.year);
      if (state.mode === 'cooperation' && paper.countries.length < 2) state.mode = 'countries';
      state.query = String(paper.id);
    }
    state.searchOpen = false;
    state.searchIndex = -1;
    writeUrl(true);
    renderAll();
    renderSearchResults();
    index.pathByMapId.get(state.country)?.focus({ preventScroll: true });
  };

  const createMap = () => {
    elements.map.setAttribute('viewBox', state.map.metadata.view_box);
    elements.map.innerHTML = `<defs><pattern id="realm-zero-pattern" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="zero-pattern-base" width="6" height="6"></rect><line class="zero-pattern-line" x1="0" y1="0" x2="0" y2="6"></line></pattern></defs><g data-countries></g><g data-collaboration-lines></g>`;
    const countriesGroup = elements.map.querySelector('[data-countries]');
    state.map.locations.forEach((location) => {
      const source = sourceCountry(location.map_id);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', location.path);
      path.setAttribute('class', `country-shape${source ? ' has-source-data' : ''}`);
      path.setAttribute('role', 'button');
      path.setAttribute('tabindex', source ? '0' : '-1');
      path.dataset.mapId = location.map_id;
      countriesGroup.append(path);
      index.pathByMapId.set(location.map_id, path);
      index.anchorByMapId.set(location.map_id, mainLandmassAnchor(location.path));
    });
  };

  const buildIndexes = () => {
    state.data.papers.forEach((paper) => index.paperById.set(paper.id, paper));
    state.data.countries.forEach((country) => {
      index.countryByIso3.set(country.iso3, country);
      index.countryByMapId.set(country.map_id, country);
    });
    state.map.locations.forEach((location) => index.mapById.set(location.map_id, location));
  };

  const buildYearOptions = () => {
    state.data.metadata.years.forEach((year) => {
      const option = document.createElement('option');
      option.value = String(year);
      option.textContent = String(year);
      elements.year.append(option);
    });
  };

  elements.map.addEventListener('pointerover', (event) => {
    const path = event.target.closest('.country-shape');
    if (!path || path === event.relatedTarget) return;
    state.hover = path.dataset.mapId;
    renderMap();
    showMapTooltip(state.hover, event.clientX, event.clientY);
  });
  elements.map.addEventListener('pointermove', (event) => {
    const path = event.target.closest('.country-shape');
    if (path) positionTooltip(elements.tooltip, event.clientX, event.clientY);
  });
  elements.map.addEventListener('pointerout', (event) => {
    const path = event.target.closest('.country-shape');
    if (!path || event.relatedTarget?.closest?.('.country-shape') === path) return;
    state.hover = '';
    renderMap();
    hideMapTooltip();
  });
  elements.map.addEventListener('focusin', (event) => {
    const path = event.target.closest('.country-shape');
    if (!path) return;
    state.hover = path.dataset.mapId;
    renderMap();
    showMapTooltipForPath(path);
  });
  elements.map.addEventListener('focusout', (event) => {
    if (event.relatedTarget?.closest?.('.country-shape')) return;
    state.hover = '';
    renderMap();
    hideMapTooltip();
  });
  elements.map.addEventListener('click', (event) => {
    const path = event.target.closest('.country-shape');
    if (path) setSelection(path.dataset.mapId);
    else clearSelection();
  });
  elements.map.addEventListener('keydown', (event) => {
    const path = event.target.closest('.country-shape');
    if (path && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setSelection(path.dataset.mapId);
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      clearSelection();
      elements.map.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const mode = event.target.closest('[data-realm-mode]');
    if (mode) {
      state.mode = mode.dataset.realmMode;
      writeUrl(true);
      renderAll();
      return;
    }
    const metric = event.target.closest('[data-realm-metric]');
    if (metric) {
      state.metric = metric.dataset.realmMetric;
      writeUrl(true);
      renderAll();
      return;
    }
    const yearStep = event.target.closest('[data-year-step]');
    if (yearStep) { stopPlayback(); stepYear(yearStep.dataset.yearStep === 'next' ? 1 : -1); return; }
    if (event.target.closest('[data-year-play]')) { togglePlayback(); return; }
    if (event.target.closest('[data-realm-reset]')) {
      stopPlayback();
      Object.assign(state, DEFAULTS, { hover: '', searchOpen: false, searchIndex: -1 });
      writeUrl(true);
      renderAll();
      renderSearchResults();
      return;
    }
    if (event.target.closest('[data-realm-retry]')) { location.reload(); return; }
    if (event.target.closest('[data-close-details]')) { clearSelection(); return; }
    const partner = event.target.closest('[data-partner-map-id]');
    if (partner) { setSelection(partner.dataset.partnerMapId); return; }
    const chartYear = event.target.closest('[data-chart-year]');
    if (chartYear) { setYear(chartYear.dataset.chartYear); return; }
    const searchResult = event.target.closest('[data-search-result]');
    if (searchResult) { chooseSearchResult(searchResult); return; }
    if (event.target.closest('[data-realm-clear-search]')) {
      state.query = '';
      state.searchOpen = false;
      state.searchIndex = -1;
      writeUrl(true);
      renderControls();
      renderSearchResults();
      elements.search.focus();
      return;
    }
    if (event.target.closest('[data-open-methodology]')) {
      elements.methodology?.showModal();
      return;
    }
    const reference = event.target.closest('.reference-chip');
    if (reference && coarsePointer.matches && !reference.classList.contains('touch-armed')) {
      event.preventDefault();
      document.querySelectorAll('.reference-chip.touch-armed').forEach((chip) => chip.classList.remove('touch-armed'));
      reference.classList.add('touch-armed');
      showReferenceTooltip(reference);
      setTimeout(() => reference.classList.remove('touch-armed'), 3200);
      return;
    }
    if (!event.target.closest('.realm-search-wrap')) {
      state.searchOpen = false;
      renderSearchResults();
    }
  });

  elements.year.addEventListener('change', () => setYear(elements.year.value));
  elements.search.addEventListener('input', () => {
    state.query = elements.search.value;
    state.searchOpen = Boolean(state.query);
    state.searchIndex = -1;
    elements.clearSearch.hidden = !state.query;
    writeUrl(false);
    renderSearchResults();
  });
  elements.search.addEventListener('focus', () => {
    state.searchOpen = Boolean(state.query);
    renderSearchResults();
  });
  elements.search.addEventListener('keydown', (event) => {
    const resultButtons = [...elements.searchResults.querySelectorAll('[data-search-result]')];
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!resultButtons.length) return;
      state.searchOpen = true;
      state.searchIndex = event.key === 'ArrowDown'
        ? (state.searchIndex + 1) % resultButtons.length
        : (state.searchIndex - 1 + resultButtons.length) % resultButtons.length;
      renderSearchResults();
      return;
    }
    if (event.key === 'Enter' && state.searchIndex >= 0) {
      event.preventDefault();
      const active = elements.searchResults.querySelectorAll('[data-search-result]')[state.searchIndex];
      if (active) chooseSearchResult(active);
    }
    if (event.key === 'Escape') {
      state.searchOpen = false;
      state.searchIndex = -1;
      renderSearchResults();
    }
  });

  document.addEventListener('pointerover', (event) => {
    const reference = event.target.closest('.reference-chip');
    if (reference && !coarsePointer.matches) showReferenceTooltip(reference);
  });
  document.addEventListener('pointerout', (event) => {
    if (event.target.closest('.reference-chip') && !coarsePointer.matches) hideReferenceTooltip();
  });
  document.addEventListener('focusin', (event) => {
    const reference = event.target.closest('.reference-chip');
    if (reference) showReferenceTooltip(reference);
  });
  document.addEventListener('focusout', (event) => {
    if (event.target.closest('.reference-chip')) hideReferenceTooltip();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && elements.methodology?.open) {
      elements.methodology.close();
      return;
    }
    if (event.key === 'Escape' && state.country) clearSelection();
    if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) {
      event.preventDefault();
      elements.search.focus();
    }
  });
  elements.methodology?.addEventListener('click', (event) => {
    if (event.target === elements.methodology) elements.methodology.close();
  });
  window.addEventListener('popstate', () => {
    stopPlayback();
    readUrl();
    state.searchOpen = false;
    renderAll();
    renderSearchResults();
  });

  const renderLoadError = (error) => {
    elements.status.textContent = 'PINN Realm data could not load.';
    elements.empty.hidden = false;
    elements.empty.innerHTML = `<strong>Map data unavailable</strong><span>${escapeHtml(error.message)}</span><button class="button" type="button" data-realm-retry>Retry loading</button>`;
  };

  Promise.all([
    fetch(DATA_URL).then((response) => { if (!response.ok) throw new Error(`Realm data returned ${response.status}`); return response.json(); }),
    fetch(MAP_URL).then((response) => { if (!response.ok) throw new Error(`Map geometry returned ${response.status}`); return response.json(); })
  ]).then(([data, map]) => {
    if (data?.metadata?.paper_count !== 853 || !Array.isArray(data.papers)) throw new Error('Realm dataset failed its 853-paper integrity check.');
    if (!data.validation?.all_country_names_mapped || !data.validation?.all_titles_matched) throw new Error('Realm dataset failed country or title validation.');
    if (!Array.isArray(map?.locations) || !map.locations.length) throw new Error('World-map geometry is empty.');
    state.data = data;
    state.map = map;
    document.querySelectorAll('[data-realm-dataset="version"]').forEach((node) => { node.textContent = data.metadata.version; });
    document.querySelectorAll('[data-realm-dataset="papers"]').forEach((node) => { node.textContent = data.metadata.paper_count.toLocaleString(); });
    buildIndexes();
    buildYearOptions();
    readUrl();
    createMap();
    renderAll();
    renderSearchResults();
  }).catch(renderLoadError);
})();
