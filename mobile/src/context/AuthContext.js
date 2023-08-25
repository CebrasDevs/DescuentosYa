import { createContext, useContext, useEffect, useState } from "react";
import { clearToken, getToken, storeToken } from "../utils/authStorage";
import { axiosInstance } from "../utils/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    /**
     * Cuendo vuelve a entrar a la app mobile verificamos si estaba logueado
     */
    useEffect(() => {
        getProfile().then(setLoading(false));
    }, [isAuthenticated])

    /**
     * obtenemos los datos del usuario logueado
     * @return Object user
     */
    async function getProfile() {
        try {
            setLoading(true);
            const token = await getToken();
            if (token) {
                const { data } = await axiosInstance("/profile");
                data && setIsAuthenticated(true);
                return data;
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    /**
     * Se espera un objeto con propiedades email y password
     * @param {Object} userData 
     * @return boolean
     */
    async function login(userData) {
        try {
            setLoading(true);
            const { data } = await axiosInstance.post('/login', userData);
            //este console.log queda de ejemplo para ver en la terminar de vsc
            console.log(JSON.stringify(data, " ", 2));
            const token = data.token;
            if (token) {
                await storeToken(token);
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        };
    };

    /**
     * eliminamos el token generado del almacenamiento global(no estado global)
     */
    async function logout() {
        await clearToken()
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, getProfile, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
