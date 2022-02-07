import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartProduct } from "../components/CartProduct"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/cart.module.css"

function Cart() {
    const { cartProducts, setCartProducts, totalPrice } = useContext(ProductsContext)

    return (
        <>
            {cartProducts.length ? <main className={styles.cartMain}>
                {cartProducts.map((product, i) => (
                    <CartProduct
                        product={product}
                        setCartProducts={setCartProducts}
                        cartProducts={cartProducts}
                        id={i}
                        key={i} />
                ))}
                <div className={styles.btnBuyContainer}>
                    <Link className={styles.btnBuy} to="/completar-compra">
                        <span>Continuar</span>
                        <span className={styles.btnBuyPrice}>$ {totalPrice.toFixed(3)}</span>
                    </Link>
                </div>
            </main> : <div className={styles.noProducts}><p>No has agregado nada aun :(</p></div>}
        </>
    )
}

export { Cart }