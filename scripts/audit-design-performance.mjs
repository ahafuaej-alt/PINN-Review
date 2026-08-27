import fs from 'node:fs';

const matrix = JSON.parse(fs.readFileSync('data/frameworks/design-performance.json', 'utf8'));
const meta = JSON.parse(fs.readFileSync('data/frameworks/design-performance-v2.json', 'utf8'));

const fail = (message) => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const validLevels = new Set(['major', 'context', 'indirect']);
const vagueLabels = new Set(['indirect', 'robustness', 'identifiability', 'scalability', 'reusability', 'general applicability']);

assert(matrix.rows.length === meta.audit.expected_rows, `Expected ${meta.audit.expected_rows} rows, found ${matrix.rows.length}`);
assert(matrix.columns.length === meta.audit.expected_columns, `Expected ${meta.audit.expected_columns} columns, found ${matrix.columns.length}`);

const columnIds = new Set(matrix.columns.map((column) => column.id));
assert(columnIds.size === matrix.columns.length, 'Duplicate performance outcome ids detected.');
for (const column of matrix.columns) assert(meta.outcomes[column.id], `Missing outcome metadata for ${column.id}`);

const rowIds = new Set();
const cellIds = new Set();
let cellCount = 0;
let exactEvidenceCells = 0;
let rowEvidenceCells = 0;
let overriddenLabels = 0;

for (const row of matrix.rows) {
  assert(!rowIds.has(row.id), `Duplicate row id ${row.id}`);
  rowIds.add(row.id);
  assert(row.cells.length === matrix.columns.length, `${row.id} has ${row.cells.length} cells; expected ${matrix.columns.length}`);
  assert(Array.isArray(row.evidence) && row.evidence.length > 0, `${row.id} has no row-level evidence.`);
  assert(meta.row_links[row.id], `Missing cross-framework mapping for ${row.id}`);

  row.cells.forEach((cell, index) => {
    const expected = `${row.id}:${matrix.columns[index].id}`;
    assert(cell.id === expected, `Cell identity mismatch: expected ${expected}, found ${cell.id}`);
    assert(!cellIds.has(cell.id), `Duplicate cell id ${cell.id}`);
    cellIds.add(cell.id);
    cellCount += 1;
    assert(validLevels.has(cell.level), `${cell.id} has invalid level ${cell.level}`);
    assert(typeof cell.label === 'string' && cell.label.trim(), `${cell.id} has an empty mechanism label`);
    if (vagueLabels.has(cell.label.trim().toLowerCase())) {
      assert(meta.label_overrides[cell.id], `${cell.id} retains vague label “${cell.label}” without an audited override`);
    }
    if (meta.label_overrides[cell.id]) overriddenLabels += 1;
    if (Array.isArray(cell.evidence) && cell.evidence.length) exactEvidenceCells += 1;
    else rowEvidenceCells += 1;
  });
}

assert(cellCount === meta.audit.expected_cells, `Expected ${meta.audit.expected_cells} cells, found ${cellCount}`);

const tradeoffIds = new Set();
const tradeoffRows = new Set();
for (const tradeoff of meta.tradeoffs) {
  assert(!tradeoffIds.has(tradeoff.id), `Duplicate trade-off id ${tradeoff.id}`);
  tradeoffIds.add(tradeoff.id);
  assert(rowIds.has(tradeoff.row), `Unknown trade-off row ${tradeoff.row}`);
  assert(columnIds.has(tradeoff.from) && columnIds.has(tradeoff.to), `${tradeoff.id} references unknown outcomes`);
  assert(tradeoff.from !== tradeoff.to, `${tradeoff.id} must connect two distinct outcomes`);
  assert(validLevels.has(tradeoff.strength), `${tradeoff.id} has invalid strength ${tradeoff.strength}`);
  assert(tradeoff.summary?.trim(), `${tradeoff.id} has no scientific rationale`);
  tradeoffRows.add(tradeoff.row);
}
for (const row of matrix.rows.filter((entry) => entry.tradeoff)) {
  assert(tradeoffRows.has(row.id), `${row.id} is marked trade-off-sensitive but has no explicit outcome-pair trade-off`);
}

console.log(`Design–Performance audit passed: ${matrix.rows.length} rows · ${matrix.columns.length} outcomes · ${cellCount} cells.`);
console.log(`Evidence scope: ${exactEvidenceCells} cell-specific · ${rowEvidenceCells} row-level synthesis cells.`);
console.log(`Terminology: ${overriddenLabels} audited mechanism-label refinements.`);
console.log(`Trade-offs: ${meta.tradeoffs.length} explicit outcome-pair relationships across ${tradeoffRows.size} design dimensions.`);
