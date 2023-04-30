import { useDispatch } from "react-redux";
import { BotonAgregar } from "./helpro/components";
import { AppRouter } from "./router/AppRouter";
import { clickingElement } from "./store/helpro";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { startLoginWithToken } from "./store/auth";


export const HelproApp = () => {

    const dispatch = useDispatch();
    const tokenUser = JSON.parse( localStorage.getItem('token') );
    const tokenAnterior = JSON.parse( localStorage.getItem('tokenAnterior') );

    const clickedElement = (e) => {
        dispatch( clickingElement( e.target.outerHTML ) );
    }

    const { pathname } = useLocation();

    useEffect(() => {
        dispatch( startLoginWithToken({ tokenUser }) );
    }, [tokenUser]);

    useEffect(() => {
        if( tokenAnterior !== tokenUser ){
            const nuevoProductoStorage = {
                nombre: '',
                categoria: '', 
                tipo: '', 
                marca: '', 
                comentario: '',
                country: '',
                city: '',
                otroTipo: ''
            }
            localStorage.setItem('nuevoProducto', JSON.stringify( nuevoProductoStorage ) );
            if( tokenUser ){
                localStorage.setItem('tokenAnterior', JSON.stringify( tokenUser ) );
            }
        }
    }, [tokenUser]);
    
    

    return (
        <div onClick={ clickedElement }>
            <AppRouter />

            {
                pathname !== '/auth/login' && pathname !== '/auth/register' && pathname !== '/auth/recover_password' ? <BotonAgregar /> : ""
            }
        </div>
    )
}
