import Productcard from '../components/productcard';


function Cart() {
    

    return (
        <div className='Cart'>
            <span className=" text-3xl font-bold text-gray-900 dark:text-moradooscuro p-5">Tu Carrito de Productos</span>
            
        
            <Productcard />
          
        </div>
    );
}

export default Cart;