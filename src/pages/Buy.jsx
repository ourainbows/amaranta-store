import { useState } from "react"
import { BuyProduct } from "../components/BuyProduct"
/* import styles from "../styles/buy.module.css" */

function Buy() {
    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <main style={{ marginTop: "100px" }}>
            <h2>Tu orden</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="user"
                    type="text"
                    placeholder="Nombres y Apellidos"
                    onChange={handleChange}
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Direccion"
                    onChange={handleChange}
                />
                <textarea
                    name="comments"
                    placeholder="Comentarios o requerimientos adicionales"
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </main>
    )
}

export { Buy }