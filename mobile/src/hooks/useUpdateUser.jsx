import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import inputsFormatted from "../utils/inputsformatted";

export default function useUpdateUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Recibe el id que va a modificar el admin con la nueva informacion
     * @param {Number} userId 
     * @param {Object} inputsData
     */
    const updateUser = async (userId, inputsData) => {
        try {
            setLoading(true);
            const userData = inputsFormatted(inputsData);
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
