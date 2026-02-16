import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import FlowbiteSetup from './components/FlowbiteSetup.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlowbiteSetup />
    <App />
  </StrictMode>,
);
