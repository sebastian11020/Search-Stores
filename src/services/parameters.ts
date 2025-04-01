import api from "@/utils/api";

export const getParameters = async () => {
    try {
        const response = await api.get("http://localhost:8080/Store/Parameters")
        return response.data;
    } catch (error: any) {
        console.error("Error fetching parameters:", error);
        throw error.response?.data?.message || "Error al obtener parámetros";
    }
};

export const saveParameters = async (data: any, token: string) => {
    try {
        return await api.post("http://localhost:8080/Store/Parameters", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            withCredentials: true
        });
    } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
    }
};

