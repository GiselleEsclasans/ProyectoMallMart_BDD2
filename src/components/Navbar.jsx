// Navbar.jsx
import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
  const { user } = useAuth(); 

  return (
    <div className='bg-azulmorado flex justify-between items-center p-4'>
      <div className='logo'>
        <Link onClick={() => { scroll(0, 0) }} to="/">
          <img src="/Logonaranja.png" alt="Logo" className='h-8' />
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='user flex items-center mr-4'>
          {user ? (
            <>
              <Link onClick={() => { scroll(0, 0) }} to="/perfil">
                <FaUser  className='text-white text-xl mr-2' />
              </Link>
              <Link onClick={() => { scroll(0, 0) }} to="/carrito">
                <FaShoppingCart className='text-white text-2xl' />
              </Link>
            </>
          ) : (
            <Link onClick={() => { scroll(0, 0) }} to="/iniciarSesion">
              <button className='text-white'>Iniciar Sesión</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;