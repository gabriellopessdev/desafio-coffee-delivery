import traditionalExpress from '../assets/images/coffees/Expresso.png'
import american from '../assets/images/coffees/Americano.png'
import chocolate from '../assets/images/coffees/Chocolate Quente.png'
import capuccino from '../assets/images/coffees/Capuccino.png'
import arabic from '../assets/images/coffees/Árabe.png'
import coffeeMilk from '../assets/images/coffees/Café com Leite.png'
import icedCoffee from '../assets/images/coffees/Café Gelado.png'
import cuban from '../assets/images/coffees/Cubano.png'
import creamyExpress from '../assets/images/coffees/Expresso Cremoso.png'
import hawaiian from '../assets/images/coffees/Havaiano.png'
import irish from '../assets/images/coffees/Irlandês.png'
import latte from '../assets/images/coffees/Latte.png'
import macchiato from '../assets/images/coffees/Macchiato.png'
import mochaccino from '../assets/images/coffees/Mochaccino.png'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Button } from './Button'
import { CartContext, CartItem } from '../context/CartContext'

export function Menu() {
    const { addToCart } = useContext(CartContext)

    const coffees = [
        { name: 'Expresso Tradicional', image: traditionalExpress, tag: ['TRADICIONAL'], description: 'O tradicional café feito com água quente e grãos moidos', price: '9,90' },
        { name: 'Expresso Americano', image: american, tag: ['TRADICIONAL'], description: 'Expresso diluído, menos intenso que o tradicional', price: '9,90' },
        { name: 'Capuccino', image: capuccino, tag: ['TRADICIONAL', 'COM LEITE'], description: 'Bebida com canela feita de doses iguais de café, leite e espuma', price: '9,90' },
        { name: 'Chocolate Quente', image: chocolate, tag: ['ESPECIAL', 'COM LEITE'], description: 'Bebida feita com chocolate dissolvido no leite quente e café', price: '9,90' },
        { name: 'Café com Leite', image: coffeeMilk, tag: ['ESPECIAL', 'COM LEITE'], description: 'Meio a meio de expresso tradicional com leite vaporizado', price: '9,90' },
        { name: 'Café Gelado', image: icedCoffee, tag: ['TRADICIONAL', 'GELADO'], description: 'Bebida preparada com café expresso e cubos de gelo', price: '9,90' },
        { name: 'Cubano', image: cuban, tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'], description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', price: '9,90' },
        { name: 'Árabe', image: arabic, tag: ['ESPECIAL'], description: 'Bebida preparada com grãos de café árabe e especiarias', price: '9,90' },
        { name: 'Expresso Cremoso', image: creamyExpress, tag: ['TRADICIONAL'], description: 'Café expresso tradicional com espuma cremosa', price: '9,90' },
        { name: 'Havaiano', image: hawaiian, tag: ['ESPECIAL'], description: 'Bebida adocicada preparada com café e leite de coco', price: '9,90' },
        { name: 'Irlandês', image: irish, tag: ['ESPECIAL', 'ALCOÓLICO'], description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', price: '9,90' },
        { name: 'Latte', image: latte, tag: ['TRADICIONAL', 'COM LEITE'], description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', price: '9,90' },
        { name: 'Macchiato', image: macchiato, tag: ['TRADICIONAL', 'COM LEITE'], description: 'Café expresso misturado com um pouco de leite quente e espuma', price: '9,90' },
        { name: 'Mochaccino', image: mochaccino, tag: ['TRADICIONAL', 'COM LEITE'], description: 'Café expresso com calda de chocolate, pouco leite e espuma', price: '9,90' },
    ];
    const [quantitiesCoffee, setQuantitiesCoffee] = useState(coffees.map(() => 1));



    return (
        <main className="mt-20">
            <h1 className="text-2xl ml-6 mb-8">Nossos cafés</h1>
            <div className='flex flex-wrap w-full gap-8'>
                {coffees.map((coffee, index) => (
                    <div key={index} className='relative w-72 p-2 h-80 mx-5 bg-gray-100 border rounded-[6px_36px_6px_36px]'>
                        <img
                            src={coffee.image}
                            alt={coffee.name}
                            className='absolute top-[-5%] left-1/2 transform -translate-x-1/2 ' />
                        <div className="flex justify-center gap-2 mt-20">
                            {coffee.tag.map((tag, tagIndex) => (
                                <div
                                    key={tagIndex}
                                    className=" bg-yellow-100 rounded-full px-2 py-1 text-yellow-600 text-sm"
                                >
                                    <strong>{tag}</strong>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-2"><strong>{coffee.name}</strong></p>
                        <p className="text-center mx-1 p-1 text-gray-400">{coffee.description}</p>
                        <div className='flex items-center mt-12'>
                            <p className='text-gray-400 mx-6 text-sm'>R$
                                <span className="text-center ml-1 font-extrabold text-gray-500 text-2xl">{coffee.price}</span>
                            </p>
                            <Button
                                index={index}
                                quantitiesCoffee={quantitiesCoffee}
                                setQuantitiesCoffee={setQuantitiesCoffee}
                            />
                            <button className="text-white bg-purple-800 p-2 ml-2 rounded-md"
                                onClick={() => {
                                    const coffeeItem: CartItem = {
                                        name: coffee.name,
                                        price: coffee.price,
                                        quantity: quantitiesCoffee[index], // Quantidade atual
                                        image: coffee.image,
                                    };
                                    addToCart(coffeeItem); // Adiciona o item ao carrinho
                                }}
                            >
                                <ShoppingCart weight='fill' size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}