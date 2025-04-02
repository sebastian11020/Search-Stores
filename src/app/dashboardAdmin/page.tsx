"use client";
import React from "react"
import { useEffect, useState } from "react";
import StoreCards from "@/components/ui/storeCards";
import {storeTypes} from "@/lib/storeTypes"
import Cookies from "js-cookie";
import {getParameters} from "@/services/parameters";
import AlertError from "@/components/ui/alertError";
import {useRouter} from "next/navigation";
import {getStores} from "@/services/stores";
import Button from "@/components/ui/buton";

export default function dashboardAdminPage(){
    const [stores, setStores] = useState<storeTypes[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            setErrorMessage("No se encontró el token. Inicia sesión nuevamente.");
            router.push("/login")
            setShowErrorAlert(true);
            return;
        }
        getStores(token)
            .then((data) => {
                setStores(data)
            })
            .catch((error) => console.error("Error al obtener parámetros:", error));
    }, []);
    return(
        <div>
            {showErrorAlert && <AlertError message={errorMessage} onClose={() => setShowErrorAlert(false)} />}
            <Button nameButton="Crear tienda"></Button>
            {stores.length>0?(
                stores.map((store,index)=>(
                    <StoreCards
                        name={store.storeName}
                        department={store.place.place.place.name}
                        city={store.place.place.name}
                        address={store.place.name}>
                    </StoreCards>
                    ))
            ) : (
                <p className="col-span-4 text-center text-gray-500">No hay tiendas disponibles</p>
            )
            }
        </div>
    )
}