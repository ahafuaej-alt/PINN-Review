import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSnapshot, normalizeCountries } from './update-site-reach.mjs';

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
