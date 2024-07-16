import './CardProducto.css';
import { MostrarCalificacion } from './';
import { useNavigate } from 'react-router-dom';
import { urlEndpointImages } from '../../helpers';

import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { CiShop } from "react-icons/ci";

export const CardProducto = ({ item }) => {
    
    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/helpro/item/${ item.id_product }` );
    }

    const srcImage = `${urlEndpointImages}/${item.id_product}${item.image_product}`;
    
    return (
        <>
            <div className="cardproduct-container">
                <div className={ item?.score_product == 5 ? "cardproduct-elements-maximo" : "cardproduct-elements" } onClick={ openItem }>
                    <div className="cardproduct-imagen">
                        <img className="cardproduct-imagen-img" src={ srcImage } alt={ item.name_product } />
                    </div>
                    <div className="cardproduct-detalle">
                        <div className="cardproduct-titulo">
                            { item.name_product }
                        </div>
                        {
                            item.id_category_product == 3
                            &&
                            <>
                                <span className='cardproduct-ubicacion'>
                                    <FaMapMarkerAlt />&nbsp;{ `${ item.name_city }, ${ item.name_country }` }
                                </span>
                                <span className='cardproduct-ubicacion'><CiShop />&nbsp;Sede { item.name_campus }</span>
                            </>
                        }
                        {
                            item.id_category_product == 1
                            &&
                            <span className='cardproduct-ubicacion'>
                                <MdLabelImportantOutline />&nbsp;{ `${ item.name_mark }` }
                            </span>
                        }
                        <div className="cardproduct-calificacion">
                            <MostrarCalificacion calificacion={ parseFloat( item.score_product ) } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
