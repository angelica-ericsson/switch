import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import type { Edge, Node } from '@xyflow/react';
import game from '../../game-files/game.json';
import { generateGameNodeGraph, useGameState } from './state';
import { useDemographicStore } from '../onboarding/demographicStore';
import { identify } from '@/lib/umami';

/**
 * Custom hook to initialize the game from URL parameters or defaults.
 * Reads URL hash parameters to determine:
 * - Which game data to load (localStorage or default game)
 * - Which variant to use (A or B, from params or random)
 */
export function useInitializeGame() {
  const isInitialized = useGameState((state) => state.isInitialized);
  const setNodesAndEdges = useGameState((state) => state.setNodesAndEdges);
  const setCurrentNode = useGameState((state) => state.setCurrentNode);
  const setGameState = useGameState((state) => state.setGameState);

  const [localStorageNodes] = useLocalStorage<Node[]>('editor/nodes', []);
  const [localStorageEdges] = useLocalStorage<Edge[]>('editor/edges', []);
  const [gameVariantLS, persistGameVariant] = useLocalStorage<'A' | 'B' | null>('variant', null);

  useEffect(() => {
    // Only initialize if the game hasn't been initialized yet
    if (isInitialized) {
      return;
    }

    let gameData: unknown = null;
    const params = new URLSearchParams(location.hash.slice(1));

    if (params.get('load') === 'localstorage') {
      console.info('Loading game from Localstorage');
      gameData = { nodes: localStorageNodes, edges: localStorageEdges };
    }

    // if there hasn't been any direct command which game data to load, we chose randomly:
    if (gameData === null) {
      // since we only have one game right now, it's always game1:
      gameData = game;
    }

    let variant = Math.random() > 0.5 ? ('A' as const) : ('B' as const);
    if (gameVariantLS === 'A' || gameVariantLS === 'B') {
      variant = gameVariantLS;
    }
    if (params.has('variant')) {
      variant = params.get('variant') === 'A' ? ('A' as const) : ('B' as const);
    }

    const { nodes, edges, startNode } = generateGameNodeGraph(gameData);
    setNodesAndEdges(nodes, edges);
    setCurrentNode(startNode);
    setGameState({ gameVariant: variant, isInitialized: true });
    persistGameVariant(variant);

    const demographicData = useDemographicStore.getState();
    identify(demographicData.sessionId, { variant });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);
}
