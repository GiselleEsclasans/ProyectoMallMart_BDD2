import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { user } = useAuth(); 

  
    useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                try {
                    const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/${user.email}`);
                    if (!response.ok) {
                        throw new Error('Error al cargar el carrito');
                    }
                    const data = await response.json();
                    setCart(data.cart); 
                } catch (error) {
                    console.error('Error al cargar el carrito:', error);
                }
            }
        };

        fetchCart();
    }, [user]);  

    const addToCart = async (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.product.productId === product.productId);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.product.productId === product.productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity: 1 }];
            }
        });

        await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/products/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userEmail: user.email, product }), 
        });
    };

    const removeFromCart = async (productId) => {
        setCart(prevCart => prevCart.filter(item => item.product.productId !== productId));

    
    };

    const updateQuantity = async (productId, quantity) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.product.productId === productId
                    ? { ...item, quantity }
                    : item
            );
        });

 
        await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, quantity }), 
        });
    };

    const purchase = async () => {
        try {
            const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/purchase/${user.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cart }), 
            });

            if (!response.ok) {
                throw new Error('Error al realizar la compra');
            }

            setCart([]);
            alert('Compra realizada con éxito!');
        } catch (error) {
            console.error('Error en la compra:', error);
            alert('Error al realizar la compra');
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, purchase }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};