import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { almacenarUrl } from "../../store/helpro/helproSlice";
import { HomePage, ItemPage, SearchPage, CargandoPage, NuevoProducto, ConfiguracionPage } from "../pages";

export const HelproRoutes = () => {

    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const { status } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( almacenarUrl(pathname) );
    }, [pathname])
    


    return (
        <Routes>
            <Route path="home" element={ <HomePage /> } />
            <Route path="item/:idItem" element={ <ItemPage /> } />
            <Route path="search/:nombreItem" element={ <SearchPage /> } />
            <Route path="loading/:nombreItem" element={ <CargandoPage /> } />
            
            { 
                status === 'authenticated' 
                ? 
                <>
                    <Route path="nuevo" element={ <NuevoProducto /> } />
                    <Route path="configuracion" element={ <ConfiguracionPage /> } />
                </>
                : 
                "" 
            }

            <Route path="/*" element={ <Navigate to="home" /> } />
        </Routes>
    )
}
