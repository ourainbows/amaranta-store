import { Catalog } from "../components/Catalog"
import styles from "../styles/products.module.css"
import { dataProducts } from "../data"
import { useState } from "react"

function Products() {
    const [data, setData] = useState(dataProducts)
    const [currentCategory, setCurrentCategory] = useState(0)
    const onFilterProduct = (category => {
        setData((category >= 1) ? dataProducts.filter(product => product.category === category) : dataProducts)
        setCurrentCategory(category)
    }
    )

    return (
        <main className={styles.mainProducts}>
            <h2 className={styles.categoriesTittle}>Categorias</h2>
            <div className={styles.btnsContainer}>
                <button
                    className={`
                        ${styles.btnc} , 
                        ${currentCategory === 0 ? styles.btncActive : styles.btncInactive}
                    `}
                    onClick={() => { onFilterProduct(0) }}>Todos</button>
                <button
                    className={`
                        ${styles.btnc} , 
                        ${currentCategory === 1 ? styles.btncActive : styles.btncInactive}
                    `}
                    onClick={() => { onFilterProduct(1) }}>Prendas</button>
                <button
                    className={`
                        ${styles.btnc} , 
                        ${currentCategory === 2 ? styles.btncActive : styles.btncInactive}
                    `}
                    onClick={() => { onFilterProduct(2) }}>Accesorios</button>
            </div>

            <Catalog
                dataProducts={data}
            />
        </main>
    )
}

export { Products }