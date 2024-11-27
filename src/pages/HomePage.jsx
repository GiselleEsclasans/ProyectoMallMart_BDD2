import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; 
import Carrousel from '../components/carrousel';
import Categoryfooter from '../components/categoryfooter';
import Miniproductcard from '../components/miniproductcard';
import Rightmediumproductcard from '../components/rightmediumproductcard';
import ProductList from '../components/ProductList';
import useApi from '../context/useApi';
import Rightmediumproductcard2 from '../components/rightmediumproductcard2';

function HomePage() {
    const { user } = useAuth(); 
    const storedEmail = localStorage.getItem('email');
    const { products, categories, recommendations, loading, error } = useApi(null, storedEmail); 

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Resetea la categoría seleccionada cuando se cargan los productos
        setSelectedCategory('');
    }, [products]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        console.error("Error en la carga de productos:", error); 
        return <div>Error: {error}</div>; 
    }

    // Filtrar productos según la categoría seleccionada
    const filteredProducts = selectedCategory 
        ? products.filter(product => product.categoryID === selectedCategory) 
        : products;

    // Dividir los productos filtrados en dos partes
    const firstFiveProducts = filteredProducts.slice(0, 5);
    const nextFiveProducts = filteredProducts.slice(5, 10);

    return (
        <div className='HomePage'>
            <Carrousel />
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5 ">
                {user ? "Recomendaciones sólo para tí" : "Nuestros Productos"}
            </span>
            <div className="flex flex-wrap">
                {user && recommendations.length > 0 
                    ? recommendations.slice(0, 5).map(recommendation => (
                        <Miniproductcard key={recommendation.productId} product={recommendation} />
                    ))
                    : firstFiveProducts.map(product => (
                        <Miniproductcard key={product.productId} product={product} />
                    ))
                }
            </div>
                

            <div className='R2 flex mb-0 '>
                <div className='R2_ w-1/2 p-5 pr-10'>
                    <span className="text-3xl font-bold text-gray-900 dark:text-rojoapagado p-5">Nuestros Productos</span>
                    <div className="flex flex-wrap">
                        <ProductList products={firstFiveProducts} />
                    </div>
                </div>
                <Rightmediumproductcard />
            </div>

            <Categoryfooter 
                categories={categories} 
                onSelectCategory={(categoryId) => {
                    setSelectedCategory(categoryId);
                    window.scrollTo(0, 0); 
                }} 
            />

            {user && ( 
                <div className=' bg-naranjaunimet R2 flex mb-0 '>
                    <Rightmediumproductcard2 />
                    <div className='R2_ w-1/2 border-t-8  bg-white border-naranjaunimet rounded-b-none rounded-xl p-5 pr-10'>
                        <span className="text-3xl font-bold text-gray-900 dark:text-rojoapagado p-5">Nuestros Productos</span>
                        <div className="flex flex-wrap">
                            <ProductList products={nextFiveProducts} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;