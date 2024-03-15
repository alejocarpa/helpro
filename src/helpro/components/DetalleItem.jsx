import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './DetalleItem.css';
import { MostrarCalificacion } from './MostrarCalificacion';
import { BarraProgreso } from './BarraProgreso';
import { BsStarFill } from "react-icons/bs";
import { urlEndpointImages } from '../../helpers';
import { BotonGuardar, BotonLogin } from '../layout';
import { useDispatch, useSelector } from 'react-redux';
import { CalificacionComponent } from './';
import { useForm } from '../../hooks/useForm';
import { agregandoNuevoComentario } from '../../store/helpro/helproSlice';
import { startSavingNewComment } from '../../store/helpro/thunks';
import Swal from 'sweetalert2';

export const DetalleItem = ({ 
    item = [], 
    fotos = [], 
    coments = [], 
    newComments = [],
    setLimiteInicial,
    setLimiteFinal,
    setProductoAbajo,
    limIni,
    limFin,
    proAba,
    totalComments,
    porcentaje1,
    porcentaje2,
    porcentaje3,
    porcentaje4,
    porcentaje5,
    filtrarComentarios,
    obtenerComentarios,
    setFiltro
}) => {
    
    const [item1] = item;
    const [foto1] = fotos;
    const [totalComments1] = totalComments;
    const urlImageAmpliada = `${urlEndpointImages}/${foto1?.link_image}`;
    const [imagenAmpliada, setImagenAmpliada] = useState(urlImageAmpliada);
    const [filtroComentario, setFiltroComentario] = useState([]);
    const { status, uid, displayName, displaySurname, token } = useSelector( state => state.auth );
    const { nuevoComentario, nuevaCalificacion } = useSelector( state => state.helpro );
    const { comentario, onInputChange, setFormState } = useForm( { comentario: nuevoComentario[0]?.comentario } );
    const dispatch = useDispatch();
    
    const mostrarTodosComentarios = () => {
        obtenerComentarios( limIni, limFin );
        setFiltro(0);
        setFiltroComentario(coments);
        setLimiteInicial(limIni);
        setLimiteFinal(limFin);
        setProductoAbajo(proAba);
    }

    const cambiarImagen = (imagenURL) => {
        setImagenAmpliada(imagenURL);
    }

    let ubicacionComent = true;

    const textarea = document.querySelector("textarea");
    const resizeTextarea = (e) => {
        textarea.style.height = "70px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    }

    const id_product = item1?.id_product;
    const saveNewComment = async() => {
        
        if( nuevoComentario[0]?.comentario !== "" && nuevaCalificacion?.calificacion !== null ){
            
            const { mensajeRespuesta, estadoRespuesta } = await dispatch( startSavingNewComment({ id_product, uid, nuevoComentario, nuevaCalificacion, token }) )

            if( estadoRespuesta ){
                Swal.fire({
                    icon: 'success',
                    title: mensajeRespuesta,
                    showConfirmButton: false,
                    timer: 2500
                });
                setFormState({ comentario: '' });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: mensajeRespuesta,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Se debe ingresar un comentario y una calificacion',
                showConfirmButton: false,
                timer: 2500
            });
        }

    }

    useEffect(() => {
        setImagenAmpliada(urlImageAmpliada);
    }, [urlImageAmpliada]);

    useEffect(() => {
        setFiltroComentario([ ...coments ]);
    }, [coments]);

    useEffect(() => {
        setFiltroComentario([ ...filtroComentario, ...newComments ]);
    }, [newComments]);

    useEffect(() => {
        dispatch( agregandoNuevoComentario({ comentario, uid, displayName, displaySurname }) );
    }, [comentario]);
    
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
                                    alt={item1?.name_product}
                                />
                            </div>
                            <div className="detalle-item-imagen-diminuta">
                                {
                                    fotos.length > 0 &&

                                        fotos.map((foto, id) => {
                                            const fotoURL = `${urlEndpointImages}${foto?.link_image}`;
                                            return <div
                                                key={id}
                                                className="detalle-item-diminuta-img"
                                                style={{ marginLeft: '15px' }}
                                                onClick={() => cambiarImagen(fotoURL)}
                                            >
                                                <img
                                                    className="detalle-item-imagen-img-diminuta"
                                                    src={fotoURL}
                                                    alt={foto.id_image}
                                                />
                                            </div>
                                        })
                                }
                            </div>
                        </div>
                        <div className="detalle-item-detalle">
                            <div className="detalle-item-titulo-nombre">
                                {item1?.name_product}
                            </div>
                            <div className="detalle-item-tabla">
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>Categoria:</b> {item1?.name_category}</ListGroup.Item>
                                    {
                                        item1?.id_category_product == 3
                                        ?
                                        <>
                                            <ListGroup.Item><b>Ubicación:</b> {item1?.name_country}</ListGroup.Item>
                                            <ListGroup.Item><b>Ciudad:</b> {item1?.name_city}</ListGroup.Item>
                                        </>
                                        :
                                        ""
                                    }
                                    <ListGroup.Item><b>Tipo:</b> {item1?.name_type}</ListGroup.Item>
                                    {
                                        item1?.id_category_product == 1
                                        ?
                                        <ListGroup.Item><b>Marca:</b> {item1?.name_mark}</ListGroup.Item>
                                        :
                                        ""
                                    }
                                    <ListGroup.Item><b>Calificacion</b><MostrarCalificacion calificacion={parseFloat(item1?.score_product)} /></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>

                    </div>
                    <div className="detalle-item-calificacion-total">
                        <div className="detalle-item-calificacion-total-bloque">
                            <div className="detalle-item-calificacion-encabezado" onClick={ mostrarTodosComentarios }>
                                <div className="detalle-item-calificacion-num">
                                    { item1?.score_product }
                                </div>
                                <div className="detalle-item-calificacion-stars-bloque">
                                    <div className="detalle-item-calificacion-total-total">
                                        { totalComments1 } calificaciones en total
                                    </div>
                                    <div className="detalle-item-calificacion-stars">
                                        <MostrarCalificacion calificacion={ parseFloat(item1?.score_product) } />
                                    </div>
                                </div>
                            </div>
                            <div className="detalle-item-calificacion-contenido">
                                <div 
                                    className="detalle-item-calificacion-numero-de-estrellas" 
                                    onClick={ () => filtrarComentarios(5) }
                                >
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ porcentaje5 }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        5 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(4) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ porcentaje4 }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        4 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(3) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ porcentaje3 }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        3 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(2) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ porcentaje2 }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        2 <BsStarFill />
                                    </div>
                                </div>
                                <div className="detalle-item-calificacion-numero-de-estrellas" onClick={ () => filtrarComentarios(1) }>
                                    <div className="detalle-item-calificacion-barra">
                                        <BarraProgreso porcentaje={ `${ porcentaje1 }%` } />
                                    </div>
                                    <div className="detalle-item-calificacion-estrella">
                                        1 <BsStarFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detalle-item-bloque-textarea">
                        <div className="detalle-item-space-textarea">
                            <textarea 
                                onKeyUp={ resizeTextarea }
                                name="comentario"
                                value={ comentario }
                                onChange={ onInputChange }
                                className="detalle-item-textarea"
                                placeholder={
                                    status === 'authenticated'
                                    ?
                                    "Deja tu comentario..."
                                    :
                                    "Debes iniciar sesión para dejar un comentario...."
                                }
                                readOnly={
                                    status === 'authenticated'
                                    ?
                                    false
                                    :
                                    true
                                }
                            ></textarea>
                        </div>
                        <div className="detalle-item-space-boton">
                            <div className="detalle-item-boton" onClick={ saveNewComment }>
                                { status === 'authenticated' ? <BotonGuardar /> : <BotonLogin /> }
                            </div>
                        </div>
                    </div>
                    {
                        status === 'authenticated'
                        ?
                        <>
                            <div className="detalle-item-space-calificacion">
                                <div className="detalle-item-calificacion-user">
                                    <CalificacionComponent nuevaCalificacion={ nuevaCalificacion } />
                                </div>
                            </div>
                        </>
                        :
                        ""
                    }
                    <div className="detalle-item-coments">
                        <div className="detalle-item-coments-titulo">
                            Comentarios
                        </div>
                        {
                            filtroComentario.map((coment, id) => {
                                ubicacionComent = !ubicacionComent;
                                
                                const arrayDate = coment.date_created_comment.split('-');
                                const year = arrayDate[0];
                                const month = arrayDate[1];
                                const day = arrayDate[2];
                                
                                const event = new Date(year, month-1, day);
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                const dateFormat = event.toLocaleDateString('es-CO', options);

                                return <div className={ ubicacionComent ? "detalle-item-comentario-right" : "detalle-item-comentario-left" } key={ id }>
                                    <div className="detalle-item-comentario-user">
                                        <div className="detalle-item-user-circulo">
                                            { coment.name_user[0] }
                                        </div>
                                    </div>
                                    <div className="detalle-item-comentario-bloque">
                                        <div className={ ubicacionComent ? "detalle-item-comentario-text-right" : "detalle-item-comentario-text-left" }>
                                            <div className="detalle-item-comentario-nombre-user">
                                                { coment.name_user }
                                            </div>
                                            <div className="detalle-item-comentario-text-user">
                                                { coment.text_comment }
                                            </div>
                                            <div className="detalle-item-comentario-calificacion-user">
                                                <MostrarCalificacion calificacion={ parseFloat(coment.score_comment) } />
                                            </div>
                                        </div>
                                        <div className="detalle-item-comentario-fecha">
                                            { dateFormat }
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
