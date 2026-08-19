import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const skipDirs = new Set(['.git', '.github', 'node_modules', 'artifacts']);
const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const toPosix = (value) => value.split(path.sep).join('/');
const read = (relativePath) => fs.readFile(path.join(root, relativePath), 'utf8');
const readJson = async (relativePath) => JSON.parse(await read(relativePath));

async function walk(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else files.push(full);
  }
  return files;
}

function isPublicHtml(relativePath) {
  return relativePath === 'index.html' || relativePath === '404.html' || relativePath.endsWith('/index.html');
}

function publicRoute(relativePath) {
  if (relativePath === 'index.html') return '/';
  if (relativePath === '404.html') return '/404.html';
  return `/${relativePath.replace(/index\.html$/, '')}`;
}

const [readme, themeInit, overview, formulationManifest, allFiles] = await Promise.all([
  read('README.md'),
  read('assets/theme-init.js'),
  readJson('data/atlas-overview.json'),
  readJson('data/mathematical-formulations/manifest.json'),
  walk(root)
]);

for (const [pattern, label] of [
  [/\bmanuscript\b/i, 'manuscript-oriented wording'],
  [/review\s+under\s+preparation/i, 'review-under-preparation wording'],
  [/1\s*[–-]\s*509/, 'temporary appearance-order numbering'],
  [/web\s+companion\s+to\s+a\s+comprehensive\s+review/i, 'outdated companion framing'],
  [/Taxonomy\s*&\s*Terminology/i, 'retired navigation family name']
]) {
  assert(!pattern.test(readme), `README still contains ${label}.`);
}

const publicPages = allFiles
  .map((file) => toPosix(path.relative(root, file)))
  .filter(isPublicHtml)
  .sort();
const publicRoutes = publicPages.map(publicRoute);

const startMarker = '<!-- ATLAS_PUBLIC_SURFACE_START -->';
const endMarker = '<!-- ATLAS_PUBLIC_SURFACE_END -->';
const start = readme.indexOf(startMarker);
const end = readme.indexOf(endMarker);
assert(start >= 0 && end > start, 'README is missing the CI-synchronized public-surface block.');
const surfaceBlock = readme.slice(start + startMarker.length, end);
const documentedRoutes = [...surfaceBlock.matchAll(/`(\/[^`]*)`/g)].map((match) => match[1]);
assert(new Set(documentedRoutes).size === documentedRoutes.length, 'README public-surface block contains duplicate route entries.');

const missingRoutes = publicRoutes.filter((route) => !documentedRoutes.includes(route));
const staleRoutes = documentedRoutes.filter((route) => !publicRoutes.includes(route));
assert(missingRoutes.length === 0, `README is missing public Atlas route(s): ${missingRoutes.join(', ')}.`);
assert(staleRoutes.length === 0, `README lists stale/nonexistent public route(s): ${staleRoutes.join(', ')}.`);
assert(documentedRoutes.length === publicRoutes.length, `README documents ${documentedRoutes.length} public routes, but the repository exposes ${publicRoutes.length}.`);

const navStart = themeInit.indexOf('const navigation = [');
const routeFn = themeInit.indexOf('const routeIsCurrent', navStart);
assert(navStart >= 0 && routeFn > navStart, 'Could not locate the canonical navigation block in assets/theme-init.js.');
const navSource = themeInit.slice(navStart, routeFn);
const navRoutes = new Set();
for (const match of navSource.matchAll(/route:\s*'([^']+\/)'/g)) navRoutes.add(match[1]);
for (const match of navSource.matchAll(/\[\s*'[^']+'\s*,\s*'([^']+\/)'/g)) navRoutes.add(match[1]);
assert(navRoutes.size > 0, 'No internal navigation routes were discovered from the shared navigation contract.');
for (const route of navRoutes) {
  assert(publicRoutes.includes(`/${route}`), `Navigation route /${route} does not resolve to a public Atlas entry point.`);
  assert(documentedRoutes.includes(`/${route}`), `README public-surface block does not reflect navigation route /${route}.`);
}

assert(surfaceBlock.includes(`**${publicRoutes.length}** public HTML entry points`), `README public-page total is stale; expected ${publicRoutes.length}.`);
assert(surfaceBlock.includes(`**${navRoutes.size}** internal menu routes`), `README internal-menu total is stale; expected ${navRoutes.size}.`);

const stats = overview.stats || {};
const integrity = formulationManifest.integrity || {};
const requiredFacts = [
  `**${stats.papers}** canonical paper records`,
  `**${stats.countries}** countries represented in PINN Realm`,
  `**${stats.performance_metrics}** normalized performance metrics`,
  `**${stats.optimizer_forms}** canonical optimizer forms`,
  `**${stats.activation_functions}** canonical activation-function entries`,
  `**${stats.ecosystem_layers}** PINN ecosystem layers and **${stats.ecosystem_groups}** methodological groups`,
  `**${stats.mathematical_formulations}** mathematical formulation records supported by **${integrity.unique_atlas_references_used}** unique Atlas references`
];
for (const fact of requiredFacts) assert(readme.includes(fact), `README data snapshot is stale or missing: ${fact}`);

for (const required of [
  'Foundations & Terminology',
  'Mathematical Formulations',
  'https://ahafuaej-alt.github.io/PINN-Review/mathematical-formulations/',
  'data/mathematical-formulations/manifest.json',
  'Governance, versioning, and citation',
  'scripts/validate-readme.mjs'
]) {
  assert(readme.includes(required), `README is missing required current-Atlas content: ${required}`);
}

console.log(`README integrity passed: ${publicRoutes.length} public pages · ${navRoutes.size} internal menu routes · ${stats.papers} papers · ${stats.mathematical_formulations} formulations.`);
