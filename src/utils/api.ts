import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_BASE_PATH}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Interceptor para agregar token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ⚠️ Interceptor de respuestas (opcional pero MUY recomendado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Ejemplo: manejar 401 global
      if (error.response.status === 401) {
        console.error("No autorizado - token inválido o expirado");
        localStorage.removeItem("token");
        // aquí podrías redirigir a login
      }

      if (error.response.status === 500) {
        console.error("Error interno del servidor");
      }
    }

    return Promise.reject(error);
  }
);

export default api;