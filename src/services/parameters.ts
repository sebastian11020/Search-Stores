import api from "@/utils/api";

export const getParameters = async (token:string) => {
    try {
        const response = await api.get("http://localhost:8080/Store/Parameters",{
            headers: {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
            }
        })
        return response.data; // Retornamos el objeto completo
    } catch (error: any) {
        console.error("Error fetching parameters:", error);
        throw error.response?.data?.message || "Error al obtener parámetros";
    }
};

export const saveParameters = async (data: any, token: string) => {
    try {
        const response = await api.post("http://localhost:8080/Store/Parameters", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
    }
};

