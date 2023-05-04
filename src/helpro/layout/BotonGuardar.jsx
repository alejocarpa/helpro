import { useSelector } from 'react-redux';
import './BotonGuardar.css';
import { FaUpload } from "react-icons/fa";
import { Spinner } from 'react-bootstrap';

export const BotonGuardar = () => {

    const { guardandoNuevoProducto } = useSelector( state => state.helpro );

    return (
        <div className="boton-guardar-container">
            <div className="boton-guardar-elements">
                {
                    guardandoNuevoProducto
                    ?
                    <div className="boton-guardar-spinner">
                        <Spinner size="sm" animation="border" variant="light" />
                    </div>
                    :
                    <>
                        <div className="boton-guardar-texto">
                            Publicar
                        </div>
                        <div className="boton-guardar-icono">
                            <FaUpload />
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}
