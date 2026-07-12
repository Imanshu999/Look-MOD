import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 🛡️ ANTI-HACKER, SHORTCUT & SOURCE CODE PROTECTOR
if (typeof window !== 'undefined') {
  // 1. Right-Click completely block karne ke liye
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // 2. F12, Ctrl+U (View Source), Ctrl+Shift+I (Inspect) block karne ke liye
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'U' || e.key === 'S'))
    ) {
      e.preventDefault();
      return false;
    }
  });

  // 3. DevTools Debugger Trap (Koshish karne par pure browser tab ko freeze kar dega)
  setInterval(() => {
    (function () {
      function Function() { return false; }
      // @ts-ignore
      debugger;
    })();
  }, 50);
}

// 🚀 Tumhara App Render Logic
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
