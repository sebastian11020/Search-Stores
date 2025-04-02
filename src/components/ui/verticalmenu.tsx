import React from "react";
import { Home, Users, CreditCard, FileText, User } from "lucide-react"; // Importamos íconos de Lucide

export default function Verticalmenu() {
    return (
        <ul className="space-y-1">
            <li>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
                    <Home size={20} className="opacity-75 shadow-sm" /> {/* Nuevo icono de Inicio */}
                    <span className="text-sm font-medium"> Inicio </span>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    <div className="flex items-center gap-2">
                        <Users size={20} className="opacity-75 shadow-sm" />
                        <span className="text-sm font-medium"> Teams </span>
                    </div>

                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                        5
                    </span>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    <CreditCard size={20} className="opacity-75 shadow-sm" />
                    <span className="text-sm font-medium"> Billing </span>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    <div className="flex items-center gap-2">
                        <FileText size={20} className="opacity-75 shadow-sm" />
                        <span className="text-sm font-medium"> Invoices </span>
                    </div>

                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                        3
                    </span>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    <User size={20} className="opacity-75 shadow-sm" />
                    <span className="text-sm font-medium"> Account </span>
                </a>
            </li>
        </ul>
    );
}
