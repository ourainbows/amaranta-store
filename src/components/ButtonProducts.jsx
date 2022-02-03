import { Link } from "react-router-dom"
import styles from "../styles/buttonProducts.module.css"


function ButtonProdcuts() {
    return (
        <div className={styles.containerButtonProducts}>
            <Link className={styles.buttonProducts} to="productos">Productos</Link>  
        </div>
    )
}

export {ButtonProdcuts}