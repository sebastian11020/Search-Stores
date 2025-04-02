import api from "@/utils/api";

export const getStores = async (token:string)=>{
    try {
        const response = await api.get("http://localhost:8080/Store/All",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        console.error("Error fetching parameters:", error);
        throw error.response?.data?.message || "Error al obtener parámetros";
    }
};
