import {ReactNode} from "react";

interface modalProps{
    isOpen:boolean;
    onClick:()=>void;
    children:ReactNode;
}
export default function Modal({isOpen,onClick,children}:modalProps){
    if(!isOpen) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                {children}
            </div>
        </div>
    )
}