import './index.css';
import './i18n';
import * as Sentry from '@sentry/react';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

Sentry.init({
  dsn: 'https://1f175da368255ed9713b2a8eacdd9c2c@o4510425877839872.ingest.de.sentry.io/4510425879347280',
});

// Create a new router instance
const router = createRouter({ routeTree, defaultViewTransition: true });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
