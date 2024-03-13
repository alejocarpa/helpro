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
            <Route path="helpro/home" element={ <HomePage /> } />
            <Route path="helpro/item/:idItem" element={ <ItemPage /> } />
            <Route path="helpro/search/:nombreItem/:tipoConsulta" element={ <SearchPage /> } />
            <Route path="helpro/loading/:nombreItem/:tipoConsulta" element={ <CargandoPage /> } />
            
            { 
                status === 'authenticated' 
                ? 
                <>
                    <Route path="helpro/nuevo" element={ <NuevoProducto /> } />
                    <Route path="helpro/configuracion" element={ <ConfiguracionPage /> } />
                </>
                : 
                "" 
            }

            <Route path="/*" element={ <Navigate to="helpro/home" /> } />
        </Routes>
    )
}
