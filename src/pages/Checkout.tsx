import { useContext, useRef, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CheckoutFormData, Form } from '../components/Form';
import { Trash } from 'phosphor-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
export function Checkout() {
    const { cartItems, removeFromCart, removeAllFromCart } = useContext(CartContext);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const [quantitiesCoffee, setQuantitiesCoffee] = useState<number[]>(() => {
        return cartItems.map(item => item.quantity); // Inicializa com as quantidades dos itens no carrinho
    });

    // Custo da entrega
    const deliveryCost = 3.50;

    // Calcula o total dos itens no carrinho
    const calculateTotalItems = () => {
        return cartItems.reduce((total, item, index) => {
            // Assume que item.price é sempre um número e que quantitiesCoffee[index] é a quantidade correspondente
            return total + item.price * quantitiesCoffee[index];
        }, 0);
    };

    // Calcula o total do pedido (itens + entrega)
    const calculateTotalOrder = () => {
        return calculateTotalItems() + deliveryCost;
    };

    const handleFormSubmit = (formData: CheckoutFormData) => {
        navigate('/success', { state: formData });
        removeAllFromCart();
    };

    const handleSubmitButton = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    };

    const hasItemsInCart = cartItems.length > 0;

    return (
        <div className='flex gap-8'>
            <Form onSubmit={handleFormSubmit} formRef={formRef} />
            <div className='w-1/2 mr-6'>
                <h1>Cafés selecionados</h1>
                <div className='bg-gray-100 rounded-[6px_36px_6px_36px] p-4 gap-4 mt-4 w-ful'>
                    <div className='p-4'>
                        {cartItems.map((item, index) => (
                            <div key={item.name} className="flex border-b-2">
                                <div className='flex gap-4 mb-4 p-4 w-full'>
                                    <img src={item.image} alt={item.name} className='w-16 h-16 mt-4' />
                                    <div>
                                        <div className='flex justify-between p-2 w-full'>
                                            <div>
                                                <span className='w-1/2 mr-80'>{item.name}</span>
                                            </div>
                                            <div>
                                                <span className="text-center font-extrabold text-gray-500 text-xl">R$ {(item.price * quantitiesCoffee[index]).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <Button
                                                index={index}
                                                quantitiesCoffee={quantitiesCoffee}
                                                setQuantitiesCoffee={setQuantitiesCoffee}
                                            />
                                            <button onClick={() => removeFromCart(item.name)} className='bg-gray-300 rounded-lg flex p-2'>
                                                <Trash size={24} color="#6B46C1" /> Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='m-2'>
                        <div className='flex justify-between p-2'>
                            <p>Total de itens</p>
                            <p>R$ {calculateTotalItems().toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p>Entrega</p>
                            <p>R$ {deliveryCost.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between p-2 font-extrabold text-gray-800 text-2xl'>
                            <p>Total</p>
                            {hasItemsInCart && (
                                <p>R$ {calculateTotalOrder().toFixed(2)}</p>
                            )}
                        </div>
                        <button
                            onClick={handleSubmitButton}
                            className="mt-4 bg-yellow-400 text-white p-3 rounded-lg w-full"
                            disabled={!hasItemsInCart}
                        >
                            CONFIRMAR PEDIDO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}