import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export default function useFetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        //podemos devolver funcion para refrescar pagina
        try {
            const { data } = await axiosInstance('/users');
            setUsers(data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        };
    };

    return {
        users,
        loading,
        error,
        fetchUsers
    };
}
