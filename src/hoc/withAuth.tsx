"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import {getRole} from "@/hoc/getRole"

export default function withAuth(Component: any, allowedRoles: string[]) {
    return function ProtectedRoute(props: any) {
        const [loading, setLoading] = useState(true);
        const [userRole, setUserRole] = useState<string | null>(null);
        const router = useRouter();

        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, async (user) => {
                if (!user) {
                    router.push("/login");
                    return;
                }

                const role = await getRole();
                setUserRole(role ?? "invitado");

                if (!allowedRoles.includes(role ?? "invitado")) {
                    router.push("/login");
                }

                setLoading(false);
            });

            return () => unSubscribe();
        }, []);

        if (loading) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            );
        }

        return userRole && allowedRoles.includes(userRole) ? <Component {...props} /> : null;
    };
}
