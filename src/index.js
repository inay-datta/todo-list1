import React from 'react';
import ReactDOM from 'react-dom/client';
 // Assuming you have a CSS file for global styles
import App from './App'; // Your main App component
 // Optional, for measuring performance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);