import { useNavigate } from 'react-router-dom';
import './FichaProducto.css';
import { MostrarCalificacion } from "./MostrarCalificacion";
import { urlEndpointImages } from '../../helpers';

export const FichaProducto = ({ item }) => {

    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/helpro/item/${ item.id_product }` );
    }

    return (
        <>
            <div className="ficha-producto-container">
                <div className="ficha-producto-elements" onClick={ openItem }>
                    <div className="ficha-producto-imagen">
                        <img
                            className="ficha-producto-imagen-img"
                            src={`${urlEndpointImages}/${item.id_product}/${item.image_product}`}
                            alt={item.name_product}
                        />
                    </div>
                    <div className="ficha-producto-detalle">
                        <div className="ficha-producto-detalle-nombre">
                            {item.name_product}
                        </div>
                        <div className="ficha-producto-detalle-categoria">
                            {item.name_category}
                        </div>
                        <div className="ficha-producto-detalle-tipo">
                            Tipo: {item.name_type}
                        </div>
                        <div className="ficha-producto-detalle-calificacion">
                            <MostrarCalificacion calificacion={ parseFloat(item.score_product) } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
