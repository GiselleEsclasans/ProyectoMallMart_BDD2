import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { user } = useAuth(); 

    useEffect(() => {
        // Cargar el carrito desde localStorage al iniciar
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
                    
                    // Establecer el carrito y guardarlo en localStorage
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

    const addToCart = async (product) => {
        const storedEmail = localStorage.getItem('email');
        
        // Asegúrate de que el producto tenga la estructura correcta
        if (!product || !product.productId || !product.price) {
            console.error('Producto inválido:', product);
            return; // Salir si el producto no es válido
        }
    
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item[0].productId === product.productId);
            
            if (existingProductIndex !== -1) {
                // Si el producto ya existe, incrementar la cantidad
                const newCart = prevCart.map((item, index) => 
                    index === existingProductIndex 
                        ? [item[0], item[1] + 1] // Incrementar la cantidad
                        : item
                );
    
                // Guardar el nuevo carrito en localStorage
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
            } else {
                // Si el producto no existe, agregarlo al carrito
                const newCart = [...prevCart, [product, 1]]; // Agregar nuevo producto con cantidad 1
    
                // Guardar el nuevo carrito en localStorage
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
            }
        });
    
        // Enviar la solicitud al servidor
        await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/products/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: storedEmail,
                productId: product.productId,
                dateAdded: new Date().toISOString().split('T')[0] // Formato YYYY-MM-DD
            }), 
        });
    };

    

    const removeFromCart = async (productId) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item[0].productId !== productId); // Filtrar por productId
            
            // Guardar el nuevo carrito en localStorage
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQuantity = async (productId, quantity) => {
        setCart(prevCart => {
            const newCart = prevCart.map(item =>
                item[0].productId === productId // Acceder al productId del primer elemento del sub-array
                    ? [item[0], quantity] // Actualizar la cantidad en el segundo elemento
                    : item
            );
    
            // Guardar el nuevo carrito en localStorage
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
            const currentDate = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD
    
            const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/cart/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: storedEmail, date: currentDate }), 
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Leer el cuerpo de la respuesta para obtener más información
                throw new Error(errorData.message || 'Error al realizar la compra');
            }
    
            setCart([]);
            localStorage.removeItem('cart'); // Limpiar el carrito del localStorage después de la compra
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