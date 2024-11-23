import React from 'react';
import { Link } from 'react-router-dom';

const Registercard = () => {
  return (
    <div className="flex h-screen">
            {/* Lado izquierdo */}
            {/* bg-gradient-to-b from-violetaoscuro to-rojoencendido es una forma de hacer backgrounds gradientes*/}
            {/* bg-gradient-to-b la letra del final es la direccion de los colores y los otros "To" son los colores*/}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gradient-to-b from-violetaoscuro to-rojoencendido">
                <h1 className="text-6xl mb-4 text-white font-bold text-center">¿Ya tienes una cuenta?</h1>
                <p className="text-lg text-gray-300 text-center mt-4 mb-20">Inicia sesión para usar todas las características de la página</p>
                {/* Botón para ir a iniciar sesión*/}
                <Link onClick={() => {scroll(0, 0)}} to="/iniciarSesion">
                <button className="w-52 mt-8 border-4 text-white border-white py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:text-violetaclaro">Iniciar sesión</button>
                </Link>
            </div>

            {/* Lado derecho */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                <h1 className="text-4xl font-bold text-center">Registrarse</h1>
                <form className="space-y-4 w-full max-w-xs">
                    <div>
                        {/* Campo del email */}
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="mt-20 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Correo Electrónico" 
                        />
                    </div>
                    <div >
                        {/* Campo de la constraseña*/}
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="mt-1 mb-12 block w-full border rounded-full bg-gray-100 border-gray-300 p-2 focus:ring-violetaclaro focus:border-violetaclaro" 
                            placeholder="Contraseña" 
                        />
                    </div>
                    {/* Botón de submit*/}
                    <button type="submit" className=" w-full bg-naranjaunimet text-white py-2 rounded-lg transition duration-300 hover:text-violetaclaro hover:bg-white">Registrarse</button>
                </form>
            </div>
        </div>
  );
}

export default Registercard;