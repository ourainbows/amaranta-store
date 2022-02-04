import styles from "../styles/cartProduct.module.css"

function CartProduct({ product }) {
    return (
        <div className={styles.cardProduct}>
            <img src={product.image} alt={product.name}/>
            <div>
                <h3>{product.name}</h3>
                <span>{product.price}</span>
                {/* {product.colors.map} */}
            </div>
            <div>
                <div>{product.size[0]}</div>
            </div>
        </div>
    )
}

export {CartProduct}