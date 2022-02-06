import { useContext } from "react"
import { CartProduct } from "../components/CartProduct"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/cart.module.css"

function Cart() {
    const { cartProducts, setCartProducts } = useContext(ProductsContext)
    /* const totalPrice = cartProducts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price, 0
    ) */
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
                {/* <div>{totalPrice}</div> */}
            </main> : <div className={styles.noProducts}>No has agregado nada aun :(</div>}
        </>
    )
}

export { Cart }