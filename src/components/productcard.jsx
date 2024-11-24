import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Productcard = ({ product }) => {
    const totalStars = 5; // Total de estrellas
    const filledStars = Math.round(product.rating); 

    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(product); 
    };


    return (
        <div className="product flex flex-col md:flex-row justify-center items-center">
            <div className="image-container md:w-1/2 mb-4 md:mb-0 flex justify-center">
                {/* Imagen del producto */}
                <img
                    src={product.image} 
                    alt={product.name} 
                    className="rounded-lg border-2 border-gray-300"
                />
            </div>
            <div className="info md:w-1/2 m-2.5">
                <div className="l1 flex justify-between mb-6">
                    {/* Nombre del producto */}
                    <h1 className="text-2xl font-semibold">{product.name}</h1> {/* Usar el nombre del producto */}
                    <p className="value font-bold text-beige-granier">${product.price.toFixed(2)}</p> 
                </div>
                {/* Estrellas de calificación */}
                <div className="flex items-center mt-2.5 mb-2">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {/* Renderizar estrellas de calificación */}
                        {Array.from({ length: totalStars }, (_, index) => (
                            <svg key={index} className={`w-4 h-4 ${index < filledStars ? 'text-rojoapagado' : 'text-gray-300'} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-rojoapagado dark:text-white ms-3">{product.rating}</span>
                    </div>
                </div>
                <div className="l2 flex justify-between mb-6">
                    <div>
                        {/* Estado (puedes personalizarlo si lo deseas) */}
                        <p className="font-bold mr-4">Estado: Disponible</p>
                    </div>
                    <div>
                        {/* Cantidad del producto */}
                        <p className="font-bold">
                            Cantidad:
                            <input
                                type="number"
                                defaultValue="1" 
                                min="1"
                                max="10"
                            />
                        </p>
                    </div>
                </div>
                <div className="details">
                    {/* Descripción del producto */}
                    <p className="label font-bold">Descripción:</p> <p className="description border-2 pb-20 rounded-lg">
                        {product.description} {/* Usar la descripción del producto */}
                    </p>
                    <div className="justify-center flex mt-20 mb-20">
                        {/* Botón de Agregar al carrito */}
                        <Link onClick={() => {scroll(0, 0)}} to={`/carrito`}>
                        <button
                            onClick={handleAddToCart}
                            className="border-2 rounded-lg p-0.5 pl-12 pr-12 text-naranjaunimet transition duration-300 border-naranjaunimet hover:text-moradooscuro hover:bg-naranjaunimet"
                        >
                            + Agregar al carrito
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productcard;