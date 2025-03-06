import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          style: {
            background: '#059669',
          },
        },
        error: {
          style: {
            background: '#DC2626',
          },
        },
      }}
    />
  </React.StrictMode>
);
