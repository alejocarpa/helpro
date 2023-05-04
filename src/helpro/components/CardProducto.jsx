import './CardProducto.css';
import { MostrarCalificacion } from './';
import { useNavigate } from 'react-router-dom';
import { urlEndpointImages } from '../../helpers';

export const CardProducto = ({ item }) => {

    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/item/${ item.id_product }` );
    }

    const srcImage = `${urlEndpointImages}/${item.id_product}${item.image_product}`;

    return (
        <>
            <div className="cardproduct-container">
                <div className="cardproduct-elements" onClick={ openItem }>
                    <div className="cardproduct-imagen">
                        <img className="cardproduct-imagen-img" src={ srcImage } alt={ item.name_product } />
                    </div>
                    <div className="cardproduct-detalle">
                        <div className="cardproduct-titulo">
                            { item.name_product }
                        </div>
                        <div className="cardproduct-calificacion">
                            <MostrarCalificacion calificacion={ parseFloat( item.score_product ) } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
