import { useSelector } from 'react-redux';
import { BotonAtras, BotonSiguiente } from '../layout';
import { CalificacionComponent } from './';
import './FormularioNuevo3.css';
import { useEffect, useState } from 'react';

export const FormularioNuevo3 = ({ 
    activarFormulario2, 
    activarFormulario3, 
    activarFormulario4, 
    clickBotonAtras, 
    completoFormulario3, 
    completoFormulario4, 
    comentario, 
    onInputChange,
    formState,
    setValidarFormulario3
 }) => {

    const { nuevaCalificacion } = useSelector(state => state.helpro);
    const [validacionEstrellas, setValidacionEstrellas] = useState(false);
    const [validacionComentario, setValidacionComentario] = useState(false);
    //console.log(nuevaCalificacion)

    const botonAtras = () => {
        activarFormulario2(true);
        activarFormulario3(false);
        clickBotonAtras(true);
    }

    const botonSiguiente = () => {

        if( !!nuevaCalificacion?.calificacion === false ){
            setValidacionEstrellas(true);
            completoFormulario3(false);
            return;
        }

        if( comentario === "" ){
            setValidacionComentario(true);
            completoFormulario3(false);
            return;
        }

        activarFormulario3(false);
        activarFormulario4(true);
        clickBotonAtras(false);
        completoFormulario3(true);
        completoFormulario4(true);
    }

    useEffect(() => {
        if( nuevaCalificacion?.calificacion > 0 ){
            setValidacionEstrellas(false);
            completoFormulario3(true);
        }else{
            completoFormulario3(false);
        }
    }, [nuevaCalificacion]);

    useEffect(() => {
        if( comentario !== '' ){
            setValidacionComentario(false);
            completoFormulario3(true);
        }else{
            completoFormulario3(false);
        }
    }, [comentario]);
    

    return (
        <div className="formulario-nuevo3-container">
            <div className="formulario-nuevo3-elements">
                <div className="formulario-nuevo3-bloque">
                    <div className="formulario-nuevo3-estrellas">
                        <CalificacionComponent nuevaCalificacion={ nuevaCalificacion } formState={ formState } />
                    </div>
                    { validacionEstrellas ? <div className="formulario-nuevo3-validacion">Debes calificar al menos con 1 estrella</div> : "" }
                    <div className="formulario-nuevo3-texto">
                        <div className="formulario-nuevo3-titulo">
                            Comentario
                        </div>
                        <div className="formulario-nuevo3-input">
                            <textarea 
                                className={ validacionComentario ? "formulario-nuevo3-textarea-vacio"  : "formulario-nuevo3-textarea"  }
                                placeholder="Recuerda que tu comentario es muy importante para la comunidad, por eso te invito a hacerlo de forma objetiva y real. Se parte de la cultura Helpro."
                                name="comentario"
                                value={ comentario }
                                onChange={ onInputChange }
                            />
                        </div>
                        { validacionComentario ? <div className="formulario-nuevo3-validacion-comentario">Debes aportar un comentario</div> : "" }
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
