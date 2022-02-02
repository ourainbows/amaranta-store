import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Navbar } from "../components/Navbar"

function RoutesContainer() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { RoutesContainer }