import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BuyProduct } from "../components/BuyProduct"
import { Modal } from "../components/Modal"
import { ProductsContext } from "../context/ProductsProvider/ProductsProvider"
import styles from "../styles/buy.module.css"


function Buy() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const { cartProducts, totalPrice, setCartProducts, statusModal, setStatusModal } = useContext(ProductsContext)
    const [url, setUrl] = useState("")
    const message = () => {
        let text = "https://wa.me/573156595651?text="
        text += `Bienvenido a Amaranta ${inputs.user ? inputs.user : ""}, hemos visto que estas interesado en los siguientes productos: \n\n`
        cartProducts.forEach(product => {
            text += `${product.name}\n`
            text += `Talla: ${product.height}\n`
            text += `Color:  ${product.color.replace("#", "").slice(0,3)}\n`
            text += `Cantidad: ${product.quantity}\n`
            text += `Precio: ${product.value.toFixed(3)}\n\n`
        })
        text += `\nAdicionalmente tienes los siguientes comentarios: \n${inputs.comments ? inputs.comments : ""}\n`
        text += `\nEl valor total de mi compra es: $${totalPrice.toFixed(3)}`
        text += `\nGracias por confiar en Amaranta, nos podremos en contacto contigo muy pronto para terminar tu compra\n`
        setUrl(encodeURI(text))
        setCartProducts([])
        
        setTimeout(() => {
            navigate("/")
            setStatusModal(false)
        });
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = (event) => {

        event.preventDefault();
    }
    const modalOpen = () => {
        setStatusModal(prevState => !prevState) 
    }
    return (
        <>
            <main className={ `${styles.containerBuy} ${statusModal && styles.containerBuyBlur} `}>
                <div className={styles.mainBuy}>
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
                            placeholder="Comentarios, preguntas y requerimientos adicionales"
                            onChange={handleChange}
                        />
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
                        <button onClick={modalOpen} >COMPRAR</button>
                    </div>
                    <p className={styles.pInfo}>* Serás redireccionado a Whatsapp para terminar tu compra</p>
                </div>
            </main>
            {statusModal && <Modal setStatusModal={setStatusModal} url={url} message={ message}/>}
        </>
    )
}

export { Buy }