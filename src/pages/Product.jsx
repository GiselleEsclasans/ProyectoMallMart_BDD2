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

    return (
        <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Producto</span>
            <Productcard product={product} /> {}
            <div></div>
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Recomendación Según la compra</span>
            <div className="flex flex-wrap">
                {products.slice(0, 5).map(p => (
                    <Miniproductcard key={p.productId} product={p} />
                ))}
            </div>
            <div className="product flex flex-col md:flex-row justify-center items-center">
                {}
            </div>
            <Categoryfooter categories={categories} />
        </div>
    );
}

export default Product;