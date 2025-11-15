import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GameEngine } from './features/game-engine/engine';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameEngine />
  </StrictMode>,
);
