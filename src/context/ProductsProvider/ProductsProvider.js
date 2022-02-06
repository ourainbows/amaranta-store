import { createContext, useState } from "react"

const ProductsContext = createContext()

function ProductsProvider(props) {
    const [cartProducts, setCartProducts] = useState([])
    return (
        <ProductsContext.Provider value={{
            cartProducts,
            setCartProducts,
        }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}
export { ProductsProvider, ProductsContext }