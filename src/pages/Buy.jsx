import { useContext, useState } from "react"
import { BuyProduct } from "../components/BuyProduct"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/buy.module.css"

function Buy() {
    const [inputs, setInputs] = useState({})
    const { cartProducts, totalPrice } = useContext(ProductsContext)
    const [url, setUrl] = useState("")
    
    const message = () => {
        let text = "https://wa.me/573156595651?text="
        text += `Buenas tardes mi nombre es ${inputs.user ? inputs.user : ""}, te contacto desde la tienda en linea Amaranta ya que estoy interesad@ en los siguientes productos: \n\n`
        cartProducts.forEach(product => {
            text += `${product.name}\n`
            text += `Cantidad: ${product.quantity}\n`
            text += `Talla: ${product.height}\n`
            text += `Colors:  ${product.color.replace("#", "")}\n`
        })
        text += `\nAdicionalmente tengo los siguientes comentarios: ${inputs.comments ? inputs.comments : ""}\n`
        text += `\nEl valor total de mi compra es: $${totalPrice.toFixed(3)}`
        setUrl(encodeURI(text))
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <main className={styles.mainBuy}>
            <h2>Tu orden</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name="user"
                    type="text"
                    placeholder="Nombres y Apellidos"
                    onChange={handleChange}
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Dirección"
                    onChange={handleChange}
                />
                <textarea
                    name="comments"
                    placeholder="Comentarios o requerimientos adicionales"
                    onChange={handleChange}
                />
                {/* <input type="submit" /> */}
            </form>
            <div className={styles.productsForm}>
                {cartProducts.map((product, i) => (
                    <BuyProduct product={product} key={i} />
                ))}
            </div>
            <hr className={styles.bigDvider} />
            <div className={styles.price}>
                <span className={styles.priceText}>Total</span>
                <span className={styles.priceNumber}>{totalPrice.toFixed(3)}</span>
            </div>
            <div className={styles.btnBuy}>
                <a href={url} onClick={message} target="_blank" rel="noreferrer">COMPRAR</a>
            </div>
            <p className={styles.pInfo}>* Serás redireccionado a Whatsapp para terminar tu compra</p>
        </main>
    )
}

export { Buy }