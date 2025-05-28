import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import App from './components/App.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)