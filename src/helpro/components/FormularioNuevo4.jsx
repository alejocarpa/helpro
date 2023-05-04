import { PrevisualizacionComponent } from './';
import './FormularioNuevo4.css';
import { BotonAtras, BotonGuardar } from '../layout';
import { useSelector } from 'react-redux';

export const FormularioNuevo4 = ({ 
    activarFormulario3, 
    activarFormulario4, 
    clickBotonAtras, 
    fotosNuevas, 
    nuevoComentario,
    publicarNuevoProducto }) => {

    const { nuevoProducto, nuevaCalificacion, guardandoNuevoProducto } = useSelector(state => state.helpro);

    const [ coment ] = nuevoComentario;

    const botonAtras = () => {
        activarFormulario3(true);
        activarFormulario4(false);
        clickBotonAtras(true);
    }

    return (
        <div className="formulario-nuevo4-container">
            <div className="formulario-nuevo4-elements">
                <div className="formulario-nuevo4-bloque">
                    <div className="formulario-nuevo4-detalle">
                        <PrevisualizacionComponent nuevoProducto={ nuevoProducto } fotosNuevas={ fotosNuevas } nuevaCalificacion={ nuevaCalificacion } />
                    </div>
                    <div className="formulario-nuevo4-bloque-comentario">
                        <div className="detalle-item-comentario-user">
                            <div className="detalle-item-user-circulo">
                                { coment.nombreUsuario[0] }
                            </div>
                        </div>
                        <div className="formulario-nuevo4-comentario">
                            <div className="formulario-nuevo4-comentario-text-right">
                                <div className="detalle-item-comentario-nombre-user">
                                    { coment.nombreUsuario+' '+coment.apellidoUsuario }
                                </div>
                                <div className="detalle-item-comentario-text-user">
                                    { coment.comentario }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formulario-nuevo4-botones">
                        <div className="formulario-nuevo4-contenedor-boton-atras" onClick={ botonAtras }>
                            <BotonAtras />
                        </div>
                        <div className="formulario-nuevo4-contenedor-boton-siguiente" onClick={ guardandoNuevoProducto ? ()=>{ } : publicarNuevoProducto }>
                            <BotonGuardar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
