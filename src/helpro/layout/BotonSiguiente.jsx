import './BotonSiguiente.css';
import { MdNavigateNext } from "react-icons/md";

export const BotonSiguiente = () => {
    return (
        <div className="boton-siguiente-container">
            <div className="boton-siguiente-elements">
                <div className="boton-siguiente-texto">
                    Siguiente
                </div>
                <div className="boton-siguiente-icono">
                    <MdNavigateNext />
                </div>
            </div>
        </div>
    )
}
