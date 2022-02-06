import { useState } from "react"
import styles from "../styles/cartProduct.module.css"
import { TrashSvg } from "./TrashSvg"

function CartProduct({ product, setCartProducts, cartProducts, id }) {
    console.log(cartProducts)
    product["quantity"] = 1
    product["color"] = product.colors[0]
    product["height"] = product.size[0]

    const [quantity, setQuantity] = useState(1)

    const onDelete = id => {
        setCartProducts(cartProducts.filter((item, i) => (
            i !== id
        )))
    }

    const onAddQuantity = (id) => {
        setQuantity(quantity + 1)
    }
    const onLessQuantity = (id) => {
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
                    <button onClick={() => onAddQuantity(id)}>+</button>
                    <div>{quantity}</div>
                    <button disabled={quantity === 1} onClick={() => onLessQuantity(id)}>-</button>
                </div>
            </div>
        </>
    )
}

export { CartProduct }