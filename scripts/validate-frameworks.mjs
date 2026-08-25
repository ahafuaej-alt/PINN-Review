import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const read = (file) => fs.readFile(path.join(root, file), 'utf8');
const data = JSON.parse(await read('data/frameworks/frameworks.json'));
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const ids = new Set(data.frameworks.map((item) => item.id));

assert(data.frameworks.length === 4, `Expected four canonical frameworks, found ${data.frameworks.length}.`);
assert(ids.size === 4, 'Framework IDs must be unique.');
for (const item of data.frameworks) {
  assert(data.pages[item.id], `Missing page dataset for ${item.id}.`);
  await fs.access(path.join(root, 'frameworks', item.route, 'index.html'));
  const page = data.pages[item.id];
  const entries = page.groups || page.rows;
  assert(Array.isArray(entries) && entries.length >= 6, `${item.id} lacks a substantive element set.`);
  for (const entry of entries) {
    assert(entry.title && entry.concept, `${item.id} has an element without title or canonical concept.`);
    assert(Array.isArray(entry.papers) && entry.papers.every((id) => Number.isInteger(id) && id >= 1 && id <= 853), `${item.id}/${entry.title} contains an invalid Atlas paper ID.`);
  }
}

const [landing, script, style, theme, home, readme, sitemap] = await Promise.all([
  read('frameworks/index.html'), read('assets/frameworks.js'), read('assets/frameworks.css'),
  read('assets/theme-init.js'), read('index.html'), read('README.md'), read('sitemap.xml')
]);
for (const token of ['data-framework-cards', 'Interpretation boundary', 'Four views']) assert(landing.includes(token), `Framework landing page lacks ${token}.`);
for (const token of ['Copy shareable link', 'Download current SVG', 'Suggest an edit', 'Missing relationship', 'references/#ref=']) assert(script.includes(token), `Framework interaction script lacks ${token}.`);
assert(style.includes('.dependency-matrix') && style.includes('.diagnostic-grid'), 'Framework stylesheet lacks matrix or diagnostic rendering.');
assert(theme.includes("label: 'Frameworks'") && theme.includes("route: 'frameworks/'"), 'Shared navigation lacks the direct Frameworks route.');
assert(home.includes('Six research doors') && home.includes('05 / FRAMEWORKS') && home.includes('06 / GOVERNANCE'), 'Homepage hierarchy is not updated to six research doors.');
assert(readme.includes('### Frameworks') && readme.includes('**26** public HTML entry points'), 'README Frameworks/public-surface contract is stale.');
for (const item of data.frameworks) assert(sitemap.includes(`/frameworks/${item.route}`), `Sitemap lacks ${item.route}.`);

console.log(`Frameworks validation passed: ${data.frameworks.length} live frameworks · ${Object.values(data.pages).reduce((sum,page)=>sum+(page.groups||page.rows).length,0)} inspectable elements.`);
