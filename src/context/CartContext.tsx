import { createContext, ReactNode, useEffect, useState } from "react";


export interface CartItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemName: string) => void;
    removeAllFromCart: () => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        // Restaura o carrinho do localStorage ao inicializar
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Efeito para salvar o carrinho no localStorage sempre que ele for atualizado
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cartItems'); // Remove do localStorage se o carrinho estiver vazio
        }
    }, [cartItems]);


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

    const removeAllFromCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};