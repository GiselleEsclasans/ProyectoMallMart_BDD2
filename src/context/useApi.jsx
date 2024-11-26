import { useState, useEffect } from 'react';

const API_URL = 'https://backend-mallmart-bd2-production.up.railway.app/api';

function useApi() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products/all`);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const result = await response.json();
            setProducts(result);
            
        } catch (err) {
            setError(err.message); // Maneja el error
        } finally {
            setLoading(false); // Asegúrate de establecer loading en false al final
        }
    };

    const getCategories = async () => {
        try {
            const response = await fetch(`${API_URL}/categories/all`);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const result = await response.json();
            //console.log(result);
            
            setCategories(result); // Actualiza el estado con las categorías
        } catch (err) {
            setError(err.message); // Maneja el error
        } finally {
            setLoading(false); // Asegúrate de establecer loading en false al final
        }
    };

    useEffect(() => {
        
        getProducts();
        getCategories();
    }, []); 

    return { products, categories, loading, error }; // Devuelve los productos, categorías, estado de carga y errores
}

export default useApi;