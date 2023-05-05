import { useNavigate } from 'react-router-dom';
import './ItemBusqueda.css';
import { urlEndpointImages } from '../../helpers';

export const ItemBusqueda = ({ data }) => {

    const navigate = useNavigate();

    const openSearchItem = ( nombreItem ) => {
        navigate(`/loading/${ nombreItem }`);
    }

    return (
        <div className="item-container">
            {
                data
                    ? data.map((item, id) => {
                        const urlImage = `${urlEndpointImages}/${item.id_product}/${item.image_product}`
                        return <div 
                            className="item-elements animate__animated animate__zoomIn" 
                            key={item.id_product} 
                            id={`item${id}`} 
                            aria_label={ item.name_product }
                            onClick={ () => openSearchItem( item.name_product ) }
                        >
                            <div className="item-imagen">
                                <img
                                    src={urlImage}
                                    width="40px"
                                    height="40px"
                                    alt="MDN"
                                />
                            </div>
                            <div className="item-nombre">{item.name_product}</div>
                            <div className="item-tipo">{item.name_type}</div>
                        </div>
                    })
                    : ""
            }
        </div>
    )
}
