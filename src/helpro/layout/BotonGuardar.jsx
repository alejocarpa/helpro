import './BotonGuardar.css';
import { FaUpload } from "react-icons/fa";

export const BotonGuardar = () => {
    return (
        <div className="boton-guardar-container">
            <div className="boton-guardar-elements">
                <div className="boton-guardar-texto">
                    Publicar
                </div>
                <div className="boton-guardar-icono">
                    <FaUpload />
                </div>
            </div>
        </div>
    )
}
