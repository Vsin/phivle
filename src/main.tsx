import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import "./output.css"

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<BrowserRouter>
    	<App />
		</BrowserRouter>
  </StrictMode>
);
