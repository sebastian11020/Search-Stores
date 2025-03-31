"use client";
import Product from "@/components/ui/product";
import withAuth from "@/hoc/withAuth";
import Button from "@/components/ui/buton";
import Modal from "@/components/ui/Modal";
import React, {useState,useEffect} from "react";
import {getParameters} from "@/services/parameters";

function DashboardPage(){
    const [products,setProducts] = useState([])
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [porcentaje,setPorcentaje]=useState("")
    const [rango,setRango]=useState("")
    useEffect(() => {
        getParameters()
            .then((data) => {
                setProducts(data.products);
                setPorcentaje(data.porcentageVirtualStore);
                setRango(data.minimunDistance);
            })
            .catch((error) => console.error("Error al obtener parámetros:", error));
    }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        if(name==='porcentaje'){
            setPorcentaje(e.target.value)
        }
        if(name==='rango'){
            setRango(e.target.value)
        }
    }
    return(
        <div>
            <main className="flex-1 p-4 overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold text-black sm:text-3xl">
                        Configuración stock
                    </h2>
                    <Button nameButton={"Siguiente"} href={"#"} onClick={() => setIsModalOpen(true)}  />
                </div>
                <p className="mt-5 text-base text-gray-500 sm:mt-0 max-w-4xl">
                    Aquí puede configurar la cantidad de cada producto que tendrán las tiendas a la hora de crearse.
                    Cuando esté listo, presione siguiente para continuar la configuración.
                </p>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <Product
                                key={index} name={product.name}
                                description={product.description}
                                url={product.url}
                                quantity={product.quantity}
                            />
                        ))
                    ) : (
                        <p className="col-span-4 text-center text-gray-500">No hay productos disponibles</p>
                    )}
                </div>
                </main>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
                    <h2 className="text-lg font-bold">Porcentaje de productos</h2>
                    <p className="mt-1.5 text-xs text-pretty text-gray-500">
                        Defina qué porcentaje de productos quiere que se agreguen a la tienda virtual y el rango de distancia en kilómetros.
                    </p>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Porcentaje de productos (%)</label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese el porcentaje"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Rango de distancia (m)</label>
                        <input
                            type="number"
                            min="0"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese la distancia en m"
                        />
                    </div>
                    <div className="mt-4 flex justify-between gap-4">
                        <button
                            className="rounded-sm bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-none"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cerrar
                        </button>
                        <button
                            className="rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-none"
                            onClick={() => {
                            }}
                        >
                            Guardar
                        </button>
                    </div>
                </Modal>

            )}
            </div>
    )
}
export default withAuth(DashboardPage);