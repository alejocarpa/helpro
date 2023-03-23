import { useNavigate } from 'react-router-dom';
import './ItemBusqueda.css';

export const ItemBusqueda = ({ data }) => {

    const navigate = useNavigate();

    const openSearchItem = ( nombreItem ) => {
        navigate(`/loading/${ nombreItem }`);
    }

    return (
        <div className="item-container">
            {
                data
                    ? data.map((item, id) => (
                        <div 
                            className="item-elements animate__animated animate__zoomIn" 
                            key={item.id} 
                            id={`item${id}`} 
                            aria_label={ item.nombre }
                            onClick={ () => openSearchItem( item.nombre ) }
                        >
                            <div className="item-imagen">
                                <img
                                    src={item.ImagenURL}
                                    width="40px"
                                    height="40px"
                                    alt="MDN"
                                />
                            </div>
                            <div className="item-nombre">{item.nombre}</div>
                            <div className="item-tipo">{item.tipo}</div>
                        </div>
                    ))
                    : ""
            }
        </div>
    )
}
