(() => {
  const root = document.body.dataset.framework;
  if (!root || root === 'landing') return;

  const prefix = '../../';
  const svgNS = 'http://www.w3.org/2000/svg';
  let designData = null;
  let designReady = false;
  let redrawQueued = false;

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const cssVar = (name, fallback) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  };

  function closeSiblingMenus(active) {
    document.querySelectorAll('.toolbar-export[open], .toolbar-contribute[open]').forEach((details) => {
      if (details !== active) details.open = false;
    });
  }

  function bindToolbarMenus() {
    document.querySelectorAll('.toolbar-export, .toolbar-contribute').forEach((details) => {
      if (details.dataset.runtimeMenuBound) return;
      details.dataset.runtimeMenuBound = 'true';
      details.addEventListener('toggle', () => {
        if (details.open) closeSiblingMenus(details);
      });
    });
  }

  function getBoardMetrics(board) {
    const rect = board.getBoundingClientRect();
    const width = board.scrollWidth;
    const height = board.scrollHeight;
    return {
      rect,
      width,
      height,
      scaleX: rect.width ? width / rect.width : 1,
      scaleY: rect.height ? height / rect.height : 1
    };
  }

  function localBox(board, node, metrics = getBoardMetrics(board)) {
    if (!node) return null;
    const bounds = node.getBoundingClientRect();
    return {
      left: (bounds.left - metrics.rect.left) * metrics.scaleX,
      right: (bounds.right - metrics.rect.left) * metrics.scaleX,
      top: (bounds.top - metrics.rect.top) * metrics.scaleY,
      bottom: (bounds.bottom - metrics.rect.top) * metrics.scaleY,
      width: bounds.width * metrics.scaleX,
      height: bounds.height * metrics.scaleY
    };
  }

  function relationBoxes(board, relation, metrics) {
    const sourceNode = board.querySelector(`[data-node-id="${CSS.escape(relation.from)}"]`);
    const targetNode = board.querySelector(`[data-node-id="${CSS.escape(relation.to)}"]`);
    if (!sourceNode || !targetNode || sourceNode.hidden || targetNode.hidden || sourceNode.closest('[hidden]') || targetNode.closest('[hidden]')) return null;
    const source = localBox(board, sourceNode, metrics);
    const target = localBox(board, targetNode, metrics);
    source.muted = sourceNode.classList.contains('is-filter-muted') || sourceNode.classList.contains('is-search-muted') || Boolean(sourceNode.closest('.is-filter-muted,.is-search-muted'));
    target.muted = targetNode.classList.contains('is-filter-muted') || targetNode.classList.contains('is-search-muted') || Boolean(targetNode.closest('.is-filter-muted,.is-search-muted'));
    return { source, target };
  }

  function phaseRailRight(board, metrics) {
    const rails = [...board.querySelectorAll('.stack-phase-rail')].map((node) => localBox(board, node, metrics)?.right || 0);
    return rails.length ? Math.max(...rails) : 0;
  }

  function feedbackPanelLeft(board, metrics) {
    const panel = board.querySelector('.stack-feedback-notes');
    return localBox(board, panel, metrics)?.left || metrics.width;
  }

  function relationPath(board, relation, source, target, metrics, index) {
    const lane = Number.isFinite(Number(relation.lane)) ? Number(relation.lane) : index % 6;

    if (relation.type === 'flow') {
      const sx = source.left + source.width / 2;
      const sy = source.bottom + 1.5;
      const tx = target.left + target.width / 2;
      const ty = target.top - 1.5;
      const middle = (sy + ty) / 2;
      return `M ${sx.toFixed(2)} ${sy.toFixed(2)} C ${sx.toFixed(2)} ${middle.toFixed(2)}, ${tx.toFixed(2)} ${middle.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)}`;
    }

    if (relation.type === 'coupling') {
      const sx = source.left - 1.5;
      const sy = source.top + source.height / 2;
      const tx = target.left - 1.5;
      const ty = target.top + target.height / 2;
      const railRight = Math.min(source.left, target.left) - 8;
      const railLeft = phaseRailRight(board, metrics) + 8;
      const available = Math.max(0, railRight - railLeft);
      const offset = Math.min(available, 6 + lane * 4);
      const rail = Math.max(railLeft, railRight - offset);
      return `M ${sx.toFixed(2)} ${sy.toFixed(2)} C ${rail.toFixed(2)} ${sy.toFixed(2)}, ${rail.toFixed(2)} ${ty.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)}`;
    }

    const sx = source.right + 1.5;
    const sy = source.top + source.height / 2;
    const tx = target.right + 1.5;
    const ty = target.top + target.height / 2;
    const panelLeft = feedbackPanelLeft(board, metrics);
    const railLeft = Math.max(source.right, target.right) + 14;
    const railRight = panelLeft - 10;
    const rail = Math.min(railRight, railLeft + 10 + lane * 8);
    return `M ${sx.toFixed(2)} ${sy.toFixed(2)} C ${rail.toFixed(2)} ${sy.toFixed(2)}, ${rail.toFixed(2)} ${ty.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)}`;
  }

  function markerDefs() {
    return `<defs>
      <marker id="framework-arrow-flow" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z"></path></marker>
      <marker id="framework-arrow-coupling" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z"></path></marker>
      <marker id="framework-arrow-feedback" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z"></path></marker>
    </defs>`;
  }

  function redrawDesignStackRelations() {
    if (!designData) return;
    const board = document.querySelector('body[data-framework="design-stack"] [data-relation-board]');
    const layer = board?.querySelector('[data-relation-layer]');
    if (!board || !layer) return;

    const metrics = getBoardMetrics(board);
    layer.setAttribute('viewBox', `0 0 ${metrics.width} ${metrics.height}`);
    layer.setAttribute('width', metrics.width);
    layer.setAttribute('height', metrics.height);
    layer.setAttribute('data-runtime-geometry', 'edge-anchored');
    layer.innerHTML = markerDefs();

    const selected = new URLSearchParams(location.hash.replace(/^#/, '')).get('item');

    designData.relationships.forEach((relation, index) => {
      const boxes = relationBoxes(board, relation, metrics);
      if (!boxes) return;
      const { source, target } = boxes;
      const path = document.createElementNS(svgNS, 'path');
      const muted = source.muted || target.muted;
      path.setAttribute('class', `relation-path relation-${relation.type}${muted ? ' is-muted' : ''}${selected === relation.id ? ' is-active' : ''}`);
      path.setAttribute('data-inspect-id', relation.id);
      path.setAttribute('data-from', relation.from);
      path.setAttribute('data-to', relation.to);
      path.setAttribute('data-type', relation.type);
      path.setAttribute('data-geometry-contract', 'edge-anchored');
      path.setAttribute('tabindex', '0');
      path.setAttribute('d', relationPath(board, relation, source, target, metrics, index));
      const marker = relation.type === 'feedback' ? 'framework-arrow-feedback' : relation.type === 'coupling' ? 'framework-arrow-coupling' : 'framework-arrow-flow';
      if (relation.type === 'coupling') path.setAttribute('marker-start', `url(#${marker})`);
      path.setAttribute('marker-end', `url(#${marker})`);
      const title = document.createElementNS(svgNS, 'title');
      title.textContent = relation.label;
      path.append(title);
      layer.append(path);
    });
  }

  function scheduleRedraw() {
    if (root !== 'design-stack' || redrawQueued) return;
    redrawQueued = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      redrawQueued = false;
      redrawDesignStackRelations();
    }));
  }

  function initDesignStack() {
    if (designReady) return;
    const board = document.querySelector('body[data-framework="design-stack"] [data-relation-board]');
    if (!board) return;
    designReady = true;

    fetch(`${prefix}data/frameworks/design-stack.json`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(`design-stack.json returned ${response.status}`)))
      .then((data) => {
        designData = data;
        scheduleRedraw();
      })
      .catch((error) => console.error('Design Stack runtime geometry could not be initialized.', error));

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(scheduleRedraw);
      observer.observe(board);
    }
    window.addEventListener('resize', scheduleRedraw, { passive: true });
    document.addEventListener('input', (event) => {
      if (event.target.matches('.framework-search')) scheduleRedraw();
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-filter]')) scheduleRedraw();
    });
    document.addEventListener('click', (event) => {
      if (event.target.closest('[data-zoom-in],[data-zoom-out],[data-fit],[data-reset],[data-expand],[data-inspect-id]')) scheduleRedraw();
    });
  }

  function normalizeText(value) {
    return String(value || '').replace(/\s+/g, ' ').replace(/↗/g, '').trim();
  }

  function wrapText(text, maxWidth, fontSize) {
    const words = normalizeText(text).split(' ').filter(Boolean);
    if (!words.length) return [];
    const approx = Math.max(1, maxWidth / Math.max(1, fontSize * 0.56));
    const lines = [];
    let line = '';
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= approx || !line) line = candidate;
      else { lines.push(line); line = word; }
    });
    if (line) lines.push(line);
    return lines;
  }

  function textElement(text, x, y, options = {}) {
    const {
      fill = '#ecf3f7',
      fontSize = 12,
      fontWeight = 400,
      fontStyle = 'normal',
      anchor = 'start',
      maxWidth = 200,
      lineHeight = fontSize * 1.25,
      opacity = 1,
      className = ''
    } = options;
    const lines = wrapText(text, maxWidth, fontSize);
    if (!lines.length) return '';
    return `<text${className ? ` class="${esc(className)}"` : ''} x="${x.toFixed(2)}" y="${y.toFixed(2)}" fill="${esc(fill)}" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize.toFixed(2)}" font-weight="${esc(fontWeight)}" font-style="${esc(fontStyle)}" text-anchor="${anchor}" opacity="${opacity}">${lines.map((line, index) => `<tspan x="${x.toFixed(2)}" dy="${index === 0 ? 0 : lineHeight.toFixed(2)}">${esc(line)}</tspan>`).join('')}</text>`;
  }

  function renderNodeText(board, node, yShift, metrics, options = {}) {
    if (!node) return '';
    const box = localBox(board, node, metrics);
    if (!box) return '';
    const style = getComputedStyle(node);
    const fontSize = Number.parseFloat(style.fontSize) || 11;
    const lineHeight = Number.parseFloat(style.lineHeight) || fontSize * 1.25;
    const align = style.textAlign;
    const anchor = align === 'center' ? 'middle' : align === 'right' || align === 'end' ? 'end' : 'start';
    const x = anchor === 'middle' ? box.left + box.width / 2 : anchor === 'end' ? box.right : box.left;
    const y = box.top + yShift + fontSize * .9;
    return textElement(options.prefix ? `${options.prefix}${normalizeText(node.textContent)}` : normalizeText(node.textContent), x, y, {
      fill: options.fill || style.color || '#ecf3f7',
      fontSize: options.fontSize || fontSize,
      fontWeight: options.fontWeight || style.fontWeight || 400,
      fontStyle: options.fontStyle || style.fontStyle || 'normal',
      anchor,
      maxWidth: Math.max(10, options.maxWidth || box.width),
      lineHeight: options.lineHeight || lineHeight,
      opacity: options.opacity ?? 1,
      className: options.className || ''
    });
  }

  function nativeMarkerDefs(colors) {
    return `<defs>
      <marker id="native-flow" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors.flow)}"/></marker>
      <marker id="native-coupling" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors.coupling)}"/></marker>
      <marker id="native-feedback" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors.feedback)}"/></marker>
      <marker id="native-selected" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9.2" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="${esc(colors.selected)}"/></marker>
    </defs>`;
  }

  function nativeLegend(x, y, colors) {
    const items = [
      ['Main design flow', colors.flow, false, false],
      ['Strong interdependence', colors.coupling, false, true],
      ['Feedback / redesign', colors.feedback, true, false],
      ['Selected relationship', colors.selected, false, false]
    ];
    let out = '';
    let cursor = x;
    items.forEach(([label, color, dashed, bidirectional]) => {
      out += `<line x1="${cursor}" y1="${y}" x2="${cursor + 34}" y2="${y}" stroke="${esc(color)}" stroke-width="${label === 'Selected relationship' ? 3 : 2}"${dashed ? ' stroke-dasharray="6 5"' : ''} marker-end="url(#${label === 'Selected relationship' ? 'native-selected' : bidirectional ? 'native-coupling' : label.startsWith('Feedback') ? 'native-feedback' : 'native-flow'})"${bidirectional ? ' marker-start="url(#native-coupling)"' : ''}/>`;
      out += textElement(label, cursor + 43, y + 4, { fill: colors.muted, fontSize: 11, fontWeight: 600, maxWidth: 150 });
      cursor += 205;
    });
    return out;
  }

  function nativeDesignStackSvg(mode) {
    const board = document.querySelector('body[data-framework="design-stack"] [data-relation-board]');
    const layer = board?.querySelector('[data-relation-layer]');
    if (!board || !layer) throw new Error('Design Stack board is not ready for export.');

    redrawDesignStackRelations();
    const metrics = getBoardMetrics(board);
    const shiftX = 24;
    const shiftY = 122;
    const width = Math.ceil(metrics.width + shiftX * 2);
    const height = Math.ceil(metrics.height + shiftY + 34);
    const paper = cssVar('--paper', '#09111d');
    const ink = cssVar('--ink', '#ecf3f7');
    const muted = cssVar('--muted', '#9babb8');
    const violet = cssVar('--violet', '#8c7cf6');
    const mint = cssVar('--mint', '#50e3c2');
    const orange = cssVar('--framework-orange', '#eb5a16');
    const flowColor = getComputedStyle(layer.querySelector('.relation-flow') || layer).stroke || '#c5cdd5';
    const colors = { flow: flowColor === 'none' ? '#c5cdd5' : flowColor, coupling: mint, feedback: violet, selected: orange, muted, ink };
    const publication = mode === 'publication';

    let relations = '';
    [...layer.querySelectorAll('.relation-path')].forEach((path) => {
      const type = path.dataset.type;
      const active = !publication && path.classList.contains('is-active');
      const mutedState = !publication && path.classList.contains('is-muted');
      const stroke = active ? orange : type === 'coupling' ? mint : type === 'feedback' ? violet : colors.flow;
      const markerId = active ? 'native-selected' : type === 'coupling' ? 'native-coupling' : type === 'feedback' ? 'native-feedback' : 'native-flow';
      relations += `<path d="${esc(path.getAttribute('d'))}" fill="none" stroke="${esc(stroke)}" stroke-width="${active ? 3.2 : type === 'feedback' ? 1.8 : 1.6}" stroke-linecap="round" stroke-linejoin="round"${type === 'feedback' && !active ? ' stroke-dasharray="6 5"' : ''} opacity="${mutedState ? .18 : 1}" marker-end="url(#${markerId})"${type === 'coupling' ? ` marker-start="url(#${markerId})"` : ''} data-native-relation="${esc(path.dataset.inspectId || '')}"/>`;
    });

    let cards = '';
    [...board.querySelectorAll('.stack-phase')].forEach((phase) => {
      const mutedPhase = !publication && phase.classList.contains('is-filter-muted');
      const phaseOpacity = mutedPhase ? .18 : 1;
      const rail = phase.querySelector('.stack-phase-rail');
      const railBox = localBox(board, rail, metrics);
      const phaseColor = getComputedStyle(phase).getPropertyValue('--phase-color').trim() || getComputedStyle(rail).borderTopColor || ink;
      if (railBox) {
        cards += `<g opacity="${phaseOpacity}" data-native-phase="${esc(phase.dataset.filterKey || '')}"><rect x="${railBox.left.toFixed(2)}" y="${railBox.top.toFixed(2)}" width="${railBox.width.toFixed(2)}" height="${railBox.height.toFixed(2)}" rx="12" fill="${esc(paper)}" stroke="${esc(phaseColor)}" stroke-width="1.2"/>`;
        cards += renderNodeText(board, rail.querySelector('b'), 0, metrics, { fill: '#ffffff', fontSize: 13, fontWeight: 800, opacity: phaseOpacity });
        cards += renderNodeText(board, rail.querySelector('span'), 0, metrics, { fill: ink, fontSize: 12, fontWeight: 800, opacity: phaseOpacity });
        cards += renderNodeText(board, rail.querySelector('small'), 0, metrics, { fill: muted, fontSize: 9, lineHeight: 12, opacity: phaseOpacity });
        cards += `</g>`;
      }

      phase.querySelectorAll('.stack-stage').forEach((stage) => {
        const box = localBox(board, stage, metrics);
        if (!box) return;
        const mutedStage = !publication && (stage.classList.contains('is-filter-muted') || stage.classList.contains('is-search-muted'));
        const opacity = mutedStage ? .18 : 1;
        const active = !publication && stage.classList.contains('is-active');
        const border = active ? orange : phaseColor;
        cards += `<g opacity="${opacity}" data-native-stage="${esc(stage.dataset.nodeId || '')}"><rect x="${box.left.toFixed(2)}" y="${box.top.toFixed(2)}" width="${box.width.toFixed(2)}" height="${box.height.toFixed(2)}" rx="10" fill="${esc(paper)}" stroke="${esc(border)}" stroke-width="${active ? 2.2 : 1.1}"/>`;
        const header = stage.querySelector('header');
        const headerBox = localBox(board, header, metrics);
        if (headerBox) cards += `<line x1="${headerBox.right.toFixed(2)}" y1="${(box.top + 8).toFixed(2)}" x2="${headerBox.right.toFixed(2)}" y2="${(box.bottom - 8).toFixed(2)}" stroke="${esc(muted)}" stroke-opacity=".25"/>`;
        cards += renderNodeText(board, stage.querySelector('header > span'), 0, metrics, { fill: '#ffffff', fontSize: 12, fontWeight: 800, opacity });
        cards += renderNodeText(board, stage.querySelector('h3'), 0, metrics, { fill: ink, fontSize: 12, fontWeight: 800, opacity });
        cards += renderNodeText(board, stage.querySelector('header p'), 0, metrics, { fill: phaseColor, fontSize: 9, fontStyle: 'italic', opacity });
        stage.querySelectorAll('.stack-stage-columns section').forEach((section) => {
          cards += renderNodeText(board, section.querySelector(':scope > b'), 0, metrics, { fill: phaseColor, fontSize: 9, fontWeight: 700, opacity });
          section.querySelectorAll('li').forEach((li) => {
            const selectedItem = !publication && Boolean(li.querySelector('.is-active'));
            cards += renderNodeText(board, li, 0, metrics, { prefix: '• ', fill: selectedItem ? orange : ink, fontSize: 8.4, lineHeight: 10.5, opacity });
          });
        });
        cards += `</g>`;
      });
    });

    const feedback = board.querySelector('.stack-feedback-notes');
    if (feedback) {
      const box = localBox(board, feedback, metrics);
      if (box) {
        cards += `<g data-native-feedback-panel><rect x="${box.left.toFixed(2)}" y="${box.top.toFixed(2)}" width="${box.width.toFixed(2)}" height="${box.height.toFixed(2)}" rx="12" fill="${esc(paper)}" stroke="${esc(violet)}" stroke-width="1.1" stroke-dasharray="5 4"/>`;
        cards += renderNodeText(board, feedback.querySelector('strong'), 0, metrics, { fill: violet, fontSize: 10, fontWeight: 800 });
        cards += renderNodeText(board, feedback.querySelector(':scope > small'), 0, metrics, { fill: muted, fontSize: 8.5, lineHeight: 10.5 });
        feedback.querySelectorAll('button').forEach((button) => {
          const b = localBox(board, button, metrics);
          if (!b) return;
          const active = !publication && button.classList.contains('is-active');
          cards += `<rect x="${b.left.toFixed(2)}" y="${b.top.toFixed(2)}" width="${b.width.toFixed(2)}" height="${b.height.toFixed(2)}" rx="8" fill="${esc(paper)}" stroke="${esc(active ? orange : muted)}" stroke-opacity="${active ? 1 : .28}"/>`;
          cards += renderNodeText(board, button.querySelector('span'), 0, metrics, { fill: ink, fontSize: 8.4, lineHeight: 10.6 });
        });
        cards += `</g>`;
      }
    }

    const compactLegend = board.querySelector('.stack-bottom-legend');
    if (compactLegend) {
      const box = localBox(board, compactLegend, metrics);
      if (box) {
        cards += `<g data-native-bottom-legend><rect x="${box.left.toFixed(2)}" y="${box.top.toFixed(2)}" width="${box.width.toFixed(2)}" height="${box.height.toFixed(2)}" rx="9" fill="${esc(paper)}" stroke="${esc(muted)}" stroke-opacity=".25"/>`;
        const legendItems = [
          ['flow', 'Main design flow', colors.flow],
          ['coupling', 'Strong interdependence', mint],
          ['feedback', 'Feedback / redesign', violet],
          ['selected', 'Selected relationship', orange]
        ];
        let x = box.left + 16;
        const y = box.top + box.height / 2;
        legendItems.forEach(([type, label, color]) => {
          const marker = type === 'coupling' ? 'native-coupling' : type === 'feedback' ? 'native-feedback' : type === 'selected' ? 'native-selected' : 'native-flow';
          cards += `<line x1="${x}" y1="${y}" x2="${x + 28}" y2="${y}" stroke="${esc(color)}" stroke-width="${type === 'selected' ? 3 : 2}"${type === 'feedback' ? ' stroke-dasharray="6 5"' : ''} marker-end="url(#${marker})"${type === 'coupling' ? ` marker-start="url(#${marker})"` : ''}/>`;
          cards += textElement(label, x + 38, y + 4, { fill: muted, fontSize: 9.5, fontWeight: 600, maxWidth: 125 });
          x += 175;
        });
        cards += `</g>`;
      }
    }

    const title = 'PINN Design Stack & Feedback Loops';
    const subtitle = publication ? 'Clean publication view' : 'Current focused view';
    return `<svg xmlns="${svgNS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" data-export-mode="${esc(mode)}" data-export-renderer="native" role="img" aria-labelledby="svg-title svg-desc">
      <title id="svg-title">${esc(title)}</title>
      <desc id="svg-desc">Native vector export of the ten-stage PINN Design Stack with main flow, strong interdependence, and evaluation-guided redesign relationships.</desc>
      ${nativeMarkerDefs(colors)}
      <rect width="${width}" height="${height}" fill="${esc(paper)}"/>
      <text x="24" y="31" fill="${esc(muted)}" font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="700">PINN Review Atlas · Framework</text>
      <text x="24" y="58" fill="${esc(ink)}" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="800">${esc(title)}</text>
      <text x="24" y="80" fill="${esc(muted)}" font-family="Arial,Helvetica,sans-serif" font-size="11">${esc(subtitle)}</text>
      ${nativeLegend(Math.max(24, width - 835), 68, colors)}
      <g id="design-stack-board" transform="translate(${shiftX} ${shiftY})">${relations}${cards}</g>
    </svg>`;
  }

  function downloadNativeDesignStack(mode) {
    try {
      const svg = nativeDesignStackSvg(mode);
      const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = `design-stack-${mode}-view.svg`;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
      const details = document.querySelector('.toolbar-export');
      if (details) details.open = false;
    } catch (error) {
      console.error('Native Design Stack SVG export failed.', error);
    }
  }

  function interceptDesignStackExport() {
    if (root !== 'design-stack') return;
    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-svg],[data-svg-publication]');
      if (!target) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      downloadNativeDesignStack(target.hasAttribute('data-svg-publication') ? 'publication' : 'current');
    }, true);
  }

  function initRuntimeFixes() {
    bindToolbarMenus();
    if (root === 'design-stack') {
      initDesignStack();
      interceptDesignStackExport();
    }
  }

  const mount = document.querySelector('[data-framework-page]');
  if (!mount) return;
  const observer = new MutationObserver(() => {
    bindToolbarMenus();
    if (root === 'design-stack') initDesignStack();
  });
  observer.observe(mount, { childList: true, subtree: true });
  initRuntimeFixes();
})();
