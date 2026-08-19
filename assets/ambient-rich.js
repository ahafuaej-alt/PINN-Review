(() => {
  // Optimized deployment profile: 2 trajectories, 2 signals, 10 collocation points.
  window.__ATLAS_BUILD__ = 'optimized-lite-v2';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compactViewport = window.matchMedia('(max-width: 760px)');

  const pointCloud = [
    [150,150,2.5,'mint','-5px','3px','5px','-4px','8.4s','-1.4s'],
    [320,320,2.0,'violet','4px','-5px','-4px','4px','10.2s','-4.1s'],
    [500,190,2.3,'blue','-4px','-3px','6px','4px','9.3s','-2.8s'],
    [690,430,2.6,'mint','5px','4px','-5px','-3px','11.1s','-6.2s'],
    [860,230,2.1,'violet','-6px','2px','4px','-5px','8.8s','-3.6s'],
    [1030,570,2.5,'blue','3px','-5px','-4px','5px','10.7s','-5.0s'],
    [1180,310,2.2,'mint','-5px','-4px','5px','3px','9.8s','-1.9s'],
    [1335,690,2.7,'violet','6px','3px','-5px','-4px','11.6s','-7.1s'],
    [1450,440,2.0,'blue','-4px','5px','4px','-3px','9.0s','-4.7s'],
    [720,790,2.4,'mint','5px','-3px','-6px','4px','10.4s','-2.2s']
  ];

  const fieldMarkup = `
    <g class="atlas-rich-flow-layer">
      <path class="atlas-rich-flow track-mint" data-rich-track="0" d="M-120 278 C210 92 478 392 788 262 S1270 118 1710 312"/>
      <path class="atlas-rich-flow track-violet" data-rich-track="1" d="M-100 690 C232 502 492 814 820 664 S1294 498 1700 724"/>
    </g>
    <g class="atlas-rich-cloud">
      ${pointCloud.map(([x,y,r,tone,x1,y1,x2,y2,dur,delay], i) => `<circle class="atlas-rich-speck tone-${tone}" data-rich-speck="${i}" cx="${x}" cy="${y}" r="${r}" style="--x1:${x1};--y1:${y1};--x2:${x2};--y2:${y2};--dur:${dur};--delay:${delay}"/>`).join('')}
    </g>
    <g class="atlas-rich-signal-layer">
      <g class="atlas-rich-signal signal-mint" data-rich-signal="0" data-track="0" data-speed="0.000040" data-phase="0.05">
        <circle class="atlas-rich-signal-halo" r="10"/><circle class="atlas-rich-signal-core" r="4.4"/>
      </g>
      <g class="atlas-rich-signal signal-violet" data-rich-signal="1" data-track="1" data-speed="0.000034" data-phase="0.54">
        <circle class="atlas-rich-signal-halo" r="10"/><circle class="atlas-rich-signal-core" r="4.4"/>
      </g>
    </g>`;

  const augment = () => {
    const ambient = document.querySelector('.atlas-ambient-background');
    const svg = ambient?.querySelector('svg');
    if (!ambient || !svg || svg.dataset.richAmbient === 'true') return false;

    svg.dataset.richAmbient = 'true';
    ambient.dataset.motionLevel = 'optimized';
    svg.insertAdjacentHTML('afterbegin', fieldMarkup);

    const tracks = [...svg.querySelectorAll('[data-rich-track]')];
    const signals = [...svg.querySelectorAll('[data-rich-signal]')].map((node) => {
      const track = tracks[Number(node.dataset.track)];
      return {
        node,
        track,
        length: track ? track.getTotalLength() : 0,
        speed: Number(node.dataset.speed),
        phase: Number(node.dataset.phase)
      };
    });

    let frame = 0;
    let running = false;
    let lastPaint = 0;
    const frameInterval = () => 1000 / (compactViewport.matches ? 24 : 30);

    const placeSignals = (time = 0) => {
      signals.forEach((signal) => {
        if (!signal.track || !signal.length) return;
        const progress = (signal.phase + time * signal.speed) % 1;
        const point = signal.track.getPointAtLength(signal.length * progress);
        signal.node.setAttribute('transform', `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`);
      });
    };

    const renderStatic = () => {
      placeSignals(0);
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

      if (time - lastPaint >= frameInterval()) {
        lastPaint = time;
        placeSignals(time);
        ambient.dataset.richEngine = 'raf-lite';
      }
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reducedMotion.matches || document.hidden) return;
      running = true;
      lastPaint = 0;
      ambient.dataset.richEngine = 'raf-lite';
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (!reducedMotion.matches) start();
    });

    reducedMotion.addEventListener?.('change', () => {
      stop();
      if (reducedMotion.matches) renderStatic();
      else start();
    });

    renderStatic();
    start();
    return true;
  };

  const boot = () => {
    if (augment()) return;
    let attempts = 0;
    const retry = () => {
      if (augment() || attempts++ > 20) return;
      requestAnimationFrame(retry);
    };
    requestAnimationFrame(retry);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
