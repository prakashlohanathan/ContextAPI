import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import CartContextProvider from './Components/Cart.context';

const root = document.getElementById('root');
const app = (
  <CartContextProvider>
  <Router>
    <App />
  </Router>
  </CartContextProvider>
);

ReactDOM.createRoot(root).render(app);