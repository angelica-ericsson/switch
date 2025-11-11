import { useEffect } from 'react';
import game1 from '../../game-files/game1.json';
import { generateGameNodeGraph, useGameState } from './state';
import { SceneScreen } from './screens/sceneScreen';
import { StockUpScreen } from './screens/stockUpScreen';
import { EndScreen } from './screens/endScreen';
import { StartScreen } from './screens/startScreen';

export function GameEngine() {
  const currentNode = useGameState((state) => state.currentNode);
  const setNodesAndEdges = useGameState((state) => state.setNodesAndEdges);
  const setCurrentNode = useGameState((state) => state.setCurrentNode);

  // initialize the game:
  useEffect(() => {
    const { nodes, edges, startNode } = generateGameNodeGraph(game1);
    setNodesAndEdges(nodes, edges);
    setCurrentNode(startNode);
  }, [setNodesAndEdges, setCurrentNode]);

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
