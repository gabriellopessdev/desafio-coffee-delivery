import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Form } from '../components/Form';
import { Trash } from 'phosphor-react';
export function Checkout() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className='flex gap-8'>
            <Form />
            <div>
                <h1>Cafés selecionados</h1>
                <div className='bg-gray-100 rounded-[6px_36px_6px_36px] p-4 gap-4'>
                    {cartItems.map(item => (
                        <div key={item.name} className="flex justify-between items-center">
                            <div>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>R$ {item.price} x {item.quantity}</p>
                            </div>
                            <div className='flex items-center'>
                                <button onClick={() => removeFromCart(item.name)} className='bg-gray-300 rounded-lg'>
                                    <Trash size={24} color="#6B46C1" /> Remover
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="submit" className="mt-4 bg-yellow-300 text-white p-2 rounded-lg">Finalizar Pedido</button>
                </div>
            </div>
        </div>
    );

}