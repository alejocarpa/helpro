import { useEffect } from 'react';
import { BotonGuardar } from '../layout';
import './EditarComentario.css';
import { CalificacionComponent } from './CalificacionComponent';

export const EditarComentario = ({ 
    onInputChange,
    resizeTextarea,
    updateComment,
    commentUser,
    comentario,
    nuevaCalificacion
}) => {
    
    useEffect(() => {

        onInputChange({ target: { name: 'comentario', value: commentUser[0].text_comment }});
    }, []);
    
    return (
        <div className="editar-comentario-container">
            <div className="editar-comentario-elements">
                <div className="editar-comentario-bloque-area-comentario">
                    <div className="detalle-item-space-textarea">
                        <textarea 
                            onKeyUp={ resizeTextarea }
                            name="comentario"
                            value={ comentario }
                            onChange={ onInputChange }
                            className="detalle-item-textarea"
                            placeholder="Deja tu comentario..."
                            autoFocus={ true }
                        ></textarea>
                    </div>
                    <div className="detalle-item-space-boton">
                        <div className="detalle-item-boton" onClick={ () => updateComment( commentUser[0].id_comment ) }>
                            <BotonGuardar />
                        </div>
                    </div>
                </div>
                <div className="detalle-item-space-calificacion">
                    <div className="detalle-item-calificacion-user">
                        <CalificacionComponent nuevaCalificacion={ nuevaCalificacion } />
                    </div>
                </div>
            </div>
        </div>
    )
}
