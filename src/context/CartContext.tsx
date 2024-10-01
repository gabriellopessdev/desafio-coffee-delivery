import { createContext, ReactNode, useState } from "react";


export interface CartItem {
    name: string;
    price: string;
    quantity: number;
    image: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemName: string) => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]); // Tipar o estado

    const addToCart = (item: CartItem) => { // Tipar o parâmetro da função
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                // Se o item já existe no carrinho, apenas atualiza a quantidade
                return prevItems.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            // Caso contrário, adiciona o novo item ao carrinho
            return [...prevItems, item];
        });
    };
    const removeFromCart = (itemName: string) => {
        setCartItems((prevItems) =>
            prevItems.filter(cartItem => cartItem.name !== itemName)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};