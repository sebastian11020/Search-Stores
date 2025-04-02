"use client"
import React from "react"

interface storeProps{
    name:string,
    department:string,
    city:string,
    address:string
}

export default function StoreCards ({name,department,city,address}:storeProps){
    return(
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                alt="Tienda"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>

                <p className="mt-1 text-sm text-gray-700"><strong>Departamento:</strong>{department}</p>
                <p className="text-sm text-gray-700"><strong>Ciudad:</strong>{city}</p>
                <p className="text-sm text-gray-700"><strong>Dirección:</strong>{address}</p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Ver Inventario
                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
                </a>
            </div>
        </article>
    )
}