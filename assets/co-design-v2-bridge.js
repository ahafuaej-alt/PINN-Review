(() => {
  if (document.body.dataset.framework !== 'co-design') return;
  let attempts = 0;
  const enhance = () => {
    const board = document.querySelector('.co-board');
    const concepts = board?.querySelectorAll('.co-concept-item') || [];
    if (board && concepts.length && window.AtlasConcepts?.enhance) {
      window.AtlasConcepts.enhance(board);
      document.documentElement.dataset.coDesignConcepts = 'ready';
      return;
    }
    if (attempts++ < 80) setTimeout(enhance, 50);
  };
  enhance();
})();
