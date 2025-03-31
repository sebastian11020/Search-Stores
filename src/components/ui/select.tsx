import React from "react";

interface selectInputProps{
    label:string,
    name:string,
    options: { value: string; label: string }[];
    value:string;
    required?:boolean;
    onChange:(e:React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<selectInputProps> = ({label,name,options,value,required,onChange}) =>{
    return(
        <div>
         <label className="block text-sm font-medium text-gray-700">
             {label}
         </label>
        <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
        >
            <option value="">Selecciona...</option>
            { options.map((option) =>(
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
    )
}
export default SelectInput;