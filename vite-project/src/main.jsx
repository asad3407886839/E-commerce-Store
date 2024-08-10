// index.js or main.js (entry point)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './CartContext'; // Import CartProvider
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <React.StrictMode>
        <CartProvider> {/* Wrap App with CartProvider */}
            <App />
        </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
