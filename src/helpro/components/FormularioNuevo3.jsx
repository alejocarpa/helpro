import { BotonAtras, BotonSiguiente } from '../layout';
import { CalificacionComponent } from './';
import './FormularioNuevo3.css';

export const FormularioNuevo3 = ({ activarFormulario2, activarFormulario3, clickBotonAtras }) => {

    const botonAtras = () => {
        activarFormulario2(true);
        activarFormulario3(false);
        clickBotonAtras(true);
    }

    const botonSiguiente = () => {
        
    }

    return (
        <div className="formulario-nuevo3-container">
            <div className="formulario-nuevo3-elements">
                <div className="formulario-nuevo3-bloque">
                    <div className="formulario-nuevo3-estrellas">
                        <CalificacionComponent />
                    </div>
                    <div className="formulario-nuevo3-texto">
                        <div className="formulario-nuevo3-titulo">
                            Comentario
                        </div>
                        <div className="formulario-nuevo3-input">
                            <textarea 
                                className="formulario-nuevo3-textarea" 
                                placeholder="Recuerda que tu comentario es muy importante para la comunidad, por eso te invito a hacerlo de forma objetiva y real. Se parte de la cultura Helpro."
                            />
                        </div>
                        <div className="formulario-nuevo3-contenedor-botones">
                            <div className="formulario-nuevo3-contenedor-boton-atras" onClick={ botonAtras }>
                                <BotonAtras />
                            </div>
                            <div className="formulario-nuevo3-contenedor-boton-siguiente" onClick={ botonSiguiente }>
                                <BotonSiguiente />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
