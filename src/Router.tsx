import { Route, Routes } from "react-router-dom"
import { Home } from './pages/Home'
import App from "./App"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="success" element={<Success />} />
            </Route>
        </Routes>
    )
}