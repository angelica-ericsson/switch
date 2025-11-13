import { useEffect } from 'react';
import game1 from '../../game-files/game1.json';
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

  const [localStorageNodes] = useLocalStorage<Node[]>('editor/nodes', []);
  const [localStorageEdges] = useLocalStorage<Edge[]>('editor/edges', []);

  // initialize the game:
  useEffect(() => {
    let gameData: unknown = null;
    if (location.hash.slice(1) === 'localstorage')
      gameData = { nodes: localStorageNodes, edges: localStorageEdges };

    if (location.hash.slice(1) === 'game1') gameData = game1;

    // if there hasn't been any direct command which game data to load, we chose randomly:
    if (gameData === null) {
      // since we only have one game right now, it's always game1:
      gameData = game1;
    }

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
