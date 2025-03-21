"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Input from "@/components/ui/input";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {login} from "@/services/auth";


export default function loginPage(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const router = useRouter()


    const handleLogin = async (e:React.FormEvent) =>{
        e.preventDefault();
        setError("");
        try{
            const data = await login(email,password);
            localStorage.setItem("token",data.token)
            router.push("/dashboard")
        }catch (err:any){
            setError(err);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        if(name==='email'){
            setEmail(e.target.value)
        }
        if(name==='password'){
            setPassword(e.target.value)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <form onSubmit={handleLogin} action="#" className="mt-8 grid grid-cols-6 gap-6">
                <Input label={"Email"} placeholder={"Email"} name={"email"} require={true}  type={"email"} value={email} onChange={handleChange}/>
                <Input label={"Contraseña"} placeholder={"Contraseña"} type={"password"} require={true} name={"password"} value={password} onChange={handleChange}/>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                    >
                        Iniciar sesión
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        ¿No tienes una cuenta?
                        <Link href="/register" className="text-blue-500"> Registrate</Link>.
                    </p>
                </div>
            </form>
        </motion.div>
    );
}