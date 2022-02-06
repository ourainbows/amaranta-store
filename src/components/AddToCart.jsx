import { useContext } from "react"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/addToCart.module.css"

function AddToCart({ product }) {
    const{setCartProducts} = useContext(ProductsContext)
    const onAdd = () => {
        product["quantity"] = 1
        product["color"] = product.colors[0]
        product["height"] = product.size[0]
        setCartProducts(prevState => [...prevState, product])
    }
    return (
        <button onClick={onAdd}className={styles.add}>+</button>
    )
}
export {AddToCart}