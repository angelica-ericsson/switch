import { GameEngine } from '@/features/game-engine/engine';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/game')({
  component: GameEngine,
});
