"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {auth} from "@/utils/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

export default function withAuth (Component:any){
    return function protectedRoute (props:any) {
        const [loading, setLoading] = useState(true)
        const [authenticate, setAutenticate] = useState(false)
        const router = useRouter();

        useEffect(() => {
            const unSuscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    router.push("/login")
                } else {
                    setAutenticate(true)
                }
                setLoading(false)
            })
            return () => unSuscribe()
        }, []);

        if (loading) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            );

        }
        return authenticate ? <Component {...props} /> : null;
    }
}