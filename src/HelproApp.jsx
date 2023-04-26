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

    const clickedElement = (e) => {
        dispatch( clickingElement( e.target.outerHTML ) );
    }

    const { pathname } = useLocation();

    useEffect(() => {
        dispatch( startLoginWithToken({ tokenUser }) );
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
