import process from 'node:process';
import { generateDatasets } from './build-datasets.mjs';

console.warn('build-pinn-realm.mjs is retained as a compatibility alias. PINN Realm is now generated from data/papers-master.json together with every related Atlas dataset.');
try {
  console.log(JSON.stringify(generateDatasets({ check: process.argv.includes('--check') }), null, 2));
} catch (error) {
  console.error(`Dataset build failed:\n${error.message}`);
  process.exit(1);
}
