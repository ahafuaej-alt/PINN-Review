(() => {
  'use strict';

  const map = document.querySelector('[data-realm-map]');
  const details = document.querySelector('[data-realm-details]');
  const mapTitle = document.querySelector('[data-map-title]');
  const mapCaption = document.querySelector('[data-map-caption]');
  const realmStatus = document.querySelector('[data-realm-status]');
  if (!map || !details || !mapTitle || !mapCaption) return;

  const publicationPalette = {
    background: '#ffffff',
    surface: '#f7fafb',
    ink: '#142332',
    muted: '#536779',
    faint: '#6d7f8e',
    line: '#cbd7de',
    grid: '#dbe5ea',
    mint: '#087f70',
    violet: '#6354d9',
    realmZero: '#e8eef1',
    realmStroke: '#91a4b1',
    realmBuckets: ['#e8eef1', '#d9efeb', '#a9dbd2', '#6dc2b3', '#2f9d8b', '#087f70'],
    realmFocal: '#715bea',
    realmMuted: '#dce4e8',
    realmLine: '#6354d9'
  };

  const escapeXml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

  const slug = (value) => String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('en')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'figure';

  const cssVariable = (name, fallback) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const currentPalette = () => ({
    background: cssVariable('--panel', '#ffffff'),
    surface: cssVariable('--surface-faint', '#f7fafb'),
    ink: cssVariable('--ink', '#142332'),
    muted: cssVariable('--muted', '#536779'),
    faint: cssVariable('--faint', '#6d7f8e'),
    line: cssVariable('--line-strong', '#cbd7de'),
    grid: cssVariable('--realm-grid', 'rgba(33, 67, 89, .08)'),
    mint: cssVariable('--mint', '#087f70'),
    violet: cssVariable('--violet', '#6354d9'),
    realmZero: cssVariable('--realm-zero', '#e8eef1'),
    realmStroke: cssVariable('--realm-stroke', '#91a4b1'),
    realmBuckets: [
      cssVariable('--realm-land', '#e8eef1'),
      cssVariable('--realm-1', '#d9efeb'),
      cssVariable('--realm-2', '#a9dbd2'),
      cssVariable('--realm-3', '#6dc2b3'),
      cssVariable('--realm-4', '#2f9d8b'),
      cssVariable('--realm-5', '#087f70')
    ],
    realmFocal: cssVariable('--realm-focal', '#715bea'),
    realmMuted: cssVariable('--realm-muted', '#dce4e8'),
    realmLine: cssVariable('--realm-line', '#6354d9')
  });

  const wrapText = (value, maximumCharacters = 70) => {
    const words = String(value ?? '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [''];
    const lines = [];
    let current = '';
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (current && candidate.length > maximumCharacters) {
        lines.push(current);
        current = word;
      } else current = candidate;
    });
    if (current) lines.push(current);
    return lines;
  };

  const textLines = ({ text, x, y, lineHeight = 30, maximumCharacters = 70, attributes = '' }) => wrapText(text, maximumCharacters)
    .map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" ${attributes}>${escapeXml(line)}</text>`).join('');

  const selectedYearLabel = () => document.querySelector('[data-realm-year]')?.selectedOptions?.[0]?.textContent?.trim() || 'All years';
  const selectedModeLabel = () => document.querySelector('[data-realm-mode][aria-pressed="true"]')?.textContent?.trim() || 'PINN Realm';
  const selectedMetricLabel = () => document.querySelector('[data-realm-metric][aria-pressed="true"]')?.textContent?.trim() || '';
  const selectedCountryLabel = () => details.querySelector('.country-heading h2')?.textContent?.trim() || '';
  const datasetVersion = () => document.querySelector('[data-realm-dataset="version"]')?.textContent?.trim() || 'current';
  const datasetPapers = () => document.querySelector('[data-realm-dataset="papers"]')?.textContent?.trim() || '853';
  const sourceLine = () => `PINN Review Atlas · PINN Realm dataset ${datasetVersion()} · ${datasetPapers()}-paper bibliography`;

  const contextLine = () => {
    const parts = [selectedModeLabel(), selectedYearLabel()];
    const country = selectedCountryLabel();
    if (country) parts.push(`Focal country: ${country}`);
    if (selectedModeLabel().toLowerCase().includes('international')) {
      const metric = selectedMetricLabel();
      if (metric) parts.push(`Metric: ${metric}`);
    }
    return parts.join(' · ');
  };

  const svgDocument = (body, { width, height, title, description }) => `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="export-title export-description"><title id="export-title">${escapeXml(title)}</title><desc id="export-description">${escapeXml(description)}</desc>${body}</svg>`;

  const downloadSvg = (svg, filename) => {
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.hidden = true;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  const exportFilename = (kind, title, variant) => {
    const year = slug(selectedYearLabel());
    return `pinn-realm-${kind}-${slug(title)}-${year}-${variant}.svg`;
  };

  const annualChartSvg = (scroll, variant) => {
    const publication = variant === 'publication';
    const palette = publication ? publicationPalette : currentPalette();
    const chart = scroll.querySelector('.annual-chart');
    const noteNode = scroll.nextElementSibling?.classList.contains('annual-chart-note') ? scroll.nextElementSibling : null;
    const title = chart?.getAttribute('aria-label')?.trim()
      || scroll.closest('.details-section')?.querySelector('h2, h3')?.textContent?.trim()
      || 'PINN Realm annual profile';
    const note = noteNode?.textContent?.trim() || 'Annual publication counts and percentages.';
    const bars = [...scroll.querySelectorAll('.annual-bar')].map((bar) => ({
      year: bar.querySelector('.annual-bar-year')?.textContent?.trim() || '',
      valueLabel: bar.querySelector('.annual-bar-value')?.textContent?.trim() || '0',
      value: Number((bar.querySelector('.annual-bar-value')?.textContent || '0').replace(/[^0-9.-]/g, '')) || 0,
      share: bar.querySelector('.annual-bar-share')?.textContent?.trim() || '0.0%',
      active: bar.getAttribute('aria-current') === 'true'
    }));
    if (!bars.length) throw new Error('Annual chart has no bars to export.');

    const columnWidth = publication ? 72 : 64;
    const width = Math.max(publication ? 1320 : 1080, 180 + bars.length * columnWidth);
    const height = publication ? 780 : 700;
    const left = 86;
    const right = 52;
    const plotTop = publication ? 210 : 190;
    const plotBottom = publication ? 560 : 510;
    const plotHeight = plotBottom - plotTop;
    const plotWidth = width - left - right;
    const maximum = Math.max(1, ...bars.map((bar) => bar.value));
    const step = plotWidth / bars.length;
    const barWidth = Math.min(publication ? 42 : 38, step * .62);
    const titleLines = wrapText(title, Math.max(48, Math.floor(width / 23)));
    const context = contextLine();
    const grid = [0, .25, .5, .75, 1].map((ratio) => {
      const y = plotBottom - ratio * plotHeight;
      return `<line x1="${left}" y1="${y.toFixed(1)}" x2="${width - right}" y2="${y.toFixed(1)}" stroke="${palette.grid}" stroke-width="1"/>`;
    }).join('');
    const barsSvg = bars.map((bar, index) => {
      const center = left + step * (index + .5);
      const scaledHeight = bar.value ? Math.max(5, bar.value / maximum * plotHeight) : 2;
      const top = plotBottom - scaledHeight;
      const fill = bar.active ? palette.violet : palette.mint;
      return `<g><rect x="${(center - barWidth / 2).toFixed(1)}" y="${top.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${scaledHeight.toFixed(1)}" rx="5" fill="${fill}" opacity="${publication ? '.92' : '.84'}"/><text x="${center.toFixed(1)}" y="${Math.max(plotTop + 16, top - 10).toFixed(1)}" text-anchor="middle" fill="${palette.ink}" font-family="SFMono-Regular,Consolas,monospace" font-size="15" font-weight="700">${escapeXml(bar.valueLabel)}</text><text x="${center.toFixed(1)}" y="${plotBottom + 30}" text-anchor="middle" fill="${palette.muted}" font-family="SFMono-Regular,Consolas,monospace" font-size="14">${escapeXml(bar.year)}</text><text x="${center.toFixed(1)}" y="${plotBottom + 55}" text-anchor="middle" fill="${palette.mint}" font-family="SFMono-Regular,Consolas,monospace" font-size="14" font-weight="700">${escapeXml(bar.share)}</text></g>`;
    }).join('');
    const publicationMark = publication ? `<text x="${width - right}" y="56" text-anchor="end" fill="${palette.mint}" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="1.4">PUBLICATION SVG</text>` : '';
    const titleSvg = titleLines.map((line, index) => `<text x="${left}" y="${64 + index * 34}" fill="${palette.ink}" font-family="Arial,sans-serif" font-size="${publication ? 30 : 28}" font-weight="700">${escapeXml(line)}</text>`).join('');
    const contextY = 82 + titleLines.length * 34;
    const noteY = plotBottom + 100;
    const body = `<rect width="${width}" height="${height}" fill="${palette.background}"/>${publicationMark}${titleSvg}<text x="${left}" y="${contextY}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="15">${escapeXml(context)}</text><line x1="${left}" y1="${plotBottom}" x2="${width - right}" y2="${plotBottom}" stroke="${palette.line}" stroke-width="1.5"/>${grid}${barsSvg}${textLines({ text: note, x: left, y: noteY, lineHeight: 22, maximumCharacters: Math.floor(width / 12), attributes: `fill="${palette.faint}" font-family="Arial,sans-serif" font-size="14"` })}<text x="${left}" y="${height - 42}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">${escapeXml(sourceLine())}</text>${publication ? `<text x="${width - right}" y="${height - 42}" text-anchor="end" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">Publication year source: papers-master.json#paper.year</text>` : ''}`;
    return {
      svg: svgDocument(body, { width, height, title, description: `${title}. ${context}. ${note}` }),
      title
    };
  };

  const inlineCurrentMapStyles = (source, target) => {
    const computed = getComputedStyle(source);
    if (source.classList.contains('country-shape')) {
      const usesZeroPattern = source.dataset.bucket === '0' && !source.dataset.realmState;
      target.setAttribute('fill', usesZeroPattern ? 'url(#realm-zero-pattern)' : computed.fill);
      target.setAttribute('stroke', computed.stroke);
      target.setAttribute('stroke-width', computed.strokeWidth);
      target.setAttribute('opacity', computed.opacity);
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('collaboration-line')) {
      target.setAttribute('fill', 'none');
      target.setAttribute('stroke', computed.stroke);
      target.setAttribute('stroke-width', computed.strokeWidth);
      target.setAttribute('stroke-linecap', 'round');
      target.setAttribute('opacity', computed.opacity);
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('collaboration-endpoint')) {
      target.setAttribute('fill', computed.fill);
      target.setAttribute('stroke', computed.stroke);
      target.setAttribute('stroke-width', computed.strokeWidth);
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('zero-pattern-base')) target.setAttribute('fill', computed.fill);
    else if (source.classList.contains('zero-pattern-line')) {
      target.setAttribute('stroke', computed.stroke);
      target.setAttribute('stroke-width', computed.strokeWidth);
      target.setAttribute('opacity', computed.opacity);
    }
  };

  const inlinePublicationMapStyles = (source, target) => {
    const palette = publicationPalette;
    if (source.classList.contains('country-shape')) {
      const realmState = source.dataset.realmState || '';
      const bucket = Number(source.dataset.bucket || 0);
      const partnerBucket = Number(source.dataset.partnerBucket || 0);
      let fill = bucket === 0 ? 'url(#realm-zero-pattern)' : palette.realmBuckets[Math.min(5, Math.max(1, bucket))];
      let stroke = palette.realmStroke;
      let strokeWidth = '.8';
      let opacity = '1';
      if (realmState === 'focal') {
        fill = palette.realmFocal;
        stroke = palette.ink;
        strokeWidth = '2.4';
      } else if (realmState === 'partner') {
        fill = palette.realmBuckets[Math.min(5, Math.max(2, partnerBucket || 2))];
        stroke = palette.mint;
        strokeWidth = '1.4';
      } else if (realmState === 'muted') {
        fill = palette.realmMuted;
        opacity = '.58';
      }
      target.setAttribute('fill', fill);
      target.setAttribute('stroke', stroke);
      target.setAttribute('stroke-width', strokeWidth);
      target.setAttribute('opacity', opacity);
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('collaboration-line')) {
      target.setAttribute('fill', 'none');
      target.setAttribute('stroke', palette.realmLine);
      target.setAttribute('stroke-width', source.getAttribute('stroke-width') || '2');
      target.setAttribute('stroke-linecap', 'round');
      target.setAttribute('opacity', '.78');
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('collaboration-endpoint')) {
      target.setAttribute('fill', source.classList.contains('focal') ? palette.realmFocal : palette.realmLine);
      target.setAttribute('stroke', palette.background);
      target.setAttribute('stroke-width', '1.5');
      target.setAttribute('vector-effect', 'non-scaling-stroke');
    } else if (source.classList.contains('zero-pattern-base')) target.setAttribute('fill', palette.realmZero);
    else if (source.classList.contains('zero-pattern-line')) {
      target.setAttribute('stroke', palette.realmStroke);
      target.setAttribute('stroke-width', '1');
      target.setAttribute('opacity', '.34');
    }
  };

  const mapGraphic = (variant) => {
    if (!map.querySelector('.country-shape')) throw new Error('Map is still loading.');
    const clone = map.cloneNode(true);
    clone.removeAttribute('class');
    clone.removeAttribute('data-realm-map');
    clone.removeAttribute('tabindex');
    clone.removeAttribute('role');
    clone.removeAttribute('aria-labelledby');
    const sourceNodes = [...map.querySelectorAll('*')];
    const cloneNodes = [...clone.querySelectorAll('*')];
    sourceNodes.forEach((source, index) => {
      const target = cloneNodes[index];
      if (!target) return;
      target.removeAttribute('tabindex');
      target.removeAttribute('aria-label');
      target.removeAttribute('role');
      target.removeAttribute('style');
      if (variant === 'publication') inlinePublicationMapStyles(source, target);
      else inlineCurrentMapStyles(source, target);
    });
    return clone.innerHTML;
  };

  const legendSvg = (variant, startX, startY, maximumWidth) => {
    const palette = variant === 'publication' ? publicationPalette : currentPalette();
    const legend = document.querySelector('[data-realm-legend]');
    const title = legend?.querySelector('.legend-title')?.textContent?.trim() || 'Map legend';
    const items = [...(legend?.querySelectorAll('.legend-item') || [])];
    let x = startX;
    let y = startY + 30;
    let content = `<text x="${startX}" y="${startY}" fill="${palette.muted}" font-family="Arial,sans-serif" font-size="15" font-weight="700">${escapeXml(title)}</text>`;
    items.forEach((item) => {
      const text = item.textContent.trim();
      const estimated = 38 + text.length * 7.4;
      if (x + estimated > startX + maximumWidth) {
        x = startX;
        y += 34;
      }
      const swatch = item.querySelector('.legend-swatch');
      const line = item.querySelector('.legend-line');
      if (swatch) {
        if (swatch.classList.contains('pattern')) {
          content += `<rect x="${x}" y="${y - 13}" width="22" height="14" rx="3" fill="${palette.realmZero}" stroke="${palette.realmStroke}"/><path d="M${x + 2},${y} l10,-12 M${x + 10},${y + 1} l12,-13" stroke="${palette.realmStroke}" stroke-width="1" opacity=".55"/>`;
        } else {
          let fill;
          if (variant === 'publication') {
            if (swatch.classList.contains('focal')) fill = palette.realmFocal;
            else {
              const token = swatch.style.getPropertyValue('--legend-color');
              const bucketMatch = token.match(/--realm-(\d)/);
              fill = bucketMatch ? palette.realmBuckets[Number(bucketMatch[1])] : palette.realmZero;
            }
          } else fill = getComputedStyle(swatch).backgroundColor || palette.realmZero;
          content += `<rect x="${x}" y="${y - 13}" width="22" height="14" rx="3" fill="${fill}" stroke="${palette.realmStroke}"/>`;
        }
      } else if (line) {
        const stroke = variant === 'publication' ? palette.realmLine : getComputedStyle(line).borderTopColor;
        const strokeWidth = Math.max(1.5, Number.parseFloat(getComputedStyle(line).borderTopWidth) || 2);
        content += `<line x1="${x}" y1="${y - 6}" x2="${x + 24}" y2="${y - 6}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round"/>`;
      }
      const textX = x + (swatch || line ? 31 : 0);
      content += `<text x="${textX}" y="${y - 1}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">${escapeXml(text)}</text>`;
      x += estimated;
    });
    return { content, bottom: y + 18 };
  };

  const mapSvg = (variant) => {
    const publication = variant === 'publication';
    const palette = publication ? publicationPalette : currentPalette();
    const width = publication ? 1800 : 1600;
    const height = publication ? 1180 : 1060;
    const left = 70;
    const right = 70;
    const mapY = 215;
    const mapHeight = publication ? 720 : 650;
    const mapWidth = width - left - right;
    const title = mapTitle.textContent.trim();
    const caption = mapCaption.textContent.trim();
    const context = contextLine();
    const graphic = mapGraphic(variant);
    const mapViewBox = map.getAttribute('viewBox') || '0 0 960 500';
    const gridDefinition = publication ? '' : `<pattern id="export-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="${palette.grid}" stroke-width="1"/></pattern>`;
    const frameFill = publication ? palette.surface : 'url(#export-grid)';
    const legend = legendSvg(variant, left, mapY + mapHeight + 62, mapWidth);
    const titleLines = wrapText(title, Math.max(52, Math.floor(width / 26)));
    const titleSvg = titleLines.map((line, index) => `<text x="${left}" y="${68 + index * 36}" fill="${palette.ink}" font-family="Arial,sans-serif" font-size="${publication ? 32 : 30}" font-weight="700">${escapeXml(line)}</text>`).join('');
    const titleBottom = 68 + (titleLines.length - 1) * 36;
    const publicationMark = publication ? `<text x="${width - right}" y="56" text-anchor="end" fill="${palette.mint}" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="1.4">PUBLICATION SVG</text>` : '';
    const sourceY = height - 44;
    const body = `<defs>${gridDefinition}</defs><rect width="${width}" height="${height}" fill="${palette.background}"/>${publicationMark}${titleSvg}<text x="${left}" y="${titleBottom + 34}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="15">${escapeXml(context)}</text>${textLines({ text: caption, x: left, y: titleBottom + 64, lineHeight: 22, maximumCharacters: Math.floor(mapWidth / 12), attributes: `fill="${palette.faint}" font-family="Arial,sans-serif" font-size="14"` })}<rect x="${left}" y="${mapY}" width="${mapWidth}" height="${mapHeight}" rx="14" fill="${frameFill}" stroke="${palette.line}" stroke-width="1.5"/><svg x="${left + 12}" y="${mapY + 12}" width="${mapWidth - 24}" height="${mapHeight - 24}" viewBox="${escapeXml(mapViewBox)}" preserveAspectRatio="xMidYMid meet">${graphic}</svg>${legend.content}<text x="${left}" y="${sourceY}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">${escapeXml(sourceLine())}</text><text x="${width - right}" y="${sourceY}" text-anchor="end" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">Map geometry: Natural Earth via world-atlas</text>${publication ? `<text x="${left}" y="${sourceY - 22}" fill="${palette.faint}" font-family="Arial,sans-serif" font-size="13">Publication year source: papers-master.json#paper.year</text>` : ''}`;
    return {
      svg: svgDocument(body, { width, height, title: `PINN Realm — ${title}`, description: `${caption} ${context}` }),
      title
    };
  };

  const exportActions = (kind) => {
    const actions = document.createElement('div');
    actions.className = `figure-export-actions${kind === 'annual' ? ' chart-export-actions' : ''}`;
    actions.dataset.realmExportActions = kind;
    actions.setAttribute('role', 'group');
    actions.setAttribute('aria-label', `${kind === 'map' ? 'Map' : 'Chart'} SVG export options`);
    actions.innerHTML = '<span class="figure-export-label">Export SVG</span><button type="button" class="figure-export-button" data-export-figure="' + kind + '" data-export-variant="current" title="Download an SVG matching the current Atlas theme and filters">Current view</button><button type="button" class="figure-export-button" data-export-figure="' + kind + '" data-export-variant="publication" title="Download a clean white-background SVG prepared for publication">Publication</button>';
    return actions;
  };

  const ensureAnnualExportActions = () => {
    details.querySelectorAll('.annual-chart-scroll').forEach((scroll) => {
      if (scroll.previousElementSibling?.matches('[data-realm-export-actions="annual"]')) return;
      scroll.before(exportActions('annual'));
    });
  };

  const exportFigure = (button) => {
    const variant = button.dataset.exportVariant === 'publication' ? 'publication' : 'current';
    const kind = button.dataset.exportFigure;
    try {
      if (kind === 'map') {
        const exported = mapSvg(variant);
        downloadSvg(exported.svg, exportFilename('map', exported.title, variant));
        return;
      }
      if (kind === 'annual') {
        const actions = button.closest('[data-realm-export-actions="annual"]');
        const scroll = actions?.nextElementSibling?.classList.contains('annual-chart-scroll') ? actions.nextElementSibling : null;
        if (!scroll) throw new Error('Annual chart export target was not found.');
        const exported = annualChartSvg(scroll, variant);
        downloadSvg(exported.svg, exportFilename('annual', exported.title, variant));
      }
    } catch (error) {
      console.error('PINN Realm SVG export failed.', error);
      if (realmStatus) realmStatus.textContent = 'SVG export could not be created. Please retry after the current Realm view finishes loading.';
    }
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-export-figure]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    exportFigure(button);
  });

  ensureAnnualExportActions();
  const observer = new MutationObserver(ensureAnnualExportActions);
  observer.observe(details, { childList: true, subtree: true });
})();
