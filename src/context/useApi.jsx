import { useState, useEffect } from 'react';

const API_URL = 'https://backend-mallmart-bd2-production.up.railway.app/api';

function useApi(categoryId) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        setLoading(true); // Asegúrate de que loading sea true al iniciar la carga
        try {
            const url = categoryId ? `${API_URL}/products/categoryID/${categoryId}` : `${API_URL}/products/all`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const result = await response.json();
            setProducts(result);
        } catch (err) {
            setError(err.message); 
        } finally {
            setLoading(false); 
        }
    };

    const getCategories = async () => {
        try {
            const response = await fetch(`${API_URL}/categories/all`);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const result = await response.json();
            setCategories(result);
        } catch (err) {
            setError(err.message); 
        }
    };

    useEffect(() => {
        getCategories(); // Cargar categorías una vez
        getProducts(); // Cargar productos según la categoría
    }, [categoryId]); // Dependencia de categoryId

    return { products, categories, loading, error };
}

export default useApi;