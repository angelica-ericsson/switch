import { Button } from '@/components/ui/button';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';

export function StartScreen() {
  const moveForward = useGameState((state) => state.moveForward);

  const handleStartClick = () => {
    moveForward('default');
  };

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Game</h1>
        <p className="text-lg text-muted-foreground">
          Click the button below to start your adventure
        </p>
        <Button onClick={handleStartClick} size="lg" className="mt-8">
          Start the game
        </Button>
      </div>
    </ScreenLayout>
  );
}
