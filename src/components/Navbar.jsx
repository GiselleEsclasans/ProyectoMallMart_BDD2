import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; // Importing shopping cart and user icons from react-icons
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    
    <div className='bg-azulmorado flex justify-between items-center p-4'>
      {/* Navbar */}
      <div className='logo'>
        <Link onClick={() => {scroll(0, 0)}} to="/">
        <img src="/Logonaranja.png" alt="Logo" className='h-8' />
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='user flex items-center mr-4'> 
          {/* Foto del usuario */}
          <Link onClick={() => {scroll(0, 0)}} to="/perfil">
          <FaUser  className='text-white text-xl mr-2' />
          </Link>
          {/* Foto carrito */}
          <Link onClick={() => {scroll(0, 0)}} to="/carrito">
          <FaShoppingCart className='text-white text-2xl' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;