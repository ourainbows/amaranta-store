import { useState } from "react"
import styles from "../styles/cartProduct.module.css"
import { TrashSvg } from "./TrashSvg"

function CartProduct({ product, setCartProducts, cartProducts, id }) {
    const [quantity, setQuantity] = useState(product.quantity)
    const [currentlyColor, setCurrentlyColor] = useState(product.color)

    const onDelete = id => {
        setCartProducts(cartProducts.filter((item, i) => (
            i !== id
        )))
    }
    const onAddQuantity = () => {
        const items = [...cartProducts]
        const amount = items[id].quantity + 1 
        items[id].quantity = amount
        items[id].value = amount * items[id].price
        setCartProducts(items)
        setQuantity(quantity + 1)
    }
    const onLessQuantity = (id) => {
        const items = [...cartProducts]
        const amount = items[id].quantity - 1
        items[id].quantity = amount
        items[id].value = amount * items[id].price
        setCartProducts(items)
        setQuantity(quantity - 1)
    }
    const handleSelect = (event) => {
        const items = [...cartProducts]
        items[id].height = event.target.value
        setCartProducts(items)
    }
    const onChangeColor = (color) => {
        const items = [...cartProducts]
        items[id].color = color
        setCartProducts(items)
        setCurrentlyColor(color)
    }

    return (
        <>
            <div className={styles.cardProduct}>
                <div className={styles.cardProductSection}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.cardProductInfo}>
                        <h3>{product.name}</h3>
                        <p><span>$</span>{product.price.toFixed(3)}</p>
                        <div className={styles.cardProductColors}>
                            {product.colors.map(color => (
                                <button
                                    onClick={() => onChangeColor(color)}
                                    className={styles.color}
                                    key={color}
                                    style={
                                        {
                                            backgroundColor: currentlyColor === color ? color : "#F2F2F2",
                                            borderColor: color
                                        }}>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.cardProductValues}>
                    <div className={styles.cardProductHeigth}>
                        <select
                            className={styles.cardProductSelect} onChange={handleSelect}> {product.size.map(size => (
                            <option value={size} key={product.id + size}>{size}</option>
                        ))}
                        </select>
                    </div>
                    <div className={styles.cardProductQuantity}>
                        <button disabled={quantity === 1} onClick={() => onLessQuantity(id)}>-</button>
                        <div>{quantity}</div>
                        <button onClick={onAddQuantity}>+</button>
                       
                    </div>
                </div>
                <div className={styles.cardProductTrash} onClick={() => { onDelete(id) }}>
                    <TrashSvg />
                </div>
            </div>
        </>
    )
}

export { CartProduct }