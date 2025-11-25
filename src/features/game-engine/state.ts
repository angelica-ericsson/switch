import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { gameSchema, type UnionNodeType } from './zod-schema';
import { GAME_START_DATE } from './constants';

/**
 * Event types for buy/sell operations
 */
export type BuyEvent = { type: 'buy'; productA: number; productB: number; date: string };
export type SellEvent = { type: 'sell'; productA: number; productB: number; date: string };
export type InitalStock = { type: 'inital'; productA: number; productB: number; date: string };
export type GameEvent = BuyEvent | SellEvent | InitalStock;

/**
 * Type of the game state
 */
export interface GameState {
  sentimentPro: number;
  sentimentNeutral: number;
  sentimentAgainst: number;
  events: GameEvent[];

  points: number;

  gameVariant: 'A' | 'B';
  isInitialized: boolean;
  daysSinceGameStart: number;

  currentNode: UnionNodeType | null;
  nodes: Map<string, UnionNodeType>;
  edges: Map<string, EdgeTarget>;
  setCurrentNode: (newCurrent: UnionNodeType) => void;
  setGameState: (newState: Partial<GameState>) => void;
  setNodesAndEdges: (nodes: Map<string, UnionNodeType>, edges: Map<string, EdgeTarget>) => void;
  moveForward: (direction: string) => void;
  pushEvent: (event: GameEvent) => void;
  getStock: (product: 'A' | 'B') => number;
  getTotalSales: () => number;
  surveyResponse1: string | null;
  surveyResponse2: string | null;
  setSurveyResponses: (response1: string, response2: string) => void;
}

/**
 * Calculates the current stock for a product based on events
 */
function calculateStock(events: GameEvent[], product: 'A' | 'B'): number {
  const productKey = product === 'A' ? 'productA' : 'productB';
  return events.reduce((stock, event) => {
    if (event.type === 'sell') {
      return stock - event[productKey];
    } else {
      return stock + event[productKey];
    }
  }, 0);
}

/**
 * Calculates the total sales (sum of all productA + productB from sell events)
 */
function calculateTotalSales(events: GameEvent[]): number {
  return events.reduce((total, event) => {
    if (event.type === 'sell') {
      return total + event.productA + event.productB;
    }
    return total;
  }, 0);
}

/**
 * Calculates a date from days since game start
 * Returns a Date object that can be used for formatting or converted to ISO string
 */
export function getDateFromDaysSinceStart(days: number): Date {
  const date = new Date(GAME_START_DATE);
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * the actual game state
 */
export const useGameState = create<GameState>()((set, get) => ({
  sentimentPro: 0,
  sentimentAgainst: 0,
  sentimentNeutral: 0,
  events: [],
  points: 0,
  gameVariant: 'A' as const,
  isInitialized: false,
  daysSinceGameStart: 0,
  currentNode: null,
  nodes: new Map(),
  edges: new Map(),
  surveyResponse1: null,
  surveyResponse2: null,
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
  pushEvent: (event) =>
    set((state) => {
      // For sell events, clamp to available stock - sell as much as possible
      if (event.type === 'sell') {
        const currentStockA = calculateStock(state.events, 'A');
        const currentStockB = calculateStock(state.events, 'B');

        console.log('currentStockA', currentStockA);
        console.log('currentStockB', currentStockB);

        // Clamp sell amounts to available stock, preserve date
        const clampedEvent: SellEvent = {
          type: 'sell',
          productA: Math.min(event.productA, currentStockA),
          productB: Math.min(event.productB, currentStockB),
          date: event.date,
        };

        return {
          events: [...state.events, clampedEvent],
        };
      }

      return {
        events: [...state.events, event],
      };
    }),
  getStock: (product) => {
    const state = get();
    return calculateStock(state.events, product);
  },
  getTotalSales: () => {
    const state = get();
    return calculateTotalSales(state.events);
  },
  setSurveyResponses: (response1, response2) =>
    set(() => ({
      surveyResponse1: response1,
      surveyResponse2: response2,
    })),
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
  if (
    node.type === 'scene' ||
    node.type === 'stockUp' ||
    node.type === 'end' ||
    node.type === 'start' ||
    node.type === 'newsFlash' ||
    node.type === 'social' ||
    node.type === 'survey'
  ) {
    const stateUpdates: Partial<GameState> = { currentNode: node };
    // Update daysSinceGameStart if the node has this property
    if ('data' in node && 'daysSinceGameStart' in node.data && node.data.daysSinceGameStart != null) {
      stateUpdates.daysSinceGameStart = node.data.daysSinceGameStart as number;
    }
    return stateUpdates;
  }

  // State-updating nodes: process and continue automatically
  if (node.type === 'setState') {
    // Update game state with values from node.data (only non-null/undefined values)
    const stateUpdates: Partial<GameState> = {};
    if (node.data) {
      if (node.data.sentimentPro != null) stateUpdates.sentimentPro = node.data.sentimentPro;
      if (node.data.sentimentNeutral != null) stateUpdates.sentimentNeutral = node.data.sentimentNeutral;
      if (node.data.sentimentAgainst != null) stateUpdates.sentimentAgainst = node.data.sentimentAgainst;

      // Update daysSinceGameStart if present
      if (node.data.daysSinceGameStart != null) {
        stateUpdates.daysSinceGameStart = node.data.daysSinceGameStart;
      }

      // Push a sell event with demand properties
      const demandA = node.data.demandA ?? 0;
      const demandB = node.data.demandB ?? 0;
      if (demandA > 0 || demandB > 0) {
        // Calculate date from daysSinceGameStart or use current state's daysSinceGameStart
        const daysForEvent = node.data.daysSinceGameStart ?? state.daysSinceGameStart;
        const eventDate = getDateFromDaysSinceStart(daysForEvent).toISOString();

        // push an inital state of the inventory
        if (state.events.length === 0) {
          state.events = [
            {
              date: eventDate,
              type: 'inital',
              productA: demandA + 10,
              productB: demandB + 10,
            },
          ];
        }
        state.events.push({
          date: eventDate,
          type: 'sell',
          productA: demandA,
          productB: demandB,
        });
      }
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

    // Find the last "buy" event and use its productA property
    const buyEvents = state.events.filter((event): event is BuyEvent => event.type === 'buy');
    if (buyEvents.length === 0) {
      throw Error(`if node "${node.id}" requires at least one "buy" event, but none were found`);
    }
    const lastBuyEvent = buyEvents[buyEvents.length - 1];
    const currentStockA = lastBuyEvent.productA;

    // Determine which path to take based on stockA comparison
    const direction = currentStockA <= threshold ? 'lowerOrEqual' : 'higher';

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
