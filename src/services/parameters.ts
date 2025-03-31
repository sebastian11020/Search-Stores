import api from "@/utils/api";

export const getParameters = async () => {
    try {
        const response = await api.get("http://localhost:8080/Store/Parameters");
        return response.data; // Retornamos el objeto completo
    } catch (error: any) {
        console.error("Error fetching parameters:", error);
        throw error.response?.data?.message || "Error al obtener parámetros";
    }
};

