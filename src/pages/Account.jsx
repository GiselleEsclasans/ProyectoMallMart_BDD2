import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; 
import { Link } from 'react-router-dom';

function Account() {
    const { user, profileData, fetchProfileData, logout } = useAuth();
    

    useEffect(() => {
        const getEmailFromLocalStorage = () => {
            const storedUser  = localStorage.getItem('email');
            
        
            return storedUser; 
        };

        const email = getEmailFromLocalStorage();
        if (email) {
           
            fetchProfileData(email); 
        }
    }, [fetchProfileData]);

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
                        <p className="text-5xl text-black font-semibold">{profileData?.firstName || user?.firstName || 'Usuario'}</p>
                        <p className="text-3xl text-black font-semibold">{profileData?.lastName || user?.lastName || ''}</p>
                        <p className="text-lg text-black">{profileData?.email || user?.email || ''}</p>
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