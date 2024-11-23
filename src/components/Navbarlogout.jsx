import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-azulmorado shadow-md">
      <div className='logo'>
      <Link onClick={() => {scroll(0, 0)}} to="/">
      <img src="/Logoblanco.png" alt="Logo" className='h-8' />
      </Link>
      </div>
      <div className="flex space-x-4">
        <Link onClick={() => {scroll(0, 0)}} to="/acceder">
        <button className="bg-naranjaclaro text-white px-4 py-2 rounded hover:bg-morarosa">
          Regístrate
        </button>
        </Link>
        <Link onClick={() => {scroll(0, 0)}} to="/iniciarSesion">
        <button className="bg-naranjaunimet text-white px-4 py-2 rounded hover:bg-morarosa">
          Inicia Sesión
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;