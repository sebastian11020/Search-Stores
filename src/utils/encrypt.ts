import CryptoJS from "crypto-js";
import {SECRET_KEY} from "../../constants";

export const encryptPassword = (password:string) => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse("1234567890123456"), // Asegúrate de usar un IV fijo o dinámico
    }).toString();
};



