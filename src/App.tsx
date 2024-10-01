import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
    return (
        <CartProvider>
            <main className='max-w-[1440px] mx-8'>
                <Header />
                <Outlet />
            </main>
        </CartProvider>
    )
}
export default App
