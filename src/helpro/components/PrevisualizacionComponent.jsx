import { useEffect, useState } from 'react';
import './PrevisualizacionComponent.css';
import { ListGroup } from 'react-bootstrap';
import { MostrarCalificacion } from './';

export const PrevisualizacionComponent = ({ nuevoProducto, fotosNuevas, nuevaCalificacion }) => {

    const [imagenAmpliada, setImagenAmpliada] = useState( fotosNuevas[0]?.fotoURL );

    const cambiarImagen = (imagenURL) => {
        setImagenAmpliada(imagenURL);
    }

    useEffect(() => {
        setImagenAmpliada(fotosNuevas[0]?.fotoURL);
    }, [fotosNuevas[0]?.fotoURL])

    return (
        <div className="previsualizacion-container">
            <div className="previsualizacion-elements">
                <div className="previsualizacion-bloque">
                    <div className="previsualizacion-imagenes">
                        <div className="previsualizacion-imagen-ampliada">
                            <img
                                className="previsualizacion-imagen-img-ampliada"
                                src={imagenAmpliada}
                                alt={nuevoProducto?.nombre}
                            />
                        </div>
                        <div className="previsualizacion-imagen-diminuta">
                            {
                                fotosNuevas.map((foto, id) => {
                                    if( foto.fotoURL !== "" ){
                                        return <div
                                            key={id}
                                            className="previsualizacion-diminuta-img"
                                            style={{ marginLeft: '15px' }}
                                            onClick={() => cambiarImagen(foto.fotoURL)}
                                        >
                                            <img
                                                className="previsualizacion-imagen-img-diminuta"
                                                src={foto.fotoURL}
                                                alt={foto.fotoURL}
                                            />
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="previsualizacion-detalle">
                        <div className="previsualizacion-titulo-nombre">
                            {nuevoProducto?.nombre}
                        </div>
                        <div className="previsualizacion-tabla">
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Categoria:</b> {nuevoProducto?.categoria}</ListGroup.Item>
                                <ListGroup.Item><b>Tipo:</b> {nuevoProducto?.tipo}</ListGroup.Item>
                                <ListGroup.Item><b>Marca:</b> {nuevoProducto?.marca}</ListGroup.Item>
                                <ListGroup.Item><b>Ubicacion:</b> {nuevoProducto?.ubicacion}</ListGroup.Item>
                                <ListGroup.Item><b>Calificacion</b><MostrarCalificacion calificacion={nuevaCalificacion?.calificacion} /></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
