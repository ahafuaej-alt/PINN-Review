(() => {
  // Self-healing deployment freshness guard. Firefox can retain a complete older
  // HTML/asset set after a Pages release; compare the running cache key with the
  // deployed sentinel and move once to a versioned document URL when they differ.
  const runningScript = document.currentScript?.src;
  if (runningScript) {
    const scriptUrl = new URL(runningScript, window.location.href);
    const runningBuild = (scriptUrl.searchParams.get('v') || '').replace(/-ambient$/, '');
    const sentinelUrl = new URL(`deployment-version.json?check=${Date.now()}`, scriptUrl);
    fetch(sentinelUrl, { cache: 'no-store', credentials: 'same-origin' })
      .then((response) => response.ok ? response.json() : null)
      .then((sentinel) => {
        const deployedBuild = String(sentinel?.version || '');
        if (!deployedBuild || !runningBuild || deployedBuild === runningBuild) return;
        const reloadKey = `pinn-atlas-reloaded-${deployedBuild}`;
        try {
          if (sessionStorage.getItem(reloadKey)) return;
          sessionStorage.setItem(reloadKey, '1');
        } catch (_) { /* The versioned URL still provides a fresh document request. */ }
        const pageUrl = new URL(window.location.href);
        pageUrl.searchParams.set('atlas-build', deployedBuild);
        window.location.replace(pageUrl.href);
      })
      .catch(() => { /* Freshness checks must never block Atlas rendering. */ });
  }

  const key = 'pinn-atlas-theme';
  let saved = 'system';
  try { saved = localStorage.getItem(key) || 'system'; } catch (_) { /* Use the system preference. */ }
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  const effective = saved === 'light' || saved === 'dark'
    ? saved
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'dark' ? '#09111d' : '#f5f8fb');

  const whenReady = (callback) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback, { once: true });
    else callback();
  };

  whenReady(() => {
    // Public Atlas hero titles use website-style wording: no em dash and no full stops.
    document.querySelectorAll('.hero h1, .page-hero h1, .ecosystem-hero h1').forEach((heading) => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        walker.currentNode.nodeValue = walker.currentNode.nodeValue
          .replace(/—/g, ' ')
          .replace(/\./g, '')
          .replace(/\s{2,}/g, ' ');
      }
    });

    // One shared, decorative PINN-inspired ambient layer for every public Atlas page.
    // It sits above the body paint but below all page content so it remains visible.
    if (!document.querySelector('.atlas-ambient-background')) {
      const ambient = document.createElement('div');
      ambient.className = 'atlas-ambient-background';
      ambient.dataset.atlasAmbient = '';
      ambient.setAttribute('aria-hidden', 'true');
      ambient.innerHTML = `
        <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
          <g class="atlas-ambient-drift atlas-ambient-drift-a atlas-ambient-network" transform="translate(85 145)">
            <path class="atlas-ambient-edge" d="M38 80 118 28 196 86 154 170 60 178 38 80M118 28 154 170M38 80 196 86M60 178 196 86"/>
            <circle class="atlas-ambient-node atlas-ambient-pulse" cx="38" cy="80" r="7"/>
            <circle class="atlas-ambient-node" cx="118" cy="28" r="6"/>
            <circle class="atlas-ambient-node atlas-ambient-pulse" cx="196" cy="86" r="7"/>
            <circle class="atlas-ambient-node" cx="154" cy="170" r="6"/>
            <circle class="atlas-ambient-node" cx="60" cy="178" r="5"/>
          </g>
          <path class="atlas-ambient-wave atlas-ambient-drift atlas-ambient-drift-b" d="M930 174 C985 116 1040 232 1095 174 S1205 116 1260 174 1370 232 1425 174"/>
          <g class="atlas-ambient-drift atlas-ambient-drift-c atlas-ambient-collocation">
            <circle class="atlas-ambient-point atlas-ambient-pulse" cx="500" cy="185" r="3.5"/>
            <circle class="atlas-ambient-point" cx="550" cy="245" r="2.8"/>
            <circle class="atlas-ambient-point" cx="465" cy="285" r="3"/>
            <circle class="atlas-ambient-point atlas-ambient-pulse" cx="595" cy="320" r="3.4"/>
            <circle class="atlas-ambient-point" cx="525" cy="360" r="2.6"/>
            <circle class="atlas-ambient-point" cx="635" cy="220" r="2.6"/>
            <circle class="atlas-ambient-point atlas-ambient-pulse" cx="675" cy="300" r="3.2"/>
          </g>
          <g class="atlas-ambient-drift atlas-ambient-drift-b atlas-ambient-network atlas-ambient-network-secondary" transform="translate(1260 690)">
            <path class="atlas-ambient-edge atlas-ambient-edge-violet" d="M20 95 92 42 168 72 190 150 112 188 42 160 20 95M92 42 112 188M20 95 168 72M42 160 168 72"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet" cx="20" cy="95" r="5"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet atlas-ambient-pulse" cx="92" cy="42" r="7"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet" cx="168" cy="72" r="6"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet" cx="190" cy="150" r="5"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet atlas-ambient-pulse" cx="112" cy="188" r="7"/>
            <circle class="atlas-ambient-node atlas-ambient-node-violet" cx="42" cy="160" r="5"/>
          </g>
          <path class="atlas-ambient-residual atlas-ambient-drift atlas-ambient-drift-c" d="M120 735 C210 675 250 825 340 765 S480 705 555 785"/>
        </svg>`;
      document.body.prepend(ambient);

      const ambientStyle = document.createElement('style');
      ambientStyle.dataset.atlasAmbientStyle = '';
      ambientStyle.textContent = `
        body { position: relative; isolation: isolate; }
        main, .site-footer { position: relative; z-index: 1; }
        .site-header { z-index: 20; }
        .atlas-ambient-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          inline-size: 100%;
          block-size: 100%;
          max-inline-size: 100vw;
          max-block-size: 100vh;
          overflow: hidden;
          clip-path: inset(0);
          contain: strict;
          pointer-events: none;
          user-select: none;
          opacity: .9;
        }
        .atlas-ambient-background svg {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          overflow: hidden;
          transform-origin: 50% 50%;
          animation: none;
          will-change: auto;
        }
        .atlas-ambient-background * { vector-effect: non-scaling-stroke; }
        .atlas-ambient-edge,
        .atlas-ambient-wave,
        .atlas-ambient-residual {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .atlas-ambient-edge { stroke: var(--mint); stroke-width: 1.2; stroke-opacity: .16; }
        .atlas-ambient-edge-violet { stroke: var(--violet); stroke-opacity: .145; }
        .atlas-ambient-node { fill: var(--paper); stroke: var(--mint); stroke-width: 1.25; stroke-opacity: .30; }
        .atlas-ambient-node-violet { stroke: var(--violet); stroke-opacity: .27; }
        .atlas-ambient-wave { stroke: var(--violet); stroke-width: 1.4; stroke-opacity: .15; stroke-dasharray: 13 10; }
        .atlas-ambient-residual { stroke: var(--mint); stroke-width: 1.25; stroke-dasharray: 6 10; stroke-opacity: .135; }
        .atlas-ambient-point { fill: var(--mint); fill-opacity: .18; }
        .atlas-ambient-drift { transform-box: fill-box; transform-origin: center; will-change: auto; }
        .atlas-ambient-drift-a { animation: none; }
        .atlas-ambient-drift-b { animation: none; }
        .atlas-ambient-drift-c { animation: none; }
        .atlas-ambient-wave.atlas-ambient-drift-b {
          animation: none;
        }
        .atlas-ambient-residual.atlas-ambient-drift-c {
          animation: none;
        }
        .atlas-ambient-pulse { animation: none; }
        html[data-theme="dark"] .atlas-ambient-background { opacity: .95; }
        html[data-theme="dark"] .atlas-ambient-edge { stroke-opacity: .20; }
        html[data-theme="dark"] .atlas-ambient-edge-violet,
        html[data-theme="dark"] .atlas-ambient-wave { stroke-opacity: .18; }
        html[data-theme="dark"] .atlas-ambient-point { fill-opacity: .22; }
        @keyframes atlasAmbientViewportDrift {
          0% { transform: scale(1.055) translate3d(-14px, -8px, 0) rotate(-.18deg); }
          45% { transform: scale(1.06) translate3d(9px, 12px, 0) rotate(.10deg); }
          100% { transform: scale(1.055) translate3d(18px, -5px, 0) rotate(.22deg); }
        }
        @keyframes atlasAmbientDriftA {
          from { transform: translate3d(-7px,-5px,0) rotate(-.35deg); }
          to { transform: translate3d(14px,10px,0) rotate(.55deg); }
        }
        @keyframes atlasAmbientDriftB {
          from { transform: translate3d(10px,-8px,0) rotate(.3deg); }
          to { transform: translate3d(-13px,13px,0) rotate(-.45deg); }
        }
        @keyframes atlasAmbientDriftC {
          from { transform: translate3d(-5px,8px,0); }
          to { transform: translate3d(11px,-10px,0); }
        }
        @keyframes atlasAmbientWaveTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -92; }
        }
        @keyframes atlasAmbientResidualTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 80; }
        }
        @keyframes atlasAmbientPulse {
          from { opacity: .48; }
          to { opacity: 1; }
        }
        @media (max-width: 760px) {
          .atlas-ambient-background { opacity: .62; }
          .atlas-ambient-background svg { animation-duration: 15s; }
          .atlas-ambient-network-secondary { display: none; }
          .atlas-ambient-wave { stroke-opacity: .10; }
          .atlas-ambient-point { fill-opacity: .12; }
        }
        @media (prefers-reduced-motion: reduce) {
          .atlas-ambient-background svg,
          .atlas-ambient-drift,
          .atlas-ambient-pulse,
          .atlas-ambient-wave.atlas-ambient-drift-b,
          .atlas-ambient-residual.atlas-ambient-drift-c {
            animation: none !important;
            transform: none !important;
          }
          .atlas-ambient-background { opacity: .64; }
        }
        @media print { .atlas-ambient-background { display: none !important; } }
      `;
      document.head.append(ambientStyle);

      // Performance contract: the shared scientific background is deliberately static.
      // Continuous full-viewport SVG motion caused persistent compositing and paint work
      // on data-heavy Atlas pages. Keep the visual layer; spend the frame budget on the
      // research explorers, charts, filters, and Design Studio instead.
      ambient.dataset.motionEngine = 'static';
    }

    const nav = document.querySelector('.site-header .nav');
    const navLinks = nav?.querySelector('.nav-links');
    const brand = nav?.querySelector('.brand');
    if (!nav || !navLinks || !brand) return;

    const rootHref = brand.getAttribute('href') || './';
    const rootUrl = new URL(rootHref, window.location.href);
    const normalizePath = (value) => value
      .replace(/^\/+/, '')
      .replace(/index\.html$/i, '')
      .replace(/\/+$/, '')
      .trim();
    const rootPath = rootUrl.pathname.endsWith('/') ? rootUrl.pathname : `${rootUrl.pathname}/`;
    const pagePath = window.location.pathname.startsWith(rootPath)
      ? window.location.pathname.slice(rootPath.length)
      : window.location.pathname;
    const currentRoute = normalizePath(pagePath);

    const navigation = [
      {
        type: 'direct',
        label: 'PINN Ecosystem',
        route: 'pinn-ecosystem/',
        description: 'Layered design system and PINN Design Studio'
      },
      {
        label: 'Methods & Evaluation',
        items: [
          ['Architectures', 'architectures/', 'Network designs, hybrids, and operator-learning structures'],
          ['Activation Functions', 'activation-functions/', 'Reported functions, variants, roles, and source evidence'],
          ['Training', 'training/', 'Loss design, sampling, initialization, and training workflows'],
          ['Optimizers', 'optimizers/', 'Optimization algorithms and training strategies'],
          ['Performance Metrics', 'performance-metrics/', 'Evaluation, reporting coverage, and metric evidence']
        ]
      },
      {
        label: 'Foundations & Terminology',
        items: [
          ['Mathematical Formulations', 'mathematical-formulations/', 'Unified equations, notation, evidence levels, and formulation families'],
          ['PINN Types', 'pinn-types/', 'Classification, families, aliases, and evidence'],
          ['Abbreviations', 'abbreviations/', 'Terminology evidence index traced to reference IDs']
        ]
      },
      {
        label: 'Research Landscape',
        items: [
          ['PINN Realm', 'pinn-realm/', 'Geographic distribution and international collaboration'],
          ['Applications', 'applications/', 'Scientific and engineering application domains'],
          ['References', 'references/', 'Complete 853-paper Atlas bibliography']
        ]
      },
      {
        label: 'Tools & Resources',
        align: 'end',
        items: [
          ['Software', 'software/', 'Libraries, frameworks, solvers, and supporting software'],
          ['Datasets & Benchmarks', 'datasets/', 'Datasets, benchmark equations, and reproducibility resources']
        ]
      },
      {
        label: 'Frameworks',
        items: [
          ['Frameworks Overview', 'frameworks/', 'Four connected views for design, interaction, consequence, and diagnostic redesign'],
          ['Design Stack & Feedback Loops', 'frameworks/design-stack/', 'Ten-stage design flow with evaluation-driven redesign loops'],
          ['PINN Co-Design Framework', 'frameworks/co-design/', 'Coupled systems map for formulation, training, numerics, and reliability'],
          ['Design–Performance Matrix', 'frameworks/design-performance/', 'Fourteen design dimensions across seven performance outcomes'],
          ['Failure-Mode Diagnostics', 'frameworks/failure-diagnostics/', 'Thirteen challenge-to-improvement diagnostic pathways']
        ]
      },
      {
        label: 'Data Governance',
        align: 'end',
        items: [
          ['Dataset Manager', 'dataset-manager/', 'Correct and validate canonical paper records'],
          ['Publisher Metadata Review', 'dataset-manager/review/', 'Review DOI, publisher, and arXiv metadata proposals'],
          ['Reference Changelog', 'references/changelog/', 'Version history, provenance, and data-quality policy']
        ]
      },
      { type: 'direct', label: 'Cite', route: 'cite/', description: 'Citation and version guidance' },
      { type: 'external', label: 'GitHub ↗', href: 'https://github.com/ahafuaej-alt/PINN-Review' }
    ];

    const routeIsCurrent = (route) => normalizePath(route) === currentRoute;
    const makeLink = (label, route, description, external = false) => {
      const link = document.createElement('a');
      link.className = description ? 'atlas-nav-item' : 'atlas-nav-direct';
      link.href = external ? route : `${rootHref}${route}`;
      if (external) link.rel = 'noopener';
      if (!external && routeIsCurrent(route)) link.setAttribute('aria-current', 'page');
      if (description) {
        const name = document.createElement('span');
        name.className = 'atlas-nav-item-name';
        name.textContent = label;
        const meta = document.createElement('span');
        meta.className = 'atlas-nav-item-meta';
        meta.textContent = description;
        link.append(name, meta);
      } else {
        link.textContent = label;
      }
      return link;
    };

    navLinks.replaceChildren();
    navLinks.classList.add('atlas-global-nav');

    navigation.forEach((entry, index) => {
      if (entry.type === 'direct') {
        const link = makeLink(entry.label, entry.route, null);
        link.classList.add('atlas-nav-primary-link');
        if (entry.description) link.title = entry.description;
        navLinks.append(link);
        return;
      }
      if (entry.type === 'external') {
        const link = makeLink(entry.label, entry.href, null, true);
        link.classList.add('atlas-nav-primary-link', 'atlas-nav-external');
        navLinks.append(link);
        return;
      }

      const group = document.createElement('div');
      group.className = 'atlas-nav-group';
      if (entry.align === 'end') group.dataset.align = 'end';
      const groupId = `atlas-nav-group-${index}`;
      const menuId = `${groupId}-menu`;
      const childActive = entry.items.some(([, route]) => routeIsCurrent(route));
      if (childActive) group.classList.add('is-active');

      const toggle = document.createElement('button');
      toggle.className = 'atlas-nav-group-toggle';
      toggle.type = 'button';
      toggle.id = groupId;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', menuId);
      toggle.setAttribute('aria-haspopup', 'true');
      toggle.innerHTML = `<span>${entry.label}</span><svg class="atlas-nav-chevron" viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      const dropdown = document.createElement('div');
      dropdown.className = 'atlas-nav-dropdown';
      dropdown.id = menuId;
      dropdown.setAttribute('aria-labelledby', groupId);
      entry.items.forEach(([label, route, description]) => dropdown.append(makeLink(label, route, description)));
      group.append(toggle, dropdown);
      navLinks.append(group);
    });

    const style = document.createElement('style');
    style.dataset.atlasNavigation = '';
    style.textContent = `
      .atlas-global-nav { isolation: isolate; }
      .atlas-nav-group { position: relative; }
      .atlas-nav-group-toggle {
        display: inline-flex; align-items: center; justify-content: center; gap: .38rem;
        min-height: 38px; padding: .5rem .58rem; border: 0; border-radius: 9px;
        color: var(--muted); background: transparent; font-size: .82rem; font-weight: 650;
        white-space: nowrap; cursor: pointer; transition: color 150ms ease, background 150ms ease;
      }
      .atlas-nav-chevron { width: 10px; height: 7px; flex: 0 0 auto; transition: transform 150ms ease; }
      .atlas-nav-group-toggle:hover,
      .atlas-nav-group-toggle:focus-visible,
      .atlas-nav-group.is-active > .atlas-nav-group-toggle,
      .atlas-nav-group.open > .atlas-nav-group-toggle { color: var(--ink); background: var(--surface-hover); }
      .atlas-nav-group-toggle:focus-visible,
      .atlas-nav-dropdown a:focus-visible,
      .atlas-nav-primary-link:focus-visible { outline: 2px solid var(--mint); outline-offset: 2px; }
      .atlas-nav-group.open > .atlas-nav-group-toggle .atlas-nav-chevron { transform: rotate(180deg); }
      .atlas-nav-dropdown {
        display: none; min-width: 285px; padding: .48rem; border: 1px solid var(--line);
        border-radius: 14px; background: var(--nav-popover); box-shadow: var(--shadow);
      }
      .atlas-nav-item {
        display: grid !important; gap: .08rem; padding: .64rem .72rem !important;
        border-radius: 10px !important; color: var(--muted) !important; text-decoration: none;
      }
      .atlas-nav-item:hover,
      .atlas-nav-item[aria-current="page"] { color: var(--ink) !important; background: var(--surface-hover) !important; }
      .atlas-nav-item-name { color: inherit; font-size: .8rem; font-weight: 720; line-height: 1.25; }
      .atlas-nav-item-meta { max-width: 34ch; color: var(--faint); font-size: .64rem; font-weight: 500; line-height: 1.35; }
      .atlas-nav-primary-link { white-space: nowrap; }
      .atlas-nav-external { color: var(--faint) !important; }

      @media (min-width: 1701px) {
        .nav { width: min(calc(100% - 2rem), 1540px) !important; gap: .55rem !important; }
        .nav-toggle { display: none !important; }
        .nav-links.atlas-global-nav {
          position: static !important; inset: auto !important; display: flex !important;
          align-items: center !important; gap: .08rem !important; padding: 0 !important;
          border: 0 !important; border-radius: 0 !important; background: transparent !important; box-shadow: none !important;
        }
        .nav-links.atlas-global-nav > a { padding: .5rem .58rem !important; font-size: .82rem !important; font-weight: 650 !important; }
        .atlas-nav-dropdown { position: absolute; top: calc(100% + .55rem); left: 0; z-index: 80; }
        .atlas-nav-group[data-align="end"] > .atlas-nav-dropdown { left: auto; right: 0; }
        .atlas-nav-group:hover > .atlas-nav-dropdown,
        .atlas-nav-group.open > .atlas-nav-dropdown { display: grid; }
      }

      @media (max-width: 1700px) {
        .nav-toggle { display: inline-grid !important; place-items: center !important; }
        .nav-links.atlas-global-nav {
          position: absolute !important; top: 64px !important; left: 1rem !important; right: 1rem !important;
          display: none !important; max-height: calc(100vh - 82px); padding: .65rem !important;
          border: 1px solid var(--line) !important; border-radius: 14px !important;
          background: var(--nav-popover) !important; box-shadow: var(--shadow) !important;
          overflow-y: auto; overscroll-behavior: contain;
        }
        .nav-links.atlas-global-nav.open { display: grid !important; gap: .16rem !important; }
        .nav-links.atlas-global-nav > .atlas-nav-primary-link,
        .atlas-nav-group-toggle {
          width: 100%; min-height: 44px; justify-content: space-between;
          padding: .68rem .78rem !important; font-size: .86rem !important; text-align: left;
        }
        .atlas-nav-group > .atlas-nav-dropdown {
          position: static; min-width: 0; margin: .12rem 0 .38rem .55rem; padding: .3rem;
          border-width: 0 0 0 1px; border-radius: 0; background: var(--surface-faint); box-shadow: none;
        }
        .atlas-nav-group.open > .atlas-nav-dropdown { display: grid; }
        .atlas-nav-item { padding: .62rem .7rem !important; }
        .atlas-nav-item-meta { max-width: none; }
      }
    `;
    document.head.append(style);

    const groups = [...navLinks.querySelectorAll('.atlas-nav-group')];
    const closeGroups = (except = null) => {
      groups.forEach((group) => {
        if (group === except) return;
        group.classList.remove('open');
        group.querySelector('.atlas-nav-group-toggle')?.setAttribute('aria-expanded', 'false');
      });
    };

    groups.forEach((group) => {
      const toggle = group.querySelector('.atlas-nav-group-toggle');
      const items = [...group.querySelectorAll('.atlas-nav-dropdown a')];
      toggle?.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = !group.classList.contains('open');
        closeGroups(group);
        group.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
      });
      toggle?.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
        event.preventDefault();
        closeGroups(group);
        group.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        (event.key === 'ArrowDown' ? items[0] : items.at(-1))?.focus();
      });
      items.forEach((item, itemIndex) => {
        item.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            group.classList.remove('open');
            toggle?.setAttribute('aria-expanded', 'false');
            toggle?.focus();
            return;
          }
          if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
          event.preventDefault();
          const direction = event.key === 'ArrowDown' ? 1 : -1;
          const next = (itemIndex + direction + items.length) % items.length;
          items[next]?.focus();
        });
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.atlas-nav-group')) closeGroups();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const openGroup = groups.find((group) => group.classList.contains('open'));
      if (!openGroup) return;
      openGroup.classList.remove('open');
      const toggle = openGroup.querySelector('.atlas-nav-group-toggle');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.focus();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1500) closeGroups();
    }, { passive: true });

    // Framework concepts are bidirectional: canonical Atlas pages expose every
    // framework object that reuses the page-level concept. The index is small,
    // static, and independently versioned with the structured framework data.
    if (!currentRoute.startsWith('frameworks/')) {
      fetch(`${rootHref}data/frameworks/backlinks.json`)
        .then((response) => response.ok ? response.json() : null)
        .then((index) => {
          const links = index?.routes?.[`${currentRoute}/`] || index?.routes?.[currentRoute];
          const footer = document.querySelector('.site-footer');
          if (!links?.length || !footer || document.querySelector('[data-framework-backlinks]')) return;
          const frameworkNames = {
            'design-stack': 'Design Stack',
            'co-design': 'Co-Design',
            'design-performance': 'Design–Performance Matrix',
            'failure-diagnostics': 'Failure Diagnostics'
          };
          const section = document.createElement('section');
          section.className = 'atlas-framework-backlinks';
          section.dataset.frameworkBacklinks = '';
          section.innerHTML = `<div class="container"><div><p>Appears in Frameworks</p><h2>Cross-linked scientific context</h2></div><div class="atlas-framework-backlink-grid">${links.map((link) => `<a href="${rootHref}frameworks/${link.framework === 'design-stack' ? 'design-stack/' : link.framework === 'co-design' ? 'co-design/' : link.framework === 'design-performance' ? 'design-performance/' : 'failure-diagnostics/'}#item=${encodeURIComponent(link.item)}"><small>${frameworkNames[link.framework]}</small><strong>${link.label}</strong><span>Inspect relationship →</span></a>`).join('')}</div></div>`;
          footer.before(section);
          if (!document.querySelector('style[data-framework-backlink-style]')) {
            const backlinkStyle = document.createElement('style');
            backlinkStyle.dataset.frameworkBacklinkStyle = '';
            backlinkStyle.textContent = `.atlas-framework-backlinks{position:relative;z-index:1;padding:clamp(2.5rem,5vw,5rem) 0;border-top:1px solid var(--line);background:color-mix(in srgb,var(--violet) 4%,transparent)}.atlas-framework-backlinks>.container{display:grid;grid-template-columns:minmax(220px,.55fr) 1.45fr;gap:2rem}.atlas-framework-backlinks p{margin:0;color:var(--violet);font:700 .7rem/1 ui-monospace,monospace;text-transform:uppercase}.atlas-framework-backlinks h2{margin:.45rem 0 0;font-size:clamp(1.5rem,3vw,2.8rem)}.atlas-framework-backlink-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}.atlas-framework-backlink-grid a{display:grid;gap:.22rem;padding:.8rem;border:1px solid var(--line);border-radius:.7rem;background:var(--paper);color:inherit}.atlas-framework-backlink-grid a:hover{border-color:var(--mint);transform:translateY(-2px)}.atlas-framework-backlink-grid small{color:var(--violet);font-size:.6rem}.atlas-framework-backlink-grid span{color:var(--muted);font-size:.66rem}@media(max-width:760px){.atlas-framework-backlinks>.container,.atlas-framework-backlink-grid{grid-template-columns:1fr}}`;
            document.head.append(backlinkStyle);
          }
        })
        .catch(() => { /* Cross-links are supplementary and never block the page. */ });
    }
  });
})();
