import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export default function useFindUser(id) {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        findUser(+id);
    }, [id]);

    /**
     * Busca un usuario segun el id del parametro
     * @param {Number} id 
     */
    async function findUser(id) {
        //podemos devolver funcion para refrescar pagina
        try {
            const { data } = await axiosInstance(`/profile/${id}`);
            setUser(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        user,
        loading,
        error
    };
}
