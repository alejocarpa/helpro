import { BsCloudUploadFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import './FotoCargada.css';
import { useEffect, useState } from "react";

export const FotoCargada = ({ fotosNuevas = [], onFileInputChange, imagenesCargadas = [] }) => {

    const [totalImagenes, setTotalImagenes] = useState([]);

    const eliminarFoto = ( posicion ) => {
        const nuevoArreglo = totalImagenes.filter( (foto, index) => index !== posicion);
        setTotalImagenes([ ...nuevoArreglo ]);
    }

    useEffect(() => {
        if(totalImagenes.length <= 3){
            setTotalImagenes([ ...totalImagenes, ...imagenesCargadas ]);
        }
    }, [imagenesCargadas]);
    
    return (
        <>
            {
                fotosNuevas.map((foto, index) => (
                    <div className="formulario-nuevo2-contenedor-imagenes" key={ index }>
                        <div className="formulario-nuevo2-imagen-bloque">
                            <div className="formulario-nuevo2-foto">
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
