import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersProvider from './Context/PlayersProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <PlayersProvider> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PlayersProvider>
  </BrowserRouter> 
);

