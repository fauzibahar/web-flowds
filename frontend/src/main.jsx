import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router';
import LinkMedSosPage from './pages/LinkMedSosPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/linkmedsos" element={<LinkMedSosPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
