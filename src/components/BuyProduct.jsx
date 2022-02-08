import styles from "../styles/buyProduct.module.css"

function BuyProduct({ product }) {
    return (
        <>
        <div className={styles.productForm}>
            <img src={product.image} alt={product.name}/>
            <div className={styles.productInfo}>
                <h3 className={styles.productFormName}>{product.name}</h3>
                <span className={styles.productFormPrice}>{product.value.toFixed(3)}</span>
                <div className={styles.productFormValues}>
                    <span className={styles.productFormValuesQuantity}>Cantidad: {product.quantity}</span>
                    <span className={styles.productFormValuesColor}>Color:
                            <div className={styles.valuesColor} style={{ backgroundColor: product.color }}></div>
                    </span>
                    <span className={styles.productFormValuesHeigth}>Talla { product.height}</span>
                </div>
            </div>
        </div>
            <hr className={styles.productDivider} />
        </>
    )
}
export { BuyProduct }