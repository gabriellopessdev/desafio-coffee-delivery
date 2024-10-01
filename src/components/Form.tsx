import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    zipCode: number;
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    paymentMethod: string;
}
export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

    const onSubmit = (data: FormData) => {
        const formDataWithPayment = { ...data, paymentMethod: selectedPaymentMethod };
        console.log(formDataWithPayment);
    };

    return (
        <div className="ml-8">
            <h1>Complete seu pedido</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-2xl">
                        <div className="flex text-gray-600 ">
                            <MapPin color="#d69826" size={24} />
                            <div className="ml-2">
                                <p>Endereço de Entrega</p>
                                <p className="text-sm">Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="CEP"
                            {...register("zipCode", { required: "CEP é obrigatório" })}
                            className="p-2 border rounded-md w-1/2 bg-gray-200"
                        />
                        {errors.street && <span className="text-red-500">{errors.street.message}</span>}
                        <input
                            type="text"
                            placeholder="Rua"
                            {...register("street", { required: "rua é obrigatória" })}
                            className="p-2 border rounded-md w-full bg-gray-200"
                        />
                        {errors.street && <span className="text-red-500">{errors.street.message}</span>}
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Número"
                                {...register("number", { required: "Número é obrigatório" })}
                                className="p-2 border rounded-md w-1/3 bg-gray-200"
                            />
                            {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                            <input
                                type="text"
                                placeholder="Complemento"
                                {...register("complement")}
                                className="p-2 border rounded-md w-2/3 bg-gray-200"
                            />
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Bairro"
                                {...register("neighborhood", { required: "Bairro é obrigatório" })}
                                className="p-2 border rounded-md w-1/3 bg-gray-200"
                            />
                            {errors.neighborhood && <span className="text-red-500">{errors.neighborhood.message}</span>}
                            <input
                                type="text"
                                placeholder="Cidade"
                                {...register("city", { required: "Cidade é obrigatória" })}
                                className="p-2 border rounded-md w-1/2 bg-gray-200 ml-4"
                            />
                            {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                            <input
                                type="text"
                                placeholder="UF"
                                {...register("state", { required: "Estado é obrigatório" })}
                                className="p-2 border rounded-md w-[14%] bg-gray-200 ml-4"
                            />
                            {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                        </div>
                    </div>
                    <div className='bg-gray-100 rounded-2xl p-6 mt-4'>
                        <div className="flex items-start h-full">
                            <CurrencyDollar color="#6B46C1" size={24} />
                            <div className="ml-2">
                                <h1>Pagamento</h1>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </div>
                        <div className="flex gap-4 my-10">
                            <button
                                type="button"
                                onClick={() => setSelectedPaymentMethod("Credit Card")}
                                className={`bg-gray-200 p-4 items-center flex rounded-lg ${selectedPaymentMethod === "Credit Card" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <CreditCard color="#6B46C1" size={24} />CARTÃO DE CRÉDITO
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedPaymentMethod("Debit Card")}
                                className={`bg-gray-200 p-4 items-center flex rounded-lg ${selectedPaymentMethod === "Debit Card" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <Bank color="#6B46C1" size={24} />CARTÃO DE DÉBITO
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedPaymentMethod("Cash")}
                                className={`bg-gray-200 p-4 items-center flex rounded-lg ${selectedPaymentMethod === "Cash" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <Money color="#6B46C1" size={24} />DINHEIRO
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}