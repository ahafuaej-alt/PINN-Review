import fs from 'node:fs';
import process from 'node:process';

const [, , sourcePath, outputPath] = process.argv;
if (!sourcePath || !outputPath) throw new Error('Usage: node scripts/extract-dataset-update.mjs issue-body.txt update.json');

const body = fs.readFileSync(sourcePath, 'utf8');
const match = body.match(/<!--\s*PINN_DATASET_UPDATE_V1:([A-Za-z0-9+/=]+)\s*-->/u);
if (!match) throw new Error('This issue does not contain a Dataset Manager update payload');

let update;
try {
  update = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
} catch (error) {
  throw new Error(`Dataset Manager payload is not valid JSON: ${error.message}`);
}

if (!Number.isInteger(update.id)) throw new Error('Dataset Manager payload has no numeric paper ID');
if (!update.changes || typeof update.changes !== 'object' || Array.isArray(update.changes)) throw new Error('Dataset Manager payload has no changes object');
fs.writeFileSync(outputPath, `${JSON.stringify(update, null, 2)}\n`);
console.log(JSON.stringify({ status: 'extracted', paper_id: update.id, changed_fields: Object.keys(update.changes) }));
