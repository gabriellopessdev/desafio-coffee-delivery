import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface CheckoutFormData {
    zipCode: number;
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    paymentMethod: string;
}

interface FormProps {
    onSubmit: (data: CheckoutFormData) => void;
    formRef: React.RefObject<HTMLFormElement>;
}

export function Form({ onSubmit, formRef }: FormProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CheckoutFormData>();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
    const [paymentError, setPaymentError] = useState<string | null>(null);

    const handleFormSubmit = (data: CheckoutFormData) => {
        if (!selectedPaymentMethod) {
            setPaymentError("Por favor, selecione um método de pagamento.");
            return;
        }
        setPaymentError(null);  // Remove a mensagem de erro caso já tenha selecionado
        const formDataWithPayment = { ...data, paymentMethod: selectedPaymentMethod };
        onSubmit(formDataWithPayment);

        // Limpa o formulário após a submissão
        reset();  // Limpa todos os campos do formulário
        setSelectedPaymentMethod("");  // Reseta o método de pagamento
    };

    return (
        <div className="ml-8 w-2/3">
            <h1>Complete seu pedido</h1>
            <form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}>
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
                            placeholder={errors.zipCode ? errors.zipCode.message : "CEP"}
                            {...register("zipCode", { required: "CEP é obrigatório" })}
                            className={`p-2 border rounded-md w-1/2 bg-gray-200 ${errors.zipCode ? 'border-red-500' : ''}`}
                        />
                        <input
                            type="text"
                            placeholder={errors.street ? errors.street.message : "Rua"}
                            {...register("street", { required: "Rua é obrigatória" })}
                            className={`p-2 border rounded-md w-full bg-gray-200 ${errors.street ? 'border-red-500' : ''}`}
                        />
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder={errors.number ? errors.number.message : "Número"}
                                {...register("number", { required: "Número é obrigatório" })}
                                className={`p-2 border rounded-md w-1/3 bg-gray-200 ${errors.number ? 'border-red-500' : ''}`}
                            />
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
                                placeholder={errors.neighborhood ? errors.neighborhood.message : "Bairro"}
                                {...register("neighborhood", { required: "Bairro é obrigatório" })}
                                className={`p-2 border rounded-md w-1/3 bg-gray-200 ${errors.neighborhood ? 'border-red-500' : ''}`}
                            />
                            <input
                                type="text"
                                placeholder={errors.city ? errors.city.message : "Cidade"}
                                {...register("city", { required: "Cidade é obrigatória" })}
                                className={`p-2 border rounded-md w-1/2 bg-gray-200 ml-4 ${errors.city ? 'border-red-500' : ''}`}
                            />
                            <input
                                type="text"
                                placeholder={errors.state ? errors.state.message : "UF"}
                                {...register("state", { required: "Estado é obrigatório" })}
                                className={`p-2 border rounded-md w-[14%] bg-gray-200 ml-4 ${errors.state ? 'border-red-500' : ''}`}
                            />
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
                                onClick={() => setSelectedPaymentMethod("Cartão de Crédito")}
                                className={`bg-gray-200 p-2 items-center flex rounded-lg  w-1/3 ${selectedPaymentMethod === "Cartão de Crédito" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <CreditCard color="#6B46C1" size={24} />CARTÃO DE CRÉDITO
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedPaymentMethod("Cartão de Débito")}
                                className={`bg-gray-200 p-4 items-center flex rounded-lg w-1/3 ${selectedPaymentMethod === "Cartão de Débito" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <Bank color="#6B46C1" size={24} />CARTÃO DE DÉBITO
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedPaymentMethod("Dinheiro")}
                                className={`bg-gray-200 p-4 items-center flex rounded-lg w-1/3 ${selectedPaymentMethod === "Dinheiro" ? 'border border-purple-800 bg-purple-200' : ''}`}
                            >
                                <Money color="#6B46C1" size={24} />DINHEIRO
                            </button>
                        </div>
                        {paymentError && <p className="text-red-500">{paymentError}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}
