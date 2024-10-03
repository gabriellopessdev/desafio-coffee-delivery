interface ButtonProps {
    index: number;
    quantitiesCoffee: number[];
    setQuantitiesCoffee: React.Dispatch<React.SetStateAction<number[]>>;
}

export function Button({ index, quantitiesCoffee, setQuantitiesCoffee }: ButtonProps) {

    const handleIncrease = () => {
        const newQuantities = [...quantitiesCoffee];
        newQuantities[index] = (newQuantities[index] || 0) + 1; // Incrementa a quantidade
        setQuantitiesCoffee(newQuantities);
    };

    const handleDecrease = () => {
        const newQuantities = [...quantitiesCoffee];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1; // Decrementa a quantidade, mas não abaixo de 0
        }
        setQuantitiesCoffee(newQuantities);
    };

    return (
        <div className='flex items-center bg-gray-300 rounded-lg '>
            <button
                onClick={handleDecrease}
                className="text-purple-800 text-2xl px-3 py-1"
            >
                --
            </button>
            <span className="mx-2 text-lg">{quantitiesCoffee[index]}</span>
            <button
                onClick={handleIncrease}
                className="text-purple-800 text-2xl px-3 py-1"
            >
                +
            </button>
        </div>
    )
}