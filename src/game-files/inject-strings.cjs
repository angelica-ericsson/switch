#!/usr/bin/env node

/**
 * Injects translation keys from extracted-strings.json back into game.json
 * and generates an en.json file for i18next translations
 */

const fs = require('fs');
const path = require('path');

// Load the extracted strings
const extractedStringsPath = path.join(__dirname, 'extracted-strings.json');
const extractedStrings = JSON.parse(fs.readFileSync(extractedStringsPath, 'utf-8'));

// Load the game.json file
const gameJsonPath = path.join(__dirname, 'game.json');
const gameData = JSON.parse(fs.readFileSync(gameJsonPath, 'utf-8'));

// Create a map for quick node lookup
const nodeMap = new Map();
gameData.nodes.forEach((node) => {
  nodeMap.set(node.id, node);
});

// Track statistics
let totalReplacements = 0;
let nodesModified = new Set();
let missingNodes = [];
let missingProperties = [];

// Process each extracted string entry
extractedStrings.forEach((entry) => {
  const { translationKey, text, usedIn } = entry;

  // Process each usage location
  usedIn.forEach((usage) => {
    const { nodeId, dataProperty } = usage;
    const node = nodeMap.get(nodeId);

    if (!node) {
      missingNodes.push({ nodeId, translationKey, dataProperty });
      return;
    }

    // Ensure node.data exists
    if (!node.data) {
      throw new Error(`Node ${nodeId} has no data`);
    }

    // Check if the property exists and contains the expected text
    const currentValue = node.data[dataProperty];
    if (!currentValue) {
      throw new Error(`Node ${nodeId} has no data property ${dataProperty}`);
    }

    // Replace with translation key
    // Note: We replace even if the text doesn't match exactly, as the user may have
    // manually edited the extracted-strings.json file
    if (currentValue !== translationKey) {
      node.data[dataProperty] = translationKey;
      totalReplacements++;
      nodesModified.add(nodeId);
    }
  });
});

// Write the updated game.json
fs.writeFileSync(gameJsonPath, JSON.stringify(gameData, null, 2), 'utf-8');

// Generate en.json file for i18next
// Structure: { "translationKey": "English text", ... }
const enTranslations = {};
extractedStrings.forEach((entry) => {
  enTranslations[entry.translationKey] = entry.text;
});

// Write en.json file
const enJsonPath = path.join(__dirname, 'en.json');
fs.writeFileSync(enJsonPath, JSON.stringify(enTranslations, null, 2), 'utf-8');

// Print summary
console.log('='.repeat(80));
console.log('Translation Key Injection Report');
console.log('='.repeat(80));
console.log(`Total translation keys processed: ${extractedStrings.length}`);
console.log(`Total field replacements: ${totalReplacements}`);
console.log(`Nodes modified: ${nodesModified.size}`);
console.log(`Output files:`);
console.log(`  - Updated game.json: ${gameJsonPath}`);
console.log(`  - Generated en.json: ${enJsonPath}`);

if (missingNodes.length > 0) {
  console.log(`\n⚠️  Warning: ${missingNodes.length} node(s) not found in game.json:`);
  missingNodes.slice(0, 10).forEach(({ nodeId, translationKey }) => {
    console.log(`  - Node ID: ${nodeId} (translationKey: ${translationKey})`);
  });
  if (missingNodes.length > 10) {
    console.log(`  ... and ${missingNodes.length - 10} more`);
  }
}

if (missingProperties.length > 0) {
  console.log(`\n⚠️  Warning: ${missingProperties.length} property/properties not found:`);
  missingProperties.slice(0, 10).forEach(({ nodeId, dataProperty }) => {
    console.log(`  - Node ${nodeId}, property: ${dataProperty}`);
  });
  if (missingProperties.length > 10) {
    console.log(`  ... and ${missingProperties.length - 10} more`);
  }
}

console.log('\n✅ Injection complete!');
