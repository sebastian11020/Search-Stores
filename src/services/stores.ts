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
export const saveStore = async (data: any, token: string) => {
    console.log(data)
    try {
        return await api.post("http://localhost:8080/Store/Create", JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });
    } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
    }
};

export const getProductsByStore = async (storeId: number,token:string) => {
    try {
        const response = await api.get(`http://localhost:8080/Store/ProductsStore/${storeId}`,
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
