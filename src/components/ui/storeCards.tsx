import { useState, useEffect } from "react";
import Modal from "./Modal";
import {getProductsByStore} from "@/services/stores";
import Cookies from "js-cookie";
import router from "next/router";
import {useRouter} from "next/navigation";

interface StoreProps {
    name: string;
    department: string;
    city: string;
    address: string;
    storeId: number;
}

export default function StoreCards({ name, department, city, address, storeId }: StoreProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState<{ name: string; quantity: number }[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const router = useRouter();

    const handleOpenModal = async () => {
        const token = Cookies.get("token");
        if (!token) {
            setErrorMessage("No se encontró el token. Inicia sesión nuevamente.");
            router.push("/login");
            setShowErrorAlert(true);
            return;
        }
        try {
            const data = await getProductsByStore(storeId,token);
            setProducts(data);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    return (
        <>
            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img
                    alt="Tienda"
                    src="https://s3-us-west-2.amazonaws.com/wp-mpro-blog/wp-content/uploads/2018/10/13095309/s3-blog-punto-de-venta-abarrotes-01-min-min.jpg"
                    className="h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm text-gray-700"><strong>Departamento:</strong> {department}</p>
                    <p className="text-sm text-gray-700"><strong>Ciudad:</strong> {city}</p>
                    <p className="text-sm text-gray-700"><strong>Dirección:</strong> {address}</p>

                    <button
                        onClick={handleOpenModal}
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                        Ver Inventario
                    </button>
                </div>
            </article>

            {/* Modal de Inventario */}
            <Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-semibold mb-4">Inventario de {name}</h2>
                {products.length > 0 ? (
                    <ul>
                        {products.map((product, index) => (
                            <li key={index} className="border-b py-2">
                                <span className="font-medium">{product.name}</span>: {product.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No hay productos disponibles.</p>
                )}
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                >
                    Cerrar
                </button>
            </Modal>
        </>
    );
}
