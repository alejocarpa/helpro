import './BotonSubir.css';
import { HiUpload } from "react-icons/hi";

export const BotonSubir = () => {
    return (
        <div className="boton-subir-container">
            <div className="boton-subir-elements">
                <div className="boton-subir-texto">
                    Cargar Imagen
                </div>
                <div className="boton-subir-icono">
                    <HiUpload />
                </div>
            </div>
        </div>
    )
}
