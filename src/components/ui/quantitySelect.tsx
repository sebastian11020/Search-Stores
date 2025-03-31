import { useState, useEffect } from "react";

interface QuantitySelectProps {
    initialQuantity?: number;
}

export default function QuantitySelect({ initialQuantity = 1 }: QuantitySelectProps) {
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    return (
        <div>
            <label htmlFor="Quantity" className="sr-only"> Quantity </label>
            <div className="flex items-center gap-1">
                <label>Cantidad:</label>

                <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                    &minus;
                </button>

                <input
                    type="number"
                    id="Quantity"
                    value={quantity}
                    onChange={(e) => {
                        const newValue = Number(e.target.value);
                        if (!isNaN(newValue) && newValue >= 1) {
                            setQuantity(newValue);
                        }
                    }}
                    className="h-10 w-8 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                    +
                </button>
            </div>
        </div>
    );
}
