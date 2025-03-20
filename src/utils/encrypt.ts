import CryptoJS from "crypto-js";
import {SECRET_KEY} from "../../constants";

export const encryptPassword = (password: string) =>{
    return CryptoJS.AES.encrypt(password,SECRET_KEY).toString();
}


