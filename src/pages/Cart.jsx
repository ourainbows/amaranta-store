import { useContext } from "react"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"

function Cart() {
    const { cartProducts } = useContext(ProductsContext)
    console.log(cartProducts)
    return (
        <div style={{ marginTop: "100px" }}>Vista del carrito</div>
    )
}

export {Cart}