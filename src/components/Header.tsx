import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../public/logo.svg'

export function Header() {
    return (
        <div className='flex justify-between p-8 h-28'>
            <span ><img src={logo} alt="Coffee delivery logo" /></span>
            <div className='flex'>
                <span className='bg-purple-100 text-purple-800 px-4 py-2 mr-3 rounded-lg flex items-center'>
                    <MapPin size={24} weight='fill' className='mr-1 ' /> <strong>Japaraíba,Mg</strong>
                </span>
                <span className='bg-yellow-100 text-orange-600 px-3 rounded-lg flex items-center'><ShoppingCart size={24} weight='fill' /></span>
            </div>
        </div>
    )
}