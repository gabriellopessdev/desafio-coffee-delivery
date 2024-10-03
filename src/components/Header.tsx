import { MapPin } from 'phosphor-react'
import logo from '../../public/logo.svg'
import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export function Header() {
    const { cartItems } = useContext(CartContext);
    const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className='flex justify-between p-8 h-28'>
            <NavLink to="/" title="Checkout">
                <span ><img src={logo} alt="Coffee delivery logo" /></span>
            </NavLink>
            <div className='flex'>
                <span className='bg-purple-100 text-purple-800 px-4 py-2 mr-3 rounded-lg flex items-center'>
                    <MapPin size={24} weight='fill' className='mr-1 ' /> <strong>Japaraíba,Mg</strong>
                </span>
                <NavLink to="/checkout" title="Checkout" className='bg-yellow-100 text-orange-600 px-3 rounded-lg flex items-center relative'>
                    <ShoppingCart size={24} weight='fill' />
                    {cartQuantity > 0 && (
                        <span className='absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 p-2.5 text-xs sm:text-sm md:text-base flex items-center justify-center'>
                            {cartQuantity}
                        </span>
                    )}
                </NavLink>

            </div>
        </div>
    )
}