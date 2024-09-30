import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from '../assets/images/delivery.svg'

export function Success() {
    return (

        <main className="flex justify-center">
            <div className="w-1/2 p-8">
                <div >
                    <h1 className="text-6xl text-yellow-600">Uhu! Pedido confirmado</h1>
                    <p className="text-2xl mt-4">Agora é só esperar qure logo o café chegará até você</p>
                </div>
                <div className="mt-16 relative w-full p-[2px] rounded-[6px_36px_6px_36px] bg-gradient-to-br from-yellow-500 to-purple-500">
                    <div className="p-10 items-center bg-white rounded-[6px_36px_6px_36px]">
                        <div className="flex items-center">
                            <MapPin
                                size={32}
                                weight="fill"
                                className='bg-purple-600 text-white p-2 rounded-full'
                            />
                            <div className="ml-2 flex flex-col">
                                <span className="ml-2">Entrega em <strong>Rua1</strong></span>
                                <p className="ml-2"><strong>Japaraiba</strong></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <Timer
                                size={32}
                                weight="fill"
                                className='bg-yellow-400 text-white p-2 rounded-full'
                            />
                            <div className="ml-2 flex flex-col">
                                <span className="ml-2">Previsão de entrega</span>
                                <p className="ml-2"><strong>20min - 30min</strong></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <CurrencyDollar
                                size={32}
                                weight="fill"
                                className='bg-yellow-600 text-white p-2 rounded-full'
                            />
                            <div className="ml-2 flex flex-col">
                                <span className="ml-2">Pagamento na entrega</span>
                                <p className="ml-2"><strong>Dinheiro</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 mt-48">
                <img
                    src={delivery}
                />
            </div>
        </main>
    )
}