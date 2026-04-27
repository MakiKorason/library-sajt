import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS for source map support
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Prevent stale deployments in Chrome caused by old Service Workers/caches.
// A previously-registered SW can keep an old index.html which references missing hashed bundles.
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((regs) => {
          regs.forEach((reg) => reg.unregister());
        });
      }
      if ('caches' in window) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
    } catch {
      // ignore
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

