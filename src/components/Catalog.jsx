import { Product } from "./Product"
import styles from "../styles/catalog.module.css"


function Catalog({ dataProducts }) {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.containerCatalog}>

                {dataProducts.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    )
}

export { Catalog }