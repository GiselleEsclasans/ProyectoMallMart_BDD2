import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Link } from 'react-router-dom';

const Miniproductcard = ({ product }) => {
  // Verifica si product está definido
  if (!product) {
    return null; // O puedes mostrar un mensaje de error
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-morarosa m-5 border-b-4 border-b-moradooscuro shadow-lg">
      {/* Card pequeña de productos */}
      <Link onClick={() => {scroll(0, 0)}} to={`/productos/producto/${product.productId}`}>
        {/* Foto del producto */}
        <img className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
        <div className="px-5 pb-5">
          <div className="flex items-center mt-2.5 mb-5">
            <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* Renderizar estrellas de calificación */}
              {Array.from({ length: 5 }, (_, index) => (
                <svg key={index} className="w-4 h-4 text-moradooscuro drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-moradooscuro dark:text-white ms-3">{product.rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Precio del producto */}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <Link onClick={() => {scroll(0, 0)}} to="/carrito">
              {/* Botón de agregar al carrito */}
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-moradooscuro dark:hover:bg-moradoclaro dark:focus:bg-moradoclaro">Agregar al carrito</button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Define la validación de props
Miniproductcard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Miniproductcard;