import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.png';
import Productformat2 from '../components/Productformat2';

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

function Products() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar productos basado en el término de búsqueda
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='Products'>
            <div className='Busqueda bg-moradooscuro p-5'>
                <form className="max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex">            
                        <div className="relative w-full">
                            <input 
                                type="search" 
                                id="search-dropdown" 
                                className="block p-2.5 w-full z-20 text-sm text-morarosa bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-moradoclaro  dark:border-moradoclaro dark:placeholder-gray-400 dark:text-moradooscuro dark:focus:border-morarosa" 
                                placeholder="Buscar..." 
                                required 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado al escribir
                            />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-morarosa rounded-e-lg border border-morarosa hover:bg-morarosa focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-morarosa dark:hover:bg-moradoclaro dark:focus:ring-moradoclaro">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 m-5">
                <li className="me-2">
                    <a href="#" className="inline-block px-4 py-3 text-white bg-moradooscuro rounded-lg active" aria-current="page">Categoría 1</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white"> Categoría 2</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white">Categoría 3</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white">Categoría 4</a>
                </li>
            </ul>

            <div className='Products_'>
                {filteredProducts.map(product => (
                    <Productformat2 key={product.productId} product={product} />
                ))}
            </div>

            <div className='Category bg-naranjaunimet p-5'>
                <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
                <div className='flex flex-nowrap justify-between'>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                </div>
            </div>
        </div>
    );
}

export default Products;