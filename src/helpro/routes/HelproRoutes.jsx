import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ItemPage, SearchPage, CargandoPage, NuevoProducto } from "../pages";

export const HelproRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={ <HomePage /> } />
            <Route path="item/:idItem" element={ <ItemPage /> } />
            <Route path="search/:nombreItem" element={ <SearchPage /> } />
            <Route path="loading/:nombreItem" element={ <CargandoPage /> } />
            <Route path="nuevo" element={ <NuevoProducto /> } />

            <Route path="/*" element={ <Navigate to="home" /> } />
        </Routes>
    )
}
