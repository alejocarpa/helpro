import { useNavigate } from 'react-router-dom';
import './FichaProducto.css';
import { MostrarCalificacion } from "./MostrarCalificacion";
import { urlEndpointImages } from '../../helpers';

import { FaMapMarkerAlt } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

export const FichaProducto = ({ item }) => {

    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/helpro/item/${ item.id_product }` );
    }
    
    return (
        <>
            <div className="ficha-producto-container">
                <div className={ item?.score_product == 5 ? "ficha-producto-elements-maximo" : "ficha-producto-elements" } onClick={ openItem }>
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
                        {
                            item.id_category_product == 3 || item.id_category_product == 5
                            ?
                            <>
                                <span className='ficha-producto-detalle-ubicacion'>
                                    <FaMapMarkerAlt />&nbsp;{ `${ item.name_city }, ${ item.name_country }` }
                                </span>
                                <span className='ficha-producto-detalle-ubicacion'><CiShop />&nbsp;Sede { item.name_campus }</span>
                            </>
                            :
                            ""
                        }
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
