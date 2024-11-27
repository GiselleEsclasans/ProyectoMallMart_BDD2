import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Logincard = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); 

        try {
            await login(email, password); 
            
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Lado izquierdo */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                <h1 className="text-4xl font-bold text-center">Iniciar sesión</h1>
                {error && <p className="text-red-500">{error}</p>} {/* Muestra el error */}
                <form className="space-y-4 w-full max-w-xs" onSubmit={handleSubmit}>
                    <div>
                        {/* Campo del email */}
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
                            className="mt-20 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Correo Electrónico" 
                        />
                    </div>
                    <div>
                        {/* Campo de la contraseña */}
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 mb-12 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Contraseña" 
                        />
                    </div>
                    {/* Botón de submit */}
                    
                    <button type="submit" className="w-full bg-naranjaunimet text-white py-2 rounded-lg transition duration-300 hover:text-violetaclaro hover:bg-white">Iniciar sesión</button>
                    
                </form>
            </div>
            {/* Lado derecho */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gradient-to-b from-violetaoscuro to-rojoencendido">
                <h1 className="text-6xl mb-4 text-white font-bold text-center">¿No te has registrado?</h1>
                <p className="text-lg text-gray-300 text-center mt-4 mb-20">Regístrate con tus datos personales para usar todas las características de la página</p>
                {/* Botón para ir a la página de registro */}
                <Link onClick={() => {scroll(0, 0)}} to="/acceder">
                    <button className="w-52 mt-8 border-4 text-white border-white py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:text-violetaclaro">Registrarme</button>
                </Link>
            </div>
        </div>
    );
}

export default Logincard;