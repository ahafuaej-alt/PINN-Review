(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const year = document.querySelector('[data-year]');

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
