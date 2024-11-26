import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

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
        } catch (error) {
            console.error('Error en el registro:', error);
            throw error; 
        }
    };


    const logout = () => {
        setUser (null);
    };

    return (
        <AuthContext.Provider value={{ user, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};