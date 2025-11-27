#!/usr/bin/env node

/**
 * Standalone validation script for game.json
 * Checks for:
 * 1. Nodes without outgoing connections (except start/end nodes)
 * 2. Nodes with A/B variants where one is missing
 * 3. Scene nodes without at least one button text
 * 4. Nodes with dayssincestart property have ascending numbers in the game flow
 */

const fs = require('fs');
const path = require('path');

// Load the game.json file
const gameJsonPath = path.join(__dirname, 'game.json');
const gameData = JSON.parse(fs.readFileSync(gameJsonPath, 'utf-8'));

const errors = [];
const warnings = [];

// Build edge map: source node id -> Map of sourceHandle -> target node id
const outgoingEdges = new Map();
gameData.edges.forEach((edge) => {
  if (!outgoingEdges.has(edge.source)) {
    outgoingEdges.set(edge.source, new Map());
  }
  const sourceHandle = edge.sourceHandle || 'default';
  outgoingEdges.get(edge.source).set(sourceHandle, edge.target);
});

// Build node map for quick lookup
const nodeMap = new Map();
gameData.nodes.forEach((node) => {
  nodeMap.set(node.id, node);
});

// Check for duplicate node IDs
const nodeIds = new Set();
gameData.nodes.forEach((node) => {
  if (nodeIds.has(node.id)) {
    errors.push({
      type: 'duplicate_node_id',
      nodeId: node.id,
      nodeType: node.type,
      message: `Duplicate node ID "${node.id}" found`,
    });
  }
  nodeIds.add(node.id);
});

// Check 0: Start node validation
const startNodes = gameData.nodes.filter((node) => node.type === 'start');
if (startNodes.length === 0) {
  errors.push({
    type: 'missing_start_node',
    nodeId: null,
    nodeType: 'start',
    message: 'Game must have exactly one start node',
  });
} else if (startNodes.length > 1) {
  errors.push({
    type: 'multiple_start_nodes',
    nodeId: startNodes.map((n) => n.id).join(', '),
    nodeType: 'start',
    message: `Game has ${startNodes.length} start nodes, but should have exactly one`,
  });
}

// Check 1: Edges pointing to non-existent nodes
gameData.edges.forEach((edge) => {
  if (!nodeMap.has(edge.target)) {
    errors.push({
      type: 'invalid_edge_target',
      nodeId: edge.source,
      nodeType: nodeMap.get(edge.source)?.type || 'unknown',
      message: `Edge from node "${edge.source}" points to non-existent node "${edge.target}"`,
    });
  }
});

// Check 2: Nodes without outgoing connections (except start/end nodes)
gameData.nodes.forEach((node) => {
  if (node.type === 'start' || node.type === 'end') {
    return; // Skip start and end nodes
  }

  const hasOutgoingEdges = outgoingEdges.has(node.id) && outgoingEdges.get(node.id).size > 0;
  if (!hasOutgoingEdges) {
    errors.push({
      type: 'missing_connection',
      nodeId: node.id,
      nodeType: node.type,
      message: `Node "${node.id}" (type: ${node.type}) has no outgoing connections`,
    });
  }
});

// Check 3: If node requirements
gameData.nodes.forEach((node) => {
  if (node.type === 'if') {
    const threshold = node.data?.threshold;
    if (threshold == null) {
      errors.push({
        type: 'missing_threshold',
        nodeId: node.id,
        nodeType: node.type,
        message: `If node "${node.id}" must have a threshold value configured`,
      });
    }

    const edgeMap = outgoingEdges.get(node.id);
    if (edgeMap) {
      if (!edgeMap.has('lowerOrEqual')) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `If node "${node.id}" is missing the "lowerOrEqual" edge`,
        });
      }
      if (!edgeMap.has('higher')) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `If node "${node.id}" is missing the "higher" edge`,
        });
      }
    }
  }
});

