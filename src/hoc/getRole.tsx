import {getAuth} from "firebase/auth";

export const getRole = async () => {
    const auth = getAuth();
    if (!auth.currentUser) return null;

    try {
        const idTokenResult = await auth.currentUser.getIdTokenResult();
        return idTokenResult.claims.role;
    } catch (error) {
        console.error("Error obteniendo rol:", error);
        return "invitado";
    }
};
