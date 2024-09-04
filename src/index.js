import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/authContext';

import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import { StatsProvider } from './context/statsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <StatsProvider>
        <App />
      </StatsProvider>
    </AuthProvider>
    <ToastContainer />
  </BrowserRouter>
);