// Check 4: Random node requirements
gameData.nodes.forEach((node) => {
  if (node.type === 'random') {
    const edgeMap = outgoingEdges.get(node.id);
    if (edgeMap) {
      const options = Array.from(edgeMap.keys()).filter((key) => key !== 'default');
      if (options.length === 0) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `Random node "${node.id}" has no option edges (option1, option2, etc.)`,
        });
      }
      if (edgeMap.has('default')) {
        errors.push({
          type: 'invalid_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `Random node "${node.id}" should not have a "default" edge, only option edges`,
        });
      }
    }
  }
});

// Check 5: SetState node requirements
gameData.nodes.forEach((node) => {
  if (node.type === 'setState') {
    const edgeMap = outgoingEdges.get(node.id);
    if (!edgeMap || !edgeMap.has('default')) {
      errors.push({
        type: 'missing_edge',
        nodeId: node.id,
        nodeType: node.type,
        message: `SetState node "${node.id}" must have a "default" edge`,
      });
    }
  }
});

// Check 6: Scene node edge validation
gameData.nodes.forEach((node) => {
  if (node.type === 'scene') {
    const edgeMap = outgoingEdges.get(node.id);
    if (edgeMap) {
      const hasOption1A = node.data?.option1A != null && node.data.option1A.trim() !== '';
      const hasOption1B = node.data?.option1B != null && node.data.option1B.trim() !== '';
      const hasOption2A = node.data?.option2A != null && node.data.option2A.trim() !== '';
      const hasOption2B = node.data?.option2B != null && node.data.option2B.trim() !== '';
      const hasOption3A = node.data?.option3A != null && node.data.option3A.trim() !== '';
      const hasOption3B = node.data?.option3B != null && node.data.option3B.trim() !== '';

      if ((hasOption1A || hasOption1B) && !edgeMap.has('option1')) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `Scene node "${node.id}" has option1 text but no "option1" edge`,
        });
      }
      if ((hasOption2A || hasOption2B) && !edgeMap.has('option2')) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `Scene node "${node.id}" has option2 text but no "option2" edge`,
        });
      }
      if ((hasOption3A || hasOption3B) && !edgeMap.has('option3')) {
        errors.push({
          type: 'missing_edge',
          nodeId: node.id,
          nodeType: node.type,
          message: `Scene node "${node.id}" has option3 text but no "option3" edge`,
        });
      }
    }
  }
});

// Check 7: End node content validation
gameData.nodes.forEach((node) => {
  if (node.type === 'end') {
    const hasHeadline = node.data?.headline != null && node.data.headline.trim() !== '';
    const hasText = node.data?.text != null && node.data.text.trim() !== '';
    if (!hasHeadline || !hasText) {
      warnings.push({
        type: 'missing_content',
        nodeId: node.id,
        nodeType: node.type,
        message: `End node "${node.id}" is missing ${!hasHeadline ? 'headline' : ''}${!hasHeadline && !hasText ? ' and ' : ''}${!hasText ? 'text' : ''}`,
      });
    }
  }
});

