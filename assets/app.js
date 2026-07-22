(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const nav = document.querySelector('.nav');
  const year = document.querySelector('[data-year]');

  const themeKey = 'pinn-atlas-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => {
    const selected = document.documentElement.dataset.theme;
    return selected === 'light' || selected === 'dark'
      ? selected
      : (systemTheme.matches ? 'dark' : 'light');
  };
  const themeIcon = (theme) => theme === 'light'
    ? '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  const themeSwitch = document.createElement('div');
  themeSwitch.className = 'theme-switch';
  themeSwitch.setAttribute('role', 'group');
  themeSwitch.setAttribute('aria-label', 'Color theme');
  themeSwitch.innerHTML = ['light', 'dark'].map((theme) => (
    `<button class="theme-choice" type="button" data-theme-choice="${theme}" aria-label="Use ${theme} theme">${themeIcon(theme)}<span>${theme[0].toUpperCase() + theme.slice(1)}</span></button>`
  )).join('');

  const updateThemeControls = () => {
    const active = currentTheme();
    themeSwitch.querySelectorAll('[data-theme-choice]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === active));
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      active === 'dark' ? '#09111d' : '#f5f8fb'
    );
  };

  themeSwitch.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme-choice]');
    if (!button) return;
    const theme = button.dataset.themeChoice;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(themeKey, theme);
    } catch (_) {
      // The visual choice still works for the current page without storage.
    }
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
  systemTheme.addEventListener?.('change', () => {
    if (!document.documentElement.dataset.theme) updateThemeControls();
  });

  if (navLinks) {
    const rootHref = document.querySelector('.brand')?.getAttribute('href') || './';
    const citeLink = [...navLinks.querySelectorAll('a')].find((link) => link.textContent.trim() === 'Cite');
    const addNavLink = (label, route) => {
      if ([...navLinks.querySelectorAll('a')].some((link) => link.textContent.trim() === label)) return;
      const link = document.createElement('a');
      link.href = `${rootHref}${route}`;
      link.textContent = label;
      navLinks.insertBefore(link, citeLink || navLinks.lastElementChild);
    };
    addNavLink('Abbreviations', 'abbreviations/');
    addNavLink('References', 'references/');
  }

  if (year) year.textContent = new Date().getFullYear();

  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

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

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');

  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
  } else {
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
