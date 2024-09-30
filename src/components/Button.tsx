interface ButtonProps {
    index: number;
    quantitiesCoffee: number[];
    setQuantitiesCoffee: React.Dispatch<React.SetStateAction<number[]>>;
}

export function Button({ index, quantitiesCoffee, setQuantitiesCoffee }: ButtonProps) {
    const increaseQuantity = (index: number) => {
        setQuantitiesCoffee((prevQuantities) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] += 1;
            return updatedQuantities;
        });
    };

    const decreaseQuantity = (index: number) => {
        setQuantitiesCoffee((prevQuantities) => {
            const updatedQuantities = [...prevQuantities];
            if (updatedQuantities[index] > 1) {
                updatedQuantities[index] -= 1;
            }
            return updatedQuantities;
        });
    };

    return (
        <div className='flex items-center bg-gray-300 rounded-lg '>
            <button
                onClick={() => decreaseQuantity(index)}
                className="text-purple-800 text-2xl px-3 py-1"
            >
                --
            </button>
            <p className="mx-2 text-lg">{quantitiesCoffee[index]}</p>
            <button
                onClick={() => increaseQuantity(index)}
                className="text-purple-800 text-2xl px-3 py-1"
            >
                +
            </button>
        </div>
    )
}