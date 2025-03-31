import {useState,useEffect} from "react";

interface QuantitySelectProps {
    initialQuantity?: number;
    onChangeQuantity: (newQuantity: number) => void;
}

export default function QuantitySelect({ initialQuantity = 1, onChangeQuantity }: QuantitySelectProps) {
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            onChangeQuantity(newQuantity);
        }
    };

    return (
        <div>
            <label htmlFor="Quantity" className="sr-only">Cantidad</label>
            <div className="flex items-center gap-1">
                <label>Cantidad:</label>
                <button
                    type="button"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                    &minus;
                </button>
                <input
                    type="number"
                    id="Quantity"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                    className="h-10 w-8 rounded-sm border-gray-200 text-center"
                />
                <button
                    type="button"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                    +
                </button>
            </div>
        </div>
    );
}