// Check 8: Nodes with A/B variants where one is missing
gameData.nodes.forEach((node) => {
  if (node.type === 'scene') {
    const hasA = node.data?.textA != null && node.data.textA.trim() !== '';
    const hasB = node.data?.textB != null && node.data.textB.trim() !== '';

    if (hasA && !hasB) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has textA but missing textB`,
      });
    }
    if (hasB && !hasA) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has textB but missing textA`,
      });
    }

    // Check option1A/option1B pair
    const hasOption1A = node.data?.option1A != null && node.data.option1A.trim() !== '';
    const hasOption1B = node.data?.option1B != null && node.data.option1B.trim() !== '';
    if (hasOption1A && !hasOption1B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option1A but missing option1B`,
      });
    }
    if (hasOption1B && !hasOption1A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option1B but missing option1A`,
      });
    }

    // Check option2A/option2B pair
    const hasOption2A = node.data?.option2A != null && node.data.option2A.trim() !== '';
    const hasOption2B = node.data?.option2B != null && node.data.option2B.trim() !== '';
    if (hasOption2A && !hasOption2B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option2A but missing option2B`,
      });
    }
    if (hasOption2B && !hasOption2A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option2B but missing option2A`,
      });
    }

    // Check option3A/option3B pair
    const hasOption3A = node.data?.option3A != null && node.data.option3A.trim() !== '';
    const hasOption3B = node.data?.option3B != null && node.data.option3B.trim() !== '';
    if (hasOption3A && !hasOption3B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option3A but missing option3B`,
      });
    }
    if (hasOption3B && !hasOption3A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has option3B but missing option3A`,
      });
    }
  }

  if (node.type === 'newsFlash') {
    const hasHeadlineA = node.data?.headlineA != null && node.data.headlineA.trim() !== '';
    const hasHeadlineB = node.data?.headlineB != null && node.data.headlineB.trim() !== '';
    const hasTextA = node.data?.textA != null && node.data.textA.trim() !== '';
    const hasTextB = node.data?.textB != null && node.data.textB.trim() !== '';

    if (hasHeadlineA && !hasHeadlineB) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `NewsFlash node "${node.id}" has headlineA but missing headlineB`,
      });
    }
    if (hasHeadlineB && !hasHeadlineA) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `NewsFlash node "${node.id}" has headlineB but missing headlineA`,
      });
    }
    if (hasTextA && !hasTextB) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `NewsFlash node "${node.id}" has textA but missing textB`,
      });
    }
    if (hasTextB && !hasTextA) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `NewsFlash node "${node.id}" has textB but missing textA`,
      });
    }
  }

  if (node.type === 'social') {
    // Check text1A/text1B pair
    const hasText1A = node.data?.text1A != null && node.data.text1A.trim() !== '';
    const hasText1B = node.data?.text1B != null && node.data.text1B.trim() !== '';
    if (hasText1A && !hasText1B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text1A but missing text1B`,
      });
    }
    if (hasText1B && !hasText1A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text1B but missing text1A`,
      });
    }

    // Check text2A/text2B pair
    const hasText2A = node.data?.text2A != null && node.data.text2A.trim() !== '';
    const hasText2B = node.data?.text2B != null && node.data.text2B.trim() !== '';
    if (hasText2A && !hasText2B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text2A but missing text2B`,
      });
    }
    if (hasText2B && !hasText2A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text2B but missing text2A`,
      });
    }

    // Check text3A/text3B pair
    const hasText3A = node.data?.text3A != null && node.data.text3A.trim() !== '';
    const hasText3B = node.data?.text3B != null && node.data.text3B.trim() !== '';
    if (hasText3A && !hasText3B) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text3A but missing text3B`,
      });
    }
    if (hasText3B && !hasText3A) {
      errors.push({
        type: 'missing_variant',
        nodeId: node.id,
        nodeType: node.type,
        message: `Social node "${node.id}" has text3B but missing text3A`,
      });
    }
  }
});

// Check 9: Scene nodes without at least one button text
gameData.nodes.forEach((node) => {
  if (node.type === 'scene') {
    const hasOption1A = node.data?.option1A != null && node.data.option1A.trim() !== '';
    const hasOption1B = node.data?.option1B != null && node.data.option1B.trim() !== '';
    const hasOption2A = node.data?.option2A != null && node.data.option2A.trim() !== '';
    const hasOption2B = node.data?.option2B != null && node.data.option2B.trim() !== '';
    const hasOption3A = node.data?.option3A != null && node.data.option3A.trim() !== '';
    const hasOption3B = node.data?.option3B != null && node.data.option3B.trim() !== '';

    const hasOption1 = hasOption1A || hasOption1B;
    const hasOption2 = hasOption2A || hasOption2B;
    const hasOption3 = hasOption3A || hasOption3B;

    if (!hasOption1 && !hasOption2 && !hasOption3) {
      errors.push({
        type: 'missing_button_text',
        nodeId: node.id,
        nodeType: node.type,
        message: `Scene node "${node.id}" has no button text (option1, option2, or option3)`,
      });
    }
  }
});

// Check 10: Unreachable nodes (nodes that cannot be reached from start)
if (startNodes.length === 1) {
  const startNodeId = startNodes[0].id;
  const reachableNodes = new Set([startNodeId]);
  const queue = [startNodeId];

  while (queue.length > 0) {
    const currentNodeId = queue.shift();
    const edgeMap = outgoingEdges.get(currentNodeId);
    if (edgeMap) {
      edgeMap.forEach((targetId) => {
        if (!reachableNodes.has(targetId)) {
          reachableNodes.add(targetId);
          queue.push(targetId);
        }
      });
    }
  }

  gameData.nodes.forEach((node) => {
    if (node.type !== 'end' && !reachableNodes.has(node.id)) {
      warnings.push({
        type: 'unreachable_node',
        nodeId: node.id,
        nodeType: node.type,
        message: `Node "${node.id}" (type: ${node.type}) is unreachable from the start node`,
      });
    }
  });
}

// Check 11: dayssincestart ascending validation
if (startNodes.length === 1) {
  const startNodeId = startNodes[0].id;

  // DFS function to traverse paths and check dayssincestart values
  const checkDaysSinceStart = (nodeId, maxDaysSinceStart, path) => {
    // Check for cycles - if we've seen this node on this path before, skip
    if (path.has(nodeId)) {
      return;
    }

    const node = nodeMap.get(nodeId);
    if (!node) return;

    const currentDaysSinceStart = node.data?.dayssincestart;

    // If this node has dayssincestart, check it's >= the max seen so far
    if (currentDaysSinceStart != null) {
      if (typeof currentDaysSinceStart !== 'number') {
        errors.push({
          type: 'invalid_dayssincestart',
          nodeId: node.id,
          nodeType: node.type,
          message: `Node "${node.id}" has invalid dayssincestart value (must be a number): ${currentDaysSinceStart}`,
        });
      } else if (currentDaysSinceStart < maxDaysSinceStart) {
        errors.push({
          type: 'non_ascending_dayssincestart',
          nodeId: node.id,
          nodeType: node.type,
          message: `Node "${node.id}" has dayssincestart ${currentDaysSinceStart}, which is less than the previous value ${maxDaysSinceStart} in the flow`,
        });
      } else {
        // Update max for this path
        maxDaysSinceStart = currentDaysSinceStart;
      }
    }

    // Continue traversing to child nodes
    const edgeMap = outgoingEdges.get(nodeId);
    if (edgeMap) {
      // Create a new path set for each child to allow different paths to merge
      const newPath = new Set(path);
      newPath.add(nodeId);

      edgeMap.forEach((targetId) => {
        checkDaysSinceStart(targetId, maxDaysSinceStart, newPath);
      });
    }
  };

  // Start traversal from start node with initial max of -Infinity (to allow negative numbers)
  checkDaysSinceStart(startNodeId, -Infinity, new Set());
}

// Print results
console.log('='.repeat(80));
console.log('Game JSON Validation Report');
console.log('='.repeat(80));
console.log(`Total nodes: ${gameData.nodes.length}`);
console.log(`Total edges: ${gameData.edges.length}`);
console.log('');

if (warnings.length > 0) {
  console.log(`⚠️  Found ${warnings.length} warning(s):\n`);
  warnings.forEach((warning, index) => {
    console.log(`${index + 1}. [${warning.type.toUpperCase()}] ${warning.message}`);
    console.log(`   Node ID: ${warning.nodeId}`);
    console.log(`   Node Type: ${warning.nodeType}`);
    console.log('');
  });
  console.log('');
}

if (errors.length === 0) {
  console.log('✅ No errors found!');
  process.exit(0);
} else {
  console.log(`❌ Found ${errors.length} error(s):\n`);
  errors.forEach((error, index) => {
    console.log(`${index + 1}. [${error.type.toUpperCase()}] ${error.message}`);
    console.log(`   Node ID: ${error.nodeId}`);
    console.log(`   Node Type: ${error.nodeType}`);
    console.log('');
  });
  process.exit(1);
}
