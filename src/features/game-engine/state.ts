import { create } from 'zustand';
import { gameSchema, type UnionNodeType } from './zod-schema';

/**
 * Type of the game state
 */
export interface GameState {
  demandA: number;
  demandB: number;
  priceA: number;
  priceB: number;
  sentimentPro: number;
  sentimentNeutral: number;
  sentimentAgainst: number;
  stockA: number;
  stockB: number;

  points: number;

  gameVariant: 'A' | 'B';
  isInitialized: boolean;

  currentNode: UnionNodeType | null;
  nodes: Map<string, UnionNodeType>;
  edges: Map<string, EdgeTarget>;
  setCurrentNode: (newCurrent: UnionNodeType) => void;
  setGameState: (newState: Partial<GameState>) => void;
  setNodesAndEdges: (nodes: Map<string, UnionNodeType>, edges: Map<string, EdgeTarget>) => void;
  moveForward: (direction: string) => void;
}

/**
 * the actual game state
 */
export const useGameState = create<GameState>((set) => ({
  demandA: 0,
  demandB: 0,
  priceA: 0,
  priceB: 0,
  sentimentPro: 0,
  sentimentAgainst: 0,
  sentimentNeutral: 0,
  stockA: 0,
  stockB: 0,
  points: 0,
  gameVariant: 'A',
  isInitialized: false,
  currentNode: null,
  nodes: new Map(),
  edges: new Map(),
  setCurrentNode: (newCurrent) =>
    set(() => ({
      currentNode: newCurrent,
    })),
  setGameState: (newState) => set(() => ({ ...newState })),
  setNodesAndEdges: (nodes, edges) =>
    set(() => ({
      nodes,
      edges,
    })),
  moveForward: (direction) => set((state) => moveGameForward(state, direction)),
}));

export type EdgeTarget = Record<string, string>;

/**
 * Loader function that takes a game JSON and transforms
 * into an easy to use data structure
 */
export function generateGameNodeGraph(input: unknown) {
  const parsed = gameSchema.parse(input);

  const edges = new Map<string, EdgeTarget>();
  parsed.edges.forEach((edge) => {
    if (!edge.sourceHandle) {
      edges.set(edge.source, { default: edge.target });
    } else {
      const existing = edges.get(edge.source);
      if (!existing) {
        edges.set(edge.source, { [edge.sourceHandle]: edge.target });
      } else {
        edges.set(edge.source, {
          [edge.sourceHandle]: edge.target,
          ...existing,
        });
      }
    }
  });

  const nodes = new Map<string, UnionNodeType>();
  parsed.nodes.forEach((node) => nodes.set(node.id, node));

  const startNode = nodes.get('start');
  if (!startNode) throw Error('The game has no start node');

  return { nodes, edges, startNode };
}

/**
 * Moves the game forward by processing the current node and advancing to the next.
 * State-updating nodes (setState, random) are processed automatically and
 * the game continues until it reaches a UI-rendering node (start, scene, stockUp, end).
 */
function moveGameForward(state: GameState, direction: string): Partial<GameState> {
  if (!state.currentNode) throw Error('current node cannot be null');

  // Get the edge from the current node
  const edge = state.edges.get(state.currentNode.id);
  if (!edge) {
    throw Error(`couldn't find any edges for node id ${state.currentNode.id}`);
  }
  if (!(direction in edge)) {
    throw Error(`direction "${direction}" is not a property of Edge ${JSON.stringify(edge)}`);
  }

  // Move to the next node
  const nextNodeId = edge[direction];
  const nextNode = state.nodes.get(nextNodeId);
  if (!nextNode) throw Error(`Next node "${nextNodeId}" not found in node list`);

  // Process the next node based on its type
  return processNode(state, nextNode);
}

/**
 * Processes a node and returns the updated state.
 * State-updating nodes are processed automatically and the game continues.
 * UI-rendering nodes update currentNode and stop.
 */
function processNode(state: GameState, node: UnionNodeType): Partial<GameState> {
  // UI-rendering nodes: update currentNode and stop
  if (node.type === 'scene' || node.type === 'stockUp' || node.type === 'end' || node.type === 'start' || node.type === 'newsFlash') {
    return { currentNode: node };
  }

  // State-updating nodes: process and continue automatically
  if (node.type === 'setState') {
    // Update game state with values from node.data (only non-null/undefined values)
    const stateUpdates: Partial<GameState> = {};
    if (node.data) {
      if (node.data.demandA != null) stateUpdates.demandA = node.data.demandA;
      if (node.data.demandB != null) stateUpdates.demandB = node.data.demandB;
      if (node.data.priceA != null) stateUpdates.priceA = node.data.priceA;
      if (node.data.priceB != null) stateUpdates.priceB = node.data.priceB;
      if (node.data.sentimentPro != null) stateUpdates.sentimentPro = node.data.sentimentPro;
      if (node.data.sentimentNeutral != null) stateUpdates.sentimentNeutral = node.data.sentimentNeutral;
      if (node.data.sentimentAgainst != null) stateUpdates.sentimentAgainst = node.data.sentimentAgainst;
    }

    // Move to next node using 'default' direction
    const edge = state.edges.get(node.id);
    if (!edge || !edge.default) {
      throw Error(`setState node "${node.id}" must have a 'default' edge, but found: ${JSON.stringify(edge)}`);
    }

    const nextNodeId = edge.default;
    const nextNode = state.nodes.get(nextNodeId);
    if (!nextNode) {
      throw Error(`Next node "${nextNodeId}" not found in node list`);
    }

    // Recursively process the next node
    const nextStateUpdates = processNode(state, nextNode);
    return { ...stateUpdates, ...nextStateUpdates };
  }

  if (node.type === 'random') {
    // Randomly choose between option1 and option2
    const edge = state.edges.get(node.id);
    if (!edge) {
      throw Error(`random node "${node.id}" has no outgoing edges`);
    }

    // Get available options
    const options = Object.keys(edge).filter((key) => key !== 'default');
    if (options.length === 0) {
      throw Error(`random node "${node.id}" has no option edges (option1, option2, etc.)`);
    }

    // Randomly select an option
    const randomOption = options[Math.floor(Math.random() * options.length)];
    const nextNodeId = edge[randomOption];
    const nextNode = state.nodes.get(nextNodeId);
    if (!nextNode) {
      throw Error(`Next node "${nextNodeId}" not found in node list`);
    }

    // Recursively process the next node
    return processNode(state, nextNode);
  }

  if (node.type === 'if') {
    // Check if stockA <= threshold or stockA > threshold
    const edge = state.edges.get(node.id);
    if (!edge) {
      throw Error(`if node "${node.id}" has no outgoing edges`);
    }

    // Get threshold from node data
    const threshold = node.data?.threshold;
    if (threshold == null) {
      throw Error(`if node "${node.id}" must have a threshold value configured`);
    }

    // Determine which path to take based on stockA comparison
    const direction = state.stockA <= threshold ? 'lowerOrEqual' : 'higher';

    if (!(direction in edge)) {
      throw Error(`if node "${node.id}" is missing the "${direction}" edge`);
    }

    const nextNodeId = edge[direction];
    const nextNode = state.nodes.get(nextNodeId);
    if (!nextNode) {
      throw Error(`Next node "${nextNodeId}" not found in node list`);
    }

    // Recursively process the next node
    return processNode(state, nextNode);
  }

  // Unknown node type
  throw Error(`Unknown node type: ${(node as { type: string }).type}`);
}
