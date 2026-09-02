import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const outputPath = path.resolve(process.env.SITE_REACH_OUTPUT || 'data/site-reach.json');
const apiTimeoutMs = 20_000;

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const asCount = (value, label) => {
  const count = Number(value);
  assert(Number.isSafeInteger(count) && count >= 0, `${label} must be a non-negative integer.`);
  return count;
};

const isoDay = (value) => {
  const match = String(value || '').match(/^(\d{4}-\d{2}-\d{2})/);
  assert(match && !Number.isNaN(Date.parse(`${match[1]}T00:00:00.000Z`)), 'Tracking start must use YYYY-MM-DD.');
  return match[1];
};

const roundToUtcHour = (date) => {
  const rounded = new Date(date);
  rounded.setUTCMinutes(0, 0, 0);
  return rounded;
};

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function requestJson(url, token) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    signal: AbortSignal.timeout(apiTimeoutMs)
  });
  if (!response.ok) {
    const detail = (await response.text())
      .replaceAll(token, '[redacted]')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 600);
    throw new Error(`GoatCounter returned ${response.status} for ${url.pathname}: ${detail}`);
  }
  return response.json();
}

async function getTotal(apiBase, token, start, end) {
  const url = new URL(`${apiBase}/stats/total`);
  url.searchParams.set('start', start.toISOString());
  url.searchParams.set('end', end.toISOString());
  const response = await requestJson(url, token);
  return asCount(response.total, 'GoatCounter total');
}

async function getLocations(apiBase, token, start, end) {
  const rows = [];
  for (let offset = 0; ; offset += 100) {
    const url = new URL(`${apiBase}/stats/locations`);
    url.searchParams.set('start', start.toISOString());
    url.searchParams.set('end', end.toISOString());
    url.searchParams.set('limit', '100');
    url.searchParams.set('offset', String(offset));
    const response = await requestJson(url, token);
    assert(Array.isArray(response.stats), 'GoatCounter locations response must contain a stats array.');
    rows.push(...response.stats);
    if (!response.more) break;
    assert(offset < 10_000, 'GoatCounter locations pagination exceeded its safety limit.');
    await wait(275);
  }
  return rows;
}

export async function getReachStatistics(apiBase, token, allTimeStart, recentStart, end) {
  const [total, last30Days] = await Promise.all([
    getTotal(apiBase, token, allTimeStart, end),
    getTotal(apiBase, token, recentStart, end)
  ]);

  if (total === 0) {
    return { total, last30Days, locations: [] };
  }

  const locations = await getLocations(apiBase, token, allTimeStart, end);
  return { total, last30Days, locations };
}

export function normalizeCountries(rows) {
  assert(Array.isArray(rows), 'Location statistics must be an array.');
  const countries = rows
    .map((row) => ({
      code: typeof row?.id === 'string' ? row.id.trim().toUpperCase() : '',
      name: typeof row?.name === 'string' ? row.name.trim() : '',
      visits: asCount(row?.count, `Location count for ${row?.name || row?.id || 'unknown'}`)
    }))
    .filter((country) => country.visits > 0
      && country.name
      && !/^\(?unknown\)?$/i.test(country.name)
      && !['XX', 'ZZ'].includes(country.code))
    .sort((left, right) => right.visits - left.visits || left.name.localeCompare(right.name, 'en'));
  return {
    reached: countries.length,
    top: countries.slice(0, 5)
  };
}

export function buildSnapshot({ siteCode, trackingStartedAt, updatedAt, total, last30Days, locations }) {
  const normalizedCode = String(siteCode || '').trim().toLowerCase();
  assert(/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(normalizedCode), 'GOATCOUNTER_SITE_CODE contains unsupported characters.');
  const countries = normalizeCountries(locations);
  return {
    schemaVersion: 1,
    status: 'active',
    provider: 'GoatCounter',
    trackingEndpoint: `https://${normalizedCode}.goatcounter.com/count`,
    trackingStartedAt: isoDay(trackingStartedAt),
    updatedAt: new Date(updatedAt).toISOString(),
    visits: {
      total: asCount(total, 'Total visits'),
      last30Days: asCount(last30Days, '30-day visits')
    },
    countries,
    methodology: 'Aggregated visit totals and country-level statistics; no visitor-level records are published.'
  };
}

async function readCurrentSnapshot() {
  try {
    return JSON.parse(await fs.readFile(outputPath, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

export async function updateSiteReach() {
  const siteCode = String(process.env.GOATCOUNTER_SITE_CODE || '').trim();
  const token = String(process.env.GOATCOUNTER_API_TOKEN || '').trim();
  assert(siteCode, 'GOATCOUNTER_SITE_CODE is required.');
  assert(token, 'GOATCOUNTER_API_TOKEN is required.');

  const current = await readCurrentSnapshot();
  const now = roundToUtcHour(new Date());
  const trackingStartedAt = isoDay(
    process.env.GOATCOUNTER_TRACKING_START
      || current?.trackingStartedAt
      || now.toISOString()
  );
  const allTimeStart = new Date(`${trackingStartedAt}T00:00:00.000Z`);
  const recentStart = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
  const apiBase = `https://${siteCode.toLowerCase()}.goatcounter.com/api/v0`;

  const { total, last30Days, locations } = await getReachStatistics(
    apiBase,
    token,
    allTimeStart,
    recentStart,
    now
  );
  if (total === 0) {
    console.log('GoatCounter reports zero visits; skipping location statistics until traffic exists.');
  }

  const snapshot = buildSnapshot({ siteCode, trackingStartedAt, updatedAt: now, total, last30Days, locations });
  const temporaryPath = `${outputPath}.tmp`;
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(temporaryPath, `${JSON.stringify(snapshot, null, 2)}\n`, { mode: 0o600 });
  await fs.rename(temporaryPath, outputPath);
  console.log(`Updated Atlas reach: ${snapshot.visits.total} total visits, ${snapshot.visits.last30Days} in 30 days, ${snapshot.countries.reached} countries.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  updateSiteReach().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
