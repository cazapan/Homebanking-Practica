import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem(usuario)) || null
    );

    const login = (datos) => {
        setUsuario(datos);
        localStorage.setItem('usuario', JSON.stringify(datos));
    };

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem('usuario');
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}