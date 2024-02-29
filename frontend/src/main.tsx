import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

async function enableMocking() {
  // Enable service worker in all environments
  const { worker } = await import('./mocks/browser');
  worker.start({
    serviceWorker: {
      url: '/kellton-frontend-coding-task/mockServiceWorker.js',
    },
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
