import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './DetalleItem.css';
import { MostrarCalificacion } from './MostrarCalificacion';
import { BarraProgreso } from './BarraProgreso';
import { BsStarFill } from "react-icons/bs";

export const DetalleItem = ({ item = [], fotos = [], coments = [] }) => {

    const [item1] = item;
    const [imagenAmpliada, setImagenAmpliada] = useState(item1.ImagenURL);
    const [filtroComentario, setFiltroComentario] = useState(coments);

    const mostrarTodosComentarios = () => {
        setFiltroComentario(coments);
    }

    const filtrarComentarios = ( estrellas ) => {
        const newFilter = coments.filter( item => 
            item.calificacion === estrellas
        )
        setFiltroComentario( newFilter );
    }

    const cambiarImagen = (imagenURL) => {
        setImagenAmpliada(imagenURL);
    }

    const calcularPorcentajeComentarios = ( estrellas ) => {
        const newFilter = coments.filter( item => 
            item.calificacion === estrellas
        )
        
        const calculo = ( newFilter.length * 100 ) / coments.length;

        return calculo;
    }

    let ubicacionComent = true;

    return (
        <>
            <div className="detalle-item-container">
                <div className="detalle-item-elements">
                    <div className="detalle-item-secciones animate__animated animate__backInLeft">
                        <div className="detalle-item-imagenes">
                            <div className="detalle-item-imagen-ampliada">
                                <img
                                    className="detalle-item-imagen-img-ampliada"
                                    src={imagenAmpliada}
                                    alt={item1.nombre}
                                />
                            </div>
                            <div className="detalle-item-imagen-diminuta">
                                <div
                                    className="detalle-item-diminuta-img"
                                    onClick={() => cambiarImagen(item1.ImagenURL)}
                                >
                                    <img
                                        className="detalle-item-imagen-img-diminuta"
                                        src={item1.ImagenURL}
                                        alt={item1.nombre}
                                    />
                                </div>
                                {
                                    fotos.map((foto, id) => (
                                        <div
                                            key={id}
                                            className="detalle-item-diminuta-img"
                                            style={{ marginLeft: '15px' }}
                                            onClick={() => cambiarImagen(foto.fotoURL)}
                                        >
                                            <img
                                                className="detalle-item-imagen-img-diminuta"
                                                src={foto.fotoURL}
                                                alt={foto.fotoURL}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="detalle-item-detalle">
                            <div className="detalle-item-titulo-nombre">
                                {item1.nombre}
                            </div>
                            <div className="detalle-item-tabla">
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>Categoria:</b> {item1.categoria}</ListGroup.Item>
                                    <ListGroup.Item><b>Tipo:</b> {item1.tipo}</ListGroup.Item>
                                    <ListGroup.Item><b>Marca:</b> {item1.marca}</ListGroup.Item>
                                    <ListGroup.Item><b>Ubicacion:</b> {item1.ubicacion}</ListGroup.Item>
                                    <ListGroup.Item><b>Calificacion</b><MostrarCalificacion calificacion={item1.calificacion} /></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>

                    </div>
                    <div className="detalle-item-calificacion-total">
                        <div className="detalle-item-calificacion-total-bloque">
                            <div className="detalle-item-calificacion-encabezado" onClick={ mostrarTodosComentarios }>
                                <div className="detalle-item-calificacion-num">
                                    { item1.calificacion }
                                </div>
                                <div className="detalle-item-calificacion-stars-bloque">
                                    <div className="detalle-item-calificacion-total">
                                        { coments.length } calificaciones en total
                                    </div>
                                    <div className="detalle-item-calificacion-stars">
                                        <MostrarCalificacion calificacion={item1.calificacion} />
                                    </div>
                                </div>
                            </div>
                            <div className="detalle-item-calificacion-contenido">
                                <div 
                                    className="detalle-item-calificacion-numero-de-estrellas" 
                                    onClick={ () => filtrarComentarios(5) }
                                >
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ calcularPorcentajeComentarios(5) }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        5 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(4) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ calcularPorcentajeComentarios(4) }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        4 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(3) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ calcularPorcentajeComentarios(3) }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        3 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(2) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ calcularPorcentajeComentarios(2) }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        2 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(1) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ calcularPorcentajeComentarios(1) }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        1 <BsStarFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detalle-item-coments">
                        <div className="detalle-item-coments-titulo">
                            Comentarios
                        </div>
                        {
                            filtroComentario.map((coment, id) => {
                                ubicacionComent = !ubicacionComent;

                                return <div className={ ubicacionComent ? "detalle-item-comentario-right" : "detalle-item-comentario-left" } key={ id }>
                                    <div className="detalle-item-comentario-user">
                                        <div className="detalle-item-user-circulo">
                                            { coment.nombreUsuario[0] }
                                        </div>
                                    </div>
                                    <div className="detalle-item-comentario-bloque">
                                        <div className={ ubicacionComent ? "detalle-item-comentario-text-right" : "detalle-item-comentario-text-left" }>
                                            <div className="detalle-item-comentario-nombre-user">
                                                { coment.nombreUsuario }
                                            </div>
                                            <div className="detalle-item-comentario-text-user">
                                                { coment.comentario }
                                            </div>
                                            <div className="detalle-item-comentario-calificacion-user">
                                                <MostrarCalificacion calificacion={coment.calificacion} />
                                            </div>
                                        </div>
                                        <div className="detalle-item-comentario-fecha">
                                            { coment.fecha }
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
