import React from 'react';
import { useCart } from '../context/CartContext'; 
import ProductcardOnCart from '../components/productcardOnCart';

function Cart() {
    const { cart, purchase } = useCart();

    // Asegúrate de que el carrito no esté vacío y que cada item tenga la estructura correcta
    const totalCost = cart.reduce((total, item) => {
        const product = item[0]; // El primer elemento es el objeto del producto
        const quantity = item[1]; // El segundo elemento es la cantidad
        if (product && product.price) {
            return total + (product.price * quantity);
        }
        return total; // Si no hay precio, no lo sumes
    }, 0);

    const totalQuantity = cart.reduce((total, item) => {
        const quantity = item[1]; // El segundo elemento es la cantidad
        if (quantity) {
            return total + quantity;
        }
        return total; // Si no hay cantidad, no la sumes
    }, 0);

    return (
        <div className='Cart min-h-screen flex flex-col'>
            <span className="text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Tu Carrito de Productos</span>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item[0].productId} className="mb-4">
                            <ProductcardOnCart item={item} /> {/* Pasar el item completo */}
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