import styles from "../styles/product.module.css"
import { AddToCart } from "./AddToCart"

function Product({ product }) {
    return (
        <div className={styles.containerProducts}>
            <img src={product.image} alt={product.name} width="50"/>
            <div>

            </div>
            <AddToCart />
        </div>
    )
}

export { Product }