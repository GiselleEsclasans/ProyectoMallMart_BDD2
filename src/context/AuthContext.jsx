import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
      
        const storedUser  = localStorage.getItem('user');
        if (storedUser ) {
            setUser (JSON.parse(storedUser ));
        }
    }, []);

    const fetchProfileData = async (email) => {
        if (email) {
            try {
                const response = await fetch(`https://backend-mallmart-bd2-production.up.railway.app/api/users/profile/${email}`);
                if (!response.ok) {
                    throw new Error('Error al cargar los datos del perfil');
                }
                const data = await response.json();
                console.log('Datos del perfil:', data);
                setProfileData(data);
            } catch (error) {
                console.error('Error al cargar los datos del perfil:', error);
            }
        }
    };
    
   
  

    const register = async ({ firstName, lastName, email, password, address }) => {
        try {
            const response = await fetch('https://backend-mallmart-bd2-production.up.railway.app/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: email, firstName, lastName, password, address }), 
            });
    
            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.message || 'Error al registrar el usuario');
            }
    
            const newUser  = await response.json(); 
            setUser (newUser );
            localStorage.setItem('user', email); 
            
        } catch (error) {
            console.error('Error en el registro:', error);
            throw error; 
        }
    };

    const login = async (email, password) => {
        try {
            const response = await fetch('https://backend-mallmart-bd2-production.up.railway.app/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: email, password }), 
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.message || 'Error al iniciar sesión');
            }

            const loggedInUser  = await response.json(); 
            setUser (loggedInUser );
            localStorage.setItem('user', email); 
           
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            throw error; 
        }
    };

    const logout = () => {
        setUser (null);
        setProfileData(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, profileData, fetchProfileData, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};