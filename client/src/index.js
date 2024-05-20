import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);