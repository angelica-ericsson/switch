import { useGameState } from './state';
import { SceneScreen } from './screens/sceneScreen';
import { StockUpScreen } from './screens/stockUpScreen';
import { EndScreen } from './screens/endScreen';
import { StartScreen } from './screens/startScreen';
import { useInitializeGame } from './useInitializeGame';

export function GameEngine() {
  useInitializeGame();

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
