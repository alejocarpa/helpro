import './BotonSiguiente.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const BotonSiguiente = () => {
    return (
        <div className="boton-siguiente-container">
            <div className="boton-siguiente-elements">
                <div className="boton-siguiente-texto">
                    Siguiente
                </div>
                <div className="boton-siguiente-icono">
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    )
}
