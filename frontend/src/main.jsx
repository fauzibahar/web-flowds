import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router';
import LinkMedSosPage from './pages/LinkMedSosPage.jsx';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/linkmedsos" element={<LinkMedSosPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    <ToastContainer />
    <SpeedInsights />
    <Analytics />
  </StrictMode>
);
