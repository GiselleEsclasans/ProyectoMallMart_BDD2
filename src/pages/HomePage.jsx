
import Carrousel from '../components/carrousel';
import Categoryfooter from '../components/categoryfooter';
import React from 'react';
import logo from '../img/foto.png';
import { Link } from 'react-router-dom';
import Miniproductcard from '../components/miniproductcard';
import Mediumproductcard from '../components/mediumproductcard';
import Rightmediumproductcard from '../components/rightmediumproductcard';
import ProductList from '../components/ProductList';

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

function HomePage() {


    return (
        <div className='HomePage'>
           
           
           
            <Carrousel />
            
            
            <div className='R1 p-5'>
                <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Recomendación General 1</span>
                <div className="flex flex-wrap">
                    
                   
                    {products.slice(0, 5).map(product => (
                        <Miniproductcard key={product.productId} product={product} />
                    ))}
                    
                    
                </div>
                

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
            <Categoryfooter />
        </div>
    );
}

export default HomePage;