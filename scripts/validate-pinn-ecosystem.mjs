import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data/pinn-ecosystem/pinn-ecosystem.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const builderScript = fs.readFileSync(path.join(root, "assets/pinn-ecosystem.js"), "utf8");
const pageMarkup = fs.readFileSync(path.join(root, "pinn-ecosystem/index.html"), "utf8");
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };

assert(data.schemaVersion === "1.1.0", "Unexpected schema version.");
assert(data.layers.length === 9, `Expected 9 layers, found ${data.layers.length}.`);
assert(data.groups.length === 35, `Expected 35 groups, found ${data.groups.length}.`);
assert(data.stats.itemOccurrences >= 800, `Expected at least 800 item occurrences, found ${data.stats.itemOccurrences}.`);
assert(data.relations.length >= 60, `Expected at least 60 relationships, found ${data.relations.length}.`);
assert(!builderScript.includes("Select up to"), "Builder UI still exposes an arbitrary count cap.");
assert(builderScript.includes("coordinate-dimensionality") && builderScript.includes("residual-only-observations") && builderScript.includes("strong-weak-hybrid"), "Scientific selection-rule inventory is incomplete.");
assert(builderScript.includes("dataset.diagramHeight") && builderScript.includes("diagramFieldCard"), "Dynamic complete-flowchart rendering is missing.");
assert(pageMarkup.includes("data-selection-rule-dialog"), "Selection-rule explanation dialog is missing.");
assert(pageMarkup.includes("data-legend-edge=\"primary\"") && pageMarkup.includes("data-legend-edge=\"feedback\""), "Interactive arrow legend is incomplete.");
assert(pageMarkup.includes("data-live-navigator") && builderScript.includes("renderLiveNavigator"), "Always-visible live PINN navigator is missing.");
assert(pageMarkup.includes("data-diagram-expand"), "Compact/expanded complete-flowchart control is missing.");

const layerIds = new Set(data.layers.map((layer) => layer.id));
const groupIds = new Set(data.groups.map((group) => group.id));
assert(layerIds.size === data.layers.length, "Layer IDs must be unique.");
assert(groupIds.size === data.groups.length, "Group IDs must be unique.");

for (const group of data.groups) {
  assert(layerIds.has(group.layerId), `Group ${group.id} references missing layer ${group.layerId}.`);
  assert(group.itemCount > 0, `Group ${group.id} contains no items.`);
  const calculated = group.subgroups.reduce((sum, subgroup) => sum + subgroup.items.length, 0);
  assert(calculated === group.itemCount, `Group ${group.id} item count is inconsistent.`);
  const itemIds = group.subgroups.flatMap((subgroup) => subgroup.items.map((item) => item.id));
  assert(new Set(itemIds).size === itemIds.length, `Group ${group.id} contains duplicate item IDs.`);
}

for (const layer of data.layers) {
  const expected = data.groups.filter((group) => group.layerId === layer.id).map((group) => group.id);
  assert(JSON.stringify(layer.groupIds) === JSON.stringify(expected), `Layer ${layer.id} group membership is inconsistent.`);
}

for (const relation of data.relations) {
  assert(groupIds.has(relation.from), `Relation ${relation.id} has missing source ${relation.from}.`);
  assert(groupIds.has(relation.to), `Relation ${relation.id} has missing target ${relation.to}.`);
  assert(relation.from !== relation.to, `Relation ${relation.id} cannot be self-referential.`);
}

const fieldIds = new Set();
assert(Boolean(data.builder.selectionPolicy), "Builder selection policy is missing.");
assert(data.builder.selectionPolicy?.countLimits?.includes("No arbitrary item-count caps"), "Builder must disclose that arbitrary count caps are not imposed.");
for (const stage of data.builder.stages) {
  for (const field of stage.fields) {
    assert(!fieldIds.has(field.id), `Duplicate builder field ID ${field.id}.`);
    assert(field.max === undefined, `Builder field ${field.id} still contains an arbitrary selection cap.`);
    fieldIds.add(field.id);
    const group = data.groups.find((entry) => entry.id === field.groupId);
    assert(Boolean(group), `Builder field ${field.id} references missing group ${field.groupId}.`);
    if (!group) continue;
    const allowedSubgroups = new Set(field.subgroups || group.subgroups.map((entry) => entry.title));
    const options = new Set(group.subgroups.filter((entry) => allowedSubgroups.has(entry.title)).flatMap((entry) => entry.items.map((item) => item.name)));
    for (const defaultValue of field.defaults || []) {
      assert(options.has(defaultValue), `Builder field ${field.id} has missing default value: ${defaultValue}.`);
    }
  }
}

if (errors.length) {
  console.error(`PINN ecosystem validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`PINN ecosystem validation passed: ${data.layers.length} layers, ${data.groups.length} groups, ${data.stats.itemOccurrences} item occurrences, ${data.relations.length} relationships, and ${fieldIds.size} builder fields.`);
