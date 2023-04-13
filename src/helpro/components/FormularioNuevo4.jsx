import { PrevisualizacionComponent } from './';
import './FormularioNuevo4.css';
import { BotonAtras, BotonSiguiente } from '../layout';
import { useSelector } from 'react-redux';

export const FormularioNuevo4 = ({ activarFormulario3, activarFormulario4, clickBotonAtras, fotosNuevas, nuevoComentario }) => {

    const { nuevoProducto, nuevaCalificacion } = useSelector(state => state.helpro);

    const botonAtras = () => {
        activarFormulario3(true);
        activarFormulario4(false);
        clickBotonAtras(true);
    }

    const botonSiguiente = () => {

    }

    return (
        <div className="formulario-nuevo4-container">
            <div className="formulario-nuevo4-elements">
                <div className="formulario-nuevo4-bloque">
                    <div className="formulario-nuevo4-detalle">
                        <PrevisualizacionComponent nuevoProducto={ nuevoProducto } fotosNuevas={ fotosNuevas } nuevaCalificacion={ nuevaCalificacion } />
                    </div>
                    <div className="formulario-nuevo4-botones">
                        <div className="formulario-nuevo4-contenedor-boton-atras" onClick={ botonAtras }>
                            <BotonAtras />
                        </div>
                        <div className="formulario-nuevo4-contenedor-boton-siguiente" onClick={ botonSiguiente }>
                            <BotonSiguiente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
