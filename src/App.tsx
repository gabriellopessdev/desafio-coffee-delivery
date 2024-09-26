import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <main className='mx-40'>
            <Header />
            <Outlet />
        </main>
    )
}
export default App
