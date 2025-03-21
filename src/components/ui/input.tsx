import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";

interface InputProps {
    label: string;
    type?: "text" | "email" | "password" | "number";
    name: string;
    require:boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function Input({label,type="text",name,require,value,onChange,placeholder}:InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="col-span-4">
            <label
                htmlFor="password"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required ={require}
                    name={name}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm"
                />
                {type==="password"&&(
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
                <span
                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                            {label}
                </span>
            </label>
        </div>)
}



