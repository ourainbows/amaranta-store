import { useState } from "react"
import styles from "../styles/cartProduct.module.css"
import { TrashSvg } from "./TrashSvg"

function CartProduct({ product, setCartProducts, cartProducts, id }) {
    console.log(cartProducts[id].quantity)

    const [quantity, setQuantity] = useState(1)

    const onDelete = id => {
        setCartProducts(cartProducts.filter((item, i) => (
            i !== id
        )))
    }
    const onAddQuantity = () => {
        const items = [...cartProducts]
        items[id].quantity++ 
        setCartProducts(items)
        setQuantity(quantity + 1)
    }
    const onLessQuantity = (id) => {
        const items = [...cartProducts]
        items[id].quantity--
        setCartProducts(items)
        setQuantity(quantity - 1)
    }

    return (
        <>
            <div className={styles.cardProduct}>
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                    <div>
                        {product.colors.map(color => (
                            <label key={color}>
                                <input
                                    className={styles.radioButton}
                                    type="radio"
                                    name={product.id}
                                />
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <select> {product.size.map(size => (
                        <option key={product.id + size}>{size}</option>
                         ))}
                    </select>
                </div>
                <div onClick={() => { onDelete(id) }}>
                    <TrashSvg />
                </div>
                <div>
                    <button onClick={onAddQuantity}>+</button>
                    <div>{quantity}</div>
                    <button disabled={quantity === 1} onClick={() => onLessQuantity(id)}>-</button>
                </div>
            </div>
        </>
    )
}

export { CartProduct }