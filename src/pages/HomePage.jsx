import React from 'react';
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
    const { products, categories, loading, error } = useApi(); 

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        console.error("Error en la carga de productos:", error); 
        return <div>Error: {error}</div>; 
    }

    return (
        <div className='HomePage'>
            <Carrousel />
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Recomendación General 1</span>
            <div className="flex flex-wrap">
                {products.slice(0, 5).map(product => (
                    <Miniproductcard key={product.productId} product={product} />
                ))}
            </div>
            <div className='R2 flex mb-0 '>
                <div className='R2_ w-1/2 p-5 pr-10'>
                    <span className="text-3xl font-bold text-gray-900 dark:text-rojoapagado p-5">Recomendación General 2</span>
                    <div className="flex flex-wrap">
                        <ProductList products={products} />
                    </div>
                </div>
                <Rightmediumproductcard />
            </div>

            <Categoryfooter categories={categories} />

            {user && ( 
                <div className='R2 flex mb-0 '>
                    <Rightmediumproductcard2 />
                    <div className='R2_ w-1/2 p-5 pr-10'>
                        <span className="text-3xl font-bold text-gray-900 dark:text-rojoapagado p-5">Recomendación General 2</span>
                        <div className="flex flex-wrap">
                            <ProductList products={products} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;