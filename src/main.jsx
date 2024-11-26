// index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'; 
import { CartProvider } from './context/CartContext'; 
import { router } from './router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CartProvider> 
            <RouterProvider router={router} />
        </CartProvider>
    </AuthProvider>
);