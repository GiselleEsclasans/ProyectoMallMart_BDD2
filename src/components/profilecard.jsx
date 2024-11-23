import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
const Profilecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violetaoscuro to-rojoencendido flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-20 w-full max-w-6xl relative"> 
                {/* Botón de regresar */}
                
                <h2 className="text-center text-5xl font-bold mb-28">Perfil del Administrador</h2> 
                <div className="flex items-center justify-center mb-10">
                    {/* Nombre del usuario*/}
                    <p className="mr-40 text-5xl font-semibold">Messi</p>
                    <div className='flex flex-col items-center '>
                        {/* Foto del usuario */}
                    <img
                        src="https://via.placeholder.com/200" 
                        alt="Profile"
                        className="rounded-full border-2 border-gray-300"
                    /> 
                    <h1 className="mt-8 text-2xl font-semibold" >Foto de Perfil</h1>
                    </div>
                </div>
                {/* Botón de cerrar sesión*/}
                <button className="absolute bottom-2 right-2  bg-naranjaunimet shadow-2xl border-white border- text-white px-1 py-1 rounded transition duration-300 hover:text-white hover:bg-moradoclaro">
                    Cerrar Sesión
                </button>
            </div>
        </div>
  );
}

export default Profilecard;