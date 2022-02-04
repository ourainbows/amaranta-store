import styles from "../styles/navbar.module.css"
import logo from "../assets/icons/logo.svg"
import cart from "../assets/icons/cart.svg"
import { Link } from "react-router-dom";
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
            <span className={styles.cartContainer}>
                <Link to="carrito" >
                    <img src={cart} alt="cart" />
                </Link>
                {cartProducts.length ? <div className={styles.carDot}>{cartProducts.length}</div> : null}
            </span>
        </nav>
    )
}

export { Navbar };
