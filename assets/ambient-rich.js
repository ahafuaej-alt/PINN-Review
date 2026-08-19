(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const svgNS = 'http://www.w3.org/2000/svg';

  const pointCloud = [
    [120,126,2.4,'mint'], [184,214,1.9,'violet'], [268,116,2.1,'mint'], [342,302,2.7,'blue'],
    [426,154,1.8,'mint'], [514,414,2.4,'violet'], [604,112,2.0,'blue'], [694,246,2.5,'mint'],
    [786,382,1.7,'violet'], [862,132,2.4,'mint'], [954,322,2.1,'blue'], [1048,210,2.8,'violet'],
    [1136,404,1.8,'mint'], [1226,142,2.5,'blue'], [1322,286,2.2,'mint'], [1438,178,2.9,'violet'],
    [1520,382,1.8,'mint'], [156,548,2.3,'blue'], [252,668,1.9,'mint'], [356,532,2.6,'violet'],
    [472,742,2.1,'blue'], [586,594,2.8,'mint'], [704,816,1.8,'violet'], [824,632,2.4,'blue'],
    [938,760,2.0,'mint'], [1058,586,2.7,'violet'], [1182,842,1.9,'blue'], [1296,654,2.5,'mint'],
    [1404,804,2.2,'violet'], [1518,618,2.7,'blue']
  ];

  const fieldMarkup = `
    <g class="atlas-rich-layer atlas-rich-field" data-depth="0.16">
      <path class="atlas-rich-contour contour-a" d="M-120 236 C178 34 438 78 630 246 S1002 446 1280 246 1588 38 1730 150"/>
      <path class="atlas-rich-contour contour-b" d="M-90 318 C210 120 470 162 660 326 S1015 512 1302 334 1592 126 1730 238"/>
      <path class="atlas-rich-contour contour-c" d="M-60 404 C238 220 496 254 694 410 S1040 586 1320 428 1596 232 1734 332"/>
      <ellipse class="atlas-rich-orbit orbit-a" cx="1320" cy="188" rx="310" ry="150"/>
      <ellipse class="atlas-rich-orbit orbit-b" cx="1320" cy="188" rx="238" ry="111"/>
      <ellipse class="atlas-rich-orbit orbit-c" cx="214" cy="820" rx="280" ry="138"/>
      <ellipse class="atlas-rich-orbit orbit-d" cx="214" cy="820" rx="205" ry="96"/>
    </g>
    <g class="atlas-rich-layer atlas-rich-flow-layer" data-depth="0.34">
      <path class="atlas-rich-flow track-mint" data-rich-track="0" d="M-120 244 C210 78 454 382 776 240 S1270 118 1710 276"/>
      <path class="atlas-rich-flow track-violet" data-rich-track="1" d="M-100 530 C176 372 430 706 770 548 S1270 342 1700 612"/>
      <path class="atlas-rich-flow track-blue" data-rich-track="2" d="M-90 842 C286 666 560 978 920 814 S1360 672 1704 786"/>
      <path class="atlas-rich-flow track-faint" data-rich-track="3" d="M286 -90 C494 194 156 392 390 644 S722 902 1020 1090"/>
    </g>
    <g class="atlas-rich-layer atlas-rich-cloud" data-depth="0.46">
      ${pointCloud.map(([x,y,r,tone], i) => `<circle class="atlas-rich-speck tone-${tone}" data-rich-speck="${i}" cx="${x}" cy="${y}" r="${r}"/>`).join('')}
    </g>
    <g class="atlas-rich-layer atlas-rich-signal-layer" data-depth="0.58">
      <circle class="atlas-rich-signal signal-mint" data-rich-signal="0" data-track="0" data-speed="0.000055" data-phase="0.03" r="5.2"/>
      <circle class="atlas-rich-signal signal-violet" data-rich-signal="1" data-track="0" data-speed="0.000043" data-phase="0.48" r="3.5"/>
      <circle class="atlas-rich-signal signal-violet" data-rich-signal="2" data-track="1" data-speed="0.000050" data-phase="0.16" r="4.8"/>
      <circle class="atlas-rich-signal signal-blue" data-rich-signal="3" data-track="1" data-speed="0.000039" data-phase="0.67" r="3.4"/>
      <circle class="atlas-rich-signal signal-blue" data-rich-signal="4" data-track="2" data-speed="0.000047" data-phase="0.27" r="4.5"/>
      <circle class="atlas-rich-signal signal-mint" data-rich-signal="5" data-track="2" data-speed="0.000041" data-phase="0.78" r="3.3"/>
      <circle class="atlas-rich-signal signal-mint" data-rich-signal="6" data-track="3" data-speed="0.000036" data-phase="0.12" r="4.0"/>
      <circle class="atlas-rich-signal signal-violet" data-rich-signal="7" data-track="3" data-speed="0.000031" data-phase="0.61" r="3.1"/>
    </g>`;

  const augment = () => {
    const ambient = document.querySelector('.atlas-ambient-background');
    const svg = ambient?.querySelector('svg');
    if (!ambient || !svg || svg.dataset.richAmbient === 'true') return false;

    svg.dataset.richAmbient = 'true';
    ambient.dataset.motionLevel = 'rich';
    svg.insertAdjacentHTML('afterbegin', fieldMarkup);

    const layers = [...svg.querySelectorAll('.atlas-rich-layer')];
    const tracks = [...svg.querySelectorAll('[data-rich-track]')];
    const signals = [...svg.querySelectorAll('[data-rich-signal]')].map((node) => ({
      node,
      track: tracks[Number(node.dataset.track)],
      speed: Number(node.dataset.speed),
      phase: Number(node.dataset.phase)
    }));
    const specks = [...svg.querySelectorAll('[data-rich-speck]')];

    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollPhase = 0;
    let frame = 0;
    let running = false;

    const setPointerTarget = (event) => {
      if (event.pointerType === 'touch') return;
      targetX = Math.max(-1, Math.min(1, (event.clientX / Math.max(innerWidth, 1) - 0.5) * 2));
      targetY = Math.max(-1, Math.min(1, (event.clientY / Math.max(innerHeight, 1) - 0.5) * 2));
    };

    const resetPointer = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateScroll = () => {
      scrollPhase = Math.max(-1, Math.min(1, Math.sin(scrollY * 0.0025)));
    };

    const renderStatic = () => {
      signals.forEach((signal, index) => {
        if (!signal.track) return;
        const length = signal.track.getTotalLength();
        const point = signal.track.getPointAtLength(length * ((signal.phase + index * 0.071) % 1));
        signal.node.setAttribute('cx', point.x.toFixed(2));
        signal.node.setAttribute('cy', point.y.toFixed(2));
      });
      layers.forEach((layer) => layer.removeAttribute('transform'));
      specks.forEach((speck) => speck.removeAttribute('transform'));
      ambient.dataset.richEngine = reducedMotion.matches ? 'reduced' : 'idle';
    };

    const tick = (time) => {
      if (!running) return;
      if (reducedMotion.matches) {
        running = false;
        frame = 0;
        renderStatic();
        return;
      }

      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;
      const seconds = time / 1000;

      layers.forEach((layer, index) => {
        const depth = Number(layer.dataset.depth || 0.2);
        const driftX = Math.sin(seconds * (0.11 + index * 0.018) + index) * (4 + depth * 8);
        const driftY = Math.cos(seconds * (0.09 + index * 0.014) + index * 0.8) * (3 + depth * 6);
        const px = pointerX * depth * 34;
        const py = pointerY * depth * 24 + scrollPhase * depth * 8;
        layer.setAttribute('transform', `translate(${(driftX + px).toFixed(2)} ${(driftY + py).toFixed(2)})`);
      });

      signals.forEach((signal) => {
        if (!signal.track) return;
        const length = signal.track.getTotalLength();
        const progress = (signal.phase + time * signal.speed) % 1;
        const point = signal.track.getPointAtLength(length * progress);
        signal.node.setAttribute('cx', point.x.toFixed(2));
        signal.node.setAttribute('cy', point.y.toFixed(2));
      });

      specks.forEach((speck, index) => {
        const dx = Math.sin(seconds * (0.42 + (index % 5) * 0.035) + index * 1.73) * (2.4 + (index % 4));
        const dy = Math.cos(seconds * (0.37 + (index % 7) * 0.025) + index * 1.21) * (1.8 + (index % 3));
        speck.setAttribute('transform', `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`);
      });

      ambient.dataset.richEngine = 'raf';
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reducedMotion.matches || document.hidden) return;
      running = true;
      ambient.dataset.richEngine = 'raf';
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    document.addEventListener('pointermove', setPointerTarget, { passive: true });
    document.addEventListener('pointerleave', resetPointer, { passive: true });
    window.addEventListener('blur', resetPointer, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (!reducedMotion.matches) start();
    });
    reducedMotion.addEventListener?.('change', () => {
      stop();
      if (reducedMotion.matches) renderStatic();
      else start();
    });

    updateScroll();
    renderStatic();
    start();
    return true;
  };

  const boot = () => {
    if (augment()) return;
    let attempts = 0;
    const retry = () => {
      if (augment() || attempts++ > 30) return;
      requestAnimationFrame(retry);
    };
    requestAnimationFrame(retry);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
