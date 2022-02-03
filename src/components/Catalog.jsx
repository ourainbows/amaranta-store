import { dataProducts } from "../data"
import { Product } from "./Product"

function Catalog() {
    return (
        <>
            {dataProducts.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </>
    )
}

export { Catalog }