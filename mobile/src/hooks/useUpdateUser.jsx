import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export default function useUpdateUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Recibe el id que va a modificar el admin con la nueva informacion
     * @param {Number} userId 
     * @param {Object} userData
     */
    const updateUser = async (userId, userData) => {
        try {
            setLoading(true);
            const { data } = await axiosInstance.patch(`/users/${userId}`, userData);
            return data
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        };
    };

    return {
        updateUser,
        loading,
        error
    };
};
