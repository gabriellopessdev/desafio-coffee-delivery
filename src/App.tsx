import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <main className='max-w-[1440px] mx-auto'>
            <Header />
            <Outlet />
        </main>
    )
}
export default App
