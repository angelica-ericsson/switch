#!/usr/bin/env node

/**
 * Extracts user-inputted strings from game.json for translation purposes
 * Extracts strings from: scene, end, newsFlash, and social node types
 * Outputs a JSON file with an array of objects containing text and usage locations
 */

const fs = require('fs');
const path = require('path');

// Load the game.json file
const gameJsonPath = path.join(__dirname, 'game.json');
const gameData = JSON.parse(fs.readFileSync(gameJsonPath, 'utf-8'));

// Map to store text -> usage locations
// Key: text string (normalized), Value: array of {nodeId, dataProperty}
const textMap = new Map();

/**
 * Adds a text string to the map with its usage location
 * @param {string} text - The text string to add
 * @param {string} nodeId - The node ID where this text is used
 * @param {string} dataProperty - The property name in node.data where this text is stored
 */
function addText(text, nodeId, dataProperty) {
  // Skip null, undefined, or empty strings
  if (text == null || text === '') {
    return;
  }

  // Normalize the text (trim whitespace)
  const normalizedText = text.normalize('NFKD').trim();

  // Skip empty strings after trimming
  if (normalizedText === '') {
    return;
  }

  // Initialize array if this is the first time we see this text
  if (!textMap.has(normalizedText)) {
    textMap.set(normalizedText, []);
  }

  // Add usage location
  textMap.get(normalizedText).push({
    nodeId,
    dataProperty,
  });
}

// Process scene nodes
gameData.nodes.forEach((node) => {
  if (node.type === 'scene' && node.data) {
    addText(node.data.textA, node.id, 'textA');
    addText(node.data.textB, node.id, 'textB');
    addText(node.data.option1A, node.id, 'option1A');
    addText(node.data.option1B, node.id, 'option1B');
    addText(node.data.option2A, node.id, 'option2A');
    addText(node.data.option2B, node.id, 'option2B');
    addText(node.data.option3A, node.id, 'option3A');
    addText(node.data.option3B, node.id, 'option3B');
  }
});

// Process end nodes
gameData.nodes.forEach((node) => {
  if (node.type === 'end' && node.data) {
    addText(node.data.headline, node.id, 'headline');
    addText(node.data.text, node.id, 'text');
  }
});

// Process newsFlash nodes
gameData.nodes.forEach((node) => {
  if (node.type === 'newsFlash' && node.data) {
    addText(node.data.headlineA, node.id, 'headlineA');
    addText(node.data.headlineB, node.id, 'headlineB');
    addText(node.data.textA, node.id, 'textA');
    addText(node.data.textB, node.id, 'textB');
  }
});

// Process social nodes
gameData.nodes.forEach((node) => {
  if (node.type === 'social' && node.data) {
    addText(node.data.text1A, node.id, 'text1A');
    addText(node.data.text1B, node.id, 'text1B');
    addText(node.data.text2A, node.id, 'text2A');
    addText(node.data.text2B, node.id, 'text2B');
    addText(node.data.text3A, node.id, 'text3A');
    addText(node.data.text3B, node.id, 'text3B');
  }
});

// Convert map to array format
const result = Array.from(textMap.entries()).map(([text, usedIn]) => {
  // Get Y coordinates from all nodes where this text is used
  const yCoordinates = usedIn
    .map((usage) => {
      const node = gameData.nodes.find((n) => n.id === usage.nodeId);
      return node?.position?.y;
    })
    .filter((y) => y != null);

  // Use minimum Y coordinate (earliest in game flow, assuming Y increases downward)
  const minY = yCoordinates.length > 0 ? Math.min(...yCoordinates) : Infinity;

  // Generate translation key based on node types and A/B usage
  const nodeTypeMap = new Map(); // nodeType -> Set of 'A' or 'B'
  const nodeTypes = new Set(); // Track all node types (including those without A/B variants)

  usedIn.forEach((usage) => {
    const node = gameData.nodes.find((n) => n.id === usage.nodeId);
    if (!node) return;

    const nodeType = node.type;
    const property = usage.dataProperty;
    nodeTypes.add(nodeType);

    // Determine if this property is A, B, or neither
    let variant = null;
    if (property.endsWith('A')) {
      variant = 'A';
    } else if (property.endsWith('B')) {
      variant = 'B';
    }
    // For 'end' nodes with 'headline' or 'text', we don't have A/B variants

    if (variant) {
      if (!nodeTypeMap.has(nodeType)) {
        nodeTypeMap.set(nodeType, new Set());
      }
      nodeTypeMap.get(nodeType).add(variant);
    }
  });

  // Generate translation key
  // If text is used in multiple node types, use the first one (by Y coordinate)
  // Otherwise, use the single node type
  let translationKey = '';
  if (nodeTypes.size > 0) {
    // Get the node type with the lowest Y coordinate
    const nodeTypesWithY = Array.from(nodeTypes).map((type) => {
      const nodesOfType = usedIn
        .map((usage) => {
          const node = gameData.nodes.find((n) => n.id === usage.nodeId);
          return node;
        })
        .filter((node) => node && node.type === type);

      const minYForType = nodesOfType
        .map((node) => node.position?.y)
        .filter((y) => y != null)
        .reduce((min, y) => (min == null || y < min ? y : min), null);

      return { type, minY: minYForType };
    });

    nodeTypesWithY.sort((a, b) => {
      if (a.minY == null && b.minY == null) return 0;
      if (a.minY == null) return 1;
      if (b.minY == null) return -1;
      return a.minY - b.minY;
    });

    const primaryType = nodeTypesWithY[0].type;
    const variants = nodeTypeMap.get(primaryType);

    if (variants && variants.size === 2) {
      translationKey = `${primaryType}-AB`;
    } else if (variants && variants.size === 1) {
      translationKey = `${primaryType}-${Array.from(variants)[0]}`;
    } else {
      // No A/B variants (e.g., 'end' nodes)
      translationKey = primaryType;
    }
  }

  return {
    translationKey: translationKey + '-TODO-🟥🟥🟥',
    text,
    usedIn,
    _y: minY, // Store Y for sorting (not included in final output)
  };
});

// Sort by Y coordinate (ascending - lower Y values first)
result.sort((a, b) => a._y - b._y);

// Remove the temporary _y property before output
result.forEach((item) => {
  delete item._y;
});

// Write output file
const outputPath = path.join(__dirname, 'extracted-strings.json');
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');

// Print summary
console.log('='.repeat(80));
console.log('String Extraction Report');
console.log('='.repeat(80));
console.log(`Total unique strings extracted: ${result.length}`);
console.log(`Output file: ${outputPath}`);
console.log('');

// Print some statistics
const totalUsages = result.reduce((sum, item) => sum + item.usedIn.length, 0);
console.log(`Total string usages: ${totalUsages}`);
console.log(`Average usages per string: ${(totalUsages / result.length).toFixed(2)}`);

// Count by node type
const nodeTypeCounts = {};
result.forEach((item) => {
  item.usedIn.forEach((usage) => {
    const node = gameData.nodes.find((n) => n.id === usage.nodeId);
    if (node) {
      nodeTypeCounts[node.type] = (nodeTypeCounts[node.type] || 0) + 1;
    }
  });
});

console.log('\nUsages by node type:');
Object.entries(nodeTypeCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });

console.log('\n✅ Extraction complete!');
