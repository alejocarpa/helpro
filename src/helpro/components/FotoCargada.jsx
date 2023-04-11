import { BsCloudUploadFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import './FotoCargada.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { eliminandoFotosNuevas } from "../../store/helpro/helproSlice";

export const FotoCargada = ({ fotosNuevas = [], onFileInputChange, imagenesCargadas = [], totalImagenes, setTotalImagenes }) => {

    const dispatch = useDispatch();

    const eliminarFoto = ( posicion ) => {
        const nuevoArreglo = totalImagenes.filter( (foto, index) => index !== posicion);
        setTotalImagenes([ ...nuevoArreglo ]);
        dispatch( eliminandoFotosNuevas( {posicion: posicion} ) );
    }

    useEffect(() => {
        if(totalImagenes.length <= (fotosNuevas.length-1)){
            setTotalImagenes([ ...totalImagenes, ...imagenesCargadas ]);
        }
    }, [imagenesCargadas]);
    
    return (
        <>
            {
                fotosNuevas.map((foto, index) => (
                    <div className="formulario-nuevo2-contenedor-imagenes" key={ index }>
                        <div className="formulario-nuevo2-imagen-bloque">
                            <div className="formulario-nuevo2-foto animate__animated animate__jackInTheBox">
                                <input 
                                    className="formulario-nuevo2-foto-input" 
                                    type="file"
                                    accept=".png, .jpg, .jpeg" 
                                    multiple
                                    onChange={ onFileInputChange }
                                />
                                {
                                    totalImagenes[index] 
                                    ? <img src={ URL.createObjectURL(totalImagenes[index]) } className="formulario-nuevo2-foto-previsualizacion" /> 
                                    : <BsCloudUploadFill />
                                }
                                
                                
                            </div>
                            <div className="formulario-nuevo2-boton-cerrar">
                                <div 
                                    className="formulario-nuevo2-boton-cerrar-circulo"
                                    onClick={ () => eliminarFoto( index ) }
                                >
                                    <MdDeleteForever />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
