import styles from "../styles/navbar.module.css"
import logo from "../assets/icons/logo.svg"
import cart from "../assets/icons/cart.svg"
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider";

function Navbar() {
    const { cartProducts } = useContext(ProductsContext)
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img className={styles.brandImg} src={logo} alt="logo" />
                    <span className={styles.brandName}>Amaranta</span>
                </Link>
            </div>
            <div className={styles.navBtns}>
                <div className={styles.desktopNavigation}>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/productos">Productos</NavLink></li>
                    </ul>
                </div>
                <span className={styles.cartContainer}>
                    <Link to="carrito" >
                        <img src={cart} alt="cart" />
                    </Link>
                    {cartProducts.length ? <div className={styles.carDot}>{cartProducts.length}</div> : null}
                </span>
            </div>
        </nav>
    )
}

export { Navbar };
