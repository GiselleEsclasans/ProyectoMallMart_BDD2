import React from 'react';
import { useParams } from 'react-router-dom';
import Categoryfooter from '../components/categoryfooter';
import Miniproductcard from '../components/miniproductcard';
import Productcard from '../components/productcard';
import useApi from '../context/useApi';

function Product() {
    const { productId } = useParams(); 
    const { products, categories, loading, error } = useApi();

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const product = products.find(p => p.productId === productId);

    if (!product) {
        console.log("productId:", productId);
        return <div>Producto no encontrado: {productId}</div>; 
    }

    // Filtrar productos de la misma categoría
    const relatedProducts = products.filter(p => p.categoryID === product.categoryID && p.productId !== productId);

    return (
        <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Producto</span>
            <Productcard product={product} />
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Otros Productos</span>
            <div className="flex flex-wrap">
                {relatedProducts.slice(0, 5).map(p => (
                    <Miniproductcard key={p.productId} product={p} />
                ))}
            </div>
            <Categoryfooter categories={categories} />
        </div>
    );
}

export default Product;