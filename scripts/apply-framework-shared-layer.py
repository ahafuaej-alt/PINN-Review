from pathlib import Path

js_path = Path('assets/frameworks.js')
js = js_path.read_text()
js = js.replace(
    '<span><i class="relation-swatch" data-type="flow"><i></i></i>${relationshipMeta.flow.label}</span><span><i class="relation-swatch" data-type="feedback"><i></i></i>${relationshipMeta.feedback.label}</span>',
    '<span><span class="relation-swatch" data-type="flow"><i></i></span>${relationshipMeta.flow.label}</span><span><span class="relation-swatch" data-type="feedback"><i></i></span>${relationshipMeta.feedback.label}</span>'
)
js = js.replace(
    '<span><i class="relation-swatch" data-type="${type}"><i></i></i>${relationshipMeta[type].label}</span>',
    '<span><span class="relation-swatch" data-type="${type}"><i></i></span>${relationshipMeta[type].label}</span>'
)
js_path.write_text(js)

qa_path = Path('scripts/visual-qa-frameworks.mjs')
qa = qa_path.read_text()
old = "  const downloadPromise = matrix.waitForEvent('download');\n  await matrix.click('[data-svg]');"
new = "  await matrix.click('.toolbar-export summary');\n  const downloadPromise = matrix.waitForEvent('download');\n  await matrix.click('[data-svg]');"
if old not in qa:
    raise SystemExit('current SVG QA anchor not found')
qa = qa.replace(old, new, 1)
old = "  const publicationPromise = matrix.waitForEvent('download');\n  await matrix.click('[data-svg-publication]');"
new = "  if (!(await matrix.locator('.toolbar-export').evaluate((node) => node.open))) await matrix.click('.toolbar-export summary');\n  const publicationPromise = matrix.waitForEvent('download');\n  await matrix.click('[data-svg-publication]');"
if old not in qa:
    raise SystemExit('publication SVG QA anchor not found')
qa = qa.replace(old, new, 1)
old = "  assert(publicationSvg.includes('data-export-mode=\\\"publication\\\"') && publicationSvg.includes('Clean publication view') && !publicationSvg.includes('is-filter-muted') && !publicationSvg.includes('is-search-muted'), 'Publication SVG does not remove transient focus/search state.');"
new = "  const publicationHasTransientClasses = /class=\\\"[^\\\"]*(?:is-filter-muted|is-search-muted|is-active|is-related|is-muted)[^\\\"]*\\\"/.test(publicationSvg);\n  assert(publicationSvg.includes('data-export-mode=\\\"publication\\\"') && publicationSvg.includes('Clean publication view') && !publicationHasTransientClasses, 'Publication SVG does not remove transient focus/search state.');"
if old not in qa:
    raise SystemExit('publication transient-state assertion anchor not found')
qa = qa.replace(old, new, 1)
qa_path.write_text(qa)
