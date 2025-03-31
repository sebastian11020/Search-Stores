import api from "@/utils/api";
import {AuthData} from "@/lib/authTypes";
import {encryptPassword} from "@/utils/encrypt";
import {auth} from "@/utils/firebaseconfig";
import { signOut } from "firebase/auth";
import {signInWithEmailAndPassword} from "@firebase/auth";

export const login = async (email:string,password:string) =>{
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken(); // Obtener el JWT de Firebase
        localStorage.setItem("token", token);
    } catch (error:any) {
        throw error.response?.data?.message || "Error en el login";
    }
};

export const register = async (userData:AuthData) =>{
    try {
        const {password,...rest} = userData;
        const encryptedPassword = encryptPassword(password);
        const encryptedUserData ={...rest,password:encryptedPassword};
        const {data} = await api.post("/Person/Register",encryptedUserData);
        return data;
    }catch (error:any){
        throw error.response?.data?.message || "Error en el registro";
    }
};

export const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token")
}



