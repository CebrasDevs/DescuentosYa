import React ,{ useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useFocusEffect } from "@react-navigation/native";

/**
 * Este hooks se encarga de buscar a todos los usuarios
 */
export default function useFetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchUsers() {
        try {
            const { data } = await axiosInstance('/users');
            setUsers(data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        };
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchUsers();
        }, [])
    );

    return {
        users,
        loading,
        error
    };
}
