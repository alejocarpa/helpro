import './FormularioNuevo2.css';
import { BsCloudUploadFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BotonAtras, BotonSiguiente, BotonSubir } from '../layout';

export const FormularioNuevo2 = ({ activarFomulario1, activarFormulario2, clickBotonAtras }) => {

    const botonAtras = () => {
        activarFomulario1(true);
        activarFormulario2(false);
        clickBotonAtras(true);
    }

    return (
        <div className="formulario-nuevo2-container">
            <div className="formulario-nuevo2-elements">
                <div className="formulario-nuevo2-bloque">
                    <div className="formulario-nuevo2-file">
                        <div className="formulario-nuevo2-contenedor-imagenes">
                            <div className="formulario-nuevo2-imagen-bloque">
                                <div className="formulario-nuevo2-foto">
                                    <BsCloudUploadFill />
                                </div>
                                <div className="formulario-nuevo2-boton-cerrar">
                                    <div className="formulario-nuevo2-boton-cerrar-circulo">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>
                            <div className="formulario-nuevo2-imagen-separador"></div>
                            <div className="formulario-nuevo2-imagen-bloque">
                                <div className="formulario-nuevo2-foto">
                                    <BsCloudUploadFill />
                                </div>
                                <div className="formulario-nuevo2-boton-cerrar">
                                    <div className="formulario-nuevo2-boton-cerrar-circulo">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>
                            <div className="formulario-nuevo2-imagen-separador"></div>
                            <div className="formulario-nuevo2-imagen-bloque">
                                <div className="formulario-nuevo2-foto">
                                    <BsCloudUploadFill />
                                </div>
                                <div className="formulario-nuevo2-boton-cerrar">
                                    <div className="formulario-nuevo2-boton-cerrar-circulo">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>
                            <div className="formulario-nuevo2-imagen-separador"></div>
                            <div className="formulario-nuevo2-imagen-bloque">
                                <div className="formulario-nuevo2-foto">
                                    <BsCloudUploadFill />
                                </div>
                                <div className="formulario-nuevo2-boton-cerrar">
                                    <div className="formulario-nuevo2-boton-cerrar-circulo">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formulario-nuevo2-contenedor-boton">
                        <div className="formulario-nuevo2-contenedor-boton-subir">
                            <BotonSubir />
                        </div>
                    </div>
                    <div className="formulario-nuevo2-contenedor-botones">
                        <div className="formulario-nuevo2-contenedor-boton-atras" onClick={ botonAtras }>
                            <BotonAtras />
                        </div>
                        <div className="formulario-nuevo2-contenedor-boton-siguiente">
                            <BotonSiguiente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
