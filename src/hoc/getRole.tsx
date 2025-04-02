import { getAuth } from "firebase/auth";

export const getRole = async (): Promise<string | null> => {
    const auth = getAuth();
    if (!auth.currentUser) return null;

    try {
        const idTokenResult = await auth.currentUser.getIdTokenResult();
        return idTokenResult.claims.role as string || "invitado"; // Asegura que es string
    } catch (error) {
        console.error("Error obteniendo rol:", error);
        return "invitado"; // Retorna un string válido
    }
};
