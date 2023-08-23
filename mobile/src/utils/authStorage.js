import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.error("Error al almacenar el token:", error);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        return token;
    } catch {
        return null;
    }
};

export const clearToken = async () => {
    try {
        await AsyncStorage.removeItem("token");
    } catch (error) {
        console.error("Error al borrar el token:", error);
    }
};
