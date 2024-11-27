import React from 'react';
import { useCart } from '../context/CartContext'; 
import ProductcardOnCart from '../components/ProductcardOnCart';

function Cart() {
    const { cart, purchase } = useCart();


    const totalCost = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);


    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='Cart'>
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Tu Carrito de Productos</span>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.product.productId} className="mb-4">
                            <ProductcardOnCart item={item} />
                        </div>
                    ))}
                    <div className="flex justify-between items-center p-5">
                        <span className="text-2xl font-bold text-gray-900 dark:text-black">Sub total: ${totalCost.toFixed(2)}</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-black">Cantidad total: {totalQuantity}</span>
                        <button 
                            onClick={purchase} 
                            className="bg-rojoencendido text-white px-4 py-2 rounded"
                        >
                            Comprar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;