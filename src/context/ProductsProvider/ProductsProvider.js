import { createContext, useState } from "react"

const ProductsContext = createContext()

function ProductsProvider(props) {
    const [cartProducts, setCartProducts] = useState([])
    const totalPrice = cartProducts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity, 0
    )
    return (
        <ProductsContext.Provider value={{
            cartProducts,
            setCartProducts,
            totalPrice
        }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}
export { ProductsProvider, ProductsContext }