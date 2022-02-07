import styles from "../styles/product.module.css"
import { AddToCart } from "./AddToCart"

function Product({ product }) {
    return (
        <div className={styles.containerProducts}>
            <img src={product.image} alt={product.name}/>
            <div className={styles.containerProductsInfo}>
                <span className={styles.productName}>{product.name}</span>
                <div className={styles.colors}>
                    {product.colors.map(color => (
                        <div
                            key={color}
                            style={{
                                backgroundColor: color
                            }}
                        ></div>
                    ))
                    }
                </div>
                <div className={styles.containerPriceButton}>
                    <p><span>$ </span>{product.price.toFixed(3)}</p>
                    <AddToCart product={product}/>
                </div>
            </div>
        </div>
    )
}

export { Product }