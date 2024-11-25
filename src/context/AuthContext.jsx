import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const register = async ({ email, password }) => {

        const newUser  = { email }; 
        setUser (newUser ); 
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