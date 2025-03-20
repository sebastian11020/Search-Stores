import api from "@/utils/api";
import {AuthData} from "@/lib/authTypes";
import {encryptPassword} from "@/utils/encrypt";

export const login = async (email:string,password:string) =>{
    try {
        const encryptedPassword = encryptPassword(password);
        const {data} = await api.post("/auth/login",{email,encryptedPassword})
        return data
    }catch (error:any){
        throw error.response?.data?.message || "Error al iniciar sesión";
    }
};

export const register = async (userData:AuthData) =>{
    try {
        const {password,...rest} = userData;
        const encryptedPassword = encryptPassword(password);
        const encryptedUserData ={...rest,password:encryptedPassword};
        const {data} = await api.post("/auth/register",encryptedUserData);
        return data;
    }catch (error:any){
        throw error.response?.data?.message || "Error en el registro";
    }
};



