import React from 'react';
import PropTypes from 'prop-types'; 
import { useCart } from '../context/CartContext';

const ProductcardOnCart = ({ item }) => {
  if (!item) {
    return null; 
  }

  const product = item[0]; // El primer elemento es el objeto del producto
  const quantity = item[1]; // El segundo elemento es la cantidad
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(10, parseInt(e.target.value))); 
    updateQuantity(product.productId, value); 
  };

  return (
    <div className="w-30 bg-white border border-gray-200 rounded-lg dark:bg-rose-300 m-5 border-b-4 border-b-rojoapagado shadow-lg p-5">
      <div className="px-5 pb-5 flex items-center justify-between">
        <img className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
        <div>
          <h5 className="pr-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          <button onClick={() => removeFromCart(product.productId)} className="text-red-500">Eliminar</button>
        </div>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${(product.price).toFixed(2)}</span>
        <input 
          type="number" 
          value={quantity} 
          onChange={handleQuantityChange} 
          min="1" 
          max="10" 
          className="border rounded px-2 py-1 w-16" 
        />
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${(product.price * quantity).toFixed(2)}</span>
      </div>
      {/* Si ya no necesitas mostrar el email y la fecha, puedes eliminar esta sección */}
      {/* <div className="text-sm text-gray-500">
        <p>Email del usuario: {userEmail}</p>
        <p>Fecha añadida: {dateAdded}</p>
      </div> */}
    </div>
  );
}

ProductcardOnCart.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        categoryID: PropTypes.string.isRequired,
      }).isRequired,
      PropTypes.number.isRequired,
    ])
  ).isRequired,
};

export default ProductcardOnCart;