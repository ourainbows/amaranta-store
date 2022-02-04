import styles from "../styles/cartProduct.css"

function CartProduct({ product }) {
    return (
        <div className={styles.cardProduct}>
            <img src={product.image} alt={product.name} style={{width:"10px", height: "10px"}}/>
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