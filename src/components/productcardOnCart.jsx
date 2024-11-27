import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';

const ProductcardOnCart = ({ item }) => {
    if (!item) {
        return null;
    }

    const product = item[0];
    const quantity = item[1];
    const { removeFromCart, updateQuantity } = useCart();

    const handleIncrement = () => {
        if (quantity < 10) {
            updateQuantity(product.productId, quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            updateQuantity(product.productId, quantity - 1);
        }
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
                <div className="flex items-center">
                    <button onClick={handleDecrement} className="border rounded px-2 py-1 w-8">-</button>
                    <span className="mx-2 text-xl font-bold">{quantity}</span>
                    <button onClick={handleIncrement} className="border rounded px-2 py-1 w-8">+</button>
                </div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${(product.price * quantity).toFixed(2)}</span>
            </div>
        </div>
    );
};

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