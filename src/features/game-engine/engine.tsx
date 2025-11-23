import { useGameState } from './state';
import { SceneScreen } from './screens/sceneScreen';
import { StockUpScreen } from './screens/stockUpScreen';
import { EndScreen } from './screens/endScreen';
import { StartScreen } from './screens/startScreen';
import { NewsFlashScreen } from './screens/newsFlashScreen';
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
      <div className="flex min-h-screen items-center justify-center">
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
    return <StockUpScreen node={currentNode} />;
  }
  if (currentNode.type === 'end') {
    return <EndScreen node={currentNode} />;
  }
  if (currentNode.type === 'newsFlash') {
    return <NewsFlashScreen node={currentNode} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Unknown node type: {(currentNode as { type: string }).type}</p>
    </div>
  );
}
