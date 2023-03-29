import './BotonAtras.css';
import { MdOutlineArrowBackIos } from "react-icons/md";

export const BotonAtras = () => {
    return (
        <div className="boton-atras-container">
            <div className="boton-atras-elements">
                <div className="boton-atras-icono">
                    <MdOutlineArrowBackIos />
                </div>
                <div className="boton-atras-texto">
                    Volver
                </div>
            </div>
        </div>
    )
}
