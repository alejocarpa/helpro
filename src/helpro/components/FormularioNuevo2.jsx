import './FormularioNuevo2.css';
import { BotonAtras, BotonSiguiente, BotonSubir } from '../layout';
import { FotoCargada } from './FotoCargada';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { agregandoFotosNuevas, agregandoNuevoProducto } from '../../store/helpro/helproSlice';

export const FormularioNuevo2 = ({ activarFomulario1, activarFormulario2, activarFormulario3, clickBotonAtras, completoFormulario2, totalImagenes, setTotalImagenes, formState }) => {

    const dispatch = useDispatch();

    const botonAtras = () => {
        activarFomulario1(true);
        activarFormulario2(false);
        clickBotonAtras(true);
    }

    const botonSiguiente = () => {
        activarFormulario2(false);
        activarFormulario3(true);
        clickBotonAtras(false);
        completoFormulario2(true);
    }

    const { fotosNuevas } = useSelector( state => state.helpro );
    const fileInputRef = useRef();
    const [imagenesCargadas, setImagenesCargadas] = useState([]);

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;
        const archivos = target.files;
        setImagenesCargadas( archivos );

        for (let i = 0 ; i < archivos.length; i++) {
            dispatch( agregandoFotosNuevas( { fotoURL: URL.createObjectURL(archivos[i]), posicion: i + totalImagenes.length } ) );
        }
        dispatch( agregandoNuevoProducto(formState) );
        
    }
    
    return (
        <div className="formulario-nuevo2-container">
            <div className="formulario-nuevo2-elements">
                <div className="formulario-nuevo2-bloque">
                    <div className="formulario-nuevo2-file">
                        <input 
                            className="formulario-nuevo2-file-input" 
                            type="file" 
                            accept=".png, .jpg, .jpeg"
                            multiple
                            onChange={ onFileInputChange }
                            ref={ fileInputRef }
                        />
                        <FotoCargada 
                            fotosNuevas={ fotosNuevas }
                            onFileInputChange = { onFileInputChange }
                            imagenesCargadas = { imagenesCargadas }
                            totalImagenes = { totalImagenes }
                            setTotalImagenes = { setTotalImagenes }
                        />
                    </div>
                    <div className="formulario-nuevo2-contenedor-boton">
                        <div className="formulario-nuevo2-contenedor-boton-subir" 
                            onClick = { () => fileInputRef.current.click() }
                        >
                            <BotonSubir />
                        </div>
                    </div>
                    <div className="formulario-nuevo2-contenedor-botones">
                        <div className="formulario-nuevo2-contenedor-boton-atras" onClick={ botonAtras }>
                            <BotonAtras />
                        </div>
                        <div className="formulario-nuevo2-contenedor-boton-siguiente" onClick={ botonSiguiente }>
                            <BotonSiguiente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
