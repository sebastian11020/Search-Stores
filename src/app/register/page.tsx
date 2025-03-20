"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {AuthData} from "@/lib/authTypes";
import {register} from "@/services/auth";

export default function RegisterPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState<AuthData>({
        typeDocument:"",
        numberDocument:0,
        name:"",
        lastName:"",
        phone:0,
        email:"",
        password:""
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        if (name === "password") {
            setPassword(value);
        }
     };
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setError(e.target.value !== password ? "Las contraseñas no coinciden" : "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            console.log("Registro exitoso:", response);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} action="#" className="mt-8 grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                        Tipo de Documento
                    </label>
                    <select
                        id="documentType"
                        name="typeDocument"
                        onChange={handleChange}
                        required
                        className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    >
                        <option value="">Selecciona...</option>
                        <option value="cc">Cédula de Ciudadanía</option>
                        <option value="ce">Cédula de Extranjería</option>
                        <option value="passport">Pasaporte</option>
                    </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
                        Número de Documento
                    </label>
                    <input
                        type="text"
                        id="documentNumber"
                        name="numberDocument"
                        onChange={handleChange}
                        required
                        className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="FirstName"
                        name="name"
                        onChange={handleChange}
                        required
                        className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                {/* Apellido */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="LastName"
                        name="lastName"
                        onChange={handleChange}
                        required
                        className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="Email"
                        name="email"
                        onChange={handleChange}
                        required
                        className="border mt-1 h-8 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        id="phone"
                        required
                        name="phone"
                        onChange={handleChange}
                        className="border mt-1 h-8 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="Password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChange}
                        className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                        Confirmar contraseña
                    </label>
                    <input
                        type="password"
                        id="PasswordConfirmation"
                        name="password_confirmation"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={`border h-8 mt-1 w-full rounded-md text-sm text-gray-700 shadow-xs ${
                            error ? "border-red-500" : "border-gray-500"
                        }`}
                    />
                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>

                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                        Al crear una cuenta, aceptas nuestros
                        <a href="#" className="text-gray-700 underline"> términos y condiciones </a>
                        y nuestra
                        <a href="#" className="text-gray-700 underline"> política de privacidad</a>.
                    </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                    >
                        Registrarse
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        ¿Ya tienes una cuenta?
                        <Link href="/login" className="text-blue-500"> Inicia sesión</Link>.
                    </p>
                </div>
            </form>
        </motion.div>
    );
}
