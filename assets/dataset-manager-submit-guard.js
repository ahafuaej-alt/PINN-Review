(() => {
  'use strict';

  const submitButton = document.querySelector('[data-submit-update]');
  let submitLocked = false;
  let submitButtonLabel = '';

  const unlockSubmit = () => {
    if (!submitButton || !submitLocked) return;
    submitLocked = false;
    submitButton.removeAttribute('aria-disabled');
    if (submitButtonLabel) submitButton.textContent = submitButtonLabel;
  };

  if (submitButton) {
    submitButtonLabel = submitButton.textContent;

    // Keep a stable reference to the browser's real window.open before any
    // click-time wrappers are installed by other scripts.
    const nativeOpen = window.open.bind(window);

    submitButton.addEventListener('click', (event) => {
      if (submitLocked) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      submitLocked = true;
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

      // Let the Dataset Manager's own click handler open GitHub first, then lock
      // the button until the form changes or another paper is selected.
      setTimeout(() => {
        window.open = nativeOpen;
        submitButton.disabled = true;
        submitButton.setAttribute('aria-disabled', 'true');
        submitButton.textContent = 'Update request opened';
      }, 0);
    }, { capture: true });

    // A deliberate edit makes the current form eligible for a fresh submission.
    document.addEventListener('input', unlockSubmit, { capture: true });
    document.addEventListener('change', unlockSubmit, { capture: true });
  }

  const results = document.querySelector('[data-manager-results]');
  if (!results) return;

  const nativeScrollIntoView = Element.prototype.scrollIntoView;
  let selectionLock = null;
  let releaseTimer = 0;
  let scrollPrototypePatched = false;

  const patchScrollIntoView = () => {
    if (scrollPrototypePatched) return;
    scrollPrototypePatched = true;
    Element.prototype.scrollIntoView = function (...args) {
      if (selectionLock && (this.matches?.('[data-manager-form]') || this.closest?.('[data-manager-results]'))) return;
      return nativeScrollIntoView.apply(this, args);
    };
  };

  const restoreScrollIntoView = () => {
    if (!scrollPrototypePatched) return;
    Element.prototype.scrollIntoView = nativeScrollIntoView;
    scrollPrototypePatched = false;
  };

  const restoreSelectionPosition = () => {
    if (!selectionLock) return;

    if (selectionLock.preserveExact) {
      results.scrollTop = selectionLock.listScrollTop;
    } else {
      const target = results.querySelector(`[data-manager-paper="${selectionLock.targetId}"]`);
      if (target) {
        const listRect = results.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < listRect.top) results.scrollTop -= listRect.top - targetRect.top;
        else if (targetRect.bottom > listRect.bottom) results.scrollTop += targetRect.bottom - listRect.bottom;
      }
    }

    window.scrollTo(selectionLock.pageX, selectionLock.pageY);
  };

  const finishSelectionLock = () => {
    restoreSelectionPosition();
    selectionLock = null;
    restoreScrollIntoView();
  };

  const settleSelection = () => {
    clearTimeout(releaseTimer);
    requestAnimationFrame(() => {
      restoreSelectionPosition();
      requestAnimationFrame(() => {
        restoreSelectionPosition();
        releaseTimer = window.setTimeout(finishSelectionLock, 120);
      });
    });
  };

  results.addEventListener('click', (event) => {
    const row = event.target.closest('[data-manager-paper]');
    if (!row) return;

    unlockSubmit();
    selectionLock = {
      listScrollTop: results.scrollTop,
      pageX: window.scrollX,
      pageY: window.scrollY,
      targetId: Number(row.dataset.managerPaper),
      preserveExact: event.isTrusted
    };
    patchScrollIntoView();
    settleSelection();
  }, { capture: true });

  new MutationObserver(() => {
    if (selectionLock) requestAnimationFrame(restoreSelectionPosition);
  }).observe(results, { childList: true });
})();