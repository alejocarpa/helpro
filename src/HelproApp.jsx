import { useDispatch } from "react-redux";
import { BotonAgregar } from "./helpro/components";
import { AppRouter } from "./router/AppRouter";
import { clickingElement } from "./store/helpro";

export const HelproApp = () => {

    const dispatch = useDispatch();

    const clickedElement = (e) => {
        dispatch( clickingElement( e.target.outerHTML ) );
    }

    return (
        <div onClick={ clickedElement }>
            <AppRouter />
            <BotonAgregar />
        </div>
    )
}
