import React from 'react';
import { useAuth } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta
import Carrousel from '../components/carrousel';
import Categoryfooter from '../components/categoryfooter';
import Miniproductcard from '../components/miniproductcard';
import Rightmediumproductcard from '../components/rightmediumproductcard';
import ProductList from '../components/ProductList';
import useApi from '../context/useApi'; // Asegúrate de que esta ruta sea correcta

function HomePage() {
    const { user } = useAuth(); 
    const { products, categories, loading, error } = useApi(); // Usa el hook useApi

    if (loading) {
        return <div>Cargando productos...</div>; // Mensaje de carga
    }

    if (error) {
        console.error("Error en la carga de productos:", error); // Muestra el error en la consola
        return <div>Error: {error}</div>; // Mensaje de error
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

            {user && ( // Renderiza solo si el usuario está autenticado
                <div className='R2 flex mb-0 '>
                    <Rightmediumproductcard />
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