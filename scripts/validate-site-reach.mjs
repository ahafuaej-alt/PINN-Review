import fs from 'node:fs/promises';
import path from 'node:path';

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const read = (file) => fs.readFile(file, 'utf8');
const isCount = (value) => Number.isSafeInteger(value) && value >= 0;

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'artifacts') continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

const [snapshotText, index, app, styles, privacy, updateWorkflow] = await Promise.all([
  read('data/site-reach.json'),
  read('index.html'),
  read('assets/app.js'),
  read('assets/styles.css'),
  read('privacy/index.html'),
  read('.github/workflows/update-site-reach.yml')
]);
const snapshot = JSON.parse(snapshotText);

assert(snapshot.schemaVersion === 1, 'Reach snapshot schemaVersion must be 1.');
assert(snapshot.provider === 'GoatCounter', 'Reach snapshot provider must be GoatCounter.');
assert(['setup_required', 'active'].includes(snapshot.status), 'Reach snapshot status is unsupported.');
assert(typeof snapshot.methodology === 'string' && snapshot.methodology.includes('no visitor-level records'), 'Reach methodology must state the publication boundary.');
assert(snapshot.visits && snapshot.countries && Array.isArray(snapshot.countries.top), 'Reach snapshot sections are incomplete.');

if (snapshot.status === 'setup_required') {
  assert(snapshot.trackingEndpoint === null && snapshot.trackingStartedAt === null && snapshot.updatedAt === null, 'Setup snapshot must not imply active collection.');
  assert(snapshot.visits.total === null && snapshot.visits.last30Days === null && snapshot.countries.reached === null, 'Setup snapshot must not publish invented totals.');
  assert(snapshot.countries.top.length === 0, 'Setup snapshot must have no country rankings.');
} else {
  assert(/^https:\/\/[a-z0-9-]+\.goatcounter\.com\/count$/.test(snapshot.trackingEndpoint), 'Active tracking endpoint must be a hosted GoatCounter count endpoint.');
  assert(/^\d{4}-\d{2}-\d{2}$/.test(snapshot.trackingStartedAt), 'Active tracking start must use YYYY-MM-DD.');
  assert(!Number.isNaN(Date.parse(snapshot.updatedAt)), 'Active update time must be an ISO timestamp.');
  assert(isCount(snapshot.visits.total) && isCount(snapshot.visits.last30Days), 'Active visit totals must be non-negative integers.');
  assert(isCount(snapshot.countries.reached) && snapshot.countries.reached >= snapshot.countries.top.length, 'Country reach must cover the displayed ranking.');
  assert(snapshot.countries.top.length <= 5, 'No more than five countries may be published.');
  snapshot.countries.top.forEach((country, indexValue) => {
    assert(typeof country.code === 'string' && typeof country.name === 'string' && country.name, `Country ${indexValue + 1} lacks an identifier.`);
    assert(isCount(country.visits), `Country ${country.name} has an invalid visit count.`);
    if (indexValue) assert(snapshot.countries.top[indexValue - 1].visits >= country.visits, 'Country ranking must be descending.');
  });
}

[
  'data-atlas-reach', 'data-reach-total', 'data-reach-recent', 'data-reach-countries',
  'data-reach-country-list', 'privacy/#analytics'
].forEach((marker) => assert(index.includes(marker), `Homepage is missing ${marker}.`));
assert(styles.includes('.reach-panel') && styles.includes('.reach-country-fill'), 'Reach panel styles are incomplete.');
assert(app.includes('count.v5.js') && app.includes('sha384-atnOLvQb9t+jTSipvd75X2yginT4PjVbqDdlJAmxMm+wYElFmeR6EmLP5bYeoRVQ'), 'Counter must use the documented v5 SRI asset.');
assert(app.includes("fetch(`${rootHref}data/site-reach.json`"), 'Shared application script must load the public reach snapshot.');
assert(!app.includes('GOATCOUNTER_API_TOKEN') && !snapshotText.includes('Bearer '), 'No protected GoatCounter token may enter public assets.');
assert(privacy.includes('id="analytics"') && privacy.includes('GoatCounter') && privacy.includes('earlier traffic is not reconstructed'), 'Privacy page must explain aggregated analytics and its start boundary.');
assert(updateWorkflow.includes('secrets.GOATCOUNTER_API_TOKEN') && updateWorkflow.includes('vars.GOATCOUNTER_SITE_CODE'), 'Daily workflow must obtain configuration from GitHub Secrets and Variables.');
assert(updateWorkflow.includes('published_sha') && updateWorkflow.includes('uses: ./.github/workflows/pages.yml'), 'Daily workflow must deploy the exact refreshed snapshot commit.');

const pages = await htmlFiles('.');
const appPages = [];
for (const file of pages) {
  const html = await read(file);
  if (!html.includes('assets/app.js?v=')) continue;
  appPages.push(file);
  assert(html.includes('assets/app.js?v=ux-20260812-reach'), `${file} has a stale shared-app cache key.`);
}
assert(appPages.length === 19, `Expected 19 pages using the shared application script; found ${appPages.length}.`);

console.log(`Atlas reach validation passed: ${snapshot.status}; ${appPages.length} shared-script pages; no protected token in public data.`);
