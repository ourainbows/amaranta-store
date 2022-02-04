import { dataProducts } from "../data"
import { Product } from "./Product"
import styles from "../styles/catalog.module.css"


function Catalog() {
    return (
        <main className={styles.containerCatalog}>
            {dataProducts.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </main>
    )
}

export { Catalog }