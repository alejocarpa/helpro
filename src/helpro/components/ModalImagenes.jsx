import { useEffect, useState } from 'react';
import { urlEndpointImages } from '../../helpers';
import './ModalImagenes.css';

export const ModalImagenes = ({ fotos = [], item1 = {}, desplegarModal, imagenAmpliadaClikeada }) => {
    
    const [foto1] = fotos;

    const [imagenAmpliada, setImagenAmpliada] = useState(imagenAmpliadaClikeada);
    

    const cambiarImagen = (imagenURL) => {
        setImagenAmpliada(imagenURL);
    }

    useEffect(() => {
        setImagenAmpliada(`${urlEndpointImages}/${foto1?.link_image}`);
    }, [ fotos ])
    
    useEffect(() => {
        setImagenAmpliada( imagenAmpliadaClikeada );
    }, [ imagenAmpliadaClikeada ])

    return (
        <div className="modal-imagenes-container">
            <div className="modal-imagenes-elements" >
                <div className="modal-imagenes-cerrar">
                    <div className="modal-imagenes-boton-cerrar" onClick={ desplegarModal }>
                        X
                    </div>
                </div>
                <div className="modal-imagenes-imagen-ampliada">
                    <img
                        className="modal-imagenes-imagen-img-ampliada"
                        src={ imagenAmpliada }
                        alt={ imagenAmpliada }
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
        </div>
    )
}
