import styles from "../styles/navbar.module.css"
import logo from "../assets/icons/logo.svg"
import cart from "../assets/icons/cart.svg"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img className={styles.brandImg} src={logo} alt="logo" />
                    <span className={styles.brandName}>Amaranta</span>
                </Link>
            </div>
            <span className={styles.cartContainer}>
                <img src={cart} alt="cart" />
            </span>
        </nav>
    )
}

export { Navbar };
