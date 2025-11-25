import { useGameState } from './state';
import { SceneScreen } from './screens/sceneScreen';
import { StockUpScreen } from './screens/stockUpScreen';
import { EndScreen } from './screens/endScreen';
import { StartScreen } from './screens/startScreen';
import { NewsFlashScreen } from './screens/newsFlashScreen';
import { SocialScreen } from './screens/socialScreen';
import { SurveyScreen } from './screens/surveyScreen';
import { useInitializeGame } from './useInitializeGame';
import { AnimatePresence, motion } from 'motion/react';
import { GameBackground, GameLayout } from './layout/gameLayout';
import { preloadImages } from './preload';
import { StatusBar } from './layout/statusBar';

export function GameEngine() {
  useInitializeGame();

  return <GameRenderer />;
}

export function GameRenderer() {
  const currentNode = useGameState((state) => state.currentNode);

  // Render appropriate screen based on current node type
  if (!currentNode) {
    return (
      <GameLayout>
        <div className="flex min-h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      </GameLayout>
    );
  }
  preloadImages(currentNode);

  const renderScreen = () => {
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
    if (currentNode.type === 'social') {
      return <SocialScreen node={currentNode} />;
    }
    if (currentNode.type === 'survey') {
      return <SurveyScreen />;
    }

    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Unknown node type: {(currentNode as { type: string }).type}</p>
      </div>
    );
  };

  const showStatusBar = currentNode.type !== 'start';

  return (
    <GameBackground>
      <AnimatePresence>{showStatusBar && <StatusBar />}</AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNode.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="w-full"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </GameBackground>
  );
}
