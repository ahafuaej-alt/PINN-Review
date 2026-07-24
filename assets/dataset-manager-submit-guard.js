(() => {
  'use strict';

  const submitButton = document.querySelector('[data-submit-update]');
  if (!submitButton) return;

  // Keep a stable reference to the browser's real window.open before any
  // click-time wrappers are installed by other scripts.
  const nativeOpen = window.open.bind(window);

  submitButton.addEventListener('click', () => {
    window.open = (url, target) => {
      const link = document.createElement('a');
      link.href = String(url);
      link.target = target || '_blank';
      link.rel = 'noopener noreferrer';
      link.hidden = true;
      document.body.append(link);
      link.click();
      link.remove();

      // dataset-manager.js checks this return value. Returning a truthy object
      // prevents its legacy window.location.assign fallback from replacing the
      // Dataset Manager tab in Firefox.
      return { closed: false };
    };

    // Restore normal browser behavior after all click handlers and microtasks
    // for this user gesture have completed.
    setTimeout(() => {
      window.open = nativeOpen;
    }, 0);
  }, { capture: true });
})();
