import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Si tienes algún estilo adicional
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/WebParcial">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
