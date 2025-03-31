import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBst4-qdB5kxYDrP9uaX3uqYUFXmW3oPfA",
    authDomain: "smart-logistic-65e98.firebaseapp.com",
    projectId: "smart-logistic-65e98",
    storageBucket: "smart-logistic-65e98.firebasestorage.app",
    messagingSenderId: "93759371030",
    appId: "1:93759371030:web:4236af907b2cdf29914237"
};


// Inicializa Firebase solo si no está inicializado
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
