"use client";
import React, { useEffect, useState } from "react";
import StoreCards from "@/components/ui/storeCards";
import { storeTypes } from "@/lib/storeTypes";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import AlertError from "@/components/ui/alertError";
import { useRouter } from "next/navigation";
import { getStores, saveStore } from "@/services/stores";
import Button from "@/components/ui/buton";
import Input from "@/components/ui/input";
import withAuth from "@/hoc/withAuth";
const MapComponent = dynamic(() => import("@/components/ui/Map"), { ssr: false });

function DashboardAdminPage() {
    const [stores, setStores] = useState<storeTypes[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const Map = dynamic(() => import("@/components/ui/MapComponent"), { ssr: false });
    const [showForm, setShowForm] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        storeName: "",
        department: "",
        city: "",
        address: "",
        latitude: "",
        longitude: ""
    });

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            setErrorMessage("No se encontró el token. Inicia sesión nuevamente.");
            router.push("/login");
            setShowErrorAlert(true);
            return;
        }
        getStores(token)
            .then((data) => {
                setStores(data);
            })
            .catch((error) => console.error("Error al obtener las tiendas:", error));
    }, []);

    const departmentOptions = [
        { value: "Antioquia", label: "Antioquia" },
        { value: "Boyacá", label: "Boyacá" },
        { value: "Cundinamarca", label: "Cundinamarca" },
        { value: "Santander", label: "Santander" },
        { value: "Valle del Cauca", label: "Valle del Cauca" }
    ];

    const citiesByDepartment: Record<string, { value: string; label: string }[]> = {
        Antioquia: [{ value: "medellin", label: "Medellín" }, { value: "envigado", label: "Envigado" }],
        Boyacá: [{ value: "tunja", label: "Tunja" }, { value: "sogamoso", label: "Sogamoso" }],
        Cundinamarca: [{ value: "bogota", label: "Bogotá" }, { value: "soacha", label: "Soacha" }],
        Santander: [{ value: "bucaramanga", label: "Bucaramanga" }, { value: "giron", label: "Girón" }],
        "Valle del Cauca": [{ value: "cali", label: "Cali" }, { value: "palmira", label: "Palmira" }]
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = Cookies.get("token");
        if (!token) {
            setErrorMessage("No se encontró el token. Inicia sesión nuevamente.");
            setShowErrorAlert(true);
            return;
        }

        const payload = {
            storeName: formData.storeName,
            department: {
                name: formData.department,
                type: "DEPARTAMENTO",
            },
            city: {
                name: formData.city,
                type: "CIUDAD",
            },
            address: {
                name: formData.address,
                type: "DIRECCION",
                latitude: Number(formData.latitude),
                longitude: Number(formData.longitude),
            },
        };

        try {
            const response = await saveStore(payload, token);
            if (response.status === 200) {
                setStores([...stores, response.data]);
                setShowForm(false);
                setFormData({ storeName: "", department: "", city: "", address: "", latitude: "", longitude: "" });
            } else {
                setErrorMessage("Hubo un problema al guardar los datos.");
                setShowErrorAlert(true);
            }
        } catch (error) {
            console.error("Error al guardar la tienda:", error);
            setErrorMessage("Ocurrió un error al guardar la tienda.");
            setShowErrorAlert(true);
        }
    };

    return (
        <div className="p-6">
            {showErrorAlert && <AlertError message={errorMessage} onClose={() => setShowErrorAlert(false)} />}
            <div className="mb-4 flex justify-end">
                <Button nameButton="Crear tienda" onClick={() => setShowForm(!showForm)} />
            </div>
            {showForm && (
                <div className="mb-6 p-6 border rounded-lg shadow-lg bg-white transition-all duration-300 max-w-4xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4 text-center">Agregar Tienda</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <Input label="Nombre de la tienda" name="storeName" placeholder="Nombre" value={formData.storeName} onChange={handleChange} require={true} />
                            <select name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded" required>
                                <option value="">Seleccione un departamento</option>
                                {Object.keys(citiesByDepartment).map((dept) => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                            <select name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required>
                                <option value="">Seleccione una ciudad</option>
                                {citiesByDepartment[formData.department]?.map((city) => (
                                    <option key={city.value} value={city.value}>{city.label}</option>
                                ))}
                            </select>
                            <Input label="Dirección" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} require={true} />
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full mt-2">
                                Guardar Tienda
                            </button>
                        </form>
                        <div className="w-full h-[300px]">
                                   <MapComponent
                                       department={formData.department}
                                       city={formData.city}
                                       address={formData.address}
                                       latitude={formData.latitude}
                                       longitude={formData.longitude}
                                       setFormData={setFormData}
                                   />
                        </div>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stores.length > 0 ? (
                    stores.map((store) => (
                        <StoreCards
                            key={store.id}
                            storeId={store.id}
                            name={store.storeName}
                            department={store.place.place.place.name}
                            city={store.place.place.name}
                            address={store.place.name}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No hay tiendas disponibles</p>
                )}
            </div>
        </div>
    );
}
export default withAuth(DashboardAdminPage,["Administrador"]);