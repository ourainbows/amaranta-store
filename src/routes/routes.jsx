import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Navbar } from "../components/Navbar"
import { Navigation } from "../components/Navigation"
import { ScrollToTop } from "../components/ScrollToTop"
import { ProductsProvider } from "../context/ProductsProvider/ProductsProvider"
import { Buy } from "../pages/Buy"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Products } from "../pages/Products"

function RoutesContainer() {
    return (
        <ProductsProvider>
            <BrowserRouter>
                <ScrollToTop/>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/carrito" element={<Cart />} />
                    <Route path="/completar-compra" element={<Buy />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Navigation />
            </BrowserRouter>
        </ProductsProvider>
    )
}

export { RoutesContainer }