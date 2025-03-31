import React, { useState } from "react";
import QuantitySelect from "@/components/ui/quantitySelect";

interface ProductProps {
    name: string;
    description: string;
    quantity: number;
    url: string;
    onQuantityChange: (newQuantity: number) => void;
}

export default function Product({ name, description, quantity, url, onQuantityChange }: ProductProps) {
    return (
        <a className="group block">
            <img
                src={url}
                alt=""
                className="aspect-square w-48 h-48 rounded-sm object-cover"
            />
            <div className="mt-3 max-w-[12rem]">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {name}
                </h3>
                <p className="mt-1.5 text-xs text-pretty text-gray-500">
                    {description}
                </p>
                <QuantitySelect initialQuantity={quantity} onChangeQuantity={onQuantityChange} />
            </div>
        </a>
    );
}
