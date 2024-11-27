import { useState, useEffect } from 'react';

const API_URL = 'https://backend-mallmart-bd2-production.up.railway.app/api';

function useApi(categoryId, userEmail) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        setLoading(true);
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

    const getRecommendations = async () => {
        if (!userEmail) return;
        try {
            console.log('Obteniendo recomendaciones para:', userEmail);
            const response = await fetch(`${API_URL}/products/recommendations/${userEmail}`);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            
            // Verificar si la respuesta tiene contenido
            const result = await response.text(); // Obtener la respuesta como texto
            if (result) {
                const jsonResult = JSON.parse(result); // Analizar el texto como JSON
                console.log('Recomendaciones:', jsonResult);
                setRecommendations(jsonResult);
            } else {
                // Si no hay contenido, establecer recomendaciones como un array vacío
                setRecommendations([]);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        getCategories(); // Cargar categorías una vez
    }, []); // Solo se ejecuta una vez al montar el componente

    useEffect(() => {
        getProducts(); // Cargar productos según la categoría
    }, [categoryId]); // Solo se ejecuta cuando categoryId cambia

    useEffect(() => {
        getRecommendations(); // Cargar recomendaciones si hay un correo electrónico
    }, [userEmail]); // Solo se ejecuta cuando userEmail cambia

    return { products, categories, recommendations, loading, error };
}

export default useApi;