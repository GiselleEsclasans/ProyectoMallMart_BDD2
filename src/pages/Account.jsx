import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; 
import { Link } from 'react-router-dom';

function Account() {
    const { user, profileData, fetchProfileData, logout } = useAuth();
    const storedUser  = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');
    const storedAddress = localStorage.getItem('address');

    

    const handleLogout = () => {
        logout(); 
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-violetaoscuro to-rojoencendido flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-20 w-full max-w-6xl relative"> 
                <h2 className="text-center text-5xl font-bold mb-28">Perfil del Usuario</h2> 
                <div className="flex items-center justify-center mb-10">
                    <div className='flex flex-col items-center '>
                        {/* Aquí puedes agregar una imagen de perfil si la tienes */}
                    </div>
                    <div className="ml-10">
                        <p className="text-3xl text-black font-semibold">{storedName}</p>
                        <p className="text-3xl text-black font-semibold">Correo: {storedUser}</p>
                        <p className="text-3xl text-black font-semibold"> {storedAddress}</p>
                        
                    </div>
                </div>
                <Link onClick={() => {scroll(0, 0)}} to="/">
                    <button 
                        onClick={handleLogout} 
                        className="absolute bottom-2 right-2 bg-naranjaunimet shadow -2xl border-white text-white px-1 py-1 rounded transition duration-300 hover:text-white hover:bg-moradoclaro"
                    >
                        Cerrar Sesión
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Account;