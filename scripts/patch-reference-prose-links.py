from pathlib import Path

concepts = Path('assets/concepts.js')
text = concepts.read_text()
old = "  const mathManagedSelector = 'mjx-container,mjx-assistive-mml,.MathJax,.equation-box,[data-formulation-catalogue],[data-notation-table],[data-mathjax-managed]';\n  const blockedConceptSelector = `a,button,label,summary,select,option,textarea,input,pre,code,kbd,samp,script,style,svg,math,[contenteditable=\"true\"],[data-no-concept-link],[data-concept-id],${mathManagedSelector}`;"
new = "  const mathManagedSelector = 'mjx-container,mjx-assistive-mml,.MathJax,.equation-box,[data-formulation-catalogue],[data-notation-table],[data-mathjax-managed]';\n  const bibliographicProseSelector = '.bibliography-card,[data-paper-title],[data-paper-abstract],[data-paper-citation],[data-reference-title],[data-reference-abstract],[data-reference-citation],.paper-title,.reference-title,.citation-title,.citation-text,.mdpi-reference,.abstract-text,.full-citation';\n  const blockedConceptSelector = `a,button,label,summary,select,option,textarea,input,pre,code,kbd,samp,script,style,svg,math,[contenteditable=\"true\"],[data-no-concept-link],[data-concept-id],${bibliographicProseSelector},${mathManagedSelector}`;"
if old not in text:
    raise SystemExit('concept selector anchor not found')
concepts.write_text(text.replace(old, new, 1))

qa = Path('scripts/visual-qa-concept-regressions.mjs')
text = qa.read_text()
marker = "  await context.close();\n  console.log('Concept runtime regression QA passed.');"
block = r'''  {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`${baseUrl}/references/?q=1#ref=1`, { waitUntil: 'networkidle' });
    await page.waitForSelector('#ref-1 .citation-title');
    await page.waitForFunction(() => Boolean(window.AtlasConcepts));
    await page.waitForTimeout(250);
    const snapshot = await page.evaluate(() => ({
      title: document.querySelector('#ref-1 .citation-title')?.textContent?.trim() || '',
      titleConcepts: document.querySelectorAll('.bibliography-card .citation-title .atlas-concept').length,
      citationConcepts: document.querySelectorAll('.bibliography-card .citation-text .atlas-concept').length,
      abstractConcepts: document.querySelectorAll('.bibliography-card .abstract-text .atlas-concept').length,
      fullCitationConcepts: document.querySelectorAll('.bibliography-card .full-citation .atlas-concept').length
    }));
    assert(snapshot.title.includes('Software-based automatic differentiation is flawed'), `Unexpected Reference [1] title: ${snapshot.title}`);
    assert(snapshot.titleConcepts === 0, 'Canonical auto-linking still modifies paper titles on the References page.');
    assert(snapshot.citationConcepts === 0, 'Canonical auto-linking still modifies formatted citations on the References page.');
    assert(snapshot.abstractConcepts === 0, 'Canonical auto-linking still modifies paper abstracts on the References page.');
    assert(snapshot.fullCitationConcepts === 0, 'Canonical auto-linking still modifies the full citation in reference details.');
    assert(errors.length === 0, `References page raised runtime errors: ${errors.join(' | ')}`);
    await page.close();
  }

'''
if marker not in text:
    raise SystemExit('browser QA insertion anchor not found')
qa.write_text(text.replace(marker, block + marker, 1))

validator = Path('scripts/validate-concepts.mjs')
text = validator.read_text()
anchor = "for (const token of ['data/concepts/core.json', 'data/concepts/registry.json', 'loadFullRegistry', 'MutationObserver', \"aria-haspopup\", \"event.key === 'Escape'\", 'pointerover', 'focusin', 'data-concept-open', 'Where this concept appears', 'Supporting evidence']) if (!interaction.includes(token)) failures.push(`Concept interaction model lacks: ${token}`);"
extra = anchor + "\nfor (const token of ['bibliographicProseSelector', '.bibliography-card', '[data-paper-title]', '[data-paper-abstract]', '.citation-title', '.citation-text', '.abstract-text']) if (!interaction.includes(token)) failures.push(`Concept bibliographic-prose guard lacks: ${token}`);"
if anchor not in text:
    raise SystemExit('validator insertion anchor not found')
validator.write_text(text.replace(anchor, extra, 1))
