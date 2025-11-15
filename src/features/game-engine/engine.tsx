import { useEffect } from 'react';
import game from '../../game-files/game.json';
import { generateGameNodeGraph, useGameState } from './state';
import { SceneScreen } from './screens/sceneScreen';
import { StockUpScreen } from './screens/stockUpScreen';
import { EndScreen } from './screens/endScreen';
import { StartScreen } from './screens/startScreen';
import { useLocalStorage } from 'usehooks-ts';
import type { Edge, Node } from '@xyflow/react';

export function GameEngine() {
  const setNodesAndEdges = useGameState((state) => state.setNodesAndEdges);
  const setCurrentNode = useGameState((state) => state.setCurrentNode);
  const setGameState = useGameState((state) => state.setGameState);

  const [localStorageNodes] = useLocalStorage<Node[]>('editor/nodes', []);
  const [localStorageEdges] = useLocalStorage<Edge[]>('editor/edges', []);

  // initialize the game:
  useEffect(() => {
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
    if (params.has('variant')) {
      variant = params.get('variant') === 'A' ? ('A' as const) : ('B' as const);
    }
    setGameState({ gameVariant: variant });

    const { nodes, edges, startNode } = generateGameNodeGraph(gameData);
    setNodesAndEdges(nodes, edges);
    setCurrentNode(startNode);
  }, []);

  return <GameRenderer />;
}

export function GameRenderer() {
  const currentNode = useGameState((state) => state.currentNode);

  // Render appropriate screen based on current node type
  if (!currentNode) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (currentNode.type === 'start') {
    return <StartScreen />;
  }
  if (currentNode.type === 'scene') {
    return <SceneScreen node={currentNode} />;
  }
  if (currentNode.type === 'stockUp') {
    return <StockUpScreen />;
  }
  if (currentNode.type === 'end') {
    return <EndScreen node={currentNode} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Unknown node type: {(currentNode as { type: string }).type}</p>
    </div>
  );
}
