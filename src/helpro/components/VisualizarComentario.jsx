import { MostrarCalificacion } from './MostrarCalificacion';
import { MdModeEditOutline } from "react-icons/md";
import './VisualizarComentario.css';

export const VisualizarComentario = ({ commentUser, cambiarCalificacion }) => {


    return (
        <div className="visualizar-container">
            <div className="visualizar-elements">
                {
                    commentUser.map((coment, id) => {

                        const arrayDate = coment.date_updated_comment.split('-');
                        const arrayDay = arrayDate[2].split(' ');

                        const year = arrayDate[0];
                        const month = arrayDate[1];
                        const day = arrayDay[0];
                        
                        const event = new Date(year, month-1, day);
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        const dateFormat = event.toLocaleDateString('es-CO', options);

                        return <div className="visualizar-comentario-left" key={ id }>
                            <div className="detalle-item-comentario-user">
                                <div className="detalle-item-user-circulo">
                                    { coment.name_user[0] }
                                </div>
                            </div>
                            <div className="visualizar-comentario-bloque">
                                <div className="visualizar-comentario-text">
                                    <div className="visualizar-comentario-editar" onClick={ cambiarCalificacion }>
                                        <MdModeEditOutline /> Editar
                                    </div>
                                    <div className="visualizar-comentario-nombre-user">
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
    )
}
