import { Catalog } from "../components/Catalog"
import styles from "../styles/products.module.css"

function Products() {
    return (
        <main className={styles.mainProducts}>
            <h2>Categorias</h2>
            <div>
                <button>Todos</button>
                <button>Categoria 1</button>
                <button>Categoria 2</button>
            </div>

            <Catalog />
        </main>
    )
}

export { Products }