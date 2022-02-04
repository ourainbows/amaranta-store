import { NavLink } from "react-router-dom"
import "../styles/navigation.css"

import { HomeSvg } from "./HomeSvg"
import { ShirtSvg } from "./ShirtSvg"
import { CartSvg } from "./CartSvg"
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"

function Navigation() {
    const { cartProducts } = useContext(ProductsContext)
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active link" : "inactive link"}>
                        <HomeSvg />
                        <span>Inicio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="productos" className={({ isActive }) => isActive ? "active link" : "inactive link"}>
                        <ShirtSvg />
                        <span>Productos</span>
                        
                    </NavLink>
                </li>
                <li className="navigarionCart">
                    <NavLink to="carrito" className={({ isActive }) => isActive ? "active link" : "inactive link"}>
                        <CartSvg />
                        <span>Carrito</span>
                        {cartProducts.length ? <div className="navigationCartDot">{cartProducts.length}</div> : null}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navigation }