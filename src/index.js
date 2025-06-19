import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import SLDS CSS
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 