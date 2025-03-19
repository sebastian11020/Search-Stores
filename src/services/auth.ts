import api from "@/utils/api";
import {AuthData} from "@/lib/authTypes";

export const login = async (email:string,password:string) =>{
    try {
        const {data} = await api.post("/auth/login",{email,password})
        return data
    }catch (error:any){
        throw error.response?.data?.message || "Error al iniciar sesión";
    }
};

export const register = async (userData:AuthData) =>{
    try {
        const {data} = await api.post("/auth/register",userData);
        return data;
    }catch (error:any){
        throw error.response?.data?.message || "Error en el registro";
    }
};



