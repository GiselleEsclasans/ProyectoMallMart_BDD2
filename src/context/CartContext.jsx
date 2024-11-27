import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { user } = useAuth(); 

    useEffect(() => {
   
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        const fetchCart = async () => {
            const storedEmail = localStorage.getItem('email');
            
            if (storedEmail) {
                try {
                    
                    const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/${storedEmail}`);
                    if (!response.ok) {
                        throw new Error('Error al cargar el carrito');
                    }
                    const data = await response.json();
                    
              
                    setCart(data || []); 
                    localStorage.setItem('cart', JSON.stringify(data || []));
                    console.log("carro: ", data);
                } catch (error) {
                    console.error('Error al cargar el carrito:', error);
                }
            }
        };

        fetchCart();
    }, [user]);  

    const addToCart = async (product, quantity) => {
        const storedEmail = localStorage.getItem('email');
        
        
        if (!product || !product.productId || !product.price) {
            console.error('Producto inválido:', product);
            return; 
        }

        console.log('Paso');
    
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item[0].productId === product.productId);
            
            if (existingProductIndex !== -1) {
                
                const newCart = prevCart.map((item, index) => 
                    index === existingProductIndex 
                        ? [item[0], item[1] + quantity] 
                        : item
                );
    
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
            } else {
           
                const newCart = [...prevCart, [product, 1]];
    
               
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
            }
        });
    
        await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/products/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: storedEmail,
                productId: product.productId,
                quantity: quantity,
                dateAdded: new Date().toISOString().split('T')[0] 
            }), 
        });
    };

    

    const removeFromCart = async (productId) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item[0].productId !== productId); 
            
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQuantity = async (productId, quantity) => {
        setCart(prevCart => {
            const newCart = prevCart.map(item =>
                item[0].productId === productId 
                    ? [item[0], quantity]
                    : item
            );
    
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    
        const storedEmail = localStorage.getItem('email');
        await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/${storedEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, quantity }), 
        });
    };

    const purchase = async () => {
        try {
            const storedEmail = localStorage.getItem('email');
            const currentDate = new Date().toISOString().split('T')[0]; 
    
            const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: storedEmail, date: currentDate }), 
            });
    
            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.message || 'Error al realizar la compra');
            }
    
            setCart([]);
            localStorage.removeItem('cart'); 
            alert('Compra realizada con éxito!');
        } catch (error) {
            console.error('Error en la compra:', error);
            alert('Error al realizar la compra: ' + error.message);
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