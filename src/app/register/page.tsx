"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {AuthData} from "@/lib/authTypes";
import {useRouter} from "next/navigation";
import {register} from "@/services/auth";
import { Eye, EyeOff } from "lucide-react";
import SelectInput from "@/components/ui/select";

export default function RegisterPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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
        const router = useRouter()
        try {
            const response = await register(formData);
            console.log("Registro exitoso:", response);
            router.push("/login")
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
                    <SelectInput label="Tipo Documento"
                                 name="typeDocument"
                                 value={formData.typeDocument}
                                 onChange={handleChange}
                                 required={true}
                                 options={[
                                     {value:"CC",label:"Cedula de ciudadania"},
                                     {value: "PS",label: "Pasaporte"},
                                     {value: "CE",label: "Cedula Extranjera"}
                                 ]}
                    />
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
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="Password"
                            name="password"
                            required
                            onChange={handleChange}
                            className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                        Confirmar contraseña
                    </label>
                    <div className="relative">
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
