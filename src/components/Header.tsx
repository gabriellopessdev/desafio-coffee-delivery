import { MapPin } from 'phosphor-react'
import logo from '../../public/logo.svg'
import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <div className='flex justify-between p-8 h-28'>
            <NavLink to="/" title="Checkout">
                <span ><img src={logo} alt="Coffee delivery logo" /></span>
            </NavLink>
            <div className='flex'>
                <span className='bg-purple-100 text-purple-800 px-4 py-2 mr-3 rounded-lg flex items-center'>
                    <MapPin size={24} weight='fill' className='mr-1 ' /> <strong>Japaraíba,Mg</strong>
                </span>
                <NavLink to="/checkout" title="Checkout" className='bg-yellow-100 text-orange-600 px-3 rounded-lg flex items-center'>
                    <ShoppingCart size={24} weight='fill' />
                </NavLink>
            </div>
        </div>
    )
}