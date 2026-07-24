(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const nav = document.querySelector('.nav');
  const year = document.querySelector('[data-year]');
  const themeKey = 'pinn-atlas-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Firefox can return null for window.open(..., 'noopener') even when the
  // GitHub tab opens. Dataset Manager previously interpreted that as a blocked
  // popup and replaced its own page with GitHub. Intercept only this submission
  // click, open the prefilled issue through a safe temporary link, and return a
  // truthy window-like value so the manager never triggers its redirect fallback.
  const datasetSubmit = document.querySelector('[data-submit-update]');
  datasetSubmit?.addEventListener('click', () => {
    const nativeOpen = window.open;
    window.open = (url, target) => {
      window.open = nativeOpen;
      const link = document.createElement('a');
      link.href = String(url);
      link.target = target || '_blank';
      link.rel = 'noopener noreferrer';
      link.hidden = true;
      document.body.append(link);
      link.click();
      link.remove();
      return { closed: false };
    };
    queueMicrotask(() => {
      if (window.open !== nativeOpen) window.open = nativeOpen;
    });
  }, { capture: true });

  const savedTheme = () => {
    try {
      const value = localStorage.getItem(themeKey);
      return value === 'light' || value === 'dark' ? value : 'system';
    } catch (_) {
      return 'system';
    }
  };
  const effectiveTheme = () => document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light');
  const themeIcon = (theme) => {
    if (theme === 'light') return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
    if (theme === 'dark') return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.8a8.2 8.2 0 0 1 0 16.4Z" fill="currentColor" opacity=".45"/></svg>';
  };

  const themeSwitch = document.createElement('div');
  themeSwitch.className = 'theme-switch';
  themeSwitch.setAttribute('role', 'group');
  themeSwitch.setAttribute('aria-label', 'Color theme');
  themeSwitch.innerHTML = ['light', 'dark', 'system'].map((theme) => (
    `<button class="theme-choice" type="button" data-theme-choice="${theme}" aria-label="Use ${theme} theme">${themeIcon(theme)}<span>${theme[0].toUpperCase() + theme.slice(1)}</span></button>`
  )).join('');

  const updateThemeControls = () => {
    const mode = savedTheme();
    themeSwitch.querySelectorAll('[data-theme-choice]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === mode));
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effectiveTheme() === 'dark' ? '#09111d' : '#f5f8fb');
  };

  themeSwitch.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme-choice]');
    if (!button) return;
    const theme = button.dataset.themeChoice;
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(themeKey, theme); } catch (_) { /* The current-page choice still works. */ }
    updateThemeControls();
  });

  if (nav) {
    const actions = document.createElement('div');
    actions.className = 'nav-actions';
    actions.append(themeSwitch);
    if (navToggle) actions.append(navToggle);
    nav.append(actions);
  } else {
    themeSwitch.classList.add('theme-switch-floating');
    document.body.prepend(themeSwitch);
  }
  updateThemeControls();
  systemTheme.addEventListener?.('change', () => { if (savedTheme() === 'system') updateThemeControls(); });

  const rootHref = document.querySelector('.brand')?.getAttribute('href') || './';
  if (navLinks) {
    const citeLink = [...navLinks.querySelectorAll('a')].find((link) => link.textContent.trim() === 'Cite');
    const addNavLink = (label, route) => {
      if ([...navLinks.querySelectorAll('a')].some((link) => link.textContent.trim() === label)) return;
      const link = document.createElement('a');
      link.href = `${rootHref}${route}`;
      link.textContent = label;
      navLinks.insertBefore(link, citeLink || navLinks.lastElementChild);
    };
    addNavLink('PINN Realm', 'pinn-realm/');
    addNavLink('Abbreviations', 'abbreviations/');
    addNavLink('References', 'references/');
    addNavLink('Dataset Manager', 'dataset-manager/');
  }

  const footer = document.querySelector('.footer-inner');
  if (footer && ![...footer.querySelectorAll('a')].some((link) => link.textContent.trim() === 'Privacy')) {
    const privacy = document.createElement('a');
    privacy.href = `${rootHref}privacy/`;
    privacy.textContent = 'Privacy';
    footer.append(privacy);
  }

  if (year) year.textContent = new Date().getFullYear();

  const backToTop = document.createElement('button');
  backToTop.type = 'button';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.title = 'Back to top';
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 14 6-6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.append(backToTop);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const setScrollState = () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    backToTop.classList.toggle('visible', window.scrollY > 650);
  };
  setScrollState();
  window.addEventListener('scroll', setScrollState, { passive: true });

  navToggle?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });
  navLinks?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Dataset Manager paper browser enhancement. The module intentionally renders
  // a short preview, which prevents reviewers from scrolling through the full
  // bibliography. Replace that preview with all 853 records, preserve search,
  // and add direct previous/next-paper navigation.
  const managerResults = document.querySelector('[data-manager-results]');
  const managerSearch = document.querySelector('[data-manager-search]');
  const managerSearchField = managerSearch?.closest('.search-field');
  if (managerResults && managerSearch && managerSearchField) {
    const browserStyle = document.createElement('style');
    browserStyle.textContent = `
      .manager-results {
        height: min(68vh, 720px);
        min-height: 420px;
        max-height: none;
        align-content: start;
        overflow-y: scroll;
        scrollbar-gutter: stable;
      }
      .manager-browser-controls {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: .45rem;
        margin-top: .55rem;
      }
      .manager-browser-controls button {
        min-height: 34px;
        padding: .4rem .62rem;
        border: 1px solid var(--line);
        border-radius: 8px;
        color: var(--ink);
        background: var(--surface-faint);
        font-size: .65rem;
        font-weight: 700;
        cursor: pointer;
      }
      .manager-browser-controls button:hover:not(:disabled) {
        border-color: var(--mint);
        background: var(--panel-strong);
      }
      .manager-browser-controls button:disabled {
        opacity: .4;
        cursor: not-allowed;
      }
      .manager-browser-position {
        color: var(--faint);
        font-family: var(--mono);
        font-size: .6rem;
        text-align: center;
      }
      @media (max-width: 760px) {
        .manager-results {
          height: 56vh;
          min-height: 360px;
        }
      }
    `;
    document.head.append(browserStyle);

    const controls = document.createElement('div');
    controls.className = 'manager-browser-controls';
    controls.innerHTML = '<button type="button" data-manager-previous aria-label="Open previous paper">← Previous</button><span class="manager-browser-position" data-manager-position>Loading papers…</span><button type="button" data-manager-next aria-label="Open next paper">Next →</button>';
    managerSearchField.insertAdjacentElement('afterend', controls);

    const previousButton = controls.querySelector('[data-manager-previous]');
    const nextButton = controls.querySelector('[data-manager-next]');
    const position = controls.querySelector('[data-manager-position]');
    let managerPapers = [];
    let renderScheduled = false;

    const managerNormalize = (value) => String(value ?? '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('en');
    const managerEscape = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[character]));
    const selectedPaperId = () => Number(new URLSearchParams(location.search).get('id'));

    let resultsObserver;
    const renderFullPaperList = ({ scrollSelected = false } = {}) => {
      if (!managerPapers.length) return;
      const query = managerNormalize(managerSearch.value.trim().replace(/^\[|\]$/g, ''));
      const selectedId = selectedPaperId();
      const matches = query
        ? managerPapers.filter((paper) => [
          paper.id,
          paper.title,
          paper.doi,
          paper.venue?.name,
          paper.venue?.type,
          (paper.countries || []).join(' ')
        ].some((value) => managerNormalize(value).includes(query)))
        : managerPapers;

      resultsObserver?.disconnect();
      managerResults.innerHTML = matches.length
        ? matches.map((paper) => `<button type="button" role="option" data-manager-paper="${paper.id}" aria-selected="${paper.id === selectedId}"><span>[${paper.id}]</span><strong title="${managerEscape(paper.title)}">${managerEscape(paper.title)}</strong><small>${managerEscape(paper.year ?? 'Year not identified')} · ${managerEscape(String(paper.venue?.type || 'unknown').replaceAll('_', ' '))} · ${managerEscape(paper.venue?.name || 'Source not identified')}</small></button>`).join('')
        : '<p class="manager-muted">No matching paper record.</p>';
      resultsObserver?.observe(managerResults, { childList: true });

      const globalIndex = managerPapers.findIndex((paper) => paper.id === selectedId);
      previousButton.disabled = globalIndex <= 0;
      nextButton.disabled = globalIndex < 0 || globalIndex >= managerPapers.length - 1;
      position.textContent = query
        ? `${matches.length.toLocaleString()} matching paper${matches.length === 1 ? '' : 's'}`
        : globalIndex >= 0
          ? `Paper ${globalIndex + 1} of ${managerPapers.length}`
          : `${managerPapers.length.toLocaleString()} papers`;

      if (scrollSelected && selectedId) {
        requestAnimationFrame(() => {
          managerResults.querySelector(`[data-manager-paper="${selectedId}"]`)?.scrollIntoView({ block: 'nearest' });
        });
      }
    };

    const scheduleFullRender = (scrollSelected = false) => {
      if (renderScheduled) return;
      renderScheduled = true;
      queueMicrotask(() => {
        renderScheduled = false;
        renderFullPaperList({ scrollSelected });
      });
    };

    resultsObserver = new MutationObserver(() => scheduleFullRender(true));
    resultsObserver.observe(managerResults, { childList: true });
    managerSearch.addEventListener('input', () => setTimeout(() => renderFullPaperList(), 0), { capture: true });

    const openAdjacentPaper = (offset) => {
      if (!managerPapers.length) return;
      const currentIndex = managerPapers.findIndex((paper) => paper.id === selectedPaperId());
      const targetIndex = currentIndex < 0
        ? (offset > 0 ? 0 : managerPapers.length - 1)
        : Math.min(managerPapers.length - 1, Math.max(0, currentIndex + offset));
      managerSearch.value = '';
      renderFullPaperList();
      managerResults.querySelector(`[data-manager-paper="${managerPapers[targetIndex].id}"]`)?.click();
    };

    previousButton.addEventListener('click', () => openAdjacentPaper(-1));
    nextButton.addEventListener('click', () => openAdjacentPaper(1));

    fetch('../data/papers-master.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`Master dataset returned ${response.status}`);
        return response.json();
      })
      .then((master) => {
        managerPapers = [...(master.papers || [])].sort((left, right) => Number(left.id) - Number(right.id));
        renderFullPaperList({ scrollSelected: true });
      })
      .catch(() => {
        position.textContent = 'Paper list unavailable';
      });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) items.forEach((item) => item.classList.add('visible'));
  else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }
})();
