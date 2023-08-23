import axios from "axios";
import { getToken } from "./authStorage";
const publicRoutes = ["/login"];

//configuracion global de axios, para no setear todas las peticiones con cookies
export const axiosInstance = axios.create({
  baseURL: `${process.env.URL_BASE};3001`,
  timeout: 20000, // Define un tiempo de espera en milisegundos
  headers: {
    "Content-Type": "application/json",
  },
});

// Verifica cuando se utiliza token y cuando no
axiosInstance.interceptors.request.use(
  async (config) => {
    // Verificar si la ruta es pública o no
    if (!publicRoutes.includes(config.url)) {
      // Aquí puedes obtener el token de tu almacenamiento
      const token = await getToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);