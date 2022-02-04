import { useContext } from "react"
import { CartProduct } from "../components/CartProduct"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/cart.module.css"

function Cart() {
    const { cartProducts } = useContext(ProductsContext)
    console.log(cartProducts)
    return (
        <>
            <div style={{ marginTop: "100px" }}>Vista del carrito</div>
            {cartProducts.map(product=>(
                <CartProduct product={product} key={product.id}/>
            ))}
        </>
    )
}

export { Cart }