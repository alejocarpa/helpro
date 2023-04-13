import { useDispatch } from "react-redux";
import { BotonAgregar } from "./helpro/components";
import { AppRouter } from "./router/AppRouter";
import { clickingElement } from "./store/helpro";
import { useLocation } from "react-router-dom";

export const HelproApp = () => {

    const dispatch = useDispatch();

    const clickedElement = (e) => {
        dispatch( clickingElement( e.target.outerHTML ) );
    }

    const { pathname } = useLocation();

    return (
        <div onClick={ clickedElement }>
            <AppRouter />

            {
                pathname !== '/auth/login' && pathname !== '/auth/register' && pathname !== '/auth/recover_password' ? <BotonAgregar /> : ""
            }
        </div>
    )
}
