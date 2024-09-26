import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Menu } from "../Menu";
import CoffeeImage from '../assets/images/hero.svg'
import CoffeeImageBg from '../assets/images/hero-bg.svg'

export function Home() {
    return (
        <main className="flex justify-center">
            <div className="w-1/2 p-8">
                <div >
                    <h1 className="text-6xl">Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className="text-2xl mt-4">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <div className="flex mt-16">
                    <div>
                        <div className="mr-4 flex">
                            <ShoppingCart
                                size={32}
                                weight="fill"
                                className='bg-yellow-600 text-white p-2 rounded-full'
                            />
                            <span>Compra simples e segura</span>
                        </div>
                        <div className="flex mr-4 mt-6">
                            <Timer
                                size={32}
                                weight="fill"
                                className='bg-yellow-400 text-white p-2 rounded-full'
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>
                    </div>
                    <div>
                        <div className="ml-4 flex">
                            <Package
                                size={32}
                                weight="fill"
                                className='bg-gray-700 text-white p-2 rounded-full'
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div className="flex ml-4 mt-6">
                            <Coffee
                                size={32}
                                weight="fill"
                                className='bg-purple-600 text-white p-2 rounded-full'
                            />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative w-1/2 mr-8">
                <img
                    src={CoffeeImageBg}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img src={CoffeeImage} className="relative z10 mx-auto" />
            </div>

        </main>
    )
}