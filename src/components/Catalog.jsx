import { Product } from "./Product"
import styles from "../styles/catalog.module.css"


function Catalog({dataProducts}) {
    
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