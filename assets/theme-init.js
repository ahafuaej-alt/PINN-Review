(() => {
  const key = 'pinn-atlas-theme';
  let saved = 'system';
  try { saved = localStorage.getItem(key) || 'system'; } catch (_) { /* Use the system preference. */ }
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  const effective = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'dark' ? '#09111d' : '#f5f8fb');

  const whenReady = (callback) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback, { once: true });
    else callback();
  };

  whenReady(() => {
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
        label: 'Taxonomy & Terminology',
        items: [
          ['PINN Types', 'pinn-types/', 'Classification, families, aliases, and evidence'],
          ['Abbreviations', 'abbreviations/', 'Terminology evidence index traced to reference IDs']
        ]
      },
      {
        label: 'Research Landscape',
        items: [
          ['PINN Realm', 'pinn-realm/', 'Geographic distribution and international collaboration'],
          ['Applications', 'applications/', 'Scientific and engineering application domains'],
          ['References', 'references/', 'Complete 853-paper review bibliography']
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: .38rem;
        min-height: 38px;
        padding: .5rem .58rem;
        border: 0;
        border-radius: 9px;
        color: var(--muted);
        background: transparent;
        font-size: .82rem;
        font-weight: 650;
        white-space: nowrap;
        cursor: pointer;
        transition: color 150ms ease, background 150ms ease;
      }
      .atlas-nav-chevron { width: 10px; height: 7px; flex: 0 0 auto; transition: transform 150ms ease; }
      .atlas-nav-group-toggle:hover,
      .atlas-nav-group-toggle:focus-visible,
      .atlas-nav-group.is-active > .atlas-nav-group-toggle,
      .atlas-nav-group.open > .atlas-nav-group-toggle {
        color: var(--ink);
        background: var(--surface-hover);
      }
      .atlas-nav-group-toggle:focus-visible,
      .atlas-nav-dropdown a:focus-visible,
      .atlas-nav-primary-link:focus-visible {
        outline: 2px solid var(--mint);
        outline-offset: 2px;
      }
      .atlas-nav-group.open > .atlas-nav-group-toggle .atlas-nav-chevron { transform: rotate(180deg); }
      .atlas-nav-dropdown {
        display: none;
        min-width: 285px;
        padding: .48rem;
        border: 1px solid var(--line);
        border-radius: 14px;
        background: var(--nav-popover);
        box-shadow: var(--shadow);
      }
      .atlas-nav-item {
        display: grid !important;
        gap: .08rem;
        padding: .64rem .72rem !important;
        border-radius: 10px !important;
        color: var(--muted) !important;
        text-decoration: none;
      }
      .atlas-nav-item:hover,
      .atlas-nav-item[aria-current="page"] {
        color: var(--ink) !important;
        background: var(--surface-hover) !important;
      }
      .atlas-nav-item-name { color: inherit; font-size: .8rem; font-weight: 720; line-height: 1.25; }
      .atlas-nav-item-meta { max-width: 34ch; color: var(--faint); font-size: .64rem; font-weight: 500; line-height: 1.35; }
      .atlas-nav-primary-link { white-space: nowrap; }
      .atlas-nav-external { color: var(--faint) !important; }

      @media (min-width: 1501px) {
        .nav { width: min(calc(100% - 2rem), 1540px) !important; gap: .55rem !important; }
        .nav-toggle { display: none !important; }
        .nav-links.atlas-global-nav {
          position: static !important;
          inset: auto !important;
          display: flex !important;
          align-items: center !important;
          gap: .08rem !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }
        .nav-links.atlas-global-nav > a {
          padding: .5rem .58rem !important;
          font-size: .82rem !important;
          font-weight: 650 !important;
        }
        .atlas-nav-dropdown {
          position: absolute;
          top: calc(100% + .55rem);
          left: 0;
          z-index: 80;
        }
        .atlas-nav-group[data-align="end"] > .atlas-nav-dropdown { left: auto; right: 0; }
        .atlas-nav-group:hover > .atlas-nav-dropdown,
        .atlas-nav-group.open > .atlas-nav-dropdown { display: grid; }
      }

      @media (max-width: 1500px) {
        .nav-toggle { display: inline-grid !important; place-items: center !important; }
        .nav-links.atlas-global-nav {
          position: absolute !important;
          top: 64px !important;
          left: 1rem !important;
          right: 1rem !important;
          display: none !important;
          max-height: calc(100vh - 82px);
          padding: .65rem !important;
          border: 1px solid var(--line) !important;
          border-radius: 14px !important;
          background: var(--nav-popover) !important;
          box-shadow: var(--shadow) !important;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .nav-links.atlas-global-nav.open { display: grid !important; gap: .16rem !important; }
        .nav-links.atlas-global-nav > .atlas-nav-primary-link,
        .atlas-nav-group-toggle {
          width: 100%;
          min-height: 44px;
          justify-content: space-between;
          padding: .68rem .78rem !important;
          font-size: .86rem !important;
          text-align: left;
        }
        .atlas-nav-group > .atlas-nav-dropdown {
          position: static;
          min-width: 0;
          margin: .12rem 0 .38rem .55rem;
          padding: .3rem;
          border-width: 0 0 0 1px;
          border-radius: 0;
          background: var(--surface-faint);
          box-shadow: none;
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
  });
})();
