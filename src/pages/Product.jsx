import { useParams } from 'react-router-dom';
import React from 'react';
import Categoryfooter from '../components/categoryfooter';
import Miniproductcard from '../components/miniproductcard';
import Productcard from '../components/productcard';


const products = [
    {
        "image": "url_de_la_imagen.jpg",
        "productId": "0",
        "price": 79.99,
        "name": "Lift Mouse Logitech ",
        "rating": 4.5,
        "description": "Descripción del Producto"
    },
    {
        "image": "https://example.com/smartphone.jpg",
        "productId": "product_1",
        "price": 299.99,
        "name": "Smartphone",
        "rating": 4.5,
        "description": "A modern smartphone with OLED display"
    },
    {
        "image": "https://example.com/yogamat.jpg",
        "productId": "product_2",
        "price": 25,
        "name": "Yoga Mat",
        "rating": 4.2,
        "description": "Comfortable yoga mat for home workouts"
    },
    {
        "image": "https://example.com/blender.jpg",
        "productId": "product_3",
        "price": 75,
        "name": "Blender",
        "rating": 4.6,
        "description": "High-speed blender for smoothies and shakes"
    }
];

const categories = [
    "Tecnología",
    "Electronics",
    "Sports",
    "Home"
];


function Product() {
    const { productId } = useParams(); 

   
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
            <Categoryfooter categories={categories}/>
        </div>
    );
}

export default Product;