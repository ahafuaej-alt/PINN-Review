import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSnapshot, getReachStatistics, normalizeCountries } from './update-site-reach.mjs';

const locations = [
  { id: 'SE', name: 'Sweden', count: 17 },
  { id: 'FI', name: 'Finland', count: 23 },
  { id: 'US', name: 'United States', count: 41 },
  { id: 'DE', name: 'Germany', count: 11 },
  { id: 'GB', name: 'United Kingdom', count: 13 },
  { id: 'FR', name: 'France', count: 7 },
  { id: 'XX', name: '(unknown)', count: 29 },
  { id: 'NL', name: 'Netherlands', count: 0 }
];

test('normalizes, filters, and limits aggregate countries', () => {
  const result = normalizeCountries(locations);
  assert.equal(result.reached, 6);
  assert.deepEqual(result.top.map((country) => country.name), [
    'United States', 'Finland', 'Sweden', 'United Kingdom', 'Germany'
  ]);
  assert.equal(result.top[0].visits, 41);
});

test('builds a public snapshot without any API credential', () => {
  const snapshot = buildSnapshot({
    siteCode: 'pinn-review-atlas',
    trackingStartedAt: '2026-08-12',
    updatedAt: '2026-08-12T04:00:00.000Z',
    total: 112,
    last30Days: 54,
    locations
  });
  assert.equal(snapshot.status, 'active');
  assert.equal(snapshot.trackingEndpoint, 'https://pinn-review-atlas.goatcounter.com/count');
  assert.equal(snapshot.visits.total, 112);
  assert.equal(snapshot.countries.reached, 6);
  assert.equal(JSON.stringify(snapshot).includes('token'), false);
});

test('rejects invalid counts and site codes', () => {
  assert.throws(() => normalizeCountries([{ id: 'SE', name: 'Sweden', count: -1 }]), /non-negative integer/);
  assert.throws(() => buildSnapshot({
    siteCode: 'https://unsafe.example',
    trackingStartedAt: '2026-08-12',
    updatedAt: '2026-08-12T04:00:00.000Z',
    total: 1,
    last30Days: 1,
    locations: []
  }), /unsupported characters/);
});

test('retrieves reach statistics through documented stats endpoints', async () => {
  const originalFetch = globalThis.fetch;
  const requestedPaths = [];
  try {
    globalThis.fetch = async (url, options) => {
      requestedPaths.push(url.pathname);
      assert.equal(options.headers.Accept, 'application/json');
      assert.equal(options.headers['Content-Type'], 'application/json');
      assert.equal(options.headers.Authorization, 'Bearer protected-test-token');

      if (url.pathname === '/api/v0/stats/total') {
        return new Response(JSON.stringify({ total: 12 }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      if (url.pathname === '/api/v0/stats/locations') {
        assert.equal(url.searchParams.get('limit'), '100');
        assert.equal(url.searchParams.get('offset'), '0');
        return new Response(JSON.stringify({ stats: locations.slice(0, 2), more: false }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      throw new Error(`Unexpected endpoint ${url.pathname}`);
    };

    const result = await getReachStatistics(
      'https://pinn-review-atlas.goatcounter.com/api/v0',
      'protected-test-token',
      new Date('2026-08-12T00:00:00.000Z'),
      new Date('2026-08-15T00:00:00.000Z'),
      new Date('2026-09-02T08:00:00.000Z')
    );

    assert.equal(result.total, 12);
    assert.equal(result.last30Days, 12);
    assert.deepEqual(result.locations, locations.slice(0, 2));
    assert.equal(requestedPaths.filter((value) => value === '/api/v0/stats/total').length, 2);
    assert.equal(requestedPaths.filter((value) => value === '/api/v0/stats/locations').length, 1);
    assert.equal(requestedPaths.includes('/api/v0/sites'), false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('skips location statistics when GoatCounter reports zero visits', async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async (url) => {
      assert.equal(url.pathname, '/api/v0/stats/total');
      return new Response(JSON.stringify({ total: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    };

    const result = await getReachStatistics(
      'https://pinn-review-atlas.goatcounter.com/api/v0',
      'token',
      new Date('2026-08-12T00:00:00.000Z'),
      new Date('2026-08-15T00:00:00.000Z'),
      new Date('2026-09-02T08:00:00.000Z')
    );

    assert.deepEqual(result, { total: 0, last30Days: 0, locations: [] });
  } finally {
    globalThis.fetch = originalFetch;
  }
});
