import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './editor.css';
import { Editor } from './features/editor/editor.tsx';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Editor />
  </StrictMode>,
);
